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




    /*start light sliders*/

    $(document).ready(function () {
        $("#lightSlider").lightSlider({
            rtl: true,
            item: 5,
            autoWidth: true,
            slideMove:1,
            loop:true,
            pager: false,
            speed:200, //ms'
            auto: false,
            pause:8000,
            enableTouch:true,
            enableDrag:true,
            freeMove:false,
            swipeThreshold: 40,

        });
    });

     /*End light sliders*/

     //Main Slider//

     $(document).ready(function () {
        $("#lightSlider3").lightSlider({
            rtl: true,
            item: 3,
            autoWidth: true,
            loop: true,
            pager: false,
            speed: 2000, //ms'
            auto: true,
            pause: 5000,


            slideEndAnimation: true,
            responsive : [
                {
                    breakpoint:768,
                    settings:{
                        item:1,
                        slideMargin:16
                    }


                    
                }
               

            ],

        });
    });

     // End Main Slider//

     $(document).ready(function () {
        $("#lightSlider2").lightSlider({
            rtl: true,
            item: 5,
            autoWidth: true,

            pager: false
        });
    });


    $(document).ready(function () {
        $("#lightSlider4").lightSlider({
            rtl: true,
            item: 5,
            autoWidth: true,

            pager: false
        });
    });

    $(document).ready(function () {
        $("#lightSlider5").lightSlider({
            rtl: true,
            item: 5,
            autoWidth: true,

            pager: false
        });
    });

    $(document).ready(function () {
        $("#lightSlider6").lightSlider({
            rtl: true,
            item: 5,
            autoWidth: true,
            loop: true,
            pager: false,
            speed: 2000, //ms'
            auto: true,
            pause: 5000,

        });
    });






    if (window.innerWidth > 1024 ) {
        console.log("fgfcvgb")
        $("#move-this").appendTo("#move-here");
        
    }



   