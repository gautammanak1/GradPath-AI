import{o as Du,a as ku}from"./idb-BRpoTlNJ.js";var ua={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Vu=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const h=n[e++];t[i++]=String.fromCharCode((s&31)<<6|h&63)}else if(s>239&&s<365){const h=n[e++],u=n[e++],c=n[e++],m=((s&7)<<18|(h&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(m>>10)),t[i++]=String.fromCharCode(56320+(m&1023))}else{const h=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(h&63)<<6|u&63)}}return t.join("")},wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const h=n[s],u=s+1<n.length,c=u?n[s+1]:0,m=s+2<n.length,E=m?n[s+2]:0,A=h>>2,R=(h&3)<<4|c>>4;let b=(c&15)<<2|E>>6,P=E&63;m||(P=64,u||(b=64)),i.push(e[A],e[R],e[b],e[P])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ah(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Vu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const h=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const E=s<n.length?e[n.charAt(s)]:64;++s;const R=s<n.length?e[n.charAt(s)]:64;if(++s,h==null||c==null||E==null||R==null)throw new Nu;const b=h<<2|c>>4;if(i.push(b),E!==64){const P=c<<4&240|E>>2;if(i.push(P),R!==64){const D=E<<6&192|R;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};let Nu=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const Ou=function(n){const t=Ah(n);return wh.encodeByteArray(t,!0)},Ui=function(n){return Ou(n).replace(/\./g,"")},xu=function(n){try{return wh.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=()=>Lu().__FIREBASE_DEFAULTS__,Fu=()=>{if(typeof process>"u"||typeof ua>"u")return;const n=ua.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&xu(n[1]);return t&&JSON.parse(t)},ns=()=>{try{return Mu()||Fu()||Uu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$u=n=>{var t,e;return(e=(t=ns())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Rh=n=>{const t=$u(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},bh=()=>{var n;return(n=ns())===null||n===void 0?void 0:n.config},q_=n=>{var t;return(t=ns())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,h=n.sub||n.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ui(JSON.stringify(e)),Ui(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function G_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(No())}function ju(){var n;const t=(n=ns())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function K_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function W_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q_(){const n=No();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hu(){return!ju()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qu(){try{return typeof indexedDB=="object"}catch{return!1}}function zu(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var h;t(((h=s.error)===null||h===void 0?void 0:h.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="FirebaseError";let gi=class Ph extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Gu,Object.setPrototypeOf(this,Ph.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sh.prototype.create)}},Sh=class{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,h=this.errors[t],u=h?Ku(h,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new gi(s,c,i)}};function Ku(n,t){return n.replace(Wu,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Wu=/\{\$([^}]+)}/g;function Y_(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function ho(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const h=n[s],u=t[s];if(ca(h)&&ca(u)){if(!ho(h,u))return!1}else if(h!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function ca(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Z_(n,t){const e=new Qu(n,t);return e.subscribe.bind(e)}let Qu=class{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");Xu(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=Ys),s.error===void 0&&(s.error=Ys),s.complete===void 0&&(s.complete=Ys);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),h}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Xu(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Ys(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n){return n&&n._delegate?n._delegate:n}let Bn=class{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu=class{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new Bu;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(h){if(s)return null;throw h}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zu(t))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const h=this.getOrInitializeService({instanceIdentifier:s});i.resolve(h)}catch{}}}}clearInstance(t=En){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=En){return this.instances.has(t)}getOptions(t=En){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[h,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(h);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),h=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;h.add(t),this.onInitCallbacks.set(s,h);const u=this.instances.get(s);return u&&t(u,s),()=>{h.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ju(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=En){return this.component?this.component.multipleInstances?t:En:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Ju(n){return n===En?void 0:n}function Zu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Yu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(nt||(nt={}));const ec={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},nc=nt.INFO,rc={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},ic=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=rc[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let Dh=class{constructor(t){this.name=t,this._logLevel=nc,this._logHandler=ic,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ec[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...t),this._logHandler(this,nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...t),this._logHandler(this,nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...t),this._logHandler(this,nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...t),this._logHandler(this,nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...t),this._logHandler(this,nt.ERROR,...t)}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(oc(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}};function oc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const lo="@firebase/app",fa="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Dh("@firebase/app"),ac="@firebase/app-compat",hc="@firebase/analytics-compat",lc="@firebase/analytics",uc="@firebase/app-check-compat",cc="@firebase/app-check",fc="@firebase/auth",dc="@firebase/auth-compat",pc="@firebase/database",gc="@firebase/database-compat",mc="@firebase/functions",_c="@firebase/functions-compat",yc="@firebase/installations",vc="@firebase/installations-compat",Ec="@firebase/messaging",Tc="@firebase/messaging-compat",Ic="@firebase/performance",Ac="@firebase/performance-compat",wc="@firebase/remote-config",Rc="@firebase/remote-config-compat",bc="@firebase/storage",Cc="@firebase/storage-compat",Pc="@firebase/firestore",Sc="@firebase/vertexai-preview",Dc="@firebase/firestore-compat",kc="firebase",Vc="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="[DEFAULT]",Nc={[lo]:"fire-core",[ac]:"fire-core-compat",[lc]:"fire-analytics",[hc]:"fire-analytics-compat",[cc]:"fire-app-check",[uc]:"fire-app-check-compat",[fc]:"fire-auth",[dc]:"fire-auth-compat",[pc]:"fire-rtdb",[gc]:"fire-rtdb-compat",[mc]:"fire-fn",[_c]:"fire-fn-compat",[yc]:"fire-iid",[vc]:"fire-iid-compat",[Ec]:"fire-fcm",[Tc]:"fire-fcm-compat",[Ic]:"fire-perf",[Ac]:"fire-perf-compat",[wc]:"fire-rc",[Rc]:"fire-rc-compat",[bc]:"fire-gcs",[Cc]:"fire-gcs-compat",[Pc]:"fire-fst",[Dc]:"fire-fst-compat",[Sc]:"fire-vertex","fire-js":"fire-js",[kc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Map,Oc=new Map,co=new Map;function da(n,t){try{n.container.addComponent(t)}catch(e){Cn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function oi(n){const t=n.name;if(co.has(t))return Cn.debug(`There were multiple attempts to register component ${t}.`),!1;co.set(t,n);for(const e of $i.values())da(e,n);for(const e of Oc.values())da(e,n);return!0}function kh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function oy(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new Sh("app","Firebase",xc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc=class{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=Vc;function Mc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:uo,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw je.create("bad-app-name",{appName:String(s)});if(e||(e=bh()),!e)throw je.create("no-options");const h=$i.get(s);if(h){if(ho(e,h.options)&&ho(i,h.config))return h;throw je.create("duplicate-app",{appName:s})}const u=new tc(s);for(const m of co.values())u.addComponent(m);const c=new Lc(e,i,u);return $i.set(s,c),c}function Nh(n=uo){const t=$i.get(n);if(!t&&n===uo&&bh())return Mc();if(!t)throw je.create("no-app",{appName:n});return t}function wn(n,t,e){var i;let s=(i=Nc[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const h=s.match(/\s|\//),u=t.match(/\s|\//);if(h||u){const c=[`Unable to register library "${s}" with version "${t}":`];h&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),h&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cn.warn(c.join(" "));return}oi(new Bn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="firebase-heartbeat-database",Uc=1,ai="firebase-heartbeat-store";let Js=null;function Oh(){return Js||(Js=Du(Fc,Uc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ai)}catch(e){console.warn(e)}}}}).catch(n=>{throw je.create("idb-open",{originalErrorMessage:n.message})})),Js}async function $c(n){try{const e=(await Oh()).transaction(ai),i=await e.objectStore(ai).get(xh(n));return await e.done,i}catch(t){if(t instanceof gi)Cn.warn(t.message);else{const e=je.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(e.message)}}}async function pa(n,t){try{const i=(await Oh()).transaction(ai,"readwrite");await i.objectStore(ai).put(t,xh(n)),await i.done}catch(e){if(e instanceof gi)Cn.warn(e.message);else{const i=je.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(i.message)}}}function xh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=1024,jc=30*24*60*60*1e3;let Hc=class{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zc(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=ga();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(u=>u.date===h)))return this._heartbeatsCache.heartbeats.push({date:h,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=jc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ga(),{heartbeatsToSend:i,unsentEntries:s}=qc(this._heartbeatsCache.heartbeats),h=Ui(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}};function ga(){return new Date().toISOString().substring(0,10)}function qc(n,t=Bc){const e=[];let i=n.slice();for(const s of n){const h=e.find(u=>u.agent===s.agent);if(h){if(h.dates.push(s.date),ma(e)>t){h.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ma(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}let zc=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qu()?zu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $c(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}};function ma(n){return Ui(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n){oi(new Bn("platform-logger",t=>new sc(t),"PRIVATE")),oi(new Bn("heartbeat",t=>new Hc(t),"PRIVATE")),wn(lo,fa,n),wn(lo,fa,"esm2017"),wn("fire-js","")}Gc("");var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rn,Lh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,d){function g(){}g.prototype=d.prototype,v.D=d.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(_,y,T){for(var p=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)p[pt-2]=arguments[pt];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=v.g[0],g=v.g[1],y=v.g[2];var T=v.g[3],p=d+(T^g&(y^T))+_[0]+3614090360&4294967295;d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[3]+3250441966&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[4]+4118548399&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[7]+4249261313&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[8]+1770035416&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[11]+2304563134&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[12]+1804603682&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[15]+1236535329&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(g^y))+_[1]+4129170786&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[0]+3921069994&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[5]+3593408605&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[4]+3889429448&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[9]+568446438&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[8]+1163531501&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[13]+2850285829&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[12]+2368359562&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(g^y^T)+_[5]+4294588738&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[14]+4259657740&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[1]+2763975236&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[10]+3200236656&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[13]+681279174&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[6]+76029189&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[9]+3654602809&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[2]+3299628645&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(y^(g|~T))+_[0]+4096336452&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[5]+4237533241&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[12]+1700485571&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[1]+2240044497&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[8]+1873313359&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[13]+1309151649&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[4]+4149444226&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}i.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var g=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=g;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<d;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var g=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=g&255,g/=256;for(this.u(v),v=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)v[g++]=this.g[d]>>>_&255;return v};function h(v,d){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=d(v)}function u(v,d){this.h=d;for(var g=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==d||(g[y]=T,_=!1)}this.g=g}var c={};function m(v){return-128<=v&&128>v?h(v,function(d){return new u([d|0],0>d?-1:0)}):new u([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return R;if(0>v)return C(E(-v));for(var d=[],g=1,_=0;v>=g;_++)d[_]=v/g|0,g*=4294967296;return new u(d,0)}function A(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return C(A(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=E(Math.pow(d,8)),_=R,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),p=parseInt(v.substring(y,y+T),d);8>T?(T=E(Math.pow(d,T)),_=_.j(T).add(E(p))):(_=_.j(g),_=_.add(E(p)))}return _}var R=m(0),b=m(1),P=m(16777216);n=u.prototype,n.m=function(){if(N(this))return-C(this).m();for(var v=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);v+=(0<=_?_:4294967296+_)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(N(this))return"-"+C(this).toString(v);for(var d=E(Math.pow(v,6)),g=this,_="";;){var y=F(g,d).g;g=H(g,y.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=y,D(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=H(this,v),N(v)?-1:D(v)?0:1};function C(v){for(var d=v.g.length,g=[],_=0;_<d;_++)g[_]=~v.g[_];return new u(g,~v.h).add(b)}n.abs=function(){return N(this)?C(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,g[y]=p<<16|T}return new u(g,g[g.length-1]&-2147483648?-1:0)};function H(v,d){return v.add(C(d))}n.j=function(v){if(D(this)||D(v))return R;if(N(this))return N(v)?C(this).j(C(v)):C(C(this).j(v));if(N(v))return C(this.j(C(v)));if(0>this.l(P)&&0>v.l(P))return E(this.m()*v.m());for(var d=this.g.length+v.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,pt=v.i(y)>>>16,Gt=v.i(y)&65535;g[2*_+2*y]+=p*Gt,W(g,2*_+2*y),g[2*_+2*y+1]+=T*Gt,W(g,2*_+2*y+1),g[2*_+2*y+1]+=p*pt,W(g,2*_+2*y+1),g[2*_+2*y+2]+=T*pt,W(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new u(g,0)};function W(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function L(v,d){this.g=v,this.h=d}function F(v,d){if(D(d))throw Error("division by zero");if(D(v))return new L(R,R);if(N(v))return d=F(C(v),d),new L(C(d.g),C(d.h));if(N(d))return d=F(v,C(d)),new L(C(d.g),d.h);if(30<v.g.length){if(N(v)||N(d))throw Error("slowDivide_ only works with positive integers.");for(var g=b,_=d;0>=_.l(v);)g=ht(g),_=ht(_);var y=Q(g,1),T=Q(_,1);for(_=Q(_,2),g=Q(g,2);!D(_);){var p=T.add(_);0>=p.l(v)&&(y=y.add(g),T=p),_=Q(_,1),g=Q(g,1)}return d=H(v,y.j(d)),new L(y,d)}for(y=R;0<=v.l(d);){for(g=Math.max(1,Math.floor(v.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=E(g),p=T.j(d);N(p)||0<p.l(v);)g-=_,T=E(g),p=T.j(d);D(T)&&(T=b),y=y.add(T),v=H(v,p)}return new L(y,v)}n.A=function(v){return F(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&v.i(_);return new u(g,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|v.i(_);return new u(g,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^v.i(_);return new u(g,this.h^v.h)};function ht(v){for(var d=v.g.length+1,g=[],_=0;_<d;_++)g[_]=v.i(_)<<1|v.i(_-1)>>>31;return new u(g,v.h)}function Q(v,d){var g=d>>5;d%=32;for(var _=v.g.length-g,y=[],T=0;T<_;T++)y[T]=0<d?v.i(T+g)>>>d|v.i(T+g+1)<<32-d:v.i(T+g);return new u(y,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Lh=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=E,u.fromString=A,Rn=u}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});var Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mh,Fh,Zr,Uh,Ni,fo,$h,Bh,jh;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ri=="object"&&Ri];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var f=0;f<r.length-1;f++){var I=r[f];if(!(I in l))break t;l=l[I]}r=r[r.length-1],f=l[r],a=a(f),a!=f&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function h(r,a){r instanceof String&&(r+="");var l=0,f=!1,I={next:function(){if(!f&&l<r.length){var w=l++;return{value:a(w,r[w]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(r){return r||function(){return h(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function m(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function E(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function A(r,a,l){return r.call.apply(r.bind,arguments)}function R(r,a,l){if(!r)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),r.apply(a,I)}}return function(){return r.apply(a,arguments)}}function b(r,a,l){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:R,b.apply(null,arguments)}function P(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function D(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(f,I,w){for(var S=Array(arguments.length-2),q=2;q<arguments.length;q++)S[q-2]=arguments[q];return a.prototype[I].apply(f,S)}}function N(r){const a=r.length;if(0<a){const l=Array(a);for(let f=0;f<a;f++)l[f]=r[f];return l}return[]}function C(r,a){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(m(f)){const I=r.length||0,w=f.length||0;r.length=I+w;for(let S=0;S<w;S++)r[I+S]=f[S]}else r.push(f)}}class H{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function W(r){return/^[\s\xa0]*$/.test(r)}function L(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function F(r){return F[" "](r),r}F[" "]=function(){};var ht=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function Q(r,a,l){for(const f in r)a.call(l,r[f],f,r)}function v(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)r[l]=f[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(f,l)&&(r[l]=f[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function p(){var r=Xe;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class pt{constructor(){this.h=this.g=null}add(a,l){const f=Gt.get();f.set(a,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Gt=new H(()=>new gs,r=>r.reset());class gs{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,Wt=!1,Xe=new pt,er=()=>{const r=c.Promise.resolve(void 0);Kt=()=>{r.then(ms)}};var ms=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(l){T(l)}var a=Gt;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Wt=!1};function Tt(){this.s=this.s,this.C=this.C}Tt.prototype.s=!1,Tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var _s=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function Qt(r,a){if(Z.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(ht){t:{try{F(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ys[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Qt.aa.h.call(this)}}D(Qt,Z);var ys={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Ee="closure_listenable_"+(1e6*Math.random()|0),vs=0;function Es(r,a,l,f,I){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!f,this.ha=I,this.key=++vs,this.da=this.fa=!1}function Te(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Ie(r){this.src=r,this.g={},this.h=0}Ie.prototype.add=function(r,a,l,f,I){var w=r.toString();r=this.g[w],r||(r=this.g[w]=[],this.h++);var S=Je(r,a,f,I);return-1<S?(a=r[S],l||(a.fa=!1)):(a=new Es(a,this.src,w,!!f,I),a.fa=l,r.push(a)),a};function Ye(r,a){var l=a.type;if(l in r.g){var f=r.g[l],I=Array.prototype.indexOf.call(f,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(f,I,1),w&&(Te(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function Je(r,a,l,f){for(var I=0;I<r.length;++I){var w=r[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==f)return I}return-1}var Ze="closure_lm_"+(1e6*Math.random()|0),tn={};function nr(r,a,l,f,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)nr(r,a[w],l,f,I);return null}return l=sr(l),r&&r[Ee]?r.K(a,l,E(f)?!!f.capture:!!f,I):Ts(r,a,l,!1,f,I)}function Ts(r,a,l,f,I,w){if(!a)throw Error("Invalid event type");var S=E(I)?!!I.capture:!!I,q=nn(r);if(q||(r[Ze]=q=new Ie(r)),l=q.add(a,l,f,S,w),l.proxy)return l;if(f=Is(),l.proxy=f,f.src=r,f.listener=l,r.addEventListener)_s||(I=S),I===void 0&&(I=!1),r.addEventListener(a.toString(),f,I);else if(r.attachEvent)r.attachEvent(ir(a.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Is(){function r(l){return a.call(r.src,r.listener,l)}const a=As;return r}function rr(r,a,l,f,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)rr(r,a[w],l,f,I);else f=E(f)?!!f.capture:!!f,l=sr(l),r&&r[Ee]?(r=r.i,a=String(a).toString(),a in r.g&&(w=r.g[a],l=Je(w,l,f,I),-1<l&&(Te(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete r.g[a],r.h--)))):r&&(r=nn(r))&&(a=r.g[a.toString()],r=-1,a&&(r=Je(a,l,f,I)),(l=-1<r?a[r]:null)&&en(l))}function en(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[Ee])Ye(a.i,r);else{var l=r.type,f=r.proxy;a.removeEventListener?a.removeEventListener(l,f,r.capture):a.detachEvent?a.detachEvent(ir(l),f):a.addListener&&a.removeListener&&a.removeListener(f),(l=nn(a))?(Ye(l,r),l.h==0&&(l.src=null,a[Ze]=null)):Te(r)}}}function ir(r){return r in tn?tn[r]:tn[r]="on"+r}function As(r,a){if(r.da)r=!0;else{a=new Qt(a,this);var l=r.listener,f=r.ha||r.src;r.fa&&en(r),r=l.call(f,a)}return r}function nn(r){return r=r[Ze],r instanceof Ie?r:null}var rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function sr(r){return typeof r=="function"?r:(r[rn]||(r[rn]=function(a){return r.handleEvent(a)}),r[rn])}function tt(){Tt.call(this),this.i=new Ie(this),this.M=this,this.F=null}D(tt,Tt),tt.prototype[Ee]=!0,tt.prototype.removeEventListener=function(r,a,l,f){rr(this,r,a,l,f)};function rt(r,a){var l,f=r.F;if(f)for(l=[];f;f=f.F)l.push(f);if(r=r.M,f=a.type||a,typeof a=="string")a=new Z(a,r);else if(a instanceof Z)a.target=a.target||r;else{var I=a;a=new Z(f,r),_(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];I=Ae(S,f,!0,a)&&I}if(S=a.g=r,I=Ae(S,f,!0,a)&&I,I=Ae(S,f,!1,a)&&I,l)for(w=0;w<l.length;w++)S=a.g=l[w],I=Ae(S,f,!1,a)&&I}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],f=0;f<l.length;f++)Te(l[f]);delete r.g[a],r.h--}}this.F=null},tt.prototype.K=function(r,a,l,f){return this.i.add(String(r),a,!1,l,f)},tt.prototype.L=function(r,a,l,f){return this.i.add(String(r),a,!0,l,f)};function Ae(r,a,l,f){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var q=S.listener,$=S.ha||S.src;S.fa&&Ye(r.i,S),I=q.call($,f)!==!1&&I}}return I&&!f.defaultPrevented}function or(r,a,l){if(typeof r=="function")l&&(r=b(r,l));else if(r&&typeof r.handleEvent=="function")r=b(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function ar(r){r.g=or(()=>{r.g=null,r.i&&(r.i=!1,ar(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class ws extends Tt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ar(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(r){Tt.call(this),this.h=r,this.g={}}D(Xt,Tt);var hr=[];function lr(r){Q(r.g,function(a,l){this.g.hasOwnProperty(l)&&en(a)},r),r.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),lr(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sn=c.JSON.stringify,Rs=c.JSON.parse,bs=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function on(){}on.prototype.h=null;function ur(r){return r.h||(r.h=r.i())}function Ai(){}var Yt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function an(){Z.call(this,"d")}D(an,Z);function hn(){Z.call(this,"c")}D(hn,Z);var Bt={},cr=null;function Fe(){return cr=cr||new tt}Bt.La="serverreachability";function fr(r){Z.call(this,Bt.La,r)}D(fr,Z);function Jt(r){const a=Fe();rt(a,new fr(a))}Bt.STAT_EVENT="statevent";function dr(r,a){Z.call(this,Bt.STAT_EVENT,r),this.stat=a}D(dr,Z);function it(r){const a=Fe();rt(a,new dr(a,r))}Bt.Ma="timingevent";function pr(r,a){Z.call(this,Bt.Ma,r),this.size=a}D(pr,Z);function Zt(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function te(){this.g=!0}te.prototype.xa=function(){this.g=!1};function Cs(r,a,l,f,I,w){r.info(function(){if(r.g)if(w)for(var S="",q=w.split("&"),$=0;$<q.length;$++){var B=q[$].split("=");if(1<B.length){var et=B[0];B=B[1];var ut=et.split("_");S=2<=ut.length&&ut[1]=="type"?S+(et+"="+B+"&"):S+(et+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+a+`
`+l+`
`+S})}function Ps(r,a,l,f,I,w,S){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+S})}function jt(r,a,l,f){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Ds(r,l)+(f?" "+f:"")})}function Ss(r,a){r.info(function(){return"TIMEOUT: "+a})}te.prototype.info=function(){};function Ds(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var f=l[r];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<I.length;S++)I[S]=""}}}}return sn(l)}catch{return a}}var Ue={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ln;function we(){}D(we,on),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ln=new we;function It(r,a,l,f){this.j=r,this.i=a,this.l=l,this.R=f||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gr}function gr(){this.i=null,this.g="",this.h=!1}var mr={},un={};function cn(r,a,l){r.L=1,r.v=Pe(gt(a)),r.m=l,r.P=!0,_r(r,null)}function _r(r,a){r.F=Date.now(),Re(r),r.A=gt(r.v);var l=r.A,f=r.R;Array.isArray(f)||(f=[String(f)]),kr(l.i,"t",f),r.C=0,l=r.j.J,r.h=new gr,r.g=Qr(r.j,l?a:null,!r.m),0<r.O&&(r.M=new ws(b(r.Y,r,r.g),r.O)),a=r.U,l=r.g,f=r.ca;var I="readystatechange";Array.isArray(I)||(I&&(hr[0]=I.toString()),I=hr);for(var w=0;w<I.length;w++){var S=nr(l,I[w],f||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Jt(),Cs(r.i,r.u,r.A,r.l,r.R,r.m)}It.prototype.ca=function(r){r=r.target;const a=this.M;a&&mt(r)==3?a.j():this.Y(r)},It.prototype.Y=function(r){try{if(r==this.g)t:{const ut=mt(this.g);var a=this.g.Ba();const vt=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Fr(this.g)))){this.J||ut!=4||a==7||(a==8||0>=vt?Jt(3):Jt(2)),fn(this);var l=this.g.Z();this.X=l;e:if(yr(this)){var f=Fr(this.g);r="";var I=f.length,w=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),ee(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,r+=this.h.i.decode(f[a],{stream:!(w&&a==I-1)});f.length=0,this.h.g+=r,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Ps(this.i,this.u,this.A,this.l,this.R,ut,l),this.o){if(this.T&&!this.K){e:{if(this.g){var q,$=this.g;if((q=$.g?$.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(q)){var B=q;break e}}B=null}if(l=B)jt(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dn(this,l);else{this.o=!1,this.s=3,it(12),Ft(this),ee(this);break t}}if(this.P){l=!0;let kt;for(;!this.J&&this.C<S.length;)if(kt=ks(this,S),kt==un){ut==4&&(this.s=4,it(14),l=!1),jt(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==mr){this.s=4,it(15),jt(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else jt(this.i,this.l,kt,null),dn(this,kt);if(yr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||S.length!=0||this.h.h||(this.s=1,it(16),l=!1),this.o=this.o&&l,!l)jt(this.i,this.l,S,"[Invalid Chunked Response]"),Ft(this),ee(this);else if(0<S.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),vn(et),et.M=!0,it(11))}}else jt(this.i,this.l,S,null),dn(this,S);ut==4&&Ft(this),this.o&&!this.J&&(ut==4?zr(this.j,this):(this.o=!1,Re(this)))}else Ws(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Ft(this),ee(this)}}}catch{}finally{}};function yr(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function ks(r,a){var l=r.C,f=a.indexOf(`
`,l);return f==-1?un:(l=Number(a.substring(l,f)),isNaN(l)?mr:(f+=1,f+l>a.length?un:(a=a.slice(f,f+l),r.C=f+l,a)))}It.prototype.cancel=function(){this.J=!0,Ft(this)};function Re(r){r.S=Date.now()+r.I,vr(r,r.I)}function vr(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Zt(b(r.ba,r),a)}function fn(r){r.B&&(c.clearTimeout(r.B),r.B=null)}It.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Ss(this.i,this.A),this.L!=2&&(Jt(),it(17)),Ft(this),this.s=2,ee(this)):vr(this,this.S-r)};function ee(r){r.j.G==0||r.J||zr(r.j,r)}function Ft(r){fn(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,lr(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function dn(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||pn(l.h,r))){if(!r.K&&pn(l.h,r)&&l.G==3){try{var f=l.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)Ne(l),ke(l);else break t;yn(l),it(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Zt(b(l.Za,l),6e3));if(1>=Ir(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else $t(l,11)}else if((r.K||l.g==r)&&Ne(l),!W(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let B=I[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const et=B[3];et!=null&&(l.la=et,l.j.info("VER="+l.la));const ut=B[4];ut!=null&&(l.Aa=ut,l.j.info("SVER="+l.Aa));const vt=B[5];vt!=null&&typeof vt=="number"&&0<vt&&(f=1.5*vt,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const kt=r.g;if(kt){const $e=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($e){var w=f.h;w.g||$e.indexOf("spdy")==-1&&$e.indexOf("quic")==-1&&$e.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(gn(w,w.h),w.h=null))}if(f.D){const Xs=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xs&&(f.ya=Xs,U(f.I,f.D,Xs))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var S=r;if(f.qa=Wr(f,f.J?f.ia:null,f.W),S.K){Ar(f.h,S);var q=S,$=f.L;$&&(q.I=$),q.B&&(fn(q),Re(q)),f.g=S}else Hr(f);0<l.i.length&&Ve(l)}else B[0]!="stop"&&B[0]!="close"||$t(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?$t(l,7):_n(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Jt(4)}catch{}}var Vs=class{constructor(r,a){this.g=r,this.map=a}};function Er(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tr(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ir(r){return r.h?1:r.g?r.g.size:0}function pn(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function gn(r,a){r.g?r.g.add(a):r.h=a}function Ar(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Er.prototype.cancel=function(){if(this.i=wr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function wr(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return N(r.i)}function Ns(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(m(r)){for(var a=[],l=r.length,f=0;f<l;f++)a.push(r[f]);return a}a=[],l=0;for(f in r)a[l++]=r[f];return a}function Os(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(m(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const f in r)a[l++]=f;return a}}}function Rr(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(m(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=Os(r),f=Ns(r),I=f.length,w=0;w<I;w++)a.call(void 0,f[w],l&&l[w],r)}var br=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xs(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var f=r[l].indexOf("="),I=null;if(0<=f){var w=r[l].substring(0,f);I=r[l].substring(f+1)}else w=r[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Ut(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ut){this.h=r.h,be(this,r.j),this.o=r.o,this.g=r.g,Ce(this,r.s),this.l=r.l;var a=r.i,l=new ie;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Cr(this,l),this.m=r.m}else r&&(a=String(r).match(br))?(this.h=!1,be(this,a[1]||"",!0),this.o=ne(a[2]||""),this.g=ne(a[3]||"",!0),Ce(this,a[4]),this.l=ne(a[5]||"",!0),Cr(this,a[6]||"",!0),this.m=ne(a[7]||"")):(this.h=!1,this.i=new ie(null,this.h))}Ut.prototype.toString=function(){var r=[],a=this.j;a&&r.push(re(a,Pr,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(re(a,Pr,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(re(l,l.charAt(0)=="/"?Fs:Ms,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",re(l,$s)),r.join("")};function gt(r){return new Ut(r)}function be(r,a,l){r.j=l?ne(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function Ce(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function Cr(r,a,l){a instanceof ie?(r.i=a,Bs(r.i,r.h)):(l||(a=re(a,Us)),r.i=new ie(a,r.h))}function U(r,a,l){r.i.set(a,l)}function Pe(r){return U(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function ne(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function re(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,Ls),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Ls(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Pr=/[#\/\?@]/g,Ms=/[#\?:]/g,Fs=/[#\?]/g,Us=/[#\?@]/g,$s=/#/g;function ie(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function At(r){r.g||(r.g=new Map,r.h=0,r.i&&xs(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=ie.prototype,n.add=function(r,a){At(this),this.i=null,r=Ht(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Sr(r,a){At(r),a=Ht(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Dr(r,a){return At(r),a=Ht(r,a),r.g.has(a)}n.forEach=function(r,a){At(this),this.g.forEach(function(l,f){l.forEach(function(I){r.call(a,I,f,this)},this)},this)},n.na=function(){At(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let f=0;f<a.length;f++){const I=r[f];for(let w=0;w<I.length;w++)l.push(a[f])}return l},n.V=function(r){At(this);let a=[];if(typeof r=="string")Dr(this,r)&&(a=a.concat(this.g.get(Ht(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return At(this),this.i=null,r=Ht(this,r),Dr(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function kr(r,a,l){Sr(r,a),0<l.length&&(r.i=null,r.g.set(Ht(r,a),N(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var f=a[l];const w=encodeURIComponent(String(f)),S=this.V(f);for(f=0;f<S.length;f++){var I=w;S[f]!==""&&(I+="="+encodeURIComponent(String(S[f]))),r.push(I)}}return this.i=r.join("&")};function Ht(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Bs(r,a){a&&!r.j&&(At(r),r.i=null,r.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(Sr(this,f),kr(this,I,l))},r)),r.j=a}function js(r,a){const l=new te;if(c.Image){const f=new Image;f.onload=P(wt,l,"TestLoadImage: loaded",!0,a,f),f.onerror=P(wt,l,"TestLoadImage: error",!1,a,f),f.onabort=P(wt,l,"TestLoadImage: abort",!1,a,f),f.ontimeout=P(wt,l,"TestLoadImage: timeout",!1,a,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else a(!1)}function Hs(r,a){const l=new te,f=new AbortController,I=setTimeout(()=>{f.abort(),wt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:f.signal}).then(w=>{clearTimeout(I),w.ok?wt(l,"TestPingServer: ok",!0,a):wt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),wt(l,"TestPingServer: error",!1,a)})}function wt(r,a,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function qs(){this.g=new bs}function zs(r,a,l){const f=l||"";try{Rr(r,function(I,w){let S=I;E(I)&&(S=sn(I)),a.push(f+w+"="+encodeURIComponent(S))})}catch(I){throw a.push(f+"type="+encodeURIComponent("_badmap")),I}}function fe(r){this.l=r.Ub||null,this.j=r.eb||!1}D(fe,on),fe.prototype.g=function(){return new Se(this.l,this.j)},fe.prototype.i=function(r){return function(){return r}}({});function Se(r,a){tt.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Se,tt),n=Se.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,oe(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,se(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,oe(this)),this.g&&(this.readyState=3,oe(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vr(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vr(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?se(this):oe(this),this.readyState==3&&Vr(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,se(this))},n.Qa=function(r){this.g&&(this.response=r,se(this))},n.ga=function(){this.g&&se(this)};function se(r){r.readyState=4,r.l=null,r.j=null,r.v=null,oe(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function oe(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Se.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Nr(r){let a="";return Q(r,function(l,f){a+=f,a+=":",a+=l,a+=`\r
`}),a}function mn(r,a,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Nr(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):U(r,a,l))}function z(r){tt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(z,tt);var Gs=/^https?$/i,Ks=["POST","PUT"];n=z.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ln.g(),this.v=this.o?ur(this.o):ur(ln),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(w){Or(this,w);return}if(r=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const w of f.keys())l.set(w,f.get(w));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ks,a,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mr(this),this.u=!0,this.g.send(r),this.u=!1}catch(w){Or(this,w)}};function Or(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,xr(r),De(r)}function xr(r){r.A||(r.A=!0,rt(r,"complete"),rt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,rt(this,"complete"),rt(this,"abort"),De(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),De(this,!0)),z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Lr(this):this.bb())},n.bb=function(){Lr(this)};function Lr(r){if(r.h&&typeof u<"u"&&(!r.v[1]||mt(r)!=4||r.Z()!=2)){if(r.u&&mt(r)==4)or(r.Ea,0,r);else if(rt(r,"readystatechange"),mt(r)==4){r.h=!1;try{const S=r.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var f;if(f=S===0){var I=String(r.D).match(br)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Gs.test(I?I.toLowerCase():"")}l=f}if(l)rt(r,"complete"),rt(r,"success");else{r.m=6;try{var w=2<mt(r)?r.g.statusText:""}catch{w=""}r.l=w+" ["+r.Z()+"]",xr(r)}}finally{De(r)}}}}function De(r,a){if(r.g){Mr(r);const l=r.g,f=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||rt(r,"ready");try{l.onreadystatechange=f}catch{}}}function Mr(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function mt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Rs(a)}};function Fr(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Ws(r){const a={};r=(r.g&&2<=mt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(W(r[f]))continue;var l=y(r[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}v(a,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ae(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function Ur(r){this.Aa=0,this.i=[],this.j=new te,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ae("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ae("baseRetryDelayMs",5e3,r),this.cb=ae("retryDelaySeedMs",1e4,r),this.Wa=ae("forwardChannelMaxRetries",2,r),this.wa=ae("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Er(r&&r.concurrentRequestLimit),this.Da=new qs,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ur.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,f){it(0),this.W=r,this.H=a||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Wr(this,null,this.W),Ve(this)};function _n(r){if($r(r),r.G==3){var a=r.U++,l=gt(r.I);if(U(l,"SID",r.K),U(l,"RID",a),U(l,"TYPE","terminate"),he(r,l),a=new It(r,r.j,a),a.L=2,a.v=Pe(gt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Qr(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Re(a)}Kr(r)}function ke(r){r.g&&(vn(r),r.g.cancel(),r.g=null)}function $r(r){ke(r),r.u&&(c.clearTimeout(r.u),r.u=null),Ne(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function Ve(r){if(!Tr(r.h)&&!r.s){r.s=!0;var a=r.Ga;Kt||er(),Wt||(Kt(),Wt=!0),Xe.add(a,r),r.B=0}}function Qs(r,a){return Ir(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Zt(b(r.Ga,r,a),Gr(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const I=new It(this,this.j,r);let w=this.o;if(this.S&&(w?(w=d(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=jr(this,I,a),l=gt(this.I),U(l,"RID",r),U(l,"CVER",22),this.D&&U(l,"X-HTTP-Session-Id",this.D),he(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Nr(w)))+"&"+a:this.m&&mn(l,this.m,w)),gn(this.h,I),this.Ua&&U(l,"TYPE","init"),this.P?(U(l,"$req",a),U(l,"SID","null"),I.T=!0,cn(I,l,null)):cn(I,l,a),this.G=2}}else this.G==3&&(r?Br(this,r):this.i.length==0||Tr(this.h)||Br(this))};function Br(r,a){var l;a?l=a.l:l=r.U++;const f=gt(r.I);U(f,"SID",r.K),U(f,"RID",l),U(f,"AID",r.T),he(r,f),r.m&&r.o&&mn(f,r.m,r.o),l=new It(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=jr(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),gn(r.h,l),cn(l,f,a)}function he(r,a){r.H&&Q(r.H,function(l,f){U(a,f,l)}),r.l&&Rr({},function(l,f){U(a,f,l)})}function jr(r,a,l){l=Math.min(r.i.length,l);var f=r.l?b(r.l.Na,r.l,r):null;t:{var I=r.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=I[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let q=!0;for(let $=0;$<l;$++){let B=I[$].g;const et=I[$].map;if(B-=w,0>B)w=Math.max(0,I[$].g-100),q=!1;else try{zs(et,S,"req"+B+"_")}catch{f&&f(et)}}if(q){f=S.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,f}function Hr(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Kt||er(),Wt||(Kt(),Wt=!0),Xe.add(a,r),r.v=0}}function yn(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Zt(b(r.Fa,r),Gr(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,qr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Zt(b(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),ke(this),qr(this))};function vn(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function qr(r){r.g=new It(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=gt(r.qa);U(a,"RID","rpc"),U(a,"SID",r.K),U(a,"AID",r.T),U(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&U(a,"TO",r.ja),U(a,"TYPE","xmlhttp"),he(r,a),r.m&&r.o&&mn(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=Pe(gt(a)),l.m=null,l.P=!0,_r(l,r)}n.Za=function(){this.C!=null&&(this.C=null,ke(this),yn(this),it(19))};function Ne(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function zr(r,a){var l=null;if(r.g==a){Ne(r),vn(r),r.g=null;var f=2}else if(pn(r.h,a))l=a.D,Ar(r.h,a),f=1;else return;if(r.G!=0){if(a.o)if(f==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=r.B;f=Fe(),rt(f,new pr(f,l)),Ve(r)}else Hr(r);else if(I=a.s,I==3||I==0&&0<a.X||!(f==1&&Qs(r,a)||f==2&&yn(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),I){case 1:$t(r,5);break;case 4:$t(r,10);break;case 3:$t(r,6);break;default:$t(r,2)}}}function Gr(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function $t(r,a){if(r.j.info("Error code "+a),a==2){var l=b(r.fb,r),f=r.Xa;const I=!f;f=new Ut(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||be(f,"https"),Pe(f),I?js(f.toString(),l):Hs(f.toString(),l)}else it(2);r.G=0,r.l&&r.l.sa(a),Kr(r),$r(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Kr(r){if(r.G=0,r.ka=[],r.l){const a=wr(r.h);(a.length!=0||r.i.length!=0)&&(C(r.ka,a),C(r.ka,r.i),r.h.i.length=0,N(r.i),r.i.length=0),r.l.ra()}}function Wr(r,a,l){var f=l instanceof Ut?gt(l):new Ut(l);if(f.g!="")a&&(f.g=a+"."+f.g),Ce(f,f.s);else{var I=c.location;f=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new Ut(null);f&&be(w,f),a&&(w.g=a),I&&Ce(w,I),l&&(w.l=l),f=w}return l=r.D,a=r.ya,l&&a&&U(f,l,a),U(f,"VER",r.la),he(r,f),f}function Qr(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new z(new fe({eb:l})):new z(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xr(){}n=Xr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Rt(){}Rt.prototype.g=function(r,a){return new Dt(r,a)};function Dt(r,a){tt.call(this),this.g=new Ur(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!W(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!W(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new o(this)}D(Dt,tt),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){_n(this.g)},Dt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=sn(r),r=l);a.i.push(new Vs(a.Ya++,r)),a.G==3&&Ve(a)},Dt.prototype.N=function(){this.g.l=null,delete this.j,_n(this.g),delete this.g,Dt.aa.N.call(this)};function Yr(r){an.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}D(Yr,an);function Oe(){hn.call(this),this.status=1}D(Oe,hn);function o(r){this.g=r}D(o,Xr),o.prototype.ua=function(){rt(this.g,"a")},o.prototype.ta=function(r){rt(this.g,new Yr(r))},o.prototype.sa=function(r){rt(this.g,new Oe)},o.prototype.ra=function(){rt(this.g,"b")},Rt.prototype.createWebChannel=Rt.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,jh=function(){return new Rt},Bh=function(){return Fe()},$h=Bt,fo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ue.NO_ERROR=0,Ue.TIMEOUT=8,Ue.HTTP_ERROR=6,Ni=Ue,wi.COMPLETE="complete",Uh=wi,Ai.EventType=Yt,Yt.OPEN="a",Yt.CLOSE="b",Yt.ERROR="c",Yt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Zr=Ai,Fh=fe,z.prototype.listenOnce=z.prototype.L,z.prototype.getLastError=z.prototype.Ka,z.prototype.getLastErrorCode=z.prototype.Ba,z.prototype.getStatus=z.prototype.Z,z.prototype.getResponseJson=z.prototype.Oa,z.prototype.getResponseText=z.prototype.oa,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Ha,Mh=z}).apply(typeof Ri<"u"?Ri:typeof self<"u"?self:typeof window<"u"?window:{});const ya="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Dh("@firebase/firestore");function Jr(){return Pn.logLevel}function O(n,...t){if(Pn.logLevel<=nt.DEBUG){const e=t.map(Oo);Pn.debug(`Firestore (${Yn}): ${n}`,...e)}}function Le(n,...t){if(Pn.logLevel<=nt.ERROR){const e=t.map(Oo);Pn.error(`Firestore (${Yn}): ${n}`,...e)}}function jn(n,...t){if(Pn.logLevel<=nt.WARN){const e=t.map(Oo);Pn.warn(`Firestore (${Yn}): ${n}`,...e)}}function Oo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n="Unexpected state"){const t=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: `+n;throw Le(t),new Error(t)}function at(n,t){n||j()}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let x=class extends gi{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He=class{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh=class{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},Kc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Nt.UNAUTHENTICATED))}shutdown(){}},Wc=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}},Qc=class{constructor(t){this.t=t,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=m=>this.i!==i?(i=this.i,e(m)):Promise.resolve();let h=new He;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new He,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const m=h;t.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},c=m=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(m=>c(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?c(m):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new He)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(at(typeof i.accessToken=="string"),new Hh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new Nt(t)}},Xc=class{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},Yc=class{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Xc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Jc=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Zc=class{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=h=>{h.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const u=h.token!==this.R;return this.R=h.token,O("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(h.token):Promise.resolve()};this.o=h=>{t.enqueueRetryable(()=>i(h))};const s=h=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>s(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?s(h):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string"),this.R=e.token,new Jc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qh=class{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=tf(40);for(let h=0;h<s.length;++h)i.length<20&&s[h]<e&&(i+=t.charAt(s[h]%t.length))}return i}};function st(n,t){return n<t?-1:n>t?1:0}function Hn(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return yt.fromMillis(Date.now())}static fromDate(t){return yt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new yt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?st(this.nanoseconds,t.nanoseconds):st(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new yt(0,0))}static max(){return new G(new yt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e,i){e===void 0?e=0:e>t.length&&j(),i===void 0?i=t.length-e:i>t.length-e&&j(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return hi.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hi?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const h=t.get(s),u=e.get(s);if(h<u)return-1;if(h>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class lt extends hi{construct(t,e,i){return new lt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new lt(e)}static emptyPath(){return new lt([])}}const ef=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends hi{construct(t,e,i){return new Ct(t,e,i)}static isValidIdentifier(t){return ef.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const h=()=>{if(i.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new x(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=m,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(h(),s++)}if(h(),u)throw new x(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ct(e)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(lt.fromString(t))}static fromName(t){return new M(lt.fromString(t).popFirst(5))}static empty(){return new M(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&lt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return lt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new lt(t.slice()))}}function nf(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(i===1e9?new yt(e+1,0):new yt(e,i));return new Ge(s,M.empty(),t)}function rf(n){return new Ge(n.readTime,n.key,-1)}class Ge{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ge(G.min(),M.empty(),-1)}static max(){return new Ge(G.max(),M.empty(),-1)}}function sf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:st(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class af{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==of)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new k((i,s)=>{this.nextCallback=h=>{this.wrapSuccess(t,h).next(i,s)},this.catchCallback=h=>{this.wrapFailure(e,h).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof k?e:k.resolve(e)}catch(e){return k.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):k.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):k.reject(e)}static resolve(t){return new k((e,i)=>{e(t)})}static reject(t){return new k((e,i)=>{i(t)})}static waitFor(t){return new k((e,i)=>{let s=0,h=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++h,u&&h===s&&e()},m=>i(m))}),u=!0,h===s&&e()})}static or(t){let e=k.resolve(!1);for(const i of t)e=e.next(s=>s?k.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,h)=>{i.push(e.call(this,s,h))}),this.waitFor(i)}static mapArray(t,e){return new k((i,s)=>{const h=t.length,u=new Array(h);let c=0;for(let m=0;m<h;m++){const E=m;e(t[E]).next(A=>{u[E]=A,++c,c===h&&i(u)},A=>s(A))}})}static doWhile(t,e){return new k((i,s)=>{const h=()=>{t()===!0?e().next(()=>{h()},s):i()};h()})}}function hf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function _i(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}xo.oe=-1;function rs(n){return n==null}function Bi(n){return n===0&&1/n==-1/0}function lf(n){return typeof n=="number"&&Number.isInteger(n)&&!Bi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Jn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function zh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e){this.comparator=t,this.root=e||bt.EMPTY}insert(t,e){return new ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bi(this.root,t,this.comparator,!1)}getReverseIterator(){return new bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bi(this.root,t,this.comparator,!0)}}class bi{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let h=1;for(;!t.isEmpty();)if(h=e?i(t.key,e):1,e&&s&&(h*=-1),h<0)t=this.isReverse?t.left:t.right;else{if(h===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bt{constructor(t,e,i,s,h){this.key=t,this.value=e,this.color=i??bt.RED,this.left=s??bt.EMPTY,this.right=h??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,h){return new bt(t??this.key,e??this.value,i??this.color,s??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const h=i(t,s.key);return s=h<0?s.copy(null,null,null,s.left.insert(t,e,i),null):h===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const t=this.left.check();if(t!==this.right.check())throw j();return t+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,i,s,h){return this}insert(t,e,i){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ea(this.data.getIterator())}getIteratorFrom(t){return new Ea(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof Pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,h=i.getNext().key;if(this.comparator(s,h)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Pt(this.comparator);return e.data=t,e}}class Ea{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.fields=t,t.sort(Ct.comparator)}static empty(){return new le([])}unionWith(t){let e=new Pt(Ct.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new le(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Hn(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new Gh("Invalid base64 string: "+h):h}}(t);return new St(e)}static fromUint8Array(t){const e=function(s){let h="";for(let u=0;u<s.length;++u)h+=String.fromCharCode(s[u]);return h}(t);return new St(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return st(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const uf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ke(n){if(at(!!n),typeof n=="string"){let t=0;const e=uf.exec(n);if(at(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sn(n){return typeof n=="string"?St.fromBase64String(n):St.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Mo(n){const t=n.mapValue.fields.__previous_value__;return Lo(t)?Mo(t):t}function li(n){const t=Ke(n.mapValue.fields.__local_write_time__.timestampValue);return new yt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf=class{constructor(t,e,i,s,h,u,c,m,E){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=h,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=m,this.useFetchStreams=E}},Kh=class po{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof po&&t.projectId===this.projectId&&t.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lo(n)?4:ff(n)?9007199254740991:10:j()}function ge(n,t){if(n===t)return!0;const e=Dn(n);if(e!==Dn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return li(n).isEqual(li(t));case 3:return function(s,h){if(typeof s.timestampValue=="string"&&typeof h.timestampValue=="string"&&s.timestampValue.length===h.timestampValue.length)return s.timestampValue===h.timestampValue;const u=Ke(s.timestampValue),c=Ke(h.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,h){return Sn(s.bytesValue).isEqual(Sn(h.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,h){return dt(s.geoPointValue.latitude)===dt(h.geoPointValue.latitude)&&dt(s.geoPointValue.longitude)===dt(h.geoPointValue.longitude)}(n,t);case 2:return function(s,h){if("integerValue"in s&&"integerValue"in h)return dt(s.integerValue)===dt(h.integerValue);if("doubleValue"in s&&"doubleValue"in h){const u=dt(s.doubleValue),c=dt(h.doubleValue);return u===c?Bi(u)===Bi(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return Hn(n.arrayValue.values||[],t.arrayValue.values||[],ge);case 10:return function(s,h){const u=s.mapValue.fields||{},c=h.mapValue.fields||{};if(va(u)!==va(c))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(c[m]===void 0||!ge(u[m],c[m])))return!1;return!0}(n,t);default:return j()}}function ui(n,t){return(n.values||[]).find(e=>ge(e,t))!==void 0}function qn(n,t){if(n===t)return 0;const e=Dn(n),i=Dn(t);if(e!==i)return st(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return st(n.booleanValue,t.booleanValue);case 2:return function(h,u){const c=dt(h.integerValue||h.doubleValue),m=dt(u.integerValue||u.doubleValue);return c<m?-1:c>m?1:c===m?0:isNaN(c)?isNaN(m)?0:-1:1}(n,t);case 3:return Ta(n.timestampValue,t.timestampValue);case 4:return Ta(li(n),li(t));case 5:return st(n.stringValue,t.stringValue);case 6:return function(h,u){const c=Sn(h),m=Sn(u);return c.compareTo(m)}(n.bytesValue,t.bytesValue);case 7:return function(h,u){const c=h.split("/"),m=u.split("/");for(let E=0;E<c.length&&E<m.length;E++){const A=st(c[E],m[E]);if(A!==0)return A}return st(c.length,m.length)}(n.referenceValue,t.referenceValue);case 8:return function(h,u){const c=st(dt(h.latitude),dt(u.latitude));return c!==0?c:st(dt(h.longitude),dt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(h,u){const c=h.values||[],m=u.values||[];for(let E=0;E<c.length&&E<m.length;++E){const A=qn(c[E],m[E]);if(A)return A}return st(c.length,m.length)}(n.arrayValue,t.arrayValue);case 10:return function(h,u){if(h===Ci.mapValue&&u===Ci.mapValue)return 0;if(h===Ci.mapValue)return 1;if(u===Ci.mapValue)return-1;const c=h.fields||{},m=Object.keys(c),E=u.fields||{},A=Object.keys(E);m.sort(),A.sort();for(let R=0;R<m.length&&R<A.length;++R){const b=st(m[R],A[R]);if(b!==0)return b;const P=qn(c[m[R]],E[A[R]]);if(P!==0)return P}return st(m.length,A.length)}(n.mapValue,t.mapValue);default:throw j()}}function Ta(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return st(n,t);const e=Ke(n),i=Ke(t),s=st(e.seconds,i.seconds);return s!==0?s:st(e.nanos,i.nanos)}function zn(n){return go(n)}function go(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Ke(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Sn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const h of e.values||[])s?s=!1:i+=",",i+=go(h);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",h=!0;for(const u of i)h?h=!1:s+=",",s+=`${u}:${go(e.fields[u])}`;return s+"}"}(n.mapValue):j()}function mo(n){return!!n&&"integerValue"in n}function Fo(n){return!!n&&"arrayValue"in n}function Ia(n){return!!n&&"nullValue"in n}function Aa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Oi(n){return!!n&&"mapValue"in n}function ni(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Jn(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=ni(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ni(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ff(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.value=t}static empty(){return new zt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Oi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ni(e)}setAll(t){let e=Ct.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const m=this.getFieldsMap(e);this.applyChanges(m,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=ni(u):s.push(c.lastSegment())});const h=this.getFieldsMap(e);this.applyChanges(h,i,s)}delete(t){const e=this.field(t.popLast());Oi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ge(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Oi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Jn(e,(s,h)=>t[s]=h);for(const s of i)delete t[s]}clone(){return new zt(ni(this.value))}}function Wh(n){const t=[];return Jn(n.fields,(e,i)=>{const s=new Ct([e]);if(Oi(i)){const h=Wh(i.mapValue).fields;if(h.length===0)t.push(s);else for(const u of h)t.push(s.child(u))}else t.push(s)}),new le(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e,i,s,h,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=h,this.data=u,this.documentState=c}static newInvalidDocument(t){return new xt(t,0,G.min(),G.min(),G.min(),zt.empty(),0)}static newFoundDocument(t,e,i,s){return new xt(t,1,e,G.min(),i,s,0)}static newNoDocument(t,e){return new xt(t,2,e,G.min(),G.min(),zt.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,G.min(),G.min(),zt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e){this.position=t,this.inclusive=e}}function wa(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const h=t[s],u=n.position[s];if(h.field.isKeyField()?i=M.comparator(M.fromName(u.referenceValue),e.key):i=qn(u,e.data.field(h.field)),h.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ra(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ge(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,e="asc"){this.field=t,this.dir=e}}function df(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{}class _t extends Qh{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new gf(t,e,i):e==="array-contains"?new yf(t,i):e==="in"?new vf(t,i):e==="not-in"?new Ef(t,i):e==="array-contains-any"?new Tf(t,i):new _t(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new mf(t,i):new _f(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(qn(e,this.value)):e!==null&&Dn(this.value)===Dn(e)&&this.matchesComparison(qn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class me extends Qh{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new me(t,e)}matches(t){return Xh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xh(n){return n.op==="and"}function Yh(n){return pf(n)&&Xh(n)}function pf(n){for(const t of n.filters)if(t instanceof me)return!1;return!0}function _o(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+zn(n.value);if(Yh(n))return n.filters.map(t=>_o(t)).join(",");{const t=n.filters.map(e=>_o(e)).join(",");return`${n.op}(${t})`}}function Jh(n,t){return n instanceof _t?function(i,s){return s instanceof _t&&i.op===s.op&&i.field.isEqual(s.field)&&ge(i.value,s.value)}(n,t):n instanceof me?function(i,s){return s instanceof me&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((h,u,c)=>h&&Jh(u,s.filters[c]),!0):!1}(n,t):void j()}function Zh(n){return n instanceof _t?function(e){return`${e.field.canonicalString()} ${e.op} ${zn(e.value)}`}(n):n instanceof me?function(e){return e.op.toString()+" {"+e.getFilters().map(Zh).join(" ,")+"}"}(n):"Filter"}class gf extends _t{constructor(t,e,i){super(t,e,i),this.key=M.fromName(i.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class mf extends _t{constructor(t,e){super(t,"in",e),this.keys=tl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class _f extends _t{constructor(t,e){super(t,"not-in",e),this.keys=tl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function tl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>M.fromName(i.referenceValue))}class yf extends _t{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Fo(e)&&ui(e.arrayValue,this.value)}}class vf extends _t{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ui(this.value.arrayValue,e)}}class Ef extends _t{constructor(t,e){super(t,"not-in",e)}matches(t){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ui(this.value.arrayValue,e)}}class Tf extends _t{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Fo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>ui(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,e=null,i=[],s=[],h=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=h,this.startAt=u,this.endAt=c,this.ue=null}}function ba(n,t=null,e=[],i=[],s=null,h=null,u=null){return new If(n,t,e,i,s,h,u)}function Uo(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>_o(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(h){return h.field.canonicalString()+h.dir}(i)).join(","),rs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>zn(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>zn(i)).join(",")),t.ue=e}return t.ue}function $o(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!df(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Jh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ra(n.startAt,t.startAt)&&Ra(n.endAt,t.endAt)}function yo(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e=null,i=[],s=[],h=null,u="F",c=null,m=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=h,this.limitType=u,this.startAt=c,this.endAt=m,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Af(n,t,e,i,s,h,u,c){return new is(n,t,e,i,s,h,u,c)}function el(n){return new is(n)}function Ca(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wf(n){return n.collectionGroup!==null}function ri(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const h of t.explicitOrderBy)t.ce.push(h),e.add(h.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new Pt(Ct.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(E=>{E.isInequality()&&(c=c.add(E.field))})}),c})(t).forEach(h=>{e.has(h.canonicalString())||h.isKeyField()||t.ce.push(new Hi(h,i))}),e.has(Ct.keyField().canonicalString())||t.ce.push(new Hi(Ct.keyField(),i))}return t.ce}function de(n){const t=K(n);return t.le||(t.le=Rf(t,ri(n))),t.le}function Rf(n,t){if(n.limitType==="F")return ba(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const h=s.dir==="desc"?"asc":"desc";return new Hi(s.field,h)});const e=n.endAt?new ji(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ji(n.startAt.position,n.startAt.inclusive):null;return ba(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function vo(n,t,e){return new is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ss(n,t){return $o(de(n),de(t))&&n.limitType===t.limitType}function nl(n){return`${Uo(de(n))}|lt:${n.limitType}`}function xn(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Zh(s)).join(", ")}]`),rs(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>zn(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>zn(s)).join(",")),`Target(${i})`}(de(n))}; limitType=${n.limitType})`}function os(n,t){return t.isFoundDocument()&&function(i,s){const h=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(h):M.isDocumentKey(i.path)?i.path.isEqual(h):i.path.isImmediateParentOf(h)}(n,t)&&function(i,s){for(const h of ri(i))if(!h.field.isKeyField()&&s.data.field(h.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const h of i.filters)if(!h.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,m){const E=wa(u,c,m);return u.inclusive?E<=0:E<0}(i.startAt,ri(i),s)||i.endAt&&!function(u,c,m){const E=wa(u,c,m);return u.inclusive?E>=0:E>0}(i.endAt,ri(i),s))}(n,t)}function bf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rl(n){return(t,e)=>{let i=!1;for(const s of ri(n)){const h=Cf(s,t,e);if(h!==0)return h;i=i||s.field.isKeyField()}return 0}}function Cf(n,t,e){const i=n.field.isKeyField()?M.comparator(t.key,e.key):function(h,u,c){const m=u.data.field(h),E=c.data.field(h);return m!==null&&E!==null?qn(m,E):j()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,h]of i)if(this.equalsFn(s,t))return h}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let h=0;h<s.length;h++)if(this.equalsFn(s[h][0],t))return void(s[h]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Jn(this.inner,(e,i)=>{for(const[s,h]of i)t(s,h)})}isEmpty(){return zh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new ct(M.comparator);function Me(){return Pf}const il=new ct(M.comparator);function ti(...n){let t=il;for(const e of n)t=t.insert(e.key,e);return t}function sl(n){let t=il;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function In(){return ii()}function ol(){return ii()}function ii(){return new Zn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Sf=new ct(M.comparator),Df=new Pt(M.comparator);function X(...n){let t=Df;for(const e of n)t=t.add(e);return t}const kf=new Pt(st);function Vf(){return kf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(t)?"-0":t}}function hl(n){return{integerValue:""+n}}function Nf(n,t){return lf(t)?hl(t):al(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this._=void 0}}function Of(n,t,e){return n instanceof qi?function(s,h){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return h&&Lo(h)&&(h=Mo(h)),h&&(u.fields.__previous_value__=h),{mapValue:u}}(e,t):n instanceof ci?ul(n,t):n instanceof fi?cl(n,t):function(s,h){const u=ll(s,h),c=Pa(u)+Pa(s.Pe);return mo(u)&&mo(s.Pe)?hl(c):al(s.serializer,c)}(n,t)}function xf(n,t,e){return n instanceof ci?ul(n,t):n instanceof fi?cl(n,t):e}function ll(n,t){return n instanceof zi?function(i){return mo(i)||function(h){return!!h&&"doubleValue"in h}(i)}(t)?t:{integerValue:0}:null}class qi extends as{}class ci extends as{constructor(t){super(),this.elements=t}}function ul(n,t){const e=fl(t);for(const i of n.elements)e.some(s=>ge(s,i))||e.push(i);return{arrayValue:{values:e}}}class fi extends as{constructor(t){super(),this.elements=t}}function cl(n,t){let e=fl(t);for(const i of n.elements)e=e.filter(s=>!ge(s,i));return{arrayValue:{values:e}}}class zi extends as{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Pa(n){return dt(n.integerValue||n.doubleValue)}function fl(n){return Fo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Lf(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof ci&&s instanceof ci||i instanceof fi&&s instanceof fi?Hn(i.elements,s.elements,ge):i instanceof zi&&s instanceof zi?ge(i.Pe,s.Pe):i instanceof qi&&s instanceof qi}(n.transform,t.transform)}class Mf{constructor(t,e){this.version=t,this.transformResults=e}}class xe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xe}static exists(t){return new xe(void 0,t)}static updateTime(t){return new xe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class hs{}function dl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new gl(n.key,xe.none()):new yi(n.key,n.data,xe.none());{const e=n.data,i=zt.empty();let s=new Pt(Ct.comparator);for(let h of t.fields)if(!s.has(h)){let u=e.field(h);u===null&&h.length>1&&(h=h.popLast(),u=e.field(h)),u===null?i.delete(h):i.set(h,u),s=s.add(h)}return new Vn(n.key,i,new le(s.toArray()),xe.none())}}function Ff(n,t,e){n instanceof yi?function(s,h,u){const c=s.value.clone(),m=Da(s.fieldTransforms,h,u.transformResults);c.setAll(m),h.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Vn?function(s,h,u){if(!xi(s.precondition,h))return void h.convertToUnknownDocument(u.version);const c=Da(s.fieldTransforms,h,u.transformResults),m=h.data;m.setAll(pl(s)),m.setAll(c),h.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(n,t,e):function(s,h,u){h.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function si(n,t,e,i){return n instanceof yi?function(h,u,c,m){if(!xi(h.precondition,u))return c;const E=h.value.clone(),A=ka(h.fieldTransforms,m,u);return E.setAll(A),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),null}(n,t,e,i):n instanceof Vn?function(h,u,c,m){if(!xi(h.precondition,u))return c;const E=ka(h.fieldTransforms,m,u),A=u.data;return A.setAll(pl(h)),A.setAll(E),u.convertToFoundDocument(u.version,A).setHasLocalMutations(),c===null?null:c.unionWith(h.fieldMask.fields).unionWith(h.fieldTransforms.map(R=>R.field))}(n,t,e,i):function(h,u,c){return xi(h.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Uf(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),h=ll(i.transform,s||null);h!=null&&(e===null&&(e=zt.empty()),e.set(i.field,h))}return e||null}function Sa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Hn(i,s,(h,u)=>Lf(h,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class yi extends hs{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vn extends hs{constructor(t,e,i,s,h=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function pl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Da(n,t,e){const i=new Map;at(n.length===e.length);for(let s=0;s<e.length;s++){const h=n[s],u=h.transform,c=t.data.field(h.field);i.set(h.field,xf(u,c,e[s]))}return i}function ka(n,t,e){const i=new Map;for(const s of n){const h=s.transform,u=e.data.field(s.field);i.set(s.field,Of(h,u,t))}return i}class gl extends hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $f extends hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const h=this.mutations[s];h.key.isEqual(t.key)&&Ff(h,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=si(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=si(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=ol();return this.mutations.forEach(s=>{const h=t.get(s.key),u=h.overlayedDocument;let c=this.applyToLocalView(u,h.mutatedFields);c=e.has(s.key)?null:c;const m=dl(u,c);m!==null&&i.set(s.key,m),u.isValidDocument()||u.convertToNoDocument(G.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&Hn(this.mutations,t.mutations,(e,i)=>Sa(e,i))&&Hn(this.baseMutations,t.baseMutations,(e,i)=>Sa(e,i))}}class Bo{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){at(t.mutations.length===i.length);let s=function(){return Sf}();const h=t.mutations;for(let u=0;u<h.length;u++)s=s.insert(h[u].key,i[u].version);return new Bo(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Y;function qf(n){switch(n){default:return j();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function ml(n){if(n===void 0)return Le("GRPC error has no .code"),V.UNKNOWN;switch(n){case ft.OK:return V.OK;case ft.CANCELLED:return V.CANCELLED;case ft.UNKNOWN:return V.UNKNOWN;case ft.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ft.INTERNAL:return V.INTERNAL;case ft.UNAVAILABLE:return V.UNAVAILABLE;case ft.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ft.NOT_FOUND:return V.NOT_FOUND;case ft.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ft.ABORTED:return V.ABORTED;case ft.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ft.DATA_LOSS:return V.DATA_LOSS;default:return j()}}(Y=ft||(ft={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=new Rn([4294967295,4294967295],0);function Va(n){const t=zf().encode(n),e=new Lh;return e.update(t),new Uint8Array(e.digest())}function Na(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),h=t.getUint32(12,!0);return[new Rn([e,i],0),new Rn([s,h],0)]}class jo{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new ei(`Invalid padding: ${e}`);if(i<0)throw new ei(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new ei(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new ei(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Rn.fromNumber(this.Ie)}Ee(t,e,i){let s=t.add(e.multiply(Rn.fromNumber(i)));return s.compare(Gf)===1&&(s=new Rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Va(t),[i,s]=Na(e);for(let h=0;h<this.hashCount;h++){const u=this.Ee(i,s,h);if(!this.de(u))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,h=new Uint8Array(Math.ceil(t/8)),u=new jo(h,s,e);return i.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=Va(t),[i,s]=Na(e);for(let h=0;h<this.hashCount;h++){const u=this.Ee(i,s,h);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class ei extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e,i,s,h){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=h}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,vi.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new ls(G.min(),s,new ct(st),Me(),X())}}class vi{constructor(t,e,i,s,h){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=h}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new vi(i,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e,i,s){this.Re=t,this.removedTargetIds=e,this.key=i,this.Ve=s}}class _l{constructor(t,e){this.targetId=t,this.me=e}}class yl{constructor(t,e,i=St.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class Oa{constructor(){this.fe=0,this.ge=La(),this.pe=St.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=X(),e=X(),i=X();return this.ge.forEach((s,h)=>{switch(h){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:j()}}),new vi(this.pe,this.ye,t,e,i)}ve(){this.we=!1,this.ge=La()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,at(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Kf{constructor(t){this.Le=t,this.Be=new Map,this.ke=Me(),this.qe=xa(),this.Qe=new ct(st)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const i=this.Ge(e);switch(t.state){case 0:this.ze(e)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),i.De(t.resumeToken));break;default:j()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((i,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,i=t.me.count,s=this.Je(e);if(s){const h=s.target;if(yo(h))if(i===0){const u=new M(h.path);this.Ue(e,u,xt.newNoDocument(u,G.min()))}else at(i===1);else{const u=this.Ye(e);if(u!==i){const c=this.Ze(t),m=c?this.Xe(c,t,u):1;if(m!==0){this.je(e);const E=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,E)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:h=0}=e;let u,c;try{u=Sn(i).toUint8Array()}catch(m){if(m instanceof Gh)return jn("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{c=new jo(u,s,h)}catch(m){return jn(m instanceof ei?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return c.Ie===0?null:c}Xe(t,e,i){return e.me.count===i-this.nt(t,e.targetId)?0:2}nt(t,e){const i=this.Le.getRemoteKeysForTarget(e);let s=0;return i.forEach(h=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${h.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,h,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((h,u)=>{const c=this.Je(u);if(c){if(h.current&&yo(c.target)){const m=new M(c.target.path);this.ke.get(m)!==null||this.it(u,m)||this.Ue(u,m,xt.newNoDocument(m,t))}h.be&&(e.set(u,h.Ce()),h.ve())}});let i=X();this.qe.forEach((h,u)=>{let c=!0;u.forEachWhile(m=>{const E=this.Je(m);return!E||E.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(i=i.add(h))}),this.ke.forEach((h,u)=>u.setReadTime(t));const s=new ls(t,e,this.Qe,this.ke,i);return this.ke=Me(),this.qe=xa(),this.Qe=new ct(st),s}$e(t,e){if(!this.ze(t))return;const i=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,i),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,i){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),i&&(this.ke=this.ke.insert(e,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Oa,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Pt(st),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Oa),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function xa(){return new ct(M.comparator)}function La(){return new ct(M.comparator)}const Wf={asc:"ASCENDING",desc:"DESCENDING"},Qf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xf={and:"AND",or:"OR"};class Yf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Eo(n,t){return n.useProto3Json||rs(t)?t:{value:t}}function Gi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Jf(n,t){return Gi(n,t.toTimestamp())}function pe(n){return at(!!n),G.fromTimestamp(function(e){const i=Ke(e);return new yt(i.seconds,i.nanos)}(n))}function Ho(n,t){return To(n,t).canonicalString()}function To(n,t){const e=function(s){return new lt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function El(n){const t=lt.fromString(n);return at(Rl(t)),t}function Io(n,t){return Ho(n.databaseId,t.path)}function Zs(n,t){const e=El(t);if(e.get(1)!==n.databaseId.projectId)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Il(e))}function Tl(n,t){return Ho(n.databaseId,t)}function Zf(n){const t=El(n);return t.length===4?lt.emptyPath():Il(t)}function Ao(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Il(n){return at(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ma(n,t,e){return{name:Io(n,t),fields:e.value.mapValue.fields}}function td(n,t){let e;if("targetChange"in t){t.targetChange;const i=function(E){return E==="NO_CHANGE"?0:E==="ADD"?1:E==="REMOVE"?2:E==="CURRENT"?3:E==="RESET"?4:j()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],h=function(E,A){return E.useProto3Json?(at(A===void 0||typeof A=="string"),St.fromBase64String(A||"")):(at(A===void 0||A instanceof Buffer||A instanceof Uint8Array),St.fromUint8Array(A||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(E){const A=E.code===void 0?V.UNKNOWN:ml(E.code);return new x(A,E.message||"")}(u);e=new yl(i,s,h,c||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Zs(n,i.document.name),h=pe(i.document.updateTime),u=i.document.createTime?pe(i.document.createTime):G.min(),c=new zt({mapValue:{fields:i.document.fields}}),m=xt.newFoundDocument(s,h,u,c),E=i.targetIds||[],A=i.removedTargetIds||[];e=new Li(E,A,m.key,m)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Zs(n,i.document),h=i.readTime?pe(i.readTime):G.min(),u=xt.newNoDocument(s,h),c=i.removedTargetIds||[];e=new Li([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Zs(n,i.document),h=i.removedTargetIds||[];e=new Li([],h,s,null)}else{if(!("filter"in t))return j();{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:h}=i,u=new Hf(s,h),c=i.targetId;e=new _l(c,u)}}return e}function ed(n,t){let e;if(t instanceof yi)e={update:Ma(n,t.key,t.value)};else if(t instanceof gl)e={delete:Io(n,t.key)};else if(t instanceof Vn)e={update:Ma(n,t.key,t.data),updateMask:ud(t.fieldMask)};else{if(!(t instanceof $f))return j();e={verify:Io(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(h,u){const c=u.transform;if(c instanceof qi)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ci)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fi)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zi)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw j()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,h){return h.updateTime!==void 0?{updateTime:Jf(s,h.updateTime)}:h.exists!==void 0?{exists:h.exists}:j()}(n,t.precondition)),e}function nd(n,t){return n&&n.length>0?(at(t!==void 0),n.map(e=>function(s,h){let u=s.updateTime?pe(s.updateTime):pe(h);return u.isEqual(G.min())&&(u=pe(h)),new Mf(u,s.transformResults||[])}(e,t))):[]}function rd(n,t){return{documents:[Tl(n,t.path)]}}function id(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Tl(n,s);const h=function(E){if(E.length!==0)return wl(me.create(E,"and"))}(t.filters);h&&(e.structuredQuery.where=h);const u=function(E){if(E.length!==0)return E.map(A=>function(b){return{field:Ln(b.field),direction:ad(b.dir)}}(A))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Eo(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(E){return{before:E.inclusive,values:E.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(E){return{before:!E.inclusive,values:E.position}}(t.endAt)),{_t:e,parent:s}}function sd(n){let t=Zf(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){at(i===1);const A=e.from[0];A.allDescendants?s=A.collectionId:t=t.child(A.collectionId)}let h=[];e.where&&(h=function(R){const b=Al(R);return b instanceof me&&Yh(b)?b.getFilters():[b]}(e.where));let u=[];e.orderBy&&(u=function(R){return R.map(b=>function(D){return new Hi(Mn(D.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(b))}(e.orderBy));let c=null;e.limit&&(c=function(R){let b;return b=typeof R=="object"?R.value:R,rs(b)?null:b}(e.limit));let m=null;e.startAt&&(m=function(R){const b=!!R.before,P=R.values||[];return new ji(P,b)}(e.startAt));let E=null;return e.endAt&&(E=function(R){const b=!R.before,P=R.values||[];return new ji(P,b)}(e.endAt)),Af(t,s,u,h,c,"F",m,E)}function od(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Al(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=Mn(e.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Mn(e.unaryFilter.field);return _t.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const h=Mn(e.unaryFilter.field);return _t.create(h,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Mn(e.unaryFilter.field);return _t.create(u,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(e){return _t.create(Mn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return me.create(e.compositeFilter.filters.map(i=>Al(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(n):j()}function ad(n){return Wf[n]}function hd(n){return Qf[n]}function ld(n){return Xf[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function Mn(n){return Ct.fromServerFormat(n.fieldPath)}function wl(n){return n instanceof _t?function(e){if(e.op==="=="){if(Aa(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NAN"}};if(Ia(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Aa(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NOT_NAN"}};if(Ia(e.value))return{unaryFilter:{field:Ln(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(e.field),op:hd(e.op),value:e.value}}}(n):n instanceof me?function(e){const i=e.getFilters().map(s=>wl(s));return i.length===1?i[0]:{compositeFilter:{op:ld(e.op),filters:i}}}(n):j()}function ud(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Rl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e,i,s,h=G.min(),u=G.min(),c=St.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=h,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=m}withSequenceNumber(t){return new Be(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Be(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t){this.ct=t}}function fd(n){const t=sd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vo(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.an=new pd}addToCollectionParentIndex(t,e){return this.an.add(e),k.resolve()}getCollectionParents(t,e){return k.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return k.resolve()}deleteFieldIndex(t,e){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,e){return k.resolve()}getDocumentsMatchingTarget(t,e){return k.resolve(null)}getIndexType(t,e){return k.resolve(0)}getFieldIndexes(t,e){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,e){return k.resolve(Ge.min())}getMinOffsetFromCollectionGroup(t,e){return k.resolve(Ge.min())}updateCollectionGroup(t,e,i){return k.resolve()}updateIndexEntries(t,e){return k.resolve()}}class pd{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new Pt(lt.comparator),h=!s.has(i);return this.index[e]=s.add(i),h}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new Pt(lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Ln(){return new Gn(0)}static Bn(){return new Gn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.changes=new Zn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?k.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&si(i.mutation,s,le.empty(),yt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,X()).next(()=>i))}getLocalViewOfDocuments(t,e,i=X()){const s=In();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(h=>{let u=ti();return h.forEach((c,m)=>{u=u.insert(c,m.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=In();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,X()))}populateOverlays(t,e,i){const s=[];return i.forEach(h=>{e.has(h)||s.push(h)}),this.documentOverlayCache.getOverlays(t,s).next(h=>{h.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let h=Me();const u=ii(),c=function(){return ii()}();return e.forEach((m,E)=>{const A=i.get(E.key);s.has(E.key)&&(A===void 0||A.mutation instanceof Vn)?h=h.insert(E.key,E):A!==void 0?(u.set(E.key,A.mutation.getFieldMask()),si(A.mutation,E,A.mutation.getFieldMask(),yt.now())):u.set(E.key,le.empty())}),this.recalculateAndSaveOverlays(t,h).next(m=>(m.forEach((E,A)=>u.set(E,A)),e.forEach((E,A)=>{var R;return c.set(E,new md(A,(R=u.get(E))!==null&&R!==void 0?R:null))}),c))}recalculateAndSaveOverlays(t,e){const i=ii();let s=new ct((u,c)=>u-c),h=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(m=>{const E=e.get(m);if(E===null)return;let A=i.get(m)||le.empty();A=c.applyToLocalView(E,A),i.set(m,A);const R=(s.get(c.batchId)||X()).add(m);s=s.insert(c.batchId,R)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const m=c.getNext(),E=m.key,A=m.value,R=ol();A.forEach(b=>{if(!h.has(b)){const P=dl(e.get(b),i.get(b));P!==null&&R.set(b,P),h=h.add(b)}}),u.push(this.documentOverlayCache.saveOverlays(t,E,R))}return k.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):wf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(h=>{const u=s-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-h.size):k.resolve(In());let c=-1,m=h;return u.next(E=>k.forEach(E,(A,R)=>(c<R.largestBatchId&&(c=R.largestBatchId),h.get(A)?k.resolve():this.remoteDocumentCache.getEntry(t,A).next(b=>{m=m.insert(A,b)}))).next(()=>this.populateOverlays(t,E,h)).next(()=>this.computeViews(t,m,E,X())).next(A=>({batchId:c,changes:sl(A)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(i=>{let s=ti();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const h=e.collectionGroup;let u=ti();return this.indexManager.getCollectionParents(t,h).next(c=>k.forEach(c,m=>{const E=function(R,b){return new is(b,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(e,m.child(h));return this.getDocumentsMatchingCollectionQuery(t,E,i,s).next(A=>{A.forEach((R,b)=>{u=u.insert(R,b)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let h;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(h=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,h,s))).next(u=>{h.forEach((m,E)=>{const A=E.getKey();u.get(A)===null&&(u=u.insert(A,xt.newInvalidDocument(A)))});let c=ti();return u.forEach((m,E)=>{const A=h.get(m);A!==void 0&&si(A.mutation,E,le.empty(),yt.now()),os(e,E)&&(c=c.insert(m,E))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return k.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:pe(s.createTime)}}(e)),k.resolve()}getNamedQuery(t,e){return k.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(s){return{name:s.name,query:fd(s.bundledQuery),readTime:pe(s.readTime)}}(e)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.overlays=new ct(M.comparator),this.Pr=new Map}getOverlay(t,e){return k.resolve(this.overlays.get(e))}getOverlays(t,e){const i=In();return k.forEach(e,s=>this.getOverlay(t,s).next(h=>{h!==null&&i.set(s,h)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,h)=>{this.ht(t,e,h)}),k.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Pr.get(i);return s!==void 0&&(s.forEach(h=>this.overlays=this.overlays.remove(h)),this.Pr.delete(i)),k.resolve()}getOverlaysForCollection(t,e,i){const s=In(),h=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const m=c.getNext().value,E=m.getKey();if(!e.isPrefixOf(E.path))break;E.path.length===h&&m.largestBatchId>i&&s.set(m.getKey(),m)}return k.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let h=new ct((E,A)=>E-A);const u=this.overlays.getIterator();for(;u.hasNext();){const E=u.getNext().value;if(E.getKey().getCollectionGroup()===e&&E.largestBatchId>i){let A=h.get(E.largestBatchId);A===null&&(A=In(),h=h.insert(E.largestBatchId,A)),A.set(E.getKey(),E)}}const c=In(),m=h.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((E,A)=>c.set(E,A)),!(c.size()>=s)););return k.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Pr.get(s.largestBatchId).delete(i.key);this.Pr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new jf(e,i));let h=this.Pr.get(e);h===void 0&&(h=X(),this.Pr.set(e,h)),this.Pr.set(e,h.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.Ir=new Pt(Et.Tr),this.Er=new Pt(Et.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const i=new Et(t,e);this.Ir=this.Ir.add(i),this.Er=this.Er.add(i)}Ar(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Rr(new Et(t,e))}Vr(t,e){t.forEach(i=>this.removeReference(i,e))}mr(t){const e=new M(new lt([])),i=new Et(e,t),s=new Et(e,t+1),h=[];return this.Er.forEachInRange([i,s],u=>{this.Rr(u),h.push(u.key)}),h}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Er=this.Er.delete(t)}pr(t){const e=new M(new lt([])),i=new Et(e,t),s=new Et(e,t+1);let h=X();return this.Er.forEachInRange([i,s],u=>{h=h.add(u.key)}),h}containsKey(t){const e=new Et(t,0),i=this.Ir.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Et{constructor(t,e){this.key=t,this.yr=e}static Tr(t,e){return M.comparator(t.key,e.key)||st(t.yr,e.yr)}static dr(t,e){return st(t.yr,e.yr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new Pt(Et.Tr)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const h=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Bf(h,e,i,s);this.mutationQueue.push(u);for(const c of s)this.Sr=this.Sr.add(new Et(c.key,h)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return k.resolve(u)}lookupMutationBatch(t,e){return k.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Dr(i),h=s<0?0:s;return k.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Et(e,0),s=new Et(e,Number.POSITIVE_INFINITY),h=[];return this.Sr.forEachInRange([i,s],u=>{const c=this.br(u.yr);h.push(c)}),k.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new Pt(st);return e.forEach(s=>{const h=new Et(s,0),u=new Et(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([h,u],c=>{i=i.add(c.yr)})}),k.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let h=i;M.isDocumentKey(h)||(h=h.child(""));const u=new Et(new M(h),0);let c=new Pt(st);return this.Sr.forEachWhile(m=>{const E=m.key.path;return!!i.isPrefixOf(E)&&(E.length===s&&(c=c.add(m.yr)),!0)},u),k.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const s=this.br(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){at(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Sr;return k.forEach(e.mutations,s=>{const h=new Et(s.key,e.batchId);return i=i.delete(h),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Sr=i})}xn(t){}containsKey(t,e){const i=new Et(e,0),s=this.Sr.firstAfterOrEqual(i);return k.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t){this.Fr=t,this.docs=function(){return new ct(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),h=s?s.size:0,u=this.Fr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-h,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return k.resolve(i?i.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let i=Me();return e.forEach(s=>{const h=this.docs.get(s);i=i.insert(s,h?h.document.mutableCopy():xt.newInvalidDocument(s))}),k.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let h=Me();const u=e.path,c=new M(u.child("")),m=this.docs.getIteratorFrom(c);for(;m.hasNext();){const{key:E,value:{document:A}}=m.getNext();if(!u.isPrefixOf(E.path))break;E.path.length>u.length+1||sf(rf(A),i)<=0||(s.has(A.key)||os(e,A))&&(h=h.insert(A.key,A.mutableCopy()))}return k.resolve(h)}getAllFromCollectionGroup(t,e,i,s){j()}Mr(t,e){return k.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Ad(this)}getSize(t){return k.resolve(this.size)}}class Ad extends gd{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ur.addEntry(t,s)):this.ur.removeEntry(i)}),k.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t){this.persistence=t,this.Or=new Zn(e=>Uo(e),$o),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new qo,this.targetCount=0,this.Br=Gn.Ln()}forEachTarget(t,e){return this.Or.forEach((i,s)=>e(s)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Nr&&(this.Nr=e),k.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Gn(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,k.resolve()}updateTargetData(t,e){return this.Qn(e),k.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Lr.mr(e.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,e,i){let s=0;const h=[];return this.Or.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Or.delete(u),h.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),k.waitFor(h).next(()=>s)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,e){const i=this.Or.get(e)||null;return k.resolve(i)}addMatchingKeys(t,e,i){return this.Lr.Ar(e,i),k.resolve()}removeMatchingKeys(t,e,i){this.Lr.Vr(e,i);const s=this.persistence.referenceDelegate,h=[];return s&&e.forEach(u=>{h.push(s.markPotentiallyOrphaned(t,u))}),k.waitFor(h)}removeMatchingKeysForTargetId(t,e){return this.Lr.mr(e),k.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Lr.pr(e);return k.resolve(i)}containsKey(t,e){return k.resolve(this.Lr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e){this.kr={},this.overlays={},this.qr=new xo(0),this.Qr=!1,this.Qr=!0,this.Kr=new Ed,this.referenceDelegate=t(this),this.$r=new wd(this),this.indexManager=new dd,this.remoteDocumentCache=function(s){return new Id(s)}(i=>this.referenceDelegate.Ur(i)),this.serializer=new cd(e),this.Wr=new yd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.kr[t.toKey()];return i||(i=new Td(e,this.referenceDelegate),this.kr[t.toKey()]=i),i}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(t,e,i){O("MemoryPersistence","Starting transaction:",t);const s=new bd(this.qr.next());return this.referenceDelegate.Gr(),i(s).next(h=>this.referenceDelegate.zr(s).next(()=>h)).toPromise().then(h=>(s.raiseOnCommittedEvent(),h))}jr(t,e){return k.or(Object.values(this.kr).map(i=>()=>i.containsKey(t,e)))}}class bd extends af{constructor(t){super(),this.currentSequenceNumber=t}}class zo{constructor(t){this.persistence=t,this.Hr=new qo,this.Jr=null}static Yr(t){return new zo(t)}get Zr(){if(this.Jr)return this.Jr;throw j()}addReference(t,e,i){return this.Hr.addReference(i,e),this.Zr.delete(i.toString()),k.resolve()}removeReference(t,e,i){return this.Hr.removeReference(i,e),this.Zr.add(i.toString()),k.resolve()}markPotentiallyOrphaned(t,e){return this.Zr.add(e.toString()),k.resolve()}removeTarget(t,e){this.Hr.mr(e.targetId).forEach(s=>this.Zr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(h=>this.Zr.add(h.toString()))}).next(()=>i.removeTargetData(t,e))}Gr(){this.Jr=new Set}zr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Zr,i=>{const s=M.fromPath(i);return this.Xr(t,s).next(h=>{h||e.removeEntry(s,G.min())})}).next(()=>(this.Jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Xr(t,e).next(i=>{i?this.Zr.delete(e.toString()):this.Zr.add(e.toString())})}Ur(t){return 0}Xr(t,e){return k.or([()=>k.resolve(this.Hr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.jr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Ki=i,this.$i=s}static Ui(t,e){let i=X(),s=X();for(const h of e.docChanges)switch(h.type){case 0:i=i.add(h.doc.key);break;case 1:s=s.add(h.doc.key)}return new Go(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Hu()?8:hf(No())>0?6:4}()}initialize(t,e){this.Hi=t,this.indexManager=e,this.Wi=!0}getDocumentsMatchingQuery(t,e,i,s){const h={result:null};return this.Ji(t,e).next(u=>{h.result=u}).next(()=>{if(!h.result)return this.Yi(t,e,s,i).next(u=>{h.result=u})}).next(()=>{if(h.result)return;const u=new Cd;return this.Zi(t,e,u).next(c=>{if(h.result=c,this.Gi)return this.Xi(t,e,u,c.size)})}).next(()=>h.result)}Xi(t,e,i,s){return i.documentReadCount<this.zi?(Jr()<=nt.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",xn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),k.resolve()):(Jr()<=nt.DEBUG&&O("QueryEngine","Query:",xn(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ji*s?(Jr()<=nt.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",xn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,de(e))):k.resolve())}Ji(t,e){if(Ca(e))return k.resolve(null);let i=de(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=vo(e,null,"F"),i=de(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(h=>{const u=X(...h);return this.Hi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(m=>{const E=this.es(e,c);return this.ts(e,E,u,m.readTime)?this.Ji(t,vo(e,null,"F")):this.ns(t,E,e,m)}))})))}Yi(t,e,i,s){return Ca(e)||s.isEqual(G.min())?k.resolve(null):this.Hi.getDocuments(t,i).next(h=>{const u=this.es(e,h);return this.ts(e,u,i,s)?k.resolve(null):(Jr()<=nt.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xn(e)),this.ns(t,u,e,nf(s,-1)).next(c=>c))})}es(t,e){let i=new Pt(rl(t));return e.forEach((s,h)=>{os(t,h)&&(i=i.add(h))}),i}ts(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const h=t.limitType==="F"?e.last():e.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(s)>0)}Zi(t,e,i){return Jr()<=nt.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",xn(e)),this.Hi.getDocumentsMatchingQuery(t,e,Ge.min(),i)}ns(t,e,i,s){return this.Hi.getDocumentsMatchingQuery(t,i,s).next(h=>(e.forEach(u=>{h=h.insert(u.key,u)}),h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e,i,s){this.persistence=t,this.rs=e,this.serializer=s,this.ss=new ct(st),this.os=new Zn(h=>Uo(h),$o),this._s=new Map,this.us=t.getRemoteDocumentCache(),this.$r=t.getTargetCache(),this.Wr=t.getBundleCache(),this.cs(i)}cs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _d(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ss))}}function Dd(n,t,e,i){return new Sd(n,t,e,i)}async function bl(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(h=>(s=h,e.cs(t),e.mutationQueue.getAllMutationBatches(i))).next(h=>{const u=[],c=[];let m=X();for(const E of s){u.push(E.batchId);for(const A of E.mutations)m=m.add(A.key)}for(const E of h){c.push(E.batchId);for(const A of E.mutations)m=m.add(A.key)}return e.localDocuments.getDocuments(i,m).next(E=>({ls:E,removedBatchIds:u,addedBatchIds:c}))})})}function kd(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),h=e.us.newChangeBuffer({trackRemovals:!0});return function(c,m,E,A){const R=E.batch,b=R.keys();let P=k.resolve();return b.forEach(D=>{P=P.next(()=>A.getEntry(m,D)).next(N=>{const C=E.docVersions.get(D);at(C!==null),N.version.compareTo(C)<0&&(R.applyToRemoteDocument(N,E),N.isValidDocument()&&(N.setReadTime(E.commitVersion),A.addEntry(N)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(m,R))}(e,i,t,h).next(()=>h.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let m=X();for(let E=0;E<c.mutationResults.length;++E)c.mutationResults[E].transformResults.length>0&&(m=m.add(c.batch.mutations[E].key));return m}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Cl(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.$r.getLastRemoteSnapshotVersion(e))}function Vd(n,t){const e=K(n),i=t.snapshotVersion;let s=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",h=>{const u=e.us.newChangeBuffer({trackRemovals:!0});s=e.ss;const c=[];t.targetChanges.forEach((A,R)=>{const b=s.get(R);if(!b)return;c.push(e.$r.removeMatchingKeys(h,A.removedDocuments,R).next(()=>e.$r.addMatchingKeys(h,A.addedDocuments,R)));let P=b.withSequenceNumber(h.currentSequenceNumber);t.targetMismatches.get(R)!==null?P=P.withResumeToken(St.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):A.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(A.resumeToken,i)),s=s.insert(R,P),function(N,C,H){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(b,P,A)&&c.push(e.$r.updateTargetData(h,P))});let m=Me(),E=X();if(t.documentUpdates.forEach(A=>{t.resolvedLimboDocuments.has(A)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(h,A))}),c.push(Nd(h,u,t.documentUpdates).next(A=>{m=A.hs,E=A.Ps})),!i.isEqual(G.min())){const A=e.$r.getLastRemoteSnapshotVersion(h).next(R=>e.$r.setTargetsMetadata(h,h.currentSequenceNumber,i));c.push(A)}return k.waitFor(c).next(()=>u.apply(h)).next(()=>e.localDocuments.getLocalViewOfDocuments(h,m,E)).next(()=>m)}).then(h=>(e.ss=s,h))}function Nd(n,t,e){let i=X(),s=X();return e.forEach(h=>i=i.add(h)),t.getEntries(n,i).next(h=>{let u=Me();return e.forEach((c,m)=>{const E=h.get(c);m.isFoundDocument()!==E.isFoundDocument()&&(s=s.add(c)),m.isNoDocument()&&m.version.isEqual(G.min())?(t.removeEntry(c,m.readTime),u=u.insert(c,m)):!E.isValidDocument()||m.version.compareTo(E.version)>0||m.version.compareTo(E.version)===0&&E.hasPendingWrites?(t.addEntry(m),u=u.insert(c,m)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",E.version," Watch version:",m.version)}),{hs:u,Ps:s}})}function Od(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function xd(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return e.$r.getTargetData(i,t).next(h=>h?(s=h,k.resolve(s)):e.$r.allocateTargetId(i).next(u=>(s=new Be(t,u,"TargetPurposeListen",i.currentSequenceNumber),e.$r.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=e.ss.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ss=e.ss.insert(i.targetId,i),e.os.set(t,i.targetId)),i})}async function wo(n,t,e){const i=K(n),s=i.ss.get(t),h=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",h,u=>i.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!_i(u))throw u;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}i.ss=i.ss.remove(t),i.os.delete(s.target)}function Fa(n,t,e){const i=K(n);let s=G.min(),h=X();return i.persistence.runTransaction("Execute query","readwrite",u=>function(m,E,A){const R=K(m),b=R.os.get(A);return b!==void 0?k.resolve(R.ss.get(b)):R.$r.getTargetData(E,A)}(i,u,de(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.$r.getMatchingKeysForTargetId(u,c.targetId).next(m=>{h=m})}).next(()=>i.rs.getDocumentsMatchingQuery(u,t,e?s:G.min(),e?h:X())).next(c=>(Ld(i,bf(t),c),{documents:c,Is:h})))}function Ld(n,t,e){let i=n._s.get(t)||G.min();e.forEach((s,h)=>{h.readTime.compareTo(i)>0&&(i=h.readTime)}),n._s.set(t,i)}class Ua{constructor(){this.activeTargetIds=Vf()}Vs(t){this.activeTargetIds=this.activeTargetIds.add(t)}fs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Rs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Md{constructor(){this.io=new Ua,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.io.Vs(t),this.so[t]||"not-current"}updateQueryState(t,e,i){this.so[t]=e}removeLocalQueryTarget(t){this.io.fs(t)}isLocalQueryTarget(t){return this.io.activeTargetIds.has(t)}clearQueryState(t){delete this.so[t]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(t){return this.io.activeTargetIds.has(t)}start(){return this.io=new Ua,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(t){this.lo.push(t)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.lo)t(0)}co(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.lo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi=null;function to(){return Pi===null?Pi=function(){return 268435456+Math.round(2147483648*Math.random())}():Pi++,"0x"+Pi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t){this.Po=t.Po,this.Io=t.Io}To(t){this.Eo=t}Ao(t){this.Ro=t}Vo(t){this.mo=t}onMessage(t){this.fo=t}close(){this.Io()}send(t){this.Po(t)}po(){this.Eo()}yo(){this.Ro()}wo(t){this.mo(t)}So(t){this.fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="WebChannelConnection";class Bd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),h=encodeURIComponent(this.databaseId.database);this.bo=i+"://"+e.host,this.Do=`projects/${s}/databases/${h}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${h}`}get vo(){return!1}Fo(e,i,s,h,u){const c=to(),m=this.Mo(e,i.toUriEncodedString());O("RestConnection",`Sending RPC '${e}' ${c}:`,m,s);const E={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(E,h,u),this.Oo(e,m,E,s).then(A=>(O("RestConnection",`Received RPC '${e}' ${c}: `,A),A),A=>{throw jn("RestConnection",`RPC '${e}' ${c} failed with error: `,A,"url: ",m,"request:",s),A})}No(e,i,s,h,u,c){return this.Fo(e,i,s,h,u)}xo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((h,u)=>e[u]=h),s&&s.headers.forEach((h,u)=>e[u]=h)}Mo(e,i){const s=Ud[e];return`${this.bo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Oo(t,e,i,s){const h=to();return new Promise((u,c)=>{const m=new Mh;m.setWithCredentials(!0),m.listenOnce(Uh.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Ni.NO_ERROR:const A=m.getResponseJson();O(Vt,`XHR for RPC '${t}' ${h} received:`,JSON.stringify(A)),u(A);break;case Ni.TIMEOUT:O(Vt,`RPC '${t}' ${h} timed out`),c(new x(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const R=m.getStatus();if(O(Vt,`RPC '${t}' ${h} failed with status:`,R,"response text:",m.getResponseText()),R>0){let b=m.getResponseJson();Array.isArray(b)&&(b=b[0]);const P=b==null?void 0:b.error;if(P&&P.status&&P.message){const D=function(C){const H=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(H)>=0?H:V.UNKNOWN}(P.status);c(new x(D,P.message))}else c(new x(V.UNKNOWN,"Server responded with status "+m.getStatus()))}else c(new x(V.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{O(Vt,`RPC '${t}' ${h} completed.`)}});const E=JSON.stringify(s);O(Vt,`RPC '${t}' ${h} sending request:`,s),m.send(e,"POST",E,i,15)})}Lo(t,e,i){const s=to(),h=[this.bo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=jh(),c=Bh(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},E=this.longPollingOptions.timeoutSeconds;E!==void 0&&(m.longPollingTimeout=Math.round(1e3*E)),this.useFetchStreams&&(m.xmlHttpFactory=new Fh({})),this.xo(m.initMessageHeaders,e,i),m.encodeInitMessageHeaders=!0;const A=h.join("");O(Vt,`Creating RPC '${t}' stream ${s}: ${A}`,m);const R=u.createWebChannel(A,m);let b=!1,P=!1;const D=new $d({Po:C=>{P?O(Vt,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(b||(O(Vt,`Opening RPC '${t}' stream ${s} transport.`),R.open(),b=!0),O(Vt,`RPC '${t}' stream ${s} sending:`,C),R.send(C))},Io:()=>R.close()}),N=(C,H,W)=>{C.listen(H,L=>{try{W(L)}catch(F){setTimeout(()=>{throw F},0)}})};return N(R,Zr.EventType.OPEN,()=>{P||(O(Vt,`RPC '${t}' stream ${s} transport opened.`),D.po())}),N(R,Zr.EventType.CLOSE,()=>{P||(P=!0,O(Vt,`RPC '${t}' stream ${s} transport closed`),D.wo())}),N(R,Zr.EventType.ERROR,C=>{P||(P=!0,jn(Vt,`RPC '${t}' stream ${s} transport errored:`,C),D.wo(new x(V.UNAVAILABLE,"The operation could not be completed")))}),N(R,Zr.EventType.MESSAGE,C=>{var H;if(!P){const W=C.data[0];at(!!W);const L=W,F=L.error||((H=L[0])===null||H===void 0?void 0:H.error);if(F){O(Vt,`RPC '${t}' stream ${s} received error:`,F);const ht=F.status;let Q=function(g){const _=ft[g];if(_!==void 0)return ml(_)}(ht),v=F.message;Q===void 0&&(Q=V.INTERNAL,v="Unknown error status: "+ht+" with message "+F.message),P=!0,D.wo(new x(Q,v)),R.close()}else O(Vt,`RPC '${t}' stream ${s} received:`,W),D.So(W)}}),N(c,$h.STAT_EVENT,C=>{C.stat===fo.PROXY?O(Vt,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===fo.NOPROXY&&O(Vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.yo()},0),D}}function eo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n){return new Yf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl=class{constructor(t,e,i=1e3,s=1.5,h=6e4){this.ai=t,this.timerId=e,this.Bo=i,this.ko=s,this.qo=h,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),i=Math.max(0,Date.now()-this.$o),s=Math.max(0,e-i);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,s,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e,i,s,h,u,c,m){this.ai=t,this.jo=i,this.Ho=s,this.connection=h,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=m,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Pl(t,e)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(t){this.a_(),this.stream.send(t)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(t,e){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,t!==4?this.e_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Le(e.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Vo(e)}c_(){}auth(){this.state=1;const t=this.l_(this.Jo),e=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Jo===e&&this.h_(i,s)},i=>{t(()=>{const s=new x(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.P_(s)})})}h_(t,e){const i=this.l_(this.Jo);this.stream=this.I_(t,e),this.stream.To(()=>{i(()=>this.listener.To())}),this.stream.Ao(()=>{i(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(s=>{i(()=>this.P_(s))}),this.stream.onMessage(s=>{i(()=>++this.Xo==1?this.T_(s):this.onNext(s))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}l_(t){return e=>{this.ai.enqueueAndForget(()=>this.Jo===t?e():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jd extends Sl{constructor(t,e,i,s,h,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,u),this.serializer=h}I_(t,e){return this.connection.Lo("Listen",t,e)}T_(t){return this.onNext(t)}onNext(t){this.e_.reset();const e=td(this.serializer,t),i=function(h){if(!("targetChange"in h))return G.min();const u=h.targetChange;return u.targetIds&&u.targetIds.length?G.min():u.readTime?pe(u.readTime):G.min()}(t);return this.listener.E_(e,i)}d_(t){const e={};e.database=Ao(this.serializer),e.addTarget=function(h,u){let c;const m=u.target;if(c=yo(m)?{documents:rd(h,m)}:{query:id(h,m)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=vl(h,u.resumeToken);const E=Eo(h,u.expectedCount);E!==null&&(c.expectedCount=E)}else if(u.snapshotVersion.compareTo(G.min())>0){c.readTime=Gi(h,u.snapshotVersion.toTimestamp());const E=Eo(h,u.expectedCount);E!==null&&(c.expectedCount=E)}return c}(this.serializer,t);const i=od(this.serializer,t);i&&(e.labels=i),this.__(e)}A_(t){const e={};e.database=Ao(this.serializer),e.removeTarget=t,this.__(e)}}class Hd extends Sl{constructor(t,e,i,s,h,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=h}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(t,e){return this.connection.Lo("Write",t,e)}T_(t){return at(!!t.streamToken),this.lastStreamToken=t.streamToken,at(!t.writeResults||t.writeResults.length===0),this.listener.m_()}onNext(t){at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.e_.reset();const e=nd(t.writeResults,t.commitTime),i=pe(t.commitTime);return this.listener.f_(i,e)}g_(){const t={};t.database=Ao(this.serializer),this.__(t)}V_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>ed(this.serializer,i))};this.__(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.p_=!1}y_(){if(this.p_)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(t,e,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,u])=>this.connection.Fo(t,To(e,i),s,h,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new x(V.UNKNOWN,h.toString())})}No(t,e,i,s,h){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.No(t,To(e,i),s,u,c,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(V.UNKNOWN,u.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class zd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(t){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.M_(),this.w_=0,t==="Online"&&(this.b_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}v_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Le(e),this.b_=!1):O("OnlineStateTracker",e)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e,i,s,h){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=h,this.B_.oo(u=>{i.enqueueAndForget(async()=>{Nn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(m){const E=K(m);E.N_.add(4),await Ei(E),E.k_.set("Unknown"),E.N_.delete(4),await cs(E)}(this))})}),this.k_=new zd(i,s)}}async function cs(n){if(Nn(n))for(const t of n.L_)await t(!0)}async function Ei(n){for(const t of n.L_)await t(!1)}function Dl(n,t){const e=K(n);e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),Xo(e)?Qo(e):tr(e).n_()&&Wo(e,t))}function Ko(n,t){const e=K(n),i=tr(e);e.O_.delete(t),i.n_()&&kl(e,t),e.O_.size===0&&(i.n_()?i.s_():Nn(e)&&e.k_.set("Unknown"))}function Wo(n,t){if(n.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}tr(n).d_(t)}function kl(n,t){n.q_.xe(t),tr(n).A_(t)}function Qo(n){n.q_=new Kf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.O_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),tr(n).start(),n.k_.D_()}function Xo(n){return Nn(n)&&!tr(n).t_()&&n.O_.size>0}function Nn(n){return K(n).N_.size===0}function Vl(n){n.q_=void 0}async function Kd(n){n.k_.set("Online")}async function Wd(n){n.O_.forEach((t,e)=>{Wo(n,t)})}async function Qd(n,t){Vl(n),Xo(n)?(n.k_.F_(t),Qo(n)):n.k_.set("Unknown")}async function Xd(n,t,e){if(n.k_.set("Online"),t instanceof yl&&t.state===2&&t.cause)try{await async function(s,h){const u=h.cause;for(const c of h.targetIds)s.O_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.O_.delete(c),s.q_.removeTarget(c))}(n,t)}catch(i){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Ki(n,i)}else if(t instanceof Li?n.q_.Ke(t):t instanceof _l?n.q_.He(t):n.q_.We(t),!e.isEqual(G.min()))try{const i=await Cl(n.localStore);e.compareTo(i)>=0&&await function(h,u){const c=h.q_.rt(u);return c.targetChanges.forEach((m,E)=>{if(m.resumeToken.approximateByteSize()>0){const A=h.O_.get(E);A&&h.O_.set(E,A.withResumeToken(m.resumeToken,u))}}),c.targetMismatches.forEach((m,E)=>{const A=h.O_.get(m);if(!A)return;h.O_.set(m,A.withResumeToken(St.EMPTY_BYTE_STRING,A.snapshotVersion)),kl(h,m);const R=new Be(A.target,m,E,A.sequenceNumber);Wo(h,R)}),h.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(i){O("RemoteStore","Failed to raise snapshot:",i),await Ki(n,i)}}async function Ki(n,t,e){if(!_i(t))throw t;n.N_.add(1),await Ei(n),n.k_.set("Offline"),e||(e=()=>Cl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await e(),n.N_.delete(1),await cs(n)})}function Nl(n,t){return t().catch(e=>Ki(n,e,t))}async function fs(n){const t=K(n),e=We(t);let i=t.x_.length>0?t.x_[t.x_.length-1].batchId:-1;for(;Yd(t);)try{const s=await Od(t.localStore,i);if(s===null){t.x_.length===0&&e.s_();break}i=s.batchId,Jd(t,s)}catch(s){await Ki(t,s)}Ol(t)&&xl(t)}function Yd(n){return Nn(n)&&n.x_.length<10}function Jd(n,t){n.x_.push(t);const e=We(n);e.n_()&&e.R_&&e.V_(t.mutations)}function Ol(n){return Nn(n)&&!We(n).t_()&&n.x_.length>0}function xl(n){We(n).start()}async function Zd(n){We(n).g_()}async function tp(n){const t=We(n);for(const e of n.x_)t.V_(e.mutations)}async function ep(n,t,e){const i=n.x_.shift(),s=Bo.from(i,t,e);await Nl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await fs(n)}async function np(n,t){t&&We(n).R_&&await async function(i,s){if(function(u){return qf(u)&&u!==V.ABORTED}(s.code)){const h=i.x_.shift();We(i).i_(),await Nl(i,()=>i.remoteSyncer.rejectFailedWrite(h.batchId,s)),await fs(i)}}(n,t),Ol(n)&&xl(n)}async function Ba(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const i=Nn(e);e.N_.add(3),await Ei(e),i&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await cs(e)}async function rp(n,t){const e=K(n);t?(e.N_.delete(2),await cs(e)):t||(e.N_.add(2),await Ei(e),e.k_.set("Unknown"))}function tr(n){return n.Q_||(n.Q_=function(e,i,s){const h=K(e);return h.y_(),new jd(i,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,s)}(n.datastore,n.asyncQueue,{To:Kd.bind(null,n),Ao:Wd.bind(null,n),Vo:Qd.bind(null,n),E_:Xd.bind(null,n)}),n.L_.push(async t=>{t?(n.Q_.i_(),Xo(n)?Qo(n):n.k_.set("Unknown")):(await n.Q_.stop(),Vl(n))})),n.Q_}function We(n){return n.K_||(n.K_=function(e,i,s){const h=K(e);return h.y_(),new Hd(i,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,s)}(n.datastore,n.asyncQueue,{To:()=>Promise.resolve(),Ao:Zd.bind(null,n),Vo:np.bind(null,n),m_:tp.bind(null,n),f_:ep.bind(null,n)}),n.L_.push(async t=>{t?(n.K_.i_(),await fs(n)):(await n.K_.stop(),n.x_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.x_.length} pending writes`),n.x_=[]))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ip=class Ll{constructor(t,e,i,s,h){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=h,this.deferred=new He,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,h){const u=Date.now()+i,c=new Ll(t,e,u,s,h);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Yo(n,t){if(Le("AsyncQueue",`${t}: ${n}`),_i(n))return new x(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.comparator=t?(e,i)=>t(e,i)||M.comparator(e.key,i.key):(e,i)=>M.comparator(e.key,i.key),this.keyedMap=ti(),this.sortedSet=new ct(this.comparator)}static emptySet(t){return new Fn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,i)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Fn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,h=i.getNext().key;if(!s.isEqual(h))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new Fn;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.U_=new ct(M.comparator)}track(t){const e=t.doc.key,i=this.U_.get(e);i?t.type!==0&&i.type===3?this.U_=this.U_.insert(e,t):t.type===3&&i.type!==1?this.U_=this.U_.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.U_=this.U_.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.U_=this.U_.remove(e):t.type===1&&i.type===2?this.U_=this.U_.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):j():this.U_=this.U_.insert(e,t)}W_(){const t=[];return this.U_.inorderTraversal((e,i)=>{t.push(i)}),t}}class Kn{constructor(t,e,i,s,h,u,c,m,E){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=h,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=m,this.hasCachedResults=E}static fromInitialDocuments(t,e,i,s,h){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Kn(t,e,Fn.emptySet(e),u,i,s,!0,!1,h)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ss(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(t=>t.H_())}}class op{constructor(){this.queries=Ha(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(e,i){const s=K(e),h=s.queries;s.queries=Ha(),h.forEach((u,c)=>{for(const m of c.z_)m.onError(i)})})(this,new x(V.ABORTED,"Firestore shutting down"))}}function Ha(){return new Zn(n=>nl(n),ss)}async function ap(n,t){const e=K(n);let i=3;const s=t.query;let h=e.queries.get(s);h?!h.j_()&&t.H_()&&(i=2):(h=new sp,i=t.H_()?0:1);try{switch(i){case 0:h.G_=await e.onListen(s,!0);break;case 1:h.G_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=Yo(u,`Initialization of query '${xn(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,h),h.z_.push(t),t.Y_(e.onlineState),h.G_&&t.Z_(h.G_)&&Jo(e)}async function hp(n,t){const e=K(n),i=t.query;let s=3;const h=e.queries.get(i);if(h){const u=h.z_.indexOf(t);u>=0&&(h.z_.splice(u,1),h.z_.length===0?s=t.H_()?0:1:!h.j_()&&t.H_()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function lp(n,t){const e=K(n);let i=!1;for(const s of t){const h=s.query,u=e.queries.get(h);if(u){for(const c of u.z_)c.Z_(s)&&(i=!0);u.G_=s}}i&&Jo(e)}function up(n,t,e){const i=K(n),s=i.queries.get(t);if(s)for(const h of s.z_)h.onError(e);i.queries.delete(t)}function Jo(n){n.J_.forEach(t=>{t.next()})}var Ro,qa;(qa=Ro||(Ro={})).X_="default",qa.Cache="cache";class cp{constructor(t,e,i){this.query=t,this.ea=e,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=i||{}}Z_(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new Kn(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ta?this.ra(t)&&(this.ea.next(t),e=!0):this.ia(t,this.onlineState)&&(this.sa(t),e=!0),this.na=t,e}onError(t){this.ea.error(t)}Y_(t){this.onlineState=t;let e=!1;return this.na&&!this.ta&&this.ia(this.na,t)&&(this.sa(this.na),e=!0),e}ia(t,e){if(!t.fromCache||!this.H_())return!0;const i=e!=="Offline";return(!this.options.oa||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ra(t){if(t.docChanges.length>0)return!0;const e=this.na&&this.na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}sa(t){t=Kn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ta=!0,this.ea.next(t)}H_(){return this.options.source!==Ro.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t){this.key=t}}class Fl{constructor(t){this.key=t}}class fp{constructor(t,e){this.query=t,this.Ia=e,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=X(),this.mutatedKeys=X(),this.da=rl(t),this.Aa=new Fn(this.da)}get Ra(){return this.Ia}Va(t,e){const i=e?e.ma:new ja,s=e?e.Aa:this.Aa;let h=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const m=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,E=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((A,R)=>{const b=s.get(A),P=os(this.query,R)?R:null,D=!!b&&this.mutatedKeys.has(b.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let C=!1;b&&P?b.data.isEqual(P.data)?D!==N&&(i.track({type:3,doc:P}),C=!0):this.fa(b,P)||(i.track({type:2,doc:P}),C=!0,(m&&this.da(P,m)>0||E&&this.da(P,E)<0)&&(c=!0)):!b&&P?(i.track({type:0,doc:P}),C=!0):b&&!P&&(i.track({type:1,doc:b}),C=!0,(m||E)&&(c=!0)),C&&(P?(u=u.add(P),h=N?h.add(A):h.delete(A)):(u=u.delete(A),h=h.delete(A)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const A=this.query.limitType==="F"?u.last():u.first();u=u.delete(A.key),h=h.delete(A.key),i.track({type:1,doc:A})}return{Aa:u,ma:i,ts:c,mutatedKeys:h}}fa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const h=this.Aa;this.Aa=t.Aa,this.mutatedKeys=t.mutatedKeys;const u=t.ma.W_();u.sort((A,R)=>function(P,D){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return N(P)-N(D)}(A.type,R.type)||this.da(A.doc,R.doc)),this.ga(i),s=s!=null&&s;const c=e&&!s?this.pa():[],m=this.Ea.size===0&&this.current&&!s?1:0,E=m!==this.Ta;return this.Ta=m,u.length!==0||E?{snapshot:new Kn(this.query,t.Aa,h,u,t.mutatedKeys,m===0,E,!1,!!i&&i.resumeToken.approximateByteSize()>0),ya:c}:{ya:c}}Y_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new ja,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(t){return!this.Ia.has(t)&&!!this.Aa.has(t)&&!this.Aa.get(t).hasLocalMutations}ga(t){t&&(t.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=t.current)}pa(){if(!this.current)return[];const t=this.Ea;this.Ea=X(),this.Aa.forEach(i=>{this.wa(i.key)&&(this.Ea=this.Ea.add(i.key))});const e=[];return t.forEach(i=>{this.Ea.has(i)||e.push(new Fl(i))}),this.Ea.forEach(i=>{t.has(i)||e.push(new Ml(i))}),e}Sa(t){this.Ia=t.Is,this.Ea=X();const e=this.Va(t.documents);return this.applyChanges(e,!0)}ba(){return Kn.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class dp{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class pp{constructor(t){this.key=t,this.Da=!1}}class gp{constructor(t,e,i,s,h,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=h,this.maxConcurrentLimboResolutions=u,this.Ca={},this.va=new Zn(c=>nl(c),ss),this.Fa=new Map,this.Ma=new Set,this.xa=new ct(M.comparator),this.Oa=new Map,this.Na=new qo,this.La={},this.Ba=new Map,this.ka=Gn.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function mp(n,t,e=!0){const i=ql(n);let s;const h=i.va.get(t);return h?(i.sharedClientState.addLocalQueryTarget(h.targetId),s=h.view.ba()):s=await Ul(i,t,e,!0),s}async function _p(n,t){const e=ql(n);await Ul(e,t,!0,!1)}async function Ul(n,t,e,i){const s=await xd(n.localStore,de(t)),h=s.targetId,u=e?n.sharedClientState.addLocalQueryTarget(h):"not-current";let c;return i&&(c=await yp(n,t,h,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&Dl(n.remoteStore,s),c}async function yp(n,t,e,i,s){n.Qa=(R,b,P)=>async function(N,C,H,W){let L=C.view.Va(H);L.ts&&(L=await Fa(N.localStore,C.query,!1).then(({documents:v})=>C.view.Va(v,L)));const F=W&&W.targetChanges.get(C.targetId),ht=W&&W.targetMismatches.get(C.targetId)!=null,Q=C.view.applyChanges(L,N.isPrimaryClient,F,ht);return Ga(N,C.targetId,Q.ya),Q.snapshot}(n,R,b,P);const h=await Fa(n.localStore,t,!0),u=new fp(t,h.Is),c=u.Va(h.documents),m=vi.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),E=u.applyChanges(c,n.isPrimaryClient,m);Ga(n,e,E.ya);const A=new dp(t,e,u);return n.va.set(t,A),n.Fa.has(e)?n.Fa.get(e).push(t):n.Fa.set(e,[t]),E.snapshot}async function vp(n,t,e){const i=K(n),s=i.va.get(t),h=i.Fa.get(s.targetId);if(h.length>1)return i.Fa.set(s.targetId,h.filter(u=>!ss(u,t))),void i.va.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await wo(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),e&&Ko(i.remoteStore,s.targetId),bo(i,s.targetId)}).catch(mi)):(bo(i,s.targetId),await wo(i.localStore,s.targetId,!0))}async function Ep(n,t){const e=K(n),i=e.va.get(t),s=e.Fa.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Ko(e.remoteStore,i.targetId))}async function Tp(n,t,e){const i=Pp(n);try{const s=await function(u,c){const m=K(u),E=yt.now(),A=c.reduce((P,D)=>P.add(D.key),X());let R,b;return m.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=Me(),N=X();return m.us.getEntries(P,A).next(C=>{D=C,D.forEach((H,W)=>{W.isValidDocument()||(N=N.add(H))})}).next(()=>m.localDocuments.getOverlayedDocuments(P,D)).next(C=>{R=C;const H=[];for(const W of c){const L=Uf(W,R.get(W.key).overlayedDocument);L!=null&&H.push(new Vn(W.key,L,Wh(L.value.mapValue),xe.exists(!0)))}return m.mutationQueue.addMutationBatch(P,E,H,c)}).next(C=>{b=C;const H=C.applyToLocalDocumentSet(R,N);return m.documentOverlayCache.saveOverlays(P,C.batchId,H)})}).then(()=>({batchId:b.batchId,changes:sl(R)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,m){let E=u.La[u.currentUser.toKey()];E||(E=new ct(st)),E=E.insert(c,m),u.La[u.currentUser.toKey()]=E}(i,s.batchId,e),await Ti(i,s.changes),await fs(i.remoteStore)}catch(s){const h=Yo(s,"Failed to persist write");e.reject(h)}}async function $l(n,t){const e=K(n);try{const i=await Vd(e.localStore,t);t.targetChanges.forEach((s,h)=>{const u=e.Oa.get(h);u&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Da=!0:s.modifiedDocuments.size>0?at(u.Da):s.removedDocuments.size>0&&(at(u.Da),u.Da=!1))}),await Ti(e,i,t)}catch(i){await mi(i)}}function za(n,t,e){const i=K(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.va.forEach((h,u)=>{const c=u.view.Y_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const m=K(u);m.onlineState=c;let E=!1;m.queries.forEach((A,R)=>{for(const b of R.z_)b.Y_(c)&&(E=!0)}),E&&Jo(m)}(i.eventManager,t),s.length&&i.Ca.E_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Ip(n,t,e){const i=K(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Oa.get(t),h=s&&s.key;if(h){let u=new ct(M.comparator);u=u.insert(h,xt.newNoDocument(h,G.min()));const c=X().add(h),m=new ls(G.min(),new Map,new ct(st),u,c);await $l(i,m),i.xa=i.xa.remove(h),i.Oa.delete(t),Zo(i)}else await wo(i.localStore,t,!1).then(()=>bo(i,t,e)).catch(mi)}async function Ap(n,t){const e=K(n),i=t.batch.batchId;try{const s=await kd(e.localStore,t);jl(e,i,null),Bl(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Ti(e,s)}catch(s){await mi(s)}}async function wp(n,t,e){const i=K(n);try{const s=await function(u,c){const m=K(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",E=>{let A;return m.mutationQueue.lookupMutationBatch(E,c).next(R=>(at(R!==null),A=R.keys(),m.mutationQueue.removeMutationBatch(E,R))).next(()=>m.mutationQueue.performConsistencyCheck(E)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(E,A,c)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(E,A)).next(()=>m.localDocuments.getDocuments(E,A))})}(i.localStore,t);jl(i,t,e),Bl(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Ti(i,s)}catch(s){await mi(s)}}function Bl(n,t){(n.Ba.get(t)||[]).forEach(e=>{e.resolve()}),n.Ba.delete(t)}function jl(n,t,e){const i=K(n);let s=i.La[i.currentUser.toKey()];if(s){const h=s.get(t);h&&(e?h.reject(e):h.resolve(),s=s.remove(t)),i.La[i.currentUser.toKey()]=s}}function bo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Fa.get(t))n.va.delete(i),e&&n.Ca.Ka(i,e);n.Fa.delete(t),n.isPrimaryClient&&n.Na.mr(t).forEach(i=>{n.Na.containsKey(i)||Hl(n,i)})}function Hl(n,t){n.Ma.delete(t.path.canonicalString());const e=n.xa.get(t);e!==null&&(Ko(n.remoteStore,e),n.xa=n.xa.remove(t),n.Oa.delete(e),Zo(n))}function Ga(n,t,e){for(const i of e)i instanceof Ml?(n.Na.addReference(i.key,t),Rp(n,i)):i instanceof Fl?(O("SyncEngine","Document no longer in limbo: "+i.key),n.Na.removeReference(i.key,t),n.Na.containsKey(i.key)||Hl(n,i.key)):j()}function Rp(n,t){const e=t.key,i=e.path.canonicalString();n.xa.get(e)||n.Ma.has(i)||(O("SyncEngine","New document in limbo: "+e),n.Ma.add(i),Zo(n))}function Zo(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const t=n.Ma.values().next().value;n.Ma.delete(t);const e=new M(lt.fromString(t)),i=n.ka.next();n.Oa.set(i,new pp(e)),n.xa=n.xa.insert(e,i),Dl(n.remoteStore,new Be(de(el(e.path)),i,"TargetPurposeLimboResolution",xo.oe))}}async function Ti(n,t,e){const i=K(n),s=[],h=[],u=[];i.va.isEmpty()||(i.va.forEach((c,m)=>{u.push(i.Qa(m,t,e).then(E=>{var A;if((E||e)&&i.isPrimaryClient){const R=E?!E.fromCache:(A=e==null?void 0:e.targetChanges.get(m.targetId))===null||A===void 0?void 0:A.current;i.sharedClientState.updateQueryState(m.targetId,R?"current":"not-current")}if(E){s.push(E);const R=Go.Ui(m.targetId,E);h.push(R)}}))}),await Promise.all(u),i.Ca.E_(s),await async function(m,E){const A=K(m);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>k.forEach(E,b=>k.forEach(b.Ki,P=>A.persistence.referenceDelegate.addReference(R,b.targetId,P)).next(()=>k.forEach(b.$i,P=>A.persistence.referenceDelegate.removeReference(R,b.targetId,P)))))}catch(R){if(!_i(R))throw R;O("LocalStore","Failed to update sequence numbers: "+R)}for(const R of E){const b=R.targetId;if(!R.fromCache){const P=A.ss.get(b),D=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(D);A.ss=A.ss.insert(b,N)}}}(i.localStore,h))}async function bp(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const i=await bl(e.localStore,t);e.currentUser=t,function(h,u){h.Ba.forEach(c=>{c.forEach(m=>{m.reject(new x(V.CANCELLED,u))})}),h.Ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Ti(e,i.ls)}}function Cp(n,t){const e=K(n),i=e.Oa.get(t);if(i&&i.Da)return X().add(i.key);{let s=X();const h=e.Fa.get(t);if(!h)return s;for(const u of h){const c=e.va.get(u);s=s.unionWith(c.view.Ra)}return s}}function ql(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=$l.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ip.bind(null,t),t.Ca.E_=lp.bind(null,t.eventManager),t.Ca.Ka=up.bind(null,t.eventManager),t}function Pp(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ap.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wp.bind(null,t),t}class Ka{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=us(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Dd(this.persistence,new Pd,t.initialUser,this.serializer)}createPersistence(t){return new Rd(zo.Yr,this.serializer)}createSharedClientState(t){return new Md}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>za(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=bp.bind(null,this.syncEngine),await rp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new op}()}createDatastore(t){const e=us(t.databaseInfo.databaseId),i=function(h){return new Bd(h)}(t.databaseInfo);return function(h,u,c,m){return new qd(h,u,c,m)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,h,u,c){return new Gd(i,s,h,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>za(this.syncEngine,e,0),function(){return $a.D()?new $a:new Fd}())}createSyncEngine(t,e){return function(s,h,u,c,m,E,A){const R=new gp(s,h,u,c,m,E);return A&&(R.qa=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const h=K(s);O("RemoteStore","RemoteStore shutting down."),h.N_.add(5),await Ei(h),h.B_.shutdown(),h.k_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Wa(this.observer.next,t)}error(t){this.observer.error?this.Wa(this.observer.error,t):Le("Uncaught Error in snapshot listener:",t.toString())}Ga(){this.muted=!0}Wa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kp=class{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=Nt.UNAUTHENTICATED,this.clientId=qh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async h=>{O("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(O("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new He;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Yo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}};async function no(n,t){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await bl(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Wa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Np(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ba(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ba(t.remoteStore,s)),n._onlineComponents=t}function Vp(n){return n.name==="FirebaseError"?n.code===V.FAILED_PRECONDITION||n.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Np(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await no(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Vp(e))throw e;jn("Error using user provided cache. Falling back to memory cache: "+e),await no(n,new Ka)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await no(n,new Ka);return n._offlineComponents}async function zl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Wa(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Wa(n,new Sp))),n._onlineComponents}function Op(n){return zl(n).then(t=>t.syncEngine)}async function xp(n){const t=await zl(n),e=t.eventManager;return e.onListen=mp.bind(null,t.syncEngine),e.onUnlisten=vp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=_p.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ep.bind(null,t.syncEngine),e}function Lp(n,t,e={}){const i=new He;return n.asyncQueue.enqueueAndForget(async()=>function(h,u,c,m,E){const A=new Dp({next:b=>{u.enqueueAndForget(()=>hp(h,R)),b.fromCache&&m.source==="server"?E.reject(new x(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):E.resolve(b)},error:b=>E.reject(b)}),R=new cp(c,A,{includeMetadataChanges:!0,oa:!0});return ap(h,R)}(await xp(n),n.asyncQueue,t,e,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n,t,e){if(!e)throw new x(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Mp(n,t,e,i){if(t===!0&&i===!0)throw new x(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Xa(n){if(!M.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ya(n){if(M.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ta(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j()}function Wi(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ta(n);throw new x(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja=class{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new x(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Mp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gl((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}},ds=class{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ja({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ja(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Kc;switch(i.type){case"firstParty":return new Yc(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new x(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Qa.get(e);i&&(O("ComponentProvider","Removing Datastore"),Qa.delete(e),i.terminate())}(this),Promise.resolve()}};function Fp(n,t,e,i={}){var s;const h=(n=Wi(n,ds))._getSettings(),u=`${t}:${e}`;if(h.host!=="firestore.googleapis.com"&&h.host!==u&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},h),{host:u,ssl:!1})),i.mockUserToken){let c,m;if(typeof i.mockUserToken=="string")c=i.mockUserToken,m=Nt.MOCK_USER;else{c=Ch(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new x(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Nt(E)}n._authCredentials=new Wc(new Hh(c,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ps(this.firestore,t,this._query)}}class ce{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ce(this.firestore,t,this._key)}}class qe extends ps{constructor(t,e,i){super(t,e,el(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ce(this.firestore,null,new M(t))}withConverter(t){return new qe(this.firestore,t,this._path)}}function Dy(n,t,...e){if(n=$n(n),Kl("collection","path",t),n instanceof ds){const i=lt.fromString(t,...e);return Ya(i),new qe(n,null,i)}{if(!(n instanceof ce||n instanceof qe))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(lt.fromString(t,...e));return Ya(i),new qe(n.firestore,null,i)}}function Up(n,t,...e){if(n=$n(n),arguments.length===1&&(t=qh.newId()),Kl("doc","path",t),n instanceof ds){const i=lt.fromString(t,...e);return Xa(i),new ce(n,null,new M(i))}{if(!(n instanceof ce||n instanceof qe))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(lt.fromString(t,...e));return Xa(i),new ce(n.firestore,n instanceof qe?n.converter:null,new M(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $p=class{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Pl(this,"async_queue_retry"),this.Tu=()=>{const e=eo();e&&O("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=eo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=eo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new He;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!_i(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(i=>{this.lu=i,this.hu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw Le("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.hu=!1,i))));return this._u=e,e}enqueueAfterDelay(t,e,i){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const s=ip.createAndSchedule(this,t,e,i,h=>this.Ru(h));return this.cu.push(s),s}Eu(){this.lu&&j()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}},ea=class extends ds{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new $p}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ql(this),this._firestoreClient.terminate()}};function Ny(n,t){const e=typeof n=="object"?n:Nh(),i=typeof n=="string"?n:"(default)",s=kh(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const h=Rh("firestore");h&&Fp(s,...h)}return s}function Wl(n){return n._firestoreClient||Ql(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ql(n){var t,e,i;const s=n._freezeSettings(),h=function(c,m,E,A){return new cf(c,m,E,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,Gl(A.experimentalLongPollingOptions),A.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new kp(n._authCredentials,n._appCheckCredentials,n._queue,h),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wn(St.fromBase64String(t))}catch(e){throw new x(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wn(St.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return st(this._lat,t._lat)||st(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=/^__.*__$/;class jp{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Vn(t,this.data,this.fieldMask,e,this.fieldTransforms):new yi(t,this.data,e,this.fieldTransforms)}}function Yl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class ia{constructor(t,e,i,s,h,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,h===void 0&&this.pu(),this.fieldTransforms=h||[],this.fieldMask=u||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(t){return new ia(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.wu({path:i,bu:!1});return s.Du(t),s}Cu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.wu({path:i,bu:!1});return s.pu(),s}vu(t){return this.wu({path:void 0,bu:!0})}Fu(t){return Qi(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Du(this.path.get(t))}Du(t){if(t.length===0)throw this.Fu("Document fields must not be empty");if(Yl(this.yu)&&Bp.test(t))throw this.Fu('Document fields cannot begin and end with "__"')}}class Hp{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||us(t)}Ou(t,e,i,s=!1){return new ia({yu:t,methodName:e,xu:i,path:Ct.emptyPath(),bu:!1,Mu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qp(n){const t=n._freezeSettings(),e=us(n._databaseId);return new Hp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zp(n,t,e,i,s,h={}){const u=n.Ou(h.merge||h.mergeFields?2:0,t,e,s);eu("Data must be an object, but it was:",u,i);const c=Zl(i,u);let m,E;if(h.merge)m=new le(u.fieldMask),E=u.fieldTransforms;else if(h.mergeFields){const A=[];for(const R of h.mergeFields){const b=Gp(t,R,e);if(!u.contains(b))throw new x(V.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Wp(A,b)||A.push(b)}m=new le(A),E=u.fieldTransforms.filter(R=>m.covers(R.field))}else m=null,E=u.fieldTransforms;return new jp(new zt(c),m,E)}function Jl(n,t){if(tu(n=$n(n)))return eu("Unsupported field value:",t,n),Zl(n,t);if(n instanceof Xl)return function(i,s){if(!Yl(s.yu))throw s.Fu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Fu(`${i._methodName}() is not currently supported inside arrays`);const h=i._toFieldTransform(s);h&&s.fieldTransforms.push(h)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.bu&&t.yu!==4)throw t.Fu("Nested arrays are not supported");return function(i,s){const h=[];let u=0;for(const c of i){let m=Jl(c,s.vu(u));m==null&&(m={nullValue:"NULL_VALUE"}),h.push(m),u++}return{arrayValue:{values:h}}}(n,t)}return function(i,s){if((i=$n(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Nf(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const h=yt.fromDate(i);return{timestampValue:Gi(s.serializer,h)}}if(i instanceof yt){const h=new yt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Gi(s.serializer,h)}}if(i instanceof ra)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Wn)return{bytesValue:vl(s.serializer,i._byteString)};if(i instanceof ce){const h=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(h))throw s.Fu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:Ho(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Fu(`Unsupported field value: ${ta(i)}`)}(n,t)}function Zl(n,t){const e={};return zh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Jn(n,(i,s)=>{const h=Jl(s,t.Su(i));h!=null&&(e[i]=h)}),{mapValue:{fields:e}}}function tu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof ra||n instanceof Wn||n instanceof ce||n instanceof Xl)}function eu(n,t,e){if(!tu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=ta(e);throw i==="an object"?t.Fu(n+" a custom object"):t.Fu(n+" "+i)}}function Gp(n,t,e){if((t=$n(t))instanceof na)return t._internalPath;if(typeof t=="string")return nu(n,t);throw Qi("Field path arguments must be of type string or ",n,!1,void 0,e)}const Kp=new RegExp("[~\\*/\\[\\]]");function nu(n,t,e){if(t.search(Kp)>=0)throw Qi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new na(...t.split("."))._internalPath}catch{throw Qi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qi(n,t,e,i,s){const h=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let m="";return(h||u)&&(m+=" (found",h&&(m+=` in field ${i}`),u&&(m+=` in document ${s}`),m+=")"),new x(V.INVALID_ARGUMENT,c+n+m)}function Wp(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,e,i,s,h){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(iu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qp extends ru{data(){return super.data()}}function iu(n,t){return typeof t=="string"?nu(n,t):t instanceof na?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yp{convertValue(t,e="none"){switch(Dn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Sn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw j()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Jn(t,(s,h)=>{i[s]=this.convertValue(h,e)}),i}convertGeoPoint(t){return new ra(dt(t.latitude),dt(t.longitude))}convertArray(t,e){return(t.values||[]).map(i=>this.convertValue(i,e))}convertServerTimestamp(t,e){switch(e){case"previous":const i=Mo(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(li(t));default:return null}}convertTimestamp(t){const e=Ke(t);return new yt(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=lt.fromString(t);at(Rl(i));const s=new Kh(i.get(1),i.get(3)),h=new M(i.popFirst(5));return s.isEqual(e)||Le(`Document ${h} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n,t,e){let i;return i=n?n.toFirestore(t):t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zp extends ru{constructor(t,e,i,s,h,u){super(t,e,i,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=h}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(iu("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}}class Mi extends Zp{data(t={}){return super.data(t)}}class tg{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Si(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(i=>{t.call(e,new Mi(this._firestore,this._userDataWriter,i.key,i,new Si(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,h){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const m=new Mi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Si(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>h||c.type!==3).map(c=>{const m=new Mi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Si(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let E=-1,A=-1;return c.type!==0&&(E=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),A=u.indexOf(c.doc.key)),{type:eg(c.type),doc:m,oldIndex:E,newIndex:A}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function eg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}class ng extends Yp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ce(this.firestore,null,e)}}function Oy(n){n=Wi(n,ps);const t=Wi(n.firestore,ea),e=Wl(t),i=new ng(t);return Xp(n._query),Lp(e,n._query).then(s=>new tg(t,i,n,s))}function xy(n,t){const e=Wi(n.firestore,ea),i=Up(n),s=Jp(n.converter,t);return rg(e,[zp(qp(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,xe.exists(!1))]).then(()=>i)}function rg(n,t){return function(i,s){const h=new He;return i.asyncQueue.enqueueAndForget(async()=>Tp(await Op(i),s,h)),h.promise}(Wl(n),t)}(function(t,e=!0){(function(s){Yn=s})(Vh),oi(new Bn("firestore",(i,{instanceIdentifier:s,options:h})=>{const u=i.getProvider("app").getImmediate(),c=new ea(new Qc(i.getProvider("auth-internal")),new Zc(i.getProvider("app-check-internal")),function(E,A){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new x(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kh(E.options.projectId,A)}(u,s),u);return h=Object.assign({useFetchStreams:e},h),c._setSettings(h),c},"PUBLIC").setMultipleInstances(!0)),wn(ya,"4.6.5",t),wn(ya,"4.6.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="firebasestorage.googleapis.com",ig="storageBucket",sg=2*60*1e3,og=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe=class ou extends gi{constructor(t,e,i=0){super(ro(t),`Firebase Storage: ${e} (${ro(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ou.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ro(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}};var _e;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function ro(n){return"storage/"+n}function ag(){const n="An unknown error occurred, please check the error payload for server response.";return new Qe(_e.UNKNOWN,n)}function hg(){return new Qe(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function lg(){return new Qe(_e.CANCELED,"User canceled the upload/download.")}function ug(n){return new Qe(_e.INVALID_URL,"Invalid URL '"+n+"'.")}function cg(n){return new Qe(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Za(n){return new Qe(_e.INVALID_ARGUMENT,n)}function au(){return new Qe(_e.APP_DELETED,"The Firebase app was deleted.")}function fg(n){return new Qe(_e.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An=class Fi{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let i;try{i=Fi.makeFromUrl(t,e)}catch{return new Fi(t,"")}if(i.path==="")return i;throw cg(t)}static makeFromUrl(t,e){let i=null;const s="([A-Za-z0-9.\\-_]+)";function h(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const u="(/(.*))?$",c=new RegExp("^gs://"+s+u,"i"),m={bucket:1,path:3};function E(F){F.path_=decodeURIComponent(F.path)}const A="v[A-Za-z0-9_]+",R=e.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",P=new RegExp(`^https?://${R}/${A}/b/${s}/o${b}`,"i"),D={bucket:1,path:3},N=e===su?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",H=new RegExp(`^https?://${N}/${s}/${C}`,"i"),L=[{regex:c,indices:m,postModify:h},{regex:P,indices:D,postModify:E},{regex:H,indices:{bucket:1,path:2},postModify:E}];for(let F=0;F<L.length;F++){const ht=L[F],Q=ht.regex.exec(t);if(Q){const v=Q[ht.indices.bucket];let d=Q[ht.indices.path];d||(d=""),i=new Fi(v,d),ht.postModify(i);break}}if(i==null)throw ug(t);return i}},dg=class{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n,t,e){let i=1,s=null,h=null,u=!1,c=0;function m(){return c===2}let E=!1;function A(...C){E||(E=!0,t.apply(null,C))}function R(C){s=setTimeout(()=>{s=null,n(P,m())},C)}function b(){h&&clearTimeout(h)}function P(C,...H){if(E){b();return}if(C){b(),A.call(null,C,...H);return}if(m()||u){b(),A.call(null,C,...H);return}i<64&&(i*=2);let L;c===1?(c=2,L=0):L=(i+Math.random())*1e3,R(L)}let D=!1;function N(C){D||(D=!0,b(),!E&&(s!==null?(C||(c=2),clearTimeout(s),R(0)):C||(c=1)))}return R(0),h=setTimeout(()=>{u=!0,N(!0)},e),N}function gg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n){return n!==void 0}function th(n,t,e,i){if(i<t)throw Za(`Invalid value for '${n}'. Expected ${t} or greater.`);if(i>e)throw Za(`Invalid value for '${n}'. Expected ${e} or less.`)}function _g(n){const t=encodeURIComponent;let e="?";for(const i in n)if(n.hasOwnProperty(i)){const s=t(i)+"="+t(n[i]);e=e+s+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Xi||(Xi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,h=t.indexOf(n)!==-1;return e||s||h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vg=class{constructor(t,e,i,s,h,u,c,m,E,A,R,b=!0){this.url_=t,this.method_=e,this.headers_=i,this.body_=s,this.successCodes_=h,this.additionalRetryCodes_=u,this.callback_=c,this.errorCallback_=m,this.timeout_=E,this.progressCallback_=A,this.connectionFactory_=R,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,D)=>{this.resolve_=P,this.reject_=D,this.start_()})}start_(){const t=(i,s)=>{if(s){i(!1,new Di(!1,null,!0));return}const h=this.connectionFactory_();this.pendingConnection_=h;const u=c=>{const m=c.loaded,E=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,E)};this.progressCallback_!==null&&h.addUploadProgressListener(u),h.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&h.removeUploadProgressListener(u),this.pendingConnection_=null;const c=h.getErrorCode()===Xi.NO_ERROR,m=h.getStatus();if(!c||yg(m,this.additionalRetryCodes_)&&this.retry){const A=h.getErrorCode()===Xi.ABORT;i(!1,new Di(!1,null,A));return}const E=this.successCodes_.indexOf(m)!==-1;i(!0,new Di(E,h))})},e=(i,s)=>{const h=this.resolve_,u=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const m=this.callback_(c,c.getResponse());mg(m)?h(m):h()}catch(m){u(m)}else if(c!==null){const m=ag();m.serverResponse=c.getErrorText(),this.errorCallback_?u(this.errorCallback_(c,m)):u(m)}else if(s.canceled){const m=this.appDelete_?au():lg();u(m)}else{const m=hg();u(m)}};this.canceled_?e(!1,new Di(!1,null,!0)):this.backoffId_=pg(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&gg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},Di=class{constructor(t,e,i){this.wasSuccessCode=t,this.connection=e,this.canceled=!!i}};function Eg(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Tg(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ig(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Ag(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function wg(n,t,e,i,s,h,u=!0){const c=_g(n.urlParams),m=n.url+c,E=Object.assign({},n.headers);return Ig(E,t),Eg(E,e),Tg(E,h),Ag(E,i),new vg(m,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function bg(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg=class Co{constructor(t,e){this._service=t,e instanceof An?this._location=e:this._location=An.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Co(t,e)}get root(){const t=new An(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bg(this._location.path)}get storage(){return this._service}get parent(){const t=Rg(this._location.path);if(t===null)return null;const e=new An(this._location.bucket,t);return new Co(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw fg(t)}};function eh(n,t){const e=t==null?void 0:t[ig];return e==null?null:An.makeFromBucketSpec(e,n)}function Pg(n,t,e,i={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:Ch(s,n.app.options.projectId))}let Sg=class{constructor(t,e,i,s,h){this.app=t,this._authProvider=e,this._appCheckProvider=i,this._url=s,this._firebaseVersion=h,this._bucket=null,this._host=su,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sg,this._maxUploadRetryTime=og,this._requests=new Set,s!=null?this._bucket=An.makeFromBucketSpec(s,this._host):this._bucket=eh(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=An.makeFromBucketSpec(this._url,t):this._bucket=eh(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){th("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){th("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Cg(this,t)}_makeRequest(t,e,i,s,h=!0){if(this._deleted)return new dg(au());{const u=wg(t,this._appId,i,s,e,this._firebaseVersion,h);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(t,e){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,i,s).getPromise()}};const nh="@firebase/storage",rh="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="storage";function $y(n=Nh(),t){n=$n(n);const i=kh(n,hu).getImmediate({identifier:t}),s=Rh("storage");return s&&Dg(i,...s),i}function Dg(n,t,e,i={}){Pg(n,t,e,i)}function kg(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Sg(e,i,s,t,Vh)}function Vg(){oi(new Bn(hu,kg,"PUBLIC").setMultipleInstances(!0)),wn(nh,rh,""),wn(nh,rh,"esm2017")}Vg();var ih={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ng=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const h=n[e++];t[i++]=String.fromCharCode((s&31)<<6|h&63)}else if(s>239&&s<365){const h=n[e++],u=n[e++],c=n[e++],m=((s&7)<<18|(h&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(m>>10)),t[i++]=String.fromCharCode(56320+(m&1023))}else{const h=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(h&63)<<6|u&63)}}return t.join("")},uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const h=n[s],u=s+1<n.length,c=u?n[s+1]:0,m=s+2<n.length,E=m?n[s+2]:0,A=h>>2,R=(h&3)<<4|c>>4;let b=(c&15)<<2|E>>6,P=E&63;m||(P=64,u||(b=64)),i.push(e[A],e[R],e[b],e[P])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(lu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ng(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const h=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const E=s<n.length?e[n.charAt(s)]:64;++s;const R=s<n.length?e[n.charAt(s)]:64;if(++s,h==null||c==null||E==null||R==null)throw new Og;const b=h<<2|c>>4;if(i.push(b),E!==64){const P=c<<4&240|E>>2;if(i.push(P),R!==64){const D=E<<6&192|R;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Og extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xg=function(n){const t=lu(n);return uu.encodeByteArray(t,!0)},Yi=function(n){return xg(n).replace(/\./g,"")},Lg=function(n){try{return uu.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=()=>Mg().__FIREBASE_DEFAULTS__,Ug=()=>{if(typeof process>"u"||typeof ih>"u")return;const n=ih.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$g=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Lg(n[1]);return t&&JSON.parse(t)},sa=()=>{try{return Fg()||Ug()||$g()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Bg=n=>{var t,e;return(e=(t=sa())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},cu=n=>{const t=Bg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},fu=()=>{var n;return(n=sa())===null||n===void 0?void 0:n.config},By=n=>{var t;return(t=sa())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,h=n.sub||n.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yi(JSON.stringify(e)),Yi(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pu())}function Hy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zy(){const n=pu();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hg(){try{return typeof indexedDB=="object"}catch{return!1}}function qg(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var h;t(((h=s.error)===null||h===void 0?void 0:h.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="FirebaseError";class On extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=zg,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gu.prototype.create)}}class gu{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,h=this.errors[t],u=h?Gg(h,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new On(s,c,i)}}function Gg(n,t){return n.replace(Kg,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Kg=/\{\$([^}]+)}/g;function Gy(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Po(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const h=n[s],u=t[s];if(sh(h)&&sh(u)){if(!Po(h,u))return!1}else if(h!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function sh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Wy(n,t){const e=new Wg(n,t);return e.subscribe.bind(e)}class Wg{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");Qg(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=io),s.error===void 0&&(s.error=io),s.complete===void 0&&(s.complete=io);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),h}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qg(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function io(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){return n&&n._delegate?n._delegate:n}class Qn{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new jg;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(h){if(s)return null;throw h}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zg(t))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const h=this.getOrInitializeService({instanceIdentifier:s});i.resolve(h)}catch{}}}}clearInstance(t=Tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tn){return this.instances.has(t)}getOptions(t=Tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[h,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(h);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),h=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;h.add(t),this.onInitCallbacks.set(s,h);const u=this.instances.get(s);return u&&t(u,s),()=>{h.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Jg(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Tn){return this.component?this.component.multipleInstances?t:Tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jg(n){return n===Tn?void 0:n}function Zg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Yg(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ot||(ot={}));const em={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},nm=ot.INFO,rm={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},im=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=rm[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class mu{constructor(t){this.name=t,this._logLevel=nm,this._logHandler=im,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?em[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...t),this._logHandler(this,ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...t),this._logHandler(this,ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...t),this._logHandler(this,ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...t),this._logHandler(this,ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...t),this._logHandler(this,ot.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(om(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function om(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const So="@firebase/app",oh="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new mu("@firebase/app"),am="@firebase/app-compat",hm="@firebase/analytics-compat",lm="@firebase/analytics",um="@firebase/app-check-compat",cm="@firebase/app-check",fm="@firebase/auth",dm="@firebase/auth-compat",pm="@firebase/database",gm="@firebase/database-compat",mm="@firebase/functions",_m="@firebase/functions-compat",ym="@firebase/installations",vm="@firebase/installations-compat",Em="@firebase/messaging",Tm="@firebase/messaging-compat",Im="@firebase/performance",Am="@firebase/performance-compat",wm="@firebase/remote-config",Rm="@firebase/remote-config-compat",bm="@firebase/storage",Cm="@firebase/storage-compat",Pm="@firebase/firestore",Sm="@firebase/vertexai-preview",Dm="@firebase/firestore-compat",km="firebase",Vm="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="[DEFAULT]",Nm={[So]:"fire-core",[am]:"fire-core-compat",[lm]:"fire-analytics",[hm]:"fire-analytics-compat",[cm]:"fire-app-check",[um]:"fire-app-check-compat",[fm]:"fire-auth",[dm]:"fire-auth-compat",[pm]:"fire-rtdb",[gm]:"fire-rtdb-compat",[mm]:"fire-fn",[_m]:"fire-fn-compat",[ym]:"fire-iid",[vm]:"fire-iid-compat",[Em]:"fire-fcm",[Tm]:"fire-fcm-compat",[Im]:"fire-perf",[Am]:"fire-perf-compat",[wm]:"fire-rc",[Rm]:"fire-rc-compat",[bm]:"fire-gcs",[Cm]:"fire-gcs-compat",[Pm]:"fire-fst",[Dm]:"fire-fst-compat",[Sm]:"fire-vertex","fire-js":"fire-js",[km]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Map,Om=new Map,ko=new Map;function ah(n,t){try{n.container.addComponent(t)}catch(e){kn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function di(n){const t=n.name;if(ko.has(t))return kn.debug(`There were multiple attempts to register component ${t}.`),!1;ko.set(t,n);for(const e of Ji.values())ah(e,n);for(const e of Om.values())ah(e,n);return!0}function _u(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Qy(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ze=new gu("app","Firebase",xm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=Vm;function Mm(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Do,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw ze.create("bad-app-name",{appName:String(s)});if(e||(e=fu()),!e)throw ze.create("no-options");const h=Ji.get(s);if(h){if(Po(e,h.options)&&Po(i,h.config))return h;throw ze.create("duplicate-app",{appName:s})}const u=new tm(s);for(const m of ko.values())u.addComponent(m);const c=new Lm(e,i,u);return Ji.set(s,c),c}function vu(n=Do){const t=Ji.get(n);if(!t&&n===Do&&fu())return Mm();if(!t)throw ze.create("no-app",{appName:n});return t}function bn(n,t,e){var i;let s=(i=Nm[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const h=s.match(/\s|\//),u=t.match(/\s|\//);if(h||u){const c=[`Unable to register library "${s}" with version "${t}":`];h&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),h&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kn.warn(c.join(" "));return}di(new Qn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="firebase-heartbeat-database",Um=1,pi="firebase-heartbeat-store";let so=null;function Eu(){return so||(so=ku(Fm,Um,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(pi)}catch(e){console.warn(e)}}}}).catch(n=>{throw ze.create("idb-open",{originalErrorMessage:n.message})})),so}async function $m(n){try{const e=(await Eu()).transaction(pi),i=await e.objectStore(pi).get(Tu(n));return await e.done,i}catch(t){if(t instanceof On)kn.warn(t.message);else{const e=ze.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kn.warn(e.message)}}}async function hh(n,t){try{const i=(await Eu()).transaction(pi,"readwrite");await i.objectStore(pi).put(t,Tu(n)),await i.done}catch(e){if(e instanceof On)kn.warn(e.message);else{const i=ze.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kn.warn(i.message)}}}function Tu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=1024,jm=30*24*60*60*1e3;class Hm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zm(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=lh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(u=>u.date===h)))return this._heartbeatsCache.heartbeats.push({date:h,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=jm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lh(),{heartbeatsToSend:i,unsentEntries:s}=qm(this._heartbeatsCache.heartbeats),h=Yi(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}}function lh(){return new Date().toISOString().substring(0,10)}function qm(n,t=Bm){const e=[];let i=n.slice();for(const s of n){const h=e.find(u=>u.agent===s.agent);if(h){if(h.dates.push(s.date),uh(e)>t){h.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),uh(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class zm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hg()?qg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $m(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return hh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return hh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function uh(n){return Yi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){di(new Qn("platform-logger",t=>new sm(t),"PRIVATE")),di(new Qn("heartbeat",t=>new Hm(t),"PRIVATE")),bn(So,oh,n),bn(So,oh,"esm2017"),bn("fire-js","")}Gm("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firebasestorage.googleapis.com",Km="storageBucket",Wm=2*60*1e3,Qm=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends On{constructor(t,e,i=0){super(oo(t),`Firebase Storage: ${e} (${oo(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return oo(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ye;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ye||(ye={}));function oo(n){return"storage/"+n}function Xm(){const n="An unknown error occurred, please check the error payload for server response.";return new ve(ye.UNKNOWN,n)}function Ym(){return new ve(ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jm(){return new ve(ye.CANCELED,"User canceled the upload/download.")}function Zm(n){return new ve(ye.INVALID_URL,"Invalid URL '"+n+"'.")}function t_(n){return new ve(ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ch(n){return new ve(ye.INVALID_ARGUMENT,n)}function Au(){return new ve(ye.APP_DELETED,"The Firebase app was deleted.")}function e_(n){return new ve(ye.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let i;try{i=ue.makeFromUrl(t,e)}catch{return new ue(t,"")}if(i.path==="")return i;throw t_(t)}static makeFromUrl(t,e){let i=null;const s="([A-Za-z0-9.\\-_]+)";function h(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const u="(/(.*))?$",c=new RegExp("^gs://"+s+u,"i"),m={bucket:1,path:3};function E(F){F.path_=decodeURIComponent(F.path)}const A="v[A-Za-z0-9_]+",R=e.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",P=new RegExp(`^https?://${R}/${A}/b/${s}/o${b}`,"i"),D={bucket:1,path:3},N=e===Iu?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",H=new RegExp(`^https?://${N}/${s}/${C}`,"i"),L=[{regex:c,indices:m,postModify:h},{regex:P,indices:D,postModify:E},{regex:H,indices:{bucket:1,path:2},postModify:E}];for(let F=0;F<L.length;F++){const ht=L[F],Q=ht.regex.exec(t);if(Q){const v=Q[ht.indices.bucket];let d=Q[ht.indices.path];d||(d=""),i=new ue(v,d),ht.postModify(i);break}}if(i==null)throw Zm(t);return i}}class n_{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n,t,e){let i=1,s=null,h=null,u=!1,c=0;function m(){return c===2}let E=!1;function A(...C){E||(E=!0,t.apply(null,C))}function R(C){s=setTimeout(()=>{s=null,n(P,m())},C)}function b(){h&&clearTimeout(h)}function P(C,...H){if(E){b();return}if(C){b(),A.call(null,C,...H);return}if(m()||u){b(),A.call(null,C,...H);return}i<64&&(i*=2);let L;c===1?(c=2,L=0):L=(i+Math.random())*1e3,R(L)}let D=!1;function N(C){D||(D=!0,b(),!E&&(s!==null?(C||(c=2),clearTimeout(s),R(0)):C||(c=1)))}return R(0),h=setTimeout(()=>{u=!0,N(!0)},e),N}function i_(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(n){return n!==void 0}function fh(n,t,e,i){if(i<t)throw ch(`Invalid value for '${n}'. Expected ${t} or greater.`);if(i>e)throw ch(`Invalid value for '${n}'. Expected ${e} or less.`)}function o_(n){const t=encodeURIComponent;let e="?";for(const i in n)if(n.hasOwnProperty(i)){const s=t(i)+"="+t(n[i]);e=e+s+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zi;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Zi||(Zi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,h=t.indexOf(n)!==-1;return e||s||h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t,e,i,s,h,u,c,m,E,A,R,b=!0){this.url_=t,this.method_=e,this.headers_=i,this.body_=s,this.successCodes_=h,this.additionalRetryCodes_=u,this.callback_=c,this.errorCallback_=m,this.timeout_=E,this.progressCallback_=A,this.connectionFactory_=R,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,D)=>{this.resolve_=P,this.reject_=D,this.start_()})}start_(){const t=(i,s)=>{if(s){i(!1,new ki(!1,null,!0));return}const h=this.connectionFactory_();this.pendingConnection_=h;const u=c=>{const m=c.loaded,E=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,E)};this.progressCallback_!==null&&h.addUploadProgressListener(u),h.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&h.removeUploadProgressListener(u),this.pendingConnection_=null;const c=h.getErrorCode()===Zi.NO_ERROR,m=h.getStatus();if(!c||a_(m,this.additionalRetryCodes_)&&this.retry){const A=h.getErrorCode()===Zi.ABORT;i(!1,new ki(!1,null,A));return}const E=this.successCodes_.indexOf(m)!==-1;i(!0,new ki(E,h))})},e=(i,s)=>{const h=this.resolve_,u=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const m=this.callback_(c,c.getResponse());s_(m)?h(m):h()}catch(m){u(m)}else if(c!==null){const m=Xm();m.serverResponse=c.getErrorText(),this.errorCallback_?u(this.errorCallback_(c,m)):u(m)}else if(s.canceled){const m=this.appDelete_?Au():Jm();u(m)}else{const m=Ym();u(m)}};this.canceled_?e(!1,new ki(!1,null,!0)):this.backoffId_=r_(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&i_(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ki{constructor(t,e,i){this.wasSuccessCode=t,this.connection=e,this.canceled=!!i}}function l_(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function u_(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function c_(n,t){t&&(n["X-Firebase-GMPID"]=t)}function f_(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function d_(n,t,e,i,s,h,u=!0){const c=o_(n.urlParams),m=n.url+c,E=Object.assign({},n.headers);return c_(E,t),l_(E,e),u_(E,h),f_(E,i),new h_(m,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function g_(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e){this._service=t,e instanceof ue?this._location=e:this._location=ue.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ts(t,e)}get root(){const t=new ue(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return g_(this._location.path)}get storage(){return this._service}get parent(){const t=p_(this._location.path);if(t===null)return null;const e=new ue(this._location.bucket,t);return new ts(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw e_(t)}}function dh(n,t){const e=t==null?void 0:t[Km];return e==null?null:ue.makeFromBucketSpec(e,n)}function m_(n,t,e,i={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:du(s,n.app.options.projectId))}class __{constructor(t,e,i,s,h){this.app=t,this._authProvider=e,this._appCheckProvider=i,this._url=s,this._firebaseVersion=h,this._bucket=null,this._host=Iu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wm,this._maxUploadRetryTime=Qm,this._requests=new Set,s!=null?this._bucket=ue.makeFromBucketSpec(s,this._host):this._bucket=dh(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ue.makeFromBucketSpec(this._url,t):this._bucket=dh(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){fh("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){fh("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ts(this,t)}_makeRequest(t,e,i,s,h=!0){if(this._deleted)return new n_(Au());{const u=d_(t,this._appId,i,s,e,this._firebaseVersion,h);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(t,e){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,i,s).getPromise()}}const ph="@firebase/storage",gh="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="storage";function Xy(n=vu(),t){n=Xg(n);const i=_u(n,wu).getImmediate({identifier:t}),s=cu("storage");return s&&y_(i,...s),i}function y_(n,t,e,i={}){m_(n,t,e,i)}function v_(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new __(e,i,s,t,yu)}function E_(){di(new Qn(wu,v_,"PUBLIC").setMultipleInstances(!0)),bn(ph,gh,""),bn(ph,gh,"esm2017")}E_();var mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ru;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,d){function g(){}g.prototype=d.prototype,v.D=d.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(_,y,T){for(var p=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)p[pt-2]=arguments[pt];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=v.g[0],g=v.g[1],y=v.g[2];var T=v.g[3],p=d+(T^g&(y^T))+_[0]+3614090360&4294967295;d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[3]+3250441966&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[4]+4118548399&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[7]+4249261313&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[8]+1770035416&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[11]+2304563134&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(T^g&(y^T))+_[12]+1804603682&4294967295,d=g+(p<<7&4294967295|p>>>25),p=T+(y^d&(g^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(g^T&(d^g))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(d^y&(T^d))+_[15]+1236535329&4294967295,g=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(g^y))+_[1]+4129170786&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[0]+3921069994&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[5]+3593408605&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[4]+3889429448&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[9]+568446438&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[8]+1163531501&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(g^y))+_[13]+2850285829&4294967295,d=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(d^g))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^g&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^d&(y^T))+_[12]+2368359562&4294967295,g=y+(p<<20&4294967295|p>>>12),p=d+(g^y^T)+_[5]+4294588738&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[14]+4259657740&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[1]+2763975236&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[10]+3200236656&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[13]+681279174&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[6]+76029189&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(g^y^T)+_[9]+3654602809&4294967295,d=g+(p<<4&4294967295|p>>>28),p=T+(d^g^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^g)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^d)+_[2]+3299628645&4294967295,g=y+(p<<23&4294967295|p>>>9),p=d+(y^(g|~T))+_[0]+4096336452&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[5]+4237533241&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[12]+1700485571&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[1]+2240044497&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[8]+1873313359&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[13]+1309151649&4294967295,g=y+(p<<21&4294967295|p>>>11),p=d+(y^(g|~T))+_[4]+4149444226&4294967295,d=g+(p<<6&4294967295|p>>>26),p=T+(g^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~g))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~d))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}i.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var g=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=g;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<d;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var g=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=g&255,g/=256;for(this.u(v),v=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)v[g++]=this.g[d]>>>_&255;return v};function h(v,d){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=d(v)}function u(v,d){this.h=d;for(var g=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==d||(g[y]=T,_=!1)}this.g=g}var c={};function m(v){return-128<=v&&128>v?h(v,function(d){return new u([d|0],0>d?-1:0)}):new u([v|0],0>v?-1:0)}function E(v){if(isNaN(v)||!isFinite(v))return R;if(0>v)return C(E(-v));for(var d=[],g=1,_=0;v>=g;_++)d[_]=v/g|0,g*=4294967296;return new u(d,0)}function A(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return C(A(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=E(Math.pow(d,8)),_=R,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),p=parseInt(v.substring(y,y+T),d);8>T?(T=E(Math.pow(d,T)),_=_.j(T).add(E(p))):(_=_.j(g),_=_.add(E(p)))}return _}var R=m(0),b=m(1),P=m(16777216);n=u.prototype,n.m=function(){if(N(this))return-C(this).m();for(var v=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);v+=(0<=_?_:4294967296+_)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(N(this))return"-"+C(this).toString(v);for(var d=E(Math.pow(v,6)),g=this,_="";;){var y=F(g,d).g;g=H(g,y.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=y,D(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=H(this,v),N(v)?-1:D(v)?0:1};function C(v){for(var d=v.g.length,g=[],_=0;_<d;_++)g[_]=~v.g[_];return new u(g,~v.h).add(b)}n.abs=function(){return N(this)?C(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,g[y]=p<<16|T}return new u(g,g[g.length-1]&-2147483648?-1:0)};function H(v,d){return v.add(C(d))}n.j=function(v){if(D(this)||D(v))return R;if(N(this))return N(v)?C(this).j(C(v)):C(C(this).j(v));if(N(v))return C(this.j(C(v)));if(0>this.l(P)&&0>v.l(P))return E(this.m()*v.m());for(var d=this.g.length+v.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,pt=v.i(y)>>>16,Gt=v.i(y)&65535;g[2*_+2*y]+=p*Gt,W(g,2*_+2*y),g[2*_+2*y+1]+=T*Gt,W(g,2*_+2*y+1),g[2*_+2*y+1]+=p*pt,W(g,2*_+2*y+1),g[2*_+2*y+2]+=T*pt,W(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new u(g,0)};function W(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function L(v,d){this.g=v,this.h=d}function F(v,d){if(D(d))throw Error("division by zero");if(D(v))return new L(R,R);if(N(v))return d=F(C(v),d),new L(C(d.g),C(d.h));if(N(d))return d=F(v,C(d)),new L(C(d.g),d.h);if(30<v.g.length){if(N(v)||N(d))throw Error("slowDivide_ only works with positive integers.");for(var g=b,_=d;0>=_.l(v);)g=ht(g),_=ht(_);var y=Q(g,1),T=Q(_,1);for(_=Q(_,2),g=Q(g,2);!D(_);){var p=T.add(_);0>=p.l(v)&&(y=y.add(g),T=p),_=Q(_,1),g=Q(g,1)}return d=H(v,y.j(d)),new L(y,d)}for(y=R;0<=v.l(d);){for(g=Math.max(1,Math.floor(v.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=E(g),p=T.j(d);N(p)||0<p.l(v);)g-=_,T=E(g),p=T.j(d);D(T)&&(T=b),y=y.add(T),v=H(v,p)}return new L(y,v)}n.A=function(v){return F(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&v.i(_);return new u(g,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|v.i(_);return new u(g,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^v.i(_);return new u(g,this.h^v.h)};function ht(v){for(var d=v.g.length+1,g=[],_=0;_<d;_++)g[_]=v.i(_)<<1|v.i(_-1)>>>31;return new u(g,v.h)}function Q(v,d){var g=d>>5;d%=32;for(var _=v.g.length-g,y=[],T=0;T<_;T++)y[T]=0<d?v.i(T+g)>>>d|v.i(T+g+1)<<32-d:v.i(T+g);return new u(y,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=E,u.fromString=A,Ru=u}).apply(typeof mh<"u"?mh:typeof self<"u"?self:typeof window<"u"?window:{});var Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,r,a){return o==Array.prototype||o==Object.prototype||(o[r]=a.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vi=="object"&&Vi];for(var r=0;r<o.length;++r){var a=o[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var i=e(this);function s(o,r){if(r)t:{var a=i;o=o.split(".");for(var l=0;l<o.length-1;l++){var f=o[l];if(!(f in a))break t;a=a[f]}o=o[o.length-1],l=a[o],r=r(l),r!=l&&r!=null&&t(a,o,{configurable:!0,writable:!0,value:r})}}function h(o,r){o instanceof String&&(o+="");var a=0,l=!1,f={next:function(){if(!l&&a<o.length){var I=a++;return{value:r(I,o[I]),done:!1}}return l=!0,{done:!0,value:void 0}}};return f[Symbol.iterator]=function(){return f},f}s("Array.prototype.values",function(o){return o||function(){return h(this,function(r,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function m(o){var r=typeof o;return r=r!="object"?r:o?Array.isArray(o)?"array":r:"null",r=="array"||r=="object"&&typeof o.length=="number"}function E(o){var r=typeof o;return r=="object"&&o!=null||r=="function"}function A(o,r,a){return o.call.apply(o.bind,arguments)}function R(o,r,a){if(!o)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(f,l),o.apply(r,f)}}return function(){return o.apply(r,arguments)}}function b(o,r,a){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:R,b.apply(null,arguments)}function P(o,r){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),o.apply(this,l)}}function D(o,r){function a(){}a.prototype=r.prototype,o.aa=r.prototype,o.prototype=new a,o.prototype.constructor=o,o.Qb=function(l,f,I){for(var w=Array(arguments.length-2),S=2;S<arguments.length;S++)w[S-2]=arguments[S];return r.prototype[f].apply(l,w)}}function N(o){const r=o.length;if(0<r){const a=Array(r);for(let l=0;l<r;l++)a[l]=o[l];return a}return[]}function C(o,r){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(m(l)){const f=o.length||0,I=l.length||0;o.length=f+I;for(let w=0;w<I;w++)o[f+w]=l[w]}else o.push(l)}}class H{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function W(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var ht=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function Q(o,r,a){for(const l in o)r.call(a,o[l],l,o)}function v(o,r){for(const a in o)r.call(void 0,o[a],a,o)}function d(o){const r={};for(const a in o)r[a]=o[a];return r}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(o,r){let a,l;for(let f=1;f<arguments.length;f++){l=arguments[f];for(a in l)o[a]=l[a];for(let I=0;I<g.length;I++)a=g[I],Object.prototype.hasOwnProperty.call(l,a)&&(o[a]=l[a])}}function y(o){var r=1;o=o.split(":");const a=[];for(;0<r&&o.length;)a.push(o.shift()),r--;return o.length&&a.push(o.join(":")),a}function T(o){c.setTimeout(()=>{throw o},0)}function p(){var o=Xe;let r=null;return o.g&&(r=o.g,o.g=o.g.next,o.g||(o.h=null),r.next=null),r}class pt{constructor(){this.h=this.g=null}add(r,a){const l=Gt.get();l.set(r,a),this.h?this.h.next=l:this.g=l,this.h=l}}var Gt=new H(()=>new gs,o=>o.reset());class gs{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,Wt=!1,Xe=new pt,er=()=>{const o=c.Promise.resolve(void 0);Kt=()=>{o.then(ms)}};var ms=()=>{for(var o;o=p();){try{o.h.call(o.g)}catch(a){T(a)}var r=Gt;r.j(o),100>r.h&&(r.h++,o.next=r.g,r.g=o)}Wt=!1};function Tt(){this.s=this.s,this.C=this.C}Tt.prototype.s=!1,Tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(o,r){this.type=o,this.g=this.target=r,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var _s=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,r=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const a=()=>{};c.addEventListener("test",a,r),c.removeEventListener("test",a,r)}catch{}return o}();function Qt(o,r){if(Z.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var a=this.type=o.type,l=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=r,r=o.relatedTarget){if(ht){t:{try{F(r.nodeName);var f=!0;break t}catch{}f=!1}f||(r=null)}}else a=="mouseover"?r=o.fromElement:a=="mouseout"&&(r=o.toElement);this.relatedTarget=r,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ys[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qt.aa.h.call(this)}}D(Qt,Z);var ys={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ee="closure_listenable_"+(1e6*Math.random()|0),vs=0;function Es(o,r,a,l,f){this.listener=o,this.proxy=null,this.src=r,this.type=a,this.capture=!!l,this.ha=f,this.key=++vs,this.da=this.fa=!1}function Te(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ie(o){this.src=o,this.g={},this.h=0}Ie.prototype.add=function(o,r,a,l,f){var I=o.toString();o=this.g[I],o||(o=this.g[I]=[],this.h++);var w=Je(o,r,l,f);return-1<w?(r=o[w],a||(r.fa=!1)):(r=new Es(r,this.src,I,!!l,f),r.fa=a,o.push(r)),r};function Ye(o,r){var a=r.type;if(a in o.g){var l=o.g[a],f=Array.prototype.indexOf.call(l,r,void 0),I;(I=0<=f)&&Array.prototype.splice.call(l,f,1),I&&(Te(r),o.g[a].length==0&&(delete o.g[a],o.h--))}}function Je(o,r,a,l){for(var f=0;f<o.length;++f){var I=o[f];if(!I.da&&I.listener==r&&I.capture==!!a&&I.ha==l)return f}return-1}var Ze="closure_lm_"+(1e6*Math.random()|0),tn={};function nr(o,r,a,l,f){if(Array.isArray(r)){for(var I=0;I<r.length;I++)nr(o,r[I],a,l,f);return null}return a=sr(a),o&&o[Ee]?o.K(r,a,E(l)?!!l.capture:!!l,f):Ts(o,r,a,!1,l,f)}function Ts(o,r,a,l,f,I){if(!r)throw Error("Invalid event type");var w=E(f)?!!f.capture:!!f,S=nn(o);if(S||(o[Ze]=S=new Ie(o)),a=S.add(r,a,l,w,I),a.proxy)return a;if(l=Is(),a.proxy=l,l.src=o,l.listener=a,o.addEventListener)_s||(f=w),f===void 0&&(f=!1),o.addEventListener(r.toString(),l,f);else if(o.attachEvent)o.attachEvent(ir(r.toString()),l);else if(o.addListener&&o.removeListener)o.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Is(){function o(a){return r.call(o.src,o.listener,a)}const r=As;return o}function rr(o,r,a,l,f){if(Array.isArray(r))for(var I=0;I<r.length;I++)rr(o,r[I],a,l,f);else l=E(l)?!!l.capture:!!l,a=sr(a),o&&o[Ee]?(o=o.i,r=String(r).toString(),r in o.g&&(I=o.g[r],a=Je(I,a,l,f),-1<a&&(Te(I[a]),Array.prototype.splice.call(I,a,1),I.length==0&&(delete o.g[r],o.h--)))):o&&(o=nn(o))&&(r=o.g[r.toString()],o=-1,r&&(o=Je(r,a,l,f)),(a=-1<o?r[o]:null)&&en(a))}function en(o){if(typeof o!="number"&&o&&!o.da){var r=o.src;if(r&&r[Ee])Ye(r.i,o);else{var a=o.type,l=o.proxy;r.removeEventListener?r.removeEventListener(a,l,o.capture):r.detachEvent?r.detachEvent(ir(a),l):r.addListener&&r.removeListener&&r.removeListener(l),(a=nn(r))?(Ye(a,o),a.h==0&&(a.src=null,r[Ze]=null)):Te(o)}}}function ir(o){return o in tn?tn[o]:tn[o]="on"+o}function As(o,r){if(o.da)o=!0;else{r=new Qt(r,this);var a=o.listener,l=o.ha||o.src;o.fa&&en(o),o=a.call(l,r)}return o}function nn(o){return o=o[Ze],o instanceof Ie?o:null}var rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function sr(o){return typeof o=="function"?o:(o[rn]||(o[rn]=function(r){return o.handleEvent(r)}),o[rn])}function tt(){Tt.call(this),this.i=new Ie(this),this.M=this,this.F=null}D(tt,Tt),tt.prototype[Ee]=!0,tt.prototype.removeEventListener=function(o,r,a,l){rr(this,o,r,a,l)};function rt(o,r){var a,l=o.F;if(l)for(a=[];l;l=l.F)a.push(l);if(o=o.M,l=r.type||r,typeof r=="string")r=new Z(r,o);else if(r instanceof Z)r.target=r.target||o;else{var f=r;r=new Z(l,o),_(r,f)}if(f=!0,a)for(var I=a.length-1;0<=I;I--){var w=r.g=a[I];f=Ae(w,l,!0,r)&&f}if(w=r.g=o,f=Ae(w,l,!0,r)&&f,f=Ae(w,l,!1,r)&&f,a)for(I=0;I<a.length;I++)w=r.g=a[I],f=Ae(w,l,!1,r)&&f}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var o=this.i,r;for(r in o.g){for(var a=o.g[r],l=0;l<a.length;l++)Te(a[l]);delete o.g[r],o.h--}}this.F=null},tt.prototype.K=function(o,r,a,l){return this.i.add(String(o),r,!1,a,l)},tt.prototype.L=function(o,r,a,l){return this.i.add(String(o),r,!0,a,l)};function Ae(o,r,a,l){if(r=o.i.g[String(r)],!r)return!0;r=r.concat();for(var f=!0,I=0;I<r.length;++I){var w=r[I];if(w&&!w.da&&w.capture==a){var S=w.listener,q=w.ha||w.src;w.fa&&Ye(o.i,w),f=S.call(q,l)!==!1&&f}}return f&&!l.defaultPrevented}function or(o,r,a){if(typeof o=="function")a&&(o=b(o,a));else if(o&&typeof o.handleEvent=="function")o=b(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:c.setTimeout(o,r||0)}function ar(o){o.g=or(()=>{o.g=null,o.i&&(o.i=!1,ar(o))},o.l);const r=o.h;o.h=null,o.m.apply(null,r)}class ws extends Tt{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:ar(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(o){Tt.call(this),this.h=o,this.g={}}D(Xt,Tt);var hr=[];function lr(o){Q(o.g,function(r,a){this.g.hasOwnProperty(a)&&en(r)},o),o.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),lr(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sn=c.JSON.stringify,Rs=c.JSON.parse,bs=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function on(){}on.prototype.h=null;function ur(o){return o.h||(o.h=o.i())}function Ai(){}var Yt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function an(){Z.call(this,"d")}D(an,Z);function hn(){Z.call(this,"c")}D(hn,Z);var Bt={},cr=null;function Fe(){return cr=cr||new tt}Bt.La="serverreachability";function fr(o){Z.call(this,Bt.La,o)}D(fr,Z);function Jt(o){const r=Fe();rt(r,new fr(r))}Bt.STAT_EVENT="statevent";function dr(o,r){Z.call(this,Bt.STAT_EVENT,o),this.stat=r}D(dr,Z);function it(o){const r=Fe();rt(r,new dr(r,o))}Bt.Ma="timingevent";function pr(o,r){Z.call(this,Bt.Ma,o),this.size=r}D(pr,Z);function Zt(o,r){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},r)}function te(){this.g=!0}te.prototype.xa=function(){this.g=!1};function Cs(o,r,a,l,f,I){o.info(function(){if(o.g)if(I)for(var w="",S=I.split("&"),q=0;q<S.length;q++){var $=S[q].split("=");if(1<$.length){var B=$[0];$=$[1];var et=B.split("_");w=2<=et.length&&et[1]=="type"?w+(B+"="+$+"&"):w+(B+"=redacted&")}}else w=null;else w=I;return"XMLHTTP REQ ("+l+") [attempt "+f+"]: "+r+`
`+a+`
`+w})}function Ps(o,r,a,l,f,I,w){o.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+f+"]: "+r+`
`+a+`
`+I+" "+w})}function jt(o,r,a,l){o.info(function(){return"XMLHTTP TEXT ("+r+"): "+Ds(o,a)+(l?" "+l:"")})}function Ss(o,r){o.info(function(){return"TIMEOUT: "+r})}te.prototype.info=function(){};function Ds(o,r){if(!o.g)return r;if(!r)return null;try{var a=JSON.parse(r);if(a){for(o=0;o<a.length;o++)if(Array.isArray(a[o])){var l=a[o];if(!(2>l.length)){var f=l[1];if(Array.isArray(f)&&!(1>f.length)){var I=f[0];if(I!="noop"&&I!="stop"&&I!="close")for(var w=1;w<f.length;w++)f[w]=""}}}}return sn(a)}catch{return r}}var Ue={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ln;function we(){}D(we,on),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ln=new we;function It(o,r,a,l){this.j=o,this.i=r,this.l=a,this.R=l||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gr}function gr(){this.i=null,this.g="",this.h=!1}var mr={},un={};function cn(o,r,a){o.L=1,o.v=Pe(gt(r)),o.m=a,o.P=!0,_r(o,null)}function _r(o,r){o.F=Date.now(),Re(o),o.A=gt(o.v);var a=o.A,l=o.R;Array.isArray(l)||(l=[String(l)]),kr(a.i,"t",l),o.C=0,a=o.j.J,o.h=new gr,o.g=Qr(o.j,a?r:null,!o.m),0<o.O&&(o.M=new ws(b(o.Y,o,o.g),o.O)),r=o.U,a=o.g,l=o.ca;var f="readystatechange";Array.isArray(f)||(f&&(hr[0]=f.toString()),f=hr);for(var I=0;I<f.length;I++){var w=nr(a,f[I],l||r.handleEvent,!1,r.h||r);if(!w)break;r.g[w.key]=w}r=o.H?d(o.H):{},o.m?(o.u||(o.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,r)):(o.u="GET",o.g.ea(o.A,o.u,null,r)),Jt(),Cs(o.i,o.u,o.A,o.l,o.R,o.m)}It.prototype.ca=function(o){o=o.target;const r=this.M;r&&mt(o)==3?r.j():this.Y(o)},It.prototype.Y=function(o){try{if(o==this.g)t:{const et=mt(this.g);var r=this.g.Ba();const ut=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Fr(this.g)))){this.J||et!=4||r==7||(r==8||0>=ut?Jt(3):Jt(2)),fn(this);var a=this.g.Z();this.X=a;e:if(yr(this)){var l=Fr(this.g);o="";var f=l.length,I=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),ee(this);var w="";break e}this.h.i=new c.TextDecoder}for(r=0;r<f;r++)this.h.h=!0,o+=this.h.i.decode(l[r],{stream:!(I&&r==f-1)});l.length=0,this.h.g+=o,this.C=0,w=this.h.g}else w=this.g.oa();if(this.o=a==200,Ps(this.i,this.u,this.A,this.l,this.R,et,a),this.o){if(this.T&&!this.K){e:{if(this.g){var S,q=this.g;if((S=q.g?q.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(S)){var $=S;break e}}$=null}if(a=$)jt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dn(this,a);else{this.o=!1,this.s=3,it(12),Ft(this),ee(this);break t}}if(this.P){a=!0;let vt;for(;!this.J&&this.C<w.length;)if(vt=ks(this,w),vt==un){et==4&&(this.s=4,it(14),a=!1),jt(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==mr){this.s=4,it(15),jt(this.i,this.l,w,"[Invalid Chunk]"),a=!1;break}else jt(this.i,this.l,vt,null),dn(this,vt);if(yr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||w.length!=0||this.h.h||(this.s=1,it(16),a=!1),this.o=this.o&&a,!a)jt(this.i,this.l,w,"[Invalid Chunked Response]"),Ft(this),ee(this);else if(0<w.length&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.ba&&!B.M&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+w.length),vn(B),B.M=!0,it(11))}}else jt(this.i,this.l,w,null),dn(this,w);et==4&&Ft(this),this.o&&!this.J&&(et==4?zr(this.j,this):(this.o=!1,Re(this)))}else Ws(this.g),a==400&&0<w.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Ft(this),ee(this)}}}catch{}finally{}};function yr(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ks(o,r){var a=o.C,l=r.indexOf(`
`,a);return l==-1?un:(a=Number(r.substring(a,l)),isNaN(a)?mr:(l+=1,l+a>r.length?un:(r=r.slice(l,l+a),o.C=l+a,r)))}It.prototype.cancel=function(){this.J=!0,Ft(this)};function Re(o){o.S=Date.now()+o.I,vr(o,o.I)}function vr(o,r){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Zt(b(o.ba,o),r)}function fn(o){o.B&&(c.clearTimeout(o.B),o.B=null)}It.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ss(this.i,this.A),this.L!=2&&(Jt(),it(17)),Ft(this),this.s=2,ee(this)):vr(this,this.S-o)};function ee(o){o.j.G==0||o.J||zr(o.j,o)}function Ft(o){fn(o);var r=o.M;r&&typeof r.ma=="function"&&r.ma(),o.M=null,lr(o.U),o.g&&(r=o.g,o.g=null,r.abort(),r.ma())}function dn(o,r){try{var a=o.j;if(a.G!=0&&(a.g==o||pn(a.h,o))){if(!o.K&&pn(a.h,o)&&a.G==3){try{var l=a.Da.g.parse(r)}catch{l=null}if(Array.isArray(l)&&l.length==3){var f=l;if(f[0]==0){t:if(!a.u){if(a.g)if(a.g.F+3e3<o.F)Ne(a),ke(a);else break t;yn(a),it(18)}}else a.za=f[1],0<a.za-a.T&&37500>f[2]&&a.F&&a.v==0&&!a.C&&(a.C=Zt(b(a.Za,a),6e3));if(1>=Ir(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else $t(a,11)}else if((o.K||a.g==o)&&Ne(a),!W(r))for(f=a.Da.g.parse(r),r=0;r<f.length;r++){let $=f[r];if(a.T=$[0],$=$[1],a.G==2)if($[0]=="c"){a.K=$[1],a.ia=$[2];const B=$[3];B!=null&&(a.la=B,a.j.info("VER="+a.la));const et=$[4];et!=null&&(a.Aa=et,a.j.info("SVER="+a.Aa));const ut=$[5];ut!=null&&typeof ut=="number"&&0<ut&&(l=1.5*ut,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const vt=o.g;if(vt){const kt=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kt){var I=l.h;I.g||kt.indexOf("spdy")==-1&&kt.indexOf("quic")==-1&&kt.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(gn(I,I.h),I.h=null))}if(l.D){const $e=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;$e&&(l.ya=$e,U(l.I,l.D,$e))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-o.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var w=o;if(l.qa=Wr(l,l.J?l.ia:null,l.W),w.K){Ar(l.h,w);var S=w,q=l.L;q&&(S.I=q),S.B&&(fn(S),Re(S)),l.g=w}else Hr(l);0<a.i.length&&Ve(a)}else $[0]!="stop"&&$[0]!="close"||$t(a,7);else a.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?$t(a,7):_n(a):$[0]!="noop"&&a.l&&a.l.ta($),a.v=0)}}Jt(4)}catch{}}var Vs=class{constructor(o,r){this.g=o,this.map=r}};function Er(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tr(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ir(o){return o.h?1:o.g?o.g.size:0}function pn(o,r){return o.h?o.h==r:o.g?o.g.has(r):!1}function gn(o,r){o.g?o.g.add(r):o.h=r}function Ar(o,r){o.h&&o.h==r?o.h=null:o.g&&o.g.has(r)&&o.g.delete(r)}Er.prototype.cancel=function(){if(this.i=wr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wr(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let r=o.i;for(const a of o.g.values())r=r.concat(a.D);return r}return N(o.i)}function Ns(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(m(o)){for(var r=[],a=o.length,l=0;l<a;l++)r.push(o[l]);return r}r=[],a=0;for(l in o)r[a++]=o[l];return r}function Os(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(m(o)||typeof o=="string"){var r=[];o=o.length;for(var a=0;a<o;a++)r.push(a);return r}r=[],a=0;for(const l in o)r[a++]=l;return r}}}function Rr(o,r){if(o.forEach&&typeof o.forEach=="function")o.forEach(r,void 0);else if(m(o)||typeof o=="string")Array.prototype.forEach.call(o,r,void 0);else for(var a=Os(o),l=Ns(o),f=l.length,I=0;I<f;I++)r.call(void 0,l[I],a&&a[I],o)}var br=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xs(o,r){if(o){o=o.split("&");for(var a=0;a<o.length;a++){var l=o[a].indexOf("="),f=null;if(0<=l){var I=o[a].substring(0,l);f=o[a].substring(l+1)}else I=o[a];r(I,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}}function Ut(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ut){this.h=o.h,be(this,o.j),this.o=o.o,this.g=o.g,Ce(this,o.s),this.l=o.l;var r=o.i,a=new ie;a.i=r.i,r.g&&(a.g=new Map(r.g),a.h=r.h),Cr(this,a),this.m=o.m}else o&&(r=String(o).match(br))?(this.h=!1,be(this,r[1]||"",!0),this.o=ne(r[2]||""),this.g=ne(r[3]||"",!0),Ce(this,r[4]),this.l=ne(r[5]||"",!0),Cr(this,r[6]||"",!0),this.m=ne(r[7]||"")):(this.h=!1,this.i=new ie(null,this.h))}Ut.prototype.toString=function(){var o=[],r=this.j;r&&o.push(re(r,Pr,!0),":");var a=this.g;return(a||r=="file")&&(o.push("//"),(r=this.o)&&o.push(re(r,Pr,!0),"@"),o.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&o.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&o.push("/"),o.push(re(a,a.charAt(0)=="/"?Fs:Ms,!0))),(a=this.i.toString())&&o.push("?",a),(a=this.m)&&o.push("#",re(a,$s)),o.join("")};function gt(o){return new Ut(o)}function be(o,r,a){o.j=a?ne(r,!0):r,o.j&&(o.j=o.j.replace(/:$/,""))}function Ce(o,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);o.s=r}else o.s=null}function Cr(o,r,a){r instanceof ie?(o.i=r,Bs(o.i,o.h)):(a||(r=re(r,Us)),o.i=new ie(r,o.h))}function U(o,r,a){o.i.set(r,a)}function Pe(o){return U(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ne(o,r){return o?r?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function re(o,r,a){return typeof o=="string"?(o=encodeURI(o).replace(r,Ls),a&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ls(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Pr=/[#\/\?@]/g,Ms=/[#\?:]/g,Fs=/[#\?]/g,Us=/[#\?@]/g,$s=/#/g;function ie(o,r){this.h=this.g=null,this.i=o||null,this.j=!!r}function At(o){o.g||(o.g=new Map,o.h=0,o.i&&xs(o.i,function(r,a){o.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}n=ie.prototype,n.add=function(o,r){At(this),this.i=null,o=Ht(this,o);var a=this.g.get(o);return a||this.g.set(o,a=[]),a.push(r),this.h+=1,this};function Sr(o,r){At(o),r=Ht(o,r),o.g.has(r)&&(o.i=null,o.h-=o.g.get(r).length,o.g.delete(r))}function Dr(o,r){return At(o),r=Ht(o,r),o.g.has(r)}n.forEach=function(o,r){At(this),this.g.forEach(function(a,l){a.forEach(function(f){o.call(r,f,l,this)},this)},this)},n.na=function(){At(this);const o=Array.from(this.g.values()),r=Array.from(this.g.keys()),a=[];for(let l=0;l<r.length;l++){const f=o[l];for(let I=0;I<f.length;I++)a.push(r[l])}return a},n.V=function(o){At(this);let r=[];if(typeof o=="string")Dr(this,o)&&(r=r.concat(this.g.get(Ht(this,o))));else{o=Array.from(this.g.values());for(let a=0;a<o.length;a++)r=r.concat(o[a])}return r},n.set=function(o,r){return At(this),this.i=null,o=Ht(this,o),Dr(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[r]),this.h+=1,this},n.get=function(o,r){return o?(o=this.V(o),0<o.length?String(o[0]):r):r};function kr(o,r,a){Sr(o,r),0<a.length&&(o.i=null,o.g.set(Ht(o,r),N(a)),o.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],r=Array.from(this.g.keys());for(var a=0;a<r.length;a++){var l=r[a];const I=encodeURIComponent(String(l)),w=this.V(l);for(l=0;l<w.length;l++){var f=I;w[l]!==""&&(f+="="+encodeURIComponent(String(w[l]))),o.push(f)}}return this.i=o.join("&")};function Ht(o,r){return r=String(r),o.j&&(r=r.toLowerCase()),r}function Bs(o,r){r&&!o.j&&(At(o),o.i=null,o.g.forEach(function(a,l){var f=l.toLowerCase();l!=f&&(Sr(this,l),kr(this,f,a))},o)),o.j=r}function js(o,r){const a=new te;if(c.Image){const l=new Image;l.onload=P(wt,a,"TestLoadImage: loaded",!0,r,l),l.onerror=P(wt,a,"TestLoadImage: error",!1,r,l),l.onabort=P(wt,a,"TestLoadImage: abort",!1,r,l),l.ontimeout=P(wt,a,"TestLoadImage: timeout",!1,r,l),c.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=o}else r(!1)}function Hs(o,r){const a=new te,l=new AbortController,f=setTimeout(()=>{l.abort(),wt(a,"TestPingServer: timeout",!1,r)},1e4);fetch(o,{signal:l.signal}).then(I=>{clearTimeout(f),I.ok?wt(a,"TestPingServer: ok",!0,r):wt(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(f),wt(a,"TestPingServer: error",!1,r)})}function wt(o,r,a,l,f){try{f&&(f.onload=null,f.onerror=null,f.onabort=null,f.ontimeout=null),l(a)}catch{}}function qs(){this.g=new bs}function zs(o,r,a){const l=a||"";try{Rr(o,function(f,I){let w=f;E(f)&&(w=sn(f)),r.push(l+I+"="+encodeURIComponent(w))})}catch(f){throw r.push(l+"type="+encodeURIComponent("_badmap")),f}}function fe(o){this.l=o.Ub||null,this.j=o.eb||!1}D(fe,on),fe.prototype.g=function(){return new Se(this.l,this.j)},fe.prototype.i=function(o){return function(){return o}}({});function Se(o,r){tt.call(this),this.D=o,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Se,tt),n=Se.prototype,n.open=function(o,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=r,this.readyState=1,oe(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(r.body=o),(this.D||c).fetch(new Request(this.A,r)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,se(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,oe(this)),this.g&&(this.readyState=3,oe(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vr(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vr(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var r=o.value?o.value:new Uint8Array(0);(r=this.v.decode(r,{stream:!o.done}))&&(this.response=this.responseText+=r)}o.done?se(this):oe(this),this.readyState==3&&Vr(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,se(this))},n.Qa=function(o){this.g&&(this.response=o,se(this))},n.ga=function(){this.g&&se(this)};function se(o){o.readyState=4,o.l=null,o.j=null,o.v=null,oe(o)}n.setRequestHeader=function(o,r){this.u.append(o,r)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,o.push(a[0]+": "+a[1]),a=r.next();return o.join(`\r
`)};function oe(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Se.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Nr(o){let r="";return Q(o,function(a,l){r+=l,r+=":",r+=a,r+=`\r
`}),r}function mn(o,r,a){t:{for(l in a){var l=!1;break t}l=!0}l||(a=Nr(a),typeof o=="string"?a!=null&&encodeURIComponent(String(a)):U(o,r,a))}function z(o){tt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(z,tt);var Gs=/^https?$/i,Ks=["POST","PUT"];n=z.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,r,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);r=r?r.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ln.g(),this.v=this.o?ur(this.o):ur(ln),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(r,String(o),!0),this.B=!1}catch(I){Or(this,I);return}if(o=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var f in l)a.set(f,l[f]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const I of l.keys())a.set(I,l.get(I));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),f=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ks,r,void 0))||l||f||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,w]of a)this.g.setRequestHeader(I,w);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mr(this),this.u=!0,this.g.send(o),this.u=!1}catch(I){Or(this,I)}};function Or(o,r){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=r,o.m=5,xr(o),De(o)}function xr(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,rt(this,"complete"),rt(this,"abort"),De(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),De(this,!0)),z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Lr(this):this.bb())},n.bb=function(){Lr(this)};function Lr(o){if(o.h&&typeof u<"u"&&(!o.v[1]||mt(o)!=4||o.Z()!=2)){if(o.u&&mt(o)==4)or(o.Ea,0,o);else if(rt(o,"readystatechange"),mt(o)==4){o.h=!1;try{const w=o.Z();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}var a;if(!(a=r)){var l;if(l=w===0){var f=String(o.D).match(br)[1]||null;!f&&c.self&&c.self.location&&(f=c.self.location.protocol.slice(0,-1)),l=!Gs.test(f?f.toLowerCase():"")}a=l}if(a)rt(o,"complete"),rt(o,"success");else{o.m=6;try{var I=2<mt(o)?o.g.statusText:""}catch{I=""}o.l=I+" ["+o.Z()+"]",xr(o)}}finally{De(o)}}}}function De(o,r){if(o.g){Mr(o);const a=o.g,l=o.v[0]?()=>{}:null;o.g=null,o.v=null,r||rt(o,"ready");try{a.onreadystatechange=l}catch{}}}function Mr(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function mt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var r=this.g.responseText;return o&&r.indexOf(o)==0&&(r=r.substring(o.length)),Rs(r)}};function Fr(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ws(o){const r={};o=(o.g&&2<=mt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<o.length;l++){if(W(o[l]))continue;var a=y(o[l]);const f=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=r[f]||[];r[f]=I,I.push(a)}v(r,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ae(o,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[o]||r}function Ur(o){this.Aa=0,this.i=[],this.j=new te,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ae("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ae("baseRetryDelayMs",5e3,o),this.cb=ae("retryDelaySeedMs",1e4,o),this.Wa=ae("forwardChannelMaxRetries",2,o),this.wa=ae("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Er(o&&o.concurrentRequestLimit),this.Da=new qs,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ur.prototype,n.la=8,n.G=1,n.connect=function(o,r,a,l){it(0),this.W=o,this.H=r||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=Wr(this,null,this.W),Ve(this)};function _n(o){if($r(o),o.G==3){var r=o.U++,a=gt(o.I);if(U(a,"SID",o.K),U(a,"RID",r),U(a,"TYPE","terminate"),he(o,a),r=new It(o,o.j,r),r.L=2,r.v=Pe(gt(a)),a=!1,c.navigator&&c.navigator.sendBeacon)try{a=c.navigator.sendBeacon(r.v.toString(),"")}catch{}!a&&c.Image&&(new Image().src=r.v,a=!0),a||(r.g=Qr(r.j,null),r.g.ea(r.v)),r.F=Date.now(),Re(r)}Kr(o)}function ke(o){o.g&&(vn(o),o.g.cancel(),o.g=null)}function $r(o){ke(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ne(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ve(o){if(!Tr(o.h)&&!o.s){o.s=!0;var r=o.Ga;Kt||er(),Wt||(Kt(),Wt=!0),Xe.add(r,o),o.B=0}}function Qs(o,r){return Ir(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=r.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Zt(b(o.Ga,o,r),Gr(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const f=new It(this,this.j,o);let I=this.o;if(this.S&&(I?(I=d(I),_(I,this.S)):I=this.S),this.m!==null||this.O||(f.H=I,I=null),this.P)t:{for(var r=0,a=0;a<this.i.length;a++){e:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(r+=l,4096<r){r=a;break t}if(r===4096||a===this.i.length-1){r=a+1;break t}}r=1e3}else r=1e3;r=jr(this,f,r),a=gt(this.I),U(a,"RID",o),U(a,"CVER",22),this.D&&U(a,"X-HTTP-Session-Id",this.D),he(this,a),I&&(this.O?r="headers="+encodeURIComponent(String(Nr(I)))+"&"+r:this.m&&mn(a,this.m,I)),gn(this.h,f),this.Ua&&U(a,"TYPE","init"),this.P?(U(a,"$req",r),U(a,"SID","null"),f.T=!0,cn(f,a,null)):cn(f,a,r),this.G=2}}else this.G==3&&(o?Br(this,o):this.i.length==0||Tr(this.h)||Br(this))};function Br(o,r){var a;r?a=r.l:a=o.U++;const l=gt(o.I);U(l,"SID",o.K),U(l,"RID",a),U(l,"AID",o.T),he(o,l),o.m&&o.o&&mn(l,o.m,o.o),a=new It(o,o.j,a,o.B+1),o.m===null&&(a.H=o.o),r&&(o.i=r.D.concat(o.i)),r=jr(o,a,1e3),a.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),gn(o.h,a),cn(a,l,r)}function he(o,r){o.H&&Q(o.H,function(a,l){U(r,l,a)}),o.l&&Rr({},function(a,l){U(r,l,a)})}function jr(o,r,a){a=Math.min(o.i.length,a);var l=o.l?b(o.l.Na,o.l,o):null;t:{var f=o.i;let I=-1;for(;;){const w=["count="+a];I==-1?0<a?(I=f[0].g,w.push("ofs="+I)):I=0:w.push("ofs="+I);let S=!0;for(let q=0;q<a;q++){let $=f[q].g;const B=f[q].map;if($-=I,0>$)I=Math.max(0,f[q].g-100),S=!1;else try{zs(B,w,"req"+$+"_")}catch{l&&l(B)}}if(S){l=w.join("&");break t}}}return o=o.i.splice(0,a),r.D=o,l}function Hr(o){if(!o.g&&!o.u){o.Y=1;var r=o.Fa;Kt||er(),Wt||(Kt(),Wt=!0),Xe.add(r,o),o.v=0}}function yn(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Zt(b(o.Fa,o),Gr(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,qr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Zt(b(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),ke(this),qr(this))};function vn(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function qr(o){o.g=new It(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var r=gt(o.qa);U(r,"RID","rpc"),U(r,"SID",o.K),U(r,"AID",o.T),U(r,"CI",o.F?"0":"1"),!o.F&&o.ja&&U(r,"TO",o.ja),U(r,"TYPE","xmlhttp"),he(o,r),o.m&&o.o&&mn(r,o.m,o.o),o.L&&(o.g.I=o.L);var a=o.g;o=o.ia,a.L=1,a.v=Pe(gt(r)),a.m=null,a.P=!0,_r(a,o)}n.Za=function(){this.C!=null&&(this.C=null,ke(this),yn(this),it(19))};function Ne(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function zr(o,r){var a=null;if(o.g==r){Ne(o),vn(o),o.g=null;var l=2}else if(pn(o.h,r))a=r.D,Ar(o.h,r),l=1;else return;if(o.G!=0){if(r.o)if(l==1){a=r.m?r.m.length:0,r=Date.now()-r.F;var f=o.B;l=Fe(),rt(l,new pr(l,a)),Ve(o)}else Hr(o);else if(f=r.s,f==3||f==0&&0<r.X||!(l==1&&Qs(o,r)||l==2&&yn(o)))switch(a&&0<a.length&&(r=o.h,r.i=r.i.concat(a)),f){case 1:$t(o,5);break;case 4:$t(o,10);break;case 3:$t(o,6);break;default:$t(o,2)}}}function Gr(o,r){let a=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(a*=2),a*r}function $t(o,r){if(o.j.info("Error code "+r),r==2){var a=b(o.fb,o),l=o.Xa;const f=!l;l=new Ut(l||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||be(l,"https"),Pe(l),f?js(l.toString(),a):Hs(l.toString(),a)}else it(2);o.G=0,o.l&&o.l.sa(r),Kr(o),$r(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Kr(o){if(o.G=0,o.ka=[],o.l){const r=wr(o.h);(r.length!=0||o.i.length!=0)&&(C(o.ka,r),C(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Wr(o,r,a){var l=a instanceof Ut?gt(a):new Ut(a);if(l.g!="")r&&(l.g=r+"."+l.g),Ce(l,l.s);else{var f=c.location;l=f.protocol,r=r?r+"."+f.hostname:f.hostname,f=+f.port;var I=new Ut(null);l&&be(I,l),r&&(I.g=r),f&&Ce(I,f),a&&(I.l=a),l=I}return a=o.D,r=o.ya,a&&r&&U(l,a,r),U(l,"VER",o.la),he(o,l),l}function Qr(o,r,a){if(r&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=o.Ca&&!o.pa?new z(new fe({eb:a})):new z(o.pa),r.Ha(o.J),r}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xr(){}n=Xr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Rt(o,r){tt.call(this),this.g=new Ur(r),this.l=o,this.h=r&&r.messageUrlParams||null,o=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(o?o["X-WebChannel-Content-Type"]=r.messageContentType:o={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.va&&(o?o["X-WebChannel-Client-Profile"]=r.va:o={"X-WebChannel-Client-Profile":r.va}),this.g.S=o,(o=r&&r.Sb)&&!W(o)&&(this.g.m=o),this.v=r&&r.supportsCrossDomainXhr||!1,this.u=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!W(r)&&(this.g.D=r,o=this.h,o!==null&&r in o&&(o=this.h,r in o&&delete o[r])),this.j=new Oe(this)}D(Rt,tt),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){_n(this.g)},Rt.prototype.o=function(o){var r=this.g;if(typeof o=="string"){var a={};a.__data__=o,o=a}else this.u&&(a={},a.__data__=sn(o),o=a);r.i.push(new Vs(r.Ya++,o)),r.G==3&&Ve(r)},Rt.prototype.N=function(){this.g.l=null,delete this.j,_n(this.g),delete this.g,Rt.aa.N.call(this)};function Dt(o){an.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var r=o.__sm__;if(r){t:{for(const a in r){o=a;break t}o=void 0}(this.i=o)&&(o=this.i,r=r!==null&&o in r?r[o]:void 0),this.data=r}else this.data=o}D(Dt,an);function Yr(){hn.call(this),this.status=1}D(Yr,hn);function Oe(o){this.g=o}D(Oe,Xr),Oe.prototype.ua=function(){rt(this.g,"a")},Oe.prototype.ta=function(o){rt(this.g,new Dt(o))},Oe.prototype.sa=function(o){rt(this.g,new Yr)},Oe.prototype.ra=function(){rt(this.g,"b")},Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Ue.NO_ERROR=0,Ue.TIMEOUT=8,Ue.HTTP_ERROR=6,wi.COMPLETE="complete",Ai.EventType=Yt,Yt.OPEN="a",Yt.CLOSE="b",Yt.ERROR="c",Yt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,z.prototype.listenOnce=z.prototype.L,z.prototype.getLastError=z.prototype.Ka,z.prototype.getLastErrorCode=z.prototype.Ba,z.prototype.getStatus=z.prototype.Z,z.prototype.getResponseJson=z.prototype.Oa,z.prototype.getResponseText=z.prototype.oa,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Ha}).apply(typeof Vi<"u"?Vi:typeof self<"u"?self:typeof window<"u"?window:{});const _h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new mu("@firebase/firestore");function qt(n,...t){if(Xn.logLevel<=ot.DEBUG){const e=t.map(aa);Xn.debug(`Firestore (${Ii}): ${n}`,...e)}}function oa(n,...t){if(Xn.logLevel<=ot.ERROR){const e=t.map(aa);Xn.error(`Firestore (${Ii}): ${n}`,...e)}}function T_(n,...t){if(Xn.logLevel<=ot.WARN){const e=t.map(aa);Xn.warn(`Firestore (${Ii}): ${n}`,...e)}}function aa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n="Unexpected state"){const t=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+n;throw oa(t),new Error(t)}function Vo(n,t){n||ha()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Mt extends On{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class I_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ot.UNAUTHENTICATED))}shutdown(){}}class A_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class w_{constructor(t){this.t=t,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=m=>this.i!==i?(i=this.i,e(m)):Promise.resolve();let h=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Un,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const m=h;t.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},c=m=>{qt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(m=>c(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?c(m):(qt("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Un)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(qt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Vo(typeof i.accessToken=="string"),new bu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Vo(t===null||typeof t=="string"),new Ot(t)}}class R_{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class b_{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new R_(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=h=>{h.error!=null&&qt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const u=h.token!==this.R;return this.R=h.token,qt("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(h.token):Promise.resolve()};this.o=h=>{t.enqueueRetryable(()=>i(h))};const s=h=>{qt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>s(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?s(h):qt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Vo(typeof e.token=="string"),this.R=e.token,new C_(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=S_(40);for(let h=0;h<s.length;++h)i.length<20&&s[h]<e&&(i+=t.charAt(s[h]%t.length))}return i}}function Cu(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t,e,i,s,h,u,c,m,E){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=h,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=m,this.useFetchStreams=E}}class es{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof es&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yh,J;(J=yh||(yh={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ru([4294967295,4294967295],0);function ao(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t,e,i=1e3,s=1.5,h=6e4){this.ai=t,this.timerId=e,this.Bo=i,this.ko=s,this.qo=h,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),i=Math.max(0,Date.now()-this.$o),s=Math.max(0,e-i);s>0&&qt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,s,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e,i,s,h){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=h,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,h){const u=Date.now()+i,c=new la(t,e,u,s,h);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Mt(Lt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function N_(n,t){if(oa("AsyncQueue",`${t}: ${n}`),Cu(n))return new Mt(Lt.UNAVAILABLE,`${t}: ${n}`);throw n}var vh,Eh;(Eh=vh||(vh={})).X_="default",Eh.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=Ot.UNAUTHENTICATED,this.clientId=D_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async h=>{qt("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(qt("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Mt(Lt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=N_(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Map;function x_(n,t,e,i){if(t===!0&&i===!0)throw new Mt(Lt.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function L_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":ha()}function M_(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new Mt(Lt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=L_(n);throw new Mt(Lt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Mt(Lt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Mt(Lt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}x_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pu((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new Mt(Lt.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new Mt(Lt.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new Mt(Lt.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Su{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ih({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Mt(Lt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Mt(Lt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ih(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new I_;switch(i.type){case"firstParty":return new b_(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Mt(Lt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Th.get(e);i&&(qt("ComponentProvider","Removing Datastore"),Th.delete(e),i.terminate())}(this),Promise.resolve()}}function F_(n,t,e,i={}){var s;const h=(n=M_(n,Su))._getSettings(),u=`${t}:${e}`;if(h.host!=="firestore.googleapis.com"&&h.host!==u&&T_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},h),{host:u,ssl:!1})),i.mockUserToken){let c,m;if(typeof i.mockUserToken=="string")c=i.mockUserToken,m=Ot.MOCK_USER;else{c=du(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new Mt(Lt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ot(E)}n._authCredentials=new A_(new bu(c,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new V_(this,"async_queue_retry"),this.Tu=()=>{const e=ao();e&&qt("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=ao();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=ao();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new Un;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!Cu(t))throw t;qt("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(i=>{this.lu=i,this.hu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw oa("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.hu=!1,i))));return this._u=e,e}enqueueAfterDelay(t,e,i){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const s=la.createAndSchedule(this,t,e,i,h=>this.Ru(h));return this.cu.push(s),s}Eu(){this.lu&&ha()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}}class $_ extends Su{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new U_}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||B_(this),this._firestoreClient.terminate()}}function Yy(n,t){const e=typeof n=="object"?n:vu(),i=typeof n=="string"?n:"(default)",s=_u(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const h=cu("firestore");h&&F_(s,...h)}return s}function B_(n){var t,e,i;const s=n._freezeSettings(),h=function(c,m,E,A){return new k_(c,m,E,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,Pu(A.experimentalLongPollingOptions),A.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new O_(n._authCredentials,n._appCheckCredentials,n._queue,h),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(t,e=!0){(function(s){Ii=s})(yu),di(new Qn("firestore",(i,{instanceIdentifier:s,options:h})=>{const u=i.getProvider("app").getImmediate(),c=new $_(new w_(i.getProvider("auth-internal")),new P_(i.getProvider("app-check-internal")),function(E,A){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new Mt(Lt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new es(E.options.projectId,A)}(u,s),u);return h=Object.assign({useFetchStreams:e},h),c._setSettings(h),c},"PUBLIC").setMultipleInstances(!0)),bn(_h,"4.6.5",t),bn(_h,"4.6.5","esm2017")})();export{Mm as $,Bg as A,vu as B,Bn as C,Hy as D,Sh as E,gi as F,yu as G,Qy as H,Xg as I,gu as J,Wy as K,Dh as L,Po as M,Ky as N,ot as O,pu as P,On as Q,Lg as R,Vh as S,zy as T,Gy as U,Mc as V,$y as W,Ny as X,Dy as Y,Oy as Z,oi as _,W_ as a,Xy as a0,Yy as a1,xy as a2,kh as b,$u as c,Nh as d,K_ as e,oy as f,q_ as g,$n as h,G_ as i,Z_ as j,ho as k,nt as l,No as m,xu as n,Q_ as o,Y_ as p,J_ as q,wn as r,bn as s,mu as t,By as u,jy as v,qy as w,di as x,Qn as y,_u as z};
