$(document).ready(function(){

	$("#project-sections").css("height", $("#project-titles").css("height"));
	
	dict = { 
     	item1: "section1",
     	item2: "section2",
     	item3: "section3",
     	item4: "section4",
     	item5: "section5",
     	item6: "section6",
     	item7: "section7",
     	item8: "section8"
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