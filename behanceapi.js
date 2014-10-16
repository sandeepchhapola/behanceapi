var behance = require('./lib/behance');

expotrs.behanceapi = function (clientId) {
    return new behance.Behance(clientId);
};
