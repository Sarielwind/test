sap.ui.jsview("chatapp.groups", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf chatapp.groups
	*/ 
	getControllerName : function() {
		return "chatapp.groups";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf chatapp.groups
	*/ 
	createContent : function(oController) {
		var oInp = new sap.m.Input({
			placeholder : "Enter your name and Press ↵ to submit.",
			submit : [ oController.changeName, oController ]
		});
		
		var oList = new sap.m.List({
			headerText: "Chat Groups"
		});

		// new sap.m.Avatar("profileImage", {
		// 	Src: "sap-icon://lab",
		// 	displaySize: "XS",
		// 	displayShape: "Square",


		// });
		// profileimage.setSrc("chat.logo.png");
		// profileimage.setDisplaySize("XS");

		// bind the oList items to the oData collection
		oList.bindItems({
			path: "list>/names",
			//profileimage,
			template: new sap.m.StandardListItem({
				title: "{list>Name}",
				description: "{list>Description}",
				iconDensityAware:false,
				iconInset:false,
				avatar:new sap.m.Avatar({
					src : "{list>Src}",				
					
					}),
				type: sap.m.ListType.Navigation,
				press: [oController.enterGroup, oController]
			})
		});

 		return new sap.m.Page("mainpage", {
			title: "ChatApp",
			customHeader: new sap.m.Bar({
				contentLeft : [ 
					new sap.ui.commons.Image( {
					src : "./image/logo.png",
					height : "45px" })
				 ],
				 contentMiddle : [ new sap.m.Label( {
					text : "TeamChat",
					textAlign : "Left",
					design : "Bold"
			   }) ],
			}),
			content: [
				oInp, oList
			]

		});
        
	}

});