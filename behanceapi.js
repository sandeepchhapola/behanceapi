var Behance = require('./lib/behance');

module.exports = function (clientId) {
    return new Behance(clientId);
};
