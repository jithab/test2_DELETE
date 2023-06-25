
$("#submit").click(() => {
    const vtype = $("#video_type").find(":selected");
    $("#vtype_title").text(vtype.text());
    $("#container").show().removeClass().addClass(vtype.val());
    $("#form").hide();

    const line1 = $.trim($("#line1").val());
    var lineHtml = `<div><b>${line1}</b></div>`;
    const line2 = $.trim($("#line2").val());
    if (line2) {
        lineHtml += `<div><b>${line2}</b></div>`;
        $("#content").removeClass("single_line").addClass("two_lines");
    } else {
        $("#content").removeClass("two_lines").addClass("single_line");
    }

    $("#content").html(lineHtml);
});


$("#title,#content").click(() => {
    $("#container").hide();
    $("#form").show();
});