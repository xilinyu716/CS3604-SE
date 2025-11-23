
 var esdRoute = {};
 esdRoute.serverUrl = 'https://kyfw.12306.cn/otn/resources/route/';
 esdRoute.currentPath = 'kyfw.12306.cn/';
 esdRoute.routeArray = [{'isDir':false,'fileName':'www.12306.cn','isTempLate':false},{'isDir':true,'fileName':'index','isTempLate':false},{'isDir':true,'fileName':'otn','isTempLate':false}];
 var tempLocationHref = '';
 if (location.href.split('//').length >= 3) {
 	var tempLHArr = location.href.split('//');
 	for (var tlh_i = 0; tlh_i < tempLHArr.length; tlh_i++) {
 		if (tlh_i == 0) {
 			tempLocationHref += tempLHArr[tlh_i] + '//';
 		} else {
 			tempLocationHref += tempLHArr[tlh_i] + '/';
 		}
 	}
 } else {
 	tempLocationHref = location.href;
 }
 esdRoute.esdPageCurrentPath = tempLocationHref.split(esdRoute.currentPath)[1].split('/')[0];
 esdRoute.routeFlag = false;
 for(var i=0;i<esdRoute.routeArray.length;i++){
 	var tempObj = esdRoute.routeArray[i];
 	if(esdRoute.esdPageCurrentPath==''){
 		esdRoute.esdPageCurrentPath  = esdRoute.currentPath.split('/')[0];
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf('?')>-1) {
 		var tempArr = esdRoute.esdPageCurrentPath.split('?');
 		var tempStr = '';
 		for(var j=0; j<tempArr.length; j++){
 			tempStr = tempStr+tempArr[j];
 			if(j<tempArr.length-1){
 				tempStr = tempStr+'_';
 			}
 		}
 		esdRoute.esdPageCurrentPath = tempStr;
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf(':')>-1) {
 		var tempArr = esdRoute.esdPageCurrentPath.split(':');
 		var tempStr = '';
 		for(var k=0; k<tempArr.length; k++){
 			tempStr = tempStr+tempArr[k];
 			if(k<tempArr.length-1){
 				tempStr = tempStr+'_';
 			}
 		}
 		esdRoute.esdPageCurrentPath = tempStr;
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf('*')>-1) {
 		var tempArr = esdRoute.esdPageCurrentPath.split('*');
 		var tempStr = '';
 		for(var m=0; m<tempArr.length; m++){
 			tempStr = tempStr+tempArr[m];
 			if(m<tempArr.length-1){
 				tempStr = tempStr+'_';
 			}
 		}
 		esdRoute.esdPageCurrentPath = tempStr;
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf('|')>-1) {
 		var tempArr = esdRoute.esdPageCurrentPath.split('|');
 		var tempStr = '';
 		for(var n=0; n<tempArr.length; n++){
 			tempStr = tempStr+tempArr[n];
 			if(n<tempArr.length-1){
 				tempStr = tempStr+'_';
 			}
 		}
 		esdRoute.esdPageCurrentPath = tempStr;
 	}
 	if(esdRoute.esdPageCurrentPath.indexOf(tempObj.fileName)>-1){
 		esdRoute.routeFlag = true;
 		var esd_index = location.href.split('/')[2];
 		var esd_js = document.createElement('script');
 		esd_js.setAttribute('type', 'text/javascript');
 		if(tempObj.isDir==true){
 			esd_js.setAttribute('src', esdRoute.serverUrl+esdRoute.currentPath+esdRoute.esdPageCurrentPath+'/route.js');
 		}else{
 			esd_js.setAttribute('src', esdRoute.serverUrl+esdRoute.currentPath+tempObj.fileName+'.js');
 		}
 		esd_js.setAttribute('charset', 'utf-8');
 		document.body.appendChild(esd_js);
 		break;
 	}
 }
 if(esdRoute.routeFlag == false){ 
 	var flag = false; 
 	for(var j=0;j<esdRoute.routeArray.length;j++){ 
 	  var tempObj = esdRoute.routeArray[j]; 
      if(tempObj.isTempLate){ 
 		flag = true; 
         var esd_js = document.createElement('script'); 
 		esd_js.setAttribute('type', 'text/javascript'); 
 		esd_js.setAttribute('src', esdRoute.serverUrl+esdRoute.currentPath+'template.js'); 
 		esd_js.setAttribute('charset', 'utf-8'); 
 		document.body.appendChild(esd_js); 
      } 
 	} 
 	if (flag == false) { 
 		window.esdDTGZ = {}; 
 		window.esdDTGZ.init = '准备开始'; 
 	} 
 } 

