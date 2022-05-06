




var $get = function (url) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url, true)
    xhr.send(null)
    return xhr.onreadystatechange = function () {
        //若响应完成且请求成功
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            return res;
        } else {
            return 'fail'
        }
    };
}
