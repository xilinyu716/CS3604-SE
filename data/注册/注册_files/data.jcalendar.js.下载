(function ($) {
	"use strict";
	var lock = true;
	var html = $('<div class="cal-wrap" style="z-index:30000;display:none;position: absolute;left: 23px;top: 23px; ">'+
			'<div class="cal">'+
		    '<div class="cal-top">'+
		     '<a href="javascript:void(0);" class="first"></a>'+
		      '<a href="javascript:void(0);" class="prev"></a>'+
	          '<div class="month">'+
		      	'<input type="text" value="" readonly="readonly" disabled="disabled"/>'+
		      	'<ul class="time-list">'+
		      		'<li>一月</li><li>二月</li><li>三月</li><li>四月</li><li>五月</li><li>六月</li>'+
		      		'<li>七月</li><li>八月</li><li>九月</li><li>十月</li><li>十一月</li><li>十二月</li>'+
		      	'</ul>'+
		      '</div>'+
		      '<div class="year">'+
		      	'<input type="text" value="" readonly="readonly" disabled="disabled"/>'+
		      	'<div class="time-list">'+
			      	'<ul class="clearfix">'+
			      		'<li>2016</li>'+
			      	'</ul>'+
			      	'<div class="time-list-ft"><a href="javascript:void(0);" class="fl">←</a><a href="javascript:void(0);" class="fr">→</a><a href="javascript:void(0);" class="close">×</a></div>'+
		      	'</div>'+
		      '</div>'+
		      '<a href="javascript:void(0);" class="last"></a>'+
		      '<a href="javascript:void(0);" class="next"></a>'+
		    '</div>'+
		    '<ul class="cal-week">'+
		      '<li><b>日</b></li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li><b>六</b></li>'+
		    '</ul>'+
		    '<div class="cal-cm"></div>'+
		'</div>'+
		'<div class="cal cal-right">'+
		    '<div class="cal-top">'+
		      '<a href="javascript:void(0);" class="last"></a>'+
		      '<a href="javascript:void(0);" class="next"></a>'+
		      '<div class="year">'+
		      	'<input type="text" value="" readonly="readonly" disabled="disabled"/>'+
		      	'<div class="time-list">'+
			      	'<ul class="clearfix">'+
			      		'<li>2016</li>'+
			      	'</ul>'+
			      	'<div class="time-list-ft"><a href="javascript:void(0);" class="fl">←</a><a href="javascript:void(0);" class="fr">→</a><a href="javascript:void(0);" class="close">×</a></div>'+
		      	'</div>'+
		      '</div>'+
		      '<div class="month">'+
		      	'<input type="text" value="" readonly="readonly" disabled="disabled"/>'+
		      	'<ul class="time-list">'+
		      		'<li>一月</li><li>二月</li><li>三月</li><li>四月</li><li>五月</li><li>六月</li>'+
		      		'<li>七月</li><li>八月</li><li>九月</li><li>十月</li><li>十一月</li><li>十二月</li>'+
		      	'</ul>'+
		      '</div>'+
		    '</div>'+
		    '<ul class="cal-week">'+
		      '<li><b>日</b></li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li><b>六</b></li>'+
		    '</ul>'+
		    '<div class="cal-cm"></div>'+
		'</div>'+
		'<div class="cal-ft"><a href="javascript:void(0);" class="cal-btn">今天</a></div>'+
	'</div>');
	var objHtml = $(html);
	$(document.body).append(objHtml);
	var arrayDIV=objHtml.find("div");
	var arrayA=objHtml.find("a");
	var arrayINPUT=objHtml.find("input");
	var arrayUL=objHtml.find("ul");
	
	$.jcalendar = function (el, options) {
		//获取参数
		var base = this;
		base.$el = $(el);
		base.el = el;
		base.options = $.extend({}, $.jcalendar.defaultOptions, options);
		var textId = base.el.selector;
		var calendarView = {
			closeView : base.options.closeCalendar
		};
		var onpicked = base.options.onpicked;
		$(textId)[0].onchange=onpicked;
		var isSingle = base.options.isSingle;
		var showFormat = base.options.showFormat;
		var formatBeforeInfo = base.options.formatBeforeInfo;
		var formatAfterInfo = base.options.formatAfterInfo;
		var startDate = base.options.startDate;
		startDate = startDate ? startDate : '1901-01-01';
		var endDate = base.options.endDate;
		endDate = endDate ? endDate : '2050-12-31';
		startDate = startDate.substring(0,4)+'/'+startDate.substring(5,7)+'/'+startDate.substring(8,10);
		endDate = endDate.substring(0,4)+'/'+endDate.substring(5,7)+'/'+endDate.substring(8,10);
		var isTodayBlock = base.options.isTodayBlock;
		var todayClickColor = base.options.todayClickColor;
		var noClickColor = base.options.noClickColor;
		var restColor = base.options.restColor;
		var noRestColor = base.options.noRestColor;
		var clickByYearMonth = base.options.clickByYearMonth;
		var lunarColor = base.options.lunarColor;
		var isTwoRows = base.options.isTwoRows;
		var isYearMonthDisabled = base.options.isYearMonthDisabled;
		var condition = base.options.condition;
		var isFocus = base.options.isFocus;
		
		
		if('1' == isFocus){
			$(textId).unbind('keydown.cars').bind("keydown.cars", function(e) {
				if (e.keyCode == 9) {
					var dateval = $(textId).val().replace('-','').replace('-','').replace('/','').replace('/','').
					replace('年','').replace('月','').replace('日','');
					var reg= /^([\d]{4}((((0[13578]|1[02])((0[1-9])|([12][0-9])|(3[01])))|(((0[469])|11)((0[1-9])|([12][0-9])|30))|(02((0[1-9])|(1[0-9])|(2[0-8])))))|((((([02468][048])|([13579][26]))00)|([0-9]{2}(([02468][048])|([13579][26]))))(((0[13578]|1[02])((0[1-9])|([12][0-9])|(3[01])))|(((0[469])|11)((0[1-9])|([12][0-9])|30))|(02((0[1-9])|(1[0-9])|(2[0-9]))))){4})$/;
					if(!reg.test(dateval)){
						var bhtml = '<a name="carsdateerror" href="javascript:void(0)" class="esdNavLink esdNavLinkFirst esdHBG ESDAssetsTextCon" tabindex="0" target="_self" style="max-width: 1px !important; float: left !important; border: 0px !important; padding: 0px !important; margin: 0px !important; width: 1px !important; height: 1px !important; overflow: hidden !important; display: block !important; position: absolute !important;">提示：您输入的日期格式不正确,已重置成今天，按TAB键重新输入。</a>'
						var preflag = $(textId).prev() &&  ($(textId).prev().attr('name') == 'carsdateerror');
						if(!preflag){
							$(textId).before(bhtml);
						}
						$('a[name="carsdateerror"]').unbind('blur').bind("blur",function(){
							var opre = $(textId).prev();
							if(opre && opre.attr('name') == 'carsdateerror'){
								$(textId).prev().remove();
							}
						});
						$(textId).val(returnToday());
						try {
							setTimeout(function(){
								$(textId).prev().focus();
							},500);
						} catch (e) {
							
						}
						objHtml.hide();
						return false;
					}else{
						$(textId).val(dateval.substring(0,4) + '-' + dateval.substring(4,6) + '-' + dateval.substring(6,8));
					}
					objHtml.hide();
				}
			});
			return;
		}
		
		function M(C) {
			return document.getElementById(C)
		}
		function R(C) {
			return document.createElement(C)
		}
		
		function drawCalendar(a,b,m,n){
			var i = new U(new Date(a, b, 1));
			var ii = new U(new Date(m, n, 1));
			Q.init(i,0);
			N.draw(1);
			Q.init(ii,1);
			N.draw(0);
			N.resetYM(i,ii);
		}
		function formatInput(date){
			date = formatBeforeInfo?date.replace(formatBeforeInfo,''):date;
			date = formatAfterInfo?date.replace(formatAfterInfo,''):date;
			
			//校验自行输入的问题，若有错误自动修改为今天
			var todayVal = returnToday();
			var dateval = date.replace('-','').replace('-','').replace('/','').replace('/','');
			var reg = "^[0-9]*$";
			if(dateval.match(reg) && dateval.length == 8){
				return dateval.substring(0,4)+'-'+dateval.substring(4,6)+'-'+dateval.substring(6,8);
			}else{
				return todayVal;
			}
			return date;
		}
		
		function returnToday(){
			var seperator = "-";
			var today = new Date();
			var year = today.getFullYear();
			var month = today.getMonth()+1;
			if (month >= 1 && month <= 9) {
	            month = "0" + month;
	        }
			var date = today.getDate();
			if (date >= 0 && date <= 9) {
				date = "0" + date;
	        }
			var yyyyMMdd = year + seperator + month + seperator + date;
			var showVal = showFormat? yyyyMMdd : yyyyMMdd + ' '+dayNames[today.getDay()];
			showVal = formatBeforeInfo? formatBeforeInfo + showVal : showVal ;
			showVal = formatAfterInfo? showVal + formatAfterInfo : showVal ;
			return showVal;
		}
		
		//改变是否可选以及当前日期的样式
		function changeCSSByInput(){
			if(condition[0]&&$(condition[1]).attr("class") == condition[2]){
				changeCSS(objHtml,condition[3],false);
			}
			if(changeIsToday()){
				objHtml[0].children[2].children[0].style.color = noClickColor;
			}else{
				objHtml[0].children[2].children[0].style.color = '#297405';
			}
			chooseInputDate(objHtml,$(textId).val())
		}
		//判断今天是否可点击
		function changeIsToday(){
			var sDate = new Date(startDate);
			var eDate = new Date(endDate);
			var now = new Date();
			var today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
			return today>eDate||today<sDate;
		}
		
		function changeCSS(a,b,c){
			b = formatInput(b);
			var year = a[0].children[0].children[0].children[3].children[0].value;
			var month = changeMonth(a[0].children[0].children[0].children[2].children[0].value);
			var arrayDate0 = a[0].children[0].children[2].children;
			var arrayDate1 = a[0].children[1].children[2].children;
			for(var k in arrayDate0){
				if(arrayDate0[k].children){
					var day = arrayDate0[k].children[0].numHTML;
					var date = new Date(year,month-1,day);
					var dateInput = new Date(b.substring(0,4),b.substring(5,7)-1,b.substring(8,10));
					var flag = c ? date<dateInput : date>dateInput;
					if(flag){
						arrayDate0[k].children[0].style.color = noClickColor;
						if(isTwoRows=='2'){
							arrayDate0[k].children[1].style.color = noClickColor;
						}
						arrayDate0[k].onclick = null;
						arrayDate0[k].style.cursor= 'auto';
					}
				}
				
			}
			for(var k in arrayDate1){
				if(arrayDate1[k].children){
					var day = arrayDate1[k].children[0].numHTML;
					var date = new Date(year,month,day);
					var dateInput = new Date(b.substring(0,4),b.substring(5,7)-1,b.substring(8,10));
					var flag = c ? date<dateInput : date>dateInput;
					if(flag){
						arrayDate1[k].children[0].style.color = noClickColor;
						if(isTwoRows=='2'){
							arrayDate0[k].children[1].style.color = noClickColor;
						}
						arrayDate1[k].onclick = null;
						arrayDate1[k].style.cursor= 'auto';
					}
				}
				
			}
		};
		function chooseInputDate(a,b){
			b = formatInput(b);
			if(b&&b.length>=10){
				b = b.substring(0,10);
				//根据input日期改变样式
				var year = a[0].children[0].children[0].children[3].children[0].value;
				var month = changeMonth(a[0].children[0].children[0].children[2].children[0].value);
				var arrayDate0 = a[0].children[0].children[2].children;
				var arrayDate1 = a[0].children[1].children[2].children;
				for(var k in arrayDate0){
					if(arrayDate0[k].children){
						var day = arrayDate0[k].children[0].numHTML;
						var date = new Date(year,month-1,day);
						var dateInput = new Date(b.substring(0,4),b.substring(5,7)-1,b.substring(8,10));
						if(date.getTime() ==dateInput.getTime() ){
							arrayDate0[k].style.border = "1px solid #a5b9da";
							arrayDate0[k].style.background = todayClickColor;
						}else{
							arrayDate0[k].style.border = "";
							arrayDate0[k].style.background = "";
						}
					}
					
				}
				for(var k in arrayDate1){
					if(arrayDate1[k].children){
						var day = arrayDate1[k].children[0].numHTML;
						var date = new Date(year,month,day);
						var dateInput = new Date(b.substring(0,4),b.substring(5,7)-1,b.substring(8,10));
						if(date.getTime() ==dateInput.getTime() ){
							arrayDate1[k].style.border = "1px solid #a5b9da";
							arrayDate1[k].style.background = todayClickColor;
						}else{
							arrayDate1[k].style.border = "";
							arrayDate1[k].style.background = "";
						}
					}
					
				}
			}
		};
		
		document.onclick = function(e){
			if(!lock){
				objHtml.hide();
				calendarView.closeView();
			}
		}
		function showCalendar(){
			arrayDIV[4].style.display = 'none';
			lock = true;
			var calendarWidth = isSingle ? 261 : 522;
			var body_width = document.body.clientWidth-calendarWidth-10;
			var top = $(textId).offset().top;
			var left = $(textId).offset().left;
			left = left >= body_width ?body_width :left
			var height = $(textId).innerHeight();
			objHtml.css("left", left);
			objHtml.css("top", top + height);
			var inputValue = formatInput($(textId).val());
			if(inputValue&&inputValue.length>4&&inputValue.substring(0,4)>1900&&inputValue.substring(0,4)<2051){
				drawCalendar(inputValue.substring(0,4),inputValue.substring(5,7)-1,inputValue.substring(0,4),inputValue.substring(5,7));
			}
			changeCSSByInput();
			objHtml.show();
		}
		
		$(textId).mouseout(function() {
			lock = false;
		});
		$(textId).mouseover(function() {
			lock = true;
		});
		
		$(textId).off('change').on('change', function () {
			//var dateval = formatInput($(textId).val());
			//$(textId).val(dateval);
	      });
		objHtml.mouseover(function() {
			$(textId).unbind("blur");
		});
		objHtml.click(function(e) {
			e.stopPropagation();
			lock = false;
		});
		objHtml.mouseout(function() {
			$(textId).unbind('blur').bind("blur",function(){
				objHtml.hide();
			});
		});
		
		//点击今天
		arrayDIV[14].onclick = function(){
			if(!changeIsToday()){
				var showVal = returnToday();
				$(textId).val(showVal);
				$(textId).change();
				objHtml.hide();
			}
		};
		
		function changeMonth(a){
			if(a=='一月'){return 1}
			if(a=='二月'){return 2}
			if(a=='三月'){return 3}
			if(a=='四月'){return 4}
			if(a=='五月'){return 5}
			if(a=='六月'){return 6}
			if(a=='七月'){return 7}
			if(a=='八月'){return 8}
			if(a=='九月'){return 9}
			if(a=='十月'){return 10}
			if(a=='十一月'){return 11}
			if(a=='十二月'){return 12}
			return a;
		}
		//点击'<';'<<';'>>';'>'
		arrayA[0].onclick = function(){
			var a = arrayINPUT[1].value;
			var b = changeMonth(arrayINPUT[0].value);
			var wdate = new Date(a - 1, b, 1);
			var cdt = new Date(wdate.getTime()-1000*60*60*24); 
			var newDate = new Date(cdt.getFullYear(),Number(cdt.getMonth()),cdt.getDate());
			if(newDate>=new Date(startDate)){
				drawCalendar(a - 1,b - 1,a - 1,b)
			}else{
				var wdate = new Date(startDate);
				drawCalendar(wdate.getFullYear(),wdate.getMonth(),wdate.getFullYear(),wdate.getMonth()+1)
			}
			changeCSSByInput();
		};
		arrayA[1].onclick = function(){
			var a = arrayINPUT[1].value;
			var b = changeMonth(arrayINPUT[0].value);
			var wdate = new Date(a, b - 1, 1);
			var cdt = new Date(wdate.getTime()-1000*60*60*24); 
			var newDate = new Date(cdt.getFullYear(),Number(cdt.getMonth()),cdt.getDate());
			if(newDate>=new Date(startDate)){
				drawCalendar(a,b - 2,a,b - 1)
			}
			changeCSSByInput();
		};
		arrayA[6].onclick = function(){
			var a = arrayINPUT[1].value;
			var b = changeMonth(arrayINPUT[0].value);
			if(!(a==endDate.substring(0,4)&&b==endDate.substring(5,7))){
				drawCalendar(a,b,a,Number(b)+1)
			}
			changeCSSByInput();
		};
		arrayA[5].onclick = function(){
			var a = arrayINPUT[1].value;
			var b = changeMonth(arrayINPUT[0].value);
			if(a<endDate.substring(0,4)){
				drawCalendar(Number(a) + 1,b - 1,Number(a) + 1,b)
			}else{
				var wdate = new Date(endDate);
				drawCalendar(wdate.getFullYear(),wdate.getMonth(),wdate.getFullYear(),wdate.getMonth()+1)
			}
			changeCSSByInput();
		};
		arrayA[8].onclick = function(){
			var a = arrayINPUT[2].value;
			var b = changeMonth(arrayINPUT[3].value);
			var wdate = new Date(a,b - 1,1)
			if(wdate<=new Date(endDate)){
				drawCalendar(a, b - 1,a,b)
			}
			changeCSSByInput();
		};
		arrayA[7].onclick = function(){
			var a = arrayINPUT[1].value;
			var b = changeMonth(arrayINPUT[0].value);
			if(a<endDate.substring(0,4)){
				drawCalendar(Number(a) + 1,b-1,Number(a) + 1,b)
			}else{
				var wdate = new Date(endDate);
				drawCalendar(wdate.getFullYear(), wdate.getMonth(),wdate.getFullYear(), wdate.getMonth()+1)
			}
			changeCSSByInput();
		};
		
		//改变月份选择框样式
		function resetmonthUL(a){
			var arrayMonth = arrayUL[a].children;
			for(var k in arrayMonth){
				if(arrayMonth[k].innerHTML){
					var year = a==0? arrayINPUT[1].value:arrayINPUT[2].value;
					var month = changeMonth(arrayMonth[k].innerHTML);
					var startYear = startDate.substring(0,4);
					var startMonth = Number(startDate.substring(5,7));
					var endYear = endDate.substring(0,4);
					var endMonth = Number(endDate.substring(5,7));
					if((year<startYear||year>endYear)||(year==startYear&&month<startMonth)||(year==endYear&&month>endMonth)){
						arrayMonth[k].style.color = noClickColor;
						arrayMonth[k].style.cursor = 'auto';
					}else{
						arrayMonth[k].style.color = clickByYearMonth;
						arrayMonth[k].style.cursor = 'pointer';
					}
				}
			}
		}
		
		//拼年份选择框
		function resetyearUL(a,b){
			arrayUL[a].innerHTML = '';
			var htmlyear = '';
			for(var y = b-5;y<=b+4;y++){
				if(y<startDate.substring(0,4)||y>endDate.substring(0,4)){
					htmlyear += '<li style="color: ' + noClickColor + ';cursor:auto;">'+y+'</li>';
				}else{
					htmlyear += '<li style="color: ' + clickByYearMonth + ';cursor:pointer;">'+y+'</li>';
				}
				
			}
			arrayUL[a].innerHTML = htmlyear;
			var entity = a==1?arrayDIV[5] : arrayDIV[11];
			if(Number(arrayUL[a].children[0].innerHTML)-1<startDate.substring(0,4)){
				entity.children[0].style.color = noClickColor;
				entity.children[0].style.cursor = 'auto';
			}else{
				entity.children[0].style.color = clickByYearMonth;
				entity.children[0].style.cursor = 'pointer';
			}
			if(Number(arrayUL[a].children[9].innerHTML)+1>endDate.substring(0,4)){
				entity.children[1].style.color = noClickColor;
				entity.children[1].style.cursor = 'auto';
			}else{
				entity.children[1].style.color = clickByYearMonth;
				entity.children[1].style.cursor = 'pointer';
			}
	
			if(a==3){
				var array12 = arrayUL[3].parentElement.getElementsByTagName("li");
			}else if(a==1){
				var array12 = arrayDIV[4].getElementsByTagName("li");
			}
			for(var i=0;i<array12.length;i++){
				if(!(array12[i].innerHTML<startDate.substring(0,4)||array12[i].innerHTML>endDate.substring(0,4))){
					array12[i].onclick=function(){
						var aa = this.innerHTML;
						var b = a==3?changeMonth(arrayINPUT[3].value)+'':changeMonth(arrayINPUT[0].value)+'';
						b = b.length==1?'0'+b:b;
						if(a==3){
							drawCalendar(aa, b - 2,aa, b - 1)
							arrayUL[3].parentElement.style.display = 'none';
						}else if(a==1){
							drawCalendar(aa, b - 1,aa, b)
							arrayDIV[4].style.display = 'none';
						}
						changeCSSByInput();
					}
				}else{
					array12[i].onclick=function(){
						arrayDIV[4].style.display = 'none';
						arrayDIV[10].style.display = 'none';
					}
				}
			}
		}
		
		//点击事件结束
		var reChangeMonth = new Array("","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月","一月"); 
		var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六"); 
		var S = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera;
		var P = [ 19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632,
				21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450,
				38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104,
				38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104,
				100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956,
				9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872,
				42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296,
				43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925,
				19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320,
				18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256,
				19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613,
				37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680,
				37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416,
				86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726,
				42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152,
				42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864,
				42359, 42160, 43600, 111189, 27936, 44448 ];
		var L = [ "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种",
				"夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪",
				"大雪", "冬至" ];
		var D = [ 0, 21208, 43467, 63836, 85337, 107014, 128867, 150921, 173149,
				195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350,
				375494, 397447, 419210, 440795, 462224, 483532, 504758 ];
		var B = "日一二三四五六七八九十";
		var H = [ "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊" ];
		var E = "初十廿卅";
		var V = {
			"0101" : "*1元旦",
			"0501" : "*1劳动",
			"1001" : "*7国庆"
		};
		var T = {
			"0101" : "*6春节",
			"0115" : "*1元宵",
			"0505" : "*1端午",
			"0815" : "*1中秋",
			"0100" : "除夕"
		};
		//日历中的日期对象
		function U(Y) {
			function c(j, i) {
				var h = new Date((31556925974.7 * (j - 1900) + D[i] * 60000)
						+ Date.UTC(1900, 0, 6, 2, 5));
				return (h.getUTCDate())
			}
			function d(k) {
				var h, j = 348;
				for (h = 32768; h > 8; h >>= 1) {
					j += (P[k - 1900] & h) ? 1 : 0
				}
				return (j + b(k))
			}
			function b(h) {
				if (g(h)) {
					return ((P[h - 1900] & 65536) ? 30 : 29)
				} else {
					return (0)
				}
			}
			function g(h) {
				return (P[h - 1900] & 15)
			}
			function e(i, h) {
				return ((P[i - 1900] & (65536 >> h)) ? 30 : 29)
			}
			function C(m) {
				var k, j = 0, h = 0;
				var l = new Date(1900, 0, 31);
				var n = (m - l) / 86400000;
				this.dayCyl = n + 40;
				this.monCyl = 14;
				for (k = 1900; k < 2050 && n > 0; k++) {
					h = d(k);
					n -= h;
					this.monCyl += 12
				}
				if (n < 0) {
					n += h;
					k--;
					this.monCyl -= 12
				}
				this.year = k;
				this.yearCyl = k - 1864;
				j = g(k);
				this.isLeap = false;
				for (k = 1; k < 13 && n > 0; k++) {
					if (j > 0 && k == (j + 1) && this.isLeap == false) {
						--k;
						this.isLeap = true;
						h = b(this.year)
					} else {
						h = e(this.year, k)
					}
					if (this.isLeap == true && k == (j + 1)) {
						this.isLeap = false
					}
					n -= h;
					if (this.isLeap == false) {
						this.monCyl++
					}
				}
				if (n == 0 && j > 0 && k == j + 1) {
					if (this.isLeap) {
						this.isLeap = false
					} else {
						this.isLeap = true;
						--k;
						--this.monCyl
					}
				}
				if (n < 0) {
					n += h;
					--k;
					--this.monCyl
				}
				this.month = k;
				this.day = n + 1
			}
			function G(h) {
				return h < 10 ? "0" + h : h
			}
			function f(i, j) {
				var h = i;
				return j.replace(/dd?d?d?|MM?M?M?|yy?y?y?/g, function(k) {
					switch (k) {
					case "yyyy":
						var l = "000" + h.getFullYear();
						return l.substring(l.length - 4);
					case "dd":
						return G(h.getDate());
					case "d":
						return h.getDate().toString().length==1?'0'+h.getDate().toString():h.getDate().toString();
					case "MM":
						return G((h.getMonth() + 1));
					case "M":
						return (h.getMonth() + 1).toString().length==1?'0'+(h.getMonth() + 1).toString():(h.getMonth() + 1).toString();
					}
				})
			}
			function Z(i, h) {
				var j;
				switch (i, h) {
				case 10:
					j = "初十";
					break;
				case 20:
					j = "二十";
					break;
				case 30:
					j = "三十";
					break;
				default:
					j = E.charAt(Math.floor(h / 10));
					j += B.charAt(h % 10)
				}
				return (j)
			}
			this.date = Y;
			this.isToday = false;
			this.isRestDay = false;
			this.solarYear = f(Y, "yyyy");
			this.solarMonth = f(Y, "MM");
			this.solarDate = f(Y, "dd");
			this.calendarDate = new Date(this.solarYear,this.solarMonth-1,this.solarDate);
			this.solarWeekDay = Y.getDay();
			this.solarWeekDayInChinese = "星期" + B.charAt(this.solarWeekDay);
			var X = new C(Y);
			this.lunarYear = X.year;
			this.lunarMonth = X.month;
			this.lunarIsLeapMonth = X.isLeap;
			this.lunarMonthInChinese = this.lunarIsLeapMonth ? "闰" + H[X.month - 1]
					: H[X.month - 1];
			this.lunarDate = X.day;
			this.showInLunar = this.lunarDateInChinese = Z(this.lunarMonth,
					this.lunarDate);
			if (this.lunarDate == 1) {
				this.showInLunar = this.lunarMonthInChinese + "月"
			}
			this.jieqi = "";
			this.restDays = 0;
			if (c(this.solarYear, (this.solarMonth - 1) * 2) == f(Y, "d")) {
				this.showInLunar = this.jieqi = L[(this.solarMonth - 1) * 2]
			}
			if (c(this.solarYear, (this.solarMonth - 1) * 2 + 1) == f(Y, "d")) {
				this.showInLunar = this.jieqi = L[(this.solarMonth - 1) * 2 + 1]
			}
			if (this.showInLunar == "清明") {
				this.showInLunar = "清明";
				this.restDays = 1
			}
			this.solarFestival = V[f(Y, "MM") + f(Y, "dd")];
			if (typeof this.solarFestival == "undefined") {
				this.solarFestival = ""
			} else {
				if (/\*(\d)/.test(this.solarFestival)) {
					this.restDays = parseInt(RegExp.$1);
					this.solarFestival = this.solarFestival.replace(/\*\d/, "")
				}
			}
			this.showInLunar = (this.solarFestival == "") ? this.showInLunar
					: this.solarFestival;
			this.lunarFestival = T[this.lunarIsLeapMonth ? "00"
					: G(this.lunarMonth) + G(this.lunarDate)];
			if (typeof this.lunarFestival == "undefined") {
				this.lunarFestival = ""
			} else {
				if (/\*(\d)/.test(this.lunarFestival)) {
					this.restDays = (this.restDays > parseInt(RegExp.$1)) ? this.restDays
							: parseInt(RegExp.$1);
					this.lunarFestival = this.lunarFestival.replace(/\*\d/, "")
				}
			}
			if (this.lunarMonth == 12 && this.lunarDate == e(this.lunarYear, 12)) {
				this.lunarFestival = T["0100"];
				this.restDays = 1
			}
			this.showInLunar = (this.lunarFestival == "") ? this.showInLunar
					: this.lunarFestival;
			this.showInLunar = (this.showInLunar.length > 4) ? this.showInLunar
					.substr(0, 2)
					+ "..." : this.showInLunar
			if (this.showInLunar == "清明") {
				this.solarFestival = "清明";
			}
		}
		//一个月的日期数据
		var Q = (function() {
			var X = {};
			X.lines = 0;
			X.dateArray = new Array(42);
			function Y(a) {
				return (((a % 4 === 0) && (a % 100 !== 0)) || (a % 400 === 0))
			}
			function G(a, b) {
				return [ 31, (Y(a) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30,
						31 ][b]
			}
			function C(a, b) {
				a.setDate(a.getDate() + b);
				return a
			}
			function Z(a,b) {
				var twoMonthBefore =a.solarMonth - 2;
				if(a.solarMonth==0){
					twoMonthBefore = 11;
				}else if(a.solarMonth==1){
					twoMonthBefore = 10;
				}
				var lastc = new U(new Date(a.solarYear, twoMonthBefore, 1));
				var lastd = lastc.solarWeekDay;
				var nextc = new U(new Date(a.solarYear, a.solarMonth, 1));
				var nextd = nextc.solarWeekDay;
				var f = 0;
				var c = new U(new Date(a.solarYear, a.solarMonth - 1, 1));
				var d = c.solarWeekDay;
				if(isSingle){
					X.lines = Math.ceil((d + G(a.solarYear, a.solarMonth - 1)) / 7);
				}else{
					if(b==0){
						var leftrow = Math.ceil((d + G(a.solarYear, a.solarMonth - 1)) / 7);
						var rigthrow = Math.ceil((nextd + G(a.solarYear, Number(a.solarMonth)==12?0:Number(a.solarMonth))) / 7);
						X.lines = leftrow > rigthrow ? leftrow : rigthrow;
					}else if(b==1){
						var leftrow = Math.ceil((d + G(a.solarYear, a.solarMonth - 1)) / 7);
						var rigthrow = Math.ceil((lastd + G(a.solarYear, twoMonthBefore)) / 7);
						X.lines = leftrow > rigthrow ? leftrow : rigthrow;
					}else{
						X.lines = 6 ;
					}
				}
				for ( var e = 0; e < X.dateArray.length; e++) {
					if (c.restDays != 0) {
						f = c.restDays
					}
					if (f > 0) {
						c.isRest = true
					}
					if (d-- > 0 || c.solarMonth != a.solarMonth) {
						X.dateArray[e] = null;
						continue
					}
					var b = new U(new Date());
					if (c.solarYear == b.solarYear && c.solarMonth == b.solarMonth
							&& c.solarDate == b.solarDate) {
						c.isToday = true
					}
					X.dateArray[e] = c;
					c = new U(C(c.date, 1));
					f--
				}
			}
			return {
				init : function(a,b) {
					Z(a,b)
				},
				getJson : function() {
					return X
				}
			}
		})();
		//画日历
		var N = (function() {
			function C(wb) {
				var divNum = wb == 1? arrayDIV[6] : arrayDIV[13];
				var Z = Q.getJson();
				var c = Z.dateArray;
				var divHeight = isTwoRows=='2' ? 38 : 22;
				divNum.style.height = Z.lines * divHeight + 2 + "px";
				divNum.innerHTML = "";
				for ( var a = 0; a < c.length; a++) {
					if (c[a] == null) {
						continue
					}
					var yyyyMMdd = c[a].solarYear + '-' + c[a].solarMonth + '-' + c[a].solarDate;
					var showVal = showFormat? yyyyMMdd : yyyyMMdd + ' '+c[a].solarWeekDayInChinese;
					showVal = formatBeforeInfo? formatBeforeInfo + showVal : showVal ;
					showVal = formatAfterInfo? showVal + formatAfterInfo : showVal ;
					var X = R("DIV");
					if (c[a].isToday) {
						X.style.border = "1px solid #a5b9da";
						X.style.background = todayClickColor;
					}
					X.className = "cell";
					if(isTwoRows=='2'){
						X.style.height = '36px';
					}
					X.style.left = a % 7 ==0?"0px":(a % 7) * 36+ 3 + "px";
					X.style.top = Math.floor(a / 7) * divHeight + 5 + "px";
					if(c[a].calendarDate>=new Date(startDate)&&c[a].calendarDate<=new Date(endDate)){
						X.onclick = (function(d){
							return function(){
								$(textId).val(d);
								objHtml.hide();
								$(textId).change();
							}
						} )(showVal);
						X.style.cursor = 'pointer';
					}
					var b = R("DIV");
					b.className = "so";
					b.style.color = ((a % 7) == 0 ||(a % 7) == 6 || c[a].isRest || c[a].isToday) ? restColor
							: noRestColor;
					if (!(c[a].calendarDate>=new Date(startDate)&&c[a].calendarDate<=new Date(endDate))) {
						b.style.color = noClickColor;
					}
					if(isTwoRows=='3'){
						if(c[a].solarFestival){
							b.innerHTML = c[a].solarFestival;
						}else if(c[a].lunarFestival){
							b.innerHTML = c[a].lunarFestival;
						}else if(c[a].isToday){
							b.innerHTML = '今天';
						}else{
							b.innerHTML = c[a].solarDate.substring(0,1)=='0'?c[a].solarDate.substring(1):c[a].solarDate;
						}
						b.numHTML = c[a].solarDate.substring(0,1)=='0'?c[a].solarDate.substring(1):c[a].solarDate;
					}else{
						b.innerHTML = c[a].solarDate.substring(0,1)=='0'?c[a].solarDate.substring(1):c[a].solarDate;
						b.numHTML = c[a].solarDate.substring(0,1)=='0'?c[a].solarDate.substring(1):c[a].solarDate;
					}
					X.appendChild(b);
					if(isTwoRows=='2'){
						var Y = R("DIV");
						if (!(c[a].calendarDate>=new Date(startDate)&&c[a].calendarDate<=new Date(endDate))) {
								Y.style.color = noClickColor;
							}else{
								Y.style.color = lunarColor;
							}
						Y.innerHTML = c[a].showInLunar;
						X.appendChild(Y);
					}
					divNum.appendChild(X)
				}
			}
			return {
				draw : function(G) {
					if(G==0){
						C(G);
					}else if(G==1){
						C(1);
					}else{
						C(G);
						C(1);
					}
				},
				resetYM : function(i,ii) {
					arrayINPUT[0].value = reChangeMonth[Number(i.solarMonth)];
					arrayINPUT[1].value = i.solarYear;
					arrayINPUT[2].value = ii.solarYear;
					arrayINPUT[3].value = reChangeMonth[Number(ii.solarMonth)];
				}
			}
		})();
		var A = new U(new Date());
		Q.init(A,0);
		N.draw(1);
		if(!isSingle){
			arrayA[6].style.display = 'none';
			arrayA[5].style.display = 'none';
			var now = new Date();
			var AA = new U(new Date(now.getFullYear(),now.getMonth()+1,now.getDate()));
			Q.init(AA,1);
			N.draw(0);
		}else{
			objHtml[0].className='cal-wrap cal-one';
		}
		
		if(!isTodayBlock){
			arrayDIV[14].style.display = 'none';
		}
		//弹出年份月份选择框需要的js
		if(isYearMonthDisabled){
			//点击年份中的箭头和×
			arrayA[2].onclick = function(){
				if(arrayUL[1].getElementsByTagName("li")[0].innerHTML<1902||this.style.cursor == 'auto'){
					arrayDIV[4].style.display = 'none';
					return;
				}
				resetyearUL(1,arrayUL[1].getElementsByTagName("li")[0].innerHTML-5);
			}
			arrayA[3].onclick = function(){
				if(arrayUL[1].getElementsByTagName("li")[0].innerHTML>2040||this.style.cursor == 'auto'){
					arrayDIV[4].style.display = 'none';
					return;
				}
				resetyearUL(1,Number(arrayUL[1].getElementsByTagName("li")[0].innerHTML)+15);
			}
			arrayA[4].onclick = function(){
				arrayUL[1].parentElement.style.display = 'none';
			}
			arrayA[9].onclick = function(){
				if(arrayUL[3].getElementsByTagName("li")[0].innerHTML<1902||this.style.cursor == 'auto'){
					arrayDIV[10].style.display = 'none';
					return;
				}
				resetyearUL(3,arrayUL[3].getElementsByTagName("li")[0].innerHTML-5);
			}
			arrayA[10].onclick = function(){
				if(arrayUL[3].getElementsByTagName("li")[0].innerHTML>2040||this.style.cursor == 'auto'){
					arrayDIV[10].style.display = 'none';
					return;
				}
				resetyearUL(3,Number(arrayUL[3].getElementsByTagName("li")[0].innerHTML)+15);
			}
			arrayA[11].onclick = function(){
				arrayUL[3].parentElement.style.display = 'none';
			}
			
			//点击年份和月份//第一个日历
			arrayINPUT[0].onfocus = function(){
				arrayUL[0].style.display = 'block';
				resetmonthUL(0);
				arrayDIV[4].style.display = 'none';
			};
			arrayINPUT[0].onblur = function(){
				arrayUL[0].style.display = 'none';
			};
			var array0ulli = arrayUL[0].getElementsByTagName("li");
			for(var i=0;i<array0ulli.length;i++){
				array0ulli[i].onclick=function(){
					if(this.style.cursor == 'auto'){
						arrayUL[0].style.display = 'none';
						arrayUL[4].style.display = 'none';
						return;
					}
					var a = arrayINPUT[1].value;
					var b = changeMonth(this.innerHTML)+'';
					b = b.length==1?'0'+b:b;
					drawCalendar(a, b - 1,a, b)
					arrayUL[0].style.display = 'none';
					changeCSSByInput();
				}
			}
			resetmonthUL(0);
			arrayINPUT[1].onfocus = function(){
				resetyearUL(1,Number(arrayINPUT[1].value));
				arrayDIV[4].style.display = 'block';
			};
			arrayINPUT[1].onblur = function(){
				arrayDIV[4].style.display = 'none';
			};
			
			arrayDIV[4].onmouseover = function(){
				arrayINPUT[1].onblur= function(){}
			};
			arrayDIV[4].onmouseout = function(){
				arrayINPUT[1].onblur= function(){
					arrayDIV[4].style.display = 'none';
				}
			};
			arrayUL[0].onmouseover = function(){
				arrayINPUT[0].onblur= function(){}
			};
			arrayUL[0].onmouseout = function(){
				arrayINPUT[0].onblur= function(){
					arrayUL[0].style.display = 'none';
				}
			};
			//第二个日历
			arrayINPUT[3].onfocus = function(){
				resetmonthUL(4);
				arrayUL[4].style.display = 'block';
				arrayDIV[10].style.display = 'none';
			};
			arrayINPUT[3].onblur = function(){
				arrayUL[4].style.display = 'none';
			};
			var array4ulli = arrayUL[4].getElementsByTagName("li");
			for(var i=0;i<array4ulli.length;i++){
				array4ulli[i].onclick=function(){
					if(this.style.cursor == 'auto'){
						arrayUL[0].style.display = 'none';
						arrayUL[4].style.display = 'none';
						return;
					}
					var a = arrayINPUT[2].value;
					var b = changeMonth(this.innerHTML)+'';
					b = b.length==1?'0'+b:b;
					drawCalendar(a, b - 2,a, b - 1)
					arrayUL[4].style.display = 'none';
					changeCSSByInput();
				}
			}
			resetmonthUL(4);
			arrayINPUT[2].onfocus = function(){
				resetyearUL(3,Number(arrayINPUT[2].value));
				arrayDIV[10].style.display = 'block';
			};
			arrayINPUT[2].onblur = function(){
				arrayDIV[10].style.display = 'none';
			};
			
			arrayDIV[10].onmouseover = function(){
				arrayINPUT[2].onblur= function(){}
			};
			arrayDIV[10].onmouseout = function(){
				arrayINPUT[2].onblur= function(){
					arrayDIV[10].style.display = 'none';
				}
			};
			arrayUL[4].onmouseover = function(){
				arrayINPUT[3].onblur= function(){}
			};
			arrayUL[4].onmouseout = function(){
				arrayINPUT[3].onblur= function(){
					arrayUL[4].style.display = 'none';
				}
			};
			
			for(var i = 0 ; i < 4 ; i++){
				arrayINPUT[i].disabled=false;
				arrayINPUT[i].style.cursor='pointer';
			}
		}
		var nowYM = new Date();
		arrayINPUT[0].value = reChangeMonth[nowYM.getMonth()+1];
		arrayINPUT[1].value = nowYM.getFullYear();
		arrayINPUT[2].value = nowYM.getMonth()==11?nowYM.getFullYear()+1:nowYM.getFullYear();
		arrayINPUT[3].value = reChangeMonth[nowYM.getMonth()+2]; 
		showCalendar();
	};

	$.jcalendar.defaultOptions = {
		isSingle : true,  //true单日历；false双日历
		showFormat : true, //true yyyy-mm-dd  false yyyy-mm-dd DD
		formatBeforeInfo : '', //日期前缀
		formatAfterInfo : '', //日期后缀
		startDate : '1901-01-01',  //最小可选日期
		endDate : '2050-12-31',  //最大可选日期
		isTwoRows : '3',  //1为普通数字日历；2为带农历日历；3为节日替换数字日历
		isTodayBlock : true , //今天按钮是否显示
		isYearMonthDisabled : true, //年份和月份是否展示选择框
		condition : [false, '#query_H', 'active', '2050-12-31'], //针对特定条件改变样式的参数
		restColor : '#c60b02' , //休息日日期颜色
		noRestColor : '#313131' , //上班日日期颜色
		todayClickColor : '#c1d9ff' ,  //选中日期的背景颜色
		noClickColor : '#aaa' ,  //不可点击时的字体颜色
		clickByYearMonth : '#003784', //月份年份可点击时颜色
		lunarColor : '#666', //农历一行字体颜色
		isFocus : '0', //focus or click
		closeCalendar : function(){},//关闭日历后的回调函数
		onpicked : function(){}  //点击日期后的回调函数
	};

	$.fn.jcalendar = function () {
	   var args = Array.prototype.slice.call(arguments);
	   return (new $.jcalendar(this, args[0]));
	};

})(jQuery);
