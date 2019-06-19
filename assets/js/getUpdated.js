document.addEventListener("DOMContentLoaded", function(){   
  
let myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  let service_id = "default_service";
  let template_id = "template_MoVika1V";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
        Swal.fire({
            title: 'Thank You for joining to our Delightful community!',
            text: 'We will bring you fresh news about our yummy products!',
            type: 'success',
    
            confirmButtonText: "OK",
            confirmButtonColor: "#2ECC71",
          })   
       myform.find("button").text("Notify");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Notify");
    });
  return false;
});
    
(function(){
    emailjs.init("user_soVpI9Xjyn9JLidwJuzkP");
 })();
    

    })