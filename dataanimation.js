$(document).ready(function() {
    $("#frWalkthrough").hide();
    $("#nextButtons").hide();
    $("#exit").hide();

    $(".dstep").each(function () {
        $(this).children().not(".charttitle").hide();
    });

    $(".charttitle").click(function () {
        const container = $(this).parent();
        container.children().not(this).fadeToggle();
    });
    // General step transition function
    function showStep(hideIds, showIds) {
        $(hideIds).fadeOut(500, function() {
            $(showIds).css("opacity", 0).show().animate({ "opacity": 1 }, 500);
        });
    }

    $("#walkthrough").on("click", function() {
        $("#frWalkthrough").show();
        $("#frDatatables").hide();
        $("#walkthrough").hide();
        $("#exit").show();
        $("#nextButtons").show();
        $("#frWalkthrough > *").hide();
        $("#wkdesc1, #wkdata1").css("opacity", 1).show();
    });

    $("#exit").on("click", function() {
        $("#frWalkthrough").hide();
        $("#frWalkthrough > *").hide();
        $("#frDatatables").show();
        $("#exit").hide();
        $("#walkthrough").show();
        $("#nextButtons").hide();
        $("#wkdata1, #wkdata2, #wkdata3, #wkdata4, #wkdata5, #wkdata6").show();
    });

    // Step transitions
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
        showStep("#wkdesc4, #wkdata4", "#wkdesc5, #wkdata5");
    });

    $("#step5next").on("click", function() {
        showStep("#wkdesc5, #wkdata5", "#wkdesc6, #wkdata6");
    });
});