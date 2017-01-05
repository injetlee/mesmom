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
    scrollTop = window.pageYOffset;
    //console.log('dangqiangundong'+window.pageYOffset + window.innerHeight);
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
function loadMore(){
    var getLink = document.getElementsByClassName("load-more");
    console.log('aaa')
    for(var i=0;i<getLink.length;i++){
        flg = 0;
        getLink[i].onclick = function(){
            if(this.innerHTML=="查看更多"){
                console.log(this.pageX);
                this.parentNode.style.height="auto";
                this.previousElementSibling.style.height = "auto";
                this.innerHTML="收起";
                flg=1;
            }else{
                this.parentNode.style.height="200px";
                this.previousElementSibling.style.height = "120px";
                this.style.position="relative";
                this.innerHTML="查看更多"
                flg = 0;

            }
            // var position = this.getBoundingClientRect().top;
            // var windowHeight = window.innerHeight;
            // if(position>windowHeight){
            //     this.style.position="fixed"
            //     this.style.bottom = "0";
            //     this.style.right = "0"
            // }
            // console.log(position)
            // this.onscroll = function(){
            //     console.log('hahahaha');
            //     //console.log(this.getBoundingClientRect().top)
            // }
            // console.log('dangqiangundong'+window.pageYOffset + window.innerHeight);

            // if(parseInt(position)+parseInt(scrollTop)>parseInt(position)){
            //     console.log('here')
            // }
            // console.log(window.innerHeight)
            // console.log(parseInt(position))

        }
    }
}
window.onload=function(){
    changeLogo();
    changeNavbar()
    document.getElementsByTagName("body")[0].onscroll = changeNavbar;
    loadMore();


};