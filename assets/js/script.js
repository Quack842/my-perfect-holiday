function viewDiff(display) {

    if (display == 1) {
        $("#main-modal-1").show();
        $("#main-modal-2").hide();
        $("#main-modal-3").hide();
    }
    else if (display == 2) {
        $("#main-modal-1").hide();
        $("#main-modal-2").show();
        $("#main-modal-3").hide();
    }

    else if (display == 3) {
        $("#main-modal-1").hide();
        $("#main-modal-2").hide();
        $("#main-modal-3").show();
    }
}