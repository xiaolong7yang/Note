function createNode(node){
	var element_p =  document.createElement("p");
	var text_1 = document.createTextNode("This is");
	var element_em = document.createElement("em");
	var text_2 = document.createTextNode(" My ");
	var text_3 = document.createTextNode("content");
	element_p.appendChild(text_1);
	element_em.appendChild(text_2);
	element_p.appendChild(element_em);
	element_p.appendChild(text_3);
	node.appendChild(element_p);
}

window.onload = function(){
	var para = document.createElement("p");
	var mydiv = document.getElementById("testdiv");
	mydiv.appendChild(para);
	var txt = document.createTextNode("Hello World");
	para.appendChild(txt);
	createNode(mydiv);
}

