//const toggler = document.querySelector(".nav__toggler");
//const navbar = document.querySelector(".nav");
//toggler.addEventListener("click",(e) => {
 ///  navbar.classList.toggle("nav__expanded");
//}); 



$("#open-size").click(function () { 
    var img=$(this).find("img");
if($(this).attr("data-open")=="close"){
    
    img.css("transform","rotate(180deg)");
    $(".dropdown-choise-size").slideDown();
    $(".choise-size").css("border","none");
    $(this).attr("data-open","open")
}else{
    $(".dropdown-choise-size").slideUp();
    $(".choise-size").css("border","1px solid #cccccc");
    $(this).attr("data-open","close");
   
    img.css("transform","none")
}
    
});

$("#open-size-hellp").click(function () { 
    var img=$(this).find("img");
if($(this).attr("data-open")=="close"){
    
    img.css("transform","rotate(180deg)");
    $(".dropdown-choise-size").slideDown();
    $(".choise-size").css("border","none");
    $(this).attr("data-open","open")
}else{
    $(".dropdown-choise-size").slideUp();
    $(".choise-size").css("border","1px solid #cccccc");
    $(this).attr("data-open","close");
   
    img.css("transform","none")
}
    
});

function openMenu() {
    if ($("#res-list").attr("data-open") == "close") {
        
        $("#res-list").slideDown();
        
        $("#res-list").attr("data-open","open");
      } else {
        $("#res-list").slideUp("slow");
       
        $("#res-list").attr("data-open","close");
      }
    }