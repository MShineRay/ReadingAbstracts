define("appmsg/like_and_share.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/jsapi/core.js","pages/utils.js","appmsg/retry_ajax.js","appmsg/set_font_size.js","common/comm_report.js","appmsg/related_article.js","common/utils.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","appmsg/appmsg_report.js"],function(e,i,o,n){
"use strict";
var t=e("biz_common/dom/event.js"),s=e("biz_common/dom/class.js"),r=e("biz_wap/jsapi/core.js"),m=e("pages/utils.js"),a=m.formatReadNum,l=e("appmsg/retry_ajax.js"),d=e("appmsg/set_font_size.js"),p=e("common/comm_report.js"),w=e("appmsg/related_article.js"),c=e("common/utils.js"),_=e("biz_wap/utils/device.js"),u=e("biz_wap/utils/mmversion.js"),k=e("appmsg/appmsg_report.js"),g=function(e){
return document.getElementById(e);
},h=function(e){
e.style.display="block";
},j={
likeNum:0,
isLike:0,
likeDom:g("like_old"),
likeNumDom:g("likeNum_old"),
shareDom:g("js_bottom_share"),
collectDom:g("js_bottom_collect"),
oprRightDom:g("js_bottom_opr_right"),
shareBottomBtn:g("js_bottom_share_btn"),
likeBottomBtn:g("js_bottom_zan_btn"),
similarZanCard:g("js_similar_video_card"),
overflowFontScale:1
},f=function(){
var e=0;
try{
e=1*window.atob(window.biz);
}catch(i){}
var o={
BizUin:e,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0,
EventType:4
};
p.report(19048,o);
},v=function(){
setTimeout(function(){
s.removeClass(j.oprRightDom,"sns_opr_overflow");
var e=j.oprRightDom.querySelectorAll(".js_media_tool_meta"),i=g("js_toobar3").getBoundingClientRect().width,o=0;
if(e&&e.length){
g("js_like_wording").textContent="在看",g("js_parise_wording").textContent="赞";
for(var n=0;n<e.length;n++)o+=e[n].getBoundingClientRect().width;
if(console.log("benchmarkWidth",i,o),e.length>1&&(i-o)/(e.length-1)<20){
g("js_like_wording").textContent="",g("js_parise_wording").textContent="";
for(var t=0,n=0;n<e.length;n++)t+=e[n].getBoundingClientRect().width;
(i-t)/(e.length-1)<20&&s.addClass(j.oprRightDom,"sns_opr_overflow");
}
}
},50);
},D=function(){
s.addClass(j.likeDom,"praised"),j.likeNum++;
var e=j.likeNumDom.innerHTML;
("10万+"!==e||"100k+"!==e)&&(j.likeNumDom.innerHTML=a(j.likeNum)),j.likeNumDom.style.display="",
w&&w.render&&w.render("praise");
},b=function(){
s.removeClass(j.likeDom,"praised"),j.likeNum--;
var e=j.likeNumDom.innerHTML;
j.likeNum>=0&&"10万+"!==e&&"100k+"!==e&&(j.likeNumDom.innerHTML=a(j.likeNum)),0===j.likeNum&&(j.likeNumDom.style.display="none");
},y=[],B=function(e){
"function"==typeof e&&y.push(e);
},N=function(e){
j.isLike=j.isLike?0:1,j.isLike?D():b(),l({
url:"/mp/appmsg_like?__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&like="+j.isLike+"&f=json&appmsgid="+window.appmsgid+"&itemidx="+window.itemidx,
data:{
scene:window.source,
appmsg_like_type:1,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
is_temp_url:window.is_temp_url||0,
style:e||0,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST"
}),y.forEach(function(e){
e(j.isLike,j.likeNum);
});
},z=function(e){
return j.likeBottomBtn&&j.likeBottomBtn.disabled===!0?void 0:window.is_temp_url?void("5"!==window.item_show_type||!c.isNativePage()||_.os.pc?window.weui.alert("预览状态下无法操作"):n("预览状态下无法操作")):void N(e);
};
t.on(j.likeDom,"click",function(){
return z();
}),t.on(j.shareDom,"click",function(){
j.shareBottomBtn&&j.shareBottomBtn.disabled===!0||(f(),r.invoke("handleMPPageAction",{
action:"share"
}));
}),t.on(j.collectDom,"click",function(){
r.invoke("handleMPPageAction",{
action:"doFavorite"
}),w&&w.render&&w.render("favorite"),k.shareReport({
link:window.msg_link||window.cgiData&&window.cgiData.msg_link,
action_type:24,
share_source:2
});
});
var I=function(){
v(),d.onFontScaleChange(v),window.addEventListener("resize",v);
},L=function(e){
var i=e.shareShow,o=e.likeShow,n=e.likeNum,t=e.isLike,r=e.shareGray,m=e.likeGray;
j.likeNum=n,j.isLike=t,i&&j.shareDom&&(_.os.pc?_.os.windows&&u.getInner()>="63010000"&&h(j.shareDom):h(j.shareDom)),
r&&j.shareBottomBtn&&(j.shareBottomBtn.disabled=!0),o&&j.likeDom&&h(j.likeDom),m&&j.likeBottomBtn&&(j.likeBottomBtn.disabled=!0),
o&&j.likeNumDom&&0!==n&&(j.likeNumDom.innerHTML=a(j.likeNum),j.likeNumDom.style.display="",
t&&s.addClass(j.likeDom,"praised")),(u.isWechat&&(_.os.iphone&&u.getInner()>"17001000"||_.os.android&&u.getInner()>"27001300")||_.os.windows&&u.getInner()>="63010000")&&h(j.collectDom),
I(),y.forEach(function(e){
e(j.isLike,j.likeNum);
});
};
return{
initLikeShareDom:L,
triggerLike:z,
onLikeChange:B
};
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/base64.js","biz_wap/utils/jsmonitor_report.js","appmsg/log.js","complain/tips.js","appmsg/retry_ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","common/utils.js","appmsg/loading.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","pages/utils.js","appmsg/related_article.js"],function(require,exports,module,alert){
"use strict";
function qs(e){
return document.getElementById(e);
}
function showAppToast(e,i){
JSAPI.invoke("handleMPPageAction",{
action:"showToast",
wording:e||"",
status:i||"success"
});
}
function initLikeEvent(opt){
function show(e){
e.style.display="";
}
function hide(e){
e.style.display="none";
}
function vShow(e){
e.style.visibility="visible";
}
function vHide(e){
e.style.visibility="hidden";
}
function clear(e){
e.value="";
}
function showLoading(){
commonUtils.isNativePage()?showAppToast("发送中","loading"):Loading.show("发送中");
}
function hideLoading(){
commonUtils.isNativePage()?showAppToast("","dismissloading"):Loading.hide();
}
function showToast(e){
commonUtils.isNativePage()?showAppToast(e):(el_toastMsg.innerHTML=e,show(el_likeToast),
setTimeout(function(){
hide(el_likeToast);
},1e3));
}
function alert2(e){
"5"!==window.item_show_type||!commonUtils.isNativePage()||Device.os.pc?window.weui.alert(e):alert(e);
}
function failAlert(e){
return e&&e.length>maxLikeCommentWord?void alert2("想法不可以超过%s字".replace("%s",maxLikeCommentWord)):void alert2("网络异常，请稍后重试");
}
function isAppCommentAvailable(){
return mmversion.isWechat?Device.os.ipad?!1:mmversion.isInMiniProgram?!1:mmversion.isIOS&&mmversion.gtVersion("7.0.8")?!0:mmversion.isAndroid&&mmversion.gtVersion("7.0.8")?!0:commonUtils.isNativePage()&&(mmversion.isIOS||mmversion.isAndroid)?!0:!1:!1;
}
var scrollTop,el_like=opt.likeAreaDom,el_likeNum=opt.likeNumDom,showType=opt.showType,prompted=opt.prompted,haokanLock=!1,startY,jumpWowLock=!1,el_likeToast=qs("js_like_toast"),el_likeBtn=qs("js_like_btn"),el_toastMsg=qs("js_toast_msg"),el_likeEducate=qs("js_like_educate"),el_friend_like=qs("js_friend_like_area"),el_go_wow=qs("js_go_wow"),el_likeComment=qs("js_like_comment"),el_bcommentPanel2=qs("js_comment_panel"),el_likeCommentShare=qs("js_like_comment_share"),el_likeCommentText=qs("js_comment_text"),el_commentCancel=qs("js_comment_cancel"),el_commentConfirm=qs("js_comment_confirm"),el_commentErrorMsg=qs("js_like_comment_msg"),el_commentCurrentCount=qs("js_like_current_cnt"),el_commentArea=qs("js_comment_area"),el_panelLikeTitle=qs("js_panel_like_title"),el_wowClosePanel=qs("wow_close_inform"),el_wowCloseAck=qs("wow_close_ack"),el_alertPanel=qs("js_alert_panel"),el_alertContent=qs("js_alert_content"),el_alertConfirm=qs("js_alert_confirm");
if(el_like&&el_likeNum){
window.appmsg_like_type&&2===window.appmsg_like_type?jsmonitorReport.setSum(114217,0,1):window.appmsg_like_type&&1===window.appmsg_like_type&&jsmonitorReport.setSum(114217,1,1);
var like_report=function(){
var e=el_like.getAttribute("like"),i=el_likeNum.innerHTML,t=parseInt(e)?parseInt(e):0,o=t?0:1,n=parseInt(i)?parseInt(i):0,s=opt.appmsgid||opt.mid,l=opt.itemidx||opt.idx;
if(t){
if(1!==appmsg_like_type)return void sendRecommendAjax(0);
Class.removeClass(el_like,opt.className),el_like.setAttribute("like",0),n>0&&"100000+"!==i&&(el_likeNum.innerHTML=n-1==0?"赞":n-1);
}else if(1===appmsg_like_type)el_like.setAttribute("like",1),Class.addClass(el_like,opt.className),
"100000+"!==i&&(el_likeNum.innerHTML=n+1);else if(2===appmsg_like_type)return void initRecommendPanel();
RetryAjax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+o+"&f=json&appmsgid="+s+"&itemidx="+l,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
action_type:o?1:2,
device_type:window.devicetype,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST"
});
},initRecommendPanel=function(){
sendRecommendAjax(1,"",1);
},isBeenUnvisible=function(e){
function i(){
return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
}
return e.offsetTop+el_likeComment.offsetHeight-i()>=commonUtils.getInnerHeight()?!0:!1;
},disableMove=function(){
document.addEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.addEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.addEventListener("touchmove",preventText,!1);
},enableMove=function(){
document.removeEventListener("touchmove",preventMove,{
passive:!1
}),el_likeCommentText.removeEventListener("touchstart",getTouchStart,{
passive:!1
}),el_likeCommentText.removeEventListener("touchmove",preventText,!1);
},preventMove=function(e){
var i=e.target;
"TEXTAREA"!==i.tagName&&"BUTTON"!==i.tagName&&(e.preventDefault(),e.stopPropagation());
},getTouchStart=function(e){
var i=e.targetTouches||[];
if(i.length>0){
var t=i[0]||{};
startY=t.clientY;
}
},preventText=function(e){
var i=!1,t=e.changedTouches,o=this.scrollTop,n=this.offsetHeight,s=this.scrollHeight;
if(t.length>0){
var l=t[0]||{},a=l.clientY;
i=a>startY&&0>=o?!1:startY>a&&o+n>=s?!1:!0,i||e.preventDefault();
}
},isShow=function(e){
return"none"===e.style.display||"hidden"===e.style.visibility?!1:""===e.style.display||"block"===e.style.display||"visible"===e.style.visibility?!0:void 0;
},validataComment=function(e,i){
var t=e.value.replace(/^\s+|\s+$/g,"");
sendRecommendAjax(1,t,i);
},showEducatePanel=function(e,i,t){
show(el_likeComment);
var o=window.source||window.cgiData&&window.cgiData.source||0;
return o&&(o=parseInt(o,10),94===o)?void(e&&5===e&&hide(el_likeComment)):void(i||(show(el_likeEducate),
t&&t>0&&(el_friend_like.innerHTML="%s位朋友也在看,".replace("%s",t),document.getElementById("js_friend_like_word").innerText="前往“发现”-“看一看”浏览",
show(el_friend_like)),1===showType&&(hide(el_go_wow),hide(el_likeCommentShare)),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment),educateExpose()));
},setBtnLike=function(){
el_like.setAttribute("like",1),Class.addClass(el_likeBtn,opt.className),realLikeNum+=1;
var e=el_likeNum.innerHTML;
"10万+"!==e&&(el_likeNum.innerHTML=formatReadNum(realLikeNum));
},setLike2Status=function(e,i,t){
var o="在看";
switch(showType){
case 1:
switch(prompted){
case 0:
showEducatePanel(e,i,t),show(el_likeComment),prompted=1;
break;

case 1:
hide(el_likeEducate),showToast(o);
}
setBtnLike();
break;

case 2:
switch(hide(el_bcommentPanel2),clear(el_likeCommentText),prompted){
case 0:
showEducatePanel(e,i,t),5===e&&hide(el_likeCommentShare);
break;

case 1:
(4===e||5===e)&&showToast(4===e?"已发送":o);
}
5!==e&&(4===e&&"none"!==el_likeEducate.style.display?hide(el_likeCommentShare):4===e?hide(el_likeComment):(show(el_commentArea),
show(el_likeCommentShare),1===prompted&&hide(el_likeEducate),show(el_likeComment),
isBeenUnvisible(el_likeComment)&&scrollToShow(el_likeComment))),4!==e&&setBtnLike(),
prompted=1;
}
enableMove(),commonUtils.isNativePage()&&JSAPI.invoke("handleHaokanAction",{
action:"closeComment"
}),log("[Appmsg] zaikan set like success");
},unsetLike2Status=function(e){
1===e?setTimeout(function(){
alert2(" 已取消，想法已同步删除");
},20):showToast("已取消"),2===showType&&isShow(el_likeComment)&&hide(el_likeComment);
var i=el_likeNum.innerHTML;
Class.removeClass(el_likeBtn,opt.className),el_like.setAttribute("like",0),el_likeComment&&hide(el_likeComment),
realLikeNum-=1,realLikeNum>=0&&"10万+"!==i&&(el_likeNum.innerHTML=formatReadNum(realLikeNum)),
log("[Appmsg] zaikan set unlike success");
},sendRecommendAjax=function sendRecommendAjax(like,comment,type,clientType){
if(!haokanLock){
log("[Appmsg] prepare to send appmsg like request"),showLoading();
var appmsgid=opt.appmsgid||opt.mid,itemidx=opt.itemidx||opt.idx;
haokanLock=!0;
var action_type;
like?(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(12),action_type=type):(window.isPaySubscribe&&payReportUtils.reportPayAppmsg(13),
action_type=2),ajax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
comment:comment?comment:"",
prompted:1,
style:clientType||showType,
action_type:action_type,
passparam:window.passparam,
request_id:(new Date).getTime(),
device_type:window.devicetype,
exptype:window.exptype||"",
expsessionid:window.expsessionid||""
},
type:"POST",
success:function success(res){
haokanLock=!1;
var data=eval("("+res+")");
hideLoading(),log("[Appmsg] success send appmsglike like "+like+" return value is "+JSON.stringify(res)),
0==data.base_resp.ret?(like?(setLike2Status(type,data.is_eu_user,data.friend_like_num),
relatedArticles&&relatedArticles.render&&relatedArticles.render("like")):unsetLike2Status(data.has_comment),
connectWithApp(like,comment,clientType)):failAlert(comment);
},
error:function(){
hideLoading(),failAlert(),haokanLock=!1;
}
});
}
};
JSAPI.on("menu:haokan",function(e){
var i=0===parseInt(e.recommend)?0:1;
if(0===i)sendRecommendAjax(i,"",2,clientShowType);else{
var t="";
t=e.comment;
var o=1===e.scene?4:5;
sendRecommendAjax(i,t,o,clientShowType);
}
});
var connectWithApp=function(e,i){
var t={
origin:"mp",
isLike:e?1:0,
url:encodeURIComponent(msg_link.html(!1)),
content:i?i:""
};
JSAPI.invoke("handleHaokanAction",{
action:actionString,
recommend:e?1:0,
server_data:JSON.stringify(t)
},function(e){
console.log("handleHaokanAction",e);
}),JSAPI.invoke("handleHaokanAction",{
action:actionForClient,
permission:1,
recommend:e?1:0
},function(e){
console.log("handleHaokanAction for client",e);
});
},goWoW=function(){
jumpWowLock||(jumpToWowClickReport(),jumpWowLock=!0,JSAPI.invoke("handleHaokanAction",{
action:"jumpToWow",
extParams:JSON.stringify({
autoDropLoad:!0
})
},function(e){
jumpWowLock=!1,console.log("jumpToWow",e),e.err_msg&&"handleHaokanAction:fail_entrance_not_open"===e.err_msg?show(el_wowClosePanel):"handleHaokanAction:fail  action not support"===e.err_msg||"handleHaokanAction:fail, action not support"===e.err_msg?alert2("微信版本过低，暂不支持该操作"):"handleHaokanAction:ok"===e.err_msg&&hide(el_likeComment),
JSAPI.invoke("handleHaokanAction",{
action:actionString,
server_data:JSON.stringify({
origin:"mp",
autoDropLoad:!0
})
},function(e){
console.log("sendAutoDropLoad",e);
});
}));
},likeClickReport=function(){
ajax({
url:"/mp/appmsgreport?action=appmsglikeclickcomment&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
});
},likeExpose=function e(){
var i=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,t=qs("like3").offsetTop,o=opt.appmsgid||opt.mid,n=opt.itemidx||opt.idx;
i+commonUtils.getInnerHeight()>t&&t>=i&&(ajax({
url:"/mp/appmsgreport?action=appmsglikeexposure&__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&f=json&appmsgid="+o+"&itemidx="+n,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:parseInt(window.item_show_type,10),
client_version:window.clientversion,
device_type:window.devicetype
},
type:"POST"
}),DomEvent.off(window,"scroll",e));
},educateExpose=function i(){
var e=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,
opt.appmsgid||opt.mid),t=opt.itemidx||opt.idx,o=window.item_show_type,n=window.enterid||window.cgiData&&window.cgiData.enterid||"";
el_likeEducate&&"none"!=el_likeEducate.style.display&&commonUtils.getInnerHeight()>el_likeEducate.getBoundingClientRect().top&&el_likeEducate.getBoundingClientRect().top+el_likeEducate.getBoundingClientRect().height>0&&(ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,t,window.source,window.subscene,1,o,sessionid,n]
},
async:!1,
timeout:2e3
}),DomEvent.off(window,"scroll",i));
},jumpToWowClickReport=function(){
var e=opt.appmsgid||opt.mid,i=opt.itemidx||opt.idx,t=window.enterid||window.cgiData&&window.cgiData.enterid||"";
ajax({
url:"/mp/webcommreport?action=report&report_useruin=1&__biz="+window.biz,
type:"POST",
data:{
logid:18266,
buffer:["",Base64.decode(opt.biz),e,i,window.source,window.subscene,2,window.item_show_type,sessionid,t]
},
async:!1,
timeout:2e3
});
};
DomEvent.on(el_alertConfirm,"click",function(){
el_alertPanel.style.display="none";
}),DomEvent.on(el_like,"click",function(e){
if(el_likeBtn.disabled!==!0){
if(window.is_temp_url)return void alert2("预览状态下无法操作");
var i=el_like.getBoundingClientRect();
return log("[Appmsg zaikan location] top: "+i.top+" left: "+i.left+" bottom: "+i.bottom+" right: "+i.right),
log("[Appmsg zaikan click] clientX: "+e.clientX+" clientY: "+e.clientY),e.currentTarget.classList.contains("js_disabled")?!1:(like_report(e),
!1);
}
}),DomEvent.on(el_wowCloseAck,"click",function(){
hide(el_wowClosePanel);
}),DomEvent.on(qs("js_mask_2"),"mousedown",function(){
hide(el_bcommentPanel2),clear(el_likeCommentText),vHide(el_commentErrorMsg),enableMove();
}),DomEvent.on(el_commentConfirm,"mousedown",function(){
validataComment(el_likeCommentText,4);
}),DomEvent.on(el_commentCancel,"mousedown",function(){
hide(el_bcommentPanel2),clear(el_likeCommentText),vHide(el_commentErrorMsg),enableMove();
}),DomEvent.on(el_likeCommentShare,"click",function(){
return commonUtils.isNativePage()?void JSAPI.invoke("handleHaokanAction",{
action:"writeComment",
style:"white"
}):(scrollTop=document.body.scrollTop||document.documentElement.scrollTop,1*window.item_show_type===10&&(el_panelLikeTitle.innerHTML=window.msg_title.replace(/<(\/?)(?=((a(\s|>))|(\/a))).*?>/g,"")),
show(el_bcommentPanel2),el_likeCommentText.focus(),el_commentConfirm.setAttribute("disabled","disabled"),
disableMove(),void likeClickReport());
}),DomEvent.on(el_likeCommentText,"focus",function(){}),DomEvent.on(el_likeCommentText,"blur",function(){
window.scrollTo(0,scrollTop);
}),DomEvent.on(window,"scroll",likeExpose),DomEvent.on(window,"scroll",educateExpose),
DomEvent.on(el_go_wow,"click",goWoW);
var scrollToShow=function(e){
e.scrollIntoView(!1);
};
DomEvent.on(el_likeCommentText,"input",function(e){
var i=el_likeCommentText.value.replace(/^\s+|\s+$/g,"");
i.length>maxLikeCommentWord?(el_commentCurrentCount.innerHTML=i.length,vShow(el_commentErrorMsg)):vHide(el_commentErrorMsg),
i.length>0&&i.length<=maxLikeCommentWord?el_commentConfirm.removeAttribute("disabled"):el_commentConfirm.setAttribute("disabled","disabled"),
Device.os.ios&&e.data&&doubleInputChar.indexOf(e.data)>-1&&(focusTag=!0);
}),DomEvent.on(el_likeCommentText,"click",function(){
Device.os.ios&&focusTag&&(el_likeCommentText.blur(),el_likeCommentText.focus(),focusTag=!1);
});
}
}
function showLikeNum(e){
var i=e||{};
if(i.show){
var t=i.likeAreaDom,o=i.likeNumDom,n=document.getElementById("js_like_btn");
t&&(t.style.display=i.likeAreaDisplayValue,t.style.visibility="",i.liked&&(1===appmsg_like_type?Class.addClass(t,i.className):Class.addClass(n,i.className)),
t.setAttribute("like",i.liked?"1":"0"),i.likeGray&&(n.disabled=!0));
var s=1===appmsg_like_type?"赞":"";
realLikeNum=i.likeNum||s,1===appmsg_like_type?(parseInt(realLikeNum)>1e5?realLikeNum="100000+":"",
o&&(o.innerHTML=realLikeNum)):2===appmsg_like_type&&(o.innerHTML=formatReadNum(realLikeNum));
}
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),Base64=require("biz_common/base64.js"),jsmonitorReport=require("biz_wap/utils/jsmonitor_report.js"),log=require("appmsg/log.js"),Tips=require("complain/tips.js"),RetryAjax=require("appmsg/retry_ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),actionString="submitMsgToTL",actionForClient="update_recommend_status",mmversion=require("biz_wap/utils/mmversion.js"),commonUtils=require("common/utils.js"),Loading=require("appmsg/loading.js"),realLikeNum,clientShowType=5,Device=require("biz_wap/utils/device.js"),payReportUtils=require("appmsg/pay_report_utils.js"),_require=require("pages/utils.js"),formatReadNum=_require.formatReadNum,relatedArticles=require("appmsg/related_article.js"),maxLikeCommentWord=200,focusTag=!1,doubleInputChar=["“”","‘’","（）","《》","〈〉","「」","『』","〔〕","【】","［］","[]","｛｝","{}","()","<>"];
return{
initLikeEvent:initLikeEvent,
showLikeNum:showLikeNum
};
});define("appmsg/read.js",["pages/utils.js","biz_wap/utils/device.js"],function(e){
"use strict";
function i(e){
var i=e||{},n=1586325600,d="undefined"!=typeof window.ct?parseInt(window.ct,10):0;
if(i.show){
var s=i.readAreaDom,o=i.readNumDom;
s&&(s.style.display=i.readAreaDisplayValue);
var r=i.readNum||1,w=window.ori_send_time||window.cgiData&&window.cgiData.ori_send_time||0,p=/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),m=1566025200,u=1565971200,_=a.os.ios||p?m:u;
parseInt(w,10)>_&&window.item_show_type&&"5"===window.item_show_type&&(n>d?("en"!==window.LANG&&(document.getElementById("readTxt").innerText="播放"),
r=i.videouv||0):("en"!==window.LANG&&(document.getElementById("readTxt").innerText="观看"),
r=i.readNum||0)),1===window.appmsg_like_type?(parseInt(r,10)>1e5?r="100000+":"",
o&&(o.innerHTML=r)):2===window.appmsg_like_type&&(o.innerHTML=t(r),""===o.innerHTML&&(o.innerHTML="0"));
}
}
var n=e("pages/utils.js"),t=n.formatReadNum,a=e("biz_wap/utils/device.js");
return{
showReadNum:i
};
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">分享给订阅用户</div>\n            <p class="share_appmsg_desc">可快速分享原创文章给你的公众号订阅用户</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/appmsgext.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js","biz_common/utils/wxgspeedsdk.js","biz_common/utils/url/parse.js"],function(e){
"use strict";
function i(e){
var i={
biz:"",
appmsg_type:"",
mid:"",
sn:"",
album_id:"",
idx:"",
scene:"",
title:"",
ct:"",
abtest_cookie:"",
devicetype:"",
version:"",
is_need_ticket:0,
is_need_ad:0,
comment_id:"",
is_need_reward:0,
both_ad:0,
reward_uin_count:0,
send_time:"",
msg_daily_idx:"",
is_original:0,
is_only_read:0,
req_id:"",
pass_ticket:"",
is_temp_url:0,
more_read_type:0,
rtId:"",
rtKey:"",
appmsg_like_type:1,
related_video_sn:"",
vid:"",
is_pay_subscribe:0,
pay_subscribe_uin_count:0,
has_red_packet_cover:0,
related_video_num:e.isPublicRelatedVideo?10:5,
album_video_num:5,
onSuccess:function(){},
onError:function(){}
};
for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o]);
console.info("[(评论、点赞、赞赏) 发送请求]: ",new Date),t({
url:"/mp/getappmsgext?f=json&mock="+n.getQuery("mock"),
data:{
r:Math.random(),
__biz:i.biz,
appmsg_type:i.appmsg_type,
mid:i.mid,
sn:i.sn,
idx:i.idx,
scene:i.scene,
title:encodeURIComponent(i.title.htmlDecode()),
ct:i.ct,
abtest_cookie:i.abtest_cookie,
devicetype:i.devicetype.htmlDecode(),
version:i.version.htmlDecode(),
is_need_ticket:i.is_need_ticket,
is_need_ad:i.is_need_ad,
comment_id:i.comment_id,
is_need_reward:i.is_need_reward,
both_ad:i.both_ad,
reward_uin_count:i.is_need_reward?i.reward_uin_count:0,
send_time:i.send_time,
msg_daily_idx:i.msg_daily_idx,
is_original:i.is_original,
is_only_read:i.is_only_read,
req_id:i.req_id,
pass_ticket:i.pass_ticket,
is_temp_url:i.is_temp_url,
item_show_type:i.item_show_type,
tmp_version:1,
more_read_type:i.more_read_type,
appmsg_like_type:i.appmsg_like_type,
related_video_sn:i.related_video_sn,
related_video_num:i.related_video_num,
vid:i.vid,
is_pay_subscribe:i.is_pay_subscribe,
pay_subscribe_uin_count:i.pay_subscribe_uin_count,
has_red_packet_cover:i.has_red_packet_cover,
album_id:0x11fd1c7c75070000,
album_video_num:i.album_video_num,
cur_album_id:window.appmsg_album_info?window.appmsg_album_info.id:"",
is_public_related_video:i.isPublicRelatedVideo,
encode_info_by_base64:i.encodeInfoByBase64
},
type:"POST",
dataType:"json",
rtId:i.rtId,
rtKey:i.rtKey,
rtDesc:_,
async:!0,
success:function(e){
if(console.info("[(评论、点赞、赞赏) 响应请求]: ",new Date,e),s("[Appmsg] success get async data"),
"function"==typeof i.onSuccess&&i.onSuccess(e),e)try{
s("[Appmsg] success get async data, async data is: "+JSON.stringify(e));
}catch(t){}else s("[Appmsg] success get async data, async data is empty");
if(!d&&"5"===window.item_show_type){
var _=Date.now()-window.logs.pagetime.page_begin;
if(d=!0,Math.random()>.1)return;
a.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:29,
time:_
}]
}),a.send();
}
},
error:function(){
s("[Appmsg] error get async data, biz="+i.biz+", mid="+i.mid),"function"==typeof i.onError&&i.onError();
},
complete:function(){
"function"==typeof i.onComplete&&i.onComplete();
}
});
}
var s=e("appmsg/log.js"),t=e("biz_wap/utils/ajax.js"),_=e("rt/appmsg/getappmsgext.rt.js"),a=e("biz_common/utils/wxgspeedsdk.js"),n=e("biz_common/utils/url/parse.js"),d=void 0;
return{
getData:i
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">来自: <#=source_nickname#></span>\n</span>    ';
});define("pages/video_ctrl.js",[],function(){
"use strict";
function i(i){
i=i||window;
var n=i.cgiData;
return n&&2==n.ori_status&&1==n.is_mp_video&&(n.nick_name||n.hit_username)?!0:!1;
}
function n(i){
return i=i||window,!1;
}
function e(){
return!1;
}
function t(){
return-1!=r.indexOf("&dd=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function o(){
var i;
if(parent==window)i=window;else try{
{
parent.window.__videoDefaultRatio;
}
i=parent.window;
}catch(n){
i=window;
}
var e=i.__videoDefaultRatio||16/9;
return"54"==i.appmsg_type?e:e;
}
var r=window.location.href;
return{
showPauseTips:t,
showVideoLike:e,
showVideoDetail:n,
showReprint:i,
getRatio:o
};
});define("pages/create_txv.js",["biz_wap/utils/jsmonitor_report.js","biz_wap/utils/ajax_load_js.js","pages/loadscript.js"],function(e){
"use strict";
function o(){
"function"!=typeof window.__createTxVideo&&(window.__createTxVideo=function(e){
n(e);
});
}
function n(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError),
r.Load({
url:a.jsUrl,
version:a.jsVersion,
useCache:!0,
win:e.win,
onSuccess:function(s){
2!=s.code&&3!=s.code||0!=s.queueIndex||(i.setSum("64728","111",1),i.setSum("64728","112",1));
var u=e.win||window,c=!0;
if(u.Txp&&"function"==typeof u.Txp.Player?(c=!0,0==s.queueIndex&&(2==s.code?i.setSum("64728","116",1):3==s.code&&i.setSum("64728","117",1))):(c=!1,
0==s.queueIndex&&(2==s.code?i.setSum("64728","114",1):3==s.code&&i.setSum("64728","115",1))),
c){
var d=t({
win:u,
options:e
});
n({
player:d
});
}else r.ClearCache({
win:u,
version:a.jsVersion,
url:a.jsUrl
}),o();
},
onError:function(o){
0==o.queueIndex&&(i.setSum("64728","111",1),i.setSum("64728","118",1),51==o.code?i.setSum("64728","119",1):52==o.code?i.setSum("64728","120",1):53==o.code&&i.setSum("64728","121",1)),
s(e);
}
});
}
function t(e){
var o=e.win||window,n=e.options,t=new o.Txp.Player({
containerId:n.containerId,
vid:n.vid,
width:n.width,
height:n.height,
autoplay:n.autoplay===!0?!0:!1,
allowFullScreen:n.allowFullScreen===!0?!0:!1,
chid:17
});
return t;
}
function s(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError);
var s=a.jsUrl;
s+=-1==s.indexOf("?")?"?"+a.customerParam+"="+a.jsVersion:"&"+a.customerParam+"="+a.jsVersion,
u({
win:e.win,
url:s,
timeout:1e4,
type:"JS",
callback:function(){
i.setSum("64728","122",1);
var s=e.win||window;
if(s.Txp&&"function"==typeof s.Txp.Player){
i.setSum("64728","124",1);
var r=t({
win:e.win,
options:e
});
n({
player:r
});
}else i.setSum("64728","123",1),o();
},
onerror:function(e){
switch(i.setSum("64728","122",1),1*e){
case 400:
a.jsLoadState=4,i.setSum("64728","125",1);
break;

case 500:
a.jsLoadState=5,i.setSum("64728","126",1);
break;

default:
a.jsLoadState=6,i.setSum("64728","127",1);
}
o();
}
});
}
var i=e("biz_wap/utils/jsmonitor_report.js"),r=e("biz_wap/utils/ajax_load_js.js"),u=e("pages/loadscript.js"),a={
customerParam:"wxv",
jsUrl:"//vm.gtimg.cn/tencentvideo/txp/js/iframe/api.js?",
jsVersion:"v1"
};
return{
createTxVideo:n,
createGlobalFunc:o
};
});define("appmsg/pay_read_utils.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","common/utils.js","pages/utils.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var t=e("biz_wap/jsapi/core.js"),i=e("biz_common/dom/event.js"),n=e("biz_common/dom/class.js"),a=e("biz_wap/utils/mmversion.js"),o=e("biz_wap/utils/device.js"),r=e("appmsg/pay_report_utils.js"),s=e("common/utils.js"),d=e("pages/utils.js"),w=function(e){
var t=arguments.length<=1||void 0===arguments[1]?document:arguments[1];
return t.querySelector(e);
},c=window.payFreeGift,l=function(){
for(var e=Object.create(null),t=1;6>t;t++)e[t]=s.once(r.reportSend.bind(null,t));
return function(t){
return e[t]();
};
}(),f=document.documentElement&&document.documentElement.clientWidth||window.innerWidth;
try{
var u=w("#img-content");
if(u){
var p=u.getBoundingClientRect();
p.width&&(f=p.width);
}
}catch(_){
console.error(_);
}
var m=32,g=8,y='<div class="pay__tag-reward js_reward"></div>',h={
dom:{
payFee:[w("#js_pay_panel .js_pay_fee"),w("#js_pay_panel_bottom .js_pay_fee")],
wrap:w("#js_pay_wall_wrap"),
payNum:w("#js_pay_num"),
rewardNumWrap:w("#js_pay_reward_num_wrap"),
rewardNum:w("#js_pay_reward_num"),
wall:w("#js_pay_wall"),
sendTips:w("#js_pay_preview_tips"),
giftBar:w("#js_pay_gift_bar"),
giftBarTitle:w("#js_pay_gift_bar_title"),
sendGift:w("#js_send_pay_gift")
},
perLine:null,
data:{}
},v=function(e){
e&&(/^http/.test(e)||(e=location.protocol+"//"+location.host+e),e.indexOf("#")<0&&(e+="#wechat_redirect"),
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(a.isIOS||a.isAndroid||a.isWp)?t.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1===t.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e);
},b=function(){
var e=h.dom,t=h.data,i=parseInt(t.pay_cnt,10);
e.payNum.innerHTML=i>=1e4||t.is_pay_cnt_cut?"en"===window.LANG?"10k+":"1万+":i+"",
t.rewardTotal?(e.rewardNum.innerHTML=t.rewardTotal+(t.rewardTotalCut?"+":""),e.rewardNumWrap.style.display=""):e.rewardNumWrap.style.display="none";
for(var n=3*h.perLine,a="",o=0,r=t.pay_head_imgs.length;r>o;o++){
var s=t.reward_status_list?t.reward_status_list[o]:0;
if(a+='<div class="pay__avatar-wrp"><img src="'+t.pay_head_imgs[o]+'">'+(s?y:"")+"</div>",
o>=n-1)break;
}
e.wall.innerHTML=a;
},j=function(){
var e=h.dom;
i.tap(e.payNum,function(){
v("/mp/paysub?action=evaluate_show_page&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&link="+encodeURIComponent(window.msg_link)+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&is_fans="+window.isFans);
}),i.tap(e.rewardNum,function(){
var e=(Math.ceil((s.getInnerHeight()-188)/42)+1)*Math.floor((f-15)/42);
v("/mp/reward?act=getrewardheads&__biz="+window.biz+"&appmsgid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&offset=0&count="+e+"&source=1");
}),i.tap(e.sendGift,function(){
if(o.os.iphone||o.os.ipad||o.os.android){
var t=h.data.gift_url.html(),i="",a=t.indexOf("#");
-1!==a&&(i=t.substring(a),t=t.substring(0,a)),l(n.hasClass(e.giftBar,"pay__gift-send_static")?5:3),
v(t+"&sessionid="+window.sessionid+"&enterid="+window.enterid+"&scene="+window.source+"&subscene="+window.subscene+i);
}else window.weui.alert("请使用移动端微信打开");
});
},B=function(e,t,o){
if(window.isPaySubscribe){
var s=h.dom;
if(e=JSON.parse(JSON.stringify(e)),!e.fee||window.isPaid||window.IAPProductInfo||!function(){
var t=Math.floor(e.fee/100);
s.payFee.forEach(function(e){
!window.iapPriceInfo.currency_symbol&&(e.innerHTML="￥"+t+".00"),e.parentNode.dataset.ready=1;
});
}(),a.isIOS&&e.fee&&(window.IAPProductInfo?("CNY"!==window.IAPProductInfo.currencyCode&&r.report110809(40),
r.reportOverseaPay(window.IAPProductInfo.currencyCode,100*window.IAPProductInfo.price.toFixed(2),1,window.IAPProductInfo.invokeTime,window.IAPProductInfo.countryCode,0,window.IAPProductInfo.err_msg+(window.IAPProductInfo.err_desc?"__"+window.IAPProductInfo.err_desc:""))):window.oriProductFee=Math.floor(e.fee/100)),
e.pay_cnt){
if(e.is_paid&&!c){
e.pay_head_imgs.unshift(e.my_head_img),e.reward_status_list instanceof Array?e.reward_status_list.unshift(e.my_reward_status):e.reward_status_list=[e.my_reward_status];
var w=3*h.perLine;
e.pay_head_imgs.length>w&&(e.pay_head_imgs=e.pay_head_imgs.slice(0,w));
}
e.rewardTotal=t.rewardTotal,e.rewardTotalCut=t.rewardTotalCut,h.data=e,s.wrap.style.height="",
s.wrap.style.marginTop="",s.wrap.style.visibility="visible",b(),!o&&j();
}else s.wrap.style.display="none";
if(s.giftBar)if(window.payGiftsCount-e.gifted_count>0&&!c){
s.giftBar.style.display="";
var f=window.localStorage.getItem("paySuc"),u=h.dom.giftBar.getBoundingClientRect(),p=u.top;
"1"===f&&p>window.innerHeight?!function(){
window.localStorage.setItem("paySuc","0"),h.dom.giftBar.className="pay__gift-send show",
h.dom.giftBarTitle.innerText="已购买，可赠送给一位朋友",l(2);
var e=8+window.parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--sab")),t=0,a=0,o=!1,r=0,s=function(e){
n.hasClass(h.dom.giftBar,"show")&&(o=!0,r=e.touches[0].clientY,t=a);
},d=function(i){
i.preventDefault();
var s=i.touches[0].clientY,d=s-r;
n.hasClass(h.dom.giftBar,"show")&&o&&(d+t>=0&&e>=d+t?(h.dom.giftBar.style.transform="translate3d(0, "+(d+t)+"px, 0)",
a=d+t):d+t>e?(h.dom.giftBar.style.transform="translate3d(0, "+e+"px, 0)",a=e):0>d+t&&(h.dom.giftBar.style.transform="translate3d(0, 0, 0)",
a=0));
},w=function p(){
o=!1,n.hasClass(h.dom.giftBar,"show")&&a===e&&(h.dom.giftBar.className="pay__gift-send",
i.off(h.dom.giftBar,"touchstart",s),i.off(h.dom.giftBar,"touchmove",d),i.off(h.dom.giftBar,"touchend",p));
},c=window.scrollY,f=window.innerHeight/3,u=function _(){
var e=h.dom.wrap.getBoundingClientRect(),t=e.top+e.height-48;
t<=window.innerHeight?(h.dom.giftBarTitle.innerText="可赠送给一位朋友免费阅读",h.dom.giftBar.className="pay__gift-send pay__gift-send_static",
h.dom.giftBar.style.transform="translate3d(0, 0, 0)",i.off(h.dom.giftBar,"touchstart",s),
i.off(h.dom.giftBar,"touchmove",d),i.off(h.dom.giftBar,"touchend",w),i.off(window,"scroll",_),
l(4)):window.scrollY-c>f&&(h.dom.giftBar.className="pay__gift-send");
};
i.on(window,"scroll",u),i.on(h.dom.giftBar,"touchstart",s),i.on(h.dom.giftBar,"touchmove",d),
i.on(h.dom.giftBar,"touchend",w);
}():!n.hasClass(h.dom.giftBar,"show")&&p<=window.innerHeight&&(h.dom.giftBar.className="pay__gift-send pay__gift-send_static",
l(4));
}else s.giftBar.style.display="none";
s.sendTips&&!function(){
var e=function t(){
return d.checkExposedStatus(s.sendTips)?(console.log("report send tips."),l(1),i.off(window,"scroll",t),
!0):!1;
};
e()||i.on(window,"scroll",e);
}();
}
},I=function(){
if(!window.isPaySubscribe)return 0;
if(null===h.perLine){
var e=m+g;
h.perLine=Math.floor(.8*f/e),h.dom.wall.parentNode.style.width=h.perLine*e-g+"px";
}
return h.perLine;
};
return{
init:B,
getCountPerLine:I
};
});define("appmsg/reward_utils.js",["biz_wap/ui/weui.js","appmsg/reward_entry.js","biz_wap/utils/mmversion.js","biz_common/dom/class.js","biz_common/dom/event.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var r=e("appmsg/reward_entry.js"),n=e("biz_wap/utils/mmversion.js"),i=e("biz_common/dom/class.js"),a=e("biz_common/dom/event.js"),t=window.navigator.userAgent,d={
perLine:0,
hasBindResize:!1,
hasInit:!1,
pageContainerId:"img-content",
rewardInnerId:"js_reward_inner"
},s=function(e){
return document.getElementById(e);
},o=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.pageContainerId||d.pageContainerId,n=e.rewardInnerId||d.rewardInnerId,i=window.innerWidth||document.documentElement.clientWidth;
try{
var a=s(r).getBoundingClientRect();
a.width&&(i=a.width);
}catch(t){}
var o=36;
d.perLine=Math.floor(.8*i/o);
var w=s(n);
return w&&(w.style.width=d.perLine*o+"px"),d.perLine;
},w=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.pageContainerId||d.pageContainerId,i=e.rewardInnerId||d.rewardInnerId;
return e.can_reward&&s(n)&&s(i)?(d.hasBindResize||!function(){
d.hasBindResize=!0;
var n=window.innerWidth;
a.on(window,"resize",function(){
window.innerWidth!==n&&(n=window.innerWidth,o(e),d.hasInit&&r.render(d.perLine));
});
}(),d.perLine||o(e),d.perLine):0;
},_=function(e,o){
d.hasInit=!0;
var _=e.author_id||window.author_id;
e.reward_head_imgs=e.reward_head_imgs||[];
var m=s("js_author_name");
if(o.reward_entrance_enable_for_preview)if(n.isInMiniProgram)n.isInMiniProgram&&m&&i.removeClass(m,"rich_media_meta_link");else{
if(_||n.isAndroid){
var u=s("js_preview_reward_author");
u&&(u.style.display="block");
var p=s("js_preview_reward_author_wording");
o.reward_wording&&p&&(p.innerText=o.reward_wording,p.style.display="block");
var h=s("js_preview_reward_author_link");
h&&(window.item_show_type&&1*window.item_show_type===5||a.on(h,"tap",function(e){
e.preventDefault(),window.weui.alert("预览状态下无法操作");
}));
}
if(_){
var l=s("js_preview_reward_author_avatar"),c=s("js_preview_reward_author_head");
o.reward_author_head&&l&&c&&(c.setAttribute("src",o.reward_author_head),l.style.display="block");
var v=s("js_preview_reward_link_text");
v&&(v.innerText="喜欢作者");
}else n.isAndroid&&(s("js_preview_reward_author_name").style.display="none");
}else!n.isInMiniProgram&&(t.indexOf("WindowsWechat")>-1||n.isIOS||n.isAndroid)?(r.handle(e,w({
pageContainerId:o.pageContainerId,
rewardInnerId:o.rewardInnerId,
can_reward:1==e.can_reward?!0:!1
})),m&&e.rewardsn&&e.timestamp&&(m.setAttribute("data-rewardsn",e.rewardsn),m.setAttribute("data-timestamp",e.timestamp),
m.setAttribute("data-canreward",e.can_reward)),m&&!e.can_reward&&i.removeClass(m,"rich_media_meta_link")):m&&i.removeClass(m,"rich_media_meta_link");
};
return{
init:_,
getCountPerLine:w
};
});define("biz_common/ui/imgonepx.js",[],function(){
"use strict";
return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
});define("appmsg/share_biz.js",[],function(){
"use strict";
var e=[2390745668,3099420829,3872121626,3203738065,3072206507,3566970574,3002803029,3099387730,3559965496,3525314097,2390323860,3084276724,3289028514,3003793452,3003972371,2398512110,3071748654,3233018348,3095049467,3076061592,3273032305,3264278949,3086344434,3014829842,3294546013,2058310401,2397841479,2397640820,3282179238,3072107639,3521076442,3554888231,2397274880,2394106525,3077726226,2103095721,3593723769,2395186785,2393698643,3944000110,2397445840,2394144447,3082139483,3070806332,3016714421,3006879186,3213574124,3221398587,3078448935,3591999034,3551390431];
return{
shareBizTest:e
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var i=arguments[t];
for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);
}
return e;
};
define("appmsg/related_article.js",["biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","appmsg/related_article_tpl.html.js","appmsg/related_article_item.html.js","biz_wap/utils/openUrl.js","biz_common/dom/event.js","common/utils.js","biz_common/dom/class.js","biz_common/utils/url/parse.js","common/comm_report.js","appmsg/related_article_feedback.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/set_font_size.js","biz_wap/utils/jsmonitor_report.js","pages/utils.js","pages/scrollY.js"],function(e){
"use strict";
e("biz_common/utils/string/html.js");
var t=e("biz_common/tmpl.js"),i=e("biz_wap/utils/ajax.js"),n=e("biz_wap/jsapi/core.js"),o=e("appmsg/related_article_tpl.html.js"),a=e("appmsg/related_article_item.html.js"),r=e("biz_wap/utils/openUrl.js"),s=e("biz_common/dom/event.js"),l=e("common/utils.js"),d=e("biz_common/dom/class.js"),m=e("biz_common/utils/url/parse.js"),c=e("common/comm_report.js"),u=e("appmsg/related_article_feedback.js"),p=e("biz_wap/utils/mmversion.js"),_=e("biz_wap/utils/device.js"),w=e("appmsg/set_font_size.js").setFontSize,g=e("biz_wap/utils/jsmonitor_report.js"),h=e("pages/utils.js"),f=h.getId,j=h.getByClass,b=h.qs,v=h.formatReadNum,y=h.getScrollTop,z=e("pages/scrollY.js"),x=l.getInnerHeight(),T={
bottomOpr:f("js_bottom_opr_right"),
container:f("js_related_container")
};
if(null===T.container)return null;
var R=0,I=!1,B=null,C=null,O=!1,E=3,F=100*Math.random()<1;
F&&window.WX_BJ_REPORT.BadJs.report("relatedArticleFlag","value:"+window.relatedArticleFlag,{
mid:"mmbizwap:related_monitor",
uin:window.user_uin
});
var P=_.os.ipad||!p.isIOS&&!p.isAndroid,A=0;
p.isIOS?A=1:p.isAndroid&&(A=2);
var S={
Bizuin_from:window.biz,
Msgid_from:window.parseInt(window.mid,10)||0,
Itemidx_from:window.parseInt(window.idx,10)||0,
Scene:window.parseInt(window.source,10)||0,
Subscene:window.parseInt(window.subscene,10)||0,
Sessionid:window.sessionid||"",
Enterid:window.parseInt(window.enterid,10)||0
},W=[{
name:"内容质量低",
value:1
},{
name:"不看此公众号",
value:2
}];
F&&window.WX_BJ_REPORT.BadJs.report("RELATED_ARTICLE_COUNT","count:"+E,{
mid:"mmbizwap:related_monitor",
uin:window.user_uin
});
var k=function(e){
var t=document.createElement("div");
return t.innerHTML=e,t.childNodes;
},J=function(){
null!==B&&(s.off(T.area,"transitionend",B),B=null);
};
B=function(e){
e.target===T.area&&"height"===e.propertyName&&(T.area.style.overflow="visible",J());
};
var L=function(e,t){
var i=2.25,n=6.5,o=0;
return 0===e?(T.area.style.overflow="hidden",T.area.style.margin="0",J()):(T.area.style.margin="12px 0",
o=e*n+i),T.area.style.height=o+"em",O&&e&&B&&B({
target:T.area,
propertyName:"height"
}),t?(R||(R=T.placeholder?b("div",T.placeholder).getBoundingClientRect().height:b(".js_related_item",T.list).getBoundingClientRect().height),
e*R+b(".js_related_title",T.main).getBoundingClientRect().height):void 0;
},M=function(e){
null!==C?(clearTimeout(C),C=null,"function"==typeof e&&e(!0)):"function"==typeof e&&e(!1);
},H=function(){
var e=!1,t=[],n=function o(n){
e=!0,i({
url:"/mp/relatedarticle?action=expose",
type:"POST",
dataType:"json",
data:n,
complete:function(){
t.length?o(t.shift()):e=!1;
}
});
};
return function(i){
e?t.push(i):n(i);
};
}(),N=function(){
for(var e=j("js_related_item"),t=y(),i=[],o=0;o<e.length;o++){
var a=e[o];
1*a.dataset.hasreport!==1&&a.clientHeight+a.offsetTop>=t+a.clientHeight/2&&a.clientHeight+a.offsetTop<=t+a.clientHeight/2+l.getInnerHeight()&&!function(e,t){
var n=e.dataset,o=n.url;
n.hasreport=1,g.setSum(110809,21,1),c.report(18832,_extends({
Actiontype:1,
Type:1,
Bizuin:m.getQuery("__biz",o),
Msgid:window.parseInt(m.getQuery("mid",o),10)||0,
Itemidx:window.parseInt(m.getQuery("idx",o),10)||0,
Sendtimestamp:window.parseInt(n.time)||0,
Pos:t+1,
Recalltype:1*n.recalltype,
Mmversion:A,
Isreaded:1*n.isreaded,
ExpType:n.exptype,
ExtInfo:n.ext_info
},S)),H({
bizuin:n.bizuin,
mid:n.mid,
idx:n.idx
}),i.push({
item_show_type:n.item_show_type,
url:o
});
}(a,o);
}
i.length&&n.invoke("downloadPageDataForFastLoad",{
itemList:i
},function(e){
console.log("downloadPageDataForFastLoad",e);
});
},U=function(e){
return 1===window.show_related_article||e.indexOf(window.source)>-1||e.indexOf(window.subscene)>-1;
}(["157","169"]),Q=function(){
var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?E:arguments[1],o=parseFloat(window.getComputedStyle(T.main).marginTop),r=function(e){
if(O)L(e);else{
var t=24,i=T.area.getBoundingClientRect().top,n=L(e,!0)+t+o,a=T.bottomOpr.getBoundingClientRect().top,r=i+n;
if(!(a>x||0>r)){
var s=i-t;
s>0&&x>r||z(0>s?{
distance:s,
duration:.5,
end:N
}:{
distance:r-x,
duration:.5,
end:N
});
}
}
C=null;
};
C=setTimeout(function(){
return r(3);
},500),i({
url:"/mp/relatedarticle?action=getlist&count="+n+"&begin="+e+"&article_url="+window.encodeURIComponent(location.href)+"&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&has_related_article_info="+window.hasRelatedArticleInfo+"&is_from_recommand="+(U?1:0),
type:"GET",
dataType:"json",
success:function(i){
i&&i.base_resp&&1*i.base_resp.ret===0&&i.list&&i.list.length?!function(){
var o=i.list.map(function(e){
return U&&(e.url=e.url.replace(/#wechat_redirect/,"&show_related_article=1$&")),
e.like_num_wording=e.old_like_num?v(e.old_like_num):"",e.read_num_wording=e.read_num?v(e.read_num):"",
e.pay_cnt_wording=e.pay_cnt?v(e.pay_cnt):"",e.ext_info=e.ext_info.html(!0),e;
});
F&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs.report("list.length","list.length:"+o.length,{
mid:"mmbizwap:related_monitor",
_info:{
relatedArticleFlag:window.relatedArticleFlag,
isPc:P
},
uin:window.user_uin
}),o.length!==n&&window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs.report("list is no match","list.length:"+o.length+"|count:"+n,{
mid:"mmbizwap:related_monitor",
_info:{
relatedArticleFlag:window.relatedArticleFlag,
list:o,
isPc:P
},
uin:window.user_uin
});
var s=document.createDocumentFragment();
Array.prototype.forEach.call(k(t.tmpl(a,{
list:o,
reason:W,
begin:e
})),function(e){
s.appendChild(e.cloneNode(!0));
}),T.list.appendChild(s),R=b("div",T.placeholder).getBoundingClientRect().height,
T.placeholder.parentNode.removeChild(T.placeholder),T.placeholder=null,M(function(e){
e?r(i.list.length):L(i.list.length);
}),T.list.style.opacity=1,N(),window.ipados13_font_scale&&w(T.list,window.ipados13_font_scale/100);
}():M(function(e){
!e&&L(0);
});
}
});
},X=function(){
s.on(T.list,"click",".js_related_item",function(e){
var t=e.delegatedTarget,i=t.dataset,o=i.url;
g.setSum(110809,23,1),c.report(18832,_extends({
Actiontype:2,
Type:1,
Bizuin:m.getQuery("__biz",o),
Msgid:window.parseInt(m.getQuery("mid",o),10)||0,
Itemidx:window.parseInt(m.getQuery("idx",o),10)||0,
Sendtimestamp:window.parseInt(i.time)||0,
Pos:(1*i.index||0)+1,
Recalltype:1*i.recalltype,
Isreaded:1*i.isreaded,
Mmversion:A,
ExpType:i.exptype,
ExtInfo:i.ext_info
},S)),p.isWechat&&!p.isMpapp?n.invoke("openWebViewUseFastLoad",{
url:o,
item_show_type:i.item_show_type,
scene:132,
openType:0
},function(e){
console.log("openWebViewUseFastLoad res: ",e),e&&e.err_msg&&-1===e.err_msg.indexOf("ok")&&r.openUrlWithExtraWebview(o);
}):location.href=o;
});
var e=null,t=null;
s.on(T.list,"touchstart",".js_related_item",function(i){
i.stopPropagation(),t=i.delegatedTarget,e=setTimeout(function(){
t&&d.addClass(t,"card_custom_active"),e=null;
},100);
},!1),s.on(T.list,"touchmove",".js_related_item",function(){
e?(clearTimeout(e),e=null):t&&d.removeClass(t,"card_custom_active");
},!1),s.on(T.list,"touchend",".js_related_item",function(i){
i.stopPropagation(),setTimeout(function(){
t&&d.removeClass(t,"card_custom_active"),t=null,e&&(clearTimeout(e),e=null);
},200);
},!1),s.on(window,"scroll",N),null!==B&&s.on(T.area,"transitionend",B),u.init({
container:T.list,
biz:window.biz,
mid:window.mid,
idx:window.idx,
dislikeCb:function(e){
e.parentNode.removeChild(e),L(T.list.children.length);
}
});
};
return{
isFromRecommend:U,
render:function(e,i){
if(!I&&1*window.item_show_type===0&&""!==window.item_show_type){
if(O=i,!O){
var n=T.bottomOpr.getBoundingClientRect(),a=n.top,r=n.bottom;
if(a>x||0>r)return;
}
I=!0,T.container.innerHTML=t.tmpl(o,{
type:e
}),T.area=b(".js_related_area",T.container),O&&(T.area.style.transition="none"),
T.main=b(".js_related_main",T.area),T.list=b(".js_related_list",T.main),T.placeholder=b(".js_related_placeholder",T.main),
X(),Q();
}
}
};
});define("appmsg/malicious_wording.js",[],function(){
"use strict";
var i={
0:{
90041:"此标题包含夸大误导信息",
20012:"此标题包含低俗恶俗内容"
},
1:{
90041:"",
20012:""
},
2:{
90041:"此文章包含夸大误导信息",
20012:"此文章包含低俗恶俗内容"
}
},s={
0:{
90041:"标题使用夸大、煽动、低俗等词语造成误导或引人不适",
20012:"标题使用低俗或恶俗词语造成不正当影响或引人不适"
},
1:{
90041:"摘要包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"摘要包含低俗或恶俗内容造成不正当影响或引人不适"
},
2:{
90041:"文章包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"文章包含低俗或恶俗内容造成不正当影响或引人不适"
}
};
return{
maliciousTitleMap:i,
maliciousDescMap:s
};
});!function(n){
"use strict";
function t(n,t){
var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);
return u<<16|65535&r;
}
function r(n,t){
return n<<t|n>>>32-t;
}
function u(n,u,e,o,c,f){
return t(r(t(t(u,n),t(o,f)),c),e);
}
function e(n,t,r,e,o,c,f){
return u(t&r|~t&e,n,t,o,c,f);
}
function o(n,t,r,e,o,c,f){
return u(t&e|r&~e,n,t,o,c,f);
}
function c(n,t,r,e,o,c,f){
return u(t^r^e,n,t,o,c,f);
}
function f(n,t,r,e,o,c,f){
return u(r^(t|~e),n,t,o,c,f);
}
function i(n,r){
n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;
var u,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;
for(u=0;u<n.length;u+=16)i=l,h=d,a=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),
v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),
C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),
l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),
d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),
v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),
C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),
l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),
d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),
v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),
C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),
l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),
d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),
v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),
C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),
l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),
d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),
v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),
C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),
l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),
d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),
v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,h),
v=t(v,a),C=t(C,g);
return[l,d,v,C];
}
function h(n){
var t,r="";
for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
return r;
}
function a(n){
var t,r=[];
for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
return r;
}
function g(n){
return h(i(a(n),8*n.length));
}
function l(n,t){
var r,u,e=a(n),o=[],c=[];
for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],
c[r]=1549556828^e[r];
return u=i(o.concat(a(t)),512+8*t.length),h(i(c.concat(u),640));
}
function d(n){
var t,r,u="0123456789abcdef",e="";
for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);
return e;
}
function v(n){
return unescape(encodeURIComponent(n));
}
function C(n){
return g(v(n));
}
function s(n){
return d(C(n));
}
function A(n,t){
return l(v(n),v(t));
}
function m(n,t){
return d(A(n,t));
}
n.md5=function(n,t,r){
return t?r?A(t,n):m(t,n):r?C(n):s(n);
};
}("function"==typeof jQuery?jQuery:this);define("complain/utils/const.js",[],function(A,i,g){
"use strict";
g.exports={
WRAP_TAG:"span",
IMG_TAG:"IMG",
HIGHLIGHT_ID:"highlight-id",
IMG_ID:"img-id",
CAMEL_HIGHLIGHT_ID:"highlightId",
CAMEL_IMG_ID:"imgId",
NODE_TYPE:{
text:1,
img:2
},
placeHolder:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
};
});