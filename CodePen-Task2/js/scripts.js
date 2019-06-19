document.addEventListener("DOMContentLoaded", () => {   


       document.getElementById("blueHiderLinkThing").onclick = () => {
           var theDiv =  document.getElementById("list1");
           
           if(theDiv.style.visibility === 'hidden'){
               theDiv.style.visibility = 'visible'
           }
           else{
               theDiv.style.visibility = 'hidden';
           }
       }
    
})


  