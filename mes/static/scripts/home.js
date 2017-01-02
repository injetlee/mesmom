function changeLogo(){
    var logoImg = document.getElementsByTagName('img')[0];
    logoImg.onmouseover=function(){
        this.setAttribute('src','../../static/images/mes1.png');
    logoImg.onmouseout=function(){
        this.setAttribute('src','../../static/images/mes.png');
        console.log('ddd')
    }

    }
}
function changeNavbar(){
    var getDivPosition = document.querySelector(".wrap");
    var position = getDivPosition.getBoundingClientRect().top;
    if(position<80){
        var getNavbar = document.getElementsByClassName("navbar");
        getNavbar[0].className = "navbar navbar-dark"
    }else{
        var getNavbar = document.getElementsByClassName("navbar");
        getNavbar[0].className = "navbar"
    }
}
window.onload=function(){
    changeLogo();
    changeNavbar()
    document.getElementsByTagName("body")[0].onscroll = changeNavbar;

};