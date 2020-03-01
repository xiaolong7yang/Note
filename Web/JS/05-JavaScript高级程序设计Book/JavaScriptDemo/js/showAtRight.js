var pageUtil={
	curPage : 1,
	curPageName : "王尔沙",
	
	getNextPage = function (){
		alert(curPage+1);
	}
}

function showAtRight(url){
	var httpRequest = new XMLHttpRequest();
	
	httpRequest.onreadystatechange=function(){
		// 加载完毕
		if(httpRequest.readyState==4){
			// 响应正常
			if(httpRequest.status == 200){
				
			}
		}
	}
	
}


function getNewContent(){
	var request = new XMLHttpRequest();
	if(request){
		request.open("GET","example.txt",true);
		request.onreadystatechange=function(){
			if(request.readyState==4){
				var para = document.createElement("P");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	}else{
		alert("Your Browse doesn\'t support XMLHttpRequest");
	}
}