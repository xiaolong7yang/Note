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