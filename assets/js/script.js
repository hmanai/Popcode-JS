





// set up text to print, each item in array is new line
var aText = new Array(
"Développeur Web et Web mobile"
);
var iSpeed = 60; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("description");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter()



/******** animation deuxieme paragraphe */

var bText = new Array(
    "Passionné par le référencement web, le développement web, et en général par tout ce qui concerne les nouvelles technologies."
    );
    var iSpeedb = 50; // time delay of print out
    var iIndexb = 0; // start printing array at this posision
    var iArrLengthb = bText[0].length; // the length of the text array
    var iScrollAtb = 20; // start scrolling up at this many lines
     
    var iTextPosb = 0; // initialise text position
    var sContentsb = ''; // initialise contents variable
    var iRowb; // initialise current row
     
    function typewriterb()
    {
     sContents =  ' ';
     iRowb = Math.max(0, iIndexb-iScrollAtb);
     var destinationb = document.querySelector(".centeralign");
     
     while ( iRowb < iIndexb ) {
      sContentsb += bText[iRowb++] + '<br />';
     }
     destinationb.innerHTML = sContentsb + bText[iIndexb].substring(0, iTextPosb) + "_";
     if ( iTextPosb++ == iArrLengthb ) {
      iTextPosb = 0;
      iIndexb++;
      if ( iIndexb != bText.length ) {
       iArrLengthb = bText[iIndexb].length;
       setTimeout("typewriterb()", 500);
      }
     } else {
      setTimeout("typewriterb()", iSpeedb);
     }
    }
    
    typewriterb();

     /* **** animation nom et prenom  **** */

     

     /******************************* */
     /****************JSON***************** */




     let clickAffich = document.querySelectorAll('.carteProject')
     let desc = document.querySelector('.descripProj')
     let outil = document.querySelector('.outilUtilise')
     let projCapgemen = document.querySelector('.capgemen')
     let projCreative = document.querySelector('.creative')
     let projCalculatrice = document.querySelector('.calculatrice')
     let projpopcode = document.querySelector('.PopCode')
     let imageProject = document.querySelector(".imageProject")
     let projcrea = 'creative'
     let projCapg = 'capgemen'
     let projCalcul = 'calculatrice'
     let backgroundBlack = document.querySelector("#portfolio")
     let a = document.querySelector(".lien")


     projCapgemen.addEventListener('click', function(){
     document.querySelector('.projectDescrip').style.visibility = "visible"
     /*document.querySelector('.projectDescrip').style.transform = "translateY(-70%)"*/


     document.querySelector(".myWork").style.filter = "blur(5px)";
       fetch("../assets/projects.json")
       .then(reponse => reponse.json())
       .then(response => {
        var dataLength = response.projects.project.length       
        for (let j = 0 ; j < dataLength; j++ ){
            //console.log(response.projects.project[j].name)
            if (response.projects.project[j].name = "capgemen"){

                let descproj = response.projects.project[1].description
                let outilsjs = response.projects.project[1].outils
                let imagecapgemen = response.projects.project[1].picture
                //console.log(descproj)
                desc.innerHTML = descproj 
                outil.innerHTML = outilsjs
                imageProject.src = imagecapgemen
                document.querySelector('.lien').href = 'https://hamzam1516.promo-167.codeur.online/Capgemen/'

                //nomLanguage.innerHTML=nomLang
                //affLogo.src = logoLang
            }  
       }
       })
     } )


/****************affichage creative *******/


    projCreative.addEventListener('click', function(){
    document.querySelector('.projectDescrip').style.visibility = "visible"
    document.querySelector(".myWork").style.filter = "blur(5px)";
      fetch("../assets/projects.json")
      .then(reponse => reponse.json())
      .then(response => {
       var dataLength = response.projects.project.length       
       for (let j = 0 ; j < dataLength; j++ ){
           //console.log(response.projects.project[j].name)
           if (response.projects.project[j].name = "capgemen"){
               let descproj = response.projects.project[0].description
               let outilsjs = response.projects.project[0].outils
               let imagecapgemen = response.projects.project[0].picture
               //console.log(descproj)
               desc.innerHTML = descproj 
               outil.innerHTML = outilsjs
               imageProject.src = imagecapgemen
               document.querySelector('.lien').href = 'https://hamzam1516.promo-167.codeur.online/project1/'
               //nomLanguage.innerHTML=nomLang
               //affLogo.src = logoLang
           }  
      }
      })
    } )

/*******************************************/
/********************affichage Popcode***********************/

projpopcode.addEventListener('click', function(){
    document.querySelector('.projectDescrip').style.visibility = "visible"
 /*document.querySelector('.projectDescrip').style.transform = "translateY(90%)"*/

    document.querySelector(".myWork").style.filter = "blur(5px)";
      fetch("../assets/projects.json")
      .then(reponse => reponse.json())
      .then(response => {
       var dataLength = response.projects.project.length       
       for (let j = 0 ; j < dataLength; j++ ){
           //console.log(response.projects.project[j].name)
           if (response.projects.project[j].name = "capgemen"){
               let descproj = response.projects.project[3].description
               let outilsjs = response.projects.project[3].outils
               let imagecapgemen = response.projects.project[3].picture
               //console.log(descproj)
               desc.innerHTML = descproj 
               outil.innerHTML = outilsjs
               imageProject.src = imagecapgemen
               document.querySelector('.lien').href = 'https://hamzam1516.promo-167.codeur.online/popcode/'
               //nomLanguage.innerHTML=nomLang
               //affLogo.src = logoLang
           }  
      }
      })
    } )

/*******************************************/

/*****************affichage calculette********************** */

projCalculatrice.addEventListener('click', function(){
    document.querySelector('.projectDescrip').style.visibility = "visible"

    document.querySelector(".myWork").style.filter = "blur(5px)";
      fetch("../assets/projects.json")
      .then(reponse => reponse.json())
      .then(response => {
       var dataLength = response.projects.project.length       
       for (let j = 0 ; j < dataLength; j++ ){
           //console.log(response.projects.project[j].name)
           if (response.projects.project[j].name = "capgemen"){
               let descproj = response.projects.project[2].description
               let outilsjs = response.projects.project[2].outils
               let imagecapgemen = response.projects.project[2].picture
               //console.log(descproj)
               desc.innerHTML = descproj 
               outil.innerHTML = outilsjs
               imageProject.src = imagecapgemen
               document.querySelector('.lien').href = 'https://github.com/hmanai/calculatrice-js'
               //nomLanguage.innerHTML=nomLang
               //affLogo.src = logoLang
           }  
      }
      })
    } )



/*************************************** */





     /************************************* */


     /*********script pour fermer page JSON**************/

     var close = document.querySelector('.fermer')
     close.addEventListener('click', function() {
        document.querySelector('.projectDescrip').style.visibility = "hidden"
        document.querySelector(".myWork").style.filter = "blur(0)";
         console.log("hello")




     })

      /********************* */





       /************animation home********* */ /********************* */
        /********************* */
         /********************* */
          /********************* */

      

          
           /********************* */
            /********************* */ /********************* */
             /********************* */
              /********************* */ /********************* */
