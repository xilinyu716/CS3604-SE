
var jq_t = Esd$.noConflict(true);

var EsdToolbar = {};
EsdToolbar.isOpen = false;
EsdToolbar.defalt = {};
EsdToolbar.defalt.browser = {};
EsdToolbar.targetHead = null;
EsdToolbar.targetBody = null;
EsdToolbar.targetHtml = null;
EsdToolbar.pageIsRebuilded = false;
EsdToolbar.toolbarFileURL = document.getElementById("ESDWebAppToolbar").src.split("toolbar.js")[0];
EsdToolbar.pageTitleStr = "";
EsdToolbar.isExit = false;
EsdToolbar.cookieDoamin = ";domain=.12306.cn";

EsdToolbar.toolbarConfig = {};
EsdToolbar.toolbarConfig.helpPageUrl = EsdToolbar.toolbarFileURL+"help.html";
EsdToolbar.toolbarConfig.speak = {};
EsdToolbar.toolbarConfig.speak.alt0 = EsdToolbar.toolbarFileURL+"mp3/alt_0.mp3";//提示按Alt+0开启工具栏
EsdToolbar.toolbarConfig.speak.shift0 = EsdToolbar.toolbarFileURL+"mp3/shift_0.mp3";//提示shift+0朗读工具栏
EsdToolbar.toolbarConfig.speak.shiftz = EsdToolbar.toolbarFileURL+"mp3/shift_z.mp3";//提示shift+z朗读工具栏
EsdToolbar.toolbarConfig.speak.intordus = EsdToolbar.toolbarFileURL+"mp3/intordus_toolbar.mp3";//朗读工具栏
EsdToolbar.toolbarConfig.speak.description = EsdToolbar.toolbarFileURL+"mp3/description_toolbar.mp3";//朗读工具栏
EsdToolbar.toolbarConfig.speak.swf = EsdToolbar.toolbarFileURL+"swf/soundmanager2.swf";//soundmanager2Flash路径
if(document.URL.substr(0,5)=="https"){
	EsdToolbar.toolbarConfig.speak.BatchUrl = "https://exservice.12306.cn/excater/ws/batch";//无障碍云批量转换路径
	EsdToolbar.toolbarConfig.speak.ajaxUrl = "https://exservice.12306.cn/excater/ws/textToSound";//无障碍云转换MP3路径
}else{
	EsdToolbar.toolbarConfig.speak.BatchUrl = "https://exservice.12306.cn/excater/ws/batch";//无障碍云批量转换路径
	EsdToolbar.toolbarConfig.speak.ajaxUrl = "https://exservice.12306.cn/excater/ws/textToSound";//无障碍云转换MP3路径
}
EsdToolbar.toolbarConfig.speak.welcome = "无障碍辅助工具已开启";

EsdToolbar.toolbarConfig.trans = {};
EsdToolbar.toolbarConfig.trans.ajaxUrl = "https://exservice.12306.cn/excater/baidu-translate-r1.0/translate";

//====================================== Cookie存取 开始  ==================================================
EsdToolbar.storage = {};
EsdToolbar.storage.setCookie = function(name, value, days){
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/"+EsdToolbar.cookieDoamin;
};
EsdToolbar.storage.getCookie = function(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') 
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) 
            return c.substring(nameEQ.length, c.length);
    }
    return null;
};
EsdToolbar.storage.eraseCookie = function(name){
	EsdToolbar.storage.setCookie(name, "", -1);
};
EsdToolbar.storage.foreach = function(){
  var strCookie=document.cookie;
  var arrCookie=strCookie.split("; ");
  for(var i=0;i<arrCookie.length;i++){
      var arr=arrCookie[i].split("=");
	  if(arr.length>0){
		  EsdToolbar.storage.eraseCookie(arr[0]);
	  	}
	}
};
//====================================== Cookie存取 结束  ==================================================

// ====================================== 十字光标  开始  ==================================================
EsdToolbar.guides = {};
EsdToolbar.statusguides = "on";
EsdToolbar.guides.init = function(){
	var guidesStatus = EsdToolbar.storage.getCookie("guidesStatus");
	if(guidesStatus=="on"){
		EsdToolbar.guides.open();
	}else{
		EsdToolbar.guides.close();
	}
};
EsdToolbar.guides.switchOnOff = function () {
	if(jq_t(document).find("#slideLateral").length==1){
		EsdToolbar.guides.close();
		EsdToolbar.statusguides = "off";
	}else{
		var statusguides = EsdToolbar.storage.getCookie("guidesStatus");
		if(statusguides == null){
			EsdToolbar.statusguides = "off";
		}
		if (statusguides == "off") {
			EsdToolbar.guides.open();
			EsdToolbar.statusguides = "on";
		} else if (statusguides == "on") {
			EsdToolbar.guides.close();
			EsdToolbar.statusguides = "off";
		}
	}
};
EsdToolbar.guides.open = function () {
	var childHeight = 0;
	var str = "<div id='slideLateral' style='width:100%;height:5px;position:absolute;background-color:#ff0000;overflow:hidden;z-index:100100;left:0;top:0;'></div>" +
			"<div id='slideLongitudinal' style='width:5px;height:100%;position:absolute;background-color:#ff0000;overflow:hidden;z-index:100100;left:0;top:0;'></div>";
	EsdToolbar.targetBody.append(str);
	document.onmousemove = function (e) {
		EsdToolbar.targetBody.find("#slideLongitudinal").css("height", "0px");
		var pointer = EsdToolbar.guides.getCoordInDocument(e);
		childHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		EsdToolbar.targetBody.find("#slideLateral").css("top", pointer.y + 20).css("width",(EsdToolbar.pageZoom.zoom*100)+"%");
		EsdToolbar.targetBody.find("#slideLongitudinal").css("left", pointer.x + 20).css("height", childHeight);
	};
	EsdToolbar.storage.setCookie("guidesStatus", "on", 10);
	jq_t("#toolbar_guides").attr("title","当前十字光标已开启，关闭十字光标Shift+9");
	jq_t("#toolbar_guides img").attr("title","当前十字光标已开启，关闭十字光标Shift+9").attr("alt","当前十字光标已开启，关闭十字光标Shift+9");
};
EsdToolbar.guides.getCoordInDocument = function (e) {
	e = e || window.event;
	var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
	var y = e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
/*	if(EsdToolbar.pageZoom.zoom!=1&&EsdToolbar.pageZoom.zoom!=0){
		console.log(x +"  "+ (x/EsdToolbar.pageZoom.zoom) +"  "+EsdToolbar.pageZoom.zoom);
		return {
			'x': x/EsdToolbar.pageZoom.zoom,
			'y': y/EsdToolbar.pageZoom.zoom
		};
	}else{
		return {
			'x': x,
			'y': y
		};
	}*/
	return {
		'x': x,
		'y': y
	};
};
EsdToolbar.guides.close = function () {
	jq_t("#slideLateral, #slideLongitudinal").remove();
	EsdToolbar.storage.setCookie("guidesStatus", "off", 10);
	jq_t("#toolbar_guides").attr("title","当前十字光标已关闭，关闭十字光标Shift+9"); 
	jq_t("#toolbar_guides img").attr("title","当前十字光标已关闭，关闭十字光标Shift+9").attr("alt","当前十字光标已关闭，关闭十字光标Shift+9");
};
//====================================== 十字光标  结束  ==================================================

//====================================== 纯文本  开始  ==================================================
EsdToolbar.textMode = {};
EsdToolbar.textMode.status = "off";
EsdToolbar.textMode.open = function () {
	EsdToolbar.targetBody.find("style:not(#d-outer,#d-outer *)").remove();
	EsdToolbar.targetHead.find("link").remove();
	EsdToolbar.targetHead.find("style").remove();
	EsdToolbar.targetBody.find(".d-outer").css("visibility", "hidden");
	EsdToolbar.targetBody.find("link:not(#toolbarCss,#toolbarMainCss,#YBZ-css-id)").remove();
	EsdToolbar.targetBody.find("*:not(#toolbarHtml *, #toolbar_action,#toolbar,#toolbar *,#d-outer,#d-outer *)").each(function () {
		if (this.tagName == "IMG") {
			var imgAlt = "";
			if (this.alt != null && this.alt != "" && this.alt != "无意义图片") {
				imgAlt = this.alt;
			} else {
				EsdToolbar.textMode.imgAlt(imgAlt);
			}
			jq_t(this).replaceWith('<span>' + imgAlt + '</span>');
		} else if (this.tagName == "A" && this.innerHTML == "") {
			var aText = "";
			if (this.title != "" && this.title != null) {
				aText = this.title;
			} else if (this.alt != "" && this.alt != null) {
				aText = this.alt;
			}
			this.innerHTML = aText;
		} else {
			jq_t(this).removeAttr("style").removeAttr("background").removeAttr("valign").removeAttr("align").removeAttr("height").removeAttr("width");
			if (this.tagName != "A") {
				jq_t(this).css("text-decoration", "none");
			}
		}
	});
	EsdToolbar.targetBody.find("a:not(div#toolbar a),span:not(div#toolbarHtml span),h1,h2,h3,h4,h5,input").css("padding", "5px");
	EsdToolbar.storage.setCookie("textModeStatus", "on", 10);
	EsdToolbar.textMode.status = "on";
	EsdToolbar.targetBody.css("margin","0");
};

EsdToolbar.textMode.close = function(){
	EsdToolbar.storage.setCookie("textModeStatus", "off", 10);
	EsdToolbar.pageReload();
};

EsdToolbar.textMode.imgAlt = function (imgAlt) {
	var imgAltName = "";
	imgAlt = imgAltName;
};

EsdToolbar.textMode.switchOnOff = function(){
	var textModeStatus = EsdToolbar.textMode.status;
	if (textModeStatus == "off") {
		EsdToolbar.textMode.open();
	} else if (textModeStatus == "on") {
		EsdToolbar.textMode.close();
	}
}

EsdToolbar.textMode.init = function(){
	var guidesStatus = EsdToolbar.storage.getCookie("textModeStatus");
	if(guidesStatus=="on"){
		EsdToolbar.textMode.open();
	}
};

//====================================== 纯文本  结束  ==================================================

//====================================== 辅助工具  样式方法  开始==================================================
EsdToolbar.hide = function(obj){ 
	if(document.getElementById(obj).className=="yin_1"){
		jq_t(".cy_toolbar_bg_table ul li dl.xian_1").removeClass("xian_1").addClass("yin_1");
		document.getElementById(obj).className="xian_1";
	}else{
		//document.getElementById(obj).className="yin_1";
		jq_t(".cy_toolbar_bg_table ul li dl.xian_1").removeClass("xian_1").addClass("yin_1");
	}
};
EsdToolbar.hideremove = function(){
	jq_t(".cy_toolbar_bg_table ul li dl.xian_1").attr("class","yin_1");
}
EsdToolbar.hideover = function(obj) {
	document.getElementById(obj).className="xian_1";
}
//====================================== 辅助工具  样式方法   结束==================================================

//====================================== 配色  开始=================================================
EsdToolbar.highContrast = {};
EsdToolbar.highContrast.colorChange = function(){
	var highContrastMode = EsdToolbar.storage.getCookie("highContrastMode");
	if(highContrastMode == "defaltMode"){
		EsdToolbar.highContrast.whiteBlackMode();
	}else if(highContrastMode == "whiteBlackMode"){
		EsdToolbar.highContrast.blueYellowMode();
	}else if(highContrastMode == "blueYellowMode"){
		EsdToolbar.highContrast.yellowBlackMode();
	}else if(highContrastMode == "yellowBlackMode"){
		EsdToolbar.highContrast.yellowMode();
	}else if(highContrastMode == "yellowMode"){
		EsdToolbar.highContrast.defaltMode();
	}
};

EsdToolbar.highContrast.defaltMode = function(){
	EsdToolbar.highContrast.changeTheme("defaltMode");
	EsdToolbar.buttonReader.read("changeColorReload");
};
EsdToolbar.highContrast.whiteMode = function(){
	EsdToolbar.highContrast.changeTheme("white");
};

EsdToolbar.highContrast.whiteBlackMode = function(){
	EsdToolbar.highContrast.changeTheme("whiteBlackMode");
	EsdToolbar.buttonReader.read("changeColorWhiteBlack");
};
EsdToolbar.highContrast.blueYellowMode = function(){
	EsdToolbar.highContrast.changeTheme("blueYellowMode");
	EsdToolbar.buttonReader.read("changeColorBlueYellow");
};
EsdToolbar.highContrast.yellowBlackMode = function(){
	EsdToolbar.highContrast.changeTheme("yellowBlackMode");
	EsdToolbar.buttonReader.read("changeColorYellowBlack");
};
EsdToolbar.highContrast.yellowMode = function(){
	EsdToolbar.highContrast.changeTheme("yellowMode");
	EsdToolbar.buttonReader.read("changeColorBlackYellow");
};

EsdToolbar.highContrast.changeTheme = function(modeStyle){
	EsdToolbar.storage.setCookie("highContrastMode", modeStyle, 10);
	var thmeMode = modeStyle;
	jq_t(document).find("#esdTempStyle").remove()
	if (thmeMode == "defaltMode") {
		jq_t("#toolbar_colorChange img").attr("src",EsdToolbar.toolbarFileURL+"img/color1.png");
		jq_t("#toolbar_colorChange").attr("title","当前为原始配色, 切换配色Shift+5");
		jq_t("#toolbar_colorChange img").attr("title","当前为原始配色, 切换配色Shift+5").attr("alt","当前为原始配色, 切换配色Shift+5");
	} else if (thmeMode == "whiteBlackMode") {
		var esdtemp = document.createElement("style");
		jq_t("#toolbar_colorChange img").attr("src",EsdToolbar.toolbarFileURL+"img/color_1.png");
		esdtemp.setAttribute("type", "text/css");
		esdtemp.id="esdTempStyle";
		document.head.appendChild(esdtemp);
		jq_t(esdtemp).html(".header:before{background:#FFFFFF;} body,.esdHBG {background-color:#FFFFFF !important;color:#000000 !important;}");//background-image:none !important;  , .esdHBG *
		jq_t("#toolbar_colorChange").attr("title","当前配色为白底黑字, 切换配色Shift+5");
		jq_t("#toolbar_colorChange img").attr("title","当前配色为白底黑字, 切换配色Shift+5").attr("alt","当前配色为白底黑字, 切换配色Shift+5");
	} else if (thmeMode == "blueYellowMode") {
		jq_t("#toolbar_colorChange img").attr("src",EsdToolbar.toolbarFileURL+"img/color_2.png");
		var esdtemp = document.createElement("style");
		esdtemp.setAttribute("type", "text/css");
		esdtemp.id="esdTempStyle";
		document.head.appendChild(esdtemp);
		jq_t(esdtemp).html(".header:before{background:#0000FF;} body,.esdHBG {background-color:#0000FF !important;color:#FFFF00 !important;}");//background-image:none !important;  , .esdHBG *
		jq_t("#toolbar_colorChange").attr("title","当前配色为蓝底黄字, 切换配色Shift+5");
		jq_t("#toolbar_colorChange img").attr("title","当前配色为蓝底黄字, 切换配色Shift+5").attr("alt","当前配色为蓝底黄字, 切换配色Shift+5");
	} else if (thmeMode == "yellowBlackMode") {
		jq_t("#toolbar_colorChange img").attr("src",EsdToolbar.toolbarFileURL+"img/color_3.png");
		var esdtemp = document.createElement("style");
		esdtemp.setAttribute("type", "text/css");
		esdtemp.id="esdTempStyle";
		document.head.appendChild(esdtemp);
		jq_t(esdtemp).html(".header:before{background:#FFFF00;} body,.esdHBG {background-color:#FFFF00 !important;color:#000000 !important;}");//background-image:none !important;  , .esdHBG *
		jq_t("#toolbar_colorChange").attr("title","当前配色为黄底黑字, 切换配色Shift+5");
		jq_t("#toolbar_colorChange img").attr("title","当前配色为黄底黑字, 切换配色Shift+5").attr("alt","当前配色为黄底黑字, 切换配色Shift+5");
	} else if (thmeMode == "yellowMode") {
		jq_t("#toolbar_colorChange img").attr("src",EsdToolbar.toolbarFileURL+"img/color_4.png");
		var esdtemp = document.createElement("style");
		esdtemp.setAttribute("type", "text/css");
		esdtemp.id="esdTempStyle";
		document.head.appendChild(esdtemp);
		jq_t(esdtemp).html(".header:before{background:#000000;} body,.esdHBG {background-color:#000000 !important;color:#FFFF00 !important;}");//background-image:none !important;  , .esdHBG *
		jq_t("#toolbar_colorChange").attr("title","当前配色为黑底黄字, 切换配色Shift+5");
		jq_t("#toolbar_colorChange img").attr("title","当前配色为黑底黄字, 切换配色Shift+5").attr("alt","当前配色为黑底黄字, 切换配色Shift+5");
	}
};

EsdToolbar.highContrast.init = function(){
	var highContrastMode = EsdToolbar.storage.getCookie("highContrastMode");
	if(highContrastMode != null && highContrastMode!="defaltMode"){
		EsdToolbar.highContrast.changeTheme(highContrastMode);
	}else if(highContrastMode==null){
		EsdToolbar.storage.setCookie("highContrastMode", "defaltMode", 10);
	}
};
//====================================== 配色  结束=================================================

//====================================== 页面放大缩小 开始=================================================
EsdToolbar.pageZoom = {};
EsdToolbar.pageZoom.isChanged=false;
EsdToolbar.pageZoom.zoom = 1;
EsdToolbar.pageZoom.toolbarPercent = 100;
EsdToolbar.pageZoom.increasePage = function(){
	if(EsdToolbar.pageZoom.zoom.toFixed(1)>=2){
		EsdToolbar.pageZoom.zoom = 2;
		EsdToolbar.buttonReader.read("pageZoomMaximum");
	}else{
		EsdToolbar.pageZoom.pageZoom("increase");
		EsdToolbar.buttonReader.read("pageZoomIn");
	}
};
EsdToolbar.pageZoom.decreasePage = function(){
	if(EsdToolbar.pageZoom.zoom.toFixed(1)<=1){
		EsdToolbar.pageZoom.zoom = 1;
		EsdToolbar.buttonReader.read("pageZoomMinimum");
	}else{
		EsdToolbar.pageZoom.pageZoom("decrease");
		EsdToolbar.buttonReader.read("pageZoomOut");
	}
};
EsdToolbar.pageZoom.defaultPage = function(){
	EsdToolbar.pageZoom.pageZoom("default");
};

EsdToolbar.pageZoom.pageZoom = function(action){
	var mozilla = EsdToolbar.defalt.browser.mozilla;
	var opera = EsdToolbar.defalt.browser.opera;
	var nowZoom = 0;
	if(jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal,#toolbar_Div,#jumpareNodeId,#esdTipLink,#esdTipLink1,esdTipLink2)").length>0){
		jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal,#toolbar_Div,#jumpareNodeId,#esdTipLink,#esdTipLink1,esdTipLink2)").appendTo("#toolbar_Div");
	}
	if(action == "increase"){
		nowZoom = parseFloat(EsdToolbar.pageZoom.zoom)+0.1;
		EsdToolbar.pageZoom.zoom+=0.1;
		EsdToolbar.pageZoom.toolbarPercent+=10;
	}else if(action == "decrease"){
		nowZoom = parseFloat(EsdToolbar.pageZoom.zoom)-0.1;
		EsdToolbar.pageZoom.zoom-=0.1;
		EsdToolbar.pageZoom.toolbarPercent-=10;
	}else{
		nowZoom = 1;
		EsdToolbar.pageZoom.zoom = 1;
	}
	EsdToolbar.storage.setCookie("readZoom", nowZoom, 10);
	EsdToolbar.storage.setCookie("percentStatus", EsdToolbar.pageZoom.toolbarPercent, 10);
	
//	if(mozilla||opera){
		jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal)").css({"transform":"scale("+nowZoom+")","transform-origin":"0 0"}).attr("data-toolbar-zoom","1");
		window.scrollTo((document.body.scrollWidth-document.body.offsetWidth)/2,0);
//	}else{
//		jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal)").css("zoom",nowZoom).attr("data-toolbar-zoom","1");
//		if(nowZoom.toFixed(1)<=1.0){
//			jq_t(EsdToolbar.targetBody).css("overflow","");
//		}else{
//			jq_t(EsdToolbar.targetBody).css("overflow","scroll");
//		}
//	}
//	jq_t(".esdIframeFlag").each(function(){
//		var newHeight = 200 - EsdToolbar.pageZoom.toolbarPercent;
//		if(newHeight>100){
//			newHeight = 100;
//		}
//		if(newHeight<20){
//			newHeight = 20;
//		}
//	    jq_t(this).css("height",newHeight+"%")
//	})
	EsdToolbar.pageZoom.isChanged = true;
};

EsdToolbar.pageZoom.init = function(){
	var readZoom = EsdToolbar.storage.getCookie("readZoom");
	var percentStatus = EsdToolbar.storage.getCookie("percentStatus");
	if(jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal,#toolbar_Div,#jumpareNodeId,#esdTipLink,#esdTipLink1,esdTipLink2)").length>0){
		jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal,#toolbar_Div,#jumpareNodeId,#esdTipLink,#esdTipLink1,esdTipLink2)").appendTo("#toolbar_Div");
	}
	if (readZoom != null&&readZoom!=1) {
		readZoom = readZoom*1
		if(percentStatus!=null){
			jq_t("#toolbar_percent").html("页面"+percentStatus+"%");
			EsdToolbar.pageZoom.toolbarPercent = percentStatus*1;
		}
		EsdToolbar.pageZoom.zoom = readZoom;
//		if (EsdToolbar.defalt.browser.mozilla || EsdToolbar.defalt.browser.opera) {
			jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal)").css({"transform":"scale(" + readZoom + ")","transform-origin":"0 0"}).attr("data-toolbar-zoom","1");
			window.scrollTo((document.body.scrollWidth-document.body.offsetWidth)/2,0);
//		} else {
//			jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal)").css("zoom",readZoom).attr("data-toolbar-zoom","1");
//		}
//		if(readZoom.toFixed(1)<=1.0){
//			jq_t(EsdToolbar.targetBody).css("overflow","");
//		}else{
//			jq_t(EsdToolbar.targetBody).css("overflow","scroll");
//		}
		EsdToolbar.pageZoom.isChanged = true;
	}
};
//====================================== 页面放大缩小 结束=================================================

//====================================== 全屏 开始=================================================
EsdToolbar.fullScreenMode = {};
EsdToolbar.fullScreenMode.statusfull = "on";
EsdToolbar.fullScreenMode.switchOnOff = function(){
	var browserName = navigator.userAgent.toLowerCase();
	if (EsdToolbar.fullScreenMode.statusfull == "on") {
		if ((/msie/i.test(browserName)||(/trident/i.test(browserName))) && !/opera/.test(browserName)) {
			jq_t("#toolbar_prompt").fadeIn(1000, function() {
				jq_t("#toolbar_prompt").fadeOut(5000);
			});
		} else {
			var el = document.documentElement;
			var rfs = el.requestFullScreen || el.webkitRequestFullScreen || 
			el.mozRequestFullScreen || el.msRequestFullScreen;
			if(typeof rfs != "undefined" && rfs) {
				rfs.call(el);
			} else if(typeof window.ActiveXObject != "undefined") {
				//for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
				var wscript = new ActiveXObject("WScript.Shell");
				if(wscript != null) {
					wscript.SendKeys("{F11}");
				}
			}
		}
		EsdToolbar.fullScreenMode.statusfull = "off";
	} else if (EsdToolbar.fullScreenMode.statusfull == "off") {
		if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
			jq_t("#toolbar_prompt").fadeIn(1000, function() {
				jq_t("#toolbar_prompt").fadeOut(5000);
			});
		} else {
			var el = document;
			var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || 
			el.mozCancelFullScreen || el.exitFullScreen;
			if(typeof cfs != "undefined" && cfs) {
				cfs.call(el);
			} else if(typeof window.ActiveXObject != "undefined") {
				//for IE，这里和fullScreen相同，模拟按下F11键退出全屏
				var wscript = new ActiveXObject("WScript.Shell");
				if(wscript != null) {
					wscript.SendKeys("{F11}");
				}
			}
		}
		EsdToolbar.fullScreenMode.statusfull = "on";
	}
};


//====================================== 全屏 结束=================================================

//====================================== 页面重构 开始 =================================================
EsdToolbar.pageRebuild = {};
EsdToolbar.pageRebuild.rebuild = function(){
	EsdToolbar.targetBody.find("*:not(#toolbarHtml, #toolbarHtml *, #ymd_magnifier, #ymd_magnifier *, .bx-info,.switch,.switch *,#J-slide-passcode,#J-slide-passcode *, .ico-dh,.train-seat-box li)").addClass("esdHBG");
	//if(!EsdToolbar.defalt.browser.msie){
		EsdToolbar.pageRebuild.addSpanTag();
	//}
};

//查找CSS为diplay=none的标签，并添加标示“displayClass”
EsdToolbar.pageRebuild.findDisplay = function(){
	EsdToolbar.targetBody.find("*:not(#toolbarHtml *):hidden").removeClass("ESDAssetsTextCon").addClass("displayClass");
};

EsdToolbar.pageRebuild.addESDAssetsTextCon = function(){
	EsdToolbar.targetBody.find("* [tabindex][class$='displayClass']").removeClass("displayClass").addClass("ESDAssetsTextCon");
};

//切割段落
EsdToolbar.pageRebuild.splitParagraph = function(){
	var patt = new RegExp("[。！？；，、.!?;,]","g");
	var result;
	EsdToolbar.targetBody.find("p").each(function(){
	    var index=0;  
	    var newParagraph="";
		if(jq_t(this).children("script").length>0){
			return;
		}
		var t=jq_t(this).html();

		var contents = jq_t(this).contents();
		jq_t(contents).each(function(i, content){
			jq_t(this).contents().filter(function() {
				  return this.nodeType == 3;
			}).wrap("<span class='split_span'></span>");
			
			jq_t(this).find(".split_span").each(function(){
				var h = jq_t(this).html();
				if (h.length > 30) {
					while ((result = patt.exec(h)) != null) {
						if (h.substring(index, patt.lastIndex) != result && h.substring(index, patt.lastIndex) != "&nbsp;") {
							newParagraph += "<span class='ymd_split_span'>" + h.substring(index, patt.lastIndex) + "</span>";
						} else {
							newParagraph += h.substring(index, patt.lastIndex);
						}
						index = patt.lastIndex;
					}
					jq_t(this).html(newParagraph);
				}
			});
		});
	});
};
//为div、td中的文字增加span标签
EsdToolbar.pageRebuild.addSpanTag = function(){
	var patt = new RegExp("[。！？；，、!?;,]","g");
	var result;
	EsdToolbar.targetBody.find("*:not(.price)").each(function(){
		if(this.tagName!="A"&&!(jq_t(this).parents().is("a"))&&!(jq_t(this).parents().is("#toolbarHtml"))&&this.tagName!="BUTTON"&&this.tagName!="IFRAME"&&this.tagName!="SCRIPT"&&this.tagName!="STYLE"){//A链接用ins包住会导致chrome上的A链接按回车打不开  所以就不用包了
			var _thatTemp = jq_t(this);
			jq_t(this).contents().filter(function() {
				  if(this.nodeType==3){
					  var str = jq_t(this).text();
					  var h = jq_t.trim(str);
					  if(str=="["||str=="]"){
						  h="";
					  }
					  if(h!=""){
						  //jq_t(this).wrap("<ins style=\"text-decoration:none; font-size:100% \" class='split_span'></ins>");
						if(jq_t(this).siblings().length>0){
							jq_t(this).wrap("<ins style=\"text-decoration:none; font-size:100% \" data-has-text='1'></ins>");
						}else{
							_thatTemp.attr("data-has-text","1");
						}
					 }
				  }
			});
		}
	});
	
	EsdToolbar.targetBody.find(".split_span").each(function(){
		var index=0;
		var h = jq_t(this).html();
		var newParagraph="";
		if (h.length > 30) {
			while ((result = patt.exec(h)) != null) {
				if (h.substring(index, patt.lastIndex) != result && h.substring(index, patt.lastIndex) != "&nbsp;") {
					newParagraph += "<ins style=\"text-decoration:none; font-size:100%; \" class='ymd_split_span'>" + h.substring(index, patt.lastIndex) + "</ins>";
				} else {
					newParagraph += h.substring(index, patt.lastIndex);
					
				}
				index = patt.lastIndex;
			}
			//如果最后的标点位置不是文本的最后一位，说明后面还有内容需要添加
			if(index<h.length){
				newParagraph += "<ins style=\"text-decoration:none; font-size:100%; \" class='ymd_split_span'>" + h.substring(index, h.length); + "</ins>";
			}
			jq_t(this).html(newParagraph);
		}
	});
};

