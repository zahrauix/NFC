
// size in single product
$("#open-size").click(function () {
    var img = $(this).find("img");
    if ($(this).attr("data-open") == "close") {

        img.css("transform", "rotate(180deg)");
        $(".dropdown-choise-size").slideDown();
        $(".choise-size").css("border", "none");
        $(this).attr("data-open", "open")
    } else {
        $(".dropdown-choise-size").slideUp();
        $(".choise-size").css("border", "1px solid #cccccc");
        $(this).attr("data-open", "close");

        img.css("transform", "none")
    }

});

$("#open-size-hellp").click(function () {
    var img = $(this).find("img");
    if ($(this).attr("data-open") == "close") {

        img.css("transform", "rotate(180deg)");
        $(".dropdown-choise-size").slideDown();
        $(".choise-size").css("border", "none");
        $(this).attr("data-open", "open")
    } else {
        $(".dropdown-choise-size").slideUp();
        $(".choise-size").css("border", "1px solid #cccccc");
        $(this).attr("data-open", "close");

        img.css("transform", "none")
    }

});
// size in single product End

// Hamberger Menu
function openMenu() {
    if ($("#res-list").attr("data-open") == "close") {

        $("#res-list").slideDown();

        $("#res-list").attr("data-open", "open");
    } else {
        $("#res-list").slideUp("slow");

        $("#res-list").attr("data-open", "close");
    }
}
// Hamberger Menu




// Product cart in index page

if (window.innerWidth > 1024) {

    var cart=  $("#move-this");
    $("#move-this").remove();
    cart.appendTo("#move-here");

  }

  
if (window.innerWidth > 1024) {

    var cart=  $("#move-this2");
    $("#move-this2").remove();
    cart.appendTo("#move-here2");

  }

    
if (window.innerWidth > 1024) {

    var cart=  $("#move-this3");
    $("#move-this3").remove();
    cart.appendTo("#move-here3");
    $( "#Pcarousel" ).removeClass( "owl-carousel" );
  }

var userCommentCart=document.querySelectorAll(".user-comment-cart");
var userCommentDiv=document.querySelector(".user-comment2");
if (userCommentCart.length>3) {
    userCommentDiv.classList.add("owl-carousel");
    
    
}

  $('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    autoWidth: true,
    items:4
   


});
    




// Product cart in index page End


// Map svg in aboutUs page

$(".mashhad,.mashhad-address").mouseenter(function () {
    $(".mashhad-address").css("display", "flex");
})
$(".mashhad,.mashhad-address").mouseleave(function () {
    $(".mashhad-address").css("display", "none");
})



$(".tehran,.tehran-address").mouseenter(function () {
    $(".tehran-address").css("display", "flex");
})
$(".tehran,.tehran-address").mouseleave(function () {
    $(".tehran-address").css("display", "none");
})




$(".isfahan,.isfahan-address").mouseenter(function () {
    $(".isfahan-address").css("display", "flex");
})
$(".isfahan,.mashhad-address").mouseleave(function () {
    $(".isfahan-address").css("display", "none");
})


// Map svg in aboutUs page End




/* FAQ in aboutUs page */


$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
       
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open'); 

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('.accordion'), false);
  
});



/* FAQ in aboutUs page End*/

/* product-detail-drop-down in singleProduct page Start*/
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link2');
       
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('.accordion2'), false);
  
});
/* product-detail-drop-down in singleProduct page End*/



/* Comment-drop-down in singleProduct pageStart*/
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link3');
       
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('.accordion3'), false);
  
});
/* Comment-drop-down in singleProduct page End*/


/* Tab in single product */

