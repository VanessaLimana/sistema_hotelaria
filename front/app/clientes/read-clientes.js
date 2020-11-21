$(document).ready(function() {
 
    // show list of cliente on first load
    showClientesFirstPage();
 
    // when a 'read clientes' button was clicked
    $(document).on('click', '.read-clientes-button', function() {
        showClientesFirstPage();
    });
 
    // when a 'page' button was clicked
    $(document).on('click', '.pagination li', function(){
		// get json url
		var keywords = $(document).find(":input[name='keywords']").val();
        var json_url = url_req+"clientes?page="+$(this).find('a').attr('data-page')+"&search="+keywords;
 
        // show list of clientes
        showClientes(json_url, keywords);
    });

	function showClientesFirstPage() {
		var json_url = url_req+"clientes";
		showClientes(json_url);
	}

	// function to show list of clientes
	function showClientes(json_url, keywords = "") {

		// get list of clientes from the API
		$.getJSON(json_url, function(data) {

			// html for listing clientes
			readClientesTemplate(data, keywords);

			// chage page title
			changePageTitle("Lista de clientes");

		});
	}
});