//====================================== 页面重构 结束 =================================================

//====================================== speak 开始 =================================================

EsdToolbar.speak={};

EsdToolbar.statusbatchRead = "on";
EsdToolbar.statuspointread = "on";
EsdToolbar.statusspeakOnOff = "on";
EsdToolbar.speak.volume = 100;
EsdToolbar.speak.iframeChange=0;
EsdToolbar.speak.speedVal = 0;
EsdToolbar.speak.speedInit = function(){
	if (EsdToolbar.speak.speedVal > 0) {
		jq_t("#toolbar_speakSpeed").attr("title","当前语速快, 调节语速Shift+3");
		jq_t("#toolbar_speakSpeed img").attr("title","当前语速快, 调节语速Shift+3").attr("src",EsdToolbar.toolbarFileURL+"img/vol_quick.png");
	} else if (EsdToolbar.speak.speedVal == 0) {
		jq_t("#toolbar_speakSpeed").attr("title","当前语速正常, 调节语速Shift+3");
		jq_t("#toolbar_speakSpeed img").attr("title","当前语速正常, 调节语速Shift+3").attr("src",EsdToolbar.toolbarFileURL+"img/vol_normal.png");  
	} else if (EsdToolbar.speak.speedVal < 0) {
		jq_t("#toolbar_speakSpeed").attr("title","当前语速慢, 调节语速Shift+3");
		jq_t("#toolbar_speakSpeed img").attr("title","当前语速慢, 调节语速Shift+3").attr("src",EsdToolbar.toolbarFileURL+"img/vol_slow.png");
	}
}
EsdToolbar.speak.speedFont = function() {
	if (EsdToolbar.speak.speedVal > 0) {
		jq_t("#toolbar_speakSpeed").attr("title","当前语速快, 调节语速Shift+3");
		jq_t("#toolbar_speakSpeed img").attr("title","当前语速快, 调节语速Shift+3").attr("src",EsdToolbar.toolbarFileURL+"img/vol_quick.png");
		EsdToolbar.buttonReader.read("speed_q");
	} else if (EsdToolbar.speak.speedVal == 0) {
		jq_t("#toolbar_speakSpeed").attr("title","当前语速正常, 调节语速Shift+3");
		jq_t("#toolbar_speakSpeed img").attr("title","当前语速正常, 调节语速Shift+3").attr("src",EsdToolbar.toolbarFileURL+"img/vol_normal.png");  
		EsdToolbar.buttonReader.read("speed_n");
	} else if (EsdToolbar.speak.speedVal < 0) {
		jq_t("#toolbar_speakSpeed").attr("title","当前语速慢, 调节语速Shift+3");
		jq_t("#toolbar_speakSpeed img").attr("title","当前语速慢, 调节语速Shift+3").attr("src",EsdToolbar.toolbarFileURL+"img/vol_slow.png");
		EsdToolbar.buttonReader.read("speed_s");
	}
};
EsdToolbar.speak.speed = function(){
	var speakSpeed = EsdToolbar.storage.getCookie("speakSpeed");
	if (EsdToolbar.statusbatchRead == "off" || EsdToolbar.statuspointread == "off") {
		if((speakSpeed*1+1)%3==1){
			EsdToolbar.speak.speedVal = 1;
		}else if((speakSpeed*1+1)%3==2){
			EsdToolbar.speak.speedVal = -1;
		}else {
			EsdToolbar.speak.speedVal = 0;
		}
		EsdToolbar.storage.setCookie("speakSpeed", (speakSpeed*1+1)%3, 10);
		EsdToolbar.speak.speedFont();
	}
	//speak.speedVal=s;
};
EsdToolbar.speak.sound={};
EsdToolbar.speak.sound.url = {
	localSWF:EsdToolbar.toolbarConfig.speak.swf,
	alt_0:EsdToolbar.toolbarConfig.speak.alt0,
	shift_0:EsdToolbar.toolbarConfig.speak.shift0,
	shift_z:EsdToolbar.toolbarConfig.speak.shiftz,
	intordus:EsdToolbar.toolbarConfig.speak.intordus,
	description:EsdToolbar.toolbarConfig.speak.description,
	ajaxUrl:EsdToolbar.toolbarConfig.speak.ajaxUrl,
	batchUrl:EsdToolbar.toolbarConfig.speak.BatchUrl
};
EsdToolbar.speak.sound.mp3Object=null;
//EsdToolbar.speak.sound.mp3Object = null;//自动朗读对象
EsdToolbar.speak.sound.voicePromptObject = null;//播放语音提示对象
EsdToolbar.speak.index = 0;//页面信息索引 用于自动朗读
EsdToolbar.speak.source = new Array();//预存页面信息  用于自动朗读
EsdToolbar.speak.thisdomAuto;//自动朗读对象
EsdToolbar.speak.thisdomAutoParent;
EsdToolbar.speak.thisdomAutoParent_type="css";
EsdToolbar.speak.thisdomAutoParent_back;
EsdToolbar.speak.thisdom;//指读/键盘朗读对象
EsdToolbar.speak.thisdomAuto_type="css";//
EsdToolbar.speak.thisdomAuto_back;//自动朗读对象CSS
EsdToolbar.speak.thisdomAuto_font;//自动朗读文字对像CSS
EsdToolbar.speak.thisdom_type="css";//
EsdToolbar.speak.thisdom_back=null;//指读/键盘朗读对象CSS
EsdToolbar.speak.thisdom_font=null;//指读/键盘朗读对象

//初始化"WebRoot/swf"
EsdToolbar.speak.sound.init = function(){
	var speakSpeed = EsdToolbar.storage.getCookie("speakSpeed");
	if(speakSpeed == "null"){
		EsdToolbar.storage.setCookie("speakSpeed", "0", 10);
	}else{
		if((speakSpeed*1)%3==1){
			EsdToolbar.speak.speedVal = 1;
		}else if((speakSpeed*1)%3==2){
			EsdToolbar.speak.speedVal = -1;
		}else {
			EsdToolbar.speak.speedVal = 0;
		}
		EsdToolbar.speak.speedInit();
	}
	EsdToolbar.speak.volumeInit();
	EsdToolbar.speak.sound.sendText2Cloud();
	EsdToolbar.speak.readChangeInit();
};

//将页面中的内容批量发给云
EsdToolbar.speak.sound.sendText2Cloud = function(){
	var arr = new Array();
	var i = 1;
	EsdToolbar.targetBody.find("*:not(.displayClass)").each(function(index){
		if(!jq_t(this).parents().is("#toolbarHtml")){
			var obj = jq_t(this);
			var text = "";
			text = EsdToolbar.manageText(obj[0]);
			
			if(text != null && text != ""){
				if(obj.attr("role")=="alertdialog"||obj.attr("id")=="esdTipLink"||obj.attr("id")=="esdTipLink1"||obj.attr("id")=="esdTipLink2"||obj.hasClass("esdUnCount")||obj.attr("tabindex")=="-1"){//
					obj.addClass("ESDAssetsTextCon");//为每个带有文本节点的dom增加属性Tabindex，并且增加class属性ESDAssetsTextCon
					i++;	
				}else{
					obj.attr("tabindex",0).addClass("ESDAssetsTextCon");//为每个带有文本节点的dom增加属性Tabindex，并且增加class属性ESDAssetsTextCon
					i++;	
				}	
			}
		}
	});
	
	jq_t("*:not(.displayClass)").each(function(index){
		if(!jq_t(this).parents().is("#toolbarHtml")){
			var obj = jq_t(this);
			var text = "";
			text = EsdToolbar.manageText(obj[0]);
			
			if(text != null && text != ""){
				obj.addClass("ESDAssetsTextCon");//为每个带有文本节点的dom增加属性Tabindex，并且增加class属性ESDAssetsTextCon
				i++;
			}
		}
	});
};

EsdToolbar.speak.toolbarSpeakOnOff = function(){
	if (EsdToolbar.statusspeakOnOff == "on") {
		EsdToolbar.storage.setCookie("speakFunctionIsOn", "true", 10);
		//jq_t("#toolbar_speakOnOff").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound1.png");
		jq_t("#toolbar_batchRead").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/continuous_start1.png");
		jq_t("#toolbar_Pointread").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/point4.png");
		jq_t("#toolbar_playSpeech").attr("onclick", "EsdToolbar.hide('cy_playSpeech_dl')");
		EsdToolbar.statusspeakOnOff = "off";
		
	} else if (EsdToolbar.statusspeakOnOff == "off") {
		EsdToolbar.storage.setCookie("speakFunctionIsOn", "false", 10);
		EsdToolbar.storage.setCookie("batchReadIsOn", "false", 10);
		EsdToolbar.storage.setCookie("PointReadIsOn", "false", 10);
		jq_t("#toolbar_speakOnOff").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound3.png");
		jq_t("#toolbar_batchRead").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/continuous1.png");
		if (EsdToolbar.statusbatchRead == "off") {
			jq_t("#toolbar_batchRead").removeClass("batchReadOn");
			EsdToolbar.statusbatchRead = "on";
			EsdToolbar.speak.sound.automateSpeakClose();
		}
		jq_t("#toolbar_Pointread").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/point2.png");
		if (EsdToolbar.statuspointread == "off") {
			jq_t("#toolbar_Pointread").removeClass("PointreadOn");
			EsdToolbar.speak.sound.closePointSpeak();
			EsdToolbar.statuspointread = "on";
		}
		jq_t("#toolbar_playSpeech").removeAttr("onclick");
		if (document.getElementById("cy_playSpeech_dl").className == "xian_1") {
			hide("cy_playSpeech_dl");
		}
		EsdToolbar.speak.speedVal = 0;
		EsdToolbar.speak.index = 0;
		EsdToolbar.speak.sound.mp3Object = null;
		EsdToolbar.speak.source = new Array();
		jq_t(".toolbar_speakSpeed").each(function () {
			jq_t(this).html("语速调节");
        });
		EsdToolbar.statusspeakOnOff = "on";
	}
		 
};

EsdToolbar.speak.toolbarBatchRead = function(){
	if (EsdToolbar.statusbatchRead == "on") {
		EsdToolbar.storage.setCookie("batchReadIsOn", "true", 10);
		jq_t("#toolbar_batchRead").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/continuous_stop1.png");
		jq_t("#toolbar_batchRead").addClass("batchReadOn");
		//更改只读状态
		EsdToolbar.statuspointread="off";
		EsdToolbar.speak.toolbarPointread();
		EsdToolbar.pageRebuild.findDisplay();//连读时不需要读出隐藏的二级菜单
		//开启连读
		EsdToolbar.speak.sound.automateSpeak();
		EsdToolbar.statusbatchRead = "off";
	} else if (EsdToolbar.statusbatchRead == "off") {
		EsdToolbar.storage.setCookie("batchReadIsOn", "false", 10);
		jq_t("#toolbar_batchRead").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/continuous_start1.png");
		jq_t("#toolbar_batchRead").removeClass("batchReadOn");
		EsdToolbar.pageRebuild.addESDAssetsTextCon();//指读时需要读出隐藏的二级菜单 
		EsdToolbar.statusbatchRead = "on";   //EsdToolbar.toolbar.speakAutoClose();需要根据这个状态来判断是否需要关闭连读 所以这句应该在上面
		EsdToolbar.speak.sound.automateSpeakClose();
	}
};

EsdToolbar.speak.toolbarPointread = function(){
	if (EsdToolbar.statuspointread == "on") {
		EsdToolbar.storage.setCookie("PointReadIsOn", "true", 10);
		jq_t("#toolbar_Pointread").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/point3.png");
		jq_t("#toolbar_Pointread").addClass("PointreadOn");
		//更改连读状态
		EsdToolbar.statusbatchRead="off";
		EsdToolbar.speak.toolbarBatchRead();
		//开启只读
		EsdToolbar.speak.sound.startPointSpeak();
		EsdToolbar.statuspointread = "off";
	} else if (EsdToolbar.statuspointread == "off") {
		EsdToolbar.storage.setCookie("PointReadIsOn", "false", 10);
		jq_t("#toolbar_Pointread").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/point4.png");
		jq_t("#toolbar_Pointread").removeClass("PointreadOn");
		EsdToolbar.speak.sound.closePointSpeak();
		EsdToolbar.statuspointread = "on";
	}
};

//自动朗读
EsdToolbar.speak.sound.automateSpeak = function(){

	if(EsdToolbar.speak.speakerStatus){//如果开启指读,则关闭 指读.
		jq_t("#toolbar_Pointread").trigger("click");
		EsdToolbar.speak.thisdomPoint=null;
	}
	if(EsdToolbar.speak.keybordSpeakStatus){//如果开启键盘朗读则关闭
		jq_t("#toolbar_keybordRead").trigger("click");
		EsdToolbar.speak.thisdomKB=null;
	}
	
	EsdToolbar.targetBody.find(".ESDAssetsTextCon").each(function(){
		jq_t(this).unbind("mouseover.pSpeak").unbind("mouseout.pSpeak");
	});
	
	EsdToolbar.targetBody.find(".ESDAssetsTextCon").each(function(){
		var psObj = jq_t(this);
		psObj.bind("mouseover.pSpeak",function(){
			pointSpeakTimeId = setTimeout(function(){
				EsdToolbar.speak.sound.automateSpeakClose();
				EsdToolbar.speak.sound.automateSpeak1(psObj[0]);
			},1000);
			
		});
		psObj.bind("mouseout.pSpeak",function(){
			window.clearTimeout(pointSpeakTimeId);
		});
	});

};
//自动朗读
EsdToolbar.speak.sound.automateSpeak1 = function(t){
	if(EsdToolbar.speak.volume==0||EsdToolbar.isOpen==false){
		return false;
	}
//	EsdToolbar.speak.iframeChange=iframe_change;
	//EsdToolbar.speak.speedFont(); 
	EsdToolbar.speak.automateSpeakStatus = true;
	
	if(EsdToolbar.speak.sound.mp3Object!=null){
		EsdToolbar.speak.sound.mp3Object.destruct();
	}
	
	if(EsdToolbar.speak.speakerStatus){//如果开启指读,则关闭 指读.
		jq_t("#toolbar_Pointread").trigger("click");
		EsdToolbar.speak.thisdomPoint=null;
	}
	if(EsdToolbar.speak.keybordSpeakStatus){//如果开启键盘朗读则关闭
		jq_t("#toolbar_keybordRead").trigger("click");
		EsdToolbar.speak.thisdomKB=null;
	}
	if(EsdToolbar.speak.index ==0 || EsdToolbar.speak.index < EsdToolbar.speak.source.length){
		//如果数组中没有内容 ，则向里添加页面所有对象
		if(EsdToolbar.speak.source.length==0){
			EsdToolbar.targetBody.find(".ESDAssetsTextCon").each(function(){
				EsdToolbar.speak.source.push(this);
			});
		}
		if(t!=undefined){
			for(var j=0;j<EsdToolbar.speak.source.length;j++){
				//alert(speak.source[j]);
				if(EsdToolbar.speak.source[j]==t){
					EsdToolbar.speak.index=j;
					//alert(speak.index);
				}
			}
		}
		EsdToolbar.speak.thisdomAuto=EsdToolbar.speak.source[EsdToolbar.speak.index];
		/*var parent=jq_t(EsdToolbar.speak.thisdomAuto).parent();
		var tagName=jq_t(parent).get(0).tagName;
		if(tagName=='P'||tagName=='DIV'||tagName=='SPAN'||tagName=='INS'){
			var tab1=jq_t(EsdToolbar.speak.thisdomAutoParent).find(".ESDAssetsTextCon:first").attr("tabIndex");
			var tab2=jq_t(parent).find(".ESDAssetsTextCon:first").attr("tabIndex");
			if(tab1!=tab2){
				jq_t(EsdToolbar.speak.thisdomAutoParent).css("background-color",EsdToolbar.speak.thisdomAutoParent_back);
				EsdToolbar.speak.thisdomAutoParent_back = jq_t(parent).css("background-color");
				jq_t(parent).css("background-color","#CCC");
				EsdToolbar.speak.thisdomAutoParent = parent;
			}
		}else{
			jq_t(EsdToolbar.speak.thisdomAutoParent).css("background-color",EsdToolbar.speak.thisdomAutoParent_back);
		}*/
		if(jq_t(EsdToolbar.speak.thisdomAuto).hasClass("esdNavLink")){
			EsdToolbar.speak.index++;
			EsdToolbar.speak.sound.automateSpeak1();
			return;
		}
		jq_t(".esdUnderLine").each(function(){
			jq_t(this).removeClass("esdUnderLine");
		});
		jq_t(EsdToolbar.speak.thisdomAuto).addClass("esdUnderLine"); 
		//获取当前index下的dom对象。
		var text;
		if(jq_t(EsdToolbar.speak.thisdomAuto).parents().is("a")){
		    text = "";
	    }else{
            text=EsdToolbar.manageText(EsdToolbar.speak.thisdomAuto);
        }
		//设置同步屏幕
		EsdToolbar.magnifier.setText(text);
		//如果转换后内容为空，则不朗读,进行下一个内容。
		if(text.length==0){
			//alert(text);
			EsdToolbar.speak.index++;
			EsdToolbar.speak.sound.automateSpeak1();
			return;
		}
		jq_t(EsdToolbar.speak.thisdomAuto).focus();
		if(EsdToolbar.speak.thisdomAuto.tagName == "STRONG"){
			if(jq_t(EsdToolbar.speak.thisdomAuto).attr("aria-label")!=undefined){
				text = jq_t(EsdToolbar.speak.thisdomAuto).attr("aria-label");
			}
		}
		var str = text;
		var strArr = str.split("中国铁路12306");
		var temstr = "";
		for(var i=0;i<strArr.length;i++){
			if(i==strArr.length-1){
				temstr = temstr+strArr[i];
				break;
			}else{
				temstr = temstr+strArr[i]+"中国铁路一二三零六";
			}
		}
		temstr = temstr.replace("单选按钮","丹选按钮");
		temstr = temstr.replace("12306App","一二三零六App");
		var de= base64.e64(temstr.toLocaleLowerCase());
		jq_t.ajax({
			type:'GET',
			url:EsdToolbar.speak.sound.url.ajaxUrl,
			dataType:'jsonp',
			jsonp:"callback",
			data:{"b":de,"s":EsdToolbar.speak.speedVal},
			async: true,
			success:function(data){
				if(EsdToolbar.speak.automateSpeakStatus==false){
					return;
				}
				EsdToolbar.speak.sound.mp3Object=soundManager.createSound({
					id:'tool',
					url:data.u,
					volume: EsdToolbar.speak.volume,
					onload: function(bSuccess) {
						if(!bSuccess){
							automateSpeak();
						}
					},
					onfinish:function(){
						EsdToolbar.speak.sound.mp3Object.destruct();
						EsdToolbar.speak.sound.mp3Object=null;
						EsdToolbar.speak.index++;
						EsdToolbar.speak.sound.automateSpeak1();
					},
					onload:function(l){
						  if(l==0){
								EsdToolbar.speak.sound.mp3Object.destruct();
								EsdToolbar.speak.sound.mp3Object=null;
								EsdToolbar.speak.index++;
								EsdToolbar.speak.sound.automateSpeak1();
						  }
						  
					}
				});
				EsdToolbar.speak.sound.mp3Object.play();
			}
		});
	}else{//如果读完全文，则关闭全文朗读，并清空thisdom
		EsdToolbar.speak.index = 0;
		return;
	}
};
//关闭自动朗读
EsdToolbar.speak.sound.automateSpeakClose = function(){
	EsdToolbar.speak.automateSpeakStatus=false;
	if(EsdToolbar.speak.sound.mp3Object!=null){
		EsdToolbar.speak.sound.mp3Object.destruct();
	}
	EsdToolbar.speak.source=new Array();
	EsdToolbar.speak.index=0;
	EsdToolbar.speak.thisdomAuto=null;
	EsdToolbar.speak.thisdomAuto_back=null;
	EsdToolbar.speak.thisdomAuto_font=null;
	//连读每次鼠标移动后重新指定时 都会调用speak.sound.automateSpeakClose
	//只有当statusbatchRead=="on"时，也就是点击了连读关闭才可以清除mouseover事件否则无法重新指定连读内容
	if(EsdToolbar.statusbatchRead == "on"){		
		EsdToolbar.targetBody.find(".ESDAssetsTextCon").each(function(){
			jq_t(this).unbind("mouseover.pSpeak").unbind("mouseout.pSpeak");
		});
	}
};
//点读与键盘朗读调用sound
EsdToolbar.speak.sound.callSM2 = function(GuTarget){
	if(EsdToolbar.speak.volume==0||EsdToolbar.isOpen==false){
		return false;
	}
	jq_t(".esdUnderLine").each(function(){
		jq_t(this).removeClass("esdUnderLine");
	});
	jq_t(GuTarget).addClass("esdUnderLine"); 
	var text;
	if(jq_t(GuTarget).parents().is("a")){    
	    text = "";
	}else{
        text=EsdToolbar.manageText(GuTarget);
    }
    
	EsdToolbar.speak.thisdom=GuTarget; //恢复之前选第一句只变黑第一句不是一段变黑  添加这句和注释了下面一段
	if(text.replace(/[ ]/g,"").length==0){
		return;
	}
	//设置同步屏幕
	EsdToolbar.magnifier.setText(text);
	if(GuTarget.tagName == "STRONG"){
		if(jq_t(GuTarget).attr("aria-label")!=undefined){
			text = jq_t(GuTarget).attr("aria-label");
		}
	}
	var str = text;
	var strArr = str.split("中国铁路12306");
	var temstr = "";
	for(var i=0;i<strArr.length;i++){
		if(i==strArr.length-1){
			temstr = temstr+strArr[i];
			break;
		}else{
			temstr = temstr+strArr[i]+"中国铁路一二三零六";
		}
	}
	temstr = temstr.replace("单选按钮","丹选按钮");
	var de= base64.e64(temstr.toLocaleLowerCase());
	jq_t.ajax({
		type:'GET',
		url:EsdToolbar.speak.sound.url.ajaxUrl,
		dataType:'jsonp',
		jsonp:"callback",
		data:{"b":de,"s":EsdToolbar.speak.speedVal},
		async: false,
		success:function(data){
			if(EsdToolbar.speak.sound.mp3Object!=null&&EsdToolbar.speak.sound.mp3Object!=false){
				EsdToolbar.speak.sound.mp3Object.destruct();
			}
			EsdToolbar.speak.sound.mp3Object=soundManager.createSound({
						id:'tool',
						url:data.u,
						volume: EsdToolbar.speak.volume,
						  onload:function(l){
							  if(l==0){
									if(EsdToolbar.speak.sound.mp3Object!=null&&EsdToolbar.speak.sound.mp3Object!=false){
										EsdToolbar.speak.sound.mp3Object.destruct();
									}
							  }
							  
						}
				});
			if(EsdToolbar.speak.sound.mp3Object!=false){
				EsdToolbar.speak.sound.mp3Object.play();
			}
		}
	});
	
};
var pointSpeakTimeId;
//点读播放
EsdToolbar.speak.sound.startPointSpeak = function(GuTarget){
//	EsdToolbar.speak.iframeChange=iframe_change;
	//EsdToolbar.speak.speedFont();
	EsdToolbar.speak.speakerStatus=true;

	if(EsdToolbar.speak.automateSpeakStatus){
		jq_t("#toolbar_batchRead").trigger("click");
		EsdToolbar.speak.thisdom=null;	
	}
	if(EsdToolbar.speak.keybordSpeakStatus){
		jq_t("#toolbar_keybordRead").trigger("click");
		EsdToolbar.speak.thisdom=null;
	}
	//重复检测，如果鼠标移动时在同一元素上则不触发以后方法。
	if(EsdToolbar.speak.thisdom!=null&&EsdToolbar.speak.thisdom==GuTarget){
		return;
	}

	EsdToolbar.targetBody.find(".ESDAssetsTextCon").each(function(){
		jq_t(this).unbind("mouseover.pSpeak").unbind("mouseout.pSpeak");
		jq_t(this).unbind("focus.fSpeak").unbind("blur.fSpeak");
	});
	EsdToolbar.targetBody.find(".ESDAssetsTextCon").each(function(){
		var psObj = jq_t(this);
		psObj.bind("mouseover.pSpeak",function(){
			pointSpeakTimeId = setTimeout(function(){
				EsdToolbar.speak.sound.callSM2(psObj[0]);
			},500);
			
		});
		psObj.bind("mouseout.pSpeak",function(){
			window.clearTimeout(pointSpeakTimeId);
		});
		psObj.bind("focus.fSpeak",function(){
			pointSpeakTimeId = setTimeout(function(){
				EsdToolbar.speak.sound.callSM2(psObj[0]);
			},500);
			
		});
		psObj.bind("blur.fSpeak",function(){
 			window.clearTimeout(pointSpeakTimeId);
 		});
	});
	
};
//关闭点读播放
EsdToolbar.speak.sound.closePointSpeak = function(){
	window.clearTimeout(pointSpeakTimeId);
	if(EsdToolbar.speak.sound.mp3Object!=null&&EsdToolbar.speak.sound.mp3Object!=false){
		EsdToolbar.speak.sound.mp3Object.destruct();
	}
	EsdToolbar.speak.speakerStatus=false;
	//为鼠标指中，并有文本内容的元素更换背景色，（还原）speakFousOn
//	if(EsdToolbar.speak.iframeChange==iframe_change){
			if(EsdToolbar.speak.thisdom_type=="css"){
				jq_t(EsdToolbar.speak.thisdom).css("background-color","");
				jq_t(EsdToolbar.speak.thisdom).css("color","");
			}
			if(EsdToolbar.speak.thisdom_type=="style"){
				jq_t(EsdToolbar.speak.thisdom).css("background-color",EsdToolbar.speak.thisdom_back);
				jq_t(EsdToolbar.speak.thisdom).css("color","");
			}
//	}
	EsdToolbar.speak.thisdom_type=null;
	EsdToolbar.speak.thisdom=null;
	EsdToolbar.speak.thisdom_back=null;

	EsdToolbar.targetBody.find(".ESDAssetsTextCon").each(function(){
		jq_t(this).unbind("mouseover.pSpeak").unbind("mouseout.pSpeak");
		jq_t(this).unbind("focus.fSpeak").unbind("blur.fSpeak");
	});
};
//打开键盘朗读
EsdToolbar.speak.sound.openKeybordSpeak = function(){

};
//关闭键盘朗读
EsdToolbar.speak.sound.closeKeybordSpeak = function(){

};
//语音提示
EsdToolbar.speak.sound.voicePrompt = {};
EsdToolbar.speak.sound.voicePrompt.play = function(voiceId,voiceUrl){
	if(EsdToolbar.speak.sound.voicePromptObject != null){
		EsdToolbar.speak.sound.voicePromptObject.destruct();
	}
	EsdToolbar.speak.sound.voicePromptObject=soundManager.createSound({
		id:voiceId,
		url:voiceUrl,
		onfinish:function(){
			EsdToolbar.speak.sound.voicePromptObject.destruct();
		}
	});
	EsdToolbar.speak.sound.voicePromptObject.play();
};
//播放提示Alt+0
EsdToolbar.speak.sound.voicePrompt.alt0 = function(){
	var id = "prompt_alt0";
	var url = EsdToolbar.speak.sound.url.alt_0;
	EsdToolbar.speak.sound.voicePrompt.play(id,url);
};
//播放提示Shift+0
EsdToolbar.speak.sound.voicePrompt.shift0 = function(){
	var id = "prompt_shift0";
	var url = EsdToolbar.speak.sound.url.shift_0;
	EsdToolbar.speak.sound.voicePrompt.play(id,url);
};
//播放提示Shift+z
EsdToolbar.speak.sound.voicePrompt.shiftz = function(){
	var id = "prompt_shiftz";
	var url = EsdToolbar.speak.sound.url.shift_z;
	//speak.sound.voicePrompt.play(id,url);
	var de= base64.e64(EsdToolbar.toolbarConfig.speak.welcome);
	jq_t.ajax({
		type:'GET',
		url:EsdToolbar.speak.sound.url.ajaxUrl,
		dataType:'jsonp',
		jsonp:"callback",
		data:{"b":de,"s":0},
		async: true,
		success:function(data){
			tempVoiceObject=soundManager.createSound({
				id:"prompt_welcome",
				url:data.u,
				volume: EsdToolbar.speak.volume,
				onfinish:function(){
					EsdToolbar.speak.sound.voicePrompt.play(id,url);
					tempVoiceObject.destruct();
				}
			});
			tempVoiceObject.play();
		}
	});
};
//播放工具栏介绍
EsdToolbar.speak.sound.voicePrompt.intordus = function(){
	var id = "prompt_intordus";
	var url = EsdToolbar.speak.sound.url.intordus;
	EsdToolbar.speak.sound.voicePrompt.play(id,url);
};
//播放工具栏介绍
EsdToolbar.speak.sound.voicePrompt.description = function(){
	var id = "prompt_description";
	var url = EsdToolbar.speak.sound.url.description;
	EsdToolbar.speak.sound.voicePrompt.play(id,url);
};
//播放打开页面提示
EsdToolbar.speak.sound.voicePrompt.pageTitleReader = function(){
	var str = EsdToolbar.pageTitleStr;
	var strArr = str.split("中国铁路12306");
	var temstr = "";
	for(var i=0;i<strArr.length;i++){
		if(i==strArr.length-1){
			temstr = temstr+strArr[i];
			break;
		}else{
			temstr = temstr+strArr[i]+"中国铁路一二三零六";
		}
	}
	temstr = temstr.replace("单选按钮","丹选按钮");
	var de= base64.e64(temstr.toLocaleLowerCase());
	jq_t.ajax({
		type:'GET',
		url:EsdToolbar.speak.sound.url.ajaxUrl,
		dataType:'jsonp',
		jsonp:"callback",
		data:{"b":de,"s":EsdToolbar.speak.speedVal},
		async: true,
		success:function(data){
			if(EsdToolbar.speak.sound.mp3Object!=null&&EsdToolbar.speak.sound.mp3Object!=false){
				EsdToolbar.speak.sound.mp3Object.destruct();
			}
			EsdToolbar.speak.sound.mp3Object=soundManager.createSound({
				id:"tool",
				url:data.u,
				volume: EsdToolbar.speak.volume,
				onfinish:function(){
					EsdToolbar.speak.sound.mp3Object.destruct();
				}
			});
			EsdToolbar.speak.sound.mp3Object.play();
		}
	});
};

