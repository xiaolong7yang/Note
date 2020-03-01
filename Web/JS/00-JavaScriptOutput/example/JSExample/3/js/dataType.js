function showTable(){
	// 标题
	var caption = "HTMLDOM操作生成的表格";
	// 表头
	var headArray = ["数据类型","true","false"]
	// tbody部分
	var tableData = [
		["Boolean","true","false"],
		["String","任何非空字符串","(空字符串)"],
		["Number","任何非零数值","0和Nan"],
		["Object","任何对象","null"],
		["Undefined","n/a","undefined"]
	];
	createTable(caption,headArray,tableData);
}
// 生成表格
function createTable(tCaption,headArray,bodyDate) {
	var table = document.createElement("table");
	table.className
	table.className = "elementTable";
	table.createCaption();
	table.caption.appendChild(document.createTextNode(tCaption));
	thead = table.createTHead();
	thead.insertRow(0);
	for(var i=0;i<headArray.length;i++){
		thead.rows[0].appendChild(document.createElement("th"));
		thead.rows[0].cells[i].appendChild(document.createTextNode(headArray[i]));
	}
	// 创建tbody
	table.appendChild(createTableBody(bodyDate));
	var body = document.body.appendChild(table);
}

// 传入行列返回tbody
function createTableBody(arrayData){
	var tbody = document.createElement("tbody");
	for(i=0;i<arrayData.length;i++){
		// 插入行
		tbody.insertRow(i);
		for(j=0;j<arrayData[i].length;j++){
			// 插入行中的列
			tbody.rows[i].insertCell(j);
			// 赋值
			tbody.rows[i].cells[j].appendChild(document.createTextNode(arrayData[i][j]));
		}
	}
	return tbody;
}

// 对象转数组
function objToArr(obj){
	var arr = new Array();
	for( i in obj){
		arr.push(obj[i]);
	}
	return arr;
}
