function _(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function v(){return Object.create(null)}function m(t){t.forEach(q)}function z(t){return typeof t=="function"}function H(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function ot(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function ut(t,n,e,i,c,s){if(c){const o=B(n,e,i,s);t.p(o,c)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ft(t){return t&&z(t.destroy)?t.destroy:_}let g=!1;function P(){g=!0}function G(){g=!1}function J(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:J(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<s.length&&o[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[r],a)}}function W(t,n){if(g){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){g&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function dt(){return E(" ")}function _t(){return E("")}function ht(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function U(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,c=!1){V(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function X(t,n,e,i){return L(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function pt(t,n,e){return X(t,n,e,R)}function Y(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>E(n),!0)}function yt(t){return Y(t," ")}function gt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function xt(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}let x;function b(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function bt(t){k().$$.on_mount.push(t)}function $t(t){k().$$.after_update.push(t)}function wt(t,n){k().$$.context.set(t,n)}const p=[],T=[],$=[],O=[],Z=Promise.resolve();let j=!1;function tt(){j||(j=!0,Z.then(D))}function S(t){$.push(t)}let A=!1;const N=new Set;function D(){if(!A){A=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];b(n),nt(n.$$)}for(b(null),p.length=0;T.length;)T.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];N.has(n)||(N.add(n),n())}$.length=0}while(p.length);for(;O.length;)O.pop()();j=!1,A=!1,N.clear()}}function nt(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const w=new Set;let d;function Et(){d={r:0,c:[],p:d}}function kt(){d.r||m(d.c),d=d.p}function et(t,n){t&&t.i&&(w.delete(t),t.i(n))}function jt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function St(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[s]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function At(t){return typeof t=="object"&&t!==null?t:{}}function Nt(t){t&&t.c()}function Ct(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||S(()=>{const r=s.map(q).filter(z);o?o.push(...r):m(r),t.$$.on_mount=[]}),l.forEach(S)}function rt(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(p.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Mt(t,n,e,i,c,s,o,l=[-1]){const r=x;b(t);const u=t.$$={fragment:null,ctx:null,props:s,update:_,not_equal:c,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:v(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...C)=>{const M=C.length?C[0]:y;return u.ctx&&c(u.ctx[f],u.ctx[f]=M)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](M),a&&ct(t,f)),y}):[],u.update(),a=!0,m(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){P();const f=U(n.target);u.fragment&&u.fragment.l(f),f.forEach(Q)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),G(),D()}b(r)}class qt{$destroy(){rt(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function vt(t,n=_){let e;const i=new Set;function c(l){if(H(t,l)&&(t=l,e)){const r=!h.length;for(const u of i)u[1](),h.push(u,t);if(r){for(let u=0;u<h.length;u+=2)h[u][0](h[u+1]);h.length=0}}}function s(l){c(l(t))}function o(l,r=_){const u=[l,r];return i.add(u),i.size===1&&(e=n(c)||_),l(t),()=>{i.delete(u),i.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{bt as A,F as B,vt as C,ot as D,xt as E,W as F,ht as G,ft as H,ut as I,st as J,lt as K,m as L,_ as M,qt as S,U as a,mt as b,pt as c,Q as d,R as e,at as f,Y as g,gt as h,Mt as i,Nt as j,dt as k,_t as l,Ct as m,yt as n,it as o,St as p,At as q,Et as r,H as s,E as t,jt as u,rt as v,kt as w,et as x,wt as y,$t as z};