EsdToolbar.speak.init = function(){
	var speakFunctionIsOn = EsdToolbar.storage.getCookie("speakFunctionIsOn");
	if(speakFunctionIsOn!=null&&speakFunctionIsOn == "true"){
		EsdToolbar.statusspeakOnOff = "on";
		EsdToolbar.speak.toolbarSpeakOnOff();	
		var batchReadIsOn = EsdToolbar.storage.getCookie("batchReadIsOn");
		if(batchReadIsOn!==null&&batchReadIsOn == "true"){
			EsdToolbar.rebuild();
			EsdToolbar.statusbatchRead = "on"
			EsdToolbar.speak.toolbarBatchRead();
		}
		
		var PointReadIsOn = EsdToolbar.storage.getCookie("PointReadIsOn");
		if(PointReadIsOn!==null&&PointReadIsOn == "true"){
			EsdToolbar.rebuild();
			EsdToolbar.statuspointread = "on"
			EsdToolbar.speak.toolbarPointread();
		}
	}
};

//调整音量
EsdToolbar.speak.volumeInit = function(){
	var speakVolume = EsdToolbar.storage.getCookie("speakVolume");
	if(speakVolume==null||speakVolume=="null"){
		speakVolume = 100;
		EsdToolbar.storage.setCookie("speakVolume", 100, 10);
	}
	EsdToolbar.speak.volume = speakVolume*1;
	var targetObj = jq_t("#toolbar_speakVolume");
	var targetObj_read = jq_t("#toolbar_speakOnOff");
	if(EsdToolbar.speak.volume == 100){ //当前是普通音量 切换到最高音量
		targetObj.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound_big.png");
		targetObj.find("img").attr({title:"当前声音已开启，关闭声音Shift+2", alt:"当前声音已开启，关闭声音Shift+2" })
		targetObj_read.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound_big.png");
		targetObj_read.find("img").attr({title:"当前声音已开启，关闭声音Shift+2", alt:"当前声音已开启，关闭声音Shift+2" })
	} else if(EsdToolbar.speak.volume == 0){ //当前是最高音量  切换到0
		targetObj.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound3.png");
		targetObj.find("img").attr({title:"当前声音已关闭，开启声音Shift+2", alt:"当前声音已关闭，开启声音Shift+2" })
		targetObj_read.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound3.png");
		targetObj_read.find("img").attr({title:"当前声音已关闭，开启声音Shift+2", alt:"当前声音已关闭，开启声音Shift+2" })
		EsdToolbar.speak.volume = 0;
	}
};
EsdToolbar.speak.volumeChange = function(){
	var targetObj = jq_t("#toolbar_speakVolume");
	var targetObj_read = jq_t("#toolbar_speakOnOff");
	if(EsdToolbar.speak.volume == 0){ //当前是普通音量 切换到最高音量
		targetObj.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound_big.png");
		targetObj.find("img").attr({title:"当前声音已开启，关闭声音Shift+2", alt:"当前声音已开启，关闭声音Shift+2" });
		targetObj_read.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound_big.png");
		targetObj_read.find("img").attr({title:"当前声音已开启，关闭声音Shift+2", alt:"当前声音已开启，关闭声音Shift+2" });
		EsdToolbar.speak.volume = 100;
		EsdToolbar.buttonReader.read("speakOn");
	} else if(EsdToolbar.speak.volume == 100){ //当前是最高音量  切换到0
		targetObj.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound3.png");
		targetObj.find("img").attr({title:"当前声音已关闭，开启声音Shift+2", alt:"当前声音已关闭，开启声音Shift+2" });
		targetObj_read.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound3.png");
		targetObj_read.find("img").attr({title:"当前声音已关闭，开启声音Shift+2", alt:"当前声音已关闭，开启声音Shift+2" });
		EsdToolbar.speak.volume = 0;
	}
	EsdToolbar.storage.setCookie("speakVolume", EsdToolbar.speak.volume, 10);
	soundManager.setVolume("tool",EsdToolbar.speak.volume); 
};
//阅读方式
EsdToolbar.speak.readStatus = "pointRead";
EsdToolbar.speak.readChangeInit = function(){
	var readStatus = EsdToolbar.storage.getCookie("readStatus");
	if(readStatus==null||readStatus=="null"){
		EsdToolbar.speak.readStatus = "pointRead";
		EsdToolbar.storage.setCookie("readStatus", EsdToolbar.speak.readStatus, 10);
		//默认开启指读
		jq_t("#toolbar_readChange").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/point3.png");
		//更改连读状态
		EsdToolbar.statusbatchRead="off";
		EsdToolbar.speak.toolbarBatchRead();
		//开启只读
		EsdToolbar.speak.sound.startPointSpeak();
		EsdToolbar.statuspointread = "off";
		EsdToolbar.speak.readStatus = "pointRead";
	}else{
		if(readStatus=="pointRead"){// 初始化这的状态是反向的... 
			jq_t("#toolbar_readChange").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/point3.png");
			//更改连读状态
			EsdToolbar.statusbatchRead="off";
			EsdToolbar.speak.toolbarBatchRead();
			//开启只读
			EsdToolbar.speak.sound.startPointSpeak();
			EsdToolbar.statuspointread = "off";
			EsdToolbar.speak.readStatus = "pointRead";
			jq_t("#toolbar_readChange").attr("title","当前为指读模式, 切换阅读方式Shift+4");
			jq_t("#toolbar_readChange img").attr("title","当前为指读模式, 切换阅读方式Shift+4").attr("alt","当前为指读模式, 切换阅读方式Shift+4");
		}else{
			jq_t("#toolbar_readChange").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/continuous_stop1.png");
			//更改只读状态
			EsdToolbar.statuspointread="off";
			EsdToolbar.speak.toolbarPointread();
			EsdToolbar.pageRebuild.findDisplay();//连读时不需要读出隐藏的二级菜单
			//开启连读
			EsdToolbar.speak.sound.automateSpeak();
			EsdToolbar.statusbatchRead = "off";
			EsdToolbar.speak.readStatus = "batchRead";
			jq_t("#toolbar_readChange").attr("title","当前为连读模式, 切换阅读方式Shift+4");
			jq_t("#toolbar_readChange img").attr("title","当前为连读模式, 切换阅读方式Shift+4").attr("alt","当前为连读模式, 切换阅读方式Shift+4");
		}
	}
};
EsdToolbar.speak.readChange= function(){
	if(EsdToolbar.speak.readStatus=="pointRead"){
		jq_t("#toolbar_readChange").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/continuous_stop1.png");
		//更改只读状态
		EsdToolbar.statuspointread="off";
		EsdToolbar.speak.toolbarPointread();
		EsdToolbar.pageRebuild.findDisplay();//连读时不需要读出隐藏的二级菜单
		//开启连读
		EsdToolbar.speak.sound.automateSpeak();
		EsdToolbar.statusbatchRead = "off";
		EsdToolbar.speak.readStatus = "batchRead";
		EsdToolbar.storage.setCookie("readStatus", EsdToolbar.speak.readStatus, 10);
		jq_t("#toolbar_readChange").attr("title","当前为连读模式, 切换阅读方式Shift+4");
		jq_t("#toolbar_readChange img").attr("title","当前为连读模式, 切换阅读方式Shift+4").attr("alt","当前为连读模式, 切换阅读方式Shift+4");
		EsdToolbar.buttonReader.read("changeBatch");
	}else{
		jq_t("#toolbar_readChange").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/point3.png");
		//更改连读状态
		EsdToolbar.statusbatchRead="off";
		EsdToolbar.speak.toolbarBatchRead();
		//开启只读
		EsdToolbar.speak.sound.startPointSpeak();
		EsdToolbar.statuspointread = "off";
		EsdToolbar.speak.readStatus = "pointRead";
		EsdToolbar.storage.setCookie("readStatus", EsdToolbar.speak.readStatus, 10);
		jq_t("#toolbar_readChange").attr("title","当前为指读模式, 切换阅读方式Shift+4");
		jq_t("#toolbar_readChange img").attr("title","当前为指读模式, 切换阅读方式Shift+4").attr("alt","当前为指读模式, 切换阅读方式Shift+4");
		EsdToolbar.buttonReader.read("changePoint");
	}
};
//====================================== speak 结束 =================================================

//====================================== 字体放大缩小 开始 =================================================
EsdToolbar.changeFont = {};
EsdToolbar.changeFont.fontZoom = 1;//放大、缩小倍数
EsdToolbar.changeFont.fontBigger = function(){
	EsdToolbar.changeFont.fontZoom = (EsdToolbar.changeFont.fontZoom*10 + 2)/10; // 其实就是changeFont.fontZoom += 0.2;  但是这么直接算小数会出现1.5999999这种不准确的数字
	if(EsdToolbar.changeFont.fontZoom>=1.4){
		jq_t(".header_left").css("width","590px");
	}
	if(EsdToolbar.changeFont.fontZoom>1.6){
		EsdToolbar.changeFont.fontZoom = 1.6;
//		alert("文字已放大至最大！");
		return false;
	}
	EsdToolbar.changeFont.change("bigger");//放大文字
};

EsdToolbar.changeFont.fontSmaller = function(){
	if(EsdToolbar.changeFont.fontZoom<1.4){
		jq_t(".header_left").css("width","453px");
	}
	if(EsdToolbar.changeFont.fontZoom>1){//当点击放大文字按钮后才能缩小文字
		EsdToolbar.changeFont.fontZoom = (EsdToolbar.changeFont.fontZoom*10 - 2)/10; // 理由同上
		EsdToolbar.changeFont.change("smaller");//缩小文字
	}else{
//		alert("文字已缩小至最小！");
	}
};

EsdToolbar.changeFont.fontDefault = function(){
	EsdToolbar.changeFont.fontZoom = 1;
	EsdToolbar.changeFont.change("fontdefault");//还原文字
};

EsdToolbar.changeFont.change = function(fontAct){
	EsdToolbar.storage.setCookie("fontZoom", EsdToolbar.changeFont.fontZoom, 10);
	EsdToolbar.targetBody.find(".ESDAssetsTextCon:not(#toolbarHtml *)").each(function(){
		jq_t(this).css("font-size",function(index,value){
			if(fontAct == "bigger"){
				var basicPX = parseFloat(value);
				if(EsdToolbar.changeFont.fontZoom>1.2){
					var newValue = jq_t(this).attr("class").split("fontModify_")[1];
					basicPX = parseFloat(newValue)/(((EsdToolbar.changeFont.fontZoom*10)-2)/10); //changeFont.fontZoom-0.2  获取当前字体处于的倍数
				}
				var fontSize = basicPX*EsdToolbar.changeFont.fontZoom;
				var lastFontSize = basicPX*(EsdToolbar.changeFont.fontZoom-0.2);
				jq_t(this).addClass("fontModify_"+fontSize.toFixed(2));
				jq_t(this).removeClass("fontModify_"+lastFontSize.toFixed(2));
				return fontSize+"px";
			}else if(fontAct == "smaller"){
				var newValue = jq_t(this).attr("class").split("fontModify_")[1];
				var basicPX = parseFloat(newValue)/(((EsdToolbar.changeFont.fontZoom*10)+2)/10); //changeFont.fontZoom+0.2  获取当前字体处于的倍数
				var fontSize = basicPX*EsdToolbar.changeFont.fontZoom;
				var lastFontSize = basicPX*(EsdToolbar.changeFont.fontZoom+0.2);
				jq_t(this).addClass("fontModify_"+fontSize.toFixed(2));
				jq_t(this).removeClass("fontModify_"+lastFontSize.toFixed(2));
				return fontSize+"px";
			}else{
				var basicPX = parseFloat(value)/EsdToolbar.changeFont.fontZoom;
				return basicPX+"px";
			}
			
		});
	});	
};

EsdToolbar.changeFont.init = function(){
	var fontZoom = EsdToolbar.storage.getCookie("fontZoom")*1;
	if(fontZoom!=null&& fontZoom > 1){	
		EsdToolbar.changeFont.fontZoom = fontZoom
		EsdToolbar.rebuild();
		EsdToolbar.targetBody.find(".ESDAssetsTextCon:not(#toolbarHtml *)").each(function(){
			jq_t(this).css("font-size",function(index,value){
				var basicPX = parseFloat(value);
				var fontSize = basicPX*EsdToolbar.changeFont.fontZoom;
				jq_t(this).addClass("fontModify_"+fontSize.toFixed(2));
				return fontSize+"px";
			});
		});	
	}
};

//====================================== 字体放大缩小 结束 =================================================

//====================================== 放大镜 结束 =================================================

EsdToolbar.magnifier = {};
EsdToolbar.statusfont = "simplified";
EsdToolbar.statusmagnifier = "on";
EsdToolbar.strtext = "";
EsdToolbar.magnifier.pyzt = false; //拼音功能状态

EsdToolbar.magnifier.toolbarMagnifier = function () {
	if (EsdToolbar.statusmagnifier == "off") {
		EsdToolbar.magnifier.closeMagnifier();
		EsdToolbar.statusmagnifier = "on";
	} else {
		//alert(EsdToolbar.statusmagnifier);
		EsdToolbar.magnifier.openMagnifier();
		EsdToolbar.statusmagnifier = "off";
	}
};
EsdToolbar.magnifier.setText = function (text) {
	if (jq_t("#ymd_magnifier").length > 0) {
		text = jq_t.trim(text);
		var str = text;
		var strArr = str.split("2021杠01杠01");
		var temstr2 = "";
		for(var i=0;i<strArr.length;i++){
			if(i==strArr.length-1){
				temstr2 = temstr2+strArr[i];
				break;
			}else{
				temstr2 = temstr2+strArr[i]+"2021-01-01";
			}
		}
		text = temstr2;
		if (EsdToolbar.magnifier.pyzt) {
			var pys = new Array();
			var str = new String(EsdToolbar.magnifier.getpinyin(text));
			pys = str.split(",");
			if (pys.length != text.length) {
				return;
			}
			if (EsdToolbar.statusfont == "traditional") {
				EsdToolbar.strtext = EsdToolbar.traditionalized(text);
			} else {
				EsdToolbar.strtext = text;
			}
			jq_t("#ymd_screen tr").remove();
			var tempLength = pys.length/20;
			if(tempLength > tempLength.toFixed(0)){
				tempLength = tempLength.toFixed(0)*1+1;
			}else{
				tempLength = tempLength.toFixed(0)*1;
			}
			
			for(var ti = 0; ti<tempLength*2; ti++){
				jq_t("#ymd_screen tbody").append("<tr></tr>");
			}
			jq_t("#ymd_screen tbody tr:odd").each(function(index){
				var trNun = index*2;
				for (var i = index*20; i < index*20+20; i++) {
					if(i>=pys.length){
						break;
					}
					jq_t("#ymd_screen tr:eq("+trNun+")").append("<td >" + pys[i] + "</td>");
					jq_t("#ymd_screen tr:eq("+(trNun+1)+")").append("<td >" + EsdToolbar.strtext.charAt(i) + "</td>");
				}
			});
		} else {
			if (EsdToolbar.statusfont == "traditional") {
				EsdToolbar.strtext = EsdToolbar.traditionalized(text);
				jq_t("#ymd_magnifier span").html(EsdToolbar.strtext);
			} else {
				jq_t("#ymd_magnifier span").html(text);
			}
		}
	}
};
//打开放大镜功能
EsdToolbar.magnifier.openMagnifier = function () {
	EsdToolbar.storage.setCookie("magnifierIsOn", "true", 10);
	var text = "";
	var str = '<div id="ymd_magnifier">' +
		'<div id="ymd_screen">' +
		'<div id="ymd_magnifier_left" style="overflow: auto;">' +
		'<span></span>' +
		'</div>' +
		'<div id="ymd_magnifier_right">' +
		'<ul>' +
		'<li id="showscreen_right_closs">' +
		'<a href="javascript:void(0);" id="ymd_magnifierClose" title="关闭" ><img class="ESDAssetsTextCon" src="'+EsdToolbar.toolbarFileURL+'img/closed1.png" title="关闭" alt=""/></a>' +
		'</li>' +
		'<li id="showscreen_right_screen_zh">' +
		'<a href="javascript:void(0);" id="toolbar_simplified"  title="简体" ><img class="ESDAssetsTextCon" src="'+EsdToolbar.toolbarFileURL+'img/zh1.png" title="简体" alt=""/></a>' +
		'<a href="javascript:void(0);" id="toolbar_traditional"  title="繁体" ><img class="ESDAssetsTextCon" src="'+EsdToolbar.toolbarFileURL+'img/tw1.png" title="繁体" alt=""/></a>' +
		'</li >' +
		'<li id="showscreen_right_screen_py">' +
		'<a href="javascript:void(0);" id="ymd_zhpy" title="拼音开关" ><img class="ESDAssetsTextCon" src="'+EsdToolbar.toolbarFileURL+'img/py1.png" title="拼音开关" alt=""/></a>' +
		'</li >' +
		'</ul>' +
		'</div>' +
		'</div>' +
		'</div>';

	var esdMagnifier = document.createElement("style");
	esdMagnifier.setAttribute("type", "text/css");
	esdMagnifier.id="esdMagnifierStyle";
	document.head.appendChild(esdMagnifier);
	jq_t(esdMagnifier).html("body {padding-bottom:140px;}");
	
	EsdToolbar.targetBody.append(str);

	jq_t("#ymd_magnifierClose").click(function () {
		jq_t("#toolbar_magnifier").trigger("click");
	});

	jq_t("#ymd_zhpy").click(function () {
		EsdToolbar.magnifier.showpinyin();
	});

	jq_t("#toolbar_simplified").click(function () {
		EsdToolbar.storage.setCookie("statusfont", "simplified", 10);
		EsdToolbar.statusfont = "simplified";
	});

	jq_t("#toolbar_traditional").click(function () {
		EsdToolbar.storage.setCookie("statusfont", "traditional", 10);
		EsdToolbar.statusfont = "traditional";
	});

	document.body.onmousemove = function (e) {
		e = e || window.event;
		var GuTarget = e.srcElement ? e.srcElement : e.target;
		text = EsdToolbar.manageText(GuTarget);
		if(text==""||jq_t(GuTarget).parents("#ymd_magnifier_left").length==1){
        	return;
        }
		text = jq_t.trim(text);
		var str = text;
		var strArr = str.split("2021杠01杠01");
		var temstr2 = "";
		for(var i=0;i<strArr.length;i++){
			if(i==strArr.length-1){
				temstr2 = temstr2+strArr[i];
				break;
			}else{
				temstr2 = temstr2+strArr[i]+"2021-01-01";
			}
		}
		text = temstr2;
		if (jq_t("#ymd_magnifier").length > 0) {
			if (EsdToolbar.magnifier.pyzt) {
				var pys = new Array();
				var str = new String(EsdToolbar.magnifier.getpinyin(text));
				pys = str.split(",");
				if (pys.length != text.length) {
					return;
				}
				if (EsdToolbar.statusfont == "traditional") {
					EsdToolbar.strtext = EsdToolbar.traditionalized(text);
				} else {
					EsdToolbar.strtext = text;
				}
				jq_t("#ymd_screen tr").remove();
				var tempLength = pys.length/20;
				if(tempLength > tempLength.toFixed(0)){
					tempLength = tempLength.toFixed(0)*1+1;
				}else{
					tempLength = tempLength.toFixed(0)*1;
				}
				
				for(var ti = 0; ti<tempLength*2; ti++){
					jq_t("#ymd_screen tbody").append("<tr></tr>");
				}
//				if(pys.length>40){
//					jq_t("#ymd_magnifier_left").css("overflow-y","scroll");
//				}else{
//					jq_t("#ymd_magnifier_left").css("overflow-y","");
//				}
//				console.log(jq_t("#ymd_screen tbody tr").length);
				jq_t("#ymd_screen tbody tr:odd").each(function(index){
					var trNun = index*2;
					for (var i = index*20; i < index*20+20; i++) {
						if(i>=pys.length){
							break;
						}
						jq_t("#ymd_screen tr:eq("+trNun+")").append("<td >" + pys[i] + "</td>");
						jq_t("#ymd_screen tr:eq("+(trNun+1)+")").append("<td >" + EsdToolbar.strtext.charAt(i) + "</td>");
					}
				});
//				for (var i = 0; i < pys.length; i++) {
//					if (i < 20) {
//						jq_t("#ymd_screen tr:eq(0)").append("<td >" + pys[i] + "</td>");
//						jq_t("#ymd_screen tr:eq(1)").append("<td >" + EsdToolbar.strtext.charAt(i) + "</td>");
//					} else {
//						//设置空td 保证下方tr属于居中状态。
//						if (i == 20) {
//							for (var k = 0.5; k < (40 - pys.length) / 2; k++) {
//								jq_t("#ymd_screen tr:eq(2)").append("<td ></td>");
//								jq_t("#ymd_screen tr:eq(3)").append("<td ></td>");
//							}
//						}
//						jq_t("#ymd_screen tr:eq(2)").append("<td >" + pys[i] + "</td>");
//						jq_t("#ymd_screen tr:eq(3)").append("<td >" + EsdToolbar.strtext.charAt(i) + "</td>");
//					}
//				}
			} else {
				if (EsdToolbar.statusfont == "traditional") {
					EsdToolbar.strtext = EsdToolbar.traditionalized(text);
					jq_t("#ymd_magnifier span").html(EsdToolbar.strtext);
				} else {
					jq_t("#ymd_magnifier span").html(text);
				}
			}
		}
	};
	jq_t(".ESDAssetsTextCon").each(function(){
		jq_t(this).bind("focus.ffSpeak",function(){
            var text;
            if(jq_t(this).parents().is("a")){    
                text = "";
            }else{
                text=EsdToolbar.manageText(this);
            }
			EsdToolbar.magnifier.setText(text);
		});
	});
	jq_t("#toolbar_magnifier").attr("title","当前显示屏已开启，关闭显示屏Shift+0");
	jq_t("#toolbar_magnifier img").attr("title","当前显示屏已开启，关闭显示屏Shift+0");//.attr("alt","当前显示屏已开启，关闭显示屏Shift+0");
	jq_t("#toolbar_magnifier_2").attr("title","当前显示屏已开启，关闭显示屏Shift+0");
	jq_t("#toolbar_magnifier_2 img").attr("title","当前显示屏已开启，关闭显示屏Shift+0");//.attr("alt","当前显示屏已开启，关闭显示屏Shift+0");
};

