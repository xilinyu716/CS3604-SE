;(function(){
  var input = document.getElementById('search-input')
  var btn = document.querySelector('.search-btn')
  var down = document.querySelector('.search-down')
  var list = document.querySelector('.search-down-list')
  var historyBox = document.querySelector('.search-history')
  var historyList = document.querySelector('.search-history-list')
  var clearBtn = document.querySelector('.history-clear')
  var history = []
  var currentIndex = -1
  var jsonpTimer = null
  try{
    var raw = localStorage.getItem('search_history')
    if(raw){ history = JSON.parse(raw) || [] }
  }catch(e){}
  function pushHistory(item){
    history.unshift(item)
    history = history.slice(0,10)
    renderHistory()
    try{ localStorage.setItem('search_history', JSON.stringify(history)) }catch(e){}
  }
  function renderHistory(){
    if(!historyList) return
    historyList.innerHTML = ''
    history.forEach(function(h){
      var li = document.createElement('li')
      li.textContent = h.text
      li.setAttribute('data-url',h.url)
      historyList.appendChild(li)
    })
  }
  function showHistory(){
    if(!historyBox) return
    historyBox.style.display = history.length>0 ? 'block' : 'none'
  }
  function hideHistory(){
    if(historyBox) historyBox.style.display = 'none'
  }
  function renderList(items){
    if(!list) return
    list.innerHTML = ''
    items.forEach(function(it){
      var li = document.createElement('li')
      var i = document.createElement('i')
      var icon = it.icon || 'icon-huochepiao'
      i.className = 'icon ' + icon
      var span = document.createElement('span')
      span.className = 'list-txt'
      li.appendChild(i)
      var q = input ? input.value.trim() : ''
      var txt = it.text
      if(q){
        var k = q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')
        var re = new RegExp(k,'ig')
        txt = txt.replace(re,function(m){return '<span class="highlight">'+m+'</span>'})
      }
      li.innerHTML += txt
      li.setAttribute('data-url',it.url)
      list.appendChild(li)
    })
    if(down) down.style.display = items.length>0 ? 'block' : 'none'
    currentIndex = -1
  }
  function querySuggestions(q){
    var s = (window.STATIONS||[]).filter(function(st){
      var p = st.pinyin.toUpperCase()
      var n = st.name.toUpperCase()
      var c = st.code.toUpperCase()
      var k = q.toUpperCase()
      return p.indexOf(k)>-1 || n.indexOf(k)>-1 || c.indexOf(k)>-1
    }).slice(0,8).map(function(st){
      return {text: st.name+' '+st.code, url: 'tickets.html?from='+encodeURIComponent(st.name), icon: 'icon-place'}
    })
    var base = []
    if(q){
      base = [
        {text:'车票 '+q,url:'tickets.html', icon:'icon-huochepiao'},
        {text:'正晚点 '+q,url:'info.html#onTime', icon:'icon-time'},
        {text:'起售时间 '+q,url:'info.html#saleTime', icon:'icon-time'},
        {text:'车站大屏 '+q,url:'info.html#board', icon:'icon-time'},
        {text:'时刻表 '+q,url:'info.html#schedule', icon:'icon-service'},
        {text:'代售点 '+q,url:'info.html#agency', icon:'icon-service'},
        {text:'问答 '+q,url:'help.html', icon:'icon-cycx'}
      ]
    }
    return s.concat(base)
  }
  function typeIcon(t){
    if(t==='001') return 'icon-huochepiao'
    if(t==='128') return 'icon-place'
    if(t==='129') return 'icon-service'
    if(t==='130') return 'icon-user'
    if(t==='131') return 'icon-order'
    return 'icon-cycx'
  }
  function anchorUrl(text){
    var t = (text||'')
    if(t.indexOf('正晚点')>-1 || t.indexOf('晚点')>-1) return 'info.html#onTime'
    if(t.indexOf('起售')>-1 || t.indexOf('开售')>-1) return 'info.html#saleTime'
    if(t.indexOf('大屏')>-1 || t.indexOf('到达')>-1 || t.indexOf('出发')>-1) return 'info.html#board'
    if(t.indexOf('时刻')>-1) return 'info.html#schedule'
    if(t.indexOf('代售')>-1) return 'info.html#agency'
    if(t.indexOf('票')>-1) return 'tickets.html'
    return 'index.html'
  }
  function jsonp(url, params, done, fail){
    try{
      var cbName = '__JSONP_SEARCH_CB_' + Date.now()
      var qs = []
      for(var k in params){ if(params.hasOwnProperty(k)){ qs.push(encodeURIComponent(k)+'='+encodeURIComponent(params[k])) } }
      qs.push('callback='+cbName)
      var src = url + (url.indexOf('?')>-1 ? '&' : '?') + qs.join('&')
      var script = document.createElement('script')
      var head = document.getElementsByTagName('head')[0] || document.body
      window[cbName] = function(res){
        if(jsonpTimer){ clearTimeout(jsonpTimer); jsonpTimer=null }
        try{ done && done(res) } finally {
          try{ delete window[cbName] }catch(e){ window[cbName]=undefined }
          if(script && script.parentNode) script.parentNode.removeChild(script)
        }
      }
      script.src = src
      head.appendChild(script)
      jsonpTimer = setTimeout(function(){
        try{ delete window[cbName] }catch(e){ window[cbName]=undefined }
        if(script && script.parentNode) script.parentNode.removeChild(script)
        fail && fail()
      }, 5000)
    }catch(e){ fail && fail() }
  }
  function remoteQuery(q, done, fail){
    if(!q){ fail && fail(); return }
    jsonp('https://search.12306.cn/search/v1/h5/search', { keyword: q }, function(res){
      var data = (res && res.data) || []
      var items = data.slice(0,10).map(function(it){
        return { text: it.word, url: it.url || anchorUrl(it.word||''), icon: typeIcon(it.type) }
      })
      if(items.length>0){ done(items) } else { fail && fail() }
    }, function(){ fail && fail() })
  }
  function handleSearch(){
    var q = input ? input.value.trim() : ''
    if(!q){
      renderList([])
      return
    }
    remoteQuery(q, function(items){ renderList(items) }, function(){
      var items = querySuggestions(q)
      renderList(items)
    })
  }
  if(input){
    input.addEventListener('focus',function(){
      showHistory()
    })
    input.addEventListener('blur',function(){
      setTimeout(function(){
        hideHistory()
      },100)
    })
    input.addEventListener('keyup',function(e){
      if(e.keyCode===38||e.keyCode===40){
        var items = Array.prototype.slice.call(list ? list.querySelectorAll('li') : [])
        if(items.length===0) return
        items.forEach(function(li){li.classList.remove('active')})
        if(e.keyCode===40){
          currentIndex = Math.min(items.length-1,currentIndex+1)
        }else{
          currentIndex = Math.max(0,currentIndex-1)
        }
        var cur = items[currentIndex]
        if(cur){
          cur.classList.add('active')
          var inputEl = document.getElementById('search-input')
          if(inputEl){
            inputEl.value = cur.textContent.trim()
          }
          try{ cur.scrollIntoView({block:'nearest'}) }catch(e){}
        }
        return
      }
      if(e.keyCode===13){
        var targetLi = null
        var items = Array.prototype.slice.call(list ? list.querySelectorAll('li') : [])
        if(items.length===0) return
        if(currentIndex>=0 && currentIndex<items.length){
          targetLi = items[currentIndex]
        }else{
          targetLi = items[0]
        }
        var url = targetLi.getAttribute('data-url')
        if(url){
          window.location.href = url
          var q = input ? input.value.trim() : ''
          pushHistory({text:q,url:url})
          if(input) input.value = ''
        }
        return
      }
      var skip = [16,37,39]
      if(skip.indexOf(e.keyCode)>-1) return
      handleSearch()
    })
  }
  if(btn){
    btn.addEventListener('click',function(){
      var q = input ? input.value.trim() : ''
      remoteQuery(q, function(items){
        renderList(items)
        var first = items[0]
        if(first){
          window.location.href = first.url
          pushHistory({text:q,url:first.url})
          if(input) input.value = ''
        }
      }, function(){
        var items = querySuggestions(q)
        renderList(items)
        var first = items[0]
        if(first){
          window.location.href = first.url
          pushHistory({text:q,url:first.url})
          if(input) input.value = ''
        }
      })
    })
  }
  if(list){
    list.addEventListener('click',function(e){
      var li = e.target.closest('li')
      if(!li) return
      var url = li.getAttribute('data-url')
      if(url){
        window.location.href = url
        pushHistory({text: li.textContent, url: url})
      }
    })
  }
  if(historyList){
    historyList.addEventListener('click',function(e){
      var li = e.target.closest('li')
      if(!li) return
      var url = li.getAttribute('data-url')
      if(url) window.location.href = url
    })
  }
  if(clearBtn){
    clearBtn.addEventListener('click',function(){
      history = []
      renderHistory()
      showHistory()
      try{ localStorage.removeItem('search_history') }catch(e){}
    })
  }
})()