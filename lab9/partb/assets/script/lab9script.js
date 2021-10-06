
var customer = {};




function saveData() {
    customer.fname = document.getElementById('fname').value;
    customer.bday = document.getElementById('birthdate').value;


    var ajaxUpdate = new XMLHttpRequest();

    ajaxUpdate.open("POST" , "test.txt", true);

    ajaxUpdate.onreadystatechange = function(){
        
    }

    ajaxUpdate.send(customer);
}

function loadData(params) {
var ajax = new XMLHttpRequest();


ajax.onreadystatechange = function(){
    document.getElementById('display-box').innerhtml = this.responseText;
}

ajax.open("GET", "Test.txt", true);

ajax.send();
}