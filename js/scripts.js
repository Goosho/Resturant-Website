$(document).ready(function(){
    		$('#mycarousel').carousel({interval: 200});
    		  $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });

    		  $("#loginbtn").click(function(e){
    			e.preventDefault();
				$('#loginModal').modal('show')                // initializes and invokes show immediately
	   		});

    		$("#reservebtn").click(function(e){
    			e.preventDefault();
				$('#reserveModal').modal('show')                // initializes and invokes show immediately
	   		}); 
       	});