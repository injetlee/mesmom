window.onload=function(){
	alertQuestion();
	colseAlert();

}
function alertQuestion(){
	var getInput = document.getElementById("input");
    if(getInput) getInput.setAttribute("checked","false");
}
function colseAlert(){
	var getI = document.getElementById("alert-close");
	console.log('a')
	getI.onclick = function(){
		console.log('b')
		var getBtnBox = document.getElementsByClassName("BtnBox");
		getBtnBox.style.display="none";
	}
}