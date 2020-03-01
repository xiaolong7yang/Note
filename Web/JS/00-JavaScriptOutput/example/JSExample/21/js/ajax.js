function ajax(options) {
    // 第一个操作数求值结果为false则返回第二个操作数
    options = options || {};
    // 默认GET
    options.requestMethodType = (options.requestMethodType || "GET").toUpperCase();
    // 响应格式默认json
    options.responseDataType = options.responseDataType || "json";

    options.contentType = options.contentType||"application/x-www-form-urlencoded";
    // 格式化数据
    var params = "";
    if (options.needFormat) {
        params = formatParams(options.data, options.serialization);
    } else {
        params = options.data;
    }


    var xhr = new XMLHttpRequest();

    if (options.requestMethodType == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else {
        xhr.open("POST", options.url, true);
        xhr.setRequestHeader("Content-type",options.contentType);
        xhr.send(params);
    }
    // 请求失效时间
    setTimeout(function () {
        if (xhr.readyState != 4) {
            // 终止请求
            xhr.abort();
        }
    }, options.timeout);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300 || status == 304) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.error && options.error(status);
            }
        }
    }

}

// 格式化请求参数
function formatParams(data, serialization) {
    var arr = [];
    if (serialization) {
        for (name in data) {
            // 将字符编码
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
    } else {
        for (name in data) {
            // 将字符编码
            arr.push(name + "=" + data[name]);
        }
    }
    var vrandom = ("v" + Math.random()).replace(".", "");
    // 一个随机数
    arr.push(vrandom);
    return arr.join("&");
}