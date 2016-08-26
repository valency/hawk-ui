function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function is_numeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function random_color() {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
}

function get_url_parameter(p) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == p) {
            return sParameterName[1];
        }
    }
}

function redirect_with_parameter(parameters) {
    var l = window.location;
    /* Build params */
    var params = {};
    var x = /(?:\??)([^=&?]+)=?([^&?]*)/g;
    var s = l.search;
    for (var r = x.exec(s); r; r = x.exec(s)) {
        r[1] = decodeURIComponent(r[1]);
        if (!r[2]) r[2] = '%%';
        params[r[1]] = r[2];
    }
    /* Set param */
    for (var i = 0; i < parameters.length; i++) {
        params[parameters[i][0]] = encodeURIComponent(parameters[i][1]);
    }
    /* Build search */
    var search = [];
    for (var j in params) {
        var p = encodeURIComponent(j);
        var v = params[j];
        if (v != '%%') p += '=' + v;
        search.push(p);
    }
    search = search.join('&');
    /* Execute search */
    l.search = search;
}
