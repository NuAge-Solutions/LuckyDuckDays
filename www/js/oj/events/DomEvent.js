OJ.importJs("oj.events.Event");"use strict";OJ.extendClass(OjEvent,"OjDomEvent",{},{normalizeDomEvent:function(a){if(!a){a=window.event}a=OJ.merge({},a);if(a.clientX||a.clientY){a.pageX=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;a.pageY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(a.which){a.rightClick=a.which==3}else{if(a.button){a.rightClick=a.button==2}}return a},convertDomEvent:function(a){var b;a=OjDomEvent.normalizeDomEvent(a);return new OjDomEvent(a.type,true,true)},CLICK:"click",DOUBLE_CLICK:"dblclick",MOUSE_DOWN:"mousedown",MOUSE_MOVE:"mousemove",MOUSE_OVER:"mouseover",MOUSE_OUT:"mouseout",MOUSE_UP:"mouseup",KEY_DOWN:"keydown",KEY_PRESS:"keypress",KEY_UP:"keyup",FOCUS_IN:"focus",FOCUS_OUT:"blur",CHANGE:"change",TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend"});