var linkArray= [];






/* functions */


function addLink() {

    
    var inputLink = document.getElementById('favurl').value;
   
    var protocolSearch = inputLink.search("https://");

    if (protocolSearch >= 0){
        var test = inputLink.substring(8, inputLink.length)

    } 

    
    var newLink = "<a target=\"_blank\" href=\"https://"+inputLink+"\">"+inputLink+"</a>";

    linkArray.push(newLink);

    displayLink();

}

function displayLink(){

    var linkDisplay = "";

    for (var i = 0; i < linkArray.length; i++){
        linkDisplay += linkArray[i];
    }

    document.getElementById('link-display').innerHTML = linkDisplay;


}