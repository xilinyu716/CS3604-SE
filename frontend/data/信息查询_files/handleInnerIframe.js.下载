
var innerIframeHandler = {};

innerIframeHandler.init = function(){
	setTimeout(function(){
		setInterval(function(){
			EsdToolbar.targetBody.find("iframe").each(function(){
				if(!jq_t(this).hasClass("esdIframeFlag")){
					try{
						this.contentWindow.document.body;
						jq_t(this).addClass("esdIframeFlag");
						innerIframeHandler.insertScript(this.contentWindow);
					}catch(e){
						//console.log(e);
					}
				}
			});	
		}, 1000);			
	},3000);
	
	//处理框架中iframe刷新按钮导致iframe代码失效
	/*jq_t('.J_tabRefreshActive').click(function(){
	    var activeIf = jq_t('.J_iframe[data-id="' + jq_t('.page-wrapper .page-tabs').find('.J_menuTab.active').data('id') + '"]');
	    if(activeIf.hasClass('esdIframeFlag')){
	        activeIf.removeClass('esdIframeFlag');
	    }
	});*/
};

var firstLoad = 0;

innerIframeHandler.haveIframeFlag = true; //是否有需要处理的iframe标志

innerIframeHandler.handleIframe = function(innerIframe){
	firstLoad++;
	top_iframe = window.document;

//	if(firstLoad==1){ //确保只绑定一次click事件
		jq_t("#toolbar_textMode").click(function(){//文本模式
			innerIframe.ESDWebApp.toolbar.textMode();
		});
		
		jq_t("#toolbar_guides").click(function(){ //光标
			innerIframe.ESDWebApp.toolbar.toolbarGuides();
			jq_t(innerIframe.document).find("#slideLateral").hide();
			jq_t(innerIframe.document).find("#slideLongitudinal").hide();
		});
		
		jq_t("#toolbar_text_bigger").click(function(){  //字体放大
			innerIframe.ESDWebApp.toolbar.changeFontBigger();
		});
		
		jq_t("#toolbar_text_smaller").click(function(){  //字体缩小
			innerIframe.ESDWebApp.toolbar.changeFontSmaller();
		});
		
		
		/*------------------------------对比颜色处理  开始----------------------------------------*/
		//高对比模式1，黑底黄字白链接
		jq_t("#toolbar_colorChange").click(function(){
			innerIframe.ESDWebApp.toolbar.colorChange();
		});
		/*------------------------------对比颜色处理  结束----------------------------------------*/
		//大鼠标
		jq_t("#toolbar_refresh1").click(function(){
			innerIframe.ESDWebApp.cursor.switchOnOff();
		});
		//阅读方式
		jq_t("#toolbar_readChange").click(function(){
			innerIframe.ESDWebApp.speak.readChange();
		});
		
		//放大页面
		jq_t("#toolbar_pageZoomIc").click(function(){
			innerIframe.ESDWebApp.toolbar.pageZoomIc();
		});
		//缩小页面
		jq_t("#toolbar_pageZoomDc").click(function(){
			innerIframe.ESDWebApp.toolbar.pageZoomDc();
		});
		
		
		jq_t("#toolbar_speakOnOff").click(function(){
			innerIframe.ESDWebApp.toolbar.toolbarSpeakOnOff();
		});
		
		jq_t("#toolbar_Pointread").click(function(){
			innerIframe.ESDWebApp.toolbar.toolbarPointread();
		});
		
		jq_t("#toolbar_batchRead").click(function(){
			if (EsdToolbar.statusspeakOnOff == "off") {
				innerIframe.ESDWebApp.toolbar.toolbarBatchRead();
			}
		});
		
		jq_t("#toolbar_magnifier").click(function(){
			innerIframe.ESDWebApp.toolbar.magnifierOpen();
		});
		jq_t(document.body).find("a[title='减缓语速']").click(function(){
			innerIframe.speak.speed(-1);
		});
		jq_t(document.body).find("a[title='加快语速']").click(function(){
			innerIframe.speak.speed(1);
		});
//	}
		
		//iframe载入时需要处理的一些内容
		var h = jq_t(top.document).height();
		//获取当前网址为http:localhost:18080/toolbarmini/wca.html
		//获取当前网址按/切割后的数组：http:,,localhost:18080,toolbarmini,
		var curWwwPathArray=window.document.location.href.split('/');
		jq_t(innerIframe.document.body).find('a:not([href^="javascript"])').click(function() {//href不是以javascript开头的
			if(this.href!=""&&this.href!="undefined"){
				var aHrefArray = this.href.split('/');
				//curWwwPathArray[2]+"/"+curWwwPathArray[3]    localhost:18080/toolbarmini
				if(curWwwPathArray[2]!=aHrefArray[2]){
					jq_t(".overlay").css({"height": h});
					jq_t(".overlay").css({'display':'block','opacity':'0.8'});//开启遮罩层
					jq_t("#zwlj_href").val(this.href);
					jq_t("#zwlj_prompt").show();
					jq_t("#zwlj_bt1").click(function(){
						jq_t(".overlay").css({'display':'none', 'opacity':'0'});//关闭遮罩层
						var outHref = jq_t("#zwlj_href").val();
						window.open(outHref);
						jq_t("#zwlj_prompt").hide();
						jq_t("#zwlj_bt1").unbind("click");
					});
					jq_t("#zwlj_bt2").click(function(){
						jq_t(".overlay").css({'display':'none', 'opacity':'0'});//关闭遮罩层
						jq_t("#zwlj_prompt").hide();
						jq_t("#zwlj_bt1").unbind("click");
					});
					return false;
				}
			}
		});
		//**********************************  处理站外链接结束  *************************************************//
		innerIframe.statuspointread = EsdToolbar.statuspointread;
		innerIframe.statusbatchRead = EsdToolbar.statusbatchRead;
		if(innerIframe.statuspointread=="off"){
			innerIframe.statuspointread = "on";
			innerIframe.ESDWebApp.toolbar.toolbarPointread();
		}
		if(innerIframe.statusbatchRead=="off"){
			innerIframe.statusbatchRead = "on";
			innerIframe.ESDWebApp.toolbar.toolbarBatchRead();
		}
		if(EsdToolbar.storage.getCookie("magnifierIsOn")=="true"){
			innerIframe.ESDWebApp.toolbar.magnifierOpen();
		}
		
		innerIframe.highContrast.pageColor = EsdToolbar.highContrast.pageColor;
		innerIframe.changeFont.fontZoom = EsdToolbar.changeFont.fontZoom;
		innerIframe.pageZoom.zoom = EsdToolbar.pageZoom.zoom;
		innerIframe.readZoom = EsdToolbar.readZoom;
		
		if (EsdToolbar.statusguides == "on") {
			innerIframe.guides.open();
		} /*else if (EsdToolbar.status == "off") {
			innerIframe.status = "on";
			innerIframe.textMode.textMode();
		}*/
		
		if(EsdToolbar.changeFont.fontZoom>1){		
			jq_t(innerIframe.document.body).find(".ESDAssetsTextCon").each(function(){
				jq_t(this).css("font-size",function(index,value){
					var basicPX = parseFloat(value);
					return (basicPX*EsdToolbar.changeFont.fontZoom)+"px";
				});
			});	
		}
		
		if (EsdToolbar.highContrast.pageColor != "") {
			if(EsdToolbar.highContrast.pageColor!="defaltMode"){
				innerIframe.highContrast.changeTheme(EsdToolbar.storage.getCookie("highContrastMode"));
			}
		}
		
		if (EsdToolbar.readZoom != 0) {
			if (EsdToolbar.defalt.browser.mozilla || EsdToolbar.defalt.browser.opera) {
				jq_t(innerIframe.document.body).css({"transform":"scale(" + innerIframe.readZoom + ")","transform-origin":"top"});
			} else {
				jq_t(innerIframe.document.body).css({"zoom":innerIframe.readZoom, "overflow":"scroll"});
			}
			if((EsdToolbar.storage.getCookie("readZoom")*1).toFixed(1)==1.0){
				jq_t(innerIframe.document.body).css("overflow","");
			}
		}
		
		if (innerIframe.statusspeakOnOff == "off") {
			var zdRead = innerIframe.statusbatchRead;
			var sdRead = innerIframe.statuspointread;
			innerIframe.speak.sound.automateSpeakClose();
			innerIframe.speak.sound.closePointSpeak();
			if (zdRead == "off") {
				innerIframe.statusbatchRead="on";
				innerIframe.speak.toolbarBatchRead();
			}else if(sdRead == "off") {
				innerIframe.statuspointread="on";
				innerIframe.ESDWebApp.toolbar.toolbarPointread();
			}
		}
	
};


