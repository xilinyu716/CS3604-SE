window.STATIONS = [
  {code:'BJP',name:'北京',pinyin:'beijing'},
  {code:'VNP',name:'北京南',pinyin:'beijingnan'},
  {code:'BXP',name:'北京西',pinyin:'beijingxi'},
  {code:'BOP',name:'北京东',pinyin:'beijingdong'},
  {code:'IFP',name:'北京朝阳',pinyin:'beijingchaoyang'},
  {code:'SHH',name:'上海',pinyin:'shanghai'},
  {code:'AOH',name:'上海虹桥',pinyin:'shanghaihongqiao'},
  {code:'SNH',name:'上海南',pinyin:'shanghainan'},
  {code:'SXH',name:'上海西',pinyin:'shanghaixi'},
  {code:'GZQ',name:'广州',pinyin:'guangzhou'},
  {code:'IZQ',name:'广州南',pinyin:'guangzhounan'},
  {code:'QQQ',name:'广州东',pinyin:'guangzhoudong'},
  {code:'CSQ',name:'长沙',pinyin:'changsha'},
  {code:'CWQ',name:'长沙南',pinyin:'changshanan'},
  {code:'GIW',name:'贵阳',pinyin:'guiyang'},
  {code:'KQW',name:'贵阳北',pinyin:'guiyangbei'},
  {code:'CQW',name:'重庆',pinyin:'chongqing'},
  {code:'CXW',name:'重庆西',pinyin:'chongqingxi'},
  {code:'CUW',name:'重庆北',pinyin:'chongqingbei'},
  {code:'TJP',name:'天津',pinyin:'tianjin'},
  {code:'TBP',name:'天津北',pinyin:'tianjinbei'},
  {code:'TXP',name:'天津西',pinyin:'tianjinxi'},
  {code:'TIP',name:'天津南',pinyin:'tianjinnan'},
  {code:'NJH',name:'南京',pinyin:'nanjing'},
  {code:'NKH',name:'南京南',pinyin:'nanjingnan'},
  {code:'HZH',name:'杭州',pinyin:'hangzhou'},
  {code:'HGH',name:'杭州东',pinyin:'hangzhoudong'},
  {code:'XAY',name:'西安',pinyin:'xian'},
  {code:'XAF',name:'西安北',pinyin:'xianbei'},
  {code:'CDW',name:'成都',pinyin:'chengdu'},
  {code:'ICW',name:'成都东',pinyin:'chengdudong'},
  {code:'CNW',name:'成都南',pinyin:'chengdunan'},
  {code:'CMW',name:'成都西',pinyin:'chengduxi'},
  {code:'NNZ',name:'南宁',pinyin:'nanning'},
  {code:'NAZ',name:'南宁东',pinyin:'nanningdong'},
  {code:'KMM',name:'昆明',pinyin:'kunming'},
  {code:'KMQ',name:'昆明南',pinyin:'kunmingnan'},
  {code:'SYT',name:'沈阳',pinyin:'shenyang'},
  {code:'SBT',name:'沈阳北',pinyin:'shenyangbei'},
  {code:'JNK',name:'济南',pinyin:'jinan'},
  {code:'JNG',name:'济南西',pinyin:'jinanxi'},
  {code:'DLT',name:'大连',pinyin:'dalian'},
  {code:'WHN',name:'武汉',pinyin:'wuhan'},
  {code:'XCN',name:'深圳',pinyin:'shenzhen'},
  {code:'IOQ',name:'深圳北',pinyin:'shenzhenbei'},
  {code:'ZHQ',name:'珠海',pinyin:'zhuhai'}
]

;(function(){
  try{
    var xhr = new XMLHttpRequest()
    xhr.open('GET','assets/data/stations.json',true)
    xhr.onreadystatechange = function(){
      if(xhr.readyState===4 && xhr.status===200){
        try{
          var data = JSON.parse(xhr.responseText)
          if(Array.isArray(data)){
            var seen = {}
            var merged = data.concat(window.STATIONS||[]).filter(function(s){
              var key = (s.code||'')+'|'+(s.name||'')
              if(!s.code || !s.name || !s.pinyin) return false
              if(seen[key]) return false
              seen[key] = true
              return true
            })
            window.STATIONS = merged
          }
        }catch(e){}
      }
    }
    xhr.send()
  }catch(e){}
})()