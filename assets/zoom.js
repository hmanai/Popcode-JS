
/*

        /***************************
         * VARIABLE INITIALISATION *
         ***************************/
         const img = document.querySelector(".myImg");
         // var dragItem = document.querySelector("#resultat img");
         var container = document.querySelector(".background-img");
         var active = false;
         var currentX = 0;
         var currentY = 0;
         var initialX;
         var initialY;
         var xOffset = 0;
         var yOffset = 0;
         var imgsize = 1
         let zoom = 1;
         const indiceZoom = 1;
 
 
 
         /*****************
          * ADD LISTENERS *
          *****************/
          img.addEventListener("mousedown", dragStart, false);
          img.addEventListener("mouseup", dragEnd, false);
          img.addEventListener("mousemove", drag, false);
 
         /***********************
          * LUNCH DRAG EVENMENT *
          ***********************/
         function dragStart(e) {
             initialX = e.clientX - xOffset;
             initialY = e.clientY - yOffset;
             if (e.target === img) {
                 active = true;
             }
 
           //  console.log(e.clientX)
         }
         /**********************
          * STOP DRAG EVENMENT *
          **********************/
         function dragEnd(e) {
             initialX = currentX;
             initialY = currentY;
             active = false;
         }
         /****************
          * DRAG PROCESS *
          ****************/
         function drag(e) {
             if (active) {
                
                 e.preventDefault();
                 currentX = e.clientX - initialX;
                 currentY = e.clientY - initialY;
                 xOffset = currentX;
                 yOffset = currentY;
 
 //console.log(currentX, currentY)
 
                 setTranslate(currentX, currentY, img);
             }
         }
         /*********************
          * MOVEMENT FUNCTION *
          *********************/
         function setTranslate(xPos, yPos, el) {
             el.style.transform = "translate(" + xPos + "px, " + yPos + "px) scale(" + imgsize + ")"; 
         }
         /*****************
          * ZOOM FUNCTION *
          *****************/
         document.addEventListener("wheel", (e) => {
            // console.log(e)
            // console.log(e.clientX, e.clientY)
 
             if (e.deltaY > 0) {
                 img.style = "transform : translate("+ currentX+"px, "+currentY +"px)  scale("+(zoom += indiceZoom)+");   "
                 imgsize = zoom += indiceZoom;
                // console.log(imgsize)
             } else {
                 img.style = "transform : translate("+ currentX+"px, "+currentY +"px)  scale("+(zoom -= indiceZoom)+")   "
                 if(imgsize < 1 ){
                     img.style.transform = `scale(1)`;  
                     zoom = 1
                 }
                 else{
                     img.style = "transform : translate("+ currentX+"px, "+currentY +"px)  scale("+(zoom -= indiceZoom)+")   "
                     imgsize = zoom -= indiceZoom;
                 } 
                 //console.log(imgsize)
             }
         })

      /*********** add event to + and - for zooming out and in */

      const zoomIn = document.querySelector('.plus');
      const zoomOut = document.querySelector('.moin');
      const barreZoom = document.querySelector('.barZoom')

zoomIn.addEventListener('click', (event) => {
    var myImg = document.querySelector(".myImg");
    var barreZoom = document.querySelector(".barZoom");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    var heightBarZoom = barreZoom.clientHeight; 
    if (width == 2000) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } else {
        myImg.style.width = (width + 50) + "px";
        myImg.style.height=(height + 50) + "px";
        barreZoom.style.height=(heightBarZoom + 20) +"px" ;
    }
});

zoomOut.addEventListener('click', (event) => {
    var myImg = document.querySelector(".myImg");
    var width = myImg.clientWidth;
    var height = myImg.clientHeight;
    var heightBarZoom = barreZoom.clientHeight; 
    if (width == 2000) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } else {
        myImg.style.width = (width - 50) + "px";
        myImg.style.height=(height - 50) + "px"
        
        barreZoom.style.height=(heightBarZoom - 20) +"px" ;

    }
});

