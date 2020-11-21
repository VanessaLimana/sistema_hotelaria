$(document).ready(function() {
 
    // show html form when 'delete cliente' button was clicked
    $(document).on('click', '.delete-cliente-button', function() {
		// get cliente id
		var id = $(this).attr("data-id");
		
		// bootbox for good looking 'confirm pop up'
		bootbox.confirm({

			message: "<h4>Você está certo disso?</h4>",
			buttons: {
				confirm: {
					label: '<span class="glyphicon glyphicon-ok"></span> Sim',
					className: 'btn-danger'
				},
				cancel: {
					label: '<span class="glyphicon glyphicon-remove"></span> Não',
					className: 'btn-primary'
				}
			},
			callback: function(result) {
				if(result == true) {
					$.ajax({
						url: url_req+"clientes/"+id,
						type: "DELETE",
						contentType: 'application/json',
						success: function(result) {
							// re-load list of clientes
							location.reload();
						},
						error: function(xhr, resp, text) {
							// show error to console
							console.log(xhr, resp, text);
						}
					});
				}
			}
		});
	});
});