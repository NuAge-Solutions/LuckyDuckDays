OJ.importJs('ldd.LddDuck');
OJ.importJs('oj.components.OjItemRenderer');


'use strict';

OJ.extendComponent(
	OjItemRenderer, 'LddDuckRenderer',
	{
		'_template' : 'ldd.LddDuckRenderer',


		'_redrawData' : function(){
			if(this._super('LddDuckRenderer', '_redrawData', arguments)){
				var duck_name, duck_serial, user_name;

				if(this._data){
					duck_name = this._data.getName();
					duck_serial = this._data.getSerial();
					user_name = this._data.getUser().getName();
				}

				this.duckName.setText(duck_name);
				this.duckSerial.setText(duck_serial);
				this.userName.setText(user_name);

				return true;
			}

			return false;
		}
	},
	{
		'_TAGS' : ['duck']
	}
);