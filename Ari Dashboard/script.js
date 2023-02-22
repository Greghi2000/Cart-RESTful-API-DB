function searchCity() {
    console.log('HII')
}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// the url I have to put first my backend IP address and then the route, e.g "/" or "/ProductId"