
document.addEventListener('click', function(){

  let input = document.querySelector('.searLang')
  input.classList.remove('opacity')
  let tapLang = document.querySelector('.tapLang')
  tapLang.classList.remove('opacity')             
  document.querySelector('.searLang').focus(); 
  document.querySelector('.start').style.display = "none"       

})

document.addEventListener('keypress', () => {

  let input = document.querySelector('.searLang')
  input.classList.remove('opacity')
  let tapLang = document.querySelector('.tapLang')
  tapLang.classList.remove('opacity')             
  document.querySelector('.searLang').focus();

});

/////////////annuler le focus de input////////////

let curseurFocus = document.querySelector('.searLang')
curseurFocus = document.addEventListener('keyup', function(){
  document.querySelector('.searLang').blur();
} )

////////////////////////

let tabLanguage = ["JavaScript", "HTML", "CSS", "SQL", "PYTHON", "JAVA", "BASH", "SHELL", "PowerShell", "c#", "PHP", "C++", "TYPESCRIPT", "C", "RUBY", "GO", "ASSEMBLY", "SWIFT", "KOTLIN", "R", "VBA", "OBJECTIVE-C", "SCALA", "RUST", "DART", "ELIXIR", "CLOJURE", "WEBASSEMBLY"];
let tabLangTrouv = [];
let tabLogo = [];
let j = 0;
let LanguageEntrer;
let score = document.querySelector(".langageTrouve");
let faute = document.querySelectorAll(".nbFaute");
let jeuxTerminer = document.querySelector(".gameover");
let rejouer = document.querySelector(".restart");
let wrong = [];
let affDescription = document.querySelector("#langDescrip")
let affLoi = document.querySelector('.mentLegals')
let affLogo = document.querySelector('#logoPic')
let afLg = document.querySelector('#myLogolang')
let nomLanguage = document.querySelector('#nomLang')
let scorefinale = 0

/////////////////////////

window.addEventListener('keydown', function(e){
  key = e.key
  if(key == 'Escape'){
    let input = document.querySelector('.searLang')
    input.classList.add('opacity')
    let tapLang = document.querySelector('.tapLang')
    tapLang.classList.add('opacity')
    input.value = ''
    document.querySelector('.start').style.display = "flex"       
  }
})

window.addEventListener("keyup", function(e){
  key = e.key

if (key == "Enter"){
 var verif = document.querySelector('.searLang').value
  //console.log(verif)
   if(verif === "" )

      {
      
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Entre un nom de language !! ',
          showConfirmButton: false,
          timer: 2000
        })
      }
   else {

  searchingLang()
   setTimeout(() => {
    let input = document.querySelector('.searLang')
    input.classList.add('opacity')
    let tapLang = document.querySelector('.tapLang')
    tapLang.classList.add('opacity')

  }, 0)
}
}
})

function searchingLang() {
  LanguageEntrer = document.getElementById("chercher").value;

  let find = false
  let entred = false  // language déja entré

    ///////////////////////////////////////////////////////    test   ////////////////////////////////////////

     for (var i = 0; i < tabLanguage.length; i++) {    
        if (LanguageEntrer.toLowerCase() == tabLanguage[i].toLowerCase()) {
        //console.log(LanguageEntrer.toLowerCase() + " -> " + tabLanguage[i].toLowerCase())
        //console.log("félicitation vous avez trouvé un language"); 
           if ( tabLangTrouv.length===27){
             alert('felicitation vous avez fini le jeux')

              let finJeu = document.querySelector('#felicitation')
              document.querySelector('#felicitation').style.visibility = "visible"





           }
           else{ 

        tabLangTrouv.push(LanguageEntrer)



        find=true
        /////////sweetalert///////
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bravoo !! ',
            showConfirmButton: false,
            timer: 2000
          })
      ////////////////////////

      break
 
  } }
  else {

find=false
    }
  }

  if(find==true){

    fetch("languages.json")
    .then(reponse => reponse.json())
    .then(response => {
      var dataLength = response.languages.langage.length
      //console.log(response.languages.langage.length)
      for (let j = 0 ; j < response.languages.langage.length; j++ ){
       // console.log(response.languages.langage[j].name)
        if ( LanguageEntrer.toLowerCase() == (response.languages.langage[j].name).toLowerCase() ){
          let descLang = response.languages.langage[j].description
          let logoLang = response.languages.langage[j].picture
          let nomLang = response.languages.langage[j].name
          affDescription.innerHTML=descLang 
          nomLanguage.innerHTML=nomLang
          affLogo.src = logoLang
          
          setTimeout(() => {
            let input = document.querySelector('.searLang')
            input.classList.remove('opacity')
            let tapLang = document.querySelector('.tapLang')
            tapLang.classList.remove('opacity')
            document.querySelector('.searLang').blur();

          }, 0)
          document.querySelector('#lgTrouver').style.display = "flex"
          document.querySelector('.tapLang').style.display = "none"

        }}

        // script pour fermer la page de description des languages trouvés//
           var close = document.querySelector('.fermer')
           close.addEventListener('click', function() {
             document.querySelector('#lgTrouver').style.display = "none"
             setTimeout(() => {
              let input = document.querySelector('.searLang')
              input.classList.add('opacity')
              let tapLang = document.querySelector('.tapLang')
              tapLang.classList.add('opacity')
          
            }, 0)
       
           })
    })

/////////////script pour fermer la page de la liste des languages trouvés ///////////////////

var closed = document.querySelector('.close')
closed.addEventListener('click', function() {
  document.querySelector('.listeLangTrouv').style.display = "none"
 // console.log("hello")
})

//////////////////////////////////////////////////////////////

    for(let i = 0; i < tabLangTrouv.length;i++ ){
      score.innerHTML = '0'+tabLangTrouv.length
       if (tabLangTrouv.length >= 10){score.innerHTML = tabLangTrouv.length}


      }
      
 //////// SUPPRIMER LE LANGUAGE ENTRER DU TABLEAU ////////

      let langPosition = tabLanguage.indexOf(tabLanguage[i])
      tabLanguage.splice(langPosition, 1)

///////////////////////// remettre le curseur pour la nouvelle saisie //////

    document.querySelector('.searLang').blur();
    document.querySelector('.searLang').value= "";

  }

