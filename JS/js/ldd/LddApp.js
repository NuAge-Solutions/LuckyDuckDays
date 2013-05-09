OJ.importJs('nw.app.NwApp');
OJ.importJs('oj.form.OjTextArea');
OJ.importJs('oj.form.OjTextInput');
OJ.importJs('oj.form.OjSelector');
OJ.importJs('oj.list.OjLabelItemRenderer');
OJ.importJs('oj.net.OjRpc');
OJ.importJs('oj.form.OjRadioOption');
OJ.importJs('oj.form.OjCheckedOption');
OJ.importJs('ldd.LddDuck');
OJ.importJs('ldd.LddDuckForm');
OJ.importJs('ldd.LddDuckRenderer');
OJ.importJs('ldd.LddMailingAddressForm');


OJ.importCss('ldd.LddApp');

'use strict';

OJ.extendClass(
    NwApp, 'LddApp',
    {
	    '_api_endpoint' : 'http://local.ldd/api/v1.0/',  '_api_request_type' : OjUrlRequest.JSON,  '_api_response_type' : OjUrlRequest.JSON,

	    '_duck' : null,  '_has_mobile_layout' : true,  '_has_tablet_layout' : true,  '_template' : 'ldd.LddApp',


		'_constructor' : function(){
			this._super('LddApp', '_constructor', []);

			this.registeredDucks.hide();
			this.futureContactContainer.hide();
		},


	    '_listeners' : function(type){
		    switch(type){
			    case 'DuckSave':
				    return [this._duck, NwDataEvent.SAVE, NwDataEvent.SAVE_FAIL];
				break;
		    }

		    return this._super('LddApp', '_listeners', arguments);
	    },
		
		'_validateFields' : function(evt){
			var errorString = "";

			if(isEmpty(this.lblName.getValue())){
				errorString = "Please fill in your name\n";
			}
			
			if((this.lblEmailReq.isVisible()) && (isEmpty(this.lblEmailReq.getValue()))){
				errorString = errorString + "Please fill in your email address\n";
			}
			else if((this.lblPhoneReq.isVisible()) && (isEmpty(this.lblPhoneReq.getValue()))){
				errorString = errorString + "Please fill in your phone number\n";
			}
			
			if(!this.duckForm.validate()){
				if(isEmpty(this.duckForm.getSerial())){
					errorString = errorString + "Please fill in a Duck ID";
				}
				else{
					errorString = errorString + this.duckForm.getSerial() + " is not a valid Duck ID";
				}
			}
			
			if(errorString.length){
				WindowManager.alert("Registration Incomplete", errorString);

				return false;
			}

			return true;
		},
		
		'_onDuckSave' : function(evt){
			this._hideOverlay();

			this._updateListeners('remove', 'duckSave');

			// store the duck in the list
			this.registeredDucks.addItem(this._duck);
			this.registeredDucks.show();

			trace(this._duck);

			// show the future contact form
			if(false){
				/* show future contact view */

				this.lblEmail.setValue(this.lblEmailReq.getValue());
				this.lblPhone.setValue(this.lblPhoneReq.getValue());

				/* add code here to show in a modal */
				this.futureContactContainer.show();
			}

			// reset duck values
			this._duck = null;

			this.duckForm.clearForm();
		},

	    '_onDuckSaveFail' : function(evt){
			this._hideOverlay();

		    this._updateListeners('remove', 'duckSave');
	    },
		
		'_onRegisterDuck' : function(evt){
			/* validate all fields */
			if(this._validateFields()){
				this._duck = new LddDuck(this.duckForm.getName(), this.duckForm.getSerial());
				this._duck.setUser(
					new LddUser(this.lblName.getValue(), this.lblEmailReq.getValue(), this.lblPhoneReq.getValue())
				);

				this._showOverlay('Registering Duck');

				this._updateListeners('add', 'duckSave');

				this._duck.save();
			}
		},
		
		'_onAdoptionPaper' : function(evt){
			WindowManager.alert("Adoption paper");
		},
		
		'_onSlcEmailPhone' : function(evt){
			if(this.lblEmailReq.isVisible()){
				this.lblEmailReq.hide();
				this.lblPhoneReq.show();	
//				this.lblEmail.show();
//				this.lblPhone.hide();					
			}
			else{
				this.lblEmailReq.show();
				this.lblPhoneReq.hide();
//				this.lblEmail.hide();
//				this.lblPhone.show();						
			}

		},

		'_onSlcContact' : function(evt){
			if(this.futureContactWrapper.isVisible()){
				this.futureContactWrapper.hide();
			}
			else{
				this.futureContactWrapper.show();				
			}
		},


	    'apiRequest' : function(method, params/*, method = POST, async = true*/){
		    var args = arguments,
			    ln = args.length;

		    var rpc = new OjRpc(
			    this._buildApiUrl(null),
				method, params, this._api_request_type,
			    ln > 3 ? args[3] : true
		    );
		    rpc.setContentType(this._api_response_type);

		    return rpc;
	    }
	}
);