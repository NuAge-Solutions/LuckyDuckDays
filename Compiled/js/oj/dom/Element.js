OJ.importJs("oj.events.Actionable");OJ.importJs("oj.events.DragEvent");OJ.importJs("oj.events.Event");OJ.importJs("oj.events.FocusEvent");OJ.importJs("oj.events.KeyboardEvent");OJ.importJs("oj.events.MouseEvent");OJ.importJs("oj.events.TouchEvent");OJ.importJs("oj.events.TransformEvent");"use strict";OJ.extendClass(OjActionable,"OjElement",{_children:null,_dom:null,_parent:null,_proxy:null,_move_timer:null,_page_x:null,_page_y:null,_draggable:false,_dragX:0,_dragY:0,_constructor:function(){this._super("OjElement","_constructor",[]);var a=arguments,c=a.length,d=c&&a[0]?a[0]:OjElement.elm("div"),b=c>1?a[1]:null;this._setDom(d,b);OjElement.register(this)},_destructor:function(){OjElement.unregister(this);if(this._parent){this._parent.removeChild(this)}if(this._dom){delete this._dom.ojElm;this._dom=this._parent=this._proxy=null}return this._super("OjElement","_destructor",arguments)},_setDom:function(a,b){this._setProxy(this._dom=a);this._dom.ojElm=this.id()},_setProxy:function(a){if(this._proxy){this._proxy.ojProxy=null}this._proxy=a;a.ojProxy=this.id()},_isDisplayed:function(){},_isNotDisplayed:function(){},_processEvent:function(a){if(OjElement.element(a.currentTarget)!=this||a.dispatched){return false}a.dispatched=true;return true},_onDomEvent:function(a){var b=OjElement.element(this);if(b&&b._processEvent(a)){b._onEvent(OjDomEvent.convertDomEvent(a))}},_onDomMouseEvent:function(a){var b=OjElement.element(this);if(b&&b._processEvent(a)){b._onMouse(OjMouseEvent.convertDomEvent(a))}},_onDomKeyboardEvent:function(a){var b=OjElement.byId(this.ojProxy);if(b&&b._processEvent(a)){b._onEvent(OjKeyboardEvent.convertDomEvent(a))}},_onDomFocusEvent:function(a){var b=OjElement.byId(this.ojProxy);if(b&&b._processEvent(a)){b._onEvent(OjFocusEvent.convertDomEvent(a))}},_onDomTouchEvent:function(a){var b=OjElement.byId(this.ojProxy);if(b&&b._processEvent(a)){return b._onTouch(OjTouchEvent.convertDomEvent(a))}return false},_onDrag:function(a){this.dispatchEvent(new OjDragEvent(OjDragEvent.DRAG,a.getPageX()-this._dragX,a.getPageY()-this._dragY,a,false,false));this._dragX=a.getPageX();this._dragY=a.getPageY()},_onDragEnd:function(a){OJ.removeEventListener(OjMouseEvent.MOVE,this,"_onDrag");OJ.removeEventListener(OjMouseEvent.UP,this,"_onDragEnd");this.dispatchEvent(new OjDragEvent(OjDragEvent.DRAG_END,a.getPageX()-this._dragX,a.getPageY()-this._dragY,a,false,false))},_onEvent:function(a){this.dispatchEvent(a);return false},_onMouse:function(a){if(a.getType()==OjMouseEvent.DOWN&&this._draggable){this._dragX=a.getPageX();this._dragY=a.getPageY();if(this.hasEventListener(OjDragEvent.DRAG)){OJ.addEventListener(OjMouseEvent.MOVE,this,"_onDrag")}OJ.addEventListener(OjMouseEvent.UP,this,"_onDragEnd");this.dispatchEvent(new OjDragEvent(OjDragEvent.DRAG_INIT,0,0,a,false,false))}return this._onEvent(a)},_onMoveTick:function(a){var c=this.getPageX(),b=this.getPageY();var e=this._page_x-c,d=this._page_y-b;if(e||d){this.dispatchEvent(new OjTransformEvent(OjTransformEvent.MOVE,c,b,e,d))}this._page_x=c;this._page_y=b},_onTouch:function(a){if(a.getType()==OjTouchEvent.END){var b=document.elementFromPoint(a.getPageX(),a.getPageY());if(b&&OjElement.hasDomElement(this._proxy,b)){if(this.hasEventListener(OjMouseEvent.UP)){this._onMouse(new OjMouseEvent(OjMouseEvent.UP,a.getBubbles(),a.getCancelable(),a.getPageX(),a.getPageY()))}if(this.hasEventListener(OjMouseEvent.CLICK)&&a.getPageX()==this._dragX&&a.getPageY()==this._dragY){this._onMouse(new OjMouseEvent(OjMouseEvent.CLICK,a.getBubbles(),a.getCancelable(),a.getPageX(),a.getPageY()))}}}else{if(a.getType()==OjTouchEvent.START){this._dragX=a.getPageX();this._dragY=a.getPageY();return true}}return this._onEvent(a)},addEventListener:function(a){this._super("OjElement","addEventListener",arguments);if(a==OjMouseEvent.CLICK){this._proxy.onclick=this._onDomMouseEvent;if(OJ.isTouchCapable()){this._proxy.ontouchstart=this._onDomTouchEvent;this._proxy.ontouchend=this._onDomTouchEvent}}else{if(a==OjMouseEvent.DOUBLE_CLICK){this._proxy.ondblclick=this._onDomMouseEvent}else{if(a==OjMouseEvent.DOWN){this._proxy.onmousedown=this._onDomMouseEvent;if(OJ.isTouchCapable()){this._proxy.ontouchstart=this._onDomTouchEvent}}else{if(a==OjMouseEvent.MOVE){this._proxy.onmousemove=this._onDomMouseEvent;if(OJ.isTouchCapable()){this._proxy.ontouchmove=this._onDomTouchEvent}}else{if(a==OjMouseEvent.OUT){this._proxy.onmouseout=this._onDomMouseEvent}else{if(a==OjMouseEvent.OVER){this._proxy.onmouseover=this._onDomMouseEvent}else{if(a==OjMouseEvent.UP){this._proxy.onmouseup=this._onDomMouseEvent;if(OJ.isTouchCapable()){this._proxy.ontouchend=this._onDomTouchEvent}}else{if(OjDragEvent.isDragEvent(a)){this._draggable=true;this._proxy.onmousedown=this._onDomMouseEvent;if(OJ.isTouchCapable()){this._proxy.ontouchstart=this._onDomTouchEvent}}else{if(a==OjKeyboardEvent.DOWN){this._proxy.onkeydown=this._onDomKeyboardEvent}else{if(a==OjKeyboardEvent.PRESS){this._proxy.onkeypress=this._onDomKeyboardEvent}else{if(a==OjKeyboardEvent.UP){this._proxy.onkeyup=this._onDomKeyboardEvent}else{if(a==OjFocusEvent.IN){this._proxy.onfocus=this._onDomFocusEvent}else{if(a==OjFocusEvent.OUT){this._proxy.onblur=this._onDomFocusEvent}else{if(a==OjTransformEvent.MOVE){if(!this._move_timer){this._move_timer=new OjTimer(250,0);this._move_timer.addEventListener(OjTimer.TICK,this,"_onMoveTick");this._page_x=this.getPageX();this._page_y=this.getPageY();this._move_timer.start()}}else{if(a==OjTransformEvent.RESIZE&&this._proxy!=document.body){this._proxy.onresize=this._onDomEvent}else{if(a==OjDomEvent.CHANGE){this._proxy.onchange=this._onDomEvent}}}}}}}}}}}}}}}}},removeEventListener:function(b,a,c){this._super("OjElement","removeEventListener",arguments);if(b==OjMouseEvent.CLICK){if(!this.hasEventListener(OjMouseEvent.CLICK)){this._proxy.onclick=null;if(OJ.isTouchCapable()&&!this.hasEventListener(OjMouseEvent.UP)){this._proxy.ontouchend=null}}}else{if(b==OjMouseEvent.DOUBLE_CLICK){if(!this.hasEventListener(OjMouseEvent.DOUBLE_CLICK)){this._proxy.ondblclick=null}}else{if(b==OjMouseEvent.DOWN){if(!this.hasEventListener(OjMouseEvent.DOWN)&&!this.hasEventListener(OjDragEvent.DRAG)){this._proxy.onmousedown=null;if(OJ.isTouchCapable()){this._proxy.ontouchstart=null}}}else{if(b==OjMouseEvent.MOVE){if(!this.hasEventListener(OjMouseEvent.MOVE)){this._proxy.onmousemove=null;if(OJ.isTouchCapable()){this._proxy.ontouchmove=null}}}else{if(b==OjMouseEvent.OUT){if(!this.hasEventListener(OjMouseEvent.OUT)){this._proxy.onmouseout=null}}else{if(b==OjMouseEvent.OVER){if(!this.hasEventListener(OjMouseEvent.OVER)){this._proxy.onmouseover=null}}else{if(b==OjMouseEvent.UP){if(!this.hasEventListener(OjMouseEvent.UP)){this._proxy.onmouseup=null;if(OJ.isTouchCapable()&&!this.hasEventListener(OjMouseEvent.CLICK)){this._proxy.ontouchend=null}}}else{if(OjDragEvent.isDragEvent(b)){if(!this.hasEventListener(OjDragEvent.DRAG)&&!this.hasEventListener(OjDragEvent.DRAG_END)&&!this.hasEventListener(OjDragEvent.DRAG_INIT)){this._draggable=false;if(!this.hasEventListener(OjMouseEvent.DOWN)){this._proxy.onmousedown=null}}}else{if(b==OjKeyboardEvent.DOWN){if(!this.hasEventListener(OjKeyboardEvent.DOWN)){this._proxy.onkeydown=null}}else{if(b==OjKeyboardEvent.PRESS){if(!this.hasEventListener(OjKeyboardEvent.PRESS)){this._proxy.onkeypress=null}}else{if(b==OjKeyboardEvent.UP){if(!this.hasEventListener(OjKeyboardEvent.UP)){this._proxy.onkeyup=null}}else{if(b==OjFocusEvent.IN){if(!this.hasEventListener(OjFocusEvent.IN)){this._proxy.onfocus=null}}else{if(b==OjFocusEvent.OUT){if(!this.hasEventListener(OjFocusEvent.OUT)){this._proxy.onblur=null}}else{if(b==OjTransformEvent.MOVE){if(!this.hasEventListener(OjTransformEvent.MOVE)){OJ.destroy(this._move_timer)}}else{if(b==OjTransformEvent.RESIZE){if(!this.hasEventListener(OjTransformEvent.RESIZE)){this._proxy.onresize=null}}else{if(b==OjDomEvent.CHANGE){if(!this.hasEventListener(OjDomEvent.CHANGE)){this._proxy.onchange=null}}}}}}}}}}}}}}}}}},dom:function(){return this._dom},inDom:function(){return this._dom.ownerDocument&&isObject(this._dom.ownerDocument)&&this._dom.parentNode?true:false},hasDomElement:function(a){return OjElement.hasDomElement(this._dom,a)},parent:function(){return this._parent},_setParent:function(a){this._parent=a;this._setIsDisplayed(a?a._is_displayed:false)},_setIsDisplayed:function(a){if(this._is_displayed==a){return}if(this._is_displayed=a){this._isDisplayed();this.dispatchEvent(new OjEvent(OjEvent.ADDED_TO_DISPLAY))}else{this._isNotDisplayed();this.dispatchEvent(new OjEvent(OjEvent.REMOVED_FROM_DISPLAY))}}},{_elms:{},byId:function(b){if(this._elms[b]){return this._elms[b]}var a=document.getElementById(b);return a.ojElm?this._elms[a.ojElm]:null},elm:function(a){return document.createElement(a)},element:function(a){if(!a){return null}if(isDomElement(a)){return this.byId(a.ojElm)}if(isObjective(a)){return a}return new OjStyleElement(a)},hasDomElement:function(a,b){if(a==b){return true}while((b=b.parentNode)){if(b==a){return true}}return false},isTextNode:function(a){return a.nodeName.toLowerCase()=="#text"},parentComponent:function(b){if(isElement(b)){b=b._dom}var a;while(b){a=b.parentNode;if(a&&(b=this.element(a))&&isComponent(b)){return b}b=a}return null},register:function(a){this._elms[a.id()]=a},unregister:function(a){delete this._elms[a.id()]}});OJ.importJs("oj.dom.StyleElement");OJ.importJs("oj.dom.TextElement");