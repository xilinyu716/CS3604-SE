;(function(){
  function pad(n){return n<10?'0'+n:n}
  function today(){var d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
  var otTrain = document.getElementById('otTrain')
  var otDate = document.getElementById('otDate')
  var otBtn = document.getElementById('otBtn')
  var otResult = document.getElementById('otResult')
  var stStation = document.getElementById('stStation')
  var stBtn = document.getElementById('stBtn')
  var stResult = document.getElementById('stResult')
  var scFrom = document.getElementById('scFrom')
  var scTo = document.getElementById('scTo')
  var scBtn = document.getElementById('scBtn')
  var scResult = document.getElementById('scResult')
  var agKey = document.getElementById('agKey')
  var agBtn = document.getElementById('agBtn')
  var agResult = document.getElementById('agResult')
  var onTimeData = null
  var saleTimeData = null
  var scheduleData = null
  var agencyData = null
  if(otDate && !otDate.value){ otDate.value = today() }
  function loadJSON(path, cb){
    try{
      var xhr = new XMLHttpRequest()
      xhr.open('GET', path, true)
      xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
          var data = null
          if(xhr.status===200){
            try{ data = JSON.parse(xhr.responseText) }catch(e){ data = null }
          }
          cb && cb(data)
        }
      }
      xhr.send()
    }catch(e){ cb && cb(null) }
  }
  function ensureOnTime(cb){ if(onTimeData){ cb(); return } loadJSON('assets/data/on_time.json', function(d){ onTimeData = d||[]; cb() }) }
  function ensureSaleTime(cb){ if(saleTimeData){ cb(); return } loadJSON('assets/data/sale_time.json', function(d){ saleTimeData = d||[]; cb() }) }
  function ensureSchedule(cb){ if(scheduleData){ cb(); return } loadJSON('assets/data/schedule.json', function(d){ scheduleData = d||[]; cb() }) }
  function ensureAgency(cb){ if(agencyData){ cb(); return } loadJSON('assets/data/agency.json', function(d){ agencyData = d||[]; cb() }) }
  function renderOnTime(items){
    if(!otResult) return
    otResult.innerHTML = ''
    if(items.length===0){ if(window.showToast) window.showToast('未查询到该车次当日信息','info'); return }
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
      t2.textContent = '状态：'+it.status
      d.appendChild(left); d.appendChild(mid); d.appendChild(t1); d.appendChild(t2)
      otResult.appendChild(d)
    })
  }
  function renderSaleTime(items){
    if(!stResult) return
    stResult.innerHTML = ''
    if(items.length===0){ if(window.showToast) window.showToast('未查询到该车站起售时间','info'); return }
    items.forEach(function(it){
      var d = document.createElement('div')
      d.className = 'train-item'
      var a = document.createElement('div')
      a.className = 'train-no'
      a.textContent = it.station
      var b = document.createElement('div')
      b.textContent = '开售：'+it.weekday+' '+it.start_time
      d.appendChild(a); d.appendChild(b)
      stResult.appendChild(d)
    })
  }
  function renderSchedule(items){
    if(!scResult) return
    scResult.innerHTML = ''
    if(items.length===0){ if(window.showToast) window.showToast('未查询到该线路时刻','info'); return }
    items.forEach(function(it){
      var d = document.createElement('div')
      d.className = 'train-item'
      var a = document.createElement('div')
      a.className = 'train-no'
      a.textContent = it.train
      var b = document.createElement('div')
      b.textContent = it.from+' '+it.start+' → '+it.to+' '+it.arrive
      var c = document.createElement('div')
      c.textContent = '历时：'+it.duration
      d.appendChild(a); d.appendChild(b); d.appendChild(c)
      scResult.appendChild(d)
    })
  }
  function renderAgency(items){
    if(!agResult) return
    agResult.innerHTML = ''
    if(items.length===0){ if(window.showToast) window.showToast('未查询到代售点信息','info'); return }
    items.forEach(function(it){
      var d = document.createElement('div')
      d.className = 'train-item'
      var a = document.createElement('div')
      a.className = 'train-no'
      a.textContent = it.name
      var b = document.createElement('div')
      b.textContent = it.city+' · '+it.station
      var c = document.createElement('div')
      c.textContent = it.address
      var e = document.createElement('div')
      e.textContent = '电话：'+(it.phone||'-')
      d.appendChild(a); d.appendChild(b); d.appendChild(c); d.appendChild(e)
      agResult.appendChild(d)
    })
  }
  function doOnTime(){
    var tr = otTrain ? otTrain.value.trim().toUpperCase() : ''
    var dt = otDate ? otDate.value : ''
    if(!tr || !dt){ if(window.showToast) window.showToast('请输入车次与日期','error'); return }
    ensureOnTime(function(){
      var list = (onTimeData||[]).filter(function(it){
        return (it.train||'').toUpperCase()===tr && (it.date||'')===dt
      })
      renderOnTime(list)
    })
  }
  function doSaleTime(){
    var st = stStation ? stStation.value.trim() : ''
    if(!st){ if(window.showToast) window.showToast('请输入车站名','error'); return }
    ensureSaleTime(function(){
      var s = st.toUpperCase()
      var list = (saleTimeData||[]).filter(function(it){
        var n = (it.station||'').toUpperCase()
        return n.indexOf(s)>-1
      })
      renderSaleTime(list)
    })
  }
  function doSchedule(){
    var f = scFrom ? scFrom.value.trim() : ''
    var t = scTo ? scTo.value.trim() : ''
    if(!f || !t){ if(window.showToast) window.showToast('请输入出发与到达站','error'); return }
    ensureSchedule(function(){
      var F = f.toUpperCase(), T = t.toUpperCase()
      var list = (scheduleData||[]).filter(function(it){
        return (it.from||'').toUpperCase().indexOf(F)>-1 && (it.to||'').toUpperCase().indexOf(T)>-1
      })
      renderSchedule(list)
    })
  }
  function doAgency(){
    var k = agKey ? agKey.value.trim() : ''
    if(!k){ if(window.showToast) window.showToast('请输入城市或车站','error'); return }
    ensureAgency(function(){
      var K = k.toUpperCase()
      var list = (agencyData||[]).filter(function(it){
        return (it.city||'').toUpperCase().indexOf(K)>-1 || (it.station||'').toUpperCase().indexOf(K)>-1
      })
      renderAgency(list)
    })
  }
  if(otBtn) otBtn.addEventListener('click', doOnTime)
  if(stBtn) stBtn.addEventListener('click', doSaleTime)
  if(scBtn) scBtn.addEventListener('click', doSchedule)
  if(agBtn) agBtn.addEventListener('click', doAgency)
  if(stStation){
    stStation.addEventListener('input', function(){
      var val = stStation.value.trim()
      if(!val) return
      var k = val.toUpperCase()
      var it = (window.STATIONS||[]).filter(function(s){
        return s.name.toUpperCase().indexOf(k)>-1 || s.pinyin.toUpperCase().indexOf(k)>-1 || s.code.toUpperCase().indexOf(k)>-1
      }).slice(0,6)
      var dl = document.getElementById('stations_datalist')
      if(dl){
        dl.innerHTML = ''
        it.forEach(function(s){
          var opt = document.createElement('option')
          opt.value = s.name
          dl.appendChild(opt)
        })
      }
    })
  }
})()