$("#prv").css("display","block");
$(".click1").click(()=> {
    $(".click1").addClass("active-border-bottom");
    $(".click2").removeClass("active-border-bottom");
    $(".click3").removeClass("active-border-bottom");
    $("#prv").css("display","block");
    $("#detail_tab").css("display","none");
    $("#comments").css("display","none");

   
    
});
$(".click2").click(()=> {
    $(".click2").addClass("active-border-bottom");
    $(".click1").removeClass("active-border-bottom");
    $(".click3").removeClass("active-border-bottom");
    $("#prv").css("display","none");
    $("#detail_tab").css("display","block");
    $("#comments").css("display","none");

   
    
});
$(".click3").click(()=> {
    $(".click3").addClass("active-border-bottom");
    $(".click2").removeClass("active-border-bottom");
    $(".click1").removeClass("active-border-bottom");
    $("#prv").css("display","none");
    $("#detail_tab").css("display","none");
    $("#comments").css("display","block");

   
    
});

/* Tab Tab in single product End */


/* Price in products page */

(function($) {
		
    "use strict";
    
    var DEBUG = false, // make true to enable debug output
        PLUGIN_IDENTIFIER = "RangeSlider";

    var RangeSlider = function( element, options ) {
        this.element = element;
        this.options = options || {};
        this.defaults = {
            output: {
                prefix: '', // function or string
                suffix: '', // function or string
                format: function(output){
                    return output;
                }
            },
            change: function(event, obj){}
        };
        // This next line takes advantage of HTML5 data attributes
        // to support customization of the plugin on a per-element
        // basis.
        this.metadata = $(this.element).data('options');
    };

    RangeSlider.prototype = {

        ////////////////////////////////////////////////////
        // Initializers
        ////////////////////////////////////////////////////
        
        init: function() {
            if(DEBUG && console) console.log('RangeSlider init');
            this.config = $.extend( true, {}, this.defaults, this.options, this.metadata );

            var self = this;
            // Add the markup for the slider track
            this.trackFull = $('<div class="track track--full"></div>').appendTo(self.element);
            this.trackIncluded = $('<div class="track track--included"></div>').appendTo(self.element);
            this.inputs = [];
            
            $('input[type="range"]', this.element).each(function(index, value) {
                var rangeInput = this;
                // Add the ouput markup to the page.
                rangeInput.output = $('<output>').appendTo(self.element);
                // Get the current z-index of the output for later use
                rangeInput.output.zindex = parseInt($(rangeInput.output).css('z-index')) || 1;
                // Add the thumb markup to the page.
                rangeInput.thumb = $('<div class="slider-thumb">').prependTo(self.element);
                // Store the initial val, incase we need to reset.
                rangeInput.initialValue = $(this).val();
                // Method to update the slider output text/position
                rangeInput.update = function() {
                    if(DEBUG && console) console.log('RangeSlider rangeInput.update');
                    var range = $(this).attr('max') - $(this).attr('min'),
                        offset = $(this).val() - $(this).attr('min'),
                        pos = offset / range * 100 + '%',
                        transPos = offset / range * -100 + '%',
                        prefix = typeof self.config.output.prefix == 'function' ? self.config.output.prefix.call(self, rangeInput) : self.config.output.prefix,
                        format = self.config.output.format($(rangeInput).val()),
                        suffix = typeof self.config.output.suffix == 'function' ? self.config.output.suffix.call(self, rangeInput) : self.config.output.suffix;
                    
                    // Update the HTML
                    $(rangeInput.output).html(prefix + '' + format + '' + suffix);
                    $(rangeInput.output).css('left', pos);
                    $(rangeInput.output).css('transform', 'translate('+transPos+',0)');
                    
                    // Update the IE hack thumbs
                    $(rangeInput.thumb).css('left', pos);
                    $(rangeInput.thumb).css('transform', 'translate('+transPos+',0)');
                    
                    // Adjust the track for the inputs
                    self.adjustTrack();
                };
                
                // Send the current ouput to the front for better stacking
                rangeInput.sendOutputToFront = function() {
                    $(this.output).css('z-index', rangeInput.output.zindex + 1);
                };
                
                // Send the current ouput to the back behind the other
                rangeInput.sendOutputToBack = function() {
                    $(this.output).css('z-index', rangeInput.output.zindex);
                };
                
                ///////////////////////////////////////////////////
                // IE hack because pointer-events:none doesn't pass the 
                // event to the slider thumb, so we have to make our own.
                ///////////////////////////////////////////////////
                $(rangeInput.thumb).on('mousedown', function(event){
                    // Send all output to the back
                    self.sendAllOutputToBack();
                    // Send this output to the front
                    rangeInput.sendOutputToFront();
                    // Turn mouse tracking on
                    $(this).data('tracking', true);
                    $(document).one('mouseup', function() {
                        // Turn mouse tracking off
                        $(rangeInput.thumb).data('tracking', false);
                        // Trigger the change event
                        self.change(event);
                    });
                });
                
                // IE hack - track the mouse move within the input range
                $('body').on('mousemove', function(event){
                    // If we're tracking the mouse move
                    if($(rangeInput.thumb).data('tracking')) {
                        var rangeOffset = $(rangeInput).offset(),
                            relX = event.pageX - rangeOffset.left,
                            rangeWidth = $(rangeInput).width();
                        // If the mouse move is within the input area
                        // update the slider with the correct value
                        if(relX <= rangeWidth) {
                            var val = relX/rangeWidth;
                            $(rangeInput).val(val * $(rangeInput).attr('max'));
                            rangeInput.update();
                        }
                    }
                });
                
                // Update the output text on slider change
                $(this).on('mousedown input change touchstart', function(event) {
                    if(DEBUG && console) console.log('RangeSlider rangeInput, mousedown input touchstart');
                    // Send all output to the back
                    self.sendAllOutputToBack();
                    // Send this output to the front
                    rangeInput.sendOutputToFront();
                    // Update the output
                    rangeInput.update();
                });
                
                // Fire the onchange event 
                $(this).on('mouseup touchend', function(event){
                    if(DEBUG && console) console.log('RangeSlider rangeInput, change');
                    self.change(event);
                });
                
                // Add this input to the inputs array for use later
                self.inputs.push(this);
            });
            
            // Reset to set to initial values
            this.reset();
            
            // Return the instance
            return this;
        },
        
        sendAllOutputToBack: function() {
            $.map(this.inputs, function(input, index) {
                input.sendOutputToBack();
            });
        },
        
        change: function(event) {
            if(DEBUG && console) console.log('RangeSlider change', event);
            // Get the values of each input
            var values = $.map(this.inputs, function(input, index) {
                return {
                    value: parseInt($(input).val()),
                    min: parseInt($(input).attr('min')),
                    max: parseInt($(input).attr('max'))
                };
            });
            
            // Sort the array by value, if we have 2 or more sliders
            values.sort(function(a, b) {
                return a.value - b.value;
            });
            
            // call the on change function in the context of the rangeslider and pass the values
            this.config.change.call(this, event, values);
        },
        
        reset: function() {
            if(DEBUG && console) console.log('RangeSlider reset');
            $.map(this.inputs, function(input, index) {
                $(input).val(input.initialValue);
                input.update();
            });
        },
        
        adjustTrack: function() {
            if(DEBUG && console) console.log('RangeSlider adjustTrack');
            var valueMin = Infinity,
                rangeMin = Infinity,
                valueMax = 0,
                rangeMax = 0;
            
            // Loop through all input to get min and max
            $.map(this.inputs, function(input, index) {
                var val = parseInt($(input).val()),
                    min = parseInt($(input).attr('min')),
                    max = parseInt($(input).attr('max'));
                
                // Get the min and max values of the inputs
                valueMin = (val < valueMin) ? val : valueMin;
                valueMax = (val > valueMax) ? val : valueMax;
                // Get the min and max possible values
                rangeMin = (min < rangeMin) ? min : rangeMin;
                rangeMax = (max > rangeMax) ? max : rangeMax;
            });
            
            // Get the difference if there are 2 range input, use max for one input.
            // Sets left to 0 for one input and adjust for 2 inputs
            if(this.inputs.length > 1) {
                this.trackIncluded.css('width', (valueMax - valueMin) / (rangeMax - rangeMin) * 100 + '%');
                this.trackIncluded.css('left', (valueMin - rangeMin) / (rangeMax - rangeMin) * 100 + '%');
            } else {
                this.trackIncluded.css('width', valueMax / (rangeMax - rangeMin) * 100 + '%');
                this.trackIncluded.css('left', '0%');
            }
        }
    };

    RangeSlider.defaults = RangeSlider.prototype.defaults;
    
    $.fn.RangeSlider = function(options) {
        if(DEBUG && console) console.log('$.fn.RangeSlider', options);
        return this.each(function() {
            var instance = $(this).data(PLUGIN_IDENTIFIER);
            if(!instance) {
                instance = new RangeSlider(this, options).init();
                $(this).data(PLUGIN_IDENTIFIER,instance);
            }
        });
    };

}
)(jQuery);


