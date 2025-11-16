/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*
 * 头部
 */
define('g/g-header',['jquery'], function ($) {
	function headerFn() {
		// IE8、IE9跨域
        jQuery.support.cors = true;
		//顶部搜索条显示  从这里开始进行搜索功能
		var common_search_cookieArray = [];
		var common_search_arrayHistory = [];
		var common_search_searchhistory;
		var common_search_recordCookie;
		var common_search_flag = true;
		var common_search_noresults;
		function stringconnect(array) {
			if(array[0].indexOf(array[1]) > -1) {
				array[0] = array[0].replace(array[1],'<span style="color:red;">'+ array[1] + '</span>');
			}
			var ico = array[2];
			array[4] +=
			'<li url=' + array[3] + '>' +
			'<i class="icon icon-' + ico + ' "> ' +
			'</i>' +
			array[0] +
			'<span class="list-txt">'+
			'</span>'+
			'</li>';
			resList = array[4];
			return resList;
		}

		$('.header-search .search-input').on('focus', function () {
			common_search_flag = true;
			common_search_beforeValue.splice(0,common_search_beforeValue.length);//清空数组
			$(this).addClass('focus');
			$(".search-btn").css({
				"background": "#2676E3"
			});
			$('.search-down').fadeOut();
			$(".search-input").val("");
			if($('.search-input').val() == '') {//改善下标聚焦
				common_search_pageIndex = 0;
			}
			if(search_cookie_get("searchHistory")) {//cookie方式
				//换成自己写的cookie开始---->
				common_search_searchhistory = JSON.parse(search_cookie_get("searchHistory"));
				//------------>结束
				common_search_arrayHistory = common_search_searchhistory;
				common_search_cookieArray = common_search_arrayHistory;//如果有cookie历史记录防止被初始化
				if(common_search_arrayHistory.length != 0){
						var historylist = "";
						for(var i = 0;i <= common_search_arrayHistory.length - 1;i++) {
							historylist += '<li url='+ common_search_arrayHistory[i].url +'>' + common_search_arrayHistory[i].innerText + '</li>';
						}
						$(".search-history-list").html(historylist);
						$('.search-history').fadeIn();
					}else{
						$('.search-history').fadeOut();
					}

			}else{
				if(common_search_arrayHistory != "") {
					$('.search-history').fadeIn();
				}else{
					$('.search-history').fadeOut();
				}
			}
			//点击搜索按钮功能
			$(".search-btn")[0].onclick = function () {
				var emptyVal = $('.header-search .search-input').val();
				emptyVal = emptyVal.replace(/^ +| +$/g,'')
				if(emptyVal.length <= 0) {
					return;
				}
				var common_search_searchInput = $(".search-input").val();
				var specialKey = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";//Specific Key list
				var inputLength = common_search_searchInput.length;
				for(var i = 0;i <= inputLength - 1;i++) {
					if(specialKey.indexOf(common_search_searchInput[i]) > -1){
						return;
					}
				}
				if(common_search_flag == true) {
					datarequest(common_search_searchInput);
				}
				var lis = $(".search-down-list li");
				if(common_search_noresults == 'noresults') {//搜索不到结果不做操作
				}else{
					if(lis.length ==  0) {//先判断长度，防止用户没拿到相应数据就跳转
						return;
					}else{
						window.open(lis.eq(0).attr("url"));
					}
				}
				var btnhistory = {
					innerText:common_search_searchInput,
					url:lis.eq(0).attr("url")
				};
				common_search_cookieArray.unshift(btnhistory);
				common_search_recordCookie = common_search_cookieArray.slice(0,10);
				//换成自己写的cookie开始---->
				search_cookie_set("searchHistory", JSON.stringify(common_search_recordCookie),60);
				common_search_searchhistory = JSON.parse(search_cookie_get("searchHistory"));
				//------------>结束
				common_search_arrayHistory = common_search_searchhistory;
				$(".search-input").val("");
				//点击跳转下面列表第一条
				var btnlist = "";
				for(var i = 0;i <= common_search_arrayHistory.length;i++) {
					for(var i = 0;i <= common_search_arrayHistory.length - 1;i++) {
						btnlist += '<li url='+ common_search_arrayHistory[i].url +'>'+ common_search_arrayHistory[i].innerText + '</li>';
					}
					$(".search-history-list").html(btnlist);
				}
			};
			$(".search-history-list")[0].onclick = function(event){

				var event = event || window.event;
				var target = event.target || event.srcElement;
				if(target.nodeName.toLowerCase() === 'li'){
					if(target.getAttribute("url") == "undefined") {//无连接url属性时不让跳转
						return;
					}else{
						var lis = $(".search-down-list li");
						window.open(target.getAttribute("url"));
					}

				}
			};
			//清除搜索历史
			$(".history-clear").on("click", function () {
				common_search_cookieArray.splice(0,common_search_cookieArray.length);
				common_search_recordCookie = common_search_cookieArray.slice(0,10);
				//换成自己写的cookie开始---->
				search_cookie_set("searchHistory", JSON.stringify(common_search_recordCookie),60);
				common_search_searchhistory = JSON.parse(search_cookie_get("searchHistory"));
				//------------>结束
				common_search_arrayHistory = common_search_searchhistory;
				list = "";
				$(".search-history-list").html(common_search_arrayHistory);
			});
		})
		var common_search_beforeValue = [];
		var common_search_firstData;



		//处理ie8与ie9滚动条触发失焦事件
		var u = navigator.userAgent;
		if(u.indexOf('Trident') > -1) {
			var browser = navigator.appName;
			var b_version = navigator.appVersion;
			var version = b_version.split(";");
			var trin_version_flag = version && version.length > 1;
			var trim_Version = trin_version_flag ? version[1].replace(/[ ]/g, "") : "";
			document.onmousedown = function(e) {
				var e = e || window.event;
				if(trim_Version == "MSIE8.0" || trim_Version == "MSIE9.0"|| trim_Version == "MSIE10.0" || trim_Version == "WOW64") {//这里为IE8
					var clientX = e.clientX;
					var clientY = e.clientY;
					var browserie_left = $("#search-input").offset().left;//input框距离浏览器左边的距离
					var browserie_width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;//浏览器的宽度
					var browserie_right =  browserie_left + $("#search-input").outerWidth();//input距离浏览器左侧的距离和input的宽度相加
					var browserie_top = $("#search-input").offset().top;
                    var input_height = $("#search-input").outerHeight();
                    var browserie_y = browserie_top + input_height + 204;
					if(clientX < browserie_left || clientX > browserie_right || clientY < browserie_top || clientY > browserie_y){
						$(".search-down").fadeOut();
                        $('.search-history').fadeOut();
						common_search_beforeValue.splice(0,common_search_beforeValue.length);//清空数组
					}
				}
			}
		}else{
			$('.header-search .search-input').on('blur', function () {
				$('.search-history').fadeOut();
				$(this).removeClass('focus');
				$(".search-btn").css({
					"background-color": "#3B99FC"
				});
				$(".search-down").fadeOut();
				common_search_beforeValue.splice(0,common_search_beforeValue.length);//清空数组
			})
		}

		var common_search_pageIndex = 0;
		var common_search_last;
		var common_search_searchInput;
		var common_search_untilArray;
		var common_search_firstArray;
		var common_search_localLength;


		$('.header-search .search-input').on('keyup', function (e) {
			if(e.keyCode == 8) {//重新搜索改善下标
				common_search_pageIndex = 0;
			}
			$('.search-history').fadeOut();
			var myReg = /^[\u4e00-\u9fa5]+$/;
			common_search_last=e.timeStamp;
			//进行请求数据

			if( e.keyCode != 16  && e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 37 && e.keyCode != 39) {
				setTimeout(function() {
					try{
						if(common_search_last - e.timeStamp == 0) {
							common_search_searchInput = $(".search-input").val().toUpperCase();
							if(common_search_searchInput == "") {
								$(".search-down-list").html("");
								$(".search-down").fadeOut();
							}
							common_search_beforeValue.push(common_search_searchInput);//继续输入数组push继续提前
							var specialKey = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";//Specific Key list
							var inputLength = common_search_searchInput.length;
							for(var i = 0;i <= inputLength - 1;i++) {
								if(specialKey.indexOf(common_search_searchInput[i]) > -1){
									$(".search-down-list").html("");
									$(".search-down").fadeOut();
									common_search_flag = false;
									return;
								}else{
									common_search_flag = true;
								}
							}
							var size = common_search_beforeValue.length;
							if(common_search_searchInput != "") {

								if(common_search_searchInput.indexOf(common_search_beforeValue[size-2]) > -1) {
									$(".search-down-list").html("");
									common_search_firstArray = JSON.parse(common_search_firstData);
									common_search_localLength = common_search_firstArray.length;
									var storageList = "";
									var matchNum = 0;//用来记录匹配车次计数
									for(var i = 0;i <= common_search_localLength - 1;i++) {
										if(common_search_firstArray[i].word.indexOf(common_search_searchInput) > -1) {
											if(common_search_firstArray[i].type == '001') {
												matchNum++;
												common_search_firstArray[i].word = common_search_firstArray[i].word.replace(common_search_searchInput,'<span style="color:red;">'+ common_search_searchInput + '</span>');
												var ico = "huochepiao";
												storageList +=
												'<li url=' + common_search_firstArray[i].url + '>' +
												'<i class="icon icon-' + ico + ' "> ' +
												'</i>' +
												common_search_firstArray[i].word +
												'<span class="list-txt">'+
												'</span>'+
												'</li>';
											}
										}
									}
									if(matchNum == 0 && common_search_flag == true) {
										datarequest(common_search_searchInput);
									}
									$(".search-down-list").html(storageList);
								}else if(common_search_flag == true){
									datarequest(common_search_searchInput);
								}
							}
						}
					}catch(e) {
						common_search_searchInput = $(".search-input").val().toUpperCase();
						var specialKey = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";//Specific Key list
							var inputLength = common_search_searchInput.length;
							for(var i = 0;i <= inputLength - 1;i++) {
								if(specialKey.indexOf(common_search_searchInput[i]) > -1){
									$(".search-down-list").html("");
									$(".search-down").fadeOut();
									common_search_flag = false;
									return;
								}else{
									common_search_flag = true;
								}
							}
						if(common_search_searchInput != "" && common_search_flag ==true){
							datarequest(common_search_searchInput);
						}
					}
				},500);//无操作键盘事件500ms后取得结果
			}
			var lis = $(".search-down-list li");
			if(common_search_pageIndex == 1 && e.keyCode != 40) {
				common_search_pageIndex = 0;
			}
			if(e.keyCode == 40){
				if(common_search_pageIndex <= lis.length - 1) {
					common_search_pageIndex++;
					for(var i = 0;i <= lis.length - 1;i++) {
						lis.eq(i).css({
							"background":"",
							"color":"black"
						});
						lis.eq(i).children().eq(0).css({
							"color":"#3B99FC"
						});
					}
					lis.eq(common_search_pageIndex-1).css({
						"background":"#3B99FC",
						"color":"white"
					});
					lis.eq(common_search_pageIndex-1).children().eq(0).css({
						"color":"white"
					});
					$("#search-input").val(lis.eq(common_search_pageIndex-1)[0].innerText);
					if(common_search_pageIndex >= 0 && common_search_pageIndex < 7) {//1
						$(".search-down-list").scrollTop(0);
					}else if( common_search_pageIndex != 6 && parseInt( common_search_pageIndex / 6) >= 1)  {
						//模拟当前数据显示页码
						var currentPage= parseInt( common_search_pageIndex / 6) + 1;
						var height =  (currentPage - 1 ) * 204 -30;
						$(".search-down-list").scrollTop(height);
					}
					lis.eq(common_search_pageIndex-1).click(function() {
						window.open(lis.eq(common_search_pageIndex-1).attr("url"));
					});
				}
			}
			if(e.keyCode == 38) {
				if(common_search_pageIndex > 0){
					common_search_pageIndex--;
					for(var i = 0;i <= lis.length - 1;i++) {
						lis.eq(i).css({
							"background":"",
							"color":"black"
						});
						lis.eq(i).children().eq(0).css({
							"color":"#3B99FC"
						});
					}
					lis.eq(common_search_pageIndex - 1).css({
						"background":"#3B99FC",
						"color":"white"
					});
					lis.eq(common_search_pageIndex-1).children().eq(0).css({
						"color":"white"
					});
					$("#search-input").val(lis.eq(common_search_pageIndex-1)[0].innerText);
					if(common_search_pageIndex >= 0 && common_search_pageIndex < 7) {//1
						$(".search-down-list").scrollTop(0);
						if(common_search_pageIndex == 0) {
							common_search_pageIndex = 1;
						}
					}else if( common_search_pageIndex != 6 && parseInt( common_search_pageIndex / 6) >= 1)  {
						//模拟当前数据显示页码
						var currentPage= parseInt( common_search_pageIndex / 6) + 1;
						var height =  (currentPage - 1 ) * 203.5 -30;
						$(".search-down-list").scrollTop(height);
					}
					lis.eq(common_search_pageIndex -1).on("click",function(){
						window.open(lis.eq(common_search_pageIndex).attr("url"));
					});
				}
			}
			if (e.keyCode == 13) {//点击回车操作
				var url;
				var emptyVal = $('.header-search .search-input').val();
				emptyVal = emptyVal.replace(/^ +| +$/g,'')
				if(emptyVal.length <= 0) {
					return;
				}
				var common_search_searchInput = $(".search-input").val();
				if(common_search_pageIndex == 0){
					turnTo(lis.eq(0).attr("url"));
					url = lis.eq(0).attr("url");
				}else{
					turnTo(lis.eq(common_search_pageIndex - 1).attr("url"));
					url = lis.eq(common_search_pageIndex - 1).attr("url");
				}
				var enterhistory = {
					innerText:common_search_searchInput,
					url:url
				};
				var specialKey = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";//Specific Key list
				var inputLength = common_search_searchInput.length;
				for(var i = 0;i <= inputLength - 1;i++) {
					if(specialKey.indexOf(common_search_searchInput[i]) > -1){
						return;
					}
				}

				function turnTo(url) {
					if(url === undefined || url === "" ){
						return;
					}else{
						window.open(url);
					}
				}

				common_search_cookieArray.unshift(enterhistory);
				common_search_recordCookie = common_search_cookieArray.slice(0,10);
				//换成自己写的cookie开始---->
				search_cookie_set("searchHistory", JSON.stringify(common_search_recordCookie),60);
				common_search_searchhistory = JSON.parse(search_cookie_get("searchHistory"));
				//------------>结束
				common_search_arrayHistory = common_search_searchhistory;
				$(".search-input").val("");

			}

			var list = "";
			for(var i = 0;i <= common_search_arrayHistory.length - 1;i++) {
				list += '<li url='+ common_search_arrayHistory[i].url +'>' + common_search_arrayHistory[i].innerText + '</li>';
			}
			$(".search-history-list").html(list);
		})
		function datarequest(common_search_searchInput){
			$.ajax({
				url: getSearchUrl,
				dataType: 'jsonp',
				xhrFields: { withCredentials : true },
				crossDomain: true,
				type: "GET",
				timeout:10000,
				cache:false,
				data: {
					"keyword": common_search_searchInput,
					"suorce": "",
					"action": ""
				},
				success: function (res) {
					var jsonData = JSON.stringify(res.data);
					localStorage.setItem("common_search_firstData",jsonData);
					common_search_firstData = localStorage.getItem("common_search_firstData");
					//符合匹配的字高亮显示
					var l = res.data.length;
					if(l == 0) {
						var emptyArray = [
							{"value":"城市","ico":"place"},
							{"value":"车票","ico":"jianpiao"},
							{"value":"正晚点","ico":"time"},
							{"value":"起售时间","ico":"selltime"},
							{"value":"检票口","ico":"jianpiao"},
							{"value":"时刻表","ico":"date"},
							{"value":"代售点","ico":"train"},
							{"value":"交通查询","ico":"zhanche"},
							{"value":"天气","ico":"weather"},
							{"value":"问答","ico":"wenda"},
							{"value":"服务","ico":"fuwu"},
							{"value":"订单","ico":"dingdanchaxun"}
						];
						var l = emptyArray.length;
						var emptyHtml = "";
						for(var i = 0;i <= l - 1;i++) {
							emptyHtml +=
							'<li>' +
							'<i class="icon icon-' + emptyArray[i].ico + ' "> ' +
							'</i>' +
							emptyArray[i].value +
							'<span class="list-txt">'+
							'</span>'+
							'</li>';
						}
						$(".search-down-list").html(emptyHtml);
						$('.search-down').fadeIn();
						common_search_noresults = 'noresults';
						return;
					}
					var resList = "";
					for(var i = 0;i <= l - 1;i++) {
						if(res.data[i].type == '001') {
							var ico = "huochepiao";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == 'view'){
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '002') {
							var ico = "selltime";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '003') {
							var ico = "time";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '004') {
							var ico = "selltime";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '006') {
							var ico = "yupiao";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '100') {
							var ico = "train";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '101') {
							var ico = "huochepiao";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '102') {
							var ico = "dingdanchaxun";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '103') {
							var ico = "dingdanchaxun";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '104') {
							var ico = "user";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '105') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '106') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '107') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '108') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '109') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '110') {
							var ico = "dingcan";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '111') {
							var ico = "user";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '112') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '113') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '114') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '115') {
							var ico = "fuwu";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '116') {
							var ico = "fuwu";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '117') {
							var ico = "fuwu";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '118') {
							var ico = "fuwu";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '119') {
							var ico = "dingdanchaxun";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '120') {
							var ico = "xiangdao";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '121') {
							var ico = "shanglv";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '122') {
							var ico = "user";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}
						else if(res.data[i].type == '123') {
							var ico = "user";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '124') {
							var ico = "user";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '125') {
							var ico = "fuwu";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '126') {
							var ico = "wenda";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '127') {
							var ico = "dingdanchaxun";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '128') {
							var ico = "dingcan";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '129') {
							var ico = "fuwu";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '130') {
							var ico = "user";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}else if(res.data[i].type == '131') {
							var ico = "dingdanchaxun";
							resList = stringconnect([res.data[i].word,common_search_searchInput,ico,res.data[i].url,resList]);
						}
					}
					$(".search-down-list").html(resList);
					$('.search-down').fadeIn();
					$(".search-down-list").off("click","li").on("click","li",function() {
						var history = {//拟定以对象方式存储
							innerText:$(this)[0].innerText,
							url:$(this)[0].getAttribute("url")
						}
						if(history.url == "" || history.url == undefined || history.url == null) {
							return;
						}else{
							window.open($(this).attr("url"));
						}
						common_search_cookieArray.unshift(history);
						var common_search_recordCookie = common_search_cookieArray.slice(0,10);
						//换成自己写的cookie开始---->
						search_cookie_set("searchHistory", JSON.stringify(common_search_recordCookie),60);
						common_search_searchhistory = JSON.parse(search_cookie_get("searchHistory"));
						//------------>结束
						common_search_arrayHistory = common_search_searchhistory;
						var clicklist = "";
						for(var i = 0;i <= common_search_arrayHistory.length - 1;i++) {
							clicklist += '<li url='+ common_search_arrayHistory[i].url +'>'+ common_search_arrayHistory[i].innerText + '</li>';
						}
						$(".search-history-list").html(clicklist);
					});
				},
				error: function (res) {
				}
			});
		}



		function search_cookie_get(name) {
				var cookie_start = document.cookie.indexOf(name);
				var cookie_end = document.cookie.indexOf(";", cookie_start);
				return cookie_start == -1 ? '' : unescape(document.cookie.substring(
					cookie_start + name.length + 1,
					(cookie_end > cookie_start ? cookie_end :
						document.cookie.length)));
		}

		function search_cookie_set(cookieName, cookieValue, seconds, path, domain, secure) {
				var domainNow = document.domain;
				domainNow = domainNow.substring(domainNow.indexOf(".") + 1, domainNow.length);
				var expires = new Date();
				expires.setTime(expires.getTime() + seconds * 1000);
				document.cookie = escape(cookieName) + '=' + escape(cookieValue) +
					(path ? '; path=' + path : ';path=/') +
					(domain ? '; domain=' + domainNow : '; domain=' + domainNow) +
					(secure ? '; secure' : '')+(';expires='+expires);
		}

		$('.search-down .close').on('click', function () {
			$(".search-input").val("");
			$(this).parent().fadeOut();
			common_search_beforeValue.splice(0,common_search_beforeValue.length);//清空数组
		})
		// 获取配置信息
		fetchLoginConf();
	}
	// var isLogin;//记录登录状态window.isLogin
	window.isLogin = "N";
	window.ajaxLogin_flag = false;
	function fetchLoginConf() {
		var isLogin;//记录登录状态window.isLogin
		showLogin()
        $.ajax({
            url: loginConf,
            type: 'POST',
            timeout: 10000,
						async:false,
            success: function(response) {
                if (response.data) {
									window.isStudentDatas = response.data.isstudentDate;//判断是够可用个人行程
									window.studentDates = response.data.studentDate;
									window.yy_open_time = response.data.yy_open_time;
									// 赋值预售时间
                	stu_control = response.data.stu_control
									other_control = response.data.other_control&&response.data.other_control!=''?response.data.other_control:'15';
                	// 如果是统一认证登录再调用 /rest/auth/apptk-static
									if (response.data.is_uam_login === 'Y') {//统一认证登录
										getUserinfo()
									}else if(response.data.is_login == "Y") {//本地登录
										isLogin = "Y";
										window.isLogin = isLogin;
										window.ajaxLogin_flag = true;
									}
				}

            },
            error: function(error) {
				window.ajaxLogin_flag = true;
            }
        });
	}
	function showLogin () {
		$('#J-header-login').show()
        $('#J-header-logout').hide()
	}
	function showLogout () {
		$('#J-header-login').hide()
        $('#J-header-logout').show()
	}

	function getUserinfo () {
		$.ajax({
            url: passport_apptk_static,
            data:{ 'appid': passport_appId },
            xhrFields : {
                withCredentials : true
            },
            type: 'POST',
            timeout: 10000,
            success: function (response) {
            	if (response.result_code == '0' && response.name) {
					// 已经登录
					isLogin = "Y";
					window.isLogin = isLogin;
					window.ajaxLogin = new Date().getTime();
                	showLogout()
                	$('#J-header-logout a.txt-primary').html(response.name)
               	$('#J-header-logout a.logout').attr('href', logout)
            	}else{
					//此处没登录
					isLogin = "N";
					window.isLogin = isLogin;
					window.ajaxLogin = new Date().getTime();
				}
				window.ajaxLogin_flag = true;
            },
            error: function (error) {
				window.ajaxLogin_flag = true;
            }
        });
	}

	// 公告
	if($("#index_ads") && $("#index_ads").length > 0){
		$("#gLink").click(function() {
			$("html, body").animate({
				scrollTop: $("#index_ads").offset().top }, {duration: 500,easing: "swing"});
			return false;
		});

		$('a.goGonggao').on('click', function (e) {
			e.stopPropagation();
			$("html, body").animate({
				scrollTop: $("#index_ads").offset().top }, {duration: 500,easing: "swing"});
			return false;
		})
	}else{
		$("#gLink").click(function() {
			$('#gLink').attr('href','../../index.html#index_ads')
		});

		$('a.goGonggao').on('click', function (e) {
			e.stopPropagation();
			$(this).attr('href','../../index.html#index_ads')
		})
	}


	return {
		initialize: function () {
			headerFn();
			window.gHeader = new Date().getTime();
		}
	}
});

/*
 * 底部
 */
define('g/g-footer',['jquery'], function ($) {

	function footerFn() {
        var windowHeight = $(window).height()
        var headerHeight = 109
        var footerHeight = $('.footer').height()
        var contentHeight = $('.content').height()
        var height = windowHeight - headerHeight - footerHeight
        if (contentHeight <= height) {
            $('.content').height( height )
        }
	}
	return {
		initialize: function () {
            footerFn();
            window.gFooter = new Date().getTime();
	  }
	}
});

/*
 * href
 */
define('g/g-href',['jquery'], function ($) {

	function hrefFn() {

		$('a[name="g_href"]').click(function () {
    		var data_redirect = $(this).attr('data-redirect');
    		var data_type = $(this).attr('data-type');
    		var data_href = $(this).attr('data-href');
    		var data_target = $(this).attr('data-target');

    		if (data_redirect == 'Y') {
    			if (data_target == '_blank') {
					if (data_type == 1) {
						window.open(href_baseUrl_1 + href_path_1 + data_href);
					} else if (data_type == 2) {
						window.open(href_baseUrl_2 + href_path_2 + data_href);
					} else if (data_type == 3) {
						window.open(href_baseUrl_3 + href_path_3 + data_href);
					} else if (data_type == 4) {
						window.open(href_baseUrl_4 + href_path_4 + data_href);
					} else if (data_type == 5) {
						window.open(href_baseUrl_5 + href_path_5 + data_href);
					} else if (data_type == 6) {
						window.open(href_baseUrl_6 + href_path_6 + data_href);
					} else if (data_type == 10) {
						window.open(href_baseUrl_10 + href_path_10 + data_href);
					}
    			} else {
					if (data_type == 1) {
						window.location.href = href_baseUrl_1 + href_path_1 + data_href;
					} else if (data_type == 2) {
						window.location.href = href_baseUrl_2 + href_path_2 + data_href;
					} else if (data_type == 3) {
						window.location.href = href_baseUrl_3 + href_path_3 + data_href;
					} else if (data_type == 4) {
						window.location.href = href_baseUrl_4 + href_path_4 + data_href;
					} else if (data_type == 5) {
						window.location.href = href_baseUrl_5 + href_path_5 + data_href;
					} else if (data_type == 6) {
						window.location.href = href_baseUrl_6 + href_path_6 + data_href;
					} else if (data_type == 10) {
						window.location.href = href_baseUrl_10 + href_path_10 + data_href;
					}
    			}
			} else {
				if (data_target == '_blank') {
					window.open(data_href)
				} else {
					window.location.href = data_href;
				}
			}
		});

	}
	return {
		initialize: function () {
            hrefFn();
	  }
	}
});

(function (factory) {
    if (typeof define === "function" && define.amd) {
        //AMD模式
        define('core/common/date',["jquery"], factory);
    } else {
        //全局模式
        factory(jQuery);
    }
}(function ($) {
    function compareDate(checkStartDate, checkEndDate) {
        var arys1 = new Array();
        var arys2 = new Array();
        if (checkStartDate != null && checkEndDate != null) {
            arys1 = checkStartDate.split('-');
            var sdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
            arys2 = checkEndDate.split('-');
            var edate = new Date(arys2[0], parseInt(arys2[1] - 1), arys2[2]);
            return sdate >= edate
        }
    }
    var isLiandong = false;
    //position为所在位置的学生li标签的id
    function dateTrain(dataValue, star, end, positionId) {
        $(dataValue).click(function () {
            if ($(positionId).hasClass('active')) {
                end = GetDateStr(stu_control - 1);
            } else {
                end = GetDateStr(other_control - 1);
            }
            if ($(dataValue).attr('id') == 'train_date') {
                end = GetDateStr(other_control-1);
            }
            $(dataValue).jcalendar({
                isSingle: false,
                startDate: star,
                endDate: end,
                onpicked: function () {
                    if (dataValue == '#go_date') {
                        $('#from_date').val($('#go_date').val())
                    }
                    $(dataValue).blur();
                    if (!$(dataValue).hasClass('inp-txt_select')) {
                        $(dataValue).addClass('inp-txt_select');
                    }
                    if ($(dataValue).hasClass('error')) {
                        $(dataValue).removeClass('error');
                    }
                    if ($(dataValue).attr('id') == 'train_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudentDan').removeClass('disabled')
                        } else {
                            $('#isStudentDan').addClass('disabled')
                            $('#isStudentDan').removeClass('active')
                        }
                    }
                    if ($(dataValue).attr('id') == 'go_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudent').removeClass('disabled')
                        } else {
                            $('#isStudent').addClass('disabled')
                            $('#isStudent').removeClass('active')
                        }
                    }
                    if ($(dataValue).attr('id') == 'serial_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudentLian').removeClass('disabled')
                        } else {
                            $('#isStudentLian').addClass('disabled')
                            $('#isStudentLian').removeClass('active')
                        }
                    }
                }
            });
        });
    }
    function dateTrainTwo(dataValue, star, end, positionId) {
        $(dataValue).click(function () {
            if ($(positionId).hasClass('active')) {
                end = GetDateStr(stu_control - 1);
            } else {
                end = GetDateStr(other_control - 1);
            }
            $(dataValue).jcalendar({
                isSingle: false,
                startDate: star,
                endDate: end,
                onpicked: function () {
                    if (dataValue == '#go_date') {
                        $('#from_date').val($('#go_date').val())
                    }
                    $(dataValue).blur();
                    if (!$(dataValue).hasClass('inp-txt_select')) {
                        $(dataValue).addClass('inp-txt_select');
                    }
                    if ($(dataValue).hasClass('error')) {
                        $(dataValue).removeClass('error');
                    }
                    if ($(dataValue).attr('id') == 'train_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudentDan').removeClass('disabled')
                        } else {
                            $('#isStudentDan').addClass('disabled')
                            $('#isStudentDan').removeClass('active')
                        }
                    }
                    if ($(dataValue).attr('id') == 'go_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudent').removeClass('disabled')
                        } else {
                            $('#isStudent').addClass('disabled')
                            $('#isStudent').removeClass('active')
                        }
                    }
                    if ($(dataValue).attr('id') == 'serial_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudentLian').removeClass('disabled')
                        } else {
                            $('#isStudentLian').addClass('disabled')
                            $('#isStudentLian').removeClass('active')
                        }
                    }
                }
            });
        });
    }
    //返程 日期封装
    function dateTrainTo(dataValue, star, end, positionId) {
        $(dataValue).click(function () {
            if ($(positionId).hasClass('active')) {
                end = GetDateStr(stu_control - 1);
            } else {
                end = GetDateStr(other_control - 1);
            }
            isLiandong = false;
            $(dataValue).jcalendar({
                isSingle: false,
                startDate: $('#go_date').val(),
                endDate: end,
                onpicked: function () {
                    $(dataValue).blur();
                    if (!$(dataValue).hasClass('inp-txt_select')) {
                        $(dataValue).addClass('inp-txt_select');
                    }
                    if ($(dataValue).hasClass('error')) {
                        $(dataValue).removeClass('error');
                    }
                }
            });
        });
    }
    //起售时间 日期封装
    function dateSaleTime(dataValue, star, end, positionId) {
        $(dataValue).click(function () {
            if ($(positionId).hasClass('active')) {
                end = GetDateStr(stu_control - 1);
            } else {
                end = GetDateStr(other_control - 1);
            }
            isLiandong = false;
            $(dataValue).jcalendar({
                isSingle: false,
                startDate: $('#go_date').val(),
                endDate: end,
                onpicked: function () {
                    $(dataValue).blur();
                    if (!$(dataValue).hasClass('inp-txt_select')) {
                        $(dataValue).addClass('inp-txt_select');
                        if($('#saleText').val() !== index_messages.jianma_hanzi&&$('#saleText').val()!==''){
                            getQsDataList($('#sale').val(),'',$('#sale_time_date').val());
                            // getScSnameListFn($('#sale').val(),'',$('#sale_time_date').val());
                            getScSnameListFnIntraCity($('#sale').val(),'',$('#sale_time_date').val());
                        }else{
                            $('#saleText').addClass("input-error");
                            noChoseCity($("#saleText"),'82px','525px','请选择起售车站');
                        }
                    }else{
                        if($('#saleText').val() !== index_messages.jianma_hanzi&&$('#saleText').val()!==''){
                            getQsDataList($('#sale').val(),'',$('#sale_time_date').val());
                            // getScSnameListFn($('#sale').val(),'',$('#sale_time_date').val());
                            getScSnameListFnIntraCity($('#sale').val(),'',$('#sale_time_date').val());
                        }else{
                            $('#saleText').addClass("input-error");
                            noChoseCity($("#saleText"),'82px','525px','请选择起售车站');
                        }
                    }
                    if ($(dataValue).hasClass('error')) {
                        $(dataValue).removeClass('error');
                    }
                }
            });
        });
    }
    //退改签 订票日期封装  bool true - 订票   false 乘车
    function dateRefundDingStr(dataValue, bool) {
        $(dataValue).click(function () {
            isLiandong = true;

            $(dataValue).jcalendar({
                isSingle: false,
                startDate: bool ? GetDateStr(-29) : formatDate(new Date),
                endDate: bool ? formatDate(new Date) : GetDateStr(29),
                onpicked: function () {
                    if ($('#refund_start').val()) {
                        var start_tim = timeChangetype($('#refund_start').val().replace(/-/g, '/'))
                        var end_tim = timeChangetype($('#refund_end').val().replace(/-/g, '/'))
                        if (start_tim > end_tim) {
                            $('#refund_end').val($('#refund_start').val())
                        }
                    }
                    $(dataValue).blur();
                    if (!$(dataValue).hasClass('inp-txt_select')) {
                        $(dataValue).addClass('inp-txt_select');
                    }
                    if ($(dataValue).hasClass('error')) {
                        $(dataValue).removeClass('error');
                    }
                }
            });
        });
    }

    //退改签 订票日期封装
    function dateRefundDingEnd(dataValue, bool) {
        $(dataValue).click(function () {
            isLiandong = true;
            $(dataValue).jcalendar({
                isSingle: false,
                startDate: bool ? $('#refund_start').val() || GetDateStr(-29) : $('#refund_start').val() || formatDate(new Date),
                endDate: bool ? formatDate(new Date) : GetDateStr(29),
                onpicked: function () {
                    $(dataValue).blur();
                    if (!$(dataValue).hasClass('inp-txt_select')) {
                        $(dataValue).addClass('inp-txt_select');
                    }
                    if ($(dataValue).hasClass('error')) {
                        $(dataValue).removeClass('error');
                    }
                }
            });
        });
    }

    function isisStudentDateFn(data, studentDates) {
        var isStudentDate = false;
        var studentInterval1 = [toshijianchu(studentDates[0]), toshijianchu(studentDates[1])]
        var studentInterval2 = [toshijianchu(studentDates[2]), toshijianchu(studentDates[3])]
        var studentInterval3 = [toshijianchu(studentDates[4]), toshijianchu(studentDates[5])]

        if (studentInterval1[0] <= toshijianchu(data) && studentInterval1[1] >= toshijianchu(data)) {
            isStudentDate = true;
        } else if (studentInterval2[0] <= toshijianchu(data) && studentInterval2[1] >= toshijianchu(data)) {
            isStudentDate = true;
        } else if (studentInterval3[0] <= toshijianchu(data) && studentInterval3[1] >= toshijianchu(data)) {
            isStudentDate = true;
        } else {
            isStudentDate = false;
        }
        return isStudentDate;
    }

    function toshijianchu(strtime) {
        var date = new Date(strtime.replace(/-/g, '/'));
        time = Date.parse(date);
        return time
    }
    $('.cal-wrap').on('click', function () {
        if (isLiandong && compareDate($('#go_date').val(), $('#from_date').val())) {
            $('#from_date').val($('#go_date').val());
        }

    })
    // 订餐 日期
    dateTrain('#dinner_date', formatDate(new Date), GetDateStr(29));
    // 预填 日期
    // dateTrain('#train_date_yy', GetDateStr(15), endTime);
    // 起售时间 日期
    dateSaleTime('#sale_time_date', formatDate(new Date),  GetDateStr(other_control - 1));
    // 单程出发 日期
    dateTrainTwo('#train_date', formatDate(new Date), GetDateStr(other_control - 1), '#isStudentDan');
    // 往返出   日期 
    dateTrainTwo('#go_date', formatDate(new Date), GetDateStr(other_control - 1), '#isStudent');
    // 往返回   日期
    dateTrainTo('#from_date', formatDate(new Date), GetDateStr(other_control - 1), '#isStudent');
    // 连续出   日期
    dateTrainTwo('#serial_date', formatDate(new Date), GetDateStr(other_control - 1), '#isStudentLian');
    // 检票口   日期
    dateTrain('#check_in', formatDate(new Date), GetDateStr(29));
    // 首页起售时间   日期
    dateTrain('#sale_time', formatDate(new Date), GetDateStr(other_control - 1));

    // 检票口二级页面 日期
    dateTrain('#ticket_check_date', formatDate(new Date), GetDateStr(29));

    // 约车日期
    dateTrain('#contract_date', formatDate(new Date), GetDateStr(29));
    // 退改签日期
    // 订票   true 为订票
    $('.radio-list-ding').on('click', 'li', function () {
        if ($('#dingqiaoID').hasClass('active')) {
            dateRefundDingStr('#refund_start', true);
            dateRefundDingEnd('#refund_end', true);
        } else {
            dateRefundDingStr('#refund_start', false);
            dateRefundDingEnd('#refund_end', false);
        }
    })
    dateRefundDingStr('#refund_start', true);
    dateRefundDingEnd('#refund_end', true);

    // 电子票务-个人中心
    // 未出行订单
    dateTrain('#noTripFromDate', formatDate(new Date), GetDateStr(29));
    dateTrain('#noTripToDate', formatDate(new Date), GetDateStr(29));
    // 历史订单
    dateTrain('#historyFromDate', formatDate(new Date), GetDateStr(29));
    dateTrain('#historyToDate', formatDate(new Date), GetDateStr(29));
    // 电子票务-个人行程
    dateTrain('#travelFromDate', formatDate(new Date), GetDateStr(29));
    dateTrain('#travelToDate', formatDate(new Date), GetDateStr(29));
}));
(function(factory){
	if(typeof define === "function"&&define.amd){
		//AMD模式
		define('core/common/data.jcalendar',["jquery"],factory);
	}else{
		//全局模式
		factory(jQuery);
	}
}
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
					var reg= /^(\d{8})$/;
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

}));

// 页面路径
// 请求的url
var saleTimeText = [];
var saleTimeText1 = [];

function timeChangetype(stringTime) {
    var timestamp2 = Date.parse(new Date(stringTime));
    return timestamp2;
}

var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};

function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
    return y + "-" + m + "-" + d;
}

var formatDateNextMonth = function (date) {
    var date1 = new Date();
    var date2 = new Date(date1);
    date2.setDate(date1.getDate() + 29);
    return date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate()
};

function setStorage(name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
}
/**
 * 获取sessionStorage
 */
function getStorage(name) {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}
/**
 * 删除sessionStorage
 */
function removeStore(name) {
    if (!name) return;
    return window.sessionStorage.removeItem(name);
}
/**
 * 存储localStorage
 */
function setLocalStorage(name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}
/**
 * 获取localStorage
 */
function getLocalStorage(name) {
    if (!name) return;
    return window.localStorage.getItem(name);
}
/**
 * 删除localStorage
 */
function removeLocalStore(name) {
    if (!name) return;
    window.localStorage.removeItem(name);
}

// 生成input为空的提示信息提示
function noChoseCity(dom, top, left, text) {
    text = text || '请选择出发地';
    left = left || '347px';
    top = top || '0';
    if (dom.parent().parent().find("[data-id=" + dom.attr('id') + "]")) {
        dom.parent().parent().find("[data-id=" + dom.attr('id') + "]").remove();
        // dom.removeClass('input-error')
    }
    dom.parent().parent().append('<div class="tooltip-error" tabIndex="0" data-id=' + dom.attr('id') + ' style="left:' + left + '; top: ' + top + '; display: block;"><i class="icon icon-plaint-fill"></i>' + text + '</div>')
    try {
        setTimeout(function () {
            $('.tooltip-error').focus();
        }, 500)
    } catch (error) {

    }
}

function _getStationNameByCode(code) {
    var stationZhName = ''
    $.each(station_names.split('@'), function (index, value) {
        if (value != undefined) {
            var station = value.split('|'),
                station_zh = station[1],
                station_code = station[2];
            if (code === station_code) {
                stationZhName = station_zh
                return false;
            }
        }
    })
    return stationZhName;
}

function ChangeHourMinutestr(str) {
    if (str !== "0" && str !== "" && str !== null) {
        return ((Math.floor(str / 60)).toString().length < 2 ? "0" + (Math.floor(str / 60)).toString() :
            (Math.floor(str / 60)).toString()) + "小时" + ((str % 60).toString().length < 2 ? "0" + (str % 60).toString() : (str % 60).toString());
    } else {
        return "";
    }
}

function footerFn() {
    $('.content').css("height", "auto")
    var windowHeight = $(window).height()
    var headerHeight = 109
    var footerHeight = $('.footer').height()
    var contentHeight = $('.content').height()
    var height = windowHeight - headerHeight - footerHeight
    if (contentHeight <= height) {
        $('.content').height(height)
    }
}
//获取地址栏参数
function getUrlParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}
// 深拷贝
function deepClone(obj) {
    var _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone;
};

function getqueryLimitTimeFn(trainDate, from_station_telecode) {
    var limitTime = '';
    $.ajax({
        url: queryLimitTimeUrl,
        type: 'POST',
        timeout: 10000,
        dataType: 'json',
        async: false,
        data: {
            trainDate: trainDate,
            from_station_telecode: from_station_telecode
        },
        success: function (result) {
            if (result && result.data) {
                if (from_station_telecode == 'SYQ') {
                    limitTime = '30';
                } else {
                    limitTime = result.data;
                }
            }
        },
        error: function (err) {
            //

        }
    })
    return limitTime;

}


function toshijianchu(strtime) {
    var date = new Date(strtime.replace(/-/g, '/'));
    time = Date.parse(date);
    return time
}

function getQsDataList(stationCode, stationName, trainDate) {
    var citys = {};
    $.ajax({
        url: queryAllCacheSaleTimeUrl,
        type: 'POST',
        timeout: 10000,
        dataType: 'json',
        // async:false,
        success: function (result) {
            // console.log(result)
            var nowTime = formatDate(new Date);
            // console.log(nowTime)
            var nowTimeStr = nowTime.replace(/-/g, '');
            if (result.data && result.data.length > 0 && result.status) {
                for (var i = 0; i < result.data.length; i++) {
                    if (result.data[i].start_date < nowTimeStr && nowTimeStr < result.data[i].stop_date) {
                        result.data[i].sale_time = result.data[i].sale_time.slice(0, 2) + ':' + result.data[i].sale_time.substr(2, 3)
                        citys[result.data[i].station_name] = result.data[i].sale_time;
                    }

                }
                getScSnameListFn(stationCode, stationName, trainDate, citys)
            }
        },
        error: function (err) {

        }
    })
}

function getScSnameListFn(stationCode, stationName, trainDate, citys) {
    var limitTimeView = ''
    $.ajax({
        url: getScSnameListpr,
        type: 'POST',
        timeout: 10000,
        dataType: 'json',
        // async:false,
        data: {
            'station_telecode': stationCode
        },
        success: function (result) {
            // $("#saleText").removeClass("input-error");
            // $('.tooltip-error').hide();
            saleTimeText = [];
            trainDate = trainDate && trainDate != '' ? trainDate.replace(/-/g, "") : $("#sale_time").val();
            $('.content').height('');
            $('#sale-time1 .sale-list').empty();
            if (result.data) {
                var cityStation = result.data;
                for (var i = 0; i < cityStation.length; i++) {
                    if (cityStation[i]) {
                        // limitTimeView = getqueryLimitTimeFn(trainDate,cityStation[i].replace(/[^a-zA-Z]/g,''));
                        // var cityStationTime = '<li><h3 class="sale-tit">' + cityStation[i] + '</h3><div class="sale-time">' + (citys[cityStation[i]] || "暂无") + '</div></li>'
                        saleTimeText.push('<li><div class="sale-station"><div class="sale-station-name" style="line-height: 44px;">' + cityStation[i].replace(/[^\u4E00-\u9FA5]/g, '') +
                            '站</div>' +
                            '</div><div class="sale-con"><div class="sale-time">' + (citys[cityStation[i].replace(/[^\u4E00-\u9FA5]/g, '')] || "暂无"))
                        if (citys[cityStation[i].replace(/[^\u4E00-\u9FA5]/g, '')]) {
                            saleTimeText.push('<span class="txt-lighter" style="font-size: 12px;padding-left:5px;">起售</span>')
                        }
                        saleTimeText.push('</div></div>' +
                            // '<div class="sale-time-last">'+
                            // '<div class="sale-time-item"><span class="time-label">最晚退票时间：</span>发车前<strong>5</strong>分钟</div>'+
                            // '<div class="sale-time-item"><span class="time-label">最晚改签时间：</span>发车前<strong>5</strong>分钟</div></div>
                            '</li>')
                        $('#sale-time1 .sale-list').html(saleTimeText.join(""));
                        $('#tips-box').show();
                        $('#result-none1').hide();

                    }

                }

            } else if (citys[$('#saleText').val()]) {
                limitTimeView = getqueryLimitTimeFn(trainDate, $('#sale').val());
                saleTimeText.push('<li><div class="sale-station"><div class="sale-station-name" style="line-height: 44px;">' + $('#saleText').val() +
                    '站</div>' +
                    '</div><div class="sale-con"><div class="sale-time">' + (citys[$('#saleText').val()] || "暂无"))
                if (citys[$('#saleText').val()]) {
                    saleTimeText.push('<span class="txt-lighter" style="font-size: 12px;padding-left:5px;">起售</span>')
                }
                saleTimeText.push('</div><div class="sale-text">发车前' +
                    limitTimeView + '分钟止售</div></div>' +
                    // '<div class="sale-time-last">'+
                    // '<div class="sale-time-item"><span class="time-label">最晚退票时间：</span>发车前<strong>5</strong>分钟</div>'+
                    // '<div class="sale-time-item"><span class="time-label">最晚改签时间：</span>发车前<strong>5</strong>分钟</div></div>
                    '</li>')
                $('#sale-time1 .sale-list').html(saleTimeText.join(""));
                $('#tips-box').show();
                $('#result-none1').hide()
            } else {
                $('#sale-time1 .sale-list').empty()
                $('#tips-box').hide();
                $('#result-none1').show()
            }

            footerFn()
        },
        error: function (err) {

        }
    })

};

function getScSnameListFnIntraCity(stationCode, stationName, trainDate) {
    $.ajax({
        url: getScSnameListprIntraCity,
        type: 'POST',
        timeout: 10000,
        dataType: 'json',
        // async:false,
        data: {
            'from_station_telecode': stationCode,
            'trainDate': trainDate && trainDate != '' ? trainDate.replace(/-/g, "") : $("#sale_time").val()
        },
        success: function (result) {
            // result = '{"validateMessagesShowId":"_validatorMessage","status":true,"httpstatus":200,"data":[{"from_station_telecode":"BJP","to_station_telecode":"BOP","relay_time":180,"communication_code":"0","start_date":"20000101","stop_date":"20991231"},{"from_station_telecode":"BJP","to_station_telecode":"BJP","relay_time":90,"communication_code":"0","start_date":"20000101","stop_date":"20991231"},{"from_station_telecode":"BJP","to_station_telecode":"BXP","relay_time":180,"communication_code":"0","start_date":"20000101","stop_date":"20991231"},{"from_station_telecode":"BJP","to_station_telecode":"VAP","relay_time":180,"communication_code":"0","start_date":"20000101","stop_date":"20991231"},{"from_station_telecode":"BJP","to_station_telecode":"VNP","relay_time":180,"communication_code":"0","start_date":"20000101","stop_date":"20991231"}],"messages":[],"validateMessages":{}}';
            saleTimeText1 = [];
            // trainDate = trainDate&&trainDate!=''?trainDate.replace(/-/g,""):$("#sale_time").val();
            $('.content').height('');
            $('sale-time2 .sale-list').empty();
            if (result.data&&result.data.length>0) {
                var cityStation1 = result.data;
                var stationsType = '';
                $('#cityInfos').show();
                $('sale-time2').show()
                for (var i = 0; i < cityStation1.length; i++) {
                    if (cityStation1[i].relay_time != 0) {
                        if (cityStation1[i].from_station_telecode == cityStation1[i].to_station_telecode) {
                            stationsType = '站内换乘';
                        } else {
                            stationsType = '同城换乘';
                        }
                        if(_getStationNameByCode(cityStation1[i].from_station_telecode)&&_getStationNameByCode(cityStation1[i].to_station_telecode)){
                            saleTimeText1.push('<li class="item-change">' +
                            '<div class="sale-head">');
                            if (cityStation1[i].relay_time < 0) {
                                saleTimeText1.push('<div class="pull-left"><strong></strong></div>');
                            } else {
                                saleTimeText1.push('<div class="pull-left"><strong>' + ChangeHourMinutestr(cityStation1[i].relay_time) + '分钟</strong></div>');
                            }
                            saleTimeText1.push('<div class="pull-right txt-primary">' + stationsType + '</div>' +
                                '</div>' +
                                '<div class="sale-body">' +
                                '<div class="sale-station">' +
                                '<div class="sale-station-name">' + _getStationNameByCode(cityStation1[i].from_station_telecode) + '</div>' +
                                '<div class="sale-station-dot"><span></span><span></span><span></span></div>' +
                                '<div class="sale-station-line"><span></span><span></span></div>' +
                                '</div>' +
                                '<div class="sale-station-to"></div>' +
                                '<div class="sale-station sale-station-end">' +
                                '<div class="sale-station-name">' + _getStationNameByCode(cityStation1[i].to_station_telecode) + '</div>' +
                                '<div class="sale-station-dot"><span></span><span></span><span></span></div>' +
                                '<div class="sale-station-line"><span></span><span></span></div>' +
                                '</div>' +
                                '</div>' +
                                '</li>');
                        }
                        $('#sale-time2 .sale-list').html(saleTimeText1.join(""));
                        $('#tips-box').show();
                        $('#result-none1').hide();
                        // if(cityStation1[i].communication_code == "1"&&cityStation1[i].from_station_telecode == cityStation1[i].to_station_telecode){
                        //     $('.item-change').eq(i).show()
                        // }else{
                        //     $('.item-change').eq(i).hide()
                        // }

                    }

                }

            } else {
                $('#sale-time2 .sale-list').empty()
                $('#tips-box').hide();
                $('#cityInfos').show();
                $('#result-none2').show()
                $('sale-time2').hide();
            }

            footerFn()
        },
        error: function (err) {

        }
    })

};
define("core/common/mUtils", function(){});

var NODE_ENV = 'production'
// 本地环境（local）
// 开发环境（development）
// 测试环境（devtest）
// 预发布环境（beta）
// 生产环境（production）
var static_url,path,dynimic_url_ie,dynimic_url,static_url_ie
if (NODE_ENV == 'local') {
  static_url = 'http://localhost:8883';
  publicName = '/otnpay'
  path=''
  dynimic_url_ie = static_url + path;
  dynimic_url = static_url;
} else if (NODE_ENV == 'devtest') {
  static_url = 'http://198.218.4.242:9999';
  publicName = '/otnyt'
  path='/index_bo'
  dynimic_url_ie = static_url + path;
  dynimic_url = static_url;
} else if (NODE_ENV == 'beta') {
  static_url = 'http://passport.12306.cn';
  publicName = '/otnyt'
  path='/index_bo'
  dynimic_url_ie = static_url;
  dynimic_url = static_url;
} else if (NODE_ENV == 'production') {
  static_url = "https://kyfw.12306.cn";
  static_url_ie = "https://www.12306.cn";
  publicName = '/otn'
  path='/index'
  dynimic_url_ie = static_url_ie + path;
  dynimic_url = static_url;
}
// var static_url = 'https://www.12306.cn'; //生产环境
// var dynimic_url_ie = static_url + path;
// var dynimic_url = static_url;
// var static_url = 'http://extened.8686c.com';
// var dynimic_url_ie = 'http://extened.8686c.com/index';
// var dynimic_url = 'http://extened.8686c.com';
var search_base_url = 'https://search.12306.cn';
var send_url = 'https://tj.12306.cn';
// var publicName = '/otn'; //生产环境
// var path='/index'; //生产环境
// var publicName = '/otnyt'; //预发布环境  
// var path='/index_bo'; //预发布环境
var static_url_path = static_url_ie  + path;
var dynimic_url_path_ie = dynimic_url_ie  + publicName;
var dynimic_url_path = dynimic_url + publicName;
//轮播图
var bannerUrl = dynimic_url_path_ie + '/index12306/getBanner';
//失信补的url
var believeData = "https://www.12306.cn/index/otn/queryDishonest/query";
//天气查询 跳转第三方地址
var weatherTitle = 'http://www.weather.com.cn/weather/';
//订餐的url
var orderDinner = 'https://exservice.12306.cn/excater/list.html'; // 订餐

//发送ltime、stime
var sendDataUrl = send_url + "/m/v1/website/index";
// 请求开始
var getSearchUrl = search_base_url + "/search/v1/h5/search";
var getTrainList = search_base_url + '/search/v1/train/search'; //根据模糊查询获取车次列表
var getZhengWan = dynimic_url_path_ie + '/zwdch/queryCC'; // 正晚点查询接口

var getScSnameListpr = dynimic_url_path_ie + '/index12306/queryScSname'; //根据城市码获取城市里都有那些车站 用于起售时间页
var getTicektCheckListpr = dynimic_url_path_ie + '/index12306/queryTicketCheck'; //根据车次,日期 获取检票口
var getCityStation = dynimic_url_path_ie + '/index12306/queryStopStations'; //根据车号和时间获取各个车站

// 配置信息
var loginConf = dynimic_url_path_ie + '/login/conf'
// 统一认证登录
var passport_appId = 'otn';
var passport_apptk_static = dynimic_url + '/passport/web/auth/uamtk-static';
// 退出
var logout = dynimic_url_path + '/login/loginOut';

// 请求结束
//信用信息图片路径
var imgBan1 = static_url_path + "/images/empty.png"
var imgBan2 = static_url_path + "/images/empty.png"
//信用信息图片路径结束
//模板静态资源路径

//旅游专列
var travelData = dynimic_url_path_ie + '/index12306/getTravelList';
//服务url
var servicesData = dynimic_url_path_ie + '/index12306/getServiceList';
// 公告
var listData = dynimic_url_path_ie + '/index12306/getNews';
var weatherData = static_url_path + '/script/core/json/weather_station.json'; // 天气

// 滑块
var checkSlide = dynimic_url_path_ie + '/slide/checkSlide';

//模板静态资源路径结束
// 页跳转开始
var singleWayToOld = dynimic_url_path + '/leftTicket/init'; //单程往返确定的跳转
var continuityWayToOld = dynimic_url_path + '/lcQuery/init'; //连续确定的跳转
// var quitUrl = dynimic_url_path + '/queryOrder/init';//退改签
var zwdUrl = dynimic_url_path + '/zwdch/init'; //正晚点
var checkInUrl = static_url_path + '/view/infos/ticket_check.html'
var sellInUrl = static_url_path + '/view/infos/sale_time.html'
var browserForie = static_url_path + '/view/forie.html'; //浏览器版本过低，提示页面

// 起止售时间
var queryLimitTimeUrl= dynimic_url_path_ie +'/index12306/queryLimitTime';
// 同城
var getScSnameListprIntraCity= dynimic_url_path_ie +'/index12306/queryLCtime';
//起售时间
var queryAllCacheSaleTimeUrl = dynimic_url_path_ie +'/index12306/queryAllCacheSaleTime';

// 预售时间
var stu_control = 60;
var other_control = 30;

// data-type="1"
var href_baseUrl_1 = static_url_ie;
var href_path_1 = path+'/';

// data-type="2"
var href_baseUrl_2 = static_url;
var href_path_2 = publicName+'/';

// data-type="3"
var href_baseUrl_3 = 'https://cx.12306.cn/';
var href_path_3 = 'tlcx/';

// data-type="4"
var href_baseUrl_4 = 'https://www.12306.cn/';
var href_path_4 = 'mormhweb/';

// data-type="5"
var href_baseUrl_5 = 'https://travel.12306.cn/';
var href_path_5 = 'portal/';

// data-type="6"
var href_baseUrl_6 = 'https://dynamic.12306.cn/';
var href_path_6 = 'otn/';

// data-type="10"
var href_baseUrl_10 = 'https://exservice.12306.cn/';
var href_path_10 = 'excater/';

// 正晚点
var lateSpotHtml = href_baseUrl_2 + href_path_2 + 'view/train_order.html';
var queryTrainStatusUrl = dynimic_url_path_ie +"/index12306/queryTrainStatus";
var getTrainCity = dynimic_url_path_ie+'/reservationQuery/getTrainCity';
// var getTrainCity = href_baseUrl_2 + href_path_2 + 'reservationQuery/getTrainCity';


define("core/common/url_config", function(){});

(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define('handlebars',[],factory);else if(typeof exports==='object')exports["Handlebars"]=factory();else root["Handlebars"]=factory()})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;var _handlebarsRuntime=__webpack_require__(2);var _handlebarsRuntime2=_interopRequireDefault(_handlebarsRuntime);var _handlebarsCompilerAst=__webpack_require__(35);var _handlebarsCompilerAst2=_interopRequireDefault(_handlebarsCompilerAst);var _handlebarsCompilerBase=__webpack_require__(36);var _handlebarsCompilerCompiler=__webpack_require__(41);var _handlebarsCompilerJavascriptCompiler=__webpack_require__(42);var _handlebarsCompilerJavascriptCompiler2=_interopRequireDefault(_handlebarsCompilerJavascriptCompiler);var _handlebarsCompilerVisitor=__webpack_require__(39);var _handlebarsCompilerVisitor2=_interopRequireDefault(_handlebarsCompilerVisitor);var _handlebarsNoConflict=__webpack_require__(34);var _handlebarsNoConflict2=_interopRequireDefault(_handlebarsNoConflict);var _create=_handlebarsRuntime2['default'].create;function create(){var hb=_create();hb.compile=function(input,options){return _handlebarsCompilerCompiler.compile(input,options,hb)};hb.precompile=function(input,options){return _handlebarsCompilerCompiler.precompile(input,options,hb)};hb.AST=_handlebarsCompilerAst2['default'];hb.Compiler=_handlebarsCompilerCompiler.Compiler;hb.JavaScriptCompiler=_handlebarsCompilerJavascriptCompiler2['default'];hb.Parser=_handlebarsCompilerBase.parser;hb.parse=_handlebarsCompilerBase.parse;return hb}var inst=create();inst.create=create;_handlebarsNoConflict2['default'](inst);inst.Visitor=_handlebarsCompilerVisitor2['default'];inst['default']=inst;exports['default']=inst;module.exports=exports['default']}),(function(module,exports){"use strict";exports["default"]=function(obj){return obj&&obj.__esModule?obj:{"default":obj}};exports.__esModule=true}),(function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(3)['default'];var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;var _handlebarsBase=__webpack_require__(4);var base=_interopRequireWildcard(_handlebarsBase);var _handlebarsSafeString=__webpack_require__(21);var _handlebarsSafeString2=_interopRequireDefault(_handlebarsSafeString);var _handlebarsException=__webpack_require__(6);var _handlebarsException2=_interopRequireDefault(_handlebarsException);var _handlebarsUtils=__webpack_require__(5);var Utils=_interopRequireWildcard(_handlebarsUtils);var _handlebarsRuntime=__webpack_require__(22);var runtime=_interopRequireWildcard(_handlebarsRuntime);var _handlebarsNoConflict=__webpack_require__(34);var _handlebarsNoConflict2=_interopRequireDefault(_handlebarsNoConflict);function create(){var hb=new base.HandlebarsEnvironment();Utils.extend(hb,base);hb.SafeString=_handlebarsSafeString2['default'];hb.Exception=_handlebarsException2['default'];hb.Utils=Utils;hb.escapeExpression=Utils.escapeExpression;hb.VM=runtime;hb.template=function(spec){return runtime.template(spec,hb)};return hb}var inst=create();inst.create=create;_handlebarsNoConflict2['default'](inst);inst['default']=inst;exports['default']=inst;module.exports=exports['default']}),(function(module,exports){"use strict";exports["default"]=function(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj["default"]=obj;return newObj}};exports.__esModule=true}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;exports.HandlebarsEnvironment=HandlebarsEnvironment;var _utils=__webpack_require__(5);var _exception=__webpack_require__(6);var _exception2=_interopRequireDefault(_exception);var _helpers=__webpack_require__(10);var _decorators=__webpack_require__(18);var _logger=__webpack_require__(20);var _logger2=_interopRequireDefault(_logger);var VERSION='4.0.11';exports.VERSION=VERSION;var COMPILER_REVISION=7;exports.COMPILER_REVISION=COMPILER_REVISION;var REVISION_CHANGES={1:'<= 1.0.rc.2',2:'== 1.0.0-rc.3',3:'== 1.0.0-rc.4',4:'== 1.x.x',5:'== 2.0.0-alpha.x',6:'>= 2.0.0-beta.1',7:'>= 4.0.0'};exports.REVISION_CHANGES=REVISION_CHANGES;var objectType='[object Object]';function HandlebarsEnvironment(helpers,partials,decorators){this.helpers=helpers||{};this.partials=partials||{};this.decorators=decorators||{};_helpers.registerDefaultHelpers(this);_decorators.registerDefaultDecorators(this)}HandlebarsEnvironment.prototype={constructor:HandlebarsEnvironment,logger:_logger2['default'],log:_logger2['default'].log,registerHelper:function registerHelper(name,fn){if(_utils.toString.call(name)===objectType){if(fn){throw new _exception2['default']('Arg not supported with multiple helpers');}_utils.extend(this.helpers,name)}else{this.helpers[name]=fn}},unregisterHelper:function unregisterHelper(name){delete this.helpers[name]},registerPartial:function registerPartial(name,partial){if(_utils.toString.call(name)===objectType){_utils.extend(this.partials,name)}else{if(typeof partial==='undefined'){throw new _exception2['default']('Attempting to register a partial called "'+name+'" as undefined');}this.partials[name]=partial}},unregisterPartial:function unregisterPartial(name){delete this.partials[name]},registerDecorator:function registerDecorator(name,fn){if(_utils.toString.call(name)===objectType){if(fn){throw new _exception2['default']('Arg not supported with multiple decorators');}_utils.extend(this.decorators,name)}else{this.decorators[name]=fn}},unregisterDecorator:function unregisterDecorator(name){delete this.decorators[name]}};var log=_logger2['default'].log;exports.log=log;exports.createFrame=_utils.createFrame;exports.logger=_logger2['default']}),(function(module,exports){exports.__esModule=true;exports.extend=extend;exports.indexOf=indexOf;exports.escapeExpression=escapeExpression;exports.isEmpty=isEmpty;exports.createFrame=createFrame;exports.blockParams=blockParams;exports.appendContextPath=appendContextPath;var escape={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;','=':'&#x3D;'};var badChars=/[&<>"'`=]/g,possible=/[&<>"'`=]/;function escapeChar(chr){return escape[chr]}function extend(obj){for(var i=1;i<arguments.length;i++){for(var key in arguments[i]){if(Object.prototype.hasOwnProperty.call(arguments[i],key)){obj[key]=arguments[i][key]}}}return obj}var toString=Object.prototype.toString;exports.toString=toString;var isFunction=function isFunction(value){return typeof value==='function'};if(isFunction(/x/)){exports.isFunction=isFunction=function(value){return typeof value==='function'&&toString.call(value)==='[object Function]'}}exports.isFunction=isFunction;var isArray=Array.isArray||function(value){return value&&typeof value==='object'?toString.call(value)==='[object Array]':false};exports.isArray=isArray;function indexOf(array,value){for(var i=0,len=array.length;i<len;i++){if(array[i]===value){return i}}return-1}function escapeExpression(string){if(typeof string!=='string'){if(string&&string.toHTML){return string.toHTML()}else if(string==null){return''}else if(!string){return string+''}string=''+string}if(!possible.test(string)){return string}return string.replace(badChars,escapeChar)}function isEmpty(value){if(!value&&value!==0){return true}else if(isArray(value)&&value.length===0){return true}else{return false}}function createFrame(object){var frame=extend({},object);frame._parent=object;return frame}function blockParams(params,ids){params.path=ids;return params}function appendContextPath(contextPath,id){return(contextPath?contextPath+'.':'')+id}}),(function(module,exports,__webpack_require__){var _Object$defineProperty=__webpack_require__(7)['default'];exports.__esModule=true;var errorProps=['description','fileName','lineNumber','message','name','number','stack'];function Exception(message,node){var loc=node&&node.loc,line=undefined,column=undefined;if(loc){line=loc.start.line;column=loc.start.column;message+=' - '+line+':'+column}var tmp=Error.prototype.constructor.call(this,message);for(var idx=0;idx<errorProps.length;idx++){this[errorProps[idx]]=tmp[errorProps[idx]]}if(Error.captureStackTrace){Error.captureStackTrace(this,Exception)}try{if(loc){this.lineNumber=line;if(_Object$defineProperty){Object.defineProperty(this,'column',{value:column,enumerable:true})}else{this.column=column}}}catch(nop){}}Exception.prototype=new Error();exports['default']=Exception;module.exports=exports['default']}),(function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(8),__esModule:true}}),(function(module,exports,__webpack_require__){var $=__webpack_require__(9);module.exports=function defineProperty(it,key,desc){return $.setDesc(it,key,desc)}}),(function(module,exports){var $Object=Object;module.exports={create:$Object.create,getProto:$Object.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:$Object.getOwnPropertyDescriptor,setDesc:$Object.defineProperty,setDescs:$Object.defineProperties,getKeys:$Object.keys,getNames:$Object.getOwnPropertyNames,getSymbols:$Object.getOwnPropertySymbols,each:[].forEach}}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;exports.registerDefaultHelpers=registerDefaultHelpers;var _helpersBlockHelperMissing=__webpack_require__(11);var _helpersBlockHelperMissing2=_interopRequireDefault(_helpersBlockHelperMissing);var _helpersEach=__webpack_require__(12);var _helpersEach2=_interopRequireDefault(_helpersEach);var _helpersHelperMissing=__webpack_require__(13);var _helpersHelperMissing2=_interopRequireDefault(_helpersHelperMissing);var _helpersIf=__webpack_require__(14);var _helpersIf2=_interopRequireDefault(_helpersIf);var _helpersLog=__webpack_require__(15);var _helpersLog2=_interopRequireDefault(_helpersLog);var _helpersLookup=__webpack_require__(16);var _helpersLookup2=_interopRequireDefault(_helpersLookup);var _helpersWith=__webpack_require__(17);var _helpersWith2=_interopRequireDefault(_helpersWith);function registerDefaultHelpers(instance){_helpersBlockHelperMissing2['default'](instance);_helpersEach2['default'](instance);_helpersHelperMissing2['default'](instance);_helpersIf2['default'](instance);_helpersLog2['default'](instance);_helpersLookup2['default'](instance);_helpersWith2['default'](instance)}}),(function(module,exports,__webpack_require__){exports.__esModule=true;var _utils=__webpack_require__(5);exports['default']=function(instance){instance.registerHelper('blockHelperMissing',function(context,options){var inverse=options.inverse,fn=options.fn;if(context===true){return fn(this)}else if(context===false||context==null){return inverse(this)}else if(_utils.isArray(context)){if(context.length>0){if(options.ids){options.ids=[options.name]}return instance.helpers.each(context,options)}else{return inverse(this)}}else{if(options.data&&options.ids){var data=_utils.createFrame(options.data);data.contextPath=_utils.appendContextPath(options.data.contextPath,options.name);options={data:data}}return fn(context,options)}})};module.exports=exports['default']}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;var _utils=__webpack_require__(5);var _exception=__webpack_require__(6);var _exception2=_interopRequireDefault(_exception);exports['default']=function(instance){instance.registerHelper('each',function(context,options){if(!options){throw new _exception2['default']('Must pass iterator to #each');}var fn=options.fn,inverse=options.inverse,i=0,ret='',data=undefined,contextPath=undefined;if(options.data&&options.ids){contextPath=_utils.appendContextPath(options.data.contextPath,options.ids[0])+'.'}if(_utils.isFunction(context)){context=context.call(this)}if(options.data){data=_utils.createFrame(options.data)}function execIteration(field,index,last){if(data){data.key=field;data.index=index;data.first=index===0;data.last=!!last;if(contextPath){data.contextPath=contextPath+field}}ret=ret+fn(context[field],{data:data,blockParams:_utils.blockParams([context[field],field],[contextPath+field,null])})}if(context&&typeof context==='object'){if(_utils.isArray(context)){for(var j=context.length;i<j;i++){if(i in context){execIteration(i,i,i===context.length-1)}}}else{var priorKey=undefined;for(var key in context){if(context.hasOwnProperty(key)){if(priorKey!==undefined){execIteration(priorKey,i-1)}priorKey=key;i++}}if(priorKey!==undefined){execIteration(priorKey,i-1,true)}}}if(i===0){ret=inverse(this)}return ret})};module.exports=exports['default']}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;var _exception=__webpack_require__(6);var _exception2=_interopRequireDefault(_exception);exports['default']=function(instance){instance.registerHelper('helperMissing',function(){if(arguments.length===1){return undefined}else{throw new _exception2['default']('Missing helper: "'+arguments[arguments.length-1].name+'"');}})};module.exports=exports['default']}),(function(module,exports,__webpack_require__){exports.__esModule=true;var _utils=__webpack_require__(5);exports['default']=function(instance){instance.registerHelper('if',function(conditional,options){if(_utils.isFunction(conditional)){conditional=conditional.call(this)}if(!options.hash.includeZero&&!conditional||_utils.isEmpty(conditional)){return options.inverse(this)}else{return options.fn(this)}});instance.registerHelper('unless',function(conditional,options){return instance.helpers['if'].call(this,conditional,{fn:options.inverse,inverse:options.fn,hash:options.hash})})};module.exports=exports['default']}),(function(module,exports){exports.__esModule=true;exports['default']=function(instance){instance.registerHelper('log',function(){var args=[undefined],options=arguments[arguments.length-1];for(var i=0;i<arguments.length-1;i++){args.push(arguments[i])}var level=1;if(options.hash.level!=null){level=options.hash.level}else if(options.data&&options.data.level!=null){level=options.data.level}args[0]=level;instance.log.apply(instance,args)})};module.exports=exports['default']}),(function(module,exports){exports.__esModule=true;exports['default']=function(instance){instance.registerHelper('lookup',function(obj,field){return obj&&obj[field]})};module.exports=exports['default']}),(function(module,exports,__webpack_require__){exports.__esModule=true;var _utils=__webpack_require__(5);exports['default']=function(instance){instance.registerHelper('with',function(context,options){if(_utils.isFunction(context)){context=context.call(this)}var fn=options.fn;if(!_utils.isEmpty(context)){var data=options.data;if(options.data&&options.ids){data=_utils.createFrame(options.data);data.contextPath=_utils.appendContextPath(options.data.contextPath,options.ids[0])}return fn(context,{data:data,blockParams:_utils.blockParams([context],[data&&data.contextPath])})}else{return options.inverse(this)}})};module.exports=exports['default']}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;exports.registerDefaultDecorators=registerDefaultDecorators;var _decoratorsInline=__webpack_require__(19);var _decoratorsInline2=_interopRequireDefault(_decoratorsInline);function registerDefaultDecorators(instance){_decoratorsInline2['default'](instance)}}),(function(module,exports,__webpack_require__){exports.__esModule=true;var _utils=__webpack_require__(5);exports['default']=function(instance){instance.registerDecorator('inline',function(fn,props,container,options){var ret=fn;if(!props.partials){props.partials={};ret=function(context,options){var original=container.partials;container.partials=_utils.extend({},original,props.partials);var ret=fn(context,options);container.partials=original;return ret}}props.partials[options.args[0]]=options.fn;return ret})};module.exports=exports['default']}),(function(module,exports,__webpack_require__){exports.__esModule=true;var _utils=__webpack_require__(5);var logger={methodMap:['debug','info','warn','error'],level:'info',lookupLevel:function lookupLevel(level){if(typeof level==='string'){var levelMap=_utils.indexOf(logger.methodMap,level.toLowerCase());if(levelMap>=0){level=levelMap}else{level=parseInt(level,10)}}return level},log:function log(level){level=logger.lookupLevel(level);if(typeof console!=='undefined'&&logger.lookupLevel(logger.level)<=level){var method=logger.methodMap[level];if(!console[method]){method='log'}for(var _len=arguments.length,message=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){message[_key-1]=arguments[_key]}console[method].apply(console,message)}}};exports['default']=logger;module.exports=exports['default']}),(function(module,exports){exports.__esModule=true;function SafeString(string){this.string=string}SafeString.prototype.toString=SafeString.prototype.toHTML=function(){return''+this.string};exports['default']=SafeString;module.exports=exports['default']}),(function(module,exports,__webpack_require__){var _Object$seal=__webpack_require__(23)['default'];var _interopRequireWildcard=__webpack_require__(3)['default'];var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;exports.checkRevision=checkRevision;exports.template=template;exports.wrapProgram=wrapProgram;exports.resolvePartial=resolvePartial;exports.invokePartial=invokePartial;exports.noop=noop;var _utils=__webpack_require__(5);var Utils=_interopRequireWildcard(_utils);var _exception=__webpack_require__(6);var _exception2=_interopRequireDefault(_exception);var _base=__webpack_require__(4);function checkRevision(compilerInfo){var compilerRevision=compilerInfo&&compilerInfo[0]||1,currentRevision=_base.COMPILER_REVISION;if(compilerRevision!==currentRevision){if(compilerRevision<currentRevision){var runtimeVersions=_base.REVISION_CHANGES[currentRevision],compilerVersions=_base.REVISION_CHANGES[compilerRevision];throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ('+runtimeVersions+') or downgrade your runtime to an older version ('+compilerVersions+').');}else{throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ('+compilerInfo[1]+').');}}}function template(templateSpec,env){if(!env){throw new _exception2['default']('No environment passed to template');}if(!templateSpec||!templateSpec.main){throw new _exception2['default']('Unknown template object: '+typeof templateSpec);}templateSpec.main.decorator=templateSpec.main_d;env.VM.checkRevision(templateSpec.compiler);function invokePartialWrapper(partial,context,options){if(options.hash){context=Utils.extend({},context,options.hash);if(options.ids){options.ids[0]=true}}partial=env.VM.resolvePartial.call(this,partial,context,options);var result=env.VM.invokePartial.call(this,partial,context,options);if(result==null&&env.compile){options.partials[options.name]=env.compile(partial,templateSpec.compilerOptions,env);result=options.partials[options.name](context,options)}if(result!=null){if(options.indent){var lines=result.split('\n');for(var i=0,l=lines.length;i<l;i++){if(!lines[i]&&i+1===l){break}lines[i]=options.indent+lines[i]}result=lines.join('\n')}return result}else{throw new _exception2['default']('The partial '+options.name+' could not be compiled when running in runtime-only mode');}}var container={strict:function strict(obj,name){if(!(name in obj)){throw new _exception2['default']('"'+name+'" not defined in '+obj);}return obj[name]},lookup:function lookup(depths,name){var len=depths.length;for(var i=0;i<len;i++){if(depths[i]&&depths[i][name]!=null){return depths[i][name]}}},lambda:function lambda(current,context){return typeof current==='function'?current.call(context):current},escapeExpression:Utils.escapeExpression,invokePartial:invokePartialWrapper,fn:function fn(i){var ret=templateSpec[i];ret.decorator=templateSpec[i+'_d'];return ret},programs:[],program:function program(i,data,declaredBlockParams,blockParams,depths){var programWrapper=this.programs[i],fn=this.fn(i);if(data||depths||blockParams||declaredBlockParams){programWrapper=wrapProgram(this,i,fn,data,declaredBlockParams,blockParams,depths)}else if(!programWrapper){programWrapper=this.programs[i]=wrapProgram(this,i,fn)}return programWrapper},data:function data(value,depth){while(value&&depth--){value=value._parent}return value},merge:function merge(param,common){var obj=param||common;if(param&&common&&param!==common){obj=Utils.extend({},common,param)}return obj},nullContext:_Object$seal({}),noop:env.VM.noop,compilerInfo:templateSpec.compiler};function ret(context){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var data=options.data;ret._setup(options);if(!options.partial&&templateSpec.useData){data=initData(context,data)}var depths=undefined,blockParams=templateSpec.useBlockParams?[]:undefined;if(templateSpec.useDepths){if(options.depths){depths=context!=options.depths[0]?[context].concat(options.depths):options.depths}else{depths=[context]}}function main(context){return''+templateSpec.main(container,context,container.helpers,container.partials,data,blockParams,depths)}main=executeDecorators(templateSpec.main,main,container,options.depths||[],data,blockParams);return main(context,options)}ret.isTop=true;ret._setup=function(options){if(!options.partial){container.helpers=container.merge(options.helpers,env.helpers);if(templateSpec.usePartial){container.partials=container.merge(options.partials,env.partials)}if(templateSpec.usePartial||templateSpec.useDecorators){container.decorators=container.merge(options.decorators,env.decorators)}}else{container.helpers=options.helpers;container.partials=options.partials;container.decorators=options.decorators}};ret._child=function(i,data,blockParams,depths){if(templateSpec.useBlockParams&&!blockParams){throw new _exception2['default']('must pass block params');}if(templateSpec.useDepths&&!depths){throw new _exception2['default']('must pass parent depths');}return wrapProgram(container,i,templateSpec[i],data,0,blockParams,depths)};return ret}function wrapProgram(container,i,fn,data,declaredBlockParams,blockParams,depths){function prog(context){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var currentDepths=depths;if(depths&&context!=depths[0]&&!(context===container.nullContext&&depths[0]===null)){currentDepths=[context].concat(depths)}return fn(container,context,container.helpers,container.partials,options.data||data,blockParams&&[options.blockParams].concat(blockParams),currentDepths)}prog=executeDecorators(fn,prog,container,depths,data,blockParams);prog.program=i;prog.depth=depths?depths.length:0;prog.blockParams=declaredBlockParams||0;return prog}function resolvePartial(partial,context,options){if(!partial){if(options.name==='@partial-block'){partial=options.data['partial-block']}else{partial=options.partials[options.name]}}else if(!partial.call&&!options.name){options.name=partial;partial=options.partials[partial]}return partial}function invokePartial(partial,context,options){var currentPartialBlock=options.data&&options.data['partial-block'];options.partial=true;if(options.ids){options.data.contextPath=options.ids[0]||options.data.contextPath}var partialBlock=undefined;if(options.fn&&options.fn!==noop){(function(){options.data=_base.createFrame(options.data);var fn=options.fn;partialBlock=options.data['partial-block']=function partialBlockWrapper(context){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];options.data=_base.createFrame(options.data);options.data['partial-block']=currentPartialBlock;return fn(context,options)};if(fn.partials){options.partials=Utils.extend({},options.partials,fn.partials)}})()}if(partial===undefined&&partialBlock){partial=partialBlock}if(partial===undefined){throw new _exception2['default']('The partial '+options.name+' could not be found');}else if(partial instanceof Function){return partial(context,options)}}function noop(){return''}function initData(context,data){if(!data||!('root'in data)){data=data?_base.createFrame(data):{};data.root=context}return data}function executeDecorators(fn,prog,container,depths,data,blockParams){if(fn.decorator){var props={};prog=fn.decorator(prog,props,container,depths&&depths[0],data,blockParams,depths);Utils.extend(prog,props)}return prog}}),(function(module,exports,__webpack_require__){module.exports={"default":__webpack_require__(24),__esModule:true}}),(function(module,exports,__webpack_require__){__webpack_require__(25);module.exports=__webpack_require__(30).Object.seal}),(function(module,exports,__webpack_require__){var isObject=__webpack_require__(26);__webpack_require__(27)('seal',function($seal){return function seal(it){return $seal&&isObject(it)?$seal(it):it}})}),(function(module,exports){module.exports=function(it){return typeof it==='object'?it!==null:typeof it==='function'}}),(function(module,exports,__webpack_require__){var $export=__webpack_require__(28),core=__webpack_require__(30),fails=__webpack_require__(33);module.exports=function(KEY,exec){var fn=(core.Object||{})[KEY]||Object[KEY],exp={};exp[KEY]=exec(fn);$export($export.S+$export.F*fails(function(){fn(1)}),'Object',exp)}}),(function(module,exports,__webpack_require__){var global=__webpack_require__(29),core=__webpack_require__(30),ctx=__webpack_require__(31),PROTOTYPE='prototype';var $export=function(type,name,source){var IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE],key,own,out;if(IS_GLOBAL)source=name;for(key in source){own=!IS_FORCED&&target&&key in target;if(own&&key in exports)continue;out=own?target[key]:source[key];exports[key]=IS_GLOBAL&&typeof target[key]!='function'?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?(function(C){var F=function(param){return this instanceof C?new C(param):C(param)};F[PROTOTYPE]=C[PROTOTYPE];return F})(out):IS_PROTO&&typeof out=='function'?ctx(Function.call,out):out;if(IS_PROTO)(exports[PROTOTYPE]||(exports[PROTOTYPE]={}))[key]=out}};$export.F=1;$export.G=2;$export.S=4;$export.P=8;$export.B=16;$export.W=32;module.exports=$export}),(function(module,exports){var global=module.exports=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self:Function('return this')();if(typeof __g=='number')__g=global}),(function(module,exports){var core=module.exports={version:'1.2.6'};if(typeof __e=='number')__e=core}),(function(module,exports,__webpack_require__){var aFunction=__webpack_require__(32);module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}}),(function(module,exports){module.exports=function(it){if(typeof it!='function')throw TypeError(it+' is not a function!');return it}}),(function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return true}}}),(function(module,exports){(function(global){exports.__esModule=true;exports['default']=function(Handlebars){var root=typeof global!=='undefined'?global:window,$Handlebars=root.Handlebars;Handlebars.noConflict=function(){if(root.Handlebars===Handlebars){root.Handlebars=$Handlebars}return Handlebars}};module.exports=exports['default']}.call(exports,(function(){return this}())))}),(function(module,exports){exports.__esModule=true;var AST={helpers:{helperExpression:function helperExpression(node){return node.type==='SubExpression'||(node.type==='MustacheStatement'||node.type==='BlockStatement')&&!!(node.params&&node.params.length||node.hash)},scopedId:function scopedId(path){return(/^\.|this\b/.test(path.original))},simpleId:function simpleId(path){return path.parts.length===1&&!AST.helpers.scopedId(path)&&!path.depth}}};exports['default']=AST;module.exports=exports['default']}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];var _interopRequireWildcard=__webpack_require__(3)['default'];exports.__esModule=true;exports.parse=parse;var _parser=__webpack_require__(37);var _parser2=_interopRequireDefault(_parser);var _whitespaceControl=__webpack_require__(38);var _whitespaceControl2=_interopRequireDefault(_whitespaceControl);var _helpers=__webpack_require__(40);var Helpers=_interopRequireWildcard(_helpers);var _utils=__webpack_require__(5);exports.parser=_parser2['default'];var yy={};_utils.extend(yy,Helpers);function parse(input,options){if(input.type==='Program'){return input}_parser2['default'].yy=yy;yy.locInfo=function(locInfo){return new yy.SourceLocation(options&&options.srcName,locInfo)};var strip=new _whitespaceControl2['default'](options);return strip.accept(_parser2['default'].parse(input))}}),(function(module,exports){"use strict";exports.__esModule=true;var handlebars=(function(){var parser={trace:function trace(){},yy:{},symbols_:{"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"partialBlock":12,"content":13,"COMMENT":14,"CONTENT":15,"openRawBlock":16,"rawBlock_repetition_plus0":17,"END_RAW_BLOCK":18,"OPEN_RAW_BLOCK":19,"helperName":20,"openRawBlock_repetition0":21,"openRawBlock_option0":22,"CLOSE_RAW_BLOCK":23,"openBlock":24,"block_option0":25,"closeBlock":26,"openInverse":27,"block_option1":28,"OPEN_BLOCK":29,"openBlock_repetition0":30,"openBlock_option0":31,"openBlock_option1":32,"CLOSE":33,"OPEN_INVERSE":34,"openInverse_repetition0":35,"openInverse_option0":36,"openInverse_option1":37,"openInverseChain":38,"OPEN_INVERSE_CHAIN":39,"openInverseChain_repetition0":40,"openInverseChain_option0":41,"openInverseChain_option1":42,"inverseAndProgram":43,"INVERSE":44,"inverseChain":45,"inverseChain_option0":46,"OPEN_ENDBLOCK":47,"OPEN":48,"mustache_repetition0":49,"mustache_option0":50,"OPEN_UNESCAPED":51,"mustache_repetition1":52,"mustache_option1":53,"CLOSE_UNESCAPED":54,"OPEN_PARTIAL":55,"partialName":56,"partial_repetition0":57,"partial_option0":58,"openPartialBlock":59,"OPEN_PARTIAL_BLOCK":60,"openPartialBlock_repetition0":61,"openPartialBlock_option0":62,"param":63,"sexpr":64,"OPEN_SEXPR":65,"sexpr_repetition0":66,"sexpr_option0":67,"CLOSE_SEXPR":68,"hash":69,"hash_repetition_plus0":70,"hashSegment":71,"ID":72,"EQUALS":73,"blockParams":74,"OPEN_BLOCK_PARAMS":75,"blockParams_repetition_plus0":76,"CLOSE_BLOCK_PARAMS":77,"path":78,"dataName":79,"STRING":80,"NUMBER":81,"BOOLEAN":82,"UNDEFINED":83,"NULL":84,"DATA":85,"pathSegments":86,"SEP":87,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 1:return $$[$0-1];break;case 2:this.$=yy.prepareProgram($$[$0]);break;case 3:this.$=$$[$0];break;case 4:this.$=$$[$0];break;case 5:this.$=$$[$0];break;case 6:this.$=$$[$0];break;case 7:this.$=$$[$0];break;case 8:this.$=$$[$0];break;case 9:this.$={type:'CommentStatement',value:yy.stripComment($$[$0]),strip:yy.stripFlags($$[$0],$$[$0]),loc:yy.locInfo(this._$)};break;case 10:this.$={type:'ContentStatement',original:$$[$0],value:$$[$0],loc:yy.locInfo(this._$)};break;case 11:this.$=yy.prepareRawBlock($$[$0-2],$$[$0-1],$$[$0],this._$);break;case 12:this.$={path:$$[$0-3],params:$$[$0-2],hash:$$[$0-1]};break;case 13:this.$=yy.prepareBlock($$[$0-3],$$[$0-2],$$[$0-1],$$[$0],false,this._$);break;case 14:this.$=yy.prepareBlock($$[$0-3],$$[$0-2],$$[$0-1],$$[$0],true,this._$);break;case 15:this.$={open:$$[$0-5],path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 16:this.$={path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 17:this.$={path:$$[$0-4],params:$$[$0-3],hash:$$[$0-2],blockParams:$$[$0-1],strip:yy.stripFlags($$[$0-5],$$[$0])};break;case 18:this.$={strip:yy.stripFlags($$[$0-1],$$[$0-1]),program:$$[$0]};break;case 19:var inverse=yy.prepareBlock($$[$0-2],$$[$0-1],$$[$0],$$[$0],false,this._$),program=yy.prepareProgram([inverse],$$[$0-1].loc);program.chained=true;this.$={strip:$$[$0-2].strip,program:program,chain:true};break;case 20:this.$=$$[$0];break;case 21:this.$={path:$$[$0-1],strip:yy.stripFlags($$[$0-2],$$[$0])};break;case 22:this.$=yy.prepareMustache($$[$0-3],$$[$0-2],$$[$0-1],$$[$0-4],yy.stripFlags($$[$0-4],$$[$0]),this._$);break;case 23:this.$=yy.prepareMustache($$[$0-3],$$[$0-2],$$[$0-1],$$[$0-4],yy.stripFlags($$[$0-4],$$[$0]),this._$);break;case 24:this.$={type:'PartialStatement',name:$$[$0-3],params:$$[$0-2],hash:$$[$0-1],indent:'',strip:yy.stripFlags($$[$0-4],$$[$0]),loc:yy.locInfo(this._$)};break;case 25:this.$=yy.preparePartialBlock($$[$0-2],$$[$0-1],$$[$0],this._$);break;case 26:this.$={path:$$[$0-3],params:$$[$0-2],hash:$$[$0-1],strip:yy.stripFlags($$[$0-4],$$[$0])};break;case 27:this.$=$$[$0];break;case 28:this.$=$$[$0];break;case 29:this.$={type:'SubExpression',path:$$[$0-3],params:$$[$0-2],hash:$$[$0-1],loc:yy.locInfo(this._$)};break;case 30:this.$={type:'Hash',pairs:$$[$0],loc:yy.locInfo(this._$)};break;case 31:this.$={type:'HashPair',key:yy.id($$[$0-2]),value:$$[$0],loc:yy.locInfo(this._$)};break;case 32:this.$=yy.id($$[$0-1]);break;case 33:this.$=$$[$0];break;case 34:this.$=$$[$0];break;case 35:this.$={type:'StringLiteral',value:$$[$0],original:$$[$0],loc:yy.locInfo(this._$)};break;case 36:this.$={type:'NumberLiteral',value:Number($$[$0]),original:Number($$[$0]),loc:yy.locInfo(this._$)};break;case 37:this.$={type:'BooleanLiteral',value:$$[$0]==='true',original:$$[$0]==='true',loc:yy.locInfo(this._$)};break;case 38:this.$={type:'UndefinedLiteral',original:undefined,value:undefined,loc:yy.locInfo(this._$)};break;case 39:this.$={type:'NullLiteral',original:null,value:null,loc:yy.locInfo(this._$)};break;case 40:this.$=$$[$0];break;case 41:this.$=$$[$0];break;case 42:this.$=yy.preparePath(true,$$[$0],this._$);break;case 43:this.$=yy.preparePath(false,$$[$0],this._$);break;case 44:$$[$0-2].push({part:yy.id($$[$0]),original:$$[$0],separator:$$[$0-1]});this.$=$$[$0-2];break;case 45:this.$=[{part:yy.id($$[$0]),original:$$[$0]}];break;case 46:this.$=[];break;case 47:$$[$0-1].push($$[$0]);break;case 48:this.$=[$$[$0]];break;case 49:$$[$0-1].push($$[$0]);break;case 50:this.$=[];break;case 51:$$[$0-1].push($$[$0]);break;case 58:this.$=[];break;case 59:$$[$0-1].push($$[$0]);break;case 64:this.$=[];break;case 65:$$[$0-1].push($$[$0]);break;case 70:this.$=[];break;case 71:$$[$0-1].push($$[$0]);break;case 78:this.$=[];break;case 79:$$[$0-1].push($$[$0]);break;case 82:this.$=[];break;case 83:$$[$0-1].push($$[$0]);break;case 86:this.$=[];break;case 87:$$[$0-1].push($$[$0]);break;case 90:this.$=[];break;case 91:$$[$0-1].push($$[$0]);break;case 94:this.$=[];break;case 95:$$[$0-1].push($$[$0]);break;case 98:this.$=[$$[$0]];break;case 99:$$[$0-1].push($$[$0]);break;case 100:this.$=[$$[$0]];break;case 101:$$[$0-1].push($$[$0]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function parseError(str,hash){throw new Error(str);},parse:function parse(input){var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(input);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var yyloc=this.lexer.yylloc;lstack.push(yyloc);var ranges=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;function popStack(n){stack.length=stack.length-2*n;vstack.length=vstack.length-n;lstack.length=lstack.length-n}function lex(){var token;token=self.lexer.lex()||1;if(typeof token!=="number"){token=self.symbols_[token]||token}return token}var symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;while(true){state=stack[stack.length-1];if(this.defaultActions[state]){action=this.defaultActions[state]}else{if(symbol===null||typeof symbol=="undefined"){symbol=lex()}action=table[state]&&table[state][symbol]}if(typeof action==="undefined"||!action.length||!action[0]){var errStr="";if(!recovering){expected=[];for(p in table[state])if(this.terminals_[p]&&p>2){expected.push("'"+this.terminals_[p]+"'")}if(this.lexer.showPosition){errStr="Parse error on line "+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'"}else{errStr="Parse error on line "+(yylineno+1)+": Unexpected "+(symbol==1?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'")}this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected})}}if(action[0]instanceof Array&&action.length>1){throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);}switch(action[0]){case 1:stack.push(symbol);vstack.push(this.lexer.yytext);lstack.push(this.lexer.yylloc);stack.push(action[1]);symbol=null;if(!preErrorSymbol){yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;if(recovering>0)recovering--}else{symbol=preErrorSymbol;preErrorSymbol=null}break;case 2:len=this.productions_[action[1]][1];yyval.$=vstack[vstack.length-len];yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column};if(ranges){yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]}r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack);if(typeof r!=="undefined"){return r}if(len){stack=stack.slice(0,-1*len*2);vstack=vstack.slice(0,-1*len);lstack=lstack.slice(0,-1*len)}stack.push(this.productions_[action[1]][0]);vstack.push(yyval.$);lstack.push(yyval._$);newState=table[stack[stack.length-2]][stack[stack.length-1]];stack.push(newState);break;case 3:return true}}return true}};var lexer=(function(){var lexer={EOF:1,parseError:function parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,hash)}else{throw new Error(str);}},setInput:function setInput(input){this._input=input;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match='';this.conditionStack=['INITIAL'];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this},input:function input(){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match+=ch;this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return ch},unput:function unput(ch){var len=ch.length;var lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-len-1);this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(lines.length-1)this.yylineno-=lines.length-1;var r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len]}return this},more:function more(){this._more=true;return this},less:function less(n){this.unput(this.match.slice(n))},pastInput:function pastInput(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?'...':'')+past.substr(-20).replace(/\n/g,"")},upcomingInput:function upcomingInput(){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length)}return(next.substr(0,20)+(next.length>20?'...':'')).replace(/\n/g,"")},showPosition:function showPosition(){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},next:function next(){if(this.done){return this.EOF}if(!this._input)this.done=true;var token,match,tempMatch,index,col,lines;if(!this._more){this.yytext='';this.match=''}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(!this.options.flex)break}}if(match){lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines)this.yylineno+=lines.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,rules[index],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(token)return token;else return}if(this._input===""){return this.EOF}else{return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function lex(){var r=this.next();if(typeof r!=='undefined'){return r}else{return this.lex()}},begin:function begin(condition){this.conditionStack.push(condition)},popState:function popState(){return this.conditionStack.pop()},_currentRules:function _currentRules(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function topState(){return this.conditionStack[this.conditionStack.length-2]},pushState:function begin(condition){this.begin(condition)}};lexer.options={};lexer.performAction=function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){function strip(start,end){return yy_.yytext=yy_.yytext.substr(start,yy_.yyleng-end)}var YYSTATE=YY_START;switch($avoiding_name_collisions){case 0:if(yy_.yytext.slice(-2)==="\\\\"){strip(0,1);this.begin("mu")}else if(yy_.yytext.slice(-1)==="\\"){strip(0,1);this.begin("emu")}else{this.begin("mu")}if(yy_.yytext)return 15;break;case 1:return 15;break;case 2:this.popState();return 15;break;case 3:this.begin('raw');return 15;break;case 4:this.popState();if(this.conditionStack[this.conditionStack.length-1]==='raw'){return 15}else{yy_.yytext=yy_.yytext.substr(5,yy_.yyleng-9);return'END_RAW_BLOCK'}break;case 5:return 15;break;case 6:this.popState();return 14;break;case 7:return 65;break;case 8:return 68;break;case 9:return 19;break;case 10:this.popState();this.begin('raw');return 23;break;case 11:return 55;break;case 12:return 60;break;case 13:return 29;break;case 14:return 47;break;case 15:this.popState();return 44;break;case 16:this.popState();return 44;break;case 17:return 34;break;case 18:return 39;break;case 19:return 51;break;case 20:return 48;break;case 21:this.unput(yy_.yytext);this.popState();this.begin('com');break;case 22:this.popState();return 14;break;case 23:return 48;break;case 24:return 73;break;case 25:return 72;break;case 26:return 72;break;case 27:return 87;break;case 28:break;case 29:this.popState();return 54;break;case 30:this.popState();return 33;break;case 31:yy_.yytext=strip(1,2).replace(/\\"/g,'"');return 80;break;case 32:yy_.yytext=strip(1,2).replace(/\\'/g,"'");return 80;break;case 33:return 85;break;case 34:return 82;break;case 35:return 82;break;case 36:return 83;break;case 37:return 84;break;case 38:return 81;break;case 39:return 75;break;case 40:return 77;break;case 41:return 72;break;case 42:yy_.yytext=yy_.yytext.replace(/\\([\\\]])/g,'$1');return 72;break;case 43:return'INVALID';break;case 44:return 5;break}};lexer.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/];lexer.conditions={"mu":{"rules":[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[6],"inclusive":false},"raw":{"rules":[3,4,5],"inclusive":false},"INITIAL":{"rules":[0,1,44],"inclusive":true}};return lexer})();parser.lexer=lexer;function Parser(){this.yy={}}Parser.prototype=parser;parser.Parser=Parser;return new Parser()})();exports["default"]=handlebars;module.exports=exports["default"]}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;var _visitor=__webpack_require__(39);var _visitor2=_interopRequireDefault(_visitor);function WhitespaceControl(){var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];this.options=options}WhitespaceControl.prototype=new _visitor2['default']();WhitespaceControl.prototype.Program=function(program){var doStandalone=!this.options.ignoreStandalone;var isRoot=!this.isRootSeen;this.isRootSeen=true;var body=program.body;for(var i=0,l=body.length;i<l;i++){var current=body[i],strip=this.accept(current);if(!strip){continue}var _isPrevWhitespace=isPrevWhitespace(body,i,isRoot),_isNextWhitespace=isNextWhitespace(body,i,isRoot),openStandalone=strip.openStandalone&&_isPrevWhitespace,closeStandalone=strip.closeStandalone&&_isNextWhitespace,inlineStandalone=strip.inlineStandalone&&_isPrevWhitespace&&_isNextWhitespace;if(strip.close){omitRight(body,i,true)}if(strip.open){omitLeft(body,i,true)}if(doStandalone&&inlineStandalone){omitRight(body,i);if(omitLeft(body,i)){if(current.type==='PartialStatement'){current.indent=/([ \t]+$)/.exec(body[i-1].original)[1]}}}if(doStandalone&&openStandalone){omitRight((current.program||current.inverse).body);omitLeft(body,i)}if(doStandalone&&closeStandalone){omitRight(body,i);omitLeft((current.inverse||current.program).body)}}return program};WhitespaceControl.prototype.BlockStatement=WhitespaceControl.prototype.DecoratorBlock=WhitespaceControl.prototype.PartialBlockStatement=function(block){this.accept(block.program);this.accept(block.inverse);var program=block.program||block.inverse,inverse=block.program&&block.inverse,firstInverse=inverse,lastInverse=inverse;if(inverse&&inverse.chained){firstInverse=inverse.body[0].program;while(lastInverse.chained){lastInverse=lastInverse.body[lastInverse.body.length-1].program}}var strip={open:block.openStrip.open,close:block.closeStrip.close,openStandalone:isNextWhitespace(program.body),closeStandalone:isPrevWhitespace((firstInverse||program).body)};if(block.openStrip.close){omitRight(program.body,null,true)}if(inverse){var inverseStrip=block.inverseStrip;if(inverseStrip.open){omitLeft(program.body,null,true)}if(inverseStrip.close){omitRight(firstInverse.body,null,true)}if(block.closeStrip.open){omitLeft(lastInverse.body,null,true)}if(!this.options.ignoreStandalone&&isPrevWhitespace(program.body)&&isNextWhitespace(firstInverse.body)){omitLeft(program.body);omitRight(firstInverse.body)}}else if(block.closeStrip.open){omitLeft(program.body,null,true)}return strip};WhitespaceControl.prototype.Decorator=WhitespaceControl.prototype.MustacheStatement=function(mustache){return mustache.strip};WhitespaceControl.prototype.PartialStatement=WhitespaceControl.prototype.CommentStatement=function(node){var strip=node.strip||{};return{inlineStandalone:true,open:strip.open,close:strip.close}};function isPrevWhitespace(body,i,isRoot){if(i===undefined){i=body.length}var prev=body[i-1],sibling=body[i-2];if(!prev){return isRoot}if(prev.type==='ContentStatement'){return(sibling||!isRoot?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(prev.original)}}function isNextWhitespace(body,i,isRoot){if(i===undefined){i=-1}var next=body[i+1],sibling=body[i+2];if(!next){return isRoot}if(next.type==='ContentStatement'){return(sibling||!isRoot?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(next.original)}}function omitRight(body,i,multiple){var current=body[i==null?0:i+1];if(!current||current.type!=='ContentStatement'||!multiple&&current.rightStripped){return}var original=current.value;current.value=current.value.replace(multiple?/^\s+/:/^[ \t]*\r?\n?/,'');current.rightStripped=current.value!==original}function omitLeft(body,i,multiple){var current=body[i==null?body.length-1:i-1];if(!current||current.type!=='ContentStatement'||!multiple&&current.leftStripped){return}var original=current.value;current.value=current.value.replace(multiple?/\s+$/:/[ \t]+$/,'');current.leftStripped=current.value!==original;return current.leftStripped}exports['default']=WhitespaceControl;module.exports=exports['default']}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;var _exception=__webpack_require__(6);var _exception2=_interopRequireDefault(_exception);function Visitor(){this.parents=[]}Visitor.prototype={constructor:Visitor,mutating:false,acceptKey:function acceptKey(node,name){var value=this.accept(node[name]);if(this.mutating){if(value&&!Visitor.prototype[value.type]){throw new _exception2['default']('Unexpected node type "'+value.type+'" found when accepting '+name+' on '+node.type);}node[name]=value}},acceptRequired:function acceptRequired(node,name){this.acceptKey(node,name);if(!node[name]){throw new _exception2['default'](node.type+' requires '+name);}},acceptArray:function acceptArray(array){for(var i=0,l=array.length;i<l;i++){this.acceptKey(array,i);if(!array[i]){array.splice(i,1);i--;l--}}},accept:function accept(object){if(!object){return}if(!this[object.type]){throw new _exception2['default']('Unknown type: '+object.type,object);}if(this.current){this.parents.unshift(this.current)}this.current=object;var ret=this[object.type](object);this.current=this.parents.shift();if(!this.mutating||ret){return ret}else if(ret!==false){return object}},Program:function Program(program){this.acceptArray(program.body)},MustacheStatement:visitSubExpression,Decorator:visitSubExpression,BlockStatement:visitBlock,DecoratorBlock:visitBlock,PartialStatement:visitPartial,PartialBlockStatement:function PartialBlockStatement(partial){visitPartial.call(this,partial);this.acceptKey(partial,'program')},ContentStatement:function ContentStatement(){},CommentStatement:function CommentStatement(){},SubExpression:visitSubExpression,PathExpression:function PathExpression(){},StringLiteral:function StringLiteral(){},NumberLiteral:function NumberLiteral(){},BooleanLiteral:function BooleanLiteral(){},UndefinedLiteral:function UndefinedLiteral(){},NullLiteral:function NullLiteral(){},Hash:function Hash(hash){this.acceptArray(hash.pairs)},HashPair:function HashPair(pair){this.acceptRequired(pair,'value')}};function visitSubExpression(mustache){this.acceptRequired(mustache,'path');this.acceptArray(mustache.params);this.acceptKey(mustache,'hash')}function visitBlock(block){visitSubExpression.call(this,block);this.acceptKey(block,'program');this.acceptKey(block,'inverse')}function visitPartial(partial){this.acceptRequired(partial,'name');this.acceptArray(partial.params);this.acceptKey(partial,'hash')}exports['default']=Visitor;module.exports=exports['default']}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;exports.SourceLocation=SourceLocation;exports.id=id;exports.stripFlags=stripFlags;exports.stripComment=stripComment;exports.preparePath=preparePath;exports.prepareMustache=prepareMustache;exports.prepareRawBlock=prepareRawBlock;exports.prepareBlock=prepareBlock;exports.prepareProgram=prepareProgram;exports.preparePartialBlock=preparePartialBlock;var _exception=__webpack_require__(6);var _exception2=_interopRequireDefault(_exception);function validateClose(open,close){close=close.path?close.path.original:close;if(open.path.original!==close){var errorNode={loc:open.path.loc};throw new _exception2['default'](open.path.original+" doesn't match "+close,errorNode);}}function SourceLocation(source,locInfo){this.source=source;this.start={line:locInfo.first_line,column:locInfo.first_column};this.end={line:locInfo.last_line,column:locInfo.last_column}}function id(token){if(/^\[.*\]$/.test(token)){return token.substr(1,token.length-2)}else{return token}}function stripFlags(open,close){return{open:open.charAt(2)==='~',close:close.charAt(close.length-3)==='~'}}function stripComment(comment){return comment.replace(/^\{\{~?\!-?-?/,'').replace(/-?-?~?\}\}$/,'')}function preparePath(data,parts,loc){loc=this.locInfo(loc);var original=data?'@':'',dig=[],depth=0,depthString='';for(var i=0,l=parts.length;i<l;i++){var part=parts[i].part,isLiteral=parts[i].original!==part;original+=(parts[i].separator||'')+part;if(!isLiteral&&(part==='..'||part==='.'||part==='this')){if(dig.length>0){throw new _exception2['default']('Invalid path: '+original,{loc:loc})}else if(part==='..'){depth++;depthString+='../'}}else{dig.push(part)}}return{type:'PathExpression',data:data,depth:depth,parts:dig,original:original,loc:loc}}function prepareMustache(path,params,hash,open,strip,locInfo){var escapeFlag=open.charAt(3)||open.charAt(2),escaped=escapeFlag!=='{'&&escapeFlag!=='&';var decorator=/\*/.test(open);return{type:decorator?'Decorator':'MustacheStatement',path:path,params:params,hash:hash,escaped:escaped,strip:strip,loc:this.locInfo(locInfo)}}function prepareRawBlock(openRawBlock,contents,close,locInfo){validateClose(openRawBlock,close);locInfo=this.locInfo(locInfo);var program={type:'Program',body:contents,strip:{},loc:locInfo};return{type:'BlockStatement',path:openRawBlock.path,params:openRawBlock.params,hash:openRawBlock.hash,program:program,openStrip:{},inverseStrip:{},closeStrip:{},loc:locInfo}}function prepareBlock(openBlock,program,inverseAndProgram,close,inverted,locInfo){if(close&&close.path){validateClose(openBlock,close)}var decorator=/\*/.test(openBlock.open);program.blockParams=openBlock.blockParams;var inverse=undefined,inverseStrip=undefined;if(inverseAndProgram){if(decorator){throw new _exception2['default']('Unexpected inverse block on decorator',inverseAndProgram);}if(inverseAndProgram.chain){inverseAndProgram.program.body[0].closeStrip=close.strip}inverseStrip=inverseAndProgram.strip;inverse=inverseAndProgram.program}if(inverted){inverted=inverse;inverse=program;program=inverted}return{type:decorator?'DecoratorBlock':'BlockStatement',path:openBlock.path,params:openBlock.params,hash:openBlock.hash,program:program,inverse:inverse,openStrip:openBlock.strip,inverseStrip:inverseStrip,closeStrip:close&&close.strip,loc:this.locInfo(locInfo)}}function prepareProgram(statements,loc){if(!loc&&statements.length){var firstLoc=statements[0].loc,lastLoc=statements[statements.length-1].loc;if(firstLoc&&lastLoc){loc={source:firstLoc.source,start:{line:firstLoc.start.line,column:firstLoc.start.column},end:{line:lastLoc.end.line,column:lastLoc.end.column}}}}return{type:'Program',body:statements,strip:{},loc:loc}}function preparePartialBlock(open,program,close,locInfo){validateClose(open,close);return{type:'PartialBlockStatement',name:open.path,params:open.params,hash:open.hash,program:program,openStrip:open.strip,closeStrip:close&&close.strip,loc:this.locInfo(locInfo)}}}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;exports.Compiler=Compiler;exports.precompile=precompile;exports.compile=compile;var _exception=__webpack_require__(6);var _exception2=_interopRequireDefault(_exception);var _utils=__webpack_require__(5);var _ast=__webpack_require__(35);var _ast2=_interopRequireDefault(_ast);var slice=[].slice;function Compiler(){}Compiler.prototype={compiler:Compiler,equals:function equals(other){var len=this.opcodes.length;if(other.opcodes.length!==len){return false}for(var i=0;i<len;i++){var opcode=this.opcodes[i],otherOpcode=other.opcodes[i];if(opcode.opcode!==otherOpcode.opcode||!argEquals(opcode.args,otherOpcode.args)){return false}}len=this.children.length;for(var i=0;i<len;i++){if(!this.children[i].equals(other.children[i])){return false}}return true},guid:0,compile:function compile(program,options){this.sourceNode=[];this.opcodes=[];this.children=[];this.options=options;this.stringParams=options.stringParams;this.trackIds=options.trackIds;options.blockParams=options.blockParams||[];var knownHelpers=options.knownHelpers;options.knownHelpers={'helperMissing':true,'blockHelperMissing':true,'each':true,'if':true,'unless':true,'with':true,'log':true,'lookup':true};if(knownHelpers){for(var _name in knownHelpers){if(_name in knownHelpers){this.options.knownHelpers[_name]=knownHelpers[_name]}}}return this.accept(program)},compileProgram:function compileProgram(program){var childCompiler=new this.compiler(),result=childCompiler.compile(program,this.options),guid=this.guid++;this.usePartial=this.usePartial||result.usePartial;this.children[guid]=result;this.useDepths=this.useDepths||result.useDepths;return guid},accept:function accept(node){if(!this[node.type]){throw new _exception2['default']('Unknown type: '+node.type,node);}this.sourceNode.unshift(node);var ret=this[node.type](node);this.sourceNode.shift();return ret},Program:function Program(program){this.options.blockParams.unshift(program.blockParams);var body=program.body,bodyLength=body.length;for(var i=0;i<bodyLength;i++){this.accept(body[i])}this.options.blockParams.shift();this.isSimple=bodyLength===1;this.blockParams=program.blockParams?program.blockParams.length:0;return this},BlockStatement:function BlockStatement(block){transformLiteralToPath(block);var program=block.program,inverse=block.inverse;program=program&&this.compileProgram(program);inverse=inverse&&this.compileProgram(inverse);var type=this.classifySexpr(block);if(type==='helper'){this.helperSexpr(block,program,inverse)}else if(type==='simple'){this.simpleSexpr(block);this.opcode('pushProgram',program);this.opcode('pushProgram',inverse);this.opcode('emptyHash');this.opcode('blockValue',block.path.original)}else{this.ambiguousSexpr(block,program,inverse);this.opcode('pushProgram',program);this.opcode('pushProgram',inverse);this.opcode('emptyHash');this.opcode('ambiguousBlockValue')}this.opcode('append')},DecoratorBlock:function DecoratorBlock(decorator){var program=decorator.program&&this.compileProgram(decorator.program);var params=this.setupFullMustacheParams(decorator,program,undefined),path=decorator.path;this.useDecorators=true;this.opcode('registerDecorator',params.length,path.original)},PartialStatement:function PartialStatement(partial){this.usePartial=true;var program=partial.program;if(program){program=this.compileProgram(partial.program)}var params=partial.params;if(params.length>1){throw new _exception2['default']('Unsupported number of partial arguments: '+params.length,partial);}else if(!params.length){if(this.options.explicitPartialContext){this.opcode('pushLiteral','undefined')}else{params.push({type:'PathExpression',parts:[],depth:0})}}var partialName=partial.name.original,isDynamic=partial.name.type==='SubExpression';if(isDynamic){this.accept(partial.name)}this.setupFullMustacheParams(partial,program,undefined,true);var indent=partial.indent||'';if(this.options.preventIndent&&indent){this.opcode('appendContent',indent);indent=''}this.opcode('invokePartial',isDynamic,partialName,indent);this.opcode('append')},PartialBlockStatement:function PartialBlockStatement(partialBlock){this.PartialStatement(partialBlock)},MustacheStatement:function MustacheStatement(mustache){this.SubExpression(mustache);if(mustache.escaped&&!this.options.noEscape){this.opcode('appendEscaped')}else{this.opcode('append')}},Decorator:function Decorator(decorator){this.DecoratorBlock(decorator)},ContentStatement:function ContentStatement(content){if(content.value){this.opcode('appendContent',content.value)}},CommentStatement:function CommentStatement(){},SubExpression:function SubExpression(sexpr){transformLiteralToPath(sexpr);var type=this.classifySexpr(sexpr);if(type==='simple'){this.simpleSexpr(sexpr)}else if(type==='helper'){this.helperSexpr(sexpr)}else{this.ambiguousSexpr(sexpr)}},ambiguousSexpr:function ambiguousSexpr(sexpr,program,inverse){var path=sexpr.path,name=path.parts[0],isBlock=program!=null||inverse!=null;this.opcode('getContext',path.depth);this.opcode('pushProgram',program);this.opcode('pushProgram',inverse);path.strict=true;this.accept(path);this.opcode('invokeAmbiguous',name,isBlock)},simpleSexpr:function simpleSexpr(sexpr){var path=sexpr.path;path.strict=true;this.accept(path);this.opcode('resolvePossibleLambda')},helperSexpr:function helperSexpr(sexpr,program,inverse){var params=this.setupFullMustacheParams(sexpr,program,inverse),path=sexpr.path,name=path.parts[0];if(this.options.knownHelpers[name]){this.opcode('invokeKnownHelper',params.length,name)}else if(this.options.knownHelpersOnly){throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper '+name,sexpr);}else{path.strict=true;path.falsy=true;this.accept(path);this.opcode('invokeHelper',params.length,path.original,_ast2['default'].helpers.simpleId(path))}},PathExpression:function PathExpression(path){this.addDepth(path.depth);this.opcode('getContext',path.depth);var name=path.parts[0],scoped=_ast2['default'].helpers.scopedId(path),blockParamId=!path.depth&&!scoped&&this.blockParamIndex(name);if(blockParamId){this.opcode('lookupBlockParam',blockParamId,path.parts)}else if(!name){this.opcode('pushContext')}else if(path.data){this.options.data=true;this.opcode('lookupData',path.depth,path.parts,path.strict)}else{this.opcode('lookupOnContext',path.parts,path.falsy,path.strict,scoped)}},StringLiteral:function StringLiteral(string){this.opcode('pushString',string.value)},NumberLiteral:function NumberLiteral(number){this.opcode('pushLiteral',number.value)},BooleanLiteral:function BooleanLiteral(bool){this.opcode('pushLiteral',bool.value)},UndefinedLiteral:function UndefinedLiteral(){this.opcode('pushLiteral','undefined')},NullLiteral:function NullLiteral(){this.opcode('pushLiteral','null')},Hash:function Hash(hash){var pairs=hash.pairs,i=0,l=pairs.length;this.opcode('pushHash');for(;i<l;i++){this.pushParam(pairs[i].value)}while(i--){this.opcode('assignToHash',pairs[i].key)}this.opcode('popHash')},opcode:function opcode(name){this.opcodes.push({opcode:name,args:slice.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function addDepth(depth){if(!depth){return}this.useDepths=true},classifySexpr:function classifySexpr(sexpr){var isSimple=_ast2['default'].helpers.simpleId(sexpr.path);var isBlockParam=isSimple&&!!this.blockParamIndex(sexpr.path.parts[0]);var isHelper=!isBlockParam&&_ast2['default'].helpers.helperExpression(sexpr);var isEligible=!isBlockParam&&(isHelper||isSimple);if(isEligible&&!isHelper){var _name2=sexpr.path.parts[0],options=this.options;if(options.knownHelpers[_name2]){isHelper=true}else if(options.knownHelpersOnly){isEligible=false}}if(isHelper){return'helper'}else if(isEligible){return'ambiguous'}else{return'simple'}},pushParams:function pushParams(params){for(var i=0,l=params.length;i<l;i++){this.pushParam(params[i])}},pushParam:function pushParam(val){var value=val.value!=null?val.value:val.original||'';if(this.stringParams){if(value.replace){value=value.replace(/^(\.?\.\/)*/g,'').replace(/\//g,'.')}if(val.depth){this.addDepth(val.depth)}this.opcode('getContext',val.depth||0);this.opcode('pushStringParam',value,val.type);if(val.type==='SubExpression'){this.accept(val)}}else{if(this.trackIds){var blockParamIndex=undefined;if(val.parts&&!_ast2['default'].helpers.scopedId(val)&&!val.depth){blockParamIndex=this.blockParamIndex(val.parts[0])}if(blockParamIndex){var blockParamChild=val.parts.slice(1).join('.');this.opcode('pushId','BlockParam',blockParamIndex,blockParamChild)}else{value=val.original||value;if(value.replace){value=value.replace(/^this(?:\.|$)/,'').replace(/^\.\//,'').replace(/^\.$/,'')}this.opcode('pushId',val.type,value)}}this.accept(val)}},setupFullMustacheParams:function setupFullMustacheParams(sexpr,program,inverse,omitEmpty){var params=sexpr.params;this.pushParams(params);this.opcode('pushProgram',program);this.opcode('pushProgram',inverse);if(sexpr.hash){this.accept(sexpr.hash)}else{this.opcode('emptyHash',omitEmpty)}return params},blockParamIndex:function blockParamIndex(name){for(var depth=0,len=this.options.blockParams.length;depth<len;depth++){var blockParams=this.options.blockParams[depth],param=blockParams&&_utils.indexOf(blockParams,name);if(blockParams&&param>=0){return[depth,param]}}}};function precompile(input,options,env){if(input==null||typeof input!=='string'&&input.type!=='Program'){throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed '+input);}options=options||{};if(!('data'in options)){options.data=true}if(options.compat){options.useDepths=true}var ast=env.parse(input,options),environment=new env.Compiler().compile(ast,options);return new env.JavaScriptCompiler().compile(environment,options)}function compile(input,options,env){if(options===undefined)options={};if(input==null||typeof input!=='string'&&input.type!=='Program'){throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed '+input);}options=_utils.extend({},options);if(!('data'in options)){options.data=true}if(options.compat){options.useDepths=true}var compiled=undefined;function compileInput(){var ast=env.parse(input,options),environment=new env.Compiler().compile(ast,options),templateSpec=new env.JavaScriptCompiler().compile(environment,options,undefined,true);return env.template(templateSpec)}function ret(context,execOptions){if(!compiled){compiled=compileInput()}return compiled.call(this,context,execOptions)}ret._setup=function(setupOptions){if(!compiled){compiled=compileInput()}return compiled._setup(setupOptions)};ret._child=function(i,data,blockParams,depths){if(!compiled){compiled=compileInput()}return compiled._child(i,data,blockParams,depths)};return ret}function argEquals(a,b){if(a===b){return true}if(_utils.isArray(a)&&_utils.isArray(b)&&a.length===b.length){for(var i=0;i<a.length;i++){if(!argEquals(a[i],b[i])){return false}}return true}}function transformLiteralToPath(sexpr){if(!sexpr.path.parts){var literal=sexpr.path;sexpr.path={type:'PathExpression',data:false,depth:0,parts:[literal.original+''],original:literal.original+'',loc:literal.loc}}}}),(function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(1)['default'];exports.__esModule=true;var _base=__webpack_require__(4);var _exception=__webpack_require__(6);var _exception2=_interopRequireDefault(_exception);var _utils=__webpack_require__(5);var _codeGen=__webpack_require__(43);var _codeGen2=_interopRequireDefault(_codeGen);function Literal(value){this.value=value}function JavaScriptCompiler(){}JavaScriptCompiler.prototype={nameLookup:function nameLookup(parent,name){if(JavaScriptCompiler.isValidJavaScriptVariableName(name)){return[parent,'.',name]}else{return[parent,'[',JSON.stringify(name),']']}},depthedLookup:function depthedLookup(name){return[this.aliasable('container.lookup'),'(depths, "',name,'")']},compilerInfo:function compilerInfo(){var revision=_base.COMPILER_REVISION,versions=_base.REVISION_CHANGES[revision];return[revision,versions]},appendToBuffer:function appendToBuffer(source,location,explicit){if(!_utils.isArray(source)){source=[source]}source=this.source.wrap(source,location);if(this.environment.isSimple){return['return ',source,';']}else if(explicit){return['buffer += ',source,';']}else{source.appendToBuffer=true;return source}},initializeBuffer:function initializeBuffer(){return this.quotedString('')},compile:function compile(environment,options,context,asObject){this.environment=environment;this.options=options;this.stringParams=this.options.stringParams;this.trackIds=this.options.trackIds;this.precompile=!asObject;this.name=this.environment.name;this.isChild=!!context;this.context=context||{decorators:[],programs:[],environments:[]};this.preamble();this.stackSlot=0;this.stackVars=[];this.aliases={};this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.blockParams=[];this.compileChildren(environment,options);this.useDepths=this.useDepths||environment.useDepths||environment.useDecorators||this.options.compat;this.useBlockParams=this.useBlockParams||environment.useBlockParams;var opcodes=environment.opcodes,opcode=undefined,firstLoc=undefined,i=undefined,l=undefined;for(i=0,l=opcodes.length;i<l;i++){opcode=opcodes[i];this.source.currentLocation=opcode.loc;firstLoc=firstLoc||opcode.loc;this[opcode.opcode].apply(this,opcode.args)}this.source.currentLocation=firstLoc;this.pushSource('');if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new _exception2['default']('Compile completed with content left on stack');}if(!this.decorators.isEmpty()){this.useDecorators=true;this.decorators.prepend('var decorators = container.decorators;\n');this.decorators.push('return fn;');if(asObject){this.decorators=Function.apply(this,['fn','props','container','depth0','data','blockParams','depths',this.decorators.merge()])}else{this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');this.decorators.push('}\n');this.decorators=this.decorators.merge()}}else{this.decorators=undefined}var fn=this.createFunctionContext(asObject);if(!this.isChild){var ret={compiler:this.compilerInfo(),main:fn};if(this.decorators){ret.main_d=this.decorators;ret.useDecorators=true}var _context=this.context;var programs=_context.programs;var decorators=_context.decorators;for(i=0,l=programs.length;i<l;i++){if(programs[i]){ret[i]=programs[i];if(decorators[i]){ret[i+'_d']=decorators[i];ret.useDecorators=true}}}if(this.environment.usePartial){ret.usePartial=true}if(this.options.data){ret.useData=true}if(this.useDepths){ret.useDepths=true}if(this.useBlockParams){ret.useBlockParams=true}if(this.options.compat){ret.compat=true}if(!asObject){ret.compiler=JSON.stringify(ret.compiler);this.source.currentLocation={start:{line:1,column:0}};ret=this.objectLiteral(ret);if(options.srcName){ret=ret.toStringWithSourceMap({file:options.destName});ret.map=ret.map&&ret.map.toString()}else{ret=ret.toString()}}else{ret.compilerOptions=this.options}return ret}else{return fn}},preamble:function preamble(){this.lastContext=0;this.source=new _codeGen2['default'](this.options.srcName);this.decorators=new _codeGen2['default'](this.options.srcName)},createFunctionContext:function createFunctionContext(asObject){var varDeclarations='';var locals=this.stackVars.concat(this.registers.list);if(locals.length>0){varDeclarations+=', '+locals.join(', ')}var aliasCount=0;for(var alias in this.aliases){var node=this.aliases[alias];if(this.aliases.hasOwnProperty(alias)&&node.children&&node.referenceCount>1){varDeclarations+=', alias'+ ++aliasCount+'='+alias;node.children[0]='alias'+aliasCount}}var params=['container','depth0','helpers','partials','data'];if(this.useBlockParams||this.useDepths){params.push('blockParams')}if(this.useDepths){params.push('depths')}var source=this.mergeSource(varDeclarations);if(asObject){params.push(source);return Function.apply(this,params)}else{return this.source.wrap(['function(',params.join(','),') {\n  ',source,'}'])}},mergeSource:function mergeSource(varDeclarations){var isSimple=this.environment.isSimple,appendOnly=!this.forceBuffer,appendFirst=undefined,sourceSeen=undefined,bufferStart=undefined,bufferEnd=undefined;this.source.each(function(line){if(line.appendToBuffer){if(bufferStart){line.prepend('  + ')}else{bufferStart=line}bufferEnd=line}else{if(bufferStart){if(!sourceSeen){appendFirst=true}else{bufferStart.prepend('buffer += ')}bufferEnd.add(';');bufferStart=bufferEnd=undefined}sourceSeen=true;if(!isSimple){appendOnly=false}}});if(appendOnly){if(bufferStart){bufferStart.prepend('return ');bufferEnd.add(';')}else if(!sourceSeen){this.source.push('return "";')}}else{varDeclarations+=', buffer = '+(appendFirst?'':this.initializeBuffer());if(bufferStart){bufferStart.prepend('return buffer + ');bufferEnd.add(';')}else{this.source.push('return buffer;')}}if(varDeclarations){this.source.prepend('var '+varDeclarations.substring(2)+(appendFirst?'':';\n'))}return this.source.merge()},blockValue:function blockValue(name){var blockHelperMissing=this.aliasable('helpers.blockHelperMissing'),params=[this.contextName(0)];this.setupHelperArgs(name,0,params);var blockName=this.popStack();params.splice(1,0,blockName);this.push(this.source.functionCall(blockHelperMissing,'call',params))},ambiguousBlockValue:function ambiguousBlockValue(){var blockHelperMissing=this.aliasable('helpers.blockHelperMissing'),params=[this.contextName(0)];this.setupHelperArgs('',0,params,true);this.flushInline();var current=this.topStack();params.splice(1,0,current);this.pushSource(['if (!',this.lastHelper,') { ',current,' = ',this.source.functionCall(blockHelperMissing,'call',params),'}'])},appendContent:function appendContent(content){if(this.pendingContent){content=this.pendingContent+content}else{this.pendingLocation=this.source.currentLocation}this.pendingContent=content},append:function append(){if(this.isInline()){this.replaceStack(function(current){return[' != null ? ',current,' : ""']});this.pushSource(this.appendToBuffer(this.popStack()))}else{var local=this.popStack();this.pushSource(['if (',local,' != null) { ',this.appendToBuffer(local,undefined,true),' }']);if(this.environment.isSimple){this.pushSource(['else { ',this.appendToBuffer("''",undefined,true),' }'])}}},appendEscaped:function appendEscaped(){this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'),'(',this.popStack(),')']))},getContext:function getContext(depth){this.lastContext=depth},pushContext:function pushContext(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function lookupOnContext(parts,falsy,strict,scoped){var i=0;if(!scoped&&this.options.compat&&!this.lastContext){this.push(this.depthedLookup(parts[i++]))}else{this.pushContext()}this.resolvePath('context',parts,i,falsy,strict)},lookupBlockParam:function lookupBlockParam(blockParamId,parts){this.useBlockParams=true;this.push(['blockParams[',blockParamId[0],'][',blockParamId[1],']']);this.resolvePath('context',parts,1)},lookupData:function lookupData(depth,parts,strict){if(!depth){this.pushStackLiteral('data')}else{this.pushStackLiteral('container.data(data, '+depth+')')}this.resolvePath('data',parts,0,true,strict)},resolvePath:function resolvePath(type,parts,i,falsy,strict){var _this=this;if(this.options.strict||this.options.assumeObjects){this.push(strictLookup(this.options.strict&&strict,this,parts,type));return}var len=parts.length;for(;i<len;i++){this.replaceStack(function(current){var lookup=_this.nameLookup(current,parts[i],type);if(!falsy){return[' != null ? ',lookup,' : ',current]}else{return[' && ',lookup]}})}},resolvePossibleLambda:function resolvePossibleLambda(){this.push([this.aliasable('container.lambda'),'(',this.popStack(),', ',this.contextName(0),')'])},pushStringParam:function pushStringParam(string,type){this.pushContext();this.pushString(type);if(type!=='SubExpression'){if(typeof string==='string'){this.pushString(string)}else{this.pushStackLiteral(string)}}},emptyHash:function emptyHash(omitEmpty){if(this.trackIds){this.push('{}')}if(this.stringParams){this.push('{}');this.push('{}')}this.pushStackLiteral(omitEmpty?'undefined':'{}')},pushHash:function pushHash(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function popHash(){var hash=this.hash;this.hash=this.hashes.pop();if(this.trackIds){this.push(this.objectLiteral(hash.ids))}if(this.stringParams){this.push(this.objectLiteral(hash.contexts));this.push(this.objectLiteral(hash.types))}this.push(this.objectLiteral(hash.values))},pushString:function pushString(string){this.pushStackLiteral(this.quotedString(string))},pushLiteral:function pushLiteral(value){this.pushStackLiteral(value)},pushProgram:function pushProgram(guid){if(guid!=null){this.pushStackLiteral(this.programExpression(guid))}else{this.pushStackLiteral(null)}},registerDecorator:function registerDecorator(paramSize,name){var foundDecorator=this.nameLookup('decorators',name,'decorator'),options=this.setupHelperArgs(name,paramSize);this.decorators.push(['fn = ',this.decorators.functionCall(foundDecorator,'',['fn','props','container',options]),' || fn;'])},invokeHelper:function invokeHelper(paramSize,name,isSimple){var nonHelper=this.popStack(),helper=this.setupHelper(paramSize,name),simple=isSimple?[helper.name,' || ']:'';var lookup=['('].concat(simple,nonHelper);if(!this.options.strict){lookup.push(' || ',this.aliasable('helpers.helperMissing'))}lookup.push(')');this.push(this.source.functionCall(lookup,'call',helper.callParams))},invokeKnownHelper:function invokeKnownHelper(paramSize,name){var helper=this.setupHelper(paramSize,name);this.push(this.source.functionCall(helper.name,'call',helper.callParams))},invokeAmbiguous:function invokeAmbiguous(name,helperCall){this.useRegister('helper');var nonHelper=this.popStack();this.emptyHash();var helper=this.setupHelper(0,name,helperCall);var helperName=this.lastHelper=this.nameLookup('helpers',name,'helper');var lookup=['(','(helper = ',helperName,' || ',nonHelper,')'];if(!this.options.strict){lookup[0]='(helper = ';lookup.push(' != null ? helper : ',this.aliasable('helpers.helperMissing'))}this.push(['(',lookup,helper.paramsInit?['),(',helper.paramsInit]:[],'),','(typeof helper === ',this.aliasable('"function"'),' ? ',this.source.functionCall('helper','call',helper.callParams),' : helper))'])},invokePartial:function invokePartial(isDynamic,name,indent){var params=[],options=this.setupParams(name,1,params);if(isDynamic){name=this.popStack();delete options.name}if(indent){options.indent=JSON.stringify(indent)}options.helpers='helpers';options.partials='partials';options.decorators='container.decorators';if(!isDynamic){params.unshift(this.nameLookup('partials',name,'partial'))}else{params.unshift(name)}if(this.options.compat){options.depths='depths'}options=this.objectLiteral(options);params.push(options);this.push(this.source.functionCall('container.invokePartial','',params))},assignToHash:function assignToHash(key){var value=this.popStack(),context=undefined,type=undefined,id=undefined;if(this.trackIds){id=this.popStack()}if(this.stringParams){type=this.popStack();context=this.popStack()}var hash=this.hash;if(context){hash.contexts[key]=context}if(type){hash.types[key]=type}if(id){hash.ids[key]=id}hash.values[key]=value},pushId:function pushId(type,name,child){if(type==='BlockParam'){this.pushStackLiteral('blockParams['+name[0]+'].path['+name[1]+']'+(child?' + '+JSON.stringify('.'+child):''))}else if(type==='PathExpression'){this.pushString(name)}else if(type==='SubExpression'){this.pushStackLiteral('true')}else{this.pushStackLiteral('null')}},compiler:JavaScriptCompiler,compileChildren:function compileChildren(environment,options){var children=environment.children,child=undefined,compiler=undefined;for(var i=0,l=children.length;i<l;i++){child=children[i];compiler=new this.compiler();var existing=this.matchExistingProgram(child);if(existing==null){this.context.programs.push('');var index=this.context.programs.length;child.index=index;child.name='program'+index;this.context.programs[index]=compiler.compile(child,options,this.context,!this.precompile);this.context.decorators[index]=compiler.decorators;this.context.environments[index]=child;this.useDepths=this.useDepths||compiler.useDepths;this.useBlockParams=this.useBlockParams||compiler.useBlockParams;child.useDepths=this.useDepths;child.useBlockParams=this.useBlockParams}else{child.index=existing.index;child.name='program'+existing.index;this.useDepths=this.useDepths||existing.useDepths;this.useBlockParams=this.useBlockParams||existing.useBlockParams}}},matchExistingProgram:function matchExistingProgram(child){for(var i=0,len=this.context.environments.length;i<len;i++){var environment=this.context.environments[i];if(environment&&environment.equals(child)){return environment}}},programExpression:function programExpression(guid){var child=this.environment.children[guid],programParams=[child.index,'data',child.blockParams];if(this.useBlockParams||this.useDepths){programParams.push('blockParams')}if(this.useDepths){programParams.push('depths')}return'container.program('+programParams.join(', ')+')'},useRegister:function useRegister(name){if(!this.registers[name]){this.registers[name]=true;this.registers.list.push(name)}},push:function push(expr){if(!(expr instanceof Literal)){expr=this.source.wrap(expr)}this.inlineStack.push(expr);return expr},pushStackLiteral:function pushStackLiteral(item){this.push(new Literal(item))},pushSource:function pushSource(source){if(this.pendingContent){this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation));this.pendingContent=undefined}if(source){this.source.push(source)}},replaceStack:function replaceStack(callback){var prefix=['('],stack=undefined,createdStack=undefined,usedLiteral=undefined;if(!this.isInline()){throw new _exception2['default']('replaceStack on non-inline');}var top=this.popStack(true);if(top instanceof Literal){stack=[top.value];prefix=['(',stack];usedLiteral=true}else{createdStack=true;var _name=this.incrStack();prefix=['((',this.push(_name),' = ',top,')'];stack=this.topStack()}var item=callback.call(this,stack);if(!usedLiteral){this.popStack()}if(createdStack){this.stackSlot--}this.push(prefix.concat(item,')'))},incrStack:function incrStack(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push('stack'+this.stackSlot)}return this.topStackName()},topStackName:function topStackName(){return'stack'+this.stackSlot},flushInline:function flushInline(){var inlineStack=this.inlineStack;this.inlineStack=[];for(var i=0,len=inlineStack.length;i<len;i++){var entry=inlineStack[i];if(entry instanceof Literal){this.compileStack.push(entry)}else{var stack=this.incrStack();this.pushSource([stack,' = ',entry,';']);this.compileStack.push(stack)}}},isInline:function isInline(){return this.inlineStack.length},popStack:function popStack(wrapped){var inline=this.isInline(),item=(inline?this.inlineStack:this.compileStack).pop();if(!wrapped&&item instanceof Literal){return item.value}else{if(!inline){if(!this.stackSlot){throw new _exception2['default']('Invalid stack pop');}this.stackSlot--}return item}},topStack:function topStack(){var stack=this.isInline()?this.inlineStack:this.compileStack,item=stack[stack.length-1];if(item instanceof Literal){return item.value}else{return item}},contextName:function contextName(context){if(this.useDepths&&context){return'depths['+context+']'}else{return'depth'+context}},quotedString:function quotedString(str){return this.source.quotedString(str)},objectLiteral:function objectLiteral(obj){return this.source.objectLiteral(obj)},aliasable:function aliasable(name){var ret=this.aliases[name];if(ret){ret.referenceCount++;return ret}ret=this.aliases[name]=this.source.wrap(name);ret.aliasable=true;ret.referenceCount=1;return ret},setupHelper:function setupHelper(paramSize,name,blockHelper){var params=[],paramsInit=this.setupHelperArgs(name,paramSize,params,blockHelper);var foundHelper=this.nameLookup('helpers',name,'helper'),callContext=this.aliasable(this.contextName(0)+' != null ? '+this.contextName(0)+' : (container.nullContext || {})');return{params:params,paramsInit:paramsInit,name:foundHelper,callParams:[callContext].concat(params)}},setupParams:function setupParams(helper,paramSize,params){var options={},contexts=[],types=[],ids=[],objectArgs=!params,param=undefined;if(objectArgs){params=[]}options.name=this.quotedString(helper);options.hash=this.popStack();if(this.trackIds){options.hashIds=this.popStack()}if(this.stringParams){options.hashTypes=this.popStack();options.hashContexts=this.popStack()}var inverse=this.popStack(),program=this.popStack();if(program||inverse){options.fn=program||'container.noop';options.inverse=inverse||'container.noop'}var i=paramSize;while(i--){param=this.popStack();params[i]=param;if(this.trackIds){ids[i]=this.popStack()}if(this.stringParams){types[i]=this.popStack();contexts[i]=this.popStack()}}if(objectArgs){options.args=this.source.generateArray(params)}if(this.trackIds){options.ids=this.source.generateArray(ids)}if(this.stringParams){options.types=this.source.generateArray(types);options.contexts=this.source.generateArray(contexts)}if(this.options.data){options.data='data'}if(this.useBlockParams){options.blockParams='blockParams'}return options},setupHelperArgs:function setupHelperArgs(helper,paramSize,params,useRegister){var options=this.setupParams(helper,paramSize,params);options=this.objectLiteral(options);if(useRegister){this.useRegister('options');params.push('options');return['options=',options]}else if(params){params.push(options);return''}else{return options}}};(function(){var reservedWords=('break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false').split(' ');var compilerWords=JavaScriptCompiler.RESERVED_WORDS={};for(var i=0,l=reservedWords.length;i<l;i++){compilerWords[reservedWords[i]]=true}})();JavaScriptCompiler.isValidJavaScriptVariableName=function(name){return!JavaScriptCompiler.RESERVED_WORDS[name]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)};function strictLookup(requireTerminal,compiler,parts,type){var stack=compiler.popStack(),i=0,len=parts.length;if(requireTerminal){len--}for(;i<len;i++){stack=compiler.nameLookup(stack,parts[i],type)}if(requireTerminal){return[compiler.aliasable('container.strict'),'(',stack,', ',compiler.quotedString(parts[i]),')']}else{return stack}}exports['default']=JavaScriptCompiler;module.exports=exports['default']}),(function(module,exports,__webpack_require__){exports.__esModule=true;var _utils=__webpack_require__(5);var SourceNode=undefined;try{if(false){var SourceMap=require('source-map');SourceNode=SourceMap.SourceNode}}catch(err){}if(!SourceNode){SourceNode=function(line,column,srcFile,chunks){this.src='';if(chunks){this.add(chunks)}};SourceNode.prototype={add:function add(chunks){if(_utils.isArray(chunks)){chunks=chunks.join('')}this.src+=chunks},prepend:function prepend(chunks){if(_utils.isArray(chunks)){chunks=chunks.join('')}this.src=chunks+this.src},toStringWithSourceMap:function toStringWithSourceMap(){return{code:this.toString()}},toString:function toString(){return this.src}}}function castChunk(chunk,codeGen,loc){if(_utils.isArray(chunk)){var ret=[];for(var i=0,len=chunk.length;i<len;i++){ret.push(codeGen.wrap(chunk[i],loc))}return ret}else if(typeof chunk==='boolean'||typeof chunk==='number'){return chunk+''}return chunk}function CodeGen(srcFile){this.srcFile=srcFile;this.source=[]}CodeGen.prototype={isEmpty:function isEmpty(){return!this.source.length},prepend:function prepend(source,loc){this.source.unshift(this.wrap(source,loc))},push:function push(source,loc){this.source.push(this.wrap(source,loc))},merge:function merge(){var source=this.empty();this.each(function(line){source.add(['  ',line,'\n'])});return source},each:function each(iter){for(var i=0,len=this.source.length;i<len;i++){iter(this.source[i])}},empty:function empty(){var loc=this.currentLocation||{start:{}};return new SourceNode(loc.start.line,loc.start.column,this.srcFile)},wrap:function wrap(chunk){var loc=arguments.length<=1||arguments[1]===undefined?this.currentLocation||{start:{}}:arguments[1];if(chunk instanceof SourceNode){return chunk}chunk=castChunk(chunk,this,loc);return new SourceNode(loc.start.line,loc.start.column,this.srcFile,chunk)},functionCall:function functionCall(fn,type,params){params=this.generateList(params);return this.wrap([fn,type?'.'+type+'(':'(',params,')'])},quotedString:function quotedString(str){return'"'+(str+'').replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029')+'"'},objectLiteral:function objectLiteral(obj){var pairs=[];for(var key in obj){if(obj.hasOwnProperty(key)){var value=castChunk(obj[key],this);if(value!=='undefined'){pairs.push([this.quotedString(key),':',value])}}}var ret=this.generateList(pairs);ret.prepend('{');ret.add('}');return ret},generateList:function generateList(entries){var ret=this.empty();for(var i=0,len=entries.length;i<len;i++){if(i){ret.add(',')}ret.add(castChunk(entries[i],this))}return ret},generateArray:function generateArray(entries){var ret=this.generateList(entries);ret.prepend('[');ret.add(']');return ret}};exports['default']=CodeGen;module.exports=exports['default']})])});
/*!
 * SuperSlide v2.1.2
 * 轻松解决网站大部分特效展示问题
 * 详尽信息请看官网：http://www.SuperSlide2.com/
 *
 * Copyright 2011-2015, 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * v2.1.1：修复当调用多个SuperSlide，并设置returnDefault:true 时返回defaultIndex索引错误
 * v2.1.2：增加参数设置vis:"auto"，解决左滚动自适应窗口宽度问题。适应情况：vis:"auto",scroll:1, effect:"left或leftLoop"（注：此为临时解决方案，日后版本可能变动）
 * v2.1.2：修复 mouseOverStop 和 autoPlay均为false下，点击切换按钮后会自动播放bug

 */
;(function (factory) {
    if (typeof define === "function" && define.amd) {
      // AMD模式
      define('core/common/jquery.SuperSlide',[ "jquery" ], factory);
    } else {
      // 全局模式
      factory(jQuery);
    }
  }(function($){
    (function(a){a.fn.slide=function(b){a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:false,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:false,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:false,pnLoop:true,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:true,defaultPlay:true,returnDefault:false};return this.each(function(){var I=a.extend({},a.fn.slide.defaults,b);var g=a(this);var af=I.effect;var o=a(I.prevCell,g);var H=a(I.nextCell,g);var G=a(I.pageStateCell,g);var N=a(I.playStateCell,g);var B=a(I.titCell,g);var m=B.size();var aa=a(I.mainCell,g);var e=aa.children().size();var h=I.switchLoad;var ai=a(I.targetCell,g);var K=parseInt(I.defaultIndex);var z=parseInt(I.delayTime);var p=parseInt(I.interTime);var aq=parseInt(I.triggerTime);var ac=parseInt(I.scroll);var ab=(I.autoPlay=="false"||I.autoPlay==false)?false:true;var C=(I.opp=="false"||I.opp==false)?false:true;var s=(I.autoPage=="false"||I.autoPage==false)?false:true;var P=(I.pnLoop=="false"||I.pnLoop==false)?false:true;var ae=(I.mouseOverStop=="false"||I.mouseOverStop==false)?false:true;var x=(I.defaultPlay=="false"||I.defaultPlay==false)?false:true;var Q=(I.returnDefault=="false"||I.returnDefault==false)?false:true;var ag=isNaN(I.vis)?1:parseInt(I.vis);var an=!-[1,]&&!window.XMLHttpRequest;var J=0;var F=0;var q=0;var E=0;var R=I.easing;var ad=null;var M=null;var W=null;var ap=I.titOnClassName;var D=B.index(g.find("."+ap));var ao=K=D==-1?K:D;var f=K;var am=K;var r=e>=ag?(e%ac!=0?e%ac:ac):0;var V;var U=af=="leftMarquee"||af=="topMarquee"?true:false;var al=function(){if(a.isFunction(I.startFun)){I.startFun(K,m,g,a(I.titCell,g),aa,ai,o,H)}};var j=function(){if(a.isFunction(I.endFun)){I.endFun(K,m,g,a(I.titCell,g),aa,ai,o,H)}};var c=function(){B.removeClass(ap);if(x){B.eq(f).addClass(ap)}};if(I.type=="menu"){if(x){B.removeClass(ap).eq(K).addClass(ap)}B.hover(function(){V=a(this).find(I.targetCell);var i=B.index(a(this));M=setTimeout(function(){K=i;B.removeClass(ap).eq(K).addClass(ap);al();switch(af){case"fade":V.stop(true,true).animate({opacity:"show"},z,R,j);break;case"slideDown":V.stop(true,true).animate({height:"show"},z,R,j);break}},I.triggerTime)},function(){clearTimeout(M);switch(af){case"fade":V.animate({opacity:"hide"},z,R);break;case"slideDown":V.animate({height:"hide"},z,R);break}});if(Q){g.hover(function(){clearTimeout(W)},function(){W=setTimeout(c,z)})}return}if(m==0){m=e}if(U){m=2}if(s){if(e>=ag){if(af=="leftLoop"||af=="topLoop"){m=e%ac!=0?(e/ac^0)+1:e/ac}else{var S=e-ag;m=1+parseInt(S%ac!=0?(S/ac+1):(S/ac));if(m<=0){m=1}}}else{m=1}B.html("");var L="";if(I.autoPage==true||I.autoPage=="true"){for(var ak=0;ak<m;ak++){L+="<li>"+(ak+1)+"</li>"}}else{for(var ak=0;ak<m;ak++){L+=I.autoPage.replace("$",(ak+1))}}B.html(L);var B=B.children()}if(e>=ag){aa.children().each(function(){if(a(this).width()>q){q=a(this).width();F=a(this).outerWidth(true)}if(a(this).height()>E){E=a(this).height();J=a(this).outerHeight(true)}});var y=aa.children();var w=function(){for(var ar=0;ar<ag;ar++){y.eq(ar).clone().addClass("clone").appendTo(aa)}for(var ar=0;ar<r;ar++){y.eq(e-ar-1).clone().addClass("clone").prependTo(aa)}};switch(af){case"fold":aa.css({"position":"relative","width":F,"height":J}).children().css({"position":"absolute","width":q,"left":0,"top":0,"display":"none"});break;case"top":aa.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+ag*J+'px"></div>').css({"top":-(K*ac)*J,"position":"relative","padding":"0","margin":"0"}).children().css({"height":E});break;case"left":aa.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+ag*F+'px"></div>').css({"width":e*F,"left":-(K*ac)*F,"position":"relative","overflow":"hidden","padding":"0","margin":"0"}).children().css({"float":"left","width":q});break;case"leftLoop":case"leftMarquee":w();aa.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+ag*F+'px"></div>').css({"width":(e+ag+r)*F,"position":"relative","overflow":"hidden","padding":"0","margin":"0","left":-(r+K*ac)*F}).children().css({"float":"left","width":q});break;case"topLoop":case"topMarquee":w();aa.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+ag*J+'px"></div>').css({"height":(e+ag+r)*J,"position":"relative","padding":"0","margin":"0","top":-(r+K*ac)*J}).children().css({"height":E});break}}var Z=function(ar){var i=ar*ac;if(ar==m){i=e}else{if(ar==-1&&e%ac!=0){i=-e%ac}}return i};var d=function(aw){var av=function(ay){for(var ax=ay;ax<(ag+ay);ax++){aw.eq(ax).find("img["+h+"]").each(function(){var aB=a(this);aB.attr("src",aB.attr(h)).removeAttr(h);if(aa.find(".clone")[0]){var aA=aa.children();for(var az=0;az<aA.size();az++){aA.eq(az).find("img["+h+"]").each(function(){if(a(this).attr(h)==aB.attr("src")){a(this).attr("src",a(this).attr(h)).removeAttr(h)}})}}})}};switch(af){case"fade":case"fold":case"top":case"left":case"slideDown":av(K*ac);break;case"leftLoop":case"topLoop":av(r+Z(am));break;case"leftMarquee":case"topMarquee":var at=af=="leftMarquee"?aa.css("left").replace("px",""):aa.css("top").replace("px","");var ar=af=="leftMarquee"?F:J;var i=r;if(at%ar!=0){var au=Math.abs(at/ar^0);if(K==1){i=r+au}else{i=r+au-1}}av(i);break}};var O=function(au){if(x&&ao==K&&!au&&!U){return}if(U){if(K>=1){K=1}else{if(K<=0){K=0}}}else{am=K;if(K>=m){K=0}else{if(K<0){K=m-1}}}al();if(h!=null){d(aa.children())}if(ai[0]){V=ai.eq(K);if(h!=null){d(ai)}if(af=="slideDown"){ai.not(V).stop(true,true).slideUp(z);V.slideDown(z,R,function(){if(!aa[0]){j()}})}else{ai.not(V).stop(true,true).hide();V.animate({opacity:"show"},z,function(){if(!aa[0]){j()}})}}if(e>=ag){switch(af){case"fade":aa.children().stop(true,true).eq(K).animate({opacity:"show"},z,R,function(){j()}).siblings().hide();break;case"fold":aa.children().stop(true,true).eq(K).animate({opacity:"show"},z,R,function(){j()}).siblings().animate({opacity:"hide"},z,R);break;case"top":aa.stop(true,false).animate({"top":-K*ac*J},z,R,function(){j()});break;case"left":aa.stop(true,false).animate({"left":-K*ac*F},z,R,function(){j()});break;case"leftLoop":var ar=am;aa.stop(true,true).animate({"left":-(Z(am)+r)*F},z,R,function(){if(ar<=-1){aa.css("left",-(r+(m-1)*ac)*F)}else{if(ar>=m){aa.css("left",-r*F)}}j()});break;case"topLoop":var ar=am;aa.stop(true,true).animate({"top":-(Z(am)+r)*J},z,R,function(){if(ar<=-1){aa.css("top",-(r+(m-1)*ac)*J)}else{if(ar>=m){aa.css("top",-r*J)}}j()});break;case"leftMarquee":var at=aa.css("left").replace("px","");if(K==0){aa.animate({"left":++at},0,function(){if(aa.css("left").replace("px","")>=0){aa.css("left",-e*F)}})}else{aa.animate({"left":--at},0,function(){if(aa.css("left").replace("px","")<=-(e+r)*F){aa.css("left",-r*F)}})}break;case"topMarquee":var i=aa.css("top").replace("px","");if(K==0){aa.animate({"top":++i},0,function(){if(aa.css("top").replace("px","")>=0){aa.css("top",-e*J)}})}else{aa.animate({"top":--i},0,function(){if(aa.css("top").replace("px","")<=-(e+r)*J){aa.css("top",-r*J)}})}break}}B.removeClass(ap).eq(K).addClass(ap);ao=K;if(!P){H.removeClass("nextStop");o.removeClass("prevStop");if(K==0){o.addClass("prevStop")}if(K==m-1){H.addClass("nextStop")}}G.html("<span>"+(K+1)+"</span>/"+m)};if(x){O(true)}if(Q){g.hover(function(){clearTimeout(W)},function(){W=setTimeout(function(){K=f;if(x){O()}else{if(af=="slideDown"){V.slideUp(z,c)}else{V.animate({opacity:"hide"},z,c)}}ao=K},300)})}var T=function(i){ad=setInterval(function(){C?K--:K++;O()},!!i?i:p)};var u=function(i){ad=setInterval(O,!!i?i:p)};var A=function(){if(!ae&&ab&&!N.hasClass("pauseState")){clearInterval(ad);T()}};var Y=function(){if(P||K!=m-1){K++;O();if(!U){A()}}};var v=function(){if(P||K!=0){K--;O();if(!U){A()}}};var t=function(){clearInterval(ad);U?u():T();N.removeClass("pauseState")};var aj=function(){clearInterval(ad);N.addClass("pauseState")};if(ab){if(U){C?K--:K++;u();if(ae){aa.hover(aj,t)}}else{T();if(ae){g.hover(aj,t)}}}else{if(U){C?K--:K++}N.addClass("pauseState")}N.click(function(){N.hasClass("pauseState")?t():aj()});if(I.trigger=="mouseover"){B.hover(function(){var i=B.index(this);M=setTimeout(function(){K=i;O();A()},I.triggerTime)},function(){clearTimeout(M)})}else{B.click(function(){K=B.index(this);O();A()})}if(U){H.mousedown(Y);o.mousedown(v);if(P){var n;var k=function(){n=setTimeout(function(){clearInterval(ad);u(p/10^0)},150)};var ah=function(){clearTimeout(n);clearInterval(ad);u()};H.mousedown(k);H.mouseup(ah);o.mousedown(k);o.mouseup(ah)}if(I.trigger=="mouseover"){H.hover(Y,function(){});o.hover(v,function(){})}}else{H.click(Y);o.click(v)}if(I.vis=="auto"&&ac==1&&(af=="left"||af=="leftLoop")){var X;var l=function(){if(an){aa.width("auto");aa.children().width("auto")}aa.parent().width("auto");F=aa.parent().width();if(an){aa.parent().width(F)}aa.children().width(F);if(af=="left"){aa.width(F*e);aa.stop(true,false).animate({"left":-K*F},0)}else{aa.width(F*(e+2));aa.stop(true,false).animate({"left":-(K+1)*F},0)}if(!an&&(F!=aa.parent().width())){l()}};a(window).resize(function(){clearTimeout(X);X=setTimeout(l,100)});l()}})}})(jQuery);jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
  }));



(function(factory){
	if(typeof define === "function"&&define.amd){
		//AMD模式
		define('core/common/common',["jquery"],factory);
	}else{
		//全局模式
		factory(jQuery);
	}
}(function ($){
  $(document).ready(function () {
    var _big_fontsize = getCookie("_big_fontsize");
    if("1" == _big_fontsize){
      $("body").addClass('is-caring');
      $('#caringEdition').text('标准版')
    }else{
      $('#caringEdition').text('敬老版')
    }
    $('#caringEdition').off('click').on('click', function(){
      changebigslh();
    })
  })
  function changebigslh (){
    var isHasBigslh = $("body").hasClass("is-caring");
    if(isHasBigslh){
      $("body").removeClass('is-caring');
      setCookie("_big_fontsize","",-1);
      setCookie("_big_fontsize","0",365*24*60*60,"", ".12306.cn");
      $('#caringEdition').text('敬老版')
    }else{
      $("body").addClass('is-caring');
      setCookie("_big_fontsize","1",365*24*60*60,"", ".12306.cn");
      $('#caringEdition').text('标准版')
    }
  }
  // 设置Cookie
  function setCookie(key, value, seconds, path, domain,secure) {
    var expires = new Date();
    expires.setTime(expires.getTime() + seconds * 1000);
    document.cookie = escape(key) + '=' + escape(value)
        + (expires ? '; expires=' + expires.toGMTString() : '')
        + (path ? '; path=' + path : ';path=/')
        + (domain ? '; domain=' + domain : '')
        + (secure ? '; secure' : '');
  }
   
  // 获取Cookie
  function getCookie(key) {
    var str = document.cookie;
    var nweArray1 = str.split(";");
    // for (var item of nweArray1) {
    //   var newArray2 = item.split("=");
    //   if (newArray2[0] == key) {
    //     return newArray2[1];
    //   }
    // }
    for (var i = 0; i < nweArray1.length; i++) {
      var newArray2 = nweArray1[i].split("=");
      if (newArray2[0] == key) {
        return newArray2[1];
      }
    }
  }
  var goToTop = function() {
    // $('.caring-a').on('click',function () {
    //   window.location.href = static_url_path + '/wca.html';
    // })
    $('.js-gotop').on('click', function(event){

      event.preventDefault();

      $('html, body').animate({

        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');

      return false;
    });

    $(window).scroll(function(){

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });

  };
  $(function(){
    goToTop();
  })
}));


/*
 * 个人中心 初始化
 */
define('index/index-init',['jquery', 'handlebars', 'core/common/jquery.SuperSlide', 'core/common/common',], function ($, Handlebars, SuperSlide, common,) {
    // init
    function init() {
        $('#train_date').jcalendar({
            isFocus:'1'
        })
        // $('#train_date_yy').jcalendar({
        //     isFocus:'1'
        // })
        $('#go_date').jcalendar({
            isFocus:'1'
        })
        $('#from_date').jcalendar({
            isFocus:'1'
        })
        $('#serial_date').jcalendar({
            isFocus:'1'
        })
        $('#refund_start').jcalendar({
            isFocus:'1'
        })
        $('#refund_end').jcalendar({
            isFocus:'1'
        })
        $('#check_in').jcalendar({
            isFocus:'1'
        })
        $('#sale_time').jcalendar({
            isFocus:'1'
        })
        $('#dinner_date').jcalendar({
            isFocus:'1'
        })
        var dataValue = '#train_date_yy'
        var end = window.yy_open_time.split('-')[1]
        $(dataValue).click(function () {
            $(dataValue).jcalendar({
                isSingle: false,
                startDate: GetDateStr(15),
                endDate: end.slice(0,4)+'-'+end.slice(4,6)+'-'+end.slice(6),
                onpicked: function () {
                    if (dataValue == '#go_date') {
                        $('#from_date').val($('#go_date').val())
                    }
                    $(dataValue).blur();
                    if (!$(dataValue).hasClass('inp-txt_select')) {
                        $(dataValue).addClass('inp-txt_select');
                    }
                    if ($(dataValue).hasClass('error')) {
                        $(dataValue).removeClass('error');
                    }
                    if ($(dataValue).attr('id') == 'train_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudentDan').removeClass('disabled')
                        } else {
                            $('#isStudentDan').addClass('disabled')
                            $('#isStudentDan').removeClass('active')
                        }
                    }
                    if ($(dataValue).attr('id') == 'go_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudent').removeClass('disabled')
                        } else {
                            $('#isStudent').addClass('disabled')
                            $('#isStudent').removeClass('active')
                        }
                    }
                    if ($(dataValue).attr('id') == 'serial_date') {
                        if (isisStudentDateFn($(dataValue).val(), window.studentDates)) {
                            $('#isStudentLian').removeClass('disabled')
                        } else {
                            $('#isStudentLian').addClass('disabled')
                            $('#isStudentLian').removeClass('active')
                        }
                    }
                }
            });
        });
        var browser = navigator.appName
        var b_version = navigator.appVersion
        var version = b_version.split(";");
        if (version[1]) {
            var trim_Version = version[1].replace(/[ ]/g, "");
            if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
               window.location.href = browserForie
            }else if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0"){
               window.location.href = browserForie
            }
        }

        //自己重新写getBanner方法
        var stime = window.loadEnd - window.startTime;
        
        function getBanner(res) {
            window.pictureStart = new Date().getTime();
            // var response = JSON.parse(res);
            var response = res;
            var bannerList = response.data;
            window.returnData = new Date().getTime();
            var tpl7 = $('#bannerList').html();
            var template = Handlebars.compile(tpl7);
            var html = template(bannerList);
            var pxH = window.screen.height;
            var pxW = window.screen.width
            var apxH = window.screen.availHeight;
            var apxW = window.screen.availWidth;
            window.allJs = window.returnData - window.startTime;
            window.lastTime = window.returnData - window.startTime;

            function getloginStatus() {
                setTimeout(function () {
                    if (window.isLogin == "undefined") {
                        window.isLogin = "N";
                    }
                    if (window.ajaxLogin_flag) {
                        $.ajax({
                            timeout: 10000,
                            dataType: 'jsonp',
                            xhrFields: {
                                withCredentials: true
                            },
                            crossDomain: true,
                            type: "GET",
                            url: sendDataUrl + "?ltime=" + window.lastTime + "&stime=" + stime + "&login=" + window.isLogin + "&btime=" + btime + "&bstatus=" + bstatus + "&px=" + pxH + "*" + pxW + "&apx=" + apxH + "*" + apxW
                        });
                    } else {
                        getloginStatus();
                    }
                }, window.lastTime);
            }
            getloginStatus();

            $('.sowingMap').html(html);
            // 轮播图
            $(".fullSlide").slide({
                titCell: ".hd ul",
                mainCell: ".bd ul",
                effect: "leftLoop",
                vis: "auto",
                autoPlay: true,
                autoPage: true,
                trigger: "click",
                interTime: "6000"
            });
        }
        ////
        //原来getUserBanner（）方法
        var getUserBanner = function () {
            var bannerList = {
                index_banner_url: [{
                        target: "1",
                        url: "https://www.12306.cn/index/images/pic/banner07.jpg"
                    },
                    {
                        target: "1",
                        src: "https://exservice.12306.cn/excater/index.html",
                        url: "https://www.12306.cn/index/images/pic/banner08.jpg"
                    },
                    {
                        target: "1",
                        url: "https://www.12306.cn/index/images/pic/banner09.jpg"
                    },
                    {
                        src: "https://cx.12306.cn/tlcx/index.html",
                        target: "1",
                        url: "https://www.12306.cn/index/images/pic/banner10.jpg"
                    },{
                        src: "https://travel.12306.cn/portal/travel/detail/8a82669c563927700156517440ec061b",
                        target: "1",
                        url: "https://www.12306.cn/index/images/pic/banner11.jpg"
                    },{
                        src: "https://travel.12306.cn/portal/travel/detail/8a82669c58047b3a0158adf7a1e504ca",
                        target: "1",
                        url: "https://www.12306.cn/index/images/pic/banner12.jpg"
                    }

                ]
            }
            var tpl7 = $('#bannerList').html();
            var template = Handlebars.compile(tpl7);
            var html = template(bannerList);
            window.returnData = new Date().getTime();
            var pxH = window.screen.height;
            var pxW = window.screen.width
            var apxH = window.screen.availHeight;
            var apxW = window.screen.availWidth;
            window.allJs = window.returnData - window.startTime;
            window.lastTime = window.returnData - window.startTime;

            function getloginStatus() {
                setTimeout(function () {
                    if (window.isLogin == "undefined") {
                        window.isLogin = "N";
                    }
                    if (window.ajaxLogin_flag) {
                        $.ajax({
                            timeout: 10000,
                            dataType: 'jsonp',
                            xhrFields: {
                                withCredentials: true
                            },
                            crossDomain: true,
                            type: "GET",
                            url: sendDataUrl + "?ltime=" + window.lastTime + "&stime=" + stime + "&login=" + window.isLogin + "&btime=" + btime + "&bstatus=" + bstatus + "&px=" + pxH + "*" + pxW + "&apx=" + apxH + "*" + apxW
                        });
                    } else {
                        getloginStatus();
                    }
                }, window.lastTime);
            }
            getloginStatus();
            $('.sowingMap').html(html);
            // 轮播图
            $(".fullSlide").slide({
                titCell: ".hd ul",
                mainCell: ".bd ul",
                effect: "leftLoop",
                vis: "auto",
                autoPlay: true,
                autoPage: true,
                trigger: "click",
                interTime: "6000"
            });
        }
        //原来getUserBanner方法结束
        var btime, bstatus; //btime :getBanenr接口花费时间，bstatus是请求状态

        function jqueryAjax(bannerUrl, getBanner, getUserBanner) {
            var ajaxStart = new Date().getTime();
            $.ajax({
                url: bannerUrl,
                method: "GET",
                dataType: "json",
                success: function (res) {
                    var ajaxEnd = new Date().getTime();
                    var duringAjax = ajaxEnd - ajaxStart;
                    btime = duringAjax;
                    getBanner(res); //成功时执行的函数
                    bstatus = res.httpstatus;
                },
                error: function (res) {
                    var ajaxEnd = new Date().getTime();
                    var duringAjax = ajaxEnd - ajaxStart;
                    btime = duringAjax;
                    getUserBanner(res);
                    bstatus = res.status;
                }
            });
        }

        function toshijianchu(strtime) {
            var date = new Date(strtime.replace(/-/g, '/'));
            time = Date.parse(date);
            return time
        }
        jqueryAjax(bannerUrl, getBanner, getUserBanner);
        //查询部分tab切换
        $(".search-main-tab").slide({
            titCell: ".search-tab-hd li",
            mainCell: ".search-tab-bd",
            titOnClassName: "active",
            trigger: "click"
        });
        $(".search-index").slide({
            titCell: ".search-side li",
            mainCell: ".search-main",
            titOnClassName: "active",
            trigger: "click"
        });
        //新闻tab
        $(".news-tab").slide({
            titCell: ".tab-hd li",
            mainCell: ".tab-bd",
            titOnClassName: "active",
            trigger: "click"
        });

        // 复选框
        $('.check-list li:not(.disabled)').on('click', function () {
            if ($(this).hasClass('disabled')) {
                $(this).removeClass('active')
            } else {
                $(this).toggleClass('active');
            }

        })
        //单选框
        $('.radio-list li').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
        })
        $('body').on('click','#close-right',function () {
            $('.fixed-right').hide();
        })
    }
    return {
        initialize: function () {
            // init
            init();
        }
    }
});

// 首页 模板加载
define('index/index-temp',['jquery', 'handlebars'], function ($, Handlebars) {
    //template模板
    function temp() {
        // 服务列表
        jQuery.support.cors = true;
        var index_serve = function () {
            $.ajax({
                url: servicesData,
                type: 'GET',
                timeout: 10000,
                success: function (serveResponse) {
                    serveResponse.data.index_new_url1['title'] = '铁路畅行 惠享出行 尊享体验'
                    serveResponse.data.index_new_url2['title'] = '餐饮·特产 带有温度的旅行配餐'
                    serveResponse.data.index_new_url3['title'] = '铁路保险 用心呵护 放心出行'
                    serveResponse.data.index_new_url4['title'] = '计次订票开售 直刷乘车、出行乐无忧'
                    var indexPicture1 = serveResponse.data.index_new_url1;
                    var indexPicture2 = serveResponse.data.index_new_url2;
                    var indexPicture3 = serveResponse.data.index_new_url3;
                    var indexPicture4 = serveResponse.data.index_new_url4;
                    var data3 = serveResponse.data.index_new_Service1;
                    var data4 = serveResponse.data.index_new_Service2;
                    var data5 = serveResponse.data.index_new_Service3;
                    var data6 = serveResponse.data.index_new_Service4;
                    var serviceList = [];
                    var services = [];
                    services.push(indexPicture1, indexPicture2,indexPicture3,indexPicture4)
                    serviceList.push(data3, data4, data5, data6)
                    var service = {
                        serviceDatas: services
                    }
                    var context = {
                        service1: serviceList
                    }
                    var tpl = $('#temp1').html();
                    var template = Handlebars.compile(tpl);
                    var html = template(service);
                    $('.service-lg-list').html(html);
                    var tpl1 = $('#temp2').html();
                    var template2 = Handlebars.compile(tpl1);
                    var html2 = template2(context);
                    $('.service-sm-list').html(html2);
                },
                error: function (error) {
                    var info = [{
                            "src": "https://cx.12306.cn/tlcx/index.html",
                            "img": "https://www.12306.cn/index/images/abanner01.jpg",
                            "title": "铁路畅行 惠享出行 尊享体验"
                        },
                        {
                            "img": "https://www.12306.cn/index/images/abanner02.jpg",
                            "src": "https://exservice.12306.cn/excater/index.html",
                            "title": "铁路畅行 惠享出行 尊享体验"
                        },
                        {
                            "img": "https://www.12306.cn/index/images/abanner03.jpg",
                            "src": "https://kyfw.12306.cn/otn/view/my_insurance.html",
                            "title": "铁路畅行 惠享出行 尊享体验"
                        },
                        {
                            "img": "https://www.12306.cn/index/images/abanner04.jpg",
                            "src": "https://www.12306.cn/index/view/commutation_index.html",
                            "title": "铁路畅行 惠享出行 尊享体验"
                        }

                    ];
                    var userServe = '';
                    for (i = 0; i < info.length; i++) {
                        if(i == 0 || i == 1){
                            userServe += '<li style="margin-bottom:10px;"><a href=' + info[i].src + 'title=' + info[i].title +'>' +
                            '<img src=' + info[i].img + '> ' +
                            '</a></li>'
                        }else{
                            userServe += '<li><a href=' + info[i].src + 'title=' + info[i].title +'>' +
                            '<img src=' + info[i].img + '> ' +
                            '</a></li>'
                        }
                        
                    }
                    $('.service-lg-list').html(userServe);
                    var indexServe = [{
                            "title": "接送站服务",
                            "img": static_url + path + "/images/service01.jpg",
                            "src": static_url + path + "/view/station/custom_PickUp.html",
                            "notice": "一站式定制服务 体现价值"
                        },
                        {
                            "title": "团购预定",
                            "img": static_url + path + "/images/service02.jpg",
                            "src": static_url + path + "/view/group/group_management.html",
                            "notice": "为您提供更优惠的团购信息"
                        },
                        {
                            "title": "铁路保险",
                            "img": static_url + path + "/images/service03.jpg",
                            "src": static_url+"/otnwbo/insurance/init",
                            "notice": "用心呵护 为您保障出行安全"
                        },
                        {
                            "title": "中铁e卡",
                            "img": static_url + path + "/images/service04.jpg",
                            "src": "https://mobile.12306.cn/otsmobile/h5/otsbussiness/eCard.html",
                            "notice": "首次充值，免费餐饮享不停"
                        }
                    ]
                    var indexService = '';
                    for (j = 0; j < indexServe.length; j++) {
                        indexService += '<li><a href=' + indexServe[j].src + '>' +
                            '<div class="service-pic"><img src=' + indexServe[j].img + '></div>' +
                            '<div class="service-info">' +
                            '<h3 class="service-name">' + indexServe[j].title + '</h3>' +
                            '<p class="service-txt">' + indexServe[j].notice + '</p>' +
                            '<i class="icon icon-more"></i>' +
                            '</div>' +
                            '</a></li>'
                    }
                    $('.service-sm-list').html(indexService);
                }
            });
        };
        index_serve();
        // 旅游列表
        var index_travel = function () {
            $.ajax({
                url: travelData,
                type: 'GET',
                success: function (responseTravel) {
                    var travelList = responseTravel.data;
                    var tpl2 = $('#travel').html();
                    var template = Handlebars.compile(tpl2);
                    var html = template(travelList);
                    $('.travel-train-list').html(html);
                    $('.box-loading').hide();
                    $('.travel-train-list').show();
                },
                error: function (error) {
                    var travelList = {
                        index_travel_url: [{
                                "title": "“环西部火车游” 高品质旅游版专线列车",
                                "price": "2560",
                                "start": "兰州出发",
                                "img": "https://travel.12306.cn/imgs/resources/uploadfiles/images/243945e6-c45d-4870-9cf5-77e488068646_product_W572_H370.jpg",
                                "src": "https://travel.12306.cn/portal/travel/detail/ff80808157df83c201644427880112ae"
                            },
                            {
                                "title": "“环西部火车游” 陇上江南·行摄山水陇南三日游",
                                "price": "930",
                                "start": "兰州出发",
                                "img": "https://travel.12306.cn/imgs/resources/uploadfiles/images/fcd7173f-7651-46e7-a126-bdc199e1f6f7_product_W572_H370.jpg",
                                "src": "https://travel.12306.cn/portal/travel/detail/ff80808157df83c20164457aed6012db"
                            },
                            {
                                "title": "“环西部火车游”华夏寻根·人文始祖天水两日游",
                                "price": "980",
                                "start": "兰州出发",
                                "img": "https://travel.12306.cn/imgs/resources/uploadfiles/images/b0c76b21-531b-4af4-a607-cf5672c72ded_product_W572_H370.jpg",
                                "src": "https://travel.12306.cn/portal/travel/detail/ff80808157df83c2016445b0fd5f1304"
                            },
                            {
                                "title": "“环西部火车游”精品旅游线路",
                                "price": "3380",
                                "start": "兰州出发",
                                "img": "https://travel.12306.cn/imgs/resources/uploadfiles/images/8b36f9a7-f780-4e71-b719-9300109a9ff2_product_W572_H370.jpg",
                                "src": "https://travel.12306.cn/portal/travel/detail/ff80808157df83c2016446996d9813a9"
                            },
                            {
                                "title": "“环西部火车游”美丽甘南三日游",
                                "price": "880",
                                "start": "兰州出发",
                                "img": "https://travel.12306.cn/imgs/resources/uploadfiles/images/1716878f-79a2-4db1-af8c-b9c2039f0b3c_product_W572_H370.jpg",
                                "src": "https://travel.12306.cn/portal/travel/detail/ff80808157df83c201644684cc7c1388"
                            },
                            {
                                "title": "“环西部火车游” 青海湖、茶卡2日游",
                                "price": "880",
                                "start": "兰州出发",
                                "img": "https://travel.12306.cn/imgs/resources/uploadfiles/images/6d77d0ea-53d0-4518-b7e9-e53795b4920c_product_W572_H370.jpg",
                                "src": "https://travel.12306.cn/portal/travel/detail/ff80808157df83c2016446b4813013c0"
                            },
                            {
                                "title": "“环西部火车游”嘉敦5日游",
                                "price": "2260",
                                "start": "兰州出发",
                                "img": "https://travel.12306.cn/imgs/resources/uploadfiles/images/c7c03732-3c86-4308-aea7-df747d4999e8_product_W572_H370.jpg",
                                "src": "https://travel.12306.cn/portal/travel/detail/ff80808157df83c2016446ba8bc313cd"
                            },
                            {
                                "title": "“环西部火车游” 敦煌一地三日游",
                                "price": "1380",
                                "start": "兰州出发",
                                "img": "https://travel.12306.cn/imgs/resources/uploadfiles/images/d9ae79de-2f3f-4e9f-ad6e-bdc291dda92a_product_W572_H370.jpg",
                                "src": "https://travel.12306.cn/portal/travel/detail/ff80808157df83c2016446d31e1113e5"
                            }
                        ]
                    }
                    var tpl2 = $('#travel').html();
                    var template = Handlebars.compile(tpl2);
                    var html = template(travelList);
                    $('.travel-train-list').html(html);
                    $('.box-loading').hide();
                    $('.travel-train-list').show();
                }
            });
        };
        // 公告
        var index_list = function () {
            $.ajax({
                url: listData,
                type: 'GET',
                success: function (responseList) {
                    var adsList = responseList.data
                    var tpl3 = $('#news').html();
                    var template = Handlebars.compile(tpl3);
                    var html = template(adsList);
                    $('.state').html(html);
                },
                error: function (error) {
                    var adsList = {
                        index_news_list: [{
                            "title": "关于铁路12306网站页面改版的公告",
                            "src": "https://www.12306.cn/mormhweb/zxdt/201811/t20181102_19703.html",
                            "date": "2018-11-02"
                        }, {
                            "title": "中转换乘和选座功能使用说明",
                            "src": "https://www.12306.cn/mormhweb/zxdt/201710/t20171012_10587.html",
                            "date": "2018-11-02"
                        }, {
                            "title": "公 告",
                            "src": "https://www.12306.cn/mormhweb/zxdt/201512/t20151201_3949.html",
                            "date": "2018-11-02"
                        }, {
                            "title": "关于调整互联网、电话订票起售时间的公告",
                            "src": "https://www.12306.cn/mormhweb/zxdt/201411/t20141126_2316.html",
                            "date": "2018-11-01"
                        }]
                    }
                    var tpl3 = $('#news').html();
                    var template = Handlebars.compile(tpl3);
                    var html = template(adsList);
                    $('.state').html(html);
                }
            });
        };
        // 失信人
        var index_believe = function () {
            $.ajax({
                url: believeData,
                type: 'GET',
                timeout: 10000,
                success: function (responseBelieve) {
                    var truestList = {};
                    truestList['left'] = responseBelieve.data.left.slice(0,4);
                    truestList['right'] = responseBelieve.data.right.slice(0,4);
                    // console.log(truestList)
                    if (truestList.left&&truestList.left.length == 0) {
                        // $('.demo').removeClass("autoScroll");
                        $('.dd_left').html('<img style="display: block;width: 100px;height: 80px;margin:15px auto" src=' + imgBan1 + '><div style="color: #999">暂无公示数据</div>')
                    } else {
                        
                        // $('.demo').addClass("autoScroll")
                        var tpl5 = $('#left').html();
                        var template = Handlebars.compile(tpl5);
                        var html = template(truestList);
                        $('.dd_left').html(html);
                    }
                    if (truestList.right&&truestList.right.length == 0) {
                        // $('.demo1').removeClass("autoScroll")
                        $('.dd_right').html('<img style="display: block;width: 100px;height: 80px;margin:15px auto" src=' + imgBan2 + '><div style="color: #999">暂无公示数据</div>')
                    } else {
                        // $('.demo1').addClass("autoScroll")
                        var tpl6 = $('#right').html();
                        var template = Handlebars.compile(tpl6);
                        var html = template(truestList);
                        $('.dd_right').html(html);
                    }
                },
                error: function (error) {}
            });
        };
        var headerH = $('.header-wrap').height(); //获取头部的高度
        var lunboH = $('.fullSlide').height(); //获取轮播图的高度
        var sum = headerH + lunboH; //头部和轮播图高度之和
        var serviceH = $('.service-lg').height(); //获取服务大图的高度
        var three = sum + serviceH;
        var flag = true; //判断旅游模板是否发送请求
        var isNews = true;
        var if_travel_show = false;
        var $win = $(window);
        var itemOffsetTop = $(".section-hd").offset().top;
        var itemOuterHeight = $(".section-hd").outerHeight();
        var winHeight = $win.height();
        var winScrollTop = $win.scrollTop();
        if (!(winScrollTop > itemOffsetTop + itemOuterHeight) && !(winScrollTop < itemOffsetTop - winHeight)) {
            if_travel_show = true;
        }
        if (document.documentElement.clientHeight < document.documentElement.offsetHeight && !if_travel_show) {
            $(window).on('scroll', function () { //页面加载时，获取滚动条初始高度
                var distance = $(document).scrollTop(); //获取滚动条初始高度的值 ：0
                if (distance >= sum && flag) {
                    index_travel();
                    flag = false;
                }
                if (distance >= three && isNews) {
                    index_list();
                    index_believe();
                    isNews = false;
                }
            })
            var index_scroll = $(document).scrollTop();
            if (index_scroll > headerH) {
                index_travel();
                index_list();
                index_believe();
            }
        } else {
            index_travel();
            index_list();
            index_believe();
        }
        //信用信息上下轮播
        setInterval(function () {
            AutoScroll(".autoScroll")
        }, 1000)
        //信用信息
        function AutoScroll(obj) {
            $(obj).find("div:first").animate({
                marginTop: "-32px"
            }, 500, function () {
                $(this).css({
                    marginTop: "0px"
                }).find("dd:first").appendTo(this);
            })
        }
    }
    return {
        initialize: function () {
            // temp
            temp();
        }
    }
});
var index_messages = {
	"to_station_request" : "请输入目的地!",
	"from_station_request" : "请输入出发地!",
	"same_to_from_station" : "出发地与目的地不能相同!",
	"jianma_hanzi":"简拼/全拼/汉字",
	"trainDate_request":"请输入出发日期!",
	"trainDate_error":"请输入合法的出发日期(1970-01-01)!",
	"backTrainDate_request":"请输入返程日期!",
	"backTrainDate_request":"请输入返程日期!",
	"trainDate_not_in":"出发日期不在预售期内!",
	"backTrainDate_not_in":"返程日期不在预售期内!",
	"backTrainDate_error":"请输入合法的返程日期(1970-01-01)!",
	"error_date":"请输入合法的往返日期(返程日期不能小于出发日期)!"
};
define("core/common/messages_index_zh_CN", function(){});

(function (factory) {
  if (typeof define === "function" && define.amd) {
    //AMD模式
    define('cityName',["jquery"], factory);
  } else {
    //全局模式
    factory(jQuery);
  }
}(function ($) {
  
  var index_messages = {
    "to_station_request": "请输入目的地!",
    "from_station_request": "请输入出发地!",
    "same_to_from_station": "出发地与目的地不能相同!",
    "jianma_hanzi": "简拼/全拼/汉字",
    "trainDate_request": "请输入出发日期!",
    "trainDate_error": "请输入合法的出发日期(1970-01-01)!",
    "backTrainDate_request": "请输入返程日期!",
    "backTrainDate_request": "请输入返程日期!",
    "trainDate_not_in": "出发日期不在预售期内!",
    "backTrainDate_not_in": "返程日期不在预售期内!",
    "backTrainDate_error": "请输入合法的返程日期(1970-01-01)!",
    "error_date": "请输入合法的往返日期(返程日期不能小于出发日期)!"
  };
  jQuery.extend({
    ht_getcookie: function (name) {
      var cookie_start = document.cookie.indexOf(name);
      var cookie_end = document.cookie.indexOf(";", cookie_start);
      return cookie_start == -1 ? '' : unescape(document.cookie.substring(
          cookie_start + name.length + 1,
          (cookie_end > cookie_start ? cookie_end :
              document.cookie.length)));
    },
    ht_setcookie: function (cookieName, cookieValue, seconds, path, domain, secure) {
      var expires = new Date();
      expires.setTime(expires.getTime() + seconds * 1000);
      document.cookie = escape(cookieName) + '=' + escape(cookieValue) +
          (expires ? '; expires=' + expires.toGMTString() : '') +
          (path ? '; path=' + path : '; path=/') +
          (domain ? '; domain=' + domain : '') +
          (secure ? '; secure' : '');
    },
    textFocus: function (v) {
      var range, len, v = v === undefined ? 0 : parseInt(v);
      this.each(function () {
        if (!this.setSelectionRange) {
          range = this.createTextRange(); //文本框创建范围
          v === 0 ? range.collapse(false) : range.move("character", v); //范围折叠
          range.select(); //选中
        } else {
          len = this.value.length;
          v === 0 ? this.setSelectionRange(len, len) : this.setSelectionRange(v, v);
        }
        this.focus();
      });
      return this;
    }
  });
  jQuery.extend({
    //TODO 在jq上注册新事件
    _index_initQueryInput: function (form, to, fromText, toText) {
      $.stationFor12306.init([form, to], {
        '_init_input': index_messages['jianma_hanzi'],
        '_top_4_initInput': index_messages['jianpin_hanzi'],
        '_unselected_class': 'error',
        'confirmCallBack': function (curObj) {
          var toTextIn = curObj[0]['id'].replace(/from/g, "to")
          if (curObj[0]['id'].indexOf("from") != -1) {
            if ($("#" + toTextIn).val() != '' && $("#" + toTextIn).val() != index_messages['jianma_hanzi'] && $("#" + toTextIn).val() != index_messages['jianpin_hanzi'])
              $("#" + toTextIn).select();
            else
              $("#" + toTextIn).val('');
            $("#" + toTextIn).focus();
          }
          if (curObj[0]['id'] == 'saleText') {
						$('#saleText').removeClass("input-error");
						$(".tooltip-error").hide();
						getQsDataList($('#sale').val(),'',$('#sale_time_date').val());
						// getScSnameListFn($('#sale').val(),'',$('#sale_time_date').val());
						getScSnameListFnIntraCity($('#sale').val(),'',$('#sale_time_date').val());
					}
          // if (curObj[0]['id'] == fromText) {
          // 	if ($("#" + toText).val() != '' && $("#" + toText).val() != index_messages['jianma_hanzi'] && $("#" + toText).val() != index_messages['jianpin_hanzi'])
          // 		$("#" + toText).select();
          // 	else
          // 		$("#" + toText).val('');
          // 	$("#" + toText).focus();
          // }
        }
      })
    }
  })
  var array_cities = []; // 完整城市列表
  
  var fav_cities = []; // 常用城市列表
  var array_cities_filter = []; // 当前搜索结果
  var externalAllStation = []; // 国外所有城市列表
  var array_cities_showing = []; // 显示中的城市
  var sugSelectItem = 0; // 选中项目
  var sugSelectItem2 = 0; // 选中项目
  var sugSelectTurn = 0; // 显示中选中项的序号
  var citySelected = 0; // 选中城市[SHIJIAZHUANG, 石家庄, 1301]
  var cityfield_focused = false; // 输入框是否获得焦点
  var mousedownOnPanel = false; // 鼠标按在小菜单上
  var mousedownOnPanel2 = false; // 鼠标按在大菜单上
  var mousedownOnPanelView = false; // 鼠标按在大菜单上
  var curPageIndex = 0; // 当前分页序号
  var curObj = ''; // 当前作用对象
  var curObjCode = ''; // 当前作用对象
  var cur = -1;
  var liarray_cities = {};
  var liarray_cities1 = []; // 城市列表
  var liarray_cities2 = [];
  var liarray_cities3 = [];
  var liarray_cities4 = [];
  var liarray_cities5 = [];
  var extraStationObj = {}//所有国外城市
  var ttArr = []//国家数组
  var allCountryStation = []//全部
  var allCountryStations = []//全部


  var city_name_character = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  //计算每页数量用
  var count_num = [];
  var count_num_flag = false

  var liarray_cities_array = [];
  for (var k = 0; k < 26; k++) {
    liarray_cities_array[k] = [];
  }

  var list_stations = [];
  for (var i = 0; i < 5; i++) {
    list_stations[i] = [];
  }

  var ularray_cities_showing1 = []; // 显示中的城市
  var ularray_cities_showing2 = []; // 显示中的城市
  var ularray_cities_showing3 = []; // 显示中的城市
  var ularray_cities_showing4 = []; // 显示中的城市
  var ularray_cities_showing5 = []; // 显示中的城市
  var ularray_cities_showing = [];
  var isClick = false;
  var loadJsFlag = true;
  var ulPageSize = 12; // 全部城市大列表中每页显示的城市个数
  var _12306_top_show_value = "简码/汉字"; //简拼/全拼/汉字
  var _12306_top_4_initInput = "简码/汉字"; //简拼/全拼/汉字或↑↓
  var _12306_selected_class = 'inp-txt_select';
  var _12306_unselected_class = 'inp-txt';
  var _12306_openFavorite = false;
  //选中值回调
  var confirmCallBack = null;
  //自定义位置
  var setPosition = null;
  //是否包含cookie信息
  var cookie_false = false;
  var $el1 = $('#form_cities2')
  var $el2 = $('#form_cities')
  var stationArr = ["fromStationText","toStationText","toStationText","fromStationSerialText","toStationSerialText","stationValue","start_sell","destination","fromStationFanText","toStationFanText","cd_codeText","saleText","from_codeText","to_codeText",'cdText','start_sellText','stationValueText','destinationText','changeStationText']
  $(document).ready(function(){
     $el1 = $('#form_cities2')
     $el2 = $('#form_cities')
    $(document).off().on('click', function(e) {
      if($(e.target).parents('#form_cities2')[0] != $el1[0]&&$($(e.target)[0]).attr('class')!='cityflip'&&$($(e.target)[0]).attr('class')!='footerLink'&&$($(e.target)[0]).attr('class')!='pagetxt'&&stationArr.indexOf($($(e.target)[0]).attr('id')) ==-1 &&$(e.target).parents('#form_cities')[0] != $el2[0]) {
        
        $.stationFor12306.clearStation('blur');

        // cityfield_focused = false;
        $("#form_cities").css("display", "none");
        $("#form_cities2").css("display", "none"); // 这里
        cur = -1;
        sugSelectItem2 = 0;
        // // 空条件过滤出所有城市列表
        array_cities_filter = $.stationFor12306.filterCity("");
        // // array_cities_filter = showAllCity();
        $.stationFor12306.city_showlist(0);
        // $.stationFor12306.setStationStyle();
      }else{
        // console.log($($(e.target)[0]),'@@@@@@@@@@@')

      }
    })
  })
  
  var favcityID = $.ht_getcookie("hj_favcity");
  $.stationFor12306 = {
    //绑定id集合
    bindInputs: [],
    get_initInputValue: function () {
      return _12306_top_show_value;
    },
    get_initTopInputValue: function () {
      return _12306_top_4_initInput;
    },
    //TODO 显示给定的城市列表片段
    city_Bind: function (acitylist) {
      if (acitylist.length == 0)
        return;
      var tHtml = "";
      // console.log(acitylist,'acitylist')
      $.each(acitylist, function (aIndex) {
        if (favcityID == acitylist[aIndex][2])
          tHtml += "<div class='cityline' id='citem_" + aIndex +
              "' cturn='" + acitylist[aIndex][11] +
              "'><span class='ralign'><b>" + acitylist[aIndex][1] +
              "</b></span></div>\n";
        else
          tHtml += "<div class='cityline' id='citem_" + aIndex +
              "' cturn='" + acitylist[aIndex][11] +
              "'><span class='ralign'>" + acitylist[aIndex][1] +
              "</span><span style='float:right;' class='ralign'>" + acitylist[aIndex][3] +
              "</span></div>\n";
      });
      $('#panel_cities').html(tHtml);
      $('.cityline').mouseover(function () {
        $.stationFor12306.city_shiftSelect(this);
      }).click(function () {
        $.stationFor12306.city_confirmSelect();
        // 空条件过滤出所有城市列表
        array_cities_filter = $.stationFor12306.filterCity("");
        $.stationFor12306.city_showlist(0);
      });
      $.stationFor12306.city_shiftSelect($("#citem_0"));
    },
    //TODO 移动当前选中项
    city_changeSelectIndex: function (aStep) {
      var asugSelectTurn = sugSelectTurn + aStep;
      if (asugSelectTurn == -1) {
        $.stationFor12306.city_showlist(curPageIndex - 1);
        $.stationFor12306.city_shiftSelect($("#citem_" + (array_cities_showing.length - 1)));
      } else if (asugSelectTurn == array_cities_showing.length) {
        $.stationFor12306.city_showlist(curPageIndex + 1);
        $.stationFor12306.city_shiftSelect($("#citem_0"));
      } else {
        $.stationFor12306.city_shiftSelect($("#citem_" + asugSelectTurn));
      }
    },
    //TODO 确认选择
    city_confirmSelect: function () {
      // console.log(citySelected,'citySelected')
      curObj.val(citySelected[1]);
      curObjCode.val(citySelected[2]);
      if (_12306_openFavorite) {
        $.stationFor12306.setStationInCookies(citySelected[1], citySelected[2]);
      }
      $("#form_cities").css("display", "none");
      $("#form_cities2").css("display", "none");
      $("#form_cities3").css("display", "none");
      cur = -1;
      sugSelectItem2 = 0;
      $.stationFor12306.setStationStyle();
      if (loadJsFlag) {
        $.stationFor12306.LoadJS(citySelected[2]);
      }
      if (confirmCallBack) {
        confirmCallBack(curObj, curObjCode);
      }
    },
    //TODO 指定新的选中项，恢复旧项
    city_shiftSelect: function (atarget) {
      if (sugSelectItem != atarget) {
        if (sugSelectItem != 0)
          $(sugSelectItem).removeClass('citylineover').addClass(
              'cityline').css("backgroundColor", "white");
        if (atarget != 0) {
          try {
            sugSelectItem = atarget;
            var city_j = $(sugSelectItem).removeClass('cityline')
                .addClass('citylineover').css("backgroundColor",
                    "#E8F3FF");
            sugSelectTurn = Number(city_j.attr('id').split("_")[1]);
            // var allCountryStationCur = externalAllStation.concat(array_cities)
            // console.log(allCountryStations,'array_cities2222')
            citySelected = allCountryStations[Number(city_j.attr('cturn'))];
            $("#cityid").val(citySelected[2]);
          } catch (e) {
          }
        }
      }
    },
    //TODO 指定新的选中项，恢复旧项
    city_shiftSelectInLi: function (atarget) {
      if (sugSelectItem2 != atarget) {
        if (sugSelectItem2 != 0)
          $(sugSelectItem2).removeClass('ac_over').addClass('ac_odd');
        if (atarget != 0) {
          try {
            sugSelectItem2 = atarget;
            $(sugSelectItem2).removeClass('ac_odd').addClass('ac_over');
          } catch (e) {
          }
        }
      }
    },
    //TODO tab栏点击事件
    js: function (el) {
      var i;
      //先取消高亮
      for (i = 1; i <= 7; i++) {
        if ($("#nav_list" + i).attr('class')) {
          $("#ul_list" + i).css("display", "none");
          $("#nav_list" + i).removeClass("action");
        }
      }
      for (i = 1; i <= 7; i++) {
        if (i == el) {
          $("#ul_list" + i).css("display", "block");
          $("#nav_list" + i).addClass("action");
          if (i == 1 || i == 7) {
            $("#flip_cities2").css("display", "none");
          }
          if (i > 1 && i < 7) {
            var totelLength = $.stationFor12306.tHtmlGetCityName(el - 1, -1, 0);
            if (totelLength > ulPageSize) {
              // 取分页数据
              var pagecount = Math.ceil(totelLength / ulPageSize);
              if (pagecount > 1) {
                $.stationFor12306.pageDesigh(pagecount, 0, i);
              }
              $("#flip_cities2").css("display", "block");
            } else {
              $("#flip_cities2").css("display", "none");
            }
          } else {
            curObj.focus();
          }
        } else {
          $("#ul_list" + i).css("display", "none");
          $("#nav_list" + i).removeClass("action");
        }
      }
      //事件丢失问题
      if (1 != el) {
        $('.ac_even').on('mouseover', function () {
          $.stationFor12306.city_shiftSelectInLi(this);
        }).on('click', function () {
          curObj.val($(this).text());
          curObjCode.val($(this).attr("data"));
          if (_12306_openFavorite)
            $.stationFor12306.setStationInCookies($(this).text(), $(this).attr("data"));
          $("#form_cities2").css("display", "none");
          cur = -1;
          sugSelectItem2 = 0;
          $.stationFor12306.setStationStyle();
          if (loadJsFlag) {
            $.stationFor12306.LoadJS($(this).attr("data"));
          }
          if (confirmCallBack) {
            confirmCallBack(curObj, curObjCode);
          }
        });
      }
    },
    // 国际tab
    extraItemStation:function(countryCodeItem){
      $('.extraClass').html('')
      $('.tabSearch').find('li').eq(countryCodeItem).addClass('action').siblings().removeClass('action')
      var itemParams = ttArr[countryCodeItem]
      for(var nn=0;nn<extraStationObj[itemParams].length;nn++){
        $('.extraClass').append('<li class="ac_even openLi ac_odd" title="'+extraStationObj[itemParams][nn].name1+'" data="'+extraStationObj[itemParams][nn].name2+'">'+extraStationObj[itemParams][nn].name1+'</li>')
      }
      $('.ac_even').on('mouseover', function () {
        $.stationFor12306.city_shiftSelectInLi(this);
      }).on('click', function () {
        curObj.val($(this).text());
        curObjCode.val($(this).attr("data"));
        if (_12306_openFavorite)
          $.stationFor12306.setStationInCookies($(this).text(), $(this).attr("data"));
        $("#form_cities2").css("display", "none");
        cur = -1;
        sugSelectItem2 = 0;
        $.stationFor12306.setStationStyle();
        if (loadJsFlag) {
          $.stationFor12306.LoadJS($(this).attr("data"));
        }
        if (confirmCallBack) {
          confirmCallBack(curObj, curObjCode);
        }
      });
    },
    //TODO
    tHtmlGetCityName: function (nod, at, aPageNo) {
      switch (nod) {
        case 0:
          if (at == -1) {
            return fav_cities.length;
          }
          if (at == -2) {
            return fav_cities;
          }
          return fav_cities[at];
          break;
        case 1:
          if (at == -1) {
            return liarray_cities_array[3].length;
          }
          if (at == -2) {
            return liarray_cities1;
          }
          if (liarray_cities1.length > ulPageSize) {
            // 取分页数据
            var pagecount = Math.ceil((liarray_cities1.length) /
                ulPageSize);
            if (pagecount > 1) {
              ularray_cities_showing1 = liarray_cities1.slice(ulPageSize *
                  (aPageNo), Math.min(ulPageSize * (aPageNo + 1),
                  liarray_cities1.length));
              return ularray_cities_showing1[at];
            }
          }
          return liarray_cities1[at];
          break;
        case 2:
          if (at == -1) {
            return liarray_cities_array[7].length;
          }
          if (at == -2) {
            return liarray_cities2;
          }
          if (liarray_cities2.length > ulPageSize) {
            // 取分页数据
            var pagecount = Math.ceil((liarray_cities2.length) /
                ulPageSize);
            if (pagecount > 1) {
              ularray_cities_showing2 = liarray_cities2.slice(ulPageSize *
                  (aPageNo), Math.min(ulPageSize * (aPageNo + 1),
                  liarray_cities2.length));
              return ularray_cities_showing2[at];
            }
          }
          return liarray_cities2[at];
          break;
        case 3:
          if (at == -1) {
            return liarray_cities_array[11].length;
          }
          if (at == -2) {
            return liarray_cities3;
          }
          if (liarray_cities3.length > ulPageSize) {
            // 取分页数据
            var pagecount = Math.ceil((liarray_cities3.length) /
                ulPageSize);
            if (pagecount > 1) {
              ularray_cities_showing3 = liarray_cities3.slice(ulPageSize *
                  (aPageNo), Math.min(ulPageSize * (aPageNo + 1),
                  liarray_cities3.length));
              return ularray_cities_showing3[at];
            }
          }
          return liarray_cities3[at];
          break;
        case 4:
          if (at == -1) {
            return liarray_cities_array[18].length;
          }
          if (at == -2) {
            return liarray_cities4;
          }
          if (liarray_cities4.length > ulPageSize) {
            // 取分页数据
            var pagecount = Math.ceil((liarray_cities4.length) /
                ulPageSize);
            if (pagecount > 1) {
              ularray_cities_showing4 = liarray_cities4.slice(ulPageSize *
                  (aPageNo), Math.min(ulPageSize * (aPageNo + 1),
                  liarray_cities4.length));
              return ularray_cities_showing4[at];
            }
          }
          return liarray_cities4[at];
          break;
        case 5:
          if (at == -1) {
            return liarray_cities_array[24].length;
          }
          if (at == -2) {
            return liarray_cities5;
          }
          if (liarray_cities5.length > ulPageSize) {
            // 取分页数据
            var pagecount = Math.ceil((liarray_cities5.length) /
                ulPageSize);
            if (pagecount > 1) {
              ularray_cities_showing5 = liarray_cities5.slice(ulPageSize *
                  (aPageNo), Math.min(ulPageSize * (aPageNo + 1),
                  liarray_cities5.length));
              return ularray_cities_showing5[at];
            }
          }
          return liarray_cities5[at];
          break;
        default:
          return "error";
          break;
      }
    },
    //TODO
    closeShowCity: function () {
      $("#form_cities2").css("display", "none");
      cur = -1;
      sugSelectItem2 = 0;
      $.each($.stationFor12306.bindInputs, function (n, value) {
        var hidenTextInput = "#" + value;
        var textInput = "#" + value + "Text";
        var textValue = $(textInput).val();
        if ("" == textValue) {
          $(textInput).val(_12306_top_show_value);
          $.stationFor12306.from_to_station_class_gray($(textInput));
          $(hidenTextInput).val("");
        }
      });
    },
    //TODO
    showAllCity: function () {
      // $("#form_cities2").css("display","none");
      var tHtml = "";
      var tHtmlInter = "";
      // tHtml = '<div style="position: absolute; z-index: 2000; top: 140px; left:138.5px;" winstyle="hot">'
      var _width = '440px';
      if (_12306_openFavorite) {
        _width = '400px';
      }
      tHtml = '<div class="com_hotresults" id="thetable" style="width:' + _width + '">' +
          '<div style="width:100%;">' +
          '<div class="ac_title">' +
          '<span>' +
          '拼音支持首字母输入' +
          '</span>' +
          '<a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a>' +
          '</div>'

          //js() line183
          +
          '<ul class="AbcSearch clx" id="abc">';
        tHtmlInter = '<div class="com_hotresults" id="thetable2" style="width:' + _width + '">' +
        '<div style="width:100%;">' +
        '<div class="ac_title">' +
        '<span>' +
        '拼音支持首字母输入' +
        '</span>' +
        '<a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a>' +
        '</div>'

        //js() line183
        +
        '<ul class="tabSearch clx" id="abc">';
      if (_12306_openFavorite) {
        tHtml = tHtml + '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">常用</li>';
      }
      tHtml = tHtml + '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">热门</li>' +
          '<li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">ABCDE</li>' +
          '<li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">FGHIJ</li>' +
          '<li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">KLMNO</li>' +
          '<li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">PQRST</li>' +
          '<li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">UVWXYZ</li>' +
          '</ul>';
      
      var countryItemArr = []
      // console.log(externalAllStation,'externalAllStation')
      for(var tt=0;tt<externalAllStation.length;tt++){
        var itemObj = {
          'name0':externalAllStation[tt][0],
          'name1':externalAllStation[tt][1],
          'name2':externalAllStation[tt][2],
          'name3':externalAllStation[tt][3],
          'name4':externalAllStation[tt][4],
          'name5':externalAllStation[tt][5],
          'name6':externalAllStation[tt][6],
          'name7':externalAllStation[tt][7],
          'name8':externalAllStation[tt][8],
          'name9':externalAllStation[tt][9],
          'name9':externalAllStation[tt][10],
          'name9':externalAllStation[tt][11],
        }
        if(externalAllStation[tt][9]!=''){
          if(ttArr.indexOf(externalAllStation[tt][9])==-1){
            ttArr.push(externalAllStation[tt][9])
            extraStationObj[externalAllStation[tt][9]]=[]
          }
          // else{
          //   if(ttArr.length>1){
          //     ttArr.splice(externalAllStation[tt][9],1)
          //   }
          // }
          countryItemArr.push(itemObj)
          // console.log(itemObj,'itemObj')
          // console.log(countryItemArr,'countryItemArr')
          extraStationObj[externalAllStation[tt][9]]=countryItemArr
        }
      }
      if(ttArr.length>0){
        for(var zz=0;zz<ttArr.length;zz++){
          var classAction = zz==0?'action':''
          tHtmlInter +=  '<li onclick="$.stationFor12306.extraItemStation('+zz+')" class="'+classAction+'">'+ttArr[zz]+'</li>'
        }
      }
      tHtmlInter += '</ul><div style="min-height: 180px"><ul class="extraClass" style="overflow: auto; max-height: 260px;padding-left: 20px;margin-left: 6px;zoom:1;">'
      if(ttArr.length>0&&extraStationObj[ttArr[0]].length>0){
        for(var nn=0;nn<extraStationObj[ttArr[0]].length;nn++){
          tHtmlInter = tHtmlInter+'<li class="ac_even openLi ac_odd" title="'+extraStationObj[ttArr[0]][nn].name1+'" data="'+extraStationObj[ttArr[0]][nn].name2+'">'+extraStationObj[ttArr[0]][nn].name1+'</li>'
        }
      }
      tHtmlInter = tHtmlInter+'</ul></div>'
      if (_12306_openFavorite) {
        tHtml += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;" method="hotData" id="ul_list7">';
        var cookieStations = $.stationFor12306.getStationInCookies();
        var cookieSize = cookieStations.length;
        if (cookieSize > 2) {
          cookie_false = true;
          for (var b = 0; b < cookieSize; b++) {
            tHtml += '<li class="ac_even"   title="' +
                cookieStations[b][0] + '" data="' +
                cookieStations[b][1] + '">' +
                cookieStations[b][0] + '</li>';
          }
        }
        tHtml += '</ul>';
      }
      tHtml += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;display:none;" method="hotData" id="ul_list1">';
      var favTotelLength = $.stationFor12306.tHtmlGetCityName(0, -1, 0);
      var _openClass = '';
      if (!_12306_openFavorite) {
        _openClass = ' openLi';
      }
      for (var b = 0; b < favTotelLength; b++) {
        tHtml += '<li class="ac_even' + _openClass + '"   title="' +
            $.stationFor12306.tHtmlGetCityName(0, b, 0)[1] + '" data="' +
            $.stationFor12306.tHtmlGetCityName(0, b, 0)[2] + '">' +
            $.stationFor12306.tHtmlGetCityName(0, b, 0)[1] + '</li>';
      }
      tHtml += '</ul>';

      for (var a = 2; a <= 6; a++) {
        var c = a - 1;
        var totelLength = $.stationFor12306.tHtmlGetCityName(c, -1, 0);
        if (totelLength > ulPageSize) {
          // 取分页数据
          var pagecount = Math.ceil((totelLength) / ulPageSize);
          if (pagecount > 1) {
            tHtml += '<div id="ul_list' +
                a + '">';
            $.stationFor12306.pageDesigh(pagecount, 0, a);
          }
          $("#flip_cities2").css("display", "block");
        } else {
          tHtml += '<ul class="popcitylist" style="overflow: auto; max-height: 260px; height: 191px;display:none;" id="ul_list' +
              a + '">';
          $("#flip_cities2").css("display", "none");
          var _openClass = '';
          if (!_12306_openFavorite) {
            _openClass = ' openLi';
          }
          for (var b = 0; b < $.stationFor12306.tHtmlGetCityName(c, -1, 0); b++) {
            tHtml += '<li class="ac_even' + _openClass + '"   title="' +
                $.stationFor12306.tHtmlGetCityName(c, b, 0)[1] + '" data="' +
                $.stationFor12306.tHtmlGetCityName(c, b, 0)[2] + '">' +
                $.stationFor12306.tHtmlGetCityName(c, b, 0)[1] + '</li>';
          }
        }
        tHtml += '</div>';
      }

      tHtml += '<div id="flip_cities2"> 翻页控制区</div>';
      tHtml += '</div>';
      $('#internalBox').html(tHtml);
      $('#externalBox').html(tHtmlInter);

      $('#thetable').on("click", function () {
        if ($("#form_cities2").css("display") == "block") {
          if (cur == 1 | cur == 0) {
            cur == -1;
          }
          curObj.select();
        }
      });
      
      $('#form_cities').on("click", function () {
        if ($("#form_cities").css("display") == "block") {
          if (cur == 1 | cur == 0) {
            cur == -1;
          }
          curObj.select();
        }
      });
      $('.ac_even').on('mouseover', function () {
        $.stationFor12306.city_shiftSelectInLi(this);
      }).on('click', function () {
        curObj.val($(this).text());
        curObjCode.val($(this).attr("data"));
        if (_12306_openFavorite)
          $.stationFor12306.setStationInCookies($(this).text(), $(this).attr("data"));
        $("#form_cities2").css("display", "none");
        cur = -1;
        sugSelectItem2 = 0;
        $.stationFor12306.setStationStyle();
        if (loadJsFlag) {
          $.stationFor12306.LoadJS($(this).attr("data"));
        }
        if (confirmCallBack) {
          confirmCallBack(curObj, curObjCode);
        }
      });

      $("#flip_cities2").css("display", "none");

      return array_cities;
    },
    //TODO
    LoadJS: function (file) {

      if (((typeof (mm_addjs) != "undefined")) && ('' != mm_addjs) &&
          (mm_addjs == 1)) {
        var head = document.getElementsByTagName('HEAD').item(0);
        var script = document.createElement('SCRIPT');
        script.src = mm_srcjs + file + ".js";
        script.type = "text/javascript";
        head.appendChild(script);
      }
    },
    //TODO
    addZMHtml: function (data, _openClass) {
      var ulHtml = ''
      if (data && data.length > 0) {
        var firstZm = data[0][0].charAt(0);
        ulHtml += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; " >';
        ulHtml += '<li class="ac_letter">' + firstZm.toUpperCase() + '</li>';
        for (var b = 0; b < 12; b++) {
          var show = data[b];
          if (show) {
            ulHtml += '<li class="ac_even' + _openClass + '"   title="' + show[1] +
                '" data="' + show[2] + '">' + show[1] + '</li>';
          } else {
            ulHtml += '<li class="ac_even' + _openClass + '" </li>';
          }
        }
        ulHtml += '</ul>';
      }
      return ulHtml;
    },
    pageDesigh: function (pagecount, aPageNo, idIndex) {
      var ulHtml = "";
      if (pagecount > 1) {
        if (aPageNo == -1)
          aPageNo = (pagecount - 1);
        else if (aPageNo == pagecount)
          aPageNo = 0;

        var _openClass = '';
        if (!_12306_openFavorite) {
          _openClass = ' openLi';
        }

        for (var k = 2; k <= 6; k++) {
          if (k == idIndex) {
            var array = list_stations[k - 2];
            for (var kk = 0; kk < array.length; kk++) {
              ularray_cities_showing = array[kk].slice(aPageNo * ulPageSize, (aPageNo + 1) * ulPageSize);
              ulHtml += $.stationFor12306.addZMHtml(ularray_cities_showing, _openClass);
            }
          }
        }
        $("#ul_list" + idIndex).html(ulHtml);
        $("#ul_list" + idIndex).css('height', 270)
        if (ulHtml) {
          var flipHtml = (aPageNo == 0) ? "&laquo;&nbsp;上一页" :
              "<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh(" + pagecount +
              ',' + (aPageNo - 1) + ',' + idIndex +
              ");return false;'>&laquo;&nbsp;上一页</a>";
          flipHtml += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;";
          flipHtml += (aPageNo == pagecount - 1) ? "下一页&nbsp;&raquo;" :
              "<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh(" +
              pagecount + "," + (aPageNo + 1) + "," + idIndex +
              ")'>下一页&nbsp;&raquo;</a>";
          $("#flip_cities2").html(flipHtml);
        } else {
          $("#flip_cities2").html('');
        }

        if (cur == 1 | cur == 0 | cur == 2) {
          cur == -1;
        }
        if (curObj)
          curObj.select();

      } else {
        // $("#flip_cities2").css("display", "none");
      }
      //事件丢失问题
      $('.ac_even').on('mouseover', function () {
        $.stationFor12306.city_shiftSelectInLi(this);
      }).on('click', function () {
        curObj.val($(this).text());
        curObjCode.val($(this).attr("data"));
        if (_12306_openFavorite) {
          $.stationFor12306.setStationInCookies($(this).text(), $(this).attr("data"));
        }
        $("#form_cities2").css("display", "none");
        cur = -1;
        sugSelectItem2 = 0;
        $.stationFor12306.setStationStyle();
        if (loadJsFlag) {
          $.stationFor12306.LoadJS($(this).attr("data"));
        }
        if (confirmCallBack) {
          confirmCallBack(curObj, curObjCode);
        }
      });
    },
    //TODO 搜索符合关键字的城市
    filterCity: function (aKeyword) {
      if (aKeyword.length == 0) {
        $("#top_cities").html(_12306_top_4_initInput);
        return array_cities;
      }
      //过滤html标签
      var reg = /<\/?[^>]*>/g;
      aKeyword = aKeyword.replace(reg, '');
      var aList = [];
      var isPinyin = /[^A-z]/.test(aKeyword);
      allCountryStation = externalAllStation.concat(array_cities)
      // console.log(allCountryStation,'allCountryStation')
      for (var i = 0; i < allCountryStation.length; i++) {
        if(allCountryStation[i]&&allCountryStation[i][10]&&allCountryStation[i][10]!=''&&typeof(allCountryStation[i][10])!='number'){
          if($.stationFor12306.isMatchCity(allCountryStation[i], aKeyword, isPinyin) || allCountryStation[i][10].indexOf(aKeyword)>-1){
            aList.push(allCountryStation[i]);
          }
        }else{
          if ($.stationFor12306.isMatchCity(allCountryStation[i], aKeyword, isPinyin))
            aList.push(allCountryStation[i]);
          }
        }
        
      if (aList.length > 0) {
        $("#top_cities").html(
            // "按\"<font color=red>" + aKeyword + "</font>\"检索：");
            "按\"<span class=txt-primary>" + aKeyword + "</span>\"检索：");
        return aList;
      } else {
        $("#top_cities").html(
            "无法匹配:<span class=txt-primary>" + aKeyword + "</span>");
        return [];
      }
    },
    //TODO
    replaceChar: function (astring, aindex, raha) {
      return astring.substr(0, aindex) + raha +
          astring.substr(aindex + 1, astring.length - 1);
    },
    //TODO 判断某城市是否符合搜索条件,只要拼音或中文顺序包含排列关键词字符元素即可
    isMatchCity: function (aCityInfo, aKey, aisPinyin) {
      // console.log(aCityInfo,'aCityInfo')
      var aKey = aKey.toLowerCase();

      var aInfo = [aCityInfo[4].toLowerCase(), aCityInfo[1],
        aCityInfo[3].toLowerCase()
      ];
      // aCityInfo [bjb,北京北,VAP,beijing,bjb,0]
      // 是否含有汉字
      var lastIndex = -1;
      var lastIndex_py = -1;
      if (aisPinyin) {
        aKey = aKey.split("");
        for (var m = 0; m < aKey.length; m++) {
          var newIndex = aInfo[1].indexOf(aKey[m]);
          if (newIndex > lastIndex && newIndex <= m) { // newIndex<=m 即左匹配
            aInfo[1] = $.stationFor12306.replaceChar(aInfo[1], newIndex, "-");
            lastIndex = newIndex;
          } else {
            return false;
          }
        }
      } else { // 处理拼音的
        aKey = aKey.split("");
        var yesOrNoJm = true; // 简码校验
        var yesOrNoPy = true; // 拼音校验
        var yesOrNoHK = true; // 拼音校验

        // 按简码检索
        for (var m = 0; m < aKey.length; m++) {
          var newIndex = aInfo[0].indexOf(aKey[m]);
          // if (newIndex > lastIndex && newIndex <= m) {
          if (newIndex > lastIndex) {
            aInfo[0] = $.stationFor12306.replaceChar(aInfo[0], newIndex, "-");
            lastIndex = newIndex;
          } else {
            yesOrNoJm = false;
            break;
          }
        }

        // 按拼音检索hkwestkowloon#
        for (var m = 0; m < aKey.length; m++) {
          var newIndex_py = aInfo[2].indexOf(aKey[m]);

          // if (newIndex_py > lastIndex_py && newIndex_py <= m) {
          if (newIndex_py > lastIndex_py) {
            aInfo[2] = $.stationFor12306.replaceChar(aInfo[2], newIndex_py, "-");
            lastIndex_py = newIndex_py;
          } else {
            yesOrNoPy = false;
            break;
          }
        }
        // if(aInfo[3]!=''){
        //   // 按拼音检索hkwestkowloon#
        //   for (var m = 0; m < aKey.length; m++) {
        //     var newIndex_py = aInfo[3].indexOf(aKey[m]);

        //     // if (newIndex_py > lastIndex_py && newIndex_py <= m) {
        //     if (newIndex_py > lastIndex_py) {
        //       aInfo[3] = $.stationFor12306.replaceChar(aInfo[3], newIndex_py, "-");
        //       lastIndex_py = newIndex_py;
        //     } else {
        //       yesOrNoPy = false;
        //       break;
        //     }
        //   }
        // }
        if ((yesOrNoJm == false) && (yesOrNoPy == false)) {
          return false;
        }
      }
      return true;
    },
    ///分页下方数字
    city_showlist_page: function (aPageNo, pagecount) {
      var html = '';
      html += '<div class="citypage">';
      html += (aPageNo == 0) ? '' /*'<a style="cursor:auto;" href="" class="pagetxt"><<</a>'*/ :
          '<a href="#" class="pagetxt" onclick="$.stationFor12306.city_showlist(' +
          (aPageNo - 1) +
          ');return false;"><<</a>';
      var curr = aPageNo + 1; //当前
      var max = pagecount; //最大页数
      var diff = 2; //页差
      var show = 5; //显示页数
      var start = (curr - diff) > 0 ? (curr + diff > max ? max - show + 1 : curr - diff) : 1; //开始页数
      var end = start + show > max ? max + 1 : start + show; //结束页数
      if (max < show) { //最大页数小于显示页数
        for (var i = 1; i < max + 1; i++) {
          if (curr == i) {
            html += "<a href='' class='cur footerLink' onclick='$.stationFor12306.city_showlist(" +
                (i - 1) +
                ");return false;'>" + (i) + "</a>";
          } else {
            html += "<a class='footerLink' href='' onclick='$.stationFor12306.city_showlist(" +
                (i - 1) +
                ");return false;'>" + (i) + "</a>";
          }
        }
      } else {
        for (var i = start; i < end; i++) {
          if (curr == i) {
            html += "<a href='' class='cur footerLink' onclick='$.stationFor12306.city_showlist(" +
                (i - 1) +
                ");return false;'>" + (i) + "</a>";
          } else {
            html += "<a href='' class='footerLink' onclick='$.stationFor12306.city_showlist(" +
                (i - 1) +
                ");return false;'>" + (i) + "</a>";
          }
        }
      }
      html += (aPageNo == pagecount - 1) ? '' /*'<a style="cursor:auto;" href="" class="pagetxt">>></a>'*/ :
          '<a href="" class="pagetxt" onclick="$.stationFor12306.city_showlist(' +
          (aPageNo + 1) +
          ');return false;">>></a>';
      html += '</div>';
      return html;
    },
    //TODO 显示当前城市列表中的指定分页
    city_showlist: function (aPageNo) {
      if (array_cities_filter.length > 6) {
        // 取分页数据
        var pagecount = Math.ceil((array_cities_filter.length) / 6);
        if (aPageNo == -1)
          aPageNo = (pagecount - 1);
        else if (aPageNo == pagecount)
          aPageNo = 0;
        array_cities_showing = array_cities_filter.slice(6 * (aPageNo),
            Math.min(6 * (aPageNo + 1), array_cities_filter.length));
        $.stationFor12306.city_Bind(array_cities_showing);
        // 翻页控制
        var flipHtml = "";
        flipHtml += $.stationFor12306.city_showlist_page(aPageNo, pagecount);

        $("#flip_cities").html(flipHtml);
        $("#flip_cities").css("display", "block");
      } else {
        aPageNo = 0;
        array_cities_showing = array_cities_filter;
        $.stationFor12306.city_Bind(array_cities_showing);
        $("#flip_cities").css("display", "none");
      }
      curPageIndex = aPageNo;
      if ($("#form_cities").css("display") == "block") {
        isClick = true;
        if (curObj) {
          curObj.focus();
        }

      }
    },
    //TODO 取得显示提示的div,用于在IE6下遮挡下拉框
    fixDivBugInIE6: function ($results) {
      try {
        $results.bgiframe();
        if ($results.width() > $('> ul', $results).width()) {
          $results.css("overflow", "hidden");
        } else {
          $('> iframe.bgiframe', $results).width(
              $('> ul', $results).width());
          $results.css("overflow", "scroll");
        }
        if ($results.height() > $('> ul', $results).height()) {
          $results.css("overflow", "hidden");
        } else {
          $('> iframe.bgiframe', $results).height(
              $('> ul', $results).height());
          $results.css("overflow", "scroll");
        }
      } catch (e) {

      }
    },
    //TODO 判断是否可清除发到站
    clearStation: function (event) {
      cur = -1;
      var fromStationText = curObj?curObj.val():'';
      var fromStation = curObjCode?curObjCode.val():'';
      if (fromStationText == "" || fromStation == '') {
        curObj?curObj.val(''):'';
        curObjCode?curObjCode.val(''):'';
      } else {
        var join = fromStationText + '|' + fromStation;
        // console.log(station_names)
        if (typeof (station_names) != "undefined") {
          if (station_names.indexOf(join) == -1) {
            curObj?curObj.val(''):'';
            curObjCode?curObjCode.val(''):'';
          } else if ('click' == event) {
            curObj?curObj.select():'';
            if ($("#form_cities").is(":hidden")) {
              $("#form_cities2").css("display", "block");
            }
          }
        } else {
          curObj?curObj.val(''):'';
          curObjCode?curObjCode.val(''):'';
        }
      }
    },
    //TODO
    MapCityID: function (aCityname) {
      // [Beijing, 北京, 1100]
      for (var i = 0; i < array_cities.length; i++) {
        if (array_cities[i][1] == aCityname) {
          return array_cities[i][2];
        }
      }
      return 0;
    },
    //TODO
    MapCityName: function (aCidyID) {
      // [Beijing, 北京, 1100]
      for (var i = 0; i < array_cities.length; i++) {
        if (array_cities[i][2] == aCidyID) {
          return array_cities[i][1];
        }
      }
      return "";
    },
    //TODO
    SetISPos: function (obj) {
      if (setPosition) {
        setPosition($("#form_cities"), $("#form_cities2"));
      } else {
        $("#form_cities").css("left", obj.position().left);
        $("#form_cities").css("top", obj.position().top + obj.height() + 12);
        $("#form_cities2").css("left", obj.position().left);
        $("#form_cities2").css("top", obj.position().top + obj.height() + 10);
      }

      var top = obj.offset().top;
      var searchDiv = $("#search_div");
      var choiceDiv = $("#choice_div");
      searchDiv.css("top", top);
      choiceDiv.css("top", top);
      var left = obj.offset().left;
      searchDiv.css("left", left);
      choiceDiv.css("left", left);
    },
    //TODO 事件处理函数
    myHandlerFg: function (evt) {
      // 判断浏览器
      if (evt == null) { // 是IE
        evt.keyCode = 9;
        // evt = window.event;
        // evt.returnValue=false;//屏蔽IE默认处理
      } else { // 是Firefox
        if (!evt.which && evt.which == 13) {
          // evt.which=9;
          evt.preventDefault(); // 屏蔽Firefox默认处理！！！
        } else if (evt.which && evt.keyCode == 13) {
          evt.which = 9;
        }
      }
    },
    //TODO 事件处理函数
    myHandler2: function (evt) {
      // 判断浏览器
      if (evt == null) { // 是IE
        evt = window.event;
        evt.returnValue = false; // 屏蔽IE默认处理
      } else { // 是Firefox
        if (evt.which && evt.which == 13) {
          var fireOnThis = document.getElementById("Upload_Data3");
          if (document.createEvent) {
            var evObj = document.createEvent('MouseEvents');
            evObj.initEvent('click', true, false);
            fireOnThis.dispatchEvent(evObj);
          } else if (document.createEventObject) {
            fireOnThis.fireEvent('onclick');
          }
        } else if (!evt.which && evt.which == 13) {
          // evt.which=13;
          evt.preventDefault(); // 屏蔽Firefox默认处理！！！
        }
      }
    },
    //TODO 文本框样式：正常样式
    from_to_station_class_plain: function (obj) {
      if (_12306_unselected_class && _12306_unselected_class != '') {
        obj.removeClass(_12306_unselected_class);
      }
      if (_12306_selected_class && _12306_selected_class != '') {
        obj.addClass(_12306_selected_class);
      }
    },
    //TODO 文本框样式：灰色字体
    from_to_station_class_gray: function (obj) {
      if (_12306_selected_class && _12306_selected_class != '') {
        obj.removeClass(_12306_selected_class);
      }
      if (_12306_unselected_class && _12306_unselected_class != '') {
        obj.addClass(_12306_unselected_class);
      }
    },
    //TODO 设置样式
    setStationStyle: function () {
      var fromStationText = curObj.val();
      if (fromStationText == "") {
        curObj.val(_12306_top_show_value);
        $.stationFor12306.from_to_station_class_gray(curObj);
        curObjCode.val("");
      } else {
        $.stationFor12306.from_to_station_class_plain(curObj);
      }
    },
    //TODO
    setCurValue: function () {
      curObj.val(citySelected[1]);
      curObjCode.val(citySelected[2]);
    },
    //TODO
    bindEvent: function (preId,num) {
      var hidenTextInput = "#" + preId;
      var textInput = "#" + preId + "Text";
      
      $(textInput).keydown(
          function (aevent) {
            curObj = $(textInput);
            curObjCode = $(hidenTextInput);
            cur = 0;
            isClick = true;
            loadJsFlag = true;
            $("#form_cities2").css("display", "none");
            sugSelectItem2 = 0;
            //设置显示宽度
            var width = $(textInput).width();
            if (-[1,]) {
              width = width - 4;
            }
            width = width < 220 ? 220 : width;
            $("#form_cities").css("width", width);
            $("#form_cities").css("display", "block");
            $(".AbcSearch li").removeClass('action');
            $('.popcitylist').css("display", "none");
            if (cookie_false && _12306_openFavorite) {
              $("#ul_list7").css("display", "block");
              $("#nav_list7").addClass("action");
            } else {
              $("#nav_list1").addClass("action");
              $("#nav_list8").addClass("action");
              $("#ul_list1").css("display", "block");
            }
            $("#flip_cities2").css("display", "none");
            $('.ac_even').removeClass('ac_over').addClass(
                'ac_odd');

            aevent = aevent || window.event;
            if (aevent.keyCode == 40) {
              $.stationFor12306.city_changeSelectIndex(1);
              $("#form_cities").css("display", "block");
              $.stationFor12306.SetISPos(curObj);
              $.stationFor12306.setCurValue();
            } else if (aevent.keyCode == 38) {
              $.stationFor12306.city_changeSelectIndex(-1);
              $.stationFor12306.setCurValue();
              $("#form_cities").css("display", "block");
              $.stationFor12306.SetISPos(curObj);
            } else if (aevent.keyCode == 13) {
              $.stationFor12306.city_confirmSelect();
              if (document.addEventListener) { // 如果是Firefox
                document.addEventListener("keypress",
                    $.stationFor12306.myHandlerFg, true);
              } else {
                // document.onkeypress=submitDefault;//如果是IE
                evt = window.event;
                evt.keyCode = 9;
                // evt.returnValue=false;//屏蔽IE默认处理
              }
            }
          }).focus(
          function () {
            loadJsFlag = true;
            if (isClick) {
              $("#form_cities2").css("display", "none");
              sugSelectItem2 = 0;
              isClick = false;
              cur = -1;
            } else {
              $('body').on("click",'.stationTab .results-menu-item',function(){
                $(this).addClass('is-active').siblings().removeClass('is-active')
                if($(this).attr('data-station')=='2'){
                  $('#externalBox').show()
                  $('#internalBox').hide()
                  $("#ul_list1").css("display", "none");
                }else{
                  $('#internalBox').show()
                  $('#externalBox').hide()
                  if($('#nav_list1').hasClass('action')){
                    $("#ul_list1").css("display", "block");
                  }
                }
              })
              // showAllCity();
              if (cur == -1) {
                $(".AbcSearch li").removeClass('action');
                $('.popcitylist').css("display", "none");
                $("#flip_cities2").css("display", "none");
                if (cookie_false && _12306_openFavorite) {
                  $("#ul_list7").css("display", "block");
                  $("#nav_list7").addClass("action");
                } else {
                  $("#nav_list1").addClass("action");
                  $("#nav_list8").addClass("action");
                  $("#ul_list1").css("display", "block");
                }
                $('.ac_even').removeClass('ac_over').addClass('ac_odd');
                $("#form_cities2").css("display", "block");

                for (var i = 2; i <= 6; i++) {
                  $("#ul_list" + i).css("height", 0);
                }
              }
            }
            curObj = $(textInput);
            curObjCode = $(hidenTextInput);
            cur = 0;
            cityfield_focused = true;
            $.stationFor12306.SetISPos(curObj);
          }).blur(function (e) {
        curObj = $(textInput);
        curObjCode = $(hidenTextInput);
        cur = 0;
        isClick = false;
        loadJsFlag = true;
        // if (!mousedownOnPanel && !mousedownOnPanel2) {
          // 点击下拉菜单以外的地方隐藏下拉菜单
          if($(e.target).parents('#form_cities2')[0] != $el1[0]&&stationArr.indexOf($($(e.target)[0]).attr('id')) ==-1 &&$(e.target).parents('#form_cities')[0] != $el2[0]) {
            $.stationFor12306.clearStation('blur');
      
            cityfield_focused = false;
            // $("#form_cities").css("display", "none");
            // $("#form_cities2").css("display", "none"); // 这里
            cur = -1;
            sugSelectItem2 = 0;
            // // 空条件过滤出所有城市列表
            array_cities_filter = $.stationFor12306.filterCity("");
            // array_cities_filter = showAllCity();
            $.stationFor12306.city_showlist(0);
            $.stationFor12306.setStationStyle();
          }else{
            // console.log($($(e.target)[0]),'@@@@@@@@@@@')
      
          }
      // $(document).on('click', function(e) {
      //     e.preventDefault()
      //     e.stopPropagation()
      //     // console.log(num,"nnnum")
      //     if($(e.target).parents('#form_cities2')[0] != $el1[0]&&$(e.target)[0] != $el[0]&&$(e.target).parents('#form_cities')[0] != $el2[0]&&num>1) {
      //       $.stationFor12306.clearStation('blur');

      //       cityfield_focused = false;
      //       console.log($($(e.target)[0]).attr('id'),'###')
      //       // console.log($(e.target)[0].indexOf('toStation'))
            
      //       // if($($(e.target)[0]).attr('id')&&($($(e.target)[0]).attr('id').indexOf('from')==-1||$($(e.target)[0]).attr('id').indexOf('toStation')==-1)){
      //         $("#form_cities").css("display", "none");
      //         $("#form_cities2").css("display", "none"); // 这里
      //       // }
      //       cur = -1;
      //       sugSelectItem2 = 0;
      //       // 空条件过滤出所有城市列表
      //       array_cities_filter = $.stationFor12306.filterCity("");
      //       // array_cities_filter = showAllCity();
      //       $.stationFor12306.city_showlist(0);
      //       $.stationFor12306.setStationStyle();
      //     }else{
      //       console.log($($(e.target)[0]),'@@@@@@@@@@@')
      
      //     }
      // })
          
        // }
      }).keyup(function (aevent) {
        curObj = $(textInput);
        curObjCode = $(hidenTextInput);
        cur = 0;
        isClick = true;
        aevent = aevent || window.event;
        if (aevent.keyCode != 40 && aevent.keyCode != 38 &&
            aevent.keyCode != 37 &&
            aevent.keyCode != 39 &&
            aevent.keyCode != 13 &&
            aevent.keyCode != 9) {
          array_cities_filter = $.stationFor12306.filterCity(curObj.val());
          $.stationFor12306.city_showlist(0);
        }
      }).click(function () {
        curObj = $(textInput);
        curObjCode = $(hidenTextInput);
        $.stationFor12306.clearStation('click');
      });
      $.stationFor12306.bindInputs.push(preId);
      
    },
    //TODO 获取常用城市
    getStationInCookies: function () {
      var cities = [];
      var cnss = $.ht_getcookie("_city_name_save_station");
      if (cnss) {
        var tempArr = cnss.split(',');
        if (tempArr && tempArr.length > 0) {
          $.each(tempArr, function (n, value) {
            var values = value.split('#');
            var stationArr = [];
            stationArr[0] = values[0];
            stationArr[1] = values[1];
            cities[n] = stationArr;
          });
        }
      }
      return cities;
    },
    //TODO 设置cookie城市
    setStationInCookies: function (text, code) {
      var cookieStation = $.stationFor12306.getStationInCookies();
      var _tempCookieStation = [];
      var size = cookieStation.length;
      // 判断是否包含
      var hasFlag = true;
      // 显示城市数
      var showNum = 10;
      for (var k = 0; k < size; k++) {
        if (cookieStation[k][0] == text && cookieStation[k][1] == code) {
          hasFlag = false;
        }
        _tempCookieStation.push(cookieStation[k]);
      }
      if (hasFlag) {
        _tempCookieStation.push([text, code]);
      }
      var newArr = _tempCookieStation;
      var saveStr = '';
      var newSize = newArr.length;
      var k = 0;
      if (newSize > showNum) {
        k = 1;
      }
      var indexNum = k;
      //当常用城市大于1时 显示常用城市
      if (newSize > 1) {
        $('#ul_list7').html('');
        cookie_false = true;
      }
      var liHtml = '';
      for (; k < newSize; k++) {
        if (k > indexNum)
          saveStr += ',';
        saveStr += newArr[k][0] + '#' + newArr[k][1];
        //重新设置常用城市列表
        if (cookie_false && _12306_openFavorite)
          liHtml += '<li class="ac_even" onmouseover="$.stationFor12306.city_shiftSelectInLi(this);" onclick="$.stationFor12306.li_click(this);"   title="' +
              newArr[k][0] + '" data="' +
              newArr[k][1] + '">' +
              newArr[k][0] + '</li>';
      }
      if (cookie_false && _12306_openFavorite)
        $('#ul_list7').html(liHtml);
      $.ht_setcookie("_city_name_save_station", saveStr, 365 * 24 * 60 * 60);
    },
    li_click: function (obj) {
      curObj.val($(obj).text());
      curObjCode.val($(obj).attr("data"));
      if (_12306_openFavorite) {
        $.stationFor12306.setStationInCookies($(obj).text(), $(obj).attr("data"));
      }
      $("#form_cities2").css("display", "none");
      cur = -1;
      sugSelectItem2 = 0;
      $.stationFor12306.setStationStyle();
      if (loadJsFlag) {
        $.stationFor12306.LoadJS($(obj).attr("data"));
      }
      if (confirmCallBack) {
        confirmCallBack(curObj, curObjCode);
      }
    },
    //TODO 初始化
    init: function (params, setParams) {
      liarray_cities_array = [];
      externalAllStation = [];
      for (var o = 0; o < 26; o++) {
        liarray_cities_array[o] = [];
      }
      array_cities = [];
      if (typeof (setParams) != "undefined") {
        if (typeof (setParams['_init_input']) != "undefined") {
          _12306_top_show_value = setParams['_init_input'];
        }
        if (typeof (setParams['_top_4_initInput']) != "undefined") {
          _12306_top_4_initInput = setParams['_top_4_initInput'];
        }
        if (typeof (setParams['confirmCallBack']) != "undefined") {
          confirmCallBack = setParams['confirmCallBack'];
        }
        if (typeof (setParams['_selected_class']) != "undefined") {
          _12306_selected_class = setParams['_selected_class'];
        }
        if (typeof (setParams['_unselected_class']) != "undefined") {
          _12306_unselected_class = setParams['_unselected_class'];
        }
        if (typeof (setParams['_12306_openFavorite']) != "undefined") {
          _12306_openFavorite = setParams['_12306_openFavorite'];
        }
        if (typeof (setParams['position']) != "undefined") {
          setPosition = setParams['position'];
        }
      }
      if (typeof (station_names) != "undefined") {
        // 分拆城市信息
        var cities = station_names.split('@');
        // console.log(cities,'citiescitiescities')
        for (var i = 0; i < cities.length; i++) {
          var titem = cities[i];
          var raha = titem.toString().charAt(0);
          for (var k in city_name_character) {
            if (raha == city_name_character[k]) {
              var extraStationSplit = titem.split('|');
              if(extraStationSplit[8]==''&&extraStationSplit[9]==''){
                liarray_cities_array[k].push(titem.split('|'));
              }
            }
          }
          if (titem.length > 0) {
            titem = titem.split('|');
            // console.log(titem,'$$$$$$$')
            if (favcityID != "" && titem[2] == favcityID) {
              favcity = titem;
              array_cities.unshift(titem);
              // 当fav城市位于第一页时，避免重复显示
              if (i > 6) {
                array_cities.push(titem);
              }
            } else {
              if(titem[8]!=''&&titem[9]!=''){
                externalAllStation.push(titem)
              }else{
                array_cities.push(titem);
              }
              
            }
          }
        }

        // console.log(array_cities,'array_cities')
        liarray_cities1 = liarray_cities_array[0].concat(liarray_cities_array[1]).concat(liarray_cities_array[2]).concat(liarray_cities_array[3]).concat(liarray_cities_array[4]);
        liarray_cities2 = liarray_cities_array[5].concat(liarray_cities_array[6]).concat(liarray_cities_array[7]).concat(liarray_cities_array[8]).concat(liarray_cities_array[9]);
        liarray_cities3 = liarray_cities_array[10].concat(liarray_cities_array[11]).concat(liarray_cities_array[12]).concat(liarray_cities_array[13]).concat(liarray_cities_array[14]);
        liarray_cities4 = liarray_cities_array[15].concat(liarray_cities_array[16]).concat(liarray_cities_array[17]).concat(liarray_cities_array[18]).concat(liarray_cities_array[19]);
        liarray_cities5 = liarray_cities_array[20].concat(liarray_cities_array[21]).concat(liarray_cities_array[22]).concat(liarray_cities_array[23]).concat(liarray_cities_array[24]).concat(liarray_cities_array[25]);

        list_stations[0] = [liarray_cities_array[0], liarray_cities_array[1], liarray_cities_array[2], liarray_cities_array[3], liarray_cities_array[4]];
        list_stations[1] = [liarray_cities_array[5], liarray_cities_array[6], liarray_cities_array[7], liarray_cities_array[8], liarray_cities_array[9]];
        list_stations[2] = [liarray_cities_array[10], liarray_cities_array[11], liarray_cities_array[12], liarray_cities_array[13], liarray_cities_array[14]];
        list_stations[3] = [liarray_cities_array[15], liarray_cities_array[16], liarray_cities_array[17], liarray_cities_array[18], liarray_cities_array[19]];
        list_stations[4] = [liarray_cities_array[20] /*,liarray_cities_array[21]*/, liarray_cities_array[22], liarray_cities_array[23], liarray_cities_array[24], liarray_cities_array[25]];
        allCountryStations = array_cities.concat(externalAllStation)
        for (var i = 0; i < allCountryStations.length; i++) {
          allCountryStations[i].push(i);
        }
      }

      if (typeof (favorite_names) != "undefined") {
        // 分拆城市信息
        var favcities = favorite_names.split('@');
        for (var i = 0; i < favcities.length; i++) {
          var titem = favcities[i];
          if (titem.length > 0) {
            titem = titem.split('|');
            fav_cities.push(titem);
          }
        }
        for (var i = 0; i < fav_cities.length; i++) {
          fav_cities[i].push(i);
        }
        favorite_names = ""
      }
      array_cities_filter = $.stationFor12306.filterCity("");
      $.stationFor12306.city_showlist(0);
      $.stationFor12306.showAllCity();
      isClick = false;
      $.stationFor12306.fixDivBugInIE6($('#form_cities'));
      $.stationFor12306.fixDivBugInIE6($('#form_cities2'));

      if (params && params.length > 0) {
        // console.log(tragetNum,2222222222)
        $.each(params, function (n, value) {
          // console.log(n,11111111111)
          $.stationFor12306.bindEvent(value,n);
        });
      }

      $('#form_cities').mousedown(function () {
        mousedownOnPanel = true;
      }).mouseup(function () {
        mousedownOnPanel = false;
      });

      $('#form_cities2').mousedown(function (e) {
        if($(e.target).attr('data-station')=='1'||$(e.target).attr('data-station')=='2'){
          mousedownOnPanelView = true
        }else{
          mousedownOnPanel2 = true;
        }
      }).mouseup(function (e) {
        if($(e.target).attr('data-station')=='1'||$(e.target).attr('data-station')=='2'){
          mousedownOnPanelView = true;
        }else{
          mousedownOnPanel2 = false;
        }
      });
      // if ('sale' == params[0]) {
      //   $('#' + params[0] + 'Text').blur();
      // }

    }
  };
}));

var favorite_names ='@bji|北京|BJP|0@sha|上海|SHH|1@tji|天津|TJP|2@cqi|重庆|CQW|3@csh|长沙|CSQ|4@cch|长春|CCT|5@cdu|成都|CDW|6@fzh|福州|FZS|7@gzh|广州|GZQ|8@gya|贵阳|GIW|9@hht|呼和浩特|HHC|10@heb|哈尔滨|HBB|11@hfe|合肥|HFH|12@hzh|杭州|HZH|13@hko|海口|VUQ|14@jna|济南|JNK|15@kmi|昆明|KMM|16@lsa|拉萨|LSO|17@lzh|兰州|LZJ|18@nni|南宁|NNZ|19@nji|南京|NJH|20@nch|南昌|NCG|21@sya|沈阳|SYT|22@sjz|石家庄|SJP|23@tyu|太原|TYV|24@wlq|乌鲁木齐南|WMR|25@wha|武汉|WHN|26@xni|西宁|XNO|27@xan|西安|XAY|28@ych|银川|YIJ|29@zzh|郑州|ZZF|30@szh|深圳|SZQ|shenzhen|sz|31@xme|厦门|XMS|xiamen|xm|32';
define("core/common/favorite_name", function(){});

/*
 * 首页 城市控件
 */
define('index/index-city',['jquery'
      , 'core/common/messages_index_zh_CN'
      , 'cityName'
      , 'core/common/favorite_name'], function ($
      , messagesIndexZhCN
      , cityName
      , favoriteName) {
    // 正晚点--城市控件成功回调
    function city() {
        jQuery.extend({
            //TODO 在jq上注册新事件
            
            _index_initQueryInput: function (form, to, fromText, toText) {
                
                $.stationFor12306.init([form, to], {
                    '_init_input': index_messages['jianma_hanzi'],
                    '_top_4_initInput': index_messages['jianpin_hanzi'],
                    '_unselected_class': 'error',
                    'confirmCallBack': function (curObj) {
                      
                     var toTextIn = curObj[0]['id'].replace(/from/g, "to")
                     if (curObj[0]['id'].indexOf("from")!=-1) {
                         if ($("#" + toTextIn).val() != '' && $("#" + toTextIn).val() != index_messages['jianma_hanzi'] && $("#" + toTextIn).val() != index_messages['jianpin_hanzi'])
                             $("#" + toTextIn).select();
                         else
                             $("#" + toTextIn).val('');
                         $("#" + toTextIn).focus();
                     }
                     if ($("#fromStationText").val() && $("#fromStationText").val() !== '简拼/全拼/汉字') {
                        $("#fromStationText").removeClass('input-error')
                        $("[data-id=fromStationText]").hide()
                    }
                    if ($("#toStationText").val() && $("#toStationText").val() !== '简拼/全拼/汉字') {
                        $("#toStationText").removeClass('input-error')
                        $("[data-id=toStationText]").hide()
                    }
                    if ($("#fromStationFanText").val() && $("#fromStationFanText").val() !== '简拼/全拼/汉字') {
                        $("#fromStationFanText").removeClass('input-error')
                        $("[data-id=fromStationFanText]").hide()
                    }
                    if ($("#toStationFanText").val() && $("#toStationFanText").val() !== '简拼/全拼/汉字') {
                        $("#toStationFanText").removeClass('input-error')
                        $("[data-id=toStationFanText]").hide()
                    }
                    if ($("#fromStationSerialText").val() && $("#fromStationSerialText").val() !== '简拼/全拼/汉字') {
                        $("#fromStationSerialText").removeClass('input-error')
                        $("[data-id=fromStationSerialText]").hide()
                    }
                    if ($("#toStationSerialText").val() && $("#toStationSerialText").val() !== '简拼/全拼/汉字') {
                        $("#toStationSerialText").removeClass('input-error')
                        $("[data-id=toStationSerialText]").hide()
                    }
    
                    if ($("#destinationText").val() && $("#destinationText").val() !== '简拼/全拼/汉字') {
                        $("#destinationText").removeClass('input-error')
                        $("[data-id=destinationText]").hide()
                    }
    
                    if ($("#toStationDinnerText").val() && $("#toStationDinnerText").val() !== '简拼/全拼/汉字') {
                        $("#toStationDinnerText").removeClass('input-error')
                        $("[data-id=toStationDinnerText]").hide()
                    }
                    if ($("#fromStationDinnerText").val() && $("#fromStationDinnerText").val() !== '简拼/全拼/汉字') {
                        $("#fromStationDinnerText").removeClass('input-error')
                        $("[data-id=fromStationDinnerText]").hide()
                    }
                    if ($("#stationValueText").val() && $("#stationValueText").val() !== '简拼/全拼/汉字') {
                        $("#stationValueText").removeClass('input-error')
                        $("[data-id=stationValueText]").hide()
                    }
                    if ($("#start_sellText").val() && $("#start_sellText").val() !== '简拼/全拼/汉字') {
                        $("#start_sellText").removeClass('input-error')
                        $("[data-id=start_sellText]").hide()
                    }
                     jQuery.support.cors = true;
                        // 正晚点
                        $.ajax({
                            url:getZhengWan,
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                'train_station_code': $('#stationValue').val()
                            },
                            success: function (result) {
                                var datas = result.data;
                                setLocalStorage('depotValue', datas)
                                $("#numberValue").val('');
                                $("#train_hide").html('');
                                for (var i = 0; i < datas.length; i++) {
                                    var $li = $('<li>' + datas[i] + '</li>');
                                    $('#train_hide').append($li);
                                }
                                var $lis = $('#train_hide').find('li');
                                // 点击每个Li 元素
                                $lis.on('click', function () {
                                    var $liVal = $(this).text();
                                    $('#numberValue').val($liVal);
                                    $('#train_hide ').hide();
                                });
                                $lis.hover(function () {
                                     $(this).addClass('currentColor').siblings().removeClass('currentColor');
                                });
                                $("#numberValue").removeClass("input-error");
                                $("[data-id=numberValue]").hide()
                            },
                            error: function (result) {
                                $("#numberValue").attr("disabled", "disabled");
                            }
                        });
                    }
                })
            }
        })
        // 单程
        $._index_initQueryInput('fromStation', 'toStation', 'fromStationText', 'toStationText');
        // 往返
        // if($('.search-tab-bd .search-tab-item').eq(1).css("display") == "block"){
        $._index_initQueryInput('fromStationFan', 'toStationFan', 'fromStationFanText', 'toStationFanText');
        // }
        // 接续换乘
        $._index_initQueryInput('fromStationSerial', 'toStationSerial', 'fromStationSerialText', 'toStationSerialText');
        // 正晚点
        $._index_initQueryInput('stationValue', '', 'stationValueText', '');
        // 起售时间
        $._index_initQueryInput('start_sell', '', 'start_sellText', '');
        // 天气查询
        $._index_initQueryInput('destination', '', 'destinationText', '');
    }
    return {
        initialize: function () {
            // city
            city()
        }
    }
});

(function(factory){
	if(typeof define === "function"&&define.amd){
		//AMD模式
		define('core/lib/bootstrap2',["jquery"],factory);
	}else{
		//全局模式
		factory(jQuery);
	}
}(function ($){
    /* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#transitions
 * ===================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

    "use strict"; // jshint ;_;
  
  
    /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
     * ======================================================= */
  
    $(function () {
  
      $.support.transition = (function () {
  
        var transitionEnd = (function () {
  
          var el = document.createElement('bootstrap')
            , transEndEventNames = {
                 'WebkitTransition' : 'webkitTransitionEnd'
              ,  'MozTransition'    : 'transitionend'
              ,  'OTransition'      : 'oTransitionEnd otransitionend'
              ,  'transition'       : 'transitionend'
              }
            , name
  
          for (name in transEndEventNames){
            if (el.style[name] !== undefined) {
              return transEndEventNames[name]
            }
          }
  
        }())
  
        return transitionEnd && {
          end: transitionEnd
        }
  
      })()
  
    })
  
  }(window.jQuery);/* ==========================================================
   * bootstrap-alert.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#alerts
   * ==========================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ========================================================== */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* ALERT CLASS DEFINITION
    * ====================== */
  
    var dismiss = '[data-dismiss="alert"]'
      , Alert = function (el) {
          $(el).on('click', dismiss, this.close)
        }
  
    Alert.prototype.close = function (e) {
      var $this = $(this)
        , selector = $this.attr('data-target')
        , $parent
  
      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }
  
      $parent = $(selector)
  
      e && e.preventDefault()
  
      $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())
  
      $parent.trigger(e = $.Event('close'))
  
      if (e.isDefaultPrevented()) return
  
      $parent.removeClass('in')
  
      function removeElement() {
        $parent
          .trigger('closed')
          .remove()
      }
  
      $.support.transition && $parent.hasClass('fade') ?
        $parent.on($.support.transition.end, removeElement) :
        removeElement()
    }
  
  
   /* ALERT PLUGIN DEFINITION
    * ======================= */
  
    var old = $.fn.alert
  
    $.fn.alert = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('alert')
        if (!data) $this.data('alert', (data = new Alert(this)))
        if (typeof option == 'string') data[option].call($this)
      })
    }
  
    $.fn.alert.Constructor = Alert
  
  
   /* ALERT NO CONFLICT
    * ================= */
  
    $.fn.alert.noConflict = function () {
      $.fn.alert = old
      return this
    }
  
  
   /* ALERT DATA-API
    * ============== */
  
    $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)
  
  }(window.jQuery);/* ============================================================
   * bootstrap-button.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#buttons
   * ============================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ============================================================ */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* BUTTON PUBLIC CLASS DEFINITION
    * ============================== */
  
    var Button = function (element, options) {
      this.$element = $(element)
      this.options = $.extend({}, $.fn.button.defaults, options)
    }
  
    Button.prototype.setState = function (state) {
      var d = 'disabled'
        , $el = this.$element
        , data = $el.data()
        , val = $el.is('input') ? 'val' : 'html'
  
      state = state + 'Text'
      data.resetText || $el.data('resetText', $el[val]())
  
      $el[val](data[state] || this.options[state])
  
      // push to event loop to allow forms to submit
      setTimeout(function () {
        state == 'loadingText' ?
          $el.addClass(d).attr(d, d) :
          $el.removeClass(d).removeAttr(d)
      }, 0)
    }
  
    Button.prototype.toggle = function () {
      var $parent = this.$element.closest('[data-toggle="buttons-radio"]')
  
      $parent && $parent
        .find('.active')
        .removeClass('active')
  
      this.$element.toggleClass('active')
    }
  
  
   /* BUTTON PLUGIN DEFINITION
    * ======================== */
  
    var old = $.fn.button
  
    $.fn.button = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('button')
          , options = typeof option == 'object' && option
        if (!data) $this.data('button', (data = new Button(this, options)))
        if (option == 'toggle') data.toggle()
        else if (option) data.setState(option)
      })
    }
  
    $.fn.button.defaults = {
      loadingText: 'loading...'
    }
  
    $.fn.button.Constructor = Button
  
  
   /* BUTTON NO CONFLICT
    * ================== */
  
    $.fn.button.noConflict = function () {
      $.fn.button = old
      return this
    }
  
  
   /* BUTTON DATA-API
    * =============== */
  
    $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      $btn.button('toggle')
    })
  
  }(window.jQuery);/* ==========================================================
   * bootstrap-carousel.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#carousel
   * ==========================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ========================================================== */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* CAROUSEL CLASS DEFINITION
    * ========================= */
  
    var Carousel = function (element, options) {
      this.$element = $(element)
      this.$indicators = this.$element.find('.carousel-indicators')
      this.options = options
      this.options.pause == 'hover' && this.$element
        .on('mouseenter', $.proxy(this.pause, this))
        .on('mouseleave', $.proxy(this.cycle, this))
    }
  
    Carousel.prototype = {
  
      cycle: function (e) {
        if (!e) this.paused = false
        if (this.interval) clearInterval(this.interval);
        this.options.interval
          && !this.paused
          && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
        return this
      }
  
    , getActiveIndex: function () {
        this.$active = this.$element.find('.item.active')
        this.$items = this.$active.parent().children()
        return this.$items.index(this.$active)
      }
  
    , to: function (pos) {
        var activeIndex = this.getActiveIndex()
          , that = this
  
        if (pos > (this.$items.length - 1) || pos < 0) return
  
        if (this.sliding) {
          return this.$element.one('slid', function () {
            that.to(pos)
          })
        }
  
        if (activeIndex == pos) {
          return this.pause().cycle()
        }
  
        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
      }
  
    , pause: function (e) {
        if (!e) this.paused = true
        if (this.$element.find('.next, .prev').length && $.support.transition.end) {
          this.$element.trigger($.support.transition.end)
          this.cycle(true)
        }
        clearInterval(this.interval)
        this.interval = null
        return this
      }
  
    , next: function () {
        if (this.sliding) return
        return this.slide('next')
      }
  
    , prev: function () {
        if (this.sliding) return
        return this.slide('prev')
      }
  
    , slide: function (type, next) {
        var $active = this.$element.find('.item.active')
          , $next = next || $active[type]()
          , isCycling = this.interval
          , direction = type == 'next' ? 'left' : 'right'
          , fallback  = type == 'next' ? 'first' : 'last'
          , that = this
          , e
  
        this.sliding = true
  
        isCycling && this.pause()
  
        $next = $next.length ? $next : this.$element.find('.item')[fallback]()
  
        e = $.Event('slide', {
          relatedTarget: $next[0]
        , direction: direction
        })
  
        if ($next.hasClass('active')) return
  
        if (this.$indicators.length) {
          this.$indicators.find('.active').removeClass('active')
          this.$element.one('slid', function () {
            var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
            $nextIndicator && $nextIndicator.addClass('active')
          })
        }
  
        if ($.support.transition && this.$element.hasClass('slide')) {
          this.$element.trigger(e)
          if (e.isDefaultPrevented()) return
          $next.addClass(type)
          $next[0].offsetWidth // force reflow
          $active.addClass(direction)
          $next.addClass(direction)
          this.$element.one($.support.transition.end, function () {
            $next.removeClass([type, direction].join(' ')).addClass('active')
            $active.removeClass(['active', direction].join(' '))
            that.sliding = false
            setTimeout(function () { that.$element.trigger('slid') }, 0)
          })
        } else {
          this.$element.trigger(e)
          if (e.isDefaultPrevented()) return
          $active.removeClass('active')
          $next.addClass('active')
          this.sliding = false
          this.$element.trigger('slid')
        }
  
        isCycling && this.cycle()
  
        return this
      }
  
    }
  
  
   /* CAROUSEL PLUGIN DEFINITION
    * ========================== */
  
    var old = $.fn.carousel
  
    $.fn.carousel = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('carousel')
          , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
          , action = typeof option == 'string' ? option : options.slide
        if (!data) $this.data('carousel', (data = new Carousel(this, options)))
        if (typeof option == 'number') data.to(option)
        else if (action) data[action]()
        else if (options.interval) data.pause().cycle()
      })
    }
  
    $.fn.carousel.defaults = {
      interval: 5000
    , pause: 'hover'
    }
  
    $.fn.carousel.Constructor = Carousel
  
  
   /* CAROUSEL NO CONFLICT
    * ==================== */
  
    $.fn.carousel.noConflict = function () {
      $.fn.carousel = old
      return this
    }
  
   /* CAROUSEL DATA-API
    * ================= */
  
    $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , options = $.extend({}, $target.data(), $this.data())
        , slideIndex
  
      $target.carousel(options)
  
      if (slideIndex = $this.attr('data-slide-to')) {
        $target.data('carousel').pause().to(slideIndex).cycle()
      }
  
      e.preventDefault()
    })
  
  }(window.jQuery);/* =============================================================
   * bootstrap-collapse.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#collapse
   * =============================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ============================================================ */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* COLLAPSE PUBLIC CLASS DEFINITION
    * ================================ */
  
    var Collapse = function (element, options) {
      this.$element = $(element)
      this.options = $.extend({}, $.fn.collapse.defaults, options)
  
      if (this.options.parent) {
        this.$parent = $(this.options.parent)
      }
  
      this.options.toggle && this.toggle()
    }
  
    Collapse.prototype = {
  
      constructor: Collapse
  
    , dimension: function () {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
      }
  
    , show: function () {
        var dimension
          , scroll
          , actives
          , hasData
  
        if (this.transitioning || this.$element.hasClass('in')) return
  
        dimension = this.dimension()
        scroll = $.camelCase(['scroll', dimension].join('-'))
        actives = this.$parent && this.$parent.find('> .accordion-group > .in')
  
        if (actives && actives.length) {
          hasData = actives.data('collapse')
          if (hasData && hasData.transitioning) return
          actives.collapse('hide')
          hasData || actives.data('collapse', null)
        }
  
        this.$element[dimension](0)
        this.transition('addClass', $.Event('show'), 'shown')
        $.support.transition && this.$element[dimension](this.$element[0][scroll])
      }
  
    , hide: function () {
        var dimension
        if (this.transitioning || !this.$element.hasClass('in')) return
        dimension = this.dimension()
        this.reset(this.$element[dimension]())
        this.transition('removeClass', $.Event('hide'), 'hidden')
        this.$element[dimension](0)
      }
  
    , reset: function (size) {
        var dimension = this.dimension()
  
        this.$element
          .removeClass('collapse')
          [dimension](size || 'auto')
          [0].offsetWidth
  
        this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')
  
        return this
      }
  
    , transition: function (method, startEvent, completeEvent) {
        var that = this
          , complete = function () {
              if (startEvent.type == 'show') that.reset()
              that.transitioning = 0
              that.$element.trigger(completeEvent)
            }
  
        this.$element.trigger(startEvent)
  
        if (startEvent.isDefaultPrevented()) return
  
        this.transitioning = 1
  
        this.$element[method]('in')
  
        $.support.transition && this.$element.hasClass('collapse') ?
          this.$element.one($.support.transition.end, complete) :
          complete()
      }
  
    , toggle: function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
      }
  
    }
  
  
   /* COLLAPSE PLUGIN DEFINITION
    * ========================== */
  
    var old = $.fn.collapse
  
    $.fn.collapse = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('collapse')
          , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
        if (!data) $this.data('collapse', (data = new Collapse(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }
  
    $.fn.collapse.defaults = {
      toggle: true
    }
  
    $.fn.collapse.Constructor = Collapse
  
  
   /* COLLAPSE NO CONFLICT
    * ==================== */
  
    $.fn.collapse.noConflict = function () {
      $.fn.collapse = old
      return this
    }
  
  
   /* COLLAPSE DATA-API
    * ================= */
  
    $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
      var $this = $(this), href
        , target = $this.attr('data-target')
          || e.preventDefault()
          || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
        , option = $(target).data('collapse') ? 'toggle' : $this.data()
      $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
      $(target).collapse(option)
    })
  
  }(window.jQuery);/* ============================================================
   * bootstrap-dropdown.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#dropdowns
   * ============================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ============================================================ */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* DROPDOWN CLASS DEFINITION
    * ========================= */
  
    var toggle = '[data-toggle=dropdown]'
      , Dropdown = function (element) {
          var $el = $(element).on('click.dropdown.data-api', this.toggle)
          $('html').on('click.dropdown.data-api', function () {
            $el.parent().removeClass('open')
          })
        }
  
    Dropdown.prototype = {
  
      constructor: Dropdown
  
    , toggle: function (e) {
        var $this = $(this)
          , $parent
          , isActive
  
        if ($this.is('.disabled, :disabled')) return
  
        $parent = getParent($this)
  
        isActive = $parent.hasClass('open')
  
        clearMenus()
  
        if (!isActive) {
          if ('ontouchstart' in document.documentElement) {
            // if mobile we we use a backdrop because click events don't delegate
            $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
          }
          $parent.toggleClass('open')
        }
  
        $this.focus()
  
        return false
      }
  
    , keydown: function (e) {
        var $this
          , $items
          , $active
          , $parent
          , isActive
          , index
  
        if (!/(38|40|27)/.test(e.keyCode)) return
  
        $this = $(this)
  
        e.preventDefault()
        e.stopPropagation()
  
        if ($this.is('.disabled, :disabled')) return
  
        $parent = getParent($this)
  
        isActive = $parent.hasClass('open')
  
        if (!isActive || (isActive && e.keyCode == 27)) {
          if (e.which == 27) $parent.find(toggle).focus()
          return $this.click()
        }
  
        $items = $('[role=menu] li:not(.divider):visible a', $parent)
  
        if (!$items.length) return
  
        index = $items.index($items.filter(':focus'))
  
        if (e.keyCode == 38 && index > 0) index--                                        // up
        if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
        if (!~index) index = 0
  
        $items
          .eq(index)
          .focus()
      }
  
    }
  
    function clearMenus() {
      $('.dropdown-backdrop').remove()
      $(toggle).each(function () {
        getParent($(this)).removeClass('open')
      })
    }
  
    function getParent($this) {
      var selector = $this.attr('data-target')
        , $parent
  
      if (!selector) {
        selector = $this.attr('href')
        selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }
  
      $parent = selector && $(selector)
  
      if (!$parent || !$parent.length) $parent = $this.parent()
  
      return $parent
    }
  
  
    /* DROPDOWN PLUGIN DEFINITION
     * ========================== */
  
    var old = $.fn.dropdown
  
    $.fn.dropdown = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('dropdown')
        if (!data) $this.data('dropdown', (data = new Dropdown(this)))
        if (typeof option == 'string') data[option].call($this)
      })
    }
  
    $.fn.dropdown.Constructor = Dropdown
  
  
   /* DROPDOWN NO CONFLICT
    * ==================== */
  
    $.fn.dropdown.noConflict = function () {
      $.fn.dropdown = old
      return this
    }
  
  
    /* APPLY TO STANDARD DROPDOWN ELEMENTS
     * =================================== */
  
    $(document)
      .on('click.dropdown.data-api', clearMenus)
      .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
      .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
      .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)
  
  }(window.jQuery);
  /* =========================================================
   * bootstrap-modal.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#modals
   * =========================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ========================================================= */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* MODAL CLASS DEFINITION
    * ====================== */
  
    var Modal = function (element, options) {
      this.options = options
      this.$element = $(element)
        .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
      this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
    }
  
    Modal.prototype = {
  
        constructor: Modal
  
      , toggle: function () {
          return this[!this.isShown ? 'show' : 'hide']()
        }
  
      , show: function () {
          var that = this
            , e = $.Event('show')
  
          this.$element.trigger(e)
  
          if (this.isShown || e.isDefaultPrevented()) return
  
          this.isShown = true
  
          this.escape()
  
          this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass('fade')
  
            if (!that.$element.parent().length) {
              that.$element.appendTo(document.body) //don't move modals dom position
            }
  
            that.$element.show()
  
            if (transition) {
              that.$element[0].offsetWidth // force reflow
            }
  
            that.$element
              .addClass('in')
              .attr('aria-hidden', false)
  
            that.enforceFocus()
  
            transition ?
              that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
              that.$element.focus().trigger('shown')
  
          })
        }
  
      , hide: function (e) {
          e && e.preventDefault()
  
          var that = this
  
          e = $.Event('hide')
  
          this.$element.trigger(e)
  
          if (!this.isShown || e.isDefaultPrevented()) return
  
          this.isShown = false
  
          this.escape()
  
          $(document).off('focusin.modal')
  
          this.$element
            .removeClass('in')
            .attr('aria-hidden', true)
  
          $.support.transition && this.$element.hasClass('fade') ?
            this.hideWithTransition() :
            this.hideModal()
        }
  
      , enforceFocus: function () {
          var that = this
          $(document).on('focusin.modal', function (e) {
            if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
              that.$element.focus()
            }
          })
        }
  
      , escape: function () {
          var that = this
          if (this.isShown && this.options.keyboard) {
            this.$element.on('keyup.dismiss.modal', function ( e ) {
              e.which == 27 && that.hide()
            })
          } else if (!this.isShown) {
            this.$element.off('keyup.dismiss.modal')
          }
        }
  
      , hideWithTransition: function () {
          var that = this
            , timeout = setTimeout(function () {
                that.$element.off($.support.transition.end)
                that.hideModal()
              }, 500)
  
          this.$element.one($.support.transition.end, function () {
            clearTimeout(timeout)
            that.hideModal()
          })
        }
  
      , hideModal: function () {
          var that = this
          this.$element.hide()
          this.backdrop(function () {
            that.removeBackdrop()
            that.$element.trigger('hidden')
          })
        }
  
      , removeBackdrop: function () {
          this.$backdrop && this.$backdrop.remove()
          this.$backdrop = null
        }
  
      , backdrop: function (callback) {
          var that = this
            , animate = this.$element.hasClass('fade') ? 'fade' : ''
  
          if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate
  
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
              .appendTo(document.body)
  
            this.$backdrop.click(
              this.options.backdrop == 'static' ?
                $.proxy(this.$element[0].focus, this.$element[0])
              : $.proxy(this.hide, this)
            )
  
            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow
  
            this.$backdrop.addClass('in')
  
            if (!callback) return
  
            doAnimate ?
              this.$backdrop.one($.support.transition.end, callback) :
              callback()
  
          } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')
  
            $.support.transition && this.$element.hasClass('fade')?
              this.$backdrop.one($.support.transition.end, callback) :
              callback()
  
          } else if (callback) {
            callback()
          }
        }
    }
  
  
   /* MODAL PLUGIN DEFINITION
    * ======================= */
  
    var old = $.fn.modal
  
    $.fn.modal = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('modal')
          , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
        if (!data) $this.data('modal', (data = new Modal(this, options)))
        if (typeof option == 'string') data[option]()
        else if (options.show) data.show()
      })
    }
  
    $.fn.modal.defaults = {
        backdrop: true
      , keyboard: true
      , show: true
    }
  
    $.fn.modal.Constructor = Modal
  
  
   /* MODAL NO CONFLICT
    * ================= */
  
    $.fn.modal.noConflict = function () {
      $.fn.modal = old
      return this
    }
  
  
   /* MODAL DATA-API
    * ============== */
  
    $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
      var $this = $(this)
        , href = $this.attr('href')
        , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
        , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())
  
      e.preventDefault()
  
      $target
        .modal(option)
        .one('hide', function () {
          $this.focus()
        })
    })
  
  }(window.jQuery);
  /* ===========================================================
   * bootstrap-tooltip.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#tooltips
   * Inspired by the original jQuery.tipsy by Jason Frame
   * ===========================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ========================================================== */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* TOOLTIP PUBLIC CLASS DEFINITION
    * =============================== */
  
    var Tooltip = function (element, options) {
      this.init('tooltip', element, options)
    }
  
    Tooltip.prototype = {
  
      constructor: Tooltip
  
    , init: function (type, element, options) {
        var eventIn
          , eventOut
          , triggers
          , trigger
          , i
  
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        this.enabled = true
  
        triggers = this.options.trigger.split(' ')
  
        for (i = triggers.length; i--;) {
          trigger = triggers[i]
          if (trigger == 'click') {
            this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
          } else if (trigger != 'manual') {
            eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
            eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
            this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
            this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
          }
        }
  
        this.options.selector ?
          (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
          this.fixTitle()
      }
  
    , getOptions: function (options) {
        options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)
  
        if (options.delay && typeof options.delay == 'number') {
          options.delay = {
            show: options.delay
          , hide: options.delay
          }
        }
  
        return options
      }
  
    , enter: function (e) {
        var defaults = $.fn[this.type].defaults
          , options = {}
          , self
  
        this._options && $.each(this._options, function (key, value) {
          if (defaults[key] != value) options[key] = value
        }, this)
  
        self = $(e.currentTarget)[this.type](options).data(this.type)
  
        if (!self.options.delay || !self.options.delay.show) return self.show()
  
        clearTimeout(this.timeout)
        self.hoverState = 'in'
        this.timeout = setTimeout(function() {
          if (self.hoverState == 'in') self.show()
        }, self.options.delay.show)
      }
  
    , leave: function (e) {
        var self = $(e.currentTarget)[this.type](this._options).data(this.type)
  
        if (this.timeout) clearTimeout(this.timeout)
        if (!self.options.delay || !self.options.delay.hide) return self.hide()
  
        self.hoverState = 'out'
        this.timeout = setTimeout(function() {
          if (self.hoverState == 'out') self.hide()
        }, self.options.delay.hide)
      }
  
    , show: function () {
        var $tip
          , pos
          , actualWidth
          , actualHeight
          , placement
          , tp
          , e = $.Event('show')
  
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e)
          if (e.isDefaultPrevented()) return
          $tip = this.tip()
          this.setContent()
  
          if (this.options.animation) {
            $tip.addClass('fade')
          }
  
          placement = typeof this.options.placement == 'function' ?
            this.options.placement.call(this, $tip[0], this.$element[0]) :
            this.options.placement
  
          $tip
            .detach()
            .css({ top: 0, left: 0, display: 'block' })
  
          this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
  
          pos = this.getPosition()
  
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
  
          switch (placement) {
            case 'bottom':
              tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
              break
            case 'top':
              tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
              break
            case 'left':
              tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
              break
            case 'right':
              tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
              break
          }
  
          this.applyPlacement(tp, placement)
          this.$element.trigger('shown')
        }
      }
  
    , applyPlacement: function(offset, placement){
        var $tip = this.tip()
          , width = $tip[0].offsetWidth
          , height = $tip[0].offsetHeight
          , actualWidth
          , actualHeight
          , delta
          , replace
  
        $tip
          .offset(offset)
          .addClass(placement)
          .addClass('in')
  
        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
  
        if (placement == 'top' && actualHeight != height) {
          offset.top = offset.top + height - actualHeight
          replace = true
        }
  
        if (placement == 'bottom' || placement == 'top') {
          delta = 0
  
          if (offset.left < 0){
            delta = offset.left * -2
            offset.left = 0
            $tip.offset(offset)
            actualWidth = $tip[0].offsetWidth
            actualHeight = $tip[0].offsetHeight
          }
  
          this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
        } else {
          this.replaceArrow(actualHeight - height, actualHeight, 'top')
        }
  
        if (replace) $tip.offset(offset)
      }
  
    , replaceArrow: function(delta, dimension, position){
        this
          .arrow()
          .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
      }
  
    , setContent: function () {
        var $tip = this.tip()
          , title = this.getTitle()
  
        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
      }
  
    , hide: function () {
        var that = this
          , $tip = this.tip()
          , e = $.Event('hide')
  
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
  
        $tip.removeClass('in')
  
        function removeWithAnimation() {
          var timeout = setTimeout(function () {
            $tip.off($.support.transition.end).detach()
          }, 500)
  
          $tip.one($.support.transition.end, function () {
            clearTimeout(timeout)
            $tip.detach()
          })
        }
  
        $.support.transition && this.$tip.hasClass('fade') ?
          removeWithAnimation() :
          $tip.detach()
  
        this.$element.trigger('hidden')
  
        return this
      }
  
    , fixTitle: function () {
        var $e = this.$element
        if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
          $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
      }
  
    , hasContent: function () {
        return this.getTitle()
      }
  
    , getPosition: function () {
        var el = this.$element[0]
        return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
          width: el.offsetWidth
        , height: el.offsetHeight
        }, this.$element.offset())
      }
  
    , getTitle: function () {
        var title
          , $e = this.$element
          , o = this.options
  
        title = $e.attr('data-original-title')
          || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
  
        return title
      }
  
    , tip: function () {
        return this.$tip = this.$tip || $(this.options.template)
      }
  
    , arrow: function(){
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
      }
  
    , validate: function () {
        if (!this.$element[0].parentNode) {
          this.hide()
          this.$element = null
          this.options = null
        }
      }
  
    , enable: function () {
        this.enabled = true
      }
  
    , disable: function () {
        this.enabled = false
      }
  
    , toggleEnabled: function () {
        this.enabled = !this.enabled
      }
  
    , toggle: function (e) {
        var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
        self.tip().hasClass('in') ? self.hide() : self.show()
      }
  
    , destroy: function () {
        this.hide().$element.off('.' + this.type).removeData(this.type)
      }
  
    }
  
  
   /* TOOLTIP PLUGIN DEFINITION
    * ========================= */
  
    var old = $.fn.tooltip
  
    $.fn.tooltip = function ( option ) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('tooltip')
          , options = typeof option == 'object' && option
        if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }
  
    $.fn.tooltip.Constructor = Tooltip
  
    $.fn.tooltip.defaults = {
      animation: true
    , placement: 'top'
    , selector: false
    , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    , trigger: 'hover focus'
    , title: ''
    , delay: 0
    , html: false
    , container: false
    }
  
  
   /* TOOLTIP NO CONFLICT
    * =================== */
  
    $.fn.tooltip.noConflict = function () {
      $.fn.tooltip = old
      return this
    }
  
  }(window.jQuery);
  /* ===========================================================
   * bootstrap-popover.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#popovers
   * ===========================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =========================================================== */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* POPOVER PUBLIC CLASS DEFINITION
    * =============================== */
  
    var Popover = function (element, options) {
      this.init('popover', element, options)
    }
  
  
    /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
       ========================================== */
  
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {
  
      constructor: Popover
  
    , setContent: function () {
        var $tip = this.tip()
          , title = this.getTitle()
          , content = this.getContent()
  
        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)
  
        $tip.removeClass('fade top bottom left right in')
      }
  
    , hasContent: function () {
        return this.getTitle() || this.getContent()
      }
  
    , getContent: function () {
        var content
          , $e = this.$element
          , o = this.options
  
        content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
          || $e.attr('data-content')
  
        return content
      }
  
    , tip: function () {
        if (!this.$tip) {
          this.$tip = $(this.options.template)
        }
        return this.$tip
      }
  
    , destroy: function () {
        this.hide().$element.off('.' + this.type).removeData(this.type)
      }
  
    })
  
  
   /* POPOVER PLUGIN DEFINITION
    * ======================= */
  
    var old = $.fn.popover
  
    $.fn.popover = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('popover')
          , options = typeof option == 'object' && option
        if (!data) $this.data('popover', (data = new Popover(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }
  
    $.fn.popover.Constructor = Popover
  
    $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
      placement: 'right'
    , trigger: 'click'
    , content: ''
    , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })
  
  
   /* POPOVER NO CONFLICT
    * =================== */
  
    $.fn.popover.noConflict = function () {
      $.fn.popover = old
      return this
    }
  
  }(window.jQuery);
  /* =============================================================
   * bootstrap-scrollspy.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#scrollspy
   * =============================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ============================================================== */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* SCROLLSPY CLASS DEFINITION
    * ========================== */
  
    function ScrollSpy(element, options) {
      var process = $.proxy(this.process, this)
        , $element = $(element).is('body') ? $(window) : $(element)
        , href
      this.options = $.extend({}, $.fn.scrollspy.defaults, options)
      this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
      this.selector = (this.options.target
        || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        || '') + ' .nav li > a'
      this.$body = $('body')
      this.refresh()
      this.process()
    }
  
    ScrollSpy.prototype = {
  
        constructor: ScrollSpy
  
      , refresh: function () {
          var self = this
            , $targets
  
          this.offsets = $([])
          this.targets = $([])
  
          $targets = this.$body
            .find(this.selector)
            .map(function () {
              var $el = $(this)
                , href = $el.data('target') || $el.attr('href')
                , $href = /^#\w/.test(href) && $(href)
              return ( $href
                && $href.length
                && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
            })
            .sort(function (a, b) { return a[0] - b[0] })
            .each(function () {
              self.offsets.push(this[0])
              self.targets.push(this[1])
            })
        }
  
      , process: function () {
          var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
            , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
            , maxScroll = scrollHeight - this.$scrollElement.height()
            , offsets = this.offsets
            , targets = this.targets
            , activeTarget = this.activeTarget
            , i
  
          if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets.last()[0])
              && this.activate ( i )
          }
  
          for (i = offsets.length; i--;) {
            activeTarget != targets[i]
              && scrollTop >= offsets[i]
              && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
              && this.activate( targets[i] )
          }
        }
  
      , activate: function (target) {
          var active
            , selector
  
          this.activeTarget = target
  
          $(this.selector)
            .parent('.active')
            .removeClass('active')
  
          selector = this.selector
            + '[data-target="' + target + '"],'
            + this.selector + '[href="' + target + '"]'
  
          active = $(selector)
            .parent('li')
            .addClass('active')
  
          if (active.parent('.dropdown-menu').length)  {
            active = active.closest('li.dropdown').addClass('active')
          }
  
          active.trigger('activate')
        }
  
    }
  
  
   /* SCROLLSPY PLUGIN DEFINITION
    * =========================== */
  
    var old = $.fn.scrollspy
  
    $.fn.scrollspy = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('scrollspy')
          , options = typeof option == 'object' && option
        if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }
  
    $.fn.scrollspy.Constructor = ScrollSpy
  
    $.fn.scrollspy.defaults = {
      offset: 10
    }
  
  
   /* SCROLLSPY NO CONFLICT
    * ===================== */
  
    $.fn.scrollspy.noConflict = function () {
      $.fn.scrollspy = old
      return this
    }
  
  
   /* SCROLLSPY DATA-API
    * ================== */
  
    $(window).on('load', function () {
      $('[data-spy="scroll"]').each(function () {
        var $spy = $(this)
        $spy.scrollspy($spy.data())
      })
    })
  
  }(window.jQuery);/* ========================================================
   * bootstrap-tab.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#tabs
   * ========================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ======================================================== */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* TAB CLASS DEFINITION
    * ==================== */
  
    var Tab = function (element) {
      this.element = $(element)
    }
  
    Tab.prototype = {
  
      constructor: Tab
  
    , show: function () {
        var $this = this.element
          , $ul = $this.closest('ul:not(.dropdown-menu)')
          , selector = $this.attr('data-target')
          , previous
          , $target
          , e
  
        if (!selector) {
          selector = $this.attr('href')
          selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
        }
  
        if ( $this.parent('li').hasClass('active') ) return
  
        previous = $ul.find('.active:last a')[0]
  
        e = $.Event('show', {
          relatedTarget: previous
        })
  
        $this.trigger(e)
  
        if (e.isDefaultPrevented()) return
  
        $target = $(selector)
  
        this.activate($this.parent('li'), $ul)
        this.activate($target, $target.parent(), function () {
          $this.trigger({
            type: 'shown'
          , relatedTarget: previous
          })
        })
      }
  
    , activate: function ( element, container, callback) {
        var $active = container.find('> .active')
          , transition = callback
              && $.support.transition
              && $active.hasClass('fade')
  
        function next() {
          $active
            .removeClass('active')
            .find('> .dropdown-menu > .active')
            .removeClass('active')
  
          element.addClass('active')
  
          if (transition) {
            element[0].offsetWidth // reflow for transition
            element.addClass('in')
          } else {
            element.removeClass('fade')
          }
  
          if ( element.parent('.dropdown-menu') ) {
            element.closest('li.dropdown').addClass('active')
          }
  
          callback && callback()
        }
  
        transition ?
          $active.one($.support.transition.end, next) :
          next()
  
        $active.removeClass('in')
      }
    }
  
  
   /* TAB PLUGIN DEFINITION
    * ===================== */
  
    var old = $.fn.tab
  
    $.fn.tab = function ( option ) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('tab')
        if (!data) $this.data('tab', (data = new Tab(this)))
        if (typeof option == 'string') data[option]()
      })
    }
  
    $.fn.tab.Constructor = Tab
  
  
   /* TAB NO CONFLICT
    * =============== */
  
    $.fn.tab.noConflict = function () {
      $.fn.tab = old
      return this
    }
  
  
   /* TAB DATA-API
    * ============ */
  
    $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  
  }(window.jQuery);/* =============================================================
   * bootstrap-typeahead.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#typeahead
   * =============================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ============================================================ */
  
  
  !function($){
  
    "use strict"; // jshint ;_;
  
  
   /* TYPEAHEAD PUBLIC CLASS DEFINITION
    * ================================= */
  
    var Typeahead = function (element, options) {
      this.$element = $(element)
      this.options = $.extend({}, $.fn.typeahead.defaults, options)
      this.matcher = this.options.matcher || this.matcher
      this.sorter = this.options.sorter || this.sorter
      this.highlighter = this.options.highlighter || this.highlighter
      this.updater = this.options.updater || this.updater
      this.source = this.options.source
      this.$menu = $(this.options.menu)
      this.shown = false
      this.listen()
    }
  
    Typeahead.prototype = {
  
      constructor: Typeahead
  
    , select: function () {
        var val = this.$menu.find('.active').attr('data-value')
        this.$element
          .val(this.updater(val))
          .change()
        return this.hide()
      }
  
    , updater: function (item) {
        return item
      }
  
    , show: function () {
        var pos = $.extend({}, this.$element.position(), {
          height: this.$element[0].offsetHeight
        })
  
        this.$menu
          .insertAfter(this.$element)
          .css({
            top: pos.top + pos.height
          , left: pos.left
          })
          .show()
  
        this.shown = true
        return this
      }
  
    , hide: function () {
        this.$menu.hide()
        this.shown = false
        return this
      }
  
    , lookup: function (event) {
        var items
  
        this.query = this.$element.val()
  
        if (!this.query || this.query.length < this.options.minLength) {
          return this.shown ? this.hide() : this
        }
  
        items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source
  
        return items ? this.process(items) : this
      }
  
    , process: function (items) {
        var that = this
  
        items = $.grep(items, function (item) {
          return that.matcher(item)
        })
  
        items = this.sorter(items)
  
        if (!items.length) {
          return this.shown ? this.hide() : this
        }
  
        return this.render(items.slice(0, this.options.items)).show()
      }
  
    , matcher: function (item) {
        return ~item.toLowerCase().indexOf(this.query.toLowerCase())
      }
  
    , sorter: function (items) {
        var beginswith = []
          , caseSensitive = []
          , caseInsensitive = []
          , item
  
        while (item = items.shift()) {
          if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
          else if (~item.indexOf(this.query)) caseSensitive.push(item)
          else caseInsensitive.push(item)
        }
  
        return beginswith.concat(caseSensitive, caseInsensitive)
      }
  
    , highlighter: function (item) {
        var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
        return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
          return '<strong>' + match + '</strong>'
        })
      }
  
    , render: function (items) {
        var that = this
  
        items = $(items).map(function (i, item) {
          i = $(that.options.item).attr('data-value', item)
          i.find('a').html(that.highlighter(item))
          return i[0]
        })
  
        items.first().addClass('active')
        this.$menu.html(items)
        return this
      }
  
    , next: function (event) {
        var active = this.$menu.find('.active').removeClass('active')
          , next = active.next()
  
        if (!next.length) {
          next = $(this.$menu.find('li')[0])
        }
  
        next.addClass('active')
      }
  
    , prev: function (event) {
        var active = this.$menu.find('.active').removeClass('active')
          , prev = active.prev()
  
        if (!prev.length) {
          prev = this.$menu.find('li').last()
        }
  
        prev.addClass('active')
      }
  
    , listen: function () {
        this.$element
          .on('focus',    $.proxy(this.focus, this))
          .on('blur',     $.proxy(this.blur, this))
          .on('keypress', $.proxy(this.keypress, this))
          .on('keyup',    $.proxy(this.keyup, this))
  
        if (this.eventSupported('keydown')) {
          this.$element.on('keydown', $.proxy(this.keydown, this))
        }
  
        this.$menu
          .on('click', $.proxy(this.click, this))
          .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
          .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
      }
  
    , eventSupported: function(eventName) {
        var isSupported = eventName in this.$element
        if (!isSupported) {
          this.$element.setAttribute(eventName, 'return;')
          isSupported = typeof this.$element[eventName] === 'function'
        }
        return isSupported
      }
  
    , move: function (e) {
        if (!this.shown) return
  
        switch(e.keyCode) {
          case 9: // tab
          case 13: // enter
          case 27: // escape
            e.preventDefault()
            break
  
          case 38: // up arrow
            e.preventDefault()
            this.prev()
            break
  
          case 40: // down arrow
            e.preventDefault()
            this.next()
            break
        }
  
        e.stopPropagation()
      }
  
    , keydown: function (e) {
        this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
        this.move(e)
      }
  
    , keypress: function (e) {
        if (this.suppressKeyPressRepeat) return
        this.move(e)
      }
  
    , keyup: function (e) {
        switch(e.keyCode) {
          case 40: // down arrow
          case 38: // up arrow
          case 16: // shift
          case 17: // ctrl
          case 18: // alt
            break
  
          case 9: // tab
          case 13: // enter
            if (!this.shown) return
            this.select()
            break
  
          case 27: // escape
            if (!this.shown) return
            this.hide()
            break
  
          default:
            this.lookup()
        }
  
        e.stopPropagation()
        e.preventDefault()
    }
  
    , focus: function (e) {
        this.focused = true
      }
  
    , blur: function (e) {
        this.focused = false
        if (!this.mousedover && this.shown) this.hide()
      }
  
    , click: function (e) {
        e.stopPropagation()
        e.preventDefault()
        this.select()
        this.$element.focus()
      }
  
    , mouseenter: function (e) {
        this.mousedover = true
        this.$menu.find('.active').removeClass('active')
        $(e.currentTarget).addClass('active')
      }
  
    , mouseleave: function (e) {
        this.mousedover = false
        if (!this.focused && this.shown) this.hide()
      }
  
    }
  
  
    /* TYPEAHEAD PLUGIN DEFINITION
     * =========================== */
  
    var old = $.fn.typeahead
  
    $.fn.typeahead = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('typeahead')
          , options = typeof option == 'object' && option
        if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }
  
    $.fn.typeahead.defaults = {
      source: []
    , items: 8
    , menu: '<ul class="typeahead dropdown-menu"></ul>'
    , item: '<li><a href="#"></a></li>'
    , minLength: 1
    }
  
    $.fn.typeahead.Constructor = Typeahead
  
  
   /* TYPEAHEAD NO CONFLICT
    * =================== */
  
    $.fn.typeahead.noConflict = function () {
      $.fn.typeahead = old
      return this
    }
  
  
   /* TYPEAHEAD DATA-API
    * ================== */
  
    $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
      var $this = $(this)
      if ($this.data('typeahead')) return
      $this.typeahead($this.data())
    })
  
  }(window.jQuery);
  /* ==========================================================
   * bootstrap-affix.js v2.3.2
   * http://getbootstrap.com/2.3.2/javascript.html#affix
   * ==========================================================
   * Copyright 2013 Twitter, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ========================================================== */
  
  
  !function ($) {
  
    "use strict"; // jshint ;_;
  
  
   /* AFFIX CLASS DEFINITION
    * ====================== */
  
    var Affix = function (element, options) {
      this.options = $.extend({}, $.fn.affix.defaults, options)
      this.$window = $(window)
        .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
        .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
      this.$element = $(element)
      this.checkPosition()
    }
  
    Affix.prototype.checkPosition = function () {
      if (!this.$element.is(':visible')) return
  
      var scrollHeight = $(document).height()
        , scrollTop = this.$window.scrollTop()
        , position = this.$element.offset()
        , offset = this.options.offset
        , offsetBottom = offset.bottom
        , offsetTop = offset.top
        , reset = 'affix affix-top affix-bottom'
        , affix
  
      if (typeof offset != 'object') offsetBottom = offsetTop = offset
      if (typeof offsetTop == 'function') offsetTop = offset.top()
      if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()
  
      affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
        false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
        'bottom' : offsetTop != null && scrollTop <= offsetTop ?
        'top'    : false
  
      if (this.affixed === affix) return
  
      this.affixed = affix
      this.unpin = affix == 'bottom' ? position.top - scrollTop : null
  
      this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
    }
  
  
   /* AFFIX PLUGIN DEFINITION
    * ======================= */
  
    var old = $.fn.affix
  
    $.fn.affix = function (option) {
      return this.each(function () {
        var $this = $(this)
          , data = $this.data('affix')
          , options = typeof option == 'object' && option
        if (!data) $this.data('affix', (data = new Affix(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }
  
    $.fn.affix.Constructor = Affix
  
    $.fn.affix.defaults = {
      offset: 0
    }
  
  
   /* AFFIX NO CONFLICT
    * ================= */
  
    $.fn.affix.noConflict = function () {
      $.fn.affix = old
      return this
    }
  
  
   /* AFFIX DATA-API
    * ============== */
  
    $(window).on('load', function () {
      $('[data-spy="affix"]').each(function () {
        var $spy = $(this)
          , data = $spy.data()
  
        data.offset = data.offset || {}
  
        data.offsetBottom && (data.offset.bottom = data.offsetBottom)
        data.offsetTop && (data.offset.top = data.offsetTop)
  
        $spy.affix(data)
      })
    })
  }(window.jQuery);
}));
(function(factory){
	if(typeof define === "function"&&define.amd){
		//AMD模式
		define('core/common/data.jcokies',["jquery"],factory);
	}else{
		//全局模式
		factory(jQuery);
	}
}(function ($){
	jQuery.extend({
		//方便统一名字 各处调用
		jc_getFromStation: function () {
			return $.jc_getcookie("_jc_save_fromStation");
		},
		//text：站名  code:站码
		jc_setFromStation: function (text, code) {
			if ("undefined" == typeof (text) || "undefined" == typeof (code) ||
				"" == text || "" == code) {
				throw "参数错误";
			}
			var _value = text + ',' + code;
			$.jc_setcookie("_jc_save_fromStation", _value, 10);
		},
		jc_getToStation: function () {
			return $.jc_getcookie("_jc_save_toStation");
		},
		//text：站名  code:站码
		jc_setToStation: function (text, code) {
			if ("undefined" == typeof (text) || "undefined" == typeof (code) ||
				"" == text || "" == code) {
				throw "参数错误";
			}
			var _value = text + ',' + code;
			$.jc_setcookie("_jc_save_toStation", _value, 10);
		},
		jc_getFromDate: function () {
			return $.jc_getcookie("_jc_save_fromDate");
		},
		jc_setFromDate: function (text) {
			if ("undefined" == typeof (text)) {
				text = "";
			}
			var _value = text;
			$.jc_setcookie("_jc_save_fromDate", _value, 10);
		},

		// 获取和储存车次的cookie
		jc_getTrainNumber: function () {
			return $.jc_getcookie("_jc_save_trainNumber");
		},
		jc_setTrainNumber: function (text) {
			if ("undefined" == typeof (text)) {
				text = "";
			}
			var _value = text;
			$.jc_setcookie("_jc_save_trainNumber", _value, 10);
		},

        // 正晚点 查询  获取和储存常用查询 车站
        jc_zGetTrainStition: function () {
            return $.jc_getcookie("_jc_save_zwdch_fromStation");
        },
        jc_zSetTrainStition: function (text, code) {
            if ("undefined" == typeof (text) || "undefined" == typeof (code) ||
                "" == text || "" == code) {
                throw "参数错误";
            }
            var _value = text + ',' + code;
            $.jc_setcookie("_jc_save_zwdch_fromStation", _value, 10);
        },


        // 获取和储存常用查询 车次
        jc_zGetTrainNumber: function () {
            return $.jc_getcookie("_jc_save_zwdch_cc");
        },
        jc_zSetTrainNumber: function (text) {
            if ("undefined" == typeof (text)) {
                text = "";
            }
            var _value = text;
            $.jc_setcookie("_jc_save_zwdch_cc", _value, 10);
        },

		// 获取和储存是否学生票cookie
		jc_getIsStudent: function () {
			return $.jc_getcookie("_jc_save_stuFlag_flag");
		},
		jc_setIsStudent: function (text) {
			if ("undefined" == typeof (text)) {
				text = "";
			}
			var _value = text;
			$.jc_setcookie("_jc_save_stuFlag_flag", _value, 10);
		},

		// 获取和储存是否高铁
		jc_setIsGD: function () {
			return $.jc_getcookie("_jc_save_gdFlag_flag");
		},
		jc_setIsGD: function (text) {
			if ("undefined" == typeof (text)) {
				text = "";
			}
			var _value = text;
			$.jc_setcookie("_jc_save_gdFlag_flag", _value, 10);
		},
		// 来源
		jc_setPageFrom: function () {
			return $.jc_getcookie("jc_setPageFrom");
		},
		jc_setPageFrom: function (text) {
			if ("undefined" == typeof (text)) {
				text = "";
			}
			var _value = text;
			$.jc_setcookie("jc_setPageFrom", _value, 10);
		},


        jc_saveZzwdch: function (text) {
            if ("undefined" == typeof (text) ) {
                text = '';
            }
            var _value = text;
            $.jc_setcookie("_jc_save_zwdch_cxlx", _value, 10);
        },


		//to的信息日期
		jc_getToDate: function () {
			return $.jc_getcookie("_jc_save_toDate");
		},
		jc_setToDate: function (text) {
			if ("undefined" == typeof (text)) {
				text = "";
			}
			var _value = text;
			$.jc_setcookie("_jc_save_toDate", _value, 10);
		},
		//往返 
		jc_getWfOrDc: function () {
			return $.jc_getcookie("_jc_save_wfdc_flag");
		},
		jc_setWfOrDc: function (text) {
			if ("undefined" == typeof (text)) {
				throw "参数错误";
			}
			var _value = text;
			$.jc_setcookie("_jc_save_wfdc_flag", _value, 10);
		},
		// // 订餐
		// jc_setDinnerTrainCode: function (text) {
		// 	if ("undefined" == typeof (text)) {
		// 		text = "";
		// 	}
		// 	var _value = text;
		// 	$.jc_setDinnerCookie("_extened_catering_TrainCode_new", _value, 10);
		// },
		// jc_setDinnerFromDate: function (text) {
		// 	if ("undefined" == typeof (text)) {
		// 		text = "";
		// 	}
		// 	var _value = text;
		// 	$.jc_setDinnerCookie("_extened_catering_fromDate_new", _value, 10);
		// },
		// jc_setDinnerFromStation: function (text, code) {
		// 	if ("undefined" == typeof (text) || "undefined" == typeof (code) ||
		// 		"" == text || "" == code) {
		// 		throw "参数错误";
		// 	}
		// 	var _value = text + ',' + code;
		// 	$.jc_setDinnerCookie("_extened_catering_fromStation_new", _value, 10);
		// },
		// jc_setDinnerTime: function (text) {
		// 	if ("undefined" == typeof (text)) {
		// 		text = "";
		// 	}
		// 	var _value = text;
		// 	$.jc_setDinnerCookie("_extened_catering_time_new", _value, 10);
		// },
		// jc_setDinnerToStation: function (text, code) {
		// 	if ("undefined" == typeof (text) || "undefined" == typeof (code) ||
		// 		"" == text || "" == code) {
		// 		throw "参数错误";
		// 	}
		// 	var _value = text + ',' + code;
		// 	$.jc_setDinnerCookie("_extened_catering_toStation_new", _value, 10);
		// },
		// jc_setDinnerCookie: function (cookieName, cookieValue, seconds, path, domain, secure) {
		// 	var domainNow = document.domain;
		// 	domainNow = domainNow.substring(domainNow.indexOf(".") + 1, domainNow.length).substring(domainNow.indexOf("."), domainNow.length);
		// 	var expires = new Date();
		// 	expires.setTime(expires.getTime() + seconds * 1000);
		// 	document.cookie = escape(cookieName) + '=' + escape(cookieValue) +
		// 		(path ? '; path=' + path : ';path=/') +
		// 		(domain ? '; domain=' + domainNow : '; domain=' + domainNow) +
		// 		(secure ? '; secure' : '')+(';expires='+expires);
		// },
		jc_getcookie: function (name) {
			var cookie_start = document.cookie.indexOf(name);
			var cookie_end = document.cookie.indexOf(";", cookie_start);
			return cookie_start == -1 ? '' : unescape(document.cookie.substring(
				cookie_start + name.length + 1,
				(cookie_end > cookie_start ? cookie_end :
					document.cookie.length)));
		},
		jc_setcookie: function (cookieName, cookieValue, seconds, path, domain, secure) {
			var domainNow = document.domain;
			domainNow = domainNow.substring(domainNow.indexOf(".") + 1, domainNow.length);
			var expires = new Date();
			expires.setTime(expires.getTime() + seconds * 1000);
			document.cookie = escape(cookieName) + '=' + escape(cookieValue) +
				(path ? '; path=' + path : ';path=/') +
				(domain ? '; domain=' + domainNow : '; domain=' + domainNow) +
				(secure ? '; secure' : '')+(';expires='+expires);
		}
	});
}));
/*
 * 首页  banner车票+常用查询
 */
define('index/index-ticket',['jquery', 'core/lib/bootstrap2', 'core/common/data.jcokies', 'core/common/messages_index_zh_CN'], function ($, bootstrap, jcokies, messagesIndexZhCN) {
    // ticket
    function ticket() {
        trainCity()
        $(document).ready(function(){
            $(document).off('click').on('click',function(e){
                if(!($(e.target).closest('.station').length ||$(e.target).closest('.sel-list').length)){
                    $('.sel').removeClass('active')
                }
            })
        })
        jQuery.support.cors = true;
        // $(function () {

            function getLocalStorage(name) {
                if (!name) return;
                return window.localStorage.getItem(name);
            }
            /*
             * 模拟网页中所有的下拉列表select
             */
            var $box = $('div.model-select-box');
            var $option = $('#check_model_select');
            var $option_typeahead = $('.input-box .typeahead');
            var $txt = $('div.model-select-text', $box);
            var speed = 10;
            var index = 0;
            var ind = 1;
            var isinit_ind = false;
            var ticketCheckStationList = {}
            var bsgCityList = []
            var chongCList = []
            var historyListYY = []//历史数据
            var leftNumYY = 0;
            var _historyNumYY = 0;
            var tag = '1_2';
            var flag = true
            var startStation = []
            var endStation = []
            var stationCode = ''
            /*
             * 当机某个下拉列表时，显示当前下拉列表的下拉列表框
             * 并隐藏页面中其他下拉列表
             */
            $('ul.model-select-option').on('mousedown', 'li', function () {
                var _ticketCheckStationList = deepClone(ticketCheckStationList);
                for (var k = 0; k < _ticketCheckStationList.data.length; k++) {
                    if ($(this).text() == _ticketCheckStationList.data[k][0]) {
                        _ticketCheckStationList.data[k][2] = 'click'
                    }
                }
                setStorage('ticketCheckStationList', _ticketCheckStationList)
                //赋值操作
                $(this).parent().siblings('div.model-select-text').text($(this).text())
                    .attr('data-value', $(this).attr('data-option'));
                $(this).parent().siblings($('input.selected-input')).attr('data-value', $(this).attr('data-option'));

                //标识选中项
                $(this).addClass('seleced data-selected').siblings('li').removeClass('seleced data-selected');

                //隐藏所有下拉框
                $option.slideUp(speed, function () {
                    //int($(this));
                });

                return false;
            })

            $('ul.model-select-option').on('mouseover', 'li', function () {
                $(this).addClass('seleced').siblings('li').removeClass('seleced');
            })
            $txt.click(function (e) {

                if ($('#topicId').val()) {
                    $('#ticketEntranceSel').focus()
                    var $current = $(this).siblings('ul.model-select-option');
                    //隐藏其它下拉
                    $option.not($current).slideUp(speed, function () {
                        int($(this));
                    });
                    //显示当前下拉
                    $current.slideToggle(speed, function () {
                        int($(this));
                    });
                    $option.find('li:first-child').addClass('seleced').siblings('li').removeClass('seleced');
                    return false;
                }
            });
            //点击选择，关闭其他下拉
            /*
             * 为每个下拉列表框中的选项设置默认选中标识 data-selected
             * 点击下拉列表框中的选项时，将选项的 data-option 属性的属性值赋给下拉列表的 data-value 属性，并改变默认选中标识 data-selected
             * 为选项添加 mouseover 事件
             */
            $option.find('li')
                //初始化选中项 data-selected,selected-input默认值
                .each(function (index, element) {
                    if ($(this).hasClass('seleced')) {
                        $(this).addClass('data-selected');
                        $(this).parent().siblings($('input.selected-input')).attr('data-value', $(this).attr('data-option'));
                    }
                })
                .mousedown(function () {
                    //赋值操作
                    $(this).parent().siblings('div.model-select-text').text($(this).text())
                        .attr('data-value', $(this).attr('data-option'));
                    $(this).parent().siblings($('input.selected-input')).attr('data-value', $(this).attr('data-option'));

                    //标识选中项
                    $(this).addClass('seleced data-selected').siblings('li').removeClass('seleced data-selected');

                    //隐藏所有下拉框
                    $option.slideUp(speed, function () {
                        //int($(this));
                    });

                    return false;
                })
                .mouseover(function () {
                    $(this).addClass('seleced').siblings('li').removeClass('seleced');
                });
            //点击文档，隐藏所有下拉
            $(document).click(function (e) {
                $option.slideUp(speed, function () {
                    int($(this));
                });
            });
            //初始化默认选择
            function int(obj) {
                obj.find('li.data-selected').addClass('seleced').siblings('li').removeClass('seleced');
            }
            // $("body").keydown(function (event) { //获取键盘事件

            //     var k = event.which; //得到键盘代码
            //     if (k > 36 && k < 41) {
            //         return false
            //     } //判断代码如果在37-40之间，则返回假

            // });
            $('#train_num').keydown(function (e) {
                $option_typeahead = $('.input-box .typeahead');
                // 键盘事件
                var e = e || window.target;
                if ($option_typeahead.css("display") == 'block') {
                    switch (e.keyCode) {
                        case 40:
                            var len = $('.input-box .typeahead').children().length;
                            ind++;
                            if (ind > len) {
                                ind = 1
                            }
                            var liTop = Math.floor($option_typeahead.find('li:nth-child(' + ind + ')').offset().top);
                            var trainList = $option_typeahead.outerHeight();
                            var liHeight = Math.floor($option_typeahead.find('li:first-child').outerHeight());
                            if (liTop > trainList) {
                                $option_typeahead.scrollTop(liHeight * (ind - 4));
                            }
                            if (liTop < 0) {
                                $option_typeahead.scrollTop(liHeight * (ind - 1));
                            }
                            break;
                        case 38:
                            var len = $('.input-box .typeahead').children().length;
                            ind--;
                            if (ind <= 0) {
                                ind = len;
                            }
                            var liBottom = Math.floor($option_typeahead.find('li:nth-child(' + ind + ')').offset().bottom);
                            var trainList = $option_typeahead.outerHeight();
                            var liHeight = Math.floor($option_typeahead.find('li:first-child').outerHeight());
                            if (liBottom > trainList) {
                                $option_typeahead.scrollTop(liHeight * (ind - 1));
                            } else {
                                $option_typeahead.scrollTop(liHeight * (ind - 4));
                            }
                            break;
                    }
                }
            });
            var distinct = function (arr) {
                var result = [],
                    i,
                    j,
                    len = arr.length;
                for (i = 0; i < len; i++) {
                    for (j = i + 1; j < len; j++) {
                        if (arr[i].from_station === arr[j].from_station && arr[i].to_station === arr[j].to_station) {
                            j = ++i;
                        }
                    }
                    result.push(arr[i]);
                }
                return result;
            }

            $(".icon-place").each(function (index, element) {
                $(this).click(function (e) {
                    $('#' + $(this).attr('data-click')).focus().val('');
                });
            })
            $(".icon-date").each(function (index, element) {
                $(this).click(function (e) {
                    $('#' + $(this).attr('data-click')).focus().val('');
                });
            })
            $('.model-select-option.train_hide').on('click', 'li', function () {
                $('.model-select-option.train_hide').hide()
            })
            $(".input-box").on("click", 'li', function () {
                if ($("#dinner_sub_mun").val()) {
                    $("#dinner_sub_mun").removeClass('input-error')
                    $("[data-id=dinner_sub_mun]").hide()
                };
                if ($("#numberValue").val()) {
                    $("#numberValue").removeClass('input-error')
                    $("[data-id=numberValue]").hide()
                };
                if ($("#train_num").val()) {
                    $("#train_num").removeClass('input-error')
                    $("[data-id=train_num]").hide()
                };
            })

            $("#history_ul").on('click', 'li', function () {
                window.open(singleWayToOld + '?linktypeid=dc&fs=' + $(this).attr("data-from-encode") + ',' + $(this).attr("data-from") + '&ts=' + $(this).attr("data-to-encode") + ',' + $(this).attr("data-to") + '&date=' + formatDate(new Date) + '&flag=' + 'N,N,Y')
            })
            // 历史纪录的dom循环
            function historyFn(threeHistoryList) {
                var dom = ''
                for (var i = 0; i < threeHistoryList.length; i++) {
                    dom += '<li data-from=' + threeHistoryList[i].from_station + ' data-to=' + threeHistoryList[i].to_station + ' data-from-encode=' + threeHistoryList[i].from_station_name_encode + ' data-to-encode=' + threeHistoryList[i].to_station_name_encode + '>' + threeHistoryList[i].from_station_name + '-' + threeHistoryList[i].to_station_name + '</li>'
                }
                $("#history_ul").empty().append(dom)
            }
            function historyFnYY(threeHistoryList) {
                var dom = ''
                for (var i = 0; i < threeHistoryList.length; i++) {
                    dom += '<li data-from=' + threeHistoryList[i].from_station + ' data-to=' + threeHistoryList[i].to_station + '>' + threeHistoryList[i].from_station_name + '-' + threeHistoryList[i].to_station_name + '</li>'
                }
                $("#historyUl").html(dom)
                $("#historyUl").off('click').on('click','li',function(){
                    var list = $(this).html().split('-')
                    $("#fromStationTextYY").val(list[0])
                    $("#toStationTextYY").val(list[1])
                    $("#fromStationYY").val($(this).attr('data-from'))
                    $("#toStationYY").val($(this).attr('data-to'))
                    if ($("#fromStationYY").val()) {
                        $("#fromStationTextYY").removeClass("input-error");
                        noChoseCity2($("#fromStationTextYY"),'fromStationTextYY')
                    }
                    if ($("#toStationYY").val()) {
                        $("#toStationTextYY").removeClass("input-error");
                        noChoseCity2($("#toStationTextYY"),'toStationTextYY')
                    }
                })
                $('#clearHistory').off('click').on('click',function(){
                    removeLocalStore('historyListYY')
                    $('.search-history-yy').hide()
                })
            }
            // 车次查始末站的变量
            var jsonObj = JSON.parse(getLocalStorage('historyList') || '[]')
            var historyList = jsonObj;
            historyFn(historyList.slice(0, 10));
            var leftNum = 0;
            var _historyNum = 0;
            // 车次模糊查询
            $('#train_num').typeahead({
                items: 10000,
                source: function (query, process) {
                    ind = 1;
                    $option_typeahead.find('li:first-child').addClass('active').siblings('li').removeClass('active');
                    if ($("#train_num").val()) {
                        $("#train_num").removeClass('input-error')
                        $("[data-id=train_num]").hide()
                    };
                    var result = null;
                    var data = $('#check_in').val().replace(/-/g, "")
                    var reg = /^[GTKDCZY]{0,1}[0-9]{0,6}$/;
                    var isTypeahead = query.toUpperCase().match(reg);
                    if (isTypeahead) {
                        jQuery.support.cors = true;
                        $.ajax({
                            url: getTrainList,
                            timeout: 10000,
                            type: 'GET',
                            dataType: 'jsonp',
                            xhrFields: { withCredentials : true },
                            crossDomain: true,
                            data: {
                                keyword: query,
                                date: data
                            },
                            success: function (result) {
                                if (result.data) {

                                    if (result.data[0].station_train_code == $("#train_num").val().toUpperCase()) {
                                        $("#topicId").val(result.data[0].train_no)
                                        getCityStationFn();
                                    }
                                }
                                var resultList = []

                                for (var i = 0; i < result.data.length; i++) {
                                    var aItem = {
                                        id: result.data[i].train_no,
                                        name: result.data[i].station_train_code + '(' + result.data[i].from_station + '-' + result.data[i].to_station + ')',
                                        nameCode: result.data[i].station_train_code
                                    };
                                    aItem = JSON.stringify(aItem);
                                    resultList.push(aItem)
                                }

                                process(resultList);
                            },
                            error: function (err) {}
                        })
                    }
                },
                matcher: function (obj) {
                    var item = JSON.parse(obj);
                    return ~item.name.toLowerCase().indexOf(this.query.toLowerCase())
                },

                sorter: function (items) {
                    var beginswith = [],
                        caseSensitive = [],
                        caseInsensitive = [],
                        item;
                    while (aItem = items.shift()) {
                        var item = JSON.parse(aItem);
                        if (!item.name.toLowerCase().indexOf(this.query.toLowerCase()))
                            beginswith.push(JSON.stringify(item));
                        else if (~item.name.indexOf(this.query)) caseSensitive.push(JSON.stringify(item));
                        else caseInsensitive.push(JSON.stringify(item));
                    }

                    return beginswith.concat(caseSensitive, caseInsensitive)

                },

                highlighter: function (obj) {
                    var item = JSON.parse(obj);
                    var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
                    return item.name.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                        return '<strong>' + match + '</strong>'
                    });
                },
                updater: function (obj) {
                    var item = JSON.parse(obj);
                    $('#topicId').attr('value', item.id);
                    $('#station_loading').show()
                    ind = 1;
                    $option_typeahead.find('li:first-child').addClass('active').siblings('li').removeClass('active');
                    getCityStationFn();
                    return item.nameCode;

                }
            })
            $("#ticket_check_trainNum").val(
                index_messages.jianma_hanzi
            )
            // 对历史记录存在情况下对输入框设置默认值
            if (historyList.length > 0) {
                $('#search-history').show();
                $('#fromStation').val(historyList[0].from_station);
                $('#fromStationText').val(historyList[0].from_station_name);
                $('#toStationText').val(historyList[0].to_station_name);
                $('#toStation').val(historyList[0].to_station);

                $('#fromStationFan').val(historyList[0].from_station);
                $('#fromStationFanText').val(historyList[0].from_station_name);
                $('#toStationFanText').val(historyList[0].to_station_name);
                $('#toStationFan').val(historyList[0].to_station);

                $('#fromStationSerial').val(historyList[0].from_station);
                $('#fromStationSerialText').val(historyList[0].from_station_name);
                $('#toStationSerialText').val(historyList[0].to_station_name);
                $('#toStationSerial').val(historyList[0].to_station);

                $('#fromStationDinner').val(historyList[0].from_station);
                $('#fromStationDinnerText').val(historyList[0].from_station_name);
                $('#toStationDinnerText').val(historyList[0].to_station_name);
                $('#toStationDinner').val(historyList[0].to_station);

            } else { //初始化提示信息
                $('#search-history').hide();
                $('#fromStation').val('');
                $('#fromStationText').val(index_messages.jianma_hanzi);
                $('#toStationText').val(index_messages.jianma_hanzi);
                $('#toStation').val('');

                $('#fromStationFan').val('');
                $('#fromStationFanText').val(index_messages.jianma_hanzi);
                $('#toStationFanText').val(index_messages.jianma_hanzi);
                $('#toStationFan').val('');

                $('#fromStationSerial').val('');
                $('#fromStationSerialText').val(index_messages.jianma_hanzi);
                $('#toStationSerialText').val(index_messages.jianma_hanzi);
                $('#toStationSerial').val('');

                $('#fromStationDinner').val('');
                $('#fromStationDinnerText').val(index_messages.jianma_hanzi);
                $('#toStationDinnerText').val(index_messages.jianma_hanzi);
                $('#toStationDinner').val('');
                // 起售时间
                $('#start_sellText').val(index_messages.jianma_hanzi);
                $('#start_sell').val('');
                // 天气
                $('#destinationText').val(index_messages.jianma_hanzi);
                $('#destination').val('');

            }

            // 初始化
            // 各个时间初始化为当天
            
            $('#train_date').val(formatDate(new Date));
            if(Number(GetDateStr(15).replace(/-/g,''))<=20250222){
                $('#train_date_yy').val(GetDateStr(15));
            }else{
                $('#train_date_yy').val('');
            }
            $('#go_date').val(formatDate(new Date));
            $('#from_date').val(formatDate(new Date));
            $('#serial_date').val(formatDate(new Date));
            $('#dinner_date').val(formatDate(new Date));
            $("#ticket_check_date").val(formatDate(new Date));
            $("#check_in").val(formatDate(new Date));
            $('#sale_time').val(formatDate(new Date));

            //历史纪录滑动动画
            $('#iconRightHos').on('click', function () {
                if ($('#history_ul').width() > ($('.history-list-wrap').width() + _historyNum * 85)) {
                    if (($('#history_ul').width() - 85) > ($('.history-list-wrap').width() + _historyNum * 85)) {
                        leftNum += 85;
                        _historyNum++;
                    } else {
                        leftNum = $('#history_ul').width() - $('.history-list-wrap').width()
                        _historyNum++;
                    }
                }

                $('#history_ul').animate({
                    left: "-" + leftNum + "px"
                });
            })

            $('#iconLeftHos').on('click', function () {
                if (_historyNum > 0) {
                    if (_historyNum == 1) {
                        leftNum = 0
                        _historyNum--;
                    } else {
                        leftNum -= 85;
                        _historyNum--;
                    }
                }
                $('#history_ul').animate({
                    left: "-" + leftNum + "px"
                });
            })
            $('#iconRight').off().on('click', function () {
                if ($('#historyUl').width() > ($('.history-list-wrap').width() + _historyNumYY * 85)) {
                    if (($('#historyUl').width() - 85) > ($('.history-list-wrap').width() + _historyNumYY * 85)) {
                        leftNumYY += 85;
                        _historyNumYY++;
                    } else {
                        leftNumYY = $('#historyUl').width() - $('.history-list-wrap').width()
                        _historyNumYY++;
                    }
                }
                $('#historyUl').animate({
                    left: "-" + leftNumYY + "px"
                });
            })

            $('#iconLeft').off().on('click', function () {
                if (_historyNumYY > 0) {
                    if (_historyNumYY == 1) {
                        leftNumYY = 0
                        _historyNumYY--;
                    } else {
                        leftNumYY -= 85;
                        _historyNumYY--;
                    }
                }
                $('#historyUl').animate({
                    left: "-" + leftNumYY + "px"
                });
            })

            $(".search-history-btn").on('click', function () {
                window.localStorage.setItem('historyList', [])
                historyList = [];
                $('#search-history').hide();
            })

            // 单程切换点击事件
            $("#danChange").on("click", function () {
                var mid = $("#fromStation").val();
                $("#fromStation").val($("#toStation").val());
                $("#toStation").val(mid)
                var midText = $("#fromStationText").val();
                $("#fromStationText").val($("#toStationText").val());
                $("#toStationText").val(midText)
            });

            // 往返切换点击事件
            $("#returnChange").on("click", function () {
                var mid = $("#fromStationFan").val();
                $("#fromStationFan").val($("#toStationFan").val());
                $("#toStation").val(mid)
                var midText = $("#fromStationFanText").val();
                $("#fromStationFanText").val($("#toStationFanText").val());
                $("#toStationFanText").val(midText)
            });

            // 连续切换点击事件
            $("#serialChange").on("click", function () {
                var mid = $("#fromStationSerial").val();
                $("#fromStationSerial").val($("#toStationSerial").val());
                $("#toStationSerial").val(mid)
                var midText = $("#fromStationSerialText").val();
                $("#fromStationSerialText").val($("#toStationSerialText").val());
                $("#toStationSerialText").val(midText)
            });

            // 单程确定点击事件
            // $("#search_one").on("click", function () {
            $("body").on("click","#search_one", function () {
                if ($("#fromStation").val() && $("#toStation").val() && $("#train_date").val()) {
                    var leftTicketDTO = {};
                    leftTicketDTO.from_station_name = $("#fromStationText").val();
                    leftTicketDTO.from_station = $("#fromStation").val();
                    leftTicketDTO.to_station = $("#toStation").val();
                    leftTicketDTO.to_station_name = $("#toStationText").val();
                    leftTicketDTO.train_date = $("#train_date").val();
                    leftTicketDTO.isStudent = $("#isStudentDan").hasClass('active') ? 'Y' : 'N';
                    leftTicketDTO.isHigh = $("#isHighDan").hasClass('active') ? 'Y' : 'N';
                    leftTicketDTO.from_station_name_encode = encodeURI(leftTicketDTO.from_station_name)
                    leftTicketDTO.to_station_name_encode = encodeURI(leftTicketDTO.to_station_name)
                    $('#search-history').show();
                    setStorage('leftTicketDTO', leftTicketDTO)
                    historyList.unshift(leftTicketDTO);
                    historyList = distinct(historyList);
                    setLocalStorage('historyList', historyList)
                    var threeHistoryList = historyList.slice(0, 10)
                    historyFn(threeHistoryList);
                    window.open(singleWayToOld + '?linktypeid=dc&fs=' + leftTicketDTO.from_station_name_encode + ',' + leftTicketDTO.from_station + '&ts=' + leftTicketDTO.to_station_name_encode + ',' + leftTicketDTO.to_station + '&date=' + leftTicketDTO.train_date + '&flag=' + leftTicketDTO.isStudent + ',' + leftTicketDTO.isHigh + ',Y')

                } else {
                    if (!$("#fromStation").val()) {
                        $("#fromStationText").addClass("input-error");
                        noChoseCity($("#fromStationText"))
                    }
                    if (!$("#toStation").val()) {
                        $("#toStationText").addClass("input-error");
                        noChoseCity($("#toStationText"), '46px', '347px', '请选择到达地')
                    }
                }
            });
            // 往返确定点击
            $("#search_two").on("click", function () {
                if ($("#fromStationFan").val() && $("#toStationFan").val() && $("#go_date").val()) {
                    var leftTicketDTO = {};
                    leftTicketDTO.from_station_name = $("#fromStationFanText").val();
                    leftTicketDTO.from_station = $("#fromStationFan").val();
                    leftTicketDTO.to_station = $("#toStationFan").val();
                    leftTicketDTO.to_station_name = $("#toStationFanText").val();
                    leftTicketDTO.train_date = $("#go_date").val();
                    leftTicketDTO.back_train_date = $("#from_date").val();
                    leftTicketDTO.isStudent = $("#isStudent").hasClass('active') ? 'Y' : 'N';
                    leftTicketDTO.isHigh = $("#isHigh").hasClass('active') ? 'Y' : 'N';
                    leftTicketDTO.from_station_name_encode = encodeURI(leftTicketDTO.from_station_name)
                    leftTicketDTO.to_station_name_encode = encodeURI(leftTicketDTO.to_station_name)
                    $('#search-history').show();
                    setStorage('leftTicketDTO', leftTicketDTO)
                    historyList.unshift(leftTicketDTO);
                    historyList = distinct(historyList);
                    setLocalStorage('historyList', historyList)
                    var threeHistoryList = historyList.slice(0, 10)
                    historyFn(threeHistoryList);
                    window.open(singleWayToOld + '?linktypeid=wf&fs=' + leftTicketDTO.from_station_name_encode + ',' + leftTicketDTO.from_station + '&ts=' + leftTicketDTO.to_station_name_encode + ',' + leftTicketDTO.to_station + '&date=' + leftTicketDTO.train_date + ',' + leftTicketDTO.back_train_date + '&flag=' + leftTicketDTO.isStudent + ',' + leftTicketDTO.isHigh + ',Y')
                } else {
                    if (!$("#fromStationFan").val()) {
                        $("#fromStationFanText").addClass("input-error");
                        noChoseCity($("#fromStationFanText"))
                    }
                    if (!$("#toStationFan").val()) {
                        $("#toStationFanText").addClass("input-error");
                        noChoseCity($("#toStationFanText"), '46px', '347px', '请选择到达地')
                    }
                }
            });
            // 连续点击确定
            $("#search_three").on("click", function () {
                if ($("#fromStationSerial").val() && $("#toStationSerial").val() && $("#serial_date").val()) {
                    var leftTicketDTO = {};
                    leftTicketDTO.from_station_name = $("#fromStationSerialText").val();
                    leftTicketDTO.from_station = $("#fromStationSerial").val();
                    leftTicketDTO.to_station = $("#toStationSerial").val();
                    leftTicketDTO.to_station_name = $("#toStationSerialText").val();
                    leftTicketDTO.train_date = $("#serial_date").val();
                    leftTicketDTO.isStudent = $("#isStudentLian").hasClass('active') ? 'Y' : 'N';
                    leftTicketDTO.isHigh = $("#isHighLian").hasClass('active') ? 'Y' : 'N';
                    leftTicketDTO.from_station_name_encode = encodeURI(leftTicketDTO.from_station_name)
                    leftTicketDTO.to_station_name_encode = encodeURI(leftTicketDTO.to_station_name)
                    $('#search-history').show();
                    $.jc_setPageFrom("12306_index");
                    setStorage('leftTicketDTO', leftTicketDTO)
                    historyList.unshift(leftTicketDTO);
                    historyList = distinct(historyList);
                    setLocalStorage('historyList', historyList)
                    var threeHistoryList = historyList.slice(0, 10)
                    historyFn(threeHistoryList);

                    window.open(continuityWayToOld + '?linktypeid=lx&fs=' + leftTicketDTO.from_station_name_encode + ',' + leftTicketDTO.from_station + '&ts=' + leftTicketDTO.to_station_name_encode + ',' + leftTicketDTO.to_station + '&date=' + leftTicketDTO.train_date + '&flag=' + leftTicketDTO.isStudent + ',N' + ',Y')
                } else {
                    if (!$("#fromStationSerial").val()) {
                        $("#fromStationSerialText").addClass("input-error");
                        noChoseCity($("#fromStationSerialText"))
                    }
                    if (!$("#toStationSerial").val()) {
                        $("#toStationSerialText").addClass("input-error");
                        noChoseCity($("#toStationSerialText"), '46px', '347px', '请选择到达地')
                    }
                }
            });

            // 检票口存值
            $("#check_button").on("click", function () {

                if ($("#check_in").val() && $("#train_num").val()) {
                    var ticketCheck = {};
                    ticketCheck.train_date = $("#check_in").val();
                    ticketCheck.train_number = $("#train_num").val();
                    ticketCheck.ticket_entrance_station = $(".model-select-text").attr('data-value');
                    ticketCheck.train_no = $("#topicId").val();
                    setStorage('ticketCheck', ticketCheck)
                    window.open(checkInUrl + '?isremoveStore=1')
                    removeStore('ticketCheck')
                    // removeStore('ticketCheckStationList')

                } else {
                    if (!$("#train_num").val()) {
                        $("#train_num").addClass("input-error");
                        noChoseCity($("#train_num"), '138px', '472px', '请输入车次')
                    }
                }
                return false;
            });

            // 起售时间
            $("#sell_button").on("click", function () {
                if ($("#start_sellText").val() && $("#start_sellText").val() !== '简拼/全拼/汉字') {
                    var sale_time = {};
                    sale_time.station_name = $("#start_sellText").val();
                    sale_time.station = $("#start_sell").val();
                    sale_time.dateTime = $("#sale_time").val();
                    setStorage('sale_time', sale_time)
                    getQsDataList(sale_time.station,sale_time.station_name,sale_time.dateTime);
                    // getScSnameListFn(sale_time.station,sale_time.station_name,sale_time.dateTime);
                    window.open(sellInUrl + '?station_name=' + sale_time.station_name + '&station_code=' + sale_time.station+ '&trainDate=' + sale_time.dateTime)
                    removeStore('sale_time');
                } else {
                    if (!$("#start_sell").val()) {
                        $("#start_sellText").addClass("input-error");
                        noChoseCity($("#start_sellText"), '138px', '472px', '请选择起售车站')
                    }
                }

            });
            // 天气查询
            $("#weather_button").on("click", function (e) {
                e.stopPropagation();
                if ($("#destination").val()) {
                    $.getJSON(weatherData, function (result) {
                        var pinCode = '';
                        $.each(result, function (index, value) {
                            if ($("#destinationText").val() === value.station) {
                                pinCode = value.code;
                            }
                            return pinCode;
                        })
                        window.open(weatherTitle + pinCode + '.shtml')
                    })
                } else {
                    if (!$("#destination").val() || $("#destination").val() === '简拼/全拼/汉字') {
                        $("#destinationText").addClass("input-error");
                        noChoseCity($("#destinationText"), '92px', '472px', '请选择目的地')
                    }
                }
            });
            // 搜索一个车站对应的各个站点
            function getCityStationFn() {
                $.ajax({
                    url: getCityStation,
                    timeout: 10000,
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        'train_no': $("#topicId").val(),
                        'depart_date': $("#check_in").val()
                    },
                    success: function (result) {
                        var arr = []
                        var i = 0
                        var keys = []
                        var html = ''
                        for (var key in result.data) {
                            keys.push(key)
                        }
                        keys = keys.sort()
                        for (var key in result.data) {
                            i++;
                            arr[i - 1] = result.data[keys[i - 1]]
                        }
                        setStorage('ticketCheckStationList', {
                            data: arr
                        })
                        ticketCheckStationList = {
                            data: arr
                        }
                        for (var k = 0; k < arr.length; k++) {
                            html += '<li data-option=' + arr[k][1] + '>' + arr[k][0] + '</li>'
                        }
                        $('.model-select-option').html(html)
                        $option.find('li:first-child').parent().siblings('div.model-select-text').text($option.find('li:first-child').text())
                            .attr('data-value', $option.find('li:first-child').attr('data-option'));
                        $option.find('li:first-child').parent().siblings($('input.selected-input')).attr('data-value', $option.find('li:first-child').attr('data-option'));
                        $('#station_loading').hide()
                    },
                    error: function (err) {

                    }
                })
            }
            function trainCity(){
                $.ajax({
                    url: getTrainCity,
                    timeout: 10000,
                    type: 'Post',
                    success: function (res) {
                        if(res&&res.data){
                            bsgCityList = getOrderStation(res.data.bsgCityList)
                            chongCList = getOrderStation(res.data.chongCList)
                            renderDom('#fromStationTextYY',bsgCityList.concat(chongCList))
                            // renderDom('#toStationTextYY',bsgCityList.concat(chongCList))
                            bsgCityList.forEach(function(v){
                                startStation.push(v.code)
                            })
                            chongCList.forEach(function(v){
                                endStation.push(v.code)
                            })
                            historyListYY = JSON.parse(getLocalStorage('historyListYY')) || []
                            if(historyListYY.length > 0){
                                historyFnYY(historyListYY.slice(0,5))
                                $('.search-history-yy').show()
                            } 
                            $('#changeYY').off('click').on('click',function(){
                                var mid = $("#fromStationYY").val();
                                $("#fromStationYY").val($("#toStationYY").val());
                                $("#toStationYY").val(mid)
                                var midText = $("#fromStationTextYY").val();
                                $("#fromStationTextYY").val($("#toStationTextYY").val());
                                $("#toStationTextYY").val(midText)
                                if(flag){
                                    renderDom('#fromStationTextYY',bsgCityList.concat(chongCList))
                                    renderDom('#toStationTextYY',startStation.indexOf($("#toStationTextYY").val())!= -1?bsgCityList:chongCList)
                                    flag = !flag
                                    tag = '2_1'
                                }else{
                                    renderDom('#fromStationTextYY',bsgCityList.concat(chongCList))
                                    renderDom('#toStationTextYY',startStation.indexOf($("#toStationTextYY").val())!= -1?bsgCityList:chongCList)
                                    flag = !flag
                                    tag = '1_2'
                                }
                            })
                        }
                    },
                    error: function (err) {

                    }
                })
            }
            function renderDom(ele,trainStation){
                var list = []
                if(trainStation.length != 0){
                    trainStation.forEach(function(v){
                        list.push('<li data-code="'+ v.code +'">'+ v.cityTrain+'</li>')
                    })
                    $(ele).parents('.form-item').find('.sel-list').html(list.join(''))
                }else{
                    list.push('<li>')
                    list.push('<p class="txt-second" style="font-size:14px">当前查询车站不在试点范围内</p>')
                    list.push('<p style="color: #999;font-size:12px;margin-top:5px">试点方向：北京、天津、上海、江苏、浙江、广东地区往返四川、重庆地区</p>')
                    list.push('</li>')
                    $(ele).parents('.form-item').find('.sel-list').html(list.join(''))
                }
                $(ele).off('focus').on('focus',function(){
                    $(ele).parents('.form-item').find('.sel').addClass('active').siblings('.sel').removeClass('active')
                })
                // $(ele).off('blur').on('blur',function(){
                //     $(ele).parents('.form-item').find('.sel-list02').hide()
                // })
                $(ele).parents('.form-item').find('.sel-list').off('click').on('click','li',function(){
                    if($(this).children().hasClass('txt-second')){
                        return  
                    }
                    $(ele).val($(this).html())
                    $(ele).prev().val($(this).attr('data-code'))
                    $(ele).parents('.form-item').find('.sel').removeClass('active')
                    $(ele).removeClass("input-error");
                    stationCode = $(this).attr('data-code')
                    noChoseCity2($(ele))
                    if(ele == '#fromStationTextYY'){
                        if(startStation.indexOf($(this).attr('data-code')) == -1){
                            renderDom('#toStationTextYY',bsgCityList)
                        }else{
                            renderDom('#toStationTextYY',chongCList)
                        }
                        $('#toStationTextYY').removeAttr('readonly')
                    }else if(ele == '#toStationTextYY'){
                        if(startStation.indexOf($(this).attr('data-code')) == -1){
                            renderDom('#fromStationTextYY',bsgCityList)
                        }else{
                            renderDom('#fromStationTextYY',chongCList)
                        }
                    }

                })
                $('#fromStationTextYY').off('input').on('input',function(){
                    var regex = /^[a-zA-Z]+$/
                    var txt = $(this).val().toLowerCase()
                    var filter = []
                    var list = bsgCityList.concat(chongCList)
                    if(txt.length != 0){
                        if(regex.test(txt)){
                            list.forEach(function(item){
                                if(item.cityTrainPin.toLowerCase().indexOf(txt) != -1){
                                    filter.push(item)
                                }
                            })
                        }else{
                            list.forEach(function(item){
                                if(item.cityTrain.indexOf(txt) != -1){
                                    filter.push(item)
                                }
                            })
                        }
                        renderDom('#fromStationTextYY',getOrderStation(filter))
                    }else{
                        renderDom('#fromStationTextYY',list)
                    }
                })
                $('#toStationTextYY').off('input').on('input',function(){
                    var regex = /^[a-zA-Z]+$/
                    var txt = $(this).val().toLowerCase()
                    var filter = []
                    var list = startStation.indexOf(stationCode) != -1 ? chongCList : bsgCityList
                    if(txt.length != 0){
                        if(regex.test(txt)){
                            list.forEach(function(item){
                                if(item.cityTrainPin.toLowerCase().indexOf(txt) != -1){
                                    filter.push(item)
                                }
                            })
                        }else{
                            list.forEach(function(item){
                                if(item.cityTrain.indexOf(txt) != -1){
                                    filter.push(item)
                                }
                            })
                        }
                        renderDom('#toStationTextYY',getOrderStation(filter))
                    }else{
                        renderDom('#toStationTextYY',list)
                    }
                })
                $('#search_one_yy').off('click').on('click',function(){
                    if ($("#fromStationYY").val() && $("#toStationYY").val() && $("#train_date_yy").val()) {
                        var leftTicketYY = {}
                        leftTicketYY.from_station_name = $("#fromStationTextYY").val();
                        leftTicketYY.from_station = $("#fromStationYY").val();
                        leftTicketYY.to_station = $("#toStationYY").val();
                        leftTicketYY.to_station_name = $("#toStationTextYY").val();
                        leftTicketYY.train_date = $("#train_date_yy").val();
                        historyListYY.unshift(leftTicketYY);
                        historyListYY = distinct(historyListYY);
                        setLocalStorage('historyListYY', historyListYY)
                        var threeHistoryListYY = historyListYY.slice(0, 5)
                        historyFnYY(threeHistoryListYY.slice(0,5));
                        window.location.href = href_baseUrl_2 + href_path_2 + 'view/prefilled_home.html?fromCode='+leftTicketYY.from_station+'&toCode='+leftTicketYY.to_station+'&date='+$('#train_date_yy').val()+'&fromText='+leftTicketYY.from_station_name+'&toText='+leftTicketYY.to_station_name+'&tag='+tag
                    }else{
                        if (!$("#fromStationYY").val()) {
                            $("#fromStationTextYY").addClass("input-error");
                            noChoseCity2($("#fromStationTextYY"),'fromStationTextYY')
                        }
                        if (!$("#toStationYY").val()) {
                            $("#toStationTextYY").addClass("input-error");
                            noChoseCity2($("#toStationTextYY"),'toStationTextYY')
                        }
                    }
                })
                $('.tips-btn').off('click').on('click',function(){
                    window.location.href = href_baseUrl_2 + href_path_2 + 'view/prefilled_order_center.html'
                })
            }
            function noChoseCity2(dom,ele) {
                if(ele == "fromStationTextYY"){
                    var text = '请选择出发地'
                }else{
                    var text = '请选择到达地'
                }
                if (dom.parents().find("[data-id=" + dom.attr('id') + "]").length != 0) {
                    dom.parents().find("[data-id=" + dom.attr('id') + "]").remove();
                }else if(dom.is('.input-error')){
                    dom.parent().parent().append('<div class="tooltip-error" tabIndex="0" data-id=' + dom.attr('id') + ' style="left:270px; top: 0px; display: block;"><i class="icon icon-plaint-fill" style="position: relative;color: #e12525"></i>' + text + '</div>')
                }
                try {
                    setTimeout(function () {
                        $('.tooltip-error').focus();
                    }, 500)
                } catch (error) {
            
                }
            }
            //按字母顺序给车站排序
            function getOrderStation(data){
                data.sort(function(a, b) {
                var nameA = a.cityTrainPin.toUpperCase(); // 转换为大写以忽略大小写差异
                var nameB = b.cityTrainPin.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0; // 字母相同时返回0
                });
                return data
            }
        // });

    }


    return {
        initialize: function () {
            // ticket
            ticket()
        }
    }
});
/*
 * 首页 订餐
 */
define('index/index-dinner',['jquery', 'core/lib/bootstrap2'], function ($, bootstrap) {
    // dinner
    function dinner() {
        var ind = 1;
        $("#search_four").on("click", function () {
            if ($("#dinner_date").val() && $("#dinner_sub_mun").val()) {
                // 当前日期
                var dinnerFromDate = $('#dinner_date').val();
                // 车次
                var dinnerTrainCode = $('#dinner_sub_mun').val();
                window.open(orderDinner + '?date=' + dinnerFromDate + '&code=' + dinnerTrainCode)
            } else {
                if (!$("#dinner_sub_mun").val() || $("#dinner_sub_mun").val() === '请输入车次') {
                    $("#dinner_sub_mun").addClass("input-error");
                    noChoseCity($("#dinner_sub_mun"), '158px', '472px', '请填写车次')
                }
                if (!$("#dinner_date").val()) {
                    $("#dinner_date").addClass("input-error");
                    noChoseCity($("#dinner_date"), '112px', '375px', '请输入出发日期')
                }
            }
        })
        $('#dinner_sub_mun').keydown(function (e) {
            $option_typeahead = $('.dinner-yuding .typeahead');
            var len = $('.dinner-yuding .typeahead').children().length;
            // 键盘事件
            var e = e || window.target;
            if ($option_typeahead.css("display") == 'block') {
                switch (e.keyCode) {
                    case 40:
                        ind++;
                        if (ind > len) {
                            ind = 1
                        }
                        var liTop = Math.floor($option_typeahead.find('li:nth-child(' + ind + ')').offset().top);
                        var trainList = $option_typeahead.outerHeight();
                        var liHeight = Math.floor($option_typeahead.find('li:first-child').outerHeight());
                        if (liTop > trainList) {
                            $option_typeahead.scrollTop(liHeight * (ind - 4));
                        }
                        if (liTop < 0) {
                            $option_typeahead.scrollTop(liHeight * (ind - 1));
                        }
                        break;
                    case 38:
                        ind--;
                        if (ind <= 0) {
                            ind = len;
                        }
                        var liBottom = Math.floor($option_typeahead.find('li:nth-child(' + ind + ')').offset().bottom);
                        var trainList = $option_typeahead.outerHeight();
                        var liHeight = Math.floor($option_typeahead.find('li:first-child').outerHeight());
                        if (liBottom > trainList) {
                            $option_typeahead.scrollTop(liHeight * (ind - 1));
                        } else {
                            $option_typeahead.scrollTop(liHeight * (ind - 4));
                        }
                        break;
                }
            }

        });
        $('#dinner_sub_mun').typeahead({
            items: 10000,
            source: function (query, process) {
                ind = 1;
                $option_typeahead.find('li:first-child').addClass('active').siblings('li').removeClass('active');
                if ($("#dinner_sub_mun").val()) {
                    $("#dinner_sub_mun").removeClass('input-error')
                    $("[data-id=dinner_sub_mun]").hide()
                };
                var result = null;
                var data = $('#dinner_date').val().replace(/-/g, "")
                var reg = /^[GD][0-9]{0,6}$/;
                var isTypeahead = query.toUpperCase().match(reg);
                if (isTypeahead) {
                    $.ajax({
                        url: getTrainList,
                        type: 'GET',
                        dataType: 'jsonp',
                        data: {
                            keyword: query,
                            date: data
                        },
                        xhrFields: { withCredentials : true },
                        crossDomain: true,
                        success: function (result) {
                            var resultList = []

                            for (var i = 0; i < result.data.length; i++) {
                                var aItem = {
                                    id: result.data[i].train_no,
                                    name: result.data[i].station_train_code + '(' + result.data[i].from_station + '-' + result.data[i].to_station + ')',
                                    nameCode: result.data[i].station_train_code
                                };
                                aItem = JSON.stringify(aItem);
                                resultList.push(aItem)
                            }
                            process(resultList);
                        },
                        error: function (err) {}
                    })
                }

            },

            matcher: function (obj) {
                var item = JSON.parse(obj);
                return ~item.name.toLowerCase().indexOf(this.query.toLowerCase())
            },

            sorter: function (items) {
                var beginswith = [],
                    caseSensitive = [],
                    caseInsensitive = [],
                    item;
                while (aItem = items.shift()) {
                    var item = JSON.parse(aItem);
                    if (!item.name.toLowerCase().indexOf(this.query.toLowerCase()))
                        beginswith.push(JSON.stringify(item));
                    else if (~item.name.indexOf(this.query)) caseSensitive.push(JSON.stringify(item));
                    else caseInsensitive.push(JSON.stringify(item));
                }

                return beginswith.concat(caseSensitive, caseInsensitive)

            },

            highlighter: function (obj) {
                var item = JSON.parse(obj);
                var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
                return item.name.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                    return '<strong>' + match + '</strong>'
                });
            },
            updater: function (obj) {
                var item = JSON.parse(obj);
                $('#dinner_sub_code').attr('value', item.id);
                ind = 1;
                $option_typeahead.find('li:first-child').addClass('active').siblings('li').removeClass('active');
                return item.nameCode;
            }
        })
    }

    return {
        initialize: function () {
            // dinner
            dinner()
        }
    }
});
/*
 * 首页 正晚点查询
 */
define('index/late_spot',['jquery'], function ($) {
    function lateSpot() {
        // 常用查询
        // 车次模糊查询
        var index = 0;
        var depotValue = getLocalStorage('depotValue');
        $('#numberValue').keyup(function (e) {
            if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) {
                $("#train_hide").children().remove();
                var $childrens;
                var finalDepot = eval(depotValue);
                var trainListArr = [];
                $.each(finalDepot, function (index, item) {
                    var $inputVal = $('#numberValue').val().toLocaleUpperCase();
                    $childrens = $('#train_hide').children();
                    if (item.match($inputVal)) {
                        $("#train_hide li").each(function () {
                            if ($(this).hasClass('notMatch')) {
                                $(this).remove();
                            }
                        });
                        var $li = $('<li>' + item + '</li>');
                        $('#train_hide').append($li);
                        trainListArr.push($li);
                    } else if (index + 1 == finalDepot.length) {
                        if (trainListArr.length === 0) {
                            $('#train_hide').append('<li class="notMatch">暂无匹配项</li>');
                        } else {
                            if (item.match($inputVal)) {
                                $('#train_hide').append('<li class="notMatch">暂无匹配项</li>');
                            } else {
                                $("#train_hide li").each(function () {
                                    if ($(this).hasClass('notMatch')) {
                                        $(this).remove();
                                    }
                                });
                            }
                        }
                        return;
                    } else {
                        return;
                        123
                    }
                });
                if ($('#numberValue').val() == '') {
                    $("#train_hide").children().remove();
                    var liHeight = 32;
                    $.each(finalDepot, function (index, item) {
                        var $li = $('<li>' + item + '</li>');
                        $li.css("top", liHeight * index);
                        $('#train_hide').append($li);
                    })
                }
                var $lis = $('#train_hide').find('li');
                // 点击每个Li 元素
                $lis.on('click', function () {
                    var $liVal = $(this).text();
                    $('#numberValue').val($liVal);
                    $('#train_hide ').hide();
                });
            }
            // 键盘事件
            var e = e || window.target;
            switch (e.keyCode) {
                // 键盘向下
                case 40:
                    index++;
                    var len = $('#train_hide').children().length;
                    if (index > len) {
                        index = $('#train_hide').children().length;
                    }
                    $('#train_hide').find('li:nth-child(' + index + ')').addClass('currentColor').siblings().removeClass('currentColor');
                    var liTop = Math.floor($('#train_hide').find('li:nth-child(' + index + ')').addClass('currentColor').position().top);
                    var LiValue = $('#train_hide').find('li:nth-child(' + index + ')').addClass('currentColor').text();
                    $('#numberValue').val(LiValue);
                    var trainList = $('#train_hide').outerHeight();
                    var liHeight = Math.floor($('#train_hide').find('li:first-child').outerHeight());
                    if (liTop < 0) {
                        $('#train_hide').scrollTop(liHeight * (index - 1));
                    }
                    if (liTop >= trainList) {
                        $('#train_hide').scrollTop(liHeight * (index - 4));
                    }

                    break;
                    // 键盘向上
                case 38:
                    index--;
                    if (index <= 0) {
                        index = 1;
                    }
                    $('#train_hide').find('li:nth-child(' + index + ')').addClass('currentColor').siblings().removeClass('currentColor');
                    var LiValue = $('#train_hide').find('li:nth-child(' + index + ')').addClass('currentColor').text();
                    $('#numberValue').val(LiValue);
                    var liTop = Math.floor($('#train_hide').find('li:nth-child(' + index + ')').addClass('currentColor').position().top);
                    var trainList = $('#train_hide').outerHeight();
                    var liHeight = Math.floor($('#train_hide').find('li:first-child').outerHeight());
                    if (liTop < 0) {
                        $('#train_hide').scrollTop(liHeight * (index - 1));
                    } else if (liTop < trainList) {
                        return false;
                    } else {
                        $('#train_hide').scrollTop(liHeight * (index - 4))
                    }
                    break;
                    // 键盘回车
                case 13:
                    var LiValue = $('#train_hide').find('li:nth-child(' + index + ')').addClass('currentColor').text();
                    $('#numberValue').val(LiValue);
                    $('#train_hide').hide();
                    break;
            }
            var $lis = $('#train_hide').find('li');
            $lis.hover(function () {
                $(this).addClass('currentColor').siblings().removeClass('currentColor')
            });
        });


        // 判断是否选择车站
        $('#numberValue').focus(function () {
            if ($('#stationValueText').val() && $("#stationValueText").val() !== '简拼/全拼/汉字') {
                $('#train_hide ').show();
                $("#numberValue").removeClass('input-error')
                $("[data-id=numberValue]").hide()
            } else {
                $("#numberValue").addClass("input-error");
                noChoseCity($("#numberValue"), '184px', '472px', '请选择车次');
            }
        });

        // 点击让列表消失
        $(document).bind('click', function (e) {
            var e = e || window.event; //浏览器兼容性
            var elem = e.target || e.srcElement;
            while (elem) { //循环判断至跟节点，防止点击的是div子元素
                if (elem.id && (elem.id == 'train_hide' || elem.id == "numberValue")) {
                    return;
                }
                elem = elem.parentNode;
            }
            $('#train_hide').css('display', 'none'); //点击的不是div或其子元素
        });

        // 正晚点查询提交
        $('#bie_button').on('click', function () {
            if ($('#stationValueText').val == '' || $('#numberValue').val() == '') {
                if (!$("#stationValue").val()) {
                    $("#stationValueText").addClass("input-error");
                    noChoseCity($("#stationValueText"), '138px', '472px', '请选择车站')
                }
                if (!$("#numberValue").val()) {
                    $("#numberValue").addClass("input-error");
                    noChoseCity($("#numberValue"), '184px', '472px', '请选择车次');
                }
            } else {
                var cz = $('#stationValueText').val();
                var czz = $('#stationValue').val();
                var cc = $('#numberValue').val();
                var choice_station = $('li[name="zwd_type"][class="active"]').attr('zwd');
                var splicingCz = encodeURI(cz);
                var splicingCzz = encodeURI(czz);
                var splicingCc = encodeURI(cc);
                window.open(zwdUrl + '?cc=' + splicingCc + '&cxlx=' + choice_station + '&station_name=' + splicingCz + '&station_code=' + splicingCzz + ' ');
            }
        });
        // 初始化日期
        $('#refund_end').val(formatDate(new Date));
        var refund_end_new = new Date().setDate(new Date().getDate() - 29);
        $('#refund_start').val(formatDate(new Date(refund_end_new)));
        // 选择退改签查询类型
        $('.radio-list-ding li').on('click', function () {
            var choice_type = $('.radio-list-ding li.active').text();
            if (choice_type.indexOf('乘车日期') != -1) {
                $('#refund_start').val(formatDate(new Date));
                var refund_end_new = new Date().setDate(new Date().getDate() + 29);
                $('#refund_end').val(formatDate(new Date(refund_end_new)));
                $('#refund_start').click(function () {
                    isLiandong = true;
                    $('#refund_start').jcalendar({
                        isSingle: false,
                        startDate: formatDate(new Date),
                        endDate: GetDateStr(29),
                        onpicked: function () {
                            $('#refund_start').blur();
                            if (!$('#refund_start').hasClass('inp-txt_select')) {
                                $('#refund_start').addClass('inp-txt_select');
                            }
                            if ($('#refund_start').hasClass('error')) {
                                $('#refund_start').removeClass('error');
                            }
                        }
                    });
                });
                $('#refund_end').click(function () {
                    isLiandong = true;
                    $('#refund_end').jcalendar({
                        isSingle: false,
                        startDate: formatDate(new Date(refund_end_new)),
                        endDate: GetDateStr(59),
                        onpicked: function () {
                            $('#refund_end').blur();
                            if (!$('#refund_end').hasClass('inp-txt_select')) {
                                $('#refund_end').addClass('inp-txt_select');
                            }
                            if ($('#refund_end').hasClass('error')) {
                                $('#refund_end').removeClass('error');
                            }
                        }
                    });
                });
            } else {
                $('#refund_end').val(formatDate(new Date));
                var refund_end_new = new Date().setDate(new Date().getDate() - 30);
                $('#refund_start').val(formatDate(new Date(refund_end_new)));
                $('#refund_start').click(function () {
                    isLiandong = true;
                    $('#refund_start').jcalendar({
                        isSingle: false,
                        onpicked: function () {
                            $('#refund_start').blur();
                            if (!$('#refund_start').hasClass('inp-txt_select')) {
                                $('#refund_start').addClass('inp-txt_select');
                            }
                            if ($('#refund_start').hasClass('error')) {
                                $('#refund_start').removeClass('error');
                            }
                        }
                    });
                });
                $('#refund_end').click(function () {
                    isLiandong = true;
                    $('#refund_end').jcalendar({
                        isSingle: false,
                        onpicked: function () {
                            $('#refund_end').blur();
                            if (!$('#refund_end').hasClass('inp-txt_select')) {
                                $('#refund_end').addClass('inp-txt_select');
                            }
                            if ($('#refund_end').hasClass('error')) {
                                $('#refund_end').removeClass('error');
                            }
                        }
                    });
                });
            }
        })
        // 退改签
        $('#refund_button').on('click', function (e) {
            e.stopPropagation();
            // 判断日期是否为空
            if ($('#refund_end').val() && $('#refund_start').val()) {
                var choice_type = $('.radio-list-ding li.active').text();
                var choice_type_code = '';
                $('#dingqiaoID').hasClass('active') ? choice_type_code = '1' : choice_type_code = '2';
                var refund_data_start = encodeURI($('#refund_start').val());
                var refund_data_end = encodeURI($('#refund_end').val());
                var refund_data_value = encodeURI($('#refund_code').val());
                var refund_query_type = encodeURI(choice_type_code);
                window.open(lateSpotHtml + '?type=2&query_type=' + refund_query_type + '&begin_date=' + refund_data_start + '&end_date=' + refund_data_end + '&sequence_no=' + refund_data_value + ' ');
            }
        })
    }
    return {
        initialize: function () {
            lateSpot()
        }
    }
});

/*
 * app
 */
define('index/app',[
      'jquery'
    , 'g/g-header'
    , 'g/g-footer'
    , 'g/g-href'
    , 'core/common/date'
    , 'core/common/data.jcalendar'
    , 'core/common/mUtils'
    , 'core/common/url_config'
    , 'index/index-init'
    , 'index/index-temp'
    , 'index/index-city'
    , 'index/index-ticket' 
    , 'index/index-dinner' 
    , 'index/late_spot'
], function ($, gHeader, gFooter, gHref,date,jcalendar, mUtils, urlConfig, indexInit, indexTemp, indexCity, indexTicket, indexDinner,lateSpot) {
    function initialize() {

        // 导航高亮
		$('#J-index').addClass('active')

        //共用-头部
        gHeader.initialize();

        //共用-底部
        gFooter.initialize();

        // 公用-href
        gHref.initialize();

        //初始化
        indexInit.initialize();

        //模板渲染
        indexTemp.initialize();

        //城市控件
        indexCity.initialize();

        //banner车票
        indexTicket.initialize();
        
        //订餐
        indexDinner.initialize();

        //正晚点查询
        lateSpot.initialize();

    }

    return {
        initialize: initialize
    }
});

/*
 * main
 */
// 配置
require.config({
    baseUrl: './script/',
    shim: {
        'jquery': {
            exports: '$'
        },
        'handlebars': {
			deps: ['jquery'],
            exports: 'handlebars'
        },
        'cityName': {
			deps: ['jquery'],
            exports: 'cityName'
		}
    },
    paths: {
        'jquery': 'core/lib/jquery.min',
        'handlebars':'core/lib/handlebars',
        'cityName': 'core/common/city_name_new'
    },
    waitSeconds: 0
});
// 初始化
require(['index/app'], function (app) {
    //页面加载loading
    $('.page-loading').hide();
    window.loadEnd = new Date().getTime();
    screen;
    new app.initialize();
});
define("index/main", function(){});

