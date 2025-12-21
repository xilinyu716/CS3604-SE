var esd_jq; 
var jQuery; 
var esdDTGZ={ 
 init:function(){
 	document.esdQuerySelector = document.querySelectorAll;
 	if(navigator.userAgent.toLowerCase().indexOf('ie 8')>-1){
 		var esd_qu = document.createElement('script');
 		esd_qu.setAttribute('type', 'text/javascript');
 		esd_qu.setAttribute('src', 'https://libs.baidu.com/jquery/1.9.1/jquery.min.js');
 		esd_qu.setAttribute('charset', 'utf-8');
 		document.body.appendChild(esd_qu);
 		esd_jq = jQuery.noConflict(true);
 		document.esdQuerySelector = function(selector){
 			var arr = new Array;
 			esd_jq(selector).each(function(){
 				arr.push(this);
 			});
 			return arr;
 		};
 	}
 },
 addText:function(s,t){ 
		var arr = document.esdQuerySelector(s); 
		for(var i=0; i<arr.length; i++){ 
			var ele = arr[i]; 
			ele.title=t; 
			ele.ariaLabel=t; 
			if(ele.tagName==='IMG'){ 
				ele.alt=t 
			}else if(ele.tagName==='INPUT'){ 
				if(ele.type==='text'){ 
					ele.placeholder=t; 
				} 
			}else{ 
				if(ele.tagName==='A'){ 
					var eImg = ele.querySelector('img'); 
					eImg.alt=t 
				} 
			} 
		} 
 }, 
 common: { 
	P132102001:function(){ 
		$("div.fixed-right.esdHBG > ul > li:nth-child(3) > a").focus(function(){
		    $("div.fixed-right> ul > li:nth-child(3) > div.menu-bd.menu-code").css({"visibility":"visible","opacity":"1"});
			$("*:not(.menu-bd.menu-code *,div.fixed-right.esdHBG > ul > li:nth-child(3) > a)").on("focus.esdtemp",function(){
				$("div.fixed-right> ul > li:nth-child(3) > div.menu-bd.menu-code").css({"visibility":"","opacity":""});
				$("*:not(.menu-bd.menu-code *,div.fixed-right.esdHBG > ul > li:nth-child(3) > a)").off("focus.esdtemp");
			})
		});
		
		/* 二维码放大二倍-开始 */
		var ewmSetDoubleFunc = function (nodeElement) {
		    nodeElement.keydown(function (e) {
		        if (e.keyCode == 13) {
		            var ewmCodeImg = $(this);
		            ewmCodeImgHeight = ewmCodeImg.height();
		            ewmCodeImgWidth = ewmCodeImg.width();
		            if ($("#esdTempDiv").length == 0) {
		                $("body").append("<div id='esdTempDiv'></div>");
		                $("#esdTempDiv").html(ewmCodeImg.clone().attr("id", "esdTempPic"));
		                $("#esdTempDiv").attr("style", "zoom:2;position: fixed;z-index:9999; top:50%;left:50%;margin-top:-" + ewmCodeImgHeight + "px;margin-left:-" + ewmCodeImgWidth + "px;")
		            }
		            return false;
		        }
		        else if (e.keyCode == 27) {
		            if ($("#esdTempDiv").length > 0) {
		                $("#esdTempDiv").remove();
		            }
		            return false;
		        }
		    });
		    nodeElement.blur(function (e) {
		        $("#esdTempDiv").remove();
		    });
		    nodeElement = ""
		}
		$(function () {
		    ewmSetDoubleFunc($("img[src='./images/zgtlwb.png']"));
		    ewmSetDoubleFunc($("img[src='./images/zgtlwx.png']"));
		    ewmSetDoubleFunc($("img[src='./images/public.png']"));
		    ewmSetDoubleFunc($("img[src='./images/download.png']"));
			ewmSetDoubleFunc($("img[src='images/download.png']"));
		})
		/* 二维码放大二倍-结束 */
		$("img[src='./images/zgtlwb.png']").attr("alt", "中国铁路官方微信二维码，按回车键放大二维码，按ESC键关闭放大");
		$("img[src='./images/zgtlwx.png']").attr("alt", "中国铁路官方微博二维码，按回车键放大二维码，按ESC键关闭放大");
		$("img[src='./images/public.png']").attr("alt", "12306 公众号二维码，按回车键放大二维码，按ESC键关闭放大");
		$("img[src='./images/download.png']").attr("alt", "铁路12306二维码，按回车键放大二维码，按ESC键关闭放大");
		$("img[src='images/download.png']").attr("alt", "铁路12306二维码，按回车键放大二维码，按ESC键关闭放大");
function esd_ZxdpublicwzaGz() {
	/* 添加跳过导航 */
	esd_blurNavElement = function (thisNode) {
		document.getElementById("esd_createToNavNode").innerHTML = " ";
		document.getElementById("esd_createCrossNavNode").innerHTML = " ";
	}
	esd_JumpToNavElementId = function (NodeClass, NodeIndex) {
		var esd_jumpNode = document.createElement("a");
		esd_jumpNode.setAttribute("href", "javascript:void(0);");
		esd_jumpNode.setAttribute("id", "esd_JumpToNavId");
		esd_jumpNode.setAttribute("style", "width:1px; height:1px; line-height:0px; font-size:0px; position:absolute;");
		esd_jumpNode.setAttribute("title", esd_jumpToText);
		esd_jumpNode.setAttribute("aria-label", esd_jumpToText);
		esd_jumpNode.innerHTML = esd_jumpToText;
		esd_blurNavElement(this);
		esd_jumpNode.setAttribute("onblur", "esd_blurNavElement(this)");
		if (NodeIndex == undefined) { //用id取
			document.getElementById("esd_createToNavNode").appendChild(esd_jumpNode)
		}
		window.location.href = "#esd_JumpToNavId";
		return false;
	}
	function esd_showjumpFrame() {
		$("#jumpareNodeId").attr("style", "position:absolute;left:0px; top:0px; z-index:1; background:#fff; padding:10px;");
		$("#jumpareNodeId").attr("role", "complementary");
	}
	function esd_hidejumpFrame() {
		$("#jumpareNodeId").attr("style", "position:absolute;left:-9999px; top:-9999px; z-index:1;");
		$("#jumpareNodeId").attr("role", "complementary");
	}
	esd_JumpCrossNavElementId = function () {
		var esd_jumpNode = document.createElement("a");
		esd_jumpNode.setAttribute("href", "javascript:void(0);");
		esd_jumpNode.setAttribute("id", "esd_JumpCrossNavId");
		esd_jumpNode.setAttribute("style", "width:1px; height:1px; line-height:0px; font-size:0px; position:absolute;");
		esd_jumpNode.setAttribute("title", esd_jumpCrossText);
		esd_jumpNode.setAttribute("aria-label", esd_jumpCrossText);
		esd_jumpNode.innerHTML = esd_jumpCrossText;
		esd_blurNavElement(this);
		esd_jumpNode.setAttribute("onblur", "esd_blurNavElement(this)");
		document.getElementById("esd_createCrossNavNode").appendChild(esd_jumpNode);
		window.location.href = "#esd_JumpCrossNavId";
		return false;
	}
	setJumpNodeElement = function (NodeClass, NodeIndex) {
		var esd_jumpFrame = document.createElement("div");
		esd_jumpFrame.setAttribute("id", "jumpareNodeId");
		esd_jumpFrame.setAttribute("style", "position:absolute;left:-9999px; top:-9999px; z-index:2001;");
		document.getElementsByTagName("body")[0].insertBefore(esd_jumpFrame, document.getElementsByTagName("body")[0].childNodes[0]);
		esd_jumpToText = "已跳转到导航区域";
		esd_jumpCrossText = "已跳过导航区域</a>";
		document.getElementById("jumpareNodeId").innerHTML = "<a href='javascript:' onfocus='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:5px; top:5px; z-index:2001; background:#fff; padding:5px 15px;\")' onblur='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:-9999px; top:-9999px; z-index:2001; background:#fff; padding:5px 15px;\")' onclick='esd_JumpToNavElementId()' style='display:block; font-size:14px; line-height:2em;letter-spacing:2px;' aria-label='跳转到导航区域'>跳转到导航区域</a><a href='javascript:' style='display:block; font-size:14px; line-height:2em;letter-spacing:2px;' onfocus='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:5px; top:5px; z-index:2001; background:#fff; padding:5px 15px;\")' onblur='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:-9999px; top:-9999px; z-index:0;\")' onclick='esd_JumpCrossNavElementId()' aria-label='跳过导航区域'>跳过导航区域</a>";
		var createToNavNode = document.createElement("div");
		createToNavNode.setAttribute("id", "esd_createToNavNode");
		var createCrossNavNode = document.createElement("div");
		createCrossNavNode.setAttribute("id", "esd_createCrossNavNode");
		//新加
		if (document.getElementById(NodeClass) != undefined || document.getElementsByClassName(NodeClass)[0] != undefined) {
			if (NodeIndex == undefined) { //用id取
				document.getElementById(NodeClass).insertBefore(createToNavNode, document.getElementById(NodeClass).childNodes[0]);
				document.getElementById(NodeClass).appendChild(createCrossNavNode)
			} else if (NodeIndex != "undefined") { //用class取
				document.getElementsByClassName(NodeClass)[NodeIndex].insertBefore(createToNavNode, document.getElementsByClassName(NodeClass)[NodeIndex].childNodes[0]);
				document.getElementsByClassName(NodeClass)[NodeIndex].appendChild(createCrossNavNode)
			}
			document.getElementsByTagName("body")[0].onkeydown = function (event) {
				var e = event || window.event || arguments.callee.caller.arguments[0];
				if (e && e.keyCode == 49 && e.altKey) {
					esd_JumpToNavElementId();
				} else if (e && e.keyCode == 50 && e.altKey) {
					esd_JumpCrossNavElementId()
				}
			}
		}
	}
	$("#jumpareNodeId a").focus(function () {
		$("#jumpareNodeId").attr("style", "position:absolute;z-index:999999; background:#fff; padding:10px 15px;");
		////console.log("11")
	})
	$("#jumpareNodeId a").blur(function () {
		$("#jumpareNodeId").attr("style", "position:absolute;z-index:0; left:-99999px; top:-99999px;");
		////console.log("22")
	})
	if (document.getElementsByClassName("nav-box").length > 0) {
		setJumpNodeElement("nav-box", "0");
	}

	//设置img的alt和title
	function esd_setimgTitle(NodeElement, NodeText) {
		NodeElement.attr("title", NodeText);
		NodeElement.attr("alt", NodeText);
		if (NodeElement.parent("a").length > 0) {
			NodeElement.parent("a").attr("title", NodeText);
			NodeElement.parent("a").attr("aria-label", NodeText);
		}
	}
	function esd_pubInsertA(NodeElement, NodeText) {
		thisAElement = "<a href='javascript:' title='" + NodeText + "' aria-label='" + NodeText + "' style='width:10px;height:10px;position:absolute;display:block;'></a>";
		NodeElement.prepend(thisAElement);
	}
	//if (document.getElementsByClassName("footer").length > 0) {
	//	var footerlistImgTitle = new Array("中国国家铁路集团有限公司", "中国铁路财产保险自保有限公司", "中国铁路95306网", "中铁快运股份有限公司", "中国铁路官方微信", "中国铁路官方微博", "12306 公众号", "铁路12306");
	//	if ($(".footer .foot-links .foot-links-list").length > 0) {
	//		$(".footer img").each(function () {
	//			esd_setimgTitle($(this), footerlistImgTitle[$(this).index()])
	//		})
	//	}
	//}

	function esdJumpNodeTagLwLb(NodeElement, LastFunc, NextFunc) {
		NodeElement.keydown(function (e) {
			if (e.shiftKey && e.keyCode == 9) {
				LastFunc();
				return false;
			}
			if (e.keyCode == 9) {
				NextFunc();
				return false;
			}
		});
	}
	$(".header:eq(0)").attr("role", "head");
	$(".wrapper:eq(1)").attr("role", "main");
	$(".footer").attr("role", "footer");
	//$("#search-input").attr("title", "请输入要搜索的车票/餐饮/常旅客/相关规章");
	$("#search-input").attr("aria-label", "请输入要搜索的车票/餐饮/常旅客/相关规章");
	//$(".search-btn").attr("title", "点击搜索");
	$(".search-btn").attr("aria-label", "点击搜索，搜索结果页面可能超出无障碍服务范围");
	//语言-我的12306
	var esd_language_Array = [{
			"esd_title": $(".header-menu .menu-nav:eq(0) a:eq(0)"),
			"esd_firstfocus": $(".header-menu .menu-nav:eq(0) .menu-nav-bd a:eq(0)"),
			"esd_secondfocus": $(".header-menu .menu-nav:eq(0) .menu-nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".header-menu .menu-nav:eq(0) .menu-nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".header-menu .menu-nav:eq(0) .menu-nav-bd a:last")
		}, {
			"esd_title": $(".header-menu .menu-nav:eq(1) a:eq(0)"),
			"esd_firstfocus": $(".header-menu .menu-nav:eq(1) .menu-nav-bd a:eq(0)"),
			"esd_secondfocus": $(".header-menu .menu-nav:eq(1) .menu-nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".header-menu .menu-nav:eq(1) .menu-nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".header-menu .menu-nav:eq(1) .menu-nav-bd a:last")
		}, {
			"esd_title": $("#J-header-login a:eq(0)")
		}, {
			"esd_title": $("#J-header-login a:eq(1)")
		}
	]
	//语言
	//语言移除display
	function esd_removeheadmenuDisplay() {
		$(".header-menu li ul.menu-nav-bd").each(function () {
			$(this).removeAttr("style");
		})
	}
	$(".header-menu>li").mouseout(function () {
		$(".header-menu li .menu-nav-bd").removeAttr("style");
	})

	/* 主导航 */
	var esd_mainnav_Array = [{
			"esd_title": $(".nav-box .nav>li.nav-item:eq(0) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(0)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(1) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(1)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(2) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(2)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(3) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(3)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(4) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(4)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(5) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(5)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(6) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(6)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(7) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(7)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:last")
		},
	]
	//导航移除display
	function esd_removeDisplay() {
		$(".nav-box .nav li div.nav-bd").each(function () {
			$(this).removeAttr("style")
		})
	}
	$(".nav-box .nav>li").mouseout(function () {
		$(".nav-box .nav li div.nav-bd").removeAttr("style")
	})

	//语言
	/*esdJumpNodeTagLwLb($(".search-btn"), function () {
	$("#search-input").focus();
	}, function () {
	$(".header-menu .menu-nav:eq(0) .menu-nav-bd").show();
	esd_language_Array[0].esd_title.focus();
	});*/

	esdJumpNodeTagLwLb(esd_language_Array[0].esd_title, function () {
		esd_removeheadmenuDisplay();
		$(".search-btn").focus();
	}, function () {
		$(".header-menu .menu-nav:eq(0) .menu-nav-bd").show();
		esd_language_Array[0].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_language_Array[0].esd_firstfocus, function () {
		$(".header-menu .menu-nav:eq(0) .menu-nav-bd").hide();
		esd_language_Array[0].esd_title.focus();
	}, function () {
		esd_language_Array[0].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_language_Array[0].esd_lastfocus, function () {
		esd_language_Array[0].esd_secondlastfocus.focus();
	}, function () {
		esd_removeheadmenuDisplay();
		$(".header-menu .menu-nav:eq(2) .menu-nav-bd").show();
		esd_language_Array[1].esd_title.focus();
	});

	esdJumpNodeTagLwLb(esd_language_Array[1].esd_title, function () {
		esd_removeheadmenuDisplay();
		$(".header-menu .menu-nav:eq(0) .menu-nav-bd").show();
		esd_language_Array[0].esd_lastfocus.focus();
	}, function () {
		$(".header-menu .menu-nav:eq(1) .menu-nav-bd").show();
		esd_language_Array[1].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_language_Array[1].esd_firstfocus, function () {
		esd_language_Array[1].esd_title.focus();
	}, function () {
		esd_language_Array[1].esd_secondfocus.focus();
	})
	esdJumpNodeTagLwLb(esd_language_Array[1].esd_lastfocus, function () {
		esd_language_Array[1].esd_secondlastfocus.focus();
	}, function () {
		esd_language_Array[2].esd_title.focus();
		esd_removeheadmenuDisplay();
	});

	esdJumpNodeTagLwLb(esd_language_Array[2].esd_title, function () {
		$(".header-menu .menu-nav:eq(1) .menu-nav-bd").show();
		esd_language_Array[1].esd_lastfocus.focus();
	}, function () {
		esd_language_Array[3].esd_title.focus();
	});

	//主导航
	esdJumpNodeTagLwLb(esd_mainnav_Array[0].esd_title, function () {
		$(".header-con a:last").focus();
	}, function () {
		esd_mainnav_Array[1].esd_title.focus();
		esd_mainnav_Array[1].esd_frame.show();
	})

	esdJumpNodeTagLwLb(esd_mainnav_Array[1].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[0].esd_title.focus();
		esd_mainnav_Array[1].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[1].esd_firstfocus.focus();
		esd_mainnav_Array[1].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[1].esd_firstfocus, function () {
		esd_mainnav_Array[1].esd_title.focus();
	}, function () {
		esd_mainnav_Array[1].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[1].esd_lastfocus, function () {
		esd_mainnav_Array[1].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[2].esd_frame.show();
		esd_mainnav_Array[2].esd_title.focus();
		esd_mainnav_Array[1].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[2].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[1].esd_frame.show();
		esd_mainnav_Array[1].esd_lastfocus.focus();
		esd_mainnav_Array[2].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[2].esd_firstfocus.focus();
		esd_mainnav_Array[2].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[2].esd_firstfocus, function () {
		esd_mainnav_Array[2].esd_title.focus();
	}, function () {
		esd_mainnav_Array[2].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[2].esd_lastfocus, function () {
		esd_mainnav_Array[2].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[3].esd_frame.show();
		esd_mainnav_Array[3].esd_title.focus();
		esd_mainnav_Array[2].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[3].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[2].esd_frame.show();
		esd_mainnav_Array[2].esd_lastfocus.focus();
		esd_mainnav_Array[3].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[3].esd_firstfocus.focus();
		esd_mainnav_Array[3].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[3].esd_firstfocus, function () {
		esd_mainnav_Array[3].esd_title.focus();
	}, function () {
		esd_mainnav_Array[3].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[3].esd_lastfocus, function () {
		esd_mainnav_Array[3].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[4].esd_frame.show();
		esd_mainnav_Array[4].esd_title.focus();
		esd_mainnav_Array[3].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[4].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[3].esd_frame.show();
		esd_mainnav_Array[3].esd_lastfocus.focus();
		esd_mainnav_Array[4].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[4].esd_firstfocus.focus();
		esd_mainnav_Array[4].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[4].esd_firstfocus, function () {
		esd_mainnav_Array[4].esd_title.focus();
	}, function () {
		esd_mainnav_Array[4].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[4].esd_lastfocus, function () {
		esd_mainnav_Array[4].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[5].esd_frame.show();
		esd_mainnav_Array[5].esd_title.focus();
		esd_mainnav_Array[4].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[5].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[4].esd_frame.show();
		esd_mainnav_Array[4].esd_lastfocus.focus();
		esd_mainnav_Array[5].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[5].esd_firstfocus.focus();
		esd_mainnav_Array[5].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[5].esd_firstfocus, function () {
		esd_mainnav_Array[5].esd_title.focus();
	}, function () {
		esd_mainnav_Array[5].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[5].esd_lastfocus, function () {
		esd_mainnav_Array[5].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[6].esd_frame.show();
		esd_mainnav_Array[6].esd_title.focus();
		esd_mainnav_Array[5].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[6].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[5].esd_frame.show();
		esd_mainnav_Array[5].esd_lastfocus.focus();
		esd_mainnav_Array[6].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[6].esd_firstfocus.focus();
		esd_mainnav_Array[6].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[6].esd_firstfocus, function () {
		esd_mainnav_Array[6].esd_title.focus();
	}, function () {
		esd_mainnav_Array[6].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[6].esd_lastfocus, function () {
		esd_mainnav_Array[6].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[7].esd_frame.show();
		esd_mainnav_Array[7].esd_title.focus();
		esd_mainnav_Array[6].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[6].esd_frame.show();
		esd_mainnav_Array[6].esd_lastfocus.focus();
		esd_mainnav_Array[7].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[7].esd_firstfocus.focus();
		esd_mainnav_Array[7].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_firstfocus, function () {
		esd_mainnav_Array[7].esd_title.focus();
	}, function () {
		esd_mainnav_Array[7].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_lastfocus, function () {
		esd_mainnav_Array[7].esd_secondlastfocus.focus();
	}, function () {
		esd_mainnav_Array[7].esd_frame.hide();
		esd_removeDisplay();
		$("#crumbs a:eq(0)").focus();
	});

	esdJumpNodeTagLwLb($("#crumbs a:eq(0)"), function () {
		esd_mainnav_Array[7].esd_frame.show();
		esd_mainnav_Array[7].esd_lastfocus.focus();
	}, function () {
		$("#crumbs a:eq(1)").focus();
	});
	$(".content .center-box .center-menu .menu-item").each(function () {
		if ($(this).find("h2 a").length < 1) {
			esd_pubInsertA($(this).find("h2"), $(this).find("h2").text());
		}
		if ($(this).find(".menu-sub").length > 1 && $(this).find(".menu-sub").css("display") == "none") {
			/*$(this).find("h2 a").click(function(){
			$(this).find("h2 i").click();
			})*/
		}
	})
	//侧边栏收缩
	$(".center-menu>li").each(function () {
		$(this).find("h2>a").click(function () {
			$(this).parent("h2").find(".icon-switch").click()
		})
	})

	$("body>div").attr("role", "complementary");
	$(".header:eq(0)").attr("role", "complementary");
	$(".content:eq(0)").attr("role", "main");
	$(".footer:eq(0)").attr("role", "complementary");
	$(".header:eq(0)").attr("aria-label", "头部");
	$(".footer:eq(0)").attr("aria-label", "底部");
	$(".logo").attr("role", "banner");
	esd_setimgTitle($(".foot-links-list img:eq(0)"), "中国国家铁路集团有限公司");
	esd_setimgTitle($(".foot-links-list img:eq(1)"), "中国铁路财产保险自保有限公司");
	esd_setimgTitle($(".foot-links-list img:eq(2)"), "中国铁路95306网");
	esd_setimgTitle($(".foot-links-list img:eq(3)"), "中铁快运股份有限公司");
	//esd_setimgTitle($(".foot-code img:eq(0)"), "中国铁路官方微信");
	//esd_setimgTitle($(".foot-code img:eq(1)"), "中国铁路官方微博");
	//esd_setimgTitle($(".foot-code img:eq(2)"), "12306 公众号");
	//esd_setimgTitle($(".foot-code img:eq(3)"), "铁路12306");
	esd_setimgTitle($(".mask img"), "正在加载");
	if ($("html:eq(0)").attr("lang") == undefined) {
		$("html:eq(0)").attr("lang", "zh-CN")
	}
	//聚焦获得黑边框
	var focusTags = "a,input,textarea area"
		$(focusTags).focus(function () {
			this.style.setProperty("outline", "1px dashed black", "important");
		});
	$(focusTags).blur(function () {
		$(this).css({
			"outline": ""
		});
	});
}

var esd_checkPublicOnload;
esd_checkPublicOnload = window.setInterval(
		function () {
		if ($ == undefined) {}
		else {
			$(function () {
				clearInterval(esd_checkPublicOnload);
				esd_ZxdpublicwzaGz();
			})
		}
	},
		2000);

	} }, 
 gdt: { 
	P132101101:function(){ 
function esd_wzaGz() {
    window.esdChangeStatus = function(obj){
    	if($(obj).attr("aria-checked") == null|| $(obj).attr("aria-checked")=="false"||$(obj).attr("aria-checked")==false){
            $(obj).attr("aria-checked",true);
        }else{
            $(obj).attr("aria-checked",false);
        }
    }

     window.esdChangeStatusRadio = function(obj){
        $(obj).parents("ul").find("li").removeAttr("aria-checked");
        $(obj).attr("aria-checked","true");
    }

	var focusTags = "a,input,textarea area"
		$(focusTags).focus(function () {
			this.style.setProperty("outline", "1px dashed black", "important");
		});
	$(focusTags).blur(function () {
		$(this).css({
			"outline": ""
		});
	});


	var addFocusOutLineBlack = function () {
		var focusTags = "a,input,textarea area"
			$(focusTags).focus(function () {
				this.style.setProperty("outline", "1px dashed black", "important");
			});
		$(focusTags).blur(function () {
			$(this).css({
				"outline": ""
			});
		});
	}
	addFocusOutLineBlack();
	/* 焦点前后切换 */
	function esdJumpNodeTagLwLb(NodeElement, LastFunc, NextFunc) {
		NodeElement.keydown(function (e) {
			if (e.shiftKey && e.keyCode == 9) {
				LastFunc();
				return false;
			}
			if (e.keyCode == 9) {
				NextFunc();
				return false;
			}
		});
	}
	//添加label for
	var esd_checkTlOnload;
	function esd_attrLable(nodeElement, NodeText) {
		nodeElement.attr("for", NodeText);
	}
	//添加input的title
	function esd_setinputTitle(NodeElement, NodeText) {
		NodeElement.attr("title", NodeText);
		NodeElement.attr("aria-label", NodeText);
	}
	//添加img
	function esd_setimgTitle(NodeElement, NodeText) {
		NodeElement.attr("title", NodeText);
		NodeElement.attr("alt", NodeText);
		if (NodeElement.parent("a").length > 0) {
			NodeElement.parent("a").attr("title", NodeText);
			NodeElement.parent("a").attr("aria-label", NodeText);
		}
	}
	//esd_checkTlOnload = window.setInterval(
	//		function () {
	//		if ($(".travel-train-list li a img") == undefined || $(".service-sm-list li a img") == undefined) {
	//			////console.log("未加载");
	//		} else {
	//			$(function () {
	//				clearInterval(esd_checkTlOnload);
	//				$(".travel-train-list li").each(function () {
	//					$(this).find("a").attr("title", $(this).find(".travel-name").text());
	//					$(this).find("img").attr("title", $(this).find(".travel-name").text());
	//					$(this).find("img").attr("alt", $(this).find(".travel-name").text());
	//				})
	//				$(".service-sm-list li").each(function () {
	//					$(this).find("a").attr("title", $(this).find(".service-name").text());
	//					$(this).find("img").attr("title", $(this).find(".service-name").text());
	//					$(this).find("img").attr("alt", $(this).find(".service-name").text());
	//				})
	//			})
	//		}
	//	},
	//		2000);

	esd_setimgTitle($("img[src='./images/link05.png']"), "中国国家铁路集团有限公司");

	esd_setimgTitle($("img[src='./images/link02.png']"), "中国铁路财产保险自保有限公司");

	esd_setimgTitle($("img[src='./images/link03.png']"), "中国铁路95306网");

	esd_setimgTitle($("img[src='./images/link04.png']"), "中铁快运股份有限公司");

	//esd_setimgTitle($("img[src='./images/zgtlwb.png']"), "中国铁路官方微信");

	//esd_setimgTitle($("img[src='./images/zgtlwx.png']"), "中国铁路官方微博");

	//esd_setimgTitle($("img[src='./images/public.png']"), "12306 公众号");

	//esd_setimgTitle($("img[src='./images/download.png']"), "铁路12306");

	//移除readonly
var esd_date_Array = new Array($("#train_date"), $("#go_date"), $("#from_date"), $("#serial_date"), $("#refund_start"), $("#refund_end"), $("#check_in"), $("#sale_time"), $("#dinner_date"));
//for (i = 0; i < esd_date_Array.length; i++) {
//	esd_date_Array[i].focus(function () {
//		$(this).removeAttr("readonly");
//	})
//	esd_date_Array[i].blur(function () {
//		$(this).attr("readonly", "true");
//		$(".cal-wrap").css("display", "none");
//	})
//}

	
	//图片轮换
	$("a[href='https://kyfw.12306.cn/otn/view/commutation_index.html']").attr("title", "计次订票开售 直刷乘车、出行乐无忧");
	$(".fullSlide li:eq(2) a").attr("title", "12306App随时随地掌握列车新动态");
	$(".fullSlide li:eq(3) a").attr("title", "铁路乘意险 满满诚意 护佑平安");
	$("a[href='https://exservice.12306.cn/excater/index.html']").attr("title", "餐饮·特产 带有温度的旅途配餐");
	$("a[href='https://cx.12306.cn/tlcx/index.html']").attr("title", "铁路畅行 惠想出行 尊享体验");
	$("a[href='https://travel.12306.cn/portal/travel/detail/8a82669c58047b3a0158adf7a1e504ca']").attr("title", "江西风景独好 中国铁路旅游");
	$("a[href='https://travel.12306.cn/portal/travel/detail/8a82669c58047b3a0158adf7a1e504ca']").attr("title", "中国铁路旅游");
	$("li[style='background: url(\"https://www.12306.cn/index/images/party100th/banner01.jpg\") center center no-repeat; float: left; width: 1903px;'] a").attr("title", "百年征程波澜壮阔 百年初心历久弥坚");
	$("li[style='background: url(https://www.12306.cn/index/images/pic/banner20200707.jpg) center center no-repeat; float: left; width: 1903px;'] a").attr("title", "12306APP 随时随地掌握列车新动态");
	$("li[style='background: url(https://www.12306.cn/index/images/banner01.jpg) center center no-repeat; float: left; width: 1903px;'] a").attr("title", "滚动图片");
	$("li[style='background: url(https://www.12306.cn/index/images/pic/banner0619.jpg) center center no-repeat; float: left; width: 1903px;'] a").attr("title", "中国铁路保险");
	$("li[style='background: url(\"https://www.12306.cn/index/images/banner01.jpg\") center center no-repeat; float: left; width: 1903px;'] a").attr("title", "中国铁路保险");
	//图片
	esd_setimgTitle($("img[src='https://www.12306.cn/index/images/party100th/abanner01.jpg']"), "会员服务 铁路畅行 尊享体验 12306铁路会员积分服务");

	esd_setimgTitle($("img[src='https://www.12306.cn/index/images/party100th/abanner02.jpg']"), "餐饮·特产 带有温度的旅途配餐 享受星级的体验和家乡的味道");

	esd_setimgTitle($("img[src='https://www.12306.cn/index/images/party100th/abanner03.jpg']"), "铁路保险 用心呵护 放心出行 12306铁路保障出行安全");

	esd_setimgTitle($("img[src='https://www.12306.cn/index/images/party100th/abanner04.jpg']"), "计次·定期票 预约随心乘 出行更便捷 为您提供全新的自助式出行体验");

	$(".fullSlide .bd a").each(function () {
		if ($(this).attr("href") == undefined || $(this).attr("href").trim.length < 0) {
			$(this).attr("href", "javascript:void(0)")
		}
	})
	var esd_fullSlide_Array = [{
			"esd_title": $(".fullSlide .bd a:eq(1)"),
			"esd_btn": $(".fullSlide .hd li:eq(0)")
		}, {
			"esd_title": $(".fullSlide .bd a:eq(2)"),
			"esd_btn": $(".fullSlide .hd li:eq(1)")
		}, {
			"esd_title": $(".fullSlide .bd a:eq(3)"),
			"esd_btn": $(".fullSlide .hd li:eq(2)")
		}, {
			"esd_title": $(".fullSlide .bd a:eq(4)"),
			"esd_btn": $(".fullSlide .hd li:eq(3)")
		}, {
			"esd_title": $(".fullSlide .bd a:eq(5)"),
			"esd_btn": $(".fullSlide .hd li:eq(4)")
		}, {
			"esd_title": $(".fullSlide .bd a:eq(6)"),
			"esd_btn": $(".fullSlide .hd li:eq(5)")
		}, {
			"esd_title": $(".fullSlide .bd a:eq(-2)"),
			"esd_btn": $(".fullSlide .hd li:last")
		}
	]
	var esd_searchindex_Array = [{
			"esd_title": $(".search-index .search-side a:eq(0)")
		}, {
			"esd_title": $(".search-index .search-side a:eq(1)")
		}, {
			"esd_title": $(".search-index .search-side a:eq(2)")
		}
	]
	/* 车票 */
	//单程
	$(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(0) .city-change").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' title='切换出发地与目的地'></a>");
	$("#isStudentDan").attr("role","checkbox").attr("aria-label","学生").attr("onclick","esdChangeStatus(this)").attr("onkeydown","if(event.keyCode==13){this.click()}");
	$("#isHighDan").attr("role","checkbox").attr("aria-label","高铁/动车").attr("onclick","esdChangeStatus(this)").attr("onkeydown","if(event.keyCode==13){this.click()}");
	//$("#isStudentDan").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' role='checkbox' aria-label='学生' onclick='esdChangeStatus(this)'></a>");//title='学生' 
	//$("#isHighDan").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;'  role='checkbox' aria-label='高铁/动车' onclick='esdChangeStatus(this)'></a>");//title='高铁/动车' 
	$(".history-list-wrap").prepend("<div style='width:10px; height:10px; display:block; position:absolute;' id='esd_historyWrap'></div>");
	esd_attrLable($(".search-main-item:eq(0) .search-tab-item:eq(0) .form-item:eq(0) label:eq()"), "fromStationText");
	esd_attrLable($(".search-main-item:eq(0) .search-tab-item:eq(0) .form-item:eq(1) label"), "toStationText");
	esd_attrLable($(".search-main-item:eq(0) .search-tab-item:eq(0) .form-item:eq(2) label"), "train_date");
	esd_attrLable($(".search-main-item:eq(0) .search-tab-item:eq(1) .form-item:eq(0) label"), "fromStationFanText");
	esd_attrLable($(".search-main-item:eq(0) .search-tab-item:eq(1) .form-item:eq(1) label"), "toStationFanText");
	esd_attrLable($(".search-main-item:eq(0) .search-tab-item:eq(1) .form-item:eq(2) label"), "fromStationFanText");
	esd_attrLable($(".search-main-item:eq(0) .search-tab-item:eq(1) .form-item:eq(3) label"), "toStationFanText");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(7) label"), "go_date");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(8) label"), "from_date");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(9) label"), "fromStationSerialText");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(10) label"), "toStationSerialText");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(11) label"), "serial_date");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(12) label"), "refund_start");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(13) label"), "refund_end");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(14) label"), "refund_code");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(15) label"), "serial_date");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(16) label"), "serial_date");
	esd_attrLable($(".search-main-item:eq(0) .form-item:eq(11) label"), "serial_date");
	esd_setimgTitle($(".box-loading img"), "正在加载中！");
	//往返
	//$("#isStudent").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' role='checkbox' aria-label='学生' onclick='esdChangeStatus(this)'></a>");//title='学生' 
	//$("#isHigh").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' role='checkbox' aria-label='高铁/动车' onclick='esdChangeStatus(this)'></a>");//title='高铁/动车' 
    $("#isStudent").attr("role","checkbox").attr("aria-label","学生").attr("onclick","esdChangeStatus(this)").attr("onkeydown","if(event.keyCode==13){this.click()}");
	$("#isHigh").attr("role","checkbox").attr("aria-label","高铁/动车").attr("onclick","esdChangeStatus(this)").attr("onkeydown","if(event.keyCode==13){this.click()}");
	$(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(1) .city-change").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' title='切换出发地与目的地'></a>");
	//连续换乘
	$(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(2) .city-change").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' title='切换出发地与目的地'></a>");
	//$("#isStudentLian").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' role='checkbox' aria-label='学生' onclick='esdChangeStatus(this)'></a>");//title='学生' 
	$("#isStudentLian").attr("role","checkbox").attr("aria-label","学生").attr("onclick","esdChangeStatus(this)").attr("onkeydown","if(event.keyCode==13){this.click()}");
	//退改签
	
	$("#dingqiaoID").attr("role","radio").attr("aria-label","按定票日期查询").attr("onclick","esdChangeStatusRadio(this)").attr("onkeydown","if(event.keyCode==13){this.click()}").attr("aria-checked","true");
	$(".radio-list-ding li:eq(1)").attr("role","radio").attr("aria-label","按乘车日期查询").attr("onclick","esdChangeStatusRadio(this)").attr("onkeydown","if(event.keyCode==13){this.click()}");
	//$("#dingqiaoID").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' title='按定票日期查询' role='radio' aria-label='按定票日期查询' aria-checked='true' onclick='esdChangeStatusRadio(this)'></a>");
	//$(".radio-list-ding li:eq(1)").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' title='按乘车日期查询' role='radio' aria-label='按乘车日期查询' onclick='esdChangeStatusRadio(this)'></a>");

	/* 常用查询 */
	//正晚点
	$(".radio-list-station li:eq(1)").attr("role","radio").attr("aria-label","按出发站查询").attr("onclick","esdChangeStatusRadio(this)").attr("onkeydown","if(event.keyCode==13){this.click()}");
	$("#destination_station").attr("role","radio").attr("aria-label","按到达站查询").attr("onclick","esdChangeStatusRadio(this)").attr("onkeydown","if(event.keyCode==13){this.click()}").attr("aria-checked","true");
	//$(".radio-list-station li:eq(1)").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' title='按出发站查询' role='radio' aria-label='按出发站查询' onclick='esdChangeStatusRadio(this)'></a>");
	//$("#destination_station").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' title='按到达站查询' role='radio' aria-checked='true' aria-label='按到达站查询' onclick='esdChangeStatusRadio(this)'></a>");
	//检票口
	$("#ticketEntranceSel").prepend("<a href='javascript:void(0)' style='width:10px; height:10px; display:block; position:absolute;' title='请选择乘车站'></a>");
	var esd_chepiao_Array = [{
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-hd li:eq(0) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(0) #fromStationText"),
			"esd_secondfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(0) #toStationText"),
			"esd_citychangefocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(0) .city-change a"),
			"esd_traindatefocus": $("#train_date"),
			"esd_secondlastfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd:eq(0) .search-tab-item:eq(0) a:eq(-2)"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd:eq(0) .search-tab-item:eq(0) a:last")
		}, {
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-hd li:eq(1) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(1) #fromStationFanText"),
			"esd_secondfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(1) #toStationFanText"),
			"esd_citychangefocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(1) .city-change a"),
			"esd_secondlastfocus": $("#isHigh a:eq(0)"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd:eq(0) .search-tab-item:eq(1) a:last")
		}, {
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-hd li:eq(2) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(2) #fromStationSerialText"),
			"esd_secondfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(2) #toStationSerialText"),
			"esd_citychangefocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(2) .city-change a"),
			"esd_secondlastfocus": $("#isStudentLian a:eq(0)"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd:eq(0) .search-tab-item:eq(2) a:last")
		}, {
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-hd li:eq(3) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(3) [tabindex=0]:eq(0)"),
			"esd_secondfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(3) a:eq(1)"),
			"esd_secondlastfocus": $("#refund_code"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd:eq(0) .search-tab-item:eq(3) a:last")
		}
	]
	var esd_changyong_Array = [{
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-hd li:eq(0) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(0) [tabindex=0]:eq(0)"),
			"esd_secondfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(0) a:eq(1)"),
			"esd_secondlastfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd:eq(0) .search-tab-item:eq(0) #numberValue"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd:eq(0) .search-tab-item:eq(0) a:last")
		}, {
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-hd li:eq(1) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(1) #check_in"),
			"esd_secondfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(1) #train_num"),
			"esd_secondlastfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(1) #ticketEntranceSel a:eq(0)"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd:eq(0) .search-tab-item:eq(1) a:last")
		}, {
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-hd li:eq(2) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(2) #sale_time"),
			"esd_secondfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(2) #start_sellText"),
			//"esd_secondlastfocus":$("#isStudentLian a:eq(0)"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd:eq(0) .search-tab-item:eq(2) a:last")
		}, {
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-hd li:eq(3) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(3) #destinationText"),
			//"esd_secondfocus":$(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd .search-tab-item:eq(3) #toStationSerialText"),
			//"esd_secondlastfocus":$("#isStudentLian a:eq(0)"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(1) .search-tab-bd:eq(0) .search-tab-item:eq(3) a:last")
		}
	]
	//订餐
	var esd_dingcan_Array = [{
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(2) .search-tab-hd li:eq(0) a:eq(0)"),
			"esd_firstfocus": $(".search-main:eq(0) .search-main-item:eq(2) .search-tab-bd .search-tab-item:eq(0) #dinner_date"),
			"esd_secondfocus": $(".search-main:eq(0) .search-main-item:eq(2) .search-tab-bd .search-tab-item:eq(0) #dinner_sub_mun"),
			"esd_lastfocus": $(".search-main:eq(0) .search-main-item:eq(2) .search-tab-bd:eq(0) .search-tab-item:eq(0) a:last")
		}, {
			"esd_title": $(".search-main:eq(0) .search-main-item:eq(2) .search-tab-hd li:eq(1) a:eq(0)")
		}
	]
	var esd_newstab_Array = [{
			"esd_title": $(".news-tab .tab-hd .lists li:eq(0) a:eq(0)"),
			"esd_firstfocus": $(".news-tab .tab-bd .tab-item:eq(0) [tabindex=0]:first"),
			"esd_secondfocus": $(".news-tab .tab-bd .tab-item:eq(0) [tabindex=0]:eq(1)"),
			"esd_secondlastfocus": $(".news-tab .tab-bd .tab-item:eq(0) [tabindex=0]:eq(-2)"),
			"esd_lastfocus": $(".news-tab .tab-bd .tab-item:eq(0) [tabindex=0]:last")
		}, {
			"esd_title": $(".news-tab .tab-hd .lists li:eq(1) a:eq(0)"),
			"esd_firstfocus": $(".news-tab .tab-bd .tab-item:eq(1) a:first"),
			"esd_secondfocus": $(".news-tab .tab-bd .tab-item:eq(1) a:eq(1)"),
			"esd_secondlastfocus": $(".news-tab .tab-bd .tab-item:eq(1) a:eq(-2)"),
			"esd_lastfocus": $(".news-tab .tab-bd .tab-item:eq(1) a:last")
		},{
			"esd_title": $(".news-tab .tab-hd .lists li:eq(2) a:eq(0)"),
			"esd_firstfocus": $(".news-tab .tab-bd .tab-item:eq(2) [tabindex=0]:first"),
			"esd_secondfocus": $(".news-tab .tab-bd .tab-item:eq(2) [tabindex=0]:eq(1)"),
			"esd_secondlastfocus": $(".news-tab .tab-bd .tab-item:eq(2) [tabindex=0]:eq(-2)"),
			"esd_lastfocus": $(".news-tab .tab-bd .tab-item:eq(2) [tabindex=0]:last")
		}
	]
	
	//出行指南-》更多
	$("#J-chuxingzhinan .nav-bd-item:eq(0) a:last").attr("title", "更多常见问题");
	$("#J-chuxingzhinan .nav-bd-item:eq(1) a:last").attr("title", "更多旅客须知");
	$("#J-chuxingzhinan .nav-bd-item:eq(2) a:last").attr("title", "更多相关章程");
	$(".section-hd a:eq(0)").attr("title", "更多铁路旅游信息");
	$(".news-tab .tab-bd .tab-item:eq(0) .news-more a:eq(0)").attr("title", "更多最新发布信息");
	$(".news-tab .tab-bd .tab-item:eq(1) .news-more a:eq(0)").attr("title", "更多常见问题信息");
	$(".news-tab .tab-bd .tab-item:eq(2) .more:eq(0) a:eq(0)").attr("title", "更多" + $(".news-tab .tab-bd .tab-item:eq(2) .discredit-list dt:eq(0)").text().trim() + "信息");
	$(".news-tab .tab-bd .tab-item:eq(2) .more:eq(1) a:eq(0)").attr("title", "更多" + $(".news-tab .tab-bd .tab-item:eq(2) .discredit-list dt:eq(1)").text().trim() + "信息");

	//图片轮换
	/* zxd esdJumpNodeTagLwLb(esd_fullSlide_Array[0].esd_title, function () {
		esd_mainnav_Array[7].esd_frame.show();
		esd_mainnav_Array[7].esd_lastfocus.focus();
	}, function () {
		esd_fullSlide_Array[1].esd_btn.click();
		esd_fullSlide_Array[1].esd_title.focus();
	});
	esdJumpNodeTagLwLb(esd_fullSlide_Array[1].esd_title, function () {
		esd_fullSlide_Array[0].esd_btn.click();
		esd_fullSlide_Array[0].esd_title.focus();
	}, function () {
		esd_fullSlide_Array[2].esd_btn.click();
		esd_fullSlide_Array[2].esd_title.focus();
	});
	esdJumpNodeTagLwLb(esd_fullSlide_Array[2].esd_title, function () {
		esd_fullSlide_Array[1].esd_btn.click();
		esd_fullSlide_Array[1].esd_title.focus();
	}, function () {
		esd_fullSlide_Array[3].esd_btn.click();
		esd_fullSlide_Array[3].esd_title.focus();
	});
	esdJumpNodeTagLwLb(esd_fullSlide_Array[3].esd_title, function () {
		esd_fullSlide_Array[2].esd_btn.click();
		esd_fullSlide_Array[2].esd_title.focus();
	}, function () {
		esd_fullSlide_Array[4].esd_btn.click();
		esd_fullSlide_Array[4].esd_title.focus();
	});
	esdJumpNodeTagLwLb(esd_fullSlide_Array[4].esd_title, function () {
		esd_fullSlide_Array[3].esd_btn.click();
		esd_fullSlide_Array[3].esd_title.focus();
	}, function () {
		esd_fullSlide_Array[5].esd_btn.click();
		esd_fullSlide_Array[5].esd_title.focus();
	});
	esdJumpNodeTagLwLb(esd_fullSlide_Array[5].esd_title, function () {
		esd_fullSlide_Array[4].esd_btn.click();
		esd_fullSlide_Array[4].esd_title.focus();
	}, function () {
		esd_searchindex_Array[0].esd_title.focus();
	});

	$(".service-list li").each(function () {
		$(this).find("a").attr("title", $(this).text().trim())
	})
zxd*/
	//单程
	esdJumpNodeTagLwLb(esd_searchindex_Array[0].esd_title, function () {
		esd_fullSlide_Array[6].esd_btn.click();
		esd_fullSlide_Array[6].esd_title.focus();
		////console.log("2222")
	}, function () {
		esd_searchindex_Array[0].esd_title.click();
		esd_chepiao_Array[0].esd_title.focus();
	});

	esdJumpNodeTagLwLb(esd_chepiao_Array[0].esd_title, function () {
		esd_searchindex_Array[0].esd_title.focus();
	}, function () {
		esd_chepiao_Array[0].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[0].esd_firstfocus, function () {
		esd_chepiao_Array[0].esd_title.focus();
	}, function () {
		esd_chepiao_Array[0].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[0].esd_citychangefocus, function () {
		esd_chepiao_Array[0].esd_secondfocus.focus();
	}, function () {
		esd_date_Array[0].focus();
		//esd_date_Array[0].removeAttr("readonly");
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[0].esd_traindatefocus, function () {
		esd_chepiao_Array[0].esd_traindatefocus.blur();
	}, function () {
		esd_chepiao_Array[0].esd_traindatefocus.blur();
		$(".cal-wrap").hide();
		$("#isStudentDan").focus();
	});

	//带历史记录-查询按钮
	function esd_inserthistory() {
		var esd_inserthistoryHtml = "";
		$(".history-list li").each(function () {
			esd_inserthistoryHtml = esd_inserthistoryHtml + "<a href='javascript:' title='" + $(this).text().trim() + "' style='width:10px; height:10px; display:block; position:absolute;'></a>";
			$("#esd_historyWrap").html(esd_inserthistoryHtml);
		})
		if ($("#search-history").css("display") == "block") {
			$("#esd_historyWrap a:eq(0)").focus();
		} else if ($("#search-history").css("display") == "none") {
			esd_chepiao_Array[1].esd_title.click();
			esd_chepiao_Array[1].esd_title.focus();
		}
	}
	esdJumpNodeTagLwLb($("#search_one"), function () {
		$("#isHighDan a").focus();
	}, function () {
		esd_inserthistory();
	})
	esdJumpNodeTagLwLb($(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd:eq(0) .search-tab-item:eq(0) #search-history a:last"), function () {
		$(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd:eq(0) .search-tab-item:eq(0) #search-history a:eq(-2)").focus();
	}, function () {
		esd_chepiao_Array[1].esd_title.click();
		esd_chepiao_Array[1].esd_title.focus();
	});

	//
	esd_chepiao_Array[0].esd_citychangefocus.click(function () {
		$(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(0) .city-change .icon-qiehuan").click()
	})
	esd_chepiao_Array[1].esd_citychangefocus.click(function () {
		$(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(1) .city-change .icon-qiehuan").click()
	})
	esd_chepiao_Array[2].esd_citychangefocus.click(function () {
		$(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd .search-tab-item:eq(2) .city-change .icon-qiehuan").click()
	})
	//
	function esd_returnDcLastFocus() {
		var esd_inserthistoryHtml = "";
		$(".history-list li").each(function () {
			esd_inserthistoryHtml = esd_inserthistoryHtml + "<a href='javascript:' title='" + $(this).text().trim() + "' style='width:10px; height:10px; display:block; position:absolute;'></a>";
			$("#esd_historyWrap").html(esd_inserthistoryHtml);
		})
		if ($("#search-history").css("display") == "none") {
			$("#search_one").focus();
		} else if ($("#search-history").css("display") == "block") {
			$(".search-main:eq(0) .search-main-item:eq(0) .search-tab-bd:eq(0) .search-tab-item:eq(0) #search-history a:last").focus();
		}
	}
	$(".topMenu>li:eq(2) a:eq(0)").keydown(function (e) {
		if (e.keyCode == 13) {
			$("#search_one").focus();
			return false;
		}
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[1].esd_title, function () {
		esd_chepiao_Array[0].esd_title.click();
		esd_returnDcLastFocus();
	}, function () {
		esd_chepiao_Array[1].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[1].esd_firstfocus, function () {
		esd_chepiao_Array[1].esd_title.focus();
	}, function () {
		esd_chepiao_Array[1].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[1].esd_lastfocus, function () {
		esd_chepiao_Array[1].esd_secondlastfocus.focus();
	}, function () {
		esd_chepiao_Array[2].esd_title.click();
		esd_chepiao_Array[2].esd_title.focus();
	});
	//
	esdJumpNodeTagLwLb(esd_chepiao_Array[2].esd_title, function () {
		esd_chepiao_Array[1].esd_title.click();
		esd_chepiao_Array[1].esd_lastfocus.focus();
	}, function () {
		esd_chepiao_Array[2].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[2].esd_firstfocus, function () {
		esd_chepiao_Array[2].esd_title.focus();
	}, function () {
		esd_chepiao_Array[2].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[2].esd_lastfocus, function () {
		esd_chepiao_Array[2].esd_secondlastfocus.focus();
	}, function () {
		esd_chepiao_Array[3].esd_title.click();
		esd_chepiao_Array[3].esd_title.focus();
	});
	//
	esdJumpNodeTagLwLb(esd_chepiao_Array[3].esd_title, function () {
		esd_chepiao_Array[2].esd_title.click();
		esd_chepiao_Array[2].esd_lastfocus.focus();
	}, function () {
		esd_chepiao_Array[3].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[3].esd_firstfocus, function () {
		esd_chepiao_Array[3].esd_title.focus();
	}, function () {
		esd_chepiao_Array[3].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_chepiao_Array[3].esd_lastfocus, function () {
		esd_chepiao_Array[3].esd_secondlastfocus.focus();
	}, function () {
		esd_searchindex_Array[1].esd_title.click();
		esd_searchindex_Array[1].esd_title.focus();
	});
	/* 常用查询 */
	esdJumpNodeTagLwLb(esd_searchindex_Array[1].esd_title, function () {
		esd_searchindex_Array[0].esd_title.click();
		esd_chepiao_Array[3].esd_title.click();
		esd_chepiao_Array[3].esd_lastfocus.focus();
	}, function () {
		esd_changyong_Array[0].esd_title.focus();
	});

	esdJumpNodeTagLwLb(esd_changyong_Array[0].esd_title, function () {
		esd_searchindex_Array[1].esd_title.focus();
	}, function () {
		esd_changyong_Array[0].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_changyong_Array[0].esd_firstfocus, function () {
		esd_changyong_Array[0].esd_title.focus();
	}, function () {
		esd_changyong_Array[0].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_changyong_Array[0].esd_lastfocus, function () {
		esd_changyong_Array[0].esd_secondlastfocus.focus();
	}, function () {
		esd_changyong_Array[1].esd_title.click();
		esd_changyong_Array[1].esd_title.focus();
	});
	//
	esdJumpNodeTagLwLb(esd_changyong_Array[1].esd_title, function () {
		esd_changyong_Array[0].esd_title.click();
		esd_changyong_Array[0].esd_lastfocus.focus();
	}, function () {
		esd_changyong_Array[1].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_changyong_Array[1].esd_firstfocus, function () {
		esd_changyong_Array[1].esd_title.focus();
	}, function () {
		esd_changyong_Array[1].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_changyong_Array[1].esd_lastfocus, function () {
		esd_changyong_Array[1].esd_secondlastfocus.focus();
	}, function () {
		esd_changyong_Array[2].esd_title.click();
		esd_changyong_Array[2].esd_title.focus();
	});
	//
	esdJumpNodeTagLwLb(esd_changyong_Array[2].esd_title, function () {
		esd_changyong_Array[1].esd_title.click();
		esd_changyong_Array[1].esd_lastfocus.focus();
	}, function () {
		esd_changyong_Array[2].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_changyong_Array[2].esd_firstfocus, function () {
		esd_changyong_Array[2].esd_title.focus();
	}, function () {
		esd_changyong_Array[2].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_changyong_Array[2].esd_lastfocus, function () {
		esd_changyong_Array[2].esd_secondfocus.focus();
	}, function () {
		esd_changyong_Array[3].esd_title.click();
		esd_changyong_Array[3].esd_title.focus();
	});
	//
	esdJumpNodeTagLwLb(esd_changyong_Array[3].esd_title, function () {
		esd_changyong_Array[2].esd_title.click();
		esd_changyong_Array[2].esd_lastfocus.focus();
	}, function () {
		esd_changyong_Array[3].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_changyong_Array[3].esd_firstfocus, function () {
		esd_changyong_Array[3].esd_title.focus();
	}, function () {
		esd_changyong_Array[3].esd_lastfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_changyong_Array[3].esd_lastfocus, function () {
		esd_changyong_Array[3].esd_firstfocus.focus();
	}, function () {
		esd_searchindex_Array[2].esd_title.click();
		esd_searchindex_Array[2].esd_title.focus();
	});
	/* 订餐 */
	esdJumpNodeTagLwLb(esd_searchindex_Array[2].esd_title, function () {
		esd_searchindex_Array[1].esd_title.click();
		esd_changyong_Array[3].esd_title.click();
		esd_changyong_Array[3].esd_lastfocus.focus();
	}, function () {
		esd_dingcan_Array[0].esd_title.focus();
	});

	esdJumpNodeTagLwLb(esd_dingcan_Array[0].esd_title, function () {
		esd_searchindex_Array[2].esd_title.focus();
	}, function () {
		esd_dingcan_Array[0].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_dingcan_Array[0].esd_firstfocus, function () {
		esd_dingcan_Array[0].esd_title.focus();
	}, function () {
		esd_dingcan_Array[0].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_dingcan_Array[0].esd_lastfocus, function () {
		esd_dingcan_Array[0].esd_secondfocus.focus();
	}, function () {
		esd_dingcan_Array[1].esd_title.focus();
	});
	//
	esdJumpNodeTagLwLb(esd_dingcan_Array[1].esd_title, function () {
		esd_dingcan_Array[0].esd_lastfocus.focus();
	}, function () {
		$(".service-list li:eq(1) a:eq(0)").focus();
	});

	esdJumpNodeTagLwLb($(".service-list a:eq(1)"), function () {
		esd_searchindex_Array[2].esd_title.click();
		esd_dingcan_Array[1].esd_title.focus();
	}, function () {
		$(".service-list a:eq(2)").focus();
	});
	//底部选项卡
	esdJumpNodeTagLwLb(esd_newstab_Array[0].esd_title, function () {
		$(".travel-train-list a:last").focus();
	}, function () {
		esd_newstab_Array[0].esd_firstfocus.focus();
		esd_newstab_Array[0].esd_title.blur();
	});
	esdJumpNodeTagLwLb(esd_newstab_Array[0].esd_firstfocus, function () {
		esd_newstab_Array[0].esd_title.focus();
	}, function () {
		esd_newstab_Array[0].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_newstab_Array[0].esd_lastfocus, function () {
		esd_newstab_Array[0].esd_secondlastfocus.focus();
	}, function () {
		esd_newstab_Array[1].esd_title.click();
		esd_newstab_Array[1].esd_title.focus();
	});

	esdJumpNodeTagLwLb(esd_newstab_Array[1].esd_title, function () {
		esd_newstab_Array[0].esd_title.click();
		esd_newstab_Array[0].esd_lastfocus.focus();
	}, function () {
		esd_newstab_Array[1].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_newstab_Array[1].esd_firstfocus, function () {
		esd_newstab_Array[1].esd_title.focus();
	}, function () {
		esd_newstab_Array[1].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_newstab_Array[1].esd_lastfocus, function () {
		esd_newstab_Array[1].esd_secondlastfocus.focus();
	}, function () {
		esd_newstab_Array[2].esd_title.click();
		esd_newstab_Array[2].esd_title.focus();
	});

	esdJumpNodeTagLwLb(esd_newstab_Array[2].esd_title, function () {
		esd_newstab_Array[1].esd_title.click();
		esd_newstab_Array[1].esd_lastfocus.focus();
	}, function () {
		esd_newstab_Array[2].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_newstab_Array[2].esd_firstfocus, function () {
		esd_newstab_Array[2].esd_title.focus();
	}, function () {
		esd_newstab_Array[2].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_newstab_Array[2].esd_lastfocus, function () {
		esd_newstab_Array[2].esd_secondlastfocus.focus();
	}, function () {
		$(".footer [tabindex=0]:first").focus();
	});

	//底部
	esdJumpNodeTagLwLb($(".footer [tabindex=0]:first"), function () {
		esd_newstab_Array[2].esd_title.click();
		esd_newstab_Array[2].esd_lastfocus.focus();
	}, function () {
		$(".footer [tabindex=0]:eq(1)").focus();
	})

	//$("#search-input").attr("title", "请输入要查询的车票/餐饮/常旅客/相关规章");
	//$(".search-btn").attr("title", "点击进行搜索");
	$("#fromStationText").attr("title", "请输入或选择出发地，按键盘上下键进行选择，按回车键选中");
	$("#toStationText").attr("title", "请输入或选择到达地，按键盘上下键进行选择，按回车键选中");
	$("#train_date").attr("title", "请选择出发日期");
	$("#fromStationFanText").attr("title", "请输入或选择出发地");
	$("#toStationFanText").attr("title", "请输入或选择到达地");
	$("#go_date").attr("title", "请选择出发日期");
	$("#from_date").attr("title", "请选择返程日期");
	$("#fromStationSerialText").attr("title", "请输入或选择出发地");
	$("#toStationSerialText").attr("title", "请输入或选择到达地");
	$("#serial_date").attr("title", "请选择乘车日期");
	$("#refund_start").attr("title", "请选择开始日期");
	$("#refund_end").attr("title", "请选择结束日期");
	$("#refund_code").attr("title", "请输入订单号/车次/乘客姓名");
	$("#stationValueText").attr("title", "请输入或选择车站");
	$("#numberValue").attr("title", "请输入或选择车次");
	//$("#check_in").attr("title", "请选择乘车日期，例如：2021-05-04");
	$("#train_num").attr("title", "请输入车次");
	$("#ticketEntranceSel").attr("title", "请选择车站");
	//$("#sale_time").attr("title", "请选择起售日期，例如：2021-05-04");
	$("#start_sellText").attr("title", "请输入或选择起售车站");
	$("#destinationText").attr("title", "请输入或选择查询天气的目的地");
	//$("#dinner_date").attr("title", "请选择出发日期，例如：2021-05-04");
	$("#dinner_sub_mun").attr("title", "请输入出发车次");
	function esd_setRole(NodeElement, NodeText) {
		NodeElement.attr("role", NodeText);
	}
	//esd_setRole($(".fixed-right-menu:eq(0)"),"menu");
	esd_setRole($("#page-loading"), "complementary");
	esd_setRole($(".section-first"), "complementary");
	esd_setRole($(".gototop"), "complementary");
	esd_setRole($(".fixed-right"), "complementary");
	esd_setRole($("#search_div"), "complementary");
	esd_setRole($(".choice_div"), "complementary");
	function esd_arialabel(NodeElement, NodeText) {
		NodeElement.attr("aria-label", NodeText);
	}
	esd_arialabel($(".sowingMap li:eq(1) a"), "中国铁路保险");
	esd_arialabel($(".sowingMap li:eq(5) a"), "中国铁路旅游");
	esd_arialabel($(".sowingMap li:last a"), "中国铁路保险");
	esd_arialabel($(".fixed-right"), "右侧工具栏");
	esd_arialabel($("#page-loading"), "正在加载中");
	esd_arialabel($(".section-first"), "图片轮换");
	esd_arialabel($(".gototop"), "跳转回顶部");
	esd_arialabel($("#search_div"), "检索车站");
	esd_arialabel($(".choice_div"), "选择车站");
	
	//修正弹出菜单弹出提示
	$(".menu-nav-hd:eq(2)").focus(function(){
	     $(".header-menu .menu-nav:eq(0) .menu-nav-bd").show();
	 });
	$(".menu-nav-hd:eq(3)").focus(function(){
	     $(".header-menu .menu-nav:eq(1) .menu-nav-bd").show();
	 });
	$(".sowingMap").attr("id","crumbs");
	$("ul.lists li a").attr("aria-expanded","true").attr("aria-haspopup","true");

	//修正路标
	$(".search-btn").attr("title","点击搜索，搜索结果页面可能超出无障碍服务范围");
	$("body").removeAttr("role");
	$("#jumpareNodeId").removeAttr("role");
	$("#toolbar_Div").removeAttr("role");
	$("#page-loading").removeAttr("role");
	$(".gototop").removeAttr("role").removeAttr("aria-label");
	$(".logo").removeAttr("role");
	$(".header").removeAttr("role").removeAttr("aria-label");
	$("#search_div").removeAttr("role").removeAttr("aria-label");


	$(".header>div.wrapper").attr("role","banner");
	$(".section-first").attr("role", "region");
	$(".search-index").attr("role", "search");
	$(".service-list").attr("role", "region").attr("aria-label", "服务区域1");
	$(".service-lg").attr("role", "region").attr("aria-label", "服务区域2");
	$(".travel-train-list").attr("role", "region").attr("aria-label", "铁路旅游");
	$(".news-tab").attr("role", "region").attr("aria-label", "信息区域");

	$(".footer").attr("role", "contentInfo").attr("aria-label", "底部区域");



	//修正信息
	$("#g-service-lg-list li a").removeAttr("title");//删除错误的提示
	$('img[src="https://www.12306.cn/index/images/abanner01.jpg"]').attr("alt","会员服务 铁路畅行 尊享体验 12306铁路会员积分服务");
	$('img[src="https://www.12306.cn/index/images/abanner02.jpg"]').attr("alt","餐饮,特产 带有温度的旅途配餐 享受星级的体验和家乡的味道");
	$('img[src="https://www.12306.cn/index/images/abanner03.jpg"]').attr("alt","铁路保险 用心呵护 放心出行 12306铁路保障出行安全");
	$('img[src="https://www.12306.cn/index/images/abanner04.jpg"]').attr("alt","铁路e卡通 长株潭城际铁路便捷出行 优先体验铁路12306 APP扫码乘车");
	

	//首页  日期控件
	$("#sale_time").blur(
	    function() {
	        $(".cal-wrap").attr("style", "z-index: 30000; position: absolute; left: 279.5px; top: 284px; display: none;")
	    }
	)
	$("#check_in").blur(
	    function() {
	        $(".cal-wrap").attr("style", "z-index: 30000; position: absolute; left: 279.5px; top: 284px; display: none;")
	    }
	)
	$("#dinner_date").blur(
	    function() {
	        $(".cal-wrap").attr("style", "z-index: 30000; position: absolute; left: 279.5px; top: 284px; display: none;");
	    }
	)
	$("#from_date").blur(
	    function() {
	        $(".cal-wrap").attr("style", "z-index: 30000; position: absolute; left: 279.5px; top: 284px; display: none;");
	    }
	)
	$("#serial_date").blur(
	    function() {
	        $(".cal-wrap").attr("style", "z-index: 30000; position: absolute; left: 279.5px; top: 284px; display: none;");
	    }
	)
	$("#refund_end").blur(
	    function() {
	        $(".cal-wrap").attr("style", "z-index: 30000; position: absolute; left: 279.5px; top: 284px; display: none;");
	    }
	)
	// 首页  click
	$(".search-tab-hd:eq(0) a").focus(
	    function() {
	        $(this).click();
	    }
	)
	$(".search-tab-hd:eq(1) a").focus(
	    function() {
	        $(this).click();
	    }
	)
	$(".search-tab-hd:eq(2) a:eq(0)").focus(
	    function() {
	        $(this).click();
	    }
	)


	esdJumpNodeTagLwLb($(".service-list li:eq(1) a"),function () {
	    $(".search-tab-hd:last li:eq(1) a").focus();
	}, function () {
	    $(".service-list li:eq(2) a").focus();
	});
	
	$("a[role='checkbox'],li[role='checkbox'],a[role='radio'],li[role='radio']").each(function(){
		var _this = $(this);
		if($.trim(_this.attr("aria-label")).length>0){
			var tempStr = _this.attr("aria-label");
			_this.attr("aria-label",tempStr+",按回车键进行操作")
		}else{
			_this.attr("aria-label","按回车键进行操作")
		}
	});
}
var esd_checkOnload;
esd_checkOnload = window.setInterval(
		function () {
		if ($ == undefined) {
			////console.log("未加载")
		} else {
			$(function () {
				clearInterval(esd_checkOnload);
				esd_wzaGz();

			})
		}
	},
		2000);
	}, 
 }
}; 
esdDTGZ.init(); 

window.esdRebuildedTimer = setInterval(function(){
    if(typeof(EsdToolbar)=="object"&&EsdToolbar.pageIsRebuilded){
		clearInterval(window.esdRebuildedTimer);
		for (var attr in esdDTGZ.common) { 
			var func = esdDTGZ.common[attr]; 
			if (typeof(func) == 'function') { 
				func(); 
			} 
		} 
		for (var attr2 in esdDTGZ.gdt) { 
			var func2 = esdDTGZ.gdt[attr2]; 
			if (typeof(func2) == 'function') { 
				func2(); 
			} 
		} 
		for (var attr3 in esdDTGZ.elem) { 
			var func3 = esdDTGZ.elem[attr3]; 
			if (typeof(func3) == 'function') { 
				func3(); 
			} 
		} 
	}
},500)
