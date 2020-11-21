$(document).ready(function() {
	// when a 'search clientes' button was clicked
    $(document).on('submit', '#search-cliente-form', function() {
 
        // get search keywords
        var keywords = $(this).find(":input[name='keywords']").val();
 
        // get data from the api based on search keywords
        $.getJSON(url_req+"clientes?search="+keywords, function(data) {
 
            // template in clientes.js
            readClientesTemplate(data, keywords);
 
			var pageTitle = "";
			if(keywords != "") {
				pageTitle = "Procurar clientes: "+keywords;
			} else {
				pageTitle = "Listar clientes";
			}
			
            // chage page title
            changePageTitle(pageTitle);
 
        });
 
        // prevent whole page reload
        return false;
    });
});