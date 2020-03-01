// 寄生组合继承
function inheritPrototype(subType,superType){
	var prototypeObj = Object(superType.prototype);
	prototypeObj.constructor = subType;
	subType.prototype = prototypeObj;
}

function addOnLoadEvent(func) {
	var oldFunc = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldFunc();
			func();
		}
	}
}
