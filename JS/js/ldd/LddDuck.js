OJ.importJs('ldd.LddData');
OJ.importJs('ldd.LddUser');
OJ.importJs('nw.data.properties.NwReferenceProperty')
OJ.importJs('nw.data.properties.NwTextProperty');


'use strict';

OJ.extendClass(
	LddData, 'LddDuck',
	{
		'_constructor' : function(/*name, serial*/){
			this._super('LddDuck', '_constructor', []);

			var args = arguments,
				ln = args.length;

			if(ln){
				this.setName(args[0]);

				if(ln > 1){
					this.setSerial(args[1]);
				}
			}
		},

		'_getSaveRequest' : function(/*method, params*/){
			return this._super('LddDuck', '_getSaveRequest', ['registerDuck']);
		}
	},
	{
		'DEFINITION' : OJ.merge(
			{
				'name'   : new NwTextProperty(),
				'serial' : new NwTextProperty(),
				'user'   : new NwReferenceProperty(
					LddUser,
					{
						'allowNesting' : true
					}
				)
			},
			LddData.DEFINITION
		),

		'TYPE' : 'duck'
	}
);