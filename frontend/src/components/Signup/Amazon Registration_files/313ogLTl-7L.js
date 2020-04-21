P.register("cvfVersion",function(){return{version:"0.1.0.0-2020-04-08"}});
P.when("A","cvfFormDataGenerator","ready").register("cvf-account-switcher",function(f,l){function n(c,d){c.preventDefault();var e=l.retrieveFormData(c.target),h=e.inputData.serializeArray();h.push(b(c.target));f.ajax(window.location.protocol+"//"+window.location.host+e.requestPath,{method:"POST",params:h,success:d,error:a})}function b(a){a=d(a);var b=a.attr("name");b||(b=a.closest(".cvf-account-switcher-sign-out-link").attr("data-name"));var c=a.attr("value");c||(c=a.closest(".cvf-account-switcher-sign-out-link").attr("data-value"));
return{name:b,value:c}}function a(a,b,c){f.trigger(h.error,c)}function c(a){var b=/([^@\s]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9._-]+)/ig.exec(a);if(null!==b){a=b[1];a=d.trim(a);var c=a.length;if(1!==c){for(var e=a.charAt(0),f=0;f<c-2;f++)e+="*";a=e+=a.charAt(c-1)}a+="@";e=b[2];e=d.trim(e);c=e.length;e=e.charAt(0);for(f=0;f<c-1;f++)e+="*";return a+e+b[3]}b=d.trim(a);a=b.length;if(!(4>=a)){c="";for(e=0;e<a-4;e++)c+="*";b=c+b.substr(a-4,a-1)}return b}function e(){0===d(".cvf-account-switcher-check-mark:visible").length&&
(d(".cvf-account-switcher-check-mark-area").remove(),d(".cvf-account-switcher-profile-details").toggleClass("cvf-account-switcher-profile-details cvf-account-switcher-profile-details-after-account-removed"))}var d=f.$,h={success:"cvf:account_switcher:success",error:"cvf:account_switcher:error"};(function(){var a=d("#ap-account-switcher-container")[0],b=window.MutationObserver||window.WebKitMutationObserver;if(void 0!==a&&void 0!==b){var c=new b(function(a){for(var b=0;b<a.length;b++)if(null!==a[b].addedNodes){e();
c.disconnect();break}});c.observe(a,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}})();(function(){d(".cvf-account-switcher-sign-out-link").live("click",function(a){n(a,function(b){if(b.redirectUrl)window.location=b.redirectUrl,f.trigger("cvf:account_switcher","redirectOnSignOut");else if(b.succeeded){var g="."+d(a.target).attr("class").match(/cvf-account-switcher-account-group-\w+/g)[0];d(g+"-hide").hide();d(g+"-name").text(d("#cvf-account-switcher-sign-out-replace-text").text());d(g+
"-claim").text(c(d(g+"-claim").text()));d(g+"-image").replaceWith(d("<div />").append(d("#cvf-account-switcher-sign-out-replace-image").clone().removeClass("cvf-hidden")).html());d(g+"-button").removeClass("cvf-widget-btn-val cvf-widget-btn-verify-account-switcher");b=b.switchedAccountId;void 0!==b&&d(".cvf-account-switcher-account-group-"+b+"-check-mark").show();e()}else f.trigger(h.error,b)})})})()});
P.when("A","cvfVersion","cvfFormDataGenerator","ready").register("cvf",function(f,l,n){function b(a){function b(a){"string"===typeof t.options.widgetMetricsScope&&"function"===typeof window.uet&&window.uex("ld",t.options.widgetMetricsScope,{wb:1});t.options.spinnerTarget&&t.options.spinnerTarget.hide();a.hasOwnProperty("error")?f.trigger(B.error,a.error):a.redirectUrl?window.location=a.redirectUrl:a.redirect?(f.trigger(B.success,a.token,a.status,a.redirect),t.options.autoDestroy?t.destroy():(c(".cvf-widget-alert").hide(),
a.status?c(".cvf-widget-status-success").show():c(".cvf-widget-status-error").show(),r()),f.trigger("cvf:verification:complete",a.status),y.find(".cvf-widget-btn").unbind("click",m),y.find(".cvf-widget-btn-val").unbind("click",m),f.off(B.success),f.off(B.error)):(y.html(a.replace(/<form/g,"<div").replace(/<\/form/g,"</div")),u())}function m(a,d){a.preventDefault();c(".cvf-widget-alert").hide();t.options.spinnerTarget&&t.options.spinnerTarget.show();var e=n.retrieveFormData(a.target),g=e.inputData.serializeArray();
d&&g.push(n.getNameValue(a.target));f.ajax(p+e.requestPath,{method:"POST",params:g,success:b,error:v})}function g(a){13===a.keyCode&&m(a)}function u(){y.find(".cvf-widget-btn").click(function(a){m(a,!1)});y.find(".cvf-widget-btn-val").click(function(a){m(a,!0)});y.find('input[name="code"]').focus().keypress(g)}function D(a){return function(b,c,d){"timeout"!==c||3<=w?f.trigger(B.error,d):f.delay(a,10*w++)}}function v(a,b,c){t.options.spinnerTarget&&t.options.spinnerTarget.hide();f.trigger(B.error,
c)}function r(){c.each(y.find("input"),function(a,b){var d=c(b);d.attr("disabled","disabled");d.hasClass("a-input-text")?d.addClass("a-form-disabled"):d.hasClass("a-button-input")?d.closest(".a-button").addClass("a-button-disabled"):d.closest(".a-input-text-wrapper").length&&d.closest(".a-input-text-wrapper").addClass("a-form-disabled")});c.each(y.find("a"),function(a,b){var d=c(b);d.hasClass("cvf-widget-link-disable-target")&&d.addClass("cvf-link-disabled")})}var t=this;d++;var B={success:"cvf:"+
d+":success",error:"cvf:"+d+":error"};t.options={};c.extend(t.options,e,a);(function(a){if(1!==c(a.target).length)throw Error("The CVF widget requires a unique element.");if(!c.isFunction(a.onSuccess))throw Error("The CVF widget requires a success callback function.");if(!c.isFunction(a.onError))throw Error("The CVF widget requires an error callback function.");})(t.options);var p=t.options.server,y=c(t.options.target);f.on(B.success,t.options.onSuccess);f.on(B.error,t.options.onError);t.start=function(){if(0===
c.trim(t.options.requestToken).length)throw Error("The CVF widget requires a request token.");var a=p+"/ap/cvf/request.embed",d=t.options.requestToken,e=t.options.requestArbToken,g=t.options.associationHandle,h=t.options.language,m=0===c.trim(e).length,n=0!==c.trim(g).length,r=0!==c.trim(h).length,u={};m?u.requestToken=d:u.arb=e;u.CVFVersion=l.version;u.AUIVersion=P.AUI_BUILD_DATE;r&&(u.language=h);n&&(u["openid.assoc_handle"]=g);"string"===typeof t.options.widgetMetricsScope&&"function"===typeof window.uet&&
window.uet("bb",t.options.widgetMetricsScope,{wb:1});f.ajax(a,{method:"GET",params:u,success:b,error:D(t.start)})};t.destroy=function(){y.html("")};u();var w=0;t.options.autoStart&&t.start()}function a(a){return new b(a)}var c=f.$,e={server:"",target:void 0,requestToken:void 0,requestArbToken:void 0,onSuccess:void 0,onError:void 0,spinnerTarget:void 0,autoStart:!0,autoDestroy:!0,widgetMetricsScope:void 0,associationHandle:void 0,language:void 0},d=0;f.on("cvf:verification:request",function(b){var d=
c("#"+b),e=d.data("token"),g=d.data("spinnerId"),g=c("#"+g);a({target:d,spinnerTarget:g,requestToken:e,onSuccess:function(a,c,d){f.trigger("cvf:verification:complete:"+b,a,c,d)},onError:function(a){f.trigger("cvf:verification:error:"+b,a)},autoStart:!0,autoDestroy:!1})});return{create:a}});
P.when("A","cvf","ready").execute(function(f,l){var n=f.$;n(document).ready(function(){function b(a,b,c){window.location=c;console.log("Client Side: "+a)}function a(a){console.log(a)}var c=n(".cvf-widget-spinner"),e=n("#cvf-widget-content");if(1===e.length){var d=n('[name="requestToken"]').first().attr("value");l.create({target:e,spinnerTarget:c,requestToken:d,onSuccess:b,onError:a,autoStart:!1})}})});
P.when("A").execute(function(f){f.declarative("auth-popup","click",function(f){var n=f.data;f=f.$target.closest("a")[0];(n=window.open(f.href,f.target,n.windowOptions))&&n.focus()})});P.when("A","cvfFormDataGenerator","ready").execute(function(f,l){});
P.when("A","cvfFormDataGenerator","ready").execute(function(f,l){var n=f.$;n(".cvf-widget-btn-val").click(function(b){var a=n(b.target).closest(".cvf-widget-form");b=l.getNameValue(n(b.target));a.append('<input type="hidden" name="'+b.name+'" value="'+b.value+'">').submit()})});
P.when("A","ready").register("cvfFormDataGenerator",function(f){var l=f.$;return{retrieveFormData:function(f){f=l(f).closest(".cvf-widget-form");return{requestPath:f.data("use-only-form-action")?f.attr("action"):"/ap/cvf/"+f.attr("action")+".embed",inputData:f.find(".cvf-widget-input,.cvf-widget-hidden-fields,.cvf-widget-input :input"),form:f}},getNameValue:function(f){f=l(f);var b=f.attr("name");b||(b=f.closest(".cvf-widget-btn-val").attr("data-name"));var a=f.attr("value");a||(a=f.closest(".cvf-widget-btn-val").attr("data-value"));
return{name:b,value:a}}}});P.when("A","ready").register("codeResendTimer",function(f){function l(l,b,a){var c=(new Date).getTime(),e=setInterval(function(){var d=(new Date).getTime()-c,d=l-d;if(0>=d)clearInterval(e),f.$("#timer").html(a);else{var d=Math.floor(d/1E3),h=b.split(" +timeleft+ "),d=h[0].split('"').join("")+d+h[1].split('"').join("");f.$("#timer").html(d)}},100)}return{createTimer:function(f,b,a){return new l(f,b,a)}}});