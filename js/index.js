var op_time = null;
$(document).ready(function () {
    op_time = get_url_parameter("op_time");
    if (op_time == null || op_time == "") op_time = "201606";
    $("#op_time").val(op_time);
    $.get(API_SERVER + "anti-fraud/blacklist/?op_time=" + op_time, function (resp) {
        for (var i = 0; i < resp["blacklist"].length; i++) {
            var obj = resp["blacklist"][i];
            var html = "<tr>";
            html += "<td><code>" + obj + "</code></td>";
            html += "<td><a class='btn btn-xs btn-danger' href=\"javascript:blacklist_delete('" + obj + "')\">Delete</a></td>";
            html += "</tr>";
            $("#blacklist-table>table>tbody").append(html);
        }
        $("#blacklist-table>table").DataTable({language: DT_LANG, stateSave: true});
    }).fail(function () {
        alert("Failed to load data!");
    });
});


function blacklist_delete(id) {
    $.ajax({
        type: "DELETE",
        url: API_SERVER + "anti-fraud/blacklist/",
        data: {
            op_time: op_time,
            acc_nbr: id
        },
        dataType: "json",
        success: function (data) {
            location.reload();
        },
        error: function (xhr, status, error) {
            alert("Failed to delete!");
        }
    });
}

function blacklist_add() {
    $.ajax({
        type: "POST",
        url: API_SERVER + "anti-fraud/blacklist/",
        data: {
            op_time: op_time,
            acc_nbr: $("#acc_nbr").val()
        },
        dataType: "json",
        success: function (data) {
            location.reload();
        },
        error: function (xhr, status, error) {
            alert("Failed to create!");
        }
    });
}