//关闭放大镜功能
EsdToolbar.magnifier.closeMagnifier = function () {
	jq_t(document).find("#esdMagnifierStyle").remove()
	EsdToolbar.storage.setCookie("magnifierIsOn", "false", 10);
	jq_t("#ymd_magnifier").remove();
	EsdToolbar.magnifier.pyzt = false;
	EsdToolbar.statusfont = "simplified";
	EsdToolbar.statusmagnifier = "on";
	jq_t("#toolbar_magnifier").attr("title","当前显示屏已关闭，开启显示屏Shift+0");
	jq_t("#toolbar_magnifier img").attr("title","当前显示屏已关闭，开启显示屏Shift+0");//.attr("alt","当前显示屏已关闭，开启显示屏Shift+0");
	jq_t("#toolbar_magnifier_2").attr("title","当前显示屏已关闭，开启显示屏Shift+0");
	jq_t("#toolbar_magnifier_2 img").attr("title","当前显示屏已关闭，开启显示屏Shift+0");//.attr("alt","当前显示屏已关闭，开启显示屏Shift+0");
	jq_t(".ESDAssetsTextCon").each(function(){
		jq_t(this).unbind("focus.ffSpeak")
	});
};
//开启拼音功能
EsdToolbar.magnifier.showpinyin = function () {
	if (!EsdToolbar.magnifier.pyzt) {
		EsdToolbar.storage.setCookie("pinyinIsOn", "true", 10);
		EsdToolbar.magnifier.pyzt = true;
		jq_t("#ymd_screen span").remove();
		jq_t("#ymd_zhpy").val("关闭拼音");
		jq_t("#ymd_magnifier_left").append("<table border='0'  align='center' cellspacing='0' cellpadding='0' style='margin:0 auto;margin-top:10px;' valign='middle'><tbody></tbody></table>");
	} else {
		EsdToolbar.magnifier.pyzt = false;
		EsdToolbar.storage.setCookie("pinyinIsOn", "false", 10);
		jq_t("#ymd_screen table").remove();
		jq_t("#ymd_zhpy").val("开启拼音");
		jq_t("#ymd_magnifier_left").append("<span></span>");
	}
};
//字符串转化拼音，需要引入pinyin.js文件。
EsdToolbar.magnifier.getpinyin = function (obj) {
	if (obj == "" || obj == null) {
		return;
	}
	var py = "";
	for (var i = 0; i < obj.length; i++) {
		var z = obj.charAt(i);
		//正则校验，非已知汉字用符号占位。用于下步切割、

		if (/^[A-Za-z]+jq_t/.test(z)) {
			py += ",";
		} else if (/[,\.;\:"'!，。！《》【】[\]<>；]/.test(z)) {
			py += ",";
		} else if (z in pinyin) {
			var tempStrPinYin = pinyin[z];
			if(tempStrPinYin.split(",").length>1){
				py = py + pinyin[z].split(",")[0] + ",";
			}else{
				py = py + pinyin[z] + ",";
			}
		} else {
			py += ",";
		}
	}
	//去除最后一个逗号
	py = py.substr(0, py.length - 1);
	return py;

};

EsdToolbar.magnifier.init = function(){
	var magnifierIsOn = EsdToolbar.storage.getCookie("magnifierIsOn");
	if(magnifierIsOn!=null&&magnifierIsOn == "true"){
		EsdToolbar.magnifier.toolbarMagnifier();
		var pinyinIsOn = EsdToolbar.storage.getCookie("pinyinIsOn");
		if(pinyinIsOn!=null&&pinyinIsOn == "true"){
			EsdToolbar.magnifier.pyzt = false;
			EsdToolbar.magnifier.showpinyin();
		}
		var statusfont = EsdToolbar.storage.getCookie("statusfont");
		if(statusfont!=null&&statusfont == "traditional"){
			EsdToolbar.statusfont = "traditional";
		}
	}
};

//====================================== 放大镜 结束 =================================================

//====================================== 简繁转换 开始 =================================================

EsdToolbar.traditionalized = function(cc) {
    var str = '';
    for (var i = 0; i < cc.length; i++) {
        if (EsdToolbar.charPYStr().indexOf(cc.charAt(i)) != -1) str += EsdToolbar.ftPYStr().charAt(EsdToolbar.charPYStr().indexOf(cc.charAt(i)));
        else if (EsdToolbar.qqPYStr().indexOf(cc.charAt(i)) != -1) str += EsdToolbar.ftPYStr().charAt(EsdToolbar.qqPYStr().indexOf(cc.charAt(i)));
        else {
            str += cc.charAt(i);
        }
    }
    return str;
};

EsdToolbar.charPYStr = function() {
    return '啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座锕嗳嫒瑷暧霭谙铵鹌媪骜鳌钯呗钣鸨龅鹎贲锛荜哔滗铋筚跸苄缏笾骠飑飙镖镳鳔傧缤槟殡膑镔髌鬓禀饽钹鹁钸骖黪恻锸侪钗冁谄谶蒇忏婵骣觇禅镡伥苌怅阊鲳砗伧谌榇碜龀枨柽铖铛饬鸱铳俦帱雠刍绌蹰钏怆缍鹑辍龊鹚苁骢枞辏撺锉鹾哒鞑骀绐殚赕瘅箪谠砀裆焘镫籴诋谛绨觌镝巅钿癫铫鲷鲽铤铥岽鸫窦渎椟牍笃黩簖怼镦炖趸铎谔垩阏轭锇锷鹗颚颛鳄诶迩铒鸸鲕钫鲂绯镄鲱偾沣凫驸绂绋赙麸鲋鳆钆赅尴擀绀戆睾诰缟锆纥镉颍亘赓绠鲠诟缑觏诂毂钴锢鸪鹄鹘鸹掴诖掼鹳鳏犷匦刿妫桧鲑鳜衮绲鲧埚呙帼椁蝈铪阚绗颉灏颢诃阖蛎黉讧荭闳鲎浒鹕骅桦铧奂缳锾鲩鳇诙荟哕浍缋珲晖诨馄阍钬镬讦诘荠叽哜骥玑觊齑矶羁虿跻霁鲚鲫郏浃铗镓蛲谏缣戋戬睑鹣笕鲣鞯绛缰挢峤鹪鲛疖颌鲒卺荩馑缙赆觐刭泾迳弪胫靓阄鸠鹫讵屦榉飓钜锔窭龃锩镌隽谲珏皲剀垲忾恺铠锴龛闶钪铐骒缂轲钶锞颔龈铿喾郐哙脍狯髋诓诳邝圹纩贶匮蒉愦聩篑阃锟鲲蛴崃徕涞濑赉睐铼癞籁岚榄斓镧褴阆锒唠崂铑铹痨鳓诔缧俪郦坜苈莅蓠呖逦骊缡枥栎轹砺锂鹂疠粝跞雳鲡鳢蔹奁潋琏殓裢裣鲢魉缭钌鹩蔺廪檩辚躏绫棂蛏鲮浏骝绺镏鹨茏泷珑栊胧砻偻蒌喽嵝镂瘘耧蝼髅垆撸噜闾泸渌栌橹轳辂辘氇胪鸬鹭舻鲈脔娈栾鸾銮囵荦猡泺椤脶镙榈褛锊呒唛嬷杩劢缦镘颡鳗麽扪焖懑钔芈谧猕祢渑腼黾缈缪闵缗谟蓦馍殁镆钼铙讷铌鲵辇鲶茑袅陧蘖嗫颟蹑苎咛聍侬哝驽钕傩讴怄瓯蹒疱辔纰罴铍谝骈缥嫔钋镤镨蕲骐绮桤碛颀颃鳍佥荨悭骞缱椠钤嫱樯戗炝锖锵镪羟跄诮谯荞缲硗跷惬锲箧锓揿鲭茕蛱巯赇虮鳅诎岖阒觑鸲诠绻辁铨阕阙悫荛娆桡饪轫嵘蝾缛铷颦蚬飒毵糁缫啬铯穑铩鲨酾讪姗骟钐鳝垧殇觞厍滠畲诜谂渖谥埘莳弑轼贳铈鲥绶摅纾闩铄厮驷缌锶鸶薮馊飕锼谡稣谇荪狲唢睃闼铊鳎钛鲐昙钽锬顸傥饧铴镗韬铽缇鹈阗粜龆鲦恸钭钍抟饨箨鼍娲腽纨绾辋诿帏闱沩涠玮韪炜鲔阌莴龌邬庑怃妩骛鹉鹜饩阋玺觋硖苋莶藓岘猃娴鹇痫蚝籼跹芗饷骧缃飨哓潇骁绡枭箫亵撷绁缬陉荥馐鸺诩顼谖铉镟谑泶鳕埙浔鲟垭娅桠氩厣赝俨兖谳恹闫酽魇餍鼹炀轺鹞鳐靥谒邺晔烨诒呓峄饴怿驿缢轶贻钇镒镱瘗舣铟瘾茔莺萦蓥撄嘤滢潆璎鹦瘿颏罂镛莸铕鱿伛俣谀谕蓣嵛饫阈妪纡觎欤钰鹆鹬龉橼鸢鼋钺郓芸恽愠纭韫殒氲瓒趱錾驵赜啧帻箦谮缯谵诏钊谪辄鹧浈缜桢轸赈祯鸩诤峥钲铮筝骘栉栀轵轾贽鸷蛳絷踬踯觯锺纣绉伫槠铢啭馔颞骓缒诼镯谘缁辎赀眦锱龇鲻偬诹驺鲰镞缵躜鳟讠谫郄勐凼坂垅垴埯埝苘荬荮莜莼菰藁揸吒吣咔咝咴噘噼嚯幞岙嵴彷徼犸狍馀馇馓馕愣憷懔丬溆滟溷漤潴澹甯纟绔绱珉枧桊桉槔橥轱轷赍肷胨飚煳煅熘愍淼砜磙眍钚钷铘铞锃锍锎锏锘锝锪锫锿镅镎镢镥镩镲稆鹋鹛鹱疬疴痖癯裥襁耢颥螨麴鲅鲆鲇鲞鲴鲺鲼鳊鳋鳘鳙鞒鞴齄';
};
EsdToolbar.ftPYStr = function() {
    return '啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案骯昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鱉憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟產闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕雕刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦復傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘桿柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鉤勾溝茍狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡掛褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴匯諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑跡激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競凈炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫瑯榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬貍離漓理李裏鯉禮莉荔吏栗麗厲勵礫歷利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟瞇醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪吶鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬妳匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽嚙鑷鎳涅您檸獰凝寧擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖拋咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啟契砌器氣迄棄汽泣訖掐洽牽扡釬鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌墻薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺剎沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陜擅贍膳善汕扇繕墑傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡臺泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探嘆炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔絳萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟為濰維葦萎委偉偽尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄兇胸匈洶雄熊休修羞朽嗅銹秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勛熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒巖延言顏閻炎沿奄掩眼衍演艷堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液壹壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤於盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓臟葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟真甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀癥鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙誌摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鐘衷終種腫重仲眾舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住註祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄準捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鉆纂嘴醉最罪尊遵昨左佐柞做作坐座錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';
};
EsdToolbar.qqPYStr = function() {
    return '娿婀埃挨餀呃哀皑癌蔼婑銰碍嬡隘鞍氨鮟唵洝暗岸胺案肮昻盎凹獓熬翱仸謸奧襖奧妑捌朳朳妑笆仈疤妑菝柭靶妑耙坝覇罢妑皛柏咟擺佰敗湃稗癍癍搬扳瘢頒闆蝂汾絆柈瓣柈刅绊綁幇梆徬嫎垹蜯嫎蚌镑徬谤苞菢笣褒剝薄雹湺堡怉寶砲蕔懪豹鲍嚗柸碑蕜萆苝輩揹赑钡俻狈備惫焙被渀苯夲苯镚绷甭泵嘣逬腷嬶仳啚毣彼碧蓖幣滭斃毖币庇痹閉獙弊怭澼壁臂鐴陛鞭笾揙貶碥楩變卞辧辮辮猵摽滮鏢錶鳖憋莂癟彬斌濒璸濱摈娦栤窉眪秉饼炳疒並箥菠譒妭钵菠博勃搏铂箔伯帛舶脖膊渤泊訤峬卜誧卟埠芣鈽荹簿蔀怖攃猜裁財財財棌棌采埰婇蔡爘傪蛬殘慙參灿芲舱仺獊蔵懆鐰槽蓸愺厠憡側冊恻層竲揷紁茬嗏楂楂搽镲岔槎诧拆枈豺搀傪蝉镵谗瀍铲浐闡顫誯猖畼甞瑺萇偿肠廠敞畅晿倡趫莏鈔謿謿謿漅訬炒車扯徹掣沏瞮郴烥宸尘曟忱冗陳趁衬撐稱峸橙荿珵塖珵懲僜諴承浧骋秤阣痴歭匙肔呎肔肔恥歯侈呎哧趐斥炽茺沖蟲漴寵菗絒帱帱婤僽薵仇皗瞅忸溴初炪廚廚躇鋤雛蒢篨椘绌储矗搐触處遄巛瑏椽伝船遄賗疮囱幢床闖創欥炊腄腄箠舂椿錞脣錞蒓蠢戥焯疵垐濨雌辭濨瓷詞泚剌賜佽聪茐囱茐苁苁凑粗齰簇娖蹿篡窜凗慛慛脆瘁濢濢濢籿洊籿磋撮髊措挫措溚垯荅瘩咑汏槑歹傣瀻帶殆笩贷袋待曃怠耽泹冄啴郸掸狚狚氮泹惮惔诞弹疍當澢黨蕩澢叨搗稲箌島祷导菿稲悼檤盜徳嘚哋簦燈憕等簦凳郰諟彽嘀廸敵廸狄涤翟嫡抵疧哋渧苐渧弚递缔颠掂滇碘點敟靛垫電佃甸扂惦奠淀殿淍汈鵰蜩刁鋽铞銱蜩瓞嗲渫渫迭媟疉玎饤汀町嵿鼎锭萣忊丟崬笗蓳慬憅崬侗恫岽狪兠鬦乧跿荳浢哣嘟督毐渎獨渎陼睹帾荰镀肚喥喥妒鍴短葮葮斷葮碓兌隊怼墩沌壿敦頓囤沌盾遁掇哆哆奪垛躱朶跺舵剁媠憜睋睋鹅皒额讹皒悪苊扼遏鄂皒慁洏ル洱尒聶洱②贰潑藅筏浌疺阀琺珐藩汎畨飜樊矾钒瀿汎煩反返笵贩氾粄疺汸淓汸肪房汸妨汸汸汸倣婔悱啡飛萉厞诽吠腓廢沸曊棼酚玢氛汾妢墳焚汾帉奮妢忿濆粪仹崶猦蜂峯峯颩瘋烽漨溤漨讽唪鳯仏娝玞敷膚孵荴拂辐諨氟苻茯俘棴捊涪湢袱弗甫抚辅椨釜釡脯腑椨腐赴諨覆賦復傅苻阜父腹萯冨讣胕妇缚咐噶嗄姟妀漑鈣葢漑迀苷杆柑芉肝迀憾秆噉赣罓碙鋼矼釭罁罓港釭禞皋滈膏餻溔鎬鎬鎬哠滒戨擱戈鸽胳疙剨愅噶咯蛤阁隔铬個茖给艮茛畊浭菮羹埂耿梗笁糼糼塨龚栱匑厷営弖巩汞珙貢珙溝芶芶苟豞垢媾媾夠辜菇咕箍诂钴箛菇鼔咕蛊嗗唂骰诂顧凅雇剮呱剮寡啩啩乖枴怪菅関菅蒄觀涫菅潅遦潅遦洸広迋瑰規圭硅歸亀閨匦媿詭癸蓕匱蛫貴刽辊蔉輥煱漷國淉裹過铪骸陔嗨氦亥嗐骇酣憨邯韓浛凾寒凾諴癷翰撼捍猂憾悍猂汙漢夯忼航壕嚎濠毫郝恏秏呺滘哬曷嗬菏劾秝啝哬匼盉貉阂菏涸赫褐鹤哿潶嫼痕佷哏悢涥悙橫蘅恆轟晎烘渱鴻葓宖宖葒糇糇糇犼厚糇後苸苸唿瑚壺煳箶箶狐煳煳弧唬唬戶沍戶戶埖蕐澕磆磆畵劃囮話槐佪懷准壞歡寰桓還緩換漶喚痪豢焕涣宦抝巟巟曂磺蝗簧瑝瑝瑝瑝愰縨恍巟洃媈媈幑恢蛔冋毇珻慧卉惠珻贿秽浍烩匯讳诲浍荤涽殙魂渾婫豁萿钬焱镬戓惑靃貨禍击圾樭僟畸稽積箕肌饥迹噭讥鶏姬绩缉咭极棘辑籍潗彶喼疾汲旣嫉级哜凢脊己蓟技冀悸伎祭剂悸哜寄寂計汜旣忌漈继汜嘉枷夾佳傢咖荚颊贾曱钾徦糘價泇駕糘姧盬堅尖笺簡煎凲肩艰奷缄茧撿柬碱硷拣撿彅倹彅諴薦槛鉴践濺見楗箭件揵舰劍饯渐溅涧踺壃葁將槳茳彊蔣桨奨講匠醬夅蕉椒礁潐烄茭郊浇嬌嬌嚼搅铰矫侥腳烄角饺儌烄剿嘋酵轿珓嘂窖揭帹湝秸街阶截劫兯莖聙瞐鯨倞驚棈粳經丼檠憬頸靜璄擏傹徑痉靖獍競凈泂僒啾究糾玖韭玖灸勼氿厩慦舊臼舅咎僦咎鞠佝狙疽劇驹匊挶咀怇舉沮藂岠琚姖倶岠踞涺倶呴惧岠涺涓鵑涓惓眷捲涓瘚攫決崛崛嚼桔傑啑睫竭洁結解姐悈藉芥鎅徣夰疥诫屆凧荕釿唫妗珒噤緊婂僅殣琎靳晉噤菦烬锓浕勁荊兢覺吷吷蕝汮箘呁軍焄浚浚浚浚郡浚喀咖鉲咯閞揩揩剀慨刋堪勘坎歃看嫝嵻嵻摃忼囥忼栲洘栲靠坷岢柯錁溘錁萪涜嗑妸渇尅尅愙錁肻肻恳垦妔妔涳恐芤啌摳囗釦簆喖哭崫楛酷厙褲洿垮挎跨胯赽筷侩赽寬窾匡筺誑框纩洭纩況扝盔岿窺葵喹魁傀潰隗潰堒崐涃涃葀拡霩闊柆菈喇臘臘辣菈莱唻攋藍漤孄拦藍阑蘭瀾谰灠灠攋灠灡嚂哴蓈哴蓢蓢蓢烺崂崂窂荖佬粩絡絡崂嘞泺檑檑檑藞蔂儡垒檑叻類汨棱楞唥厘悡犁黎篱狸蓠漓理李里鲤礼莉荔吏栗婯疠励砾呖悡傈唎俐痢竝粒沥隶劦璃哩唡聅嗹涟镰廉憐涟帘潋臉嗹戀煉煉悢涼樑粱悢倆唡糧涼煷涼嫽窷獠療獠寥辽潦孒撂镣漻料烮煭烮挘獵啉啉潾霖臨鄰潾啉凛賃悋柃玪夌蕶齡玪伶玪夌靈夌玪領叧泠媹琉媹硫馏畱嚠媹蓅栁陸瀧聾茏茏窿湰泷泷茏溇溇嵝溇屚陋廬盧颅廬爐掳卤虏噜麓碌蕗蕗赂蔍潞禄淥陸戮馿焒焒佀膂履屢缕慮氯侓卛慮淥欒孌孿滦卵亂稤畧囵囵囵仑囵纶囵囉螺囉羅囉儸骡裸落詻詻絡媽嫲犸犸犸骉罵嫲嬤埋荬麥賣邁霡慲獌蠻慲嫚嫚嫚嫚谩笀汒吂氓杧漭貓罞锚毝罞铆茆茂萺萺邈貿庅坆枚烸酶苺湈莈葿媒镁烸羙昧寐妺媚閄悶們萠懞檬擝锰掹夢掹侎醚靡糜洣洣弥洣秘觅泌滵滵幂婂眠婂冕凂勉娩缅媔媌媌媌邈仯緲庿仯篾搣姄抿皿勄悯閩眀螟嘄佲洺掵繆嗼摹嚤嗼嗼嚤嚤嚤沬沬嗼嚜默沬嗼寞帞湈哞湈拇牡畝姆毋募暮募募慕朩朩睦牧穆嗱哪妠妠哪哪妠氖釢艿恧柰遖莮難灢撓悩悩閙淖迡浽禸嫰能妮霓淣狔胒抳沵嫟膩屰溺蔫秥姩碾撵捻淰娘酿茑杘涅嗫糵啮嗫镍涅您柠狞凝苧拧泞犇沑妞狃哝哝哝挵伮怓伮囡煖疟疟挪穤穤喏呃瓯瓯瓯耦嘔耦沤啪汃瓟啪啪琶啪棑簰棑湃哌襻瀋盤磐昐溿叛判乓厐臱耪眫拋垉铇垉垉垉垉怌胚掊裴婄婄蓜姵沛濆湓泙抨烹澎憉莑堋硼篷膨萠鵬唪湴坯砒噼纰怶噼琵毗啤裨疲怶苉痞僻庇譬萹媥爿騙彯慓瓢嘌潎潎拚頻貧闆娉乒岼泙泙岼憑甁评屛岥秡櫇嘙岥魄廹粕剖圤舗圤莆匍箁蒲逋圤圃普浦鐠曝鑤剘剘栖嘁悽⑦凄漆柒沏娸諆渏忮畦崎脐斉旗祈祁騏起豈阣佱晵契砌噐氣迄棄汽淇讫拤洽撁扦钎鉛芉迁簽仟嗛墘黔錢钳湔濳遣淺谴堑嵌芡嗛熗濸腔羌嫱嫱強熗橇锹毃佾喬趭喬喬巧鞘毳趬峭佾竅苆苆苴愜苆钦埐儭蓁噖懄芹檎噙寑沁圊輕氢傾卿凊擎啨氰凊頃埥庆琼窮偢坵邱浗浗囚媨泅趋岖蛆浀軀屈駆渠掫婜龋趣厾圜颧權醛葲洤痊拳吠券勧蒛炔瘸卻鹊榷確雀峮羣嘫嘫姌媣瓤壤攘孃讓隢擾隢惹慹壬芢亾涊韧姙認刄妊纫扔仍ㄖ戎茸嫆荣瀜嫆嫆嫆絨冗渘渘禸筎蠕濡孺洳媷乳肗叺褥軟朊惢瑞銳潤潤婼弜潵灑蕯腮鳃噻噻彡叁傘潵鎟鎟喪搔騒掃溲瑟脃澀潹僧莏唦摋閷乷纱傻倽繺篩曬姍苫杉屾剼煽釤閁陝擅赡膳僐訕傓缮墒傷啇賞晌仩尙裳哨哨哨燒芍汋韶仯哨卲袑奢赊虵舙舎赦摂射慑渉涻蔎砷妽呻訷裑堔娠訷鉮瀋谉嬸卙腎慎椮殸泩甥狌圱繩渻墭乗夝聖溮妷浉湤濕詩迉虱拾坧湁溡什喰蚀實識史矢使屍馶始鉽沶仕迣枾倳拭誓迣勢湜嗜噬适仕侍释飾氏巿恃厔視鉽荍掱渞垨壽涭售辤痩獣蔬枢梳姝杼瀭埱忬蔋疏書赎孰孰薯濐曙署蜀黍癙屬朮沭樹娕戍竪墅庶薮漱恕唰耍摔缞甩帥拴拴灀叒摤誰渁腄挩吮橓順橓説碩朔爍凘凘凘偲俬呞噝屍肆峙嗣④伺姒饲巳菘聳怂頌鎹浨讼誦溲艘擞嗽蘇酥俗嫊趚粟僳愬溯蹜訴歗酸祘匴虽陏隨浽髓誶嵗穗嬘隧祟孫損笋蓑逡逡縮鎖鎍鎻葰禢彵咜咜嗒獭挞蹋沓胎苔孡珆溙酞忲忲呔坍摊貪瘫滩墵檀痰憛谭談钽毯袒湠探嘆湠饧溏搪漟橖膛瑭溏倘躺淌趟烫匋濤瑫绦匋洮洮匋匋討套特駦駦庝誊珶剔踢锑諟趧渧渧軆櫕嚏惕珶珶屟兲婖瑱甶甛恬婖睓狣條迢眺朓萜鉄萜廰厛烃汀侹渟渟侹侹艇嗵秱酮瞳哃恫浵僮硧硧茼統痌偸投頭透凸禿湥圖徙蒤凃廜汢汢兎湍團蓷颓蹆蜕蹆蹆昋屯臀柂仛脫袉拕駞袉椭鋖沰唾挖哇蛙哇哇咓襪歪迯豌塆塆琓顽汍烷唍涴梚脕皖惋宛啘萭腕忹迋匄忹蛧暀忹朢莣妄媙蘶嶶佹韦違桅圍惟惟潙潍惟苇崣逶偉沩屗纬沬墛菋嵔媦嵔蘶莅渭媦墛墛衞瘟溫螡妏聞鈫沕穏紊問滃暡瓮挝窩煱窉莪斡臥楃沃莁嗚钨烏汚莁偓嘸蕪梧圄呉毋娬伍圄吘橆⑤侮坞戊霚晤粅匢務圄誤厝凞唽覀硒矽晰嘻扱唶犠浠息唏悉膝汐厝熄烯渓汐犀檄袭席習媳禧铣冼係隙戱細磍虾匣葭轄叚浹浹浹芐厦嗄圷锨锨姺佡鮮汘咸賢銜舷娴涎妶溓显険哯獻縣腺陥羨宪陥限線楿厢镶萫葙襄湘芗翔祥詳想姠啍頙巷潒潒姠潒簘硝霄萷涍嚣销消宵淆哓尒涍校肖啸笑效楔些歇蝎嚡拹挾携峫斜脅喈冩悈啣蟹澥绁瀉塮屑蕲芯锌俽厗噺忻杺信衅暒睲睲瑆興鉶侀形郉垳瑆圉莕悻狌兇兇洶匈汹雄熋咻俢饈朽溴琇莠袖绣歔戌濡歔歔湏俆汻蓄酗溆旮垿畜恤絮胥緒續蓒媗媗悬嫙玆選癣妶絢靴薛敩泬膤洫勛熏揗洵咰浔紃廵咰卂訓卂遜卂壓呷鴉鴨吖吖厊厊蚜崖衙涯蕥啞亞冴漹咽阉煙殗鹽嚴妍蜒啱娫訁顔閻烾沿奄殗眼衍湮滟堰嬿厭砚雁唁彦熖匽谚験殃姎鴦秧昜婸佯疡咩樣陽氧卬癢養樣羕撽崾岆愮愮尧滛窰愮烑吆舀葯婹耀倻噎倻爺嘢冶竾頁掖鄴旪曳腋液液①壹悘揖铱畩吚扆颐夷遗簃儀胰寲沂宜侇彝掎蚁掎巳乁矣姒兿抑昜邑屹億役臆逸肄疫洂裔嬑藙忆義谥溢诣议谊譯異翼翌绎筃荫洇殷堷隂絪荶檭婬夤飮吚吲陻茚渶璎璎鹰應缨瑩萤營荧蝇迊赢盁影颕哽眏喲砽砽臃痈滽澭踊蛹怺怺悀怺恿湧鼡豳沋滺沋尤甴邮铀沋怞遊酉洧伖祐祐釉诱叒孧扜菸纡盂榆虞愚舆悇揄揄渔揄揄渔隅予娯雨玙屿禹荢娪羽砡域芋喐吁喁喻峪御匬慾獄唷謍浴寓裕預豫驭鴛棩寃沅垣媴厡瑗辕圎園園猿羱緣逺夗蒝葾阮曰箹樾跞钥捳粵仴哾閱秐囩郧枃殒狁運藴酝暈韻夃匝咂卆酨酨災宰酨侢茬洎瓒暫瓒賍賍髒蹧蹧凿藻栆皁璪蚤璪璪慥唣灶璪嫧萚荝澤賊怎熷璔嶒熷紥喳碴札轧铡閘喳栅搾咋咋怍怍擿斋宅搾債寨瞻毡詹秥跕盏斬辗崭蹍蘸棧颭戰跕偡綻樟嶂彰漳張礃涨粀扙賬账扙胀瘴障妱昭找沼趙燳罩狣肇佋嗻菥悊蛰辙鍺锗蔗適淅沴斟嫃甄砧臻浈針浈忱疹沴震桭鎮俥篜諍諍姃狰踭姃整拯囸炡帧症鄭姃芷汥伎汥倁倁汥脂汥と枳轵矗淔殖秇惪侄歮栺圵趾呮旨衹梽挚掷臸臸置帜峙淛潪秩雉質炙痔滞菭窒狆盅筗妕衷蔠種妕偅仲衆洀淍詶詶诌粥轴肘帚咒皺宙昼骤咮株咮咮蕏渚诛豩艸烛煑拄瞩瞩炷著炷莇蛀贮铸茿炷炷柷驻抓爪跩抟磚啭撰賺篆桩圧裝妝獞匨匨椎锥搥赘墜綴谆痽浞炪婥棹琢茁酌啄着灼浊兹恣粢恣稵淄孜橴仔籽滓ふ洎渍牸鬃琮琮崈琮縂枞邹趉楱楱蒩娖卒蔟袓蒩蒩蒩鑽纂觜酔朂嶵澊噂葃咗佐柞莋莋唑蓙錒噯嬡璦曖靄諳銨鵪媼驁鰲鈀唄鈑鴇齙鵯賁錛蓽嗶潷鉍篳蹕芐緶籩驃颮飆鏢鑣鰾儐繽檳殯臏鑌髕鬢稟餑鈸鵓鈽驂黲惻鍤儕釵囅諂讖蕆懺嬋驏覘禪鐔倀萇悵閶鯧硨傖諶櫬磣齔棖檉鋮鐺飭鴟銃儔幬讎芻絀躕釧愴綞鶉輟齪鶿蓯驄樅輳攛銼鹺噠韃駘紿殫賧癉簞讜碭襠燾鐙糴詆諦綈覿鏑巔鈿癲銚鯛鰈鋌銩崠鶇竇瀆櫝牘篤黷籪懟鐓燉躉鐸諤堊閼軛鋨鍔鶚顎顓鱷誒邇鉺鴯鮞鈁魴緋鐨鯡僨灃鳧駙紱紼賻麩鮒鰒釓賅尷搟紺戇睪誥縞鋯紇鎘潁亙賡綆鯁詬緱覯詁轂鈷錮鴣鵠鶻鴰摑詿摜鸛鰥獷匭劌媯檜鮭鱖袞緄鯀堝咼幗槨蟈鉿闞絎頡灝顥訶闔蠣黌訌葒閎鱟滸鶘驊樺鏵奐繯鍰鯇鰉詼薈噦澮繢琿暉諢餛閽鈥鑊訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽郟浹鋏鎵蟯諫縑戔戩瞼鶼筧鰹韉絳韁撟嶠鷦鮫癤頜鮚巹藎饉縉贐覲剄涇逕弳脛靚鬮鳩鷲詎屨櫸颶鉅鋦窶齟錈鐫雋譎玨皸剴塏愾愷鎧鍇龕閌鈧銬騍緙軻鈳錁頷齦鏗嚳鄶噲膾獪髖誆誑鄺壙纊貺匱蕢憒聵簣閫錕鯤蠐崍徠淶瀨賚睞錸癩籟嵐欖斕鑭襤閬鋃嘮嶗銠鐒癆鰳誄縲儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧蘞奩瀲璉殮褳襝鰱魎繚釕鷯藺廩檁轔躪綾欞蟶鯪瀏騮綹鎦鷚蘢瀧瓏櫳朧礱僂蔞嘍嶁鏤瘺耬螻髏壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸臠孌欒鸞鑾圇犖玀濼欏腡鏍櫚褸鋝嘸嘜嬤榪勱縵鏝顙鰻麼捫燜懣鍆羋謐獼禰澠靦黽緲繆閔緡謨驀饃歿鏌鉬鐃訥鈮鯢輦鯰蔦裊隉蘗囁顢躡苧嚀聹儂噥駑釹儺謳慪甌蹣皰轡紕羆鈹諞駢縹嬪釙鏷鐠蘄騏綺榿磧頎頏鰭僉蕁慳騫繾槧鈐嬙檣戧熗錆鏘鏹羥蹌誚譙蕎繰磽蹺愜鍥篋鋟撳鯖煢蛺巰賕蟣鰍詘嶇闃覷鴝詮綣輇銓闋闕愨蕘嬈橈飪軔嶸蠑縟銣顰蜆颯毿糝繅嗇銫穡鎩鯊釃訕姍騸釤鱔坰殤觴厙灄畬詵諗瀋謚塒蒔弒軾貰鈰鰣綬攄紓閂鑠廝駟緦鍶鷥藪餿颼鎪謖穌誶蓀猻嗩脧闥鉈鰨鈦鮐曇鉭錟頇儻餳鐋鏜韜鋱緹鵜闐糶齠鰷慟鈄釷摶飩籜鼉媧膃紈綰輞諉幃闈溈潿瑋韙煒鮪閿萵齷鄔廡憮嫵騖鵡鶩餼鬩璽覡硤莧薟蘚峴獫嫻鷴癇蠔秈躚薌餉驤緗饗嘵瀟驍綃梟簫褻擷紲纈陘滎饈鵂詡頊諼鉉鏇謔澩鱈塤潯鱘埡婭椏氬厴贗儼兗讞懨閆釅魘饜鼴煬軺鷂鰩靨謁鄴曄燁詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤銦癮塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌鏞蕕銪魷傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬櫞鳶黿鉞鄆蕓惲慍紜韞殞氳瓚趲鏨駔賾嘖幘簀譖繒譫詔釗謫輒鷓湞縝楨軫賑禎鴆諍崢鉦錚箏騭櫛梔軹輊贄鷙螄縶躓躑觶鍾紂縐佇櫧銖囀饌顳騅縋諑鐲諮緇輜貲眥錙齜鯔傯諏騶鯫鏃纘躦鱒訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩混濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦鐧鍩鍀鍃錇鎄鎇鎿鐝鑥鑹鑔穭鶓鶥鸌癧屙瘂臒襇繈耮顬蟎麯鮁鮃鮎鯗鯝鯴鱝鯿鰠鰵鱅鞽韝齇';
};
//====================================== 简繁转换 结束 =================================================



//====================================== 快捷键 开始 =================================================
EsdToolbar.keybinding= {};
EsdToolbar.keybinding.bind = function () {
	jq_t(document).keydown(function (e) {
		if (EsdToolbar.isOpen) {
			if (e.shiftKey) {
				if(!EsdToolbar.keybinding.canDo(e)){
					return true;
				}
				if (e.keyCode == 191) {
					//(shift+/)=帮助
					jq_t("#toolbar_help").trigger("click");
				} else if (e.keyCode == 81) {
					//(shift+q)=退出
					jq_t("#toolbar_exit").trigger("click");
				} else if (e.keyCode == 49) {
					//(shift+1)=刷新
					jq_t("#toolbar_refresh").trigger("click");
				} else if (e.keyCode == 50) {
					//(shift+2)=声音
					jq_t("#toolbar_speakVolume").trigger("click");
				} else if (e.keyCode == 51) {
					//(shift+3)=语速
					jq_t("#toolbar_speakSpeed").trigger("click");
				} else if (e.keyCode == 52) {
					//(shift+4)=阅读方式
					jq_t("#toolbar_readChange").trigger("click");
				} else if (e.keyCode == 53) {
					//(shift+5)=小字
					jq_t("#toolbar_colorChange").trigger("click");
				} else if (e.keyCode == 54) {
					//(shift+6)=放大
					jq_t("#toolbar_pageZoomIc").trigger("click");
				} else if (e.keyCode == 55) {
					//(shift+7)=缩小
					jq_t("#toolbar_pageZoomDc").trigger("click");
				} else if (e.keyCode == 56) {
					//(shift+8)=大鼠标
					jq_t("#toolbar_refresh1").trigger("click");
				} else if (e.keyCode == 57) {
					//(shift+9)=光标
					jq_t("#toolbar_guides").trigger("click");
				} else if (e.keyCode == 48) {
					//(shift+0)=显示屏
					jq_t("#toolbar_magnifier").trigger("click");
				} else if (e.keyCode == 68) {
					//(shift+D)=下载快捷方式
					jq_t("#toolbar_more")[0].click()
				} else if (e.keyCode == 78){
					if(jq_t("#toolbar").css("display")=="none"){
						jq_t("#toFirstPage").trigger("click");
					}else{
						jq_t("#toNav").trigger("click");
					}
				}
			}
			if (e.altKey) {
				if (e.keyCode == 49) { // 1
					//导航区
					jq_t("#navNumDiv").trigger("click");
				} else if (e.keyCode == 50) {  //2
					//视图区
					jq_t("#infoWinDiv").trigger("click");
				} else if (e.keyCode == 51) {  //3
					//交互区
					jq_t("#interactionWinDiv").trigger("click");
				}
			}
		}
	});
};
EsdToolbar.keybinding.canDo = function(event){
	var ele = event.target||event.srcElement;
	if(ele&&ele.tagName=="TEXTAREA"){
		return false;
	}
	if(ele&&(ele.tagName=="INPUT"&&(ele.type=="text"||ele.type==""))){
		return false;
	}
	return true;
};
//====================================== 快捷键 结束 =================================================

// 打开辅助工具
EsdToolbar.open = function(){
	EsdToolbar.storage.setCookie("wzaIsOn", "true", 10);
	//jq_t("#toolbarHtml").slideDown("slow");
	//jq_t("body").animate({"padding-top": "78px"}, "slow");
	EsdToolbar.readScreen.init();
	jq_t("#toolbarHtml").show("fast",function(){
		var readScreenStatus = EsdToolbar.storage.getCookie("readScreen");
		if((readScreenStatus!=null||readScreenStatus!="null")&&(readScreenStatus=="true"||readScreenStatus==true)){
			jq_t("#toolbar").hide();
			if(EsdToolbar.statusmagnifier == "on"){
				EsdToolbar.magnifier.toolbarMagnifier();
			}
			EsdToolbar.pageTitleStr = "已打开"+document.title+"页面, 本页面是由"+EsdToolbar.readScreen.navWinNum+"个导航区、"+EsdToolbar.readScreen.infoWinNum+"个视窗区、"+EsdToolbar.readScreen.interactionWinNum+"个交互区共计"+EsdToolbar.readScreen.totalWinNum+"个区域组成";
			//EsdToolbar.readScreen.setMagnifierAndRead(str);
			EsdToolbar.storage.setCookie("readScreen", true, 10);
			EsdToolbar.speak.volumeInit();
			setTimeout(function(){jq_t("#toolbarPage2").show();},100);
			;
		}else{
			jq_t("#toolbarPage2").hide();
			jq_t("#toolbar").show();
			EsdToolbar.pageTitleStr = "已打开"+document.title+"页面";
			//EsdToolbar.titleReader();
		}
	});
	jq_t("body").css("padding-top", "98px");
	EsdToolbar.rebuild();
	EsdToolbar.isOpen = true;
	EsdToolbar.changeOriginalSiteFunc();
	//if(EsdToolbar.tipLinkAddIsDone){
	//	setTimeout(function(){
	//		jq_t("#esdTipLink").focus();
	//	},2000);
	//}
};

// 打开辅助工具
EsdToolbar.openKeydown = function(){
	EsdToolbar.storage.setCookie("wzaIsOn", "true", 10);
	EsdToolbar.storage.setCookie("readScreen", true, 10);
	EsdToolbar.storage.setCookie("speakVolume", 0, 10);
	EsdToolbar.readScreen.init();
	EsdToolbar.speak.volumeInit();
	jq_t("#toolbar").hide();
	jq_t("#toolbarHtml").show("fast",function(){
		jq_t("#toolbarPage2").show();
		if(EsdToolbar.statusmagnifier == "on"){
			EsdToolbar.magnifier.toolbarMagnifier();
		}
	});
	jq_t("body").css("padding-top", "98px");
	EsdToolbar.rebuild();
	EsdToolbar.isOpen = true;
	//if(EsdToolbar.tipLinkAddIsDone){
	//	setTimeout(function(){jq_t("#esdTipLink").focus();},2000);
	//}
};

//关闭辅助工具
EsdToolbar.close = function(){
	clearInterval(EsdToolbar.readPageAgain.readAgainInterval);
	if(EsdToolbar.speak.sound.mp3Object!=null&&EsdToolbar.speak.sound.mp3Object!=false){
		EsdToolbar.speak.sound.mp3Object.destruct();
	}
	EsdToolbar.pageReload();
	EsdToolbar.storage.setCookie("PointReadIsOn", "false", 10);
	EsdToolbar.storage.setCookie("batchReadIsOn", "false", 10);
	EsdToolbar.storage.setCookie("guidesStatus", "off", 10);
	EsdToolbar.storage.setCookie("fontZoom",  "1", 10);
	EsdToolbar.storage.setCookie("highContrastMode","defaltMode", 10);
	EsdToolbar.storage.setCookie("magnifierIsOn","false", 10);
	EsdToolbar.storage.setCookie("percentStatus","100", 10);
	EsdToolbar.storage.setCookie("readZoom","1", 10);
	EsdToolbar.storage.setCookie("speakFunctionIsOn","true", 10);
	EsdToolbar.storage.setCookie("textModeStatus","off", 10);
	EsdToolbar.storage.setCookie("wzaIsOn", "false", 10);
	EsdToolbar.storage.setCookie("cursorStatus", "off", 10);
	EsdToolbar.storage.setCookie("speakSpeed", 0, 10);
	EsdToolbar.storage.setCookie("readScreen", false, 10);
	EsdToolbar.storage.setCookie("readStatus", "pointRead", 10);
	EsdToolbar.storage.setCookie("speakVolume", 100, 10);

	jq_t("#toolbarHtml").slideUp("normal");
	jq_t("body").animate({"padding-top": "0px"}, "normal");
	//jq_t("#toolbarHtml").hide();
	//jq_t("body").css("padding-top", "0px");
	jq_t(".esdNavLink").remove();
	jq_t(".esdBgG").each(function(){
		jq_t(this).removeClass("esdBgG");
	});
	EsdToolbar.isOpen = false;
	EsdToolbar.isExit = true;
	//EsdToolbar.pageReload();
//	window.location.reload();
};

// 刷新页面
EsdToolbar.pageReload = function(){
	//window.location.reload();

	EsdToolbar.speak.index = 0;
	EsdToolbar.speak.sound.mp3Object = null;
	EsdToolbar.speak.source = new Array();
	//还原语速
	EsdToolbar.speak.speedVal = 0;
	jq_t("#toolbar_speakSpeed").attr("title","当前语速正常, 调节语速Shift+3");
	jq_t("#toolbar_speakSpeed img").attr("title","当前语速正常, 调节语速Shift+3").attr("src",EsdToolbar.toolbarFileURL+"img/vol_normal.png");  
	
	// 还原为指读
	if(EsdToolbar.speak.readStatus!="pointRead"){
		jq_t("#toolbar_readChange").find("img").attr("src", EsdToolbar.toolbarFileURL+"img/point3.png");
		//更改连读状态
		EsdToolbar.statusbatchRead="off";
		EsdToolbar.speak.toolbarBatchRead();
		//开启只读
		EsdToolbar.speak.sound.startPointSpeak();
		EsdToolbar.statuspointread = "off";
		EsdToolbar.speak.readStatus = "pointRead";
		EsdToolbar.storage.setCookie("readStatus", EsdToolbar.speak.readStatus, 10);
		jq_t("#toolbar_readChange").attr("title","当前为指读模式, 切换阅读方式Shift+4");
		jq_t("#toolbar_readChange img").attr("title","当前为指读模式, 切换阅读方式Shift+4").attr("alt","当前为指读模式, 切换阅读方式Shift+4");
	}
	//还原声音开关
	if(EsdToolbar.speak.volume == 0){ //当前是普通音量 切换到最高音量
		var targetObj = jq_t("#toolbar_speakVolume");
		var targetObj_read = jq_t("#toolbar_speakOnOff");
		targetObj.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound_big.png");
		targetObj.find("img").attr({title:"当前声音已开启，关闭声音Shift+2", alt:"当前声音已开启，关闭声音Shift+2" });
		targetObj_read.find("img").attr("src", EsdToolbar.toolbarFileURL+"img/sound_big.png");
		targetObj_read.find("img").attr({title:"当前声音已开启，关闭声音Shift+2", alt:"当前声音已开启，关闭声音Shift+2" });
		EsdToolbar.speak.volume = 100;
	}
	//关闭十字光标
	EsdToolbar.guides.close();
	//EsdToolbar.textMode.init();
	//关闭显示屏
	EsdToolbar.magnifier.closeMagnifier();
	//还原配色
	EsdToolbar.highContrast.changeTheme("defaltMode");
	//还原页面放大
	EsdToolbar.pageZoom.pageZoom("default");
	// 关闭大鼠标
	var cursorStatus = EsdToolbar.storage.getCookie("cursorStatus");
	if (cursorStatus == "on") {
		EsdToolbar.cursor.close();
	}
	
	EsdToolbar.storage.setCookie("PointReadIsOn", "false", 10);
	EsdToolbar.storage.setCookie("batchReadIsOn", "false", 10);
	EsdToolbar.storage.setCookie("guidesStatus", "off", 10);
	EsdToolbar.storage.setCookie("fontZoom",  "1", 10);
	EsdToolbar.storage.setCookie("highContrastMode","defaltMode", 10);
	EsdToolbar.storage.setCookie("magnifierIsOn","false", 10);
	EsdToolbar.storage.setCookie("percentStatus","100", 10);
	EsdToolbar.storage.setCookie("readZoom","1", 10);
	EsdToolbar.storage.setCookie("speakFunctionIsOn","true", 10);
	EsdToolbar.storage.setCookie("textModeStatus","off", 10);
	EsdToolbar.storage.setCookie("speakSpeed", EsdToolbar.speak.speedVal, 10);
	EsdToolbar.storage.setCookie("speakVolume", EsdToolbar.speak.volume, 10);
};

//绑定事件
EsdToolbar.bindAction = function(){
	jq_t("#toolbarSwitch").click(function(){
		if(EsdToolbar.isOpen){
			EsdToolbar.close();
		}else{
			EsdToolbar.open();
		}
	});
	jq_t("#toolbarSwitch").keydown(function(e){
		if (e.keyCode == 13) {
			if(EsdToolbar.isOpen){
				EsdToolbar.close();
			}else{
				EsdToolbar.openKeydown();
			}
			return false;
		}
	});
	//首页
	jq_t("#toolbar_home").click(function(){
		window.location.href = EsdToolbar.toolbarConfig.indexPageUrl;
	});
	//帮助
	jq_t("#toolbar_help").click(function(){
		window.open(EsdToolbar.toolbarConfig.helpPageUrl);
	});
	
	jq_t("#toolbar_exit").click(function(){
		EsdToolbar.close();
	});
	jq_t("#toolbar_exit2").click(function(){
		EsdToolbar.close();
	});
	jq_t("#toolbar_retreat").click(function(){
		if (window.history) {
			window.history.back();
	    }
	});
	jq_t("#toolbar_ahead").click(function(){
		if (window.history) {
			window.history.forward();
	    }
	});
	jq_t("#toolbar_refresh").click(function(){
		EsdToolbar.pageReload();
	});
	jq_t("#toolbar_refresh1").click(function(){
		EsdToolbar.cursor.switchOnOff();
	});
	jq_t("#toolbar_guides").click(function(){
		EsdToolbar.guides.switchOnOff();
		var guidesStatus = EsdToolbar.storage.getCookie("guidesStatus");
		if(guidesStatus=="on"){
			EsdToolbar.buttonReader.read("guideOpen");
		}else{
			EsdToolbar.buttonReader.read("guideClose");
		}
	});
	jq_t("#toolbar_textMode").click(function(){
		EsdToolbar.textMode.switchOnOff();
	});
	
	//高对比模式1，黑底黄字白链接
	jq_t(".toolbar_highContrastYellow").click(function(){
		EsdToolbar.highContrast.yellowMode();
	});
	
	//白底黑字蓝链接
	jq_t(".toolbar_highContrastWhiteBlack").click(function(){
		EsdToolbar.highContrast.whiteBlackMode();
	});
	//蓝底黄字白链接
	jq_t(".toolbar_highContrastBlueYellow").click(function(){
		EsdToolbar.highContrast.blueYellowMode();
	});
	//黄底黑字蓝链接
	jq_t(".toolbar_highContrastYellowBlack").click(function(){
		EsdToolbar.highContrast.yellowBlackMode();
	});
	
	//高对比模式2
	jq_t("#toolbar_highContrastWhite").click(function(){
		EsdToolbar.highContrast.whiteMode();
	});
	//正常模式，页面原始配色
	jq_t(".toolbar_highContrastDefalt").click(function(){
		EsdToolbar.highContrast.defaltMode();
	});
	//放大页面
	jq_t("#toolbar_pageZoomIc").click(function(){
		EsdToolbar.pageZoom.increasePage();
	});
	//缩小页面
	jq_t("#toolbar_pageZoomDc").click(function(){
		EsdToolbar.pageZoom.decreasePage();
	});
	//页面全屏
	jq_t("#toolbar_fullScreen").click(function(){
		EsdToolbar.fullScreenMode.switchOnOff();
	});
	//语音开关
	jq_t("#toolbar_speakOnOff").click(function(){
		jq_t("#toolbar_speakVolume").trigger("click");
	});
/*	jq_t("#toolbar_Pointread").click(function(){
		EsdToolbar.rebuild();
		if (EsdToolbar.statusspeakOnOff == "off") {
			EsdToolbar.speak.toolbarPointread();
			if (EsdToolbar.statuspointread == "on") {
				EsdToolbar.buttonReader.read("pointerReadClose");
			}else{
				EsdToolbar.buttonReader.read("pointerReadOpen");
			}
		}
	});
	jq_t("#toolbar_batchRead").click(function(){
		EsdToolbar.rebuild();
		if (EsdToolbar.statusspeakOnOff == "off") {
			EsdToolbar.speak.toolbarBatchRead();
			if (EsdToolbar.statusbatchRead == "on") {
				EsdToolbar.buttonReader.read("batchReadClose");
			}else{
				EsdToolbar.buttonReader.read("batchReadOpen");
			}
		}
	});*/
	jq_t("#toolbar_magnifier").click(function(){
		EsdToolbar.rebuild();
		EsdToolbar.magnifier.toolbarMagnifier();
		if (EsdToolbar.statusmagnifier == "off") {
			EsdToolbar.buttonReader.read("magnifierOpen");
		} else {
			EsdToolbar.buttonReader.read("magnifierClose");
		}
	});
	//增加字体大小
	jq_t("#toolbar_text_bigger").click(function(){
		EsdToolbar.rebuild();
		EsdToolbar.changeFont.fontBigger();
	});
	//减小字体
	jq_t("#toolbar_text_smaller").click(function(){
		EsdToolbar.rebuild();
		EsdToolbar.changeFont.fontSmaller();
	});
	//语音
	jq_t("#toolbar_speakVolume").click(function(){
		EsdToolbar.speak.volumeChange();
	});
	//语速
	jq_t("#toolbar_speakSpeed").click(function(){
		EsdToolbar.speak.speed();
	});
	//阅读方式
	jq_t("#toolbar_readChange").click(function(){
		EsdToolbar.speak.readChange();
	});
	//切换配色
	jq_t("#toolbar_colorChange").click(function(){
		EsdToolbar.highContrast.colorChange();
	});
	//读屏专用
	jq_t("#toNav").click(function(){
		if(EsdToolbar.readScreen.isDone){
			jq_t("#toolbarPage2").show()
			jq_t("#toolbar").hide();
			if(EsdToolbar.statusmagnifier == "on"){
				EsdToolbar.magnifier.toolbarMagnifier();
			}
			var str = "本页面是由"+EsdToolbar.readScreen.navWinNum+"个导航区、"+EsdToolbar.readScreen.infoWinNum+"个视窗区、"+EsdToolbar.readScreen.interactionWinNum+"个交互区共计"+EsdToolbar.readScreen.totalWinNum+"个区域组成";
			EsdToolbar.readScreen.setMagnifierAndRead(str);
			EsdToolbar.storage.setCookie("readScreen", true, 10);
		}
	});
	jq_t("#toFirstPage").click(function(){
		jq_t("#toolbar").show();
		jq_t("#toolbarPage2").hide();
		if(EsdToolbar.statusmagnifier == "off"){
			EsdToolbar.magnifier.toolbarMagnifier();
		}
		EsdToolbar.storage.setCookie("readScreen", false, 10);
	});
	
	jq_t("#navNumDiv").click(function(){
		EsdToolbar.readScreen.navJump();
	});
	jq_t("#interactionWinDiv").click(function(){
		EsdToolbar.readScreen.interactionJump();
	});
	jq_t("#infoWinDiv").click(function(){
		EsdToolbar.readScreen.infoWinJump();
	});
	jq_t("#toolbar_help_move").click(function(){
		jq_t("#toolbar_help").trigger("click");
	});
};

//====================================== 文档处理  开始 =================================================
EsdToolbar.findvar = function(obj,sz){   
	var b = false;
	for (var i = 0; i < sz.length; i++) {
		if (sz[i] == obj) {
			b = true;
			break;
		}
	}
	return b;
};
EsdToolbar.manageText = function(obj){
	var text="";
//	if(EsdToolbar.findvar(obj.tagName,['INS'])){
	var role = jq_t(obj).attr("role");
	var exMarks = "banner_complementary_contentinfo_form_main_navigation_region_search_tablist";
	if(exMarks.indexOf(role)>-1){
		role = undefined;
	}
//	if(EsdToolbar.findvar(obj.tagName,['INS'])){
	if(role!=undefined){
		if(role=="checkbox"){
			text = "复选框：";
		}else if(role=="radio"){
			text = "单选按钮：";
		}else if(role=="link"){
			text = "链接：";
		}else if(role=="combobox"){
			text = "下拉列表框：";
		}else if(role=="button"){
			text = "按钮：";
		}else if(role=="img"){
			text = "图片：";
		}
		if(jq_t(obj).attr("aria-label")!=undefined){
			text = text + jq_t(obj).attr("aria-label");
		}
	}else if(jq_t(obj).attr("data-has-text")=="1"){
		if(jq_t(obj).children("script").length>0){
			return text;
		}
		if(obj.children.length>0 && obj.children[0].nodeType == 1){
			return text;
		}
		//检查display属性是否为none
		var dis = obj.currentStyle?obj.currentStyle.display/*ie*/:document.defaultView.getComputedStyle(obj,null).display;
		if(dis == "none"){return text;}
		//处理innerHTML内容，
		text=obj.innerHTML.replace(/<.+?>/g,'');
	//读取a标签中的title内容 如果A链接的子元素是img按下方图片处理
	}else if(obj.tagName == "A"){
		if(jq_t.trim(jq_t(obj).text()).length==0 && jq_t(obj).children("img").length>0){
			if(obj.title!=null&&obj.title.length!=""){
				text = obj.title.replace(/<.+?>/g,'');
			}else {
				if(jq_t(obj).children("img")[0].title!=undefined&&jq_t(obj).children("img")[0].title.length>0){
					text = jq_t(obj).children("img")[0].title;
				}else{
					text = jq_t(obj).children("img")[0].alt;
				}
			}
			text = "图片链接："+text;
		}else{
			if(obj.title!=null&&obj.title.length!=""){
				if(jq_t(obj).hasClass("number")&&obj.title.indexOf("点击查看停靠站信息")>-1){
                    text = "点击查看"+jq_t(obj).text()+"次停靠站信息"
				}else{
					text = obj.title.replace(/<.+?>/g,'');
				}
			}else {
				text = obj.innerHTML.replace(/<.+?>/g,'');
			}
			if(jq_t.trim(text).length==0&&jq_t(obj).attr("aria-label")!=undefined){
				text = jq_t(obj).attr("aria-label");
			}
			if(!jq_t(obj).hasClass("esdNavLink")){
				text = "链接："+text;
			}
		}
	}else if(obj.tagName == "SELECT"){
		var selected = obj;
		for(var i=0;i<selected.options.length;i++){
			if(selected.options[i].selected){
				var opt = jq_t(selected.options[i]).children()[0];
				if(opt!=null){
					text = opt.innerHTML;
				}
				if(text==""){
					text = jq_t(selected.options[i]).text();
				}
				if(jq_t(selected).attr("aria-label")!=undefined){
					text = "列表框："+text+","+jq_t(selected).attr("aria-label");
				}else{
					text = "列表框：当前选中为: "+text+",共"+selected.options.length+"个选项,当前选中为第"+(i+1)+"项,按上下键进行选择,按回车键确认";
				}
				break;
			}
		}
		text = text.replace(/\s/g, '');
	}else if(obj.tagName == "CANVAS"){
		if(jq_t(obj).attr("aria-label")!=undefined){
			return "图片"+jq_t(obj).attr("aria-label");
		}else if(obj.title!=null&&obj.title.length!=""){
			text = obj.title.replace(/<.+?>/g,'');
		    text = "图片："+text;
		}else{
			return "图片";
		}
	}else if(obj.tagName == "TD"){
		if(jq_t(obj).text()=="候补"){
            text = jq_t(obj).text();
		}
	}else if(obj.tagName == "TEXTAREA"){
		/*text = obj.value.replace(/\s/g, '');
		text = text.replace(/<.+?>/g,'');
		text = "文本区域框"+ text;*/
		text = "文本区域框：";
		if(jq_t(obj).attr("aria-label")!=undefined){
			text = text + jq_t(obj).attr("aria-label")+",";
		}else{
			if(obj.id!=""&&obj.id!=undefined){
				if(jq_t("label[for='"+obj.id+"']").length>0){
					text = text + jq_t("label[for='"+obj.id+"']").text()+",";
				}
			}
		}
		if(jq_t(obj).prop("readonly")){
			text = text+"只读,";
		}else{
			text = text+"可编辑文本,";
		}
		if(jq_t.trim(obj.value)!=""){
			text= text + "当前内容为: "+ obj.value.replace(/\s/g, '')+",";
		}
		if(jq_t.trim(obj.title)!=""){
			if(obj.title!=obj.ariaLabel){
				text = text + "提示:"+obj.title;
			}
		}
	}else if(obj.tagName == "INPUT"){
		var type = jq_t(obj).attr("type");
		if(type == "hidden"){
			return text;
		}else{
			text=obj.value.replace(/\s/g, '');
			text = text.replace(/<.+?>/g,'');
			if(type=="text"){
				text = "文本输入框：";
				if(jq_t(obj).attr("aria-label")!=undefined){
					text = text + jq_t(obj).attr("aria-label")+",";
				}else{
					if(obj.id!=""&&obj.id!=undefined){
						if(jq_t("label[for='"+obj.id+"']").length>0){
							text = text + jq_t("label[for='"+obj.id+"']").text()+",";
						}
					}
				}
				if(jq_t(obj).prop("readonly")){
					text = text+"只读,";
				}else{
					text = text+"可编辑文本,";
				}
				if(jq_t.trim(obj.value)!=""){
					text= text + "当前内容为: "+ obj.value.replace(/\s/g, '')+",";
				}
				if(jq_t.trim(obj.title)!=""){
					if(obj.title!=obj.ariaLabel){
						text = text + "提示:"+obj.title;
					}
				}
			}else if(type=="radio"){
				text = "单选按钮：";
				if(jq_t(obj).attr("aria-label")!=undefined){
					text = text + jq_t(obj).attr("aria-label")+",";
				}else{
					if(obj.id!=""&&obj.id!=undefined){
						if(jq_t("label[for='"+obj.id+"']").length>0){
							text = text + jq_t("label[for='"+obj.id+"']").text()+",";
						}
					}
				}
				if(jq_t.trim(obj.title)!=""){
					if(obj.title!=obj.ariaLabel){
						text = text + "提示:"+obj.title;
					}
				}
			}else if(type=="image"){
				text = "图像式的提交按钮："+text;
			}else if(type=="checkbox"){
				text = "复选框：";
				if(jq_t(obj).attr("aria-label")!=undefined){
					text = text + jq_t(obj).attr("aria-label")+",";
				}else{
					if(obj.id!=""&&obj.id!=undefined){
						if(jq_t("label[for='"+obj.id+"']").length>0){
							text = text + jq_t("label[for='"+obj.id+"']").text()+",";
						}
					}
				}
				if(jq_t.trim(obj.title)!=""){
					if(obj.title!=obj.ariaLabel){
						text = text + "提示:"+obj.title;
					}
				}
			}else if(type=="file"){
				text = "文件上传按钮："+text;
			}else if(type=="password"){
				text = "密码输入框：";//+text;
                if(jq_t(obj).attr("aria-label")!=undefined){
					text = text + jq_t(obj).attr("aria-label")+",";
				}else{
					if(obj.id!=""&&obj.id!=undefined){
						if(jq_t("label[for='"+obj.id+"']").length>0){
							text = text + jq_t("label[for='"+obj.id+"']").text()+",";
						}
					}
				}
				if(jq_t.trim(obj.title)!=""){
					if(obj.title!=obj.ariaLabel){
						text = text + "提示:"+obj.title;
					}
				}
			}else if(type=="reset"){
				text = "重置按钮："+text;
			}else if(type=="submit"){
				text = "提交按钮："+text;
			}else if(type=="button"){
				if(jq_t(obj).attr("aria-label")!=undefined){
					text = "按钮："+jq_t(obj).attr("aria-label");
				}else{
					if(jq_t.trim(obj.title)!=""){
						text = "按钮："+text+obj.title;
					}else{
						text = "按钮："+text;
					}
				}
			}else{
				text = "文本输入框："+text;
			}
		}
	}else if(obj.tagName == "IMG"){
		if(jq_t(obj).parents().is("a")){
			return text;
		}
		if(obj.alt!=null&&obj.alt!=""&&obj.alt.replace(/\s/g, '') != "无意义图片"){
			text = obj.alt.replace(/\s/g, '');
			text = "图片："+text;
			return text;
		}else if(obj.title!=null&&obj.title!=""&&obj.title.replace(/\s/g, '') != "无意义图片"){
			text = obj.title.replace(/\s/g, '');
			text = "图片："+text;
			return text;
		}else{
			return "图片";
		}
	}else if (obj.tagName == "OBJECT") {
		text = obj.title.replace(/\s/g, '');
		text = "多媒体："+text;
		
	}else if(obj.tagName == "BUTTON"){
		if(obj.innerHTML!=null&&obj.innerHTML.length!=""){
			text = obj.innerHTML.replace(/<.+?>/g,'');
			text = "按钮："+text;
		}else if(obj.title!=null&&obj.title.length!=""){
			text = obj.title.replace(/<.+?>/g,'');
			text = "按钮："+text;
		}else{
			if(jq_t(obj).attr("aria-label")!=undefined){
				return "按钮"+jq_t(obj).attr("aria-label");
			}else{
				return "按钮";
			}
		}
		return text;
	}else if(obj.tagName == "SPAN"&&jq_t(obj).hasClass("price")){
		text = jq_t(obj).text();				  
	}
	text = text.replace(/\|/g,'');
	text = text.replace(/\·/g,'');
	text = text.replace(/&lt;/g,'');
	text = text.replace(/&gt;/g,'');
	text = text.replace(/&nbsp;/g,'');
	text = text.replace(/\→/g,'');
	text = text.replace(/\.\.\./g,'');
	return text;
};
//====================================== 文档处理  结束 =================================================

//=======================================页面再处理 开始=========================================================
EsdToolbar.readPageAgain = {};
EsdToolbar.readPageAgain.isOn = true;//页面再处理开关
EsdToolbar.readPageAgain.readAgainType = "interval";  //异步数据处理类型 是反复处理还是  只处理一次  timeout和interval 两种
tempurl = {
	localSWF:EsdToolbar.toolbarConfig.speak.swf,
	alt_0:EsdToolbar.toolbarConfig.speak.alt0,
	shift_0:EsdToolbar.toolbarConfig.speak.shift0,
	shift_z:EsdToolbar.toolbarConfig.speak.shiftz,
	intordus:EsdToolbar.toolbarConfig.speak.intordus,
	description:EsdToolbar.toolbarConfig.speak.description,
	ajaxUrl:EsdToolbar.toolbarConfig.speak.ajaxUrl,
	batchUrl:EsdToolbar.toolbarConfig.speak.BatchUrl
};

EsdToolbar.readPageAgain.readAgainTimer;
EsdToolbar.readPageAgain.readAgainInterval;
EsdToolbar.readPageAgain.setIntervalReadAgain = function(){//每隔10秒重新处理一遍  不建议使用
	if(EsdToolbar.defalt.browser.msie){
		EsdToolbar.readPageAgain.readAgainInterval = setInterval(function(){
			EsdToolbar.readPageAgain.readAgain();
		}, 10000);
	}else{
		EsdToolbar.readPageAgain.readAgainInterval = setInterval(function(){
			EsdToolbar.readPageAgain.readAgain();
		}, 2000);
	}
};

EsdToolbar.readPageAgain.setTimeoutReadAgain = function(){//页面载入后10秒处理一遍
	EsdToolbar.readPageAgain.readAgainTimer = setTimeout(function(){
		EsdToolbar.readPageAgain.readAgain();
	}, 3000);
};

EsdToolbar.readPageAgain.clearReadAgainTimer = function(){
	clearTimeout(EsdToolbar.readPageAgain.readAgainTimer);
};

EsdToolbar.readPageAgain.readAgain = function(){

	var patt = new RegExp("[。！？；，、.!?;,]","g");
	var result;
	jq_t(EsdToolbar.targetBody).find("*:not(body,#toolbarHtml,#toolbarHtml *,#toolbar_magnifier,#toolbar_magnifier *,.ESDAssetsTextCon,.displayClass,.ymd_split_span,.split_span,.split_span_parent,.price)").each(function(){
//		if(this.tagName=="A"){
//			jq_t(this).removeAttr("target");
//		}
		if(this.tagName!="A"&&!(jq_t(this).parents().is("a"))&&!(jq_t(this).parents().is("#ShowTime"))&&this.tagName!="OPTION"&&this.tagName!="OPTION"&&this.tagName!="IFRAME"&&this.tagName!="SCRIPT"&&this.tagName!="STYLE"){//A链接用ins包住会导致chrome上的A链接按回车打不开  所以就不用包了
			//var contents = jq_t(this).contents();
			if(jq_t(this).html() != '候补'&&jq_t(this).html() != '--'){// &&  jq_t(this).attr('ifAlow_MaxLength') != '1'
				var _thatTemp = jq_t(this);
				jq_t(this).contents().filter(function() {
					if(this.nodeType==3){
						//var str = jq_t(this).text();
						var h = jq_t.trim(jq_t(this).text());
					/*	if(str=="["||str=="]"||str=="|"){
							  h="";
						}*/
						if(h!=""&&h!="["&&h!="]"&&h!="|"){
							//jq_t("#log").append(h);
							if(jq_t(this).siblings().length>0){
								jq_t(this).wrap("<ins style=\"text-decoration:none; font-size:100% \" data-has-text='1'></ins>");
							}else{
								_thatTemp.attr("data-has-text","1");
							}
						}
					}
				});
			}
		}
	});
	var arr = new Array();
	var i = jq_t(EsdToolbar.targetBody).find("[tabindex]").length+1;
	jq_t(EsdToolbar.targetBody).find("*:not(body,#toolbarHtml,#toolbarHtml *,#toolbar_magnifier,#toolbar_magnifier *,.ESDAssetsTextCon,.displayClass,.split_span_parent)").each(function(index){
		
		if(!jq_t(this).parents().is("#toolbarHtml")){
			var obj = jq_t(this);
			var text = "";
			text = EsdToolbar.manageText(obj[0]);
			if(text != null && text != ""){
				if(obj.attr("role")=="alertdialog"||obj.attr("id")=="esdTipLink"||obj.attr("id")=="esdTipLink1"||obj.attr("id")=="esdTipLink2"||obj.hasClass("esdUnCount")||obj.attr("tabindex")=="-1"){//
					obj.addClass("ESDAssetsTextCon");//为每个带有文本节点的dom增加属性Tabindex，并且增加class属性ESDAssetsTextCon
					i++;	
				}else{
					obj.attr("tabindex",0).addClass("ESDAssetsTextCon");//为每个带有文本节点的dom增加属性Tabindex，并且增加class属性ESDAssetsTextCon
					i++;	
				}	
				if(EsdToolbar.statuspointread=="off"){
					obj.unbind("mouseover.pSpeak").unbind("mouseout.pSpeak");
					obj.bind("mouseover.pSpeak",function(){
						pointSpeakTimeId = setTimeout(function(){
							EsdToolbar.speak.sound.callSM2(obj[0]);
						},500);
					});
					obj.bind("mouseout.pSpeak",function(){
						window.clearTimeout(pointSpeakTimeId);
					});
					
					obj.unbind("focus.fSpeak").unbind("blur.fSpeak");
					obj.bind("focus.fSpeak",function(){
						pointSpeakTimeId = setTimeout(function(){
							EsdToolbar.speak.sound.callSM2(obj[0]);
						},500);
					});
					obj.bind("blur.fSpeak",function(){
						window.clearTimeout(pointSpeakTimeId);
					});
				}
			}
		}
	});
	if(jq_t("body>* [data-toolbar-zoom=1]").length>0){
		jq_t("body>* [data-toolbar-zoom=1]").each(function(){
//			if (EsdToolbar.defalt.browser.mozilla || EsdToolbar.defalt.browser.opera) {
				jq_t(this).css({"transform":"","transform-origin":""}).removeAttr("data-toolbar-zoom");
//			} else {
//				jq_t(this).css("zoom",1).removeAttr("data-toolbar-zoom");
//			}
		});
	}
	
	//if(jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal,#toolbar_Div,#jumpareNodeId,#esdTipLink,#esdTipLink1,esdTipLink2)").length>0){
	//	jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal,#toolbar_Div,#jumpareNodeId,#esdTipLink,#esdTipLink1,esdTipLink2)").appendTo("#toolbar_Div");
	//}
	EsdToolbar.targetBody.find("*:not(#toolbarHtml, #toolbarHtml *, #ymd_magnifier, #ymd_magnifier *, .bx-info,.switch,.switch *,#J-slide-passcode,#J-slide-passcode *, .ico-dh,.train-seat-box li)").addClass("esdHBG");
//	if(jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal,[data-toolbar-zoom=1],.dzp-confirm)").length>=1){
//		jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal,[data-toolbar-zoom=1],.dzp-confirm)").each(function(){
//			var readZoom = EsdToolbar.storage.getCookie("readZoom");
//			jq_t("body>*:not(#toolbarHtml,#ymd_magnifier,style,script,link,#slideLateral,#slideLongitudinal)").css({"transform":"scale(" + readZoom + ")","transform-origin":"top"}).attr("data-toolbar-zoom","1");
//		});
//	}
	jq_t(".ls strong:not(.esdLsDone)").each(function(){
		var tempText = jq_t(this).text();
		var tempH = tempText.split(":")[0];
		var tempM = tempText.split(":")[1];
		if(tempH.substr(0,1)=="0"){
			tempH = tempH.substr(1,2);
		}
		this.ariaLabel = tempH+"小时"+tempM+"分";
		this.className = this.className + " esdLsDone"
	});

	if(window.location.href.indexOf("kyfw.12306.cn/otn/leftTicket/init")>-1){
		jq_t("td:not(.esdHoubu)").each(function(){
			if(jq_t(this).text()=="候补"){
				jq_t(this).addClass("esdHoubu");
				jq_t(this).keydown(function(e){
					if(e.keyCode==13){
						this.click();
					}
				});
			}
		});
		jq_t("#date_range ins[tabindex=0],#date_range span[tabindex=0]").attr("tabindex","-1");

		jq_t("#sf1").attr("aria-label","车票类型,当前为普通,按下方向键选择学生,按空格键选中");
        jq_t("#sf2").attr("aria-label","车票类型,当前为学生,按上方向键选择普通,按空格键选中");
        var focusTags = "a,input,textarea area"
		jq_t(focusTags).focus(function () {
				this.style.setProperty("outline", "1px dashed black", "important");
			});
		jq_t(focusTags).blur(function () {
			jq_t(this).css({
				"outline": ""
			});
		});
	}
	if(window.location.href=="https://kyfw.12306.cn/otn/regist/init"){
		jq_t("#cardCode_div").attr("tabindex","-1");
	}
	if(jq_t(".search-btn").length>0&&jq_t(".search-btn").attr("aria-label")=="点击搜索"){
		jq_t(".search-btn").attr("aria-label", "点击搜索，搜索结果页面可能超出无障碍服务范围");
	}
	
};
//=======================================页面再处理 结束=========================================================

//=======================================大鼠标 开始=======================================================
EsdToolbar.cursor = {};
EsdToolbar.cursor.flg = "";
EsdToolbar.cursor.init = function(){
	var cursorStatus = EsdToolbar.storage.getCookie("cursorStatus");
	if(cursorStatus=="on"){
		EsdToolbar.cursor.open();
	}
	if(cursorStatus==null){
		EsdToolbar.cursor.close();
	}
};
EsdToolbar.cursor.switchOnOff = function () {
	if(jq_t(document).find("#esdCursortemp").length==1){
		EsdToolbar.cursor.close();
		EsdToolbar.buttonReader.read("bigMouseOff");
	}else{
		var cursorStatus = EsdToolbar.storage.getCookie("cursorStatus");
		if (cursorStatus == "off") {
			EsdToolbar.cursor.open();
			EsdToolbar.buttonReader.read("bigMouseOn");
		} else if (cursorStatus == "on") {
			EsdToolbar.cursor.close();
			EsdToolbar.buttonReader.read("bigMouseOff");
		}
	}
};
EsdToolbar.cursor.open = function() {
	var ico = EsdToolbar.toolbarFileURL+"img/shubiao.ico";
	var esdCursortemp = document.createElement("style");
	esdCursortemp.setAttribute("type", "text/css");
	esdCursortemp.id="esdCursortemp";//esdTempStyle
	document.head.appendChild(esdCursortemp);
	jq_t(esdCursortemp).html("body,a{cursor: url(" + ico + "), auto !important;}");
	jq_t("#toolbar_refresh1").attr("title","当前大鼠标已开启，关闭大鼠标Shift+8");
	jq_t("#toolbar_refresh1 img").attr("title","当前大鼠标已开启，关闭大鼠标Shift+8").attr("alt","当前大鼠标已开启，关闭大鼠标Shift+8");
	EsdToolbar.storage.setCookie("cursorStatus", "on", 10);
};
EsdToolbar.cursor.close = function() {
	jq_t(document).find("#esdCursortemp").remove()
	jq_t("#toolbar_refresh1").attr("title","当前大鼠标已关闭，开启大鼠标Shift+8");
	jq_t("#toolbar_refresh1 img").attr("title","当前大鼠标已关闭，开启大鼠标Shift+8").attr("alt","当前大鼠标已关闭，开启大鼠标Shift+8");
	EsdToolbar.storage.setCookie("cursorStatus", "off", 10);
};
//=======================================大鼠标 结束=======================================================
//=======================================按钮功能朗读 开始=======================================================
EsdToolbar.buttonReader = {};
EsdToolbar.buttonReader.read = function(fileName){
	//if(topPageReader.isOn){
		var voiceUrl = EsdToolbar.toolbarFileURL+"mp3/"+fileName+".mp3";
		if(EsdToolbar.speak.sound.mp3Object != null){   
			EsdToolbar.speak.sound.mp3Object.destruct();
		}

		EsdToolbar.speak.sound.mp3Object=soundManager.createSound({
			id:'tool',
			url:voiceUrl,
			volume: EsdToolbar.speak.volume,
			onfinish:function(){
				EsdToolbar.speak.sound.mp3Object.destruct();
			}
		});
		EsdToolbar.speak.sound.mp3Object.play();		
	//}
};
EsdToolbar.titleReader = function(){
	EsdToolbar.speak.sound.voicePrompt.pageTitleReader();
};
//=======================================按钮功能朗读 结束=======================================================
//=======================================按钮读屏专用 开始=======================================================
EsdToolbar.readScreen = {
	isDone : false,
	totalWinNum : 0,
	navWinNum : 0,
	interactionWinNum : 0,
	infoWinNum : 0,
	navJumpCount : 0,
	interactionJumpCount : 0,
	infoWinJumpCount : 0,
	interactionWinArray : new Array(),
	inforWinArray : new Array(),
	initCount : 0,
	topNavSelector : "",
	bottomNavSelector : "",
	allSelectors : null,
	interactionSelectors : null,
	
	init : function(){
		this.initCount++;
		this.totalWinNum = 0;
		this.navWinNum = 0;
		this.interactionWinNum = 0;
		this.infoWinNum = 0;
		this.navJumpCount = 0;
		this.interactionJumpCount = 0;
		this.infoWinJumpCount = 0;
		this.interactionWinArray = new Array();
		this.inforWinArray = new Array();
		//清空
		jq_t("#navNum").html("");
		jq_t("#interactionWinNum").html("");
		jq_t("#infoWinNum").html("");
		//初始化选择器
		this.initAllSelector();
		jq_t(this.allSelectors).each(function(){
			if(jq_t(this.selector).length>0){
				EsdToolbar.readScreen.inforWinArray.push(this);
			}
		});
		//导航
		this.navWinNum += jq_t(this.topNavSelector).length;	
		this.navWinNum += jq_t(this.bottomNavSelector).length;
		jq_t("#navNum").html(this.navWinNum);
		if(this.navWinNum == 0){
			jq_t("#navNumDiv").hide();
		}else{
			jq_t("#navNumDiv").show();
		}
		
		//交互
		var tempObj = null;
		jq_t(this.interactionSelectors).each(function(){
			if(jq_t(this.selector).length>0){
				EsdToolbar.readScreen.interactionWinArray.push(jq_t(this.selector));
			}
		});
		EsdToolbar.readScreen.interactionWinNum = this.interactionWinArray.length;
		jq_t("#interactionWinNum").html(this.interactionWinNum);
		if(this.interactionWinNum == 0){
			jq_t("#interactionWinDiv").hide();
		}else{
			jq_t("#interactionWinDiv").show();
		}
		
		//视窗
		this.infoWinNum = this.getInfoWinNum();
		jq_t("#infoWinNum").html(this.infoWinNum);
		if(this.infoWinNum == 0){
			jq_t("#infoWinDiv").hide();
		}else{
			jq_t("#infoWinDiv").show();
		}
		//总数
		this.totalWinNum = this.navWinNum + this.interactionWinNum + this.infoWinNum;
		//更新显示屏
		this.isDone = true;
		this.addTipLink();
		this.keyBinding();
		this.addHiddenLink();

        if(window.location.href=="https://kyfw.12306.cn/otn/lcQuery/init"){
        	jq_t("#query_more").click(function(){
				window.estTime001 = setInterval(function(){
					if(jq_t(".dhx_modal_cover:eq(0)").css("display")=="none"){
						clearInterval(window.estTime001); 
						jq_t("#query_more").focus();
					}
				},500);
			});
        }
		if(window.location.href.indexOf("kyfw.12306.cn/otn//payOrder/init")>-1){
			jq_t("#ShowTime").attr("tabindex","0");
		}
		if(window.location.href=="https://www.12306.cn/index/index.html"||window.location.href=="https://www.12306.cn/index/"){
			jq_t(".tempWrap ul a").each(function(){
				this.style.setProperty("background", "transparent", "important");
			});
			jq_t("div.section-first > div.fullSlide > div.hd > ul > li").attr("tabindex","-1");
		}
		if(window.location.href=="https://kyfw.12306.cn/otn/resources/login.html"){
			jq_t("div.login-panel> div.loginSlide> div.hd> ul > li").attr("tabindex","-1");
		}
		if(window.location.href.indexOf("kyfw.12306.cn/otn/leftTicket/init")>-1){
			jq_t("#l_s").keydown(function(e){
				if(e.keyCode==13){
					this.click();
				}
			});
		}
		
	},
	
	getInfoWinNum : function(){
		var num =0;
		for (var i = 0; i < this.allSelectors.length; i++) {
			var tempObj = jq_t(this.allSelectors[i].selector);
			if(tempObj.length!=0){
				num++
			}
		}
		return num;
	},
	
	setMagnifierAndRead : function(str){
		EsdToolbar.magnifier.setText(str);
		if(EsdToolbar.speak.volume==0||EsdToolbar.isOpen==false){
			return false;
		}
		if (EsdToolbar.statusspeakOnOff == "off") {
			var de = base64.e64(str);
			jq_t.ajax({
				type : 'GET',
				url : EsdToolbar.speak.sound.url.ajaxUrl,
				dataType : 'jsonp',
				jsonp : "callback",
				data : {"b" : de, "s" : EsdToolbar.speak.speedVal},
				async : false,
				success : function(data) {
					if(EsdToolbar.speak.sound.mp3Object!=null){
						EsdToolbar.speak.sound.mp3Object.destruct();
					}
					EsdToolbar.speak.sound.mp3Object=soundManager.createSound({
						id:'tool',
						url:data.u,
						onload:function(l){
							if(l==0){
								if(EsdToolbar.speak.sound.mp3Object!=null){
									EsdToolbar.speak.sound.mp3Object.destruct();
								}
							}
						}
					});
					EsdToolbar.speak.sound.mp3Object.play();
				}
			});
		
		}
	},
	
	navJump : function(){
		var navJumpStep = this.navJumpCount%2
		var navSelector;
		if(navJumpStep==0){
			navSelector = this.topNavSelector;
		}else{
			if(this.bottomNavSelector==""){
				navSelector = this.topNavSelector;
			}else{
				navSelector = this.bottomNavSelector;
			}
		}
		this.navJumpCount++;
		this.jumper(navSelector);
	},
	
	interactionJump : function(){
		var interactionJumpStep = this.interactionJumpCount%this.interactionWinNum;
		if(jq_t("#page-loading").length>0){
			if(interactionJumpStep==0){
				jq_t("div.section-first > div.search-index > ul > li:nth-child(1) > a")[0].click();
			}else if(interactionJumpStep==1){
				jq_t("div.section-first > div.search-index > ul > li:nth-child(2) > a")[0].click();
			}else if(interactionJumpStep==2){
				jq_t("div.section-first > div.search-index > ul > li:nth-child(3) > a")[0].click();
			}
		}
		this.interactionJumpCount++;
		this.jumper(this.interactionWinArray[interactionJumpStep].selector);
	},
	
	infoWinJump : function(){
		var infoWinJumpStep = this.infoWinJumpCount%this.inforWinArray.length
		var infoWinSelector = "";
		var infoWinContent = "";
		if(this.inforWinArray[infoWinJumpStep]!=undefined){
			infoWinSelector = this.inforWinArray[infoWinJumpStep].selector;
			infoWinContent = this.inforWinArray[infoWinJumpStep].content;
		}
		var infoWinStr;
		this.infoWinJumpCount++;
		this.jumper(infoWinSelector);
	},
	
	jumper : function(selector){
		var tempHtml = jq_t(selector).html();
		if(tempHtml==undefined){
			return false;
		}
		var aIndex = tempHtml.indexOf("<a");
		var insIndex = tempHtml.indexOf("<ins");
		if((aIndex<insIndex&&aIndex!=-1)||insIndex==-1){
			jq_t(selector+" a:eq(0)").focus();	
		}else{
			jq_t(selector+" ins[class*=ESDAssetsTextCon]:eq(0)").focus();	
		}
		jq_t(".esdBgG").each(function(){
			jq_t(this).removeClass("esdBgG");
		});
		jq_t(selector).addClass("esdBgG");
	},
	
	keyBinding : function(){
		if(this.initCount==1){
			jq_t("#toolbar_magnifier_2").click(function(){
				jq_t("#toolbar_magnifier").trigger("click");
			});
		}
	},
	
	initAllSelector : function(){
		var fileUrl = window.location.href.split("/")[2]; 
		var fileUrl = window.location.href.split("/")[2]; 
		fileUrl = fileUrl.indexOf("www.")>-1 ? fileUrl.split("www.")[1] : fileUrl;
		this.topNavSelector = EsdToolbar.allSelectorConfig.getTopNavSelector();
		this.bottomNavSelector = EsdToolbar.allSelectorConfig.getBottomNavSelector();
		this.allSelectors = EsdToolbar.allSelectorConfig.allSelectors;
		this.interactionSelectors = EsdToolbar.allSelectorConfig.interactionSelectors

	},
	addHiddenLink:function(){
		var _that = this;
		//视窗区
		jq_t(this.allSelectors).each(function(){
			if(jq_t(this.selector).length>0){
				var infoWinJumpStep = _that.infoWinJumpCount%_that.inforWinArray.length
				var fStr="";
				var lStr="您已离开";
				if(this.content==""){
					fStr = "您已进入视窗区"+(infoWinJumpStep+1)+", 本区域含有"+jq_t(this.selector+" a").length+"个链接";
					if(jq_t(this.selector+" img").length>0){
						fStr = fStr+jq_t(this.selector+" img").length+"张图片,按下tab键浏览信息";
					}else{
						fStr = fStr+",按下tab键浏览信息";
					}
					lStr = lStr+"视窗区"+(infoWinJumpStep+1);
				}else{
					fStr = "您已进入"+this.content+"视窗区, 本区域含有"+jq_t(this.selector+" a").length+"个链接";
					if(jq_t(this.selector+" img").length>0){
						fStr = fStr+jq_t(this.selector+" img").length+"张图片,按下tab键浏览信息";
					}else{
						fStr = fStr+",按下tab键浏览信息";
					}
					lStr = lStr+this.content+ "视窗区"
				}
				_that.infoWinJumpCount++;
				_that.addLink(this.selector,fStr,lStr)
			}
		});
		this.infoWinJumpCount = 0;
		//导航 头部
		if(jq_t(this.topNavSelector).length>0){
			var fStr = "您已进入网站主导航区, 本区域含有"+jq_t(this.topNavSelector+" a").length+"个链接,按下tab键浏览信息";
			var lStr="您已离开网站主导航区";
			this.addLink(this.topNavSelector,fStr,lStr)
		}
		//导航 尾部
		if(jq_t(this.bottomNavSelector).length>0){
			var fStr = "您已进入网站底部导航区, 本区域含有"+jq_t(this.bottomNavSelector+" a").length+"个链接,按下tab键浏览信息";
			var lStr="您已离开网站主导航区";
			this.addLink(this.bottomNavSelector,fStr,lStr)
		}
		//交互
		jq_t(this.interactionSelectors).each(function(index){
			if(jq_t(this.selector).length>0){
				var fStr="";
				var lStr="您已离开";
				if(this.content==""){
					fStr = "您已进入交互区"+(index+1)+",按下tab键浏览信息";
					lStr = lStr+"交互区"+(index+1);
				}else{
					fStr = "您已进入"+this.content+"交互区,按下tab键浏览信息";
					lStr = lStr+this.content
				}
				lStr = lStr + "交互区";
				_that.interactionJumpCount++;
				_that.addLink(this.selector,fStr,lStr)
			}
		});
		this.interactionJumpCount = 0;
		jq_t(jq_t(".esdNavLinkFirst")).each(function(){
			jq_t(this).focus(function(){
				jq_t(".esdBgG").each(function(){
					jq_t(this).removeClass("esdBgG");
				});
				jq_t(this).parent().addClass("esdBgG");
			});
		});
	},
	//selector 是jquery的选择器   fStr是开头的提示文字  lStr是结尾的提示文字
	addLink: function (selector, fStr, lStr){
	 //添加开头的
	 jq_t(selector).prepend('<a href="javascript:void(0)" class="esdNavLink esdNavLinkFirst" tabindex="0" target="_self" style="max-width: 1px !important; float: left !important; border: 0px !important; padding: 0px !important; margin: 0px !important; width: 1px !important; height: 1px !important; overflow: hidden !important; display: block !important; position: absolute !important;">提示:'+fStr+'</a>')
	 //添加结尾的
	 jq_t(selector).append('<a href="javascript:void(0)" class="esdNavLink" tabindex="0" target="_self" style="max-width: 1px !important; float: left !important; border: 0px !important; padding: 0px !important; margin: 0px !important; width: 1px !important; height: 1px !important; overflow: hidden !important; display: block !important; position: absolute !important;">提示:'+lStr+'</a>')
	},
	addTipLink: function(){
		EsdToolbar.tipLinkAddIsDone = true;
		var str = "本页面是由";
		var buttonStr = "";
		if(EsdToolbar.readScreen.navWinNum>0){
			str = str + EsdToolbar.readScreen.navWinNum+"个导航区、";
            buttonStr = buttonStr +"按ALT加1键访问导航区、";
		}
		if(EsdToolbar.readScreen.infoWinNum>0){
			str = str + EsdToolbar.readScreen.infoWinNum+"个视窗区、";
			buttonStr = buttonStr +"按ALT加2键循环访问视窗区、";
		}
		if(EsdToolbar.readScreen.interactionWinNum>0){
			str = str + +EsdToolbar.readScreen.interactionWinNum+"个交互区";
			buttonStr = buttonStr +"按ALT加3键循环访问交互区、";
		}
		str = str + "共计"+EsdToolbar.readScreen.totalWinNum+"个区域组成、";
        str = str + buttonStr;
		//console.log(str);
		var esdTipLink = document.createElement("a");
		esdTipLink.setAttribute("href","javascript:void(0);");
		esdTipLink.tabIndex="9";
		esdTipLink.id="esdTipLink";
		esdTipLink.style.setProperty("max-width","0px","important");
		esdTipLink.style.setProperty("float","left","important");
		esdTipLink.style.setProperty("border","0px","important");
		esdTipLink.style.setProperty("padding","0px","important");
		esdTipLink.style.setProperty("margin","0px","important");
		esdTipLink.style.setProperty("width","0px","important");
		esdTipLink.style.setProperty("height","0px","important");
		esdTipLink.style.setProperty("overflow","hidden","important");
		esdTipLink.style.setProperty("display","block","important");
		esdTipLink.style.setProperty("left","100%","important");
		esdTipLink.style.setProperty("top","0","important");
		//esdTipLink.style.setProperty("background-color","red","important");
		esdTipLink.style.setProperty("position","absolute","important");
		esdTipLink.className = "esdNavLink";
		esdTipLink.innerText = str;
		jq_t("#esdTipLink").remove();
		document.getElementsByTagName("BODY")[0].appendChild(esdTipLink);
		jq_t("#esdTipLink").bind("focus.ffSpeak",function(){
            var text;
            if(jq_t(this).parents().is("a")){    
                text = "";
            }else{
                text=EsdToolbar.manageText(this);
            }
			EsdToolbar.magnifier.setText(text);
		});
		//setTimeout(function(){jq_t(esdTipLink).focus();},500);
		EsdToolbar.tipLinkAddIsDone = true;
	}

};
EsdToolbar.allSelectorConfig = {};
EsdToolbar.allSelectorConfig.getTopNavSelector = function(){
	var topNavSelector = "";
	if(jq_t("div.header > div.nav-box > ul").length==0){
		topNavSelector = "div.nav-new";
	}else{
		topNavSelector = "div.header > div.nav-box > ul";
	}
	return topNavSelector;
}
		
EsdToolbar.allSelectorConfig.getBottomNavSelector = function(){
	var bottomNavSelector = "";
	if(jq_t("div.footer").length==0){
		bottomNavSelector = "";
	}else{
		bottomNavSelector = "";
	}
	return bottomNavSelector;
}	

EsdToolbar.allSelectorConfig.allSelectors = [
	//首页
	{"selector":"div.header > div.wrapper","content":"网站头部"},
	{"selector":"div.header-wrap > div > div.wrapper","content":"网站头部"},
	{"selector":"div.section-first > div.search-index","content":"查询"},
	{"selector":"div.wrapper > ul.service-list","content":""},
	{"selector":"div.wrapper > div.service-lg","content":""},
	{"selector":"div.wrapper > div.section","content":"铁路旅游"},
	{"selector":"div.wrapper > div.news-tab","content":"新闻"},
	{"selector":"div.fixed-right","content":"右侧漂浮"},
	//其他
	{"selector":"div.wrapper.content > div.info-box-border","content":"右侧漂浮"},
	{"selector":"div.wrapper.content > div.main-panel","content":"主要内容"},
	{"selector":"#leftKslide","content":""},//车站引导左侧  车站风采
	{"selector":"#rightKslide","content":""},//车站引导右侧  车站风采
	{"selector":"div.wrapper.content > div.seat-map","content":"动车组介绍"},
	{"selector":"div.wrapper.content > div.map-panel","content":""},
	{"selector":"#t-list","content":"查询结果"},
	{"selector":"div.wrapper.content> div.center-box> ul","content":"左侧菜单"},
	{"selector":"div.wrapper.content > div.center-box > div","content":"右侧内容"},
	//购票
	{"selector":"div.content > div.layout.t-info","content":"列车信息"},
	{"selector":"div.content > div.layout.person","content":"乘客信息"},
	{"selector":"div.content > div.tips-txt","content":"温馨提示"},
	//cx.12306
	{"selector":"div.fullSlide","content":"轮播图"},
	{"selector":"div.white > div > div.jf-service.jf-otn-jump","content":"服务"},
	{"selector":"div.white > div > div.jf-txt-box.clearfix > div.jf-get","content":"会员手册"},
	{"selector":"div.white > div > div.jf-txt-box.clearfix > div.jf-ask","content":"常见问题"},
	{"selector":"div.wrap.center > div.center-side","content":"左侧菜单"},
	{"selector":"div.wrap.center > div.center-main","content":"右侧内容"},
	//雪具快运
	{"selector":"div.wrapper > div > div:nth-child(2).transport-form-item","content":"快运产品"},
	//出行指南
	{"selector":"div.content.clearfix > div.sidebar","content":"左侧菜单"},
	{"selector":"div.content.clearfix > div.main","content":"右侧内容"},
	{"selector":"div.content > div.help-tab","content":"常见问题"},
	//时刻表查询
	{"selector":"div.content > div.t-list","content":""},
	//失信被执行人公式
	{"selector":"div.discredit-page > div.discredit-content > div.discredit-list-show.clearfix > div:nth-child(1).discredit-list-item","content":"失信被执行人(自然人)公示"},
	{"selector":"div.discredit-page > div.discredit-content > div.discredit-list-show.clearfix > div:nth-child(2).discredit-list-item","content":"失信已执行人(自然人)公布"},
	{"selector":"#div1","content":"信息公布与查询平台声明"},
	//旅游
	{"selector":"div.slideBox > div.bd","content":"轮播图"},
	{"selector":"div.w > div:nth-child(1).home-box","content":"研学旅行"},
	{"selector":"div.w > div:nth-child(2).home-box","content":"旅游专列"},
	{"selector":"div.w > div:nth-child(3).home-box","content":"精品路线"},
	{"selector":"div.w > div:nth-child(4).home-box","content":"热门景点"},
	{"selector":"div.w > div:nth-child(5).home-box","content":"旅行社推荐"},
	{"selector":"#main_content > div.t-succ.t-lock","content":"提示信息"},
	{"selector":"#main_content > div.layout.b-info","content":"订单信息"},
	
	//底部
	{"selector":"div.footer > div.footer-con.wrapper","content":"友情链接"},
	{"selector":"div.footer > div.footer-txt","content":"版权备案"},
	{"selector":"div.footer[role='contentInfo']","content":"网站底部"}
]

EsdToolbar.allSelectorConfig.interactionSelectors = [
	{"selector":"div.section-first > div.search-index > div > div:nth-child(1)","content":"车票查询"},
	{"selector":"div.section-first > div.search-index > div > div:nth-child(2)","content":"常用查询"},
	{"selector":"div.section-first > div.search-index > div > div:nth-child(3)","content":"订餐"},
	{"selector":"div.login-panel > div.login-box","content":"登录"},
	{"selector":"div.content.content-lg > div.sear-box.quick-sear-box.sear-box-lg","content":"车票查询"},
	{"selector":"#sear-sel","content":"日期车型选择"},
	{"selector":"#sear-result","content":"查询结果"},
	{"selector":"div.header > div.wrapper > div > div > div.header-search > div.search-bd","content":"查询"},
	//exservice.12306
	{"selector":"div.index-search.index-main > div","content":"服务搜索"},
	{"selector":"div.wrapper > div > div.transport-form-head.clearfix > div:nth-child(1)","content":"寄件人信息"},
	{"selector":"div.wrapper > div > div.transport-form-head.clearfix > div:nth-child(2)","content":"收件人信息"},
	{"selector":"div.wrapper > div > div:nth-child(4).transport-form-item","content":"寄件方式"},
	{"selector":"div.wrapper > div > div:nth-child(5).transport-form-item","content":"支付方式"},
	{"selector":"#_queryForm > div","content":"正晚点查询"},
	{"selector":"div.content > div.lay-sear.lay-sear-station.clearfix","content":"时刻表查询"},
	{"selector":"div.wrapper.content > div.map-panel > div.route-box","content":"交通查询"},
	{"selector":"div.content > div.lay-sear.lay-sear-place.clearfix","content":"代售点查询"},
	{"selector":"div.discredit-page > div.discredit-content > div.discredit-form","content":"名单搜索"},
	{"selector":"div.travel-search > div.travel-search","content":"搜索"}
]

//=======================================按钮读屏专用 结束=======================================================
EsdToolbar.rebuild = function(){
	if(!EsdToolbar.pageIsRebuilded){
		EsdToolbar.pageRebuild.rebuild();
		EsdToolbar.speak.sound.init();
		EsdToolbar.pageIsRebuilded = true;
		if(EsdToolbar.readPageAgain.isOn){
			if(EsdToolbar.readPageAgain.readAgainType=="timeout"){
				EsdToolbar.readPageAgain.setTimeoutReadAgain();
			}else{
				EsdToolbar.readPageAgain.setIntervalReadAgain();
			}		
		}
		innerIframeHandler.init();
	}
	if(EsdToolbar.isExit){
		if(EsdToolbar.readPageAgain.isOn){
			if(EsdToolbar.readPageAgain.readAgainType=="timeout"){
				EsdToolbar.readPageAgain.setTimeoutReadAgain();
			}else{
				EsdToolbar.readPageAgain.setIntervalReadAgain();
			}		
		}
	}
};

EsdToolbar.toolbarHtmlStr = "";
EsdToolbar.toolbarHtmlStr+='<link id="toolbarCss" rel="stylesheet" type="text/css" href="'+EsdToolbar.toolbarFileURL+'css/toolbar.css" />';
EsdToolbar.toolbarHtmlStr+='<link id="toolbarMainCss" rel="stylesheet" type="text/css" href="'+EsdToolbar.toolbarFileURL+'css/toolbarmain.css" />';
EsdToolbar.toolbarHtmlStr+='<style type="text/css">';
EsdToolbar.toolbarHtmlStr+='/*  .whiteBlackMode {background-color:#FFFFFF;color:#000000;background-image:none;}';
EsdToolbar.toolbarHtmlStr+=' .blueYellowMode {background-color:#0000FF;color:#FFFF00;background-image:none;}';
EsdToolbar.toolbarHtmlStr+=' .yellowBlackMode {background-color:#FFFF00;color:#000000;background-image:none;}';
EsdToolbar.toolbarHtmlStr+=' .yellowMode {background-color:#000000;color:#FFFF00;background-image:none;}  */';
EsdToolbar.toolbarHtmlStr+=' .esdBgG, .esdBgG * {background-color: #ccc !important; color: black !important;} ';
EsdToolbar.toolbarHtmlStr+=' .esdUnderLine{text-decoration: underline !important;}';
EsdToolbar.toolbarHtmlStr+='</style>';
EsdToolbar.toolbarHtmlStr+='<div id="toolbarHtml" style="display: none; z-index: 5500">';
EsdToolbar.toolbarHtmlStr+='	<div id="toolbar" class="clearfix">';
EsdToolbar.toolbarHtmlStr+='		<div id="canyou_toolbar_div">';
EsdToolbar.toolbarHtmlStr+='			<div class="cy_toolbar_bg_table">';
EsdToolbar.toolbarHtmlStr+='				<ul>';
EsdToolbar.toolbarHtmlStr+='					<!-- <li id="cy_index" class="li_1"><a href="javascript:void(0);" id="toolbar_home" class="ul_li_a_1" title="首页"><img  src="'+EsdToolbar.toolbarFileURL+'img/home1.png" alt="首页" title="首页" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="首页">首页</span></li> -->';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_refrash" class="li_1"><a href="javascript:void(0);" id="toolbar_refresh"  class="ul_li_a_1" title="重新设置Shift+1"><img  src="'+EsdToolbar.toolbarFileURL+'img/reflash1.png" title="重新设置Shift+1"';
EsdToolbar.toolbarHtmlStr+='							alt="重新设置Shift+1" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="重新设置Shift+1">重置</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_playSpeech" class="li_2"><a href="javascript:void(0);" id="toolbar_speakVolume"  class="ul_li_a_1" title="声音"><img  src="'+EsdToolbar.toolbarFileURL+'img/sound_normal.png"';
EsdToolbar.toolbarHtmlStr+='							title="声音" alt="声音" />';
EsdToolbar.toolbarHtmlStr+='					</a><span class="a_p_3 ul_li_a_1" href="javascript:void(0);" title="声音">声音</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_pointerRead" class="li_1"><a href="javascript:void(0);" id="toolbar_speakSpeed"  class="ul_li_a_1" title="语速"><img  src="'+EsdToolbar.toolbarFileURL+'img/vol_normal.png"';
EsdToolbar.toolbarHtmlStr+='							alt="语速" title="语速" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="语速">语速</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_pointerRead" class="li_1"><a href="javascript:void(0);" id="toolbar_readChange"  class="ul_li_a_1" title="阅读方式"><img  src="'+EsdToolbar.toolbarFileURL+'img/point2.png"';
EsdToolbar.toolbarHtmlStr+='							alt="阅读方式" title="阅读方式" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="阅读方式">阅读方式</span></li>';
EsdToolbar.toolbarHtmlStr+='					<!-- <li id="cy_continueRead" class="li_1"><a href="javascript:void(0);" id="toolbar_batchRead" class="ul_li_a_1" title="连读"><img  src="'+EsdToolbar.toolbarFileURL+'img/continuous1.png"';
EsdToolbar.toolbarHtmlStr+='							title="连读" alt="连读" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="连读">连读</span></li> -->';
EsdToolbar.toolbarHtmlStr+='					<!-- <li id="cy_back" class="li_1"><a href="javascript:void(0);" id="toolbar_retreat" class="ul_li_a_1" title="后退"><img  src="'+EsdToolbar.toolbarFileURL+'img/back1.png" alt="后退"';
EsdToolbar.toolbarHtmlStr+='							title="后退" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="后退">后退</span></li> -->';
EsdToolbar.toolbarHtmlStr+='					<!-- <li id="cy_go" class="li_1"><a href="javascript:void(0);" id="toolbar_ahead" class="ul_li_a_1" title="前进"><img  src="'+EsdToolbar.toolbarFileURL+'img/forward1.png" title="前进"';
EsdToolbar.toolbarHtmlStr+='							alt="前进" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="前进">前进</span></li> -->';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_color" class="li_2"><a href="javascript:void(0);" class="ul_li_a_1" title="切换配色Shift+5"  id="toolbar_colorChange"><img  src="'+EsdToolbar.toolbarFileURL+'img/color1.png"';
EsdToolbar.toolbarHtmlStr+='							title="切换配色Shift+5" alt="切换配色Shift+5" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="调整配色">配色</span></li>';
EsdToolbar.toolbarHtmlStr+='					<!-- <li id="cy_gray_change" class="li_1"><a href="javascript:void(0);" id="toolbar_grayChange" class="ul_li_a_1" title="灰度调节"><img  src="'+EsdToolbar.toolbarFileURL+'img/gray.png"';
EsdToolbar.toolbarHtmlStr+='							alt="灰度调节" title="灰度调节" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="灰度调节">灰度</span></li> -->';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_bigword" class="li_1"><a href="javascript:void(0);" id="toolbar_pageZoomIc"  class="ul_li_a_1" title="网页放大Shift+6"><img  src="'+EsdToolbar.toolbarFileURL+'img/enlarge1.png"';
EsdToolbar.toolbarHtmlStr+='							alt="网页放大Shift+6" title="网页放大Shift+6" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="网页放大Shift+6">放大</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_smallword" class="li_1"><a href="javascript:void(0);" id="toolbar_pageZoomDc"  class="ul_li_a_1" title="网页缩小Shift+7"><img  src="'+EsdToolbar.toolbarFileURL+'img/small1.png"';
EsdToolbar.toolbarHtmlStr+='							title="网页缩小Shift+7" alt="网页缩小Shift+7" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="网页缩小Shift+7">缩小</span></li>';
EsdToolbar.toolbarHtmlStr+='					<!-- <li id="cy_text" class="li_2"><a href="javascript:void(0);" id="toolbar_textMode" class="ul_li_a_1" title="纯文本模式"><img  src="'+EsdToolbar.toolbarFileURL+'img/text1.png" alt="纯文本模式"';
EsdToolbar.toolbarHtmlStr+='							title="纯文本模式" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p_1 ul_li_a_1" href="javascript:void(0);" title="纯文本模式">纯文本</span></li> -->';
EsdToolbar.toolbarHtmlStr+='					<!-- <li id="cy_bigword" class="li_1"><a href="javascript:void(0);" id="toolbar_text_bigger" class="ul_li_a_1" title="文字放大"><img  src="'+EsdToolbar.toolbarFileURL+'img/bigword1.png"';
EsdToolbar.toolbarHtmlStr+='							alt="文字放大" title="文字放大" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="文字放大">大字</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_smallword" class="li_1"><a href="javascript:void(0);" id="toolbar_text_smaller" class="ul_li_a_1" title="文字缩小"><img  src="'+EsdToolbar.toolbarFileURL+'img/smallword1.png"';
EsdToolbar.toolbarHtmlStr+='							title="文字缩小" alt="文字缩小" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="文字缩小">小字</span></li> -->';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_arrow" class="li_2">';
EsdToolbar.toolbarHtmlStr+='						<a href="javascript:void(0);" id="toolbar_refresh1" class="ul_li_a_1"  title="切换鼠标样式Shift+8" >';
EsdToolbar.toolbarHtmlStr+='						<img src="'+EsdToolbar.toolbarFileURL+'img/reflash2.png"  title="切换鼠标样式Shift+8" alt="切换鼠标样式Shift+8">';
EsdToolbar.toolbarHtmlStr+='						</a>';
EsdToolbar.toolbarHtmlStr+='						<span class="a_p ul_li_a_1" href="javascript:void(0);" title="鼠标样式">鼠标样式</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_ruler" class="li_1"><a href="javascript:void(0);" id="toolbar_guides"  class="ul_li_a_1" title="十字光标"><img  src="'+EsdToolbar.toolbarFileURL+'img/cursor1.png" title="十字光标"';
EsdToolbar.toolbarHtmlStr+='							alt="十字光标" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="十字光标">光标</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_displayScreen" class="li_2"><a href="javascript:void(0);" id="toolbar_magnifier"  class="ul_li_a_1" title="切换显示屏Shift+0"><img  src="'+EsdToolbar.toolbarFileURL+'img/screen1.png"';
EsdToolbar.toolbarHtmlStr+='							alt="切换显示屏Shift+0" title="切换显示屏Shift+0" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p_2 ul_li_a_1" href="javascript:void(0);" title="显示屏">显示屏</span></li>';
EsdToolbar.toolbarHtmlStr+='					<!-- <li id="cy_full_screen" class="li_1"><a href="javascript:void(0);" id="toolbar_fullScreen" class="ul_li_a_1" title="全屏"><img  src="'+EsdToolbar.toolbarFileURL+'img/full_screen1.png"';
EsdToolbar.toolbarHtmlStr+='							alt="全屏" title="全屏" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="全屏">全屏</span></li> -->';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_help" class="li_1"><a href="javascript:void(0);" id="toolbar_help" class="ul_li_a_1" title="开启帮助Shift+问号键"><img  src="'+EsdToolbar.toolbarFileURL+'img/help1.png" alt="开启帮助Shift+问号键" title="开启帮助Shift+问号键" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="开启帮助Shift+问号键">帮助</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_more" class="li_1"><a href="https://www.yunmd.net/tools/shortcut/url?n=12306" target="_blank"  id="toolbar_more" class="ul_li_a_1" title="下载快捷方式 Shift+D"><img  src="'+EsdToolbar.toolbarFileURL+'img/left_img5.png"';
EsdToolbar.toolbarHtmlStr+='							alt="下载快捷方式 Shift+D" title="下载快捷方式 Shift+D" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="下载快捷方式 Shift+D">快捷方式</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_move" class="li_1"><a href="javascript:void(0);" id="toNav" class="ul_li_a_1"  title="读屏专用：快捷键Shift+N，适用于使用读屏软件的用户，若无读屏软件可通过Shift+2开启声音获取语音提示"><img  src="'+EsdToolbar.toolbarFileURL+'img/toOriginal.png"';
EsdToolbar.toolbarHtmlStr+='							alt="读屏专用：快捷键Shift+N，适用于使用读屏软件的用户，若无读屏软件可通过Shift+2开启声音获取语音提示" title="读屏专用：快捷键Shift+N，适用于使用读屏软件的用户，若无读屏软件可通过Shift+2开启声音获取语音提示" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="读屏专用：快捷键Shift+N，适用于使用读屏软件的用户，若无读屏软件可通过Shift+2开启声音获取语音提示">读屏专用</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="cy_close" class="li_1"><a href="javascript:void(0);" id="toolbar_exit" class="ul_li_a_1"  title="关闭辅助工具Shift+Q"><img  src="'+EsdToolbar.toolbarFileURL+'img/exit1.png" alt="关闭辅助工具Shift+Q" title="关闭辅助工具Shift+Q" />';
EsdToolbar.toolbarHtmlStr+='					</a> <span class="a_p ul_li_a_1" href="javascript:void(0);" title="关闭辅助工具Shift+Q">退出</span></li>';
EsdToolbar.toolbarHtmlStr+='					<li id="botn" style="clear:both;"></li>';
EsdToolbar.toolbarHtmlStr+='				</ul>';
EsdToolbar.toolbarHtmlStr+='			</div>';
EsdToolbar.toolbarHtmlStr+='		</div>';
EsdToolbar.toolbarHtmlStr+='	</div>';
EsdToolbar.toolbarHtmlStr+='	<div id="toolbarPage2" class="btn-hide" style="height: 98px;">';
EsdToolbar.toolbarHtmlStr+='		<div id="toolbarPage2content">';
EsdToolbar.toolbarHtmlStr+='		<!--  -->';
EsdToolbar.toolbarHtmlStr+='			<div id="transform_dp">';
EsdToolbar.toolbarHtmlStr+='				<div class="navText" style="padding-top: 9px;">';
//EsdToolbar.toolbarHtmlStr+='					<span class="textStr2 textShow">';
//EsdToolbar.toolbarHtmlStr+='						读屏专用';
//EsdToolbar.toolbarHtmlStr+='					</span>';
EsdToolbar.toolbarHtmlStr+='					<img style="width: 120px;" src="'+EsdToolbar.toolbarFileURL+'img/top_pic.png" alt="智能导盲区域指引" title="智能导盲区域指引"/>';
EsdToolbar.toolbarHtmlStr+='				</div>';
EsdToolbar.toolbarHtmlStr+='				<div id="navNumDiv" class="toolbarTexts">';
EsdToolbar.toolbarHtmlStr+='					<span class="textSpan textShow">';
EsdToolbar.toolbarHtmlStr+='						<p class="textShow"> ';
EsdToolbar.toolbarHtmlStr+='							<span class="textStr textShow">导航区</span> ';
EsdToolbar.toolbarHtmlStr+='							<span class="textNum">(<span id="navNum" class="textNum"></span>)</span>';
EsdToolbar.toolbarHtmlStr+='						</p>';
EsdToolbar.toolbarHtmlStr+='						<p class="textKey textShow">ALT+1</p>';
EsdToolbar.toolbarHtmlStr+='					</span>';
EsdToolbar.toolbarHtmlStr+='				</div>';
EsdToolbar.toolbarHtmlStr+='				<div id="infoWinDiv" class="toolbarTexts">';
EsdToolbar.toolbarHtmlStr+='					<span class="textSpan textShow">';
EsdToolbar.toolbarHtmlStr+='						<p class="textShow"> ';
EsdToolbar.toolbarHtmlStr+='							<span class="textStr textShow">视窗区</span> ';
EsdToolbar.toolbarHtmlStr+='							<span class="textNum">(<span id="infoWinNum" class="textNum"></span>)</span>';
EsdToolbar.toolbarHtmlStr+='						</p>';
EsdToolbar.toolbarHtmlStr+='						<p class="textKey textShow">ALT+2</p>';
EsdToolbar.toolbarHtmlStr+='					</span>';
EsdToolbar.toolbarHtmlStr+='				</div>';
EsdToolbar.toolbarHtmlStr+='				<div id="interactionWinDiv" class="toolbarTexts">';
EsdToolbar.toolbarHtmlStr+='					<span class="textSpan textShow">';
EsdToolbar.toolbarHtmlStr+='						<p class="textShow"> ';
EsdToolbar.toolbarHtmlStr+='							<span class="textStr textShow">交互区</span> ';
EsdToolbar.toolbarHtmlStr+='							<span class="textNum">(<span id="interactionWinNum" class="textNum"></span>)</span>';
EsdToolbar.toolbarHtmlStr+='						</p>';
EsdToolbar.toolbarHtmlStr+='						<p class="textKey textShow">ALT+3</p>';
EsdToolbar.toolbarHtmlStr+='					</span>';
EsdToolbar.toolbarHtmlStr+='				</div>';
EsdToolbar.toolbarHtmlStr+='			</div>';
EsdToolbar.toolbarHtmlStr+='			<!--  --> ';
EsdToolbar.toolbarHtmlStr+='		<div id="otherBtns">';
EsdToolbar.toolbarHtmlStr+='			<div class="readDiv" id="cy_playSpeech_2">';
EsdToolbar.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toolbar_speakOnOff" title="声音开关"  >';
EsdToolbar.toolbarHtmlStr+='					<img  src="'+EsdToolbar.toolbarFileURL+'img/sound_normal.png" title="声音开关" alt="声音开关" />';
EsdToolbar.toolbarHtmlStr+='				</a> ';
EsdToolbar.toolbarHtmlStr+='				<span class="read-span" title="语音">语音</span>';
EsdToolbar.toolbarHtmlStr+='			</div>';
EsdToolbar.toolbarHtmlStr+='			';
EsdToolbar.toolbarHtmlStr+='			<div class="readDiv">';
EsdToolbar.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toolbar_help_move" title="开启帮助Shift+问号键">';
EsdToolbar.toolbarHtmlStr+='					<img  src="'+EsdToolbar.toolbarFileURL+'img/help1.png" alt="开启帮助Shift+问号键" title="开启帮助Shift+问号键" />';
EsdToolbar.toolbarHtmlStr+='				</a> ';
EsdToolbar.toolbarHtmlStr+='				<span class="read-span" title="开启帮助Shift+问号键">帮助</span>';
EsdToolbar.toolbarHtmlStr+='			</div>';
EsdToolbar.toolbarHtmlStr+='			<div class="readDiv">';
EsdToolbar.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toolbar_magnifier_2" title="显示屏"  >';
EsdToolbar.toolbarHtmlStr+='				<img  src="'+EsdToolbar.toolbarFileURL+'img/screen1.png"	alt="显示屏" title="显示屏" />';
EsdToolbar.toolbarHtmlStr+='				</a> ';
EsdToolbar.toolbarHtmlStr+='				<span class="read-span" title="显示屏">显示屏</span>	';
EsdToolbar.toolbarHtmlStr+='			</div>';
EsdToolbar.toolbarHtmlStr+='			<div class="readDiv">';
EsdToolbar.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toFirstPage" title="老人服务：快捷键Shift+N"  >';
EsdToolbar.toolbarHtmlStr+='					<img  src="'+EsdToolbar.toolbarFileURL+'img/left_img2.png" alt="老人服务：快捷键Shift+N" title="老人服务：快捷键Shift+N" />';
EsdToolbar.toolbarHtmlStr+='				</a> ';
EsdToolbar.toolbarHtmlStr+='				<span class="read-span" title="老人服务：快捷键Shift+N">老人服务</span>';
EsdToolbar.toolbarHtmlStr+='			</div>';
EsdToolbar.toolbarHtmlStr+='			<div class="readDiv">';
EsdToolbar.toolbarHtmlStr+='				<a href="javascript:void(0);" id="toolbar_exit2" title="关闭辅助工具Shift+Q"  >';
EsdToolbar.toolbarHtmlStr+='					<img  src="'+EsdToolbar.toolbarFileURL+'img/exit1.png" alt="关闭辅助工具Shift+Q" title="关闭辅助工具Shift+Q" />';
EsdToolbar.toolbarHtmlStr+='				</a> ';
EsdToolbar.toolbarHtmlStr+='				<span class="read-span" title="关闭辅助工具Shift+Q">退出</span>';
EsdToolbar.toolbarHtmlStr+='			</div>';
EsdToolbar.toolbarHtmlStr+='		</div>';
EsdToolbar.toolbarHtmlStr+='		</div>';
EsdToolbar.toolbarHtmlStr+='	</div>';
EsdToolbar.toolbarHtmlStr+='	<!-- <div class="overlay"></div>';
EsdToolbar.toolbarHtmlStr+='	<div id="AjaxLoading" class="showbox">';
EsdToolbar.toolbarHtmlStr+='		<div class="loadingWord">';
EsdToolbar.toolbarHtmlStr+='			<img title="正在加载请稍后" alt="正在加载请稍后" src="'+EsdToolbar.toolbarFileURL+'img/waiting.gif">加载中，请稍候...';
EsdToolbar.toolbarHtmlStr+='		</div>';
EsdToolbar.toolbarHtmlStr+='	</div> -->';
EsdToolbar.toolbarHtmlStr+='	<div id="toolbar_prompt" style="display: none;">';
EsdToolbar.toolbarHtmlStr+='		<span>请按F11切换全屏模式</span>';
EsdToolbar.toolbarHtmlStr+='	</div>';
EsdToolbar.toolbarHtmlStr+='	<div id="zwlj_prompt" style="display: none;">';
EsdToolbar.toolbarHtmlStr+='		<span>该链接属站外链接，会导致无障碍工具条失效！</span>';
EsdToolbar.toolbarHtmlStr+='		<br/>';
EsdToolbar.toolbarHtmlStr+='		<span>是否继续访问？</span><br/>';
EsdToolbar.toolbarHtmlStr+='		<input id="zwlj_bt1" type="button" title="是" value="是" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
EsdToolbar.toolbarHtmlStr+='		<input id="zwlj_bt2" type="button" title="否" value="否" />';
EsdToolbar.toolbarHtmlStr+='		<input id="zwlj_href" type="hidden" value=""/>';
EsdToolbar.toolbarHtmlStr+='	</div>';
EsdToolbar.toolbarHtmlStr+='	<div id="zwbdtj_prompt" style="display: none;">';
EsdToolbar.toolbarHtmlStr+='		<span id="zwbdtj_span1">请注意，该操作链接到其他网站</span><br/>';
EsdToolbar.toolbarHtmlStr+='		<span id="zwbdtj_span12">该网站无法启动无障碍工具条！</span>';
EsdToolbar.toolbarHtmlStr+='	</div>';
EsdToolbar.toolbarHtmlStr+='	<div id="no_authorization_prompt" style="display: none;">';
EsdToolbar.toolbarHtmlStr+='		<span>当前访问页面超出辅助工具操作范围</span>';
EsdToolbar.toolbarHtmlStr+='		<br/>';
EsdToolbar.toolbarHtmlStr+='		<span>无障碍辅助工具无法正常工作！</span>';
EsdToolbar.toolbarHtmlStr+='		<br/>';
EsdToolbar.toolbarHtmlStr+='		<br/>';
EsdToolbar.toolbarHtmlStr+='		<input id="na_bt1" type="button" title="点击返回" value="点击返回" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
EsdToolbar.toolbarHtmlStr+='	</div>';
//EsdToolbar.toolbarHtmlStr+='';
//EsdToolbar.toolbarHtmlStr+='	<pre id="log"></pre>';
//EsdToolbar.toolbarHtmlStr+='';
EsdToolbar.toolbarHtmlStr+='</div>';


//初始化
EsdToolbar.init = function(){
	//判断浏览器
	EsdToolbar.defalt.browser.mozilla = /firefox/.test(navigator.userAgent.toLowerCase());
	EsdToolbar.defalt.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
	EsdToolbar.defalt.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
	EsdToolbar.defalt.browser.msie = /msie/.test(navigator.userAgent.toLowerCase())==true? true:/trident/.test(navigator.userAgent.toLowerCase());

	EsdToolbar.targetHead = jq_t("head");
	EsdToolbar.targetBody = jq_t("body");
	EsdToolbar.targetHtml = jq_t("html");
	jq_t('body').wrapInner('<div id="toolbar_Div"></div>');
	jq_t("body").append(EsdToolbar.toolbarHtmlStr);
	//jq_t.get(EsdToolbar.toolbarFileURL+"toolbar.html", function(data){
		//jq_t("body").append(data);
		var toolbarOpenStatus = EsdToolbar.storage.getCookie("wzaIsOn");
		if(toolbarOpenStatus!=null&&toolbarOpenStatus=="true"){
			EsdToolbar.open();
			EsdToolbar.pageZoom.init();
		}else if(window.location.search.substr(1).indexOf("ewt=1")>-1){
			EsdToolbar.open();
			EsdToolbar.pageZoom.init();
		}
		EsdToolbar.bindAction();
		EsdToolbar.guides.init();
		EsdToolbar.textMode.init();
		EsdToolbar.highContrast.init();
		
		EsdToolbar.changeFont.init();
		EsdToolbar.magnifier.init();
		EsdToolbar.speak.init();
		EsdToolbar.keybinding.bind();
		EsdToolbar.cursor.init();
		
	//});

	setTimeout(function(){
		
		soundManager.setup({
			useFlashBlock: false,
			url: EsdToolbar.toolbarConfig.speak.swf,
			debugMode: false,
			consoleOnly: false,
			useHTML5Audio:true,
			preferFlash: false
		});
		soundManager.useFastPolling = false;
		soundManager.onready(function() {
			var soundUrl = "";
//		EsdToolbar.speak.sound.voicePrompt.shiftz();
			if(EsdToolbar.isOpen){
				EsdToolbar.titleReader();
			}
		});
		soundManager.beginDelayedInit();
		jq_t("select").each(function(){
		    jq_t(this).change(function(){jq_t(this).trigger("mouseover")});
		    var optionLength = jq_t(this).find("option").length;
			if(optionLength>0){
				jq_t(this).attr("aria-label","共"+optionLength+"项,按上下键进行选择,按回车键确认");
			}
		});
		EsdToolbar.initEx ();
	},1000);
};

EsdToolbar.initEx  = function(){
	setTimeout(function(){
		jq_t("input[type='checkbox']").each(function(){
			var _this = jq_t(this);
			if(jq_t.trim(_this.attr("aria-label")).length>0){
				var tempStr = _this.attr("aria-label");
				_this.attr("aria-label",tempStr+",按空格键进行操作")
			}else{
				_this.attr("aria-label","按空格键进行操作")
			}
		});
	},3000)
	
	document.body.onblur = function(){
		setTimeout(function(){
			if(document.activeElement!=null&&document.activeElement.tagName=="IFRAME"){
				return false;
			}else{
				soundManager.stop("tool");
			}
		},1000)
	};
	jq_t(document).keyup(function(e){
		if(e.shiftKey && e.keyCode == 9){
			if(EsdToolbar.toolbarConfig.lastShiftKeyCode9 == e.target){
				var esdTabindexAllArr = jq_t("[tabindex=0]:not(option,a *),[tabindex=-1]:not(option,a *)");
				var index = 0;
				for(var i=0;i<esdTabindexAllArr.length;i++){
					if(esdTabindexAllArr[i]==e.target){
						index = i;
					}
				}
				jq_t(esdTabindexAllArr[index-1]).focus();
			}
			EsdToolbar.toolbarConfig.lastShiftKeyCode9 = e.target
		}else if (e.keyCode == 9){
			if(EsdToolbar.toolbarConfig.lastKeyCode9 == e.target){
				var esdTabindexAllArr = jq_t("[tabindex=0]:not(option,a *),[tabindex=-1]:not(option,a *)");
				var index = 0;
				for(var i=0;i<esdTabindexAllArr.length;i++){
					if(esdTabindexAllArr[i]==e.target){
						index = i;
					}
				}
				jq_t(esdTabindexAllArr[index+1]).focus();
			}
			EsdToolbar.toolbarConfig.lastKeyCode9 = e.target
		}
	});

    jq_t("#query_ticket").click(function(){
    	setTimeout(function(){
    		if(jq_t("#fromStationText").hasClass("error")){
                jq_t("#fromStationText").attr("aria-label","请输入或选择正确的出发站，按回车确认输入").focus();
                return;
    		}
    		if(jq_t("#toStationText").hasClass("error")){
                jq_t("#toStationText").attr("aria-label","请输入或选择正确的目的地站，按回车确认输入").focus();
            }
    	},300);
    });
    if(typeof(esdDTGZ)=="object"&&typeof(esdDTGZ.init)=="string"){
    	jq_t.getScript(EsdToolbar.toolbarFileURL+"cmgz.js");
    }
    jq_t(".nav [aria-expanded]").attr("aria-expanded","true");
    jq_t(".menu-nav-hd:eq(2)").focus(function(){
	     $(".header-menu .menu-nav:eq(0) .menu-nav-bd").show();
	 }).attr("aria-expanded","true");;
	jq_t(".menu-nav-hd:eq(3)").focus(function(){
	     $(".header-menu .menu-nav:eq(1) .menu-nav-bd").show();
	 }).attr("aria-expanded","true");;
	 
};

EsdToolbar.overrideStationFor12306 = function(){
	if(typeof($)=="undefined"){
		return;
	}
	if($.stationFor12306!=undefined){
		$.stationFor12306.SetISPos = function (obj) {
		     try{
		         setPosition;
		     }catch(e){
		         setPosition = null;
		     }
			if(setPosition){
				setPosition($("#form_cities"),$("#form_cities2"));
			}else{
				if(location.href=="https://kyfw.12306.cn/otn/zwdch/init"){
					$("#form_cities").css("left", "0px");
					$("#form_cities").css("top", obj.position().top + obj.height() +12);
					$("#form_cities2").css("left", "0px");
					$("#form_cities2").css("top", obj.position().top + obj.height() +12);
				}else if(location.href=="https://exservice.12306.cn/excater/list.html"){
					$("#form_cities").css("left", "0px");
					$("#form_cities").css("top", obj.height() +12);
					$("#form_cities2").css("left", "0px");
					$("#form_cities2").css("top", obj.height() +12);							 
				}else{
					$("#form_cities").css("left", obj.position().left);
					$("#form_cities").css("top", obj.position().top + obj.height() +12);
					$("#form_cities2").css("left", obj.position().left);
					$("#form_cities2").css("top", obj.position().top + obj.height() +12);
				}
			}
			var top;
			if(EsdToolbar.pageZoom.isChanged){
				top = obj.offset().top/(EsdToolbar.pageZoom.zoom * 1)-(98/(EsdToolbar.pageZoom.zoom * 1));
			}else{
				top = obj.offset().top/(EsdToolbar.pageZoom.zoom * 1);
			}
			var searchDiv=$("#search_div");
			var choiceDiv=$("#choice_div");
			searchDiv.css("top",top);
			choiceDiv.css("top",top);
			var left = obj.offset().left/(EsdToolbar.pageZoom.zoom * 1);
			searchDiv.css("left",left);
			choiceDiv.css("left",left);
		}
	}
};
EsdToolbar.changeOriginalSiteIndex = 0;
EsdToolbar.changeOriginalSiteFunc = function(){
	try{
		$.fn;
		EsdToolbar.overrideStationFor12306();
		if(typeof(window.changeOriginalSiteFuncTimeout)!="undefined"){
			clearTimeout(window.changeOriginalSiteFuncTimeout);
		}
	}catch(e){
		window.changeOriginalSiteFuncTimeout = setTimeout(function(){
			EsdToolbar.overrideStationFor12306();
		},1000);
		//console.log(123);
	}
	
	
	jq_t("#train_date").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#fromDate").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#train_date").blur(function(){
		clearInterval(esdTempInterval);
	});
	
	jq_t("#back_train_date").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#back_train_date").blur(function(){
		clearInterval(esdTempInterval);
	});
	
	jq_t("#noTripFromDate").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#noTripFromDate").blur(function(){
		clearInterval(esdTempInterval);
	});
	jq_t("#noTripToDate").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#noTripToDate").blur(function(){
		clearInterval(esdTempInterval);
	});
	jq_t("#historyFromDate").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#historyFromDate").blur(function(){
		clearInterval(esdTempInterval);
	});
	jq_t("#historyToDate").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#historyToDate").blur(function(){
		clearInterval(esdTempInterval);
	});
	jq_t("#com_history_fromDate").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#com_history_fromDate").blur(function(){
		clearInterval(esdTempInterval);
	});
	jq_t("#com_history_toDate").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#com_history_toDate").blur(function(){
		clearInterval(esdTempInterval);
	});
	
	jq_t("#ipt_insuranceStartDate,#ipt_insuranceEndDate").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#ipt_insuranceStartDate,#ipt_insuranceEndDate").blur(function(){
		clearInterval(esdTempInterval);
	});
	
	
	
	jq_t(document).on("click",".btn72", function(){ 
		EsdToolbar.changePopDiv(".modal-login",".modal-login",null);
	}); 
	
	jq_t("#J-login").click(function(){
		var userName = $('#J-userName').val()
		var password = $('#J-password').val()
		var mobile = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
		var tel = /^[A-Za-z]{1}([A-Za-z0-9]|[_]) {0,29}$/;
		var tel_other = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
		if (!userName) {
		    return false;
		}
		if (!password) {
		    return false;
		}
		if (password && password.length < 6) {
		    return false;
		}
		if(window.type==1){
			EsdToolbar.changePopCenter("#login_slide_box","#login_slide_box",null,document.documentElement.scrollTop,null);
		}else if(window.type==0){
			EsdToolbar.changePopCenter("#login_short_message","#login_short_message",null,document.documentElement.scrollTop,null);
		}
	});
	jq_t("#submitOrder_id").click(function(){
		EsdToolbar.changePopCenter(".dhtmlx_window_active:last",".dhtmlx_window_active:last",null,document.documentElement.scrollTop,40);
	});
	
	jq_t(document).on("click","#cancelBtn,td.order-operation > div > a.btn.resignTrain:eq(0),td.order-operation > div > a.btn.resignTrain:eq(1)", function(){ 
		EsdToolbar.changePopCenter(".dzp-confirm .modal",".dzp-confirm .modal",null,document.documentElement.scrollTop,null);
	}); 
	if(location.href.indexOf("/otnyt/view/index.html")>-1){
		EsdToolbar.changePopCenter(".dzp-confirm .modal",".dzp-confirm .modal",null,document.documentElement.scrollTop,30);
	}
	
	jq_t(document).on("click","#query_order_form_ED12040979 > tbody > tr.has-order-num> td:nth-child(5) > div > a", function(){ 
		EsdToolbar.changePopCenter(".dzp-confirm .modal",".dzp-confirm .modal",null,document.documentElement.scrollTop,null);
	}); 
	jq_t(document).on("mouseover","#query_order_form_ED12040979  a.serial-number.alertLiushuihao", function(ev){ 
		if(typeof(esdTempTimeout)!="undefined"){
			clearTimeout(esdTempTimeout);
		}
		var e = ev.target;
        var this_top = e.offsetTop;
      	while (e = e.offsetParent) {
        	this_top += e.offsetTop;
        }
		window.esdTempTimeout = setTimeout(function(){
			if(jq_t("#refund_info_div").css("display")=="block"){
				jq_t("#refund_info_div").each(function () {
					//var this_top = jq_t("#query_order_form_ED12040979  a.serial-number.alertLiushuihao").css("top");
					//this_top = this_top.split("px")[0]*1;
					jq_t(this).css("top", ((this_top / EsdToolbar.pageZoom.zoom)-(98/(EsdToolbar.pageZoom.zoom * 1))-jq_t(this).outerHeight()+(jq_t(this).outerHeight()*(EsdToolbar.pageZoom.zoom * 1))-(111/(EsdToolbar.pageZoom.zoom * 1)))+ "px");
				});
	        }
	    },50);
	}); 
	if(location.href.indexOf("view/train_order.html")>-1){
		setTimeout(function(){
			EsdToolbar.changePopCenter(".dzp-confirm .modal",".dzp-confirm .modal",null,document.documentElement.scrollTop,null);
	    },1000);
	}
	
	jq_t("#go_date,#from_date,#serial_date,#refund_start,#refund_end,#check_in,#sale_time,#dinner_date").focus(function(){
		EsdToolbar.changePopDiv(".cal-wrap",".cal-wrap",jq_t(this));
	});
	jq_t("#go_date,#from_date,#serial_date,#refund_start,#refund_end,#check_in,#sale_time,#dinner_date").blur(function(){
		clearInterval(esdTempInterval);
	});
}

	
	
