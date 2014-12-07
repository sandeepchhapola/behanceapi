var request = require('request'),
Errorjs = require('./errorjs');

module.exports.getResponseJsonData = function (behanceApiUrl, done) {
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || Errorjs.getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

module.exports.getOptions = function (params, done) {
    var options = '';
    if (typeof params === "function") {
        done = params;
        params = {};
    }
    if (typeof params === "object") {
        Object.keys(params).forEach(function (key) {
            options += "" + key + "=" + params[key] + "&";
        });
    }
    return {
        done: done,
        options: options
    }
};
