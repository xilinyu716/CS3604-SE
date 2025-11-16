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
      i.className = 'icon icon-huochepiao'
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
      return {text: st.name+' '+st.code, url: 'tickets.html?from='+encodeURIComponent(st.name)}
    })
    var base = []
    if(q){
      base = [
        {text:'车票 '+q,url:'tickets.html'},
        {text:'正晚点 '+q,url:'info.html'},
        {text:'起售时间 '+q,url:'info.html'},
        {text:'问答 '+q,url:'help.html'}
      ]
    }
    return s.concat(base)
  }
  function handleSearch(){
    var q = input ? input.value.trim() : ''
    if(!q){
      renderList([])
      return
    }
    var items = querySuggestions(q)
    renderList(items)
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
      var items = querySuggestions(q)
      renderList(items)
      var first = items[0]
      if(first){
        window.location.href = first.url
        pushHistory({text:q,url:first.url})
        if(input) input.value = ''
      }
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