EsdToolbar.changePopDiv = function(shownSelector, popSelector,jq_tObj){
	window.esdTempInterval = setInterval(function(){
		if(jq_t(shownSelector).css("display")=="block"){
            clearInterval(esdTempInterval);
			jq_t(popSelector).each(function () {
				var this_top = jq_t(this).css("top");
				var this_left = jq_t(this).css("left");
				if(this_top!="auto"&&this_top.indexOf("%")==-1){
					this_top = this_top.split("px")[0]*1;
					if(EsdToolbar.pageZoom.isChanged){
						if(jq_tObj!=null){
							jq_t(this).css("top", ((this_top / EsdToolbar.pageZoom.zoom)-(98/(EsdToolbar.pageZoom.zoom * 1))-jq_tObj.outerHeight()+(jq_tObj.outerHeight()*(EsdToolbar.pageZoom.zoom * 1)))+ "px");
						}else{
							jq_t(this).css("top", ((this_top / EsdToolbar.pageZoom.zoom)-(98/(EsdToolbar.pageZoom.zoom * 1)))+ "px");
						}
					}else{
						jq_t(this).css("top", (this_top / EsdToolbar.pageZoom.zoom)+ "px");
					}
				}
				if(this_left!="auto"&&this_left.indexOf("%")==-1){
					this_left = this_left.split("px")[0]*1;
					jq_t(this).css("left", (this_left / EsdToolbar.pageZoom.zoom) + "px");
				}
			});
        }
		//console.log(111);
    },10);
};

