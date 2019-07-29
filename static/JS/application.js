var login =  " " ;
var token =  " " ;
var userid =  " " ;
var username =  " Você " ;



// Inicializacao do Menu
documento . addEventListener ( ' DOMContentLoaded ' , function () {
  var elems =  documento . querySelectorAll ( ' .sidenav ' );
  var instâncias =  H . Sidenav . init (elems);
});


function  hideAllPages () {
  documento . getElementById ( " loginPage " ). estilo . display  =  " nenhum " ;
  documento . getElementById ( " formPage " ). estilo . display  =  " nenhum " ;
  documento . getElementById ( " mapPage " ). estilo . display  =  " nenhum " ;
  
}
function  showLoginPage () {
  hideAllPages ();
  documento . getElementById ( " loginPage " ). estilo . display  =  " block " ;
}
function  showFormPage () {
  hideAllPages ();
  documento . getElementById ( " formPage " ). estilo . display  =  " block " ;
}
function  showMapPage () {
  hideAllPages ();
  documento . getElementById ( " mapPage " ). estilo . display  =  " block " ;
  listForm ();
}   


função  saveNewUser ( login , userid , username , useremail ) {
	addMarker (latitude, longitude, nome de usuário);
	documento . getElementById ( " userfield " ). innerHTML  =  " Usuário: <b> "  + nome de usuário +  " </ b> " ;
	var url =  " / saveNewUser? "
				+  " login = "  + login
				+  " & userid = "  + userid
        +  " & latitude = "  + latitude
        +  " & longitude = "  + longitude				
				+  " & username = "  + nome de usuário
				+  " & useremail = "  + useremail;
	
  fetch (url, {método :  ' POST ' })
    . então ( função ( resposta ) {
      console . log ( ' Login bem-sucedido: '  + resposta);
    });
}