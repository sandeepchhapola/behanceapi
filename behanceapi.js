var behance = require('./lib/behance');

exports.Behance = function (clientId) {
    return new behance.Behance(clientId);
};
