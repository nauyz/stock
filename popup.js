document.addEventListener('DOMContentLoaded', function () {
    chrome.extension.getBackgroundPage().getCurrentInfo(addStockList);
});

function addStockList (stocks) {
    var stockDoms = '<p>'
            + '<span class="name">名称</span>'
            + '<span class="start">开始</span>'
            + '<span class="cur">当前</span>'
            + '<span class="rate">比例</span>'
            + '<span class="h">最高</span>'
            + '<span class="l">最低</span>'
          + '</p>';
    for (var i = 0; i <= stocks.length - 1; i ++) {
        var color = 'red';
        if (stocks[i].increase < 0) {
            color = 'green';
        }
        stockDoms += '<p class="' + color + '">'
            + '<span class="name">' + stocks[i].name + '</span>'
            + '<span class="start">' + stocks[i].OpenningPrice + '</span>'
            + '<span class="cur">' + stocks[i].currentPrice + '</span>'
            + '<span class="rate">' + stocks[i].increase.toFixed(2) + '</span>'
            + '<span class="h">' + stocks[i].hPrice + '</span>'
            + '<span class="l">' + stocks[i].lPrice + '</span>'
           + '</p>';
    }
    $('#stockList').html(stockDoms);
}
