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
function abc(){
    var getDivPosition = document.querySelector(".wrap");
    var position = getDivPosition.getBoundingClientRect().top;
    console.log(position)
    if(position<80){
        var getNavbar = document.getElementsByClassName("navbar");
        getNavbar[0].style.backgroundColor="#222"
    }else{
        var getNavbar = document.getElementsByClassName("navbar");
        getNavbar[0].style.backgroundColor="transparent";
    }
}
window.onload=function(){
    changeLogo();
    document.getElementsByTagName("body")[0].onscroll = abc;

};