function preloadLinks() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', links[i].href, true);
        xhr.send();
    }
}
window.onload = function () {
    preloadLinks();
}; 
