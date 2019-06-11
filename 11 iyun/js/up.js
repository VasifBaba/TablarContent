function Change(a){
    var content=document.getElementsByClassName('tablar')
    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove("active");
    }
document.getElementById(a).classList.add('active')
}