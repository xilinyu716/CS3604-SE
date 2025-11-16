;(function(){
  function qs(name){
    var s = location.search.replace(/^\?/,'').split('&').filter(Boolean)
    for(var i=0;i<s.length;i++){var kv=s[i].split('=');if(kv[0]===name) return decodeURIComponent(kv[1]||'')}
    return ''
  }
  var fromInput = document.getElementById('fromStation')||document.getElementById('qFrom')
  var toInput = document.getElementById('toStation')||document.getElementById('qTo')
  var dateInput = document.getElementById('goDate')||document.getElementById('qDate')
  var btn = document.getElementById('goQuery')||document.getElementById('qBtn')
  var suggestBox = document.getElementById('stationSuggest')||document.getElementById('qSuggest')
  var resultList = document.getElementById('resultList')
  var trainFilter = document.querySelectorAll('.filters [data-train]')
  var seatFilter = document.querySelectorAll('.filters [data-seat]')
  var passengerFilter = document.querySelectorAll('.filters [data-passenger]')
  var extraFilter = document.querySelectorAll('.filters [data-extra]')
  var sortFilter = document.querySelectorAll('.filters [data-sort]')
  var resetBtn = document.getElementById('resetFilters')
  var selectedTrainType = 'all'
  var selectedSeats = []
  var dataset = null
  var isStudent = false
  var allowedForStudent = ['二等座','硬座','硬卧','无座']
  var onlyAvailable = false
  var sortBy = 'none'
  function nowStr(){
    var d = new Date()
    var m = d.getMonth()+1
    var day = d.getDate()
    function pad(n){return n<10?'0'+n:n}
    return d.getFullYear()+'-'+pad(m)+'-'+pad(day)
  }
  if(dateInput && !dateInput.value) dateInput.value = nowStr()
  if(dateInput){
    dateInput.min = nowStr()
    function addDaysStr(n){
      var d = new Date(); d.setDate(d.getDate()+n)
      var m = d.getMonth()+1; var day = d.getDate()
      function pad(x){return x<10?'0'+x:x}
      return d.getFullYear()+'-'+pad(m)+'-'+pad(day)
    }
    dateInput.max = addDaysStr(30)
  }
  function renderSuggest(target,val){
    if(!suggestBox) return
    if(!val){suggestBox.style.display='none';suggestBox.innerHTML='';return}
    var it = (window.STATIONS||[]).filter(function(s){
      var k = val.toUpperCase()
      return s.name.toUpperCase().indexOf(k)>-1 || s.pinyin.toUpperCase().indexOf(k)>-1 || s.code.toUpperCase().indexOf(k)>-1
    }).slice(0,8)
    if(it.length===0){suggestBox.style.display='none';suggestBox.innerHTML='';return}
    var ul = document.createElement('ul')
    it.forEach(function(s){
      var li = document.createElement('li')
      li.textContent = s.name+' '+s.code
      li.addEventListener('click',function(){
        target.value = s.name
        suggestBox.style.display='none'
      })
      ul.appendChild(li)
    })
    suggestBox.innerHTML=''
    suggestBox.appendChild(ul)
    suggestBox.style.display='block'
  }
  function bindInput(inp){
    if(!inp) return
    inp.addEventListener('input',function(){renderSuggest(inp,inp.value)})
    inp.addEventListener('blur',function(){setTimeout(function(){suggestBox.style.display='none'},120)})
  }
  bindInput(fromInput)
  bindInput(toInput)
  var presetFrom = qs('from')
  if(presetFrom && fromInput) fromInput.value = presetFrom
  var sample = [
    {train:'G1',from:'北京',to:'上海虹桥',start:'08:00',arrive:'12:25',duration:'4:25',seats:{二等座:12,一等座:3,商务座:1}},
    {train:'G7',from:'北京南',to:'上海虹桥',start:'09:00',arrive:'13:20',duration:'4:20',seats:{二等座:0,一等座:2,商务座:0}},
    {train:'D232',from:'天津',to:'北京',start:'10:10',arrive:'11:05',duration:'0:55',seats:{二等座:40,一等座:12}},
    {train:'K123',from:'重庆',to:'贵阳',start:'21:00',arrive:'06:30',duration:'9:30',seats:{硬座:120,软卧:6}},
    {train:'G8311',from:'长沙南',to:'广州南',start:'14:15',arrive:'15:42',duration:'1:27',seats:{二等座:23,一等座:7}},
    {train:'G502',from:'北京西',to:'重庆西',start:'07:10',arrive:'18:45',duration:'11:35',seats:{二等座:9,一等座:0}}
  ]
  function loadTickets(done){
    try{
      var xhr = new XMLHttpRequest()
      xhr.open('GET','assets/data/tickets.json',true)
      xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
          if(xhr.status===200){
            try{ dataset = JSON.parse(xhr.responseText) }catch(e){ dataset = null }
          }
          done && done()
        }
      }
      xhr.send()
    }catch(e){ done && done() }
  }
  function applyFilters(items){
    var list = items.filter(function(it){
      var ok = true
      if(selectedTrainType!=='all') ok = ok && it.train.indexOf(selectedTrainType)===0
      if(selectedSeats.length>0){
        ok = ok && selectedSeats.some(function(s){ return (it.seats[s]||0)>0 })
      }
      if(isStudent){
        var hasAllowed = Object.keys(it.seats).some(function(s){ return allowedForStudent.indexOf(s)>-1 && (it.seats[s]||0)>0 })
        ok = ok && hasAllowed
      }
      if(onlyAvailable){
        var total = 0
        Object.keys(it.seats).forEach(function(k){ total += (it.seats[k]||0) })
        ok = ok && total>0
      }
      return ok
    })
    if(sortBy==='start'){
      list.sort(function(a,b){ return (a.start||'').localeCompare(b.start||'') })
    }
    return list
  }
  function renderResults(items){
    if(!resultList) return
    resultList.innerHTML = ''
    items.forEach(function(it){
      var d = document.createElement('div')
      d.className = 'train-item'
      var left = document.createElement('div')
      left.className = 'train-no'
      left.textContent = it.train
      var mid = document.createElement('div')
      mid.textContent = it.from+' → '+it.to
      var t1 = document.createElement('div')
      t1.textContent = it.start+' 出发'
      var t2 = document.createElement('div')
      t2.textContent = it.arrive+' 到达'
      var seats = document.createElement('div')
      seats.className = 'seat-info'
      var sText = Object.keys(it.seats).map(function(k){return k+':'+it.seats[k]}).join('  ')
      seats.textContent = sText
      var btn = document.createElement('button')
      btn.className = 'btn-primary buy-btn'
      btn.textContent = '预订'
      var total = 0
      Object.keys(it.seats).forEach(function(k){ total += it.seats[k] })
      if(total<=0){ btn.disabled = true }
      btn.addEventListener('click',function(){
        var user = sessionStorage.getItem('user')
        if(!user){ window.location.href = 'login.html'; return }
        if(window.showToast){ window.showToast('已加入预订清单','success') }
      })
      d.appendChild(left)
      d.appendChild(mid)
      d.appendChild(t1)
      d.appendChild(t2)
      d.appendChild(seats)
      d.appendChild(btn)
      resultList.appendChild(d)
    })
  }
  function doQuery(){
    var f = fromInput ? fromInput.value.trim() : ''
    var t = toInput ? toInput.value.trim() : ''
    if(!resultList){
      var url = 'tickets.html'
      var qs = []
      if(f) qs.push('from='+encodeURIComponent(f))
      if(t) qs.push('to='+encodeURIComponent(t))
      if(dateInput && dateInput.value) qs.push('date='+encodeURIComponent(dateInput.value))
      if(qs.length>0) url += '?' + qs.join('&')
      window.location.href = url
      return
    }
    var base = dataset || sample
    var items = base.filter(function(it){
      var ok = true
      if(f) ok = ok && it.from.indexOf(f)>-1
      if(t) ok = ok && it.to.indexOf(t)>-1
      return ok
    })
    renderResults(applyFilters(items))
  }
  if(btn) btn.addEventListener('click',doQuery)
  if(resultList && location.pathname.indexOf('tickets.html')>-1){
    loadTickets(function(){ renderResults(applyFilters((dataset||sample))) })
  }
  Array.prototype.forEach.call(trainFilter,function(p){
    p.addEventListener('click',function(){
      Array.prototype.forEach.call(trainFilter,function(x){x.classList.remove('active')})
      p.classList.add('active')
      selectedTrainType = p.getAttribute('data-train') || 'all'
      doQuery()
    })
  })
  Array.prototype.forEach.call(seatFilter,function(p){
    p.addEventListener('click',function(){
      var v = p.getAttribute('data-seat')
      if(isStudent && allowedForStudent.indexOf(v)===-1){ if(window.showToast){ window.showToast('学生票不可选该席别','error') } return }
      var i = selectedSeats.indexOf(v)
      if(i>=0){ selectedSeats.splice(i,1); p.classList.remove('active') }
      else{ selectedSeats.push(v); p.classList.add('active') }
      doQuery()
    })
  })
  Array.prototype.forEach.call(passengerFilter,function(p){
    p.addEventListener('click',function(){
      var v = p.getAttribute('data-passenger')
      var toggled = p.classList.contains('active')
      Array.prototype.forEach.call(passengerFilter,function(x){x.classList.remove('active')})
      if(v==='student' && !toggled){ p.classList.add('active'); isStudent = true }
      else { isStudent = false }
      selectedSeats = selectedSeats.filter(function(s){ return allowedForStudent.indexOf(s)>-1 || !isStudent })
      Array.prototype.forEach.call(seatFilter,function(el){
        var sv = el.getAttribute('data-seat')
        if(isStudent && allowedForStudent.indexOf(sv)===-1){ el.classList.remove('active') }
      })
      doQuery()
    })
  })
  Array.prototype.forEach.call(extraFilter,function(p){
    p.addEventListener('click',function(){
      var v = p.getAttribute('data-extra')
      var act = p.classList.contains('active')
      if(v==='available'){ if(act){ p.classList.remove('active'); onlyAvailable=false } else { p.classList.add('active'); onlyAvailable=true } }
      doQuery()
    })
  })
  Array.prototype.forEach.call(sortFilter,function(p){
    p.addEventListener('click',function(){
      Array.prototype.forEach.call(sortFilter,function(x){x.classList.remove('active')})
      p.classList.add('active')
      sortBy = p.getAttribute('data-sort') || 'none'
      doQuery()
    })
  })
  if(resetBtn){
    resetBtn.addEventListener('click',function(){
      selectedTrainType = 'all'
      selectedSeats = []
      isStudent = false
      onlyAvailable = false
      sortBy = 'none'
      Array.prototype.forEach.call(trainFilter,function(x){x.classList.remove('active')})
      var all = document.querySelector('.filters [data-train="all"]')
      if(all) all.classList.add('active')
      Array.prototype.forEach.call(seatFilter,function(x){x.classList.remove('active')})
      Array.prototype.forEach.call(passengerFilter,function(x){x.classList.remove('active')})
      Array.prototype.forEach.call(extraFilter,function(x){x.classList.remove('active')})
      Array.prototype.forEach.call(sortFilter,function(x){x.classList.remove('active')})
      doQuery()
    })
  }
})()