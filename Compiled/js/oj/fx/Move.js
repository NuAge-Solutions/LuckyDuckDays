OJ.importJs("oj.fx.DimTween");"use strict";OJ.extendClass(OjDimTween,"OjMove",{setAmount:function(a){this._super("OjMove","setAmount",arguments);if(this._direction==OjMove.BOTH){this._to.x=a[0];this._to.y=a[1]}else{if(this._direction==OjMove.X){this._to.x=a}else{this._to.y=a}}}},{X:OjDimTween.HORIZONTAL,Y:OjDimTween.VERTICAL,BOTH:OjDimTween.BOTH});