 var esdRoute = {};
 esdRoute.serverUrl = 'https://kyfw.12306.cn/otn/resources/route/';
 esdRoute.currentPath = 'kyfw.12306.cn/otn/';
 esdRoute.routeArray = [
  {'isDir':true,'fileName':'confirmPassenger','isTempLate':false},
  {'isDir':true,'fileName':'gonggao','isTempLate':false},
  {'isDir':true,'fileName':'leftTicket','isTempLate':false},
  {'isDir':true,'fileName':'payOrder','isTempLate':false},
  {'isDir':true,'fileName':'regist','isTempLate':false},
  {'isDir':true,'fileName':'resources','isTempLate':false},
  {'isDir':true,'fileName':'view','isTempLate':false},
  {'isDir':true,'fileName':'forgetPassword','isTempLate':false},
  {'isDir':true,'fileName':'lcQuery','isTempLate':false}
  ];
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
