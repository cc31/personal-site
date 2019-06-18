$(document).ready(function(){

    $("div#project-sections").show();
    $("#sec12").show();

	$("#project-sections").css("height", $("#project-titles").css("height"));
	
	dict = { 
     	itm1: "sec1",
     	itm2: "sec2",
        itm3: "sec3",
        itm4: "sec4",
     	itm5: "sec5",
     	itm6: "sec6",
     	itm7: "sec7",
     	itm8: "sec8",
        itm9: "sec9",
        itm10: "sec10",
        itm11: "sec11",
        itm12: "sec12"
	};

    // $("#myname").hover(
    //     function(){
    //         $("div#project-sections").show();
    //         $("#bio").show();
    //     }, function(){
    //         $("#bio").hide();
    // });

    // $("#myname").click(function(){
    //     $("div#project-sections").show();
    //     $('html, body').animate({
    //         scrollTop: $("#bio").offset().top
    //     }, 500)
    // });

    var currentID = itm12;
    var pastID;

    $("#project-titles p").hover(
    	function(){
            $("#sec12").hide();
	    	currentID = this.id;
            console.log(currentID);
            if (currentID != pastID) {
                // console.log('change section');
                var pastSection = '#' + dict[pastID];
                $(pastSection).hide();
            }
	    	var currentSection = '#' + dict[currentID];
            $(currentSection).show();
            pastID = currentID;
        }
    );

    // for mobile
    $("#project-titles p").click(function() {
        $("div#project-sections").show();
        var projectID = this.id;
        var sectionID = '#' + dict[projectID];
        // console.log(sectionID);
        $(sectionID).show();

        $('html, body').animate({
            scrollTop: $("#project-sections").offset().top
        }, 500)
    });
});