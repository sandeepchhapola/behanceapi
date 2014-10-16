var behance = require('./lib/behance');

expotrs.behanceapi = function (clientId, ClientSecret) {
    return new behance.Behance(clientId, ClientSecret);
};
