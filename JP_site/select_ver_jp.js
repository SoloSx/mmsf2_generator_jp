var ver_data = {
    //versions
    "00000001": "ベルセルク",
    "00000002": "シノビ",
    "00000003": "ダイナソー"
}


// choose combo item
var selects = document.querySelectorAll('.ver-selection');
for (var i = 0; i < selects.length; i++) {
    var select = selects[i];
    for (var key in ver_data) {
        if (ver_data.hasOwnProperty(key)) {
            var option = document.createElement('option');
            option.value = key;
            option.text = ver_data[key];
            select.appendChild(option);
        }
    }
}



