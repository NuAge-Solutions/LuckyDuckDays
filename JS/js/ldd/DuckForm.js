OJ.importJs('oj.components.Component');


'use strict';

OJ.extendComponent(
	OjComponent, 'LddDuckForm',
	{
		'_template' : 'ldd.DuckForm',
		'validate' : function(){
			/* add code to check the ID against valid ones in the DB */
			return(this.lblDuckID.getValue().length==5);
		},
		
		'getID' : function(){
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