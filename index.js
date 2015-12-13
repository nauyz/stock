var request = require('request');

var options = {
  url: 'http://apis.baidu.com/apistore/stockservice/stock?stockid=sz000021&list=1',

  headers: {
    'apikey': '5bb2a58652396b1b1123bb0729fa8d0c'
  }
};

function callback(error,
 response,
 body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);
