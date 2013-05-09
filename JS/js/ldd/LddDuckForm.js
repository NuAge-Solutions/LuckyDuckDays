OJ.importJs('oj.components.OjComponent');


'use strict';

OJ.extendComponent(
	OjComponent, 'LddDuckForm',
	{
		'_template' : 'ldd.LddDuckForm',

		'validate' : function(){
			/* add code to check the ID against valid ones in the DB */
			return(this.lblDuckID.getValue().length==5);
		},
		
		'getSerial' : function(){
			return this.lblDuckID.getValue();
		},
		
		'getName' : function(){
			return this.lblDuckName.getValue();
		},
		
		'clearForm' : function(){
			this.lblDuckID.setValue("");
			this.lblDuckName.setValue("");
		}
	},
	{
		'_TAGS' : ['duckform']
	}
);