// cliente list html
function readClientesTemplate(data, keywords) {
	var read_clientes_html = "";
	
	read_clientes_html+="<!-- search clientes form -->";
		read_clientes_html+="<form id='search-cliente-form' action='#' method='post'>";
			read_clientes_html+="<div class='input-group pull-left w-30-pct'>";
				read_clientes_html+="<input type='text' id='search-clientes' value='"+keywords+"' name='keywords' class='form-control cliente-search-keywords' placeholder='Procurar clientes...' />";

				read_clientes_html+="<span class='input-group-btn'>";
					read_clientes_html+="<button type='submit' class='btn btn-default' type='button'>";
						read_clientes_html+="<span class='glyphicon glyphicon-search'></span>";
					read_clientes_html+="</button>";
				read_clientes_html+="</span>";

			read_clientes_html+="</div>";
		read_clientes_html+="</form>";

		read_clientes_html+="<!-- when clicked, it will load the create cliente form -->";
		read_clientes_html+="<div id='create-cliente' class='btn btn-primary pull-right m-b-15px create-cliente-button'>";
			read_clientes_html+="<span class='glyphicon glyphicon-plus'></span> Cadastrar cliente";
		read_clientes_html+="</div>";

		read_clientes_html+="<!-- start table -->";
		read_clientes_html+="<table class='table table-bordered table-hover'>";

			read_clientes_html+="<!-- creating our table heading -->";
			read_clientes_html+="<tr>";
				read_clientes_html+="<th class='w-20-pct'>Nome</th>";
				read_clientes_html+="<th class='w-25-pct'>E-mail</th>";
				read_clientes_html+="<th class='w-10-pct'>Sexo</th>";
				read_clientes_html+="<th class='w-15-pct'>Telefone</th>";
				read_clientes_html+="<th class='w-5-pct'>status</th>";
				read_clientes_html+="<th class='w-25-pct text-align-center'>Ações</th>";
			read_clientes_html+="</tr>";

		// loop through returned list of data
		$.each(data.docs, function(key, val) {
 
        	// creating new table row per record
        	read_clientes_html+="<tr>";
 
				read_clientes_html+="<td>"+val.nome+"</td>";
				read_clientes_html+="<td>"+val.email+"</td>";
				read_clientes_html+="<td>"+val.sexo+"</td>";
				read_clientes_html+="<td>"+val.telefone+"</td>";
				read_clientes_html+="<td>"+val.status+"</td>";
 
				read_clientes_html+="<!-- 'action' buttons -->";
				read_clientes_html+="<td class='text-align-center'>";
					read_clientes_html+="<!-- read cliente button -->";
					read_clientes_html+="<button class='btn btn-primary m-r-10px read-one-cliente-button' data-id='"+val._id+"'>";
						read_clientes_html+="<span class='glyphicon glyphicon-eye-open'></span> Ver";
					read_clientes_html+="</button>";

					read_clientes_html+="<!-- edit button -->";
					read_clientes_html+="<button class='btn btn-info m-r-10px update-cliente-button' data-id='"+val._id+"'>";
						read_clientes_html+="<span class='glyphicon glyphicon-edit'></span> Editar";
					read_clientes_html+="</button>";

					read_clientes_html+="<!-- delete button -->";
					read_clientes_html+="<button class='btn btn-danger delete-cliente-button' data-id='"+val._id+"'>";
						read_clientes_html+="<span class='glyphicon glyphicon-remove'></span> Deletar";
					read_clientes_html+="</button>";
				read_clientes_html+="</td>";
			read_clientes_html+="</tr>";
    	});
 
    // end table
    read_clientes_html+="</table>";
	
	// pagination
	if(data.page) {
		read_clientes_html+="<ul class='pagination pull-left margin-zero padding-bottom-2em'>";

			// first page
			if(data.pages) {
				//read_clientes_html+="<li><a data-page='1'>Primeira Página</a></li>";
			}

			// loop through pages
			for(var x = 1; x <= data.pages; x++) {
				var active_page = (x == data.page ? "class='active'" : "");
				read_clientes_html+="<li "+active_page+"><a data-page='"+x+"'>"+x+"</a></li>";
			}

			// last page
			if(data.pages > 1){
				//read_clientes_html+="<li><a data-page='"+data.pages+"'>Última Página</a></li>";
			}
		read_clientes_html+="</ul>";
	}
 
    // inject to 'page-content' of our app
    $("#page-content").html(read_clientes_html);
}

//https://www.codeofaninja.com/2016/07/react-crud-tutorial.html