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
    /*
    查看更多，判断浮动按钮位置，何时回归原位，实现并不彻底。
    var getFloatButton = document.getElementById("float-button");
    if(getFloatButton){
        var floatButtonPosition = getFloatButton.getBoundingClientRect().top;
    }
    var getHiddenEle = document.getElementById("hidden");
    if(getHiddenEle){
        var getHiddenAposition = getHiddenEle.getBoundingClientRect().top;
    }
    if(floatButtonPosition >= getHiddenAposition-50){
        getFloatButton.removeAttribute("id");
        getFloatButton.parentNode.removeChild(getFloatButton.parentNode.lastChild)
    }
    */
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
                //this.style.position="relative";
                this.innerHTML="查看更多";
                // this.removeAttribute("id");

            }
            var position = this.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;

            if(position>windowHeight){
                var newEle = document.createElement("a");
                newEle.setAttribute("id","hidden");
                this.parentNode.appendChild(newEle)
                this.setAttribute("id","float-button")
            }

        }
    }
}

function alertQuestion(){
    var getInput = document.getElementById("input");
    getInput.setAttribute("checked","false");
}
// function closeAlert(){
//     var getI = document.getElementById("alert-close");
//     getI.onclick = function(){
//         var getBtnBox = document.getElementsByClassName("question-alert");
//         var aaa = getBtnBox[0].parentNode;
//         aaa.removeChild(aaa.childNodes[2])
//         var getInput = document.getElementById("input");
//         console.log(aaa)
//         getInput.setAttribute("checked","checked");
//         console.log(getInput)
//     }
// }
window.onload=function(){
    var getInput = document.getElementById("input");
    var getI = document.getElementById("alert-close");
    if(getInput){
        alertQuestion();
    }
    // if(getI){
    //     var getIn = document.getElementById("input");
    //     getIn.setAttribute("checked","checked")
    //     // closeAlert()
    // }
    changeLogo();
    changeNavbar()
    document.getElementsByTagName("body")[0].onscroll = changeNavbar;
    // loadMore(); 查看更多实现函数


};