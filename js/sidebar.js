var toggled = true;

function togglefn() {
    if(toggled == true) {
        document.getElementById('sidebar').style.width = "0";
        document.getElementById('body').style.width = "100%";
        document.getElementById('body').style.marginLeft = "0";
        toggled = false
    } else {
        document.getElementById('sidebar').style.width = "220px";
        document.getElementById('body').style.width = "calc(100% - 220px)";
        document.getElementById('body').style.marginLeft = "220px";
        toggled = true
    }
}

var opened = false;
function colorsBox() {
    if(opened == false) {
        document.querySelector('.colors-box').style.width = "300px";
        opened = true;
    } else {
        document.querySelector('.colors-box').style.width = "0";
        opened = false;
    }
}