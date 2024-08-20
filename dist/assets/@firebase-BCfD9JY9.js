import{o as _u}from"./idb-BXWtuYvb.js";var Ai={};/**
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
 */const Eo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},yu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],c=n[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},vo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,c=u?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,w=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,S=f&63;d||(S=64,u||(R=64)),r.push(e[_],e[w],e[R],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Eo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):yu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||w==null)throw new Eu;const R=o<<2|c>>4;if(r.push(R),f!==64){const S=c<<4&240|f>>2;if(r.push(S),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vu=function(n){const t=Eo(n);return vo.encodeByteArray(t,!0)},Ln=function(n){return vu(n).replace(/\./g,"")},Tu=function(n){try{return vo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Iu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Au=()=>Iu().__FIREBASE_DEFAULTS__,wu=()=>{if(typeof process>"u"||typeof Ai>"u")return;const n=Ai.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ru=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Tu(n[1]);return t&&JSON.parse(t)},Gn=()=>{try{return Au()||wu()||Ru()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cu=n=>{var t,e;return(e=(t=Gn())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},To=n=>{const t=Cu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Io=()=>{var n;return(n=Gn())===null||n===void 0?void 0:n.config},Zd=n=>{var t;return(t=Gn())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class Pu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ao(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ln(JSON.stringify(e)),Ln(JSON.stringify(u)),""].join(".")}/**
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
 */function ts(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ts())}function Su(){var n;const t=(n=Gn())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ef(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rf(){const n=ts();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bu(){return!Su()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vu(){try{return typeof indexedDB=="object"}catch{return!1}}function Du(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const ku="FirebaseError";class se extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ku,Object.setPrototypeOf(this,se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?Nu(o,r):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new se(i,c,r)}}function Nu(n,t){return n.replace(Ou,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ou=/\{\$([^}]+)}/g;function sf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function xr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(wi(o)&&wi(u)){if(!xr(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function wi(n){return n!==null&&typeof n=="object"}/**
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
 */function of(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function af(n,t){const e=new xu(n,t);return e.subscribe.bind(e)}class xu{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Mu(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Pr),i.error===void 0&&(i.error=Pr),i.complete===void 0&&(i.complete=Pr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mu(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Pr(){}/**
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
 */function Ro(n){return n&&n._delegate?n._delegate:n}class ge{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Lu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Pu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uu(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fu(n){return n===Qt?void 0:n}function Uu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Lu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const qu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},$u=B.INFO,ju={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},zu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=ju[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Co{constructor(t){this.name=t,this._logLevel=$u,this._logHandler=zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}/**
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
 */class Hu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gu(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Gu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Mr="@firebase/app",Ri="0.10.8";/**
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
 */const te=new Co("@firebase/app"),Ku="@firebase/app-compat",Qu="@firebase/analytics-compat",Wu="@firebase/analytics",Yu="@firebase/app-check-compat",Xu="@firebase/app-check",Ju="@firebase/auth",Zu="@firebase/auth-compat",th="@firebase/database",eh="@firebase/database-compat",nh="@firebase/functions",rh="@firebase/functions-compat",sh="@firebase/installations",ih="@firebase/installations-compat",oh="@firebase/messaging",ah="@firebase/messaging-compat",uh="@firebase/performance",hh="@firebase/performance-compat",ch="@firebase/remote-config",lh="@firebase/remote-config-compat",dh="@firebase/storage",fh="@firebase/storage-compat",ph="@firebase/firestore",gh="@firebase/vertexai-preview",mh="@firebase/firestore-compat",_h="firebase",yh="10.12.5";/**
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
 */const Lr="[DEFAULT]",Eh={[Mr]:"fire-core",[Ku]:"fire-core-compat",[Wu]:"fire-analytics",[Qu]:"fire-analytics-compat",[Xu]:"fire-app-check",[Yu]:"fire-app-check-compat",[Ju]:"fire-auth",[Zu]:"fire-auth-compat",[th]:"fire-rtdb",[eh]:"fire-rtdb-compat",[nh]:"fire-fn",[rh]:"fire-fn-compat",[sh]:"fire-iid",[ih]:"fire-iid-compat",[oh]:"fire-fcm",[ah]:"fire-fcm-compat",[uh]:"fire-perf",[hh]:"fire-perf-compat",[ch]:"fire-rc",[lh]:"fire-rc-compat",[dh]:"fire-gcs",[fh]:"fire-gcs-compat",[ph]:"fire-fst",[mh]:"fire-fst-compat",[gh]:"fire-vertex","fire-js":"fire-js",[_h]:"fire-js-all"};/**
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
 */const Fn=new Map,vh=new Map,Fr=new Map;function Ci(n,t){try{n.container.addComponent(t)}catch(e){te.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Je(n){const t=n.name;if(Fr.has(t))return te.debug(`There were multiple attempts to register component ${t}.`),!1;Fr.set(t,n);for(const e of Fn.values())Ci(e,n);for(const e of vh.values())Ci(e,n);return!0}function Po(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function uf(n){return n.settings!==void 0}/**
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
 */const Th={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new wo("app","Firebase",Th);/**
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
 */class Ih{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const So=yh;function Ah(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Lr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Bt.create("bad-app-name",{appName:String(i)});if(e||(e=Io()),!e)throw Bt.create("no-options");const o=Fn.get(i);if(o){if(xr(e,o.options)&&xr(r,o.config))return o;throw Bt.create("duplicate-app",{appName:i})}const u=new Bu(i);for(const d of Fr.values())u.addComponent(d);const c=new Ih(e,r,u);return Fn.set(i,c),c}function bo(n=Lr){const t=Fn.get(n);if(!t&&n===Lr&&Io())return Ah();if(!t)throw Bt.create("no-app",{appName:n});return t}function Yt(n,t,e){var r;let i=(r=Eh[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),te.warn(c.join(" "));return}Je(new ge(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const wh="firebase-heartbeat-database",Rh=1,Ze="firebase-heartbeat-store";let Sr=null;function Vo(){return Sr||(Sr=_u(wh,Rh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw Bt.create("idb-open",{originalErrorMessage:n.message})})),Sr}async function Ch(n){try{const e=(await Vo()).transaction(Ze),r=await e.objectStore(Ze).get(Do(n));return await e.done,r}catch(t){if(t instanceof se)te.warn(t.message);else{const e=Bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});te.warn(e.message)}}}async function Pi(n,t){try{const r=(await Vo()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(t,Do(n)),await r.done}catch(e){if(e instanceof se)te.warn(e.message);else{const r=Bt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});te.warn(r.message)}}}function Do(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ph=1024,Sh=30*24*60*60*1e3;class bh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Si();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Sh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Si(),{heartbeatsToSend:r,unsentEntries:i}=Vh(this._heartbeatsCache.heartbeats),o=Ln(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Si(){return new Date().toISOString().substring(0,10)}function Vh(n,t=Ph){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),bi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),bi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Dh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vu()?Du().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ch(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bi(n){return Ln(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function kh(n){Je(new ge("platform-logger",t=>new Hu(t),"PRIVATE")),Je(new ge("heartbeat",t=>new bh(t),"PRIVATE")),Yt(Mr,Ri,n),Yt(Mr,Ri,"esm2017"),Yt("fire-js","")}kh("");/**
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
 */const ko="firebasestorage.googleapis.com",Nh="storageBucket",Oh=2*60*1e3,xh=10*60*1e3;/**
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
 */class bt extends se{constructor(t,e,r=0){super(br(t),`Firebase Storage: ${e} (${br(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return br(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ct;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ct||(Ct={}));function br(n){return"storage/"+n}function Mh(){const n="An unknown error occurred, please check the error payload for server response.";return new bt(Ct.UNKNOWN,n)}function Lh(){return new bt(Ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Fh(){return new bt(Ct.CANCELED,"User canceled the upload/download.")}function Uh(n){return new bt(Ct.INVALID_URL,"Invalid URL '"+n+"'.")}function Bh(n){return new bt(Ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Vi(n){return new bt(Ct.INVALID_ARGUMENT,n)}function No(){return new bt(Ct.APP_DELETED,"The Firebase app was deleted.")}function qh(n){return new bt(Ct.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class At{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=At.makeFromUrl(t,e)}catch{return new At(t,"")}if(r.path==="")return r;throw Bh(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const u="(/(.*))?$",c=new RegExp("^gs://"+i+u,"i"),d={bucket:1,path:3};function f(j){j.path_=decodeURIComponent(j.path)}const _="v[A-Za-z0-9_]+",w=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",S=new RegExp(`^https?://${w}/${_}/b/${i}/o${R}`,"i"),k={bucket:1,path:3},x=e===ko?"(?:storage.googleapis.com|storage.cloud.google.com)":e,V="([^?#]*)",K=new RegExp(`^https?://${x}/${i}/${V}`,"i"),H=[{regex:c,indices:d,postModify:o},{regex:S,indices:k,postModify:f},{regex:K,indices:{bucket:1,path:2},postModify:f}];for(let j=0;j<H.length;j++){const Et=H[j],J=Et.regex.exec(t);if(J){const v=J[Et.indices.bucket];let p=J[Et.indices.path];p||(p=""),r=new At(v,p),Et.postModify(r);break}}if(r==null)throw Uh(t);return r}}class $h{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function jh(n,t,e){let r=1,i=null,o=null,u=!1,c=0;function d(){return c===2}let f=!1;function _(...V){f||(f=!0,t.apply(null,V))}function w(V){i=setTimeout(()=>{i=null,n(S,d())},V)}function R(){o&&clearTimeout(o)}function S(V,...K){if(f){R();return}if(V){R(),_.call(null,V,...K);return}if(d()||u){R(),_.call(null,V,...K);return}r<64&&(r*=2);let H;c===1?(c=2,H=0):H=(r+Math.random())*1e3,w(H)}let k=!1;function x(V){k||(k=!0,R(),!f&&(i!==null?(V||(c=2),clearTimeout(i),w(0)):V||(c=1)))}return w(0),o=setTimeout(()=>{u=!0,x(!0)},e),x}function zh(n){n(!1)}/**
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
 */function Hh(n){return n!==void 0}function Di(n,t,e,r){if(r<t)throw Vi(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Vi(`Invalid value for '${n}'. Expected ${e} or less.`)}function Gh(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}/**
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
 */var Un;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Un||(Un={}));/**
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
 */function Kh(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
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
 */class Qh{constructor(t,e,r,i,o,u,c,d,f,_,w,R=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=u,this.callback_=c,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=_,this.connectionFactory_=w,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Pn(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const u=c=>{const d=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,f)};this.progressCallback_!==null&&o.addUploadProgressListener(u),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(u),this.pendingConnection_=null;const c=o.getErrorCode()===Un.NO_ERROR,d=o.getStatus();if(!c||Kh(d,this.additionalRetryCodes_)&&this.retry){const _=o.getErrorCode()===Un.ABORT;r(!1,new Pn(!1,null,_));return}const f=this.successCodes_.indexOf(d)!==-1;r(!0,new Pn(f,o))})},e=(r,i)=>{const o=this.resolve_,u=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());Hh(d)?o(d):o()}catch(d){u(d)}else if(c!==null){const d=Mh();d.serverResponse=c.getErrorText(),this.errorCallback_?u(this.errorCallback_(c,d)):u(d)}else if(i.canceled){const d=this.appDelete_?No():Fh();u(d)}else{const d=Lh();u(d)}};this.canceled_?e(!1,new Pn(!1,null,!0)):this.backoffId_=jh(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&zh(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pn{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function Wh(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Yh(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Xh(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Jh(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Zh(n,t,e,r,i,o,u=!0){const c=Gh(n.urlParams),d=n.url+c,f=Object.assign({},n.headers);return Xh(f,t),Wh(f,e),Yh(f,o),Jh(f,r),new Qh(d,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,u)}/**
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
 */function tc(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function ec(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */class Bn{constructor(t,e){this._service=t,e instanceof At?this._location=e:this._location=At.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Bn(t,e)}get root(){const t=new At(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ec(this._location.path)}get storage(){return this._service}get parent(){const t=tc(this._location.path);if(t===null)return null;const e=new At(this._location.bucket,t);return new Bn(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw qh(t)}}function ki(n,t){const e=t==null?void 0:t[Nh];return e==null?null:At.makeFromBucketSpec(e,n)}function nc(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Ao(i,n.app.options.projectId))}class rc{constructor(t,e,r,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=ko,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Oh,this._maxUploadRetryTime=xh,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=ki(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,t):this._bucket=ki(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Di("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Di("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Bn(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new $h(No());{const u=Zh(t,this._appId,r,i,e,this._firebaseVersion,o);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const Ni="@firebase/storage",Oi="0.12.6";/**
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
 */const Oo="storage";function hf(n=bo(),t){n=Ro(n);const r=Po(n,Oo).getImmediate({identifier:t}),i=To("storage");return i&&sc(r,...i),r}function sc(n,t,e,r={}){nc(n,t,e,r)}function ic(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new rc(e,r,i,t,So)}function oc(){Je(new ge(Oo,ic,"PUBLIC").setMultipleInstances(!0)),Yt(Ni,Oi,""),Yt(Ni,Oi,"esm2017")}oc();var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,xo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(y,E,I){for(var g=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)g[Vt-2]=arguments[Vt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],E=v.g[2];var I=v.g[3],g=p+(I^m&(E^I))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(m^E))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(m^E^I)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(E^(m|~I))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=m;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)v[m++]=this.g[p]>>>y&255;return v};function o(v,p){var m=c;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function u(v,p){this.h=p;for(var m=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(m[E]=I,y=!1)}this.g=m}var c={};function d(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return V(f(-v));for(var p=[],m=1,y=0;v>=m;y++)p[y]=v/m|0,m*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return V(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var w=d(0),R=d(1),S=d(16777216);n=u.prototype,n.m=function(){if(x(this))return-V(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(x(this))return"-"+V(this).toString(v);for(var p=f(Math.pow(v,6)),m=this,y="";;){var E=j(m,p).g;m=K(m,E.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=E,k(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=K(this,v),x(v)?-1:k(v)?0:1};function V(v){for(var p=v.g.length,m=[],y=0;y<p;y++)m[y]=~v.g[y];return new u(m,~v.h).add(R)}n.abs=function(){return x(this)?V(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,m[E]=g<<16|I}return new u(m,m[m.length-1]&-2147483648?-1:0)};function K(v,p){return v.add(V(p))}n.j=function(v){if(k(this)||k(v))return w;if(x(this))return x(v)?V(this).j(V(v)):V(V(this).j(v));if(x(v))return V(this.j(V(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Vt=v.i(E)>>>16,Ce=v.i(E)&65535;m[2*y+2*E]+=g*Ce,W(m,2*y+2*E),m[2*y+2*E+1]+=I*Ce,W(m,2*y+2*E+1),m[2*y+2*E+1]+=g*Vt,W(m,2*y+2*E+1),m[2*y+2*E+2]+=I*Vt,W(m,2*y+2*E+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new u(m,0)};function W(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function H(v,p){this.g=v,this.h=p}function j(v,p){if(k(p))throw Error("division by zero");if(k(v))return new H(w,w);if(x(v))return p=j(V(v),p),new H(V(p.g),V(p.h));if(x(p))return p=j(v,V(p)),new H(V(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var m=R,y=p;0>=y.l(v);)m=Et(m),y=Et(y);var E=J(m,1),I=J(y,1);for(y=J(y,2),m=J(m,2);!k(y);){var g=I.add(y);0>=g.l(v)&&(E=E.add(m),I=g),y=J(y,1),m=J(m,1)}return p=K(v,E.j(p)),new H(E,p)}for(E=w;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(m),g=I.j(p);x(g)||0<g.l(v);)m-=y,I=f(m),g=I.j(p);k(I)&&(I=R),E=E.add(I),v=K(v,g)}return new H(E,v)}n.A=function(v){return j(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&v.i(y);return new u(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|v.i(y);return new u(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^v.i(y);return new u(m,this.h^v.h)};function Et(v){for(var p=v.g.length+1,m=[],y=0;y<p;y++)m[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(m,v.h)}function J(v,p){var m=p>>5;p%=32;for(var y=v.g.length-m,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+m)>>>p|v.i(I+m+1)<<32-p:v.i(I+m);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xo=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Xt=u}).apply(typeof xi<"u"?xi:typeof self<"u"?self:typeof window<"u"?window:{});var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mo,Lo,He,Fo,Nn,Ur,Uo,Bo,qo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,h){return s==Array.prototype||s==Object.prototype||(s[a]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sn=="object"&&Sn];for(var a=0;a<s.length;++a){var h=s[a];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var h=r;s=s.split(".");for(var l=0;l<s.length-1;l++){var T=s[l];if(!(T in h))break t;h=h[T]}s=s[s.length-1],l=h[s],a=a(l),a!=l&&a!=null&&t(h,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var h=0,l=!1,T={next:function(){if(!l&&h<s.length){var A=h++;return{value:a(A,s[A]),done:!1}}return l=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,h){return s.call.apply(s.bind,arguments)}function w(s,a,h){if(!s)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,l),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,h){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,R.apply(null,arguments)}function S(s,a){var h=Array.prototype.slice.call(arguments,1);return function(){var l=h.slice();return l.push.apply(l,arguments),s.apply(this,l)}}function k(s,a){function h(){}h.prototype=a.prototype,s.aa=a.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(l,T,A){for(var P=Array(arguments.length-2),G=2;G<arguments.length;G++)P[G-2]=arguments[G];return a.prototype[T].apply(l,P)}}function x(s){const a=s.length;if(0<a){const h=Array(a);for(let l=0;l<a;l++)h[l]=s[l];return h}return[]}function V(s,a){for(let h=1;h<arguments.length;h++){const l=arguments[h];if(d(l)){const T=s.length||0,A=l.length||0;s.length=T+A;for(let P=0;P<A;P++)s[T+P]=l[P]}else s.push(l)}}class K{constructor(a,h){this.i=a,this.j=h,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function W(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function j(s){return j[" "](s),s}j[" "]=function(){};var Et=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function J(s,a,h){for(const l in s)a.call(h,s[l],l,s)}function v(s,a){for(const h in s)a.call(void 0,s[h],h,s)}function p(s){const a={};for(const h in s)a[h]=s[h];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let h,l;for(let T=1;T<arguments.length;T++){l=arguments[T];for(h in l)s[h]=l[h];for(let A=0;A<m.length;A++)h=m[A],Object.prototype.hasOwnProperty.call(l,h)&&(s[h]=l[h])}}function E(s){var a=1;s=s.split(":");const h=[];for(;0<a&&s.length;)h.push(s.shift()),a--;return s.length&&h.push(s.join(":")),h}function I(s){c.setTimeout(()=>{throw s},0)}function g(){var s=rr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Vt{constructor(){this.h=this.g=null}add(a,h){const l=Ce.get();l.set(a,h),this.h?this.h.next=l:this.g=l,this.h=l}}var Ce=new K(()=>new Ma,s=>s.reset());class Ma{constructor(){this.next=this.g=this.h=null}set(a,h){this.h=a,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Se=!1,rr=new Vt,As=()=>{const s=c.Promise.resolve(void 0);Pe=()=>{s.then(La)}};var La=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(h){I(h)}var a=Ce;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Se=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Fa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};c.addEventListener("test",h,a),c.removeEventListener("test",h,a)}catch{}return s}();function be(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,l=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Et){t:{try{j(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else h=="mouseover"?a=s.fromElement:h=="mouseout"&&(a=s.toElement);this.relatedTarget=a,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ua[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&be.aa.h.call(this)}}k(be,ht);var Ua={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),Ba=0;function qa(s,a,h,l,T){this.listener=s,this.proxy=null,this.src=a,this.type=h,this.capture=!!l,this.ha=T,this.key=++Ba,this.da=this.fa=!1}function cn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ln(s){this.src=s,this.g={},this.h=0}ln.prototype.add=function(s,a,h,l,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var P=ir(s,a,l,T);return-1<P?(a=s[P],h||(a.fa=!1)):(a=new qa(a,this.src,A,!!l,T),a.fa=h,s.push(a)),a};function sr(s,a){var h=a.type;if(h in s.g){var l=s.g[h],T=Array.prototype.indexOf.call(l,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(l,T,1),A&&(cn(a),s.g[h].length==0&&(delete s.g[h],s.h--))}}function ir(s,a,h,l){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!h&&A.ha==l)return T}return-1}var or="closure_lm_"+(1e6*Math.random()|0),ar={};function ws(s,a,h,l,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)ws(s,a[A],h,l,T);return null}return h=Ps(h),s&&s[hn]?s.K(a,h,f(l)?!!l.capture:!!l,T):$a(s,a,h,!1,l,T)}function $a(s,a,h,l,T,A){if(!a)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,G=hr(s);if(G||(s[or]=G=new ln(s)),h=G.add(a,h,l,P,A),h.proxy)return h;if(l=ja(),h.proxy=l,l.src=s,l.listener=h,s.addEventListener)Fa||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),l,T);else if(s.attachEvent)s.attachEvent(Cs(a.toString()),l);else if(s.addListener&&s.removeListener)s.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ja(){function s(h){return a.call(s.src,s.listener,h)}const a=za;return s}function Rs(s,a,h,l,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Rs(s,a[A],h,l,T);else l=f(l)?!!l.capture:!!l,h=Ps(h),s&&s[hn]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],h=ir(A,h,l,T),-1<h&&(cn(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=hr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=ir(a,h,l,T)),(h=-1<s?a[s]:null)&&ur(h))}function ur(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[hn])sr(a.i,s);else{var h=s.type,l=s.proxy;a.removeEventListener?a.removeEventListener(h,l,s.capture):a.detachEvent?a.detachEvent(Cs(h),l):a.addListener&&a.removeListener&&a.removeListener(l),(h=hr(a))?(sr(h,s),h.h==0&&(h.src=null,a[or]=null)):cn(s)}}}function Cs(s){return s in ar?ar[s]:ar[s]="on"+s}function za(s,a){if(s.da)s=!0;else{a=new be(a,this);var h=s.listener,l=s.ha||s.src;s.fa&&ur(s),s=h.call(l,a)}return s}function hr(s){return s=s[or],s instanceof ln?s:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ps(s){return typeof s=="function"?s:(s[cr]||(s[cr]=function(a){return s.handleEvent(a)}),s[cr])}function ct(){Ot.call(this),this.i=new ln(this),this.M=this,this.F=null}k(ct,Ot),ct.prototype[hn]=!0,ct.prototype.removeEventListener=function(s,a,h,l){Rs(this,s,a,h,l)};function mt(s,a){var h,l=s.F;if(l)for(h=[];l;l=l.F)h.push(l);if(s=s.M,l=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var T=a;a=new ht(l,s),y(a,T)}if(T=!0,h)for(var A=h.length-1;0<=A;A--){var P=a.g=h[A];T=dn(P,l,!0,a)&&T}if(P=a.g=s,T=dn(P,l,!0,a)&&T,T=dn(P,l,!1,a)&&T,h)for(A=0;A<h.length;A++)P=a.g=h[A],T=dn(P,l,!1,a)&&T}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var h=s.g[a],l=0;l<h.length;l++)cn(h[l]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,h,l){return this.i.add(String(s),a,!1,h,l)},ct.prototype.L=function(s,a,h,l){return this.i.add(String(s),a,!0,h,l)};function dn(s,a,h,l){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var P=a[A];if(P&&!P.da&&P.capture==h){var G=P.listener,it=P.ha||P.src;P.fa&&sr(s.i,P),T=G.call(it,l)!==!1&&T}}return T&&!l.defaultPrevented}function Ss(s,a,h){if(typeof s=="function")h&&(s=R(s,h));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function bs(s){s.g=Ss(()=>{s.g=null,s.i&&(s.i=!1,bs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Ha extends Ot{constructor(a,h){super(),this.m=a,this.l=h,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:bs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(s){Ot.call(this),this.h=s,this.g={}}k(Ve,Ot);var Vs=[];function Ds(s){J(s.g,function(a,h){this.g.hasOwnProperty(h)&&ur(a)},s),s.g={}}Ve.prototype.N=function(){Ve.aa.N.call(this),Ds(this)},Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lr=c.JSON.stringify,Ga=c.JSON.parse,Ka=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function dr(){}dr.prototype.h=null;function ks(s){return s.h||(s.h=s.i())}function Ns(){}var De={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fr(){ht.call(this,"d")}k(fr,ht);function pr(){ht.call(this,"c")}k(pr,ht);var zt={},Os=null;function fn(){return Os=Os||new ct}zt.La="serverreachability";function xs(s){ht.call(this,zt.La,s)}k(xs,ht);function ke(s){const a=fn();mt(a,new xs(a))}zt.STAT_EVENT="statevent";function Ms(s,a){ht.call(this,zt.STAT_EVENT,s),this.stat=a}k(Ms,ht);function _t(s){const a=fn();mt(a,new Ms(a,s))}zt.Ma="timingevent";function Ls(s,a){ht.call(this,zt.Ma,s),this.size=a}k(Ls,ht);function Ne(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Oe(){this.g=!0}Oe.prototype.xa=function(){this.g=!1};function Qa(s,a,h,l,T,A){s.info(function(){if(s.g)if(A)for(var P="",G=A.split("&"),it=0;it<G.length;it++){var $=G[it].split("=");if(1<$.length){var lt=$[0];$=$[1];var dt=lt.split("_");P=2<=dt.length&&dt[1]=="type"?P+(lt+"="+$+"&"):P+(lt+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+l+") [attempt "+T+"]: "+a+`
`+h+`
`+P})}function Wa(s,a,h,l,T,A,P){s.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+T+"]: "+a+`
`+h+`
`+A+" "+P})}function ie(s,a,h,l){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Xa(s,h)+(l?" "+l:"")})}function Ya(s,a){s.info(function(){return"TIMEOUT: "+a})}Oe.prototype.info=function(){};function Xa(s,a){if(!s.g)return a;if(!a)return null;try{var h=JSON.parse(a);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var l=h[s];if(!(2>l.length)){var T=l[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return lr(h)}catch{return a}}var pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gr;function gn(){}k(gn,dr),gn.prototype.g=function(){return new XMLHttpRequest},gn.prototype.i=function(){return{}},gr=new gn;function xt(s,a,h,l){this.j=s,this.i=a,this.l=h,this.R=l||1,this.U=new Ve(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Us}function Us(){this.i=null,this.g="",this.h=!1}var Bs={},mr={};function _r(s,a,h){s.L=1,s.v=En(Dt(a)),s.m=h,s.P=!0,qs(s,null)}function qs(s,a){s.F=Date.now(),mn(s),s.A=Dt(s.v);var h=s.A,l=s.R;Array.isArray(l)||(l=[String(l)]),ei(h.i,"t",l),s.C=0,h=s.j.J,s.h=new Us,s.g=Ei(s.j,h?a:null,!s.m),0<s.O&&(s.M=new Ha(R(s.Y,s,s.g),s.O)),a=s.U,h=s.g,l=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Vs[0]=T.toString()),T=Vs);for(var A=0;A<T.length;A++){var P=ws(h,T[A],l||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),ke(),Qa(s.i,s.u,s.A,s.l,s.R,s.m)}xt.prototype.ca=function(s){s=s.target;const a=this.M;a&&kt(s)==3?a.j():this.Y(s)},xt.prototype.Y=function(s){try{if(s==this.g)t:{const dt=kt(this.g);var a=this.g.Ba();const ue=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||ui(this.g)))){this.J||dt!=4||a==7||(a==8||0>=ue?ke(3):ke(2)),yr(this);var h=this.g.Z();this.X=h;e:if($s(this)){var l=ui(this.g);s="";var T=l.length,A=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),xe(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(l[a],{stream:!(A&&a==T-1)});l.length=0,this.h.g+=s,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=h==200,Wa(this.i,this.u,this.A,this.l,this.R,dt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var G,it=this.g;if((G=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(G)){var $=G;break e}}$=null}if(h=$)ie(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Er(this,h);else{this.o=!1,this.s=3,_t(12),Ht(this),xe(this);break t}}if(this.P){h=!0;let It;for(;!this.J&&this.C<P.length;)if(It=Ja(this,P),It==mr){dt==4&&(this.s=4,_t(14),h=!1),ie(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Bs){this.s=4,_t(15),ie(this.i,this.l,P,"[Invalid Chunk]"),h=!1;break}else ie(this.i,this.l,It,null),Er(this,It);if($s(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||P.length!=0||this.h.h||(this.s=1,_t(16),h=!1),this.o=this.o&&h,!h)ie(this.i,this.l,P,"[Invalid Chunked Response]"),Ht(this),xe(this);else if(0<P.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Rr(lt),lt.M=!0,_t(11))}}else ie(this.i,this.l,P,null),Er(this,P);dt==4&&Ht(this),this.o&&!this.J&&(dt==4?gi(this.j,this):(this.o=!1,mn(this)))}else gu(this.g),h==400&&0<P.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Ht(this),xe(this)}}}catch{}finally{}};function $s(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Ja(s,a){var h=s.C,l=a.indexOf(`
`,h);return l==-1?mr:(h=Number(a.substring(h,l)),isNaN(h)?Bs:(l+=1,l+h>a.length?mr:(a=a.slice(l,l+h),s.C=l+h,a)))}xt.prototype.cancel=function(){this.J=!0,Ht(this)};function mn(s){s.S=Date.now()+s.I,js(s,s.I)}function js(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ne(R(s.ba,s),a)}function yr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}xt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ya(this.i,this.A),this.L!=2&&(ke(),_t(17)),Ht(this),this.s=2,xe(this)):js(this,this.S-s)};function xe(s){s.j.G==0||s.J||gi(s.j,s)}function Ht(s){yr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ds(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Er(s,a){try{var h=s.j;if(h.G!=0&&(h.g==s||vr(h.h,s))){if(!s.K&&vr(h.h,s)&&h.G==3){try{var l=h.Da.g.parse(a)}catch{l=null}if(Array.isArray(l)&&l.length==3){var T=l;if(T[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)wn(h),In(h);else break t;wr(h),_t(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ne(R(h.Za,h),6e3));if(1>=Gs(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Kt(h,11)}else if((s.K||h.g==s)&&wn(h),!W(a))for(T=h.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(h.T=$[0],$=$[1],h.G==2)if($[0]=="c"){h.K=$[1],h.ia=$[2];const lt=$[3];lt!=null&&(h.la=lt,h.j.info("VER="+h.la));const dt=$[4];dt!=null&&(h.Aa=dt,h.j.info("SVER="+h.Aa));const ue=$[5];ue!=null&&typeof ue=="number"&&0<ue&&(l=1.5*ue,h.L=l,h.j.info("backChannelRequestTimeoutMs_="+l)),l=h;const It=s.g;if(It){const Cn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var A=l.h;A.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Tr(A,A.h),A.h=null))}if(l.D){const Cr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Cr&&(l.ya=Cr,Q(l.I,l.D,Cr))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),l=h;var P=s;if(l.qa=yi(l,l.J?l.ia:null,l.W),P.K){Ks(l.h,P);var G=P,it=l.L;it&&(G.I=it),G.B&&(yr(G),mn(G)),l.g=P}else fi(l);0<h.i.length&&An(h)}else $[0]!="stop"&&$[0]!="close"||Kt(h,7);else h.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Kt(h,7):Ar(h):$[0]!="noop"&&h.l&&h.l.ta($),h.v=0)}}ke(4)}catch{}}var Za=class{constructor(s,a){this.g=s,this.map=a}};function zs(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hs(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Gs(s){return s.h?1:s.g?s.g.size:0}function vr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Tr(s,a){s.g?s.g.add(a):s.h=a}function Ks(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}zs.prototype.cancel=function(){if(this.i=Qs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Qs(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const h of s.g.values())a=a.concat(h.D);return a}return x(s.i)}function tu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],h=s.length,l=0;l<h;l++)a.push(s[l]);return a}a=[],h=0;for(l in s)a[h++]=s[l];return a}function eu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var h=0;h<s;h++)a.push(h);return a}a=[],h=0;for(const l in s)a[h++]=l;return a}}}function Ws(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var h=eu(s),l=tu(s),T=l.length,A=0;A<T;A++)a.call(void 0,l[A],h&&h[A],s)}var Ys=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nu(s,a){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var l=s[h].indexOf("="),T=null;if(0<=l){var A=s[h].substring(0,l);T=s[h].substring(l+1)}else A=s[h];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Gt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Gt){this.h=s.h,_n(this,s.j),this.o=s.o,this.g=s.g,yn(this,s.s),this.l=s.l;var a=s.i,h=new Fe;h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),Xs(this,h),this.m=s.m}else s&&(a=String(s).match(Ys))?(this.h=!1,_n(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),yn(this,a[4]),this.l=Me(a[5]||"",!0),Xs(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.h=!1,this.i=new Fe(null,this.h))}Gt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Le(a,Js,!0),":");var h=this.g;return(h||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Le(a,Js,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(Le(h,h.charAt(0)=="/"?iu:su,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",Le(h,au)),s.join("")};function Dt(s){return new Gt(s)}function _n(s,a,h){s.j=h?Me(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function yn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Xs(s,a,h){a instanceof Fe?(s.i=a,uu(s.i,s.h)):(h||(a=Le(a,ou)),s.i=new Fe(a,s.h))}function Q(s,a,h){s.i.set(a,h)}function En(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Me(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Le(s,a,h){return typeof s=="string"?(s=encodeURI(s).replace(a,ru),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ru(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Js=/[#\/\?@]/g,su=/[#\?:]/g,iu=/[#\?]/g,ou=/[#\?@]/g,au=/#/g;function Fe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Mt(s){s.g||(s.g=new Map,s.h=0,s.i&&nu(s.i,function(a,h){s.add(decodeURIComponent(a.replace(/\+/g," ")),h)}))}n=Fe.prototype,n.add=function(s,a){Mt(this),this.i=null,s=oe(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(a),this.h+=1,this};function Zs(s,a){Mt(s),a=oe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ti(s,a){return Mt(s),a=oe(s,a),s.g.has(a)}n.forEach=function(s,a){Mt(this),this.g.forEach(function(h,l){h.forEach(function(T){s.call(a,T,l,this)},this)},this)},n.na=function(){Mt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),h=[];for(let l=0;l<a.length;l++){const T=s[l];for(let A=0;A<T.length;A++)h.push(a[l])}return h},n.V=function(s){Mt(this);let a=[];if(typeof s=="string")ti(this,s)&&(a=a.concat(this.g.get(oe(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)a=a.concat(s[h])}return a},n.set=function(s,a){return Mt(this),this.i=null,s=oe(this,s),ti(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ei(s,a,h){Zs(s,a),0<h.length&&(s.i=null,s.g.set(oe(s,a),x(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var h=0;h<a.length;h++){var l=a[h];const A=encodeURIComponent(String(l)),P=this.V(l);for(l=0;l<P.length;l++){var T=A;P[l]!==""&&(T+="="+encodeURIComponent(String(P[l]))),s.push(T)}}return this.i=s.join("&")};function oe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function uu(s,a){a&&!s.j&&(Mt(s),s.i=null,s.g.forEach(function(h,l){var T=l.toLowerCase();l!=T&&(Zs(this,l),ei(this,T,h))},s)),s.j=a}function hu(s,a){const h=new Oe;if(c.Image){const l=new Image;l.onload=S(Lt,h,"TestLoadImage: loaded",!0,a,l),l.onerror=S(Lt,h,"TestLoadImage: error",!1,a,l),l.onabort=S(Lt,h,"TestLoadImage: abort",!1,a,l),l.ontimeout=S(Lt,h,"TestLoadImage: timeout",!1,a,l),c.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=s}else a(!1)}function cu(s,a){const h=new Oe,l=new AbortController,T=setTimeout(()=>{l.abort(),Lt(h,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:l.signal}).then(A=>{clearTimeout(T),A.ok?Lt(h,"TestPingServer: ok",!0,a):Lt(h,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Lt(h,"TestPingServer: error",!1,a)})}function Lt(s,a,h,l,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),l(h)}catch{}}function lu(){this.g=new Ka}function du(s,a,h){const l=h||"";try{Ws(s,function(T,A){let P=T;f(T)&&(P=lr(T)),a.push(l+A+"="+encodeURIComponent(P))})}catch(T){throw a.push(l+"type="+encodeURIComponent("_badmap")),T}}function Ue(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Ue,dr),Ue.prototype.g=function(){return new vn(this.l,this.j)},Ue.prototype.i=function(s){return function(){return s}}({});function vn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(vn,ct),n=vn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,qe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,qe(this)),this.g&&(this.readyState=3,qe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ni(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ni(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Be(this):qe(this),this.readyState==3&&ni(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Be(this))},n.Qa=function(s){this.g&&(this.response=s,Be(this))},n.ga=function(){this.g&&Be(this)};function Be(s){s.readyState=4,s.l=null,s.j=null,s.v=null,qe(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var h=a.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=a.next();return s.join(`\r
`)};function qe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ri(s){let a="";return J(s,function(h,l){a+=l,a+=":",a+=h,a+=`\r
`}),a}function Ir(s,a,h){t:{for(l in h){var l=!1;break t}l=!0}l||(h=ri(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):Q(s,a,h))}function Y(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Y,ct);var fu=/^https?$/i,pu=["POST","PUT"];n=Y.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,h,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gr.g(),this.v=this.o?ks(this.o):ks(gr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){si(this,A);return}if(s=h||"",h=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var T in l)h.set(T,l[T]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const A of l.keys())h.set(A,l.get(A));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(pu,a,void 0))||l||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of h)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ai(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){si(this,A)}};function si(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,ii(s),Tn(s)}function ii(s){s.A||(s.A=!0,mt(s,"complete"),mt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,mt(this,"complete"),mt(this,"abort"),Tn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tn(this,!0)),Y.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?oi(this):this.bb())},n.bb=function(){oi(this)};function oi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||kt(s)!=4||s.Z()!=2)){if(s.u&&kt(s)==4)Ss(s.Ea,0,s);else if(mt(s,"readystatechange"),kt(s)==4){s.h=!1;try{const P=s.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var h;if(!(h=a)){var l;if(l=P===0){var T=String(s.D).match(Ys)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),l=!fu.test(T?T.toLowerCase():"")}h=l}if(h)mt(s,"complete"),mt(s,"success");else{s.m=6;try{var A=2<kt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",ii(s)}}finally{Tn(s)}}}}function Tn(s,a){if(s.g){ai(s);const h=s.g,l=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||mt(s,"ready");try{h.onreadystatechange=l}catch{}}}function ai(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function kt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Ga(a)}};function ui(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function gu(s){const a={};s=(s.g&&2<=kt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<s.length;l++){if(W(s[l]))continue;var h=E(s[l]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=a[T]||[];a[T]=A,A.push(h)}v(a,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $e(s,a,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||a}function hi(s){this.Aa=0,this.i=[],this.j=new Oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$e("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$e("baseRetryDelayMs",5e3,s),this.cb=$e("retryDelaySeedMs",1e4,s),this.Wa=$e("forwardChannelMaxRetries",2,s),this.wa=$e("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new zs(s&&s.concurrentRequestLimit),this.Da=new lu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hi.prototype,n.la=8,n.G=1,n.connect=function(s,a,h,l){_t(0),this.W=s,this.H=a||{},h&&l!==void 0&&(this.H.OSID=h,this.H.OAID=l),this.F=this.X,this.I=yi(this,null,this.W),An(this)};function Ar(s){if(ci(s),s.G==3){var a=s.U++,h=Dt(s.I);if(Q(h,"SID",s.K),Q(h,"RID",a),Q(h,"TYPE","terminate"),je(s,h),a=new xt(s,s.j,a),a.L=2,a.v=En(Dt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=a.v,h=!0),h||(a.g=Ei(a.j,null),a.g.ea(a.v)),a.F=Date.now(),mn(a)}_i(s)}function In(s){s.g&&(Rr(s),s.g.cancel(),s.g=null)}function ci(s){In(s),s.u&&(c.clearTimeout(s.u),s.u=null),wn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function An(s){if(!Hs(s.h)&&!s.s){s.s=!0;var a=s.Ga;Pe||As(),Se||(Pe(),Se=!0),rr.add(a,s),s.B=0}}function mu(s,a){return Gs(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ne(R(s.Ga,s,a),mi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new xt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,h=0;h<this.i.length;h++){e:{var l=this.i[h];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(a+=l,4096<a){a=h;break t}if(a===4096||h===this.i.length-1){a=h+1;break t}}a=1e3}else a=1e3;a=di(this,T,a),h=Dt(this.I),Q(h,"RID",s),Q(h,"CVER",22),this.D&&Q(h,"X-HTTP-Session-Id",this.D),je(this,h),A&&(this.O?a="headers="+encodeURIComponent(String(ri(A)))+"&"+a:this.m&&Ir(h,this.m,A)),Tr(this.h,T),this.Ua&&Q(h,"TYPE","init"),this.P?(Q(h,"$req",a),Q(h,"SID","null"),T.T=!0,_r(T,h,null)):_r(T,h,a),this.G=2}}else this.G==3&&(s?li(this,s):this.i.length==0||Hs(this.h)||li(this))};function li(s,a){var h;a?h=a.l:h=s.U++;const l=Dt(s.I);Q(l,"SID",s.K),Q(l,"RID",h),Q(l,"AID",s.T),je(s,l),s.m&&s.o&&Ir(l,s.m,s.o),h=new xt(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),a&&(s.i=a.D.concat(s.i)),a=di(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Tr(s.h,h),_r(h,l,a)}function je(s,a){s.H&&J(s.H,function(h,l){Q(a,l,h)}),s.l&&Ws({},function(h,l){Q(a,l,h)})}function di(s,a,h){h=Math.min(s.i.length,h);var l=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const P=["count="+h];A==-1?0<h?(A=T[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let G=!0;for(let it=0;it<h;it++){let $=T[it].g;const lt=T[it].map;if($-=A,0>$)A=Math.max(0,T[it].g-100),G=!1;else try{du(lt,P,"req"+$+"_")}catch{l&&l(lt)}}if(G){l=P.join("&");break t}}}return s=s.i.splice(0,h),a.D=s,l}function fi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Pe||As(),Se||(Pe(),Se=!0),rr.add(a,s),s.v=0}}function wr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ne(R(s.Fa,s),mi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,pi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ne(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),In(this),pi(this))};function Rr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function pi(s){s.g=new xt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Dt(s.qa);Q(a,"RID","rpc"),Q(a,"SID",s.K),Q(a,"AID",s.T),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(a,"TO",s.ja),Q(a,"TYPE","xmlhttp"),je(s,a),s.m&&s.o&&Ir(a,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=En(Dt(a)),h.m=null,h.P=!0,qs(h,s)}n.Za=function(){this.C!=null&&(this.C=null,In(this),wr(this),_t(19))};function wn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function gi(s,a){var h=null;if(s.g==a){wn(s),Rr(s),s.g=null;var l=2}else if(vr(s.h,a))h=a.D,Ks(s.h,a),l=1;else return;if(s.G!=0){if(a.o)if(l==1){h=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;l=fn(),mt(l,new Ls(l,h)),An(s)}else fi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(l==1&&mu(s,a)||l==2&&wr(s)))switch(h&&0<h.length&&(a=s.h,a.i=a.i.concat(h)),T){case 1:Kt(s,5);break;case 4:Kt(s,10);break;case 3:Kt(s,6);break;default:Kt(s,2)}}}function mi(s,a){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*a}function Kt(s,a){if(s.j.info("Error code "+a),a==2){var h=R(s.fb,s),l=s.Xa;const T=!l;l=new Gt(l||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||_n(l,"https"),En(l),T?hu(l.toString(),h):cu(l.toString(),h)}else _t(2);s.G=0,s.l&&s.l.sa(a),_i(s),ci(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function _i(s){if(s.G=0,s.ka=[],s.l){const a=Qs(s.h);(a.length!=0||s.i.length!=0)&&(V(s.ka,a),V(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function yi(s,a,h){var l=h instanceof Gt?Dt(h):new Gt(h);if(l.g!="")a&&(l.g=a+"."+l.g),yn(l,l.s);else{var T=c.location;l=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new Gt(null);l&&_n(A,l),a&&(A.g=a),T&&yn(A,T),h&&(A.l=h),l=A}return h=s.D,a=s.ya,h&&a&&Q(l,h,a),Q(l,"VER",s.la),je(s,l),l}function Ei(s,a,h){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new Ue({eb:h})):new Y(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function vi(){}n=vi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Rn(){}Rn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){ct.call(this),this.g=new hi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!W(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!W(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ae(this)}k(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Ar(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=lr(s),s=h);a.i.push(new Za(a.Ya++,s)),a.G==3&&An(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Ar(this.g),delete this.g,Tt.aa.N.call(this)};function Ti(s){fr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const h in a){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Ti,fr);function Ii(){pr.call(this),this.status=1}k(Ii,pr);function ae(s){this.g=s}k(ae,vi),ae.prototype.ua=function(){mt(this.g,"a")},ae.prototype.ta=function(s){mt(this.g,new Ti(s))},ae.prototype.sa=function(s){mt(this.g,new Ii)},ae.prototype.ra=function(){mt(this.g,"b")},Rn.prototype.createWebChannel=Rn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,qo=function(){return new Rn},Bo=function(){return fn()},Uo=zt,Ur={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pn.NO_ERROR=0,pn.TIMEOUT=8,pn.HTTP_ERROR=6,Nn=pn,Fs.COMPLETE="complete",Fo=Fs,Ns.EventType=De,De.OPEN="a",De.CLOSE="b",De.ERROR="c",De.MESSAGE="d",ct.prototype.listen=ct.prototype.K,He=Ns,Lo=Ue,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,Mo=Y}).apply(typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{});const Mi="@firebase/firestore";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Ie="10.12.5";/**
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
 */const ee=new Co("@firebase/firestore");function ze(){return ee.logLevel}function D(n,...t){if(ee.logLevel<=B.DEBUG){const e=t.map(es);ee.debug(`Firestore (${Ie}): ${n}`,...e)}}function Nt(n,...t){if(ee.logLevel<=B.ERROR){const e=t.map(es);ee.error(`Firestore (${Ie}): ${n}`,...e)}}function me(n,...t){if(ee.logLevel<=B.WARN){const e=t.map(es);ee.warn(`Firestore (${Ie}): ${n}`,...e)}}function es(n){if(typeof n=="string")return n;try{/**
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
 */function L(n="Unexpected state"){const t=`FIRESTORE (${Ie}) INTERNAL ASSERTION FAILED: `+n;throw Nt(t),new Error(t)}function nt(n,t){n||L()}function U(n,t){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends se{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class $o{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ac{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class uc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class hc{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new $o(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new pt(t)}}class cc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new cc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new dc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function pc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class gc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=pc(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function _e(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class vt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new vt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new vt(0,0))}static max(){return new M(new vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tn{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return tn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends tn{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const mc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends tn{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return mc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(r+=c,i++):(o(),i++)}if(o(),u)throw new N(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}function _c(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new vt(e+1,0):new vt(e,r));return new qt(i,O.empty(),t)}function yc(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new qt(M.min(),O.empty(),-1)}static max(){return new qt(M.max(),O.empty(),-1)}}function Ec(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
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
 */const vc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ns(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==vc)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},d=>r(d))}),u=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++c,c===o&&r(u)},_=>i(_))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Ic(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class rs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}rs.oe=-1;function Kn(n){return n==null}function Br(n){return n===0&&1/n==-1/0}/**
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
 */function Li(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Qn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ac(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bn(this.root,t,this.comparator,!0)}}class bn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ot(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fi(this.data.getIterator())}getIteratorFrom(t){return new Fi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Fi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Ft([])}unionWith(t){let e=new at(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ft(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _e(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class jo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new jo("Invalid base64 string: "+o):o}}(t);return new ut(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const wc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(n){if(nt(!!n),typeof n=="string"){let t=0;const e=wc.exec(n);if(nt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ne(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
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
 */function ss(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function is(n){const t=n.mapValue.fields.__previous_value__;return ss(t)?is(t):t}function en(n){const t=$t(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(t.seconds,t.nanos)}/**
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
 */class Rc{constructor(t,e,r,i,o,u,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}class nn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof nn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ss(n)?4:Cc(n)?9007199254740991:10:L()}function Pt(n,t){if(n===t)return!0;const e=re(n);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return en(n).isEqual(en(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=$t(i.timestampValue),c=$t(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return ne(i.bytesValue).isEqual(ne(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=et(i.doubleValue),c=et(o.doubleValue);return u===c?Br(u)===Br(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return _e(n.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Li(u)!==Li(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!Pt(u[d],c[d])))return!1;return!0}(n,t);default:return L()}}function rn(n,t){return(n.values||[]).find(e=>Pt(e,t))!==void 0}function ye(n,t){if(n===t)return 0;const e=re(n),r=re(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=et(o.integerValue||o.doubleValue),d=et(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return Ui(n.timestampValue,t.timestampValue);case 4:return Ui(en(n),en(t));case 5:return z(n.stringValue,t.stringValue);case 6:return function(o,u){const c=ne(o),d=ne(u);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),d=u.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=z(c[f],d[f]);if(_!==0)return _}return z(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=z(et(o.latitude),et(u.latitude));return c!==0?c:z(et(o.longitude),et(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,u){const c=o.values||[],d=u.values||[];for(let f=0;f<c.length&&f<d.length;++f){const _=ye(c[f],d[f]);if(_)return _}return z(c.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Vn.mapValue&&u===Vn.mapValue)return 0;if(o===Vn.mapValue)return 1;if(u===Vn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const R=z(d[w],_[w]);if(R!==0)return R;const S=ye(c[d[w]],f[_[w]]);if(S!==0)return S}return z(d.length,_.length)}(n.mapValue,t.mapValue);default:throw L()}}function Ui(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=$t(n),r=$t(t),i=z(e.seconds,r.seconds);return i!==0?i:z(e.nanos,r.nanos)}function Ee(n){return qr(n)}function qr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=$t(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ne(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=qr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${qr(e.fields[u])}`;return i+"}"}(n.mapValue):L()}function $r(n){return!!n&&"integerValue"in n}function os(n){return!!n&&"arrayValue"in n}function Bi(n){return!!n&&"nullValue"in n}function qi(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vr(n){return!!n&&"mapValue"in n}function Qe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Qn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Qe(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Qe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Cc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Vr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qe(e)}setAll(t){let e=yt.emptyPath(),r={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=c.popLast()}u?r[c.lastSegment()]=Qe(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Vr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Vr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Qn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new wt(Qe(this.value))}}/**
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
 */class gt{constructor(t,e,r,i,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,M.min(),M.min(),M.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new gt(t,1,e,M.min(),r,i,0)}static newNoDocument(t,e){return new gt(t,2,e,M.min(),M.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,M.min(),M.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qn{constructor(t,e){this.position=t,this.inclusive=e}}function $i(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=ye(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ji(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Pt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class $n{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class zo{}class rt extends zo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new bc(t,e,r):e==="array-contains"?new kc(t,r):e==="in"?new Nc(t,r):e==="not-in"?new Oc(t,r):e==="array-contains-any"?new xc(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Vc(t,r):new Dc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends zo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new St(t,e)}matches(t){return Ho(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ho(n){return n.op==="and"}function Go(n){return Sc(n)&&Ho(n)}function Sc(n){for(const t of n.filters)if(t instanceof St)return!1;return!0}function jr(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Ee(n.value);if(Go(n))return n.filters.map(t=>jr(t)).join(",");{const t=n.filters.map(e=>jr(e)).join(",");return`${n.op}(${t})`}}function Ko(n,t){return n instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)}(n,t):n instanceof St?function(r,i){return i instanceof St&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,c)=>o&&Ko(u,i.filters[c]),!0):!1}(n,t):void L()}function Qo(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ee(e.value)}`}(n):n instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(Qo).join(" ,")+"}"}(n):"Filter"}class bc extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Vc extends rt{constructor(t,e){super(t,"in",e),this.keys=Wo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dc extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Wo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Wo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class kc extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return os(e)&&rn(e.arrayValue,this.value)}}class Nc extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&rn(this.value.arrayValue,e)}}class Oc extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!rn(this.value.arrayValue,e)}}class xc extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!os(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>rn(this.value.arrayValue,r))}}/**
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
 */class Mc{constructor(t,e=null,r=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function zi(n,t=null,e=[],r=[],i=null,o=null,u=null){return new Mc(n,t,e,r,i,o,u)}function as(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>jr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Kn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ee(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ee(r)).join(",")),t.ue=e}return t.ue}function us(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Pc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ko(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ji(n.startAt,t.startAt)&&ji(n.endAt,t.endAt)}function zr(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Wn{constructor(t,e=null,r=[],i=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lc(n,t,e,r,i,o,u,c){return new Wn(n,t,e,r,i,o,u,c)}function Yo(n){return new Wn(n)}function Hi(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fc(n){return n.collectionGroup!==null}function We(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new at(yt.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new $n(o,r))}),e.has(yt.keyField().canonicalString())||t.ce.push(new $n(yt.keyField(),r))}return t.ce}function Rt(n){const t=U(n);return t.le||(t.le=Uc(t,We(n))),t.le}function Uc(n,t){if(n.limitType==="F")return zi(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new $n(i.field,o)});const e=n.endAt?new qn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qn(n.startAt.position,n.startAt.inclusive):null;return zi(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Hr(n,t,e){return new Wn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Yn(n,t){return us(Rt(n),Rt(t))&&n.limitType===t.limitType}function Xo(n){return`${as(Rt(n))}|lt:${n.limitType}`}function he(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Qo(i)).join(", ")}]`),Kn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ee(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ee(i)).join(",")),`Target(${r})`}(Rt(n))}; limitType=${n.limitType})`}function Xn(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of We(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(u,c,d){const f=$i(u,c,d);return u.inclusive?f<=0:f<0}(r.startAt,We(r),i)||r.endAt&&!function(u,c,d){const f=$i(u,c,d);return u.inclusive?f>=0:f>0}(r.endAt,We(r),i))}(n,t)}function Bc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jo(n){return(t,e)=>{let r=!1;for(const i of We(n)){const o=qc(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function qc(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,c){const d=u.data.field(o),f=c.data.field(o);return d!==null&&f!==null?ye(d,f):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
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
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Qn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Ac(this.inner)}size(){return this.innerSize}}/**
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
 */const $c=new Z(O.comparator);function jt(){return $c}const Zo=new Z(O.comparator);function Ge(...n){let t=Zo;for(const e of n)t=t.insert(e.key,e);return t}function jc(n){let t=Zo;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Wt(){return Ye()}function ta(){return Ye()}function Ye(){return new Ae(n=>n.toString(),(n,t)=>n.isEqual(t))}const zc=new at(O.comparator);function q(...n){let t=zc;for(const e of n)t=t.add(e);return t}const Hc=new at(z);function Gc(){return Hc}/**
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
 */function Kc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(t)?"-0":t}}function Qc(n){return{integerValue:""+n}}/**
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
 */class Jn{constructor(){this._=void 0}}function Wc(n,t,e){return n instanceof Gr?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ss(o)&&(o=is(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof jn?ea(n,t):n instanceof zn?na(n,t):function(i,o){const u=Xc(i,o),c=Gi(u)+Gi(i.Pe);return $r(u)&&$r(i.Pe)?Qc(c):Kc(i.serializer,c)}(n,t)}function Yc(n,t,e){return n instanceof jn?ea(n,t):n instanceof zn?na(n,t):e}function Xc(n,t){return n instanceof Kr?function(r){return $r(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Gr extends Jn{}class jn extends Jn{constructor(t){super(),this.elements=t}}function ea(n,t){const e=ra(t);for(const r of n.elements)e.some(i=>Pt(i,r))||e.push(r);return{arrayValue:{values:e}}}class zn extends Jn{constructor(t){super(),this.elements=t}}function na(n,t){let e=ra(t);for(const r of n.elements)e=e.filter(i=>!Pt(i,r));return{arrayValue:{values:e}}}class Kr extends Jn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Gi(n){return et(n.integerValue||n.doubleValue)}function ra(n){return os(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Jc(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof jn&&i instanceof jn||r instanceof zn&&i instanceof zn?_e(r.elements,i.elements,Pt):r instanceof Kr&&i instanceof Kr?Pt(r.Pe,i.Pe):r instanceof Gr&&i instanceof Gr}(n.transform,t.transform)}class Zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zt}static exists(t){return new Zt(void 0,t)}static updateTime(t){return new Zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function On(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class hs{}function sa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new tl(n.key,Zt.none()):new cs(n.key,n.data,Zt.none());{const e=n.data,r=wt.empty();let i=new at(yt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new Zn(n.key,r,new Ft(i.toArray()),Zt.none())}}function Zc(n,t,e){n instanceof cs?function(i,o,u){const c=i.value.clone(),d=Qi(i.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Zn?function(i,o,u){if(!On(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Qi(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(ia(i)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Xe(n,t,e,r){return n instanceof cs?function(o,u,c,d){if(!On(o.precondition,u))return c;const f=o.value.clone(),_=Wi(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Zn?function(o,u,c,d){if(!On(o.precondition,u))return c;const f=Wi(o.fieldTransforms,d,u),_=u.data;return _.setAll(ia(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,u,c){return On(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Ki(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_e(r,i,(o,u)=>Jc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cs extends hs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zn extends hs{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ia(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Qi(n,t,e){const r=new Map;nt(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,c=t.data.field(o.field);r.set(o.field,Yc(u,c,e[i]))}return r}function Wi(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Wc(o,u,t))}return r}class tl extends hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class el{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Zc(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ta();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const d=sa(u,c);d!==null&&r.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&_e(this.mutations,t.mutations,(e,r)=>Ki(e,r))&&_e(this.baseMutations,t.baseMutations,(e,r)=>Ki(e,r))}}/**
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
 */class nl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class rl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,F;function oa(n){if(n===void 0)return Nt("GRPC error has no .code"),b.UNKNOWN;switch(n){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return L()}}(F=tt||(tt={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sl(){return new TextEncoder}/**
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
 */const il=new Xt([4294967295,4294967295],0);function Yi(n){const t=sl().encode(n),e=new xo;return e.update(t),new Uint8Array(e.digest())}function Xi(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Xt([e,r],0),new Xt([i,o],0)]}class ls{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ke(`Invalid padding: ${e}`);if(r<0)throw new Ke(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ke(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ke(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Xt.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Xt.fromNumber(r)));return i.compare(il)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Yi(t),[r,i]=Xi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ls(o,i,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=Yi(t),[r,i]=Xi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ke extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,on.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new tr(M.min(),i,new Z(z),jt(),q())}}class on{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new on(r,e,q(),q(),q())}}/**
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
 */class xn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class aa{constructor(t,e){this.targetId=t,this.me=e}}class ua{constructor(t,e,r=ut.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ji{constructor(){this.fe=0,this.ge=to(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=q(),e=q(),r=q();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:L()}}),new on(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=to()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,nt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ol{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=Zi(),this.Qe=new Z(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(zr(o))if(r===0){const u=new O(o.path);this.Ue(e,u,gt.newNoDocument(u,M.min()))}else nt(r===1);else{const u=this.Ye(e);if(u!==r){const c=this.Ze(t),d=c?this.Xe(c,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=ne(r).toUint8Array()}catch(d){if(d instanceof jo)return me("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new ls(u,i,o)}catch(d){return me(d instanceof Ke?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&zr(c.target)){const d=new O(c.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,gt.newNoDocument(d,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let r=q();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new tr(t,e,this.Qe,this.ke,r);return this.ke=jt(),this.qe=Zi(),this.Qe=new Z(z),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ji,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new at(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ji),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Zi(){return new Z(O.comparator)}function to(){return new Z(O.comparator)}const al={asc:"ASCENDING",desc:"DESCENDING"},ul={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hl={and:"AND",or:"OR"};class cl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qr(n,t){return n.useProto3Json||Kn(t)?t:{value:t}}function ll(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function de(n){return nt(!!n),M.fromTimestamp(function(e){const r=$t(e);return new vt(r.seconds,r.nanos)}(n))}function fl(n,t){return Wr(n,t).canonicalString()}function Wr(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ha(n){const t=X.fromString(n);return nt(pa(t)),t}function Dr(n,t){const e=ha(t);if(e.get(1)!==n.databaseId.projectId)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(la(e))}function ca(n,t){return fl(n.databaseId,t)}function pl(n){const t=ha(n);return t.length===4?X.emptyPath():la(t)}function eo(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function la(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function gl(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(nt(_===void 0||typeof _=="string"),ut.fromBase64String(_||"")):(nt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ut.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const _=f.code===void 0?b.UNKNOWN:oa(f.code);return new N(_,f.message||"")}(u);e=new ua(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dr(n,r.document.name),o=de(r.document.updateTime),u=r.document.createTime?de(r.document.createTime):M.min(),c=new wt({mapValue:{fields:r.document.fields}}),d=gt.newFoundDocument(i,o,u,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new xn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Dr(n,r.document),o=r.readTime?de(r.readTime):M.min(),u=gt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new xn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Dr(n,r.document),o=r.removedTargetIds||[];e=new xn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new rl(i,o),c=r.targetId;e=new aa(c,u)}}return e}function ml(n,t){return{documents:[ca(n,t.path)]}}function _l(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ca(n,i);const o=function(f){if(f.length!==0)return fa(St.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:ce(R.field),direction:vl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Qr(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function yl(n){let t=pl(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){nt(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const R=da(w);return R instanceof St&&Go(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(k){return new $n(le(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(w){let R;return R=typeof w=="object"?w.value:w,Kn(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(w){const R=!!w.before,S=w.values||[];return new qn(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,S=w.values||[];return new qn(S,R)}(e.endAt)),Lc(t,i,u,o,c,"F",d,f)}function El(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function da(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=le(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=le(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=le(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=le(e.unaryFilter.field);return rt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return rt.create(le(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(r=>da(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function vl(n){return al[n]}function Tl(n){return ul[n]}function Il(n){return hl[n]}function ce(n){return{fieldPath:n.canonicalString()}}function le(n){return yt.fromServerFormat(n.fieldPath)}function fa(n){return n instanceof rt?function(e){if(e.op==="=="){if(qi(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NAN"}};if(Bi(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qi(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NOT_NAN"}};if(Bi(e.value))return{unaryFilter:{field:ce(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ce(e.field),op:Tl(e.op),value:e.value}}}(n):n instanceof St?function(e){const r=e.getFilters().map(i=>fa(i));return r.length===1?r[0]:{compositeFilter:{op:Il(e.op),filters:r}}}(n):L()}function pa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ut{constructor(t,e,r,i,o=M.min(),u=M.min(),c=ut.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new Ut(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Al{constructor(t){this.ct=t}}function wl(n){const t=yl({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hr(t,t.limit,"L"):t}/**
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
 */class Rl{constructor(){this.an=new Cl}addToCollectionParentIndex(t,e){return this.an.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(qt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Cl{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new at(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(X.comparator)).toArray()}}/**
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
 */class ve{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Ln(){return new ve(0)}static Bn(){return new ve(-1)}}/**
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
 */class Pl{constructor(){this.changes=new Ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Sl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class bl{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Xe(r.mutation,i,Ft.empty(),vt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const i=Wt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let u=Ge();return o.forEach((c,d)=>{u=u.insert(c,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Wt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,i){let o=jt();const u=Ye(),c=function(){return Ye()}();return e.forEach((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof Zn)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),Xe(_.mutation,f,_.mutation.getFieldMask(),vt.now())):u.set(f.key,Ft.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var w;return c.set(f,new Sl(_,(w=u.get(f))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Ye();let i=new Z((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Ft.empty();_=c.applyToLocalView(f,_),r.set(d,_);const w=(i.get(c.batchId)||q()).add(d);i=i.insert(c.batchId,w)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,w=ta();_.forEach(R=>{if(!o.has(R)){const S=sa(e.get(R),r.get(R));S!==null&&w.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return C.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Fc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(Wt());let c=-1,d=o;return u.next(f=>C.forEach(f,(_,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,q())).next(_=>({batchId:c,changes:jc(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=Ge();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=Ge();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,d=>{const f=function(w,R){return new Wn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let c=Ge();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&Xe(_.mutation,f,Ft.empty(),vt.now()),Xn(e,f)&&(c=c.insert(d,f))}),c})}}/**
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
 */class Vl{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return C.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:de(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(i){return{name:i.name,query:wl(i.bundledQuery),readTime:de(i.readTime)}}(e)),C.resolve()}}/**
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
 */class Dl{constructor(){this.overlays=new Z(O.comparator),this.Pr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Wt();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Pr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=Wt(),o=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Z((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Wt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=Wt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return C.resolve(c)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new nl(e,r));let o=this.Pr.get(e);o===void 0&&(o=q(),this.Pr.set(e,o)),this.Pr.set(e,o.add(r.key))}}/**
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
 */class kl{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class ds{constructor(){this.Ir=new at(st.Tr),this.Er=new at(st.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const r=new st(t,e);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Rr(new st(t,e))}Vr(t,e){t.forEach(r=>this.removeReference(r,e))}mr(t){const e=new O(new X([])),r=new st(e,t),i=new st(e,t+1),o=[];return this.Er.forEachInRange([r,i],u=>{this.Rr(u),o.push(u.key)}),o}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Er=this.Er.delete(t)}pr(t){const e=new O(new X([])),r=new st(e,t),i=new st(e,t+1);let o=q();return this.Er.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),r=this.Ir.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.yr=e}static Tr(t,e){return O.comparator(t.key,e.key)||z(t.yr,e.yr)}static dr(t,e){return z(t.yr,e.yr)||O.comparator(t.key,e.key)}}/**
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
 */class Nl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new at(st.Tr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new el(o,e,r,i);this.mutationQueue.push(u);for(const c of i)this.Sr=this.Sr.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Dr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.Sr.forEachInRange([r,i],u=>{const c=this.br(u.yr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(z);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([o,u],c=>{r=r.add(c.yr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new st(new O(o),0);let c=new at(z);return this.Sr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.yr)),!0)},u),C.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const i=this.br(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){nt(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return C.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Sr=r})}xn(t){}containsKey(t,e){const r=new st(e,0),i=this.Sr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Ol{constructor(t){this.Fr=t,this.docs=function(){return new Z(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.Fr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=jt();const u=e.path,c=new O(u.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Ec(yc(_),r)<=0||(i.has(_.key)||Xn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){L()}Mr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new xl(this)}getSize(t){return C.resolve(this.size)}}class xl extends Pl{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ur.addEntry(t,i)):this.ur.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
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
 */class Ml{constructor(t){this.persistence=t,this.Or=new Ae(e=>as(e),us),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new ds,this.targetCount=0,this.Br=ve.Ln()}forEachTarget(t,e){return this.Or.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Nr&&(this.Nr=e),C.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new ve(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Qn(e),C.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Lr.mr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Or.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Or.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Or.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Lr.Ar(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Lr.Vr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Lr.mr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Lr.pr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Lr.containsKey(e))}}/**
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
 */class Ll{constructor(t,e){this.kr={},this.overlays={},this.qr=new rs(0),this.Qr=!1,this.Qr=!0,this.Kr=new kl,this.referenceDelegate=t(this),this.$r=new Ml(this),this.indexManager=new Rl,this.remoteDocumentCache=function(i){return new Ol(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Al(e),this.Wr=new Vl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Dl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.kr[t.toKey()];return r||(r=new Nl(e,this.referenceDelegate),this.kr[t.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new Fl(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(o=>this.referenceDelegate.zr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}jr(t,e){return C.or(Object.values(this.kr).map(r=>()=>r.containsKey(t,e)))}}class Fl extends Tc{constructor(t){super(),this.currentSequenceNumber=t}}class fs{constructor(t){this.persistence=t,this.Hr=new ds,this.Jr=null}static Yr(t){return new fs(t)}get Zr(){if(this.Jr)return this.Jr;throw L()}addReference(t,e,r){return this.Hr.addReference(r,e),this.Zr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Hr.removeReference(r,e),this.Zr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Zr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Hr.mr(e.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Zr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Gr(){this.Jr=new Set}zr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Zr,r=>{const i=O.fromPath(r);return this.Xr(t,i).next(o=>{o||e.removeEntry(i,M.min())})}).next(()=>(this.Jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Xr(t,e).next(r=>{r?this.Zr.delete(e.toString()):this.Zr.add(e.toString())})}Ur(t){return 0}Xr(t,e){return C.or([()=>C.resolve(this.Hr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.jr(t,e)])}}/**
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
 */class ps{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Ki=r,this.$i=i}static Ui(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ps(t,e.fromCache,r,i)}}/**
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
 */class Ul{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Bl{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return bu()?8:Ic(ts())>0?6:4}()}initialize(t,e){this.Hi=t,this.indexManager=e,this.Wi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Yi(t,e,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Ul;return this.Zi(t,e,u).next(c=>{if(o.result=c,this.Gi)return this.Xi(t,e,u,c.size)})}).next(()=>o.result)}Xi(t,e,r,i){return r.documentReadCount<this.zi?(ze()<=B.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",he(e),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),C.resolve()):(ze()<=B.DEBUG&&D("QueryEngine","Query:",he(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(ze()<=B.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",he(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rt(e))):C.resolve())}Ji(t,e){if(Hi(e))return C.resolve(null);let r=Rt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Hr(e,null,"F"),r=Rt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=q(...o);return this.Hi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.es(e,c);return this.ts(e,f,u,d.readTime)?this.Ji(t,Hr(e,null,"F")):this.ns(t,f,e,d)}))})))}Yi(t,e,r,i){return Hi(e)||i.isEqual(M.min())?C.resolve(null):this.Hi.getDocuments(t,r).next(o=>{const u=this.es(e,o);return this.ts(e,u,r,i)?C.resolve(null):(ze()<=B.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),he(e)),this.ns(t,u,e,_c(i,-1)).next(c=>c))})}es(t,e){let r=new at(Jo(t));return e.forEach((i,o)=>{Xn(t,o)&&(r=r.add(o))}),r}ts(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Zi(t,e,r){return ze()<=B.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",he(e)),this.Hi.getDocumentsMatchingQuery(t,e,qt.min(),r)}ns(t,e,r,i){return this.Hi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class ql{constructor(t,e,r,i){this.persistence=t,this.rs=e,this.serializer=i,this.ss=new Z(z),this.os=new Ae(o=>as(o),us),this._s=new Map,this.us=t.getRemoteDocumentCache(),this.$r=t.getTargetCache(),this.Wr=t.getBundleCache(),this.cs(r)}cs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bl(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ss))}}function $l(n,t,e,r){return new ql(n,t,e,r)}async function ga(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.cs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let d=q();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({ls:f,removedBatchIds:u,addedBatchIds:c}))})})}function ma(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.$r.getLastRemoteSnapshotVersion(e))}function jl(n,t){const e=U(n),r=t.snapshotVersion;let i=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.us.newChangeBuffer({trackRemovals:!0});i=e.ss;const c=[];t.targetChanges.forEach((_,w)=>{const R=i.get(w);if(!R)return;c.push(e.$r.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.$r.addMatchingKeys(o,_.addedDocuments,w)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(ut.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),i=i.insert(w,S),function(x,V,K){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,S,_)&&c.push(e.$r.updateTargetData(o,S))});let d=jt(),f=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(zl(o,u,t.documentUpdates).next(_=>{d=_.hs,f=_.Ps})),!r.isEqual(M.min())){const _=e.$r.getLastRemoteSnapshotVersion(o).next(w=>e.$r.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return C.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ss=i,o))}function zl(n,t,e){let r=q(),i=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=jt();return e.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(M.min())?(t.removeEntry(c,d.readTime),u=u.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(c,d)):D("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{hs:u,Ps:i}})}function Hl(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.$r.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.$r.allocateTargetId(r).next(u=>(i=new Ut(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ss=e.ss.insert(r.targetId,r),e.os.set(t,r.targetId)),r})}async function Yr(n,t,e){const r=U(n),i=r.ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!sn(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.ss=r.ss.remove(t),r.os.delete(i.target)}function no(n,t,e){const r=U(n);let i=M.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const w=U(d),R=w.os.get(_);return R!==void 0?C.resolve(w.ss.get(R)):w.$r.getTargetData(f,_)}(r,u,Rt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(u,c.targetId).next(d=>{o=d})}).next(()=>r.rs.getDocumentsMatchingQuery(u,t,e?i:M.min(),e?o:q())).next(c=>(Gl(r,Bc(t),c),{documents:c,Is:o})))}function Gl(n,t,e){let r=n._s.get(t)||M.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n._s.set(t,r)}class ro{constructor(){this.activeTargetIds=Gc()}Vs(t){this.activeTargetIds=this.activeTargetIds.add(t)}fs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Rs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kl{constructor(){this.io=new ro,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.io.Vs(t),this.so[t]||"not-current"}updateQueryState(t,e,r){this.so[t]=e}removeLocalQueryTarget(t){this.io.fs(t)}isLocalQueryTarget(t){return this.io.activeTargetIds.has(t)}clearQueryState(t){delete this.so[t]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(t){return this.io.activeTargetIds.has(t)}start(){return this.io=new ro,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ql{oo(t){}shutdown(){}}/**
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
 */class so{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(t){this.lo.push(t)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.lo)t(0)}co(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.lo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dn=null;function kr(){return Dn===null?Dn=function(){return 268435456+Math.round(2147483648*Math.random())}():Dn++,"0x"+Dn.toString(16)}/**
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
 */const Wl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Yl{constructor(t){this.Po=t.Po,this.Io=t.Io}To(t){this.Eo=t}Ao(t){this.Ro=t}Vo(t){this.mo=t}onMessage(t){this.fo=t}close(){this.Io()}send(t){this.Po(t)}po(){this.Eo()}yo(){this.Ro()}wo(t){this.mo(t)}So(t){this.fo(t)}}/**
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
 */const ft="WebChannelConnection";class Xl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+e.host,this.Do=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get vo(){return!1}Fo(e,r,i,o,u){const c=kr(),d=this.Mo(e,r.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,d,i);const f={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(f,o,u),this.Oo(e,d,f,i).then(_=>(D("RestConnection",`Received RPC '${e}' ${c}: `,_),_),_=>{throw me("RestConnection",`RPC '${e}' ${c} failed with error: `,_,"url: ",d,"request:",i),_})}No(e,r,i,o,u,c){return this.Fo(e,r,i,o,u)}xo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ie}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}Mo(e,r){const i=Wl[e];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Oo(t,e,r,i){const o=kr();return new Promise((u,c)=>{const d=new Mo;d.setWithCredentials(!0),d.listenOnce(Fo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Nn.NO_ERROR:const _=d.getResponseJson();D(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Nn.TIMEOUT:D(ft,`RPC '${t}' ${o} timed out`),c(new N(b.DEADLINE_EXCEEDED,"Request time out"));break;case Nn.HTTP_ERROR:const w=d.getStatus();if(D(ft,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const k=function(V){const K=V.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(K)>=0?K:b.UNKNOWN}(S.status);c(new N(k,S.message))}else c(new N(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new N(b.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);D(ft,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,r,15)})}Lo(t,e,r){const i=kr(),o=[this.bo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=qo(),c=Bo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new Lo({})),this.xo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");D(ft,`Creating RPC '${t}' stream ${i}: ${_}`,d);const w=u.createWebChannel(_,d);let R=!1,S=!1;const k=new Yl({Po:V=>{S?D(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(R||(D(ft,`Opening RPC '${t}' stream ${i} transport.`),w.open(),R=!0),D(ft,`RPC '${t}' stream ${i} sending:`,V),w.send(V))},Io:()=>w.close()}),x=(V,K,W)=>{V.listen(K,H=>{try{W(H)}catch(j){setTimeout(()=>{throw j},0)}})};return x(w,He.EventType.OPEN,()=>{S||(D(ft,`RPC '${t}' stream ${i} transport opened.`),k.po())}),x(w,He.EventType.CLOSE,()=>{S||(S=!0,D(ft,`RPC '${t}' stream ${i} transport closed`),k.wo())}),x(w,He.EventType.ERROR,V=>{S||(S=!0,me(ft,`RPC '${t}' stream ${i} transport errored:`,V),k.wo(new N(b.UNAVAILABLE,"The operation could not be completed")))}),x(w,He.EventType.MESSAGE,V=>{var K;if(!S){const W=V.data[0];nt(!!W);const H=W,j=H.error||((K=H[0])===null||K===void 0?void 0:K.error);if(j){D(ft,`RPC '${t}' stream ${i} received error:`,j);const Et=j.status;let J=function(m){const y=tt[m];if(y!==void 0)return oa(y)}(Et),v=j.message;J===void 0&&(J=b.INTERNAL,v="Unknown error status: "+Et+" with message "+j.message),S=!0,k.wo(new N(J,v)),w.close()}else D(ft,`RPC '${t}' stream ${i} received:`,W),k.So(W)}}),x(c,Uo.STAT_EVENT,V=>{V.stat===Ur.PROXY?D(ft,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===Ur.NOPROXY&&D(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.yo()},0),k}}function Nr(){return typeof document<"u"?document:null}/**
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
 */function _a(n){return new cl(n,!0)}/**
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
 */class ya{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ai=t,this.timerId=e,this.Bo=r,this.ko=i,this.qo=o,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class Jl{constructor(t,e,r,i,o,u,c,d){this.ai=t,this.jo=r,this.Ho=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new ya(t,e)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(t){this.a_(),this.stream.send(t)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(t,e){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,t!==4?this.e_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Nt(e.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Vo(e)}c_(){}auth(){this.state=1;const t=this.l_(this.Jo),e=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===e&&this.h_(r,i)},r=>{t(()=>{const i=new N(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(t,e){const r=this.l_(this.Jo);this.stream=this.I_(t,e),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}l_(t){return e=>{this.ai.enqueueAndForget(()=>this.Jo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zl extends Jl{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}I_(t,e){return this.connection.Lo("Listen",t,e)}T_(t){return this.onNext(t)}onNext(t){this.e_.reset();const e=gl(this.serializer,t),r=function(o){if(!("targetChange"in o))return M.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?M.min():u.readTime?de(u.readTime):M.min()}(t);return this.listener.E_(e,r)}d_(t){const e={};e.database=eo(this.serializer),e.addTarget=function(o,u){let c;const d=u.target;if(c=zr(d)?{documents:ml(o,d)}:{query:_l(o,d)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=dl(o,u.resumeToken);const f=Qr(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(M.min())>0){c.readTime=ll(o,u.snapshotVersion.toTimestamp());const f=Qr(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=El(this.serializer,t);r&&(e.labels=r),this.__(e)}A_(t){const e={};e.database=eo(this.serializer),e.removeTarget=t,this.__(e)}}/**
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
 */class td extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(t,e,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Fo(t,Wr(e,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(b.UNKNOWN,o.toString())})}No(t,e,r,i,o){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.No(t,Wr(e,r),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(b.UNKNOWN,u.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class ed{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(t){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.M_(),this.w_=0,t==="Online"&&(this.b_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}v_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Nt(e),this.b_=!1):D("OnlineStateTracker",e)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class nd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=o,this.B_.oo(u=>{r.enqueueAndForget(async()=>{un(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=U(d);f.N_.add(4),await an(f),f.k_.set("Unknown"),f.N_.delete(4),await er(f)}(this))})}),this.k_=new ed(r,i)}}async function er(n){if(un(n))for(const t of n.L_)await t(!0)}async function an(n){for(const t of n.L_)await t(!1)}function Ea(n,t){const e=U(n);e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),ys(e)?_s(e):we(e).n_()&&ms(e,t))}function gs(n,t){const e=U(n),r=we(e);e.O_.delete(t),r.n_()&&va(e,t),e.O_.size===0&&(r.n_()?r.s_():un(e)&&e.k_.set("Unknown"))}function ms(n,t){if(n.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}we(n).d_(t)}function va(n,t){n.q_.xe(t),we(n).A_(t)}function _s(n){n.q_=new ol({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.O_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),we(n).start(),n.k_.D_()}function ys(n){return un(n)&&!we(n).t_()&&n.O_.size>0}function un(n){return U(n).N_.size===0}function Ta(n){n.q_=void 0}async function rd(n){n.k_.set("Online")}async function sd(n){n.O_.forEach((t,e)=>{ms(n,t)})}async function id(n,t){Ta(n),ys(n)?(n.k_.F_(t),_s(n)):n.k_.set("Unknown")}async function od(n,t,e){if(n.k_.set("Online"),t instanceof ua&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.O_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.O_.delete(c),i.q_.removeTarget(c))}(n,t)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await io(n,r)}else if(t instanceof xn?n.q_.Ke(t):t instanceof aa?n.q_.He(t):n.q_.We(t),!e.isEqual(M.min()))try{const r=await ma(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.q_.rt(u);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.O_.get(f);_&&o.O_.set(f,_.withResumeToken(d.resumeToken,u))}}),c.targetMismatches.forEach((d,f)=>{const _=o.O_.get(d);if(!_)return;o.O_.set(d,_.withResumeToken(ut.EMPTY_BYTE_STRING,_.snapshotVersion)),va(o,d);const w=new Ut(_.target,d,f,_.sequenceNumber);ms(o,w)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await io(n,r)}}async function io(n,t,e){if(!sn(t))throw t;n.N_.add(1),await an(n),n.k_.set("Offline"),e||(e=()=>ma(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.N_.delete(1),await er(n)})}async function oo(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=un(e);e.N_.add(3),await an(e),r&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await er(e)}async function ad(n,t){const e=U(n);t?(e.N_.delete(2),await er(e)):t||(e.N_.add(2),await an(e),e.k_.set("Unknown"))}function we(n){return n.Q_||(n.Q_=function(e,r,i){const o=U(e);return o.y_(),new Zl(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{To:rd.bind(null,n),Ao:sd.bind(null,n),Vo:id.bind(null,n),E_:od.bind(null,n)}),n.L_.push(async t=>{t?(n.Q_.i_(),ys(n)?_s(n):n.k_.set("Unknown")):(await n.Q_.stop(),Ta(n))})),n.Q_}/**
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
 */class Es{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,c=new Es(t,e,u,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ia(n,t){if(Nt("AsyncQueue",`${t}: ${n}`),sn(n))return new N(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class fe{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=Ge(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new fe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new fe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ao{constructor(){this.U_=new Z(O.comparator)}track(t){const e=t.doc.key,r=this.U_.get(e);r?t.type!==0&&r.type===3?this.U_=this.U_.insert(e,t):t.type===3&&r.type!==1?this.U_=this.U_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.U_=this.U_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.U_=this.U_.remove(e):t.type===1&&r.type===2?this.U_=this.U_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):L():this.U_=this.U_.insert(e,t)}W_(){const t=[];return this.U_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Te{constructor(t,e,r,i,o,u,c,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Te(t,e,fe.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class ud{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(t=>t.H_())}}class hd{constructor(){this.queries=uo(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(e,r){const i=U(e),o=i.queries;i.queries=uo(),o.forEach((u,c)=>{for(const d of c.z_)d.onError(r)})})(this,new N(b.ABORTED,"Firestore shutting down"))}}function uo(){return new Ae(n=>Xo(n),Yn)}async function cd(n,t){const e=U(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.j_()&&t.H_()&&(r=2):(o=new ud,r=t.H_()?0:1);try{switch(r){case 0:o.G_=await e.onListen(i,!0);break;case 1:o.G_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Ia(u,`Initialization of query '${he(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.z_.push(t),t.Y_(e.onlineState),o.G_&&t.Z_(o.G_)&&vs(e)}async function ld(n,t){const e=U(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.z_.indexOf(t);u>=0&&(o.z_.splice(u,1),o.z_.length===0?i=t.H_()?0:1:!o.j_()&&t.H_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function dd(n,t){const e=U(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.z_)c.Z_(i)&&(r=!0);u.G_=i}}r&&vs(e)}function fd(n,t,e){const r=U(n),i=r.queries.get(t);if(i)for(const o of i.z_)o.onError(e);r.queries.delete(t)}function vs(n){n.J_.forEach(t=>{t.next()})}var Xr,ho;(ho=Xr||(Xr={})).X_="default",ho.Cache="cache";class pd{constructor(t,e,r){this.query=t,this.ea=e,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Te(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ta?this.ra(t)&&(this.ea.next(t),e=!0):this.ia(t,this.onlineState)&&(this.sa(t),e=!0),this.na=t,e}onError(t){this.ea.error(t)}Y_(t){this.onlineState=t;let e=!1;return this.na&&!this.ta&&this.ia(this.na,t)&&(this.sa(this.na),e=!0),e}ia(t,e){if(!t.fromCache||!this.H_())return!0;const r=e!=="Offline";return(!this.options.oa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ra(t){if(t.docChanges.length>0)return!0;const e=this.na&&this.na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}sa(t){t=Te.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ta=!0,this.ea.next(t)}H_(){return this.options.source!==Xr.Cache}}/**
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
 */class Aa{constructor(t){this.key=t}}class wa{constructor(t){this.key=t}}class gd{constructor(t,e){this.query=t,this.Ia=e,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=q(),this.mutatedKeys=q(),this.da=Jo(t),this.Aa=new fe(this.da)}get Ra(){return this.Ia}Va(t,e){const r=e?e.ma:new ao,i=e?e.Aa:this.Aa;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,w)=>{const R=i.get(_),S=Xn(this.query,w)?w:null,k=!!R&&this.mutatedKeys.has(R.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;R&&S?R.data.isEqual(S.data)?k!==x&&(r.track({type:3,doc:S}),V=!0):this.fa(R,S)||(r.track({type:2,doc:S}),V=!0,(d&&this.da(S,d)>0||f&&this.da(S,f)<0)&&(c=!0)):!R&&S?(r.track({type:0,doc:S}),V=!0):R&&!S&&(r.track({type:1,doc:R}),V=!0,(d||f)&&(c=!0)),V&&(S?(u=u.add(S),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Aa:u,ma:r,ts:c,mutatedKeys:o}}fa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Aa;this.Aa=t.Aa,this.mutatedKeys=t.mutatedKeys;const u=t.ma.W_();u.sort((_,w)=>function(S,k){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(S)-x(k)}(_.type,w.type)||this.da(_.doc,w.doc)),this.ga(r),i=i!=null&&i;const c=e&&!i?this.pa():[],d=this.Ea.size===0&&this.current&&!i?1:0,f=d!==this.Ta;return this.Ta=d,u.length!==0||f?{snapshot:new Te(this.query,t.Aa,o,u,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:c}:{ya:c}}Y_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new ao,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(t){return!this.Ia.has(t)&&!!this.Aa.has(t)&&!this.Aa.get(t).hasLocalMutations}ga(t){t&&(t.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=t.current)}pa(){if(!this.current)return[];const t=this.Ea;this.Ea=q(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const e=[];return t.forEach(r=>{this.Ea.has(r)||e.push(new wa(r))}),this.Ea.forEach(r=>{t.has(r)||e.push(new Aa(r))}),e}Sa(t){this.Ia=t.Is,this.Ea=q();const e=this.Va(t.documents);return this.applyChanges(e,!0)}ba(){return Te.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class md{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class _d{constructor(t){this.key=t,this.Da=!1}}class yd{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.va=new Ae(c=>Xo(c),Yn),this.Fa=new Map,this.Ma=new Set,this.xa=new Z(O.comparator),this.Oa=new Map,this.Na=new ds,this.La={},this.Ba=new Map,this.ka=ve.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function Ed(n,t,e=!0){const r=ba(n);let i;const o=r.va.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ba()):i=await Ra(r,t,e,!0),i}async function vd(n,t){const e=ba(n);await Ra(e,t,!0,!1)}async function Ra(n,t,e,r){const i=await Hl(n.localStore,Rt(t)),o=i.targetId,u=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await Td(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&Ea(n.remoteStore,i),c}async function Td(n,t,e,r,i){n.Qa=(w,R,S)=>async function(x,V,K,W){let H=V.view.Va(K);H.ts&&(H=await no(x.localStore,V.query,!1).then(({documents:v})=>V.view.Va(v,H)));const j=W&&W.targetChanges.get(V.targetId),Et=W&&W.targetMismatches.get(V.targetId)!=null,J=V.view.applyChanges(H,x.isPrimaryClient,j,Et);return lo(x,V.targetId,J.ya),J.snapshot}(n,w,R,S);const o=await no(n.localStore,t,!0),u=new gd(t,o.Is),c=u.Va(o.documents),d=on.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(c,n.isPrimaryClient,d);lo(n,e,f.ya);const _=new md(t,e,u);return n.va.set(t,_),n.Fa.has(e)?n.Fa.get(e).push(t):n.Fa.set(e,[t]),f.snapshot}async function Id(n,t,e){const r=U(n),i=r.va.get(t),o=r.Fa.get(i.targetId);if(o.length>1)return r.Fa.set(i.targetId,o.filter(u=>!Yn(u,t))),void r.va.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yr(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&gs(r.remoteStore,i.targetId),Jr(r,i.targetId)}).catch(ns)):(Jr(r,i.targetId),await Yr(r.localStore,i.targetId,!0))}async function Ad(n,t){const e=U(n),r=e.va.get(t),i=e.Fa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),gs(e.remoteStore,r.targetId))}async function Ca(n,t){const e=U(n);try{const r=await jl(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Oa.get(o);u&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Da=!0:i.modifiedDocuments.size>0?nt(u.Da):i.removedDocuments.size>0&&(nt(u.Da),u.Da=!1))}),await Sa(e,r,t)}catch(r){await ns(r)}}function co(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.va.forEach((o,u)=>{const c=u.view.Y_(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const d=U(u);d.onlineState=c;let f=!1;d.queries.forEach((_,w)=>{for(const R of w.z_)R.Y_(c)&&(f=!0)}),f&&vs(d)}(r.eventManager,t),i.length&&r.Ca.E_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function wd(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Oa.get(t),o=i&&i.key;if(o){let u=new Z(O.comparator);u=u.insert(o,gt.newNoDocument(o,M.min()));const c=q().add(o),d=new tr(M.min(),new Map,new Z(z),u,c);await Ca(r,d),r.xa=r.xa.remove(o),r.Oa.delete(t),Ts(r)}else await Yr(r.localStore,t,!1).then(()=>Jr(r,t,e)).catch(ns)}function Jr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Fa.get(t))n.va.delete(r),e&&n.Ca.Ka(r,e);n.Fa.delete(t),n.isPrimaryClient&&n.Na.mr(t).forEach(r=>{n.Na.containsKey(r)||Pa(n,r)})}function Pa(n,t){n.Ma.delete(t.path.canonicalString());const e=n.xa.get(t);e!==null&&(gs(n.remoteStore,e),n.xa=n.xa.remove(t),n.Oa.delete(e),Ts(n))}function lo(n,t,e){for(const r of e)r instanceof Aa?(n.Na.addReference(r.key,t),Rd(n,r)):r instanceof wa?(D("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,t),n.Na.containsKey(r.key)||Pa(n,r.key)):L()}function Rd(n,t){const e=t.key,r=e.path.canonicalString();n.xa.get(e)||n.Ma.has(r)||(D("SyncEngine","New document in limbo: "+e),n.Ma.add(r),Ts(n))}function Ts(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const t=n.Ma.values().next().value;n.Ma.delete(t);const e=new O(X.fromString(t)),r=n.ka.next();n.Oa.set(r,new _d(e)),n.xa=n.xa.insert(e,r),Ea(n.remoteStore,new Ut(Rt(Yo(e.path)),r,"TargetPurposeLimboResolution",rs.oe))}}async function Sa(n,t,e){const r=U(n),i=[],o=[],u=[];r.va.isEmpty()||(r.va.forEach((c,d)=>{u.push(r.Qa(d,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){i.push(f);const w=ps.Ui(d.targetId,f);o.push(w)}}))}),await Promise.all(u),r.Ca.E_(i),await async function(d,f){const _=U(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>C.forEach(f,R=>C.forEach(R.Ki,S=>_.persistence.referenceDelegate.addReference(w,R.targetId,S)).next(()=>C.forEach(R.$i,S=>_.persistence.referenceDelegate.removeReference(w,R.targetId,S)))))}catch(w){if(!sn(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const S=_.ss.get(R),k=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(k);_.ss=_.ss.insert(R,x)}}}(r.localStore,o))}async function Cd(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await ga(e.localStore,t);e.currentUser=t,function(o,u){o.Ba.forEach(c=>{c.forEach(d=>{d.reject(new N(b.CANCELLED,u))})}),o.Ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Sa(e,r.ls)}}function Pd(n,t){const e=U(n),r=e.Oa.get(t);if(r&&r.Da)return q().add(r.key);{let i=q();const o=e.Fa.get(t);if(!o)return i;for(const u of o){const c=e.va.get(u);i=i.unionWith(c.view.Ra)}return i}}function ba(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ca.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wd.bind(null,t),t.Ca.E_=dd.bind(null,t.eventManager),t.Ca.Ka=fd.bind(null,t.eventManager),t}class fo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=_a(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return $l(this.persistence,new Bl,t.initialUser,this.serializer)}createPersistence(t){return new Ll(fs.Yr,this.serializer)}createSharedClientState(t){return new Kl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>co(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cd.bind(null,this.syncEngine),await ad(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new hd}()}createDatastore(t){const e=_a(t.databaseInfo.databaseId),r=function(o){return new Xl(o)}(t.databaseInfo);return function(o,u,c,d){return new td(o,u,c,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,u,c){return new nd(r,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>co(this.syncEngine,e,0),function(){return so.D()?new so:new Ql}())}createSyncEngine(t,e){return function(i,o,u,c,d,f,_){const w=new yd(i,o,u,c,d,f);return _&&(w.qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=U(i);D("RemoteStore","RemoteStore shutting down."),o.N_.add(5),await an(o),o.B_.shutdown(),o.k_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 */class bd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Wa(this.observer.next,t)}error(t){this.observer.error?this.Wa(this.observer.error,t):Nt("Uncaught Error in snapshot listener:",t.toString())}Ga(){this.muted=!0}Wa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Vd{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=gc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ia(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Or(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ga(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function po(n,t){n.asyncQueue.verifyOperationInProgress();const e=await kd(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>oo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>oo(t.remoteStore,i)),n._onlineComponents=t}function Dd(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function kd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Or(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Dd(e))throw e;me("Error using user provided cache. Falling back to memory cache: "+e),await Or(n,new fo)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Or(n,new fo);return n._offlineComponents}async function Nd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await po(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await po(n,new Sd))),n._onlineComponents}async function Od(n){const t=await Nd(n),e=t.eventManager;return e.onListen=Ed.bind(null,t.syncEngine),e.onUnlisten=Id.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ad.bind(null,t.syncEngine),e}function xd(n,t,e={}){const r=new Jt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,d,f){const _=new bd({next:R=>{u.enqueueAndForget(()=>ld(o,w)),R.fromCache&&d.source==="server"?f.reject(new N(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new pd(c,_,{includeMetadataChanges:!0,oa:!0});return cd(o,w)}(await Od(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Va(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const go=new Map;/**
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
 */function Md(n,t,e){if(!e)throw new N(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ld(n,t,e,r){if(t===!0&&r===!0)throw new N(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function mo(n){if(O.isDocumentKey(n))throw new N(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function Zr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Fd(n);throw new N(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class _o{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ld("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Va((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Is{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _o({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _o(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ac;switch(r.type){case"firstParty":return new lc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=go.get(e);r&&(D("ComponentProvider","Removing Datastore"),go.delete(e),r.terminate())}(this),Promise.resolve()}}function Ud(n,t,e,r={}){var i;const o=(n=Zr(n,Is))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=pt.MOCK_USER;else{c=Ao(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new pt(f)}n._authCredentials=new uc(new $o(c,d))}}/**
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
 */class nr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new nr(this.firestore,t,this._query)}}class Re{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Re(this.firestore,t,this._key)}}class pe extends nr{constructor(t,e,r){super(t,e,Yo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Re(this.firestore,null,new O(t))}withConverter(t){return new pe(this.firestore,t,this._path)}}function ff(n,t,...e){if(n=Ro(n),Md("collection","path",t),n instanceof Is){const r=X.fromString(t,...e);return mo(r),new pe(n,null,r)}{if(!(n instanceof Re||n instanceof pe))throw new N(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return mo(r),new pe(n.firestore,null,r)}}/**
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
 */class Bd{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new ya(this,"async_queue_retry"),this.Tu=()=>{const e=Nr();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=Nr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=Nr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new Jt;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!sn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(r=>{this.lu=r,this.hu=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=e,e}enqueueAfterDelay(t,e,r){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const i=Es.createAndSchedule(this,t,e,r,o=>this.Ru(o));return this.cu.push(i),i}Eu(){this.lu&&L()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}}class Da extends Is{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Bd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ka(this),this._firestoreClient.terminate()}}function pf(n,t){const e=typeof n=="object"?n:bo(),r=typeof n=="string"?n:"(default)",i=Po(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=To("firestore");o&&Ud(i,...o)}return i}function qd(n){return n._firestoreClient||ka(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ka(n){var t,e,r;const i=n._freezeSettings(),o=function(c,d,f,_){return new Rc(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Va(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Vd(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hn(ut.fromBase64String(t))}catch(e){throw new N(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Hn(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Na{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class $d{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}const jd=new RegExp("[~\\*/\\[\\]]");function zd(n,t,e){if(t.search(jd)>=0)throw yo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Na(...t.split("."))._internalPath}catch{throw yo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function yo(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new N(b.INVALID_ARGUMENT,o+n+u)}/**
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
 */class Oa{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Hd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(xa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Hd extends Oa{data(){return super.data()}}function xa(n,t){return typeof t=="string"?zd(n,t):t instanceof Na?t._internalPath:t._delegate._internalPath}/**
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
 */function Gd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kd{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Qn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new $d(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=is(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(en(t));default:return null}}convertTimestamp(t){const e=$t(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);nt(pa(r));const i=new nn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Nt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class kn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qd extends Oa{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(xa("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Mn extends Qd{data(t={}){return super.data(t)}}class Wd{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new kn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Mn(this._firestore,this._userDataWriter,r.key,r,new kn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const d=new Mn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new kn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new Mn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new kn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:Yd(c.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Yd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Xd extends Kd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Re(this.firestore,null,e)}}function gf(n){n=Zr(n,nr);const t=Zr(n.firestore,Da),e=qd(t),r=new Xd(t);return Gd(n._query),xd(e,n._query).then(i=>new Wd(t,r,n,i))}(function(t,e=!0){(function(i){Ie=i})(So),Je(new ge("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new Da(new hc(r.getProvider("auth-internal")),new fc(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nn(f.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Yt(Mi,"4.6.5",t),Yt(Mi,"4.6.5","esm2017")})();export{ge as C,wo as E,se as F,Co as L,So as S,Je as _,nf as a,Po as b,Cu as c,bo as d,ef as e,uf as f,Zd as g,Ro as h,tf as i,af as j,xr as k,B as l,ts as m,Tu as n,rf as o,sf as p,of as q,Yt as r,Ah as s,hf as t,pf as u,ff as v,gf as w};
