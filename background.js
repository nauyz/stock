var API_KEY = '5bb2a58652396b1b1123bb0729fa8d0c';   //在appstore上获取时间的百度API key
var MAX_NUM = 20;   //一次最多查询数目
var URL = 'http://apis.baidu.com/apistore/stockservice/stock?list=' + MAX_NUM + '&stockid=';

var stockList = [];
var stocks = ['sz000021', 'sz002024', 'sh601519', 'sh000001'];
var stocksStr = stocks.join(',');

function getCurrentInfo (callback) {
    stockList = [];
    
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

getCurrentInfo();
