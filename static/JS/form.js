função  saveForm () {
	var message =  document . getElementById ( " feedbackmessageTextArea " ). valor ;
	var contato =  documento . getElementById ( " contactField " ). valor ;

	var url =  " / saveForm? " 
				+  " contato = "  +  encodeURIComponent (contato)
				+  " & message = "  +  encodeURIComponent (message)
				+  " & login = "  + login
				+  " & userid = "  + userid
				+  " & latitude = "  + latitude
        		+  " & longitude = "  + longitude	
				+  " & token = "  + token;

	fetch (url, {método :  ' POST ' })
		. então ( função ( resposta ) {
			var itemid = response;
			listForm ();
			showFormPage ();
		});
}

function  listForm () {
	var url =  " / listForm? "
				+  " login = "  + login
				+  " & userid = "  + userid
				+  " & token = "  + token;
	fetch (url, {método :  ' POST ' })
		. então (( resp ) =>  resp . json ())
		. então ( função ( respjson ) {
			var list =  " " ;
			para ( var k in respjson) {
				var item = respjson [k];
				var date =  " " ;
				if ( item . timestamp  ! =  indefinido  && ( item . timestamp  ! =  " " )) {
					var date =  new  Date ( item . data e hora . $ data );
				}
				   listar + =  " <hr> "  + 
						   data +  " <br/> "  +
						   item . entre em contato com  +  " <br/> "  + 
						   item . mensagem ;
				   addMarker ( parseInt ( item . latitude ), parseInt ( item . longitude ), item . message );
			}
			documento . getElementById ( " listFormDiv " ). innerHTML  = list +  " <hr> " ;
		});
}