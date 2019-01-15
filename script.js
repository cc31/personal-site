$(document).ready(function(){

	$("#project-sections").css("height", $("#project-titles").css("height"));
	
	dict = { 
     	itm1: "sec1",
     	itm2: "sec2",
        itm3: "sec3",
        itm4: "sec4",
     	itm5: "sec5",
     	itm6: "sec6",
     	itm7: "sec7",
     	itm8: "sec8"
	};

    $("#myname").hover(
        function(){
            $("div#project-sections").show();
            $("#bio").fadeIn();
        }, function(){
            $("#bio").hide();
    });

    $("#myname").click(function(){
        $("div#project-sections").show();
        $('html, body').animate({
            scrollTop: $("#bio").offset().top
        }, 500)
    });

    $("#project-titles p").hover(
    	function(){
            $("div#project-sections").show();
	    	var projectID = this.id;
	    	var sectionID = '#' + dict[projectID];
	    	// console.log(sectionID);
	        $(sectionID).fadeIn();
        }, function(){
	        var projectID = this.id;
	    	var sectionID = '#' + dict[projectID];
	        $(sectionID).hide();
    });

    $("#project-titles p").click(function() {
        $("div#project-sections").show();
        var projectID = this.id;
        var sectionID = '#' + dict[projectID];
        // console.log(sectionID);
        $(sectionID).fadeIn();

        $('html, body').animate({
            scrollTop: $("#project-sections").offset().top
        }, 500)
    });
});