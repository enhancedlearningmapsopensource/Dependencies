!function(e){var t="object"==typeof exports,n="undefined"==typeof JS?jellybean("./core"):JS;t&&(exports.JS=exports),e(n,t?exports:n)}(function(e,t){"use strict";var n=new e.Module("Forwardable",{defineDelegator:function(e,t,n,r){n=n||t,this.define(n,function(){var n=this[e],r=n[t];return"function"==typeof r?r.apply(n,arguments):r},{_resolve:r!==!1})},defineDelegators:function(){for(var t=e.array(arguments),n=t.shift(),r=t.length;r--;)this.defineDelegator(n,t[r],t[r],!1);this.resolve()}});t.Forwardable=n});
//@ sourceMappingURL=forwardable.js.map