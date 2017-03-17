
var geocoder;
var map;
// initialisation de la carte Google Map de départ
function initialiserCarte() 
{
  geocoder = new google.maps.Geocoder();
  // On affiche tout le planisfère
  var latlng = new google.maps.LatLng(52.629729, -1.131592);
  var mapOptions = {
    zoom      : 2,
    center    : latlng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  }
  // map-canvas est le conteneur HTML de la carte Google Map
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function TrouverPays() {
  // Récupération de l'adresse tapée dans le formulaire
  var pays = document.getElementById('pays').value;
  geocoder.geocode( { 'address': pays}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      // Récupération des coordonnées GPS du lieu tapé dans le formulaire
      var strposition = results[0].geometry.location+"";
      strposition=strposition.replace('(', '');
      strposition=strposition.replace(')', '');
      // Affichage des coordonnées dans le <span>
      //document.getElementById('text_latlng').innerHTML='Coordonnées : '+strposition;
      // Création du marqueur du lieu (épingle)
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Adresse introuvable: ' + status);
    }
  });
}

function TrouverVille() {
  // Récupération de l'adresse tapée dans le formulaire
  var ville = document.getElementById('ville').value;
  geocoder.geocode( { 'address': ville}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      // Récupération des coordonnées GPS du lieu tapé dans le formulaire
      var strposition = results[0].geometry.location+"";
      strposition=strposition.replace('(', '');
      strposition=strposition.replace(')', '');
      // Affichage des coordonnées dans le <span>
      //document.getElementById('text_latlng').innerHTML='Coordonnées : '+strposition;
      // Création du marqueur du lieu (épingle)
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Adresse introuvable: ' + status);
    }
  });
}
// Lancement de la construction de la carte google map
google.maps.event.addDomListener(window, 'load', initialiserCarte);

function DescriptionPays()
{
	// Déclaration de variables
	var documentsAavoir=null;
	var langue=null;
	var monnaie=null;
	var particularite=null;
	var pays=null;
	var liDocument=null;
	var liLangue=null;
	var liMonnaie=null;
	var liParticularite=null
	var br=null;
	var liBr=null;
	
	// Suppression d'éléments déjà existant
	// Declaration des variables
	var Li = null;
	var Element = null;

	// creation de plusieurs lignes <li>
	pays = document.getElementById("pays").value;	// recuperation du nom de la tache saisie dans la barre
	documentsAavoir = document.createElement("li");	// creation d'un élément de type li
	langue = document.createElement("li");	// creation d'un élément de type li
	monnaie = document.createElement("li");	// creation d'un élément de type li
	particularite = document.createElement("li");	// creation d'un élément de type li
	
	//Vérification du pays
	if(pays=="Nouvelle-Zélande")
	{
		documentsAavoir=document.createTextNode("Documents à avoir: Passeport, VISA si durée > 3 mois ");	// texte 
		langue=document.createTextNode("Langue utilisée: anglais ");	// texte 
		monnaie=document.createTextNode("Monnaie utilisée: dolar néo-zélandais [NZD] ");	// texte 
		particularite=document.createTextNode("Particularité: fan de rugby, ALL-BLACKS ");	// texte 
		
		liDocument = document.getElementById("description-pays").appendChild(documentsAavoir);	// insertion de nouvel élément "li" dans "description-pays"
		//liBr=document.getElementById("description-pays").appendChild(br); // saut de ligne
		liLangue = document.getElementById("description-pays").appendChild(langue);
		//liBr=document.getElementById("description-pays").appendChild(br); // saut de ligne
		liMonnaie = document.getElementById("description-pays").appendChild(monnaie);
		//liBr=document.getElementById("description-pays").appendChild(br); // saut de ligne
		liParticularite = document.getElementById("description-pays").appendChild(particularite);
		//liBr=document.getElementById("description-pays").appendChild(br); // saut de ligne
	}
	if(pays=="Brésil")
	{
		documentsAavoir=document.createTextNode("Documents à avoir: Passeport, VISA si durée > 3 mois. ");	// texte 
		langue=document.createTextNode("Langue utilisée: portugais. ");	// texte 
		monnaie=document.createTextNode("Monnaie utilisée: Réal brésilien [BRL/R$]. ");	// texte 
		particularite=document.createTextNode("Particularité: fan de foot. ");	// texte 
		
		liDocument = document.getElementById("description-pays").appendChild(documentsAavoir);	// insertion de nouvel élément "li" dans "description-pays"
		liBr=document.getElementById("description-pays").appendChild(br); // saut de ligne
		liLangue = document.getElementById("description-pays").appendChild(langue);
		liBr=document.getElementById("description-pays").appendChild(br); // saut de ligne
		liMonnaie = document.getElementById("description-pays").appendChild(monnaie);
		liBr=document.getElementById("description-pays").appendChild(br); // saut de ligne
		liParticularite = document.getElementById("description-pays").appendChild(particularite);
		liBr=document.getElementById("description-pays").appendChild(br); // saut de ligne
	}

}