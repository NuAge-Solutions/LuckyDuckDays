OJ.importJs("nw.data.properties.Property");"use strict";OJ.extendClass(NwProperty,"NwNumberProperty",{_max_value:null,_min_value:null,_rounding:"round",_step:0,_type:"float",_processValue:function(a){if(!isNumber(a)){a=parseFloat(a)}if(isSet(this._min_value)){a=Math.max(this._min_value,a)}if(isSet(this._max_value)){a=Math.min(this._max_value,a)}if(this._step){}if(this._type==NwNumberProperty.INT){a=this._round(a)}return a},_round:function(a){if(this._rounding==NwNumberProperty.CEIL){return Math.ceil(a)}if(this._rounding==NwNumberProperty.FLOOR){return Math.floor(a)}return Math.round(a)},_valueIsValid:function(a){if(!isNumber(a)||(this._type==NwNumberProperty.INT&&!isInt(a))||(isSet(this._min_value)&&a<this._min_value)||(isSet(this._max_value)&&a>this._max_value)){return false}return true},getType:function(){return this._type},setType:function(a){this._type=a},getMaxValue:function(){return this._max_value},setMaxValue:function(a){this._max_value=a},getMinValue:function(){return this._min_value},setMinValue:function(a){this._min_value=a}},{FLOAT:"float",INT:"int",CEIL:"ceil",FLOOR:"floor",ROUND:"round"});