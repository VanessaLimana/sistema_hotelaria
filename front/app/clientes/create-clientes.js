// show html form when 'create cliente' button was clicked
$(document).on('click', '#create-cliente', function() {
	// load list of categories
	var generos_options_html="";
		
	// loop through returned list of data
	generos_options_html+="<select name='sexo' class='form-control'>";
	generos_options_html+="<option value='Masculino'>Masculino</option>";
	generos_options_html+="<option value='Feminino'>Feminino</option>";
	generos_options_html+="<option value='Outro'>Outro</option>";
	generos_options_html+="</select>";

	// we have our html form here where cliente information will be entered
	// we used the 'required' html5 property to prevent empty fields
	var create_cliente_html="";

	// 'read clientes' button to show list of clientes
	create_cliente_html+="<div id='read-clientes' class='btn btn-primary pull-right m-b-15px read-clientes-button'>";
		create_cliente_html+="<span class='glyphicon glyphicon-list'></span> Lista de clientes";
	create_cliente_html+="</div>";

	// 'create cliente' html form
	create_cliente_html+="<form id='create-cliente-form' action='#' method='post' border='0'>";
		create_cliente_html+="<table class='table table-hover table-responsive table-bordered'>";

			// Nome field
			create_cliente_html+="<tr>";
				create_cliente_html+="<td>Nome</td>";
				create_cliente_html+="<td><input type='text' name='nome' class='form-control' required /></td>";
			create_cliente_html+="</tr>";

			// E-mail field
			create_cliente_html+="<tr>";
				create_cliente_html+="<td>E-mail</td>";
				create_cliente_html+="<td><input type='email' name='email' class='form-control' required /></td>";
			create_cliente_html+="</tr>";

			// CPF field
			create_cliente_html+="<tr>";
				create_cliente_html+="<td>CPF</td>";
				create_cliente_html+="<td><input type='text' name='cpf' class='form-control cpf-mask' required /></td>";
			create_cliente_html+="</tr>";

			// Telefone field
			create_cliente_html+="<tr>";
				create_cliente_html+="<td>Telefone</td>";
				create_cliente_html+="<td><input type='text' name='telefone' class='form-control telefone-mask' required /></td>";
			create_cliente_html+="</tr>";

			// Sexo 'select' field
			create_cliente_html+="<tr>";
				create_cliente_html+="<td>Sexo</td>";
				create_cliente_html+="<td>" + generos_options_html + "</td>";
			create_cliente_html+="</tr>";

			// categories 'select' field
			create_cliente_html+="<tr>";
				create_cliente_html+="<td>Status</td>";
				create_cliente_html+="<td>";
					create_cliente_html+="<select name='status' class='form-control'>";
						create_cliente_html+="<option value='ativo'>Ativo</option>";
						create_cliente_html+="<option value='inativo'>Inativo</option>";
					create_cliente_html+="</select>";
				create_cliente_html+="</td>";
			create_cliente_html+="</tr>";

			// button to submit form
			create_cliente_html+="<tr>";
				create_cliente_html+="<td></td>";
				create_cliente_html+="<td>";
					create_cliente_html+="<button type='submit' class='btn btn-primary'>";
						create_cliente_html+="<span class='glyphicon glyphicon-plus'></span> Cadastrar cliente";
					create_cliente_html+="</button>";
				create_cliente_html+="</td>";
			create_cliente_html+="</tr>";

		create_cliente_html+="</table>";
	create_cliente_html+="</form>";
		
	// inject html to 'page-content' of our app
	$("#page-content").html(create_cliente_html);

	// chage page title
	changePageTitle("Cadastrar cliente");
});

// will run if create cliente form was submitted
$(document).on('submit', '#create-cliente-form', function() {
	// get form data
	var form_data = JSON.stringify($(this).serializeObject());

	// submit form data to api
	$.ajax({
		url: url_req+"clientes",
		type: "POST",
		contentType: 'application/json',
		data: form_data,
		success: function(result) {
			// cliente was created, go back to clientes list
			$('.read-clientes-button').click();
		},
		error: function(xhr, resp, text) {
			// show error to console
			console.log(xhr, resp, text);
		}
	});

	return false;
});

// https://www.codeofaninja.com/2015/06/php-crud-with-ajax-and-oop.html
// 10.2