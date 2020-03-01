function displayAbbreviations() {
	var abbr_list = document.getElementsByTagName("abbr");
	var dl = document.createElement("dl");
	for (i = 0; i < abbr_list.length; i++) {
		var dt = document.createElement("dt");
		dl.appendChild(dt);
		var txt = abbr_list[i].firstChild;
		dt.appendChild(txt);
		var dd = document.createElement("dd");
		var title_txt = document.createTextNode(abbr_list[i].getAttribute("title"));
		dd.appendChild(title_txt);
		dt.appendChild(dd);
	}
	var v_body = document.getElementsByTagName("body")[0];
	
	var v_h2 = document.createElement("h2");
	v_h2.appendChild(document.createTextNode("Abbrebiation"));
	v_body.appendChild(v_h2);
	v_body.appendChild(dl);
}
