require.config({
    paths:{
        "jsclassroot": "3rdParty/jsclass/v4.0.5/jsclass/min"
    }
})

define({
    load: function(name, req, onload, config){
        var JSCLASS_PATH = name + "v4.0.5/jsclass/min/";

        'use strict';
        JSCLASS_PATH = name + "v4.0.5/jsclass/min/";
        JS.jellybean('JS.Hash', 'JS.Observable', 'JS.Set', function (JsHashLoader, JsObservable, JsSetLoader) {
            onload({
                Hash: JsHashLoader,
                Set: JsSetLoader,
            });
        });
    }
})
