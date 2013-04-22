OJ.importJs('nw.app.App');
OJ.importJs('oj.form.TextArea');
OJ.importJs('oj.form.TextInput');
OJ.importJs('oj.form.Selector');
OJ.importJs('oj.list.LabelItemRenderer');
OJ.importJs('oj.form.RadioOption');
OJ.importJs('ldd.DuckForm');

OJ.importCss('ldd.LuckyDuckDays');


'use strict';

OJ.extendClass(
    NwApp, 'LuckyDuckDays',
    {
		'_template' : 'ldd.LuckyDuckDays',
		
		'_constructor' : function(route){
			this._s('LuckyDuckDays', '_constructor', arguments);

		},


	    '_onAddDuck' : function(evt){
			this.duckContainer.addChild(new LddDuckForm());
	    },
		
		'_onRegister' : function(evt){
			WindowManager.alert("registered!");
		},
		
		'_onAdoptionPaper' : function(evt){
			WindowManager.alert("Adoption paper");
		},
		
		'_onSlcEmailPhone' : function(evt){
			if(this.lblEmailReq.isVisible()){
				this.lblEmailReq.hide();
				this.lblPhoneReq.show();	
				this.lblEmail.show();
				this.lblPhone.hide();					
			}
			else{
				this.lblEmailReq.show();
				this.lblPhoneReq.hide();
				this.lblEmail.hide();
				this.lblPhone.show();						
			}
		}
	});