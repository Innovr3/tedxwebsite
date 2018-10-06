
var header = document.getElementsByTagName("header");
var sheet = document.createElement('style');
    
sheet.innerHTML = "header, header.smaller {width: 100%; height: 100%;} header nav#tabs, header.smaller nav#tabs {visibility: visible;} div#bars {visibility: hidden; width: 0; height: 0;} div#tabs-menu div#cross {visibility: visible;}";

function menuClick() {
    'use strict';
    document.body.appendChild(sheet);
}

function crossClick() {
    'use strict';
    document.body.removeChild(sheet);
}