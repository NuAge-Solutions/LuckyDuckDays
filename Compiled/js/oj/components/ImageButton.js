OJ.importJs("oj.components.Button");"use strict";OJ.extendComponent(OjButton,"OjImageButton",{_label:null,_constructor:function(){this._super("OjImageButton","_constructor",[]);if(arguments.length){this.setIcon(arguments[0])}},_makeLabel:function(){},getLabel:function(){return this._label},setLabel:function(a){this._label=a},getImage:function(){return this.getIcon()},setImage:function(a){this.setIcon(a)}},{_TAGS:["imagebutton"]});