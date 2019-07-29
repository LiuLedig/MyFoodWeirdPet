function  renderButton () {
    gapi . signin2 . render ( ' google-signin2 ' , {
        ' scope ' :  ' profile email ' ,
        ' largura ' :  240 ,
        ' altura ' :  50 ,
        ' longtitle ' :  verdade ,
        ' tema ' :  ' escuro ' ,
        ' onsuccess ' : onSuccess,
        ' onfailure ' : onFailure
    });
}


function  onSuccess ( googleUser ) {
    console . log ( ' Conectado como: '  +  googleUser . getBasicProfile (). getName ());
    login =  " gl "
    token =  googleUser . getAuthResponse (). id_token ;
    userid =  googleUser . getBasicProfile (). getId ();
    nome de usuário =  googleUser . getBasicProfile (). getName ();
    saveNewUser ( " gl " , userid, username, googleUser . getBasicProfile (). getEmail ());
    documento . getElementById ( " google-signin2 " ). innerHTML  =  ' <b> <a href="#" onclick="googleSignOut();"> DESLOGAR DO GOOGLE </a> </ b> ' ;
}

function  onFailure ( erro ) {
    console . log (erro);
}

função  googleSignOut () {
	var auth2 =  gapi . auth2 . getAuthInstance ();
    auth2 . signOut (). então ( function () {
       documento . getElementById ( " google-signin2 " ). innerHTML  =  ' <b> DESLOGADO DO GOOGLE </ b> ' ;
    });
}