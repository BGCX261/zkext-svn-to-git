/* ViewStack.js*/

zkext.ui.view.ViewStack = zk.$extends(zkext.ui.panel.Panel,{	 
	$define: {	 
		 
	},
		 	
	configure_:function(){
		this.$supers('configure_');		
		var config = this.getInitialConfig();					 
	}
		 
	 
});