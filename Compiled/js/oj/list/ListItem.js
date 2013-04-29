OJ.importJs("oj.components.ItemRenderer");OJ.importJs("oj.media.Image");"use strict";OJ.extendComponent(OjItemRenderer,"OjListItem",{_props_:{showAccessory:false,showIcon:false},accessory:null,content:null,icon:null,_constructor:function(){this._super("OjListItem","_constructor",[]);this.addChild(this.accessory=new OjStyleElement('<div class="-accessory valign-middle"></div>'));this.addChild(this.icon=new OjImage());this.addChild(this.content=new OjStyleElement('<div class="-content valign-middle"></div>'));this.icon.addClasses("-icon");if(arguments.length){this.setData(arguments[0])}},_destructor:function(){if(this._data&&this._data.is&&this._data.is("OjActionable")){this._data.removeEventListener(OjEvent.CHANGE,this,"_onDataChange")}this._list=this._data=null;return this._super("OjListItem","_destructor",arguments)},_redrawAccessory:function(){if(this._showAccessory){this.removeClasses("no-accessory")}else{this.addClasses("no-accessory")}},_redrawData:function(){this.content.setText(this._data)},_redrawIcon:function(){if(this._showIcon){this.removeClasses("no-icon")}else{this.addClasses("no-icon")}},redraw:function(){if(this._super("OjListItem","redraw",arguments)){this._redrawData();this._redrawAccessory();this._redrawIcon();return true}return false},_onDataChange:function(a){this._redrawData()},setData:function(a){if(this._data&&this._data.is&&this._data.is("OjActionable")){this._data.removeEventListener(OjEvent.CHANGE,this,"_onDataChange")}this._data=a;if(this._data&&this._data.is&&this._data.is("OjActionable")){this._data.addEventListener(OjEvent.CHANGE,this,"_onDataChange")}this.redraw()},setShowAccessory:function(a){if(this._showAccessory==a){return}this._showAccessory=a;this.redraw()},setShowIcon:function(a){if(this._showIcon==a){return}this._showIcon=a;this.redraw()}},{_TAGS:["listitem"]});