/////////////////////////////////////////////////////////////////////////// 

  else  if (tabLangTrouv.includes(LanguageEntrer) == true ) { 
    // alert ( "language déja saisie, veuillez saisir un autre language") 
    Swal.fire("language déja saisie, veuillez saisir un autre language!!")
    

    //document.querySelector('.background-img').style.opacity = "1";
   
    document.querySelector('.searLang').focus();
    document.querySelector('.searLang').value = "";
    throw new Error('language deja saisie')


 }  

  else {
    
   
    wrong.push(LanguageEntrer);
    for (let i = 0; i < wrong.length ; i++){ 
      faute[i].style = " color: #0ea0b9; "
      if ( wrong.length === 1) { 
        // alert ('il vous reste deux chances')
        deuxChances();

       }
       else if ( wrong.length === 2) { 
        //lert ('il vous reste une seule chance')}

        uneChance();
      }

    document.querySelector('.background-img').style.opacity = "1";
    document.querySelector('.searLang').focus();
    document.querySelector('.searLang').value= "";
  }

 if (wrong.length == 3){
  
   document.querySelector('.gameover').style.visibility = "visible";
   document.querySelector('.restart').style.visibility = "visible";
   var scoreFinal = document.querySelector(".finalScor")
   scoreFinal.innerHTML = "<p> Ton score final est: "+ tabLangTrouv.length +" / 27"
   //console.log(tabLangTrouv.length)
   

}}


}
function deuxChances(){

  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Oops !! il te reste deux chances',
    showConfirmButton: false,
    timer: 2500
    
  })
  
}

function uneChance(){

  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Oops !! il te reste une seule chance',
    showConfirmButton: false,
    timer: 2500
  })
 
}

var listeLangTrouv = document.querySelector('.lang-finded')
var myLangList = document.querySelector('#myList')
listeLangTrouv.addEventListener('click', function(){
  //console.log(tabLangTrouv)
  if (tabLangTrouv.length === 0 ){
    //alert("Tu n'as pas encore trouver des languages !!")
    Swal.fire("Tu n'as pas encore trouver des languages !!")
    
  }

     else{

             var liste = tabLangTrouv.join('<br>')
             //console.log(liste)
             myLangList.innerHTML=liste
 
      document.querySelector('.listeLangTrouv').style.display = "flex"
        }
      })
    
  
    fetch("languages.json")
    .then(reponse => reponse.json())
    .then(response => {
      var dataLength = response.languages.langage.length
      for (let j = 0 ; j < response.languages.langage.length; j++ ){
        for ( let i = 0 ; i < tabLangTrouv.length; i++){
       let nameLanguage = tabLangTrouv[i];
       //console.log(response.languages.langage[j].name)
       if(   response.languages.langage[j].name === nameLanguage )
        {
          let logoLanguage = response.languages.langage[j].picture
          console.log(logoLanguage)
          afLg.src = logoLanguage
        }
        }
      }
    })

//////////////////////// JSON de mention legal ///////////
 
var loi = document.querySelector('.mlegale')
var monLoi = document.querySelector('#mentlegals')
loi.addEventListener ('click', function(){

  fetch("languages.json")
  .then(reponse => reponse.json())
  .then(response => {
    var dataLength = response.legals.legal.length
    //console.log(response.legals.legal.length)

  let descLoi = response.legals.legal[0].content
  //console.log(descLoi)
  monLoi.innerHTML=descLoi

  })

 
  let input = document.querySelector('.searLang')
  input.classList.add('opacity')
  let tapLang = document.querySelector('.tapLang')
tapLang.classList.add('opacity')
  document.querySelector('.mentLegal').style.display = "flex"
  document.querySelector('.searLang').blur();
  document.querySelector('#mentlegals').style.textDecoration = "none"

})

 // fermeture de la page des mention légal//

 var clos = document.querySelector('.fermerPage')
clos.addEventListener('click', function() {
  document.querySelector('.mentLegal').style.display = "none"
  //console.log("hello")


})
