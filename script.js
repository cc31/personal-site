$(document).ready(function(){

	$("#project-sections").css("height", $("#project-titles").css("height"));
	
	dict = { 
     	itm-jaie: "sec-jaie",
     	itm-guac: "sec-guac",
        itm-musical-blocks: "sec-musical-blocks",
        itm-pauseture: "sec-pauseture",
     	itm-brands: "sec-brands",
     	itm-genders: "sec-genders",
     	itm-echo: "sec-echo",
     	itm-esw: "sec-esw"
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