var API_KEY = '5bb2a58652396b1b1123bb0729fa8d0c';   //在appstore上获取时间的百度API key
var MAX_NUM = 20;   //一次最多查询数目
var URL = 'http://apis.baidu.com/apistore/stockservice/stock?list=' + MAX_NUM + '&stockid=';

var stocks = ['sz000021', 'sz002024', 'sh601519', 'sh000001'];

function getCurrentInfo (callback) {
    var stock = window.localStorage;
    var stockStr = [];
    var stockList = [];

    for (var i in stocks) {
        stocksStr = stocksStr + i + ',';
    }
    
    $.ajax({
        url: URL + stocksStr,
        type: 'get',
        beforeSend: function(request) {
            request.setRequestHeader("apikey", API_KEY);
        },
        success: function (data) {
            if (data.errNum == 0) {
                stockList = data.retData.stockinfo;
                console.log(stockList);
                callback(stockList);
            }
        },
        error: function (data) {
            
        }
    });
}

function addStock (code) {
    var stocks = window.localStorage;

    for (var i in stocks) {
        if (code === stocks[i]) {
            return;
        }
    }

    window.localStorage.setItem(code, code);
}

function removeStock (code) {
    var stocks = window.localStorage;

    for (var i in stocks) {
        if (code === stocks[i]) {
            window.localStorage.removeItem(code);
            break;
        }
    }
}


getCurrentInfo();
