OJ.importJs('ldd.LddData');
OJ.importJs('nw.data.properties.NwEmailProperty');
OJ.importJs('nw.data.properties.NwTextProperty');
OJ.importJs('nw.data.NwUser');


'use strict';

OJ.extendClass(
	NwUser, 'LddUser',
	{
		'_constructor' : function(/*name, email, phone*/){
			this._super('LddUser', '_constructor', []);

			var args = arguments,
				ln = args.length;

			if(ln){
				this.setName(args[0]);

				if(ln > 1){
					this.setEmail(args[1]);

					if(ln > 2){
						this.setPhone(args[2]);
					}
				}
			}
		}
	},
	{
		'DEFINITION' : OJ.merge({
			'email' : new NwEmailProperty({'default' : 'Email Address'}),
			'phone' : new NwTextProperty()
		}, NwUser.DEFINITION, LddData.DEFINITION),

		'TYPE' : 'user'
	}
);