janela . fbAsyncInit  =  function () {
	FB . init ({
		appId :  ' XXXXXXXXXXXX ' ,
		bolinho :  verdade ,
		XFBML :  verdade ,
		versão :  ' v3.2 '
	});
	FB . AppEvents . logPageView ();

	FB . getLoginStatus ( function ( response ) {
		statusChangeCallback (resposta);
	});

	FB . logout ( função ( resposta ) {
	});
};

( função ( d , s , id ) {
	var js, fjs =  d . getElementsByTagName (s) [ 0 ];
	if ( d . getElementById (id)) {
		retorno ;
	}
	js =  d . createElement (s);
	js . id  = id;
	js . src  =  " https://connect.facebook.net/en_US/sdk.js " ;
	fjs . parentNode . insertBefore (js, fjs);
})
( documento , ' script ' , ' facebook-jssdk ' );


function  checkLoginState () {
	FB . getLoginStatus ( function ( response ) {
	  statusChangeCallback (resposta);
	});
}

function  statusChangeCallback ( response ) {
	if ( response . status  ===  ' connected ' ) {
		token =  resposta . authResponse . accessToken ;
		userid =  response . authResponse . userID ;
		login =  " fb " ;
		getFbUser ();
	  } 
}

function  getFbUser () {
    FB . api ( ' / me? fields = id, email, nome ' , function ( response ) {
    	nome de usuário =  resposta . nome ;
	  	saveNewUser ( " fb " , resposta . id , nome de usuário, resposta . e-mail );
    });
}