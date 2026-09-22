(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function K2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yh={exports:{}},tu={},$h={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function cM(){if(w_)return vt;w_=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=p&&U[p]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function x(U,ne,Ie){this.props=U,this.context=ne,this.refs=w,this.updater=Ie||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=x.prototype;function P(U,ne,Ie){this.props=U,this.context=ne,this.refs=w,this.updater=Ie||S}var L=P.prototype=new y;L.constructor=P,M(L,x.prototype),L.isPureReactComponent=!0;var R=Array.isArray,j=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(U,ne,Ie){var Z,ue={},Me=null,_e=null;if(ne!=null)for(Z in ne.ref!==void 0&&(_e=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)j.call(ne,Z)&&!N.hasOwnProperty(Z)&&(ue[Z]=ne[Z]);var Ae=arguments.length-2;if(Ae===1)ue.children=Ie;else if(1<Ae){for(var Ue=Array(Ae),nt=0;nt<Ae;nt++)Ue[nt]=arguments[nt+2];ue.children=Ue}if(U&&U.defaultProps)for(Z in Ae=U.defaultProps,Ae)ue[Z]===void 0&&(ue[Z]=Ae[Z]);return{$$typeof:t,type:U,key:Me,ref:_e,props:ue,_owner:F.current}}function b(U,ne){return{$$typeof:t,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===t}function k(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return ne[Ie]})}var se=/\/+/g;function te(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):ne.toString(36)}function fe(U,ne,Ie,Z,ue){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(Me){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case t:case e:_e=!0}}if(_e)return _e=U,ue=ue(_e),U=Z===""?"."+te(_e,0):Z,R(ue)?(Ie="",U!=null&&(Ie=U.replace(se,"$&/")+"/"),fe(ue,ne,Ie,"",function(nt){return nt})):ue!=null&&(A(ue)&&(ue=b(ue,Ie+(!ue.key||_e&&_e.key===ue.key?"":(""+ue.key).replace(se,"$&/")+"/")+U)),ne.push(ue)),1;if(_e=0,Z=Z===""?".":Z+":",R(U))for(var Ae=0;Ae<U.length;Ae++){Me=U[Ae];var Ue=Z+te(Me,Ae);_e+=fe(Me,ne,Ie,Ue,ue)}else if(Ue=_(U),typeof Ue=="function")for(U=Ue.call(U),Ae=0;!(Me=U.next()).done;)Me=Me.value,Ue=Z+te(Me,Ae++),_e+=fe(Me,ne,Ie,Ue,ue);else if(Me==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(U,ne,Ie){if(U==null)return U;var Z=[],ue=0;return fe(U,Z,"","",function(Me){return ne.call(Ie,Me,ue++)}),Z}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:he,forEach:function(U,ne,Ie){he(U,function(){ne.apply(this,arguments)},Ie)},count:function(U){var ne=0;return he(U,function(){ne++}),ne},toArray:function(U){return he(U,function(ne){return ne})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},vt.Component=x,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=P,vt.StrictMode=r,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,vt.act=re,vt.cloneElement=function(U,ne,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=M({},U.props),ue=U.key,Me=U.ref,_e=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,_e=F.current),ne.key!==void 0&&(ue=""+ne.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Ue in ne)j.call(ne,Ue)&&!N.hasOwnProperty(Ue)&&(Z[Ue]=ne[Ue]===void 0&&Ae!==void 0?Ae[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ie;else if(1<Ue){Ae=Array(Ue);for(var nt=0;nt<Ue;nt++)Ae[nt]=arguments[nt+2];Z.children=Ae}return{$$typeof:t,type:U.type,key:ue,ref:Me,props:Z,_owner:_e}},vt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},vt.createElement=V,vt.createFactory=function(U){var ne=V.bind(null,U);return ne.type=U,ne},vt.createRef=function(){return{current:null}},vt.forwardRef=function(U){return{$$typeof:f,render:U}},vt.isValidElement=A,vt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:oe}},vt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},vt.startTransition=function(U){var ne=B.transition;B.transition={};try{U()}finally{B.transition=ne}},vt.unstable_act=re,vt.useCallback=function(U,ne){return le.current.useCallback(U,ne)},vt.useContext=function(U){return le.current.useContext(U)},vt.useDebugValue=function(){},vt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},vt.useEffect=function(U,ne){return le.current.useEffect(U,ne)},vt.useId=function(){return le.current.useId()},vt.useImperativeHandle=function(U,ne,Ie){return le.current.useImperativeHandle(U,ne,Ie)},vt.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},vt.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},vt.useMemo=function(U,ne){return le.current.useMemo(U,ne)},vt.useReducer=function(U,ne,Ie){return le.current.useReducer(U,ne,Ie)},vt.useRef=function(U){return le.current.useRef(U)},vt.useState=function(U){return le.current.useState(U)},vt.useSyncExternalStore=function(U,ne,Ie){return le.current.useSyncExternalStore(U,ne,Ie)},vt.useTransition=function(){return le.current.useTransition()},vt.version="18.3.1",vt}var T_;function jm(){return T_||(T_=1,$h.exports=cM()),$h.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function fM(){if(A_)return tu;A_=1;var t=jm(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,m){var v,p={},_=null,S=null;m!==void 0&&(_=""+m),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(v in d)r.call(d,v)&&!a.hasOwnProperty(v)&&(p[v]=d[v]);if(f&&f.defaultProps)for(v in d=f.defaultProps,d)p[v]===void 0&&(p[v]=d[v]);return{$$typeof:e,type:f,key:_,ref:S,props:p,_owner:o.current}}return tu.Fragment=n,tu.jsx=u,tu.jsxs=u,tu}var C_;function dM(){return C_||(C_=1,Yh.exports=fM()),Yh.exports}var we=dM(),as=jm();const fu=K2(as);var Wc={},Kh={exports:{}},pi={},Zh={exports:{}},Qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function hM(){return R_||(R_=1,(function(t){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var U=re-1>>>1,ne=B[U];if(0<o(ne,ae))B[U]=ae,B[re]=ne,re=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var U=0,ne=B.length,Ie=ne>>>1;U<Ie;){var Z=2*(U+1)-1,ue=B[Z],Me=Z+1,_e=B[Me];if(0>o(ue,re))Me<ne&&0>o(_e,ue)?(B[U]=_e,B[Me]=re,U=Me):(B[U]=ue,B[Z]=re,U=Z);else if(Me<ne&&0>o(_e,re))B[U]=_e,B[Me]=re,U=Me;else break e}}return ae}function o(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var d=[],m=[],v=1,p=null,_=3,S=!1,M=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=n(m)}}function R(B){if(w=!1,L(B),!M)if(n(d)!==null)M=!0,oe(j);else{var ae=n(m);ae!==null&&le(R,ae.startTime-B)}}function j(B,ae){M=!1,w&&(w=!1,y(V),V=-1),S=!0;var re=_;try{for(L(ae),p=n(d);p!==null&&(!(p.expirationTime>ae)||B&&!k());){var U=p.callback;if(typeof U=="function"){p.callback=null,_=p.priorityLevel;var ne=U(p.expirationTime<=ae);ae=t.unstable_now(),typeof ne=="function"?p.callback=ne:p===n(d)&&r(d),L(ae)}else r(d);p=n(d)}if(p!==null)var Ie=!0;else{var Z=n(m);Z!==null&&le(R,Z.startTime-ae),Ie=!1}return Ie}finally{p=null,_=re,S=!1}}var F=!1,N=null,V=-1,b=5,A=-1;function k(){return!(t.unstable_now()-A<b)}function se(){if(N!==null){var B=t.unstable_now();A=B;var ae=!0;try{ae=N(!0,B)}finally{ae?te():(F=!1,N=null)}}else F=!1}var te;if(typeof P=="function")te=function(){P(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=se,te=function(){he.postMessage(null)}}else te=function(){x(se,0)};function oe(B){N=B,F||(F=!0,te())}function le(B,ae){V=x(function(){B(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){M||S||(M=!0,oe(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return B()}finally{_=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=_;_=B;try{return ae()}finally{_=re}},t.unstable_scheduleCallback=function(B,ae,re){var U=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:v++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(B.sortIndex=re,e(m,B),n(d)===null&&B===n(m)&&(w?(y(V),V=-1):w=!0,le(R,re-U))):(B.sortIndex=ne,e(d,B),M||S||(M=!0,oe(j))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var ae=_;return function(){var re=_;_=ae;try{return B.apply(this,arguments)}finally{_=re}}}})(Qh)),Qh}var b_;function pM(){return b_||(b_=1,Zh.exports=hM()),Zh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function mM(){if(P_)return pi;P_=1;var t=jm(),e=pM();function n(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},p={};function _(i){return d.call(p,i)?!0:d.call(v,i)?!1:m.test(i)?p[i]=!0:(v[i]=!0,!1)}function S(i,s,l,c){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,c){if(s===null||typeof s>"u"||S(i,s,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function w(i,s,l,c,h,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new w(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new w(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new w(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new w(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new w(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new w(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new w(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new w(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new w(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,P);x[s]=new w(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,P);x[s]=new w(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,P);x[s]=new w(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new w(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new w(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,s,l,c){var h=x.hasOwnProperty(s)?x[s]:null;(h!==null?h.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,h,c)&&(l=null),c||h===null?_(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):h.mustUseProperty?i[h.propertyName]=l===null?h.type===3?!1:"":l:(s=h.attributeName,c=h.attributeNamespace,l===null?i.removeAttribute(s):(h=h.type,l=h===3||h===4&&l===!0?"":""+l,c?i.setAttributeNS(c,s,l):i.setAttribute(s,l))))}var R=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,U;function ne(i){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Ie=!1;function Z(i,s){if(!i||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Q){var c=Q}Reflect.construct(i,[],s)}else{try{s.call()}catch(Q){c=Q}i.call(s.prototype)}else{try{throw Error()}catch(Q){c=Q}i()}}catch(Q){if(Q&&c&&typeof Q.stack=="string"){for(var h=Q.stack.split(`
`),g=c.stack.split(`
`),E=h.length-1,I=g.length-1;1<=E&&0<=I&&h[E]!==g[I];)I--;for(;1<=E&&0<=I;E--,I--)if(h[E]!==g[I]){if(E!==1||I!==1)do if(E--,I--,0>I||h[E]!==g[I]){var O=`
`+h[E].replace(" at new "," at ");return i.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",i.displayName)),O}while(1<=E&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ne(i):""}function ue(i){switch(i.tag){case 5:return ne(i.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return i=Z(i.type,!1),i;case 11:return i=Z(i.type.render,!1),i;case 1:return i=Z(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case F:return"Portal";case b:return"Profiler";case V:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case A:return(i._context.displayName||"Context")+".Provider";case se:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case he:return s=i.displayName||null,s!==null?s:Me(i.type)||"Memo";case oe:s=i._payload,i=i._init;try{return Me(i(s))}catch{}}return null}function _e(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(s);case 8:return s===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function nt(i){var s=Ue(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ot(i){i._valueTracker||(i._valueTracker=nt(i))}function xt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Ue(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Ht(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function X(i,s){var l=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Qn(i,s){var l=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;l=Ae(s.value!=null?s.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function _t(i,s){s=s.checked,s!=null&&L(i,"checked",s,!1)}function mt(i,s){_t(i,s);var l=Ae(s.value),c=s.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Nt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Nt(i,s.type,Ae(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Je(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Nt(i,s,l){(s!=="number"||Ht(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Ze=Array.isArray;function D(i,s,l,c){if(i=i.options,s){s={};for(var h=0;h<l.length;h++)s["$"+l[h]]=!0;for(l=0;l<i.length;l++)h=s.hasOwnProperty("$"+i[l].value),i[l].selected!==h&&(i[l].selected=h),h&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Ae(l),s=null,h=0;h<i.length;h++){if(i[h].value===l){i[h].selected=!0,c&&(i[h].defaultSelected=!0);return}s!==null||i[h].disabled||(s=i[h])}s!==null&&(s.selected=!0)}}function T(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function K(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(n(92));if(Ze(l)){if(1<l.length)throw Error(n(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ae(l)}}function pe(i,s){var l=Ae(s.value),c=Ae(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function ge(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function ce(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?ce(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Ne=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,c,h){MSApp.execUnsafeLocalFunction(function(){return i(s,l,c,h)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function pt(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(i){Oe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),xe[s]=xe[i]})});function it(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||xe.hasOwnProperty(i)&&xe[i]?(""+s).trim():s+"px"}function st(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var c=l.indexOf("--")===0,h=it(l,s[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,h):i[l]=h}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(i,s){if(s){if(ke[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function ut(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ut=null;function H(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,ie=null,de=null;function Le(i){if(i=zl(i)){if(typeof Re!="function")throw Error(n(280));var s=i.stateNode;s&&(s=sc(s),Re(i.stateNode,i.type,s))}}function Pe(i){ie?de?de.push(i):de=[i]:ie=i}function ct(){if(ie){var i=ie,s=de;if(de=ie=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Wt(i,s){return i(s)}function vn(){}var Tt=!1;function ai(i,s,l){if(Tt)return i(s,l);Tt=!0;try{return Wt(i,s,l)}finally{Tt=!1,(ie!==null||de!==null)&&(vn(),ct())}}function Jn(i,s){var l=i.stateNode;if(l===null)return null;var c=sc(l);if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(n(231,s,typeof l));return l}var qo=!1;if(f)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){qo=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{qo=!1}function Hr(i,s,l,c,h,g,E,I,O){var Q=Array.prototype.slice.call(arguments,3);try{s.apply(l,Q)}catch(ve){this.onError(ve)}}var Gr=!1,no=null,io=!1,gs=null,Bu={onError:function(i){Gr=!0,no=i}};function Yo(i,s,l,c,h,g,E,I,O){Gr=!1,no=null,Hr.apply(Bu,arguments)}function zu(i,s,l,c,h,g,E,I,O){if(Yo.apply(this,arguments),Gr){if(Gr){var Q=no;Gr=!1,no=null}else throw Error(n(198));io||(io=!0,gs=Q)}}function wr(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Vu(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Hu(i){if(wr(i)!==i)throw Error(n(188))}function gd(i){var s=i.alternate;if(!s){if(s=wr(i),s===null)throw Error(n(188));return s!==i?null:i}for(var l=i,c=s;;){var h=l.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){l=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===l)return Hu(h),i;if(g===c)return Hu(h),s;g=g.sibling}throw Error(n(188))}if(l.return!==c.return)l=h,c=g;else{for(var E=!1,I=h.child;I;){if(I===l){E=!0,l=h,c=g;break}if(I===c){E=!0,c=h,l=g;break}I=I.sibling}if(!E){for(I=g.child;I;){if(I===l){E=!0,l=g,c=h;break}if(I===c){E=!0,c=g,l=h;break}I=I.sibling}if(!E)throw Error(n(189))}}if(l.alternate!==c)throw Error(n(190))}if(l.tag!==3)throw Error(n(188));return l.stateNode.current===l?i:s}function C(i){return i=gd(i),i!==null?G(i):null}function G(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=G(i);if(s!==null)return s;i=i.sibling}return null}var J=e.unstable_scheduleCallback,ee=e.unstable_cancelCallback,W=e.unstable_shouldYield,Te=e.unstable_requestPaint,Se=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,ot=e.unstable_UserBlockingPriority,lt=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,Mt=e.unstable_IdlePriority,Dt=null,St=null;function kn(i){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Dt,i,void 0,(i.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:bt,qe=Math.log,ar=Math.LN2;function bt(i){return i>>>=0,i===0?32:31-(qe(i)/ar|0)|0}var Bn=64,lr=4194304;function _n(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Tr(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,h=i.suspendedLanes,g=i.pingedLanes,E=l&268435455;if(E!==0){var I=E&~h;I!==0?c=_n(I):(g&=E,g!==0&&(c=_n(g)))}else E=l&~h,E!==0?c=_n(E):g!==0&&(c=_n(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&h)===0&&(h=c&-c,g=s&-s,h>=g||h===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)l=31-ft(s),h=1<<l,c|=i[l],s&=~h;return c}function zt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hi(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,h=i.expirationTimes,g=i.pendingLanes;0<g;){var E=31-ft(g),I=1<<E,O=h[E];O===-1?((I&l)===0||(I&c)!==0)&&(h[E]=zt(I,s)):O<=s&&(i.expiredLanes|=I),g&=~I}}function Wr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ei(){var i=Bn;return Bn<<=1,(Bn&4194240)===0&&(Bn=64),i}function Gi(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function li(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-ft(s),i[s]=l}function Gu(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var h=31-ft(l),g=1<<h;s[h]=0,c[h]=-1,i[h]=-1,l&=~g}}function vd(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-ft(l),h=1<<c;h&s|i[c]&s&&(i[c]|=s),l&=~h}}var Ft=0;function n0(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var i0,_d,r0,s0,o0,yd=!1,Wu=[],vs=null,_s=null,ys=null,wl=new Map,Tl=new Map,xs=[],D3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function a0(i,s){switch(i){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":wl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(s.pointerId)}}function Al(i,s,l,c,h,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},s!==null&&(s=zl(s),s!==null&&_d(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),i)}function I3(i,s,l,c,h){switch(s){case"focusin":return vs=Al(vs,i,s,l,c,h),!0;case"dragenter":return _s=Al(_s,i,s,l,c,h),!0;case"mouseover":return ys=Al(ys,i,s,l,c,h),!0;case"pointerover":var g=h.pointerId;return wl.set(g,Al(wl.get(g)||null,i,s,l,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Tl.set(g,Al(Tl.get(g)||null,i,s,l,c,h)),!0}return!1}function l0(i){var s=ro(i.target);if(s!==null){var l=wr(s);if(l!==null){if(s=l.tag,s===13){if(s=Vu(l),s!==null){i.blockedOn=s,o0(i.priority,function(){r0(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Xu(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Sd(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);Ut=c,l.target.dispatchEvent(c),Ut=null}else return s=zl(l),s!==null&&_d(s),i.blockedOn=l,!1;s.shift()}return!0}function u0(i,s,l){Xu(i)&&l.delete(s)}function U3(){yd=!1,vs!==null&&Xu(vs)&&(vs=null),_s!==null&&Xu(_s)&&(_s=null),ys!==null&&Xu(ys)&&(ys=null),wl.forEach(u0),Tl.forEach(u0)}function Cl(i,s){i.blockedOn===s&&(i.blockedOn=null,yd||(yd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,U3)))}function Rl(i){function s(h){return Cl(h,i)}if(0<Wu.length){Cl(Wu[0],i);for(var l=1;l<Wu.length;l++){var c=Wu[l];c.blockedOn===i&&(c.blockedOn=null)}}for(vs!==null&&Cl(vs,i),_s!==null&&Cl(_s,i),ys!==null&&Cl(ys,i),wl.forEach(s),Tl.forEach(s),l=0;l<xs.length;l++)c=xs[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<xs.length&&(l=xs[0],l.blockedOn===null);)l0(l),l.blockedOn===null&&xs.shift()}var $o=R.ReactCurrentBatchConfig,ju=!0;function N3(i,s,l,c){var h=Ft,g=$o.transition;$o.transition=null;try{Ft=1,xd(i,s,l,c)}finally{Ft=h,$o.transition=g}}function F3(i,s,l,c){var h=Ft,g=$o.transition;$o.transition=null;try{Ft=4,xd(i,s,l,c)}finally{Ft=h,$o.transition=g}}function xd(i,s,l,c){if(ju){var h=Sd(i,s,l,c);if(h===null)kd(i,s,c,qu,l),a0(i,c);else if(I3(h,i,s,l,c))c.stopPropagation();else if(a0(i,c),s&4&&-1<D3.indexOf(i)){for(;h!==null;){var g=zl(h);if(g!==null&&i0(g),g=Sd(i,s,l,c),g===null&&kd(i,s,c,qu,l),g===h)break;h=g}h!==null&&c.stopPropagation()}else kd(i,s,c,null,l)}}var qu=null;function Sd(i,s,l,c){if(qu=null,i=H(c),i=ro(i),i!==null)if(s=wr(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Vu(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return qu=i,null}function c0(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ve:return 1;case ot:return 4;case lt:case Xe:return 16;case Mt:return 536870912;default:return 16}default:return 16}}var Ss=null,Md=null,Yu=null;function f0(){if(Yu)return Yu;var i,s=Md,l=s.length,c,h="value"in Ss?Ss.value:Ss.textContent,g=h.length;for(i=0;i<l&&s[i]===h[i];i++);var E=l-i;for(c=1;c<=E&&s[l-c]===h[g-c];c++);return Yu=h.slice(i,1<c?1-c:void 0)}function $u(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Ku(){return!0}function d0(){return!1}function Ei(i){function s(l,c,h,g,E){this._reactName=l,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(l=i[I],this[I]=l?l(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ku:d0,this.isPropagationStopped=d0,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ku)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ku)},persist:function(){},isPersistent:Ku}),s}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=Ei(Ko),bl=re({},Ko,{view:0,detail:0}),O3=Ei(bl),wd,Td,Pl,Zu=re({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Pl&&(Pl&&i.type==="mousemove"?(wd=i.screenX-Pl.screenX,Td=i.screenY-Pl.screenY):Td=wd=0,Pl=i),wd)},movementY:function(i){return"movementY"in i?i.movementY:Td}}),h0=Ei(Zu),k3=re({},Zu,{dataTransfer:0}),B3=Ei(k3),z3=re({},bl,{relatedTarget:0}),Ad=Ei(z3),V3=re({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),H3=Ei(V3),G3=re({},Ko,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),W3=Ei(G3),X3=re({},Ko,{data:0}),p0=Ei(X3),j3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $3(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Y3[i])?!!s[i]:!1}function Cd(){return $3}var K3=re({},bl,{key:function(i){if(i.key){var s=j3[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=$u(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?q3[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(i){return i.type==="keypress"?$u(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?$u(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Z3=Ei(K3),Q3=re({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),m0=Ei(Q3),J3=re({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),eS=Ei(J3),tS=re({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=Ei(tS),iS=re({},Zu,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Ei(iS),sS=[9,13,27,32],Rd=f&&"CompositionEvent"in window,Ll=null;f&&"documentMode"in document&&(Ll=document.documentMode);var oS=f&&"TextEvent"in window&&!Ll,g0=f&&(!Rd||Ll&&8<Ll&&11>=Ll),v0=" ",_0=!1;function y0(i,s){switch(i){case"keyup":return sS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Zo=!1;function aS(i,s){switch(i){case"compositionend":return x0(s);case"keypress":return s.which!==32?null:(_0=!0,v0);case"textInput":return i=s.data,i===v0&&_0?null:i;default:return null}}function lS(i,s){if(Zo)return i==="compositionend"||!Rd&&y0(i,s)?(i=f0(),Yu=Md=Ss=null,Zo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return g0&&s.locale!=="ko"?null:s.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!uS[i.type]:s==="textarea"}function M0(i,s,l,c){Pe(c),s=nc(s,"onChange"),0<s.length&&(l=new Ed("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var Dl=null,Il=null;function cS(i){z0(i,0)}function Qu(i){var s=na(i);if(xt(s))return i}function fS(i,s){if(i==="change")return s}var E0=!1;if(f){var bd;if(f){var Pd="oninput"in document;if(!Pd){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),Pd=typeof w0.oninput=="function"}bd=Pd}else bd=!1;E0=bd&&(!document.documentMode||9<document.documentMode)}function T0(){Dl&&(Dl.detachEvent("onpropertychange",A0),Il=Dl=null)}function A0(i){if(i.propertyName==="value"&&Qu(Il)){var s=[];M0(s,Il,i,H(i)),ai(cS,s)}}function dS(i,s,l){i==="focusin"?(T0(),Dl=s,Il=l,Dl.attachEvent("onpropertychange",A0)):i==="focusout"&&T0()}function hS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Qu(Il)}function pS(i,s){if(i==="click")return Qu(s)}function mS(i,s){if(i==="input"||i==="change")return Qu(s)}function gS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var ur=typeof Object.is=="function"?Object.is:gS;function Ul(i,s){if(ur(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var h=l[c];if(!d.call(s,h)||!ur(i[h],s[h]))return!1}return!0}function C0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function R0(i,s){var l=C0(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=C0(l)}}function b0(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?b0(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function P0(){for(var i=window,s=Ht();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Ht(i.document)}return s}function Ld(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function vS(i){var s=P0(),l=i.focusedElem,c=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&b0(l.ownerDocument.documentElement,l)){if(c!==null&&Ld(l)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var h=l.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!i.extend&&g>c&&(h=c,c=g,g=h),h=R0(l,g);var E=R0(l,c);h&&E&&(i.rangeCount!==1||i.anchorNode!==h.node||i.anchorOffset!==h.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),i.removeAllRanges(),g>c?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var _S=f&&"documentMode"in document&&11>=document.documentMode,Qo=null,Dd=null,Nl=null,Id=!1;function L0(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Id||Qo==null||Qo!==Ht(c)||(c=Qo,"selectionStart"in c&&Ld(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Nl&&Ul(Nl,c)||(Nl=c,c=nc(Dd,"onSelect"),0<c.length&&(s=new Ed("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=Qo)))}function Ju(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Jo={animationend:Ju("Animation","AnimationEnd"),animationiteration:Ju("Animation","AnimationIteration"),animationstart:Ju("Animation","AnimationStart"),transitionend:Ju("Transition","TransitionEnd")},Ud={},D0={};f&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function ec(i){if(Ud[i])return Ud[i];if(!Jo[i])return i;var s=Jo[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in D0)return Ud[i]=s[l];return i}var I0=ec("animationend"),U0=ec("animationiteration"),N0=ec("animationstart"),F0=ec("transitionend"),O0=new Map,k0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ms(i,s){O0.set(i,s),a(s,[i])}for(var Nd=0;Nd<k0.length;Nd++){var Fd=k0[Nd],yS=Fd.toLowerCase(),xS=Fd[0].toUpperCase()+Fd.slice(1);Ms(yS,"on"+xS)}Ms(I0,"onAnimationEnd"),Ms(U0,"onAnimationIteration"),Ms(N0,"onAnimationStart"),Ms("dblclick","onDoubleClick"),Ms("focusin","onFocus"),Ms("focusout","onBlur"),Ms(F0,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fl));function B0(i,s,l){var c=i.type||"unknown-event";i.currentTarget=l,zu(c,s,void 0,i),i.currentTarget=null}function z0(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],h=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var E=c.length-1;0<=E;E--){var I=c[E],O=I.instance,Q=I.currentTarget;if(I=I.listener,O!==g&&h.isPropagationStopped())break e;B0(h,I,Q),g=O}else for(E=0;E<c.length;E++){if(I=c[E],O=I.instance,Q=I.currentTarget,I=I.listener,O!==g&&h.isPropagationStopped())break e;B0(h,I,Q),g=O}}}if(io)throw i=gs,io=!1,gs=null,i}function Xt(i,s){var l=s[Wd];l===void 0&&(l=s[Wd]=new Set);var c=i+"__bubble";l.has(c)||(V0(s,i,2,!1),l.add(c))}function Od(i,s,l){var c=0;s&&(c|=4),V0(l,i,c,s)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Ol(i){if(!i[tc]){i[tc]=!0,r.forEach(function(l){l!=="selectionchange"&&(SS.has(l)||Od(l,!1,i),Od(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[tc]||(s[tc]=!0,Od("selectionchange",!1,s))}}function V0(i,s,l,c){switch(c0(s)){case 1:var h=N3;break;case 4:h=F3;break;default:h=xd}l=h.bind(null,s,l,i),h=void 0,!qo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),c?h!==void 0?i.addEventListener(s,l,{capture:!0,passive:h}):i.addEventListener(s,l,!0):h!==void 0?i.addEventListener(s,l,{passive:h}):i.addEventListener(s,l,!1)}function kd(i,s,l,c,h){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===h||O.nodeType===8&&O.parentNode===h))return;E=E.return}for(;I!==null;){if(E=ro(I),E===null)return;if(O=E.tag,O===5||O===6){c=g=E;continue e}I=I.parentNode}}c=c.return}ai(function(){var Q=g,ve=H(l),ye=[];e:{var me=O0.get(i);if(me!==void 0){var De=Ed,Be=i;switch(i){case"keypress":if($u(l)===0)break e;case"keydown":case"keyup":De=Z3;break;case"focusin":Be="focus",De=Ad;break;case"focusout":Be="blur",De=Ad;break;case"beforeblur":case"afterblur":De=Ad;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=h0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=B3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=eS;break;case I0:case U0:case N0:De=H3;break;case F0:De=nS;break;case"scroll":De=O3;break;case"wheel":De=rS;break;case"copy":case"cut":case"paste":De=W3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=m0}var He=(s&4)!==0,un=!He&&i==="scroll",q=He?me!==null?me+"Capture":null:me;He=[];for(var z=Q,Y;z!==null;){Y=z;var Ee=Y.stateNode;if(Y.tag===5&&Ee!==null&&(Y=Ee,q!==null&&(Ee=Jn(z,q),Ee!=null&&He.push(kl(z,Ee,Y)))),un)break;z=z.return}0<He.length&&(me=new De(me,Be,null,l,ve),ye.push({event:me,listeners:He}))}}if((s&7)===0){e:{if(me=i==="mouseover"||i==="pointerover",De=i==="mouseout"||i==="pointerout",me&&l!==Ut&&(Be=l.relatedTarget||l.fromElement)&&(ro(Be)||Be[Xr]))break e;if((De||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,De?(Be=l.relatedTarget||l.toElement,De=Q,Be=Be?ro(Be):null,Be!==null&&(un=wr(Be),Be!==un||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=Q),De!==Be)){if(He=h0,Ee="onMouseLeave",q="onMouseEnter",z="mouse",(i==="pointerout"||i==="pointerover")&&(He=m0,Ee="onPointerLeave",q="onPointerEnter",z="pointer"),un=De==null?me:na(De),Y=Be==null?me:na(Be),me=new He(Ee,z+"leave",De,l,ve),me.target=un,me.relatedTarget=Y,Ee=null,ro(ve)===Q&&(He=new He(q,z+"enter",Be,l,ve),He.target=Y,He.relatedTarget=un,Ee=He),un=Ee,De&&Be)t:{for(He=De,q=Be,z=0,Y=He;Y;Y=ea(Y))z++;for(Y=0,Ee=q;Ee;Ee=ea(Ee))Y++;for(;0<z-Y;)He=ea(He),z--;for(;0<Y-z;)q=ea(q),Y--;for(;z--;){if(He===q||q!==null&&He===q.alternate)break t;He=ea(He),q=ea(q)}He=null}else He=null;De!==null&&H0(ye,me,De,He,!1),Be!==null&&un!==null&&H0(ye,un,Be,He,!0)}}e:{if(me=Q?na(Q):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var je=fS;else if(S0(me))if(E0)je=mS;else{je=hS;var et=dS}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(je=pS);if(je&&(je=je(i,Q))){M0(ye,je,l,ve);break e}et&&et(i,me,Q),i==="focusout"&&(et=me._wrapperState)&&et.controlled&&me.type==="number"&&Nt(me,"number",me.value)}switch(et=Q?na(Q):window,i){case"focusin":(S0(et)||et.contentEditable==="true")&&(Qo=et,Dd=Q,Nl=null);break;case"focusout":Nl=Dd=Qo=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,L0(ye,l,ve);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":L0(ye,l,ve)}var tt;if(Rd)e:{switch(i){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Zo?y0(i,l)&&(at="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(g0&&l.locale!=="ko"&&(Zo||at!=="onCompositionStart"?at==="onCompositionEnd"&&Zo&&(tt=f0()):(Ss=ve,Md="value"in Ss?Ss.value:Ss.textContent,Zo=!0)),et=nc(Q,at),0<et.length&&(at=new p0(at,i,null,l,ve),ye.push({event:at,listeners:et}),tt?at.data=tt:(tt=x0(l),tt!==null&&(at.data=tt)))),(tt=oS?aS(i,l):lS(i,l))&&(Q=nc(Q,"onBeforeInput"),0<Q.length&&(ve=new p0("onBeforeInput","beforeinput",null,l,ve),ye.push({event:ve,listeners:Q}),ve.data=tt))}z0(ye,s)})}function kl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function nc(i,s){for(var l=s+"Capture",c=[];i!==null;){var h=i,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Jn(i,l),g!=null&&c.unshift(kl(i,g,h)),g=Jn(i,s),g!=null&&c.push(kl(i,g,h))),i=i.return}return c}function ea(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function H0(i,s,l,c,h){for(var g=s._reactName,E=[];l!==null&&l!==c;){var I=l,O=I.alternate,Q=I.stateNode;if(O!==null&&O===c)break;I.tag===5&&Q!==null&&(I=Q,h?(O=Jn(l,g),O!=null&&E.unshift(kl(l,O,I))):h||(O=Jn(l,g),O!=null&&E.push(kl(l,O,I)))),l=l.return}E.length!==0&&i.push({event:s,listeners:E})}var MS=/\r\n?/g,ES=/\u0000|\uFFFD/g;function G0(i){return(typeof i=="string"?i:""+i).replace(MS,`
`).replace(ES,"")}function ic(i,s,l){if(s=G0(s),G0(i)!==s&&l)throw Error(n(425))}function rc(){}var Bd=null,zd=null;function Vd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(i){return W0.resolve(null).then(i).catch(AS)}:Hd;function AS(i){setTimeout(function(){throw i})}function Gd(i,s){var l=s,c=0;do{var h=l.nextSibling;if(i.removeChild(l),h&&h.nodeType===8)if(l=h.data,l==="/$"){if(c===0){i.removeChild(h),Rl(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=h}while(l);Rl(s)}function Es(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function X0(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var ta=Math.random().toString(36).slice(2),Ar="__reactFiber$"+ta,Bl="__reactProps$"+ta,Xr="__reactContainer$"+ta,Wd="__reactEvents$"+ta,CS="__reactListeners$"+ta,RS="__reactHandles$"+ta;function ro(i){var s=i[Ar];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Xr]||l[Ar]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=X0(i);i!==null;){if(l=i[Ar])return l;i=X0(i)}return s}i=l,l=i.parentNode}return null}function zl(i){return i=i[Ar]||i[Xr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function na(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function sc(i){return i[Bl]||null}var Xd=[],ia=-1;function ws(i){return{current:i}}function jt(i){0>ia||(i.current=Xd[ia],Xd[ia]=null,ia--)}function Gt(i,s){ia++,Xd[ia]=i.current,i.current=s}var Ts={},zn=ws(Ts),ui=ws(!1),so=Ts;function ra(i,s){var l=i.type.contextTypes;if(!l)return Ts;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in l)h[g]=s[g];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=h),h}function ci(i){return i=i.childContextTypes,i!=null}function oc(){jt(ui),jt(zn)}function j0(i,s,l){if(zn.current!==Ts)throw Error(n(168));Gt(zn,s),Gt(ui,l)}function q0(i,s,l){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var h in c)if(!(h in s))throw Error(n(108,_e(i)||"Unknown",h));return re({},l,c)}function ac(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ts,so=zn.current,Gt(zn,i),Gt(ui,ui.current),!0}function Y0(i,s,l){var c=i.stateNode;if(!c)throw Error(n(169));l?(i=q0(i,s,so),c.__reactInternalMemoizedMergedChildContext=i,jt(ui),jt(zn),Gt(zn,i)):jt(ui),Gt(ui,l)}var jr=null,lc=!1,jd=!1;function $0(i){jr===null?jr=[i]:jr.push(i)}function bS(i){lc=!0,$0(i)}function As(){if(!jd&&jr!==null){jd=!0;var i=0,s=Ft;try{var l=jr;for(Ft=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}jr=null,lc=!1}catch(h){throw jr!==null&&(jr=jr.slice(i+1)),J(Ve,As),h}finally{Ft=s,jd=!1}}return null}var sa=[],oa=0,uc=null,cc=0,Wi=[],Xi=0,oo=null,qr=1,Yr="";function ao(i,s){sa[oa++]=cc,sa[oa++]=uc,uc=i,cc=s}function K0(i,s,l){Wi[Xi++]=qr,Wi[Xi++]=Yr,Wi[Xi++]=oo,oo=i;var c=qr;i=Yr;var h=32-ft(c)-1;c&=~(1<<h),l+=1;var g=32-ft(s)+h;if(30<g){var E=h-h%5;g=(c&(1<<E)-1).toString(32),c>>=E,h-=E,qr=1<<32-ft(s)+h|l<<h|c,Yr=g+i}else qr=1<<g|l<<h|c,Yr=i}function qd(i){i.return!==null&&(ao(i,1),K0(i,1,0))}function Yd(i){for(;i===uc;)uc=sa[--oa],sa[oa]=null,cc=sa[--oa],sa[oa]=null;for(;i===oo;)oo=Wi[--Xi],Wi[Xi]=null,Yr=Wi[--Xi],Wi[Xi]=null,qr=Wi[--Xi],Wi[Xi]=null}var wi=null,Ti=null,Yt=!1,cr=null;function Z0(i,s){var l=$i(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Q0(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,wi=i,Ti=Es(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,wi=i,Ti=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=oo!==null?{id:qr,overflow:Yr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=$i(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,wi=i,Ti=null,!0):!1;default:return!1}}function $d(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Kd(i){if(Yt){var s=Ti;if(s){var l=s;if(!Q0(i,s)){if($d(i))throw Error(n(418));s=Es(l.nextSibling);var c=wi;s&&Q0(i,s)?Z0(c,l):(i.flags=i.flags&-4097|2,Yt=!1,wi=i)}}else{if($d(i))throw Error(n(418));i.flags=i.flags&-4097|2,Yt=!1,wi=i}}}function J0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;wi=i}function fc(i){if(i!==wi)return!1;if(!Yt)return J0(i),Yt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Vd(i.type,i.memoizedProps)),s&&(s=Ti)){if($d(i))throw ev(),Error(n(418));for(;s;)Z0(i,s),s=Es(s.nextSibling)}if(J0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Ti=Es(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Ti=null}}else Ti=wi?Es(i.stateNode.nextSibling):null;return!0}function ev(){for(var i=Ti;i;)i=Es(i.nextSibling)}function aa(){Ti=wi=null,Yt=!1}function Zd(i){cr===null?cr=[i]:cr.push(i)}var PS=R.ReactCurrentBatchConfig;function Vl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(n(309));var c=l.stateNode}if(!c)throw Error(n(147,i));var h=c,g=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var I=h.refs;E===null?delete I[g]:I[g]=E},s._stringRef=g,s)}if(typeof i!="string")throw Error(n(284));if(!l._owner)throw Error(n(290,i))}return i}function dc(i,s){throw i=Object.prototype.toString.call(s),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function tv(i){var s=i._init;return s(i._payload)}function nv(i){function s(q,z){if(i){var Y=q.deletions;Y===null?(q.deletions=[z],q.flags|=16):Y.push(z)}}function l(q,z){if(!i)return null;for(;z!==null;)s(q,z),z=z.sibling;return null}function c(q,z){for(q=new Map;z!==null;)z.key!==null?q.set(z.key,z):q.set(z.index,z),z=z.sibling;return q}function h(q,z){return q=Us(q,z),q.index=0,q.sibling=null,q}function g(q,z,Y){return q.index=Y,i?(Y=q.alternate,Y!==null?(Y=Y.index,Y<z?(q.flags|=2,z):Y):(q.flags|=2,z)):(q.flags|=1048576,z)}function E(q){return i&&q.alternate===null&&(q.flags|=2),q}function I(q,z,Y,Ee){return z===null||z.tag!==6?(z=Hh(Y,q.mode,Ee),z.return=q,z):(z=h(z,Y),z.return=q,z)}function O(q,z,Y,Ee){var je=Y.type;return je===N?ve(q,z,Y.props.children,Ee,Y.key):z!==null&&(z.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&tv(je)===z.type)?(Ee=h(z,Y.props),Ee.ref=Vl(q,z,Y),Ee.return=q,Ee):(Ee=Fc(Y.type,Y.key,Y.props,null,q.mode,Ee),Ee.ref=Vl(q,z,Y),Ee.return=q,Ee)}function Q(q,z,Y,Ee){return z===null||z.tag!==4||z.stateNode.containerInfo!==Y.containerInfo||z.stateNode.implementation!==Y.implementation?(z=Gh(Y,q.mode,Ee),z.return=q,z):(z=h(z,Y.children||[]),z.return=q,z)}function ve(q,z,Y,Ee,je){return z===null||z.tag!==7?(z=go(Y,q.mode,Ee,je),z.return=q,z):(z=h(z,Y),z.return=q,z)}function ye(q,z,Y){if(typeof z=="string"&&z!==""||typeof z=="number")return z=Hh(""+z,q.mode,Y),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case j:return Y=Fc(z.type,z.key,z.props,null,q.mode,Y),Y.ref=Vl(q,null,z),Y.return=q,Y;case F:return z=Gh(z,q.mode,Y),z.return=q,z;case oe:var Ee=z._init;return ye(q,Ee(z._payload),Y)}if(Ze(z)||ae(z))return z=go(z,q.mode,Y,null),z.return=q,z;dc(q,z)}return null}function me(q,z,Y,Ee){var je=z!==null?z.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return je!==null?null:I(q,z,""+Y,Ee);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case j:return Y.key===je?O(q,z,Y,Ee):null;case F:return Y.key===je?Q(q,z,Y,Ee):null;case oe:return je=Y._init,me(q,z,je(Y._payload),Ee)}if(Ze(Y)||ae(Y))return je!==null?null:ve(q,z,Y,Ee,null);dc(q,Y)}return null}function De(q,z,Y,Ee,je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(Y)||null,I(z,q,""+Ee,je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case j:return q=q.get(Ee.key===null?Y:Ee.key)||null,O(z,q,Ee,je);case F:return q=q.get(Ee.key===null?Y:Ee.key)||null,Q(z,q,Ee,je);case oe:var et=Ee._init;return De(q,z,Y,et(Ee._payload),je)}if(Ze(Ee)||ae(Ee))return q=q.get(Y)||null,ve(z,q,Ee,je,null);dc(z,Ee)}return null}function Be(q,z,Y,Ee){for(var je=null,et=null,tt=z,at=z=0,bn=null;tt!==null&&at<Y.length;at++){tt.index>at?(bn=tt,tt=null):bn=tt.sibling;var Pt=me(q,tt,Y[at],Ee);if(Pt===null){tt===null&&(tt=bn);break}i&&tt&&Pt.alternate===null&&s(q,tt),z=g(Pt,z,at),et===null?je=Pt:et.sibling=Pt,et=Pt,tt=bn}if(at===Y.length)return l(q,tt),Yt&&ao(q,at),je;if(tt===null){for(;at<Y.length;at++)tt=ye(q,Y[at],Ee),tt!==null&&(z=g(tt,z,at),et===null?je=tt:et.sibling=tt,et=tt);return Yt&&ao(q,at),je}for(tt=c(q,tt);at<Y.length;at++)bn=De(tt,q,at,Y[at],Ee),bn!==null&&(i&&bn.alternate!==null&&tt.delete(bn.key===null?at:bn.key),z=g(bn,z,at),et===null?je=bn:et.sibling=bn,et=bn);return i&&tt.forEach(function(Ns){return s(q,Ns)}),Yt&&ao(q,at),je}function He(q,z,Y,Ee){var je=ae(Y);if(typeof je!="function")throw Error(n(150));if(Y=je.call(Y),Y==null)throw Error(n(151));for(var et=je=null,tt=z,at=z=0,bn=null,Pt=Y.next();tt!==null&&!Pt.done;at++,Pt=Y.next()){tt.index>at?(bn=tt,tt=null):bn=tt.sibling;var Ns=me(q,tt,Pt.value,Ee);if(Ns===null){tt===null&&(tt=bn);break}i&&tt&&Ns.alternate===null&&s(q,tt),z=g(Ns,z,at),et===null?je=Ns:et.sibling=Ns,et=Ns,tt=bn}if(Pt.done)return l(q,tt),Yt&&ao(q,at),je;if(tt===null){for(;!Pt.done;at++,Pt=Y.next())Pt=ye(q,Pt.value,Ee),Pt!==null&&(z=g(Pt,z,at),et===null?je=Pt:et.sibling=Pt,et=Pt);return Yt&&ao(q,at),je}for(tt=c(q,tt);!Pt.done;at++,Pt=Y.next())Pt=De(tt,q,at,Pt.value,Ee),Pt!==null&&(i&&Pt.alternate!==null&&tt.delete(Pt.key===null?at:Pt.key),z=g(Pt,z,at),et===null?je=Pt:et.sibling=Pt,et=Pt);return i&&tt.forEach(function(uM){return s(q,uM)}),Yt&&ao(q,at),je}function un(q,z,Y,Ee){if(typeof Y=="object"&&Y!==null&&Y.type===N&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case j:e:{for(var je=Y.key,et=z;et!==null;){if(et.key===je){if(je=Y.type,je===N){if(et.tag===7){l(q,et.sibling),z=h(et,Y.props.children),z.return=q,q=z;break e}}else if(et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&tv(je)===et.type){l(q,et.sibling),z=h(et,Y.props),z.ref=Vl(q,et,Y),z.return=q,q=z;break e}l(q,et);break}else s(q,et);et=et.sibling}Y.type===N?(z=go(Y.props.children,q.mode,Ee,Y.key),z.return=q,q=z):(Ee=Fc(Y.type,Y.key,Y.props,null,q.mode,Ee),Ee.ref=Vl(q,z,Y),Ee.return=q,q=Ee)}return E(q);case F:e:{for(et=Y.key;z!==null;){if(z.key===et)if(z.tag===4&&z.stateNode.containerInfo===Y.containerInfo&&z.stateNode.implementation===Y.implementation){l(q,z.sibling),z=h(z,Y.children||[]),z.return=q,q=z;break e}else{l(q,z);break}else s(q,z);z=z.sibling}z=Gh(Y,q.mode,Ee),z.return=q,q=z}return E(q);case oe:return et=Y._init,un(q,z,et(Y._payload),Ee)}if(Ze(Y))return Be(q,z,Y,Ee);if(ae(Y))return He(q,z,Y,Ee);dc(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,z!==null&&z.tag===6?(l(q,z.sibling),z=h(z,Y),z.return=q,q=z):(l(q,z),z=Hh(Y,q.mode,Ee),z.return=q,q=z),E(q)):l(q,z)}return un}var la=nv(!0),iv=nv(!1),hc=ws(null),pc=null,ua=null,Qd=null;function Jd(){Qd=ua=pc=null}function eh(i){var s=hc.current;jt(hc),i._currentValue=s}function th(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function ca(i,s){pc=i,Qd=ua=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(fi=!0),i.firstContext=null)}function ji(i){var s=i._currentValue;if(Qd!==i)if(i={context:i,memoizedValue:s,next:null},ua===null){if(pc===null)throw Error(n(308));ua=i,pc.dependencies={lanes:0,firstContext:i}}else ua=ua.next=i;return s}var lo=null;function nh(i){lo===null?lo=[i]:lo.push(i)}function rv(i,s,l,c){var h=s.interleaved;return h===null?(l.next=l,nh(s)):(l.next=h.next,h.next=l),s.interleaved=l,$r(i,c)}function $r(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Cs=!1;function ih(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sv(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Kr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Rs(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(At&2)!==0){var h=c.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s,$r(i,l)}return h=c.interleaved,h===null?(s.next=s,nh(c)):(s.next=h.next,h.next=s),c.interleaved=s,$r(i,l)}function mc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,vd(i,l)}}function ov(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var h=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?h=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?h=g=s:g=g.next=s}else h=g=s;l={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function gc(i,s,l,c){var h=i.updateQueue;Cs=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var O=I,Q=O.next;O.next=null,E===null?g=Q:E.next=Q,E=O;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==E&&(I===null?ve.firstBaseUpdate=Q:I.next=Q,ve.lastBaseUpdate=O))}if(g!==null){var ye=h.baseState;E=0,ve=Q=O=null,I=g;do{var me=I.lane,De=I.eventTime;if((c&me)===me){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=i,He=I;switch(me=s,De=l,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ye=Be.call(De,ye,me);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,me=typeof Be=="function"?Be.call(De,ye,me):Be,me==null)break e;ye=re({},ye,me);break e;case 2:Cs=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,me=h.effects,me===null?h.effects=[I]:me.push(I))}else De={eventTime:De,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(Q=ve=De,O=ye):ve=ve.next=De,E|=me;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;me=I,I=me.next,me.next=null,h.lastBaseUpdate=me,h.shared.pending=null}}while(!0);if(ve===null&&(O=ye),h.baseState=O,h.firstBaseUpdate=Q,h.lastBaseUpdate=ve,s=h.shared.interleaved,s!==null){h=s;do E|=h.lane,h=h.next;while(h!==s)}else g===null&&(h.shared.lanes=0);fo|=E,i.lanes=E,i.memoizedState=ye}}function av(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],h=c.callback;if(h!==null){if(c.callback=null,c=l,typeof h!="function")throw Error(n(191,h));h.call(c)}}}var Hl={},Cr=ws(Hl),Gl=ws(Hl),Wl=ws(Hl);function uo(i){if(i===Hl)throw Error(n(174));return i}function rh(i,s){switch(Gt(Wl,s),Gt(Gl,i),Gt(Cr,Hl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ge(s,i)}jt(Cr),Gt(Cr,s)}function fa(){jt(Cr),jt(Gl),jt(Wl)}function lv(i){uo(Wl.current);var s=uo(Cr.current),l=Ge(s,i.type);s!==l&&(Gt(Gl,i),Gt(Cr,l))}function sh(i){Gl.current===i&&(jt(Cr),jt(Gl))}var Jt=ws(0);function vc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var oh=[];function ah(){for(var i=0;i<oh.length;i++)oh[i]._workInProgressVersionPrimary=null;oh.length=0}var _c=R.ReactCurrentDispatcher,lh=R.ReactCurrentBatchConfig,co=0,en=null,yn=null,Cn=null,yc=!1,Xl=!1,jl=0,LS=0;function Vn(){throw Error(n(321))}function uh(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!ur(i[l],s[l]))return!1;return!0}function ch(i,s,l,c,h,g){if(co=g,en=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,_c.current=i===null||i.memoizedState===null?NS:FS,i=l(c,h),Xl){g=0;do{if(Xl=!1,jl=0,25<=g)throw Error(n(301));g+=1,Cn=yn=null,s.updateQueue=null,_c.current=OS,i=l(c,h)}while(Xl)}if(_c.current=Mc,s=yn!==null&&yn.next!==null,co=0,Cn=yn=en=null,yc=!1,s)throw Error(n(300));return i}function fh(){var i=jl!==0;return jl=0,i}function Rr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?en.memoizedState=Cn=i:Cn=Cn.next=i,Cn}function qi(){if(yn===null){var i=en.alternate;i=i!==null?i.memoizedState:null}else i=yn.next;var s=Cn===null?en.memoizedState:Cn.next;if(s!==null)Cn=s,yn=i;else{if(i===null)throw Error(n(310));yn=i,i={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},Cn===null?en.memoizedState=Cn=i:Cn=Cn.next=i}return Cn}function ql(i,s){return typeof s=="function"?s(i):s}function dh(i){var s=qi(),l=s.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=i;var c=yn,h=c.baseQueue,g=l.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}c.baseQueue=h=g,l.pending=null}if(h!==null){g=h.next,c=c.baseState;var I=E=null,O=null,Q=g;do{var ve=Q.lane;if((co&ve)===ve)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),c=Q.hasEagerState?Q.eagerState:i(c,Q.action);else{var ye={lane:ve,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(I=O=ye,E=c):O=O.next=ye,en.lanes|=ve,fo|=ve}Q=Q.next}while(Q!==null&&Q!==g);O===null?E=c:O.next=I,ur(c,s.memoizedState)||(fi=!0),s.memoizedState=c,s.baseState=E,s.baseQueue=O,l.lastRenderedState=c}if(i=l.interleaved,i!==null){h=i;do g=h.lane,en.lanes|=g,fo|=g,h=h.next;while(h!==i)}else h===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function hh(i){var s=qi(),l=s.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=i;var c=l.dispatch,h=l.pending,g=s.memoizedState;if(h!==null){l.pending=null;var E=h=h.next;do g=i(g,E.action),E=E.next;while(E!==h);ur(g,s.memoizedState)||(fi=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function uv(){}function cv(i,s){var l=en,c=qi(),h=s(),g=!ur(c.memoizedState,h);if(g&&(c.memoizedState=h,fi=!0),c=c.queue,ph(hv.bind(null,l,c,i),[i]),c.getSnapshot!==s||g||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,Yl(9,dv.bind(null,l,c,h,s),void 0,null),Rn===null)throw Error(n(349));(co&30)!==0||fv(l,s,h)}return h}function fv(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function dv(i,s,l,c){s.value=l,s.getSnapshot=c,pv(s)&&mv(i)}function hv(i,s,l){return l(function(){pv(s)&&mv(i)})}function pv(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!ur(i,l)}catch{return!0}}function mv(i){var s=$r(i,1);s!==null&&pr(s,i,1,-1)}function gv(i){var s=Rr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ql,lastRenderedState:i},s.queue=i,i=i.dispatch=US.bind(null,en,i),[s.memoizedState,i]}function Yl(i,s,l,c){return i={tag:i,create:s,destroy:l,deps:c,next:null},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i)),i}function vv(){return qi().memoizedState}function xc(i,s,l,c){var h=Rr();en.flags|=i,h.memoizedState=Yl(1|s,l,void 0,c===void 0?null:c)}function Sc(i,s,l,c){var h=qi();c=c===void 0?null:c;var g=void 0;if(yn!==null){var E=yn.memoizedState;if(g=E.destroy,c!==null&&uh(c,E.deps)){h.memoizedState=Yl(s,l,g,c);return}}en.flags|=i,h.memoizedState=Yl(1|s,l,g,c)}function _v(i,s){return xc(8390656,8,i,s)}function ph(i,s){return Sc(2048,8,i,s)}function yv(i,s){return Sc(4,2,i,s)}function xv(i,s){return Sc(4,4,i,s)}function Sv(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Mv(i,s,l){return l=l!=null?l.concat([i]):null,Sc(4,4,Sv.bind(null,s,i),l)}function mh(){}function Ev(i,s){var l=qi();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&uh(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function wv(i,s){var l=qi();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&uh(s,c[1])?c[0]:(i=i(),l.memoizedState=[i,s],i)}function Tv(i,s,l){return(co&21)===0?(i.baseState&&(i.baseState=!1,fi=!0),i.memoizedState=l):(ur(l,s)||(l=ei(),en.lanes|=l,fo|=l,i.baseState=!0),s)}function DS(i,s){var l=Ft;Ft=l!==0&&4>l?l:4,i(!0);var c=lh.transition;lh.transition={};try{i(!1),s()}finally{Ft=l,lh.transition=c}}function Av(){return qi().memoizedState}function IS(i,s,l){var c=Ds(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Cv(i))Rv(s,l);else if(l=rv(i,s,l,c),l!==null){var h=ni();pr(l,i,c,h),bv(l,s,c)}}function US(i,s,l){var c=Ds(i),h={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Cv(i))Rv(s,h);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,I=g(E,l);if(h.hasEagerState=!0,h.eagerState=I,ur(I,E)){var O=s.interleaved;O===null?(h.next=h,nh(s)):(h.next=O.next,O.next=h),s.interleaved=h;return}}catch{}finally{}l=rv(i,s,h,c),l!==null&&(h=ni(),pr(l,i,c,h),bv(l,s,c))}}function Cv(i){var s=i.alternate;return i===en||s!==null&&s===en}function Rv(i,s){Xl=yc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function bv(i,s,l){if((l&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,vd(i,l)}}var Mc={readContext:ji,useCallback:Vn,useContext:Vn,useEffect:Vn,useImperativeHandle:Vn,useInsertionEffect:Vn,useLayoutEffect:Vn,useMemo:Vn,useReducer:Vn,useRef:Vn,useState:Vn,useDebugValue:Vn,useDeferredValue:Vn,useTransition:Vn,useMutableSource:Vn,useSyncExternalStore:Vn,useId:Vn,unstable_isNewReconciler:!1},NS={readContext:ji,useCallback:function(i,s){return Rr().memoizedState=[i,s===void 0?null:s],i},useContext:ji,useEffect:_v,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,xc(4194308,4,Sv.bind(null,s,i),l)},useLayoutEffect:function(i,s){return xc(4194308,4,i,s)},useInsertionEffect:function(i,s){return xc(4,2,i,s)},useMemo:function(i,s){var l=Rr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var c=Rr();return s=l!==void 0?l(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=IS.bind(null,en,i),[c.memoizedState,i]},useRef:function(i){var s=Rr();return i={current:i},s.memoizedState=i},useState:gv,useDebugValue:mh,useDeferredValue:function(i){return Rr().memoizedState=i},useTransition:function(){var i=gv(!1),s=i[0];return i=DS.bind(null,i[1]),Rr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var c=en,h=Rr();if(Yt){if(l===void 0)throw Error(n(407));l=l()}else{if(l=s(),Rn===null)throw Error(n(349));(co&30)!==0||fv(c,s,l)}h.memoizedState=l;var g={value:l,getSnapshot:s};return h.queue=g,_v(hv.bind(null,c,g,i),[i]),c.flags|=2048,Yl(9,dv.bind(null,c,g,l,s),void 0,null),l},useId:function(){var i=Rr(),s=Rn.identifierPrefix;if(Yt){var l=Yr,c=qr;l=(c&~(1<<32-ft(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=jl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=LS++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},FS={readContext:ji,useCallback:Ev,useContext:ji,useEffect:ph,useImperativeHandle:Mv,useInsertionEffect:yv,useLayoutEffect:xv,useMemo:wv,useReducer:dh,useRef:vv,useState:function(){return dh(ql)},useDebugValue:mh,useDeferredValue:function(i){var s=qi();return Tv(s,yn.memoizedState,i)},useTransition:function(){var i=dh(ql)[0],s=qi().memoizedState;return[i,s]},useMutableSource:uv,useSyncExternalStore:cv,useId:Av,unstable_isNewReconciler:!1},OS={readContext:ji,useCallback:Ev,useContext:ji,useEffect:ph,useImperativeHandle:Mv,useInsertionEffect:yv,useLayoutEffect:xv,useMemo:wv,useReducer:hh,useRef:vv,useState:function(){return hh(ql)},useDebugValue:mh,useDeferredValue:function(i){var s=qi();return yn===null?s.memoizedState=i:Tv(s,yn.memoizedState,i)},useTransition:function(){var i=hh(ql)[0],s=qi().memoizedState;return[i,s]},useMutableSource:uv,useSyncExternalStore:cv,useId:Av,unstable_isNewReconciler:!1};function fr(i,s){if(i&&i.defaultProps){s=re({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function gh(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:re({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Ec={isMounted:function(i){return(i=i._reactInternals)?wr(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=ni(),h=Ds(i),g=Kr(c,h);g.payload=s,l!=null&&(g.callback=l),s=Rs(i,g,h),s!==null&&(pr(s,i,h,c),mc(s,i,h))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=ni(),h=Ds(i),g=Kr(c,h);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=Rs(i,g,h),s!==null&&(pr(s,i,h,c),mc(s,i,h))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=ni(),c=Ds(i),h=Kr(l,c);h.tag=2,s!=null&&(h.callback=s),s=Rs(i,h,c),s!==null&&(pr(s,i,c,l),mc(s,i,c))}};function Pv(i,s,l,c,h,g,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,E):s.prototype&&s.prototype.isPureReactComponent?!Ul(l,c)||!Ul(h,g):!0}function Lv(i,s,l){var c=!1,h=Ts,g=s.contextType;return typeof g=="object"&&g!==null?g=ji(g):(h=ci(s)?so:zn.current,c=s.contextTypes,g=(c=c!=null)?ra(i,h):Ts),s=new s(l,g),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ec,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=h,i.__reactInternalMemoizedMaskedChildContext=g),s}function Dv(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&Ec.enqueueReplaceState(s,s.state,null)}function vh(i,s,l,c){var h=i.stateNode;h.props=l,h.state=i.memoizedState,h.refs={},ih(i);var g=s.contextType;typeof g=="object"&&g!==null?h.context=ji(g):(g=ci(s)?so:zn.current,h.context=ra(i,g)),h.state=i.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(gh(i,s,g,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&Ec.enqueueReplaceState(h,h.state,null),gc(i,l,h,c),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308)}function da(i,s){try{var l="",c=s;do l+=ue(c),c=c.return;while(c);var h=l}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:i,source:s,stack:h,digest:null}}function _h(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function yh(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function Iv(i,s,l){l=Kr(-1,l),l.tag=3,l.payload={element:null};var c=s.value;return l.callback=function(){Pc||(Pc=!0,Uh=c),yh(i,s)},l}function Uv(i,s,l){l=Kr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var h=s.value;l.payload=function(){return c(h)},l.callback=function(){yh(i,s)}}var g=i.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){yh(i,s),typeof c!="function"&&(Ps===null?Ps=new Set([this]):Ps.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function Nv(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new kS;var h=new Set;c.set(s,h)}else h=c.get(s),h===void 0&&(h=new Set,c.set(s,h));h.has(l)||(h.add(l),i=QS.bind(null,i,s,l),s.then(i,i))}function Fv(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Ov(i,s,l,c,h){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Kr(-1,1),s.tag=2,Rs(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=h,i)}var BS=R.ReactCurrentOwner,fi=!1;function ti(i,s,l,c){s.child=i===null?iv(s,null,l,c):la(s,i.child,l,c)}function kv(i,s,l,c,h){l=l.render;var g=s.ref;return ca(s,h),c=ch(i,s,l,c,g,h),l=fh(),i!==null&&!fi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~h,Zr(i,s,h)):(Yt&&l&&qd(s),s.flags|=1,ti(i,s,c,h),s.child)}function Bv(i,s,l,c,h){if(i===null){var g=l.type;return typeof g=="function"&&!Vh(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,zv(i,s,g,c,h)):(i=Fc(l.type,null,c,s,s.mode,h),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,(i.lanes&h)===0){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:Ul,l(E,c)&&i.ref===s.ref)return Zr(i,s,h)}return s.flags|=1,i=Us(g,c),i.ref=s.ref,i.return=s,s.child=i}function zv(i,s,l,c,h){if(i!==null){var g=i.memoizedProps;if(Ul(g,c)&&i.ref===s.ref)if(fi=!1,s.pendingProps=c=g,(i.lanes&h)!==0)(i.flags&131072)!==0&&(fi=!0);else return s.lanes=i.lanes,Zr(i,s,h)}return xh(i,s,l,c,h)}function Vv(i,s,l){var c=s.pendingProps,h=c.children,g=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(pa,Ai),Ai|=l;else{if((l&1073741824)===0)return i=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(pa,Ai),Ai|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:l,Gt(pa,Ai),Ai|=c}else g!==null?(c=g.baseLanes|l,s.memoizedState=null):c=l,Gt(pa,Ai),Ai|=c;return ti(i,s,h,l),s.child}function Hv(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function xh(i,s,l,c,h){var g=ci(l)?so:zn.current;return g=ra(s,g),ca(s,h),l=ch(i,s,l,c,g,h),c=fh(),i!==null&&!fi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~h,Zr(i,s,h)):(Yt&&c&&qd(s),s.flags|=1,ti(i,s,l,h),s.child)}function Gv(i,s,l,c,h){if(ci(l)){var g=!0;ac(s)}else g=!1;if(ca(s,h),s.stateNode===null)Tc(i,s),Lv(s,l,c),vh(s,l,c,h),c=!0;else if(i===null){var E=s.stateNode,I=s.memoizedProps;E.props=I;var O=E.context,Q=l.contextType;typeof Q=="object"&&Q!==null?Q=ji(Q):(Q=ci(l)?so:zn.current,Q=ra(s,Q));var ve=l.getDerivedStateFromProps,ye=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||O!==Q)&&Dv(s,E,c,Q),Cs=!1;var me=s.memoizedState;E.state=me,gc(s,c,E,h),O=s.memoizedState,I!==c||me!==O||ui.current||Cs?(typeof ve=="function"&&(gh(s,l,ve,c),O=s.memoizedState),(I=Cs||Pv(s,l,I,c,me,O,Q))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=O),E.props=c,E.state=O,E.context=Q,c=I):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{E=s.stateNode,sv(i,s),I=s.memoizedProps,Q=s.type===s.elementType?I:fr(s.type,I),E.props=Q,ye=s.pendingProps,me=E.context,O=l.contextType,typeof O=="object"&&O!==null?O=ji(O):(O=ci(l)?so:zn.current,O=ra(s,O));var De=l.getDerivedStateFromProps;(ve=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ye||me!==O)&&Dv(s,E,c,O),Cs=!1,me=s.memoizedState,E.state=me,gc(s,c,E,h);var Be=s.memoizedState;I!==ye||me!==Be||ui.current||Cs?(typeof De=="function"&&(gh(s,l,De,c),Be=s.memoizedState),(Q=Cs||Pv(s,l,Q,c,me,Be,O)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Be,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Be,O)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Be),E.props=c,E.state=Be,E.context=O,c=Q):(typeof E.componentDidUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),c=!1)}return Sh(i,s,l,c,g,h)}function Sh(i,s,l,c,h,g){Hv(i,s);var E=(s.flags&128)!==0;if(!c&&!E)return h&&Y0(s,l,!1),Zr(i,s,g);c=s.stateNode,BS.current=s;var I=E&&typeof l.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&E?(s.child=la(s,i.child,null,g),s.child=la(s,null,I,g)):ti(i,s,I,g),s.memoizedState=c.state,h&&Y0(s,l,!0),s.child}function Wv(i){var s=i.stateNode;s.pendingContext?j0(i,s.pendingContext,s.pendingContext!==s.context):s.context&&j0(i,s.context,!1),rh(i,s.containerInfo)}function Xv(i,s,l,c,h){return aa(),Zd(h),s.flags|=256,ti(i,s,l,c),s.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function Eh(i){return{baseLanes:i,cachePool:null,transitions:null}}function jv(i,s,l){var c=s.pendingProps,h=Jt.current,g=!1,E=(s.flags&128)!==0,I;if((I=E)||(I=i!==null&&i.memoizedState===null?!1:(h&2)!==0),I?(g=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(h|=1),Gt(Jt,h&1),i===null)return Kd(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=c.children,i=c.fallback,g?(c=s.mode,g=s.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Oc(E,c,0,null),i=go(i,c,l,null),g.return=s,i.return=s,g.sibling=i,s.child=g,s.child.memoizedState=Eh(l),s.memoizedState=Mh,i):wh(s,E));if(h=i.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return zS(i,s,E,c,I,h,l);if(g){g=c.fallback,E=s.mode,h=i.child,I=h.sibling;var O={mode:"hidden",children:c.children};return(E&1)===0&&s.child!==h?(c=s.child,c.childLanes=0,c.pendingProps=O,s.deletions=null):(c=Us(h,O),c.subtreeFlags=h.subtreeFlags&14680064),I!==null?g=Us(I,g):(g=go(g,E,l,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,E=i.child.memoizedState,E=E===null?Eh(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=i.childLanes&~l,s.memoizedState=Mh,c}return g=i.child,i=g.sibling,c=Us(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=l),c.return=s,c.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=c,s.memoizedState=null,c}function wh(i,s){return s=Oc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function wc(i,s,l,c){return c!==null&&Zd(c),la(s,i.child,null,l),i=wh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function zS(i,s,l,c,h,g,E){if(l)return s.flags&256?(s.flags&=-257,c=_h(Error(n(422))),wc(i,s,E,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(g=c.fallback,h=s.mode,c=Oc({mode:"visible",children:c.children},h,0,null),g=go(g,h,E,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&la(s,i.child,null,E),s.child.memoizedState=Eh(E),s.memoizedState=Mh,g);if((s.mode&1)===0)return wc(i,s,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(n(419)),c=_h(g,c,void 0),wc(i,s,E,c)}if(I=(E&i.childLanes)!==0,fi||I){if(c=Rn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,$r(i,h),pr(c,i,h,-1))}return zh(),c=_h(Error(n(421))),wc(i,s,E,c)}return h.data==="$?"?(s.flags|=128,s.child=i.child,s=JS.bind(null,i),h._reactRetry=s,null):(i=g.treeContext,Ti=Es(h.nextSibling),wi=s,Yt=!0,cr=null,i!==null&&(Wi[Xi++]=qr,Wi[Xi++]=Yr,Wi[Xi++]=oo,qr=i.id,Yr=i.overflow,oo=s),s=wh(s,c.children),s.flags|=4096,s)}function qv(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),th(i.return,s,l)}function Th(i,s,l,c,h){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:h}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=h)}function Yv(i,s,l){var c=s.pendingProps,h=c.revealOrder,g=c.tail;if(ti(i,s,c.children,l),c=Jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&qv(i,l,s);else if(i.tag===19)qv(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Gt(Jt,c),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(l=s.child,h=null;l!==null;)i=l.alternate,i!==null&&vc(i)===null&&(h=l),l=l.sibling;l=h,l===null?(h=s.child,s.child=null):(h=l.sibling,l.sibling=null),Th(s,!1,h,l,g);break;case"backwards":for(l=null,h=s.child,s.child=null;h!==null;){if(i=h.alternate,i!==null&&vc(i)===null){s.child=h;break}i=h.sibling,h.sibling=l,l=h,h=i}Th(s,!0,l,null,g);break;case"together":Th(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Tc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Zr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),fo|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(n(153));if(s.child!==null){for(i=s.child,l=Us(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Us(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function VS(i,s,l){switch(s.tag){case 3:Wv(s),aa();break;case 5:lv(s);break;case 1:ci(s.type)&&ac(s);break;case 4:rh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,h=s.memoizedProps.value;Gt(hc,c._currentValue),c._currentValue=h;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Jt,Jt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?jv(i,s,l):(Gt(Jt,Jt.current&1),i=Zr(i,s,l),i!==null?i.sibling:null);Gt(Jt,Jt.current&1);break;case 19:if(c=(l&s.childLanes)!==0,(i.flags&128)!==0){if(c)return Yv(i,s,l);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Gt(Jt,Jt.current),c)break;return null;case 22:case 23:return s.lanes=0,Vv(i,s,l)}return Zr(i,s,l)}var $v,Ah,Kv,Zv;$v=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ah=function(){},Kv=function(i,s,l,c){var h=i.memoizedProps;if(h!==c){i=s.stateNode,uo(Cr.current);var g=null;switch(l){case"input":h=X(i,h),c=X(i,c),g=[];break;case"select":h=re({},h,{value:void 0}),c=re({},c,{value:void 0}),g=[];break;case"textarea":h=T(i,h),c=T(i,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=rc)}gt(l,c);var E;l=null;for(Q in h)if(!c.hasOwnProperty(Q)&&h.hasOwnProperty(Q)&&h[Q]!=null)if(Q==="style"){var I=h[Q];for(E in I)I.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?g||(g=[]):(g=g||[]).push(Q,null));for(Q in c){var O=c[Q];if(I=h?.[Q],c.hasOwnProperty(Q)&&O!==I&&(O!=null||I!=null))if(Q==="style")if(I){for(E in I)!I.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in O)O.hasOwnProperty(E)&&I[E]!==O[E]&&(l||(l={}),l[E]=O[E])}else l||(g||(g=[]),g.push(Q,l)),l=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(g=g||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(g=g||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&Xt("scroll",i),g||I===O||(g=[])):(g=g||[]).push(Q,O))}l&&(g=g||[]).push("style",l);var Q=g;(s.updateQueue=Q)&&(s.flags|=4)}},Zv=function(i,s,l,c){l!==c&&(s.flags|=4)};function $l(i,s){if(!Yt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Hn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var h=i.child;h!==null;)l|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=i,h=h.sibling;else for(h=i.child;h!==null;)l|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=i,h=h.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function HS(i,s,l){var c=s.pendingProps;switch(Yd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(s),null;case 1:return ci(s.type)&&oc(),Hn(s),null;case 3:return c=s.stateNode,fa(),jt(ui),jt(zn),ah(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(fc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,cr!==null&&(Oh(cr),cr=null))),Ah(i,s),Hn(s),null;case 5:sh(s);var h=uo(Wl.current);if(l=s.type,i!==null&&s.stateNode!=null)Kv(i,s,l,c,h),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(n(166));return Hn(s),null}if(i=uo(Cr.current),fc(s)){c=s.stateNode,l=s.type;var g=s.memoizedProps;switch(c[Ar]=s,c[Bl]=g,i=(s.mode&1)!==0,l){case"dialog":Xt("cancel",c),Xt("close",c);break;case"iframe":case"object":case"embed":Xt("load",c);break;case"video":case"audio":for(h=0;h<Fl.length;h++)Xt(Fl[h],c);break;case"source":Xt("error",c);break;case"img":case"image":case"link":Xt("error",c),Xt("load",c);break;case"details":Xt("toggle",c);break;case"input":Qn(c,g),Xt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Xt("invalid",c);break;case"textarea":K(c,g),Xt("invalid",c)}gt(l,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var I=g[E];E==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&ic(c.textContent,I,i),h=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&ic(c.textContent,I,i),h=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Xt("scroll",c)}switch(l){case"input":Ot(c),Je(c,g,!0);break;case"textarea":Ot(c),ge(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=rc)}c=h,s.updateQueue=c,c!==null&&(s.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=ce(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=E.createElement(l,{is:c.is}):(i=E.createElement(l),l==="select"&&(E=i,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):i=E.createElementNS(i,l),i[Ar]=s,i[Bl]=c,$v(i,s,!1,!1),s.stateNode=i;e:{switch(E=ut(l,c),l){case"dialog":Xt("cancel",i),Xt("close",i),h=c;break;case"iframe":case"object":case"embed":Xt("load",i),h=c;break;case"video":case"audio":for(h=0;h<Fl.length;h++)Xt(Fl[h],i);h=c;break;case"source":Xt("error",i),h=c;break;case"img":case"image":case"link":Xt("error",i),Xt("load",i),h=c;break;case"details":Xt("toggle",i),h=c;break;case"input":Qn(i,c),h=X(i,c),Xt("invalid",i);break;case"option":h=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},h=re({},c,{value:void 0}),Xt("invalid",i);break;case"textarea":K(i,c),h=T(i,c),Xt("invalid",i);break;default:h=c}gt(l,h),I=h;for(g in I)if(I.hasOwnProperty(g)){var O=I[g];g==="style"?st(i,O):g==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ne(i,O)):g==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&pt(i,O):typeof O=="number"&&pt(i,""+O):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?O!=null&&g==="onScroll"&&Xt("scroll",i):O!=null&&L(i,g,O,E))}switch(l){case"input":Ot(i),Je(i,c,!1);break;case"textarea":Ot(i),ge(i);break;case"option":c.value!=null&&i.setAttribute("value",""+Ae(c.value));break;case"select":i.multiple=!!c.multiple,g=c.value,g!=null?D(i,!!c.multiple,g,!1):c.defaultValue!=null&&D(i,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(i.onclick=rc)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Hn(s),null;case 6:if(i&&s.stateNode!=null)Zv(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(n(166));if(l=uo(Wl.current),uo(Cr.current),fc(s)){if(c=s.stateNode,l=s.memoizedProps,c[Ar]=s,(g=c.nodeValue!==l)&&(i=wi,i!==null))switch(i.tag){case 3:ic(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&ic(c.nodeValue,l,(i.mode&1)!==0)}g&&(s.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[Ar]=s,s.stateNode=c}return Hn(s),null;case 13:if(jt(Jt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Yt&&Ti!==null&&(s.mode&1)!==0&&(s.flags&128)===0)ev(),aa(),s.flags|=98560,g=!1;else if(g=fc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!g)throw Error(n(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[Ar]=s}else aa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Hn(s),g=!1}else cr!==null&&(Oh(cr),cr=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Jt.current&1)!==0?xn===0&&(xn=3):zh())),s.updateQueue!==null&&(s.flags|=4),Hn(s),null);case 4:return fa(),Ah(i,s),i===null&&Ol(s.stateNode.containerInfo),Hn(s),null;case 10:return eh(s.type._context),Hn(s),null;case 17:return ci(s.type)&&oc(),Hn(s),null;case 19:if(jt(Jt),g=s.memoizedState,g===null)return Hn(s),null;if(c=(s.flags&128)!==0,E=g.rendering,E===null)if(c)$l(g,!1);else{if(xn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=vc(i),E!==null){for(s.flags|=128,$l(g,!1),c=E.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=l,l=s.child;l!==null;)g=l,i=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=i,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,i=E.dependencies,g.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Gt(Jt,Jt.current&1|2),s.child}i=i.sibling}g.tail!==null&&Se()>ma&&(s.flags|=128,c=!0,$l(g,!1),s.lanes=4194304)}else{if(!c)if(i=vc(E),i!==null){if(s.flags|=128,c=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),$l(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Yt)return Hn(s),null}else 2*Se()-g.renderingStartTime>ma&&l!==1073741824&&(s.flags|=128,c=!0,$l(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(l=g.last,l!==null?l.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Se(),s.sibling=null,l=Jt.current,Gt(Jt,c?l&1|2:l&1),s):(Hn(s),null);case 22:case 23:return Bh(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(Ai&1073741824)!==0&&(Hn(s),s.subtreeFlags&6&&(s.flags|=8192)):Hn(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function GS(i,s){switch(Yd(s),s.tag){case 1:return ci(s.type)&&oc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return fa(),jt(ui),jt(zn),ah(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return sh(s),null;case 13:if(jt(Jt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(n(340));aa()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return jt(Jt),null;case 4:return fa(),null;case 10:return eh(s.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var Ac=!1,Gn=!1,WS=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ha(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){on(i,s,c)}else l.current=null}function Ch(i,s,l){try{l()}catch(c){on(i,s,c)}}var Qv=!1;function XS(i,s){if(Bd=ju,i=P0(),Ld(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,I=-1,O=-1,Q=0,ve=0,ye=i,me=null;t:for(;;){for(var De;ye!==l||h!==0&&ye.nodeType!==3||(I=E+h),ye!==g||c!==0&&ye.nodeType!==3||(O=E+c),ye.nodeType===3&&(E+=ye.nodeValue.length),(De=ye.firstChild)!==null;)me=ye,ye=De;for(;;){if(ye===i)break t;if(me===l&&++Q===h&&(I=E),me===g&&++ve===c&&(O=E),(De=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=De}l=I===-1||O===-1?null:{start:I,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(zd={focusedElem:i,selectionRange:l},ju=!1,Fe=s;Fe!==null;)if(s=Fe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Fe=i;else for(;Fe!==null;){s=Fe;try{var Be=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,un=Be.memoizedState,q=s.stateNode,z=q.getSnapshotBeforeUpdate(s.elementType===s.type?He:fr(s.type,He),un);q.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var Y=s.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){on(s,s.return,Ee)}if(i=s.sibling,i!==null){i.return=s.return,Fe=i;break}Fe=s.return}return Be=Qv,Qv=!1,Be}function Kl(i,s,l){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&i)===i){var g=h.destroy;h.destroy=void 0,g!==void 0&&Ch(s,l,g)}h=h.next}while(h!==c)}}function Cc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==s)}}function Rh(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Jv(i){var s=i.alternate;s!==null&&(i.alternate=null,Jv(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ar],delete s[Bl],delete s[Wd],delete s[CS],delete s[RS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function e_(i){return i.tag===5||i.tag===3||i.tag===4}function t_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||e_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function bh(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=rc));else if(c!==4&&(i=i.child,i!==null))for(bh(i,s,l),i=i.sibling;i!==null;)bh(i,s,l),i=i.sibling}function Ph(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(Ph(i,s,l),i=i.sibling;i!==null;)Ph(i,s,l),i=i.sibling}var In=null,dr=!1;function bs(i,s,l){for(l=l.child;l!==null;)n_(i,s,l),l=l.sibling}function n_(i,s,l){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Dt,l)}catch{}switch(l.tag){case 5:Gn||ha(l,s);case 6:var c=In,h=dr;In=null,bs(i,s,l),In=c,dr=h,In!==null&&(dr?(i=In,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(dr?(i=In,l=l.stateNode,i.nodeType===8?Gd(i.parentNode,l):i.nodeType===1&&Gd(i,l),Rl(i)):Gd(In,l.stateNode));break;case 4:c=In,h=dr,In=l.stateNode.containerInfo,dr=!0,bs(i,s,l),In=c,dr=h;break;case 0:case 11:case 14:case 15:if(!Gn&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Ch(l,s,E),h=h.next}while(h!==c)}bs(i,s,l);break;case 1:if(!Gn&&(ha(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(I){on(l,s,I)}bs(i,s,l);break;case 21:bs(i,s,l);break;case 22:l.mode&1?(Gn=(c=Gn)||l.memoizedState!==null,bs(i,s,l),Gn=c):bs(i,s,l);break;default:bs(i,s,l)}}function i_(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new WS),s.forEach(function(c){var h=eM.bind(null,i,c);l.has(c)||(l.add(c),c.then(h,h))})}}function hr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var h=l[c];try{var g=i,E=s,I=E;e:for(;I!==null;){switch(I.tag){case 5:In=I.stateNode,dr=!1;break e;case 3:In=I.stateNode.containerInfo,dr=!0;break e;case 4:In=I.stateNode.containerInfo,dr=!0;break e}I=I.return}if(In===null)throw Error(n(160));n_(g,E,h),In=null,dr=!1;var O=h.alternate;O!==null&&(O.return=null),h.return=null}catch(Q){on(h,s,Q)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)r_(s,i),s=s.sibling}function r_(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(hr(s,i),br(i),c&4){try{Kl(3,i,i.return),Cc(3,i)}catch(He){on(i,i.return,He)}try{Kl(5,i,i.return)}catch(He){on(i,i.return,He)}}break;case 1:hr(s,i),br(i),c&512&&l!==null&&ha(l,l.return);break;case 5:if(hr(s,i),br(i),c&512&&l!==null&&ha(l,l.return),i.flags&32){var h=i.stateNode;try{pt(h,"")}catch(He){on(i,i.return,He)}}if(c&4&&(h=i.stateNode,h!=null)){var g=i.memoizedProps,E=l!==null?l.memoizedProps:g,I=i.type,O=i.updateQueue;if(i.updateQueue=null,O!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&_t(h,g),ut(I,E);var Q=ut(I,g);for(E=0;E<O.length;E+=2){var ve=O[E],ye=O[E+1];ve==="style"?st(h,ye):ve==="dangerouslySetInnerHTML"?Ne(h,ye):ve==="children"?pt(h,ye):L(h,ve,ye,Q)}switch(I){case"input":mt(h,g);break;case"textarea":pe(h,g);break;case"select":var me=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var De=g.value;De!=null?D(h,!!g.multiple,De,!1):me!==!!g.multiple&&(g.defaultValue!=null?D(h,!!g.multiple,g.defaultValue,!0):D(h,!!g.multiple,g.multiple?[]:"",!1))}h[Bl]=g}catch(He){on(i,i.return,He)}}break;case 6:if(hr(s,i),br(i),c&4){if(i.stateNode===null)throw Error(n(162));h=i.stateNode,g=i.memoizedProps;try{h.nodeValue=g}catch(He){on(i,i.return,He)}}break;case 3:if(hr(s,i),br(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Rl(s.containerInfo)}catch(He){on(i,i.return,He)}break;case 4:hr(s,i),br(i);break;case 13:hr(s,i),br(i),h=i.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Ih=Se())),c&4&&i_(i);break;case 22:if(ve=l!==null&&l.memoizedState!==null,i.mode&1?(Gn=(Q=Gn)||ve,hr(s,i),Gn=Q):hr(s,i),br(i),c&8192){if(Q=i.memoizedState!==null,(i.stateNode.isHidden=Q)&&!ve&&(i.mode&1)!==0)for(Fe=i,ve=i.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:Kl(4,me,me.return);break;case 1:ha(me,me.return);var Be=me.stateNode;if(typeof Be.componentWillUnmount=="function"){c=me,l=me.return;try{s=c,Be.props=s.memoizedProps,Be.state=s.memoizedState,Be.componentWillUnmount()}catch(He){on(c,l,He)}}break;case 5:ha(me,me.return);break;case 22:if(me.memoizedState!==null){a_(ye);continue}}De!==null?(De.return=me,Fe=De):a_(ye)}ve=ve.sibling}e:for(ve=null,ye=i;;){if(ye.tag===5){if(ve===null){ve=ye;try{h=ye.stateNode,Q?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=ye.stateNode,O=ye.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=it("display",E))}catch(He){on(i,i.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(He){on(i,i.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:hr(s,i),br(i),c&4&&i_(i);break;case 21:break;default:hr(s,i),br(i)}}function br(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(e_(l)){var c=l;break e}l=l.return}throw Error(n(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(pt(h,""),c.flags&=-33);var g=t_(i);Ph(i,g,h);break;case 3:case 4:var E=c.stateNode.containerInfo,I=t_(i);bh(i,I,E);break;default:throw Error(n(161))}}catch(O){on(i,i.return,O)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function jS(i,s,l){Fe=i,s_(i)}function s_(i,s,l){for(var c=(i.mode&1)!==0;Fe!==null;){var h=Fe,g=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Ac;if(!E){var I=h.alternate,O=I!==null&&I.memoizedState!==null||Gn;I=Ac;var Q=Gn;if(Ac=E,(Gn=O)&&!Q)for(Fe=h;Fe!==null;)E=Fe,O=E.child,E.tag===22&&E.memoizedState!==null?l_(h):O!==null?(O.return=E,Fe=O):l_(h);for(;g!==null;)Fe=g,s_(g),g=g.sibling;Fe=h,Ac=I,Gn=Q}o_(i)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Fe=g):o_(i)}}function o_(i){for(;Fe!==null;){var s=Fe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Gn||Cc(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Gn)if(l===null)c.componentDidMount();else{var h=s.elementType===s.type?l.memoizedProps:fr(s.type,l.memoizedProps);c.componentDidUpdate(h,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&av(s,g,c);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}av(s,E,l)}break;case 5:var I=s.stateNode;if(l===null&&s.flags&4){l=I;var O=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Q=s.alternate;if(Q!==null){var ve=Q.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&Rl(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Gn||s.flags&512&&Rh(s)}catch(me){on(s,s.return,me)}}if(s===i){Fe=null;break}if(l=s.sibling,l!==null){l.return=s.return,Fe=l;break}Fe=s.return}}function a_(i){for(;Fe!==null;){var s=Fe;if(s===i){Fe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Fe=l;break}Fe=s.return}}function l_(i){for(;Fe!==null;){var s=Fe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Cc(4,s)}catch(O){on(s,l,O)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var h=s.return;try{c.componentDidMount()}catch(O){on(s,h,O)}}var g=s.return;try{Rh(s)}catch(O){on(s,g,O)}break;case 5:var E=s.return;try{Rh(s)}catch(O){on(s,E,O)}}}catch(O){on(s,s.return,O)}if(s===i){Fe=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Fe=I;break}Fe=s.return}}var qS=Math.ceil,Rc=R.ReactCurrentDispatcher,Lh=R.ReactCurrentOwner,Yi=R.ReactCurrentBatchConfig,At=0,Rn=null,dn=null,Un=0,Ai=0,pa=ws(0),xn=0,Zl=null,fo=0,bc=0,Dh=0,Ql=null,di=null,Ih=0,ma=1/0,Qr=null,Pc=!1,Uh=null,Ps=null,Lc=!1,Ls=null,Dc=0,Jl=0,Nh=null,Ic=-1,Uc=0;function ni(){return(At&6)!==0?Se():Ic!==-1?Ic:Ic=Se()}function Ds(i){return(i.mode&1)===0?1:(At&2)!==0&&Un!==0?Un&-Un:PS.transition!==null?(Uc===0&&(Uc=ei()),Uc):(i=Ft,i!==0||(i=window.event,i=i===void 0?16:c0(i.type)),i)}function pr(i,s,l,c){if(50<Jl)throw Jl=0,Nh=null,Error(n(185));li(i,l,c),((At&2)===0||i!==Rn)&&(i===Rn&&((At&2)===0&&(bc|=l),xn===4&&Is(i,Un)),hi(i,c),l===1&&At===0&&(s.mode&1)===0&&(ma=Se()+500,lc&&As()))}function hi(i,s){var l=i.callbackNode;Hi(i,s);var c=Tr(i,i===Rn?Un:0);if(c===0)l!==null&&ee(l),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(l!=null&&ee(l),s===1)i.tag===0?bS(c_.bind(null,i)):$0(c_.bind(null,i)),TS(function(){(At&6)===0&&As()}),l=null;else{switch(n0(c)){case 1:l=Ve;break;case 4:l=ot;break;case 16:l=lt;break;case 536870912:l=Mt;break;default:l=lt}l=__(l,u_.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function u_(i,s){if(Ic=-1,Uc=0,(At&6)!==0)throw Error(n(327));var l=i.callbackNode;if(ga()&&i.callbackNode!==l)return null;var c=Tr(i,i===Rn?Un:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=Nc(i,c);else{s=c;var h=At;At|=2;var g=d_();(Rn!==i||Un!==s)&&(Qr=null,ma=Se()+500,po(i,s));do try{KS();break}catch(I){f_(i,I)}while(!0);Jd(),Rc.current=g,At=h,dn!==null?s=0:(Rn=null,Un=0,s=xn)}if(s!==0){if(s===2&&(h=Wr(i),h!==0&&(c=h,s=Fh(i,h))),s===1)throw l=Zl,po(i,0),Is(i,c),hi(i,Se()),l;if(s===6)Is(i,c);else{if(h=i.current.alternate,(c&30)===0&&!YS(h)&&(s=Nc(i,c),s===2&&(g=Wr(i),g!==0&&(c=g,s=Fh(i,g))),s===1))throw l=Zl,po(i,0),Is(i,c),hi(i,Se()),l;switch(i.finishedWork=h,i.finishedLanes=c,s){case 0:case 1:throw Error(n(345));case 2:mo(i,di,Qr);break;case 3:if(Is(i,c),(c&130023424)===c&&(s=Ih+500-Se(),10<s)){if(Tr(i,0)!==0)break;if(h=i.suspendedLanes,(h&c)!==c){ni(),i.pingedLanes|=i.suspendedLanes&h;break}i.timeoutHandle=Hd(mo.bind(null,i,di,Qr),s);break}mo(i,di,Qr);break;case 4:if(Is(i,c),(c&4194240)===c)break;for(s=i.eventTimes,h=-1;0<c;){var E=31-ft(c);g=1<<E,E=s[E],E>h&&(h=E),c&=~g}if(c=h,c=Se()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*qS(c/1960))-c,10<c){i.timeoutHandle=Hd(mo.bind(null,i,di,Qr),c);break}mo(i,di,Qr);break;case 5:mo(i,di,Qr);break;default:throw Error(n(329))}}}return hi(i,Se()),i.callbackNode===l?u_.bind(null,i):null}function Fh(i,s){var l=Ql;return i.current.memoizedState.isDehydrated&&(po(i,s).flags|=256),i=Nc(i,s),i!==2&&(s=di,di=l,s!==null&&Oh(s)),i}function Oh(i){di===null?di=i:di.push.apply(di,i)}function YS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var h=l[c],g=h.getSnapshot;h=h.value;try{if(!ur(g(),h))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Is(i,s){for(s&=~Dh,s&=~bc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-ft(s),c=1<<l;i[l]=-1,s&=~c}}function c_(i){if((At&6)!==0)throw Error(n(327));ga();var s=Tr(i,0);if((s&1)===0)return hi(i,Se()),null;var l=Nc(i,s);if(i.tag!==0&&l===2){var c=Wr(i);c!==0&&(s=c,l=Fh(i,c))}if(l===1)throw l=Zl,po(i,0),Is(i,s),hi(i,Se()),l;if(l===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,mo(i,di,Qr),hi(i,Se()),null}function kh(i,s){var l=At;At|=1;try{return i(s)}finally{At=l,At===0&&(ma=Se()+500,lc&&As())}}function ho(i){Ls!==null&&Ls.tag===0&&(At&6)===0&&ga();var s=At;At|=1;var l=Yi.transition,c=Ft;try{if(Yi.transition=null,Ft=1,i)return i()}finally{Ft=c,Yi.transition=l,At=s,(At&6)===0&&As()}}function Bh(){Ai=pa.current,jt(pa)}function po(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,wS(l)),dn!==null)for(l=dn.return;l!==null;){var c=l;switch(Yd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&oc();break;case 3:fa(),jt(ui),jt(zn),ah();break;case 5:sh(c);break;case 4:fa();break;case 13:jt(Jt);break;case 19:jt(Jt);break;case 10:eh(c.type._context);break;case 22:case 23:Bh()}l=l.return}if(Rn=i,dn=i=Us(i.current,null),Un=Ai=s,xn=0,Zl=null,Dh=bc=fo=0,di=Ql=null,lo!==null){for(s=0;s<lo.length;s++)if(l=lo[s],c=l.interleaved,c!==null){l.interleaved=null;var h=c.next,g=l.pending;if(g!==null){var E=g.next;g.next=h,c.next=E}l.pending=c}lo=null}return i}function f_(i,s){do{var l=dn;try{if(Jd(),_c.current=Mc,yc){for(var c=en.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}yc=!1}if(co=0,Cn=yn=en=null,Xl=!1,jl=0,Lh.current=null,l===null||l.return===null){xn=1,Zl=s,dn=null;break}e:{var g=i,E=l.return,I=l,O=s;if(s=Un,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,ve=I,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=Fv(E);if(De!==null){De.flags&=-257,Ov(De,E,I,g,s),De.mode&1&&Nv(g,Q,s),s=De,O=Q;var Be=s.updateQueue;if(Be===null){var He=new Set;He.add(O),s.updateQueue=He}else Be.add(O);break e}else{if((s&1)===0){Nv(g,Q,s),zh();break e}O=Error(n(426))}}else if(Yt&&I.mode&1){var un=Fv(E);if(un!==null){(un.flags&65536)===0&&(un.flags|=256),Ov(un,E,I,g,s),Zd(da(O,I));break e}}g=O=da(O,I),xn!==4&&(xn=2),Ql===null?Ql=[g]:Ql.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var q=Iv(g,O,s);ov(g,q);break e;case 1:I=O;var z=g.type,Y=g.stateNode;if((g.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(Ps===null||!Ps.has(Y)))){g.flags|=65536,s&=-s,g.lanes|=s;var Ee=Uv(g,I,s);ov(g,Ee);break e}}g=g.return}while(g!==null)}p_(l)}catch(je){s=je,dn===l&&l!==null&&(dn=l=l.return);continue}break}while(!0)}function d_(){var i=Rc.current;return Rc.current=Mc,i===null?Mc:i}function zh(){(xn===0||xn===3||xn===2)&&(xn=4),Rn===null||(fo&268435455)===0&&(bc&268435455)===0||Is(Rn,Un)}function Nc(i,s){var l=At;At|=2;var c=d_();(Rn!==i||Un!==s)&&(Qr=null,po(i,s));do try{$S();break}catch(h){f_(i,h)}while(!0);if(Jd(),At=l,Rc.current=c,dn!==null)throw Error(n(261));return Rn=null,Un=0,xn}function $S(){for(;dn!==null;)h_(dn)}function KS(){for(;dn!==null&&!W();)h_(dn)}function h_(i){var s=v_(i.alternate,i,Ai);i.memoizedProps=i.pendingProps,s===null?p_(i):dn=s,Lh.current=null}function p_(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=HS(l,s,Ai),l!==null){dn=l;return}}else{if(l=GS(l,s),l!==null){l.flags&=32767,dn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{xn=6,dn=null;return}}if(s=s.sibling,s!==null){dn=s;return}dn=s=i}while(s!==null);xn===0&&(xn=5)}function mo(i,s,l){var c=Ft,h=Yi.transition;try{Yi.transition=null,Ft=1,ZS(i,s,l,c)}finally{Yi.transition=h,Ft=c}return null}function ZS(i,s,l,c){do ga();while(Ls!==null);if((At&6)!==0)throw Error(n(327));l=i.finishedWork;var h=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var g=l.lanes|l.childLanes;if(Gu(i,g),i===Rn&&(dn=Rn=null,Un=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Lc||(Lc=!0,__(lt,function(){return ga(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Yi.transition,Yi.transition=null;var E=Ft;Ft=1;var I=At;At|=4,Lh.current=null,XS(i,l),r_(l,i),vS(zd),ju=!!Bd,zd=Bd=null,i.current=l,jS(l),Te(),At=I,Ft=E,Yi.transition=g}else i.current=l;if(Lc&&(Lc=!1,Ls=i,Dc=h),g=i.pendingLanes,g===0&&(Ps=null),kn(l.stateNode),hi(i,Se()),s!==null)for(c=i.onRecoverableError,l=0;l<s.length;l++)h=s[l],c(h.value,{componentStack:h.stack,digest:h.digest});if(Pc)throw Pc=!1,i=Uh,Uh=null,i;return(Dc&1)!==0&&i.tag!==0&&ga(),g=i.pendingLanes,(g&1)!==0?i===Nh?Jl++:(Jl=0,Nh=i):Jl=0,As(),null}function ga(){if(Ls!==null){var i=n0(Dc),s=Yi.transition,l=Ft;try{if(Yi.transition=null,Ft=16>i?16:i,Ls===null)var c=!1;else{if(i=Ls,Ls=null,Dc=0,(At&6)!==0)throw Error(n(331));var h=At;for(At|=4,Fe=i.current;Fe!==null;){var g=Fe,E=g.child;if((Fe.flags&16)!==0){var I=g.deletions;if(I!==null){for(var O=0;O<I.length;O++){var Q=I[O];for(Fe=Q;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Kl(8,ve,g)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var me=ve.sibling,De=ve.return;if(Jv(ve),ve===Q){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var Be=g.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var un=He.sibling;He.sibling=null,He=un}while(He!==null)}}Fe=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Fe=E;else e:for(;Fe!==null;){if(g=Fe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Kl(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,Fe=q;break e}Fe=g.return}}var z=i.current;for(Fe=z;Fe!==null;){E=Fe;var Y=E.child;if((E.subtreeFlags&2064)!==0&&Y!==null)Y.return=E,Fe=Y;else e:for(E=z;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Cc(9,I)}}catch(je){on(I,I.return,je)}if(I===E){Fe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Fe=Ee;break e}Fe=I.return}}if(At=h,As(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Dt,i)}catch{}c=!0}return c}finally{Ft=l,Yi.transition=s}}return!1}function m_(i,s,l){s=da(l,s),s=Iv(i,s,1),i=Rs(i,s,1),s=ni(),i!==null&&(li(i,1,s),hi(i,s))}function on(i,s,l){if(i.tag===3)m_(i,i,l);else for(;s!==null;){if(s.tag===3){m_(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ps===null||!Ps.has(c))){i=da(l,i),i=Uv(s,i,1),s=Rs(s,i,1),i=ni(),s!==null&&(li(s,1,i),hi(s,i));break}}s=s.return}}function QS(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),s=ni(),i.pingedLanes|=i.suspendedLanes&l,Rn===i&&(Un&l)===l&&(xn===4||xn===3&&(Un&130023424)===Un&&500>Se()-Ih?po(i,0):Dh|=l),hi(i,s)}function g_(i,s){s===0&&((i.mode&1)===0?s=1:(s=lr,lr<<=1,(lr&130023424)===0&&(lr=4194304)));var l=ni();i=$r(i,s),i!==null&&(li(i,s,l),hi(i,l))}function JS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),g_(i,l)}function eM(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,h=i.memoizedState;h!==null&&(l=h.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(s),g_(i,l)}var v_;v_=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||ui.current)fi=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return fi=!1,VS(i,s,l);fi=(i.flags&131072)!==0}else fi=!1,Yt&&(s.flags&1048576)!==0&&K0(s,cc,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Tc(i,s),i=s.pendingProps;var h=ra(s,zn.current);ca(s,l),h=ch(null,s,c,i,h,l);var g=fh();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ci(c)?(g=!0,ac(s)):g=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,ih(s),h.updater=Ec,s.stateNode=h,h._reactInternals=s,vh(s,c,i,l),s=Sh(null,s,c,!0,g,l)):(s.tag=0,Yt&&g&&qd(s),ti(null,s,h,l),s=s.child),s;case 16:c=s.elementType;e:{switch(Tc(i,s),i=s.pendingProps,h=c._init,c=h(c._payload),s.type=c,h=s.tag=nM(c),i=fr(c,i),h){case 0:s=xh(null,s,c,i,l);break e;case 1:s=Gv(null,s,c,i,l);break e;case 11:s=kv(null,s,c,i,l);break e;case 14:s=Bv(null,s,c,fr(c.type,i),l);break e}throw Error(n(306,c,""))}return s;case 0:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:fr(c,h),xh(i,s,c,h,l);case 1:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:fr(c,h),Gv(i,s,c,h,l);case 3:e:{if(Wv(s),i===null)throw Error(n(387));c=s.pendingProps,g=s.memoizedState,h=g.element,sv(i,s),gc(s,c,null,l);var E=s.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){h=da(Error(n(423)),s),s=Xv(i,s,c,l,h);break e}else if(c!==h){h=da(Error(n(424)),s),s=Xv(i,s,c,l,h);break e}else for(Ti=Es(s.stateNode.containerInfo.firstChild),wi=s,Yt=!0,cr=null,l=iv(s,null,c,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(aa(),c===h){s=Zr(i,s,l);break e}ti(i,s,c,l)}s=s.child}return s;case 5:return lv(s),i===null&&Kd(s),c=s.type,h=s.pendingProps,g=i!==null?i.memoizedProps:null,E=h.children,Vd(c,h)?E=null:g!==null&&Vd(c,g)&&(s.flags|=32),Hv(i,s),ti(i,s,E,l),s.child;case 6:return i===null&&Kd(s),null;case 13:return jv(i,s,l);case 4:return rh(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=la(s,null,c,l):ti(i,s,c,l),s.child;case 11:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:fr(c,h),kv(i,s,c,h,l);case 7:return ti(i,s,s.pendingProps,l),s.child;case 8:return ti(i,s,s.pendingProps.children,l),s.child;case 12:return ti(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(c=s.type._context,h=s.pendingProps,g=s.memoizedProps,E=h.value,Gt(hc,c._currentValue),c._currentValue=E,g!==null)if(ur(g.value,E)){if(g.children===h.children&&!ui.current){s=Zr(i,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var I=g.dependencies;if(I!==null){E=g.child;for(var O=I.firstContext;O!==null;){if(O.context===c){if(g.tag===1){O=Kr(-1,l&-l),O.tag=2;var Q=g.updateQueue;if(Q!==null){Q=Q.shared;var ve=Q.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),Q.pending=O}}g.lanes|=l,O=g.alternate,O!==null&&(O.lanes|=l),th(g.return,l,s),I.lanes|=l;break}O=O.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(n(341));E.lanes|=l,I=E.alternate,I!==null&&(I.lanes|=l),th(E,l,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}ti(i,s,h.children,l),s=s.child}return s;case 9:return h=s.type,c=s.pendingProps.children,ca(s,l),h=ji(h),c=c(h),s.flags|=1,ti(i,s,c,l),s.child;case 14:return c=s.type,h=fr(c,s.pendingProps),h=fr(c.type,h),Bv(i,s,c,h,l);case 15:return zv(i,s,s.type,s.pendingProps,l);case 17:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:fr(c,h),Tc(i,s),s.tag=1,ci(c)?(i=!0,ac(s)):i=!1,ca(s,l),Lv(s,c,h),vh(s,c,h,l),Sh(null,s,c,!0,i,l);case 19:return Yv(i,s,l);case 22:return Vv(i,s,l)}throw Error(n(156,s.tag))};function __(i,s){return J(i,s)}function tM(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $i(i,s,l,c){return new tM(i,s,l,c)}function Vh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function nM(i){if(typeof i=="function")return Vh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===se)return 11;if(i===he)return 14}return 2}function Us(i,s){var l=i.alternate;return l===null?(l=$i(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Fc(i,s,l,c,h,g){var E=2;if(c=i,typeof i=="function")Vh(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case N:return go(l.children,h,g,s);case V:E=8,h|=8;break;case b:return i=$i(12,l,s,h|2),i.elementType=b,i.lanes=g,i;case te:return i=$i(13,l,s,h),i.elementType=te,i.lanes=g,i;case fe:return i=$i(19,l,s,h),i.elementType=fe,i.lanes=g,i;case le:return Oc(l,h,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case A:E=10;break e;case k:E=9;break e;case se:E=11;break e;case he:E=14;break e;case oe:E=16,c=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return s=$i(E,l,s,h),s.elementType=i,s.type=c,s.lanes=g,s}function go(i,s,l,c){return i=$i(7,i,c,s),i.lanes=l,i}function Oc(i,s,l,c){return i=$i(22,i,c,s),i.elementType=le,i.lanes=l,i.stateNode={isHidden:!1},i}function Hh(i,s,l){return i=$i(6,i,null,s),i.lanes=l,i}function Gh(i,s,l){return s=$i(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function iM(i,s,l,c,h){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Wh(i,s,l,c,h,g,E,I,O){return i=new iM(i,s,l,I,O),s===1?(s=1,g===!0&&(s|=8)):s=0,g=$i(3,null,null,s),i.current=g,g.stateNode=i,g.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(g),i}function rM(i,s,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:i,containerInfo:s,implementation:l}}function y_(i){if(!i)return Ts;i=i._reactInternals;e:{if(wr(i)!==i||i.tag!==1)throw Error(n(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ci(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(i.tag===1){var l=i.type;if(ci(l))return q0(i,l,s)}return s}function x_(i,s,l,c,h,g,E,I,O){return i=Wh(l,c,!0,i,h,g,E,I,O),i.context=y_(null),l=i.current,c=ni(),h=Ds(l),g=Kr(c,h),g.callback=s??null,Rs(l,g,h),i.current.lanes=h,li(i,h,c),hi(i,c),i}function kc(i,s,l,c){var h=s.current,g=ni(),E=Ds(h);return l=y_(l),s.context===null?s.context=l:s.pendingContext=l,s=Kr(g,E),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Rs(h,s,E),i!==null&&(pr(i,h,E,g),mc(i,h,E)),E}function Bc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function S_(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Xh(i,s){S_(i,s),(i=i.alternate)&&S_(i,s)}function sM(){return null}var M_=typeof reportError=="function"?reportError:function(i){console.error(i)};function jh(i){this._internalRoot=i}zc.prototype.render=jh.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(n(409));kc(i,s,null,null)},zc.prototype.unmount=jh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ho(function(){kc(null,i,null,null)}),s[Xr]=null}};function zc(i){this._internalRoot=i}zc.prototype.unstable_scheduleHydration=function(i){if(i){var s=s0();i={blockedOn:null,target:i,priority:s};for(var l=0;l<xs.length&&s!==0&&s<xs[l].priority;l++);xs.splice(l,0,i),l===0&&l0(i)}};function qh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Vc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function E_(){}function oM(i,s,l,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var Q=Bc(E);g.call(Q)}}var E=x_(s,c,i,0,null,!1,!1,"",E_);return i._reactRootContainer=E,i[Xr]=E.current,Ol(i.nodeType===8?i.parentNode:i),ho(),E}for(;h=i.lastChild;)i.removeChild(h);if(typeof c=="function"){var I=c;c=function(){var Q=Bc(O);I.call(Q)}}var O=Wh(i,0,!1,null,null,!1,!1,"",E_);return i._reactRootContainer=O,i[Xr]=O.current,Ol(i.nodeType===8?i.parentNode:i),ho(function(){kc(s,O,l,c)}),O}function Hc(i,s,l,c,h){var g=l._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var I=h;h=function(){var O=Bc(E);I.call(O)}}kc(s,E,i,h)}else E=oM(l,s,i,h,c);return Bc(E)}i0=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=_n(s.pendingLanes);l!==0&&(vd(s,l|1),hi(s,Se()),(At&6)===0&&(ma=Se()+500,As()))}break;case 13:ho(function(){var c=$r(i,1);if(c!==null){var h=ni();pr(c,i,1,h)}}),Xh(i,1)}},_d=function(i){if(i.tag===13){var s=$r(i,134217728);if(s!==null){var l=ni();pr(s,i,134217728,l)}Xh(i,134217728)}},r0=function(i){if(i.tag===13){var s=Ds(i),l=$r(i,s);if(l!==null){var c=ni();pr(l,i,s,c)}Xh(i,s)}},s0=function(){return Ft},o0=function(i,s){var l=Ft;try{return Ft=i,s()}finally{Ft=l}},Re=function(i,s,l){switch(s){case"input":if(mt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var h=sc(c);if(!h)throw Error(n(90));xt(c),mt(c,h)}}}break;case"textarea":pe(i,l);break;case"select":s=l.value,s!=null&&D(i,!!l.multiple,s,!1)}},Wt=kh,vn=ho;var aM={usingClientEntryPoint:!1,Events:[zl,na,sc,Pe,ct,kh]},eu={findFiberByHostInstance:ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lM={bundleType:eu.bundleType,version:eu.version,rendererPackageName:eu.rendererPackageName,rendererConfig:eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=C(i),i===null?null:i.stateNode},findFiberByHostInstance:eu.findFiberByHostInstance||sM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{Dt=Gc.inject(lM),St=Gc}catch{}}return pi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aM,pi.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(s))throw Error(n(200));return rM(i,s,null,l)},pi.createRoot=function(i,s){if(!qh(i))throw Error(n(299));var l=!1,c="",h=M_;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=Wh(i,1,!1,null,null,l,!1,c,h),i[Xr]=s.current,Ol(i.nodeType===8?i.parentNode:i),new jh(s)},pi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=C(s),i=i===null?null:i.stateNode,i},pi.flushSync=function(i){return ho(i)},pi.hydrate=function(i,s,l){if(!Vc(s))throw Error(n(200));return Hc(null,i,s,!0,l)},pi.hydrateRoot=function(i,s,l){if(!qh(i))throw Error(n(405));var c=l!=null&&l.hydratedSources||null,h=!1,g="",E=M_;if(l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=x_(s,null,i,1,l??null,h,!1,g,E),i[Xr]=s.current,Ol(i),c)for(i=0;i<c.length;i++)l=c[i],h=l._getVersion,h=h(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,h]:s.mutableSourceEagerHydrationData.push(l,h);return new zc(s)},pi.render=function(i,s,l){if(!Vc(s))throw Error(n(200));return Hc(null,i,s,!1,l)},pi.unmountComponentAtNode=function(i){if(!Vc(i))throw Error(n(40));return i._reactRootContainer?(ho(function(){Hc(null,null,i,!1,function(){i._reactRootContainer=null,i[Xr]=null})}),!0):!1},pi.unstable_batchedUpdates=kh,pi.unstable_renderSubtreeIntoContainer=function(i,s,l,c){if(!Vc(l))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return Hc(i,s,l,!1,c)},pi.version="18.3.1-next-f1338f8080-20240426",pi}var L_;function gM(){if(L_)return Kh.exports;L_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Kh.exports=mM(),Kh.exports}var D_;function vM(){if(D_)return Wc;D_=1;var t=gM();return Wc.createRoot=t.createRoot,Wc.hydrateRoot=t.hydrateRoot,Wc}var _M=vM();const yM=K2(_M);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qm="170",xM=0,I_=1,SM=2,Z2=1,MM=2,rs=3,Zs=0,yi=1,ss=2,Ys=0,ka=1,Ga=2,U_=3,N_=4,EM=5,Ao=100,wM=101,TM=102,AM=103,CM=104,RM=200,bM=201,PM=202,LM=203,zp=204,Vp=205,DM=206,IM=207,UM=208,NM=209,FM=210,OM=211,kM=212,BM=213,zM=214,Hp=0,Gp=1,Wp=2,Wa=3,Xp=4,jp=5,qp=6,Yp=7,Q2=0,VM=1,HM=2,$s=0,GM=1,WM=2,XM=3,jM=4,qM=5,YM=6,$M=7,J2=300,Xa=301,ja=302,$p=303,Kp=304,Wf=306,Zp=1e3,bo=1001,Qp=1002,oi=1003,KM=1004,Xc=1005,Zt=1006,Jh=1007,Po=1008,xi=1009,ey=1010,ty=1011,xu=1012,Ym=1013,ko=1014,Ir=1015,Au=1016,$m=1017,Km=1018,qa=1020,ny=35902,iy=1021,ry=1022,Nn=1023,sy=1024,oy=1025,Ba=1026,Ya=1027,Zm=1028,Qm=1029,ay=1030,Jm=1031,eg=1033,Af=33776,Cf=33777,Rf=33778,bf=33779,Jp=35840,em=35841,tm=35842,nm=35843,im=36196,rm=37492,sm=37496,om=37808,am=37809,lm=37810,um=37811,cm=37812,fm=37813,dm=37814,hm=37815,pm=37816,mm=37817,gm=37818,vm=37819,_m=37820,ym=37821,Pf=36492,xm=36494,Sm=36495,ly=36283,Mm=36284,Em=36285,wm=36286,ZM=3200,QM=3201,JM=0,eE=1,js="",Ii="srgb",al="srgb-linear",Xf="linear",kt="srgb",va=7680,F_=519,tE=512,nE=513,iE=514,uy=515,rE=516,sE=517,oE=518,aE=519,O_=35044,gu=35048,k_="300 es",ls=2e3,Uf=2001;class ll{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(n);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ep=Math.PI/180,Tm=180/Math.PI;function Cu(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[t&255]+Wn[t>>8&255]+Wn[t>>16&255]+Wn[t>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function _i(t,e,n){return Math.max(e,Math.min(n,t))}function lE(t,e){return(t%e+e)%e}function tp(t,e,n){return(1-n)*t+n*e}function nu(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_i(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),a=this.x-e.x,u=this.y-e.y;return this.x=a*r-u*o+e.x,this.y=a*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,n,r,o,a,u,f,d,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,a,u,f,d,m)}set(e,n,r,o,a,u,f,d,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=n,v[4]=a,v[5]=d,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,u=r[0],f=r[3],d=r[6],m=r[1],v=r[4],p=r[7],_=r[2],S=r[5],M=r[8],w=o[0],x=o[3],y=o[6],P=o[1],L=o[4],R=o[7],j=o[2],F=o[5],N=o[8];return a[0]=u*w+f*P+d*j,a[3]=u*x+f*L+d*F,a[6]=u*y+f*R+d*N,a[1]=m*w+v*P+p*j,a[4]=m*x+v*L+p*F,a[7]=m*y+v*R+p*N,a[2]=_*w+S*P+M*j,a[5]=_*x+S*L+M*F,a[8]=_*y+S*R+M*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],m=e[7],v=e[8];return n*u*v-n*f*m-r*a*v+r*f*d+o*a*m-o*u*d}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],m=e[7],v=e[8],p=v*u-f*m,_=f*d-v*a,S=m*a-u*d,M=n*p+r*_+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=p*w,e[1]=(o*m-v*r)*w,e[2]=(f*r-o*u)*w,e[3]=_*w,e[4]=(v*n-o*d)*w,e[5]=(o*a-f*n)*w,e[6]=S*w,e[7]=(r*d-m*n)*w,e[8]=(u*n-r*a)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,a,u,f){const d=Math.cos(a),m=Math.sin(a);return this.set(r*d,r*m,-r*(d*u+m*f)+u+e,-o*m,o*d,-o*(-m*u+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(np.makeScale(e,n)),this}rotate(e){return this.premultiply(np.makeRotation(-e)),this}translate(e,n){return this.premultiply(np.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const np=new dt;function cy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function uE(){const t=Su("canvas");return t.style.display="block",t}const B_={};function du(t){t in B_||(B_[t]=!0,console.warn(t))}function cE(t,e,n){return new Promise(function(r,o){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:o();break;case t.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function fE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:al,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===kt&&(t.r=us(t.r),t.g=us(t.g),t.b=us(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===kt&&(t.r=za(t.r),t.g=za(t.g),t.b=za(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===js?Xf:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function za(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const z_=[.64,.33,.3,.6,.15,.06],V_=[.2126,.7152,.0722],H_=[.3127,.329],G_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[al]:{primaries:z_,whitePoint:H_,transfer:Xf,toXYZ:G_,fromXYZ:W_,luminanceCoefficients:V_,workingColorSpaceConfig:{unpackColorSpace:Ii},outputColorSpaceConfig:{drawingBufferColorSpace:Ii}},[Ii]:{primaries:z_,whitePoint:H_,transfer:kt,toXYZ:G_,fromXYZ:W_,luminanceCoefficients:V_,outputColorSpaceConfig:{drawingBufferColorSpace:Ii}}});let _a;class hE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_a===void 0&&(_a=Su("canvas")),_a.width=e.width,_a.height=e.height;const r=_a.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=_a}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Su("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=us(a[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(us(n[r]/255)*255):n[r]=us(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pE=0;class fy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Cu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?a.push(ip(o[u].image)):a.push(ip(o[u]))}else a=ip(o);r.url=a}return n||(e.images[this.uuid]=r),r}}function ip(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mE=0;class Fn extends ll{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=bo,o=bo,a=Zt,u=Po,f=Nn,d=xi,m=Fn.DEFAULT_ANISOTROPY,v=js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Cu(),this.name="",this.source=new fy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zp:e.x=e.x-Math.floor(e.x);break;case bo:e.x=e.x<0?0:1;break;case Qp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zp:e.y=e.y-Math.floor(e.y);break;case bo:e.y=e.y<0?0:1;break;case Qp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=J2;Fn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,n=0,r=0,o=1){fn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*a,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*a,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*a,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,a;const d=e.elements,m=d[0],v=d[4],p=d[8],_=d[1],S=d[5],M=d[9],w=d[2],x=d[6],y=d[10];if(Math.abs(v-_)<.01&&Math.abs(p-w)<.01&&Math.abs(M-x)<.01){if(Math.abs(v+_)<.1&&Math.abs(p+w)<.1&&Math.abs(M+x)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(S+1)/2,j=(y+1)/2,F=(v+_)/4,N=(p+w)/4,V=(M+x)/4;return L>R&&L>j?L<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(L),o=F/r,a=N/r):R>j?R<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),r=F/o,a=V/o):j<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(j),r=N/a,o=V/a),this.set(r,o,a,n),this}let P=Math.sqrt((x-M)*(x-M)+(p-w)*(p-w)+(_-v)*(_-v));return Math.abs(P)<.001&&(P=1),this.x=(x-M)/P,this.y=(p-w)/P,this.z=(_-v)/P,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gE extends ll{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new fn(0,0,e,n),this.scissorTest=!1,this.viewport=new fn(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const a=new Fn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new fy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends gE{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class dy extends Fn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=oi,this.minFilter=oi,this.wrapR=bo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends Fn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=oi,this.minFilter=oi,this.wrapR=bo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ru{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,a,u,f){let d=r[o+0],m=r[o+1],v=r[o+2],p=r[o+3];const _=a[u+0],S=a[u+1],M=a[u+2],w=a[u+3];if(f===0){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=p;return}if(f===1){e[n+0]=_,e[n+1]=S,e[n+2]=M,e[n+3]=w;return}if(p!==w||d!==_||m!==S||v!==M){let x=1-f;const y=d*_+m*S+v*M+p*w,P=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const j=Math.sqrt(L),F=Math.atan2(j,y*P);x=Math.sin(x*F)/j,f=Math.sin(f*F)/j}const R=f*P;if(d=d*x+_*R,m=m*x+S*R,v=v*x+M*R,p=p*x+w*R,x===1-f){const j=1/Math.sqrt(d*d+m*m+v*v+p*p);d*=j,m*=j,v*=j,p*=j}}e[n]=d,e[n+1]=m,e[n+2]=v,e[n+3]=p}static multiplyQuaternionsFlat(e,n,r,o,a,u){const f=r[o],d=r[o+1],m=r[o+2],v=r[o+3],p=a[u],_=a[u+1],S=a[u+2],M=a[u+3];return e[n]=f*M+v*p+d*S-m*_,e[n+1]=d*M+v*_+m*p-f*S,e[n+2]=m*M+v*S+f*_-d*p,e[n+3]=v*M-f*p-d*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,a=e._z,u=e._order,f=Math.cos,d=Math.sin,m=f(r/2),v=f(o/2),p=f(a/2),_=d(r/2),S=d(o/2),M=d(a/2);switch(u){case"XYZ":this._x=_*v*p+m*S*M,this._y=m*S*p-_*v*M,this._z=m*v*M+_*S*p,this._w=m*v*p-_*S*M;break;case"YXZ":this._x=_*v*p+m*S*M,this._y=m*S*p-_*v*M,this._z=m*v*M-_*S*p,this._w=m*v*p+_*S*M;break;case"ZXY":this._x=_*v*p-m*S*M,this._y=m*S*p+_*v*M,this._z=m*v*M+_*S*p,this._w=m*v*p-_*S*M;break;case"ZYX":this._x=_*v*p-m*S*M,this._y=m*S*p+_*v*M,this._z=m*v*M-_*S*p,this._w=m*v*p+_*S*M;break;case"YZX":this._x=_*v*p+m*S*M,this._y=m*S*p+_*v*M,this._z=m*v*M-_*S*p,this._w=m*v*p-_*S*M;break;case"XZY":this._x=_*v*p-m*S*M,this._y=m*S*p-_*v*M,this._z=m*v*M+_*S*p,this._w=m*v*p+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],a=n[8],u=n[1],f=n[5],d=n[9],m=n[2],v=n[6],p=n[10],_=r+f+p;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-d)*S,this._y=(a-m)*S,this._z=(u-o)*S}else if(r>f&&r>p){const S=2*Math.sqrt(1+r-f-p);this._w=(v-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(a+m)/S}else if(f>p){const S=2*Math.sqrt(1+f-r-p);this._w=(a-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+v)/S}else{const S=2*Math.sqrt(1+p-r-f);this._w=(u-o)/S,this._x=(a+m)/S,this._y=(d+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_i(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,a=e._z,u=e._w,f=n._x,d=n._y,m=n._z,v=n._w;return this._x=r*v+u*f+o*m-a*d,this._y=o*v+u*d+a*f-r*m,this._z=a*v+u*m+r*d-o*f,this._w=u*v-r*f-o*d-a*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,a=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+a*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=a,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*a+n*this._z,this.normalize(),this}const m=Math.sqrt(d),v=Math.atan2(m,f),p=Math.sin((1-n)*v)/m,_=Math.sin(n*v)/m;return this._w=u*p+this._w*_,this._x=r*p+this._x*_,this._y=o*p+this._y*_,this._z=a*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(X_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(X_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*o,this.y=a[1]*n+a[4]*r+a[7]*o,this.z=a[2]*n+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,a=e.elements,u=1/(a[3]*n+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*o+a[12])*u,this.y=(a[1]*n+a[5]*r+a[9]*o+a[13])*u,this.z=(a[2]*n+a[6]*r+a[10]*o+a[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,a=e.x,u=e.y,f=e.z,d=e.w,m=2*(u*o-f*r),v=2*(f*n-a*o),p=2*(a*r-u*n);return this.x=n+d*m+u*p-f*v,this.y=r+d*v+f*m-a*p,this.z=o+d*p+a*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*o,this.y=a[1]*n+a[5]*r+a[9]*o,this.z=a[2]*n+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,a=e.z,u=n.x,f=n.y,d=n.z;return this.x=o*d-a*f,this.y=a*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rp.copy(this).projectOnVector(e),this.sub(rp)}reflect(e){return this.sub(rp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_i(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rp=new $,X_=new Ru;class Ho{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(mr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(mr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=mr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=a.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,mr):mr.fromBufferAttribute(a,u),mr.applyMatrix4(e.matrixWorld),this.expandByPoint(mr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jc.copy(r.boundingBox)),jc.applyMatrix4(e.matrixWorld),this.union(jc)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mr),mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(iu),qc.subVectors(this.max,iu),ya.subVectors(e.a,iu),xa.subVectors(e.b,iu),Sa.subVectors(e.c,iu),Fs.subVectors(xa,ya),Os.subVectors(Sa,xa),vo.subVectors(ya,Sa);let n=[0,-Fs.z,Fs.y,0,-Os.z,Os.y,0,-vo.z,vo.y,Fs.z,0,-Fs.x,Os.z,0,-Os.x,vo.z,0,-vo.x,-Fs.y,Fs.x,0,-Os.y,Os.x,0,-vo.y,vo.x,0];return!sp(n,ya,xa,Sa,qc)||(n=[1,0,0,0,1,0,0,0,1],!sp(n,ya,xa,Sa,qc))?!1:(Yc.crossVectors(Fs,Os),n=[Yc.x,Yc.y,Yc.z],sp(n,ya,xa,Sa,qc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jr=[new $,new $,new $,new $,new $,new $,new $,new $],mr=new $,jc=new Ho,ya=new $,xa=new $,Sa=new $,Fs=new $,Os=new $,vo=new $,iu=new $,qc=new $,Yc=new $,_o=new $;function sp(t,e,n,r,o){for(let a=0,u=t.length-3;a<=u;a+=3){_o.fromArray(t,a);const f=o.x*Math.abs(_o.x)+o.y*Math.abs(_o.y)+o.z*Math.abs(_o.z),d=e.dot(_o),m=n.dot(_o),v=r.dot(_o);if(Math.max(-Math.max(d,m,v),Math.min(d,m,v))>f)return!1}return!0}const _E=new Ho,ru=new $,op=new $;class Go{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_E.setFromPoints(e).getCenter(r);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ru.subVectors(e,this.center);const n=ru.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(ru,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(op.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ru.copy(e.center).add(op)),this.expandByPoint(ru.copy(e.center).sub(op))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const es=new $,ap=new $,$c=new $,ks=new $,lp=new $,Kc=new $,up=new $;class tg{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=es.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,n),es.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){ap.copy(e).add(n).multiplyScalar(.5),$c.copy(n).sub(e).normalize(),ks.copy(this.origin).sub(ap);const a=e.distanceTo(n)*.5,u=-this.direction.dot($c),f=ks.dot(this.direction),d=-ks.dot($c),m=ks.lengthSq(),v=Math.abs(1-u*u);let p,_,S,M;if(v>0)if(p=u*d-f,_=u*f-d,M=a*v,p>=0)if(_>=-M)if(_<=M){const w=1/v;p*=w,_*=w,S=p*(p+u*_+2*f)+_*(u*p+_+2*d)+m}else _=a,p=Math.max(0,-(u*_+f)),S=-p*p+_*(_+2*d)+m;else _=-a,p=Math.max(0,-(u*_+f)),S=-p*p+_*(_+2*d)+m;else _<=-M?(p=Math.max(0,-(-u*a+f)),_=p>0?-a:Math.min(Math.max(-a,-d),a),S=-p*p+_*(_+2*d)+m):_<=M?(p=0,_=Math.min(Math.max(-a,-d),a),S=_*(_+2*d)+m):(p=Math.max(0,-(u*a+f)),_=p>0?a:Math.min(Math.max(-a,-d),a),S=-p*p+_*(_+2*d)+m);else _=u>0?-a:a,p=Math.max(0,-(u*_+f)),S=-p*p+_*(_+2*d)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(ap).addScaledVector($c,_),S}intersectSphere(e,n){es.subVectors(e.center,this.origin);const r=es.dot(this.direction),o=es.dot(es)-r*r,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,a,u,f,d;const m=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(a=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(a=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||a>o||((a>r||isNaN(r))&&(r=a),(u<o||isNaN(o))&&(o=u),p>=0?(f=(e.min.z-_.z)*p,d=(e.max.z-_.z)*p):(f=(e.max.z-_.z)*p,d=(e.min.z-_.z)*p),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,n,r,o,a){lp.subVectors(n,e),Kc.subVectors(r,e),up.crossVectors(lp,Kc);let u=this.direction.dot(up),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ks.subVectors(this.origin,e);const d=f*this.direction.dot(Kc.crossVectors(ks,Kc));if(d<0)return null;const m=f*this.direction.dot(lp.cross(ks));if(m<0||d+m>u)return null;const v=-f*ks.dot(up);return v<0?null:this.at(v/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,r,o,a,u,f,d,m,v,p,_,S,M,w,x){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,a,u,f,d,m,v,p,_,S,M,w,x)}set(e,n,r,o,a,u,f,d,m,v,p,_,S,M,w,x){const y=this.elements;return y[0]=e,y[4]=n,y[8]=r,y[12]=o,y[1]=a,y[5]=u,y[9]=f,y[13]=d,y[2]=m,y[6]=v,y[10]=p,y[14]=_,y[3]=S,y[7]=M,y[11]=w,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ma.setFromMatrixColumn(e,0).length(),a=1/Ma.setFromMatrixColumn(e,1).length(),u=1/Ma.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,a=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),m=Math.sin(o),v=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const _=u*v,S=u*p,M=f*v,w=f*p;n[0]=d*v,n[4]=-d*p,n[8]=m,n[1]=S+M*m,n[5]=_-w*m,n[9]=-f*d,n[2]=w-_*m,n[6]=M+S*m,n[10]=u*d}else if(e.order==="YXZ"){const _=d*v,S=d*p,M=m*v,w=m*p;n[0]=_+w*f,n[4]=M*f-S,n[8]=u*m,n[1]=u*p,n[5]=u*v,n[9]=-f,n[2]=S*f-M,n[6]=w+_*f,n[10]=u*d}else if(e.order==="ZXY"){const _=d*v,S=d*p,M=m*v,w=m*p;n[0]=_-w*f,n[4]=-u*p,n[8]=M+S*f,n[1]=S+M*f,n[5]=u*v,n[9]=w-_*f,n[2]=-u*m,n[6]=f,n[10]=u*d}else if(e.order==="ZYX"){const _=u*v,S=u*p,M=f*v,w=f*p;n[0]=d*v,n[4]=M*m-S,n[8]=_*m+w,n[1]=d*p,n[5]=w*m+_,n[9]=S*m-M,n[2]=-m,n[6]=f*d,n[10]=u*d}else if(e.order==="YZX"){const _=u*d,S=u*m,M=f*d,w=f*m;n[0]=d*v,n[4]=w-_*p,n[8]=M*p+S,n[1]=p,n[5]=u*v,n[9]=-f*v,n[2]=-m*v,n[6]=S*p+M,n[10]=_-w*p}else if(e.order==="XZY"){const _=u*d,S=u*m,M=f*d,w=f*m;n[0]=d*v,n[4]=-p,n[8]=m*v,n[1]=_*p+w,n[5]=u*v,n[9]=S*p-M,n[2]=M*p-S,n[6]=f*v,n[10]=w*p+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yE,e,xE)}lookAt(e,n,r){const o=this.elements;return Ci.subVectors(e,n),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Bs.crossVectors(r,Ci),Bs.lengthSq()===0&&(Math.abs(r.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Bs.crossVectors(r,Ci)),Bs.normalize(),Zc.crossVectors(Ci,Bs),o[0]=Bs.x,o[4]=Zc.x,o[8]=Ci.x,o[1]=Bs.y,o[5]=Zc.y,o[9]=Ci.y,o[2]=Bs.z,o[6]=Zc.z,o[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,a=this.elements,u=r[0],f=r[4],d=r[8],m=r[12],v=r[1],p=r[5],_=r[9],S=r[13],M=r[2],w=r[6],x=r[10],y=r[14],P=r[3],L=r[7],R=r[11],j=r[15],F=o[0],N=o[4],V=o[8],b=o[12],A=o[1],k=o[5],se=o[9],te=o[13],fe=o[2],he=o[6],oe=o[10],le=o[14],B=o[3],ae=o[7],re=o[11],U=o[15];return a[0]=u*F+f*A+d*fe+m*B,a[4]=u*N+f*k+d*he+m*ae,a[8]=u*V+f*se+d*oe+m*re,a[12]=u*b+f*te+d*le+m*U,a[1]=v*F+p*A+_*fe+S*B,a[5]=v*N+p*k+_*he+S*ae,a[9]=v*V+p*se+_*oe+S*re,a[13]=v*b+p*te+_*le+S*U,a[2]=M*F+w*A+x*fe+y*B,a[6]=M*N+w*k+x*he+y*ae,a[10]=M*V+w*se+x*oe+y*re,a[14]=M*b+w*te+x*le+y*U,a[3]=P*F+L*A+R*fe+j*B,a[7]=P*N+L*k+R*he+j*ae,a[11]=P*V+L*se+R*oe+j*re,a[15]=P*b+L*te+R*le+j*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],a=e[12],u=e[1],f=e[5],d=e[9],m=e[13],v=e[2],p=e[6],_=e[10],S=e[14],M=e[3],w=e[7],x=e[11],y=e[15];return M*(+a*d*p-o*m*p-a*f*_+r*m*_+o*f*S-r*d*S)+w*(+n*d*S-n*m*_+a*u*_-o*u*S+o*m*v-a*d*v)+x*(+n*m*p-n*f*S-a*u*p+r*u*S+a*f*v-r*m*v)+y*(-o*f*v-n*d*p+n*f*_+o*u*p-r*u*_+r*d*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],m=e[7],v=e[8],p=e[9],_=e[10],S=e[11],M=e[12],w=e[13],x=e[14],y=e[15],P=p*x*m-w*_*m+w*d*S-f*x*S-p*d*y+f*_*y,L=M*_*m-v*x*m-M*d*S+u*x*S+v*d*y-u*_*y,R=v*w*m-M*p*m+M*f*S-u*w*S-v*f*y+u*p*y,j=M*p*d-v*w*d-M*f*_+u*w*_+v*f*x-u*p*x,F=n*P+r*L+o*R+a*j;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=P*N,e[1]=(w*_*a-p*x*a-w*o*S+r*x*S+p*o*y-r*_*y)*N,e[2]=(f*x*a-w*d*a+w*o*m-r*x*m-f*o*y+r*d*y)*N,e[3]=(p*d*a-f*_*a-p*o*m+r*_*m+f*o*S-r*d*S)*N,e[4]=L*N,e[5]=(v*x*a-M*_*a+M*o*S-n*x*S-v*o*y+n*_*y)*N,e[6]=(M*d*a-u*x*a-M*o*m+n*x*m+u*o*y-n*d*y)*N,e[7]=(u*_*a-v*d*a+v*o*m-n*_*m-u*o*S+n*d*S)*N,e[8]=R*N,e[9]=(M*p*a-v*w*a-M*r*S+n*w*S+v*r*y-n*p*y)*N,e[10]=(u*w*a-M*f*a+M*r*m-n*w*m-u*r*y+n*f*y)*N,e[11]=(v*f*a-u*p*a-v*r*m+n*p*m+u*r*S-n*f*S)*N,e[12]=j*N,e[13]=(v*w*o-M*p*o+M*r*_-n*w*_-v*r*x+n*p*x)*N,e[14]=(M*f*o-u*w*o-M*r*d+n*w*d+u*r*x-n*f*x)*N,e[15]=(u*p*o-v*f*o+v*r*d-n*p*d-u*r*_+n*f*_)*N,this}scale(e){const n=this.elements,r=e.x,o=e.y,a=e.z;return n[0]*=r,n[4]*=o,n[8]*=a,n[1]*=r,n[5]*=o,n[9]*=a,n[2]*=r,n[6]*=o,n[10]*=a,n[3]*=r,n[7]*=o,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),a=1-r,u=e.x,f=e.y,d=e.z,m=a*u,v=a*f;return this.set(m*u+r,m*f-o*d,m*d+o*f,0,m*f+o*d,v*f+r,v*d-o*u,0,m*d-o*f,v*d+o*u,a*d*d+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,a,u){return this.set(1,r,a,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,a=n._x,u=n._y,f=n._z,d=n._w,m=a+a,v=u+u,p=f+f,_=a*m,S=a*v,M=a*p,w=u*v,x=u*p,y=f*p,P=d*m,L=d*v,R=d*p,j=r.x,F=r.y,N=r.z;return o[0]=(1-(w+y))*j,o[1]=(S+R)*j,o[2]=(M-L)*j,o[3]=0,o[4]=(S-R)*F,o[5]=(1-(_+y))*F,o[6]=(x+P)*F,o[7]=0,o[8]=(M+L)*N,o[9]=(x-P)*N,o[10]=(1-(_+w))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let a=Ma.set(o[0],o[1],o[2]).length();const u=Ma.set(o[4],o[5],o[6]).length(),f=Ma.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],gr.copy(this);const m=1/a,v=1/u,p=1/f;return gr.elements[0]*=m,gr.elements[1]*=m,gr.elements[2]*=m,gr.elements[4]*=v,gr.elements[5]*=v,gr.elements[6]*=v,gr.elements[8]*=p,gr.elements[9]*=p,gr.elements[10]*=p,n.setFromRotationMatrix(gr),r.x=a,r.y=u,r.z=f,this}makePerspective(e,n,r,o,a,u,f=ls){const d=this.elements,m=2*a/(n-e),v=2*a/(r-o),p=(n+e)/(n-e),_=(r+o)/(r-o);let S,M;if(f===ls)S=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(f===Uf)S=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=m,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=v,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,r,o,a,u,f=ls){const d=this.elements,m=1/(n-e),v=1/(r-o),p=1/(u-a),_=(n+e)*m,S=(r+o)*v;let M,w;if(f===ls)M=(u+a)*p,w=-2*p;else if(f===Uf)M=a*p,w=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*m,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*v,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ma=new $,gr=new qt,yE=new $(0,0,0),xE=new $(1,1,1),Bs=new $,Zc=new $,Ci=new $,j_=new qt,q_=new Ru;class cs{constructor(e=0,n=0,r=0,o=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,a=o[0],u=o[4],f=o[8],d=o[1],m=o[5],v=o[9],p=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(_i(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_i(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(_i(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_i(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(_i(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_i(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return j_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return q_.setFromEuler(this),this.setFromQuaternion(q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class hy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SE=0;const Y_=new $,Ea=new Ru,ts=new qt,Qc=new $,su=new $,ME=new $,EE=new Ru,$_=new $(1,0,0),K_=new $(0,1,0),Z_=new $(0,0,1),Q_={type:"added"},wE={type:"removed"},wa={type:"childadded",child:null},cp={type:"childremoved",child:null};class Yn extends ll{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Cu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new $,n=new cs,r=new Ru,o=new $(1,1,1);function a(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new dt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ea.setFromAxisAngle(e,n),this.quaternion.multiply(Ea),this}rotateOnWorldAxis(e,n){return Ea.setFromAxisAngle(e,n),this.quaternion.premultiply(Ea),this}rotateX(e){return this.rotateOnAxis($_,e)}rotateY(e){return this.rotateOnAxis(K_,e)}rotateZ(e){return this.rotateOnAxis(Z_,e)}translateOnAxis(e,n){return Y_.copy(e).applyQuaternion(this.quaternion),this.position.add(Y_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($_,e)}translateY(e){return this.translateOnAxis(K_,e)}translateZ(e){return this.translateOnAxis(Z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Qc.copy(e):Qc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),su.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(su,Qc,this.up):ts.lookAt(Qc,su,this.up),this.quaternion.setFromRotationMatrix(ts),o&&(ts.extractRotation(o.matrixWorld),Ea.setFromRotationMatrix(ts),this.quaternion.premultiply(Ea.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Q_),wa.child=e,this.dispatchEvent(wa),wa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wE),cp.child=e,this.dispatchEvent(cp),cp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(ts),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Q_),wa.child=e,this.dispatchEvent(wa),wa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(su,e,ME),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(su,EE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let m=0,v=d.length;m<v;m++){const p=d[m];a(e.shapes,p)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,m=this.material.length;d<m;d++)f.push(a(e.materials,this.material[d]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(a(e.animations,d))}}if(n){const f=u(e.geometries),d=u(e.materials),m=u(e.textures),v=u(e.images),p=u(e.shapes),_=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),p.length>0&&(r.shapes=p),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const m in f){const v=f[m];delete v.metadata,d.push(v)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Yn.DEFAULT_UP=new $(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vr=new $,ns=new $,fp=new $,is=new $,Ta=new $,Aa=new $,J_=new $,dp=new $,hp=new $,pp=new $,mp=new fn,gp=new fn,vp=new fn;class yr{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),vr.subVectors(e,n),o.cross(vr);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,n,r,o,a){vr.subVectors(o,n),ns.subVectors(r,n),fp.subVectors(e,n);const u=vr.dot(vr),f=vr.dot(ns),d=vr.dot(fp),m=ns.dot(ns),v=ns.dot(fp),p=u*m-f*f;if(p===0)return a.set(0,0,0),null;const _=1/p,S=(m*d-f*v)*_,M=(u*v-f*d)*_;return a.set(1-S-M,M,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(e,n,r,o,a,u,f,d){return this.getBarycoord(e,n,r,o,is)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,is.x),d.addScaledVector(u,is.y),d.addScaledVector(f,is.z),d)}static getInterpolatedAttribute(e,n,r,o,a,u){return mp.setScalar(0),gp.setScalar(0),vp.setScalar(0),mp.fromBufferAttribute(e,n),gp.fromBufferAttribute(e,r),vp.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(mp,a.x),u.addScaledVector(gp,a.y),u.addScaledVector(vp,a.z),u}static isFrontFacing(e,n,r,o){return vr.subVectors(r,n),ns.subVectors(e,n),vr.cross(ns).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vr.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),vr.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,a){return yr.getInterpolation(e,this.a,this.b,this.c,n,r,o,a)}containsPoint(e){return yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,a=this.c;let u,f;Ta.subVectors(o,r),Aa.subVectors(a,r),dp.subVectors(e,r);const d=Ta.dot(dp),m=Aa.dot(dp);if(d<=0&&m<=0)return n.copy(r);hp.subVectors(e,o);const v=Ta.dot(hp),p=Aa.dot(hp);if(v>=0&&p<=v)return n.copy(o);const _=d*p-v*m;if(_<=0&&d>=0&&v<=0)return u=d/(d-v),n.copy(r).addScaledVector(Ta,u);pp.subVectors(e,a);const S=Ta.dot(pp),M=Aa.dot(pp);if(M>=0&&S<=M)return n.copy(a);const w=S*m-d*M;if(w<=0&&m>=0&&M<=0)return f=m/(m-M),n.copy(r).addScaledVector(Aa,f);const x=v*M-S*p;if(x<=0&&p-v>=0&&S-M>=0)return J_.subVectors(a,o),f=(p-v)/(p-v+(S-M)),n.copy(o).addScaledVector(J_,f);const y=1/(x+w+_);return u=w*y,f=_*y,n.copy(r).addScaledVector(Ta,u).addScaledVector(Aa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function _p(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Ct.workingColorSpace){if(e=lE(e,1),n=_i(n,0,1),r=_i(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,u=2*r-a;this.r=_p(u,a,e+1/3),this.g=_p(u,a,e),this.b=_p(u,a,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,n=Ii){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ii){const r=py[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return Ct.fromWorkingColorSpace(Xn.copy(this),e),Math.round(_i(Xn.r*255,0,255))*65536+Math.round(_i(Xn.g*255,0,255))*256+Math.round(_i(Xn.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Xn.copy(this),n);const r=Xn.r,o=Xn.g,a=Xn.b,u=Math.max(r,o,a),f=Math.min(r,o,a);let d,m;const v=(f+u)/2;if(f===u)d=0,m=0;else{const p=u-f;switch(m=v<=.5?p/(u+f):p/(2-u-f),u){case r:d=(o-a)/p+(o<a?6:0);break;case o:d=(a-r)/p+2;break;case a:d=(r-o)/p+4;break}d/=6}return e.h=d,e.s=m,e.l=v,e}getRGB(e,n=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Xn.copy(this),n),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Ii){Ct.fromWorkingColorSpace(Xn.copy(this),e);const n=Xn.r,r=Xn.g,o=Xn.b;return e!==Ii?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(zs),this.setHSL(zs.h+e,zs.s+n,zs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(zs),e.getHSL(Jc);const r=tp(zs.h,Jc.h,n),o=tp(zs.s,Jc.s,n),a=tp(zs.l,Jc.l,n);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*n+a[3]*r+a[6]*o,this.g=a[1]*n+a[4]*r+a[7]*o,this.b=a[2]*n+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new yt;yt.NAMES=py;let TE=0;class ul extends ll{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Cu(),this.name="",this.blending=ka,this.side=Zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zp,this.blendDst=Vp,this.blendEquation=Ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(r.blending=this.blending),this.side!==Zs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zp&&(r.blendSrc=this.blendSrc),this.blendDst!==Vp&&(r.blendDst=this.blendDst),this.blendEquation!==Ao&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==va&&(r.stencilFail=this.stencilFail),this.stencilZFail!==va&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==va&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const u=[];for(const f in a){const d=a[f];delete d.metadata,u.push(d)}return u}if(n){const a=o(e.textures),u=o(e.images);a.length>0&&(r.textures=a),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ng extends ul{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=Q2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new $,ef=new Et;class $n{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=O_,this.updateRanges=[],this.gpuType=Ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ef.fromBufferAttribute(this,n),ef.applyMatrix3(e),this.setXY(n,ef.x,ef.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=nu(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=mi(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=nu(n,this.array)),n}setX(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=nu(n,this.array)),n}setY(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=nu(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=nu(n,this.array)),n}setW(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),r=mi(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),r=mi(r,this.array),o=mi(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,a){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),r=mi(r,this.array),o=mi(o,this.array),a=mi(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O_&&(e.usage=this.usage),e}}class my extends $n{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class gy extends $n{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ir extends $n{constructor(e,n,r){super(new Float32Array(e),n,r)}}let AE=0;const Ki=new qt,yp=new Yn,Ca=new $,Ri=new Ho,ou=new Ho,Pn=new $;class Fi extends ll{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Cu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cy(e)?gy:my)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new dt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ki.makeRotationFromQuaternion(e),this.applyMatrix4(Ki),this}rotateX(e){return Ki.makeRotationX(e),this.applyMatrix4(Ki),this}rotateY(e){return Ki.makeRotationY(e),this.applyMatrix4(Ki),this}rotateZ(e){return Ki.makeRotationZ(e),this.applyMatrix4(Ki),this}translate(e,n,r){return Ki.makeTranslation(e,n,r),this.applyMatrix4(Ki),this}scale(e,n,r){return Ki.makeScale(e,n,r),this.applyMatrix4(Ki),this}lookAt(e){return yp.lookAt(e),yp.updateMatrix(),this.applyMatrix4(yp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ir(r,3))}else{for(let r=0,o=n.count;r<o;r++){const a=e[r];n.setXYZ(r,a.x,a.y,a.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ri.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),n)for(let a=0,u=n.length;a<u;a++){const f=n[a];ou.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(Ri.min,ou.min),Ri.expandByPoint(Pn),Pn.addVectors(Ri.max,ou.max),Ri.expandByPoint(Pn)):(Ri.expandByPoint(ou.min),Ri.expandByPoint(ou.max))}Ri.getCenter(r);let o=0;for(let a=0,u=e.count;a<u;a++)Pn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(Pn));if(n)for(let a=0,u=n.length;a<u;a++){const f=n[a],d=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)Pn.fromBufferAttribute(f,m),d&&(Ca.fromBufferAttribute(e,m),Pn.add(Ca)),o=Math.max(o,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let V=0;V<r.count;V++)f[V]=new $,d[V]=new $;const m=new $,v=new $,p=new $,_=new Et,S=new Et,M=new Et,w=new $,x=new $;function y(V,b,A){m.fromBufferAttribute(r,V),v.fromBufferAttribute(r,b),p.fromBufferAttribute(r,A),_.fromBufferAttribute(a,V),S.fromBufferAttribute(a,b),M.fromBufferAttribute(a,A),v.sub(m),p.sub(m),S.sub(_),M.sub(_);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(w.copy(v).multiplyScalar(M.y).addScaledVector(p,-S.y).multiplyScalar(k),x.copy(p).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(k),f[V].add(w),f[b].add(w),f[A].add(w),d[V].add(x),d[b].add(x),d[A].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let V=0,b=P.length;V<b;++V){const A=P[V],k=A.start,se=A.count;for(let te=k,fe=k+se;te<fe;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new $,R=new $,j=new $,F=new $;function N(V){j.fromBufferAttribute(o,V),F.copy(j);const b=f[V];L.copy(b),L.sub(j.multiplyScalar(j.dot(b))).normalize(),R.crossVectors(F,b);const k=R.dot(d[V])<0?-1:1;u.setXYZW(V,L.x,L.y,L.z,k)}for(let V=0,b=P.length;V<b;++V){const A=P[V],k=A.start,se=A.count;for(let te=k,fe=k+se;te<fe;te+=3)N(e.getX(te+0)),N(e.getX(te+1)),N(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new $,a=new $,u=new $,f=new $,d=new $,m=new $,v=new $,p=new $;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),w=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(n,M),a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),v.subVectors(u,a),p.subVectors(o,a),v.cross(p),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,x),f.add(v),d.add(v),m.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),a.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,a),p.subVectors(o,a),v.cross(p),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(f,d){const m=f.array,v=f.itemSize,p=f.normalized,_=new m.constructor(d.length*v);let S=0,M=0;for(let w=0,x=d.length;w<x;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*v;for(let y=0;y<v;y++)_[M++]=m[S++]}return new $n(_,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fi,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],m=e(d,r);n.setAttribute(f,m)}const a=this.morphAttributes;for(const f in a){const d=[],m=a[f];for(let v=0,p=m.length;v<p;v++){const _=m[v],S=e(_,r);d.push(S)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(e[m]=d[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const d in r){const m=r[d];e.data.attributes[d]=m.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],v=[];for(let p=0,_=m.length;p<_;p++){const S=m[p];v.push(S.toJSON(e.data))}v.length>0&&(o[d]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const a=e.morphAttributes;for(const m in a){const v=[],p=a[m];for(let _=0,S=p.length;_<S;_++)v.push(p[_].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const p=u[m];this.addGroup(p.start,p.count,p.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const e1=new qt,yo=new tg,tf=new Go,t1=new $,nf=new $,rf=new $,sf=new $,xp=new $,of=new $,n1=new $,af=new $;class si extends Yn{constructor(e=new Fi,n=new ng){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){of.set(0,0,0);for(let d=0,m=a.length;d<m;d++){const v=f[d],p=a[d];v!==0&&(xp.fromBufferAttribute(p,e),u?of.addScaledVector(xp,v):of.addScaledVector(xp.sub(n),v))}n.add(of)}return n}raycast(e,n){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tf.copy(r.boundingSphere),tf.applyMatrix4(a),yo.copy(e.ray).recast(e.near),!(tf.containsPoint(yo.origin)===!1&&(yo.intersectSphere(tf,t1)===null||yo.origin.distanceToSquared(t1)>(e.far-e.near)**2))&&(e1.copy(a).invert(),yo.copy(e.ray).applyMatrix4(e1),!(r.boundingBox!==null&&yo.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,yo)))}_computeIntersections(e,n,r){let o;const a=this.geometry,u=this.material,f=a.index,d=a.attributes.position,m=a.attributes.uv,v=a.attributes.uv1,p=a.attributes.normal,_=a.groups,S=a.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,w=_.length;M<w;M++){const x=_[M],y=u[x.materialIndex],P=Math.max(x.start,S.start),L=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let R=P,j=L;R<j;R+=3){const F=f.getX(R),N=f.getX(R+1),V=f.getX(R+2);o=lf(this,y,e,r,m,v,p,F,N,V),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=M,y=w;x<y;x+=3){const P=f.getX(x),L=f.getX(x+1),R=f.getX(x+2);o=lf(this,u,e,r,m,v,p,P,L,R),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,w=_.length;M<w;M++){const x=_[M],y=u[x.materialIndex],P=Math.max(x.start,S.start),L=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=P,j=L;R<j;R+=3){const F=R,N=R+1,V=R+2;o=lf(this,y,e,r,m,v,p,F,N,V),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let x=M,y=w;x<y;x+=3){const P=x,L=x+1,R=x+2;o=lf(this,u,e,r,m,v,p,P,L,R),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function CE(t,e,n,r,o,a,u,f){let d;if(e.side===yi?d=r.intersectTriangle(u,a,o,!0,f):d=r.intersectTriangle(o,a,u,e.side===Zs,f),d===null)return null;af.copy(f),af.applyMatrix4(t.matrixWorld);const m=n.ray.origin.distanceTo(af);return m<n.near||m>n.far?null:{distance:m,point:af.clone(),object:t}}function lf(t,e,n,r,o,a,u,f,d,m){t.getVertexPosition(f,nf),t.getVertexPosition(d,rf),t.getVertexPosition(m,sf);const v=CE(t,e,n,r,nf,rf,sf,n1);if(v){const p=new $;yr.getBarycoord(n1,nf,rf,sf,p),o&&(v.uv=yr.getInterpolatedAttribute(o,f,d,m,p,new Et)),a&&(v.uv1=yr.getInterpolatedAttribute(a,f,d,m,p,new Et)),u&&(v.normal=yr.getInterpolatedAttribute(u,f,d,m,p,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:f,b:d,c:m,normal:new $,materialIndex:0};yr.getNormal(nf,rf,sf,_.normal),v.face=_,v.barycoord=p}return v}class bu extends Fi{constructor(e=1,n=1,r=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:a,depthSegments:u};const f=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const d=[],m=[],v=[],p=[];let _=0,S=0;M("z","y","x",-1,-1,r,n,e,u,a,0),M("z","y","x",1,-1,r,n,-e,u,a,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,a,4),M("x","y","z",-1,-1,e,n,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new ir(m,3)),this.setAttribute("normal",new ir(v,3)),this.setAttribute("uv",new ir(p,2));function M(w,x,y,P,L,R,j,F,N,V,b){const A=R/N,k=j/V,se=R/2,te=j/2,fe=F/2,he=N+1,oe=V+1;let le=0,B=0;const ae=new $;for(let re=0;re<oe;re++){const U=re*k-te;for(let ne=0;ne<he;ne++){const Ie=ne*A-se;ae[w]=Ie*P,ae[x]=U*L,ae[y]=fe,m.push(ae.x,ae.y,ae.z),ae[w]=0,ae[x]=0,ae[y]=F>0?1:-1,v.push(ae.x,ae.y,ae.z),p.push(ne/N),p.push(1-re/V),le+=1}}for(let re=0;re<V;re++)for(let U=0;U<N;U++){const ne=_+U+he*re,Ie=_+U+he*(re+1),Z=_+(U+1)+he*(re+1),ue=_+(U+1)+he*re;d.push(ne,Ie,ue),d.push(Ie,Z,ue),B+=6}f.addGroup(S,B,b),S+=B,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $a(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const o=t[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function ri(t){const e={};for(let n=0;n<t.length;n++){const r=$a(t[n]);for(const o in r)e[o]=r[o]}return e}function RE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const bE={clone:$a,merge:ri};var PE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends ul{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PE,this.fragmentShader=LE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=RE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class _y extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=ls}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vs=new $,i1=new Et,r1=new Et;class _r extends _y{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ep*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tm*2*Math.atan(Math.tan(ep*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z)}getViewSize(e,n){return this.getViewBounds(e,i1,r1),n.subVectors(r1,i1)}setViewOffset(e,n,r,o,a,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ep*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,m=u.fullHeight;a+=u.offsetX*o/d,n-=u.offsetY*r/m,o*=u.width/d,r*=u.height/m}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ra=-90,ba=1;class DE extends Yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new _r(Ra,ba,e,n);o.layers=this.layers,this.add(o);const a=new _r(Ra,ba,e,n);a.layers=this.layers,this.add(a);const u=new _r(Ra,ba,e,n);u.layers=this.layers,this.add(u);const f=new _r(Ra,ba,e,n);f.layers=this.layers,this.add(f);const d=new _r(Ra,ba,e,n);d.layers=this.layers,this.add(d);const m=new _r(Ra,ba,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,a,u,f,d]=n;for(const m of n)this.remove(m);if(e===ls)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Uf)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,f,d,m,v]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,a),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,d),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(p,_,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class yy extends Fn{constructor(e,n,r,o,a,u,f,d,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Xa,super(e,n,r,o,a,u,f,d,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IE extends rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new yy(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new bu(5,5,5),a=new Si({name:"CubemapFromEquirect",uniforms:$a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:yi,blending:Ys});a.uniforms.tEquirect.value=n;const u=new si(o,a),f=n.minFilter;return n.minFilter===Po&&(n.minFilter=Zt),new DE(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(a)}}const Sp=new $,UE=new $,NE=new dt;class wo{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Sp.subVectors(r,n).cross(UE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Sp),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||NE.getNormalMatrix(e),o=this.coplanarPoint(Sp).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xo=new Go,uf=new $;class xy{constructor(e=new wo,n=new wo,r=new wo,o=new wo,a=new wo,u=new wo){this.planes=[e,n,r,o,a,u]}set(e,n,r,o,a,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ls){const r=this.planes,o=e.elements,a=o[0],u=o[1],f=o[2],d=o[3],m=o[4],v=o[5],p=o[6],_=o[7],S=o[8],M=o[9],w=o[10],x=o[11],y=o[12],P=o[13],L=o[14],R=o[15];if(r[0].setComponents(d-a,_-m,x-S,R-y).normalize(),r[1].setComponents(d+a,_+m,x+S,R+y).normalize(),r[2].setComponents(d+u,_+v,x+M,R+P).normalize(),r[3].setComponents(d-u,_-v,x-M,R-P).normalize(),r[4].setComponents(d-f,_-p,x-w,R-L).normalize(),n===ls)r[5].setComponents(d+f,_+p,x+w,R+L).normalize();else if(n===Uf)r[5].setComponents(f,p,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xo)}intersectsSprite(e){return xo.center.set(0,0,0),xo.radius=.7071067811865476,xo.applyMatrix4(e.matrixWorld),this.intersectsSphere(xo)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(uf.x=o.normal.x>0?e.max.x:e.min.x,uf.y=o.normal.y>0?e.max.y:e.min.y,uf.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(uf)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sy(){let t=null,e=!1,n=null,r=null;function o(a,u){n(a,u),r=t.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(o),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function FE(t){const e=new WeakMap;function n(f,d){const m=f.array,v=f.usage,p=m.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,m,v),f.onUploadCallback();let S;if(m instanceof Float32Array)S=t.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=t.HALF_FLOAT:S=t.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=t.SHORT;else if(m instanceof Uint32Array)S=t.UNSIGNED_INT;else if(m instanceof Int32Array)S=t.INT;else if(m instanceof Int8Array)S=t.BYTE;else if(m instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:p}}function r(f,d,m){const v=d.array,p=d.updateRanges;if(t.bindBuffer(m,f),p.length===0)t.bufferSubData(m,0,v);else{p.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<p.length;S++){const M=p[_],w=p[S];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++_,p[_]=w)}p.length=_+1;for(let S=0,M=p.length;S<M;S++){const w=p[S];t.bufferSubData(m,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(t.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,d));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,d),m.version=f.version}}return{get:o,remove:a,update:u}}class eo extends Fi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const a=e/2,u=n/2,f=Math.floor(r),d=Math.floor(o),m=f+1,v=d+1,p=e/f,_=n/d,S=[],M=[],w=[],x=[];for(let y=0;y<v;y++){const P=y*_-u;for(let L=0;L<m;L++){const R=L*p-a;M.push(R,-P,0),w.push(0,0,1),x.push(L/f),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let P=0;P<f;P++){const L=P+m*y,R=P+m*(y+1),j=P+1+m*(y+1),F=P+1+m*y;S.push(L,R,F),S.push(R,j,F)}this.setIndex(S),this.setAttribute("position",new ir(M,3)),this.setAttribute("normal",new ir(w,3)),this.setAttribute("uv",new ir(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var OE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$E=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ow=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",pw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ew=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ww=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Aw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ow=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ww=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$w=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ST=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ET=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:OE,alphahash_pars_fragment:kE,alphamap_fragment:BE,alphamap_pars_fragment:zE,alphatest_fragment:VE,alphatest_pars_fragment:HE,aomap_fragment:GE,aomap_pars_fragment:WE,batching_pars_vertex:XE,batching_vertex:jE,begin_vertex:qE,beginnormal_vertex:YE,bsdfs:$E,iridescence_fragment:KE,bumpmap_pars_fragment:ZE,clipping_planes_fragment:QE,clipping_planes_pars_fragment:JE,clipping_planes_pars_vertex:ew,clipping_planes_vertex:tw,color_fragment:nw,color_pars_fragment:iw,color_pars_vertex:rw,color_vertex:sw,common:ow,cube_uv_reflection_fragment:aw,defaultnormal_vertex:lw,displacementmap_pars_vertex:uw,displacementmap_vertex:cw,emissivemap_fragment:fw,emissivemap_pars_fragment:dw,colorspace_fragment:hw,colorspace_pars_fragment:pw,envmap_fragment:mw,envmap_common_pars_fragment:gw,envmap_pars_fragment:vw,envmap_pars_vertex:_w,envmap_physical_pars_fragment:bw,envmap_vertex:yw,fog_vertex:xw,fog_pars_vertex:Sw,fog_fragment:Mw,fog_pars_fragment:Ew,gradientmap_pars_fragment:ww,lightmap_pars_fragment:Tw,lights_lambert_fragment:Aw,lights_lambert_pars_fragment:Cw,lights_pars_begin:Rw,lights_toon_fragment:Pw,lights_toon_pars_fragment:Lw,lights_phong_fragment:Dw,lights_phong_pars_fragment:Iw,lights_physical_fragment:Uw,lights_physical_pars_fragment:Nw,lights_fragment_begin:Fw,lights_fragment_maps:Ow,lights_fragment_end:kw,logdepthbuf_fragment:Bw,logdepthbuf_pars_fragment:zw,logdepthbuf_pars_vertex:Vw,logdepthbuf_vertex:Hw,map_fragment:Gw,map_pars_fragment:Ww,map_particle_fragment:Xw,map_particle_pars_fragment:jw,metalnessmap_fragment:qw,metalnessmap_pars_fragment:Yw,morphinstance_vertex:$w,morphcolor_vertex:Kw,morphnormal_vertex:Zw,morphtarget_pars_vertex:Qw,morphtarget_vertex:Jw,normal_fragment_begin:eT,normal_fragment_maps:tT,normal_pars_fragment:nT,normal_pars_vertex:iT,normal_vertex:rT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:oT,clearcoat_normal_fragment_maps:aT,clearcoat_pars_fragment:lT,iridescence_pars_fragment:uT,opaque_fragment:cT,packing:fT,premultiplied_alpha_fragment:dT,project_vertex:hT,dithering_fragment:pT,dithering_pars_fragment:mT,roughnessmap_fragment:gT,roughnessmap_pars_fragment:vT,shadowmap_pars_fragment:_T,shadowmap_pars_vertex:yT,shadowmap_vertex:xT,shadowmask_pars_fragment:ST,skinbase_vertex:MT,skinning_pars_vertex:ET,skinning_vertex:wT,skinnormal_vertex:TT,specularmap_fragment:AT,specularmap_pars_fragment:CT,tonemapping_fragment:RT,tonemapping_pars_fragment:bT,transmission_fragment:PT,transmission_pars_fragment:LT,uv_pars_fragment:DT,uv_pars_vertex:IT,uv_vertex:UT,worldpos_vertex:NT,background_vert:FT,background_frag:OT,backgroundCube_vert:kT,backgroundCube_frag:BT,cube_vert:zT,cube_frag:VT,depth_vert:HT,depth_frag:GT,distanceRGBA_vert:WT,distanceRGBA_frag:XT,equirect_vert:jT,equirect_frag:qT,linedashed_vert:YT,linedashed_frag:$T,meshbasic_vert:KT,meshbasic_frag:ZT,meshlambert_vert:QT,meshlambert_frag:JT,meshmatcap_vert:eA,meshmatcap_frag:tA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:rA,meshphong_frag:sA,meshphysical_vert:oA,meshphysical_frag:aA,meshtoon_vert:lA,meshtoon_frag:uA,points_vert:cA,points_frag:fA,shadow_vert:dA,shadow_frag:hA,sprite_vert:pA,sprite_frag:mA},be={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Dr={basic:{uniforms:ri([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:ri([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:ri([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:ri([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:ri([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new yt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:ri([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:ri([be.points,be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:ri([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:ri([be.common,be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:ri([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:ri([be.sprite,be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:ri([be.common,be.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:ri([be.lights,be.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Dr.physical={uniforms:ri([Dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const cf={r:0,b:0,g:0},So=new cs,gA=new qt;function vA(t,e,n,r,o,a,u){const f=new yt(0);let d=a===!0?0:1,m,v,p=null,_=0,S=null;function M(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?n:e).get(L)),L}function w(P){let L=!1;const R=M(P);R===null?y(f,d):R&&R.isColor&&(y(R,1),L=!0);const j=t.xr.getEnvironmentBlendMode();j==="additive"?r.buffers.color.setClear(0,0,0,1,u):j==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(t.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(P,L){const R=M(L);R&&(R.isCubeTexture||R.mapping===Wf)?(v===void 0&&(v=new si(new bu(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:$a(Dr.backgroundCube.uniforms),vertexShader:Dr.backgroundCube.vertexShader,fragmentShader:Dr.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(j,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),So.copy(L.backgroundRotation),So.x*=-1,So.y*=-1,So.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(So.y*=-1,So.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(gA.makeRotationFromEuler(So)),v.material.toneMapped=Ct.getTransfer(R.colorSpace)!==kt,(p!==R||_!==R.version||S!==t.toneMapping)&&(v.material.needsUpdate=!0,p=R,_=R.version,S=t.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new si(new eo(2,2),new Si({name:"BackgroundMaterial",uniforms:$a(Dr.background.uniforms),vertexShader:Dr.background.vertexShader,fragmentShader:Dr.background.fragmentShader,side:Zs,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(R.colorSpace)!==kt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||_!==R.version||S!==t.toneMapping)&&(m.material.needsUpdate=!0,p=R,_=R.version,S=t.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function y(P,L){P.getRGB(cf,vy(t)),r.buffers.color.setClear(cf.r,cf.g,cf.b,L,u)}return{getClearColor:function(){return f},setClearColor:function(P,L=1){f.set(P),d=L,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,y(f,d)},render:w,addToRenderList:x}}function _A(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},o=_(null);let a=o,u=!1;function f(A,k,se,te,fe){let he=!1;const oe=p(te,se,k);a!==oe&&(a=oe,m(a.object)),he=S(A,te,se,fe),he&&M(A,te,se,fe),fe!==null&&e.update(fe,t.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(A,k,se,te),fe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function d(){return t.createVertexArray()}function m(A){return t.bindVertexArray(A)}function v(A){return t.deleteVertexArray(A)}function p(A,k,se){const te=se.wireframe===!0;let fe=r[A.id];fe===void 0&&(fe={},r[A.id]=fe);let he=fe[k.id];he===void 0&&(he={},fe[k.id]=he);let oe=he[te];return oe===void 0&&(oe=_(d()),he[te]=oe),oe}function _(A){const k=[],se=[],te=[];for(let fe=0;fe<n;fe++)k[fe]=0,se[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:te,object:A,attributes:{},index:null}}function S(A,k,se,te){const fe=a.attributes,he=k.attributes;let oe=0;const le=se.getAttributes();for(const B in le)if(le[B].location>=0){const re=fe[B];let U=he[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;oe++}return a.attributesNum!==oe||a.index!==te}function M(A,k,se,te){const fe={},he=k.attributes;let oe=0;const le=se.getAttributes();for(const B in le)if(le[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[B]=U,oe++}a.attributes=fe,a.attributesNum=oe,a.index=te}function w(){const A=a.newAttributes;for(let k=0,se=A.length;k<se;k++)A[k]=0}function x(A){y(A,0)}function y(A,k){const se=a.newAttributes,te=a.enabledAttributes,fe=a.attributeDivisors;se[A]=1,te[A]===0&&(t.enableVertexAttribArray(A),te[A]=1),fe[A]!==k&&(t.vertexAttribDivisor(A,k),fe[A]=k)}function P(){const A=a.newAttributes,k=a.enabledAttributes;for(let se=0,te=k.length;se<te;se++)k[se]!==A[se]&&(t.disableVertexAttribArray(se),k[se]=0)}function L(A,k,se,te,fe,he,oe){oe===!0?t.vertexAttribIPointer(A,k,se,fe,he):t.vertexAttribPointer(A,k,se,te,fe,he)}function R(A,k,se,te){w();const fe=te.attributes,he=se.getAttributes(),oe=k.defaultAttributeValues;for(const le in he){const B=he[le];if(B.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,Me=Z===t.INT||Z===t.UNSIGNED_INT||ae.gpuType===Ym;if(ae.isInterleavedBufferAttribute){const _e=ae.data,Ae=_e.stride,Ue=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let nt=0;nt<B.locationSize;nt++)y(B.location+nt,_e.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let nt=0;nt<B.locationSize;nt++)x(B.location+nt);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let nt=0;nt<B.locationSize;nt++)L(B.location+nt,U/B.locationSize,Z,re,Ae*ue,(Ue+U/B.locationSize*nt)*ue,Me)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)y(B.location+_e,ae.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<B.locationSize;_e++)x(B.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let _e=0;_e<B.locationSize;_e++)L(B.location+_e,U/B.locationSize,Z,re,U*ue,U/B.locationSize*_e*ue,Me)}}else if(oe!==void 0){const re=oe[le];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(B.location,re);break;case 3:t.vertexAttrib3fv(B.location,re);break;case 4:t.vertexAttrib4fv(B.location,re);break;default:t.vertexAttrib1fv(B.location,re)}}}}P()}function j(){V();for(const A in r){const k=r[A];for(const se in k){const te=k[se];for(const fe in te)v(te[fe].object),delete te[fe];delete k[se]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const se in k){const te=k[se];for(const fe in te)v(te[fe].object),delete te[fe];delete k[se]}delete r[A.id]}function N(A){for(const k in r){const se=r[k];if(se[A.id]===void 0)continue;const te=se[A.id];for(const fe in te)v(te[fe].object),delete te[fe];delete se[A.id]}}function V(){b(),u=!0,a!==o&&(a=o,m(a.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:b,dispose:j,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:x,disableUnusedAttributes:P}}function yA(t,e,n){let r;function o(m){r=m}function a(m,v){t.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,p){p!==0&&(t.drawArraysInstanced(r,m,v,p),n.update(v,r,p))}function f(m,v,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,p);let S=0;for(let M=0;M<p;M++)S+=v[M];n.update(S,r,1)}function d(m,v,p,_){if(p===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<m.length;M++)u(m[M],v[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,_,0,p);let M=0;for(let w=0;w<p;w++)M+=v[w]*_[w];n.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function xA(t,e,n,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==Nn&&r.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const V=N===Au&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==xi&&r.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ir&&!V)}function d(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=d(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const p=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),P=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),L=t.getParameter(t.MAX_VARYING_VECTORS),R=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),j=M>0,F=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:p,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:j,maxSamples:F}}function SA(t){const e=this;let n=null,r=0,o=!1,a=!1;const u=new wo,f=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const S=p.length!==0||_||r!==0||o;return o=_,r=p.length,S},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,_){n=v(p,_,0)},this.setState=function(p,_,S){const M=p.clippingPlanes,w=p.clipIntersection,x=p.clipShadows,y=t.get(p);if(!o||M===null||M.length===0||a&&!x)a?v(null):m();else{const P=a?0:r,L=P*4;let R=y.clippingState||null;d.value=R,R=v(M,_,L,S);for(let j=0;j!==L;++j)R[j]=n[j];y.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){d.value!==n&&(d.value=n,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(p,_,S,M){const w=p!==null?p.length:0;let x=null;if(w!==0){if(x=d.value,M!==!0||x===null){const y=S+w*4,P=_.matrixWorldInverse;f.getNormalMatrix(P),(x===null||x.length<y)&&(x=new Float32Array(y));for(let L=0,R=S;L!==w;++L,R+=4)u.copy(p[L]).applyMatrix4(P,f),u.normal.toArray(x,R),x[R+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function MA(t){let e=new WeakMap;function n(u,f){return f===$p?u.mapping=Xa:f===Kp&&(u.mapping=ja),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===$p||f===Kp)if(e.has(u)){const d=e.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const m=new IE(d.height);return m.fromEquirectangularTexture(t,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Pu extends _y{constructor(e=-1,n=1,r=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,u=r+e,f=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=m*this.view.offsetX,u=a+m*this.view.width,f-=v*this.view.offsetY,d=f-v*this.view.height}this.projectionMatrix.makeOrthographic(a,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fa=4,s1=[.125,.215,.35,.446,.526,.582],Co=20,Mp=new Pu,o1=new yt;let Ep=null,wp=0,Tp=0,Ap=!1;const To=(1+Math.sqrt(5))/2,Pa=1/To,a1=[new $(-To,Pa,0),new $(To,Pa,0),new $(-Pa,0,To),new $(Pa,0,To),new $(0,To,-Pa),new $(0,To,Pa),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class l1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Ep=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,o,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ep,wp,Tp),this._renderer.xr.enabled=Ap,e.scissorTest=!1,ff(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xa||e.mapping===ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ep=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Au,format:Nn,colorSpace:al,depthBuffer:!1},o=u1(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u1(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EA(a)),this._blurMaterial=wA(a,e,n)}return o}_compileMaterial(e){const n=new si(this._lodPlanes[0],e);this._renderer.compile(n,Mp)}_sceneToCubeUV(e,n,r,o){const f=new _r(90,1,n,r),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,_=v.toneMapping;v.getClearColor(o1),v.toneMapping=$s,v.autoClear=!1;const S=new ng({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1}),M=new si(new bu,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(o1),w=!0);for(let y=0;y<6;y++){const P=y%3;P===0?(f.up.set(0,d[y],0),f.lookAt(m[y],0,0)):P===1?(f.up.set(0,0,d[y]),f.lookAt(0,m[y],0)):(f.up.set(0,d[y],0),f.lookAt(0,0,m[y]));const L=this._cubeSize;ff(o,P*L,y>2?L:0,L,L),v.setRenderTarget(o),w&&v.render(M,f),v.render(e,f)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=_,v.autoClear=p,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Xa||e.mapping===ja;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=f1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c1());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new si(this._lodPlanes[0],a),f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;ff(n,0,0,3*d,2*d),r.setRenderTarget(n),r.render(u,Mp)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=a1[(o-a-1)%a1.length];this._blur(e,a-1,a,u,f)}n.autoClear=r}_blur(e,n,r,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",a),this._halfBlur(u,e,r,r,o,"longitudinal",a)}_halfBlur(e,n,r,o,a,u,f){const d=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new si(this._lodPlanes[o],m),_=m.uniforms,S=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Co-1),w=a/M,x=isFinite(a)?1+Math.floor(v*w):Co;x>Co&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Co}`);const y=[];let P=0;for(let N=0;N<Co;++N){const V=N/w,b=Math.exp(-V*V/2);y.push(b),N===0?P+=b:N<x&&(P+=2*b)}for(let N=0;N<y.length;N++)y[N]=y[N]/P;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-r;const R=this._sizeLods[o],j=3*R*(o>L-Fa?o-L+Fa:0),F=4*(this._cubeSize-R);ff(n,j,F,3*R,2*R),d.setRenderTarget(n),d.render(p,Mp)}}function EA(t){const e=[],n=[],r=[];let o=t;const a=t-Fa+1+s1.length;for(let u=0;u<a;u++){const f=Math.pow(2,o);n.push(f);let d=1/f;u>t-Fa?d=s1[u-t+Fa-1]:u===0&&(d=0),r.push(d);const m=1/(f-2),v=-m,p=1+m,_=[v,v,p,v,p,p,v,v,p,p,v,p],S=6,M=6,w=3,x=2,y=1,P=new Float32Array(w*M*S),L=new Float32Array(x*M*S),R=new Float32Array(y*M*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,V=F>2?0:-1,b=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];P.set(b,w*M*F),L.set(_,x*M*F);const A=[F,F,F,F,F,F];R.set(A,y*M*F)}const j=new Fi;j.setAttribute("position",new $n(P,w)),j.setAttribute("uv",new $n(L,x)),j.setAttribute("faceIndex",new $n(R,y)),e.push(j),o>Fa&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function u1(t,e,n){const r=new rr(t,e,n);return r.texture.mapping=Wf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ff(t,e,n,r,o){t.viewport.set(e,n,r,o),t.scissor.set(e,n,r,o)}function wA(t,e,n){const r=new Float32Array(Co),o=new $(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ig(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function c1(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ig(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function f1(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ig(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function ig(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TA(t){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const d=f.mapping,m=d===$p||d===Kp,v=d===Xa||d===ja;if(m||v){let p=e.get(f);const _=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new l1(t)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return m&&S&&S.height>0||v&&S&&o(S)?(n===null&&(n=new l1(t)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",a),p.texture):null}}}return f}function o(f){let d=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function a(f){const d=f.target;d.removeEventListener("dispose",a);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function AA(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=t.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&du("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function CA(t,e,n,r){const o={},a=new WeakMap;function u(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const w=_.morphAttributes[M];for(let x=0,y=w.length;x<y;x++)e.remove(w[x])}_.removeEventListener("dispose",u),delete o[_.id];const S=a.get(_);S&&(e.remove(S),a.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(p,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function d(p){const _=p.attributes;for(const M in _)e.update(_[M],t.ARRAY_BUFFER);const S=p.morphAttributes;for(const M in S){const w=S[M];for(let x=0,y=w.length;x<y;x++)e.update(w[x],t.ARRAY_BUFFER)}}function m(p){const _=[],S=p.index,M=p.attributes.position;let w=0;if(S!==null){const P=S.array;w=S.version;for(let L=0,R=P.length;L<R;L+=3){const j=P[L+0],F=P[L+1],N=P[L+2];_.push(j,F,F,N,N,j)}}else if(M!==void 0){const P=M.array;w=M.version;for(let L=0,R=P.length/3-1;L<R;L+=3){const j=L+0,F=L+1,N=L+2;_.push(j,F,F,N,N,j)}}else return;const x=new(cy(_)?gy:my)(_,1);x.version=w;const y=a.get(p);y&&e.remove(y),a.set(p,x)}function v(p){const _=a.get(p);if(_){const S=p.index;S!==null&&_.version<S.version&&m(p)}else m(p);return a.get(p)}return{get:f,update:d,getWireframeAttribute:v}}function RA(t,e,n){let r;function o(_){r=_}let a,u;function f(_){a=_.type,u=_.bytesPerElement}function d(_,S){t.drawElements(r,S,a,_*u),n.update(S,r,1)}function m(_,S,M){M!==0&&(t.drawElementsInstanced(r,S,a,_*u,M),n.update(S,r,M))}function v(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,a,_,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];n.update(x,r,1)}function p(_,S,M,w){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<_.length;y++)m(_[y]/u,S[y],w[y]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,a,_,0,w,0,M);let y=0;for(let P=0;P<M;P++)y+=S[P]*w[P];n.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function bA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,u,f){switch(n.calls++,u){case t.TRIANGLES:n.triangles+=f*(a/3);break;case t.LINES:n.lines+=f*(a/2);break;case t.LINE_STRIP:n.lines+=f*(a-1);break;case t.LINE_LOOP:n.lines+=f*a;break;case t.POINTS:n.points+=f*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function PA(t,e,n){const r=new WeakMap,o=new fn;function a(u,f,d){const m=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,p=v!==void 0?v.length:0;let _=r.get(f);if(_===void 0||_.count!==p){let A=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),w===!0&&(R=2),x===!0&&(R=3);let j=f.attributes.position.count*R,F=1;j>e.maxTextureSize&&(F=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const N=new Float32Array(j*F*4*p),V=new dy(N,j,F,p);V.type=Ir,V.needsUpdate=!0;const b=R*4;for(let k=0;k<p;k++){const se=y[k],te=P[k],fe=L[k],he=j*F*4*k;for(let oe=0;oe<se.count;oe++){const le=oe*b;M===!0&&(o.fromBufferAttribute(se,oe),N[he+le+0]=o.x,N[he+le+1]=o.y,N[he+le+2]=o.z,N[he+le+3]=0),w===!0&&(o.fromBufferAttribute(te,oe),N[he+le+4]=o.x,N[he+le+5]=o.y,N[he+le+6]=o.z,N[he+le+7]=0),x===!0&&(o.fromBufferAttribute(fe,oe),N[he+le+8]=o.x,N[he+le+9]=o.y,N[he+le+10]=o.z,N[he+le+11]=fe.itemSize===4?o.w:1)}}_={count:p,texture:V,size:new Et(j,F)},r.set(f,_),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let M=0;for(let x=0;x<m.length;x++)M+=m[x];const w=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(t,"morphTargetBaseInfluence",w),d.getUniforms().setValue(t,"morphTargetInfluences",m)}d.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}return{update:a}}function LA(t,e,n,r){let o=new WeakMap;function a(d){const m=r.render.frame,v=d.geometry,p=e.get(d,v);if(o.get(p)!==m&&(e.update(p),o.set(p,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==m&&(n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER),o.set(d,m))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return p}function u(){o=new WeakMap}function f(d){const m=d.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:a,dispose:u}}class My extends Fn{constructor(e,n,r,o,a,u,f,d,m,v=Ba){if(v!==Ba&&v!==Ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ba&&(r=ko),r===void 0&&v===Ya&&(r=qa),super(null,o,a,u,f,d,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:oi,this.minFilter=d!==void 0?d:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ey=new Fn,d1=new My(1,1),wy=new dy,Ty=new vE,Ay=new yy,h1=[],p1=[],m1=new Float32Array(16),g1=new Float32Array(9),v1=new Float32Array(4);function cl(t,e,n){const r=t[0];if(r<=0||r>0)return t;const o=e*n;let a=h1[o];if(a===void 0&&(a=new Float32Array(o),h1[o]=a),e!==0){r.toArray(a,0);for(let u=1,f=0;u!==e;++u)f+=n,t[u].toArray(a,f)}return a}function wn(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Tn(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function jf(t,e){let n=p1[e];n===void 0&&(n=new Int32Array(e),p1[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function DA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2fv(this.addr,e),Tn(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wn(n,e))return;t.uniform3fv(this.addr,e),Tn(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4fv(this.addr,e),Tn(n,e)}}function FA(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(wn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,r))return;v1.set(r),t.uniformMatrix2fv(this.addr,!1,v1),Tn(n,r)}}function OA(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(wn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,r))return;g1.set(r),t.uniformMatrix3fv(this.addr,!1,g1),Tn(n,r)}}function kA(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(wn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,r))return;m1.set(r),t.uniformMatrix4fv(this.addr,!1,m1),Tn(n,r)}}function BA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2iv(this.addr,e),Tn(n,e)}}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;t.uniform3iv(this.addr,e),Tn(n,e)}}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4iv(this.addr,e),Tn(n,e)}}function GA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2uiv(this.addr,e),Tn(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;t.uniform3uiv(this.addr,e),Tn(n,e)}}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4uiv(this.addr,e),Tn(n,e)}}function qA(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o);let a;this.type===t.SAMPLER_2D_SHADOW?(d1.compareFunction=uy,a=d1):a=Ey,n.setTexture2D(e||a,o)}function YA(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Ty,o)}function $A(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Ay,o)}function KA(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||wy,o)}function ZA(t){switch(t){case 5126:return DA;case 35664:return IA;case 35665:return UA;case 35666:return NA;case 35674:return FA;case 35675:return OA;case 35676:return kA;case 5124:case 35670:return BA;case 35667:case 35671:return zA;case 35668:case 35672:return VA;case 35669:case 35673:return HA;case 5125:return GA;case 36294:return WA;case 36295:return XA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return YA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return KA}}function QA(t,e){t.uniform1fv(this.addr,e)}function JA(t,e){const n=cl(e,this.size,2);t.uniform2fv(this.addr,n)}function e4(t,e){const n=cl(e,this.size,3);t.uniform3fv(this.addr,n)}function t4(t,e){const n=cl(e,this.size,4);t.uniform4fv(this.addr,n)}function n4(t,e){const n=cl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function i4(t,e){const n=cl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function r4(t,e){const n=cl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function s4(t,e){t.uniform1iv(this.addr,e)}function o4(t,e){t.uniform2iv(this.addr,e)}function a4(t,e){t.uniform3iv(this.addr,e)}function l4(t,e){t.uniform4iv(this.addr,e)}function u4(t,e){t.uniform1uiv(this.addr,e)}function c4(t,e){t.uniform2uiv(this.addr,e)}function f4(t,e){t.uniform3uiv(this.addr,e)}function d4(t,e){t.uniform4uiv(this.addr,e)}function h4(t,e,n){const r=this.cache,o=e.length,a=jf(n,o);wn(r,a)||(t.uniform1iv(this.addr,a),Tn(r,a));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Ey,a[u])}function p4(t,e,n){const r=this.cache,o=e.length,a=jf(n,o);wn(r,a)||(t.uniform1iv(this.addr,a),Tn(r,a));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Ty,a[u])}function m4(t,e,n){const r=this.cache,o=e.length,a=jf(n,o);wn(r,a)||(t.uniform1iv(this.addr,a),Tn(r,a));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Ay,a[u])}function g4(t,e,n){const r=this.cache,o=e.length,a=jf(n,o);wn(r,a)||(t.uniform1iv(this.addr,a),Tn(r,a));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||wy,a[u])}function v4(t){switch(t){case 5126:return QA;case 35664:return JA;case 35665:return e4;case 35666:return t4;case 35674:return n4;case 35675:return i4;case 35676:return r4;case 5124:case 35670:return s4;case 35667:case 35671:return o4;case 35668:case 35672:return a4;case 35669:case 35673:return l4;case 5125:return u4;case 36294:return c4;case 36295:return f4;case 36296:return d4;case 35678:case 36198:case 36298:case 36306:case 35682:return h4;case 35679:case 36299:case 36307:return p4;case 35680:case 36300:case 36308:case 36293:return m4;case 36289:case 36303:case 36311:case 36292:return g4}}class _4{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=ZA(n.type)}}class y4{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=v4(n.type)}}class x4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const f=o[a];f.setValue(e,n[f.id],r)}}}const Cp=/(\w+)(\])?(\[|\.)?/g;function _1(t,e){t.seq.push(e),t.map[e.id]=e}function S4(t,e,n){const r=t.name,o=r.length;for(Cp.lastIndex=0;;){const a=Cp.exec(r),u=Cp.lastIndex;let f=a[1];const d=a[2]==="]",m=a[3];if(d&&(f=f|0),m===void 0||m==="["&&u+2===o){_1(n,m===void 0?new _4(f,t,e):new y4(f,t,e));break}else{let p=n.map[f];p===void 0&&(p=new x4(f),_1(n,p)),n=p}}}class Lf{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const a=e.getActiveUniform(n,o),u=e.getUniformLocation(n,a.name);S4(a,u,this)}}setValue(e,n,r,o){const a=this.map[n];a!==void 0&&a.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let a=0,u=n.length;a!==u;++a){const f=n[a],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function y1(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const M4=37297;let E4=0;function w4(t,e){const n=t.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let u=o;u<a;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const x1=new dt;function T4(t){Ct._getMatrix(x1,Ct.workingColorSpace,t);const e=`mat3( ${x1.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(t)){case Xf:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function S1(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),o=t.getShaderInfoLog(e).trim();if(r&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return n.toUpperCase()+`

`+o+`

`+w4(t.getShaderSource(e),u)}else return o}function A4(t,e){const n=T4(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function C4(t,e){let n;switch(e){case GM:n="Linear";break;case WM:n="Reinhard";break;case XM:n="Cineon";break;case jM:n="ACESFilmic";break;case YM:n="AgX";break;case $M:n="Neutral";break;case qM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const df=new $;function R4(){Ct.getLuminanceCoefficients(df);const t=df.x.toFixed(4),e=df.y.toFixed(4),n=df.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b4(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hu).join(`
`)}function P4(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function L4(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=t.getActiveAttrib(e,o),u=a.name;let f=1;a.type===t.FLOAT_MAT2&&(f=2),a.type===t.FLOAT_MAT3&&(f=3),a.type===t.FLOAT_MAT4&&(f=4),n[u]={type:a.type,location:t.getAttribLocation(e,u),locationSize:f}}return n}function hu(t){return t!==""}function M1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D4=/^[ \t]*#include +<([\w\d./]+)>/gm;function Am(t){return t.replace(D4,U4)}const I4=new Map;function U4(t,e){let n=ht[e];if(n===void 0){const r=I4.get(e);if(r!==void 0)n=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Am(n)}const N4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w1(t){return t.replace(N4,F4)}function F4(t,e,n,r){let o="";for(let a=parseInt(e);a<parseInt(n);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function T1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O4(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Z2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===MM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===rs&&(e="SHADOWMAP_TYPE_VSM"),e}function k4(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xa:case ja:e="ENVMAP_TYPE_CUBE";break;case Wf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B4(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ja:e="ENVMAP_MODE_REFRACTION";break}return e}function z4(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Q2:e="ENVMAP_BLENDING_MULTIPLY";break;case VM:e="ENVMAP_BLENDING_MIX";break;case HM:e="ENVMAP_BLENDING_ADD";break}return e}function V4(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function H4(t,e,n,r){const o=t.getContext(),a=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=O4(n),m=k4(n),v=B4(n),p=z4(n),_=V4(n),S=b4(n),M=P4(a),w=o.createProgram();let x,y,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(hu).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(hu).join(`
`),y.length>0&&(y+=`
`)):(x=[T1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hu).join(`
`),y=[T1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$s?"#define TONE_MAPPING":"",n.toneMapping!==$s?ht.tonemapping_pars_fragment:"",n.toneMapping!==$s?C4("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,A4("linearToOutputTexel",n.outputColorSpace),R4(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hu).join(`
`)),u=Am(u),u=M1(u,n),u=E1(u,n),f=Am(f),f=M1(f,n),f=E1(f,n),u=w1(u),f=w1(f),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===k_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===k_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=P+x+u,R=P+y+f,j=y1(o,o.VERTEX_SHADER,L),F=y1(o,o.FRAGMENT_SHADER,R);o.attachShader(w,j),o.attachShader(w,F),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function N(k){if(t.debug.checkShaderErrors){const se=o.getProgramInfoLog(w).trim(),te=o.getShaderInfoLog(j).trim(),fe=o.getShaderInfoLog(F).trim();let he=!0,oe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(he=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,w,j,F);else{const le=S1(o,j,"vertex"),B=S1(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+se+`
`+le+`
`+B)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(te===""||fe==="")&&(oe=!1);oe&&(k.diagnostics={runnable:he,programLog:se,vertexShader:{log:te,prefix:x},fragmentShader:{log:fe,prefix:y}})}o.deleteShader(j),o.deleteShader(F),V=new Lf(o,w),b=L4(o,w)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,M4)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=E4++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=j,this.fragmentShader=F,this}let G4=0;class W4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),a=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new X4(e),n.set(e,r)),r}}class X4{constructor(e){this.id=G4++,this.code=e,this.usedTimes=0}}function j4(t,e,n,r,o,a,u){const f=new hy,d=new W4,m=new Set,v=[],p=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return m.add(b),b===0?"uv":`uv${b}`}function x(b,A,k,se,te){const fe=se.fog,he=te.geometry,oe=b.isMeshStandardMaterial?se.environment:null,le=(b.isMeshStandardMaterial?n:e).get(b.envMap||oe),B=le&&le.mapping===Wf?le.image.height:null,ae=M[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ie,Z,ue,Me;if(ae){const Tt=Dr[ae];Ie=Tt.vertexShader,Z=Tt.fragmentShader}else Ie=b.vertexShader,Z=b.fragmentShader,d.update(b),ue=d.getVertexShaderID(b),Me=d.getFragmentShaderID(b);const _e=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,nt=te.isBatchedMesh===!0,Ot=!!b.map,xt=!!b.matcap,Ht=!!le,X=!!b.aoMap,Qn=!!b.lightMap,_t=!!b.bumpMap,mt=!!b.normalMap,Je=!!b.displacementMap,Nt=!!b.emissiveMap,Ze=!!b.metalnessMap,D=!!b.roughnessMap,T=b.anisotropy>0,K=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,ce=b.sheen>0,Ge=b.transmission>0,Ce=T&&!!b.anisotropyMap,Ne=K&&!!b.clearcoatMap,pt=K&&!!b.clearcoatNormalMap,xe=K&&!!b.clearcoatRoughnessMap,Oe=ge&&!!b.iridescenceMap,it=ge&&!!b.iridescenceThicknessMap,st=ce&&!!b.sheenColorMap,ke=ce&&!!b.sheenRoughnessMap,gt=!!b.specularMap,ut=!!b.specularColorMap,Ut=!!b.specularIntensityMap,H=Ge&&!!b.transmissionMap,Re=Ge&&!!b.thicknessMap,ie=!!b.gradientMap,de=!!b.alphaMap,Le=b.alphaTest>0,Pe=!!b.alphaHash,ct=!!b.extensions;let Wt=$s;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Wt=t.toneMapping);const vn={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Z,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:nt,batchingColor:nt&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:al,alphaToCoverage:!!b.alphaToCoverage,map:Ot,matcap:xt,envMap:Ht,envMapMode:Ht&&le.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:Qn,bumpMap:_t,normalMap:mt,displacementMap:_&&Je,emissiveMap:Nt,normalMapObjectSpace:mt&&b.normalMapType===eE,normalMapTangentSpace:mt&&b.normalMapType===JM,metalnessMap:Ze,roughnessMap:D,anisotropy:T,anisotropyMap:Ce,clearcoat:K,clearcoatMap:Ne,clearcoatNormalMap:pt,clearcoatRoughnessMap:xe,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:it,sheen:ce,sheenColorMap:st,sheenRoughnessMap:ke,specularMap:gt,specularColorMap:ut,specularIntensityMap:Ut,transmission:Ge,transmissionMap:H,thicknessMap:Re,gradientMap:ie,opaque:b.transparent===!1&&b.blending===ka&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:Le,alphaHash:Pe,combine:b.combine,mapUv:Ot&&w(b.map.channel),aoMapUv:X&&w(b.aoMap.channel),lightMapUv:Qn&&w(b.lightMap.channel),bumpMapUv:_t&&w(b.bumpMap.channel),normalMapUv:mt&&w(b.normalMap.channel),displacementMapUv:Je&&w(b.displacementMap.channel),emissiveMapUv:Nt&&w(b.emissiveMap.channel),metalnessMapUv:Ze&&w(b.metalnessMap.channel),roughnessMapUv:D&&w(b.roughnessMap.channel),anisotropyMapUv:Ce&&w(b.anisotropyMap.channel),clearcoatMapUv:Ne&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:it&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:st&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(b.sheenRoughnessMap.channel),specularMapUv:gt&&w(b.specularMap.channel),specularColorMapUv:ut&&w(b.specularColorMap.channel),specularIntensityMapUv:Ut&&w(b.specularIntensityMap.channel),transmissionMapUv:H&&w(b.transmissionMap.channel),thicknessMapUv:Re&&w(b.thicknessMap.channel),alphaMapUv:de&&w(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(mt||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Ot||de),fog:!!fe,useFog:b.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Ae,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Ot&&b.map.isVideoTexture===!0&&Ct.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:Nt&&b.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ss,flipSided:b.side===yi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ct&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&b.extensions.multiDraw===!0||nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return vn.vertexUv1s=m.has(1),vn.vertexUv2s=m.has(2),vn.vertexUv3s=m.has(3),m.clear(),vn}function y(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)A.push(k),A.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(P(A,b),L(A,b),A.push(t.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function P(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function L(b,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const A=M[b.type];let k;if(A){const se=Dr[A];k=bE.clone(se.uniforms)}else k=b.uniforms;return k}function j(b,A){let k;for(let se=0,te=v.length;se<te;se++){const fe=v[se];if(fe.cacheKey===A){k=fe,++k.usedTimes;break}}return k===void 0&&(k=new H4(t,A,b,a),v.push(k)),k}function F(b){if(--b.usedTimes===0){const A=v.indexOf(b);v[A]=v[v.length-1],v.pop(),b.destroy()}}function N(b){d.remove(b)}function V(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:R,acquireProgram:j,releaseProgram:F,releaseShaderCache:N,programs:v,dispose:V}}function q4(){let t=new WeakMap;function e(u){return t.has(u)}function n(u){let f=t.get(u);return f===void 0&&(f={},t.set(u,f)),f}function r(u){t.delete(u)}function o(u,f,d){t.get(u)[f]=d}function a(){t=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:a}}function Y4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function A1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function C1(){const t=[];let e=0;const n=[],r=[],o=[];function a(){e=0,n.length=0,r.length=0,o.length=0}function u(p,_,S,M,w,x){let y=t[e];return y===void 0?(y={id:p.id,object:p,geometry:_,material:S,groupOrder:M,renderOrder:p.renderOrder,z:w,group:x},t[e]=y):(y.id=p.id,y.object=p,y.geometry=_,y.material=S,y.groupOrder=M,y.renderOrder=p.renderOrder,y.z=w,y.group=x),e++,y}function f(p,_,S,M,w,x){const y=u(p,_,S,M,w,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):n.push(y)}function d(p,_,S,M,w,x){const y=u(p,_,S,M,w,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):n.unshift(y)}function m(p,_){n.length>1&&n.sort(p||Y4),r.length>1&&r.sort(_||A1),o.length>1&&o.sort(_||A1)}function v(){for(let p=e,_=t.length;p<_;p++){const S=t[p];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:a,push:f,unshift:d,finish:v,sort:m}}function $4(){let t=new WeakMap;function e(r,o){const a=t.get(r);let u;return a===void 0?(u=new C1,t.set(r,[u])):o>=a.length?(u=new C1,a.push(u)):u=a[o],u}function n(){t=new WeakMap}return{get:e,dispose:n}}function K4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new yt};break;case"SpotLight":n={position:new $,direction:new $,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function Z4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Q4=0;function J4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eC(t){const e=new K4,n=Z4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const o=new $,a=new qt,u=new qt;function f(m){let v=0,p=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,M=0,w=0,x=0,y=0,P=0,L=0,R=0,j=0,F=0,N=0;m.sort(J4);for(let b=0,A=m.length;b<A;b++){const k=m[b],se=k.color,te=k.intensity,fe=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=se.r*te,p+=se.g*te,_+=se.b*te;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(k.sh.coefficients[oe],te);N++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=k.shadow.matrix,P++}r.directional[S]=oe,S++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(se).multiplyScalar(te),oe.distance=fe,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,r.spot[w]=oe;const le=k.shadow;if(k.map&&(r.spotLightMap[j]=k.map,j++,le.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[w]=le.matrix,k.castShadow){const B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=he,R++}w++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(se).multiplyScalar(te),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=oe,x++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const le=k.shadow,B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=k.shadow.matrix,L++}r.point[M]=oe,M++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(te),oe.groundColor.copy(k.groundColor).multiplyScalar(te),r.hemi[y]=oe,y++}}x>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=p,r.ambient[2]=_;const V=r.hash;(V.directionalLength!==S||V.pointLength!==M||V.spotLength!==w||V.rectAreaLength!==x||V.hemiLength!==y||V.numDirectionalShadows!==P||V.numPointShadows!==L||V.numSpotShadows!==R||V.numSpotMaps!==j||V.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+j-F,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,V.directionalLength=S,V.pointLength=M,V.spotLength=w,V.rectAreaLength=x,V.hemiLength=y,V.numDirectionalShadows=P,V.numPointShadows=L,V.numSpotShadows=R,V.numSpotMaps=j,V.numLightProbes=N,r.version=Q4++)}function d(m,v){let p=0,_=0,S=0,M=0,w=0;const x=v.matrixWorldInverse;for(let y=0,P=m.length;y<P;y++){const L=m[y];if(L.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),p++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),S++}else if(L.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),u.identity(),a.copy(L.matrixWorld),a.premultiply(x),u.extractRotation(a),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),_++}else if(L.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(x),w++}}}return{setup:f,setupView:d,state:r}}function R1(t){const e=new eC(t),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function a(v){n.push(v)}function u(v){r.push(v)}function f(){e.setup(n)}function d(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:d,pushLight:a,pushShadow:u}}function tC(t){let e=new WeakMap;function n(o,a=0){const u=e.get(o);let f;return u===void 0?(f=new R1(t),e.set(o,[f])):a>=u.length?(f=new R1(t),u.push(f)):f=u[a],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class nC extends ul{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iC extends ul{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oC(t,e,n){let r=new xy;const o=new Et,a=new Et,u=new fn,f=new nC({depthPacking:QM}),d=new iC,m={},v=n.maxTextureSize,p={[Zs]:yi,[yi]:Zs,[ss]:ss},_=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:rC,fragmentShader:sC}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Fi;M.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new si(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z2;let y=this.type;this.render=function(F,N,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const b=t.getRenderTarget(),A=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),se=t.state;se.setBlending(Ys),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const te=y!==rs&&this.type===rs,fe=y===rs&&this.type!==rs;for(let he=0,oe=F.length;he<oe;he++){const le=F[he],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ae=B.getFrameExtents();if(o.multiply(ae),a.copy(B.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/ae.x),o.x=a.x*ae.x,B.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/ae.y),o.y=a.y*ae.y,B.mapSize.y=a.y)),B.map===null||te===!0||fe===!0){const U=this.type!==rs?{minFilter:oi,magFilter:oi}:{};B.map!==null&&B.map.dispose(),B.map=new rr(o.x,o.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const re=B.getViewportCount();for(let U=0;U<re;U++){const ne=B.getViewport(U);u.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),se.viewport(u),B.updateMatrices(le,U),r=B.getFrustum(),R(N,V,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===rs&&P(B,V),B.needsUpdate=!1}y=this.type,x.needsUpdate=!1,t.setRenderTarget(b,A,k)};function P(F,N){const V=e.update(w);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new rr(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,t.setRenderTarget(F.mapPass),t.clear(),t.renderBufferDirect(N,null,V,_,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,t.setRenderTarget(F.map),t.clear(),t.renderBufferDirect(N,null,V,S,w,null)}function L(F,N,V,b){let A=null;const k=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)A=k;else if(A=V.isPointLight===!0?d:f,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const se=A.uuid,te=N.uuid;let fe=m[se];fe===void 0&&(fe={},m[se]=fe);let he=fe[te];he===void 0&&(he=A.clone(),fe[te]=he,N.addEventListener("dispose",j)),A=he}if(A.visible=N.visible,A.wireframe=N.wireframe,b===rs?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:p[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const se=t.properties.get(A);se.light=V}return A}function R(F,N,V,b,A){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===rs)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const te=e.update(F),fe=F.material;if(Array.isArray(fe)){const he=te.groups;for(let oe=0,le=he.length;oe<le;oe++){const B=he[oe],ae=fe[B.materialIndex];if(ae&&ae.visible){const re=L(F,ae,b,A);F.onBeforeShadow(t,F,N,V,te,re,B),t.renderBufferDirect(V,null,te,re,F,B),F.onAfterShadow(t,F,N,V,te,re,B)}}}else if(fe.visible){const he=L(F,fe,b,A);F.onBeforeShadow(t,F,N,V,te,he,null),t.renderBufferDirect(V,null,te,he,F,null),F.onAfterShadow(t,F,N,V,te,he,null)}}const se=F.children;for(let te=0,fe=se.length;te<fe;te++)R(se[te],N,V,b,A)}function j(F){F.target.removeEventListener("dispose",j);for(const V in m){const b=m[V],A=F.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const aC={[Hp]:Gp,[Wp]:qp,[Xp]:Yp,[Wa]:jp,[Gp]:Hp,[qp]:Wp,[Yp]:Xp,[jp]:Wa};function lC(t,e){function n(){let H=!1;const Re=new fn;let ie=null;const de=new fn(0,0,0,0);return{setMask:function(Le){ie!==Le&&!H&&(t.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){H=Le},setClear:function(Le,Pe,ct,Wt,vn){vn===!0&&(Le*=Wt,Pe*=Wt,ct*=Wt),Re.set(Le,Pe,ct,Wt),de.equals(Re)===!1&&(t.clearColor(Le,Pe,ct,Wt),de.copy(Re))},reset:function(){H=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,ie=null,de=null,Le=null;return{setReversed:function(Pe){if(Re!==Pe){const ct=e.get("EXT_clip_control");Re?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Wt=Le;Le=null,this.setClear(Wt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?_e(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!H&&(t.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Re&&(Pe=aC[Pe]),de!==Pe){switch(Pe){case Hp:t.depthFunc(t.NEVER);break;case Gp:t.depthFunc(t.ALWAYS);break;case Wp:t.depthFunc(t.LESS);break;case Wa:t.depthFunc(t.LEQUAL);break;case Xp:t.depthFunc(t.EQUAL);break;case jp:t.depthFunc(t.GEQUAL);break;case qp:t.depthFunc(t.GREATER);break;case Yp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=Pe}},setLocked:function(Pe){H=Pe},setClear:function(Pe){Le!==Pe&&(Re&&(Pe=1-Pe),t.clearDepth(Pe),Le=Pe)},reset:function(){H=!1,ie=null,de=null,Le=null,Re=!1}}}function o(){let H=!1,Re=null,ie=null,de=null,Le=null,Pe=null,ct=null,Wt=null,vn=null;return{setTest:function(Tt){H||(Tt?_e(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(Tt){Re!==Tt&&!H&&(t.stencilMask(Tt),Re=Tt)},setFunc:function(Tt,ai,Jn){(ie!==Tt||de!==ai||Le!==Jn)&&(t.stencilFunc(Tt,ai,Jn),ie=Tt,de=ai,Le=Jn)},setOp:function(Tt,ai,Jn){(Pe!==Tt||ct!==ai||Wt!==Jn)&&(t.stencilOp(Tt,ai,Jn),Pe=Tt,ct=ai,Wt=Jn)},setLocked:function(Tt){H=Tt},setClear:function(Tt){vn!==Tt&&(t.clearStencil(Tt),vn=Tt)},reset:function(){H=!1,Re=null,ie=null,de=null,Le=null,Pe=null,ct=null,Wt=null,vn=null}}}const a=new n,u=new r,f=new o,d=new WeakMap,m=new WeakMap;let v={},p={},_=new WeakMap,S=[],M=null,w=!1,x=null,y=null,P=null,L=null,R=null,j=null,F=null,N=new yt(0,0,0),V=0,b=!1,A=null,k=null,se=null,te=null,fe=null;const he=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=le>=2);let ae=null,re={};const U=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),Ie=new fn().fromArray(U),Z=new fn().fromArray(ne);function ue(H,Re,ie,de){const Le=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(H,Pe),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<ie;ct++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(Re+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return Pe}const Me={};Me[t.TEXTURE_2D]=ue(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(t.DEPTH_TEST),u.setFunc(Wa),_t(!1),mt(I_),_e(t.CULL_FACE),X(Ys);function _e(H){v[H]!==!0&&(t.enable(H),v[H]=!0)}function Ae(H){v[H]!==!1&&(t.disable(H),v[H]=!1)}function Ue(H,Re){return p[H]!==Re?(t.bindFramebuffer(H,Re),p[H]=Re,H===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Re),H===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function nt(H,Re){let ie=S,de=!1;if(H){ie=_.get(Re),ie===void 0&&(ie=[],_.set(Re,ie));const Le=H.textures;if(ie.length!==Le.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,ct=Le.length;Pe<ct;Pe++)ie[Pe]=t.COLOR_ATTACHMENT0+Pe;ie.length=Le.length,de=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,de=!0);de&&t.drawBuffers(ie)}function Ot(H){return M!==H?(t.useProgram(H),M=H,!0):!1}const xt={[Ao]:t.FUNC_ADD,[wM]:t.FUNC_SUBTRACT,[TM]:t.FUNC_REVERSE_SUBTRACT};xt[AM]=t.MIN,xt[CM]=t.MAX;const Ht={[RM]:t.ZERO,[bM]:t.ONE,[PM]:t.SRC_COLOR,[zp]:t.SRC_ALPHA,[FM]:t.SRC_ALPHA_SATURATE,[UM]:t.DST_COLOR,[DM]:t.DST_ALPHA,[LM]:t.ONE_MINUS_SRC_COLOR,[Vp]:t.ONE_MINUS_SRC_ALPHA,[NM]:t.ONE_MINUS_DST_COLOR,[IM]:t.ONE_MINUS_DST_ALPHA,[OM]:t.CONSTANT_COLOR,[kM]:t.ONE_MINUS_CONSTANT_COLOR,[BM]:t.CONSTANT_ALPHA,[zM]:t.ONE_MINUS_CONSTANT_ALPHA};function X(H,Re,ie,de,Le,Pe,ct,Wt,vn,Tt){if(H===Ys){w===!0&&(Ae(t.BLEND),w=!1);return}if(w===!1&&(_e(t.BLEND),w=!0),H!==EM){if(H!==x||Tt!==b){if((y!==Ao||R!==Ao)&&(t.blendEquation(t.FUNC_ADD),y=Ao,R=Ao),Tt)switch(H){case ka:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ga:t.blendFunc(t.ONE,t.ONE);break;case U_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case N_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ka:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ga:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case U_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case N_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,L=null,j=null,F=null,N.set(0,0,0),V=0,x=H,b=Tt}return}Le=Le||Re,Pe=Pe||ie,ct=ct||de,(Re!==y||Le!==R)&&(t.blendEquationSeparate(xt[Re],xt[Le]),y=Re,R=Le),(ie!==P||de!==L||Pe!==j||ct!==F)&&(t.blendFuncSeparate(Ht[ie],Ht[de],Ht[Pe],Ht[ct]),P=ie,L=de,j=Pe,F=ct),(Wt.equals(N)===!1||vn!==V)&&(t.blendColor(Wt.r,Wt.g,Wt.b,vn),N.copy(Wt),V=vn),x=H,b=!1}function Qn(H,Re){H.side===ss?Ae(t.CULL_FACE):_e(t.CULL_FACE);let ie=H.side===yi;Re&&(ie=!ie),_t(ie),H.blending===ka&&H.transparent===!1?X(Ys):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const de=H.stencilWrite;f.setTest(de),de&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Nt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function _t(H){A!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),A=H)}function mt(H){H!==xM?(_e(t.CULL_FACE),H!==k&&(H===I_?t.cullFace(t.BACK):H===SM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),k=H}function Je(H){H!==se&&(oe&&t.lineWidth(H),se=H)}function Nt(H,Re,ie){H?(_e(t.POLYGON_OFFSET_FILL),(te!==Re||fe!==ie)&&(t.polygonOffset(Re,ie),te=Re,fe=ie)):Ae(t.POLYGON_OFFSET_FILL)}function Ze(H){H?_e(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function D(H){H===void 0&&(H=t.TEXTURE0+he-1),ae!==H&&(t.activeTexture(H),ae=H)}function T(H,Re,ie){ie===void 0&&(ae===null?ie=t.TEXTURE0+he-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==H||de.texture!==Re)&&(ae!==ie&&(t.activeTexture(ie),ae=ie),t.bindTexture(H,Re||Me[H]),de.type=H,de.texture=Re)}function K(){const H=re[ae];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{t.texSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{t.texStorage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{t.texStorage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{t.texImage3D.apply(t,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(H){Ie.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),Ie.copy(H))}function ke(H){Z.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),Z.copy(H))}function gt(H,Re){let ie=m.get(Re);ie===void 0&&(ie=new WeakMap,m.set(Re,ie));let de=ie.get(H);de===void 0&&(de=t.getUniformBlockIndex(Re,H.name),ie.set(H,de))}function ut(H,Re){const de=m.get(Re).get(H);d.get(Re)!==de&&(t.uniformBlockBinding(Re,de,H.__bindingPointIndex),d.set(Re,de))}function Ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),u.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),v={},ae=null,re={},p={},_=new WeakMap,S=[],M=null,w=!1,x=null,y=null,P=null,L=null,R=null,j=null,F=null,N=new yt(0,0,0),V=0,b=!1,A=null,k=null,se=null,te=null,fe=null,Ie.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:_e,disable:Ae,bindFramebuffer:Ue,drawBuffers:nt,useProgram:Ot,setBlending:X,setMaterial:Qn,setFlipSided:_t,setCullFace:mt,setLineWidth:Je,setPolygonOffset:Nt,setScissorTest:Ze,activeTexture:D,bindTexture:T,unbindTexture:K,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:it,updateUBOMapping:gt,uniformBlockBinding:ut,texStorage2D:pt,texStorage3D:xe,texSubImage2D:ce,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:st,viewport:ke,reset:Ut}}function b1(t,e,n,r){const o=uC(r);switch(n){case iy:return t*e;case sy:return t*e;case oy:return t*e*2;case Zm:return t*e/o.components*o.byteLength;case Qm:return t*e/o.components*o.byteLength;case ay:return t*e*2/o.components*o.byteLength;case Jm:return t*e*2/o.components*o.byteLength;case ry:return t*e*3/o.components*o.byteLength;case Nn:return t*e*4/o.components*o.byteLength;case eg:return t*e*4/o.components*o.byteLength;case Af:case Cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rf:case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case em:case nm:return Math.max(t,16)*Math.max(e,8)/4;case Jp:case tm:return Math.max(t,8)*Math.max(e,8)/2;case im:case rm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case om:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case am:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lm:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case um:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cm:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hm:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pm:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _m:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ym:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pf:case xm:case Sm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ly:case Mm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Em:case wm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uC(t){switch(t){case xi:case ey:return{byteLength:1,components:1};case xu:case ty:case Au:return{byteLength:2,components:1};case $m:case Km:return{byteLength:2,components:4};case ko:case Ym:case Ir:return{byteLength:4,components:1};case ny:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function cC(t,e,n,r,o,a,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,v=new WeakMap;let p;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,T){return S?new OffscreenCanvas(D,T):Su("canvas")}function w(D,T,K){let pe=1;const ge=Ze(D);if((ge.width>K||ge.height>K)&&(pe=K/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(pe*ge.width),Ge=Math.floor(pe*ge.height);p===void 0&&(p=M(ce,Ge));const Ce=T?M(ce,Ge):p;return Ce.width=ce,Ce.height=Ge,Ce.getContext("2d").drawImage(D,0,0,ce,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ge+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function x(D){return D.generateMipmaps}function y(D){t.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function L(D,T,K,pe,ge=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=T;if(T===t.RED&&(K===t.FLOAT&&(ce=t.R32F),K===t.HALF_FLOAT&&(ce=t.R16F),K===t.UNSIGNED_BYTE&&(ce=t.R8)),T===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(ce=t.R8UI),K===t.UNSIGNED_SHORT&&(ce=t.R16UI),K===t.UNSIGNED_INT&&(ce=t.R32UI),K===t.BYTE&&(ce=t.R8I),K===t.SHORT&&(ce=t.R16I),K===t.INT&&(ce=t.R32I)),T===t.RG&&(K===t.FLOAT&&(ce=t.RG32F),K===t.HALF_FLOAT&&(ce=t.RG16F),K===t.UNSIGNED_BYTE&&(ce=t.RG8)),T===t.RG_INTEGER&&(K===t.UNSIGNED_BYTE&&(ce=t.RG8UI),K===t.UNSIGNED_SHORT&&(ce=t.RG16UI),K===t.UNSIGNED_INT&&(ce=t.RG32UI),K===t.BYTE&&(ce=t.RG8I),K===t.SHORT&&(ce=t.RG16I),K===t.INT&&(ce=t.RG32I)),T===t.RGB_INTEGER&&(K===t.UNSIGNED_BYTE&&(ce=t.RGB8UI),K===t.UNSIGNED_SHORT&&(ce=t.RGB16UI),K===t.UNSIGNED_INT&&(ce=t.RGB32UI),K===t.BYTE&&(ce=t.RGB8I),K===t.SHORT&&(ce=t.RGB16I),K===t.INT&&(ce=t.RGB32I)),T===t.RGBA_INTEGER&&(K===t.UNSIGNED_BYTE&&(ce=t.RGBA8UI),K===t.UNSIGNED_SHORT&&(ce=t.RGBA16UI),K===t.UNSIGNED_INT&&(ce=t.RGBA32UI),K===t.BYTE&&(ce=t.RGBA8I),K===t.SHORT&&(ce=t.RGBA16I),K===t.INT&&(ce=t.RGBA32I)),T===t.RGB&&K===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),T===t.RGBA){const Ge=ge?Xf:Ct.getTransfer(pe);K===t.FLOAT&&(ce=t.RGBA32F),K===t.HALF_FLOAT&&(ce=t.RGBA16F),K===t.UNSIGNED_BYTE&&(ce=Ge===kt?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function R(D,T){let K;return D?T===null||T===ko||T===qa?K=t.DEPTH24_STENCIL8:T===Ir?K=t.DEPTH32F_STENCIL8:T===xu&&(K=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ko||T===qa?K=t.DEPTH_COMPONENT24:T===Ir?K=t.DEPTH_COMPONENT32F:T===xu&&(K=t.DEPTH_COMPONENT16),K}function j(D,T){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==oi&&D.minFilter!==Zt?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),V(T),T.isVideoTexture&&v.delete(T)}function N(D){const T=D.target;T.removeEventListener("dispose",N),A(T)}function V(D){const T=r.get(D);if(T.__webglInit===void 0)return;const K=D.source,pe=_.get(K);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(D),Object.keys(pe).length===0&&_.delete(K)}r.remove(D)}function b(D){const T=r.get(D);t.deleteTexture(T.__webglTexture);const K=D.source,pe=_.get(K);delete pe[T.__cacheKey],u.memory.textures--}function A(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)t.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else t.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)t.deleteFramebuffer(T.__webglFramebuffer[pe]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=D.textures;for(let pe=0,ge=K.length;pe<ge;pe++){const ce=r.get(K[pe]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),u.memory.textures--),r.remove(K[pe])}r.remove(D)}let k=0;function se(){k=0}function te(){const D=k;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function fe(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function he(D,T){const K=r.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,D,T);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+T)}function oe(D,T){const K=r.get(D);if(D.version>0&&K.__version!==D.version){Z(K,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+T)}function le(D,T){const K=r.get(D);if(D.version>0&&K.__version!==D.version){Z(K,D,T);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+T)}function B(D,T){const K=r.get(D);if(D.version>0&&K.__version!==D.version){ue(K,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+T)}const ae={[Zp]:t.REPEAT,[bo]:t.CLAMP_TO_EDGE,[Qp]:t.MIRRORED_REPEAT},re={[oi]:t.NEAREST,[KM]:t.NEAREST_MIPMAP_NEAREST,[Xc]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Jh]:t.LINEAR_MIPMAP_NEAREST,[Po]:t.LINEAR_MIPMAP_LINEAR},U={[tE]:t.NEVER,[aE]:t.ALWAYS,[nE]:t.LESS,[uy]:t.LEQUAL,[iE]:t.EQUAL,[oE]:t.GEQUAL,[rE]:t.GREATER,[sE]:t.NOTEQUAL};function ne(D,T){if(T.type===Ir&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zt||T.magFilter===Jh||T.magFilter===Xc||T.magFilter===Po||T.minFilter===Zt||T.minFilter===Jh||T.minFilter===Xc||T.minFilter===Po)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,ae[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,ae[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,ae[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,re[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==Xc&&T.minFilter!==Po||T.type===Ir&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(D,T){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const pe=T.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ce=fe(T);if(ce!==D.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:t.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ge[ce].usedTimes++;const Ge=ge[D.__cacheKey];Ge!==void 0&&(ge[D.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(T)),D.__cacheKey=ce,D.__webglTexture=ge[ce].texture}return K}function Z(D,T,K){let pe=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=t.TEXTURE_3D);const ge=Ie(D,T),ce=T.source;n.bindTexture(pe,D.__webglTexture,t.TEXTURE0+K);const Ge=r.get(ce);if(ce.version!==Ge.__version||ge===!0){n.activeTexture(t.TEXTURE0+K);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Ne=T.colorSpace===js?null:Ct.getPrimaries(T.colorSpace),pt=T.colorSpace===js||Ce===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let xe=w(T.image,!1,o.maxTextureSize);xe=Nt(T,xe);const Oe=a.convert(T.format,T.colorSpace),it=a.convert(T.type);let st=L(T.internalFormat,Oe,it,T.colorSpace,T.isVideoTexture);ne(pe,T);let ke;const gt=T.mipmaps,ut=T.isVideoTexture!==!0,Ut=Ge.__version===void 0||ge===!0,H=ce.dataReady,Re=j(T,xe);if(T.isDepthTexture)st=R(T.format===Ya,T.type),Ut&&(ut?n.texStorage2D(t.TEXTURE_2D,1,st,xe.width,xe.height):n.texImage2D(t.TEXTURE_2D,0,st,xe.width,xe.height,0,Oe,it,null));else if(T.isDataTexture)if(gt.length>0){ut&&Ut&&n.texStorage2D(t.TEXTURE_2D,Re,st,gt[0].width,gt[0].height);for(let ie=0,de=gt.length;ie<de;ie++)ke=gt[ie],ut?H&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,it,ke.data):n.texImage2D(t.TEXTURE_2D,ie,st,ke.width,ke.height,0,Oe,it,ke.data);T.generateMipmaps=!1}else ut?(Ut&&n.texStorage2D(t.TEXTURE_2D,Re,st,xe.width,xe.height),H&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe.width,xe.height,Oe,it,xe.data)):n.texImage2D(t.TEXTURE_2D,0,st,xe.width,xe.height,0,Oe,it,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ut&&Ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,st,gt[0].width,gt[0].height,xe.depth);for(let ie=0,de=gt.length;ie<de;ie++)if(ke=gt[ie],T.format!==Nn)if(Oe!==null)if(ut){if(H)if(T.layerUpdates.size>0){const Le=b1(ke.width,ke.height,T.format,T.type);for(const Pe of T.layerUpdates){const ct=ke.data.subarray(Pe*Le/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Pe,ke.width,ke.height,1,Oe,ct)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,xe.depth,Oe,ke.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,st,ke.width,ke.height,xe.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?H&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,xe.depth,Oe,it,ke.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,st,ke.width,ke.height,xe.depth,0,Oe,it,ke.data)}else{ut&&Ut&&n.texStorage2D(t.TEXTURE_2D,Re,st,gt[0].width,gt[0].height);for(let ie=0,de=gt.length;ie<de;ie++)ke=gt[ie],T.format!==Nn?Oe!==null?ut?H&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,st,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?H&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,it,ke.data):n.texImage2D(t.TEXTURE_2D,ie,st,ke.width,ke.height,0,Oe,it,ke.data)}else if(T.isDataArrayTexture)if(ut){if(Ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,st,xe.width,xe.height,xe.depth),H)if(T.layerUpdates.size>0){const ie=b1(xe.width,xe.height,T.format,T.type);for(const de of T.layerUpdates){const Le=xe.data.subarray(de*ie/xe.data.BYTES_PER_ELEMENT,(de+1)*ie/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Oe,it,Le)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Oe,it,xe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,st,xe.width,xe.height,xe.depth,0,Oe,it,xe.data);else if(T.isData3DTexture)ut?(Ut&&n.texStorage3D(t.TEXTURE_3D,Re,st,xe.width,xe.height,xe.depth),H&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Oe,it,xe.data)):n.texImage3D(t.TEXTURE_3D,0,st,xe.width,xe.height,xe.depth,0,Oe,it,xe.data);else if(T.isFramebufferTexture){if(Ut)if(ut)n.texStorage2D(t.TEXTURE_2D,Re,st,xe.width,xe.height);else{let ie=xe.width,de=xe.height;for(let Le=0;Le<Re;Le++)n.texImage2D(t.TEXTURE_2D,Le,st,ie,de,0,Oe,it,null),ie>>=1,de>>=1}}else if(gt.length>0){if(ut&&Ut){const ie=Ze(gt[0]);n.texStorage2D(t.TEXTURE_2D,Re,st,ie.width,ie.height)}for(let ie=0,de=gt.length;ie<de;ie++)ke=gt[ie],ut?H&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Oe,it,ke):n.texImage2D(t.TEXTURE_2D,ie,st,Oe,it,ke);T.generateMipmaps=!1}else if(ut){if(Ut){const ie=Ze(xe);n.texStorage2D(t.TEXTURE_2D,Re,st,ie.width,ie.height)}H&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Oe,it,xe)}else n.texImage2D(t.TEXTURE_2D,0,st,Oe,it,xe);x(T)&&y(pe),Ge.__version=ce.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ue(D,T,K){if(T.image.length!==6)return;const pe=Ie(D,T),ge=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+K);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){n.activeTexture(t.TEXTURE0+K);const Ge=Ct.getPrimaries(Ct.workingColorSpace),Ce=T.colorSpace===js?null:Ct.getPrimaries(T.colorSpace),Ne=T.colorSpace===js||Ge===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let de=0;de<6;de++)!pt&&!xe?Oe[de]=w(T.image[de],!0,o.maxCubemapSize):Oe[de]=xe?T.image[de].image:T.image[de],Oe[de]=Nt(T,Oe[de]);const it=Oe[0],st=a.convert(T.format,T.colorSpace),ke=a.convert(T.type),gt=L(T.internalFormat,st,ke,T.colorSpace),ut=T.isVideoTexture!==!0,Ut=ce.__version===void 0||pe===!0,H=ge.dataReady;let Re=j(T,it);ne(t.TEXTURE_CUBE_MAP,T);let ie;if(pt){ut&&Ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,gt,it.width,it.height);for(let de=0;de<6;de++){ie=Oe[de].mipmaps;for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];T.format!==Nn?st!==null?ut?H&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,st,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,gt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,st,ke,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,gt,Pe.width,Pe.height,0,st,ke,Pe.data)}}}else{if(ie=T.mipmaps,ut&&Ut){ie.length>0&&Re++;const de=Ze(Oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,gt,de.width,de.height)}for(let de=0;de<6;de++)if(xe){ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe[de].width,Oe[de].height,st,ke,Oe[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,gt,Oe[de].width,Oe[de].height,0,st,ke,Oe[de].data);for(let Le=0;Le<ie.length;Le++){const ct=ie[Le].image[de].image;ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,ct.width,ct.height,st,ke,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,gt,ct.width,ct.height,0,st,ke,ct.data)}}else{ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,st,ke,Oe[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,gt,st,ke,Oe[de]);for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];ut?H&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,st,ke,Pe.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,gt,st,ke,Pe.image[de])}}}x(T)&&y(t.TEXTURE_CUBE_MAP),ce.__version=ge.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Me(D,T,K,pe,ge,ce){const Ge=a.convert(K.format,K.colorSpace),Ce=a.convert(K.type),Ne=L(K.internalFormat,Ge,Ce,K.colorSpace),pt=r.get(T),xe=r.get(K);if(xe.__renderTarget=T,!pt.__hasExternalTextures){const Oe=Math.max(1,T.width>>ce),it=Math.max(1,T.height>>ce);ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Ne,Oe,it,T.depth,0,Ge,Ce,null):n.texImage2D(ge,ce,Ne,Oe,it,0,Ge,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),mt(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,ge,xe.__webglTexture,0,_t(T)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,pe,ge,xe.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(D,T,K){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=R(T.stencilBuffer,ge),Ge=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=_t(T);mt(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,ce,T.width,T.height):K?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ce,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ce,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ge,t.RENDERBUFFER,D)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],Ge=a.convert(ce.format,ce.colorSpace),Ce=a.convert(ce.type),Ne=L(ce.internalFormat,Ge,Ce,ce.colorSpace),pt=_t(T);K&&mt(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt,Ne,T.width,T.height):mt(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt,Ne,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ge=pe.__webglTexture,ce=_t(T);if(T.depthTexture.format===Ba)mt(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Ya)mt(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(D){const T=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,D)}else if(K){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=t.createRenderbuffer(),_e(T.__webglDepthbuffer[pe],D,!1);else{const ge=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[pe];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),_e(T.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ge),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,ge)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(D,T,K){const pe=r.get(D);T!==void 0&&Me(pe.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&Ue(D)}function Ot(D){const T=D.texture,K=r.get(D),pe=r.get(T);D.addEventListener("dispose",N);const ge=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ge=ge.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture()),pe.__version=T.version,u.memory.textures++),ce){K.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)K.__webglFramebuffer[Ce][Ne]=t.createFramebuffer()}else K.__webglFramebuffer[Ce]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)K.__webglFramebuffer[Ce]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(Ge)for(let Ce=0,Ne=ge.length;Ce<Ne;Ce++){const pt=r.get(ge[Ce]);pt.__webglTexture===void 0&&(pt.__webglTexture=t.createTexture(),u.memory.textures++)}if(D.samples>0&&mt(D)===!1){K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const Ne=ge[Ce];K.__webglColorRenderbuffer[Ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[Ce]);const pt=a.convert(Ne.format,Ne.colorSpace),xe=a.convert(Ne.type),Oe=L(Ne.internalFormat,pt,xe,Ne.colorSpace,D.isXRRenderTarget===!0),it=_t(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,Oe,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,K.__webglColorRenderbuffer[Ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(K.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(t.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Me(K.__webglFramebuffer[Ce][Ne],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else Me(K.__webglFramebuffer[Ce],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(T)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Ce=0,Ne=ge.length;Ce<Ne;Ce++){const pt=ge[Ce],xe=r.get(pt);n.bindTexture(t.TEXTURE_2D,xe.__webglTexture),ne(t.TEXTURE_2D,pt),Me(K.__webglFramebuffer,D,pt,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,0),x(pt)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let Ce=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),ne(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Me(K.__webglFramebuffer[Ne],D,T,t.COLOR_ATTACHMENT0,Ce,Ne);else Me(K.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,Ce,0);x(T)&&y(Ce),n.unbindTexture()}D.depthBuffer&&Ue(D)}function xt(D){const T=D.textures;for(let K=0,pe=T.length;K<pe;K++){const ge=T[K];if(x(ge)){const ce=P(D),Ge=r.get(ge).__webglTexture;n.bindTexture(ce,Ge),y(ce),n.unbindTexture()}}}const Ht=[],X=[];function Qn(D){if(D.samples>0){if(mt(D)===!1){const T=D.textures,K=D.width,pe=D.height;let ge=t.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ge=r.get(D),Ce=T.length>1;if(Ce)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),Ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ne]);const pt=r.get(T[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pt,0)}t.blitFramebuffer(0,0,K,pe,0,0,K,pe,ge,t.NEAREST),d===!0&&(Ht.length=0,X.length=0,Ht.push(t.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ht.push(ce),X.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,X)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ht))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ne]);const pt=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,pt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function _t(D){return Math.min(o.maxSamples,D.samples)}function mt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(D){const T=u.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function Nt(D,T){const K=D.colorSpace,pe=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==al&&K!==js&&(Ct.getTransfer(K)===kt?(pe!==Nn||ge!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=nt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Qn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=mt}function fC(t,e){function n(r,o=js){let a;const u=Ct.getTransfer(o);if(r===xi)return t.UNSIGNED_BYTE;if(r===$m)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Km)return t.UNSIGNED_SHORT_5_5_5_1;if(r===ny)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===ey)return t.BYTE;if(r===ty)return t.SHORT;if(r===xu)return t.UNSIGNED_SHORT;if(r===Ym)return t.INT;if(r===ko)return t.UNSIGNED_INT;if(r===Ir)return t.FLOAT;if(r===Au)return t.HALF_FLOAT;if(r===iy)return t.ALPHA;if(r===ry)return t.RGB;if(r===Nn)return t.RGBA;if(r===sy)return t.LUMINANCE;if(r===oy)return t.LUMINANCE_ALPHA;if(r===Ba)return t.DEPTH_COMPONENT;if(r===Ya)return t.DEPTH_STENCIL;if(r===Zm)return t.RED;if(r===Qm)return t.RED_INTEGER;if(r===ay)return t.RG;if(r===Jm)return t.RG_INTEGER;if(r===eg)return t.RGBA_INTEGER;if(r===Af||r===Cf||r===Rf||r===bf)if(u===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Af)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Af)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jp||r===em||r===tm||r===nm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Jp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===em)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===im||r===rm||r===sm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===im||r===rm)return u===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===sm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===om||r===am||r===lm||r===um||r===cm||r===fm||r===dm||r===hm||r===pm||r===mm||r===gm||r===vm||r===_m||r===ym)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===om)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===am)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===um)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vm)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_m)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ym)return u===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pf||r===xm||r===Sm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Pf)return u===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ly||r===Mm||r===Em||r===wm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Pf)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Mm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Em)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qa?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class dC extends _r{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hf extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hC={type:"move"};class Rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,a=null,u=null;const f=this._targetRay,d=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const x=n.getJointPose(w,r),y=this._getHandJoint(m,w);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=m.joints["index-finger-tip"],p=m.joints["thumb-tip"],_=v.position.distanceTo(p.position),S=.02,M=.005;m.inputState.pinching&&_>S+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(hC)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=a!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hf;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const pC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Fn,a=e.properties.get(o);a.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Si({vertexShader:pC,fragmentShader:mC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new eo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vC extends ll{constructor(e,n){super();const r=this;let o=null,a=1,u=null,f="local-floor",d=1,m=null,v=null,p=null,_=null,S=null,M=null;const w=new gC,x=n.getContextAttributes();let y=null,P=null;const L=[],R=[],j=new Et;let F=null;const N=new _r;N.viewport=new fn;const V=new _r;V.viewport=new fn;const b=[N,V],A=new dC;let k=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Rp,L[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Rp,L[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Rp,L[Z]=ue),ue.getHandSpace()};function te(Z){const ue=R.indexOf(Z.inputSource);if(ue===-1)return;const Me=L[ue];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,m||u),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",he);for(let Z=0;Z<L.length;Z++){const ue=R[Z];ue!==null&&(R[Z]=null,L[Z].disconnect(ue))}k=null,se=null,w.reset(),e.setRenderTarget(y),S=null,_=null,p=null,o=null,P=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",he),x.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(j),o.renderState.layers===void 0){const ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,n,ue),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new rr(S.framebufferWidth,S.framebufferHeight,{format:Nn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,Me=null,_e=null;x.depth&&(_e=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=x.stencil?Ya:Ba,Me=x.stencil?qa:ko);const Ae={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:a};p=new XRWebGLBinding(o,n),_=p.createProjectionLayer(Ae),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new rr(_.textureWidth,_.textureHeight,{format:Nn,type:xi,depthTexture:new My(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),m=null,u=await o.requestReferenceSpace(f),Ie.setContext(o),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(Z){for(let ue=0;ue<Z.removed.length;ue++){const Me=Z.removed[ue],_e=R.indexOf(Me);_e>=0&&(R[_e]=null,L[_e].disconnect(Me))}for(let ue=0;ue<Z.added.length;ue++){const Me=Z.added[ue];let _e=R.indexOf(Me);if(_e===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=R.length){R.push(Me),_e=Ue;break}else if(R[Ue]===null){R[Ue]=Me,_e=Ue;break}if(_e===-1)break}const Ae=L[_e];Ae&&Ae.connect(Me)}}const oe=new $,le=new $;function B(Z,ue,Me){oe.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const _e=oe.distanceTo(le),Ae=ue.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,nt=Ae[14]/(Ae[10]-1),Ot=Ae[14]/(Ae[10]+1),xt=(Ae[9]+1)/Ae[5],Ht=(Ae[9]-1)/Ae[5],X=(Ae[8]-1)/Ae[0],Qn=(Ue[8]+1)/Ue[0],_t=nt*X,mt=nt*Qn,Je=_e/(-X+Qn),Nt=Je*-X;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Nt),Z.translateZ(Je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ze=nt+Je,D=Ot+Je,T=_t-Nt,K=mt+(_e-Nt),pe=xt*Ot/D*Ze,ge=Ht*Ot/D*Ze;Z.projectionMatrix.makePerspective(T,K,pe,ge,Ze,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ue=Z.near,Me=Z.far;w.texture!==null&&(w.depthNear>0&&(ue=w.depthNear),w.depthFar>0&&(Me=w.depthFar)),A.near=V.near=N.near=ue,A.far=V.far=N.far=Me,(k!==A.near||se!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,se=A.far),N.layers.mask=Z.layers.mask|2,V.layers.mask=Z.layers.mask|4,A.layers.mask=N.layers.mask|V.layers.mask;const _e=Z.parent,Ae=A.cameras;ae(A,_e);for(let Ue=0;Ue<Ae.length;Ue++)ae(Ae[Ue],_e);Ae.length===2?B(A,N,V):A.projectionMatrix.copy(N.projectionMatrix),re(Z,A,_e)};function re(Z,ue,Me){Me===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Tm*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(Z){d=Z,_!==null&&(_.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let U=null;function ne(Z,ue){if(v=ue.getViewerPose(m||u),M=ue,v!==null){const Me=v.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let _e=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,_e=!0);for(let Ue=0;Ue<Me.length;Ue++){const nt=Me[Ue];let Ot=null;if(S!==null)Ot=S.getViewport(nt);else{const Ht=p.getViewSubImage(_,nt);Ot=Ht.viewport,Ue===0&&(e.setRenderTargetTextures(P,Ht.colorTexture,_.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(P))}let xt=b[Ue];xt===void 0&&(xt=new _r,xt.layers.enable(Ue),xt.viewport=new fn,b[Ue]=xt),xt.matrix.fromArray(nt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(nt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Ue===0&&(A.matrix.copy(xt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),_e===!0&&A.cameras.push(xt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ue=p.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,o.renderState)}}for(let Me=0;Me<L.length;Me++){const _e=R[Me],Ae=L[Me];_e!==null&&Ae!==void 0&&Ae.update(_e,ue,m||u)}U&&U(Z,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),M=null}const Ie=new Sy;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const Mo=new cs,_C=new qt;function yC(t,e){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,vy(t)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,P,L,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(x,y):y.isMeshToonMaterial?(a(x,y),p(x,y)):y.isMeshPhongMaterial?(a(x,y),v(x,y)):y.isMeshStandardMaterial?(a(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,R)):y.isMeshMatcapMaterial?(a(x,y),M(x,y)):y.isMeshDepthMaterial?a(x,y):y.isMeshDistanceMaterial?(a(x,y),w(x,y)):y.isMeshNormalMaterial?a(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?d(x,y,P,L):y.isSpriteMaterial?m(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===yi&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===yi&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const P=e.get(y),L=P.envMap,R=P.envMapRotation;L&&(x.envMap.value=L,Mo.copy(R),Mo.x*=-1,Mo.y*=-1,Mo.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Mo.y*=-1,Mo.z*=-1),x.envMapRotation.value.setFromMatrix4(_C.makeRotationFromEuler(Mo)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,P,L){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*P,x.scale.value=L*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function p(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,P){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===yi&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function w(x,y){const P=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function xC(t,e,n,r){let o={},a={},u=[];const f=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,L){const R=L.program;r.uniformBlockBinding(P,R)}function m(P,L){let R=o[P.id];R===void 0&&(M(P),R=v(P),o[P.id]=R,P.addEventListener("dispose",x));const j=L.program;r.updateUBOMapping(P,j);const F=e.render.frame;a[P.id]!==F&&(_(P),a[P.id]=F)}function v(P){const L=p();P.__bindingPointIndex=L;const R=t.createBuffer(),j=P.__size,F=P.usage;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,j,F),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,L,R),R}function p(){for(let P=0;P<f;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const L=o[P.id],R=P.uniforms,j=P.__cache;t.bindBuffer(t.UNIFORM_BUFFER,L);for(let F=0,N=R.length;F<N;F++){const V=Array.isArray(R[F])?R[F]:[R[F]];for(let b=0,A=V.length;b<A;b++){const k=V[b];if(S(k,F,b,j)===!0){const se=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let he=0;he<te.length;he++){const oe=te[he],le=w(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,t.bufferSubData(t.UNIFORM_BUFFER,se+fe,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):(oe.toArray(k.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,se,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function S(P,L,R,j){const F=P.value,N=L+"_"+R;if(j[N]===void 0)return typeof F=="number"||typeof F=="boolean"?j[N]=F:j[N]=F.clone(),!0;{const V=j[N];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return j[N]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function M(P){const L=P.uniforms;let R=0;const j=16;for(let N=0,V=L.length;N<V;N++){const b=Array.isArray(L[N])?L[N]:[L[N]];for(let A=0,k=b.length;A<k;A++){const se=b[A],te=Array.isArray(se.value)?se.value:[se.value];for(let fe=0,he=te.length;fe<he;fe++){const oe=te[fe],le=w(oe),B=R%j,ae=B%le.boundary,re=B+ae;R+=ae,re!==0&&j-re<le.storage&&(R+=j-re),se.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=R,R+=le.storage}}}const F=R%j;return F>0&&(R+=j-F),P.__size=R,P.__cache={},this}function w(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function x(P){const L=P.target;L.removeEventListener("dispose",x);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),t.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function y(){for(const P in o)t.deleteBuffer(o[P]);u=[],o={},a={}}return{bind:d,update:m,dispose:y}}class SC{constructor(e={}){const{canvas:n=uE(),context:r=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),w=new Int32Array(4);let x=null,y=null;const P=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ii,this.toneMapping=$s,this.toneMappingExposure=1;const R=this;let j=!1,F=0,N=0,V=null,b=-1,A=null;const k=new fn,se=new fn;let te=null;const fe=new yt(0);let he=0,oe=n.width,le=n.height,B=1,ae=null,re=null;const U=new fn(0,0,oe,le),ne=new fn(0,0,oe,le);let Ie=!1;const Z=new xy;let ue=!1,Me=!1;const _e=new qt,Ae=new qt,Ue=new $,nt=new fn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Ht(){return V===null?B:1}let X=r;function Qn(C,G){return n.getContext(C,G)}try{const C={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qm}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const G="webgl2";if(X=Qn(G,C),X===null)throw Qn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _t,mt,Je,Nt,Ze,D,T,K,pe,ge,ce,Ge,Ce,Ne,pt,xe,Oe,it,st,ke,gt,ut,Ut,H;function Re(){_t=new AA(X),_t.init(),ut=new fC(X,_t),mt=new xA(X,_t,e,ut),Je=new lC(X,_t),mt.reverseDepthBuffer&&_&&Je.buffers.depth.setReversed(!0),Nt=new bA(X),Ze=new q4,D=new cC(X,_t,Je,Ze,mt,ut,Nt),T=new MA(R),K=new TA(R),pe=new FE(X),Ut=new _A(X,pe),ge=new CA(X,pe,Nt,Ut),ce=new LA(X,ge,pe,Nt),st=new PA(X,mt,D),xe=new SA(Ze),Ge=new j4(R,T,K,_t,mt,Ut,xe),Ce=new yC(R,Ze),Ne=new $4,pt=new tC(_t),it=new vA(R,T,K,Je,ce,S,d),Oe=new oC(R,ce,mt),H=new xC(X,Nt,mt,Je),ke=new yA(X,_t,Nt),gt=new RA(X,_t,Nt),Nt.programs=Ge.programs,R.capabilities=mt,R.extensions=_t,R.properties=Ze,R.renderLists=Ne,R.shadowMap=Oe,R.state=Je,R.info=Nt}Re();const ie=new vC(R,X);this.xr=ie,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=_t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(oe,le,!1))},this.getSize=function(C){return C.set(oe,le)},this.setSize=function(C,G,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=C,le=G,n.width=Math.floor(C*B),n.height=Math.floor(G*B),J===!0&&(n.style.width=C+"px",n.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(oe*B,le*B).floor()},this.setDrawingBufferSize=function(C,G,J){oe=C,le=G,B=J,n.width=Math.floor(C*J),n.height=Math.floor(G*J),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,G,J,ee){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,G,J,ee),Je.viewport(k.copy(U).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,G,J,ee){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,G,J,ee),Je.scissor(se.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){Je.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){ae=C},this.setTransparentSort=function(C){re=C},this.getClearColor=function(C){return C.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(C=!0,G=!0,J=!0){let ee=0;if(C){let W=!1;if(V!==null){const Te=V.texture.format;W=Te===eg||Te===Jm||Te===Qm}if(W){const Te=V.texture.type,Se=Te===xi||Te===ko||Te===xu||Te===qa||Te===$m||Te===Km,We=it.getClearColor(),Ve=it.getClearAlpha(),ot=We.r,lt=We.g,Xe=We.b;Se?(M[0]=ot,M[1]=lt,M[2]=Xe,M[3]=Ve,X.clearBufferuiv(X.COLOR,0,M)):(w[0]=ot,w[1]=lt,w[2]=Xe,w[3]=Ve,X.clearBufferiv(X.COLOR,0,w))}else ee|=X.COLOR_BUFFER_BIT}G&&(ee|=X.DEPTH_BUFFER_BIT),J&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ne.dispose(),pt.dispose(),Ze.dispose(),T.dispose(),K.dispose(),ce.dispose(),Ut.dispose(),H.dispose(),Ge.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",qo),ie.removeEventListener("sessionend",ms),Hr.stop()};function de(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const C=Nt.autoReset,G=Oe.enabled,J=Oe.autoUpdate,ee=Oe.needsUpdate,W=Oe.type;Re(),Nt.autoReset=C,Oe.enabled=G,Oe.autoUpdate=J,Oe.needsUpdate=ee,Oe.type=W}function Pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const G=C.target;G.removeEventListener("dispose",ct),Wt(G)}function Wt(C){vn(C),Ze.remove(C)}function vn(C){const G=Ze.get(C).programs;G!==void 0&&(G.forEach(function(J){Ge.releaseProgram(J)}),C.isShaderMaterial&&Ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,J,ee,W,Te){G===null&&(G=Ot);const Se=W.isMesh&&W.matrixWorld.determinant()<0,We=Vu(C,G,J,ee,W);Je.setMaterial(ee,Se);let Ve=J.index,ot=1;if(ee.wireframe===!0){if(Ve=ge.getWireframeAttribute(J),Ve===void 0)return;ot=2}const lt=J.drawRange,Xe=J.attributes.position;let Mt=lt.start*ot,Dt=(lt.start+lt.count)*ot;Te!==null&&(Mt=Math.max(Mt,Te.start*ot),Dt=Math.min(Dt,(Te.start+Te.count)*ot)),Ve!==null?(Mt=Math.max(Mt,0),Dt=Math.min(Dt,Ve.count)):Xe!=null&&(Mt=Math.max(Mt,0),Dt=Math.min(Dt,Xe.count));const St=Dt-Mt;if(St<0||St===1/0)return;Ut.setup(W,ee,We,J,Ve);let kn,ft=ke;if(Ve!==null&&(kn=pe.get(Ve),ft=gt,ft.setIndex(kn)),W.isMesh)ee.wireframe===!0?(Je.setLineWidth(ee.wireframeLinewidth*Ht()),ft.setMode(X.LINES)):ft.setMode(X.TRIANGLES);else if(W.isLine){let qe=ee.linewidth;qe===void 0&&(qe=1),Je.setLineWidth(qe*Ht()),W.isLineSegments?ft.setMode(X.LINES):W.isLineLoop?ft.setMode(X.LINE_LOOP):ft.setMode(X.LINE_STRIP)}else W.isPoints?ft.setMode(X.POINTS):W.isSprite&&ft.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ft.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const qe=W._multiDrawStarts,ar=W._multiDrawCounts,bt=W._multiDrawCount,Bn=Ve?pe.get(Ve).bytesPerElement:1,lr=Ze.get(ee).currentProgram.getUniforms();for(let _n=0;_n<bt;_n++)lr.setValue(X,"_gl_DrawID",_n),ft.render(qe[_n]/Bn,ar[_n])}else if(W.isInstancedMesh)ft.renderInstances(Mt,St,W.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ar=Math.min(J.instanceCount,qe);ft.renderInstances(Mt,St,ar)}else ft.render(Mt,St)};function Tt(C,G,J){C.transparent===!0&&C.side===ss&&C.forceSinglePass===!1?(C.side=yi,C.needsUpdate=!0,Yo(C,G,J),C.side=Zs,C.needsUpdate=!0,Yo(C,G,J),C.side=ss):Yo(C,G,J)}this.compile=function(C,G,J=null){J===null&&(J=C),y=pt.get(J),y.init(G),L.push(y),J.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),C!==J&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const ee=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Se=0;Se<Te.length;Se++){const We=Te[Se];Tt(We,J,W),ee.add(We)}else Tt(Te,J,W),ee.add(Te)}),L.pop(),y=null,ee},this.compileAsync=function(C,G,J=null){const ee=this.compile(C,G,J);return new Promise(W=>{function Te(){if(ee.forEach(function(Se){Ze.get(Se).currentProgram.isReady()&&ee.delete(Se)}),ee.size===0){W(C);return}setTimeout(Te,10)}_t.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ai=null;function Jn(C){ai&&ai(C)}function qo(){Hr.stop()}function ms(){Hr.start()}const Hr=new Sy;Hr.setAnimationLoop(Jn),typeof self<"u"&&Hr.setContext(self),this.setAnimationLoop=function(C){ai=C,ie.setAnimationLoop(C),C===null?Hr.stop():Hr.start()},ie.addEventListener("sessionstart",qo),ie.addEventListener("sessionend",ms),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,G,V),y=pt.get(C,L.length),y.init(G),L.push(y),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),Me=this.localClippingEnabled,ue=xe.init(this.clippingPlanes,Me),x=Ne.get(C,P.length),x.init(),P.push(x),ie.enabled===!0&&ie.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&Gr(Te,G,-1/0,R.sortObjects)}Gr(C,G,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(ae,re),xt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,xt&&it.addToRenderList(x,C),this.info.render.frame++,ue===!0&&xe.beginShadows();const J=y.state.shadowsArray;Oe.render(J,C,G),ue===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=x.opaque,W=x.transmissive;if(y.setupLights(),G.isArrayCamera){const Te=G.cameras;if(W.length>0)for(let Se=0,We=Te.length;Se<We;Se++){const Ve=Te[Se];io(ee,W,C,Ve)}xt&&it.render(C);for(let Se=0,We=Te.length;Se<We;Se++){const Ve=Te[Se];no(x,C,Ve,Ve.viewport)}}else W.length>0&&io(ee,W,C,G),xt&&it.render(C),no(x,C,G);V!==null&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(R,C,G),Ut.resetDefaultState(),b=-1,A=null,L.pop(),L.length>0?(y=L[L.length-1],ue===!0&&xe.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function Gr(C,G,J,ee){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){ee&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Se=ce.update(C),We=C.material;We.visible&&x.push(C,Se,We,J,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Se=ce.update(C),We=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),nt.copy(Se.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(We)){const Ve=Se.groups;for(let ot=0,lt=Ve.length;ot<lt;ot++){const Xe=Ve[ot],Mt=We[Xe.materialIndex];Mt&&Mt.visible&&x.push(C,Se,Mt,J,nt.z,Xe)}}else We.visible&&x.push(C,Se,We,J,nt.z,null)}}const Te=C.children;for(let Se=0,We=Te.length;Se<We;Se++)Gr(Te[Se],G,J,ee)}function no(C,G,J,ee){const W=C.opaque,Te=C.transmissive,Se=C.transparent;y.setupLightsView(J),ue===!0&&xe.setGlobalState(R.clippingPlanes,J),ee&&Je.viewport(k.copy(ee)),W.length>0&&gs(W,G,J),Te.length>0&&gs(Te,G,J),Se.length>0&&gs(Se,G,J),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function io(C,G,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ee.id]===void 0&&(y.state.transmissionRenderTarget[ee.id]=new rr(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Au:xi,minFilter:Po,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Te=y.state.transmissionRenderTarget[ee.id],Se=ee.viewport||k;Te.setSize(Se.z,Se.w);const We=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(fe),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),xt&&it.render(J);const Ve=R.toneMapping;R.toneMapping=$s;const ot=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),ue===!0&&xe.setGlobalState(R.clippingPlanes,ee),gs(C,J,ee),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),_t.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Xe=0,Mt=G.length;Xe<Mt;Xe++){const Dt=G[Xe],St=Dt.object,kn=Dt.geometry,ft=Dt.material,qe=Dt.group;if(ft.side===ss&&St.layers.test(ee.layers)){const ar=ft.side;ft.side=yi,ft.needsUpdate=!0,Bu(St,J,ee,kn,ft,qe),ft.side=ar,ft.needsUpdate=!0,lt=!0}}lt===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}R.setRenderTarget(We),R.setClearColor(fe,he),ot!==void 0&&(ee.viewport=ot),R.toneMapping=Ve}function gs(C,G,J){const ee=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Te=C.length;W<Te;W++){const Se=C[W],We=Se.object,Ve=Se.geometry,ot=ee===null?Se.material:ee,lt=Se.group;We.layers.test(J.layers)&&Bu(We,G,J,Ve,ot,lt)}}function Bu(C,G,J,ee,W,Te){C.onBeforeRender(R,G,J,ee,W,Te),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(R,G,J,ee,C,Te),W.transparent===!0&&W.side===ss&&W.forceSinglePass===!1?(W.side=yi,W.needsUpdate=!0,R.renderBufferDirect(J,G,ee,W,C,Te),W.side=Zs,W.needsUpdate=!0,R.renderBufferDirect(J,G,ee,W,C,Te),W.side=ss):R.renderBufferDirect(J,G,ee,W,C,Te),C.onAfterRender(R,G,J,ee,W,Te)}function Yo(C,G,J){G.isScene!==!0&&(G=Ot);const ee=Ze.get(C),W=y.state.lights,Te=y.state.shadowsArray,Se=W.state.version,We=Ge.getParameters(C,W.state,Te,G,J),Ve=Ge.getProgramCacheKey(We);let ot=ee.programs;ee.environment=C.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(C.isMeshStandardMaterial?K:T).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,ot===void 0&&(C.addEventListener("dispose",ct),ot=new Map,ee.programs=ot);let lt=ot.get(Ve);if(lt!==void 0){if(ee.currentProgram===lt&&ee.lightsStateVersion===Se)return wr(C,We),lt}else We.uniforms=Ge.getUniforms(C),C.onBeforeCompile(We,R),lt=Ge.acquireProgram(We,Ve),ot.set(Ve,lt),ee.uniforms=We.uniforms;const Xe=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=xe.uniform),wr(C,We),ee.needsLights=gd(C),ee.lightsStateVersion=Se,ee.needsLights&&(Xe.ambientLightColor.value=W.state.ambient,Xe.lightProbe.value=W.state.probe,Xe.directionalLights.value=W.state.directional,Xe.directionalLightShadows.value=W.state.directionalShadow,Xe.spotLights.value=W.state.spot,Xe.spotLightShadows.value=W.state.spotShadow,Xe.rectAreaLights.value=W.state.rectArea,Xe.ltc_1.value=W.state.rectAreaLTC1,Xe.ltc_2.value=W.state.rectAreaLTC2,Xe.pointLights.value=W.state.point,Xe.pointLightShadows.value=W.state.pointShadow,Xe.hemisphereLights.value=W.state.hemi,Xe.directionalShadowMap.value=W.state.directionalShadowMap,Xe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xe.spotShadowMap.value=W.state.spotShadowMap,Xe.spotLightMatrix.value=W.state.spotLightMatrix,Xe.spotLightMap.value=W.state.spotLightMap,Xe.pointShadowMap.value=W.state.pointShadowMap,Xe.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=lt,ee.uniformsList=null,lt}function zu(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Lf.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function wr(C,G){const J=Ze.get(C);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Vu(C,G,J,ee,W){G.isScene!==!0&&(G=Ot),D.resetTextureUnits();const Te=G.fog,Se=ee.isMeshStandardMaterial?G.environment:null,We=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:al,Ve=(ee.isMeshStandardMaterial?K:T).get(ee.envMap||Se),ot=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,lt=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!J.morphAttributes.position,Mt=!!J.morphAttributes.normal,Dt=!!J.morphAttributes.color;let St=$s;ee.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(St=R.toneMapping);const kn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ft=kn!==void 0?kn.length:0,qe=Ze.get(ee),ar=y.state.lights;if(ue===!0&&(Me===!0||C!==A)){const ei=C===A&&ee.id===b;xe.setState(ee,C,ei)}let bt=!1;ee.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ar.state.version||qe.outputColorSpace!==We||W.isBatchedMesh&&qe.batching===!1||!W.isBatchedMesh&&qe.batching===!0||W.isBatchedMesh&&qe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&qe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&qe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&qe.instancingMorph===!1&&W.morphTexture!==null||qe.envMap!==Ve||ee.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==xe.numPlanes||qe.numIntersection!==xe.numIntersection)||qe.vertexAlphas!==ot||qe.vertexTangents!==lt||qe.morphTargets!==Xe||qe.morphNormals!==Mt||qe.morphColors!==Dt||qe.toneMapping!==St||qe.morphTargetsCount!==ft)&&(bt=!0):(bt=!0,qe.__version=ee.version);let Bn=qe.currentProgram;bt===!0&&(Bn=Yo(ee,G,W));let lr=!1,_n=!1,Tr=!1;const zt=Bn.getUniforms(),Hi=qe.uniforms;if(Je.useProgram(Bn.program)&&(lr=!0,_n=!0,Tr=!0),ee.id!==b&&(b=ee.id,_n=!0),lr||A!==C){Je.buffers.depth.getReversed()?(_e.copy(C.projectionMatrix),fE(_e),dE(_e),zt.setValue(X,"projectionMatrix",_e)):zt.setValue(X,"projectionMatrix",C.projectionMatrix),zt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Gi=zt.map.cameraPosition;Gi!==void 0&&Gi.setValue(X,Ue.setFromMatrixPosition(C.matrixWorld)),mt.logarithmicDepthBuffer&&zt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&zt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,_n=!0,Tr=!0)}if(W.isSkinnedMesh){zt.setOptional(X,W,"bindMatrix"),zt.setOptional(X,W,"bindMatrixInverse");const ei=W.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),zt.setValue(X,"boneTexture",ei.boneTexture,D))}W.isBatchedMesh&&(zt.setOptional(X,W,"batchingTexture"),zt.setValue(X,"batchingTexture",W._matricesTexture,D),zt.setOptional(X,W,"batchingIdTexture"),zt.setValue(X,"batchingIdTexture",W._indirectTexture,D),zt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&zt.setValue(X,"batchingColorTexture",W._colorsTexture,D));const Wr=J.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0)&&st.update(W,J,Bn),(_n||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,zt.setValue(X,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Hi.envMap.value=Ve,Hi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(Hi.envMapIntensity.value=G.environmentIntensity),_n&&(zt.setValue(X,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&Hu(Hi,Tr),Te&&ee.fog===!0&&Ce.refreshFogUniforms(Hi,Te),Ce.refreshMaterialUniforms(Hi,ee,B,le,y.state.transmissionRenderTarget[C.id]),Lf.upload(X,zu(qe),Hi,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Lf.upload(X,zu(qe),Hi,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&zt.setValue(X,"center",W.center),zt.setValue(X,"modelViewMatrix",W.modelViewMatrix),zt.setValue(X,"normalMatrix",W.normalMatrix),zt.setValue(X,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const ei=ee.uniformsGroups;for(let Gi=0,li=ei.length;Gi<li;Gi++){const Gu=ei[Gi];H.update(Gu,Bn),H.bind(Gu,Bn)}}return Bn}function Hu(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function gd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,G,J){Ze.get(C.texture).__webglTexture=G,Ze.get(C.depthTexture).__webglTexture=J;const ee=Ze.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const J=Ze.get(C);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,J=0){V=C,F=G,N=J;let ee=!0,W=null,Te=!1,Se=!1;if(C){const Ve=Ze.get(C);if(Ve.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(X.FRAMEBUFFER,null),ee=!1;else if(Ve.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Ve.__hasExternalTextures)D.rebindTextures(C,Ze.get(C.texture).__webglTexture,Ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xe=C.depthTexture;if(Ve.__boundDepthTexture!==Xe){if(Xe!==null&&Ze.has(Xe)&&(C.width!==Xe.image.width||C.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const ot=C.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Se=!0);const lt=Ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[G])?W=lt[G][J]:W=lt[G],Te=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?W=Ze.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?W=lt[J]:W=lt,k.copy(C.viewport),se.copy(C.scissor),te=C.scissorTest}else k.copy(U).multiplyScalar(B).floor(),se.copy(ne).multiplyScalar(B).floor(),te=Ie;if(Je.bindFramebuffer(X.FRAMEBUFFER,W)&&ee&&Je.drawBuffers(C,W),Je.viewport(k),Je.scissor(se),Je.setScissorTest(te),Te){const Ve=Ze.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ve.__webglTexture,J)}else if(Se){const Ve=Ze.get(C.texture),ot=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.__webglTexture,J||0,ot)}b=-1},this.readRenderTargetPixels=function(C,G,J,ee,W,Te,Se){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(We=We[Se]),We){Je.bindFramebuffer(X.FRAMEBUFFER,We);try{const Ve=C.texture,ot=Ve.format,lt=Ve.type;if(!mt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-ee&&J>=0&&J<=C.height-W&&X.readPixels(G,J,ee,W,ut.convert(ot),ut.convert(lt),Te)}finally{const Ve=V!==null?Ze.get(V).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,G,J,ee,W,Te,Se){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(We=We[Se]),We){const Ve=C.texture,ot=Ve.format,lt=Ve.type;if(!mt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-ee&&J>=0&&J<=C.height-W){Je.bindFramebuffer(X.FRAMEBUFFER,We);const Xe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Xe),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(G,J,ee,W,ut.convert(ot),ut.convert(lt),0);const Mt=V!==null?Ze.get(V).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,Mt);const Dt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await cE(X,Dt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Xe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(Xe),X.deleteSync(Dt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,G=null,J=0){C.isTexture!==!0&&(du("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const ee=Math.pow(2,-J),W=Math.floor(C.image.width*ee),Te=Math.floor(C.image.height*ee),Se=G!==null?G.x:0,We=G!==null?G.y:0;D.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,J,0,0,Se,We,W,Te),Je.unbindTexture()},this.copyTextureToTexture=function(C,G,J=null,ee=null,W=0){C.isTexture!==!0&&(du("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,C=arguments[1],G=arguments[2],W=arguments[3]||0,J=null);let Te,Se,We,Ve,ot,lt,Xe,Mt,Dt;const St=C.isCompressedTexture?C.mipmaps[W]:C.image;J!==null?(Te=J.max.x-J.min.x,Se=J.max.y-J.min.y,We=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,ot=J.min.y,lt=J.isBox3?J.min.z:0):(Te=St.width,Se=St.height,We=St.depth||1,Ve=0,ot=0,lt=0),ee!==null?(Xe=ee.x,Mt=ee.y,Dt=ee.z):(Xe=0,Mt=0,Dt=0);const kn=ut.convert(G.format),ft=ut.convert(G.type);let qe;G.isData3DTexture?(D.setTexture3D(G,0),qe=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),qe=X.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),qe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const ar=X.getParameter(X.UNPACK_ROW_LENGTH),bt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Bn=X.getParameter(X.UNPACK_SKIP_PIXELS),lr=X.getParameter(X.UNPACK_SKIP_ROWS),_n=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,St.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ve),X.pixelStorei(X.UNPACK_SKIP_ROWS,ot),X.pixelStorei(X.UNPACK_SKIP_IMAGES,lt);const Tr=C.isDataArrayTexture||C.isData3DTexture,zt=G.isDataArrayTexture||G.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Hi=Ze.get(C),Wr=Ze.get(G),ei=Ze.get(Hi.__renderTarget),Gi=Ze.get(Wr.__renderTarget);Je.bindFramebuffer(X.READ_FRAMEBUFFER,ei.__webglFramebuffer),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let li=0;li<We;li++)Tr&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.get(C).__webglTexture,W,lt+li),C.isDepthTexture?(zt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.get(G).__webglTexture,W,Dt+li),X.blitFramebuffer(Ve,ot,Te,Se,Xe,Mt,Te,Se,X.DEPTH_BUFFER_BIT,X.NEAREST)):zt?X.copyTexSubImage3D(qe,W,Xe,Mt,Dt+li,Ve,ot,Te,Se):X.copyTexSubImage2D(qe,W,Xe,Mt,Dt+li,Ve,ot,Te,Se);Je.bindFramebuffer(X.READ_FRAMEBUFFER,null),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else zt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(qe,W,Xe,Mt,Dt,Te,Se,We,kn,ft,St.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(qe,W,Xe,Mt,Dt,Te,Se,We,kn,St.data):X.texSubImage3D(qe,W,Xe,Mt,Dt,Te,Se,We,kn,ft,St):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,Xe,Mt,Te,Se,kn,ft,St.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,Xe,Mt,St.width,St.height,kn,St.data):X.texSubImage2D(X.TEXTURE_2D,W,Xe,Mt,Te,Se,kn,ft,St);X.pixelStorei(X.UNPACK_ROW_LENGTH,ar),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,bt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Bn),X.pixelStorei(X.UNPACK_SKIP_ROWS,lr),X.pixelStorei(X.UNPACK_SKIP_IMAGES,_n),W===0&&G.generateMipmaps&&X.generateMipmap(qe),Je.unbindTexture()},this.copyTextureToTexture3D=function(C,G,J=null,ee=null,W=0){return C.isTexture!==!0&&(du("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,C=arguments[2],G=arguments[3],W=arguments[4]||0),du('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,G,J,ee,W)},this.initRenderTarget=function(C){Ze.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),Je.unbindTexture()},this.resetState=function(){F=0,N=0,V=null,Je.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}class fl extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class MC extends Fn{constructor(e=null,n=1,r=1,o,a,u,f,d,m=oi,v=oi,p,_){super(null,u,f,d,m,v,o,a,p,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class P1 extends $n{constructor(e,n,r,o=1){super(e,n,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const La=new qt,L1=new qt,pf=[],D1=new Ho,EC=new qt,au=new si,lu=new Go;class wC extends si{constructor(e,n,r){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new P1(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<r;o++)this.setMatrixAt(o,EC)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ho),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,La),D1.copy(e.boundingBox).applyMatrix4(La),this.boundingBox.union(D1)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,La),lu.copy(e.boundingSphere).applyMatrix4(La),this.boundingSphere.union(lu)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const r=n.morphTargetInfluences,o=this.morphTexture.source.data.data,a=r.length+1,u=e*a+1;for(let f=0;f<r.length;f++)r[f]=o[u+f]}raycast(e,n){const r=this.matrixWorld,o=this.count;if(au.geometry=this.geometry,au.material=this.material,au.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lu.copy(this.boundingSphere),lu.applyMatrix4(r),e.ray.intersectsSphere(lu)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,La),L1.multiplyMatrices(r,La),au.matrixWorld=L1,au.raycast(e,pf);for(let u=0,f=pf.length;u<f;u++){const d=pf[u];d.instanceId=a,d.object=this,n.push(d)}pf.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new P1(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const r=n.morphTargetInfluences,o=r.length+1;this.morphTexture===null&&(this.morphTexture=new MC(new Float32Array(o*this.count),o,this.count,Zm,Ir));const a=this.morphTexture.source.data.data;let u=0;for(let m=0;m<r.length;m++)u+=r[m];const f=this.geometry.morphTargetsRelative?1:1-u,d=o*e;a[d]=f,a.set(r,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cy extends ul{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nf=new $,Ff=new $,I1=new qt,uu=new tg,mf=new Go,bp=new $,U1=new $;class TC extends Yn{constructor(e=new Fi,n=new Cy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,a=n.count;o<a;o++)Nf.fromBufferAttribute(n,o-1),Ff.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Nf.distanceTo(Ff);e.setAttribute("lineDistance",new ir(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),mf.copy(r.boundingSphere),mf.applyMatrix4(o),mf.radius+=a,e.ray.intersectsSphere(mf)===!1)return;I1.copy(o).invert(),uu.copy(e.ray).applyMatrix4(I1);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,m=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const S=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let w=S,x=M-1;w<x;w+=m){const y=v.getX(w),P=v.getX(w+1),L=gf(this,e,uu,d,y,P);L&&n.push(L)}if(this.isLineLoop){const w=v.getX(M-1),x=v.getX(S),y=gf(this,e,uu,d,w,x);y&&n.push(y)}}else{const S=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let w=S,x=M-1;w<x;w+=m){const y=gf(this,e,uu,d,w,w+1);y&&n.push(y)}if(this.isLineLoop){const w=gf(this,e,uu,d,M-1,S);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function gf(t,e,n,r,o,a){const u=t.geometry.attributes.position;if(Nf.fromBufferAttribute(u,o),Ff.fromBufferAttribute(u,a),n.distanceSqToSegment(Nf,Ff,bp,U1)>r)return;bp.applyMatrix4(t.matrixWorld);const d=e.ray.origin.distanceTo(bp);if(!(d<e.near||d>e.far))return{distance:d,point:U1.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const N1=new $,F1=new $;class AC extends TC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,a=n.count;o<a;o+=2)N1.fromBufferAttribute(n,o),F1.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+N1.distanceTo(F1);e.setAttribute("lineDistance",new ir(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ry extends ul{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const O1=new qt,Cm=new tg,vf=new Go,_f=new $;class by extends Yn{constructor(e=new Fi,n=new Ry){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),vf.copy(r.boundingSphere),vf.applyMatrix4(o),vf.radius+=a,e.ray.intersectsSphere(vf)===!1)return;O1.copy(o).invert(),Cm.copy(e.ray).applyMatrix4(O1);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,m=r.index,p=r.attributes.position;if(m!==null){const _=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let M=_,w=S;M<w;M++){const x=m.getX(M);_f.fromBufferAttribute(p,x),k1(_f,x,d,o,e,n,this)}}else{const _=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let M=_,w=S;M<w;M++)_f.fromBufferAttribute(p,M),k1(_f,M,d,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function k1(t,e,n,r,o,a,u){const f=Cm.distanceSqToPoint(t);if(f<n){const d=new $;Cm.closestPointToPoint(t,d),d.applyMatrix4(r);const m=o.ray.origin.distanceTo(d);if(m<o.near||m>o.far)return;a.push({distance:m,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class CC extends Fn{constructor(e,n,r,o,a,u,f,d,m){super(e,n,r,o,a,u,f,d,m),this.isVideoTexture=!0,this.minFilter=u!==void 0?u:Zt,this.magFilter=a!==void 0?a:Zt,this.generateMipmaps=!1;const v=this;function p(){v.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class rg extends Fi{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const a=[],u=[];f(o),m(r),v(),this.setAttribute("position",new ir(a,3)),this.setAttribute("normal",new ir(a.slice(),3)),this.setAttribute("uv",new ir(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(P){const L=new $,R=new $,j=new $;for(let F=0;F<n.length;F+=3)S(n[F+0],L),S(n[F+1],R),S(n[F+2],j),d(L,R,j,P)}function d(P,L,R,j){const F=j+1,N=[];for(let V=0;V<=F;V++){N[V]=[];const b=P.clone().lerp(R,V/F),A=L.clone().lerp(R,V/F),k=F-V;for(let se=0;se<=k;se++)se===0&&V===F?N[V][se]=b:N[V][se]=b.clone().lerp(A,se/k)}for(let V=0;V<F;V++)for(let b=0;b<2*(F-V)-1;b++){const A=Math.floor(b/2);b%2===0?(_(N[V][A+1]),_(N[V+1][A]),_(N[V][A])):(_(N[V][A+1]),_(N[V+1][A+1]),_(N[V+1][A]))}}function m(P){const L=new $;for(let R=0;R<a.length;R+=3)L.x=a[R+0],L.y=a[R+1],L.z=a[R+2],L.normalize().multiplyScalar(P),a[R+0]=L.x,a[R+1]=L.y,a[R+2]=L.z}function v(){const P=new $;for(let L=0;L<a.length;L+=3){P.x=a[L+0],P.y=a[L+1],P.z=a[L+2];const R=x(P)/2/Math.PI+.5,j=y(P)/Math.PI+.5;u.push(R,1-j)}M(),p()}function p(){for(let P=0;P<u.length;P+=6){const L=u[P+0],R=u[P+2],j=u[P+4],F=Math.max(L,R,j),N=Math.min(L,R,j);F>.9&&N<.1&&(L<.2&&(u[P+0]+=1),R<.2&&(u[P+2]+=1),j<.2&&(u[P+4]+=1))}}function _(P){a.push(P.x,P.y,P.z)}function S(P,L){const R=P*3;L.x=e[R+0],L.y=e[R+1],L.z=e[R+2]}function M(){const P=new $,L=new $,R=new $,j=new $,F=new Et,N=new Et,V=new Et;for(let b=0,A=0;b<a.length;b+=9,A+=6){P.set(a[b+0],a[b+1],a[b+2]),L.set(a[b+3],a[b+4],a[b+5]),R.set(a[b+6],a[b+7],a[b+8]),F.set(u[A+0],u[A+1]),N.set(u[A+2],u[A+3]),V.set(u[A+4],u[A+5]),j.copy(P).add(L).add(R).divideScalar(3);const k=x(j);w(F,A+0,P,k),w(N,A+2,L,k),w(V,A+4,R,k)}}function w(P,L,R,j){j<0&&P.x===1&&(u[L]=P.x-1),R.x===0&&R.z===0&&(u[L]=j/2/Math.PI+.5)}function x(P){return Math.atan2(P.z,-P.x)}function y(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rg(e.vertices,e.indices,e.radius,e.details)}}class sg extends rg{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new sg(e.radius,e.detail)}}const B1={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class RC{constructor(e,n,r){const o=this;let a=!1,u=0,f=0,d;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(v){f++,a===!1&&o.onStart!==void 0&&o.onStart(v,u,f),a=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,f),u===f&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return d?d(v):v},this.setURLModifier=function(v){return d=v,this},this.addHandler=function(v,p){return m.push(v,p),this},this.removeHandler=function(v){const p=m.indexOf(v);return p!==-1&&m.splice(p,2),this},this.getHandler=function(v){for(let p=0,_=m.length;p<_;p+=2){const S=m[p],M=m[p+1];if(S.global&&(S.lastIndex=0),S.test(v))return M}return null}}}const bC=new RC;class og{constructor(e){this.manager=e!==void 0?e:bC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,a){r.load(e,o,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}og.DEFAULT_MATERIAL_NAME="__DEFAULT";class PC extends og{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,u=B1.get(e);if(u!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(u),a.manager.itemEnd(e)},0),u;const f=Su("img");function d(){v(),B1.add(e,this),n&&n(this),a.manager.itemEnd(e)}function m(p){v(),o&&o(p),a.manager.itemError(e),a.manager.itemEnd(e)}function v(){f.removeEventListener("load",d,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),a.manager.itemStart(e),f.src=e,f}}class LC extends og{constructor(e){super(e)}load(e,n,r,o){const a=new Fn,u=new PC(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){a.image=f,a.needsUpdate=!0,n!==void 0&&n(a)},r,o),a}}class DC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=z1(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=z1();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function z1(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);const V1=t=>{let e;const n=new Set,r=(m,v)=>{const p=typeof m=="function"?m(e):m;if(!Object.is(p,e)){const _=e;e=v??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(S=>S(e,_))}},o=()=>e,f={setState:r,getState:o,getInitialState:()=>d,subscribe:m=>(n.add(m),()=>n.delete(m))},d=e=t(r,o,f);return f},IC=(t=>t?V1(t):V1),UC=t=>t;function NC(t,e=UC){const n=fu.useSyncExternalStore(t.subscribe,fu.useCallback(()=>e(t.getState()),[t,e]),fu.useCallback(()=>e(t.getInitialState()),[t,e]));return fu.useDebugValue(n),n}const H1=t=>{const e=IC(t),n=r=>NC(e,r);return Object.assign(n,e),n},FC=(t=>t?H1(t):H1),OC=[{id:"preset-cyber-ghost",name:"Cyber Ghost",timestamp:0,params:{videoAlpha:.3,audioBassGain:1.5,afterimage:{fade:.85,sensitivity:.6,color:"#00fff2"},skeleton:{color:"#ff00e5",gridDensity:12,linkDistance:.4,enabled:!0},ascii:{enabled:!0,density:48,color:"#00fff2"},geometry:{size:1.2,maskStrength:.7,filterColor:"#8b5cf6",enabled:!0},particle:{emissionRate:200,size:2.5,gravity:-.3,color:"#00fff2",maxCount:5e3},composite:{bloomStrength:1.2,filterColor:"#0a0a2e",maskStrength:.5},quality:"high"}},{id:"preset-neon-pulse",name:"Neon Pulse",timestamp:0,params:{videoAlpha:.6,audioBassGain:1.8,afterimage:{fade:.7,sensitivity:.4,color:"#ff00e5"},skeleton:{color:"#00fff2",gridDensity:8,linkDistance:.6,enabled:!0},ascii:{enabled:!1,density:32,color:"#ffffff"},geometry:{size:.8,maskStrength:.4,filterColor:"#ff00e5",enabled:!1},particle:{emissionRate:400,size:1.8,gravity:.5,color:"#ff00e5",maxCount:8e3},composite:{bloomStrength:1.6,filterColor:"#1a0020",maskStrength:.3},quality:"medium"}}],kC={videoAlpha:.8,audioBassGain:1,quality:"medium",afterimage:{fade:.75,sensitivity:.5,color:"#00fff2"},skeleton:{color:"#ff00e5",gridDensity:10,linkDistance:.5,enabled:!0},ascii:{enabled:!1,density:40,color:"#00fff2"},geometry:{size:1,maskStrength:.5,filterColor:"#8b5cf6",enabled:!1},particle:{emissionRate:150,size:2,gravity:.2,color:"#00fff2",maxCount:5e3},composite:{bloomStrength:.8,filterColor:"#0a0a1a",maskStrength:.4}},tr=FC((t,e)=>({...kC,isPlaying:!1,currentTime:0,duration:0,videoSrc:"/samples/test-dance.mp4",presets:[...OC],setPlaying:n=>t({isPlaying:n}),setCurrentTime:n=>t({currentTime:n}),setDuration:n=>t({duration:n}),setVideoSrc:n=>t({videoSrc:n}),savePreset:n=>{const r=e(),o={id:`preset-${Date.now()}`,name:n,timestamp:Date.now(),params:{videoAlpha:r.videoAlpha,audioBassGain:r.audioBassGain,afterimage:{...r.afterimage},skeleton:{...r.skeleton},ascii:{...r.ascii},geometry:{...r.geometry},particle:{...r.particle},composite:{...r.composite},quality:r.quality}};t(a=>({presets:[...a.presets,o]}))},applyPreset:n=>{const o=e().presets.find(a=>a.id===n);o&&t({...o.params})},deletePreset:n=>{t(r=>({presets:r.presets.filter(o=>o.id!==n||o.timestamp===0)}))},set:n=>t(n)}));class BC{mesh=null;material;geometry;renderer;scene;camera;videoAspect=480/852;constructor(e,n,r){this.renderer=e,this.scene=n,this.camera=r,this.geometry=new eo(2,2),this.material=new Si({uniforms:{uTexture:{value:null},uAlpha:{value:1},uVideoAspect:{value:this.videoAspect},uCanvasAspect:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uTexture;
        uniform float uAlpha;
        uniform float uVideoAspect;
        uniform float uCanvasAspect;
        varying vec2 vUv;

        vec2 coverFitUv(vec2 uv, float videoAspect, float canvasAspect) {
          // Cover-fit: 填满 canvas，裁切溢出部分，保持宽高比
          vec2 fittedUv = uv;
          if (canvasAspect > videoAspect) {
            // Canvas 比视频宽 → 视频高度填满，水平裁切
            float s = canvasAspect / videoAspect;
            fittedUv.x = (uv.x - 0.5) / s + 0.5;
          } else {
            // Canvas 比视频高 → 视频宽度填满，垂直裁切
            float s = videoAspect / canvasAspect;
            fittedUv.y = (uv.y - 0.5) / s + 0.5;
          }
          return fittedUv;
        }

        void main() {
          if (uAlpha <= 0.001) {
            discard;
          }
          vec2 uv = coverFitUv(vUv, uVideoAspect, uCanvasAspect);
          // Clamp UVs
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
            discard;
          }
          vec4 color = texture2D(uTexture, uv);
          gl_FragColor = vec4(color.rgb, color.a * uAlpha);
        }
      `,transparent:!0,depthTest:!1,depthWrite:!1}),this.mesh=new si(this.geometry,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.scene.add(this.mesh)}update(e){e.videoTexture&&(this.material.uniforms.uTexture.value=e.videoTexture,e.videoElement&&e.videoElement.videoWidth>0&&(this.videoAspect=e.videoElement.videoWidth/e.videoElement.videoHeight,this.material.uniforms.uVideoAspect.value=this.videoAspect));const n=e.width/e.height;this.material.uniforms.uCanvasAspect.value=n,this.material.uniforms.uAlpha.value=e.store.videoAlpha}render(e){this.mesh&&this.mesh.visible}setTexture(e){this.material.uniforms.uTexture.value=e}dispose(){this.mesh&&this.scene.remove(this.mesh),this.geometry.dispose(),this.material.dispose()}}var Ka=typeof self<"u"?self:{};function Py(t,e){e:{for(var n=["CLOSURE_FLAGS"],r=Ka,o=0;o<n.length;o++)if((r=r[n[o]])==null){n=null;break e}n=r}return(t=n&&n[t])!=null?t:e}function Eo(){throw Error("Invalid UTF8")}function G1(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let yf,Pp;const zC=typeof TextDecoder<"u";let VC;const HC=typeof TextEncoder<"u";function Ly(t){if(HC)t=(VC||=new TextEncoder).encode(t);else{let n=0;const r=new Uint8Array(3*t.length);for(let o=0;o<t.length;o++){var e=t.charCodeAt(o);if(e<128)r[n++]=e;else{if(e<2048)r[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&o<t.length){const a=t.charCodeAt(++o);if(a>=56320&&a<=57343){e=1024*(e-55296)+a-56320+65536,r[n++]=e>>18|240,r[n++]=e>>12&63|128,r[n++]=e>>6&63|128,r[n++]=63&e|128;continue}o--}e=65533}r[n++]=e>>12|224,r[n++]=e>>6&63|128}r[n++]=63&e|128}}t=n===r.length?r:r.subarray(0,n)}return t}function Dy(t){Ka.setTimeout((()=>{throw t}),0)}var Rm,GC=Py(610401301,!1),W1=Py(748402147,!0);function X1(){var t=Ka.navigator;return t&&(t=t.userAgent)?t:""}const j1=Ka.navigator;function qf(t){return qf[" "](t),t}Rm=j1&&j1.userAgentData||null,qf[" "]=function(){};const Iy={};let pu=null;function WC(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const r=new Uint8Array(n);let o=0;return(function(a,u){function f(m){for(;d<a.length;){const v=a.charAt(d++),p=pu[v];if(p!=null)return p;if(!/^[\s\xa0]*$/.test(v))throw Error("Unknown base64 encoding at char: "+v)}return m}Uy();let d=0;for(;;){const m=f(-1),v=f(0),p=f(64),_=f(64);if(_===64&&m===-1)break;u(m<<2|v>>4),p!=64&&(u(v<<4&240|p>>2),_!=64&&u(p<<6&192|_))}})(t,(function(a){r[o++]=a})),o!==n?r.subarray(0,o):r}function Uy(){if(!pu){pu={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const r=t.concat(e[n].split(""));Iy[n]=r;for(let o=0;o<r.length;o++){const a=r[o];pu[a]===void 0&&(pu[a]=o)}}}}var XC=typeof Uint8Array<"u",Ny=!(!(GC&&Rm&&Rm.brands.length>0)&&(X1().indexOf("Trident")!=-1||X1().indexOf("MSIE")!=-1))&&typeof btoa=="function";const q1=/[-_.]/g,jC={"-":"+",_:"/",".":"="};function qC(t){return jC[t]||""}function Fy(t){if(!Ny)return WC(t);t=q1.test(t)?t.replace(q1,qC):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function ag(t){return XC&&t!=null&&t instanceof Uint8Array}var Za={};function Bo(){return YC||=new Nr(null,Za)}function lg(t){Oy(Za);var e=t.g;return(e=e==null||ag(e)?e:typeof e=="string"?Fy(e):null)==null?e:t.g=e}var Nr=class{h(){return new Uint8Array(lg(this)||0)}constructor(t,e){if(Oy(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let YC,$C;function Oy(t){if(t!==Za)throw Error("illegal external caller")}function ky(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function bm(t){return ky(t=Error(t),"warning"),t}function Qa(t,e){if(t!=null){var n=$C??={},r=n[t]||0;r>=e||(n[t]=r+1,ky(t=Error(),"incident"),Dy(t))}}function dl(){return typeof BigInt=="function"}var hl=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Or(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var KC=Or("jas",void 0,!0),Y1=Or(void 0,"0di"),cu=Or(void 0,"1oa"),Ui=Or(void 0,Symbol()),ZC=Or(void 0,"0ub"),QC=Or(void 0,"0ubs"),Pm=Or(void 0,"0ubsb"),JC=Or(void 0,"0actk"),Ja=Or("m_m","Pa",!0),$1=Or();const By={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},zy=Object.defineProperties,Ye=hl?KC:"Ga";var Wo;const K1=[];function Lu(t,e){hl||Ye in t||zy(t,By),t[Ye]|=e}function An(t,e){hl||Ye in t||zy(t,By),t[Ye]=e}function Du(t){return Lu(t,34),t}function Mu(t){return Lu(t,8192),t}An(K1,7),Wo=Object.freeze(K1);var el={};function Oi(t,e){return e===void 0?t.h!==zo&&!!(2&(0|t.v[Ye])):!!(2&e)&&t.h!==zo}const zo={};function ug(t,e){if(t!=null){if(typeof t=="string")t=t?new Nr(t,Za):Bo();else if(t.constructor!==Nr)if(ag(t))t=t.length?new Nr(new Uint8Array(t),Za):Bo();else{if(!e)throw Error();t=void 0}}return t}class Z1{constructor(e,n,r){this.g=e,this.h=n,this.l=r}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var eR=Object.freeze({});function Vy(t,e,n){const r=128&e?0:-1,o=t.length;var a;(a=!!o)&&(a=(a=t[o-1])!=null&&typeof a=="object"&&a.constructor===Object);const u=o+(a?-1:0);for(e=128&e?1:0;e<u;e++)n(e-r,t[e]);if(a){t=t[o-1];for(const f in t)!isNaN(f)&&n(+f,t[f])}}var Hy={};function pl(t){return 128&t?Hy:void 0}function Yf(t){return t.Na=!0,t}var tR=Yf((t=>typeof t=="number")),Q1=Yf((t=>typeof t=="string")),nR=Yf((t=>typeof t=="boolean")),$f=typeof Ka.BigInt=="function"&&typeof Ka.BigInt(0)=="bigint";function Ni(t){var e=t;if(Q1(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(tR(e)&&!Number.isSafeInteger(e))throw Error(String(e));return $f?BigInt(t):t=nR(t)?t?"1":"0":Q1(t)?t.trim()||"0":String(t)}var Lm=Yf((t=>$f?t>=rR&&t<=oR:t[0]==="-"?J1(t,iR):J1(t,sR)));const iR=Number.MIN_SAFE_INTEGER.toString(),rR=$f?BigInt(Number.MIN_SAFE_INTEGER):void 0,sR=Number.MAX_SAFE_INTEGER.toString(),oR=$f?BigInt(Number.MAX_SAFE_INTEGER):void 0;function J1(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const r=t[n],o=e[n];if(r>o)return!1;if(r<o)return!0}}const aR=typeof Uint8Array.prototype.slice=="function";let lR,tn=0,pn=0;function e2(t){const e=t>>>0;tn=e,pn=(t-e)/4294967296>>>0}function tl(t){if(t<0){e2(-t);const[e,n]=dg(tn,pn);tn=e>>>0,pn=n>>>0}else e2(t)}function cg(t){const e=lR||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),pn=0,tn=e.getUint32(0,!0)}function Gy(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Eu(t,e)}function uR(t,e){return Ni(dl()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Eu(t,e))}function Wy(t,e){return dl()?Ni(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Ni(fg(t,e))}function Eu(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else dl()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+t2(n)+t2(t));return n}function t2(t){return t=String(t),"0000000".slice(t.length)+t}function fg(t,e){if(2147483648&e)if(dl())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,r]=dg(t,e);t="-"+Eu(n,r)}else t=Eu(t,e);return t}function Kf(t){if(t.length<16)tl(Number(t));else if(dl())t=BigInt(t),tn=Number(t&BigInt(4294967295))>>>0,pn=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");pn=tn=0;const n=t.length;for(let r=e,o=(n-e)%6+e;o<=n;r=o,o+=6){const a=Number(t.slice(r,o));pn*=1e6,tn=1e6*tn+a,tn>=4294967296&&(pn+=Math.trunc(tn/4294967296),pn>>>=0,tn>>>=0)}if(e){const[r,o]=dg(tn,pn);tn=r,pn=o}}}function dg(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function xr(t){return Array.prototype.slice.call(t)}const Iu=typeof BigInt=="function"?BigInt.asIntN:void 0,cR=typeof BigInt=="function"?BigInt.asUintN:void 0,Vo=Number.isSafeInteger,Zf=Number.isFinite,nl=Math.trunc,fR=Ni(0);function mu(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function Ur(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function wu(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Xy(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const dR=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Uu(t){switch(typeof t){case"bigint":return!0;case"number":return Zf(t);case"string":return dR.test(t);default:return!1}}function ml(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Zf(t)?0|t:void 0}function jy(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Zf(t)?t>>>0:void 0}function qy(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Kf(t),fg(tn,pn))}function hg(t){if(t=nl(t),!Vo(t)){tl(t);var e=tn,n=pn;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=Gy(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function Yy(t){var e=nl(Number(t));return Vo(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),qy(t))}function $y(t){var e=nl(Number(t));return Vo(e)?Ni(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),dl()?Ni(Iu(64,BigInt(t))):Ni(qy(t)))}function Ky(t){return Vo(t)?t=Ni(hg(t)):(t=nl(t),Vo(t)?t=String(t):(tl(t),t=fg(tn,pn)),t=Ni(t)),t}function Of(t){const e=typeof t;return t==null?t:e==="bigint"?Ni(Iu(64,t)):Uu(t)?e==="string"?$y(t):Ky(t):void 0}function Zy(t){if(typeof t!="string")throw Error();return t}function Nu(t){if(t!=null&&typeof t!="string")throw Error();return t}function On(t){return t==null||typeof t=="string"?t:void 0}function pg(t,e,n,r){return t!=null&&t[Ja]===el?t:Array.isArray(t)?((r=(n=0|t[Ye])|32&r|2&r)!==n&&An(t,r),new e(t)):(n?2&r?((t=e[Y1])||(Du((t=new e).v),t=e[Y1]=t),e=t):e=new e:e=void 0,e)}function hR(t,e,n){if(e)e:{if(!Uu(e=t))throw bm("int64");switch(typeof e){case"string":e=$y(e);break e;case"bigint":e=Ni(Iu(64,e));break e;default:e=Ky(e)}}else e=Of(t);return(t=e)==null?n?fR:void 0:t}const pR={};let mR=(function(){try{return qf(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Lp{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const gR=mR?(Object.setPrototypeOf(Lp.prototype,Map.prototype),Object.defineProperties(Lp.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Lp):class extends Map{constructor(){super()}};function n2(t){return t}function Dp(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var fs=class extends gR{constructor(t,e,n=n2,r=n2){super(),this.J=0|t[Ye],this.K=e,this.S=n,this.fa=this.K?vR:r;for(let o=0;o<t.length;o++){const a=t[o],u=n(a[0],!1,!0);let f=a[1];e?f===void 0&&(f=null):f=r(a[1],!1,!0,void 0,void 0,this.J),super.set(u,f)}}V(t){return Mu(Array.from(super.entries(),t))}clear(){Dp(this),super.clear()}delete(t){return Dp(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new Z1(t,_R,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new Z1(t,fs.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,r,o)=>{t.call(e,o.get(r),r,o)})):super.forEach(t,e)}set(t,e){return Dp(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function vR(t,e,n,r,o,a){return t=pg(t,r,n,a),o&&(t=gg(t)),t}function _R(t){return[t,this.get(t)]}let yR;function i2(){return yR||=new fs(Du([]),void 0,void 0,void 0,pR)}function Qf(t){return Ui?t[Ui]:void 0}function kf(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}fs.prototype.toJSON=void 0;var Dm=class{};const xR={Ka:!0};function SR(t,e){e<100||Qa(QC,1)}function Jf(t,e,n,r){const o=r!==void 0;r=!!r;var a,u=Ui;!o&&hl&&u&&(a=t[u])&&kf(a,SR),u=[];var f=t.length;let d;a=4294967295;let m=!1;const v=!!(64&e),p=v?128&e?0:-1:void 0;1&e||(d=f&&t[f-1],d!=null&&typeof d=="object"&&d.constructor===Object?a=--f:d=void 0,!v||128&e||o||(m=!0,a=a-p+p)),e=void 0;for(var _=0;_<f;_++){let S=t[_];if(S!=null&&(S=n(S,r))!=null)if(v&&_>=a){const M=_-p;(e??={})[M]=S}else u[_]=S}if(d)for(let S in d){if((f=d[S])==null||(f=n(f,r))==null)continue;let M;_=+S,v&&!Number.isNaN(_)&&(M=_+p)<a?u[M]=f:(e??={})[S]=f}return e&&(m?u.push(e):u[a]=e),o&&Ui&&(t=Qf(t))&&t instanceof Dm&&(u[Ui]=(function(S){const M=new Dm;return kf(S,((w,x,y)=>{M[x]=xr(y)})),M.da=S.da,M})(t)),u}function MR(t){return t[0]=Tu(t[0]),t[1]=Tu(t[1]),t}function Tu(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Lm(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Ye];return t.length===0&&1&e?void 0:Jf(t,e,Tu)}if(t!=null&&t[Ja]===el)return Qy(t);if(t instanceof Nr){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(Ny){for(var n="",r=0,o=e.length-10240;r<o;)n+=String.fromCharCode.apply(null,e.subarray(r,r+=10240));n+=String.fromCharCode.apply(null,r?e.subarray(r):e),e=btoa(n)}else{n===void 0&&(n=0),Uy(),n=Iy[n],r=Array(Math.floor(e.length/3)),o=n[64]||"";let m=0,v=0;for(;m<e.length-2;m+=3){var a=e[m],u=e[m+1],f=e[m+2],d=n[a>>2];a=n[(3&a)<<4|u>>4],u=n[(15&u)<<2|f>>6],f=n[63&f],r[v++]=d+a+u+f}switch(d=0,f=o,e.length-m){case 2:f=n[(15&(d=e[m+1]))<<2]||o;case 1:e=e[m],r[v]=n[e>>2]+n[(3&e)<<4|d>>4]+f+o}e=r.join("")}t=t.g=e}return t}return t instanceof fs?t=t.size!==0?t.V(MR):void 0:void 0}return t}let ER,wR;function Qy(t){return Jf(t=t.v,0|t[Ye],Tu)}function Io(t,e){return Jy(t,e[0],e[1])}function Jy(t,e,n,r=0){if(t==null){var o=32;n?(t=[n],o|=128):t=[],e&&(o=-16760833&o|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(o=0|t[Ye],W1&&1&o)throw Error("rfarr");if(2048&o&&!(2&o)&&(function(){if(W1)throw Error("carr");Qa(JC,5)})(),256&o)throw Error("farr");if(64&o)return(o|r)!==o&&An(t,o|r),t;if(n&&(o|=128,n!==t[0]))throw Error("mid");e:{o|=64;var a=(n=t).length;if(a){var u=a-1;const d=n[u];if(d!=null&&typeof d=="object"&&d.constructor===Object){if((u-=e=128&o?0:-1)>=1024)throw Error("pvtlmt");for(var f in d)(a=+f)<u&&(n[a+e]=d[f],delete d[f]);o=-16760833&o|(1023&u)<<14;break e}}if(e){if((f=Math.max(e,a-(128&o?0:-1)))>1024)throw Error("spvt");o=-16760833&o|(1023&f)<<14}}}return An(t,64|o|r),t}function TR(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Ye];return t.length===0&&1&n?void 0:r2(t,n,e)}if(t!=null&&t[Ja]===el)return s2(t);if(t instanceof fs){if(2&(e=t.J))return t;if(!t.size)return;if(n=Du(t.V()),t.K)for(t=0;t<n.length;t++){const r=n[t];let o=r[1];o=o==null||typeof o!="object"?void 0:o!=null&&o[Ja]===el?s2(o):Array.isArray(o)?r2(o,0|o[Ye],!!(32&e)):void 0,r[1]=o}return n}return t instanceof Nr?t:void 0}function r2(t,e,n){return 2&e||(!n||4096&e||16&e?t=gl(t,e,!1,n&&!(16&e)):(Lu(t,34),4&e&&Object.freeze(t))),t}function mg(t,e,n){return t=new t.constructor(e),n&&(t.h=zo),t.m=zo,t}function s2(t){const e=t.v,n=0|e[Ye];return Oi(t,n)?t:vg(t,e,n)?mg(t,e):gl(e,n)}function gl(t,e,n,r){return r??=!!(34&e),t=Jf(t,e,TR,r),r=32,n&&(r|=2),An(t,e=16769217&e|r),t}function gg(t){const e=t.v,n=0|e[Ye];return Oi(t,n)?vg(t,e,n)?mg(t,e,!0):new t.constructor(gl(e,n,!1)):t}function vl(t){if(t.h!==zo)return!1;var e=t.v;return Lu(e=gl(e,0|e[Ye]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function _l(t){if(!vl(t)&&Oi(t,0|t.v[Ye]))throw Error()}function Xo(t,e){e===void 0&&(e=0|t[Ye]),32&e&&!(4096&e)&&An(t,4096|e)}function vg(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(An(e,2|n),t.h=zo,!0)}const ex=Ni(0),Hs={};function nn(t,e,n,r,o){if((e=ds(t.v,e,n,o))!==null||r&&t.m!==zo)return e}function ds(t,e,n,r){if(e===-1)return null;const o=e+(n?0:-1),a=t.length-1;let u,f;if(!(a<1+(n?0:-1))){if(o>=a)if(u=t[a],u!=null&&typeof u=="object"&&u.constructor===Object)n=u[e],f=!0;else{if(o!==a)return;n=u}else n=t[o];if(r&&n!=null){if((r=r(n))==null)return r;if(!Object.is(r,n))return f?u[e]=r:t[o]=r,r}return n}}function Bt(t,e,n,r){_l(t),Mn(t=t.v,0|t[Ye],e,n,r)}function Mn(t,e,n,r,o){const a=n+(o?0:-1);var u=t.length-1;if(u>=1+(o?0:-1)&&a>=u){const f=t[u];if(f!=null&&typeof f=="object"&&f.constructor===Object)return f[n]=r,e}return a<=u?(t[a]=r,e):(r!==void 0&&(n>=(u=(e??=0|t[Ye])>>14&1023||536870912)?r!=null&&(t[u+(o?0:-1)]={[n]:r}):t[a]=r),e)}function Lo(){return eR===void 0?2:4}function Do(t,e,n,r,o){let a=t.v,u=0|a[Ye];r=Oi(t,u)?1:r,o=!!o||r===3,r===2&&vl(t)&&(a=t.v,u=0|a[Ye]);let f=(t=_g(a,e))===Wo?7:0|t[Ye],d=yg(f,u);var m=!(4&d);if(m){4&d&&(t=xr(t),f=0,d=No(d,u),u=Mn(a,u,e,t));let v=0,p=0;for(;v<t.length;v++){const _=n(t[v]);_!=null&&(t[p++]=_)}p<v&&(t.length=p),n=-513&(4|d),d=n&=-1025,d&=-4097}return d!==f&&(An(t,d),2&d&&Object.freeze(t)),tx(t,d,a,u,e,r,m,o)}function tx(t,e,n,r,o,a,u,f){let d=e;return a===1||a===4&&(2&e||!(16&e)&&32&r)?Uo(e)||((e|=!t.length||u&&!(4096&e)||32&r&&!(4096&e||16&e)?2:256)!==d&&An(t,e),Object.freeze(t)):(a===2&&Uo(e)&&(t=xr(t),d=0,e=No(e,r),r=Mn(n,r,o,t)),Uo(e)||(f||(e|=16),e!==d&&An(t,e))),2&e||!(4096&e||16&e)||Xo(n,r),t}function _g(t,e,n){return t=ds(t,e,n),Array.isArray(t)?t:Wo}function yg(t,e){return 2&e&&(t|=2),1|t}function Uo(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function nx(t){return ug(t,!0)}function ix(t){t=xr(t);for(let e=0;e<t.length;e++){const n=t[e]=xr(t[e]);Array.isArray(n[1])&&(n[1]=Du(n[1]))}return Mu(t)}function Xs(t,e,n,r){_l(t),Mn(t=t.v,0|t[Ye],e,(r==="0"?Number(n)===0:n===r)?void 0:n)}function yl(t,e,n){if(2&e)throw Error();const r=pl(e);let o=_g(t,n,r),a=o===Wo?7:0|o[Ye],u=yg(a,e);return(2&u||Uo(u)||16&u)&&(u===a||Uo(u)||An(o,u),o=xr(o),a=0,u=No(u,e),Mn(t,e,n,o,r)),u&=-13,u!==a&&An(o,u),o}function Ip(t,e){var n=Yx;return Sg(xg(t=t.v),t,void 0,n)===e?e:-1}function xg(t){if(hl)return t[cu]??(t[cu]=new Map);if(cu in t)return t[cu];const e=new Map;return Object.defineProperty(t,cu,{value:e}),e}function rx(t,e,n,r,o){const a=xg(t),u=Sg(a,t,e,n,o);return u!==r&&(u&&(e=Mn(t,e,u,void 0,o)),a.set(n,r)),e}function Sg(t,e,n,r,o){let a=t.get(r);if(a!=null)return a;a=0;for(let u=0;u<r.length;u++){const f=r[u];ds(e,f,o)!=null&&(a!==0&&(n=Mn(e,n,a,void 0,o)),a=f)}return t.set(r,a),a}function Mg(t,e,n){let r=0|t[Ye];const o=pl(r),a=ds(t,n,o);let u;if(a!=null&&a[Ja]===el){if(!Oi(a))return vl(a),a.v;u=a.v}else Array.isArray(a)&&(u=a);if(u){const f=0|u[Ye];2&f&&(u=gl(u,f))}return u=Io(u,e),u!==a&&Mn(t,r,n,u,o),u}function sx(t,e,n,r,o){let a=!1;if((r=ds(t,r,o,(u=>{const f=pg(u,n,!1,e);return a=f!==u&&f!=null,f})))!=null)return a&&!Oi(r)&&Xo(t,e),r}function Lt(t,e,n,r){let o=t.v,a=0|o[Ye];if((e=sx(o,a,e,n,r))==null)return e;if(a=0|o[Ye],!Oi(t,a)){const u=gg(e);u!==e&&(vl(t)&&(o=t.v,a=0|o[Ye]),a=Mn(o,a,n,e=u,r),Xo(o,a))}return e}function ox(t,e,n,r,o,a,u,f){var d=Oi(t,n);a=d?1:a,u=!!u||a===3,d=f&&!d,(a===2||d)&&vl(t)&&(n=0|(e=t.v)[Ye]);var m=(t=_g(e,o))===Wo?7:0|t[Ye],v=yg(m,n);if(f=!(4&v)){var p=t,_=n;const S=!!(2&v);S&&(_|=2);let M=!S,w=!0,x=0,y=0;for(;x<p.length;x++){const P=pg(p[x],r,!1,_);if(P instanceof r){if(!S){const L=Oi(P);M&&=!L,w&&=L}p[y++]=P}}y<x&&(p.length=y),v|=4,v=w?-4097&v:4096|v,v=M?8|v:-9&v}if(v!==m&&(An(t,v),2&v&&Object.freeze(t)),d&&!(8&v||!t.length&&(a===1||a===4&&(2&v||!(16&v)&&32&n)))){for(Uo(v)&&(t=xr(t),v=No(v,n),n=Mn(e,n,o,t)),r=t,d=v,m=0;m<r.length;m++)(p=r[m])!==(v=gg(p))&&(r[m]=v);d|=8,An(t,v=d=r.length?4096|d:-4097&d)}return tx(t,v,e,n,o,a,f,u)}function hs(t,e,n){const r=t.v;return ox(t,r,0|r[Ye],e,n,Lo(),!1,!0)}function ax(t){return t==null&&(t=void 0),t}function rt(t,e,n,r,o){return Bt(t,n,r=ax(r),o),r&&!Oi(r)&&Xo(t.v),t}function vu(t,e,n,r){e:{var o=r=ax(r);_l(t);const a=t.v;let u=0|a[Ye];if(o==null){const f=xg(a);if(Sg(f,a,u,n)!==e)break e;f.set(n,0)}else u=rx(a,u,n,e);Mn(a,u,e,o)}r&&!Oi(r)&&Xo(t.v)}function No(t,e){return-273&(2&e?2|t:-3&t)}function Eg(t,e,n,r){var o=r;_l(t),t=ox(t,r=t.v,0|r[Ye],n,e,2,!0),o=o??new n,t.push(o),e=n=t===Wo?7:0|t[Ye],(o=Oi(o))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&An(t,n),o||Xo(r)}function nr(t,e,n){return ml(nn(t,e,void 0,n))}function cn(t,e){return nn(t,e,void 0,void 0,Ur)??0}function ps(t,e,n){if(n!=null){if(typeof n!="number"||!Zf(n))throw bm("int32");n|=0}Bt(t,e,n)}function Qe(t,e,n){Bt(t,e,mu(n))}function ki(t,e,n){Xs(t,e,Nu(n),"")}function Bf(t,e,n){{_l(t);const u=t.v;let f=0|u[Ye];if(n==null)Mn(u,f,e);else{var r=t=n===Wo?7:0|n[Ye],o=Uo(t),a=o||Object.isFrozen(n);for(o||(t=0),a||(n=xr(n),r=0,t=No(t,f),a=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,o=0;o<n.length;o++){const d=n[o],m=Zy(d);Object.is(d,m)||(a&&(n=xr(n),r=0,t=No(t,f),a=!1),n[o]=m)}t!==r&&(a&&(n=xr(n),t=No(t,f)),An(n,t)),Mn(u,f,e,n)}}}function ed(t,e,n){_l(t),Do(t,e,On,2,!0).push(Zy(n))}var Da=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function wg(t,e){if(typeof t=="string")return new Da(Fy(t),e);if(Array.isArray(t))return new Da(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Da(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Da(t,!1);if(t.constructor===Nr)return e=lg(t)||new Uint8Array(0),new Da(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Da(t,!1);throw Error()}function Tg(t,e){let n,r=0,o=0,a=0;const u=t.h;let f=t.g;do n=u[f++],r|=(127&n)<<a,a+=7;while(a<32&&128&n);if(a>32)for(o|=(127&n)>>4,a=3;a<32&&128&n;a+=7)n=u[f++],o|=(127&n)<<a;if(Fo(t,f),!(128&n))return e(r>>>0,o>>>0);throw Error()}function Ag(t){let e=0,n=t.g;const r=n+10,o=t.h;for(;n<r;){const a=o[n++];if(e|=a,(128&a)==0)return Fo(t,n),!!(127&e)}throw Error()}function Qs(t){const e=t.h;let n=t.g,r=e[n++],o=127&r;if(128&r&&(r=e[n++],o|=(127&r)<<7,128&r&&(r=e[n++],o|=(127&r)<<14,128&r&&(r=e[n++],o|=(127&r)<<21,128&r&&(r=e[n++],o|=r<<28,128&r&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Fo(t,n),o}function Fr(t){return Qs(t)>>>0}function zf(t){var e=t.h;const n=t.g;var r=e[n],o=e[n+1];const a=e[n+2];return e=e[n+3],Fo(t,t.g+4),t=2*((o=(r<<0|o<<8|a<<16|e<<24)>>>0)>>31)+1,r=o>>>23&255,o&=8388607,r==255?o?NaN:t*(1/0):r==0?1401298464324817e-60*t*o:t*Math.pow(2,r-150)*(o+8388608)}function AR(t){return Qs(t)}function Fo(t,e){if(t.g=e,e>t.l)throw Error()}function lx(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function ux(t,e){if(e==0)return Bo();var n=lx(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):aR?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Bo():new Nr(n,Za)}var o2=[];function cx(t,e,n,r){if(Vf.length){const o=Vf.pop();return o.o(r),o.g.init(t,e,n,r),o}return new CR(t,e,n,r)}function fx(t){t.g.clear(),t.l=-1,t.h=-1,Vf.length<100&&Vf.push(t)}function dx(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=Fr(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Df(t){switch(t.h){case 0:t.h!=0?Df(t):Ag(t.g);break;case 1:Fo(t=t.g,t.g+8);break;case 2:if(t.h!=2)Df(t);else{var e=Fr(t.g);Fo(t=t.g,t.g+e)}break;case 5:Fo(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!dx(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Df(t)}break;default:throw Error()}}function Fu(t,e,n){const r=t.g.l;var o=Fr(t.g);let a=(o=t.g.g+o)-r;if(a<=0&&(t.g.l=o,n(e,t,void 0,void 0,void 0),a=o-t.g.g),a)throw Error();return t.g.g=o,t.g.l=r,e}function Cg(t){var e=Fr(t.g),n=lx(t=t.g,e);if(t=t.h,zC){var r,o=t;(r=Pp)||(r=Pp=new TextDecoder("utf-8",{fatal:!0})),e=n+e,o=n===0&&e===o.length?o:o.subarray(n,e);try{var a=r.decode(o)}catch(f){if(yf===void 0){try{r.decode(new Uint8Array([128]))}catch{}try{r.decode(new Uint8Array([97])),yf=!0}catch{yf=!1}}throw!yf&&(Pp=void 0),f}}else{e=(a=n)+e,n=[];let f,d=null;for(;a<e;){var u=t[a++];u<128?n.push(u):u<224?a>=e?Eo():(f=t[a++],u<194||(192&f)!=128?(a--,Eo()):n.push((31&u)<<6|63&f)):u<240?a>=e-1?Eo():(f=t[a++],(192&f)!=128||u===224&&f<160||u===237&&f>=160||(192&(r=t[a++]))!=128?(a--,Eo()):n.push((15&u)<<12|(63&f)<<6|63&r)):u<=244?a>=e-2?Eo():(f=t[a++],(192&f)!=128||f-144+(u<<28)>>30!=0||(192&(r=t[a++]))!=128||(192&(o=t[a++]))!=128?(a--,Eo()):(u=(7&u)<<18|(63&f)<<12|(63&r)<<6|63&o,u-=65536,n.push(55296+(u>>10&1023),56320+(1023&u)))):Eo(),n.length>=8192&&(d=G1(d,n),n.length=0)}a=G1(d,n)}return a}function hx(t){const e=Fr(t.g);return ux(t.g,e)}function td(t,e,n){var r=Fr(t.g);for(r=t.g.g+r;t.g.g<r;)n.push(e(t.g))}var CR=class{constructor(t,e,n,r){if(o2.length){const o=o2.pop();o.init(t,e,n,r),t=o}else t=new class{constructor(o,a,u,f){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(o,a,u,f)}init(o,a,u,{Y:f=!1,ea:d=!1}={}){this.Y=f,this.ea=d,o&&(o=wg(o,this.ea),this.h=o.buffer,this.j=o.g,this.m=a||0,this.l=u!==void 0?this.m+u:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,r);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(r)}o({ha:t=!1}={}){this.ha=t}},Vf=[];function a2(t){return t?/^\d+$/.test(t)?(Kf(t),new Im(tn,pn)):null:RR||=new Im(0,0)}var Im=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let RR;function l2(t){return t?/^-?\d+$/.test(t)?(Kf(t),new Um(tn,pn)):null:bR||=new Um(0,0)}var Um=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let bR;function Va(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function xl(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function nd(t,e){if(e>=0)xl(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Rg(t){var e=tn;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function il(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function sr(t,e,n){xl(t.g,8*e+n)}function bg(t,e){return sr(t,e,2),e=t.g.end(),il(t,e),e.push(t.h),e}function Pg(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function id(t,e,n){sr(t,e,2),xl(t.g,n.length),il(t,t.g.end()),il(t,n)}function Hf(t,e,n,r){n!=null&&(e=bg(t,e),r(n,t),Pg(t,e))}function kr(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Lg=kr(),px=kr(),Dg=kr(),Ig=kr(),Ug=kr(),mx=kr(),PR=kr(),rd=kr(),gx=kr(),vx=kr();function Br(t,e,n){var r=t.v;Ui&&Ui in r&&(r=r[Ui])&&delete r[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var $e=class{constructor(t,e){this.v=Jy(t,e,void 0,2048)}toJSON(){return Qy(this)}j(){var t=fb,e=this.v,n=t.g,r=Ui;if(hl&&r&&e[r]?.[n]!=null&&Qa(ZC,3),e=t.g,$1&&Ui&&$1===void 0&&(r=(n=this.v)[Ui])&&(r=r.da))try{r(n,e,xR)}catch(o){Dy(o)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Ye];return vg(this,t,e)?mg(this,t,!0):new this.constructor(gl(t,e,!1))}};$e.prototype[Ja]=el,$e.prototype.toString=function(){return this.v.toString()};var Sl=class{constructor(t,e,n){this.g=t,this.h=e,t=Lg,this.l=!!t&&n===t||!1}};function sd(t,e){return new Sl(t,e,Lg)}function _x(t,e,n,r,o){Hf(t,n,Mx(e,r),o)}const LR=sd((function(t,e,n,r,o){return t.h===2&&(Fu(t,Mg(e,r,n),o),!0)}),_x),DR=sd((function(t,e,n,r,o){return t.h===2&&(Fu(t,Mg(e,r,n),o),!0)}),_x);var od=Symbol(),ad=Symbol(),Nm=Symbol(),u2=Symbol(),c2=Symbol();let yx,xx;function jo(t,e,n,r){var o=r[t];if(o)return o;(o={}).qa=r,o.T=(function(p){switch(typeof p){case"boolean":return ER||=[0,void 0,!0];case"number":return p>0?void 0:p===0?wR||=[0,void 0]:[-p,void 0];case"string":return[0,p];case"object":return p}})(r[0]);var a=r[1];let u=1;a&&a.constructor===Object&&(o.ba=a,typeof(a=r[++u])=="function"&&(o.ma=!0,yx??=a,xx??=r[u+1],a=r[u+=2]));const f={};for(;a&&Array.isArray(a)&&a.length&&typeof a[0]=="number"&&a[0]>0;){for(var d=0;d<a.length;d++)f[a[d]]=a;a=r[++u]}for(d=1;a!==void 0;){let p;typeof a=="number"&&(d+=a,a=r[++u]);var m=void 0;if(a instanceof Sl?p=a:(p=LR,u--),p?.l){a=r[++u],m=r;var v=u;typeof a=="function"&&(a=a(),m[v]=a),m=a}for(v=d+1,typeof(a=r[++u])=="number"&&a<0&&(v-=a,a=r[++u]);d<v;d++){const _=f[d];m?n(o,d,p,m,_):e(o,d,p,_)}}return r[t]=o}function Sx(t){return Array.isArray(t)?t[0]instanceof Sl?t:[DR,t]:[t,void 0]}function Mx(t,e){return t instanceof $e?t.v:Array.isArray(t)?Io(t,e):void 0}function Ng(t,e,n,r){const o=n.g;t[e]=r?(a,u,f)=>o(a,u,f,r):o}function Fg(t,e,n,r,o){const a=n.g;let u,f;t[e]=(d,m,v)=>a(d,m,v,f||=jo(ad,Ng,Fg,r).T,u||=Og(r),o)}function Og(t){let e=t[Nm];if(e!=null)return e;const n=jo(ad,Ng,Fg,t);return e=n.ma?(r,o)=>yx(r,o,n):(r,o)=>{for(;dx(o)&&o.h!=4;){var a=o.l,u=n[a];if(u==null){var f=n.ba;f&&(f=f[a])&&(f=UR(f))!=null&&(u=n[a]=f)}if(u==null||!u(o,r,a)){if(u=(f=o).m,Df(f),f.ha)var d=void 0;else d=f.g.g-u,f.g.g=u,d=ux(f.g,d);u=void 0,f=r,d&&((u=f[Ui]??(f[Ui]=new Dm))[a]??(u[a]=[])).push(d)}}return(r=Qf(r))&&(r.da=n.qa[c2]),!0},t[Nm]=e,t[c2]=IR.bind(t),e}function IR(t,e,n,r){var o=this[ad];const a=this[Nm],u=Io(void 0,o.T),f=Qf(t);if(f){var d=!1,m=o.ba;if(m){if(o=(v,p,_)=>{if(_.length!==0)if(m[p])for(const S of _){v=cx(S);try{d=!0,a(u,v)}finally{fx(v)}}else r?.(t,p,_)},e==null)kf(f,o);else if(f!=null){const v=f[e];v&&o(f,e,v)}if(d){let v=0|t[Ye];if(2&v&&2048&v&&!n?.Ka)throw Error();const p=pl(v),_=(S,M)=>{if(ds(t,S,p)!=null){if(n?.Qa===1)return;throw Error()}M!=null&&(v=Mn(t,v,S,M,p)),delete f[S]};e==null?Vy(u,0|u[Ye],((S,M)=>{_(S,M)})):_(e,ds(u,e,p))}}}}function UR(t){const e=(t=Sx(t))[0].g;if(t=t[1]){const n=Og(t),r=jo(ad,Ng,Fg,t).T;return(o,a,u)=>e(o,a,u,r,n)}return e}function ld(t,e,n){t[e]=n.h}function ud(t,e,n,r){let o,a;const u=n.h;t[e]=(f,d,m)=>u(f,d,m,a||=jo(od,ld,ud,r).T,o||=Ex(r))}function Ex(t){let e=t[u2];if(!e){const n=jo(od,ld,ud,t);e=(r,o)=>wx(r,o,n),t[u2]=e}return e}function wx(t,e,n){Vy(t,0|t[Ye],((r,o)=>{if(o!=null){var a=(function(u,f){var d=u[f];if(d)return d;if((d=u.ba)&&(d=d[f])){var m=(d=Sx(d))[0].h;if(d=d[1]){const v=Ex(d),p=jo(od,ld,ud,d).T;d=u.ma?xx(p,v):(_,S,M)=>m(_,S,M,p,v)}else d=m;return u[f]=d}})(n,r);a?a(e,o,r):r<500||Qa(Pm,3)}})),(t=Qf(t))&&kf(t,((r,o,a)=>{for(il(e,e.g.end()),r=0;r<a.length;r++)il(e,lg(a[r])||new Uint8Array(0))}))}const NR=Ni(0);function Ml(t,e){if(Array.isArray(e)){var n=0|e[Ye];if(4&n)return e;for(var r=0,o=0;r<e.length;r++){const a=t(e[r]);a!=null&&(e[o++]=a)}return o<r&&(e.length=o),(t=-1537&(5|n))!==n&&An(e,t),2&t&&Object.freeze(e),e}}function Kn(t,e,n){return new Sl(t,e,n)}function El(t,e,n){return new Sl(t,e,n)}function Zn(t,e,n){Mn(t,0|t[Ye],e,n,pl(0|t[Ye]))}var FR=sd((function(t,e,n,r,o){if(t.h!==2)return!1;if(t=xr(t=Fu(t,Io([void 0,void 0],r),o)),o=pl(r=0|e[Ye]),2&r)throw Error();let a=ds(e,n,o);if(a instanceof fs)(2&a.J)!=0?(a=a.V(),a.push(t),Mn(e,r,n,a,o)):a.Ma(t);else if(Array.isArray(a)){var u=0|a[Ye];8192&u||An(a,u|=8192),2&u&&(a=ix(a),Mn(e,r,n,a,o)),a.push(t)}else Mn(e,r,n,Mu([t]),o);return!0}),(function(t,e,n,r,o){if(e instanceof fs)e.forEach(((a,u)=>{Hf(t,n,Io([u,a],r),o)}));else if(Array.isArray(e)){for(let a=0;a<e.length;a++){const u=e[a];Array.isArray(u)&&Hf(t,n,Io(u,r),o)}Mu(e)}}));function Tx(t,e,n){(e=Ur(e))!=null&&(sr(t,n,5),t=t.g,cg(e),Rg(t))}function Ax(t,e,n){if(e=(function(r){if(r==null)return r;const o=typeof r;if(o==="bigint")return String(Iu(64,r));if(Uu(r)){if(o==="string")return Yy(r);if(o==="number")return hg(r)}})(e),e!=null&&(typeof e=="string"&&l2(e),e!=null))switch(sr(t,n,0),typeof e){case"number":t=t.g,tl(e),Va(t,tn,pn);break;case"bigint":n=BigInt.asUintN(64,e),n=new Um(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Va(t.g,n.h,n.g);break;default:n=l2(e),Va(t.g,n.h,n.g)}}function Cx(t,e,n){(e=ml(e))!=null&&e!=null&&(sr(t,n,0),nd(t.g,e))}function Rx(t,e,n){(e=Xy(e))!=null&&(sr(t,n,0),t.g.g.push(e?1:0))}function bx(t,e,n){(e=On(e))!=null&&id(t,n,Ly(e))}function Px(t,e,n,r,o){Hf(t,n,Mx(e,r),o)}function Lx(t,e,n){(e=e==null||typeof e=="string"||e instanceof Nr?e:void 0)!=null&&id(t,n,wg(e,!0).buffer)}function Dx(t,e,n){(e=jy(e))!=null&&e!=null&&(sr(t,n,0),xl(t.g,e))}function Ix(t,e,n){return(t.h===5||t.h===2)&&(e=yl(e,0|e[Ye],n),t.h==2?td(t,zf,e):e.push(zf(t.g)),!0)}var mn=Kn((function(t,e,n){return t.h===5&&(Zn(e,n,zf(t.g)),!0)}),Tx,rd),OR=El(Ix,(function(t,e,n){if((e=Ml(Ur,e))!=null)for(let u=0;u<e.length;u++){var r=t,o=n,a=e[u];a!=null&&(sr(r,o,5),r=r.g,cg(a),Rg(r))}}),rd),kg=El(Ix,(function(t,e,n){if((e=Ml(Ur,e))!=null&&e.length){sr(t,n,2),xl(t.g,4*e.length);for(let r=0;r<e.length;r++)n=t.g,cg(e[r]),Rg(n)}}),rd),kR=Kn((function(t,e,n){return t.h===5&&(Zn(e,n,(t=zf(t.g))===0?void 0:t),!0)}),Tx,rd),Js=Kn((function(t,e,n){return t.h!==0?t=!1:(Zn(e,n,Tg(t.g,Wy)),t=!0),t}),Ax,mx),Up=Kn((function(t,e,n){return t.h!==0?e=!1:(Zn(e,n,(t=Tg(t.g,Wy))===NR?void 0:t),e=!0),e}),Ax,mx),BR=Kn((function(t,e,n){return t.h!==0?t=!1:(Zn(e,n,Tg(t.g,uR)),t=!0),t}),(function(t,e,n){if(e=(function(r){if(r==null)return r;var o=typeof r;if(o==="bigint")return String(cR(64,r));if(Uu(r)){if(o==="string")return o=nl(Number(r)),Vo(o)&&o>=0?r=String(o):((o=r.indexOf("."))!==-1&&(r=r.substring(0,o)),(o=r[0]!=="-"&&((o=r.length)<20||o===20&&r<="18446744073709551615"))||(Kf(r),r=Eu(tn,pn))),r;if(o==="number")return(r=nl(r))>=0&&Vo(r)||(tl(r),r=Gy(tn,pn)),r}})(e),e!=null&&(typeof e=="string"&&a2(e),e!=null))switch(sr(t,n,0),typeof e){case"number":t=t.g,tl(e),Va(t,tn,pn);break;case"bigint":n=BigInt.asUintN(64,e),n=new Im(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Va(t.g,n.h,n.g);break;default:n=a2(e),Va(t.g,n.h,n.g)}}),PR),Sn=Kn((function(t,e,n){return t.h===0&&(Zn(e,n,Qs(t.g)),!0)}),Cx,Ig),Ou=El((function(t,e,n){return(t.h===0||t.h===2)&&(e=yl(e,0|e[Ye],n),t.h==2?td(t,Qs,e):e.push(Qs(t.g)),!0)}),(function(t,e,n){if((e=Ml(ml,e))!=null&&e.length){n=bg(t,n);for(let r=0;r<e.length;r++)nd(t.g,e[r]);Pg(t,n)}}),Ig),Oa=Kn((function(t,e,n){return t.h===0&&(Zn(e,n,(t=Qs(t.g))===0?void 0:t),!0)}),Cx,Ig),rn=Kn((function(t,e,n){return t.h===0&&(Zn(e,n,Ag(t.g)),!0)}),Rx,px),Oo=Kn((function(t,e,n){return t.h===0&&(Zn(e,n,(t=Ag(t.g))===!1?void 0:t),!0)}),Rx,px),jn=El((function(t,e,n){return t.h===2&&(t=Cg(t),yl(e,0|e[Ye],n).push(t),!0)}),(function(t,e,n){if((e=Ml(On,e))!=null)for(let u=0;u<e.length;u++){var r=t,o=n,a=e[u];a!=null&&id(r,o,Ly(a))}}),Dg),qs=Kn((function(t,e,n){return t.h===2&&(Zn(e,n,(t=Cg(t))===""?void 0:t),!0)}),bx,Dg),Vt=Kn((function(t,e,n){return t.h===2&&(Zn(e,n,Cg(t)),!0)}),bx,Dg),Dn=(function(t,e,n=Lg){return new Sl(t,e,n)})((function(t,e,n,r,o){return t.h===2&&(r=Io(void 0,r),yl(e,0|e[Ye],n).push(r),Fu(t,r,o),!0)}),(function(t,e,n,r,o){if(Array.isArray(e)){for(let a=0;a<e.length;a++)Px(t,e[a],n,r,o);1&(t=0|e[Ye])||An(e,1|t)}})),Kt=sd((function(t,e,n,r,o,a){if(t.h!==2)return!1;let u=0|e[Ye];return rx(e,u,a,n,pl(u)),Fu(t,e=Mg(e,r,n),o),!0}),Px),Ux=Kn((function(t,e,n){return t.h===2&&(Zn(e,n,hx(t)),!0)}),Lx,gx),zR=El((function(t,e,n){return(t.h===0||t.h===2)&&(e=yl(e,0|e[Ye],n),t.h==2?td(t,Fr,e):e.push(Fr(t.g)),!0)}),(function(t,e,n){if((e=Ml(jy,e))!=null)for(let u=0;u<e.length;u++){var r=t,o=n,a=e[u];a!=null&&(sr(r,o,0),xl(r.g,a))}}),Ug),VR=Kn((function(t,e,n){return t.h===0&&(Zn(e,n,(t=Fr(t.g))===0?void 0:t),!0)}),Dx,Ug),qn=Kn((function(t,e,n){return t.h===0&&(Zn(e,n,Qs(t.g)),!0)}),(function(t,e,n){(e=ml(e))!=null&&(e=parseInt(e,10),sr(t,n,0),nd(t.g,e))}),vx);class HR{constructor(e,n){var r=zi;this.g=e,this.h=n,this.m=Lt,this.j=rt,this.defaultValue=void 0,this.l=r.Oa!=null?Hy:void 0}register(){qf(this)}}function zr(t,e){return new HR(t,e)}function to(t,e){return(n,r)=>{{const a={ea:!0};r&&Object.assign(a,r),n=cx(n,void 0,void 0,a);try{const u=new t,f=u.v;Og(e)(f,n);var o=u}finally{fx(n)}}return o}}function cd(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const u=this.g;return this.g=[],u}}}};wx(this.v,e,jo(od,ld,ud,t)),il(e,e.g.end());const n=new Uint8Array(e.h),r=e.l,o=r.length;let a=0;for(let u=0;u<o;u++){const f=r[u];n.set(f,a),a+=f.length}return e.l=[n],n}}var f2=class extends $e{constructor(t){super(t)}},d2=[0,qs,Kn((function(t,e,n){return t.h===2&&(Zn(e,n,(t=hx(t))===Bo()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof $e){const r=e.Ra;return void(r?(e=r(e),e!=null&&id(t,n,wg(e,!0).buffer)):Qa(Pm,3))}if(Array.isArray(e))return void Qa(Pm,3)}Lx(t,e,n)}),gx)];let Np,h2=globalThis.trustedTypes;function p2(t){var e;return Np===void 0&&(Np=(function(){let n=null;if(!h2)return n;try{const r=o=>o;n=h2.createPolicy("goog#html",{createHTML:r,createScript:r,createScriptURL:r})}catch{}return n})()),t=(e=Np)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function xf(t,...e){if(e.length===0)return p2(t[0]);let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return p2(n)}var Nx=[0,Sn,qn,rn,-1,Ou,qn,-1,rn],GR=class extends $e{constructor(t){super(t)}},Fx=[0,rn,Vt,rn,qn,-1,El((function(t,e,n){return(t.h===0||t.h===2)&&(e=yl(e,0|e[Ye],n),t.h==2?td(t,AR,e):e.push(Qs(t.g)),!0)}),(function(t,e,n){if((e=Ml(ml,e))!=null&&e.length){n=bg(t,n);for(let r=0;r<e.length;r++)nd(t.g,e[r]);Pg(t,n)}}),vx),Vt,-1,[0,rn,-1],qn,rn,-1],Ox=[0,3,rn,-1,2,[0,[2],Sn,Kt,[0,Kn((function(t,e,n){return t.h===0&&(Zn(e,n,Fr(t.g)),!0)}),Dx,Ug)]],[0,qn,rn,qn,rn,qn,rn,Vt,-1],[0,[3,4],Vt,-1,Kt,[0,Sn],Kt,[0,qn]],[0]],kx=[0,Vt,-2],m2=class extends $e{constructor(t){super(t)}},Bx=[0],zx=[0,Sn,rn,1,rn,-4],zi=class extends $e{constructor(t){super(t,2)}},En={};En[336783863]=[0,Vt,rn,-1,Sn,[0,[1,2,3,4,5,6,7,8,9],Kt,Bx,Kt,Fx,Kt,kx,Kt,zx,Kt,Nx,Kt,[0,Vt,-2],Kt,[0,Vt,qn],Kt,Ox,Kt,[0,qn,-1,rn]],[0,Vt],rn,[0,[1,3],[2,4],Kt,[0,Ou],-1,Kt,[0,jn],-1,Dn,[0,Vt,-1]],Vt];var g2=[0,Up,-1,Oo,-3,Up,Ou,qs,Oa,Up,-1,Oo,Oa,Oo,-2,qs];function Qt(t,e){ed(t,3,e)}function wt(t,e){ed(t,4,e)}var Mi=class extends $e{constructor(t){super(t,500)}o(t){return rt(this,0,7,t)}},_u=[-1,{}],v2=[0,Vt,1,_u],_2=[0,Vt,jn,_u];function or(t,e){Eg(t,1,Mi,e)}function sn(t,e){ed(t,10,e)}function It(t,e){ed(t,15,e)}var Vi=class extends $e{constructor(t){super(t,500)}o(t){return rt(this,0,1001,t)}},Vx=[-500,Dn,[-500,qs,-1,jn,-3,[-2,En,rn],Dn,d2,Oa,-1,v2,_2,Dn,[0,qs,Oo],qs,g2,Oa,jn,987,jn],4,Dn,[-500,Vt,-1,[-1,{}],998,Vt],Dn,[-500,Vt,jn,-1,[-2,{},rn],997,jn,-1],Oa,Dn,[-500,Vt,jn,_u,998,jn],jn,Oa,v2,_2,Dn,[0,qs,-1,_u],jn,-2,g2,qs,-1,Oo,[0,Oo,VR],978,_u,Dn,d2];Vi.prototype.g=cd(Vx);var WR=to(Vi,Vx),XR=class extends $e{constructor(t){super(t)}},Hx=class extends $e{constructor(t){super(t)}g(){return hs(this,XR,1)}},Gx=[0,Dn,[0,Sn,mn,Vt,-1]],fd=to(Hx,Gx),jR=class extends $e{constructor(t){super(t)}},qR=class extends $e{constructor(t){super(t)}},Fp=class extends $e{constructor(t){super(t)}l(){return Lt(this,jR,2)}g(){return hs(this,qR,5)}},Wx=to(class extends $e{constructor(t){super(t)}},[0,jn,Ou,kg,[0,qn,[0,Sn,-3],[0,mn,-3],[0,Sn,-1,[0,Dn,[0,Sn,-2]]],Dn,[0,mn,-1,Vt,mn]],Vt,-1,Js,Dn,[0,Sn,mn],jn,Js]),Xx=class extends $e{constructor(t){super(t)}},Ha=to(class extends $e{constructor(t){super(t)}},[0,Dn,[0,mn,-4]]),jx=class extends $e{constructor(t){super(t)}},ku=to(class extends $e{constructor(t){super(t)}},[0,Dn,[0,mn,-4]]),YR=class extends $e{constructor(t){super(t)}},$R=[0,Sn,-1,kg,qn],qx=class extends $e{constructor(t){super(t)}};qx.prototype.g=cd([0,mn,-4,Js]);var KR=class extends $e{constructor(t){super(t)}},ZR=to(class extends $e{constructor(t){super(t)}},[0,Dn,[0,1,Sn,Vt,Gx],Js]),y2=class extends $e{constructor(t){super(t)}},QR=class extends $e{constructor(t){super(t)}na(){const t=nn(this,1,void 0,void 0,nx);return t??Bo()}},JR=class extends $e{constructor(t){super(t)}},Yx=[1,2],eb=to(class extends $e{constructor(t){super(t)}},[0,Dn,[0,Yx,Kt,[0,kg],Kt,[0,Ux],Sn,Vt],Js]),Bg=class extends $e{constructor(t){super(t)}},$x=[0,Vt,Sn,mn,jn,-1],x2=class extends $e{constructor(t){super(t)}},tb=[0,rn,-1],S2=class extends $e{constructor(t){super(t)}},If=[1,2,3,4,5,6],Gf=class extends $e{constructor(t){super(t)}g(){return nn(this,1,void 0,void 0,nx)!=null}l(){return On(nn(this,2))!=null}},ln=class extends $e{constructor(t){super(t)}g(){return Xy(nn(this,2))??!1}},Kx=[0,Ux,Vt,[0,Sn,Js,-1],[0,BR,Js]],gn=[0,Kx,rn,[0,If,Kt,zx,Kt,Fx,Kt,Nx,Kt,Bx,Kt,kx,Kt,Ox],qn],dd=class extends $e{constructor(t){super(t)}},zg=[0,gn,mn,-1,Sn],nb=zr(502141897,dd);En[502141897]=zg;var ib=to(class extends $e{constructor(t){super(t)}},[0,[0,qn,-1,OR,zR],$R]),Zx=class extends $e{constructor(t){super(t)}},Qx=class extends $e{constructor(t){super(t)}},Fm=[0,gn,mn,[0,gn],rn],rb=zr(508968150,Qx);En[508968150]=[0,gn,zg,Fm,mn,[0,[0,Kx]]],En[508968149]=Fm;var Ia=class extends $e{constructor(t){super(t)}l(){return Lt(this,Bg,2)}g(){Bt(this,2)}},Jx=[0,gn,$x];En[478825465]=Jx;var sb=class extends $e{constructor(t){super(t)}},e3=class extends $e{constructor(t){super(t)}},Vg=class extends $e{constructor(t){super(t)}},Hg=class extends $e{constructor(t){super(t)}},t3=class extends $e{constructor(t){super(t)}},M2=[0,gn,[0,gn],Jx,-1],n3=[0,gn,mn,Sn],Gg=[0,gn,mn],i3=[0,gn,n3,Gg,mn],ob=zr(479097054,t3);En[479097054]=[0,gn,i3,M2],En[463370452]=M2,En[464864288]=n3;var ab=zr(462713202,Hg);En[462713202]=i3,En[474472470]=Gg;var lb=class extends $e{constructor(t){super(t)}},r3=class extends $e{constructor(t){super(t)}},s3=class extends $e{constructor(t){super(t)}},o3=class extends $e{constructor(t){super(t)}},Wg=[0,gn,mn,-1,Sn],Om=[0,gn,mn,rn];o3.prototype.g=cd([0,gn,Gg,[0,gn],zg,Fm,Wg,Om]);var a3=class extends $e{constructor(t){super(t)}},ub=zr(456383383,a3);En[456383383]=[0,gn,$x];var l3=class extends $e{constructor(t){super(t)}},cb=zr(476348187,l3);En[476348187]=[0,gn,tb];var u3=class extends $e{constructor(t){super(t)}},E2=class extends $e{constructor(t){super(t)}},c3=[0,qn,-1],fb=zr(458105876,class extends $e{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Ye];return t=Oi(this,n),e=(function(r,o,a,u){var f=E2;!u&&vl(r)&&(a=0|(o=r.v)[Ye]);var d=ds(o,2);if(r=!1,d==null){if(u)return i2();d=[]}else if(d.constructor===fs){if(!(2&d.J)||u)return d;d=d.V()}else Array.isArray(d)?r=!!(2&(0|d[Ye])):d=[];if(u){if(!d.length)return i2();r||(r=!0,Du(d))}else r&&(r=!1,Mu(d),d=ix(d));return!r&&32&a&&Lu(d,32),a=Mn(o,a,2,u=new fs(d,f,hR,void 0)),r||Xo(o,a),u})(this,e,n,t),!t&&E2&&(e.ra=!0),e}});En[458105876]=[0,c3,FR,[!0,Js,[0,Vt,-1,jn]],[0,Ou,rn,qn]];var Xg=class extends $e{constructor(t){super(t)}},f3=zr(458105758,Xg);En[458105758]=[0,gn,Vt,c3];var Op=class extends $e{constructor(t){super(t)}},w2=[0,kR,-1,Oo],db=class extends $e{constructor(t){super(t)}},d3=class extends $e{constructor(t){super(t)}},km=[1,2];d3.prototype.g=cd([0,km,Kt,w2,Kt,[0,Dn,w2]]);var h3=class extends $e{constructor(t){super(t)}},hb=zr(443442058,h3);En[443442058]=[0,gn,Vt,Sn,mn,jn,-1,rn,mn],En[514774813]=Wg;var p3=class extends $e{constructor(t){super(t)}},pb=zr(516587230,p3);function Bm(t,e){return e=e?e.clone():new Bg,t.displayNamesLocale!==void 0?Bt(e,1,Nu(t.displayNamesLocale)):t.displayNamesLocale===void 0&&Bt(e,1),t.maxResults!==void 0?ps(e,2,t.maxResults):"maxResults"in t&&Bt(e,2),t.scoreThreshold!==void 0?Qe(e,3,t.scoreThreshold):"scoreThreshold"in t&&Bt(e,3),t.categoryAllowlist!==void 0?Bf(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&Bt(e,4),t.categoryDenylist!==void 0?Bf(e,5,t.categoryDenylist):"categoryDenylist"in t&&Bt(e,5),e}function m3(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function jg(t,e=-1,n=""){return{categories:t.map((r=>({index:nr(r,1)??0??-1,score:cn(r,2)??0,categoryName:On(nn(r,3))??""??"",displayName:On(nn(r,4))??""??""}))),headIndex:e,headName:n}}function mb(t){const e={classifications:hs(t,KR,1).map((n=>jg(Lt(n,Hx,4)?.g()??[],nr(n,2)??0,On(nn(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(Lm(n)?n=Number(n):(n=Iu(64,n),n=Lm(n)?Number(n):String(n)),n):Uu(n)?typeof n=="number"?hg(n):Yy(n):void 0})(nn(t,2,void 0,void 0,Of))!=null&&(e.timestampMs=m3(nn(t,2,void 0,void 0,Of)??ex)),e}function g3(t){var e=Do(t,3,Ur,Lo()),n=Do(t,2,ml,Lo()),r=Do(t,1,On,Lo()),o=Do(t,9,On,Lo());const a={categories:[],keypoints:[]};for(let u=0;u<e.length;u++)a.categories.push({score:e[u],index:n[u]??-1,categoryName:r[u]??"",displayName:o[u]??""});if((e=Lt(t,Fp,4)?.l())&&(a.boundingBox={originX:nr(e,1,Hs)??0,originY:nr(e,2,Hs)??0,width:nr(e,3,Hs)??0,height:nr(e,4,Hs)??0,angle:0}),Lt(t,Fp,4)?.g().length)for(const u of Lt(t,Fp,4).g())a.keypoints.push({x:nn(u,1,void 0,Hs,Ur)??0,y:nn(u,2,void 0,Hs,Ur)??0,score:nn(u,4,void 0,Hs,Ur)??0,label:On(nn(u,3,void 0,Hs))??""});return a}function hd(t){const e=[];for(const n of hs(t,jx,1))e.push({x:cn(n,1)??0,y:cn(n,2)??0,z:cn(n,3)??0,visibility:cn(n,4)??0});return e}function yu(t){const e=[];for(const n of hs(t,Xx,1))e.push({x:cn(n,1)??0,y:cn(n,2)??0,z:cn(n,3)??0,visibility:cn(n,4)??0});return e}function T2(t){return Array.from(t,(e=>e>127?e-256:e))}function A2(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,r=0,o=0;for(let a=0;a<t.length;a++)n+=t[a]*e[a],r+=t[a]*t[a],o+=e[a]*e[a];if(r<=0||o<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(r*o)}let Sf;En[516587230]=[0,gn,Wg,Om,mn],En[518928384]=Om;const gb=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function v3(t){if(t)return!0;if(Sf===void 0)try{await WebAssembly.instantiate(gb),Sf=!0}catch{Sf=!1}return Sf}async function Mf(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await v3(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Na=class{};function _3(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function C2(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,r)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(o=>{r(o)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function y3(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ke(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function R2(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[r,o]=y3(e);return!t.l||r===t.i.canvas.width&&o===t.i.canvas.height||(t.i.canvas.width=r,t.i.canvas.height=o),[r,o]}function b2(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const r=new Uint32Array(e.length);for(let o=0;o<e.length;o++)r[o]=t.i.stringToNewUTF8(e[o]);e=t.i._malloc(4*r.length),t.i.HEAPU32.set(r,e>>2),n(e);for(const o of r)t.i._free(o);t.i._free(e)}function Pr(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Gs(t,e,n){let r=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(o,a,u)=>{a?(n(r,u),r=[]):r.push(o)}}Na.forVisionTasks=function(t,e=!1){return Mf("vision",t??xf``,e)},Na.forTextTasks=function(t,e=!1){return Mf("text",t??xf``,e)},Na.forGenAiTasks=function(t,e=!1){return Mf("genai",t??xf``,e)},Na.forAudioTasks=function(t,e=!1){return Mf("audio",t??xf``,e)},Na.isSimdSupported=function(t=!1){return v3(t)};async function vb(t,e,n,r){return t=await(async(o,a,u,f,d)=>{if(a&&await C2(a),!self.ModuleFactory||u&&(await C2(u),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&d&&((a=self.Module).locateFile=d.locateFile,d.mainScriptUrlOrBlob&&(a.mainScriptUrlOrBlob=d.mainScriptUrlOrBlob)),d=await self.ModuleFactory(self.Module||d),self.ModuleFactory=self.Module=void 0,new o(d,f)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:o=>o.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&o.endsWith(".data")?n.assetBinaryPath.toString():o}),await t.o(r),t}function kp(t,e){const n=Lt(t.baseOptions,Gf,1)||new Gf;typeof e=="string"?(Bt(n,2,Nu(e)),Bt(n,1)):e instanceof Uint8Array&&(Bt(n,1,ug(e,!1)),Bt(n,2)),rt(t.baseOptions,0,1,n)}function P2(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function ze(t,e){t.C=Math.max(t.C,e)}function pd(t,e){t.B=new Mi,ki(t.B,2,"PassThroughCalculator"),Qt(t.B,"free_memory"),wt(t.B,"free_memory_unused_out"),sn(e,"free_memory"),or(e,t.B)}function rl(t,e){Qt(t.B,e),wt(t.B,e+"_unused_out")}function md(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var zm=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Lt(this.baseOptions,Gf,1)?.g()||Lt(this.baseOptions,Gf,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(r,o){let a=Lt(r.baseOptions,S2,3);if(!a){var u=a=new S2,f=new m2;vu(u,4,If,f)}"delegate"in o&&(o.delegate==="GPU"?(o=a,u=new GR,vu(o,2,If,u)):(o=a,u=new m2,vu(o,4,If,u))),rt(r.baseOptions,0,3,a)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((r=>{if(r.ok)return r.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${r.status})`)})).then((r=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(r),!0,!1,!1),kp(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)kp(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(r){const o=[];for(var a=0;;){const{done:u,value:f}=await r.read();if(u)break;o.push(f),a+=f.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];r=new Uint8Array(a),a=0;for(const u of o)r.set(u,a),a+=u.length;return r})(n.modelAssetBuffer).then((r=>{kp(this,r),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=WR(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,r)=>{this.H.push(Error(r))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,P2(this)}finishProcessing(){this.g.finishProcessing(),P2(this)}close(){this.B=void 0,this.g.closeGraph()}};function Ks(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}zm.prototype.close=zm.prototype.close;class _b{constructor(e,n,r,o){this.g=e,this.h=n,this.m=r,this.l=o}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function L2(t,e,n){const r=t.g;if(n=Ks(r.createShader(n),"Failed to create WebGL shader"),r.shaderSource(n,e),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(t.h,n),n}function D2(t,e){const n=t.g,r=Ks(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(r);const o=Ks(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const a=Ks(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,a),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new _b(n,r,o,a)}function qg(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function yb(t,e,n,r){return qg(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=D2(t,!0)),n=t.u):(t.A||(t.A=D2(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=r(),n.g.bindVertexArray(null),t}function x3(t,e,n){return qg(t,e),t=Ks(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function S3(t,e,n){qg(t,e),t.B||(t.B=Ks(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function xb(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var M3=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Ks(t.createProgram(),"Failed to create WebGL program"),this.X=L2(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=L2(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function os(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Vm(t){var e=os(t,1);if(!e){if(e=os(t,0))e=new Float32Array(e).map((r=>r/255));else{e=new Float32Array(t.width*t.height);const r=sl(t);var n=Yg(t);if(S3(n,r,E3(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),r.readPixels(0,0,t.width,t.height,r.RGBA,r.FLOAT,n);for(let o=0,a=0;o<e.length;++o,a+=4)e[o]=n[a]}else r.readPixels(0,0,t.width,t.height,r.RED,r.FLOAT,e)}t.g.push(e)}return e}function E3(t){let e=os(t,2);if(!e){const n=sl(t);e=T3(t);const r=Vm(t),o=w3(t);n.texImage2D(n.TEXTURE_2D,0,o,t.width,t.height,0,n.RED,n.FLOAT,r),Hm(t)}return e}function sl(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Ks(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function w3(t){if(t=sl(t),!Ef)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Ef=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ef=t.R16F}return Ef}function Yg(t){return t.l||(t.l=new M3),t.l}function T3(t){const e=sl(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=os(t,2);return n||(n=x3(Yg(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Hm(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Ef,Ln=class{constructor(t,e,n,r,o,a,u){this.g=t,this.m=e,this.j=n,this.canvas=r,this.l=o,this.width=a,this.height=u,this.j&&--I2===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!os(this,0)}ka(){return!!os(this,1)}R(){return!!os(this,2)}ja(){return(e=os(t=this,0))||(e=Vm(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Vm(this)}N(){return E3(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const r=sl(this),o=Yg(this);r.activeTexture(r.TEXTURE1),n=x3(o,r,this.m?r.LINEAR:r.NEAREST),r.bindTexture(r.TEXTURE_2D,n);const a=w3(this);r.texImage2D(r.TEXTURE_2D,0,a,this.width,this.height,0,r.RED,r.FLOAT,null),r.bindTexture(r.TEXTURE_2D,null),S3(o,r,n),yb(o,r,!1,(()=>{T3(this),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),Hm(this)})),xb(o),Hm(this)}}t.push(n)}return new Ln(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&sl(this).deleteTexture(os(this,2)),I2=-1}};Ln.prototype.close=Ln.prototype.close,Ln.prototype.clone=Ln.prototype.clone,Ln.prototype.getAsWebGLTexture=Ln.prototype.N,Ln.prototype.getAsFloat32Array=Ln.prototype.ia,Ln.prototype.getAsUint8Array=Ln.prototype.ja,Ln.prototype.hasWebGLTexture=Ln.prototype.R,Ln.prototype.hasFloat32Array=Ln.prototype.ka,Ln.prototype.hasUint8Array=Ln.prototype.Fa;var I2=250;function Sr(...t){return t.map((([e,n])=>({start:e,end:n})))}const Sb=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((U2=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:_3()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,r=this.i._malloc(n);this.i.HEAPU8.set(t,r),e?this.i._changeBinaryGraph(n,r):this.i._changeTextGraph(n,r),this.i._free(r)}configureAudio(t,e,n,r,o){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ke(this,r||"input_audio",(a=>{Ke(this,o=o||"audio_header",(u=>{this.i._configureAudio(a,u,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Pr(this,"__graph_config__",(e=>{t(e)})),Ke(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,r,o){const a=4*t.length;this.h!==a&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(a),this.h=a),this.i.HEAPF32.set(t,this.g/4),Ke(this,r,(u=>{this.i._addAudioToInputStream(this.g,e,n,u,o)}))}addGpuBufferToStream(t,e,n){Ke(this,e,(r=>{const[o,a]=R2(this,t,r);this.i._addBoundTextureToStream(r,o,a,n)}))}addBoolToStream(t,e,n){Ke(this,e,(r=>{this.i._addBoolToInputStream(t,r,n)}))}addDoubleToStream(t,e,n){Ke(this,e,(r=>{this.i._addDoubleToInputStream(t,r,n)}))}addFloatToStream(t,e,n){Ke(this,e,(r=>{this.i._addFloatToInputStream(t,r,n)}))}addIntToStream(t,e,n){Ke(this,e,(r=>{this.i._addIntToInputStream(t,r,n)}))}addUintToStream(t,e,n){Ke(this,e,(r=>{this.i._addUintToInputStream(t,r,n)}))}addStringToStream(t,e,n){Ke(this,e,(r=>{Ke(this,t,(o=>{this.i._addStringToInputStream(o,r,n)}))}))}addStringRecordToStream(t,e,n){Ke(this,e,(r=>{b2(this,Object.keys(t),(o=>{b2(this,Object.values(t),(a=>{this.i._addFlatHashMapToInputStream(o,a,Object.keys(t).length,r,n)}))}))}))}addProtoToStream(t,e,n,r){Ke(this,n,(o=>{Ke(this,e,(a=>{const u=this.i._malloc(t.length);this.i.HEAPU8.set(t,u),this.i._addProtoToInputStream(u,t.length,a,o,r),this.i._free(u)}))}))}addEmptyPacketToStream(t,e){Ke(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateBoolVector(t.length);if(!o)throw Error("Unable to allocate new bool vector on heap.");for(const a of t)this.i._addBoolVectorEntry(o,a);this.i._addBoolVectorToInputStream(o,r,n)}))}addDoubleVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateDoubleVector(t.length);if(!o)throw Error("Unable to allocate new double vector on heap.");for(const a of t)this.i._addDoubleVectorEntry(o,a);this.i._addDoubleVectorToInputStream(o,r,n)}))}addFloatVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateFloatVector(t.length);if(!o)throw Error("Unable to allocate new float vector on heap.");for(const a of t)this.i._addFloatVectorEntry(o,a);this.i._addFloatVectorToInputStream(o,r,n)}))}addIntVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateIntVector(t.length);if(!o)throw Error("Unable to allocate new int vector on heap.");for(const a of t)this.i._addIntVectorEntry(o,a);this.i._addIntVectorToInputStream(o,r,n)}))}addUintVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateUintVector(t.length);if(!o)throw Error("Unable to allocate new unsigned int vector on heap.");for(const a of t)this.i._addUintVectorEntry(o,a);this.i._addUintVectorToInputStream(o,r,n)}))}addStringVectorToStream(t,e,n){Ke(this,e,(r=>{const o=this.i._allocateStringVector(t.length);if(!o)throw Error("Unable to allocate new string vector on heap.");for(const a of t)Ke(this,a,(u=>{this.i._addStringVectorEntry(o,u)}));this.i._addStringVectorToInputStream(o,r,n)}))}addBoolToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Ke(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Ke(this,e,(n=>{Ke(this,t,(r=>{this.i._addStringToInputSidePacket(r,n)}))}))}addProtoToInputSidePacket(t,e,n){Ke(this,n,(r=>{Ke(this,e,(o=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputSidePacket(a,t.length,o,r),this.i._free(a)}))}))}addBoolVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const o of t)this.i._addBoolVectorEntry(r,o);this.i._addBoolVectorToInputSidePacket(r,n)}))}addDoubleVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const o of t)this.i._addDoubleVectorEntry(r,o);this.i._addDoubleVectorToInputSidePacket(r,n)}))}addFloatVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const o of t)this.i._addFloatVectorEntry(r,o);this.i._addFloatVectorToInputSidePacket(r,n)}))}addIntVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const o of t)this.i._addIntVectorEntry(r,o);this.i._addIntVectorToInputSidePacket(r,n)}))}addUintVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const o of t)this.i._addUintVectorEntry(r,o);this.i._addUintVectorToInputSidePacket(r,n)}))}addStringVectorToInputSidePacket(t,e){Ke(this,e,(n=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const o of t)Ke(this,o,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputSidePacket(r,n)}))}attachBoolListener(t,e){Pr(this,t,e),Ke(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Gs(this,t,e),Ke(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Pr(this,t,e),Ke(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Gs(this,t,e),Ke(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Pr(this,t,e),Ke(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Gs(this,t,e),Ke(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Pr(this,t,e),Ke(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Gs(this,t,e),Ke(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Pr(this,t,e),Ke(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Gs(this,t,e),Ke(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Pr(this,t,e),Ke(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Gs(this,t,e),Ke(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Pr(this,t,e),Ke(this,t,(r=>{this.i._attachProtoListener(r,n||!1)}))}attachProtoVectorListener(t,e,n){Gs(this,t,e),Ke(this,t,(r=>{this.i._attachProtoVectorListener(r,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Pr(this,t,((r,o)=>{r=new Float32Array(r.buffer,r.byteOffset,r.length/4),e(r,o)})),Ke(this,t,(r=>{this.i._attachAudioListener(r,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends U2{get ga(){return this.i}pa(t,e,n){Ke(this,e,(r=>{const[o,a]=R2(this,t,r);this.ga._addBoundTextureAsImageToStream(r,o,a,n)}))}Z(t,e){Pr(this,t,e),Ke(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){Gs(this,t,e),Ke(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var U2,Mr=class extends Sb{};async function Rt(t,e,n){return(async function(r,o,a,u){return vb(r,o,a,u)})(t,n.canvas??(_3()?void 0:document.createElement("canvas")),e,n)}function A3(t,e,n,r){if(t.U){const a=new qx;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var o=n.regionOfInterest;if(o.left>=o.right||o.top>=o.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(o.left<0||o.top<0||o.right>1||o.bottom>1)throw Error("Expected RectF values to be in [0,1].");Qe(a,1,(o.left+o.right)/2),Qe(a,2,(o.top+o.bottom)/2),Qe(a,4,o.right-o.left),Qe(a,3,o.bottom-o.top)}else Qe(a,1,.5),Qe(a,2,.5),Qe(a,4,1),Qe(a,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Qe(a,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[u,f]=y3(e);n=cn(a,3)*f/u,o=cn(a,4)*u/f,Qe(a,4,n),Qe(a,3,o)}}t.g.addProtoToStream(a.g(),"mediapipe.NormalizedRect",t.U,r)}t.g.pa(e,t.X,r??performance.now()),t.finishProcessing()}function Er(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");A3(t,e,n,t.C+1)}function Vr(t,e,n,r){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");A3(t,e,n,r)}function ol(t,e,n,r){var o=e.data;const a=e.width,u=a*(e=e.height);if((o instanceof Uint8Array||o instanceof Float32Array)&&o.length!==u)throw Error("Unsupported channel count: "+o.length/u);return t=new Ln([o],n,!1,t.g.i.canvas,t.P,a,e),r?t.clone():t}var Bi=class extends zm{constructor(t,e,n,r){super(t),this.g=t,this.X=e,this.U=n,this.oa=r,this.P=new M3}l(t,e=!0){if("runningMode"in t&&Bt(this.baseOptions,2,wu(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Bi.prototype.close=Bi.prototype.close;var Zi=class extends Bi{constructor(t,e){super(new Mr(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},rt(t=this.h=new dd,0,1,e=new ln),Qe(this.h,2,.5),Qe(this.h,3,.3)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Qe(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Qe(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Er(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Vr(this,t,n,e),this.j}m(){var t=new Vi;sn(t,"image_in"),sn(t,"norm_rect_in"),It(t,"detections");const e=new zi;Br(e,nb,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect_in"),wt(n,"DETECTIONS:detections"),n.o(e),or(t,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const a of r)r=Wx(a),this.j.detections.push(g3(r));ze(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Zi.prototype.detectForVideo=Zi.prototype.G,Zi.prototype.detect=Zi.prototype.F,Zi.prototype.setOptions=Zi.prototype.o,Zi.createFromModelPath=async function(t,e){return Rt(Zi,t,{baseOptions:{modelAssetPath:e}})},Zi.createFromModelBuffer=function(t,e){return Rt(Zi,t,{baseOptions:{modelAssetBuffer:e}})},Zi.createFromOptions=function(t,e){return Rt(Zi,t,e)};var $g=Sr([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Kg=Sr([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Zg=Sr([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),C3=Sr([474,475],[475,476],[476,477],[477,474]),Qg=Sr([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Jg=Sr([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),R3=Sr([469,470],[470,471],[471,472],[472,469]),e0=Sr([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),b3=[...$g,...Kg,...Zg,...Qg,...Jg,...e0],P3=Sr([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function N2(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var an=class extends Bi{constructor(t,e){super(new Mr(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,rt(t=this.h=new Qx,0,1,e=new ln),this.A=new Zx,rt(this.h,0,3,this.A),this.u=new dd,rt(this.h,0,2,this.u),ps(this.u,4,1),Qe(this.u,2,.5),Qe(this.A,2,.5),Qe(this.h,4,.5)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"numFaces"in t&&ps(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Qe(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Qe(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Qe(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return N2(this),Er(this,t,e),this.j}G(t,e,n){return N2(this),Vr(this,t,n,e),this.j}m(){var t=new Vi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"face_landmarks");const e=new zi;Br(e,rb,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),or(t,n),this.g.attachProtoVectorListener("face_landmarks",((r,o)=>{for(const a of r)r=ku(a),this.j.faceLandmarks.push(hd(r));ze(this,o)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{ze(this,r)})),this.outputFaceBlendshapes&&(It(t,"blendshapes"),wt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((r,o)=>{if(this.outputFaceBlendshapes)for(const a of r)r=fd(a),this.j.faceBlendshapes.push(jg(r.g()??[]));ze(this,o)})),this.g.attachEmptyPacketListener("blendshapes",(r=>{ze(this,r)}))),this.outputFacialTransformationMatrixes&&(It(t,"face_geometry"),wt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((r,o)=>{if(this.outputFacialTransformationMatrixes)for(const a of r)(r=Lt(r=ib(a),YR,2))&&this.j.facialTransformationMatrixes.push({rows:nr(r,1)??0??0,columns:nr(r,2)??0??0,data:Do(r,3,Ur,Lo()).slice()??[]});ze(this,o)})),this.g.attachEmptyPacketListener("face_geometry",(r=>{ze(this,r)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};an.prototype.detectForVideo=an.prototype.G,an.prototype.detect=an.prototype.F,an.prototype.setOptions=an.prototype.o,an.createFromModelPath=function(t,e){return Rt(an,t,{baseOptions:{modelAssetPath:e}})},an.createFromModelBuffer=function(t,e){return Rt(an,t,{baseOptions:{modelAssetBuffer:e}})},an.createFromOptions=function(t,e){return Rt(an,t,e)},an.FACE_LANDMARKS_LIPS=$g,an.FACE_LANDMARKS_LEFT_EYE=Kg,an.FACE_LANDMARKS_LEFT_EYEBROW=Zg,an.FACE_LANDMARKS_LEFT_IRIS=C3,an.FACE_LANDMARKS_RIGHT_EYE=Qg,an.FACE_LANDMARKS_RIGHT_EYEBROW=Jg,an.FACE_LANDMARKS_RIGHT_IRIS=R3,an.FACE_LANDMARKS_FACE_OVAL=e0,an.FACE_LANDMARKS_CONTOURS=b3,an.FACE_LANDMARKS_TESSELATION=P3;var t0=Sr([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function F2(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function O2(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function k2(t,e=!0){const n=[];for(const o of t){var r=fd(o);t=[];for(const a of r.g())r=e&&nr(a,1)!=null?nr(a,1)??0:-1,t.push({score:cn(a,2)??0,index:r,categoryName:On(nn(a,3))??""??"",displayName:On(nn(a,4))??""??""});n.push(t)}return n}var bi=class extends Bi{constructor(t,e){super(new Mr(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],rt(t=this.j=new t3,0,1,e=new ln),this.u=new Hg,rt(this.j,0,2,this.u),this.D=new Vg,rt(this.u,0,3,this.D),this.A=new e3,rt(this.u,0,2,this.A),this.h=new sb,rt(this.j,0,3,this.h),Qe(this.A,2,.5),Qe(this.u,4,.5),Qe(this.D,2,.5)}get baseOptions(){return Lt(this.j,ln,1)}set baseOptions(t){rt(this.j,0,1,t)}o(t){if(ps(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Qe(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Qe(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Qe(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Ia,n=e,r=Bm(t.cannedGesturesClassifierOptions,Lt(this.h,Ia,3)?.l());rt(n,0,2,r),rt(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&Lt(this.h,Ia,3)?.g();return t.customGesturesClassifierOptions?(rt(n=e=new Ia,0,2,r=Bm(t.customGesturesClassifierOptions,Lt(this.h,Ia,4)?.l())),rt(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&Lt(this.h,Ia,4)?.g(),this.l(t)}Ha(t,e){return F2(this),Er(this,t,e),O2(this)}Ia(t,e,n){return F2(this),Vr(this,t,n,e),O2(this)}m(){var t=new Vi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"hand_gestures"),It(t,"hand_landmarks"),It(t,"world_hand_landmarks"),It(t,"handedness");const e=new zi;Br(e,ob,this.j);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"HAND_GESTURES:hand_gestures"),wt(n,"LANDMARKS:hand_landmarks"),wt(n,"WORLD_LANDMARKS:world_hand_landmarks"),wt(n,"HANDEDNESS:handedness"),n.o(e),or(t,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const a of r){r=ku(a);const u=[];for(const f of hs(r,jx,1))u.push({x:cn(f,1)??0,y:cn(f,2)??0,z:cn(f,3)??0,visibility:cn(f,4)??0});this.landmarks.push(u)}ze(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const a of r){r=Ha(a);const u=[];for(const f of hs(r,Xx,1))u.push({x:cn(f,1)??0,y:cn(f,2)??0,z:cn(f,3)??0,visibility:cn(f,4)??0});this.worldLandmarks.push(u)}ze(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("hand_gestures",((r,o)=>{this.gestures.push(...k2(r,!1)),ze(this,o)})),this.g.attachEmptyPacketListener("hand_gestures",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{this.handedness.push(...k2(r)),ze(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function B2(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}bi.prototype.recognizeForVideo=bi.prototype.Ia,bi.prototype.recognize=bi.prototype.Ha,bi.prototype.setOptions=bi.prototype.o,bi.createFromModelPath=function(t,e){return Rt(bi,t,{baseOptions:{modelAssetPath:e}})},bi.createFromModelBuffer=function(t,e){return Rt(bi,t,{baseOptions:{modelAssetBuffer:e}})},bi.createFromOptions=function(t,e){return Rt(bi,t,e)},bi.HAND_CONNECTIONS=t0;var Pi=class extends Bi{constructor(t,e){super(new Mr(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],rt(t=this.h=new Hg,0,1,e=new ln),this.u=new Vg,rt(this.h,0,3,this.u),this.j=new e3,rt(this.h,0,2,this.j),ps(this.j,3,1),Qe(this.j,2,.5),Qe(this.u,2,.5),Qe(this.h,4,.5)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"numHands"in t&&ps(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Qe(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Qe(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Qe(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Er(this,t,e),B2(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Vr(this,t,n,e),B2(this)}m(){var t=new Vi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"hand_landmarks"),It(t,"world_hand_landmarks"),It(t,"handedness");const e=new zi;Br(e,ab,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"LANDMARKS:hand_landmarks"),wt(n,"WORLD_LANDMARKS:world_hand_landmarks"),wt(n,"HANDEDNESS:handedness"),n.o(e),or(t,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const a of r)r=ku(a),this.landmarks.push(hd(r));ze(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const a of r)r=Ha(a),this.worldLandmarks.push(yu(r));ze(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{var a=this.handedness,u=a.push;const f=[];for(const d of r){r=fd(d);const m=[];for(const v of r.g())m.push({score:cn(v,2)??0,index:nr(v,1)??0??-1,categoryName:On(nn(v,3))??""??"",displayName:On(nn(v,4))??""??""});f.push(m)}u.call(a,...f),ze(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pi.prototype.detectForVideo=Pi.prototype.G,Pi.prototype.detect=Pi.prototype.F,Pi.prototype.setOptions=Pi.prototype.o,Pi.createFromModelPath=function(t,e){return Rt(Pi,t,{baseOptions:{modelAssetPath:e}})},Pi.createFromModelBuffer=function(t,e){return Rt(Pi,t,{baseOptions:{modelAssetBuffer:e}})},Pi.createFromOptions=function(t,e){return Rt(Pi,t,e)},Pi.HAND_CONNECTIONS=t0;var L3=Sr([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function z2(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function V2(t){try{if(!t.D)return t.h;t.D(t.h)}finally{md(t)}}function wf(t,e){t=ku(t),e.push(hd(t))}var $t=class extends Bi{constructor(t,e){super(new Mr(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,rt(t=this.j=new o3,0,1,e=new ln),this.I=new Vg,rt(this.j,0,2,this.I),this.W=new lb,rt(this.j,0,3,this.W),this.u=new dd,rt(this.j,0,4,this.u),this.O=new Zx,rt(this.j,0,5,this.O),this.A=new r3,rt(this.j,0,6,this.A),this.M=new s3,rt(this.j,0,7,this.M),Qe(this.u,2,.5),Qe(this.u,3,.3),Qe(this.O,2,.5),Qe(this.A,2,.5),Qe(this.A,3,.3),Qe(this.M,2,.5),Qe(this.I,2,.5)}get baseOptions(){return Lt(this.j,ln,1)}set baseOptions(t){rt(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Qe(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Qe(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Qe(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Qe(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Qe(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Qe(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Qe(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const r=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,z2(this),Er(this,t,r),V2(this)}G(t,e,n,r){const o=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:r,z2(this),Vr(this,t,o,e),V2(this)}m(){var t=new Vi;sn(t,"input_frames_image"),It(t,"pose_landmarks"),It(t,"pose_world_landmarks"),It(t,"face_landmarks"),It(t,"left_hand_landmarks"),It(t,"left_hand_world_landmarks"),It(t,"right_hand_landmarks"),It(t,"right_hand_world_landmarks");const e=new zi,n=new f2;ki(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(o,a){if(a!=null)if(Array.isArray(a))Bt(o,2,Jf(a,0,Tu));else{if(!(typeof a=="string"||a instanceof Nr||ag(a)))throw Error("invalid value in Any.value field: "+a+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Xs(o,2,ug(a,!1),Bo())}})(n,this.j.g());const r=new Mi;ki(r,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Eg(r,8,f2,n),Qt(r,"IMAGE:input_frames_image"),wt(r,"POSE_LANDMARKS:pose_landmarks"),wt(r,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),wt(r,"FACE_LANDMARKS:face_landmarks"),wt(r,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),wt(r,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),wt(r,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),wt(r,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),r.o(e),or(t,r),pd(this,t),this.g.attachProtoListener("pose_landmarks",((o,a)=>{wf(o,this.h.poseLandmarks),ze(this,a)})),this.g.attachEmptyPacketListener("pose_landmarks",(o=>{ze(this,o)})),this.g.attachProtoListener("pose_world_landmarks",((o,a)=>{var u=this.h.poseWorldLandmarks;o=Ha(o),u.push(yu(o)),ze(this,a)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(o=>{ze(this,o)})),this.outputPoseSegmentationMasks&&(wt(r,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),rl(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((o,a)=>{this.h.poseSegmentationMasks=[ol(this,o,!0,!this.D)],ze(this,a)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(o=>{this.h.poseSegmentationMasks=[],ze(this,o)}))),this.g.attachProtoListener("face_landmarks",((o,a)=>{wf(o,this.h.faceLandmarks),ze(this,a)})),this.g.attachEmptyPacketListener("face_landmarks",(o=>{ze(this,o)})),this.outputFaceBlendshapes&&(It(t,"extra_blendshapes"),wt(r,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((o,a)=>{var u=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(o=fd(o),u.push(jg(o.g()??[]))),ze(this,a)})),this.g.attachEmptyPacketListener("extra_blendshapes",(o=>{ze(this,o)}))),this.g.attachProtoListener("left_hand_landmarks",((o,a)=>{wf(o,this.h.leftHandLandmarks),ze(this,a)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(o=>{ze(this,o)})),this.g.attachProtoListener("left_hand_world_landmarks",((o,a)=>{var u=this.h.leftHandWorldLandmarks;o=Ha(o),u.push(yu(o)),ze(this,a)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(o=>{ze(this,o)})),this.g.attachProtoListener("right_hand_landmarks",((o,a)=>{wf(o,this.h.rightHandLandmarks),ze(this,a)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(o=>{ze(this,o)})),this.g.attachProtoListener("right_hand_world_landmarks",((o,a)=>{var u=this.h.rightHandWorldLandmarks;o=Ha(o),u.push(yu(o)),ze(this,a)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(o=>{ze(this,o)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$t.prototype.detectForVideo=$t.prototype.G,$t.prototype.detect=$t.prototype.F,$t.prototype.setOptions=$t.prototype.o,$t.createFromModelPath=function(t,e){return Rt($t,t,{baseOptions:{modelAssetPath:e}})},$t.createFromModelBuffer=function(t,e){return Rt($t,t,{baseOptions:{modelAssetBuffer:e}})},$t.createFromOptions=function(t,e){return Rt($t,t,e)},$t.HAND_CONNECTIONS=t0,$t.POSE_CONNECTIONS=L3,$t.FACE_LANDMARKS_LIPS=$g,$t.FACE_LANDMARKS_LEFT_EYE=Kg,$t.FACE_LANDMARKS_LEFT_EYEBROW=Zg,$t.FACE_LANDMARKS_LEFT_IRIS=C3,$t.FACE_LANDMARKS_RIGHT_EYE=Qg,$t.FACE_LANDMARKS_RIGHT_EYEBROW=Jg,$t.FACE_LANDMARKS_RIGHT_IRIS=R3,$t.FACE_LANDMARKS_FACE_OVAL=e0,$t.FACE_LANDMARKS_CONTOURS=b3,$t.FACE_LANDMARKS_TESSELATION=P3;var Qi=class extends Bi{constructor(t,e){super(new Mr(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},rt(t=this.h=new a3,0,1,e=new ln)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return rt(this.h,0,2,Bm(t,Lt(this.h,Bg,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Er(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Vr(this,t,n,e),this.j}m(){var t=new Vi;sn(t,"input_image"),sn(t,"norm_rect"),It(t,"classifications");const e=new zi;Br(e,ub,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Qt(n,"IMAGE:input_image"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"CLASSIFICATIONS:classifications"),n.o(e),or(t,n),this.g.attachProtoListener("classifications",((r,o)=>{this.j=mb(ZR(r)),ze(this,o)})),this.g.attachEmptyPacketListener("classifications",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Qi.prototype.classifyForVideo=Qi.prototype.ta,Qi.prototype.classify=Qi.prototype.sa,Qi.prototype.setOptions=Qi.prototype.o,Qi.createFromModelPath=function(t,e){return Rt(Qi,t,{baseOptions:{modelAssetPath:e}})},Qi.createFromModelBuffer=function(t,e){return Rt(Qi,t,{baseOptions:{modelAssetBuffer:e}})},Qi.createFromOptions=function(t,e){return Rt(Qi,t,e)};var Li=class extends Bi{constructor(t,e){super(new Mr(t,e),"image_in","norm_rect",!0),this.h=new l3,this.embeddings={embeddings:[]},rt(t=this.h,0,1,e=new ln)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){var e=this.h,n=Lt(this.h,x2,2);return n=n?n.clone():new x2,t.l2Normalize!==void 0?Bt(n,1,wu(t.l2Normalize)):"l2Normalize"in t&&Bt(n,1),t.quantize!==void 0?Bt(n,2,wu(t.quantize)):"quantize"in t&&Bt(n,2),rt(e,0,2,n),this.l(t)}za(t,e){return Er(this,t,e),this.embeddings}Aa(t,e,n){return Vr(this,t,n,e),this.embeddings}m(){var t=new Vi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"embeddings_out");const e=new zi;Br(e,cb,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"EMBEDDINGS:embeddings_out"),n.o(e),or(t,n),this.g.attachProtoListener("embeddings_out",((r,o)=>{r=eb(r),this.embeddings=(function(a){return{embeddings:hs(a,JR,1).map((u=>{const f={headIndex:nr(u,3)??0??-1,headName:On(nn(u,4))??""??""};var d=u.v;return sx(d,0|d[Ye],y2,Ip(u,1))!==void 0?(u=Do(u=Lt(u,y2,Ip(u,1),void 0),1,Ur,Lo()),f.floatEmbedding=u.slice()):(d=new Uint8Array(0),f.quantizedEmbedding=Lt(u,QR,Ip(u,2),void 0)?.na()?.h()??d),f})),timestampMs:m3(nn(a,2,void 0,void 0,Of)??ex)}})(r),ze(this,o)})),this.g.attachEmptyPacketListener("embeddings_out",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Li.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=A2(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=A2(T2(t.quantizedEmbedding),T2(e.quantizedEmbedding))}return t},Li.prototype.embedForVideo=Li.prototype.Aa,Li.prototype.embed=Li.prototype.za,Li.prototype.setOptions=Li.prototype.o,Li.createFromModelPath=function(t,e){return Rt(Li,t,{baseOptions:{modelAssetPath:e}})},Li.createFromModelBuffer=function(t,e){return Rt(Li,t,{baseOptions:{modelAssetBuffer:e}})},Li.createFromOptions=function(t,e){return Rt(Li,t,e)};var Gm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function Mb(t){const e=(function(n){return hs(n,Mi,1)})(t.ca()).filter((n=>(On(nn(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(Lt(e[0],zi,7)?.j()?.g()??new Map).forEach(((n,r)=>{t.u[Number(r)]=On(nn(n,1))??""}))}function H2(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function G2(t){try{const e=new Gm(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{md(t)}}Gm.prototype.close=Gm.prototype.close;var gi=class extends Bi{constructor(t,e){super(new Mr(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Xg,this.A=new u3,rt(this.h,0,3,this.A),rt(t=this.h,0,1,e=new ln)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Bt(this.h,2,Nu(t.displayNamesLocale)):"displayNamesLocale"in t&&Bt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){Mb(this)}segment(t,e,n){const r=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,H2(this),Er(this,t,r),G2(this)}La(t,e,n,r){const o=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:r,H2(this),Vr(this,t,o,e),G2(this)}Da(){return this.u}m(){var t=new Vi;sn(t,"image_in"),sn(t,"norm_rect");const e=new zi;Br(e,f3,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),n.o(e),or(t,n),pd(this,t),this.outputConfidenceMasks&&(It(t,"confidence_masks"),wt(n,"CONFIDENCE_MASKS:confidence_masks"),rl(this,"confidence_masks"),this.g.aa("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((a=>ol(this,a,!0,!this.j))),ze(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],ze(this,r)}))),this.outputCategoryMask&&(It(t,"category_mask"),wt(n,"CATEGORY_MASK:category_mask"),rl(this,"category_mask"),this.g.Z("category_mask",((r,o)=>{this.categoryMask=ol(this,r,!1,!this.j),ze(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,ze(this,r)}))),It(t,"quality_scores"),wt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,ze(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gi.prototype.getLabels=gi.prototype.Da,gi.prototype.segmentForVideo=gi.prototype.La,gi.prototype.segment=gi.prototype.segment,gi.prototype.setOptions=gi.prototype.o,gi.createFromModelPath=function(t,e){return Rt(gi,t,{baseOptions:{modelAssetPath:e}})},gi.createFromModelBuffer=function(t,e){return Rt(gi,t,{baseOptions:{modelAssetBuffer:e}})},gi.createFromOptions=function(t,e){return Rt(gi,t,e)};var Wm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Wm.prototype.close=Wm.prototype.close;var Lr=class extends Bi{constructor(t,e){super(new Mr(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Xg,this.u=new u3,rt(this.h,0,3,this.u),rt(t=this.h,0,1,e=new ln)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,r){const o=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,r=new d3,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new Op;Xs(a,3,wu(!0),!1),Xs(a,1,mu(e.keypoint.x),0),Xs(a,2,mu(e.keypoint.y),0),vu(r,1,km,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const f=new db;for(a of e.scribble)Xs(e=new Op,3,wu(!0),!1),Xs(e,1,mu(a.x),0),Xs(e,2,mu(a.y),0),Eg(f,1,Op,e);vu(r,2,km,f)}}this.g.addProtoToStream(r.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Er(this,t,o);e:{try{const f=new Wm(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var u=f;break e}this.j(f)}finally{md(this)}u=void 0}return u}m(){var t=new Vi;sn(t,"image_in"),sn(t,"roi_in"),sn(t,"norm_rect_in");const e=new zi;Br(e,f3,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Qt(n,"IMAGE:image_in"),Qt(n,"ROI:roi_in"),Qt(n,"NORM_RECT:norm_rect_in"),n.o(e),or(t,n),pd(this,t),this.outputConfidenceMasks&&(It(t,"confidence_masks"),wt(n,"CONFIDENCE_MASKS:confidence_masks"),rl(this,"confidence_masks"),this.g.aa("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((a=>ol(this,a,!0,!this.j))),ze(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],ze(this,r)}))),this.outputCategoryMask&&(It(t,"category_mask"),wt(n,"CATEGORY_MASK:category_mask"),rl(this,"category_mask"),this.g.Z("category_mask",((r,o)=>{this.categoryMask=ol(this,r,!1,!this.j),ze(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,ze(this,r)}))),It(t,"quality_scores"),wt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,ze(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Lr.prototype.segment=Lr.prototype.segment,Lr.prototype.setOptions=Lr.prototype.o,Lr.createFromModelPath=function(t,e){return Rt(Lr,t,{baseOptions:{modelAssetPath:e}})},Lr.createFromModelBuffer=function(t,e){return Rt(Lr,t,{baseOptions:{modelAssetBuffer:e}})},Lr.createFromOptions=function(t,e){return Rt(Lr,t,e)};var Ji=class extends Bi{constructor(t,e){super(new Mr(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},rt(t=this.h=new h3,0,1,e=new ln)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Bt(this.h,2,Nu(t.displayNamesLocale)):"displayNamesLocale"in t&&Bt(this.h,2),t.maxResults!==void 0?ps(this.h,3,t.maxResults):"maxResults"in t&&Bt(this.h,3),t.scoreThreshold!==void 0?Qe(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&Bt(this.h,4),t.categoryAllowlist!==void 0?Bf(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&Bt(this.h,5),t.categoryDenylist!==void 0?Bf(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&Bt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Er(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Vr(this,t,n,e),this.j}m(){var t=new Vi;sn(t,"input_frame_gpu"),sn(t,"norm_rect"),It(t,"detections");const e=new zi;Br(e,hb,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Qt(n,"IMAGE:input_frame_gpu"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"DETECTIONS:detections"),n.o(e),or(t,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const a of r)r=Wx(a),this.j.detections.push(g3(r));ze(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ji.prototype.detectForVideo=Ji.prototype.G,Ji.prototype.detect=Ji.prototype.F,Ji.prototype.setOptions=Ji.prototype.o,Ji.createFromModelPath=async function(t,e){return Rt(Ji,t,{baseOptions:{modelAssetPath:e}})},Ji.createFromModelBuffer=function(t,e){return Rt(Ji,t,{baseOptions:{modelAssetBuffer:e}})},Ji.createFromOptions=function(t,e){return Rt(Ji,t,e)};var Xm=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function W2(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function X2(t){try{const e=new Xm(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{md(t)}}Xm.prototype.close=Xm.prototype.close;var vi=class extends Bi{constructor(t,e){super(new Mr(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,rt(t=this.h=new p3,0,1,e=new ln),this.A=new s3,rt(this.h,0,3,this.A),this.j=new r3,rt(this.h,0,2,this.j),ps(this.j,4,1),Qe(this.j,2,.5),Qe(this.A,2,.5),Qe(this.h,4,.5)}get baseOptions(){return Lt(this.h,ln,1)}set baseOptions(t){rt(this.h,0,1,t)}o(t){return"numPoses"in t&&ps(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Qe(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Qe(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Qe(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const r=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,W2(this),Er(this,t,r),X2(this)}G(t,e,n,r){const o=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:r,W2(this),Vr(this,t,o,e),X2(this)}m(){var t=new Vi;sn(t,"image_in"),sn(t,"norm_rect"),It(t,"normalized_landmarks"),It(t,"world_landmarks"),It(t,"segmentation_masks");const e=new zi;Br(e,pb,this.h);const n=new Mi;ki(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Qt(n,"IMAGE:image_in"),Qt(n,"NORM_RECT:norm_rect"),wt(n,"NORM_LANDMARKS:normalized_landmarks"),wt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),or(t,n),pd(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((r,o)=>{this.landmarks=[];for(const a of r)r=ku(a),this.landmarks.push(hd(r));ze(this,o)})),this.g.attachEmptyPacketListener("normalized_landmarks",(r=>{this.landmarks=[],ze(this,r)})),this.g.attachProtoVectorListener("world_landmarks",((r,o)=>{this.worldLandmarks=[];for(const a of r)r=Ha(a),this.worldLandmarks.push(yu(r));ze(this,o)})),this.g.attachEmptyPacketListener("world_landmarks",(r=>{this.worldLandmarks=[],ze(this,r)})),this.outputSegmentationMasks&&(wt(n,"SEGMENTATION_MASK:segmentation_masks"),rl(this,"segmentation_masks"),this.g.aa("segmentation_masks",((r,o)=>{this.segmentationMasks=r.map((a=>ol(this,a,!0,!this.u))),ze(this,o)})),this.g.attachEmptyPacketListener("segmentation_masks",(r=>{this.segmentationMasks=[],ze(this,r)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};vi.prototype.detectForVideo=vi.prototype.G,vi.prototype.detect=vi.prototype.F,vi.prototype.setOptions=vi.prototype.o,vi.createFromModelPath=function(t,e){return Rt(vi,t,{baseOptions:{modelAssetPath:e}})},vi.createFromModelBuffer=function(t,e){return Rt(vi,t,{baseOptions:{modelAssetBuffer:e}})},vi.createFromOptions=function(t,e){return Rt(vi,t,e)},vi.POSE_CONNECTIONS=L3;const Eb="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm",wb="https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task";class Tb{landmarker=null;initializing=!1;lastVideoTime=-1;constructor(){this.initialize()}async initialize(){if(!(this.initializing||this.landmarker)){this.initializing=!0;try{const e=await Na.forVisionTasks(Eb);this.landmarker=await vi.createFromOptions(e,{baseOptions:{modelAssetPath:wb,delegate:"GPU"},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5})}catch(e){console.error("[CHRONO-MORPH] PoseLandmarker init failed:",e)}finally{this.initializing=!1}}}update(e){const n=e.videoElement;if(!(!this.landmarker||!n||n.readyState<2)&&n.currentTime!==this.lastVideoTime){this.lastVideoTime=n.currentTime;try{const r=this.landmarker.detectForVideo(n,performance.now()),o=r.landmarks&&r.landmarks[0];if(o&&o.length>0){const a=o.map(u=>({x:u.x,y:u.y,z:u.z,visibility:u.visibility??1}));e.shared.poseLandmarks=a,e.shared.posePresent=!0}else e.shared.poseLandmarks=null,e.shared.posePresent=!1}catch{}}}render(e){}dispose(){this.landmarker?.close(),this.landmarker=null}}class Ab{prevLandmarks=null;prevVelocity=[];constructor(){}update(e){const n=e.poseLandmarks;if(!n||n.length===0){e.shared.motionData=null,this.prevLandmarks=null;return}const r=Math.max(e.deltaTime,.001),a=.15+e.store.afterimage.sensitivity*.9,u=new Array(n.length);for(let f=0;f<n.length;f++){const d=n[f],m=this.prevLandmarks?.[f],v=new Et(0,0);m&&v.set((d.x-m.x)/r,(d.y-m.y)/r);const p=this.prevVelocity[f]??new Et(0,0),_=new Et((v.x-p.x)/r,(v.y-p.y)/r),S=v.length(),w=d.visibility>.4&&S>a;u[f]={velocity:v,acceleration:_,speed:S,exceedsThreshold:w},this.prevVelocity[f]=v}e.shared.motionData=u,this.prevLandmarks=n}render(e){}dispose(){this.prevLandmarks=null,this.prevVelocity=[]}}class Cb{audioContext=null;analyser=null;source=null;freqData=null;smoothedBass=0;connectedEl=null;gestured=!1;constructor(){const e=()=>{this.gestured=!0};window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0})}ensureContext(e){if(e){if(!this.audioContext){const n=window.AudioContext||window.webkitAudioContext;this.audioContext=new n,this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.7,this.freqData=new Uint8Array(this.analyser.frequencyBinCount)}if(this.connectedEl!==e&&this.audioContext&&this.analyser)try{this.source=this.audioContext.createMediaElementSource(e),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.connectedEl=e,e.muted=!1}catch{}this.audioContext.state==="suspended"&&this.audioContext.resume()}}update(e){if(this.gestured&&e.videoElement&&this.ensureContext(e.videoElement),!this.analyser||!this.freqData){e.shared.audioBass=0;return}this.analyser.getByteFrequencyData(this.freqData);const r=(this.audioContext?.sampleRate??44100)/this.analyser.fftSize,o=Math.max(1,Math.floor(20/r)),a=Math.min(this.freqData.length-1,Math.ceil(150/r));let u=0;for(let m=o;m<=a;m++)u+=this.freqData[m];const f=u/Math.max(1,a-o+1)/255,d=Math.min(1,f*e.store.audioBassGain);d>this.smoothedBass?this.smoothedBass=d:this.smoothedBass+=(d-this.smoothedBass)*.15,e.shared.audioBass=this.smoothedBass,e.shared.audioSpectrum=Float32Array.from(this.freqData,m=>m/255)}render(e){}dispose(){try{this.source?.disconnect(),this.analyser?.disconnect()}catch{}this.audioContext?.close(),this.audioContext=null,this.analyser=null,this.source=null,this.connectedEl=null}}function Ro(t,e,n,r){const o=(t-.5)*n,a=(.5-e)*r;return new $(o,a,0)}const Rb=`/**
 * particleRender.glsl — 粒子渲染 Fragment Shader（柔边圆点）
 *
 * 由 ParticleSystem.ts 使用。顶点着色器在 TS 中内联定义（需读取 per-vertex
 * 的 life/seed attribute 设置 gl_PointSize）。此处仅片元：绘制发光柔边粒子。
 *
 * Varyings (来自内联顶点着色器):
 * - vLife: float — 归一化剩余生命 (0-1)，用于淡出
 * Uniforms:
 * - uColor: vec3 — 粒子颜色
 * - uOpacity: float — 全局透明度（受音频调制）
 */

precision highp float;

uniform vec3 uColor;
uniform float uOpacity;

varying float vLife;

void main() {
  vec2 pc = gl_PointCoord - 0.5;
  float d = length(pc);
  if (d > 0.5) discard;
  // 柔边 + 中心高光
  float edge = smoothstep(0.5, 0.0, d);
  float core = smoothstep(0.25, 0.0, d);
  float alpha = edge * vLife * uOpacity;
  vec3 col = uColor + core * 0.6; // 中心偏白，增强发光感
  gl_FragColor = vec4(col * alpha, alpha);
}
`,Di=2e4,bb=`
  attribute float aLife;
  attribute float aSize;
  uniform float uSize;
  varying float vLife;
  void main() {
    vLife = aLife;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aSize * (0.4 + vLife); // 随生命淡出缩小
  }
`;class Pb{scene=new fl;geometry;material;points;rt;px=new Float32Array(Di);py=new Float32Array(Di);vx=new Float32Array(Di);vy=new Float32Array(Di);life=new Float32Array(Di);maxLife=new Float32Array(Di);psize=new Float32Array(Di);alive=new Uint8Array(Di);cursor=0;emitAcc=0;posAttr;lifeAttr;sizeAttr;constructor(){this.posAttr=new Float32Array(Di*3),this.lifeAttr=new Float32Array(Di),this.sizeAttr=new Float32Array(Di),this.geometry=new Fi,this.geometry.setAttribute("position",new $n(this.posAttr,3).setUsage(gu)),this.geometry.setAttribute("aLife",new $n(this.lifeAttr,1).setUsage(gu)),this.geometry.setAttribute("aSize",new $n(this.sizeAttr,1).setUsage(gu)),this.geometry.setDrawRange(0,0),this.material=new Si({uniforms:{uSize:{value:2},uColor:{value:new yt("#00fff2")},uOpacity:{value:1}},vertexShader:bb,fragmentShader:Rb,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ga}),this.points=new by(this.geometry,this.material),this.points.frustumCulled=!1,this.scene.add(this.points),this.rt=new rr(1,1,{minFilter:Zt,magFilter:Zt,format:Nn,type:xi})}spawn(e,n,r,o,a){const u=this.cursor;this.cursor=(this.cursor+1)%Di,this.px[u]=e,this.py[u]=n,this.vx[u]=r,this.vy[u]=o;const f=.6+Math.random()*.9;this.life[u]=f,this.maxLife[u]=f,this.psize[u]=a*(.6+Math.random()*.8),this.alive[u]=1}update(e){const n=e.store.particle,r=Math.min(e.deltaTime,.05),o=e.camera,a=o.right-o.left,u=o.top-o.bottom,f=e.motionData,d=e.poseLandmarks;if(f&&d){const _=[];for(let S=0;S<f.length;S++)f[S].exceedsThreshold&&_.push(S);if(_.length>0){const S=1+e.audioBass*2.5,M=n.emissionRate*S;this.emitAcc+=M*r;let w=Math.floor(this.emitAcc);this.emitAcc-=w,w=Math.min(w,n.maxCount);for(let x=0;x<w;x++){const y=_[x%_.length],P=d[y],L=Ro(P.x,P.y,a,u),R=f[y].velocity,j=.15,F=R.x*a*.25+(Math.random()-.5)*j,N=-R.y*u*.25+(Math.random()-.5)*j;this.spawn(L.x+(Math.random()-.5)*.03,L.y+(Math.random()-.5)*.03,F,N,n.size)}}}const m=-n.gravity,v=.6;let p=0;for(let _=0;_<Di;_++){if(!this.alive[_])continue;let S=this.life[_]-r;if(S<=0){this.alive[_]=0;continue}this.life[_]=S;let M=this.vx[_],w=this.vy[_];w+=m*r;const x=1-v*r;M*=x,w*=x,this.vx[_]=M,this.vy[_]=w,this.px[_]+=M*r,this.py[_]+=w*r;const y=p*3;this.posAttr[y]=this.px[_],this.posAttr[y+1]=this.py[_],this.posAttr[y+2]=0,this.lifeAttr[p]=S/this.maxLife[_],this.sizeAttr[p]=this.psize[_],p++}this.geometry.setDrawRange(0,p),this.geometry.getAttribute("position").needsUpdate=!0,this.geometry.getAttribute("aLife").needsUpdate=!0,this.geometry.getAttribute("aSize").needsUpdate=!0,this.material.uniforms.uSize.value=n.size*(1+e.audioBass*.8),this.material.uniforms.uColor.value.set(n.color),this.material.uniforms.uOpacity.value=1,(this.rt.width!==e.width||this.rt.height!==e.height)&&this.rt.setSize(e.width,e.height),e.renderTargets.particle=this.rt}render(e){e.renderer.setRenderTarget(this.rt),e.renderer.setClearColor(0,0),e.renderer.clear(),e.renderer.render(this.scene,e.camera),e.renderer.setRenderTarget(null),e.renderer.setClearColor(657935,1)}dispose(){this.geometry.dispose(),this.material.dispose(),this.rt.dispose()}}const Lb=`/**
 * afterimage.glsl — 残影/拖尾累积 Fragment Shader
 *
 * 由 AfterimagePass.ts 使用。基于当前视频帧与上一视频帧的差异得到运动掩码，
 * 仅在运动区域注入当前颜色，与历史累积缓冲按 uFade 衰减取 max，形成拖尾。
 * 静止区域随时间衰减到黑，故本层只贡献"运动残影"，避免与底层视频重复。
 *
 * Uniforms:
 * - tVideoCur:  sampler2D 当前视频帧（已 cover-fit 到画布空间）
 * - tVideoPrev: sampler2D 上一帧视频（画布空间）
 * - tHistory:   sampler2D 上一帧残影累积（ping-pong）
 * - uFade:        float 拖尾衰减 (0-1，越大越久)
 * - uSensitivity: float 运动灵敏度 (0-1)
 * - uColor:       vec3  残影着色
 */

precision highp float;

uniform sampler2D tVideoCur;
uniform sampler2D tVideoPrev;
uniform sampler2D tHistory;
uniform float uFade;
uniform float uSensitivity;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
  vec3 cur = texture2D(tVideoCur, vUv).rgb;
  vec3 prevV = texture2D(tVideoPrev, vUv).rgb;
  vec3 hist = texture2D(tHistory, vUv).rgb;

  float m = length(cur - prevV);
  // sensitivity 越大越敏感 → 阈值越低
  float thresh = mix(0.35, 0.02, uSensitivity);
  float mask = smoothstep(thresh, thresh + 0.15, m);

  vec3 inject = cur * mask;
  vec3 acc = max(inject, hist * clamp(uFade, 0.0, 0.99));

  // 运动边缘着色
  acc *= mix(vec3(1.0), uColor * 2.0, 0.55);

  gl_FragColor = vec4(acc, 1.0);
}
`,j2=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Db=`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVideoAspect;
  uniform float uCanvasAspect;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    if (uCanvasAspect > uVideoAspect) {
      float s = uCanvasAspect / uVideoAspect;
      uv.x = (vUv.x - 0.5) / s + 0.5;
    } else {
      float s = uVideoAspect / uCanvasAspect;
      uv.y = (vUv.y - 0.5) / s + 0.5;
    }
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }
    gl_FragColor = vec4(texture2D(uTexture, uv).rgb, 1.0);
  }
`;function Tf(){return new rr(1,1,{minFilter:Zt,magFilter:Zt,format:Nn,type:xi})}class Ib{scene=new fl;camera=new Pu(-1,1,1,-1,0,1);quad;copyMat;accMat;videoA=Tf();videoB=Tf();histA=Tf();histB=Tf();videoCurIsA=!0;histReadIsA=!0;sized=!1;constructor(){this.copyMat=new Si({uniforms:{uTexture:{value:null},uVideoAspect:{value:480/852},uCanvasAspect:{value:1}},vertexShader:j2,fragmentShader:Db,depthTest:!1,depthWrite:!1}),this.accMat=new Si({uniforms:{tVideoCur:{value:null},tVideoPrev:{value:null},tHistory:{value:null},uFade:{value:.75},uSensitivity:{value:.5},uColor:{value:new yt("#00fff2")}},vertexShader:j2,fragmentShader:Lb,depthTest:!1,depthWrite:!1}),this.quad=new si(new eo(2,2),this.copyMat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}resize(e,n){for(const r of[this.videoA,this.videoB,this.histA,this.histB])r.setSize(e,n);this.sized=!0}update(e){(this.videoA.width!==e.width||this.videoA.height!==e.height)&&this.resize(e.width,e.height);const n=e.store.afterimage;this.accMat.uniforms.uFade.value=n.fade,this.accMat.uniforms.uSensitivity.value=n.sensitivity,this.accMat.uniforms.uColor.value.set(n.color),e.videoElement&&e.videoElement.videoWidth>0&&(this.copyMat.uniforms.uVideoAspect.value=e.videoElement.videoWidth/e.videoElement.videoHeight),this.copyMat.uniforms.uCanvasAspect.value=e.width/e.height}render(e){if(!this.sized||!e.videoTexture){e.renderTargets.afterimage=this.histReadIsA?this.histA:this.histB;return}const n=e.renderer,r=this.videoCurIsA?this.videoA:this.videoB,o=this.videoCurIsA?this.videoB:this.videoA,a=this.histReadIsA?this.histA:this.histB,u=this.histReadIsA?this.histB:this.histA;this.quad.material=this.copyMat,this.copyMat.uniforms.uTexture.value=e.videoTexture,n.setRenderTarget(r),n.render(this.scene,this.camera),this.quad.material=this.accMat,this.accMat.uniforms.tVideoCur.value=r.texture,this.accMat.uniforms.tVideoPrev.value=o.texture,this.accMat.uniforms.tHistory.value=a.texture,n.setRenderTarget(u),n.render(this.scene,this.camera),n.setRenderTarget(null),e.renderTargets.afterimage=u,this.videoCurIsA=!this.videoCurIsA,this.histReadIsA=!this.histReadIsA}dispose(){this.copyMat.dispose(),this.accMat.dispose(),this.quad.geometry.dispose();for(const e of[this.videoA,this.videoB,this.histA,this.histB])e.dispose()}}const Ub=[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32]],q2=4e3,Y2=2048;class Nb{lineGeo;lineMat;lines;pointGeo;pointMat;points;linePos;pointPos;sceneRef=null;constructor(){this.linePos=new Float32Array(q2*3),this.pointPos=new Float32Array(Y2*3),this.lineGeo=new Fi,this.lineGeo.setAttribute("position",new $n(this.linePos,3).setUsage(gu)),this.lineGeo.setDrawRange(0,0),this.lineMat=new Cy({color:new yt("#ff00e5"),transparent:!0,opacity:.9,blending:Ga,depthTest:!1,depthWrite:!1}),this.lines=new AC(this.lineGeo,this.lineMat),this.lines.frustumCulled=!1,this.lines.renderOrder=10,this.pointGeo=new Fi,this.pointGeo.setAttribute("position",new $n(this.pointPos,3).setUsage(gu)),this.pointGeo.setDrawRange(0,0),this.pointMat=new Ry({color:new yt("#ff00e5"),size:4,sizeAttenuation:!1,transparent:!0,opacity:.95,blending:Ga,depthTest:!1,depthWrite:!1}),this.points=new by(this.pointGeo,this.pointMat),this.points.frustumCulled=!1,this.points.renderOrder=11}update(e){this.sceneRef||(this.sceneRef=e.scene,e.scene.add(this.lines),e.scene.add(this.points));const n=e.store.skeleton,r=n.enabled&&e.posePresent&&!!e.poseLandmarks;if(this.lines.visible=r,this.points.visible=r,!r){this.lineGeo.setDrawRange(0,0),this.pointGeo.setDrawRange(0,0);return}this.lineMat.color.set(n.color),this.pointMat.color.set(n.color);const o=e.poseLandmarks,a=e.camera,u=a.right-a.left,f=a.top-a.bottom;let d=0,m=0;const v=(M,w,x,y)=>{if(d+2>q2)return;let P=d*3;this.linePos[P]=M,this.linePos[P+1]=w,this.linePos[P+2]=0,P+=3,this.linePos[P]=x,this.linePos[P+1]=y,this.linePos[P+2]=0,d+=2},p=(M,w)=>{if(m+1>Y2)return;const x=m*3;this.pointPos[x]=M,this.pointPos[x+1]=w,this.pointPos[x+2]=0,m+=1},_=Math.max(0,Math.floor(n.gridDensity));for(const[M,w]of Ub){const x=o[M],y=o[w];if(!x||!y||x.visibility<.3||y.visibility<.3)continue;const P=Ro(x.x,x.y,u,f),L=Ro(y.x,y.y,u,f);v(P.x,P.y,L.x,L.y);for(let R=1;R<=_;R++){const j=R/(_+1);p(P.x+(L.x-P.x)*j,P.y+(L.y-P.y)*j)}}for(let M=0;M<o.length;M++){if(o[M].visibility<.3)continue;const w=Ro(o[M].x,o[M].y,u,f);p(w.x,w.y)}const S=n.linkDistance;for(let M=0;M<o.length;M++){const w=o[M];if(!(w.visibility<.3))for(let x=M+1;x<o.length;x++){const y=o[x];if(y.visibility<.3)continue;const P=w.x-y.x,L=w.y-y.y;if(P*P+L*L<S*S){const R=Ro(w.x,w.y,u,f),j=Ro(y.x,y.y,u,f);v(R.x,R.y,j.x,j.y)}}}this.lineGeo.setDrawRange(0,d),this.pointGeo.setDrawRange(0,m),this.lineGeo.getAttribute("position").needsUpdate=!0,this.pointGeo.getAttribute("position").needsUpdate=!0}render(e){}dispose(){this.sceneRef&&(this.sceneRef.remove(this.lines),this.sceneRef.remove(this.points)),this.lineGeo.dispose(),this.lineMat.dispose(),this.pointGeo.dispose(),this.pointMat.dispose()}}const Fb=`/**
 * ascii.glsl — ASCII 字符化 Fragment Shader
 *
 * 由 AsciiPass.ts 使用。将输入画面按网格降采样取亮度，映射到字符图集
 * (10x10 网格，按亮度递增排列)，输出着色字符层。
 *
 * Uniforms:
 * - tInput:  sampler2D 输入画面（视频）
 * - tAtlas:  sampler2D 字符图集 (flipY=false, nearest)
 * - uCells:  vec2 网格列/行数
 * - uColor:  vec3 字符颜色
 * - uAtlasSize: float 图集边长（=10）
 * - uVideoAspect / uCanvasAspect: cover-fit 参数
 */

precision highp float;

uniform sampler2D tInput;
uniform sampler2D tAtlas;
uniform vec2 uCells;
uniform vec3 uColor;
uniform float uAtlasSize;
uniform float uVideoAspect;
uniform float uCanvasAspect;

varying vec2 vUv;

vec2 coverFit(vec2 uv) {
  vec2 r = uv;
  if (uCanvasAspect > uVideoAspect) {
    float s = uCanvasAspect / uVideoAspect;
    r.x = (uv.x - 0.5) / s + 0.5;
  } else {
    float s = uVideoAspect / uCanvasAspect;
    r.y = (uv.y - 0.5) / s + 0.5;
  }
  return r;
}

void main() {
  vec2 cell = floor(vUv * uCells);
  vec2 cellCenter = (cell + 0.5) / uCells;
  vec2 sampUv = coverFit(cellCenter);

  float b = 0.0;
  if (sampUv.x >= 0.0 && sampUv.x <= 1.0 && sampUv.y >= 0.0 && sampUv.y <= 1.0) {
    vec3 src = texture2D(tInput, sampUv).rgb;
    b = dot(src, vec3(0.299, 0.587, 0.114));
  }

  float count = uAtlasSize * uAtlasSize;
  float idx = floor(clamp(b, 0.0, 1.0) * (count - 1.0));
  float col = mod(idx, uAtlasSize);
  float row = floor(idx / uAtlasSize);

  vec2 local = fract(vUv * uCells);
  vec2 atlasUv = (vec2(col + local.x, row + (1.0 - local.y))) / uAtlasSize;
  float ch = texture2D(tAtlas, atlasUv).r;

  gl_FragColor = vec4(uColor * ch, ch);
}
`,Ob=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;class kb{scene=new fl;camera=new Pu(-1,1,1,-1,0,1);material;quad;rt;atlas;constructor(){this.atlas=new LC().load("/assets/ascii-atlas.png"),this.atlas.flipY=!1,this.atlas.minFilter=oi,this.atlas.magFilter=oi,this.atlas.generateMipmaps=!1,this.material=new Si({uniforms:{tInput:{value:null},tAtlas:{value:this.atlas},uCells:{value:new Et(40,71)},uColor:{value:new yt("#00fff2")},uAtlasSize:{value:10},uVideoAspect:{value:480/852},uCanvasAspect:{value:1}},vertexShader:Ob,fragmentShader:Fb,transparent:!0,depthTest:!1,depthWrite:!1}),this.quad=new si(new eo(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.rt=new rr(1,1,{minFilter:Zt,magFilter:Zt,format:Nn,type:xi})}update(e){(this.rt.width!==e.width||this.rt.height!==e.height)&&this.rt.setSize(e.width,e.height),e.renderTargets.ascii=this.rt;const n=e.store.ascii;this.material.uniforms.uColor.value.set(n.color);const r=e.width/e.height,o=Math.max(4,Math.floor(n.density)),a=Math.max(4,Math.round(o*r));this.material.uniforms.uCells.value.set(a,o),this.material.uniforms.uCanvasAspect.value=r,e.videoElement&&e.videoElement.videoWidth>0&&(this.material.uniforms.uVideoAspect.value=e.videoElement.videoWidth/e.videoElement.videoHeight),this.material.uniforms.tInput.value=e.videoTexture}render(e){e.renderer.setRenderTarget(this.rt),e.renderer.setClearColor(0,0),e.renderer.clear(),e.store.ascii.enabled&&e.videoTexture&&e.renderer.render(this.scene,this.camera),e.renderer.setRenderTarget(null),e.renderer.setClearColor(657935,1)}dispose(){this.material.dispose(),this.quad.geometry.dispose(),this.rt.dispose(),this.atlas.dispose()}}const er=64;class Bb{scene=new fl;mesh;material;rt;dummy=new Yn;px=new Float32Array(er);py=new Float32Array(er);vx=new Float32Array(er);vy=new Float32Array(er);life=new Float32Array(er);maxLife=new Float32Array(er);rot=new Float32Array(er);rotSpeed=new Float32Array(er);baseScale=new Float32Array(er);cursor=0;spawnAcc=0;constructor(){const e=new sg(.08,0);this.material=new ng({color:new yt("#8b5cf6"),wireframe:!0,transparent:!0,opacity:.6,blending:Ga,depthTest:!1,depthWrite:!1}),this.mesh=new wC(e,this.material,er),this.mesh.frustumCulled=!1,this.mesh.count=0,this.scene.add(this.mesh),this.rt=new rr(1,1,{minFilter:Zt,magFilter:Zt,format:Nn,type:xi})}spawn(e,n,r,o,a){const u=this.cursor;this.cursor=(this.cursor+1)%er,this.px[u]=e,this.py[u]=n,this.vx[u]=r,this.vy[u]=o;const f=.8+Math.random()*1.2;this.life[u]=f,this.maxLife[u]=f,this.rot[u]=Math.random()*Math.PI,this.rotSpeed[u]=(Math.random()-.5)*3,this.baseScale[u]=a*(.5+Math.random()*.9)}update(e){(this.rt.width!==e.width||this.rt.height!==e.height)&&this.rt.setSize(e.width,e.height),e.renderTargets.geometry=this.rt;const n=e.store.geometry;this.material.color.set(n.filterColor),this.material.opacity=.3+n.maskStrength*.6;const r=Math.min(e.deltaTime,.05),o=e.camera,a=o.right-o.left,u=o.top-o.bottom;if(!n.enabled){this.mesh.count=0;return}const f=e.motionData,d=e.poseLandmarks;if(f&&d){let p=-1,_=0;for(let S=0;S<f.length;S++){const M=f[S].acceleration.length();f[S].exceedsThreshold&&M>_&&(_=M,p=S)}if(p>=0){this.spawnAcc+=(6+e.audioBass*10)*r;let S=Math.floor(this.spawnAcc);this.spawnAcc-=S,S=Math.min(S,4);for(let M=0;M<S;M++){const w=d[p],x=Ro(w.x,w.y,a,u),y=f[p].velocity;this.spawn(x.x+(Math.random()-.5)*.1,x.y+(Math.random()-.5)*.1,y.x*a*.15+(Math.random()-.5)*.2,-y.y*u*.15+(Math.random()-.5)*.2,n.size)}}}const m=1+e.audioBass*.6;let v=0;for(let p=0;p<er;p++){if(this.life[p]<=0||(this.life[p]-=r,this.life[p]<=0))continue;this.vy[p]+=-.2*r,this.vx[p]*=.98,this.vy[p]*=.98,this.px[p]+=this.vx[p]*r,this.py[p]+=this.vy[p]*r,this.rot[p]+=this.rotSpeed[p]*r;const _=this.life[p]/this.maxLife[p],S=this.baseScale[p]*_*m;this.dummy.position.set(this.px[p],this.py[p],0),this.dummy.rotation.set(this.rot[p],this.rot[p]*.7,0),this.dummy.scale.set(S,S,S),this.dummy.updateMatrix(),this.mesh.setMatrixAt(v,this.dummy.matrix),v++}this.mesh.count=v,this.mesh.instanceMatrix.needsUpdate=!0}render(e){e.renderer.setRenderTarget(this.rt),e.renderer.setClearColor(0,0),e.renderer.clear(),this.mesh.count>0&&e.renderer.render(this.scene,e.camera),e.renderer.setRenderTarget(null),e.renderer.setClearColor(657935,1)}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.rt.dispose()}}const zb=`/**
 * composite.glsl — 最终合成 Fragment Shader
 *
 * 合成顺序（底→顶）：tScene(视频+骨骼) → tAfterimage(残影) → tParticle(粒子)
 * → tGeometry(几何魅影) → tAscii(字符层)；再叠加基于发光层的近似 Bloom、
 * 色彩滤镜与暗角。由 CompositePass.ts 提供全部 uniform。
 */

precision highp float;

uniform sampler2D tScene;
uniform sampler2D tAfterimage;
uniform sampler2D tParticle;
uniform sampler2D tAscii;
uniform sampler2D tGeometry;
uniform float uBloomStrength;
uniform vec3 uFilterColor;
uniform float uMaskStrength;
uniform vec2 uResolution;

varying vec2 vUv;

void main() {
  vec3 base = texture2D(tScene, vUv).rgb;
  vec3 after = texture2D(tAfterimage, vUv).rgb;
  vec3 part = texture2D(tParticle, vUv).rgb;
  vec3 geo = texture2D(tGeometry, vUv).rgb;
  vec4 asc = texture2D(tAscii, vUv);

  vec3 color = base;
  color += after;          // 残影拖尾（加色）
  color += part;           // 粒子（加色）
  color += geo;            // 几何魅影（加色）
  color = mix(color, asc.rgb, asc.a); // ASCII 覆盖层（按 alpha）

  // ── 近似 Bloom：对发光层做金角螺旋模糊后叠加 ──
  vec2 texel = 1.0 / uResolution;
  vec3 glow = vec3(0.0);
  for (int i = 0; i < 16; i++) {
    float fi = float(i);
    float ang = fi * 2.399963229;
    float rad = fi / 16.0;
    vec2 off = vec2(cos(ang), sin(ang)) * rad * texel * 9.0;
    glow += texture2D(tParticle, vUv + off).rgb;
    glow += texture2D(tGeometry, vUv + off).rgb;
    glow += texture2D(tAfterimage, vUv + off).rgb;
  }
  glow /= 16.0;
  color += glow * uBloomStrength;

  // ── 色彩滤镜（大气色调）+ 暗角 ──
  color += uFilterColor * uMaskStrength * 0.4;
  float d = length(vUv - 0.5);
  float vig = smoothstep(0.95, 0.35, d);
  color *= mix(1.0, vig, uMaskStrength * 0.5);

  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;class Vb{quadMesh;quadMaterial;quadScene;quadCamera;constructor(){this.quadScene=new fl,this.quadCamera=new Pu(-1,1,1,-1,0,1),this.quadMaterial=new Si({uniforms:{tScene:{value:null},tAfterimage:{value:null},tParticle:{value:null},tAscii:{value:null},tGeometry:{value:null},uBloomStrength:{value:.8},uFilterColor:{value:new yt("#0a0a1a")},uMaskStrength:{value:.4},uResolution:{value:new Et(1,1)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:zb,depthTest:!1,depthWrite:!1});const e=new eo(2,2);this.quadMesh=new si(e,this.quadMaterial),this.quadMesh.frustumCulled=!1,this.quadScene.add(this.quadMesh)}update(e){this.quadMaterial.uniforms.uBloomStrength.value=e.store.composite.bloomStrength,this.quadMaterial.uniforms.uFilterColor.value.set(e.store.composite.filterColor),this.quadMaterial.uniforms.uMaskStrength.value=e.store.composite.maskStrength,this.quadMaterial.uniforms.uResolution.value.set(e.width,e.height),e.renderTargets.afterimage&&(this.quadMaterial.uniforms.tAfterimage.value=e.renderTargets.afterimage.texture),e.renderTargets.particle&&(this.quadMaterial.uniforms.tParticle.value=e.renderTargets.particle.texture),e.renderTargets.ascii&&(this.quadMaterial.uniforms.tAscii.value=e.renderTargets.ascii.texture),e.renderTargets.geometry&&(this.quadMaterial.uniforms.tGeometry.value=e.renderTargets.geometry.texture)}render(e){e.renderTargets.scene||(e.renderTargets.scene=new rr(e.width,e.height,{minFilter:Zt,magFilter:Zt,format:Nn,type:xi}));const r=e.renderTargets.scene;r.setSize(e.width,e.height),e.renderer.setRenderTarget(r),e.renderer.clear(),e.renderer.render(e.scene,e.camera),e.renderer.setRenderTarget(null),this.quadMaterial.uniforms.tScene.value=r.texture,e.renderer.clear(),e.renderer.render(this.quadScene,this.quadCamera)}dispose(){this.quadMesh.geometry.dispose(),this.quadMaterial.dispose()}}function Hb(){const t=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm;codecs=vp9","video/webm"];for(const e of t)if(typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(e))return e;return"video/webm"}class Gb{mediaRecorder=null;chunks=[];recording=!1;constructor(){}update(e){}render(e){}get isRecording(){return this.recording}startRecording(e,n,r){if(this.recording)return;const o=r?.fps??30,a=e.captureStream(o);if(n){const f=n;try{const v=(f.captureStream??f.mozCaptureStream)?.call(f)?.getAudioTracks()[0];v&&a.addTrack(v)}catch(d){console.warn("[CHRONO-MORPH] 音轨捕获失败，导出无声:",d)}}const u=r?.mimeType??Hb();this.chunks=[],this.mediaRecorder=new MediaRecorder(a,{mimeType:u,videoBitsPerSecond:r?.bitrate??8e6}),this.mediaRecorder.ondataavailable=f=>{f.data.size>0&&this.chunks.push(f.data)},this.mediaRecorder.start(100),this.recording=!0}stopRecording(){return new Promise(e=>{if(!this.mediaRecorder||!this.recording){e(null);return}const n=this.mediaRecorder.mimeType||"video/webm";this.mediaRecorder.onstop=()=>{const r=new Blob(this.chunks,{type:n});this.chunks=[],this.recording=!1,e(r)},this.mediaRecorder.stop()})}async stopAndDownload(e="chrono-morph.webm"){const n=await this.stopRecording();if(!n)return;const r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=e,o.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}captureScreenshot(e){try{return e.toDataURL("image/png")}catch(n){return console.warn("[CHRONO-MORPH] 截图失败:",n),null}}dispose(){if(this.recording&&this.mediaRecorder)try{this.mediaRecorder.stop()}catch{}this.recording=!1,this.mediaRecorder=null,this.chunks=[]}}class Wb{container;renderer;scene;camera;clock=new DC;frameCount=0;animationId=null;disposed=!1;videoElement=null;videoTexture=null;passes=[];videoLayer;poseTracker;motionField;audioAnalyzer;particleSystem;afterimagePass;skeletonLines;asciiPass;geometryPhantom;compositePass;exporter;renderTargets={};shared={};poseLandmarks=null;posePresent=!1;motionData=null;audioBass=0;audioSpectrum=null;constructor(e){this.container=e}init(){const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.renderer=new SC({antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.renderer.autoClear=!1,this.container.appendChild(this.renderer.domElement),this.scene=new fl;const r=e/n,o=2;this.camera=new Pu(-o*r/2,o*r/2,o/2,-o/2,.1,100),this.camera.position.z=10,this.setupVideo(),this.videoLayer=new BC(this.renderer,this.scene,this.camera),this.poseTracker=new Tb,this.motionField=new Ab,this.audioAnalyzer=new Cb,this.particleSystem=new Pb,this.afterimagePass=new Ib,this.skeletonLines=new Nb,this.asciiPass=new kb,this.geometryPhantom=new Bb,this.compositePass=new Vb,this.exporter=new Gb,this.passes=[this.videoLayer,this.poseTracker,this.motionField,this.audioAnalyzer,this.particleSystem,this.afterimagePass,this.skeletonLines,this.asciiPass,this.geometryPhantom,this.compositePass],window.addEventListener("resize",this.onResize),this.clock.start(),this.loop()}setupVideo(){const e=tr.getState();this.videoElement=document.createElement("video"),this.videoElement.src=e.videoSrc,this.videoElement.crossOrigin="anonymous",this.videoElement.loop=!0,this.videoElement.muted=!0,this.videoElement.playsInline=!0,this.videoElement.preload="auto",this.videoElement.addEventListener("loadedmetadata",()=>{this.videoElement&&(tr.getState().setDuration(this.videoElement.duration),this.videoTexture=new CC(this.videoElement),this.videoTexture.minFilter=Zt,this.videoTexture.magFilter=Zt,this.videoTexture.format=Nn,this.videoTexture.colorSpace=Ii,this.videoElement.play().then(()=>{tr.getState().setPlaying(!0)}).catch(()=>{console.warn("[CHRONO-MORPH] Autoplay blocked. Click to play.")}))}),this.videoElement.addEventListener("timeupdate",()=>{this.videoElement&&tr.getState().setCurrentTime(this.videoElement.currentTime)}),this.videoElement.load()}onResize=()=>{const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight,r=e/n,o=2;this.renderer.setSize(e,n),this.camera.left=-o*r/2,this.camera.right=o*r/2,this.camera.top=o/2,this.camera.bottom=-o/2,this.camera.updateProjectionMatrix()};loop=()=>{if(this.disposed)return;this.animationId=requestAnimationFrame(this.loop);const e=this.clock.getDelta(),n=this.clock.getElapsedTime();this.frameCount++;const r={renderer:this.renderer,scene:this.scene,camera:this.camera,width:this.container.clientWidth||window.innerWidth,height:this.container.clientHeight||window.innerHeight,deltaTime:e,elapsedTime:n,frameCount:this.frameCount,videoTexture:this.videoTexture,videoElement:this.videoElement,poseLandmarks:this.poseLandmarks,posePresent:this.posePresent,motionData:this.motionData,audioBass:this.audioBass,audioSpectrum:this.audioSpectrum,store:tr.getState(),renderTargets:this.renderTargets,shared:this.shared};this.renderer.clear();for(const o of this.passes)o.update&&o.update(r);for(const o of this.passes)o.render&&o.render(r);r.shared.poseLandmarks!==void 0&&(this.poseLandmarks=r.shared.poseLandmarks),r.shared.posePresent!==void 0&&(this.posePresent=r.shared.posePresent),r.shared.motionData!==void 0&&(this.motionData=r.shared.motionData),r.shared.audioBass!==void 0&&(this.audioBass=r.shared.audioBass),r.shared.audioSpectrum!==void 0&&(this.audioSpectrum=r.shared.audioSpectrum)};play(){this.videoElement?.play(),tr.getState().setPlaying(!0)}pause(){this.videoElement?.pause(),tr.getState().setPlaying(!1)}togglePlay(){this.videoElement?.paused?this.play():this.pause()}getVideoElement(){return this.videoElement}getRenderer(){return this.renderer}getExporter(){return this.exporter}dispose(){this.disposed=!0,this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onResize);for(const e of this.passes)e.dispose&&e.dispose();this.exporter.dispose&&this.exporter.dispose();for(const e of Object.keys(this.renderTargets))this.renderTargets[e].dispose();this.videoElement&&(this.videoElement.pause(),this.videoElement.src="",this.videoElement.load()),this.videoTexture&&this.videoTexture.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}function ii({label:t,value:e,min:n,max:r,step:o=.01,accent:a="#00fff2",onChange:u}){const f=r>n?(e-n)/(r-n)*100:0;return we.jsxs("label",{className:"block select-none",children:[we.jsxs("div",{className:"flex items-center justify-between mb-1",children:[we.jsx("span",{className:"font-mono text-[10px] uppercase tracking-wider text-cyber-muted",children:t}),we.jsx("span",{className:"font-mono text-[10px] text-cyber-text tabular-nums",children:Number.isInteger(o)?e.toFixed(0):e.toFixed(2)})]}),we.jsx("input",{type:"range",min:n,max:r,step:o,value:e,onChange:d=>u(parseFloat(d.target.value)),className:"chrono-slider w-full",style:{background:`linear-gradient(to right, ${a} 0%, ${a} ${f}%, #1e1e2e ${f}%, #1e1e2e 100%)`}})]})}function Ua({label:t,value:e,onChange:n}){return we.jsxs("label",{className:"flex items-center justify-between gap-2 select-none",children:[we.jsx("span",{className:"font-mono text-[10px] uppercase tracking-wider text-cyber-muted",children:t}),we.jsxs("div",{className:"flex items-center gap-2",children:[we.jsx("span",{className:"font-mono text-[10px] text-cyber-text tabular-nums",children:e}),we.jsxs("div",{className:"relative w-6 h-6 rounded border border-cyber-border overflow-hidden",style:{boxShadow:`0 0 6px ${e}66`},children:[we.jsx("div",{className:"absolute inset-0",style:{backgroundColor:e}}),we.jsx("input",{type:"color",value:e,onChange:r=>n(r.target.value),className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"})]})]})]})}function Bp({label:t,checked:e,accent:n="#00fff2",onChange:r}){return we.jsxs("button",{type:"button",onClick:()=>r(!e),className:"flex items-center justify-between w-full select-none group",children:[we.jsx("span",{className:"font-mono text-[10px] uppercase tracking-wider text-cyber-muted group-hover:text-cyber-text transition-colors",children:t}),we.jsx("span",{className:"relative w-9 h-4 rounded-full transition-colors duration-200 border",style:{backgroundColor:e?`${n}33`:"#1e1e2e",borderColor:e?n:"#1e1e2e",boxShadow:e?`0 0 6px ${n}66`:"none"},children:we.jsx("span",{className:"absolute top-0.5 w-3 h-3 rounded-full transition-all duration-200",style:{left:e?"18px":"2px",backgroundColor:e?n:"#64748b"}})})]})}function Xb(){const t=tr(f=>f.presets),e=tr(f=>f.savePreset),n=tr(f=>f.applyPreset),r=tr(f=>f.deletePreset),[o,a]=as.useState(""),u=()=>{const f=o.trim();f&&(e(f),a(""))};return we.jsxs("div",{className:"space-y-2",children:[we.jsxs("div",{className:"flex gap-1.5",children:[we.jsx("input",{type:"text",value:o,placeholder:"preset name…",onChange:f=>a(f.target.value),onKeyDown:f=>f.key==="Enter"&&u(),className:"flex-1 min-w-0 bg-cyber-bg border border-cyber-border rounded px-2 py-1 font-mono text-[10px] text-cyber-text placeholder:text-cyber-muted focus:outline-none focus:border-cyber-cyan"}),we.jsx("button",{type:"button",onClick:u,className:"px-2 py-1 rounded border border-cyber-cyan/60 font-mono text-[10px] uppercase tracking-wider text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors",children:"Save"})]}),we.jsx("div",{className:"flex flex-wrap gap-1.5",children:t.map(f=>we.jsxs("div",{className:"group flex items-center gap-1 rounded border border-cyber-border bg-cyber-bg/60 pl-2 pr-1 py-0.5 hover:border-cyber-magenta/60 transition-colors",children:[we.jsx("button",{type:"button",onClick:()=>n(f.id),className:"font-mono text-[10px] text-cyber-text hover:text-cyber-magenta transition-colors",children:f.name}),f.timestamp!==0&&we.jsx("button",{type:"button",onClick:()=>r(f.id),className:"font-mono text-[10px] text-cyber-muted hover:text-cyber-magenta leading-none",title:"delete",children:"×"})]},f.id))})]})}function Ws({title:t,accent:e="#00fff2",children:n,defaultOpen:r=!0}){const[o,a]=as.useState(r);return we.jsxs("div",{className:"border border-cyber-border rounded-md bg-cyber-bg/40 overflow-hidden",children:[we.jsxs("button",{type:"button",onClick:()=>a(u=>!u),className:"flex items-center justify-between w-full px-3 py-2 hover:bg-cyber-surface/60 transition-colors",children:[we.jsx("span",{className:"font-display text-[11px] tracking-widest uppercase",style:{color:e},children:t}),we.jsx("span",{className:"font-mono text-[10px] text-cyber-muted",children:o?"−":"+"})]}),o&&we.jsx("div",{className:"px-3 pb-3 pt-1 space-y-2.5",children:n})]})}function $2(t){if(!Number.isFinite(t))return"0:00";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}function jb({rendererRef:t}){const e=tr(),n=e.set,[r,o]=as.useState(!1),[a,u]=as.useState(!1),f=(p,_)=>{n({[p]:{...e[p],..._}})},d=p=>{const _=p.target.files?.[0];if(!_)return;const S=URL.createObjectURL(_),M=t.current?.getVideoElement();M&&(M.pause(),M.src=S,M.load()),e.setVideoSrc(S)},m=async()=>{const p=t.current;if(!p)return;const _=p.getExporter();r?(o(!1),await _.stopAndDownload(`chrono-morph-${Date.now()}.webm`)):(_.startRecording(p.getRenderer().domElement,p.getVideoElement(),{fps:30}),o(!0))},v=()=>{const p=t.current;if(!p)return;const _=p.getExporter().captureScreenshot(p.getRenderer().domElement);if(!_)return;const S=document.createElement("a");S.href=_,S.download=`chrono-morph-${Date.now()}.png`,S.click()};return a?we.jsx("button",{type:"button",onClick:()=>u(!1),className:"absolute top-4 right-4 z-20 px-3 py-2 rounded-md border border-cyber-cyan/60 bg-cyber-surface/80 backdrop-blur-sm font-display text-[11px] tracking-widest uppercase text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors",children:"⚙ Panel"}):we.jsxs("div",{className:"absolute top-4 right-4 z-20 w-[300px] max-h-[calc(100%-2rem)] flex flex-col rounded-lg border border-cyber-border bg-cyber-surface/85 backdrop-blur-md shadow-neon-cyan/20 overflow-hidden",children:[we.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-cyber-border",children:[we.jsxs("div",{children:[we.jsx("h1",{className:"font-display text-sm tracking-widest text-cyber-cyan",children:"CHRONO-MORPH"}),we.jsx("p",{className:"font-mono text-[9px] text-cyber-muted",children:"ULTIMATE // v1.0"})]}),we.jsx("button",{type:"button",onClick:()=>u(!0),className:"font-mono text-xs text-cyber-muted hover:text-cyber-cyan",children:"▸"})]}),we.jsxs("div",{className:"px-3 py-2 border-b border-cyber-border space-y-2",children:[we.jsxs("div",{className:"flex items-center gap-2",children:[we.jsx("button",{type:"button",onClick:()=>t.current?.togglePlay(),className:"px-3 py-1.5 rounded border border-cyber-cyan/60 font-mono text-[10px] uppercase tracking-wider text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors",children:e.isPlaying?"❚❚ Pause":"▶ Play"}),we.jsxs("span",{className:"font-mono text-[10px] text-cyber-muted tabular-nums",children:[$2(e.currentTime)," / ",$2(e.duration)]})]}),we.jsxs("div",{className:"flex items-center gap-1.5",children:[we.jsxs("label",{className:"flex-1 px-2 py-1.5 rounded border border-cyber-border font-mono text-[10px] uppercase tracking-wider text-cyber-muted hover:border-cyber-cyan hover:text-cyber-cyan transition-colors cursor-pointer text-center",children:["⬆ Video",we.jsx("input",{type:"file",accept:"video/*",onChange:d,className:"hidden"})]}),we.jsx("button",{type:"button",onClick:m,className:"flex-1 px-2 py-1.5 rounded border font-mono text-[10px] uppercase tracking-wider transition-colors",style:{borderColor:r?"#ff00e5":"#1e1e2e",color:r?"#ff00e5":"#64748b",boxShadow:r?"0 0 8px #ff00e566":"none"},children:r?"⏹ Stop":"● Rec"}),we.jsx("button",{type:"button",onClick:v,className:"px-2 py-1.5 rounded border border-cyber-border font-mono text-[10px] uppercase tracking-wider text-cyber-muted hover:border-cyber-cyan hover:text-cyber-cyan transition-colors",title:"screenshot",children:"◉"})]})]}),we.jsxs("div",{className:"flex-1 overflow-y-auto px-3 py-3 space-y-2.5 chrono-scroll",children:[we.jsxs(Ws,{title:"Global",children:[we.jsx(ii,{label:"Video Alpha",value:e.videoAlpha,min:0,max:1,onChange:p=>n({videoAlpha:p})}),we.jsx(ii,{label:"Bass Gain",value:e.audioBassGain,min:0,max:3,accent:"#f59e0b",onChange:p=>n({audioBassGain:p})}),we.jsxs("div",{className:"flex items-center justify-between",children:[we.jsx("span",{className:"font-mono text-[10px] uppercase tracking-wider text-cyber-muted",children:"Quality"}),we.jsx("div",{className:"flex gap-1",children:["low","medium","high"].map(p=>we.jsx("button",{type:"button",onClick:()=>n({quality:p}),className:"px-2 py-0.5 rounded font-mono text-[9px] uppercase border transition-colors",style:{borderColor:e.quality===p?"#00fff2":"#1e1e2e",color:e.quality===p?"#00fff2":"#64748b"},children:p},p))})]})]}),we.jsxs(Ws,{title:"Afterimage",accent:"#00fff2",children:[we.jsx(ii,{label:"Fade",value:e.afterimage.fade,min:0,max:1,onChange:p=>f("afterimage",{fade:p})}),we.jsx(ii,{label:"Sensitivity",value:e.afterimage.sensitivity,min:0,max:1,onChange:p=>f("afterimage",{sensitivity:p})}),we.jsx(Ua,{label:"Tint",value:e.afterimage.color,onChange:p=>f("afterimage",{color:p})})]}),we.jsxs(Ws,{title:"Skeleton",accent:"#ff00e5",children:[we.jsx(Bp,{label:"Enabled",accent:"#ff00e5",checked:e.skeleton.enabled,onChange:p=>f("skeleton",{enabled:p})}),we.jsx(ii,{label:"Grid Density",value:e.skeleton.gridDensity,min:0,max:30,step:1,accent:"#ff00e5",onChange:p=>f("skeleton",{gridDensity:p})}),we.jsx(ii,{label:"Link Distance",value:e.skeleton.linkDistance,min:0,max:1,accent:"#ff00e5",onChange:p=>f("skeleton",{linkDistance:p})}),we.jsx(Ua,{label:"Color",value:e.skeleton.color,onChange:p=>f("skeleton",{color:p})})]}),we.jsxs(Ws,{title:"Particles",accent:"#00fff2",defaultOpen:!1,children:[we.jsx(ii,{label:"Emission Rate",value:e.particle.emissionRate,min:0,max:800,step:1,onChange:p=>f("particle",{emissionRate:p})}),we.jsx(ii,{label:"Size",value:e.particle.size,min:.5,max:8,step:.1,onChange:p=>f("particle",{size:p})}),we.jsx(ii,{label:"Gravity",value:e.particle.gravity,min:-2,max:2,step:.05,onChange:p=>f("particle",{gravity:p})}),we.jsx(ii,{label:"Max Count",value:e.particle.maxCount,min:500,max:2e4,step:100,onChange:p=>f("particle",{maxCount:p})}),we.jsx(Ua,{label:"Color",value:e.particle.color,onChange:p=>f("particle",{color:p})})]}),we.jsxs(Ws,{title:"ASCII",accent:"#00fff2",defaultOpen:!1,children:[we.jsx(Bp,{label:"Enabled",checked:e.ascii.enabled,onChange:p=>f("ascii",{enabled:p})}),we.jsx(ii,{label:"Density",value:e.ascii.density,min:16,max:120,step:1,onChange:p=>f("ascii",{density:p})}),we.jsx(Ua,{label:"Color",value:e.ascii.color,onChange:p=>f("ascii",{color:p})})]}),we.jsxs(Ws,{title:"Geometry",accent:"#8b5cf6",defaultOpen:!1,children:[we.jsx(Bp,{label:"Enabled",accent:"#8b5cf6",checked:e.geometry.enabled,onChange:p=>f("geometry",{enabled:p})}),we.jsx(ii,{label:"Size",value:e.geometry.size,min:.2,max:3,step:.05,accent:"#8b5cf6",onChange:p=>f("geometry",{size:p})}),we.jsx(ii,{label:"Mask Strength",value:e.geometry.maskStrength,min:0,max:1,accent:"#8b5cf6",onChange:p=>f("geometry",{maskStrength:p})}),we.jsx(Ua,{label:"Filter",value:e.geometry.filterColor,onChange:p=>f("geometry",{filterColor:p})})]}),we.jsxs(Ws,{title:"Composite",accent:"#f59e0b",defaultOpen:!1,children:[we.jsx(ii,{label:"Bloom",value:e.composite.bloomStrength,min:0,max:2,accent:"#f59e0b",onChange:p=>f("composite",{bloomStrength:p})}),we.jsx(ii,{label:"Mask Strength",value:e.composite.maskStrength,min:0,max:1,accent:"#f59e0b",onChange:p=>f("composite",{maskStrength:p})}),we.jsx(Ua,{label:"Filter",value:e.composite.filterColor,onChange:p=>f("composite",{filterColor:p})})]}),we.jsx(Ws,{title:"Presets",accent:"#ff00e5",children:we.jsx(Xb,{})})]})]})}function qb(){const t=as.useRef(null),e=as.useRef(null),[n,r]=as.useState(!1);return as.useEffect(()=>{if(!t.current)return;const o=new Wb(t.current);return e.current=o,o.init(),r(!0),()=>{o.dispose(),e.current=null}},[]),we.jsxs("div",{className:"relative w-full h-full bg-cyber-bg overflow-hidden",children:[we.jsx("div",{ref:t,className:"absolute inset-0 z-0"}),n&&we.jsx(jb,{rendererRef:e})]})}yM.createRoot(document.getElementById("root")).render(we.jsx(fu.StrictMode,{children:we.jsx(qb,{})}));
//# sourceMappingURL=index-fe048XSH.js.map