innerIframeHandler.insertScript = function(innerIframe){
	if(innerIframe.document.getElementById("ESDWebAppInnerIframe")==null){//是否引入需要的js文件
		var url = EsdToolbar.toolbarFileURL+"iframeHandler/";
		var head = innerIframe.document.head;
		//添加 script
		var toolbar = document.createElement("script");
		toolbar.setAttribute("type", "text/javascript");
		toolbar.setAttribute("src", url+"toolbar.js");
		toolbar.setAttribute("charset", "utf-8");
		toolbar.setAttribute("id", "ESDWebAppInnerIframe");
		head.appendChild(toolbar);
		toolbar.onload = function(){
			var head = jq_t(this).parent()[0];
			var jquery = document.createElement("script");
			jquery.setAttribute("type", "text/javascript");
			jquery.setAttribute("src", url+"jquery.js");
			jquery.setAttribute("charset", "utf-8");
			head.appendChild(jquery);
			jquery.onload = function(){
				var head = jq_t(this).parent()[0];
				var config = document.createElement("script");
				config.setAttribute("type", "text/javascript");
				config.setAttribute("src", url+"config.js");
				config.setAttribute("charset", "utf-8");
				head.appendChild(config);
				config.onload = function(){
					var head = jq_t(this).parent()[0];
					var pageRebuild = document.createElement("script");
					pageRebuild.setAttribute("type", "text/javascript");
					pageRebuild.setAttribute("src", url+"pageRebuild.js");
					pageRebuild.setAttribute("charset", "utf-8");
					head.appendChild(pageRebuild);
					pageRebuild.onload = function(){
						var head = jq_t(this).parent()[0];
						var base64 = document.createElement("script");
						base64.setAttribute("type", "text/javascript");
						base64.setAttribute("src", url+"base64.js");
						base64.setAttribute("charset", "utf-8");
						head.appendChild(base64);
						base64.onload = function(){
							var head = jq_t(this).parent()[0];
							var pinyin = document.createElement("script");
							pinyin.setAttribute("type", "text/javascript");
							pinyin.setAttribute("src", url+"pinyin.js");
							pinyin.setAttribute("charset", "utf-8");
							head.appendChild(pinyin);
							pinyin.onload = function(){
								var head = jq_t(this).parent()[0];
								var soundmanager2 = document.createElement("script");
								soundmanager2.setAttribute("type", "text/javascript");
								soundmanager2.setAttribute("src", url+"soundmanager2.js");
								soundmanager2.setAttribute("charset", "utf-8");
								head.appendChild(soundmanager2);
								soundmanager2.onload = function(){
									var head = jq_t(this).parent()[0];
									var storage = document.createElement("script");
									storage.setAttribute("type", "text/javascript");
									storage.setAttribute("src", url+"storage.js");
									storage.setAttribute("charset", "utf-8");
									head.appendChild(storage);
									storage.onload = function(){
										var head = jq_t(this).parent()[0];
										var highContrast = document.createElement("script");
										highContrast.setAttribute("type", "text/javascript");
										highContrast.setAttribute("src", url+"highContrast.js");
										highContrast.setAttribute("charset", "utf-8");
										head.appendChild(highContrast);
										highContrast.onload = function(){
											var head = jq_t(this).parent()[0];
											var changeFont = document.createElement("script");
											changeFont.setAttribute("type", "text/javascript");
											changeFont.setAttribute("src", url+"changeFont.js");
											changeFont.setAttribute("charset", "utf-8");
											head.appendChild(changeFont);
											changeFont.onload = function(){
												var head = jq_t(this).parent()[0];
												var pageZoom = document.createElement("script");
												pageZoom.setAttribute("type", "text/javascript");
												pageZoom.setAttribute("src", url+"pageZoom.js");
												pageZoom.setAttribute("charset", "utf-8");
												head.appendChild(pageZoom);
												pageZoom.onload = function(){
													var head = jq_t(this).parent()[0];
													var textMode = document.createElement("script");
													textMode.setAttribute("type", "text/javascript");
													textMode.setAttribute("src", url+"textMode.js");
													textMode.setAttribute("charset", "utf-8");
													head.appendChild(textMode);
													textMode.onload = function(){
														var head = jq_t(this).parent()[0];
														var speak = document.createElement("script");
														speak.setAttribute("type", "text/javascript");
														speak.setAttribute("src", url+"speak.js");
														speak.setAttribute("charset", "utf-8");
														head.appendChild(speak);
														speak.onload = function(){
															var head = jq_t(this).parent()[0];
															var magnifier = document.createElement("script");
															magnifier.setAttribute("type", "text/javascript");
															magnifier.setAttribute("src", url+"magnifier.js");
															magnifier.setAttribute("charset", "utf-8");
															head.appendChild(magnifier);
															magnifier.onload = function(){
																var head = jq_t(this).parent()[0];
																var guides = document.createElement("script");
																guides.setAttribute("type", "text/javascript");
																guides.setAttribute("src", url+"guides.js");
																guides.setAttribute("charset", "utf-8");
																head.appendChild(guides);
																guides.onload = function(){
																	var head = jq_t(this).parent()[0];
																	var translate = document.createElement("script");
																	translate.setAttribute("type", "text/javascript");
																	translate.setAttribute("src", url+"translate.js");
																	translate.setAttribute("charset", "utf-8");
																	head.appendChild(translate);
																	translate.onload = function(){
																		var head = jq_t(this).parent()[0];
																		var keybinding = document.createElement("script");
																		keybinding.setAttribute("type", "text/javascript");
																		keybinding.setAttribute("src", url+"keybinding.js");
																		keybinding.setAttribute("charset", "utf-8");
																		head.appendChild(keybinding);
																		keybinding.onload = function(){
																			var head = jq_t(this).parent()[0];
																			var dropdown = document.createElement("script");
																			dropdown.setAttribute("type", "text/javascript");
																			dropdown.setAttribute("src", url+"dropdown.js");
																			dropdown.setAttribute("charset", "utf-8");
																			head.appendChild(dropdown);
																			dropdown.onload = function(){
																				var head = jq_t(this).parent()[0];
																				var changeFontShape = document.createElement("script");
																				changeFontShape.setAttribute("type", "text/javascript");
																				changeFontShape.setAttribute("src", url+"changeFontShape.js");
																				changeFontShape.setAttribute("charset", "utf-8");
																				head.appendChild(changeFontShape);
																				changeFontShape.onload = function(){
																					var head = jq_t(this).parent()[0];
																					var handwriting = document.createElement("script");
																					handwriting.setAttribute("type", "text/javascript");
																					handwriting.setAttribute("src", url+"handwriting.js");
																					handwriting.setAttribute("charset", "utf-8");
																					head.appendChild(handwriting);
																					handwriting.onload = function(){
																						var head = jq_t(this).parent()[0];
																						var readAgain = document.createElement("script");
																						readAgain.setAttribute("type", "text/javascript");
																						readAgain.setAttribute("src", url+"readPageAgain.js");
																						readAgain.setAttribute("charset", "utf-8");
																						head.appendChild(readAgain);
																						readAgain.onload = function(){
																							var head = jq_t(this).parent()[0];
																							var init = document.createElement("script");
																							init.setAttribute("type", "text/javascript");
																							init.setAttribute("src", url+"init.js");
																							init.setAttribute("charset", "utf-8");
																							var in_document = jq_t(this).parent().parent().parent()[0];//获取document
																							var in_id = in_document.getElementById("ESDWebAppInnerIframe").getAttribute("class");
																							init.setAttribute("id", in_id);  //用来标记每一个不同iframe的id
																							head.appendChild(init);
																							init.onload = function(){ 
																								innerIframe.ESDWebApp.toolbar.generalInit(in_id);
																								innerIframeHandler.handleIframe(innerIframe);
																							} ;
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};	
								};									
							};								
						};
					};
				};					
			};				
		};
		
	}
	
};
