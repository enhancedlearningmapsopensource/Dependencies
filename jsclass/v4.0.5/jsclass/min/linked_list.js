!function(e){var t="object"==typeof exports,n="undefined"==typeof JS?jellybean("./core"):JS,r=n.Enumerable||jellybean("./enumerable").Enumerable;t&&(exports.JS=exports),e(n,r,t?exports:n)}(function(e,t,n){"use strict";var r=new e.Class("LinkedList",{include:t||{},initialize:function(e,t){if(this.length=0,this.first=this.last=null,e)for(var n=0,r=e.length;r>n;n++)this.push(t?new this.klass.Node(e[n]):e[n])},forEach:function(e,n){if(!e)return this.enumFor("forEach");e=t.toFn(e);var r,s,i,o=this.first;for(s=0,i=this.length;i>s&&(r=o.next,e.call(n,o,s),o!==this.last);s++)o=r;return this},at:function(e){if(0>e||e>=this.length)return void 0;for(var t=this.first;e--;)t=t.next;return t},pop:function(){return this.length?this.remove(this.last):void 0},shift:function(){return this.length?this.remove(this.first):void 0},insertAfter:function(){},push:function(){},remove:function(){},extend:{Node:new e.Class({initialize:function(e){this.data=e,this.prev=this.next=this.list=null}})}});r.Doubly=new e.Class("LinkedList.Doubly",r,{insertAt:function(e,t){0>e||e>=this.length||this.insertBefore(this.at(e),t)},unshift:function(e){this.length>0?this.insertBefore(this.first,e):this.push(e)},insertBefore:function(){}}),r.insertTemplate=function(e,t,n){return function(r,s){r.list===this&&(s[e]=r,s[t]=r[t],r[t]=r[t][e]=s,s[e]===this[n]&&(this[n]=s),s.list=this,this.length++)}},r.Doubly.Circular=new e.Class("LinkedList.Doubly.Circular",r.Doubly,{insertAfter:r.insertTemplate("prev","next","last"),insertBefore:r.insertTemplate("next","prev","first"),push:function(e){return this.length?this.insertAfter(this.last,e):(this.first=this.last=e.prev=e.next=e,e.list=this,void(this.length=1))},remove:function(e){return e.list!==this||0===this.length?null:(this.length>1?(e.prev.next=e.next,e.next.prev=e.prev,e===this.first&&(this.first=e.next),e===this.last&&(this.last=e.prev)):this.first=this.last=null,e.prev=e.next=e.list=null,this.length--,e)}}),n.LinkedList=r});
//@ sourceMappingURL=linked_list.js.map