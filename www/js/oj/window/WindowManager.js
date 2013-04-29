OJ.importJs("oj.dom.StyleElement");OJ.importJs("oj.events.Actionable");OJ.importJs("oj.fx.Fade");OJ.importJs("oj.nav.Iframe");OJ.importJs("oj.media.ImageViewer");OJ.importJs("oj.window.Modal");OJ.importJs("oj.window.Alert");OJ.importCss("oj.window.Modal");"use strict";OJ.extendManager("WindowManager",OjActionable,"OjWindowManager",{_props_:{alertClass:OjAlert,modalClass:OjModal},_modal_holder:null,_modals:null,_constructor:function(a){this._super("OjWindowManager","_constructor",[]);if(a){this._modals=a._modals;this._modal_holder=a._modal_holder;if(!OJ.isReady()){OJ.removeEventListener(OjEvent.READY,a,"_onOjReady");OJ.addEventListener(OjEvent.READY,this,"_onOjReady")}OJ.destroy(a)}else{this._modals=[];this._modal_holder=new OjStyleElement();this._modal_holder.addClasses("WindowManager");this._modal_holder.hide();if(OJ.isReady()){this._onOjReady(null)}else{OJ.addEventListener(OjEvent.READY,this,"_onOjReady")}}},_alert:function(f,e){var d=arguments.length,c=d>2?arguments[2]:[],b="Ok";if(d>3){b=arguments[3]}else{if(d>2){b="Cancel"}}var a=this.makeAlert(f,e,c,b);if(!c&&!b){a.hideButtons()}return a},_calcBrowserWidth:function(){var a=OJ.getViewport();if(OJ.isMobile()){return a.width}if(OJ.isTablet()&&a.width>540){return 540}return Math.round(a.width*0.75)},_calcBrowserHeight:function(){var a=OJ.getViewport();if(OJ.isMobile()){return a.height}if(OJ.isTablet()&&a.height>620){return 620}return Math.round(a.height*0.75)},_onHide:function(a){var b=a.getCurrentTarget(),c=b.getTarget(),d=c.getSelfDestruct();this._modal_holder.removeChild(c);OJ.destroy(b);if(!this._modal_holder.numChildren()){this._modal_holder.hide()}c.dispatchEvent(new OjEvent(OjEvent.HIDE));if(d){OJ.destroy(c,c.getSelfDestruct())}},_onOjReady:function(a){this.removeEventListener(OjEvent.READY,this,"_onOjReady");document.body.appendChild(this._modal_holder._dom);this._modal_holder._setIsDisplayed(true)},alert:function(c,b){var a=this._alert.apply(this,arguments);this.show(a);return a},browser:function(b,f){var a=arguments,e=a.length,c=new OjIframe(b);c.setWidth(100,"%");c.setHeight(100,"%");var d=this.makeModal(f,c);d.setSelfDestruct(OjAlert.DEEP);d.setPaneWidth(e>2?a[2]:this._calcBrowserWidth());d.setPaneHeight(e>3?a[3]:this._calcBrowserHeight());return this.show(d)},image:function(b,f){var a=arguments,d=a.length,e=new OjImageViewer(b);e.setWidth(100,"%");e.setHeight(100,"%");var c=this.makeModal(f,e);c.setSelfDestruct(OjAlert.DEEP);c.setPaneWidth(d>2?a[2]:this._calcBrowserWidth());c.setPaneHeight(d>3?a[3]:this._calcBrowserHeight());return this.show(c)},show:function(e){this._modals.push(e);if(!this._modal_holder.isVisible()){this._modal_holder.show()}e.setAlpha(0);e.show();this._modal_holder.addChild(e);var b=e.getWidth(),d=e.getHeight();var a=e.pane.getWidth(),c=e.pane.getHeight();e.pane.setX((b-a)/2);e.pane.setY(((d-c)/2)*0.75);var f=new OjFade(e,OjFade.IN);f.addEventListener(OjTweenEvent.COMPLETE,this,function(g){f=OJ.destroy(f);e.dispatchEvent(new OjEvent(OjEvent.SHOW))});f.start()},hide:function(b){var a;if((a=this._modals.indexOf(b))==-1){return}var c=new OjFade(b,OjFade.NONE);c.addEventListener(OjTweenEvent.COMPLETE,this,"_onHide");c.start();this._modals.splice(a,1)},makeAlert:function(){var b=this._alertClass;var a=new b();a._constructor.apply(a,arguments);return a},makeModal:function(){var b=this._modalClass;var a=new b();a._constructor.apply(a,arguments);return a},moveToTop:function(a){this._modal_holder.moveChild(a,this._modal_holder.numChildren()-1)},getHolder:function(){return this._modal_holder}});