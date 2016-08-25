$(document).ready(function () {
    $.get(API_SERVER + "anti-fraud/blacklist/?op_time=201606", function (resp) {
        for (var i = 0; i < resp["blacklist"].length; i++) {
            var obj = resp["blacklist"][i];
            var html = "<tr>";
            html += "<td><code>" + obj + "</code></td>";
            html += "<td><a class='btn btn-primary'>Delete</a></td>";
            html += "</tr>";
            $("#blacklist-table>table>tbody").append(html);
        }
        $("#blacklist-table>table").DataTable({language: DT_LANG, stateSave: true});
    }).fail(function () {
        alert("初始化模型数据失败！");
    });
});
