OJ.importJs("oj.list.LabelItemRenderer");OJ.importJs("oj.events.MouseEvent");OJ.importCss("oj.form.Option");"use strict";OJ.extendClass(OjItemRenderer,"OjOption",{_props_:{dataRenderer:null,isSelected:false},_selector:null,_template:"oj.form.Option",_constructor:function(){var a=arguments,c=a.length,d=OjLabelItemRenderer;if(c>1){var b=a[1];if(isString(b)||b.is("OjItemRenderer")){d=b;a[1]=null}}this._super("OjOption","_constructor",arguments);if(!this._selector){this.setDataRenderer(d);this.addEventListener(OjMouseEvent.CLICK,this,"_onClick")}},_destructor:function(){this._selector=this._dataRenderer=null;return this._super("OjOption","_destructor",arguments)},_processDomSourceChild:function(a,b){if(!isEmpty(a.nodeValue)){this.setData((this._data?this._data:"")+a.nodeValue);return null}return this._super("OjOption","_processDomSourceChild",arguments)},_redrawData:function(){if(this.option&&this._super("OjOption","_redrawData",arguments)){this.option.setData(this._data);return true}return false},_onClick:function(a){this.setIsSelected(!this.getIsSelected())},setDataRenderer:function(a){if(isString(a)){a=OJ.stringToClass(a)}if(this._dataRenderer==a){return}this._unset("option");this._dataRenderer=a;this.addElm(this.option=new a(this._group,this._data))},setGroup:function(b){if(this._group==b){return}this._super("OjOption","setGroup",arguments);var a;if(this._group&&(a=this._group.getOwner())&&a.is("OjSelector")){this._selector=a;this.setDataRenderer(a.getItemRenderer());this.removeEventListener(OjMouseEvent.CLICK,this,"_onClick")}else{this._selector=null;this.setDataRenderer(OjLabelItemRenderer);this.addEventListener(OjMouseEvent.CLICK,this,"_onClick")}},setIsSelected:function(a){if(this._isSelected==a){return}if(this._isSelected=a){this.addClasses("selected");this.input.dom().checked=true}else{this.removeClasses("selected");this.input.dom().checked=false}this.dispatchEvent(new OjEvent(OjEvent.CHANGE))}});