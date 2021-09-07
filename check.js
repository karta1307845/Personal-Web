function isEmpty() {
    var comment = $("#comment").val().trim();
    console.log(comment);
    if (comment == "") {
        $("#comment").css("border-color", "red");
        $("#msg").show();
        $("#confirmBtn").attr("disabled", "disabled");
    } else {
        $("#msg").hide();
        $("form").submit();
    }
}

function clearText() {
    $("#comment").val("");
}

function enableBtn() {
    $("#confirmBtn").removeAttr("disabled");
}