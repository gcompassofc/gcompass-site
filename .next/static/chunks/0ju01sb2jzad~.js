(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,453299,e=>{"use strict";let t,i;var a,s,r,n,o,l,d,u,h,c,m,p,v,b,g,E,f,A,y,w,k,I,T,_,M,S,L,C,x,R,D,N,P,U,O,W,H,$,B,V,q,G,F,Q,Z,j,K,z,Y,X,J,ee,et,ei,ea,es,er,en,eo,el,ed,eu,eh,ec,em,ep,ev,eb,eg,eE,ef,eA,ey,ew,ek,eI,eT,e_,eM,eS,eL,eC,ex,eR,eD,eN,eP,eU,eO,eW,eH,e$,eB,eV,eq,eG,eF,eQ,eZ,ej,eK,ez,eY,eX,eJ,e0,e1,e2,e3,e5,e4,e7,e8,e9,e6,te,tt,ti,ta,ts,tr,tn,to,tl,td,tu,th,tc,tm,tp,tv,tb,tg,tE,tf,tA,ty,tw,tk,tI,tT,t_,tM,tS,tL,tC,tx,tR,tD,tN,tP,tU,tO,tW,tH,t$,tB,tV,tq,tG,tF,tQ,tZ,tj,tK,tz,tY,tX,tJ,t0,t1,t2,t3,t5,t4,t7,t8,t9,t6,ie,it,ii,ia,is,ir,io,il,id,iu,ih,ic,im,ip,iv,ib,ig,iE,iA,iy,iw,ik,iI,iT,i_,iM,iS,iL,iC,ix,iR,iD,iN,iP,iU,iO,iW,iH,i$,iB,iV,iq,iG,iF,iQ,iZ,ij,iK,iz,iY,iX,iJ,i0,i1=e.i(843476),i2=e.i(500932);let i3={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},i5={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},i4={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},i7=Object.entries(i4),i8=i7.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),i9=i7.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),i6=Object.entries(i9).reduce((e,[t,i])=>{let a=i8[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"}),ae=Object.entries(i8).reduce((e,[t,i])=>{let a=i9[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),at={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},ai={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},aa={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},as={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ar={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},an={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};function ao(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function al(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function ad(e){if(e){let{id:t,kind:i,language:a,label:s}=e;return[t,i,a,s].filter(e=>null!=e).join(":")}}function au(e){if(e){let[t,i,a,s]=e.split(":");return{id:t,kind:i,language:a,label:s}}}function ah(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function ac(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}e.s(["AttributeToStateChangeEventMap",0,ae,"AvailabilityStates",0,as,"MediaStateChangeEvents",0,i9,"MediaStateReceiverAttributes",0,i5,"MediaUIAttributes",0,i8,"MediaUIEvents",0,i3,"MediaUIProps",0,i4,"PointerTypes",0,aa,"ReadyStates",0,{HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},"StateChangeEventToAttributeMap",0,i6,"StreamTypes",0,ar,"TextTrackKinds",0,at,"TextTrackModes",0,ai,"VolumeLevels",0,{HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},"WebkitPresentationModes",0,an],623204),e.i(623204);let am=e=>new Promise(t=>setTimeout(t,e)),ap=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],av=e=>{if(!ah(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),s=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?ap[t].singular:ap[t].plural,`${e} ${i}`)}).filter(e=>e).join(", ");return`${s}${i?" remaining":""}`};function ab(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),s=Math.floor(e/60%60),r=Math.floor(e/3600),n=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(r=s=a="0"),s=(((r=r>0||o>0?r+":":"")||n>=10)&&s<10?"0"+s:s)+":",(i?"-":"")+r+s+(a=a<10?"0"+a:a)}let ag=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});e.s(["emptyTimeRanges",0,ag,"formatAsTimePhrase",0,av,"formatTime",0,ab,"serializeTimeRanges",0,function(e=ag){return Array.from(e).map((t,i)=>[Number(e.start(i).toFixed(3)),Number(e.end(i).toFixed(3))].join(":")).join(" ")}],246686),e.i(246686);let aE={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},af=(null==(a=globalThis.navigator)?void 0:a.language)||"en",aA=(e,t={})=>(e=>{var t,i,a;let[s]=af.split("-");return(null==(t=aE[af])?void 0:t[e])||(null==(i=aE[s])?void 0:i[e])||(null==(a=aE.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class ay{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class aw extends ay{}class ak extends aw{constructor(){super(...arguments),this.role=null}}let aI={createElement:function(){return new aT.HTMLElement},createElementNS:function(){return new aT.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},aT={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:aI,Node:aw,Element:ak,HTMLElement:class extends ak{constructor(){super(...arguments),this.innerHTML=""}get content(){return new aT.DocumentFragment}},DocumentFragment:class extends ay{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},a_="u"<typeof window||void 0===window.customElements,aM=Object.keys(aT).every(e=>e in globalThis),aS=a_&&!aM?aT:globalThis,aL=a_&&!aM?aI:globalThis.document,aC=new WeakMap,ax=e=>{let t=aC.get(e);return t||aC.set(e,t=new Set),t},aR=new aS.ResizeObserver(e=>{for(let t of e)for(let e of ax(t.target))e(t)});function aD(e,t){ax(e).add(t),aR.observe(e)}function aN(e,t){let i=ax(e);i.delete(t),i.size||aR.unobserve(e)}function aP(e){let t={};for(let i of e)t[i.name]=i.value;return t}function aU(e){var t;return null!=(t=aO(e))?t:aB(e,"media-controller")}function aO(e){var t;let{MEDIA_CONTROLLER:i}=i5,a=e.getAttribute(i);if(a)return null==(t=aq(e))?void 0:t.getElementById(a)}let aW=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},aH=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},a$=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||a$(e,t.getRootNode().host)),aB=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||aB(e.getRootNode().host,t)};function aV(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=aV(i.shadowRoot))?t:i:null}function aq(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function aG(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let s=e;for(;s&&t>0;){let e=getComputedStyle(s);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;s=s.parentElement,t--}return!0}function aF(e,t){let i=function(e,t){var i,a;let s;for(s of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=s.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||aQ(e,t)}function aQ(e,t){var i,a;let s=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],r=null==s?void 0:s[s.length-1];return(null==r?void 0:r.sheet)?(null==r||r.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length),null==(a=r.sheet.cssRules)?void 0:a[r.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function aZ(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function aj(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}aZ(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function aK(e,t){return e.hasAttribute(t)}function az(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}aK(e,t)!=i&&e.toggleAttribute(t,i)}function aY(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function aX(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;aY(e,t,void 0)!==a&&e.setAttribute(t,a)}var aJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a0=(e,t,i)=>(aJ(e,t,"read from private field"),i?i.call(e):t.get(e)),a1=(e,t,i,a)=>(aJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class a2 extends aS.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,s,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i5.MEDIA_CONTROLLER,i8.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===i5.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=a0(this,s))?void 0:a.unassociateElement)||r.call(a,this),a1(this,s,null)),i&&this.isConnected&&(a1(this,s,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=a0(this,s))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a,r,n;let o;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),a1(this,s,(r=this,(o=r.getAttribute(i5.MEDIA_CONTROLLER))?null==(n=r.getRootNode())?void 0:n.getElementById(o):aB(r,"media-controller"))),this.getAttribute(i5.MEDIA_CONTROLLER)&&(null==(t=null==(e=a0(this,s))?void 0:e.associateElement)||t.call(e,this)),null==(i=a0(this,s))||i.addEventListener("pointerdown",this),null==(a=a0(this,s))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(i5.MEDIA_CONTROLLER)&&(null==(t=null==(e=a0(this,s))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=a0(this,s))||i.removeEventListener("pointerdown",this),null==(a=a0(this,s))||a.removeEventListener("click",this),a1(this,s,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:s,width:r,height:n}=this.getBoundingClientRect(),o=t-a,l=i-s;if(o<0||l<0||o>r||l>n||0===r&&0===n)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===aa.TOUCH)return void this.handleTap(e);if(d===aa.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return aK(this,i8.MEDIA_PAUSED)}set mediaPaused(e){az(this,i8.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?i3.MEDIA_PLAY_REQUEST:i3.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aS.CustomEvent(t,{composed:!0,bubbles:!0}))}}s=new WeakMap,a2.shadowRootOptions={mode:"open"},a2.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},aS.customElements.get("media-gesture-receiver")||aS.customElements.define("media-gesture-receiver",a2);var a3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a5=(e,t,i)=>(a3(e,t,"read from private field"),i?i.call(e):t.get(e)),a4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a7=(e,t,i,a)=>(a3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a8=(e,t,i)=>(a3(e,t,"access private method"),i);let a9="audio",a6="autohide",se="breakpoints",st="gesturesdisabled",si="keyboardcontrol",sa="noautohide",ss="userinactive",sr="autohideovercontrols",sn=Object.values(i8);function so(e,t){var i,a,s;if(!e.isConnected)return;let r=Object.fromEntries((null!=(i=e.getAttribute(se))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),n=(a=r,s=t,Object.keys(a).filter(e=>s>=parseInt(a[e]))),o=!1;if(Object.keys(r).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(i9.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(i9.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class sl extends aS.HTMLElement{constructor(){if(super(),a4(this,u),a4(this,p),a4(this,b),a4(this,E),a4(this,A),a4(this,w),a4(this,r,0),a4(this,n,null),a4(this,o,null),a4(this,l,void 0),this.breakpointsComputed=!1,a4(this,d,new MutationObserver(a8(this,u,h).bind(this))),a4(this,c,!1),a4(this,m,e=>{a5(this,c)||(setTimeout(()=>{so(e.target,e.contentRect.width),a7(this,c,!1)},0),a7(this,c,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){a5(this,n)&&this.mediaUnsetCallback(a5(this,n));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[a6,st].concat(sn).filter(e=>![i8.MEDIA_RENDITION_LIST,i8.MEDIA_AUDIO_TRACK_LIST,i8.MEDIA_CHAPTERS_CUES,i8.MEDIA_WIDTH,i8.MEDIA_HEIGHT,i8.MEDIA_ERROR,i8.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==a6&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(a7(this,n,e),e.localName.includes("-")&&await aS.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;a5(this,d).observe(this,{childList:!0,subtree:!0}),aD(this,a5(this,m));let t=null!=this.getAttribute(a9)?aA("audio player"):aA("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(ss,""),so(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=aS.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;a5(this,d).disconnect(),aN(this,a5(this,m)),this.media&&this.mediaUnsetCallback(this.media),null==(e=aS.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){a7(this,n,null)}handleEvent(e){switch(e.type){case"pointerdown":a7(this,r,e.timeStamp);break;case"pointermove":a8(this,p,v).call(this,e);break;case"pointerup":a8(this,b,g).call(this,e);break;case"mouseleave":a8(this,E,f).call(this);break;case"mouseup":this.removeAttribute(si);break;case"keyup":a8(this,w,k).call(this),this.setAttribute(si,"")}}set autohide(e){let t=Number(e);a7(this,l,isNaN(t)?0:t)}get autohide(){return(void 0===a5(this,l)?2:a5(this,l)).toString()}get breakpoints(){return aY(this,se)}set breakpoints(e){aX(this,se,e)}get audio(){return aK(this,a9)}set audio(e){az(this,a9,e)}get gesturesDisabled(){return aK(this,st)}set gesturesDisabled(e){az(this,st,e)}get keyboardControl(){return aK(this,si)}set keyboardControl(e){az(this,si,e)}get noAutohide(){return aK(this,sa)}set noAutohide(e){az(this,sa,e)}get autohideOverControls(){return aK(this,sr)}set autohideOverControls(e){az(this,sr,e)}get userInteractive(){return aK(this,ss)}set userInteractive(e){az(this,ss,e)}}r=new WeakMap,n=new WeakMap,o=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakSet,h=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},c=new WeakMap,m=new WeakMap,p=new WeakSet,v=function(e){if("mouse"!==e.pointerType&&e.timeStamp-a5(this,r)<250)return;a8(this,A,y).call(this),clearTimeout(a5(this,o));let t=this.hasAttribute(sr);([this,this.media].includes(e.target)||t)&&a8(this,w,k).call(this)},b=new WeakSet,g=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(ss);[this,this.media].includes(e.target)&&t?a8(this,E,f).call(this):a8(this,w,k).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&a8(this,w,k).call(this)},E=new WeakSet,f=function(){if(0>a5(this,l)||this.hasAttribute(ss))return;this.setAttribute(ss,"");let e=new aS.CustomEvent(i9.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},A=new WeakSet,y=function(){if(!this.hasAttribute(ss))return;this.removeAttribute(ss);let e=new aS.CustomEvent(i9.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},w=new WeakSet,k=function(){a8(this,A,y).call(this),clearTimeout(a5(this,o));let e=parseInt(this.autohide);e<0||a7(this,o,setTimeout(()=>{a8(this,E,f).call(this)},1e3*e))},sl.shadowRootOptions={mode:"open"},sl.getTemplateHTML=function(e){return`
    <style>
      
      :host([${i8.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${a9}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${a9}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${a9}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${a9}])[${st}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${a9}])[${st}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${a9}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${a9}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${a9}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${a9}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${sa}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${ss}]:not([${i8.MEDIA_PAUSED}]):not([${i8.MEDIA_IS_AIRPLAYING}]):not([${i8.MEDIA_IS_CASTING}]):not([${a9}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${sa}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${ss}]:not([${sa}]):not([${i8.MEDIA_PAUSED}]):not([${i8.MEDIA_IS_CASTING}]):not([${a9}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${ss}][${sr}]:not([${sa}]):not([${i8.MEDIA_PAUSED}]):not([${i8.MEDIA_IS_CASTING}]):not([${a9}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${a9}])[${i8.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${a2.shadowRootOptions.mode}">
          ${a2.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},aS.customElements.get("media-container")||aS.customElements.define("media-container",sl);var sd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},su=(e,t,i)=>(sd(e,t,"read from private field"),i?i.call(e):t.get(e)),sh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sc=(e,t,i,a)=>(sd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sm{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){sh(this,S),sh(this,I,void 0),sh(this,T,void 0),sh(this,_,void 0),sh(this,M,new Set),sc(this,I,e),sc(this,T,t),sc(this,_,new Set(i))}[Symbol.iterator](){return su(this,S,L).values()}get length(){return su(this,S,L).size}get value(){var e;return null!=(e=[...su(this,S,L)].join(" "))?e:""}set value(e){var t;e!==this.value&&(sc(this,M,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...su(this,S,L)][e]}values(){return su(this,S,L).values()}forEach(e,t){su(this,S,L).forEach(e,t)}add(...e){var t,i;e.forEach(e=>su(this,M).add(e)),(""!==this.value||(null==(t=su(this,I))?void 0:t.hasAttribute(`${su(this,T)}`)))&&(null==(i=su(this,I))||i.setAttribute(`${su(this,T)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>su(this,M).delete(e)),null==(t=su(this,I))||t.setAttribute(`${su(this,T)}`,`${this.value}`)}contains(e){return su(this,S,L).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}I=new WeakMap,T=new WeakMap,_=new WeakMap,M=new WeakMap,S=new WeakSet,L=function(){return su(this,M).size?su(this,M):su(this,_)};let sp=(e="")=>{let[t,i,a]=e.split(":"),s=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?at.CAPTIONS:at.SUBTITLES,language:i,label:s}},sv=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=sp(e);return{...t,...i}}),sb=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?sp(e):e):"string"==typeof e?sv(e):[e]:[],sg=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,sE=(e=[])=>Array.prototype.map.call(e,sg).join(" "),sf=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},sA=(e,t=[],i=[])=>{let a=sb(i).map(sf);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},sy=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:sf(t);return Array.from(e.textTracks).filter(i)},sw=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(i8.MEDIA_SUBTITLES_SHOWING)},sk="exitFullscreen"in aL?"exitFullscreen":"webkitExitFullscreen"in aL?"webkitExitFullscreen":"webkitCancelFullScreen"in aL?"webkitCancelFullScreen":void 0,sI="fullscreenElement"in aL?"fullscreenElement":"webkitFullscreenElement"in aL?"webkitFullscreenElement":void 0,sT="fullscreenEnabled"in aL?"fullscreenEnabled":"webkitFullscreenEnabled"in aL?"webkitFullscreenEnabled":void 0,s_=()=>{var e;return t||(t=null==(e=null==aL?void 0:aL.createElement)?void 0:e.call(aL,"video"))},sM=async(e=s_())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([sS(e,i.signal),sL(e,t)]);return i.abort(),a},sS=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),sL=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await am(10)}return e.volume!==t},sC=/.*Version\/.*Safari\/.*/.test(aS.navigator.userAgent),sx=(e=s_())=>(!aS.matchMedia("(display-mode: standalone)").matches||!sC)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),sR=(e=s_())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[sT])||i&&"webkitSupportsFullscreen"in i})({documentElement:aL,media:e}),sD=sR(),sN=sx(),sP=!!aS.WebKitPlaybackTargetAvailabilityEvent,sU=!!aS.chrome,sO=e=>sy(e.media,e=>[at.SUBTITLES,at.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),sW=e=>sy(e.media,e=>e.mode===ai.SHOWING&&[at.SUBTITLES,at.CAPTIONS].includes(e.kind)),sH=(e,t)=>{let i=sO(e),a=sW(e),s=!!a.length;if(i.length){if(!1===t||s&&!0!==t)sA(ai.DISABLED,i,a);else if(!0===t||!s&&!1!==t){let t=i[0],{options:s}=e;if(!(null==s?void 0:s.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,s=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));s[0]&&(t=s[0])}let{language:r,label:n,kind:o}=t;sA(ai.DISABLED,i,a),sA(ai.SHOWING,i,[{language:r,label:n,kind:o}])}}},s$=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?sB(e,t):Object.entries(e).every(([e,i])=>e in t&&s$(i,t[e])))),sB=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>s$(e,t[i])))},sV=Object.values(ar),sq=sM().then(e=>i=e),sG=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof aS.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=aS.customElements.get(t);i&&e instanceof i||(await aS.customElements.whenDefined(t),aS.customElements.upgrade(e))}))},sF=new aS.DOMParser,sQ={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:s}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==s?void 0:s.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{aS.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===aS.localStorage.getItem("media-chrome-pref-muted");sQ.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?aS.localStorage.removeItem("media-chrome-pref-volume"):aS.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=aS.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;sQ.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&ah(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),s=i.seekable.end(i.seekable.length-1);if(a||s)return[Number(a.toFixed(3)),Number(s.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[ar.LIVE,ar.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:s}=t;if(sV.includes(s))return s===ar.UNKNOWN?a:s;let r=t.duration;return r===1/0?ar.LIVE:Number.isFinite(r)?ar.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=sQ.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===ar.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(sQ.mediaStreamType.get(e)!==ar.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let s=a.end(a.length-1)-i;return t.currentTime>=s},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>sO(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>sW(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:s,options:r}=t;if(!s)return;let n=e=>{var i;r.defaultSubtitles&&(e&&![at.CAPTIONS,at.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||sH(t,!0))};return s.addEventListener("loadstart",n),null==(i=s.textTracks)||i.addEventListener("addtrack",n),null==(a=s.textTracks)||a.addEventListener("removetrack",n),()=>{var e,t;s.removeEventListener("loadstart",n),null==(e=s.textTracks)||e.removeEventListener("addtrack",n),null==(t=s.textTracks)||t.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=sy(i,{kind:at.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&sF.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let s=a.querySelector('track[kind="chapters"][default][src]'),r=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==s||s.addEventListener("load",e),null==r||r.addEventListener("load",e),()=>{null==s||s.removeEventListener("load",e),null==r||r.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:s}=e;if(!a||!s||!s.pictureInPictureElement)return!1;if(s.pictureInPictureElement===a)return!0;if(s.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&a$(a,s.pictureInPictureElement);if(s.pictureInPictureElement.localName.includes("-")){let e=s.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!aL.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else aL.pictureInPictureElement&&aL.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:s}=e;return null==(a=null==(i=null==s?void 0:s.videoRenditions)?void 0:i[null==(t=s.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:s=i}=e;if(!i||!a)return!1;let r=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[sI];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===an.FULLSCREEN?i:a})(e);if(!r)return!1;if(r===s||r===i)return!0;if(r.localName.includes("-")){let e=r.shadowRoot;if(!(sI in e))return a$(r,s);for(;null==e?void 0:e[sI];){if(e[sI]===s)return!0;e=null==(t=e[sI])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(sk){let e=null==(t=null==i?void 0:i[sk])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:s}=t;if(s&&(!e||(null==(i=s.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=s.remote)?void 0:a.state)==="connected")){if("function"!=typeof s.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");s.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&aS.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!sD||!sR(t))return as.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!sN||!sx(t))return as.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===i||(null==t?void 0:t.volume)==void 0)return as.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==i&&sq.then(t=>e(t?void 0:as.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return sU&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?as.UNAVAILABLE:void 0:as.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>sP?(null==t?void 0:t.availability)==="not-available"?as.UNAVAILABLE:void 0:as.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:as.UNAVAILABLE:as.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?as.UNAVAILABLE:void 0:as.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},sZ={[i3.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,s,r;let n,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=sy(l,{kind:at.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(s=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:s.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),n=i.href}}let u=e.mediaDuration.get(t),h=null==(r=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:r.text;return null!=i&&null==h&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:n,mediaPreviewCoords:o,mediaPreviewChapter:h}},[i3.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[i3.MEDIA_PLAY_REQUEST](e,t){var i,a,s,r;let n=e.mediaStreamType.get(t)===ar.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(n&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(r=null==(s=t.options)?void 0:s.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[i3.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[i3.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[i3.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[i3.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[i3.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[i3.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,s;let r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(r)))return;let n=null!=(s=null==(a=t.options)?void 0:a.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(r-n,t)},[i3.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:s}=t,r=sO(t),n=sb(i),o=null==(a=n[0])?void 0:a.language;o&&!s.noSubtitlesLangPref&&aS.localStorage.setItem("media-chrome-pref-subtitles-lang",o),sA(ai.SHOWING,r,n)},[i3.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=sO(t);sA(ai.DISABLED,a,null!=i?i:[])},[i3.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){sH(t,i)},[i3.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[i3.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[i3.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[i3.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[i3.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[i3.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[i3.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[i3.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[i3.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var sj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sK=(e,t,i)=>(sj(e,t,"read from private field"),i?i.call(e):t.get(e)),sz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sY=(e,t,i,a)=>(sj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sX=(e,t,i)=>(sj(e,t,"access private method"),i);let sJ=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],s0="defaultsubtitles",s1="defaultstreamtype",s2="defaultduration",s3="fullscreenelement",s5="hotkeys",s4="keysused",s7="liveedgeoffset",s8="seektoliveoffset",s9="noautoseektolive",s6="nohotkeys",re="novolumepref",rt="nosubtitleslangpref",ri="nodefaultstore",ra="keyboardforwardseekoffset",rs="keyboardbackwardseekoffset",rr="lang";C=new WeakMap,x=new WeakMap,R=new WeakMap,D=new WeakMap,N=new WeakMap,P=new WeakMap,U=new WeakSet,O=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=sQ,requestMap:s=sZ,options:r={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{let o,l=[],d={options:{...r}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0==e||s$(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,s,r,u,p,v,b,g,E,f,A,y,w,k,I,T;let _=!!o;if(o={...d,...null!=o?o:{},...e},_)return;await sG(...Object.values(e));let M=l.length>0&&0===t&&n,S=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(s=o.media)?void 0:s.textTracks),C=(null==(r=d.media)?void 0:r.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),x=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),R=(null==(b=d.media)?void 0:b.remote)!==(null==(g=o.media)?void 0:g.remote),D=d.documentElement!==o.documentElement,N=!!d.media&&(S||M),P=!!(null==(E=d.media)?void 0:E.textTracks)&&(L||M),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(C||M),O=!!(null==(A=d.media)?void 0:A.audioTracks)&&(x||M),W=!!(null==(y=d.media)?void 0:y.remote)&&(R||M),H=!!d.documentElement&&(D||M),$=N||P||U||O||W||H,B=0===l.length&&1===t&&n,V=!!o.media&&(S||B),q=!!(null==(w=o.media)?void 0:w.textTracks)&&(L||B),G=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(C||B),F=!!(null==(I=o.media)?void 0:I.audioTracks)&&(x||B),Q=!!(null==(T=o.media)?void 0:T.remote)&&(R||B),Z=!!o.documentElement&&(D||B),j=V||q||G||F||Q||Z;if(!($||j)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:s=[],audioTracksEvents:r=[],remoteEvents:n=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),q&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,s.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),G&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,r.forEach(t=>{var i,a;c&&O&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),F&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,n.forEach(t=>{var i,a;c&&W&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),Q&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&H&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),Z&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&$&&v(),j&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:r}),{dispatch(e){let{type:t,detail:i}=e;s[t]&&null==u.mediaErrorCode?h(s[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(s0),defaultDuration:this.hasAttribute(s2)?+this.getAttribute(s2):void 0,defaultStreamType:null!=(e=this.getAttribute(s1))?e:void 0,liveEdgeOffset:this.hasAttribute(s7)?+this.getAttribute(s7):void 0,seekToLiveOffset:this.hasAttribute(s8)?+this.getAttribute(s8):this.hasAttribute(s7)?+this.getAttribute(s7):void 0,noAutoSeekToLive:this.hasAttribute(s9),noVolumePref:this.hasAttribute(re),noSubtitlesLangPref:this.hasAttribute(rt)}})},W=new WeakSet,H=function(e){let{key:t}=e;sJ.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",sX(this,W,H))},$=new WeakSet,B=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!sJ.includes(a)?this.removeEventListener("keyup",sX(this,W,H)):([" ","ArrowLeft","ArrowRight"].includes(a)&&!(sK(this,C).contains(`no${a.toLowerCase()}`)||" "===a&&sK(this,C).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",sX(this,W,H),{once:!0}))};let rn=Object.values(i8),ro=Object.values(i4),rl=e=>{var t,i,a,s;let{observedAttributes:r}=e.constructor;!r&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(aS.customElements.upgrade(e),{observedAttributes:r}=e.constructor);let n=null==(s=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,i5.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:s.call(a,/\s+/);return Array.isArray(r||n)?(r||n).filter(e=>rn.includes(e)):[]},rd=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&aS.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof aS.customElements.get(e.nodeName.toLowerCase()))&&aS.customElements.upgrade(e),ro.some(t=>t in e)||!!rl(e).length},ru=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},rh={[i8.MEDIA_SUBTITLES_LIST]:sE,[i8.MEDIA_SUBTITLES_SHOWING]:sE,[i8.MEDIA_SEEKABLE]:ru,[i8.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(ru).join(" "),[i8.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[i8.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(ao).join(" ")},[i8.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(ad).join(" ")}},rc=async(e,t,i)=>{var a,s;if(e.isConnected||await am(0),"boolean"==typeof i||null==i)return az(e,t,i);if("number"==typeof i)return aj(e,t,i);if("string"==typeof i)return aX(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let r=null!=(s=null==(a=rh[t])?void 0:a.call(rh,i))?s:i;return e.setAttribute(t,r)},rm=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;rd(e)&&t(e);let{children:s=[]}=null!=e?e:{};[...s,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>rm(e,t))},s=null==e?void 0:e.nodeName.toLowerCase();s.includes("-")&&!rd(e)?aS.customElements.whenDefined(s).then(()=>{a(e,t)}):a(e,t)},rp=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=rl(e),s=t.toLowerCase();a.includes(s)&&rc(e,s,i)})};aS.customElements.get("media-controller")||aS.customElements.define("media-controller",class extends sl{constructor(){super(),sz(this,U),sz(this,W),sz(this,$),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,sz(this,C,new sm(this,s5)),sz(this,x,void 0),sz(this,R,void 0),sz(this,D,void 0),sz(this,N,void 0),sz(this,P,e=>{var t;null==(t=sK(this,R))||t.dispatch(e)}),this.associateElement(this);let e={};sY(this,D,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),s=new aS.CustomEvent(ae[a],{composed:!0,detail:i});this.dispatchEvent(s)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(s6,s5,s1,s0,s2,rr)}get mediaStore(){return sK(this,R)}set mediaStore(e){var t,i;(sK(this,R)&&(null==(t=sK(this,N))||t.call(this),sY(this,N,void 0)),sY(this,R,e),sK(this,R)||this.hasAttribute(ri))?sY(this,N,null==(i=sK(this,R))?void 0:i.subscribe(sK(this,D))):sX(this,U,O).call(this)}get fullscreenElement(){var e;return null!=(e=sK(this,x))?e:this}set fullscreenElement(e){var t;this.hasAttribute(s3)&&this.removeAttribute(s3),sY(this,x,e),null==(t=sK(this,R))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return aK(this,s0)}set defaultSubtitles(e){az(this,s0,e)}get defaultStreamType(){return aY(this,s1)}set defaultStreamType(e){aX(this,s1,e)}get defaultDuration(){return aZ(this,s2)}set defaultDuration(e){aj(this,s2,e)}get noHotkeys(){return aK(this,s6)}set noHotkeys(e){az(this,s6,e)}get keysUsed(){return aY(this,s4)}set keysUsed(e){aX(this,s4,e)}get liveEdgeOffset(){return aZ(this,s7)}set liveEdgeOffset(e){aj(this,s7,e)}get noAutoSeekToLive(){return aK(this,s9)}set noAutoSeekToLive(e){az(this,s9,e)}get noVolumePref(){return aK(this,re)}set noVolumePref(e){az(this,re,e)}get noSubtitlesLangPref(){return aK(this,rt)}set noSubtitlesLangPref(e){az(this,rt,e)}get noDefaultStore(){return aK(this,ri)}set noDefaultStore(e){az(this,ri,e)}attributeChangedCallback(e,t,i){var a,s,r,n,o,l,d,u;(super.attributeChangedCallback(e,t,i),e===s6)?i!==t&&""===i?(this.hasAttribute(s5)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys():e===s5?sK(this,C).value=i:e===s0&&i!==t?null==(a=sK(this,R))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(s0)}}):e===s1?null==(r=sK(this,R))||r.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(s=this.getAttribute(s1))?s:void 0}}):e===s7?null==(n=sK(this,R))||n.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(s7)?+this.getAttribute(s7):void 0,seekToLiveOffset:this.hasAttribute(s8)?void 0:+this.getAttribute(s7)}}):e===s8?null==(o=sK(this,R))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(s8)?+this.getAttribute(s8):void 0}}):e===s9?null==(l=sK(this,R))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(s9)}}):e===s3?(sY(this,x,i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0),null==(u=sK(this,R))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})):e===rr&&i!==t&&(af=i)}connectedCallback(){var e,t;sK(this,R)||this.hasAttribute(ri)||sX(this,U,O).call(this),null==(e=sK(this,R))||e.dispatch({type:"documentelementchangerequest",detail:aL}),super.connectedCallback(),sK(this,R)&&!sK(this,N)&&sY(this,N,null==(t=sK(this,R))?void 0:t.subscribe(sK(this,D))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),sK(this,R)&&(null==(t=sK(this,R))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=sK(this,R))||i.dispatch({type:i3.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),sK(this,N)&&(null==(a=sK(this,N))||a.call(this),sY(this,N,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=sK(this,R))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=sK(this,R))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){rp(this.mediaStateReceivers,e,t)}associateElement(e){var t,i,a;let s,r,n,o,l;if(!e)return;let{associatedElementSubscriptions:d}=this;if(d.has(e))return;let u=this.registerMediaStateReceiver.bind(this),h=(t=e,i=u,a=this.unregisterMediaStateReceiver.bind(this),rm(t,i),s=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)},r=e=>{var t;a(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)},t.addEventListener(i3.REGISTER_MEDIA_STATE_RECEIVER,s),t.addEventListener(i3.UNREGISTER_MEDIA_STATE_RECEIVER,r),n=[],o=e=>{let t=e.target;"media"!==t.name&&(n.forEach(e=>rm(e,a)),(n=[...t.assignedElements({flatten:!0})]).forEach(e=>rm(e,i)))},t.addEventListener("slotchange",o),(l=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:t=[],removedNodes:s=[],type:r,target:n,attributeName:o}=e;"childList"===r?(Array.prototype.forEach.call(t,e=>rm(e,i)),Array.prototype.forEach.call(s,e=>rm(e,a))):"attributes"===r&&o===i5.MEDIA_CHROME_ATTRIBUTES&&(rd(n)?i(n):a(n))})})).observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{rm(t,a),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(i3.REGISTER_MEDIA_STATE_RECEIVER,s),t.removeEventListener(i3.UNREGISTER_MEDIA_STATE_RECEIVER,r)});Object.values(i3).forEach(t=>{e.addEventListener(t,sK(this,P))}),d.set(e,h)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(i3).forEach(t=>{e.removeEventListener(t,sK(this,P))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),sK(this,R)&&Object.entries(sK(this,R).getState()).forEach(([t,i])=>{rp([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",sX(this,$,B))}disableHotkeys(){this.removeEventListener("keydown",sX(this,$,B)),this.removeEventListener("keyup",sX(this,W,H))}get hotkeys(){return aY(this,s5)}set hotkeys(e){aX(this,s5,e)}keyboardShortcutHandler(e){var t,i,a,s,r;let n,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(s4))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||sK(this,C).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&sK(this,C).contains("nospace")))switch(e.key){case" ":case"k":n=sK(this,R).getState().mediaPaused?i3.MEDIA_PLAY_REQUEST:i3.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new aS.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n="off"===this.mediaStore.getState().mediaVolumeLevel?i3.MEDIA_UNMUTE_REQUEST:i3.MEDIA_MUTE_REQUEST,this.dispatchEvent(new aS.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=this.mediaStore.getState().mediaIsFullscreen?i3.MEDIA_EXIT_FULLSCREEN_REQUEST:i3.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new aS.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new aS.CustomEvent(i3.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(rs)?+this.getAttribute(rs):10;o=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)-e,0),l=new aS.CustomEvent(i3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(ra)?+this.getAttribute(ra):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)+e,0),l=new aS.CustomEvent(i3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}});let rv="placement",rb="bounds";class rg extends aS.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!aG(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=aB(this,"#"+this.bounds))?e:aU(this);if(!a)return;let{x:s,width:r}=a.getBoundingClientRect(),{x:n,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),h=u?parseFloat(u.replace("px","")):0,c=n-s+d-h,m=n+o-(s+r)+d+h;c<0?this.style.setProperty("--media-tooltip-offset-x",`${c}px`):m>0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[rv,rb]}get placement(){return aY(this,rv)}set placement(e){aX(this,rv,e)}get bounds(){return aY(this,rb)}set bounds(e){aX(this,rb,e)}}rg.shadowRootOptions={mode:"open"},rg.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},aS.customElements.get("media-tooltip")||aS.customElements.define("media-tooltip",rg);var rE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rf=(e,t,i)=>(rE(e,t,"read from private field"),i?i.call(e):t.get(e)),rA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ry=(e,t,i,a)=>(rE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rw="tooltipplacement",rk="disabled",rI="notooltip";class rT extends aS.HTMLElement{constructor(){if(super(),rA(this,Z),rA(this,V,void 0),this.preventClick=!1,this.tooltipEl=null,rA(this,q,e=>{this.preventClick||this.handleClick(e),setTimeout(rf(this,G),0)}),rA(this,G,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),rA(this,F,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",rf(this,F))}),rA(this,Q,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",rf(this,F)):this.addEventListener("keyup",rf(this,F),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",rw,i5.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",rf(this,q)),this.addEventListener("keydown",rf(this,Q)),this.tabIndex=0}disable(){this.removeEventListener("click",rf(this,q)),this.removeEventListener("keydown",rf(this,Q)),this.removeEventListener("keyup",rf(this,F)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===i5.MEDIA_CONTROLLER?(t&&(null==(s=null==(a=rf(this,V))?void 0:a.unassociateElement)||s.call(a,this),ry(this,V,null)),i&&this.isConnected&&(ry(this,V,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=rf(this,V))?void 0:n.associateElement)||o.call(n,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===rw&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),rf(this,G).call(this)}connectedCallback(){var e,t,i;let{style:a}=aF(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let s=this.getAttribute(i5.MEDIA_CONTROLLER);s&&(ry(this,V,null==(e=this.getRootNode())?void 0:e.getElementById(s)),null==(i=null==(t=rf(this,V))?void 0:t.associateElement)||i.call(t,this)),aS.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=Z,t=j,rE(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=rf(this,V))?void 0:e.unassociateElement)||t.call(e,this),ry(this,V,null),this.removeEventListener("mouseenter",rf(this,G)),this.removeEventListener("focus",rf(this,G)),this.removeEventListener("click",rf(this,q))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return aY(this,rw)}set tooltipPlacement(e){aX(this,rw,e)}get mediaController(){return aY(this,i5.MEDIA_CONTROLLER)}set mediaController(e){aX(this,i5.MEDIA_CONTROLLER,e)}get disabled(){return aK(this,rk)}set disabled(e){az(this,rk,e)}get noTooltip(){return aK(this,rI)}set noTooltip(e){az(this,rI,e)}handleClick(e){}}V=new WeakMap,q=new WeakMap,G=new WeakMap,F=new WeakMap,Q=new WeakMap,Z=new WeakSet,j=function(){this.addEventListener("mouseenter",rf(this,G)),this.addEventListener("focus",rf(this,G)),this.addEventListener("click",rf(this,q));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},rT.shadowRootOptions={mode:"open"},rT.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${rg.shadowRootOptions.mode}">
          ${rg.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},rT.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},rT.getTooltipContentHTML=function(){return""},aS.customElements.get("media-chrome-button")||aS.customElements.define("media-chrome-button",rT);let r_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,rM=e=>{let t=e.mediaIsAirplaying?aA("stop airplay"):aA("start airplay");e.setAttribute("aria-label",t)};class rS extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_IS_AIRPLAYING,i8.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rM(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_IS_AIRPLAYING&&rM(this)}get mediaIsAirplaying(){return aK(this,i8.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){az(this,i8.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return aY(this,i8.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){aX(this,i8.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new aS.CustomEvent(i3.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}rS.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i8.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i8.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i8.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${i8.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${r_}</slot>
      <slot name="exit">${r_}</slot>
    </slot>
  `},rS.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${aA("start airplay")}</slot>
    <slot name="tooltip-exit">${aA("stop airplay")}</slot>
  `},aS.customElements.get("media-airplay-button")||aS.customElements.define("media-airplay-button",rS);let rL=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,rC=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,rx=e=>{e.setAttribute("aria-checked",sw(e).toString())};class rR extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_SUBTITLES_LIST,i8.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",aA("closed captions")),rx(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_SUBTITLES_SHOWING&&rx(this)}get mediaSubtitlesList(){return rD(this,i8.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){rN(this,i8.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return rD(this,i8.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){rN(this,i8.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new aS.CustomEvent(i3.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}rR.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${rL}</slot>
      <slot name="off">${rC}</slot>
    </slot>
  `},rR.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${aA("Enable captions")}</slot>
    <slot name="tooltip-disable">${aA("Disable captions")}</slot>
  `};let rD=(e,t)=>{let i=e.getAttribute(t);return i?sv(i):[]},rN=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sE(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aS.customElements.get("media-captions-button")||aS.customElements.define("media-captions-button",rR);let rP=e=>{let t=e.mediaIsCasting?aA("stop casting"):aA("start casting");e.setAttribute("aria-label",t)};class rU extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_IS_CASTING,i8.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rP(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_IS_CASTING&&rP(this)}get mediaIsCasting(){return aK(this,i8.MEDIA_IS_CASTING)}set mediaIsCasting(e){az(this,i8.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return aY(this,i8.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){aX(this,i8.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?i3.MEDIA_EXIT_CAST_REQUEST:i3.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}rU.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i8.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i8.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i8.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${i8.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},rU.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${aA("Start casting")}</slot>
    <slot name="tooltip-exit">${aA("Stop casting")}</slot>
  `},aS.customElements.get("media-cast-button")||aS.customElements.define("media-cast-button",rU);var rO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rW=(e,t,i)=>(rO(e,t,"read from private field"),i?i.call(e):t.get(e)),rH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r$=(e,t,i,a)=>(rO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rB=(e,t,i)=>(rO(e,t,"access private method"),i);let rV="open";class rq extends aS.HTMLElement{constructor(){super(),rH(this,X),rH(this,ee),rH(this,ei),rH(this,es),rH(this,en),rH(this,el),rH(this,K,!1),rH(this,z,null),rH(this,Y,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[rV,"anchor"]}get open(){return aK(this,rV)}set open(e){az(this,rV,e)}handleEvent(e){switch(e.type){case"invoke":rB(this,es,er).call(this,e);break;case"focusout":rB(this,en,eo).call(this,e);break;case"keydown":rB(this,el,ed).call(this,e)}}connectedCallback(){rB(this,X,J).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){rB(this,X,J).call(this),e===rV&&i!==t&&(this.open?rB(this,ee,et).call(this):rB(this,ei,ea).call(this))}focus(){r$(this,z,aV());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}K=new WeakMap,z=new WeakMap,Y=new WeakMap,X=new WeakSet,J=function(){if(!rW(this,K)&&(r$(this,K,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=aF(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},ee=new WeakSet,et=function(){var e;null==(e=rW(this,Y))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},ei=new WeakSet,ea=function(){var e;null==(e=rW(this,Y))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},es=new WeakSet,er=function(e){r$(this,Y,e.relatedTarget),a$(this,e.relatedTarget)||(this.open=!this.open)},en=new WeakSet,eo=function(e){var t;!a$(this,e.relatedTarget)&&(null==(t=rW(this,z))||t.focus(),rW(this,Y)&&rW(this,Y)!==e.relatedTarget&&this.open&&(this.open=!1))},el=new WeakSet,ed=function(e){var t,i,a,s,r;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(n)&&(e.preventDefault(),e.stopPropagation(),"Tab"===n?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(s=null==(a=this.nextElementSibling)?void 0:a.focus)||s.call(a),this.blur()):"Escape"===n&&(null==(r=rW(this,z))||r.focus(),this.open=!1))},rq.shadowRootOptions={mode:"open"},rq.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},rq.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},aS.customElements.get("media-chrome-dialog")||aS.customElements.define("media-chrome-dialog",rq);var rG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rF=(e,t,i)=>(rG(e,t,"read from private field"),i?i.call(e):t.get(e)),rQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rZ=(e,t,i,a)=>(rG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rj=(e,t,i)=>(rG(e,t,"access private method"),i);class rK extends aS.HTMLElement{constructor(){if(super(),rQ(this,ef),rQ(this,ey),rQ(this,ek),rQ(this,eT),rQ(this,eM),rQ(this,eL),rQ(this,ex),rQ(this,eD),rQ(this,eu,void 0),rQ(this,eh,void 0),rQ(this,ec,void 0),rQ(this,em,void 0),rQ(this,ep,{}),rQ(this,ev,[]),rQ(this,eb,()=>{if(this.range.matches(":focus-visible")){let{style:e}=aF(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),rQ(this,eg,()=>{let{style:e}=aF(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),rQ(this,eE,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),rZ(this,ec,this.shadowRoot.querySelector("#startpoint")),rZ(this,em,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",i5.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===i5.MEDIA_CONTROLLER?(t&&(null==(s=null==(a=rF(this,eu))?void 0:a.unassociateElement)||s.call(a,this),rZ(this,eu,null)),i&&this.isConnected&&(rZ(this,eu,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=rF(this,eu))?void 0:n.associateElement)||o.call(n,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),rj(this,ey,ew).call(this)):(this.range.setAttribute(e,i),rj(this,ek,eI).call(this)))}connectedCallback(){var e,t,i;let{style:a}=aF(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),rF(this,ep).pointer=aF(this.shadowRoot,"#pointer"),rF(this,ep).progress=aF(this.shadowRoot,"#progress"),rF(this,ep).thumb=aF(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),rF(this,ep).activeSegment=aF(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let s=this.getAttribute(i5.MEDIA_CONTROLLER);s&&(rZ(this,eu,null==(e=this.getRootNode())?void 0:e.getElementById(s)),null==(i=null==(t=rF(this,eu))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",rF(this,eb)),this.shadowRoot.addEventListener("focusout",rF(this,eg)),rj(this,ey,ew).call(this),aD(this.container,rF(this,eE))}disconnectedCallback(){var e,t;rj(this,ek,eI).call(this),null==(t=null==(e=rF(this,eu))?void 0:e.unassociateElement)||t.call(e,this),rZ(this,eu,null),this.shadowRoot.removeEventListener("focusin",rF(this,eb)),this.shadowRoot.removeEventListener("focusout",rF(this,eg)),aN(this.container,rF(this,eE))}updatePointerBar(e){var t;null==(t=rF(this,ep).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=rF(this,ep).progress)||e.style.setProperty("width",`${i}%`),null==(t=rF(this,ep).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];rZ(this,ev,[...i]);let a=i.pop();for(let[e,s]of i.entries()){let[r,n]=[0===e,e===i.length-1],o=r?"calc(var(--segments-gap) / -1)":`${100*s}%`,l=n?a:i[e+1],d=`calc(${(l-s)*100}%${r||n?"":" - var(--segments-gap)"})`,u=aL.createElementNS("http://www.w3.org/2000/svg","rect"),h=aF(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){var t,i,a,s;let r,n,o;return t=e.clientX,i=e.clientY,a=rF(this,ec).getBoundingClientRect(),r=(s=rF(this,em).getBoundingClientRect()).x-a.x,0==(o=r*r+(n=s.y-a.y)*n)?0:Math.max(0,Math.min(1,((t-a.x)*r+(i-a.y)*n)/o))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":rj(this,eD,eN).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":rj(this,eM,eS).call(this,e);break;case"pointerdown":rj(this,eT,e_).call(this,e);break;case"pointerup":rj(this,eL,eC).call(this);break;case"pointerleave":rj(this,ex,eR).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}eu=new WeakMap,eh=new WeakMap,ec=new WeakMap,em=new WeakMap,ep=new WeakMap,ev=new WeakMap,eb=new WeakMap,eg=new WeakMap,eE=new WeakMap,ef=new WeakSet,eA=function(e){let t=rF(this,ep).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=rF(this,ev).findIndex((e,t,a)=>{let s=a[t+1];return null!=s&&i>=e&&i<=s}),s=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==s&&t.style.transform||(t.selectorText=s,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},ey=new WeakSet,ew=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},ek=new WeakSet,eI=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=aS.window)||e.removeEventListener("pointerup",this),null==(t=aS.window)||t.removeEventListener("pointermove",this)},eT=new WeakSet,e_=function(e){var t;rZ(this,eh,e.composedPath().includes(this.range)),null==(t=aS.window)||t.addEventListener("pointerup",this)},eM=new WeakSet,eS=function(e){var t;"mouse"!==e.pointerType&&rj(this,eT,e_).call(this,e),this.addEventListener("pointerleave",this),null==(t=aS.window)||t.addEventListener("pointermove",this)},eL=new WeakSet,eC=function(){var e;null==(e=aS.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},ex=new WeakSet,eR=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=aS.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=rF(this,ep).activeSegment)||t.style.removeProperty("transform")},eD=new WeakSet,eN=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),rj(this,ef,eA).call(this,e),this.dragging&&("mouse"!==e.pointerType||!rF(this,eh))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},rK.shadowRootOptions={mode:"open"},rK.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},aS.customElements.get("media-chrome-range")||aS.customElements.define("media-chrome-range",rK);var rz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rY=(e,t,i)=>(rz(e,t,"read from private field"),i?i.call(e):t.get(e)),rX=(e,t,i,a)=>(rz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rJ extends aS.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eP,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i5.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===i5.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=rY(this,eP))?void 0:a.unassociateElement)||s.call(a,this),rX(this,eP,null)),i&&this.isConnected&&(rX(this,eP,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=rY(this,eP))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(i5.MEDIA_CONTROLLER);a&&(rX(this,eP,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=rY(this,eP))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=rY(this,eP))?void 0:e.unassociateElement)||t.call(e,this),rX(this,eP,null)}}eP=new WeakMap,rJ.shadowRootOptions={mode:"open"},rJ.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},aS.customElements.get("media-control-bar")||aS.customElements.define("media-control-bar",rJ);var r0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r1=(e,t,i)=>(r0(e,t,"read from private field"),i?i.call(e):t.get(e)),r2=(e,t,i,a)=>(r0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class r3 extends aS.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eU,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i5.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===i5.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=r1(this,eU))?void 0:a.unassociateElement)||s.call(a,this),r2(this,eU,null)),i&&this.isConnected&&(r2(this,eU,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=r1(this,eU))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let{style:a}=aF(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let s=this.getAttribute(i5.MEDIA_CONTROLLER);s&&(r2(this,eU,null==(e=this.getRootNode())?void 0:e.getElementById(s)),null==(i=null==(t=r1(this,eU))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=r1(this,eU))?void 0:e.unassociateElement)||t.call(e,this),r2(this,eU,null)}}eU=new WeakMap,r3.shadowRootOptions={mode:"open"},r3.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},r3.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},aS.customElements.get("media-text-display")||aS.customElements.define("media-text-display",r3);var r5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r4=(e,t,i)=>(r5(e,t,"read from private field"),i?i.call(e):t.get(e));class r7 extends r3{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eO,void 0),((e,t,i,a)=>(r5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eO,this.shadowRoot.querySelector("slot")),r4(this,eO).textContent=ab(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===i8.MEDIA_DURATION&&(r4(this,eO).textContent=ab(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return aZ(this,i8.MEDIA_DURATION)}set mediaDuration(e){aj(this,i8.MEDIA_DURATION,e)}}eO=new WeakMap,r7.getSlotTemplateHTML=function(e,t){return`
    <slot>${ab(t.mediaDuration)}</slot>
  `},aS.customElements.get("media-duration-display")||aS.customElements.define("media-duration-display",r7);let r8={2:aA("Network Error"),3:aA("Decode Error"),4:aA("Source Not Supported"),5:aA("Encryption Error")},r9={2:aA("A network error caused the media download to fail."),3:aA("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:aA("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:aA("The media is encrypted and there are no keys to decrypt it.")},r6=e=>{var t,i;return 1===e.code?null:{title:null!=(t=r8[e.code])?t:`Error ${e.code}`,message:null!=(i=r9[e.code])?i:e.message}};var ne=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function nt(e){var t;let{title:i,message:a}=null!=(t=r6(e))?t:{},s="";return i&&(s+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(s+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),s}let ni=[i8.MEDIA_ERROR_CODE,i8.MEDIA_ERROR_MESSAGE];class na extends rq{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eW,null)}static get observedAttributes(){return[...super.observedAttributes,...ni]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!ni.includes(e))return;let s=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=s.code&&null!==r6(s),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(s))}get mediaError(){var e,t;return ne(this,e=eW,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;ne(this,t=eW,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return aZ(this,"mediaerrorcode")}set mediaErrorCode(e){aj(this,"mediaerrorcode",e)}get mediaErrorMessage(){return aY(this,"mediaerrormessage")}set mediaErrorMessage(e){aX(this,"mediaerrormessage",e)}}eW=new WeakMap,na.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${nt({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},na.formatErrorMessage=nt,aS.customElements.get("media-error-dialog")||aS.customElements.define("media-error-dialog",na);let ns=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,nr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,nn=e=>{let t=e.mediaIsFullscreen?aA("exit fullscreen mode"):aA("enter fullscreen mode");e.setAttribute("aria-label",t)};class no extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_IS_FULLSCREEN,i8.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nn(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_IS_FULLSCREEN&&nn(this)}get mediaFullscreenUnavailable(){return aY(this,i8.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){aX(this,i8.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return aK(this,i8.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){az(this,i8.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?i3.MEDIA_EXIT_FULLSCREEN_REQUEST:i3.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}no.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i8.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${i8.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i8.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${i8.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ns}</slot>
      <slot name="exit">${nr}</slot>
    </slot>
  `},no.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${aA("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${aA("Exit fullscreen mode")}</slot>
  `},aS.customElements.get("media-fullscreen-button")||aS.customElements.define("media-fullscreen-button",no);let{MEDIA_TIME_IS_LIVE:nl,MEDIA_PAUSED:nd}=i8,{MEDIA_SEEK_TO_LIVE_REQUEST:nu,MEDIA_PLAY_REQUEST:nh}=i3,nc=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?aA("seek to live"):aA("playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class nm extends rT{static get observedAttributes(){return[...super.observedAttributes,nl,nd]}connectedCallback(){super.connectedCallback(),nc(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),nc(this)}get mediaPaused(){return aK(this,i8.MEDIA_PAUSED)}set mediaPaused(e){az(this,i8.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return aK(this,i8.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){az(this,i8.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new aS.CustomEvent(nu,{composed:!0,bubbles:!0})),this.hasAttribute(nd)&&this.dispatchEvent(new aS.CustomEvent(nh,{composed:!0,bubbles:!0})))}}nm.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${nl}]:not([${nd}])) slot[name=indicator] > *,
      :host([${nl}]:not([${nd}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${nl}]:not([${nd}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${aA("live")}</slot>
  `},aS.customElements.get("media-live-button")||aS.customElements.define("media-live-button",nm);var np=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nv=(e,t,i)=>(np(e,t,"read from private field"),i?i.call(e):t.get(e)),nb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ng=(e,t,i,a)=>(np(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let nE="loadingdelay",nf="noautohide",nA=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class ny extends aS.HTMLElement{constructor(){if(super(),nb(this,eH,void 0),nb(this,e$,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i5.MEDIA_CONTROLLER,i8.MEDIA_PAUSED,i8.MEDIA_LOADING,nE]}attributeChangedCallback(e,t,i){var a,s,r,n,o;e===nE&&t!==i?this.loadingDelay=Number(i):e===i5.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=nv(this,eH))?void 0:a.unassociateElement)||s.call(a,this),ng(this,eH,null)),i&&this.isConnected&&(ng(this,eH,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=nv(this,eH))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(i5.MEDIA_CONTROLLER);a&&(ng(this,eH,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=nv(this,eH))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=nv(this,eH))?void 0:e.unassociateElement)||t.call(e,this),ng(this,eH,null)}get loadingDelay(){return nv(this,e$)}set loadingDelay(e){ng(this,e$,e);let{style:t}=aF(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return aK(this,i8.MEDIA_PAUSED)}set mediaPaused(e){az(this,i8.MEDIA_PAUSED,e)}get mediaLoading(){return aK(this,i8.MEDIA_LOADING)}set mediaLoading(e){az(this,i8.MEDIA_LOADING,e)}get mediaController(){return aY(this,i5.MEDIA_CONTROLLER)}set mediaController(e){aX(this,i5.MEDIA_CONTROLLER,e)}get noAutohide(){return aK(this,nf)}set noAutohide(e){az(this,nf,e)}}eH=new WeakMap,e$=new WeakMap,ny.shadowRootOptions={mode:"open"},ny.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${i8.MEDIA_LOADING}]:not([${i8.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${i8.MEDIA_LOADING}]:not([${i8.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${i8.MEDIA_LOADING}]:not([${i8.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${nA}</slot>
    <div id="status" role="status" aria-live="polite">${aA("media loading")}</div>
  `},aS.customElements.get("media-loading-indicator")||aS.customElements.define("media-loading-indicator",ny);let nw=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,nk=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,nI=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,nT=e=>{let t="off"===e.mediaVolumeLevel?aA("unmute"):aA("mute");e.setAttribute("aria-label",t)};class n_ extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),nT(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_VOLUME_LEVEL&&nT(this)}get mediaVolumeLevel(){return aY(this,i8.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){aX(this,i8.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?i3.MEDIA_UNMUTE_REQUEST:i3.MEDIA_MUTE_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}n_.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${i8.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${i8.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${i8.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${i8.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${i8.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${i8.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${i8.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${nw}</slot>
      <slot name="low">${nk}</slot>
      <slot name="medium">${nk}</slot>
      <slot name="high">${nI}</slot>
    </slot>
  `},n_.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${aA("Mute")}</slot>
    <slot name="tooltip-unmute">${aA("Unmute")}</slot>
  `},aS.customElements.get("media-mute-button")||aS.customElements.define("media-mute-button",n_);let nM=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,nS=e=>{let t=e.mediaIsPip?aA("exit picture in picture mode"):aA("enter picture in picture mode");e.setAttribute("aria-label",t)};class nL extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_IS_PIP,i8.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nS(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_IS_PIP&&nS(this)}get mediaPipUnavailable(){return aY(this,i8.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){aX(this,i8.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return aK(this,i8.MEDIA_IS_PIP)}set mediaIsPip(e){az(this,i8.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?i3.MEDIA_EXIT_PIP_REQUEST:i3.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}nL.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i8.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${i8.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${i8.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${i8.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${nM}</slot>
      <slot name="exit">${nM}</slot>
    </slot>
  `},nL.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${aA("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${aA("Exit picture in picture mode")}</slot>
  `},aS.customElements.get("media-pip-button")||aS.customElements.define("media-pip-button",nL);var nC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let nx="rates",nR=[1,1.2,1.5,1.7,2];class nD extends rT{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eB,new sm(this,nx,{defaultValue:nR})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_PLAYBACK_RATE,nx]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===nx&&(nC(this,eB).value=i),e===i8.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",aA("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return nC(this,eB)}set rates(e){e?Array.isArray(e)?nC(this,eB).value=e.join(" "):"string"==typeof e&&(nC(this,eB).value=e):nC(this,eB).value=""}get mediaPlaybackRate(){return aZ(this,i8.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i8.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(nC(this,eB).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,s=new aS.CustomEvent(i3.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(s)}}eB=new WeakMap,nD.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},nD.getTooltipContentHTML=function(){return aA("Playback rate")},aS.customElements.get("media-playback-rate-button")||aS.customElements.define("media-playback-rate-button",nD);let nN=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,nP=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,nU=e=>{let t=e.mediaPaused?aA("play"):aA("pause");e.setAttribute("aria-label",t)};class nO extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_PAUSED,i8.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),nU(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_PAUSED&&nU(this)}get mediaPaused(){return aK(this,i8.MEDIA_PAUSED)}set mediaPaused(e){az(this,i8.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?i3.MEDIA_PLAY_REQUEST:i3.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}nO.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${i8.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${i8.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${i8.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${i8.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${nN}</slot>
      <slot name="pause">${nP}</slot>
    </slot>
  `},nO.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${aA("Play")}</slot>
    <slot name="tooltip-pause">${aA("Pause")}</slot>
  `},aS.customElements.get("media-play-button")||aS.customElements.define("media-play-button",nO);let nW="placeholdersrc";class nH extends aS.HTMLElement{static get observedAttributes(){return[nW,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===nW)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return aY(this,nW)}set placeholderSrc(e){aX(this,"src",e)}get src(){return aY(this,"src")}set src(e){aX(this,"src",e)}}nH.shadowRootOptions={mode:"open"},nH.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},aS.customElements.get("media-poster-image")||aS.customElements.define("media-poster-image",nH);var n$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};eV=new WeakMap,aS.customElements.get("media-preview-chapter-display")||aS.customElements.define("media-preview-chapter-display",class extends r3{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eV,void 0),((e,t,i,a)=>(n$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eV,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i8.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i){var a;(n$(this,eV,"read from private field"),a?a.call(this):eV.get(this)).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return aY(this,i8.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){aX(this,i8.MEDIA_PREVIEW_CHAPTER,e)}});var nB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nV=(e,t,i)=>(nB(e,t,"read from private field"),i?i.call(e):t.get(e)),nq=(e,t,i,a)=>(nB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nG extends aS.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eq,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[i5.MEDIA_CONTROLLER,i8.MEDIA_PREVIEW_IMAGE,i8.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(i5.MEDIA_CONTROLLER);a&&(nq(this,eq,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=nV(this,eq))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=nV(this,eq))?void 0:e.unassociateElement)||t.call(e,this),nq(this,eq,null)}attributeChangedCallback(e,t,i){var a,s,r,n,o;[i8.MEDIA_PREVIEW_IMAGE,i8.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===i5.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=nV(this,eq))?void 0:a.unassociateElement)||s.call(a,this),nq(this,eq,null)),i&&this.isConnected&&(nq(this,eq,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(o=null==(n=nV(this,eq))?void 0:n.associateElement)||o.call(n,this)))}get mediaPreviewImage(){return aY(this,i8.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){aX(this,i8.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(i8.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(i8.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(i8.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,s,r]=e,n=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),h=Math.min(parseInt(o)/s,parseInt(l)/r),c=Math.max(parseInt(d)/s,parseInt(u)/r),m=h<1,p=m?h:c>1?c:1,{style:v}=aF(this.shadowRoot,":host"),b=aF(this.shadowRoot,"img").style,g=this.shadowRoot.querySelector("img"),E=m?"min":"max";v.setProperty(`${E}-width`,"initial","important"),v.setProperty(`${E}-height`,"initial","important"),v.width=`${s*p}px`,v.height=`${r*p}px`;let f=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};g.src!==n&&(g.onload=()=>{this.imgWidth=g.naturalWidth,this.imgHeight=g.naturalHeight,f()},g.src=n,f()),f(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}eq=new WeakMap,nG.shadowRootOptions={mode:"open"},nG.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},aS.customElements.get("media-preview-thumbnail")||aS.customElements.define("media-preview-thumbnail",nG);var nF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nQ=(e,t,i)=>(nF(e,t,"read from private field"),i?i.call(e):t.get(e));eG=new WeakMap,aS.customElements.get("media-preview-time-display")||aS.customElements.define("media-preview-time-display",class extends r3{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eG,void 0),((e,t,i,a)=>(nF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eG,this.shadowRoot.querySelector("slot")),nQ(this,eG).textContent=ab(0)}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_PREVIEW_TIME&&null!=i&&(nQ(this,eG).textContent=ab(parseFloat(i)))}get mediaPreviewTime(){return aZ(this,i8.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aj(this,i8.MEDIA_PREVIEW_TIME,e)}});let nZ="seekoffset";class nj extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_CURRENT_TIME,nZ]}connectedCallback(){super.connectedCallback(),this.seekOffset=aZ(this,nZ,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nZ&&(this.seekOffset=aZ(this,nZ,30))}get seekOffset(){return aZ(this,nZ,30)}set seekOffset(e){aj(this,nZ,e),this.setAttribute("aria-label",aA("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),aW(aH(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aZ(this,i8.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aj(this,i8.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new aS.CustomEvent(i3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}nj.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},nj.getTooltipContentHTML=function(){return aA("Seek backward")},aS.customElements.get("media-seek-backward-button")||aS.customElements.define("media-seek-backward-button",nj);let nK="seekoffset";class nz extends rT{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_CURRENT_TIME,nK]}connectedCallback(){super.connectedCallback(),this.seekOffset=aZ(this,nK,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===nK&&(this.seekOffset=aZ(this,nK,30))}get seekOffset(){return aZ(this,nK,30)}set seekOffset(e){aj(this,nK,e),this.setAttribute("aria-label",aA("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),aW(aH(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aZ(this,i8.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aj(this,i8.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new aS.CustomEvent(i3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}nz.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},nz.getTooltipContentHTML=function(){return aA("Seek forward")},aS.customElements.get("media-seek-forward-button")||aS.customElements.define("media-seek-forward-button",nz);var nY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nX=(e,t,i)=>(nY(e,t,"read from private field"),i?i.call(e):t.get(e));let nJ={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},n0=[...Object.values(nJ),i8.MEDIA_CURRENT_TIME,i8.MEDIA_DURATION,i8.MEDIA_SEEKABLE],n1=["Enter"," "],n2="&nbsp;/&nbsp;",n3=(e,{timesSep:t=n2}={})=>{var i,a;let s=null!=(i=e.mediaCurrentTime)?i:0,[,r]=null!=(a=e.mediaSeekable)?a:[],n=0;Number.isFinite(e.mediaDuration)?n=e.mediaDuration:Number.isFinite(r)&&(n=r);let o=e.remaining?ab(0-(n-s)):ab(s);return e.showDuration?`${o}${t}${ab(n)}`:o};class n5 extends r3{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eF,void 0),((e,t,i,a)=>(nY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,eF,this.shadowRoot.querySelector("slot")),nX(this,eF).innerHTML=`${n3(this)}`}static get observedAttributes(){return[...super.observedAttributes,...n0,"disabled"]}connectedCallback(){let{style:e}=aF(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",aA("playback time"));let t=e=>{let{key:i}=e;n1.includes(i)?this.toggleTimeDisplay():this.removeEventListener("keyup",t)};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:s}=e;i||a||!n1.includes(s)?this.removeEventListener("keyup",t):this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){n0.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return aK(this,nJ.REMAINING)}set remaining(e){az(this,nJ.REMAINING,e)}get showDuration(){return aK(this,nJ.SHOW_DURATION)}set showDuration(e){az(this,nJ.SHOW_DURATION,e)}get noToggle(){return aK(this,nJ.NO_TOGGLE)}set noToggle(e){az(this,nJ.NO_TOGGLE,e)}get mediaDuration(){return aZ(this,i8.MEDIA_DURATION)}set mediaDuration(e){aj(this,i8.MEDIA_DURATION,e)}get mediaCurrentTime(){return aZ(this,i8.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aj(this,i8.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(i8.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(i8.MEDIA_SEEKABLE):this.setAttribute(i8.MEDIA_SEEKABLE,e.join(":"))}update(){let e=n3(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],s=null;if(Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(a)&&(s=a),null==i||null===s)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let r=e.remaining?av(0-(s-i)):av(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",r);let n=av(s),o=`${r} of ${n}`;e.setAttribute("aria-valuetext",o)})(this),e!==nX(this,eF).innerHTML&&(nX(this,eF).innerHTML=e)}}eF=new WeakMap,n5.getSlotTemplateHTML=function(e,t){return`
    <slot>${n3(t)}</slot>
  `},aS.customElements.get("media-time-display")||aS.customElements.define("media-time-display",n5);var n4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n7=(e,t,i)=>(n4(e,t,"read from private field"),i?i.call(e):t.get(e)),n8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n9=(e,t,i,a)=>(n4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class n6{constructor(e,t,i){n8(this,eQ,void 0),n8(this,eZ,void 0),n8(this,ej,void 0),n8(this,eK,void 0),n8(this,ez,void 0),n8(this,eY,void 0),n8(this,eX,void 0),n8(this,eJ,void 0),n8(this,e0,0),n8(this,e1,(e=performance.now())=>{n9(this,e0,requestAnimationFrame(n7(this,e1))),n9(this,eK,performance.now()-n7(this,ej));let t=1e3/this.fps;if(n7(this,eK)>t){let i,a,s,r;n9(this,ej,e-n7(this,eK)%t);let n=1e3/((e-n7(this,eZ))/++(i=this,a=ez,{set _(value){n9(i,a,value,s)},get _(){return n7(i,a,r)}})._),o=(e-n7(this,eY))/1e3/this.duration,l=n7(this,eX)+o*this.playbackRate;l-n7(this,eQ).valueAsNumber>0?n9(this,eJ,this.playbackRate/this.duration/n):(n9(this,eJ,.995*n7(this,eJ)),l=n7(this,eQ).valueAsNumber+n7(this,eJ)),this.callback(l)}}),n9(this,eQ,e),this.callback=t,this.fps=i}start(){0===n7(this,e0)&&(n9(this,ej,performance.now()),n9(this,eZ,n7(this,ej)),n9(this,ez,0),n7(this,e1).call(this))}stop(){0!==n7(this,e0)&&(cancelAnimationFrame(n7(this,e0)),n9(this,e0,0))}update({start:e,duration:t,playbackRate:i}){let a=e-n7(this,eQ).valueAsNumber,s=Math.abs(t-this.duration);(a>0||a<-.03||s>=.5)&&this.callback(e),n9(this,eX,e),n9(this,eY,performance.now()),this.duration=t,this.playbackRate=i}}eQ=new WeakMap,eZ=new WeakMap,ej=new WeakMap,eK=new WeakMap,ez=new WeakMap,eY=new WeakMap,eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap;var oe=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ot=(e,t,i)=>(oe(e,t,"read from private field"),i?i.call(e):t.get(e)),oi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oa=(e,t,i,a)=>(oe(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),os=(e,t,i)=>(oe(e,t,"access private method"),i);let or=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},on=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class oo extends rK{constructor(){super(),oi(this,tt),oi(this,ta),oi(this,tn),oi(this,tl),oi(this,tu),oi(this,tc),oi(this,tp),oi(this,tb),oi(this,e2,void 0),oi(this,e3,void 0),oi(this,e5,void 0),oi(this,e4,void 0),oi(this,e7,void 0),oi(this,e8,void 0),oi(this,e9,void 0),oi(this,e6,void 0),oi(this,te,void 0),oi(this,tr,e=>{this.dragging||(ah(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),oa(this,e5,this.shadowRoot.querySelectorAll('[part~="box"]')),oa(this,e7,this.shadowRoot.querySelector('[part~="preview-box"]')),oa(this,e8,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);oa(this,e9,parseInt(e.getPropertyValue("--media-box-padding-left"))),oa(this,e6,parseInt(e.getPropertyValue("--media-box-padding-right"))),oa(this,e3,new n6(this.range,ot(this,tr),60))}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_PAUSED,i8.MEDIA_DURATION,i8.MEDIA_SEEKABLE,i8.MEDIA_CURRENT_TIME,i8.MEDIA_PREVIEW_IMAGE,i8.MEDIA_PREVIEW_TIME,i8.MEDIA_PREVIEW_CHAPTER,i8.MEDIA_BUFFERED,i8.MEDIA_PLAYBACK_RATE,i8.MEDIA_LOADING,i8.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",aA("seek")),os(this,tt,ti).call(this),oa(this,e2,this.getRootNode()),null==(e=ot(this,e2))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),os(this,tt,ti).call(this),null==(e=ot(this,e2))||e.removeEventListener("transitionstart",this),oa(this,e2,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===i8.MEDIA_CURRENT_TIME||e===i8.MEDIA_PAUSED||e===i8.MEDIA_ENDED||e===i8.MEDIA_LOADING||e===i8.MEDIA_DURATION||e===i8.MEDIA_SEEKABLE){let e,t,i,a;ot(this,e3).update({start:or(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),os(this,tt,ti).call(this),e=this.range,t=av(+on(this)),i=av(+this.mediaSeekableEnd),a=t&&i?`${t} of ${i}`:"video not loaded, unknown time.",e.setAttribute("aria-valuetext",a)}else e===i8.MEDIA_BUFFERED&&this.updateBufferedBar();(e===i8.MEDIA_DURATION||e===i8.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ot(this,te),this.updateBar())}}get mediaChaptersCues(){return ot(this,te)}set mediaChaptersCues(e){var t;oa(this,te,e),this.updateSegments(null==(t=ot(this,te))?void 0:t.map(e=>({start:or(this,e.startTime),end:or(this,e.endTime)})))}get mediaPaused(){return aK(this,i8.MEDIA_PAUSED)}set mediaPaused(e){az(this,i8.MEDIA_PAUSED,e)}get mediaLoading(){return aK(this,i8.MEDIA_LOADING)}set mediaLoading(e){az(this,i8.MEDIA_LOADING,e)}get mediaDuration(){return aZ(this,i8.MEDIA_DURATION)}set mediaDuration(e){aj(this,i8.MEDIA_DURATION,e)}get mediaCurrentTime(){return aZ(this,i8.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aj(this,i8.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return aZ(this,i8.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i8.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(i8.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(i8.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(i8.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(i8.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(i8.MEDIA_SEEKABLE):this.setAttribute(i8.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return aY(this,i8.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){aX(this,i8.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return aZ(this,i8.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aj(this,i8.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return aK(this,i8.MEDIA_ENDED)}set mediaEnded(e){az(this,i8.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=or(this,s)}let{style:a}=aF(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=aF(this.shadowRoot,"#current-rail"),t=aF(this.shadowRoot,'[part~="current-box"]'),i=os(this,tn,to).call(this,ot(this,e8)),a=os(this,tl,td).call(this,i,this.range.valueAsNumber),s=os(this,tu,th).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${s}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":os(this,tb,tg).call(this);break;case"pointermove":os(this,tc,tm).call(this,e);break;case"pointerup":case"pointerleave":os(this,tp,tv).call(this,null);break;case"transitionstart":a$(e.target,this)&&setTimeout(()=>os(this,tt,ti).call(this),0)}}}e2=new WeakMap,e3=new WeakMap,e5=new WeakMap,e4=new WeakMap,e7=new WeakMap,e8=new WeakMap,e9=new WeakMap,e6=new WeakMap,te=new WeakMap,tt=new WeakSet,ti=function(){os(this,ta,ts).call(this)?ot(this,e3).start():ot(this,e3).stop()},ta=new WeakSet,ts=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&aG(this)},tr=new WeakMap,tn=new WeakSet,to=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?aB(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),s=e.offsetWidth,r=-(a.left-i.left-s/2),n=i.right-a.left-s/2;return{box:{width:s,min:r,max:n},bounds:i,range:a}},tl=new WeakSet,td=function(e,t){let i=`${100*t}%`,{width:a,min:s,max:r}=e.box;if(!a)return i;if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tu=new WeakSet,th=function(e,t){let{width:i,min:a,max:s}=e.box,r=t*e.range.width;if(r<a+ot(this,e9)){let t=e.range.left-e.bounds.left-ot(this,e9);return`${r-i/2+t}px`}if(r>s-ot(this,e6)){let t=e.bounds.right-e.range.right-ot(this,e6);return`${r+i/2-t-e.range.width}px`}return 0},tc=new WeakSet,tm=function(e){let t=[...ot(this,e5)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void os(this,tp,tv).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=aF(this.shadowRoot,"#preview-rail"),s=aF(this.shadowRoot,'[part~="preview-box"]'),r=os(this,tn,to).call(this,ot(this,e7)),n=(e.clientX-r.range.left)/r.range.width;n=Math.max(0,Math.min(1,n));let o=os(this,tl,td).call(this,r,n),l=os(this,tu,th).call(this,r,n);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${r.range.width}`),s.style.setProperty("--_box-shift",`${l}`),s.style.setProperty("--_box-width",`${r.box.width}px`),1>Math.abs(Math.round(ot(this,e4))-Math.round(n*i))&&n>.01&&n<.99||(oa(this,e4,n*i),os(this,tp,tv).call(this,ot(this,e4)))},tp=new WeakSet,tv=function(e){this.dispatchEvent(new aS.CustomEvent(i3.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},tb=new WeakSet,tg=function(){ot(this,e3).stop();let e=on(this);this.dispatchEvent(new aS.CustomEvent(i3.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},oo.shadowRootOptions={mode:"open"},oo.getTemplateHTML=function(e){return`
    ${rK.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${i8.MEDIA_PREVIEW_IMAGE}], [${i8.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${i8.MEDIA_PREVIEW_IMAGE}], [${i8.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${i8.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${i8.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${i8.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${i8.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${i8.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${i8.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${i8.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${i8.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${i8.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${i8.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${i8.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${i8.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${nG.shadowRootOptions.mode}">
            ${nG.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},aS.customElements.get("media-time-range")||aS.customElements.define("media-time-range",oo),aS.customElements.get("media-volume-range")||aS.customElements.define("media-volume-range",class extends rK{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_VOLUME,i8.MEDIA_MUTED,i8.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new aS.CustomEvent(i3.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",aA("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i8.MEDIA_VOLUME||e===i8.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return aZ(this,i8.MEDIA_VOLUME,1)}set mediaVolume(e){aj(this,i8.MEDIA_VOLUME,e)}get mediaMuted(){return aK(this,i8.MEDIA_MUTED)}set mediaMuted(e){az(this,i8.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return aY(this,i8.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){aX(this,i8.MEDIA_VOLUME_UNAVAILABLE,e)}});var ol=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},od=(e,t,i)=>(ol(e,t,"read from private field"),i?i.call(e):t.get(e)),ou=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oh=(e,t,i,a)=>(ol(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let oc={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof oA&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof oA?a.element[a.attributeName]=t:a.value=t}}}};class om extends aS.DocumentFragment{constructor(e,t,i=oc){var a;super(),ou(this,tE,void 0),ou(this,tf,void 0),this.append(e.content.cloneNode(!0)),oh(this,tE,op(this)),oh(this,tf,i),null==(a=i.createCallback)||a.call(i,this,od(this,tE),t),i.processCallback(this,od(this,tE),t)}update(e){od(this,tf).processCallback(this,od(this,tE),e)}}tE=new WeakMap,tf=new WeakMap;let op=(e,t=[])=>{let i,a;for(let s of e.attributes||[])if(s.value.includes("{{")){let r=new of;for([i,a]of ob(s.value))if(i){let i=new oA(e,s.name,s.namespaceURI);r.append(i),t.push([a,i])}else r.append(a);s.value=r.toString()}for(let s of e.childNodes)if(1!==s.nodeType||s instanceof HTMLTemplateElement){let r=s.data;if(1===s.nodeType||r.includes("{{")){let n=[];if(r)for([i,a]of ob(r))if(i){let i=new oy(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(s instanceof HTMLTemplateElement){let i=new ow(e,s);n.push(i),t.push([i.expression,i])}s.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else op(s,t);return t},ov={},ob=e=>{let t="",i=0,a=ov[e],s=0,r;if(a)return a;for(a=[];r=e[s];s++)"{"===r&&"{"===e[s+1]&&"\\"!==e[s-1]&&e[s+2]&&1==++i?(t&&a.push([0,t]),t="",s++):"}"!==r||"}"!==e[s+1]||"\\"===e[s-1]||--i?t+=r||"":(a.push([1,t.trim()]),t="",s++);return t&&a.push([0,(i>0?"{{":"")+t]),ov[e]=a};class og{get value(){return""}set value(e){}toString(){return this.value}}let oE=new WeakMap;class of{constructor(){ou(this,tA,[])}[Symbol.iterator](){return od(this,tA).values()}get length(){return od(this,tA).length}item(e){return od(this,tA)[e]}append(...e){for(let t of e)t instanceof oA&&oE.set(t,this),od(this,tA).push(t)}toString(){return od(this,tA).join("")}}tA=new WeakMap;class oA extends og{constructor(e,t,i){super(),ou(this,tT),ou(this,ty,""),ou(this,tw,void 0),ou(this,tk,void 0),ou(this,tI,void 0),oh(this,tw,e),oh(this,tk,t),oh(this,tI,i)}get attributeName(){return od(this,tk)}get attributeNamespace(){return od(this,tI)}get element(){return od(this,tw)}get value(){return od(this,ty)}set value(e){od(this,ty)!==e&&(oh(this,ty,e),od(this,tT,t_)&&1!==od(this,tT,t_).length?od(this,tw).setAttributeNS(od(this,tI),od(this,tk),od(this,tT,t_).toString()):null==e?od(this,tw).removeAttributeNS(od(this,tI),od(this,tk)):od(this,tw).setAttributeNS(od(this,tI),od(this,tk),e))}get booleanValue(){return od(this,tw).hasAttributeNS(od(this,tI),od(this,tk))}set booleanValue(e){if(od(this,tT,t_)&&1!==od(this,tT,t_).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}ty=new WeakMap,tw=new WeakMap,tk=new WeakMap,tI=new WeakMap,tT=new WeakSet,t_=function(){return oE.get(this)};class oy extends og{constructor(e,t){super(),ou(this,tM,void 0),ou(this,tS,void 0),oh(this,tM,e),oh(this,tS,t?[...t]:[new Text])}get replacementNodes(){return od(this,tS)}get parentNode(){return od(this,tM)}get nextSibling(){return od(this,tS)[od(this,tS).length-1].nextSibling}get previousSibling(){return od(this,tS)[0].previousSibling}get value(){return od(this,tS).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),oh(this,tS,function(e,t,i,a=null){let s=0,r,n,o,l=i.length,d=t.length;for(;s<l&&s<d&&t[s]==i[s];)s++;for(;s<l&&s<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(s==d)for(;s<l;)e.insertBefore(i[s++],a);if(s==l)for(;s<d;)e.removeChild(t[s++]);else{for(r=t[s];s<l;)o=i[s++],n=r?r.nextSibling:a,r==o?r=n:s<l&&i[s]==n?(e.replaceChild(o,r),r=n):e.insertBefore(o,r);for(;r!=a;)n=r.nextSibling,e.removeChild(r),r=n}return i}(od(this,tS)[0].parentNode,od(this,tS),t,this.nextSibling))}}tM=new WeakMap,tS=new WeakMap;class ow extends oy{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let ok={string:e=>String(e)};class oI{constructor(e){this.template=e,this.state=void 0}}let oT=new WeakMap,o_=new WeakMap,oM={partial:(e,t)=>{t[e.expression]=new oI(e.template)},if:(e,t)=>{var i;if(ox(e.expression,t))if(oT.get(e)!==e.template){oT.set(e,e.template);let i=new om(e.template,t,oL);e.replace(i),o_.set(e,i)}else null==(i=o_.get(e))||i.update(t);else e.replace(""),oT.delete(e),o_.delete(e)}},oS=Object.keys(oM),oL={processCallback(e,t,i){var a,s;if(i)for(let[e,r]of t){if(r instanceof ow){if(!r.directive){let e=oS.find(e=>r.template.hasAttribute(e));e&&(r.directive=e,r.expression=r.template.getAttribute(e))}null==(a=oM[r.directive])||a.call(oM,r,i);continue}let t=ox(e,i);if(t instanceof oI){oT.get(r)!==t.template?(oT.set(r,t.template),r.value=t=new om(t.template,t.state,oL),o_.set(r,t)):null==(s=o_.get(r))||s.update(t.state);continue}t?(r instanceof oA&&r.attributeName.startsWith("aria-")&&(t=String(t)),r instanceof oA?"boolean"==typeof t?r.booleanValue=t:"function"==typeof t?r.element[r.attributeName]=t:r.value=t:(r.value=t,oT.delete(r),o_.delete(r))):r instanceof oA?r.value=void 0:(r.value=void 0,oT.delete(r),o_.delete(r))}}},oC={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=ok[t])?void 0:i.call(ok,e)}};function ox(e,t={}){var i,a,s,r,n,o,l;let d=(function(e,t){let i,a,s,r=[];for(;e;){for(let r in s=null,i=e.length,t)(a=t[r].exec(e))&&a.index<i&&(s={token:a[0],type:r,matches:a.slice(1)},i=a.index);i&&r.push({token:e.substr(0,i),type:void 0}),s&&r.push(s),e=e.substr(i+(s?s.token.length:0))}return r})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return oR(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return oR(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(s=l[e])?void 0:s.token,a=null==(r=l[e+1])?void 0:r.token,d=null==(n=l[e+2])?void 0:n.token;i&&"="===a&&(o[i]=oN(d,t))}return i}if(1===d.length)return oD(d[0])?oN(d[0].token,t):oR(e);if(2===d.length){let i=oC[null==(o=d[0])?void 0:o.token];return i&&oD(d[1])?i(oN(d[1].token,t)):oR(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=oC[i];if(!a||!oD(d[0])||!oD(d[2]))return oR(e);let s=oN(d[0].token,t);return a(s,"|"===i?d[2].token:oN(d[2].token,t))}}function oR(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function oD({type:e}){return["number","boolean","string","param"].includes(e)}function oN(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):ac(e)?parseFloat(e):t[e]}var oP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oU=(e,t,i)=>(oP(e,t,"read from private field"),i?i.call(e):t.get(e)),oO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oW=(e,t,i,a)=>(oP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oH=(e,t,i)=>(oP(e,t,"access private method"),i);let o$={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},oB=aL.createElement("template");oB.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class oV extends aS.HTMLElement{constructor(){super(),oO(this,tR),oO(this,tN),oO(this,tL,void 0),oO(this,tC,void 0),oO(this,tx,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(o$[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(i9.BREAKPOINTS_COMPUTED,this.render),oH(this,tR,tD).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=oU(this,tL))?e:this.constructor.template}set template(e){oW(this,tx,null),oW(this,tL,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>o$[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],s={};for(let e of a){let t=null!=(i=o$[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(ac(a)&&(a=parseFloat(a)),s[t]=""===a||a):s[t]=!1}return s}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&oH(this,tN,tP).call(this)}connectedCallback(){oH(this,tN,tP).call(this)}createRenderer(){this.template&&this.template!==oU(this,tC)&&(oW(this,tC,this.template),this.renderer=new om(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(oB.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function oq(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function oG(e){return e.split("-")[0]}tL=new WeakMap,tC=new WeakMap,tx=new WeakMap,tR=new WeakSet,tD=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},tN=new WeakSet,tP=function(){var e;let t=this.getAttribute("template");if(!t||t===oU(this,tx))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){oW(this,tx,t),oW(this,tL,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(oW(this,tx,t),oq(t).then(e=>{let t=aL.createElement("template");t.innerHTML=e,oW(this,tL,t),this.createRenderer()}).catch(console.error))},oV.observedAttributes=["template"],oV.processor=oL,aS.customElements.get("media-theme")||aS.customElements.define("media-theme",oV);class oF extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class oQ extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var oZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oj=(e,t,i)=>(oZ(e,t,"read from private field"),i?i.call(e):t.get(e)),oK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oz=(e,t,i,a)=>(oZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oY=(e,t,i)=>(oZ(e,t,"access private method"),i);function oX({type:e,text:t,value:i,checked:a}){let s=aL.createElement("media-chrome-menu-item");s.type=null!=e?e:"",s.part.add("menu-item"),e&&s.part.add(e),s.value=i,s.checked=a;let r=aL.createElement("span");return r.textContent=t,s.append(r),s}function oJ(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let o0="style",o1="hidden",o2="disabled";class o3 extends aS.HTMLElement{constructor(){if(super(),oK(this,tq),oK(this,tQ),oK(this,tj),oK(this,tz),oK(this,tX),oK(this,t2),oK(this,t5),oK(this,t7),oK(this,t9),oK(this,ie),oK(this,ii),oK(this,is),oK(this,io),oK(this,id),oK(this,ih),oK(this,im),oK(this,iv),oK(this,tU,null),oK(this,tO,null),oK(this,tW,null),oK(this,tH,new Set),oK(this,t$,void 0),oK(this,tB,!1),oK(this,tV,null),oK(this,tF,()=>{let e=oj(this,tH),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));oz(this,tH,t)}),oK(this,t0,()=>{oY(this,t2,t3).call(this),oY(this,t5,t4).call(this,!1)}),oK(this,t1,()=>{oY(this,t2,t3).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),oz(this,t$,new MutationObserver(oj(this,tF))),oj(this,t$).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[o2,o1,o0,"anchor",i5.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":oY(this,tq,tG).call(this,e);break;case"invoke":oY(this,tj,tK).call(this,e);break;case"click":oY(this,t7,t8).call(this,e);break;case"toggle":oY(this,ie,it).call(this,e);break;case"focusout":oY(this,is,ir).call(this,e);break;case"keydown":oY(this,io,il).call(this,e)}}connectedCallback(){var e,t;oz(this,tV,aQ(this.shadowRoot,":host")),oY(this,tQ,tZ).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),oz(this,tU,aO(this)),null==(t=null==(e=oj(this,tU))?void 0:e.associateElement)||t.call(e,this),this.hidden||(aD(o4(this),oj(this,t0)),aD(this,oj(this,t1)))}disconnectedCallback(){var e,t;aN(o4(this),oj(this,t0)),aN(this,oj(this,t1)),this.disable(),null==(t=null==(e=oj(this,tU))?void 0:e.unassociateElement)||t.call(e,this),oz(this,tU,null)}attributeChangedCallback(e,t,i){var a,s,r,n;e===o1&&i!==t?(oj(this,tB)||oz(this,tB,!0),this.hidden?oY(this,tX,tJ).call(this):oY(this,tz,tY).call(this),this.dispatchEvent(new oQ({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===i5.MEDIA_CONTROLLER?(t&&(null==(s=null==(a=oj(this,tU))?void 0:a.unassociateElement)||s.call(a,this),oz(this,tU,null)),i&&this.isConnected&&(oz(this,tU,aO(this)),null==(n=null==(r=oj(this,tU))?void 0:r.associateElement)||n.call(r,this))):e===o2&&i!==t?null==i?this.enable():this.disable():e===o0&&i!==t&&oY(this,tQ,tZ).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=aq(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(o5)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&oY(this,iv,ib).call(this,t)}focus(){if(oz(this,tO,aV()),this.items.length){oY(this,im,ip).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=oY(this,id,iu).call(this,e);i&&(oY(this,iv,ib).call(this,i,"checkbox"===i.type),oj(this,tW)&&!this.hidden&&(null==(t=oj(this,tO))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,s=this.items,r=null!=(i=null!=(t=oY(this,id,iu).call(this,e))?t:oY(this,ih,ic).call(this))?i:s[0],n=Math.max(0,s.indexOf(r));"ArrowDown"===a?n++:"ArrowUp"===a?n--:"Home"===e.key?n=0:"End"===e.key&&(n=s.length-1),n<0&&(n=s.length-1),n>s.length-1&&(n=0),oY(this,im,ip).call(this,s[n]),s[n].focus()}}function o5(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function o4(e){var t;return null!=(t=e.getAttribute("bounds")?aB(e,`#${e.getAttribute("bounds")}`):aU(e)||e.parentElement)?t:e}tU=new WeakMap,tO=new WeakMap,tW=new WeakMap,tH=new WeakMap,t$=new WeakMap,tB=new WeakMap,tV=new WeakMap,tq=new WeakSet,tG=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||oj(this,tF).call(this)},tF=new WeakMap,tQ=new WeakSet,tZ=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},tj=new WeakSet,tK=function(e){oz(this,tW,e.relatedTarget),a$(this,e.relatedTarget)||(this.hidden=!this.hidden)},tz=new WeakSet,tY=function(){var e;null==(e=oj(this,tW))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),aD(o4(this),oj(this,t0)),aD(this,oj(this,t1))},tX=new WeakSet,tJ=function(){var e;null==(e=oj(this,tW))||e.setAttribute("aria-expanded","false"),aN(o4(this),oj(this,t0)),aN(this,oj(this,t1))},t0=new WeakMap,t1=new WeakMap,t2=new WeakSet,t3=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:s}=function({anchor:e,floating:t},i){let a,s="x"==(["top","bottom"].includes(oG(i))?"y":"x")?"y":"x",r="y"===s?"height":"width",n=oG(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[r]/2-t[r]/2;switch(n){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[s]-=d;break;case"end":a[s]+=d}return a}(function({anchor:e,floating:t}){var i,a,s;let r,n;return{anchor:(i=e,a=t.offsetParent,r=i.getBoundingClientRect(),n=null!=(s=null==a?void 0:a.getBoundingClientRect())?s:{x:0,y:0},{x:r.x-n.x,y:r.y-n.y,width:r.width,height:r.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:s}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=o4(this).getBoundingClientRect(),s=a.width-t-e,r=a.height-i-this.offsetHeight,{style:n}=oj(this,tV);n.setProperty("position","absolute"),n.setProperty("right",`${Math.max(0,s)}px`),n.setProperty("--_menu-bottom",`${r}px`);let o=getComputedStyle(this),l=n.getPropertyValue("--_menu-bottom")===o.bottom?r:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},t5=new WeakSet,t4=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=oj(this,tV);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),oY(this,t2,t3).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),oY(this,t2,t3).call(this);a.removeProperty("--media-menu-transition-in")},t7=new WeakSet,t8=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(oj(this,t9,t6))){null==(t=oj(this,tO))||t.focus(),this.hidden=!0;return}let i=oY(this,id,iu).call(this,e);!i||i.hasAttribute("disabled")||(oY(this,im,ip).call(this,i),this.handleSelect(e))},t9=new WeakSet,t6=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},ie=new WeakSet,it=function(e){if(e.target===this)return;oY(this,ii,ia).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new oF({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);oY(this,t5,t4).call(this,!0)},ii=new WeakSet,ia=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},is=new WeakSet,ir=function(e){var t;a$(this,e.relatedTarget)||(oj(this,tB)&&(null==(t=oj(this,tO))||t.focus()),oj(this,tW)&&oj(this,tW)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},io=new WeakSet,il=function(e){var t,i,a,s,r;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(n))if(e.preventDefault(),e.stopPropagation(),"Tab"===n){if(oj(this,tB)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(s=null==(a=this.nextElementSibling)?void 0:a.focus)||s.call(a),this.blur()}else"Escape"===n?(null==(r=oj(this,tO))||r.focus(),oj(this,tB)&&(this.hidden=!0)):"Enter"===n||" "===n?this.handleSelect(e):this.handleMove(e)},id=new WeakSet,iu=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},ih=new WeakSet,ic=function(){return this.items.find(e=>0===e.tabIndex)},im=new WeakSet,ip=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},iv=new WeakSet,ib=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},o3.shadowRootOptions={mode:"open"},o3.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex);
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},aS.customElements.get("media-chrome-menu")||aS.customElements.define("media-chrome-menu",o3);var o7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o8=(e,t,i)=>(o7(e,t,"read from private field"),i?i.call(e):t.get(e)),o9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o6=(e,t,i,a)=>(o7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),le=(e,t,i)=>(o7(e,t,"access private method"),i);let lt="type",li="value",la="checked",ls="disabled";class lr extends aS.HTMLElement{constructor(){if(super(),o9(this,iA),o9(this,iw),o9(this,iI),o9(this,iM),o9(this,iL),o9(this,ix),o9(this,ig,!1),o9(this,iE,void 0),o9(this,i_,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],s=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,r=aL.createElement("span");r.textContent=null!=s?s:"",i.replaceChildren(r)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=aP(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[lt,ls,la,li]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),ln(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":le(this,iA,iy).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":le(this,iL,iC).call(this,e);break;case"keyup":le(this,iM,iS).call(this,e)}}attributeChangedCallback(e,t,i){e===la&&ln(this)&&!o8(this,ig)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===lt&&i!==t?this.role="menuitem"+i:e===ls&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(ls)||this.enable(),this.role="menuitem"+this.type,o6(this,iE,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),le(this,ix,iR).call(this)}disconnectedCallback(){this.disable(),le(this,ix,iR).call(this),o6(this,iE,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aq(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(lt))?e:""}set type(e){this.setAttribute(lt,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(li))?e:this.text}set value(e){this.setAttribute(li,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(ln(this))return"true"===this.getAttribute("aria-checked")}set checked(e){ln(this)&&(o6(this,ig,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!ln(this)&&this.invokeTargetElement&&a$(this,e.target)&&this.invokeTargetElement.dispatchEvent(new oF({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function ln(e){return"radio"===e.type||"checkbox"===e.type}ig=new WeakMap,iE=new WeakMap,iA=new WeakSet,iy=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?le(this,iw,ik).call(this):le(this,iI,iT).call(this))},iw=new WeakSet,ik=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",o8(this,i_)),this.submenuElement.addEventListener("addmenuitem",o8(this,i_)),this.submenuElement.addEventListener("removemenuitem",o8(this,i_)),o8(this,i_).call(this)},iI=new WeakSet,iT=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",o8(this,i_)),this.submenuElement.removeEventListener("addmenuitem",o8(this,i_)),this.submenuElement.removeEventListener("removemenuitem",o8(this,i_)),o8(this,i_).call(this)},i_=new WeakMap,iM=new WeakSet,iS=function(e){let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",le(this,iM,iS))},iL=new WeakSet,iC=function(e){let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",le(this,iM,iS)):this.addEventListener("keyup",le(this,iM,iS),{once:!0})},ix=new WeakSet,iR=function(){var e;let t=null==(e=o8(this,iE))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},lr.shadowRootOptions={mode:"open"},lr.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},lr.getSuffixSlotInnerHTML=function(e){return""},aS.customElements.get("media-chrome-menu-item")||aS.customElements.define("media-chrome-menu-item",lr);class lo extends o3{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aU(this).querySelector("media-settings-menu-button")}}lo.getTemplateHTML=function(e){return`
    ${o3.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},aS.customElements.get("media-settings-menu")||aS.customElements.define("media-settings-menu",lo);class ll extends lr{}ll.shadowRootOptions={mode:"open"},ll.getTemplateHTML=function(e){return`
    ${lr.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},ll.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},aS.customElements.get("media-settings-menu-item")||aS.customElements.define("media-settings-menu-item",ll);class ld extends rT{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aq(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new oF({relatedTarget:this}))}}aS.customElements.get("media-chrome-menu-button")||aS.customElements.define("media-chrome-menu-button",ld);class lu extends ld{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aA("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aU(this).querySelector("media-settings-menu")}}lu.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},lu.getTooltipContentHTML=function(){return aA("Settings")},aS.customElements.get("media-settings-menu-button")||aS.customElements.define("media-settings-menu-button",lu);var lh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lc=(e,t,i)=>(lh(e,t,"read from private field"),i?i.call(e):t.get(e)),lm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lp=(e,t,i,a)=>(lh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lv=(e,t,i)=>(lh(e,t,"access private method"),i);iD=new WeakMap,iN=new WeakMap,iP=new WeakSet,iU=function(){if(lc(this,iN)===JSON.stringify(this.mediaAudioTrackList))return;lp(this,iN,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=oX({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(oJ(this,"checked-indicator")),this.defaultSlot.append(e)}},iO=new WeakSet,iW=function(){if(null==this.value)return;let e=new aS.CustomEvent(i3.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-audio-track-menu")||aS.customElements.define("media-audio-track-menu",class extends o3{constructor(){super(...arguments),lm(this,iP),lm(this,iO),lm(this,iD,[]),lm(this,iN,void 0)}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_AUDIO_TRACK_LIST,i8.MEDIA_AUDIO_TRACK_ENABLED,i8.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i8.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===i8.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;lp(this,iD,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(au)),lv(this,iP,iU).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lv(this,iO,iW))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lv(this,iO,iW))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=aU(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return lc(this,iD)}set mediaAudioTrackList(e){lp(this,iD,e),lv(this,iP,iU).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=aY(this,i8.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){aX(this,i8.MEDIA_AUDIO_TRACK_ENABLED,e)}});let lb=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class lg extends ld{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_AUDIO_TRACK_ENABLED,i8.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aA("Audio"))}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=aU(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=aY(this,i8.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){aX(this,i8.MEDIA_AUDIO_TRACK_ENABLED,e)}}lg.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${lb}</slot>
  `},lg.getTooltipContentHTML=function(){return aA("Audio")},aS.customElements.get("media-audio-track-menu-button")||aS.customElements.define("media-audio-track-menu-button",lg);var lE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lf=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lA=(e,t,i)=>(lE(e,t,"access private method"),i);let ly=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class lw extends o3{constructor(){super(...arguments),lf(this,i$),lf(this,iV),lf(this,iH,void 0)}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_SUBTITLES_LIST,i8.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_SUBTITLES_LIST&&t!==i?lA(this,i$,iB).call(this):e===i8.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lA(this,iV,iq))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lA(this,iV,iq))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aU(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return lk(this,i8.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){lI(this,i8.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return lk(this,i8.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){lI(this,i8.MEDIA_SUBTITLES_SHOWING,e)}}iH=new WeakMap,i$=new WeakSet,iB=function(){var e,t,i,a,s,r;if(lE(this,t=iH,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=iH,s=JSON.stringify(this.mediaSubtitlesList),lE(this,a,"write to private field"),r?r.call(this,s):a.set(this,s),this.defaultSlot.textContent="";let n=!this.value,o=oX({type:"radio",text:this.formatMenuItemText(aA("Off")),value:"off",checked:n});for(let t of(o.prepend(oJ(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=oX({type:"radio",text:this.formatMenuItemText(t.label,t),value:sg(t),checked:this.value==sg(t)});i.prepend(oJ(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(oJ(this,"captions-indicator")),this.defaultSlot.append(i)}},iV=new WeakSet,iq=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(i8.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aS.CustomEvent(i3.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aS.CustomEvent(i3.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},lw.getTemplateHTML=function(e){return`
    ${o3.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${ly}</slot>
  `};let lk=(e,t)=>{let i=e.getAttribute(t);return i?sv(i):[]},lI=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sE(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aS.customElements.get("media-captions-menu")||aS.customElements.define("media-captions-menu",lw);let lT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,l_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,lM=e=>{e.setAttribute("aria-checked",sw(e).toString())};class lS extends ld{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_SUBTITLES_LIST,i8.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aA("closed captions")),lM(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_SUBTITLES_SHOWING&&lM(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=aU(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return lL(this,i8.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){lC(this,i8.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return lL(this,i8.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){lC(this,i8.MEDIA_SUBTITLES_SHOWING,e)}}lS.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${lT}</slot>
      <slot name="off">${l_}</slot>
    </slot>
  `},lS.getTooltipContentHTML=function(){return aA("Captions")};let lL=(e,t)=>{let i=e.getAttribute(t);return i?sv(i):[]},lC=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=sE(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aS.customElements.get("media-captions-menu-button")||aS.customElements.define("media-captions-menu-button",lS);var lx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lR=(e,t,i)=>(lx(e,t,"read from private field"),i?i.call(e):t.get(e)),lD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lN=(e,t,i)=>(lx(e,t,"access private method"),i);let lP="rates";iG=new WeakMap,iF=new WeakSet,iQ=function(){for(let e of(this.defaultSlot.textContent="",lR(this,iG))){let t=oX({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(oJ(this,"checked-indicator")),this.defaultSlot.append(t)}},iZ=new WeakSet,ij=function(){if(!this.value)return;let e=new aS.CustomEvent(i3.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-playback-rate-menu")||aS.customElements.define("media-playback-rate-menu",class extends o3{constructor(){super(),lD(this,iF),lD(this,iZ),lD(this,iG,new sm(this,lP,{defaultValue:nR})),lN(this,iF,iQ).call(this)}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_PLAYBACK_RATE,lP]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i8.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===lP&&t!=i&&(lR(this,iG).value=i,lN(this,iF,iQ).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lN(this,iZ,ij))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lN(this,iZ,ij))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aU(this).querySelector("media-playback-rate-menu-button")}get rates(){return lR(this,iG)}set rates(e){e?Array.isArray(e)?lR(this,iG).value=e.join(" "):"string"==typeof e&&(lR(this,iG).value=e):lR(this,iG).value="",lN(this,iF,iQ).call(this)}get mediaPlaybackRate(){return aZ(this,i8.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i8.MEDIA_PLAYBACK_RATE,e)}});class lU extends ld{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i8.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",aA("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aU(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return aZ(this,i8.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i8.MEDIA_PLAYBACK_RATE,e)}}lU.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},lU.getTooltipContentHTML=function(){return aA("Playback rate")},aS.customElements.get("media-playback-rate-menu-button")||aS.customElements.define("media-playback-rate-menu-button",lU);var lO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lW=(e,t,i)=>(lO(e,t,"read from private field"),i?i.call(e):t.get(e)),lH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l$=(e,t,i,a)=>(lO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lB=(e,t,i)=>(lO(e,t,"access private method"),i);iK=new WeakMap,iz=new WeakMap,iY=new WeakSet,iX=function(){if(lW(this,iz).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&lW(this,iz).mediaHeight===this.mediaHeight)return;lW(this,iz).mediaRenditionList=JSON.stringify(this.mediaRenditionList),lW(this,iz).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=oX({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(oJ(this,"checked-indicator")),this.defaultSlot.append(e)}let i=oX({type:"radio",text:t?this.formatMenuItemText(`${aA("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(aA("Auto")),value:"auto",checked:t}),a=this.mediaHeight>0?`${aA("Auto")} (${this.mediaHeight}p)`:aA("Auto");i.dataset.description=a,i.prepend(oJ(this,"checked-indicator")),this.defaultSlot.append(i)},iJ=new WeakSet,i0=function(){if(null==this.value)return;let e=new aS.CustomEvent(i3.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-rendition-menu")||aS.customElements.define("media-rendition-menu",class extends o3{constructor(){super(...arguments),lH(this,iY),lH(this,iJ),lH(this,iK,[]),lH(this,iz,{})}static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_RENDITION_LIST,i8.MEDIA_RENDITION_SELECTED,i8.MEDIA_RENDITION_UNAVAILABLE,i8.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i8.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",lB(this,iY,iX).call(this);else if(e===i8.MEDIA_RENDITION_LIST&&t!==i)l$(this,iK,null==i?void 0:i.split(/\s+/).map(al)),lB(this,iY,iX).call(this);else e===i8.MEDIA_HEIGHT&&t!==i&&lB(this,iY,iX).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lB(this,iJ,i0))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lB(this,iJ,i0))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aU(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return lW(this,iK)}set mediaRenditionList(e){l$(this,iK,e),lB(this,iY,iX).call(this)}get mediaRenditionSelected(){return aY(this,i8.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aX(this,i8.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return aZ(this,i8.MEDIA_HEIGHT)}set mediaHeight(e){aj(this,i8.MEDIA_HEIGHT,e)}});let lV=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class lq extends ld{static get observedAttributes(){return[...super.observedAttributes,i8.MEDIA_RENDITION_SELECTED,i8.MEDIA_RENDITION_UNAVAILABLE,i8.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aA("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aU(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return aY(this,i8.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aX(this,i8.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return aZ(this,i8.MEDIA_HEIGHT)}set mediaHeight(e){aj(this,i8.MEDIA_HEIGHT,e)}}lq.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${lV}</slot>
  `},lq.getTooltipContentHTML=function(){return aA("Quality")},aS.customElements.get("media-rendition-menu-button")||aS.customElements.define("media-rendition-menu-button",lq);let lG=aS.document?.createElement?.("template");lG&&(lG.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <slot name="centered-chrome" slot="centered-chrome"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only 'Auto' is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              'visibility' didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `),aS.customElements&&!aS.customElements.get("media-theme-sutro")&&aS.customElements.define("media-theme-sutro",class extends oV{static template=lG});var lF=e.i(268399);e.s(["VideoPlayer",0,function(e){let t,i,a=(0,i2.c)(5),{customDomain:s,playbackId:r,tokens:n}=e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"absolute",inset:0},a[0]=t):t=a[0],a[1]!==s||a[2]!==r||a[3]!==n?(i=(0,i1.jsx)(lF.default,{customDomain:s,theme:"sutro",playbackId:r,tokens:n,autoPlay:!1,loop:!1,style:t}),a[1]=s,a[2]=r,a[3]=n,a[4]=i):i=a[4],i}],453299)}]);