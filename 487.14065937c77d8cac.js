(self.webpackChunkapplications=self.webpackChunkapplications||[]).push([[487],{5487:(Q,_,p)=>{p.r(_);var l=p(1481),s=p(1423);let S=(()=>{class u{constructor(){this.title="applications"}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275cmp=s.\u0275\u0275defineComponent({type:u,selectors:[["app-root"]],decls:8,vars:0,consts:[["href","/applications/first"],["href","/applications/second"]],template:function(f,P){1&f&&(s.\u0275\u0275elementStart(0,"p"),s.\u0275\u0275text(1,"applications works!"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(2,"p")(3,"a",0),s.\u0275\u0275text(4,"First"),s.\u0275\u0275elementEnd()(),s.\u0275\u0275elementStart(5,"p")(6,"a",1),s.\u0275\u0275text(7,"Second"),s.\u0275\u0275elementEnd()())},encapsulation:2}),u})();var v=p(730);const g=[{path:"",component:S}];let D=(()=>{class u{}return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=s.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=s.\u0275\u0275defineInjector({imports:[v.RouterModule.forChild(g),v.RouterModule]}),u})(),y=(()=>{class u{}return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=s.\u0275\u0275defineNgModule({type:u,bootstrap:[S]}),u.\u0275inj=s.\u0275\u0275defineInjector({imports:[l.b2,D]}),u})();(0,s.enableProdMode)(),l.q6().bootstrapModule(y).catch(u=>console.error(u))},1481:(Q,_,p)=>{p.d(_,{Dx:()=>Z,b2:()=>ge,q6:()=>he});var l=p(1327),s=p(1423);class S extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class v extends S{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new v)}onAndCancel(t,e,r){return t.addEventListener(e,r,!1),()=>{t.removeEventListener(e,r,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getBaseHref(t){const e=function D(){return g=g||document.querySelector("base"),g?g.getAttribute("href"):null}();return null==e?null:function O(n){y=y||document.createElement("a"),y.setAttribute("href",n);const t=y.pathname;return"/"===t.charAt(0)?t:`/${t}`}(e)}resetBaseElement(){g=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return(0,l.\u0275parseCookieValue)(document.cookie,t)}}let y,g=null;const u=new s.InjectionToken("TRANSITION_ID"),f=[{provide:s.APP_INITIALIZER,useFactory:function m(n,t,e){return()=>{e.get(s.ApplicationInitStatus).donePromise.then(()=>{const r=(0,l.\u0275getDOM)(),o=t.querySelectorAll(`style[ng-transition="${n}"]`);for(let a=0;a<o.length;a++)r.remove(o[a])})}},deps:[u,l.DOCUMENT,s.Injector],multi:!0}];let ee=(()=>{class n{build(){return new XMLHttpRequest}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const w=new s.InjectionToken("EventManagerPlugins");let M=(()=>{class n{constructor(e,r){this._zone=r,this._eventNameToPlugin=new Map,e.forEach(o=>o.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,r,o){return this._findPluginFor(r).addEventListener(e,r,o)}addGlobalEventListener(e,r,o){return this._findPluginFor(r).addGlobalEventListener(e,r,o)}getZone(){return this._zone}_findPluginFor(e){const r=this._eventNameToPlugin.get(e);if(r)return r;const o=this._plugins;for(let a=0;a<o.length;a++){const i=o[a];if(i.supports(e))return this._eventNameToPlugin.set(e,i),i}throw new Error(`No event manager plugin found for event ${e}`)}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(w),s.\u0275\u0275inject(s.NgZone))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class k{constructor(t){this._doc=t}addGlobalEventListener(t,e,r){const o=(0,l.\u0275getDOM)().getGlobalEventTarget(this._doc,t);if(!o)throw new Error(`Unsupported event target ${o} for event ${e}`);return this.addEventListener(o,e,r)}}let H=(()=>{class n{constructor(){this._stylesSet=new Set}addStyles(e){const r=new Set;e.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})(),E=(()=>{class n extends H{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,r,o){e.forEach(a=>{const i=this._doc.createElement("style");i.textContent=a,o.push(r.appendChild(i))})}addHost(e){const r=[];this._addStylesToHost(this._stylesSet,e,r),this._hostNodes.set(e,r)}removeHost(e){const r=this._hostNodes.get(e);r&&r.forEach(L),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(e,o,r)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(L))}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();function L(n){(0,l.\u0275getDOM)().remove(n)}const C={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},A=/%COMP%/g,F="%COMP%",te=`_nghost-${F}`,ne=`_ngcontent-${F}`;function T(n,t,e){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?T(n,o,e):(o=o.replace(A,n),e.push(o))}return e}function j(n){return t=>{if("__ngUnwrap__"===t)return n;!1===n(t)&&(t.preventDefault(),t.returnValue=!1)}}let b=(()=>{class n{constructor(e,r,o){this.eventManager=e,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new R(e)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;switch(r.encapsulation){case s.ViewEncapsulation.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new ae(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(e),o}case 1:case s.ViewEncapsulation.ShadowDom:return new ie(this.eventManager,this.sharedStylesHost,e,r);default:if(!this.rendererByCompId.has(r.id)){const o=T(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(M),s.\u0275\u0275inject(E),s.\u0275\u0275inject(s.APP_ID))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();class R{constructor(t){this.eventManager=t,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(t,e){return e?document.createElementNS(C[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){(B(t)?t.content:t).appendChild(e)}insertBefore(t,e,r){t&&(B(t)?t.content:t).insertBefore(e,r)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let r="string"==typeof t?document.querySelector(t):t;if(!r)throw new Error(`The selector "${t}" did not match any elements`);return e||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,r,o){if(o){e=o+":"+e;const a=C[o];a?t.setAttributeNS(a,e,r):t.setAttribute(e,r)}else t.setAttribute(e,r)}removeAttribute(t,e,r){if(r){const o=C[r];o?t.removeAttributeNS(o,e):t.removeAttribute(`${r}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,r,o){o&(s.RendererStyleFlags2.DashCase|s.RendererStyleFlags2.Important)?t.style.setProperty(e,r,o&s.RendererStyleFlags2.Important?"important":""):t.style[e]=r}removeStyle(t,e,r){r&s.RendererStyleFlags2.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,r){t[e]=r}setValue(t,e){t.nodeValue=e}listen(t,e,r){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,j(r)):this.eventManager.addEventListener(t,e,j(r))}}function B(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class ae extends R{constructor(t,e,r,o){super(t),this.component=r;const a=T(o+"-"+r.id,r.styles,[]);e.addStyles(a),this.contentAttr=function re(n){return ne.replace(A,n)}(o+"-"+r.id),this.hostAttr=function oe(n){return te.replace(A,n)}(o+"-"+r.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const r=super.createElement(t,e);return super.setAttribute(r,this.contentAttr,""),r}}class ie extends R{constructor(t,e,r,o){super(t),this.sharedStylesHost=e,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const a=T(o.id,o.styles,[]);for(let i=0;i<a.length;i++){const c=document.createElement("style");c.textContent=a[i],this.shadowRoot.appendChild(c)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,r){return super.insertBefore(this.nodeOrShadowRoot(t),e,r)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let le=(()=>{class n extends k{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,o){return e.addEventListener(r,o,!1),()=>this.removeEventListener(e,r,o)}removeEventListener(e,r,o){return e.removeEventListener(r,o)}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const G=["alt","control","meta","shift"],ue={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ce={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let de=(()=>{class n extends k{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,r,o){const a=n.parseEventName(r),i=n.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,a.domEventName,i))}static parseEventName(e){const r=e.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const a=n._normalizeKey(r.pop());let i="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),i="code."),G.forEach(q=>{const J=r.indexOf(q);J>-1&&(r.splice(J,1),i+=q+".")}),i+=a,0!=r.length||0===a.length)return null;const d={};return d.domEventName=o,d.fullKey=i,d}static matchEventFullKeyCode(e,r){let o=ue[e.key]||e.key,a="";return r.indexOf("code.")>-1&&(o=e.code,a="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),G.forEach(i=>{i!==o&&(0,ce[i])(e)&&(a+=i+".")}),a+=o,a===r)}static eventCallback(e,r,o){return a=>{n.matchEventFullKeyCode(a,e)&&o.runGuarded(()=>r(a))}}static _normalizeKey(e){return"esc"===e?"escape":e}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac}),n})();const he=(0,s.createPlatformFactory)(s.platformCore,"browser",[{provide:s.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:s.PLATFORM_INITIALIZER,useValue:function fe(){v.makeCurrent()},multi:!0},{provide:l.DOCUMENT,useFactory:function me(){return(0,s.\u0275setDocument)(document),document},deps:[]}]),$=new s.InjectionToken(""),K=[{provide:s.\u0275TESTABILITY_GETTER,useClass:class P{addToWindow(t){s.\u0275global.getAngularTestability=(r,o=!0)=>{const a=t.findTestabilityInTree(r,o);if(null==a)throw new Error("Could not find testability for element.");return a},s.\u0275global.getAllAngularTestabilities=()=>t.getAllTestabilities(),s.\u0275global.getAllAngularRootElements=()=>t.getAllRootElements(),s.\u0275global.frameworkStabilizers||(s.\u0275global.frameworkStabilizers=[]),s.\u0275global.frameworkStabilizers.push(r=>{const o=s.\u0275global.getAllAngularTestabilities();let a=o.length,i=!1;const c=function(d){i=i||d,a--,0==a&&r(i)};o.forEach(function(d){d.whenStable(c)})})}findTestabilityInTree(t,e,r){return null==e?null:t.getTestability(e)??(r?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null)}},deps:[]},{provide:s.\u0275TESTABILITY,useClass:s.Testability,deps:[s.NgZone,s.TestabilityRegistry,s.\u0275TESTABILITY_GETTER]},{provide:s.Testability,useClass:s.Testability,deps:[s.NgZone,s.TestabilityRegistry,s.\u0275TESTABILITY_GETTER]}],W=[{provide:s.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:s.ErrorHandler,useFactory:function pe(){return new s.ErrorHandler},deps:[]},{provide:w,useClass:le,multi:!0,deps:[l.DOCUMENT,s.NgZone,s.PLATFORM_ID]},{provide:w,useClass:de,multi:!0,deps:[l.DOCUMENT]},{provide:b,useClass:b,deps:[M,E,s.APP_ID]},{provide:s.RendererFactory2,useExisting:b},{provide:H,useExisting:E},{provide:E,useClass:E,deps:[l.DOCUMENT]},{provide:M,useClass:M,deps:[w,s.NgZone]},{provide:l.XhrFactory,useClass:ee,deps:[]},[]];let ge=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:s.APP_ID,useValue:e.appId},{provide:u,useExisting:s.APP_ID},f]}}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject($,12))},n.\u0275mod=s.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=s.\u0275\u0275defineInjector({providers:[...W,...K],imports:[l.CommonModule,s.ApplicationModule]}),n})(),Z=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}return n.\u0275fac=function(e){return new(e||n)(s.\u0275\u0275inject(l.DOCUMENT))},n.\u0275prov=s.\u0275\u0275defineInjectable({token:n,factory:function(e){let r=null;return r=e?new e:function ye(){return new Z((0,s.\u0275\u0275inject)(l.DOCUMENT))}(),r},providedIn:"root"}),n})();typeof window<"u"&&window}}]);