 
 
 const loader = document.querySelector('.loader');

  window.addEventListener('load', () => {

      loader.classList.add('fondu-out');

  })



window.onload = function()
{
  setTimeout(function()
  {
    document.getElementById("accueil").style.display = "flex";
  }, 5000);   
  setTimeout(function()
  {
    document.getElementById("loader").style.display = "none";
  }, 5000);
}

////////// compteur des languages ///////////////////

var n = 27; // Nombre final du compteur
var cpt = 0; // Initialisation du compteur
var duree = 7; // Durée en seconde pendant laquel le compteur ira de 0 à 15
var delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var node =  document.querySelector(".nblanguages"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
 
function countdown() {
  node.innerHTML = ++cpt;
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}
 
setTimeout(countdown, delta);