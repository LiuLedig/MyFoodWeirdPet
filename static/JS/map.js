var latitude =  " " ;
var longitude =  " " ;
var map =  null ;

getLocation ();


function  getLocation () {
  if ( navigator . geolocation ) {
    navegador . geolocalização . getCurrentPosition (getLocationSuccess);
  } mais {
    x . innerHTML  =  "A geolocalização não é suportada por este navegador. " ;
  }
}

function  getLocationSuccess ( posição ) {
    latitude =  posição . coords . latitude ;
    longitude =  posição . coords . longitude ;
    initMap ();
}

function  initMap () {
	if (map ==  null ) {
		 map =  new  google.maps.Map ( documento . getElementById ( ' map ' ), {
		    zoom :  12 ,
		    center : {lat : latitude, lng : longitude}
		 });
		 addMarker (latitude, longitude, nome de usuário);
	}
}

function  addMarker ( lat , long , title ) {
  var marker =  new  google.maps.Marker ({
    position : {lat : lat, lng : long},
    mapa : mapa,
    título : título
  });
}