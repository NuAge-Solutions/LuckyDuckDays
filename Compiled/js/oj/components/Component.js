OJ.importJs("oj.fx.Fade");OJ.importCss("oj.components.Component");"use strict";OJ.extendClass(OjStyleElement,"OjComponent",{_props_:{isActive:false,isDisabled:false},_get_props_:{isAnimating:false},_fader:null,_template:null,_constructor:function(){var a=[null,this];if(this._template){if(this._template.charAt(0)=="<"){a[0]=this._template}else{a[0]=OJ.importTemplate(this._template)}}this._super("OjComponent","_constructor",a);this.addClasses.apply(this,this._class_names.slice(this._class_names.indexOf("OjComponent")));this._setContainer(this.container?this.container:this)},_processChild:function(a,b){return this._super("OjComponent","_processChild",[a,b?b:this])},_processDomSourceChild:function(a,b){return this._processChild(a,b)},_setContainer:function(a){this._setElmFuncs(a);if(this.container==a){return}if(this.container){this.container.removeClasses("container")}if((this.container=a)!=this){this.container.addClasses("container")}},_setDomSource:function(a,e){var f=a==document.body;if(!f){var b=a.attributes,g=b.length;while(g-->0){if(b[g].nodeName=="class-name"||b[g].nodeName=="class-path"){continue}if(b[g].nodeName=="class"){b[g].value+=" "+this.getAttr("class")}this.setAttr(b[g])}}this._processAttributes(e);var h,d=a.childNodes,c=0,g=d.length;for(;c<g;c++){if(h=this._processDomSourceChild(d[c],e)){this.addElm(h);c--;g--}}if(a.parentNode){if(f){d=this._dom.children;g=d.length;for(var c=0;c<g;c++){a.appendChild(d[0])}}else{a.parentNode.replaceChild(this._dom,a)}}if(f){this._dom=a}},_setElmFuncs:function(a){if(a!=this&&a.is("OjComponent")){this._elm_funcs={addElm:"addElm",addElmAt:"addElmAt",getElmAt:"getElmAt",getElms:"getElms",hasElm:"hasElm",indexOfElm:"indexOfElm",moveElm:"moveElm",numElms:"numElms",removeAllElms:"removeAllElms",removeElm:"removeElm",removeElmAt:"removeElmAt",replaceElm:"replaceElm",replaceElmAt:"replaceElmAt"}}else{this._elm_funcs={addElm:"addChild",addElmAt:"addChildAt",getElmAt:"getChildAt",getElms:"getChildren",hasElm:"hasChild",indexOfElm:"indexOfChild",moveElm:"moveChild",numElms:"numChildren",removeAllElms:"removeAllChildren",removeElm:"removeChild",removeElmAt:"removeChildAt",replaceElm:"replaceChild",replaceElmAt:"replaceChildAt"}}},_setIsAnimating:function(a){if(this._isAnimating=a){this.addClasses("animating")}else{this.removeClasses("animating")}},_setIsDisplayed:function(a){if(this._is_displayed==a){return}this._super("OjComponent","_setIsDisplayed",arguments);if(a){this.redraw()}},_setParent:function(a){var b=this._parent;this._super("OjComponent","_setParent",arguments);if(b){if(!this._parent){this.dispatchEvent(new OjEvent(OjEvent.REMOVED))}else{if(b!=this._parent){this.dispatchEvent(new OjEvent(OjEvent.ADDED))}}}else{if(this._parent){this.dispatchEvent(new OjEvent(OjEvent.ADDED))}}},_listeners:function(a){return null},_processEvent:function(a){if(this._isDisabled){return false}return this._super("OjComponent","_processEvent",arguments)},_updateListeners:function(e,b){var b=b.ucFirst(),d=e=="add"?"addEventListener":"removeEventListener",a=this._listeners(b),c=a?a.length:0;if(c){if(c>1){a[0][d](a[1],this,"_on"+b)}if(c>2){a[0][d](a[2],this,"_on"+b+"Fail")}}},_callElmFunc:function(b,a){if(!this._elm_funcs[b]){return}if(b=="addElm"){this._addElm(a[0],this.numElms())}else{if(b=="addElmAt"){this._addElm(a[0],a[1])}else{if(b=="removeElm"){this._removeElm(a[0],this.indexOfElm(a[0]))}else{if(b=="removeElmAt"){this._removeElm(this.getElmAt(a[0]),a[0])}else{if(b=="moveElm"){this._moveElm(a[0],a[1])}else{if(b=="replaceElm"){this._replaceElm(a[0],this.indexOfElm(a[0]),a[1])}else{if(b=="replaceElmAt"){this._replaceElm(this.getElmAt(a[0]),a[0],a[1])}else{if(b=="removeAllElms"){this._removeAllElms()}}}}}}}}return this.container[this._elm_funcs[b]].apply(this.container,a)},_addElm:function(b,a){},_moveElm:function(b,a){},_removeAllElms:function(){},_removeElm:function(b,a){},_replaceElm:function(c,b,a){},addElm:function(a){return this._callElmFunc("addElm",Array.array(arguments))},addElmAt:function(b,a){return this._callElmFunc("addElmAt",Array.array(arguments))},getElmAt:function(a){return this._callElmFunc("getElmAt",Array.array(arguments))},getElms:function(){return this._callElmFunc("getElms",Array.array(arguments))},hasElm:function(a){return this._callElmFunc("hasElm",Array.array(arguments))},indexOfElm:function(a){return this._callElmFunc("indexOfElm",Array.array(arguments))},moveElm:function(){return this._callElmFunc("moveElm",Array.array(arguments))},numElms:function(){return this._callElmFunc("numElms",Array.array(arguments))},removeAllElms:function(){return this._callElmFunc("removeAllElms",Array.array(arguments))},removeElm:function(a){return this._callElmFunc("removeElm",Array.array(arguments))},removeElmAt:function(a){return this._callElmFunc("removeElmAt",Array.array(arguments))},replaceElm:function(b,a){return this._callElmFunc("replaceElm",Array.array(arguments))},replaceElmAt:function(b,a){return this._callElmFunc("replaceElmAt",Array.array(arguments))},_onFadeComplete:function(a){this.setAlpha(1);if(this._fader.getDirection()==OjFade.OUT){this.hide()}else{this.show()}this._setIsAnimating(false);this._unset("_fader")},fadeIn:function(){if(this._fader){if(this._fader.getDirection()==OjFade.IN){return}this._fader.stop();this._unset("_fader")}else{if(this.isVisible()){return}}var a=arguments.length;this.show();this._fader=new OjFade(this,OjFade.IN,a?arguments[0]:250,a>1?arguments[1]:OjEasing.NONE);this._fader.addEventListener(OjTweenEvent.COMPLETE,this,"_onFadeComplete");this._fader.start();this._setIsAnimating(true)},fadeOut:function(){if(this._fader){if(this._fader.getDirection()==OjFade.OUT){return}this._fader.stop();this._unset("_fader")}else{if(!this.isVisible()){return}}var a=arguments.length;this._fader=new OjFade(this,OjFade.OUT,a?arguments[0]:250,a>1?arguments[1]:OjEasing.NONE);this._fader.addEventListener(OjTweenEvent.COMPLETE,this,"_onFadeComplete");this._fader.start();this._setIsAnimating(true)},redraw:function(){return this._is_displayed},getTargetId:function(){return this.id()},setIsActive:function(a){if(this._isActive!=a){if(this._isActive=a){this.addClasses("active")}else{this.removeClasses("active")}}},setIsDisabled:function(a){if(this._isDisabled!=a){if(this._isDisabled=a){this.addClasses("disabled")}else{this.removeClasses("disabled")}}}},{_TAGS:[],load:function(e){var d,c=OJ.getFileType(e);this.empty();if(c==OJ.HTML){}else{var a,b;if(c==OJ.IMAGE){OJ.importJs("oj.media.Image");d=new OjImage()}else{if(c==OJ.FLASH){OJ.importJs("oj.media.Flash");d=new OjFlash();a="100%";b=300}else{if(c==OJ.VIDEO||c==OJ.AUDIO||c==OJ.STREAMING){OJ.importJs("oj.media.MediaPlayer");d=new OjMediaPlayer();a="100%";b="100%"}else{importJs("oj.widgets.Container");d=new OjView()}}}d.source(_source);if(isNull(a)){a=d.width()}if(isNull(b)){b=d.height()}if((isEmpty(this.css("width"))||this.css("width")=="auto")&&a){this.width(a)}if((isEmpty(this.css("height"))||this.css("height")=="auto")&&b){this.height(b)}this.add(d)}return e}});