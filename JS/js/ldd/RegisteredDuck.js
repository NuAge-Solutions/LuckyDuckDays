OJ.importJs('oj.components.Component');


'use strict';

OJ.extendComponent(
	OjComponent, 'LddRegisteredDuck',
	{
		'_template' : 'ldd.RegisteredDuck',
		
		'_constructor' : function(route){
			this._super('LddRegisteredDuck', '_constructor', arguments);
			this.imgDuck.setSource("/assets/ldd/duck.png");
		},
		
		
		'setDuckID' : function(str){
			this.lblRegDuckID.setText("Duck ID:" + str);
		},

		'setDuckName' : function(str){
			this.lblRegDuckName.setText("Duck Name:" + str);
		},
		
		'setName' : function(str){
			this.lblRegName.setText("Registered to " + str);
		}
	},
	{
		'_TAGS' : ['registeredduck']
	}
);