var rangeSlider = $('#facet-price-range-slider');
if(rangeSlider.length > 0) {
rangeSlider.RangeSlider({
output: {
  format: function(output){
    return output.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  },
  suffix: function(input){
    return parseInt($(input).val()) == parseInt($(input).attr('max')) ? this.config.maxSymbol : '';
  }
}
});
}

/* Price in products page End */


// Filter button in product page

  $(".filter-button-content").click(()=> {
    console.log("fgb");
    $(".filter").css("display","flex");
  })

  $('#closeFilter').click(()=> {
    $(".filter").css("display","none");
  })

// Filter button in product page End



//   Dropdown Filter button in product page

 $(".dropdown").click(()=> {
    $($(this) > ".dropdown-content").slideToggle();

})

function toggleSlide(dropDownContentId) {
   var dropDownContent=$(".dropdown-content");
for (let i = 0; i < dropDownContent.length; i++) {
    if (dropDownContent[i].id!=dropDownContentId) {
        $(dropDownContent[i]).slideUp();
    }
}
  $(`#${dropDownContentId}`).slideToggle();
  $("#Arrow-b").css("transform", "rotate: revert");
}

//   Dropdown Filter button in product page End



//   Mega Menu respnsive

$("#dropdown-w").on("click",function(){
    $(".mega-menu-w").fadeToggle("fast");
    $(".mega-menu-m").css("display","none");
    

    
})

