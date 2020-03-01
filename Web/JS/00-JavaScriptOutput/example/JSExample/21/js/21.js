var options = {
    url: "http://localhost:8080/jsAPI/all",
    requestMethodType: "get",
    responseDataType: "json",
    serialization: true,
    needFormat: true,
    data: {
        username: "root",
        password: "root"
    },
    timeout: 10000,
    success: function (data) {
        var tableData = new Array();
        var jsObj = JSON.parse(data);
        for (var j = 0; j < jsObj.length; j++) {
            var array = objToArr(jsObj[j]);
            tableData.push(array);
        }

        // 标题
        var caption = "Table的API接口";
        // 表头
        var headArray = ["选择", "APINO", "C1", "C2", "C3", "Name", "DES", "FORP"]
        // tbody部分
        createTable(caption, headArray, tableData);
        addCheckBox();
    },
    error: function (e) {
        console.log(e);
    }
}



function deleteInfo(){

    var delButton = document.getElementById("deleteInfo");
    EventUtil.addHandler(delButton,"click",function(){
        var mytable = document.getElementsByClassName("elementTable")[0];
        var mytbody = mytable.getElementsByTagName("tbody")[0];
        var checkBoxList =  mytbody.getElementsByTagName("input");
        for(var i = 0;i<checkBoxList.length;i++){
            if(checkBoxList[i].checked){
                var  apino =  checkBoxList[i].parentNode.nextSibling.childNodes[0].nodeValue;
            }
        }
        var jsObj = {'_method':'DELETE',"apino":apino};

        ajax({
            url: "http://localhost:8080/jsAPI/"+apino,
            requestMethodType: "post",
            responseDataType: "json",
            serialization: false,
            needFormat: false,
            contentType: "application/json",
            data: JSON.stringify(jsObj),
            //data: "",

            timeout: 100000,
            success: function (responseData) {
                var table = document.getElementsByTagName("table")[0];
                table.parentNode.removeChild(table);
                ajax(options);
            },
            error: function (e) {
                console.log(e);
            }
        });
    
    
    
    });
}

function addCheckBox() {
    var mytable = document.getElementsByClassName("elementTable")[0];
    var mytbody = mytable.getElementsByTagName("tbody")[0];
    for (i = 0; i < mytbody.rows.length; i++) {
        var myCheckBox = document.createElement("input");
        myCheckBox.type = "checkBox";
        myCheckBox.name ="chekcBoxAPI";
        mytbody.rows[i].insertCell(0);
        mytbody.rows[i].cells[0].appendChild(myCheckBox);
    }

}

function fromSubmit() {
    var form = document.getElementsByTagName("form")[0];
    EventUtil.addHandler(form, "submit", function (event) {
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);
        var formData = formToJSon(form);
        ajax({
            url: "http://localhost:8080/jsAPI/save",
            requestMethodType: "post",
            responseDataType: "json",
            serialization: false,
            needFormat: false,
            contentType: "application/json",
            data: formData,
            timeout: 100000,
            success: function (responseData) {
                var table = document.getElementsByTagName("table")[0];
                table.parentNode.removeChild(table);
                ajax(options);
            },
            error: function (e) {
                console.log(e);
            }
        });
    });
}

window.onload = function () {
    ajax(options);
    fromSubmit();
    this.deleteInfo();

}

