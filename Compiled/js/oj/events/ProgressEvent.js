OJ.importJs("oj.events.Event");"use strict";OJ.extendClass(OjEvent,"OjProgressEvent",{_get_props_:{progress:0},_constructor:function(c){var b,a=b=false,d=arguments.length;if(d>1){this._progress=arguments[1];if(d>2){a=arguments[2];if(d>3){b=arguments[3]}}}this._super("OjProgressEvent","_constructor",[c,a,b])}},{PROGRESS:"onProgress"});