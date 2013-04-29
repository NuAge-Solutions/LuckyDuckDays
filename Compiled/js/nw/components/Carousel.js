OJ.importJs("nw.components.Marquee");OJ.importJs("nw.components.View");OJ.importJs("oj.fx.Tween");OJ.importCss("nw.components.Carousel");"use strict";OJ.extendClass(NwMarquee,"NwCarousel",{_props_:{viewSize:50},_allow_loop:false,_current_pos:0,_index:null,_offset:0,_tween:null,_view_offset:0,_visable_size:0,_constructor:function(){this._index={};this._super("NwCarousel","_constructor",arguments)},_redrawPosition:function(g){if(!this._collection){return}var d,e,k,j,a,h,c=this._offset+this._view_offset,f=this._collection.numItems(),b=this.container.getChildren();if(g<0){a=Math.ceil((g-c)/this._viewSize);h=Math.ceil((g+c)/this._viewSize)}else{a=Math.signedCeil((g-c)/this._viewSize);h=Math.signedCeil((g+c)/this._viewSize)}for(d=a;d<h;d++){if(d<0){if(this._allow_loop){k=d*this._viewSize;e=(f-1)+(d%f)}else{e=0;k=0}}else{if(d<f){k=(e=d)*this._viewSize}else{if(this._allow_loop){e=d%f}else{e=f-1}k=d*this._viewSize}}if(j=this.getElmAt(e)){j.setX(k+this._offset-this._view_offset-g);j.setWidth(this._viewSize);if(this.container.hasChild(j)){b.splice(b.indexOf(j),1)}else{j.addEventListener(OjMouseEvent.CLICK,this,"_onViewClick");this.container.addChild(j)}this._index[j.id()]=d}}d=b.length;while(d--){b[d].removeEventListener(OjMouseEvent.CLICK,this,"_onViewClick");this.container.removeChild(b[d])}this._current_pos=g},redraw:function(){if(this._super("NwCarousel","redraw",arguments)){this._visable_size=this.container.getWidth();this._offset=this._visable_size/2;this._view_offset=this._viewSize/2;this._allow_loop=this._visable_size<this.numElms()*this._viewSize;this._redrawPosition(this._current_pos);return true}return false},_onTweenTick:function(a){this._redrawPosition(a.getValue())},_onViewClick:function(a){this.setActiveIndex(this._index[a.getCurrentTarget().id()])},setActiveIndex:function(e){var a=null,b=null,d=null;if(this._activeIndex==e&&this._active){return}if(!this._active){this._activeIndex=e;this._active=this.getElmAt(e);this._redrawPosition(e*this._viewSize);return}var c=this.numElms();this._tween=new OjTween(this._current_pos,(this._current_index=e)*this._viewSize,300,OjEasing.OUT);this._tween.addEventListener(OjTweenEvent.TICK,this,"_onTweenTick");e=e%c;if(e<0){e=c+e}this._activeIndex=e;if(this._active=this.getElmAt(e)){this._tween.start()}else{this._activeIndex=-1}}});