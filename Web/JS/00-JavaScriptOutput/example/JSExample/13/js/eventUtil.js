// 适用于谷歌 不兼容IE
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            // 最后一个参数useCatpure true表示在捕获阶段调用事件处理程序，false表示在冒泡阶段
            element.addEventListener(type, handler, false);
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },

    getTarget: function (event) {
        return event.getTarget || event.srcElement;
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            // 取消事件默认行为
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            // 取消事件的进一步捕获或冒泡
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}