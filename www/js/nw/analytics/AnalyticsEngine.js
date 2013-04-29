OJ.importJs("nw.analytics.Analytics");OJ.importJs("oj.data.Collection");OJ.importJs("oj.events.Actionable");"use strict";OJ.extendClass(OjActionable,"NwAnalyticsEngine",{_queue:null,_processing:false,_constructor:function(){this._super("NwAnalyticsEngine","_constructor",[]);this._queue=new OjCollection()},_processActionItem:function(a){return false},_processItem:function(a){return false},_processQueue:function(){if(this._processing){return}this._processing=true;var c=this._queue.numItems(),b,a;for(;c--;){a="_processItem";b=this._queue.getItemAt(c);switch(b.getType()){case NwAnalyticsEvent.ACTION:a="_processActionItem";break;case NwAnalyticsEvent.MESSAGE:a="_processMessageItem";break;case NwAnalyticsEvent.VIEW:a="_processViewItem";break}if(this[a](b)){this._queue.removeItemAt(c)}}this._processing=false},_processMessageItem:function(a){return false},_processViewItem:function(a){return false},_onAnalyticsEvent:function(a){this._queue.addItemAt(a,0);this._processQueue()},disable:function(){Analytics.removeEventListener(NwAnalyticsEvent.ACTION,this,"_onAnalyticsEvent");Analytics.removeEventListener(NwAnalyticsEvent.MESSAGE,this,"_onAnalyticsEvent");Analytics.removeEventListener(NwAnalyticsEvent.VIEW,this,"_onAnalyticsEvent")},enable:function(){Analytics.addEventListener(NwAnalyticsEvent.ACTION,this,"_onAnalyticsEvent");Analytics.addEventListener(NwAnalyticsEvent.MESSAGE,this,"_onAnalyticsEvent");Analytics.addEventListener(NwAnalyticsEvent.VIEW,this,"_onAnalyticsEvent")},log:function(){},track:function(a,b){this._onAnalyticsEvent(new NwAnalyticsEvent(NwAnalyticsEvent.TACK_EVENT,a,b))}});