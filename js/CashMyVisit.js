var z_CMV_Server="http://46.182.26.165";	
var z_CMV_CDN_Server="http://widget.cashmyvisit.com/";

/*
	window.onload = function() {
         	CMV_Add_SCript(z_CMV_CDN_Server+'js/CashMyVisit2.js');
  }
*/
if (window.attachEvent) {window.attachEvent('onload', CMV_Add_SCript(z_CMV_CDN_Server+'js/CashMyVisit2.js'));}
else if (window.addEventListener) {window.addEventListener('load', CMV_Add_SCript(z_CMV_CDN_Server+'js/CashMyVisit2.js'), false);}
else {document.addEventListener('load', CMV_Add_SCript(z_CMV_CDN_Server+'js/CashMyVisit2.js'), false);}
	
	

	
	function CMV_Add_SCript(src)
	{
	var jqueryurl=src;
	var script   = document.createElement("script");
	script.type  = "text/javascript";
	script.src   =jqueryurl;
	document.body.appendChild(script);
	
	
	}
