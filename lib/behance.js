var request = require('request'),
    apiBaseUrl = "http://www.behance.net/v2/";

var Behance = function (client_id) {
    if (!client_id) {
        throw new Error('Either client_id is missing');
    }
    this.client_id = client_id;
    return this;
};

Behance.prototype.getProjects = function (params, done) {
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "projects?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getProjectById = function (projectId, done) {
    if (!projectId) {
        throw new Error("projectId is undefined please enter a valid projectId.");
    }
    var behanceApiUrl = apiBaseUrl + "projects/" + projectId + "?api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getCommentsFromProject = function (projectId, page, done) {
    if (!projectId) {
        throw new Error("projectId is undefined please enter a valid projectId.");
    }
    var opt = getOptions(page, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "projects/" + projectId + "/comments?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.creativesToFollowList = function (page, done) {
    var opt = getOptions(page, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "creativestofollow?" + opt.options + "client_id=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getAllCreativeFields = function (done) {
    var behanceApiUrl = apiBaseUrl + "/fields?api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUsersList = function (params, done) {
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "users?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUser = function (user, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var behanceApiUrl = apiBaseUrl + "users/" + user + "?api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUserProjects = function (user, params, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/projects?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUserWips = function (user, params, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/wips?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUserAppreciations = function (user, params, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/appreciations?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUserCollections = function (user, params, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/collections?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUserStats = function (user, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/stats?client_id=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUserFollowers = function (user, params, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/followers?" + opt.options + "client_id=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUserFollowing = function (user, params, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/following?" + opt.options + "client_id=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getBehanceUserWorkExperienceList = function (user, done) {
    if (!user) {
        throw new Error("user is undefined, please enter a suitable username or userId");
    }
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/work_experience?client_id=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getWips = function (params, done) {
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "wips?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getWipsByWipId = function (wipId, done) {
    if (!wipId) {
        throw new Error("wipId is undefined please enter a valid wipId.");
    }
    var behanceApiUrl = apiBaseUrl + "wips/" + wipId + "?api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getWipsRevisionInfo = function (wipId, revisionId, done) {
    if (!wipId) {
        throw new Error("wipId is undefined please enter a valid wipId.");
    }
    if (!revisionId) {
        throw new Error("revisionId is undefined please enter a valid revisionId.");
    }
    var behanceApiUrl = apiBaseUrl + "wips/" + wipId + "/" + revisionId + "?api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getCommentsOnRevisionWips = function (wipId, revisionId, page, done) {
    if (!wipId) {
        throw new Error("wipId is undefined please enter a valid wipId.");
    }
    if (!revisionId) {
        throw new Error("revisionId is undefined please enter a valid revisionId.");
    }
    var opt = getOptions(page, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "wips/" + wipId + "/" + revisionId + "/comments?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getCollections = function (params, done) {
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "collections?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getCollectionById = function (collectionId, done) {
    if (!collectionId) {
        throw new Error("collectionId is undefined please enter a valid collectionId.");
    }
    var behanceApiUrl = apiBaseUrl + "collections/" + collectionId + "?api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

Behance.prototype.getProjectsFromCollection = function (collectionId, params, done) {
    if (!collectionId) {
        throw new Error("collectionId is undefined please enter a valid collectionId.");
    }
    var opt = getOptions(params, done);
    done = opt.done;
    var behanceApiUrl = apiBaseUrl + "collections/" + collectionId + "/projects?" + opt.options + "api_key=" + this.client_id;
    request.get(behanceApiUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            done(null, body);
        } else {
            err = err || getResponseError(res.statusCode);
            done(err, null)
        }
    });
};

var getOptions = function (params, done) {
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

var getResponseError = function (statusCode) {
    switch (statusCode) {
        case 403:
            return{
                name: "Forbidden",
                message: "Your API key is invalid"
            };
        case 404:
            return{
                name: "Not Found",
                message: "You try make a request to an endpoint that does not exist, or if you are requesting a specific thing that does not exist (such as a user)"
            };
        case 429:
            return{
                name: "Too Many Requests	",
                message: "You have exceeded your rate limit."
            };
        case 500:
            return{
                name: "Internal Server Error	",
                message: "Something went wrong! Please try after some time or refresh your page."
            };
        case 503:
            return{
                name: "Service Unavailable",
                message: "Behance is up, but overloaded with requests. Try again later."
            };
    }

};

exports.Behance = Behance;