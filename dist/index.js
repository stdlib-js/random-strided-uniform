"use strict";var y=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var d=y(function(I,m){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-uniform/dist');function O(n,e,a,t,f,i,c,u){var r,v,s;if(r={arity:0,fcn:null},c){if(e===0&&f===0)return g(n)?v=n.get(a):v=n[a],g(t)?s=t.get(i):s=t[i],r.fcn=q.factory(v,s,u),r;r.fcn=q.factory(u)}else r.fcn=q;return r.arity+=2,r}m.exports=O
});var h=y(function(J,p){
var R=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),w=d();function z(n,e,a,t,f,i,c,u){var r=w(e,a,0,t,f,0,arguments.length>7,u);return r.arity===0?(R([i],[n],[c],r.fcn),i):(j([e,t,i],[n],[a,f,c],r.fcn),i)}p.exports=z
});var k=y(function(K,A){
var B=require('@stdlib/strided-base-nullary/dist').ndarray,C=require('@stdlib/strided-base-binary/dist').ndarray,D=d();function E(n,e,a,t,f,i,c,u,r,v,s){var l=D(e,a,t,f,i,c,arguments.length>10,s);return l.arity===0?(B([u],[n],[r],[v],l.fcn),u):(C([e,f,u],[n],[a,i,r],[t,c,v],l.fcn),u)}A.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=h(),G=k();F(x,"ndarray",G);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
