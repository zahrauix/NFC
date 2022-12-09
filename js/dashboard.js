window.addEventListener("load", () => {
    "use strict";
   
    var sidebar = document.querySelector('.sidebar');
    var hamber = document.querySelector(".hamber-icon");
    var Xbtn = document.querySelector(".Xbtn");
    
    Xbtn.addEventListener('click', function (event) {
        var target = event.target.id;
        $(".sidebar").animate({
            
            right: "-=350",
            opacity:"0"
           
          }, 200, function() {
            
          });
        
        
    })
    
    hamber.addEventListener('click', function () {
         sidebar.style.display = "flex";
        $(".sidebar").animate({
            
            right: "+=350",
            opacity:"1"
           
          }, 100, function() {
            // Animation complete.
          });
    })
    
    
    
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    
    
    
    function previewFile(input){
        var file = $("#input").get(0).files[0];
    
        if(file){
            var reader = new FileReader();
    
            reader.onload = function(){
                $("#previewImg").attr("src", reader.result);
            }
    
            reader.readAsDataURL(file);
        }
    }
    
    
    function Func(Shahrestanha) {
        var _Shahrestan = document.getElementById("Shahrestan");
        _Shahrestan.options.length = 0;
        if (Shahrestanha != "") {
            var arr = Shahrestanha.split(",");
            for (i = 0; i < arr.length; i++) {
                if (arr[i] != "") {
                    _Shahrestan.options[_Shahrestan.options.length] = new Option(arr[i], arr[i]);
                }
            }
        }
    }
    
    
    
    $(function () {
        $(".ddl-select").each(function () {
          $(this).hide();
          var $select = $(this);
          var _id = $(this).attr("id");
          var wrapper = document.createElement("div");
          wrapper.setAttribute("class", "ddl ddl_" + _id);
      
          var input = document.createElement("input");
          input.setAttribute("type", "text");
          input.setAttribute("class", "ddl-input");
          input.setAttribute("id", "ddl_" + _id);
          input.setAttribute("readonly", "readonly");
          input.setAttribute(
            "placeholder",
            $(this)[0].options[$(this)[0].selectedIndex].innerText
          );
      
          $(this).before(wrapper);
          var $ddl = $(".ddl_" + _id);
          $ddl.append(input);
          $ddl.append("<div class='ddl-options ddl-options-" + _id + "'></div>");
          var $ddl_input = $("#ddl_" + _id);
          var $ops_list = $(".ddl-options-" + _id);
          var $ops = $(this)[0].options;
          for (var i = 0; i < $ops.length; i++) {
            $ops_list.append(
              "<div data-value='" +
                $ops[i].value +
                "'>" +
                $ops[i].innerText +
                "</div>"
            );
          }
      
          $ddl_input.click(function () {
            $ddl.toggleClass("active");
          });
          $ddl_input.blur(function () {
            $ddl.removeClass("active");
          });
          $ops_list.find("div").click(function () {
            $select.val($(this).data("value")).trigger("change");
            $ddl_input.val($(this).text());
            $ddl.removeClass("active");
          });
        });
      });
      
    
      
    
    
      function Func(Shahrestanha) {
        var _Shahrestan = document.getElementById("Shahrestan");
        _Shahrestan.options.length = 0;
        if (Shahrestanha != "") {
            var arr = Shahrestanha.split(",");
            for (i = 0; i < arr.length; i++) {
                if (arr[i] != "") {
                    _Shahrestan.options[_Shahrestan.options.length] = new Option(arr[i], arr[i]);
                }
            }
        }
    }
    
  });
