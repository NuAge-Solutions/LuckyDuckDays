OJ.importJs("oj.data.Object");OJ.importJs("oj.dom.Element");"use strict";OJ.extendClass(OjObject,"NwProperty",{_props_:{"default":null,defaultValue:null,label:null,max:1,min:0,readCallback:null,readPermission:"*",required:false,writeCallback:null,writePermission:"*"},_get_properties:{name:null},_constructor:function(){this._super("NwDataProperty","_constructor",[]);if(arguments.length){var a,c,b=arguments[0];for(a in b){c="set"+a.ucFirst();if(isFunction(this[c])){this[c](b[a])}}}},_exportValue:function(b,a,c){return b},_formatter:function(e,f){var d=arguments.length,a=d>2?arguments[2]:null,h=d>3?arguments[3]:NwData.DEFAULT;if(this._max!=1){var g=isArray(a)?a.length:0;if(!isArray(f)){return[e.call(this,f,g?a[0]:null,h)]}var c=[];for(var b=f.length;b--;){c.unshift(e.call(this,f[b],b<g?a[b]:null,h))}return c}return e.call(this,f,a,h)},_importValue:function(b,a,c){return b},_valueIsValid:function(a){return true},exportValue:function(a,b){return this._formatter(this._exportValue,a,null,b)},importValue:function(b,a,c){return this._formatter(this._importValue,b,a,c)},makeInput:function(){var a;if(arguments.length&&isObjective(a=arguments[0])){}else{OJ.importJs("oj.form.TextInput");a=new OjTextInput(this._name,this._label,this._defaultValue)}a.setDefault(this._default);a.setRequired(this._required);return a},setup:function(d,c,b){this._name=c;var a="get"+b,e="set"+b;if(!d[a]){d[a]=function(){return this._static.getProperty(c).value(this,c)}}if(!d[e]){d[e]=function(f){this._static.getProperty(c).value(this,c,f)}}},userCanRead:function(a,b){return this._readPermission&&a.hasPermission(this._readPermission)&&(!this._readCallback||this._readCallback(a,b,this))},userCanWrite:function(a,b){return this._writePermission&&a.hasPermission(this._writePermission)&&(!this._writeCallback||this._writeCallback(a,b,this))},value:function(c,b){var a=arguments;return c.property.apply(c,Array.array(a).slice(1))},valueIsValid:function(c){if(this._max==1){return this._valueIsValid(c)&&(!this._min||isSet(c))}if(!isArray(c)){return false}var b=0;for(var a=c.length;a--;){if(!this._valueIsValid(c[a])){return false}b++}return !this._min||!(b<this._min)},setMax:function(a){this._max=Math.max(a,0)},setMin:function(a){this._min=Math.max(a,0)}});OjStyleElement.registerComponentTag("datainput",function(b){var a=b.getAttribute("source").split(".");b.removeAttribute("source");return OJ.stringToClass(a[0]).DEFINITION[a[1]].makeInput(b)});OjStyleElement.registerComponentTag("datainputs",function(e){var d=e.getAttribute("source"),a=OjStyleElement(),c=OJ.stringToClass(d).DEFINITION,b;e.removeAttribute("source");for(b in c){a.addChild(c[b].makeInput())}return a});