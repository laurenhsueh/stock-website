$(document).ready(function() {

    $("#frWalkthrough").hide();
    $("#nextButtons").hide();
    $("#exit").hide();

    $(".visualizationcontainer").each(function () {
        $(this).children().not(".charttitle").hide();
        $(this).siblings(".dinsight").hide(); // Hide insight too
    });
    
    $(".charttitle").click(function () {
        const container = $(this).siblings(".visualizationcontainer");
        container.find(".redditcontainer, .muskcontainer").fadeToggle();
        container.siblings(".dinsight").fadeToggle();
    });
    
    // General step transition function
    function showStep(hideIds, showIds) {
        $(hideIds).fadeOut(500, function () {
            $(showIds).css("opacity", 0).show().animate({ "opacity": 1 }, 500);
        });
    }    

    $("#walkthrough").on("click", function() {
        $("#frWalkthrough").fadeIn();
        $("#frWalkthrough > *").hide();

        $(".chartsection").children().not(".dstep").hide();
        $("#wkdata1, #wkdata2, #wkdata3, #wkdata4, #wkdata5, #wkdata6, #wkdata7, #wkdata8, #wkdata9").hide();

        $("#walkthrough").hide();
        $("#exit").show();
        $("#nextButtons").show();

        $("#wkdesc1, #wkdata1").css("opacity", 1).show();
    });

    $("#exit").on("click", function() {
        $("#frWalkthrough").fadeOut();
        $("#frWalkthrough > *").hide();
        $(".chartsection").children().not(".dstep").show();
        $("#wkdata1, #wkdata2, #wkdata3, #wkdata4, #wkdata5, #wkdata6, #wkdata7, #wkdata8, #wkdata9").show();

        $("#exit").hide();
        $("#walkthrough").show();
        $("#nextButtons").hide();
    });

    // Step transitions
    // NEXT buttons
    $("#step1next").on("click", function() {
        showStep("#wkdesc1, #wkdata1", "#wkdesc2, #wkdata2");
    });

    $("#step2next").on("click", function() {
        showStep("#wkdesc2, #wkdata2", "#wkdesc3, #wkdata3");
    });

    $("#step3next").on("click", function() {
        showStep("#wkdesc3, #wkdata3", "#wkdesc4, #wkdata4");
    });
    
    $("#step4next").on("click", function() {
        showStep("#wkdesc4, #wkdata4", "#wkdesc7, #wkdata7");
    });

    $("#step7next").on("click", function() {
        showStep("#wkdesc7, #wkdata7", "#wkdesc8, #wkdata8");
    });

    $("#step8next").on("click", function() {
        showStep("#wkdesc8, #wkdata8", "#wkdesc9, #wkdata9");
    });

    // PREVIOUS buttons
    $("#step2prev").on("click", function() {
        showStep("#wkdesc2, #wkdata2", "#wkdesc1, #wkdata1");
    });

    $("#step3prev").on("click", function() {
        showStep("#wkdesc3, #wkdata3", "#wkdesc2, #wkdata2");
    });

    $("#step4prev").on("click", function() {
        showStep("#wkdesc4, #wkdata4", "#wkdesc3, #wkdata3");
    });

    $("#step5prev").on("click", function() {
         showStep("#wkdesc7, #wkdata7", "#wkdesc4, #wkdata4");
    });

    $("#step8prev").on("click", function() {
        showStep("#wkdesc8, #wkdata8", "#wkdesc7, #wkdata7");
    });

    $("#step9prev").on("click", function() {
        showStep("#wkdesc9, #wkdata9", "#wkdesc8, #wkdata8");
    });


    const hash = window.location.hash;

    // Trigger walkthrough mode if hash targets a walkthrough section (From home core data assertions)
    if (hash && $(hash).hasClass("dstep")) {
        // Trigger walkthrough setup
        $("#frWalkthrough").show();
        $("#frWalkthrough > *").hide();
        $(".chartsection").children().not(".dstep").hide();
        $(".dstep, .wstep").hide();

        $(hash).show().css("opacity", 1);

        const descId = hash.replace("wkdata", "wkdesc");
        $(descId).show().css("opacity", 1);

        // Update controls
        $("#walkthrough").hide();
        $("#exit").show();
        $("#nextButtons").show();
    }
});