$("#dropdown-m").on("click",function(){
    $(".mega-menu-w").css("display","none");
    $(".mega-menu-m").fadeToggle("fast");

    
})

//   Mega Menu respnsive









// /range slider



  document.querySelectorAll(".__range-step").forEach(function(ctrl) {
	var el = ctrl.querySelector('input');        
	var output = ctrl.querySelector('output'); 
	var newPoint, newPlace, offset;
	el.oninput =function(){ 
		// colorize step options
		ctrl.querySelectorAll("option").forEach(function(opt) {
			if(opt.value<=el.valueAsNumber)                
				opt.style.backgroundColor = 'black';
			else
				opt.style.backgroundColor = '#aaa';
		});           
		// colorize before and after
		var valPercent = (el.valueAsNumber  - parseInt(el.min)) / (parseInt(el.max) - parseInt(el.min));            
		var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+
		valPercent+', black), color-stop('+
		valPercent+', #aaa));';
		el.style = style;

		// Popup
    if((' ' + ctrl.className + ' ').indexOf(' ' + '__range-step-popup' + ' ') > -1)
    {
			var selectedOpt=ctrl.querySelector('option[value="'+el.value+'"]');
			output.innerText= selectedOpt.text;
			output.style.left = "50%"; 
			output.style.left = ((selectedOpt.offsetLeft + selectedOpt.offsetWidth/2) - output.offsetWidth/2) + 'px'; 
    }           
	};
	el.oninput();    
});

window.onresize = function(){
	document.querySelectorAll(".__range").forEach(function(ctrl) {
		var el = ctrl.querySelector('input');    
		el.oninput();    
	});
};

// /range slider


  

//   $(".size-table2").click(()=>{
//     console.log($(this.className));
//     $(this).css("background-color","#000");
// });
  




