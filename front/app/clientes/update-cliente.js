$(document).ready(function() {
	var id;
    // show html form when 'update cliente' button was clicked
    $(document).on('click', '.update-cliente-button', function() {
        // get cliente id
		id = $(this).attr("data-id");
		
		// read one record based on given cliente id
		$.getJSON(url_req+"clientes/"+id, function(data) {
			// values will be used to fill out our form
			var _id = data._id;
			var nome = data.nome;
			var email = data.email;
			var cpf = data.cpf;
			var sexo = data.sexo;
			var telefone = data.telefone;
			var status = data.status;

			var generos_options_html="";
			generos_options_html += "<select name='sexo' class='form-control'>";
				generos_options_html += "<option value='Masculino' "+(sexo=='Masculino' ? "selected" : null)+">Masculino</option>";
				generos_options_html += "<option value='Feminino' "+(sexo=='Feminino' ? "selected" : null)+">Feminino</option>";
				generos_options_html += "<option value='Outro' "+(sexo=='Outro' ? "selected" : null)+">Outro</option>";

			generos_options_html += "</select>";

			// store 'update cliente' html to this variable
			var update_cliente_html="";

			// 'read clientes' button to show list of clientes
			update_cliente_html+="<div id='read-clientes' class='btn btn-primary pull-right m-b-15px read-clientes-button'>";
				update_cliente_html+="<span class='glyphicon glyphicon-list'></span> Listar clientes";
			update_cliente_html+="</div>";

			// build 'update cliente' html form
			// we used the 'required' html5 property to prevent empty fields
			update_cliente_html+="<form id='update-cliente-form' action='#' method='post' border='0'>";
				update_cliente_html+="<table class='table table-hover table-responsive table-bordered'>";

					// nome field
					update_cliente_html+="<tr>";
						update_cliente_html+="<td>Nome</td>";
						update_cliente_html+="<td><input value=\"" + nome + "\" type='text' name='nome' class='form-control' required /></td>";
					update_cliente_html+="</tr>";

					// email field
					update_cliente_html+="<tr>";
						update_cliente_html+="<td>E-mail</td>";
						update_cliente_html+="<td><input value=\"" + email + "\" type='email' name='email' class='form-control' required /></td>";
					update_cliente_html+="</tr>";

					// cpf field
					update_cliente_html+="<tr>";
						update_cliente_html+="<td>CPF</td>";
						update_cliente_html+="<td><input value=\"" + cpf + "\" type='text' name='cpf' class='form-control cpf-mask' /></td>";
					update_cliente_html+="</tr>";

					// telefone field
					update_cliente_html+="<tr>";
						update_cliente_html+="<td>Telefone</td>";
						update_cliente_html+="<td><input value=\"" + telefone + "\" type='text' name='telefone' class='form-control telefone-mask' /></td>";
					update_cliente_html+="</tr>";

					// sexo 'select' field
					update_cliente_html+="<tr>";
						update_cliente_html+="<td>Sexo</td>";
						update_cliente_html+="<td>" + generos_options_html + "</td>";
					update_cliente_html+="</tr>";

					// status 'select' field
					update_cliente_html+="<tr>";
						update_cliente_html+="<td>Status</td>";
						update_cliente_html+="<td>";
							update_cliente_html+="<select name='status' class='form-control'>";
								update_cliente_html+="<option value='ativo' "+(status=='ativo' ? "selected" : null)+">Ativo</option>";
								update_cliente_html+="<option value='inativo' "+(status=='inativo' ? "selected" : null)+">Inativo</option>";
							update_cliente_html+="</select>";
						update_cliente_html+="</td>";
					update_cliente_html+="</tr>";

					update_cliente_html+="<tr>";

						// hidden 'cliente id' to identify which record to delete
						update_cliente_html+="<td><input value=\"" + _id + "\" name='id' type='hidden' /></td>";

						// button to submit form
						update_cliente_html+="<td>";
							update_cliente_html+="<button type='submit' class='btn btn-info'>";
								update_cliente_html+="<span class='glyphicon glyphicon-edit'></span> Atualizar cliente";
							update_cliente_html+="</button>";
						update_cliente_html+="</td>";

					update_cliente_html+="</tr>";

				update_cliente_html+="</table>";
			update_cliente_html+="</form>";

			// inject to 'page-content' of our app
			$("#page-content").html(update_cliente_html);
		});
    });
	
	// chage page title
	changePageTitle("Atualizar cliente");
	
	// will run if 'create cliente' form was submitted
	$(document).on('submit', '#update-cliente-form', function() {
		// get form data
		var form_data = JSON.stringify($(this).serializeObject());
		
		// submit form data to api
		$.ajax({
			url: url_req+"clientes/"+id,
			type: "PUT",
			contentType: 'application/json',
			data: form_data,
			success: function(result) {
				// cliente was updated, go back to clientes list
				$('.read-clientes-button').click();
			},
			error: function(xhr, resp, text) {
				// show error to console
				console.log(xhr, resp, text);
			}
		});

		return false;
	});
});