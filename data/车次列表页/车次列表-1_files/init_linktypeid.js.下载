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
	esd_JumpToTicketResult = function(){
		$("#t-list>table").attr("tabindex","0").attr("aria-label","已进入车票查询结果区域");
		$("#t-list>table").focus();
	}
	setJumpNodeElement = function (NodeClass, NodeIndex) {
		var esd_jumpFrame = document.createElement("div");
		esd_jumpFrame.setAttribute("id", "jumpareNodeId");
		esd_jumpFrame.setAttribute("style", "position:absolute;left:-9999px; top:-9999px; z-index:2001;");
		document.getElementsByTagName("body")[0].insertBefore(esd_jumpFrame, document.getElementsByTagName("body")[0].childNodes[0]);
		esd_jumpToText = "已跳转到导航区域";
		esd_jumpCrossText = "已跳过导航区域";
		document.getElementById("jumpareNodeId").innerHTML = "<a href='javascript:' onfocus='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:5px; top:5px; z-index:2001; background:#fff; padding:5px 15px;\")' onblur='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:-9999px; top:-9999px; z-index:2001; background:#fff; padding:5px 15px;\")' onclick='esd_JumpToNavElementId()' style='display:block; font-size:14px; line-height:2em;letter-spacing:2px;' aria-label='跳转到导航区域'>跳转到导航区域</a><a href='javascript:' style='display:block; font-size:14px; line-height:2em;letter-spacing:2px;' onfocus='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:5px; top:5px; z-index:2001; background:#fff; padding:5px 15px;\")' onblur='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:-9999px; top:-9999px; z-index:0;\")' onclick='esd_JumpCrossNavElementId()' aria-label='跳过导航区域'>跳过导航区域</a><a href='javascript:' style='display:block; font-size:14px; line-height:2em;letter-spacing:2px;' onfocus='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:5px; top:5px; z-index:2001; background:#fff; padding:5px 15px;\")' onblur='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:-9999px; top:-9999px; z-index:0;\")' onclick='esd_JumpToTicketResult()' aria-label='跳转到车票查询结果区域'>跳转到车票查询结果区域</a>";
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
		//console.log("11")
	})
	$("#jumpareNodeId a").blur(function () {
		$("#jumpareNodeId").attr("style", "position:absolute;z-index:0; left:-99999px; top:-99999px;");
		//console.log("22")
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
	if (document.getElementsByClassName("footer").length > 0) {
		var footerlistImgTitle = new Array("中国国家铁路集团有限公司", "中国铁路财产保险自保有限公司", "中国铁路95306网", "中铁快运股份有限公司", "中国铁路官方微信", "中国铁路官方微博", "12306 公众号", "铁路12306");
		if ($(".footer .foot-links .foot-links-list").length > 0) {
			$(".footer img").each(function () {
				esd_setimgTitle($(this), footerlistImgTitle[$(this).index()])
			})
		}
	}

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
		if(esd_language_Array[2].esd_title.length!=0){
		    esd_language_Array[2].esd_title.focus();
		}else{
			$("#J-header-logout a:eq(0)").focus();
		}
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
	//esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_lastfocus, function () {
	//	esd_mainnav_Array[7].esd_secondlastfocus.focus();
	//}, function () {
	//	esd_mainnav_Array[7].esd_frame.hide();
	//	esd_removeDisplay();
	//	$("#crumbs a:eq(0)").focus();
	//});
	//
	//esdJumpNodeTagLwLb($("#crumbs a:eq(0)"), function () {
	//	esd_mainnav_Array[7].esd_frame.show();
	//	esd_mainnav_Array[7].esd_lastfocus.focus();
	//}, function () {
	//	$("#crumbs a:eq(1)").focus();
	//});
	esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_lastfocus, function () {
		esd_mainnav_Array[7].esd_secondlastfocus.focus();
	}, function () {
		esd_mainnav_Array[7].esd_frame.hide();
		esd_removeDisplay();
		$("#dc").focus();
	});

	//esdJumpNodeTagLwLb($("#dc"), function () {
	//	esd_mainnav_Array[7].esd_frame.show();
	//	esd_mainnav_Array[7].esd_lastfocus.focus();
	//}, function () {
	//	$("#wf").focus();
	//});

	jq_t("#dc").keydown(function(e){
		if (e.shiftKey && e.keyCode == 9) {
            esd_mainnav_Array[7].esd_frame.show();
		    esd_mainnav_Array[7].esd_lastfocus.focus();
		    return false;
		}
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
	esd_setimgTitle($(".foot-code img:eq(0)"), "中国铁路官方微信");
	esd_setimgTitle($(".foot-code img:eq(1)"), "中国铁路官方微博");
	esd_setimgTitle($(".foot-code img:eq(2)"), "12306 公众号");
	esd_setimgTitle($(".foot-code img:eq(3)"), "铁路12306");
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
var esd_checkOnload;
esd_checkOnload = window.setInterval(
		function () {
		if ($ == undefined) {}
		else {
			$(function () {
				clearInterval(esd_checkOnload);
				esd_wzaGz();

			})
		}
	},
		2000);
function esd_wzaGz() { /* 改造代码开始 */
	$(function () {
		//焦点前后切换函数
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
		//插入a元素的方法
		function esd_pubInsertA(NodeElement, NodeText) {
			thisAElement = "<a href='javascript:' title='" + NodeText + "' style='width:1px;height:1px;position:absolute;display:block;'></a>";
			NodeElement.prepend(thisAElement);
		}
		function esd_setinputTitle(NodeElement, NodeText) {
			//NodeElement.attr("title", NodeText);
			NodeElement.attr("aria-label", NodeText);
		}
		$(".nav .nav-item:eq(6) .nav-bd .nav-bd-item:eq(0) a:last").attr("aria-label","更多常见问题");
		$(".nav .nav-item:eq(6) .nav-bd .nav-bd-item:last a:last").attr("aria-label","更多相关问题");
		//单程或往返
		esd_setinputTitle($("#dc"), "按上、下方向键选择单程或往返，当前为单程,按空格键选中");
		esd_setinputTitle($("#wf"), "按上、下方向键选择单程或往返，当前为往返,按空格键选中");
		//出发地
		esd_setinputTitle($("#fromStationText"), "请输入或选择出发站，按回车确认输入");
		esd_setinputTitle($("#toStationText"), "请输入或选择目的地站，按回车确认输入");
		esd_pubInsertA($("#change_station"), "将出发地与目的地互换");
		esd_setinputTitle($("#auto_query"), $("#showquick1").text());
		esd_setinputTitle($("#cc_start_time"),"请选择发车时间,按上下键进行选择");
		//开始
		//esdJumpNodeTagLwLb($("#dfc input:eq(0)"), function () {
		//	esd_mainnav_Array[7].esd_frame.show();
		//	esd_mainnav_Array[7].esd_lastfocus.focus();
		//}, function () {
		//	$("#dfc input:eq(1)").focus();
		//});
		$("#startendtime span").each(function () {
			esd_pubInsertA($(this), "按" + $(this).text().trim() + "排序");
		})
		//esd_setinputTitle($("#train_date"), "请选择出发日期，例如：2021-06-01");
		//esd_setinputTitle($("#back_train_date"), "请选择返程日期，例如：2021-06-07");
		//$("#train_date").focus(function () {
		//	$("#train_date").removeAttr("readonly");
		//})
		//$("#back_train_date").focus(function () {
		//	$("#back_train_date").removeAttr("readonly");
		//})
		esdJumpNodeTagLwLb($("#train_date"),
			function () {
			$("#toStationText").focus();
			$(".cal-wrap").hide();
		},
			function () {
			$(".cal-wrap").hide();
			if ($("#back_train_date").attr("disabled") == undefined) {
				$("#back_train_date").focus();
			} else if ($("#back_train_date").attr("disabled") == "disabled") {
				$("#sf1").focus();
			}
		})
		esdJumpNodeTagLwLb($("#back_train_date"),
			function () {
			$("#train_date").focus();
			$(".cal-wrap").hide();
		},
			function () {
			$(".cal-wrap").hide();
			$("#sf1").focus();
		})
		//查看票价三角符号
		$(".lookup b[tabindex!=0]").attr("tabindex","0").attr("aria-label","查看票价,按回车键操作");
		$(document).on("keydown.esdShow",".lookup b",function(e){
			if(e.keyCode==13){
				$(this).parent().click();
			}
		});
		//车次链接点击提示修改
		$("a.number").each(function(){
			if(this.title.indexOf("点击查看停靠站信息")>-1){
				$(this).attr("aria-label","鼠标点击或使用回车键查看"+$(this).text()+"次停靠站信息")
			}
		});
		//添加预订

		function esd_resetFunc() {
			//查看票价三角符号
			setTimeout(function(){
				$(".lookup b[tabindex!=0]").attr("tabindex","0").attr("aria-label","查看票价,按回车键操作");
			},1000);
			//车次链接点击提示修改
			$("a.number").each(function(){
			    if(this.title.indexOf("点击查看停靠站信息")>-1){
			        $(this).attr("aria-label","鼠标点击或使用回车键查看"+$(this).text()+"次停靠站信息")
			    }
			});
			var queryLeftTableTag;
			queryLeftTableTag = window.setInterval(
					function () {
					if ($("#queryLeftTable tr").length > 1) {
						$(function () {
							clearInterval(queryLeftTableTag);
							$("#queryLeftTable tr").each(function () {
								esd_queryLeftTableTitle = "#" + $(this).find("td:eq(0) .train a:eq(0)").text().trim() + "次车" + $(this).find("td:eq(0) .cds strong:eq(0)").text().trim() + "从" + $(this).find("td:eq(0) .cdz strong:eq(0)").text().trim() + "出发，" + $(this).find("td:eq(0) .cds strong:eq(1)").text().trim() + "到" + $(this).find("td:eq(0) .cdz strong:eq(1)").text().trim() + "," + $(this).find("td:eq(0) .ls span:eq(0)").text().trim() + "历时" + $(this).find("td:eq(0) .ls strong:eq(0)").text().trim() + "的车票";
								esd_setinputTitle($(this).find("td:last a"), "预订" + $(this).find("td:eq(0) .train a:eq(0)").text().trim() + "次车" + $(this).find("td:eq(0) .cds strong:eq(0)").text().trim() + "从" + $(this).find("td:eq(0) .cdz strong:eq(0)").text().trim() + "出发，" + $(this).find("td:eq(0) .cds strong:eq(1)").text().trim() + "到" + $(this).find("td:eq(0) .cdz strong:eq(1)").text().trim() + "," + $(this).find("td:eq(0) .ls span:eq(0)").text().trim() + "历时" + $(this).find("td:eq(0) .ls strong:eq(0)").text().trim() + "的车票");
							})
						})
					}
					if($("#cc_from_station_name_all #from_station_ul li").length>1){
						$("#cc_from_station_name_all #from_station_ul li").each(function(){
							$(this).find("input").attr("aria-label","选择出发站为"+$(this).find("label").text()+"的车次");
						});
					}
					esdJumpNodeTagLwLb(
						$("#sear-sel-bd input:visible:last"),
						function(){
							$("#sear-sel-bd input:visible:eq(-2)").focus();
						},
						function(){$("#sear-result input:first").focus();}
					);
					esdJumpNodeTagLwLb(
						$("#sear-result input:first"),
						function(){
							$("#cc_from_station_name_all #from_station_ul li:last input").focus();
						},
						function(){$("#sear-result input:eq(1)").focus();}
					);
				},
					2000);

		}
		//预订结束
		$("#query_ticket").click(function () {
			esd_resetFunc();
		})
		$("#startendtime span a").click(function () {
			esd_resetFunc();
		})
		$("#cc_start_time").change(function(){
			esd_resetFunc();
		})
		$("#date_range li").each(function () {
			esd_pubInsertA($(this).find("span:eq(0)"), "按回车键搜索"+$(this).find("span:eq(1)").text().replace("-","月").replace(" ","日")+"全部车次");
			esd_pubInsertA($(this).find("span:eq(1)"), "按回车键搜索"+$(this).find("span:eq(1)").text().replace("-","月").replace(" ","日")+"全部车次");
			$(this).find("a").click(function () {
				esd_resetFunc();
			})
		});
		$("#sear-sel-bd input").each(function () {
			$(this).click(function () {
				esd_resetFunc();
			})
		})
		$("#_ul_station_train_code li").each(function () {
			esd_setinputTitle($(this).find("input"), "车次类型为：" + $(this).text());
		})
		$("#cc_from_station_name_all li").each(function () {
			esd_setinputTitle($(this).find("input"), "出发车站为：" + $(this).text());
		})
		$("#to_station_ul li").each(function () {
			esd_setinputTitle($(this).find("input"), "到达车站为：" + $(this).text());
		})
		esd_setinputTitle($("#setion_postion .wrap-left a"), "请选择乘车人");
		esd_setinputTitle($("#showYxTrainSpan a"), "请选择优先车次");
		esd_setinputTitle($("#prior_seat a"), "请选择优先席别");
		esd_setinputTitle($("#prior_date a"), "请选择备选日期");
		esd_setinputTitle($("#_prior"), "请选择优先席别");
		esd_setinputTitle($("#autoSubmit"), $("#showquick3").text());
		esd_setinputTitle($("#partSubmit"), $("#showquick2").text());
		esd_setinputTitle($("#avail_jf"), "显示积分兑换车次");
		esd_setinputTitle($("#avail_ticket"), "显示全部可预订车次");
		var esd_focusloginClose;
		esd_focusloginClose = window.setInterval(
				function () {
				if ($(".modal-login").css("display") == "block") {
					esd_setinputTitle($(".modal-login-tit .close:eq(0) a"), "点击关闭登录窗");
					esd_pubInsertA($(".lgcode-refresh"), "刷新验证码");
					$(".modal-login-tit .close").focus();
					clearInterval(esd_focusloginClose);
				}
			},
				2000);
		$("#queryLeftTable tr").each(function () {
			$(this).find("td:last a").click(function () {
				esd_focusloginClose;
			})
		})
		$(".login-hd .login-hd-code a").focus(function(){
			$(this).click();
		});
		$(".login-hd .login-hd-code a").keydown(function (e) {
			if (e.shiftKey && e.keyCode == 9) {
				
			}else if (e.keyCode == 9) {
				$(".login-account input:first").focus();
				return false;
			}
		});
        $(".login-account input:first").keydown(function (e) {
			if (e.shiftKey && e.keyCode == 9) {
				$(".login-hd .login-hd-code a").focus();
				return false;
			}
		});
        
        $(".login-account a:last").keydown(function (e) {
			if (e.shiftKey && e.keyCode == 9) {
				
			}else if(e.keyCode == 9){
				$(".login-hd .login-hd-account a").click();
				$(".login-hd .login-hd-account a").focus();
				return false;
			}
		});
        
        $(".login-hd .login-hd-account a").keydown(function (e) {
			if (e.shiftKey && e.keyCode == 9) {
				$(".login-hd .login-hd-code a").click();
                window.esd_checksmdl;
				esd_checksmdl = window.setInterval(function () {
				    if ($("div.login-box > div.login-bd > div.login-account").css("display")=="block") {
				    	clearInterval(esd_checksmdl);
				    	$(".login-account a:last").focus();
				    }
				},100);
				return false;
			}else if (e.keyCode == 9) {
				
			}
});
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
		/* 改造代码结束 */
	})
}

	}, 
 }
}; 
esdDTGZ.init(); 
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
