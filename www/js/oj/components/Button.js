OJ.importJs("oj.components.Link");OJ.importCss("oj.components.Button");"use strict";OJ.extendComponent(OjLink,"OjButton",{_constructor:function(){this._super("OjButton","_constructor",[]);var a=arguments.length;if(a){this.setText(arguments[0]);if(a>1){this.setIcon(arguments[1])}}this._proxy.onclick=this._onDomMouseEvent;this.setHorzAlign(OjStyleElement.CENTER);this.setVertAlign(OjStyleElement.MIDDLE)},removeEventListener:function(b,a,c){this._super("OjButton","removeEventListener",arguments);this._proxy.onclick=this._onDomMouseEvent},getLabel:function(){return this.getText()},setLabel:function(a){this.setText(a)},setIsActive:function(a){this._super("OjButton","setIsActive",arguments);if(this._icon){this._icon.setIsActive(a)}}},{_TAGS:["button"]});