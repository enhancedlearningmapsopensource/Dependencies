!function(e){var t="object"==typeof exports,n="undefined"==typeof JS?jellybean("./core"):JS;t&&(exports.JS=exports),e(n,t?exports:n)}(function(e,t){"use strict";var n=new e.Module("Proxy",{extend:{Virtual:new e.Class({initialize:function(t){var n,r,s=function(){},i=new e.Class,o={};s.prototype=t.prototype;for(n in t.prototype)r=t.prototype[n],"function"==typeof r&&r!==t&&(r=this.klass.forward(n)),o[n]=r;return i.include({initialize:function(){var e=arguments,n=null;this.__getSubject__=function(){return n=new s,t.apply(n,e),(this.__getSubject__=function(){return n})()}},klass:t,constructor:t},{_resolve:!1}),i.include(new e.Module(o),{_resolve:!1}),i.include(this.klass.InstanceMethods),i},extend:{forward:function(e){return function(){var t=this.__getSubject__();return t[e].apply(t,arguments)}},InstanceMethods:new e.Module({extend:function(e){this.__getSubject__().extend(e);var t,r;for(t in e)r=e[t],"function"==typeof r&&(r=n.Virtual.forward(t)),this[t]=r}})}})}});t.Proxy=n});
//@ sourceMappingURL=proxy.js.map