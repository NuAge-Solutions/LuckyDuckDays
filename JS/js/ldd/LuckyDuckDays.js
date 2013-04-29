OJ.importJs('nw.app.App');
OJ.importJs('oj.form.TextArea');
OJ.importJs('oj.form.TextInput');
OJ.importJs('oj.form.Selector');
OJ.importJs('oj.list.LabelItemRenderer');
OJ.importJs('oj.form.RadioOption');
OJ.importJs('oj.form.CheckedOption');
OJ.importJs('ldd.DuckForm');
OJ.importJs('ldd.MailingAddressForm');
OJ.importJs('ldd.RegisteredDuck');

OJ.importCss('ldd.LuckyDuckDays');

'use strict';

OJ.extendClass(
    NwApp, 'LddLuckyDuckDays',
    {
		'_template' : 'ldd.LuckyDuckDays',
		
		'_constructor' : function(route){
			this._super('LddLuckyDuckDays', '_constructor', arguments);
//			this.removeChild(this.futureContactPanel);
			this.registeredContainer.hide();
			this.futureContactContainer.hide();
		},

/*
		'_checkDuckIDs' : function(){
			var len = this.duckContainer.numChildren();
			for(;len--;){
				//this.duckContainer.getChildAt(len)				
				if(true){
					this.duckContainer.getChildAt(len).addClass("errorID");
				}
			}
		},


	    '_onAddDuck' : function(evt){
			this._checkDuckIDs();
			//WindowManager.alert("Please fill in the existing Duck ID's first")
			
			//this.duckContainer.addChild(new LddDuckForm());
	    },
*/
		'_setRegistered' : function(){
			this.registeredContainer.show();
			
			var rd = new LddRegisteredDuck();
			rd.setDuckName(this.duckContainer.getChildAt(0).getName());
			rd.setDuckID(this.duckContainer.getChildAt(0).getID());
			rd.setName(this.lblName.getValue());		
			this.registeredContainer.addChild(rd);
			
			this.duckContainer.getChildAt(0).clearForm();
			
			/*
			this.registeredContainer.getChildAt(0).setDuckName("Duck Name:" + this.duckContainer.getChildAt(0).getName());
			this.registeredContainer.getChildAt(0).setDuckID("Duck ID:" + this.duckContainer.getChildAt(0).getID());
			this.registeredContainer.getChildAt(0).setName("Registered to " + this.lblName.getValue());		
			this.duckContainer.getChildAt(0).clearForm();
			//this.lblRegDuckName.setText("Duck Name:" + this.duckContainer.getChildAt(0).getName());
			//this.lblRegDuckID.setText("Duck ID:" + this.duckContainer.getChildAt(0).getID());
			//this.lblRegName.setText("Registered to " + this.lblName.getValue());
			*/
		},
		
		'_validateFields' : function(evt){
			var errorString="";
			if(isEmpty(this.lblName.getValue())){
				errorString="Please fill in your name\n";
			}
			
			if((this.lblEmailReq.isVisible())&&(isEmpty(this.lblEmailReq.getValue()))){
				errorString = errorString + "Please fill in your email address\n";
			}
			else if((this.lblPhoneReq.isVisible())&&(isEmpty(this.lblPhoneReq.getValue()))){
				errorString = errorString + "Please fill in your phone number\n";
			}
			
			if(!this.duckContainer.getChildAt(0).validate()){
				if(this.duckContainer.getChildAt(0).getID().length>0){
					errorString = errorString + this.duckContainer.getChildAt(0).getID() + " is not a valid Duck ID";
				}
				else{
					errorString = errorString + "Please fill in a Duck ID";
				}
			}
			
			if(errorString.length>0){
				WindowManager.alert("Registration Incomplete",errorString);				
				return false;
			}
			else{
				return true;
			}
		},
		
		'_shouldRegisterPerson' : function(){
			/* add code to check if name and email/phone are already in DB */
			return true;
		},
		
		'_registerPersonIfNeeded' : function(){ 
			if(this._shouldRegisterPerson()){
				/* add code to save person info to database */
				return true;
			}
			else{
				return false;				
			}
		},
		
		'_registerDuck' : function(){
			/* add code to save duck to database */
		},
		
		'_onRegisterDuck' : function(evt){
			/* validate all fields */
			if(this._validateFields()){
				/* save person to database if they are not already in it */
				var registeredPerson = this._registerPersonIfNeeded();
				 
				/* save Duck ID and Name to DB */
				this._registerDuck();
				
				/* show registered duck */
				this._setRegistered();	
				
				if(registeredPerson){
					/* show future contact view */
				
					this.lblEmail.setValue(this.lblEmailReq.getValue());
					
					/* add code here to show in a modal */
					this.futureContactContainer.show();
				}
			}
			
				
			/*
			if(this.duckContainer.getChildAt(0).validate()){
				var modal=new OjModal("Congratulations!",this.futureContactPanel);
				modal.setPaneWidth(300);
				WindowManager.show(modal);				
			}
			else{
				var duckID = this.duckContainer.getChildAt(0).getID();
				WindowManager.alert(duckID + " is not a valid Duck ID.  Please try again.");
			}
			*/
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
		}

	});