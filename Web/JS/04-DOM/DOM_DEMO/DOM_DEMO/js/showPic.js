function insertAfter(newElement,existNode){
	var parent = existNode.parentNode;
	// 最后一个节点
	if(parent.lastChild==existNode){
		parent.appendChild(newElement);
	}else{
		// 在他下一个兄弟的前面
		var nextElement = existNode.nextSibling;
		parent.insertBefore(newElement,nextElement);
	}
	
}


function showPic(whichPic) {
	var source = whichPic.getAttribute("href");
	var title_txt = whichPic.getAttribute("title");
	var desp = document.getElementById("descp");
	var imgsp = document.getElementById("imgsp")
	if(!desp){
		var p = document.createElement("p");
		var text = document.createTextNode(title_txt);
		var element_ul = document.getElementById("imgs");
		p.appendChild(text);
		p.setAttribute("id","descp")
		insertAfter(p,element_ul);
	}else{
		desp.firstChild.nodeValue = title_txt;
	}
	
	if(!imgsp){
		var img_pic = document.createElement("img");
		img_pic.setAttribute("id","imgsp");
		img_pic.setAttribute("src",source);
		alert(desp);
		desp = document.getElementById("descp");
		insertAfter(img_pic,desp);
	}else{
		imgsp.setAttribute("src",source);
	}
}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0].childNodes;
	var element_type_string = "";
	for(var i = 0 ;i<body_element.length;i++){
		element_type_string+=body_element[i].nodeType+","
	}
	
	alert(element_type_string);
}


function popUp(winURL){
	window.open(winURL,"popUp","width=320,height=480")
}

// 注册点击事件
window.onload=function prepareLinks(){
	var links = document.getElementsByClassName("link");
	//alert(links.length);
	for (var i = 0;i<links.length;i++){
		var alink = links[i];
		links[i].onclick=function(){
			showPic(this);
			return false;
		}
	}
}