try{
	var esdTipLink1 = document.createElement("a");
	esdTipLink1.setAttribute("href","javascript:void(0);");
	esdTipLink1.appendChild(document.createTextNode("新窗口打开无障碍说明页面,按Alt加波浪键打开导盲模式"));
	esdTipLink1.tabIndex="7";
	esdTipLink1.id="esdTipLink1";
	esdTipLink1.style.setProperty("max-width","0px","important");
	esdTipLink1.style.setProperty("float","left","important");
	esdTipLink1.style.setProperty("border","0px","important");
	esdTipLink1.style.setProperty("padding","0px","important");
	esdTipLink1.style.setProperty("margin","0px","important");
	esdTipLink1.style.setProperty("width","0px","important");
	esdTipLink1.style.setProperty("height","0px","important");
	esdTipLink1.style.setProperty("overflow","hidden","important");
	esdTipLink1.style.setProperty("display","block","important");
	esdTipLink1.style.setProperty("left","0","important");
	esdTipLink1.style.setProperty("top","0","important");
	//esdTipLink1.style.setProperty("background-color","red","important");
	esdTipLink1.style.setProperty("position","absolute","important");
	//esdTipLink1.className = "esdNavLink";
	document.getElementsByTagName("BODY")[0].appendChild(esdTipLink1);
	esdTipLink1.onclick = function(){
		window.open("https://kyfw.12306.cn/otn/resources/toolbar/help.html","_blank");
	}
	
}catch(e){
	//console.log(e);
}

var EsdToolbarInit={};

EsdToolbarInit.path = "https://kyfw.12306.cn/otn/resources/toolbar/";

EsdToolbarInit.loadScript = function(){
	var esd_jquery_js = document.createElement('script'); 
	esd_jquery_js.setAttribute('type', 'text/javascript'); 
	esd_jquery_js.setAttribute('src', EsdToolbarInit.path+'jquery.js'); 
	esd_jquery_js.setAttribute('charset', 'utf-8'); 
	esd_jquery_js.onload = function(){
		var esd_base64_js = document.createElement('script'); 
		esd_base64_js.setAttribute('type', 'text/javascript'); 
		esd_base64_js.setAttribute('src', EsdToolbarInit.path+'base64.js'); 
		esd_base64_js.setAttribute('charset', 'utf-8'); 
		esd_base64_js.onload = function(){
			var esd_soundmanager2_js = document.createElement('script'); 
			esd_soundmanager2_js.setAttribute('type', 'text/javascript'); 
			esd_soundmanager2_js.setAttribute('src', EsdToolbarInit.path+'soundmanager2.js'); 
			esd_soundmanager2_js.setAttribute('charset', 'utf-8'); 
			esd_soundmanager2_js.onload = function(){
				var esd_pinyin_js = document.createElement('script'); 
				esd_pinyin_js.setAttribute('type', 'text/javascript'); 
				esd_pinyin_js.setAttribute('src', EsdToolbarInit.path+'pinyin.js'); 
				esd_pinyin_js.setAttribute('charset', 'utf-8'); 
				esd_pinyin_js.onload = function(){
					var esd_handleInnerIframe_js = document.createElement('script'); 
					esd_handleInnerIframe_js.setAttribute('type', 'text/javascript'); 
					esd_handleInnerIframe_js.setAttribute('src', EsdToolbarInit.path+'handleInnerIframe.js'); 
					esd_handleInnerIframe_js.setAttribute('charset', 'utf-8'); 
					esd_handleInnerIframe_js.onload = function(){
						var esd_toolbar_js = document.createElement('script'); 
						esd_toolbar_js.setAttribute('type', 'text/javascript'); 
						esd_toolbar_js.setAttribute('src', EsdToolbarInit.path+'toolbar.js'); 
						esd_toolbar_js.setAttribute('charset', 'utf-8'); 
						esd_toolbar_js.setAttribute('id', 'ESDWebAppToolbar'); 
						document.head.appendChild(esd_toolbar_js);
					};	
					document.head.appendChild(esd_handleInnerIframe_js);	
				};
				document.head.appendChild(esd_pinyin_js);	
			};
			document.head.appendChild(esd_soundmanager2_js);	
		};	
		document.head.appendChild(esd_base64_js);
	};	
	document.head.appendChild(esd_jquery_js);
};
EsdToolbarInit.loadScript();


document.onkeydown = function(e){
	if (e.altKey) {
		if(typeof(EsdToolbar)=="undefined"){
			if (e.keyCode == 192) {  //alt+~
				//if(navigator.userAgent.toLowerCase().indexOf("msie 8.0")>-1||navigator.userAgent.toLowerCase().indexOf("msie 7.0")>-1){
				//	alert("当前浏览器版本过低,辅助工具无法正常使用!\r\n请使用更高版本的浏览器!");
				//	return false;
				//}
				//EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
				//EsdToolbarInit.setCookie("readScreen", true, 10);
				//EsdToolbarInit.setCookie("speakVolume", 0, 10);
				//EsdToolbarInit.loadScript(function(){
				//	EsdToolbar.readScreen.init();
				//	jq_t("#toolbar").hide();
				//	jq_t("#toolbarHtml").show("fast",function(){
				//		jq_t("#toolbarPage2").show();
				//		//if(EsdToolbar.statusmagnifier == "on"){
				//		//	EsdToolbar.magnifier.toolbarMagnifier();
				//		//}
				//	});
				//	jq_t("body").css("padding-top", "98px");
				//	EsdToolbar.rebuild();
				//	EsdToolbar.isOpen = true;
				//});
			}
		}else if(EsdToolbar.isOpen==false){
			if (e.keyCode == 192) {  //alt+~
				EsdToolbar.openKeydown();
			}
		}
	}
}