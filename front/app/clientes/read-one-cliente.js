$(document).ready(function() {
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-cliente-button', function() {
        // get cliente id
		var id = $(this).attr('data-id');
		
		// read cliente record based on given ID
		$.getJSON(url_req+"clientes/"+id, function(data) {
			// start html
			var read_one_cliente_html="";

			// when clicked, it will show the cliente's list
			read_one_cliente_html+="<div id='read-clientes' class='btn btn-primary pull-right m-b-15px read-clientes-button'>";
				read_one_cliente_html+="<span class='glyphicon glyphicon-list'></span> Lista de clientes";
			read_one_cliente_html+="</div>";
			
			// cliente data will be shown in this table
			read_one_cliente_html+="<table class='table table-bordered table-hover'>";

				// cliente nome
				read_one_cliente_html+="<tr>";
					read_one_cliente_html+="<td class='w-30-pct'>Nome</td>";
					read_one_cliente_html+="<td class='w-70-pct'>"+data.nome+"</td>";
				read_one_cliente_html+="</tr>";

				// cliente email
				read_one_cliente_html+="<tr>";
					read_one_cliente_html+="<td>E-mail</td>";
					read_one_cliente_html+="<td>"+data.email+"</td>";
				read_one_cliente_html+="</tr>";

				// cliente cpf
				read_one_cliente_html+="<tr>";
					read_one_cliente_html+="<td>CPF</td>";
					read_one_cliente_html+="<td>"+data.cpf+"</td>";
				read_one_cliente_html+="</tr>";

				// cliente sexo
				read_one_cliente_html+="<tr>";
					read_one_cliente_html+="<td>Sexo</td>";
					read_one_cliente_html+="<td>"+data.sexo+"</td>";
				read_one_cliente_html+="</tr>";

				// cliente telefone
				read_one_cliente_html+="<tr>";
					read_one_cliente_html+="<td>Telefone</td>";
					read_one_cliente_html+="<td>"+data.telefone+"</td>";
				read_one_cliente_html+="</tr>";

				// cliente Status
				read_one_cliente_html+="<tr>";
					read_one_cliente_html+="<td>Status</td>";
					read_one_cliente_html+="<td>"+data.status+"</td>";
				read_one_cliente_html+="</tr>";

			read_one_cliente_html+="</table>";
			
			// inject html to 'page-content' of our app
			$("#page-content").html(read_one_cliente_html);
		});
		
		// change page title
		changePageTitle("Visualizar cliente");
    });
 
});