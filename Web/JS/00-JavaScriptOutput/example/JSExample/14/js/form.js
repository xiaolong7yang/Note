function serialize(form) {
    var parts = [];
    var field = null,
        i,
        len,
        j,
        optLen,
        option,
        optValue;

    for (i = 0, len = form.elements.length; i < len; i++) {
        field = form.elements[i];
        switch (field.type) {
            case "select-one":
            case "select-multiple":
                if (field.name.length) {
                    for (j = 0, optLen = field.options.length; j < optLen; j++) {
                            option = field.options[j];
                            if(option.selected){
                                optValue = "";
                                if(option.hasAttribute){
                                    optValue = (option.hasAttribute("value")?option.value:option.text);
                                }
                                parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(optValue));
                            }
                    }
                }
                break;
            case undefined:
            case "file":
            case "subimt":
            case "rest":
            case "button":
                break;
            case "radio":
            case "checkbox":
                if(!field.checked){
                    break;
                }
            default:
                if(field.name.length){
                    parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.value));
                }


        }
    }
    return parts.join("&")

}


function formToJSon(form){
    var obj = {};
    var parts = [];
    var field = null,
        i,
        len,
        j,
        optLen,
        option,
        optValue;

    for (i = 0, len = form.elements.length; i < len; i++) {
        field = form.elements[i];
        switch (field.type) {
            case "select-one":
            case "select-multiple":
                if (field.name.length) {
                    for (j = 0, optLen = field.options.length; j < optLen; j++) {
                            option = field.options[j];
                            if(option.selected){
                                optValue = "";
                                if(option.hasAttribute){
                                    optValue = (option.hasAttribute("value")?option.value:option.text);
                                }
                                parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(optValue));
                            }
                    }
                }
                break;
            case undefined:
            case "file":
            case "subimt":
            case "rest":
            case "button":
                break;
            case "radio":
            case "checkbox":
                if(!field.checked){
                    break;
                }
            default:
                if(field.name.length){
                    obj[field.name]=field.value
                }
        }
    }
    return JSON.stringify(obj);
}