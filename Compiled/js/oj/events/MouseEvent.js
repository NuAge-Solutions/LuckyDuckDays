OJ.importJs("oj.events.DomEvent");"use strict";OJ.extendClass(OjDomEvent,"OjMouseEvent",{_get_props_:{pageX:NaN,pageY:NaN},_constructor:function(a){var b=arguments.length;this._super("OjMouseEvent","_constructor",b>3?[].slice.call(arguments,0,3):arguments);if(b>3){this._pageX=arguments[3];if(b>4){this._pageY=arguments[4]}}},clone:function(){var a=this._super("OjMouseEvent","clone",arguments);a._pageX=this._pageX;a._pageY=this._pageY;return a}},{convertDomEvent:function(a){var c;a=OjDomEvent.normalizeDomEvent(a);if(a.type==OjDomEvent.CLICK){c=OjMouseEvent.CLICK}else{if(a.type==OjDomEvent.DOUBLE_CLICK){c=OjMouseEvent.DOUBLE_CLICK}else{if(a.type==OjDomEvent.MOUSE_DOWN){c=OjMouseEvent.DOWN}else{if(a.type==OjDomEvent.MOUSE_MOVE){c=OjMouseEvent.MOVE}else{if(a.type==OjDomEvent.MOUSE_OUT){c=OjMouseEvent.OUT}else{if(a.type==OjDomEvent.MOUSE_OVER){c=OjMouseEvent.OVER}else{if(a.type==OjDomEvent.MOUSE_UP){c=OjMouseEvent.UP}}}}}}}var b=new OjMouseEvent(c,a.bubbles,a.cancelable,a.pageX,a.pageY);b._target=OjElement.element(a.target);b._currentTarget=OjElement.element(a.currentTarget);return b},isMouseEvent:function(a){return a==OjMouseEvent.CLICK||OjMouseEvent.DRAG||a==OjMouseEvent.DOUBLE_CLICK||a==OjMouseEvent.DOWN||a==OjMouseEvent.MIDDLE_CLICK||a==OjMouseEvent.MOVE||a==OjMouseEvent.OVER||a==OjMouseEvent.OUT||a==OjMouseEvent.RIGHT_CLICK||a==OjMouseEvent.RIGHT_UP||a==OjMouseEvent.RIGHT_DOWN||a==OjMouseEvent.UP||a==OjMouseEvent.WHEEL},isMouseDomEvent:function(a){return a==OjDomEvent.CLICK||a==OjDomEvent.DOUBLE_CLICK||a==OjDomEvent.MOUSE_DOWN||a==OjDomEvent.MOUSE_MOVE||a==OjDomEvent.MOUSE_OVER||a==OjDomEvent.MOUSE_OUT||a==OjDomEvent.MOUSE_UP},CLICK:"onClick",DOUBLE_CLICK:"onDoubleClick",DOWN:"onMouseDown",MIDDLE_CLICK:"onMiddleClick",MOVE:"onMouseMove",OVER:"onMouseOver",OUT:"onMouseOut",RIGHT_CLICK:"onRightClick",RIGHT_UP:"onMouseRightUp",RIGHT_DOWN:"onMouseRightDown",UP:"onMouseUp",WHEEL:"onMouseWheel"});