function changeBg(id) {
    $(".size-table2").css("background-color","#fff")
    $(".size-table2").css("color","#000")
    $(`#${id}`).css("background-color","#000");
    $(`#${id}`).css("color","#fff");
}




// like btn



// function likeBhChange() {
//     var element=document.querySelector(".likebtn-click")
//     if(element.classList.contains("r-like")){
//         $(".likebtn-click").addClass( "r-like-click" );
//         $(".likebtn-click").removeClass( "r-like" );
//     }else{
//         $(".likebtn-click").addClass( "r-like" );
//         $(".likebtn-click").removeClass( "r-like-click" );
//     }
    
    
// }







  



function dropD(text) {

    $("#drMain").html(`${text}<span><img src="icons/Down Arrow.svg" id="Arrow-b" ></span>`);
    $(".dropdown-content-modal").css("display","none");
    

    
}







// btn smart size




$("#height-1 , #weight-1").keyup(()=> {
    
    var hInput=$("#height-1").val();
    var wInput=$("#weight-1").val();
    if (hInput.length>=3 && wInput.length>= 2) {
       
        
        $("#btn-smart-size").prop('disabled', false);
        $("#btn-smart-size").removeClass("smart-size-btn");
        $("#btn-smart-size").addClass("smart-size-btn-active");


    }else{
        
        $("#btn-smart-size").prop('disabled', true);
        $("#btn-smart-size").addClass("smart-size-btn");
        $("#btn-smart-size").removeClass("smart-size-btn-active");

    }
   
})


// modal 5
$("#progressB2").css("background-color","#acacac");
$('input[type=radio][name=featured]').change(function() {
    var radio1=$("#featured-1").prop("checked");
    var radio2=$("#featured-2").prop("checked");
    
    if (radio1 , !radio2) {
        $("#progressB1").css("background-color","#32CD8C");
        $("#progressB2").css("background-color","#acacac");
    }else{
        $("#progressB1").css("background-color","#acacac");
        $("#progressB2").css("background-color","#32CD8C");
    }
})




//open modal
function zoomFunction(src) {
    
    console.log(src);
    $("#zoom-item").attr("src", src);
    $("#myModal2").css("display","block");
}
$(".close").click(()=> {
    $("#myModal2").css("display","none");
})






function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  


  
$(".nav1__shop").click(function(event) {
    if ($(window).width() < 1024){
        window.location.href = "CartHome.html";
    }else{
        $(".shoping-cart-list").toggle();
    }
   
    
})


   $(document).on('click',function(event){
     let target=$(event.target).attr('class');
 
     if ($(event.target).hasClass("navShop")) {
         return;
     }
     if (!$(event.target).hasClass("jq")) {
         $(".shoping-cart-list").css("display","none");
       }
   })





   //   Search From 
const searchForm = document.querySelector('.search-form');
const search = document.querySelector('.search');

const nav1 = document.querySelector('.nav1');
const mainHeader = document.querySelector('.main-header');
var show=false;

searchForm.addEventListener('click', function () {
    search.classList.toggle('show');
    nav1.style.visibility = "hidden";
    show=true;
    setTimeout(function () {
        mainHeader.style.backgroundColor = "rgba(193, 193, 193, 1)";
    }, 300);


})
$('.close-i').on('click', closeSearch);

 $('section').on('click', function() {
     if (show) {
         closeSearch();
     }
});

function closeSearch() {
    search.classList.toggle('show');
    $(".nav1").css('visibility', 'visible');
    $(".main-header").css("backgroundColor", "rgba(0, 0, 0, 0.8)");
    show=false;
}
//   Search From 




var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("tt-select");

for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);




var firstSelectedColor=$(".pickColorImg").attr('color');

$("#colorInput").val(firstSelectedColor);

$(".pickColorImg").click(function(event){
  let color=  $(this).attr('color');
  $(".pickColorImg").css('border','none');
  $("#colorInput").val(color);
  $(this).css('border','1px solid black');
  
})