EsdToolbar.changePopCenter = function(shownSelector, popSelector,jq_tObj,scrollTobValue,topValue){
	EsdToolbar.changeOriginalSiteIndex == 0;
	window.esdTempInterval = setInterval(function(){
		if(jq_t(shownSelector).css("display")=="block"){
            clearInterval(esdTempInterval);
			jq_t(popSelector).each(function () {
				//jq_t(this).css("top", (30 / EsdToolbar.pageZoom.zoom)+ "%");
				EsdToolbar.changePopCenterInnerFunc(this,scrollTobValue,topValue);
			});
        }
		jq_t(popSelector).each(function () {
			//jq_t(this).css("top", (30 / EsdToolbar.pageZoom.zoom)+ "%");
			EsdToolbar.changePopCenterInnerFunc(this,scrollTobValue,topValue);
		});
		//console.log(222);
		EsdToolbar.changeOriginalSiteIndex++;
		if(EsdToolbar.changeOriginalSiteIndex>=1000){
			clearInterval(esdTempInterval);
			EsdToolbar.changeOriginalSiteIndex = 0;
		}
    },10);
};

EsdToolbar.changePopCenterInnerFunc = function(obj,scrollTobValue,topValue){
	if(EsdToolbar.pageZoom.zoom==0){
		EsdToolbar.pageZoom.zoom=1;
	}
	var cssFlag = false;
	if(jq_t(obj)[0].style.transform == "translate(-50%, -50%)"){
		cssFlag = true;	
	}
	if(EsdToolbar.pageZoom.isChanged){
		if(topValue==null){
			jq_t(obj).css("top", scrollTobValue/EsdToolbar.pageZoom.zoom+100/EsdToolbar.pageZoom.zoom);
			if(cssFlag){
				jq_t(obj).css("transform","translate(-50%, -0)");
			}
		}else{
			jq_t(obj).css("top", (topValue / EsdToolbar.pageZoom.zoom) + "%");
			if(cssFlag){
				jq_t(obj).css("transform","translate(-50%, -0)");
			}
		}
	}
};



//页面引用
jq_t(function(){
	EsdToolbar.init();
});
