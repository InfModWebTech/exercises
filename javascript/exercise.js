function set() {
    var string = document.getElementById('input1').value;
    document.getElementById('s1').innerHTML = string;
}

function checkdate() {
    var date1 = document.getElementById('date1').value;
    var date2 = document.getElementById('date2').value;
    if (date1==date2){
        alert ('they have to be different')
    } else {
        alert ('guds')
    }
}


