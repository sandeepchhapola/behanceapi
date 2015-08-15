var Helper = require('./helper'),
    Messages = require('./messages'),
    apiBaseUrl = "http://www.behance.net/v2/";

var Behance = function (client_id) {
    if (!client_id) {
        throw new Error(Messages.ERROR.UNDEFINED_CLIENT_ID);
    }
    this.client_id = client_id;
    return this;
};

//Search for projects.
Behance.prototype.getProjects = function (params, done) {
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "projects?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get the information and content of a project.
Behance.prototype.getProjectById = function (projectId, done) {
    if (!projectId) {
        throw new Error(Messages.ERROR.UNDEFINED_PROJECT_ID);
    }
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "projects/" + projectId + "?api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get the comments for a project.
Behance.prototype.getCommentsFromProject = function (projectId, page, done) {
    if (!projectId) {
        throw new Error(Messages.ERROR.UNDEFINED_PROJECT_ID);
    }
    if (page && typeof page == "number") {
        page = {page: page};
    }
    var opt = Helper.getOptions(page, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "projects/" + projectId + "/comments?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Provides a list of creatives you might be interested in following
Behance.prototype.creativesToFollowList = function (page, done) {
    if (page && typeof page == "number") {
        page = {page: page};
    }
    var opt = Helper.getOptions(page, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "creativestofollow?" + opt.options + "client_id=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular')
Behance.prototype.getAllCreativeFields = function (done) {
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "/fields?api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Search for users.
Behance.prototype.getBehanceUsersList = function (params, done) {
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get basic information about a user. The user argument can be an ID or username.
Behance.prototype.getBehanceUser = function (user, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "?api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get the projects published by a user. The user argument can be an ID or username.
Behance.prototype.getBehanceUserProjects = function (user, params, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/projects?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get the works-in-progress published by a user. The user argument can be an ID or username.
Behance.prototype.getBehanceUserWips = function (user, params, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/wips?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get a list of user's recently appreciated projects. The user argument can be an ID or username.
Behance.prototype.getBehanceUserAppreciations = function (user, page, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    if (page && typeof page == "number") {
        page = {page: page};
    }
    var opt = Helper.getOptions(page, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/appreciations?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get a list of a user's collections. The user argument can be an ID or username.
Behance.prototype.getBehanceUserCollections = function (user, params, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/collections?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.
Behance.prototype.getBehanceUserStats = function (user, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/stats?client_id=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get a list of creatives who follow the user.
Behance.prototype.getBehanceUserFollowers = function (user, params, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/followers?" + opt.options + "client_id=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get a list of creatives followed by the user.
Behance.prototype.getBehanceUserFollowing = function (user, params, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/following?" + opt.options + "client_id=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//A list of the user's professional experience
Behance.prototype.getBehanceUserWorkExperienceList = function (user, done) {
    if (!user) {
        throw new Error(Messages.ERROR.UNDEFINED_USER);
    }
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "users/" + user + "/work_experience?client_id=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Search for works-in-progress.
Behance.prototype.getWips = function (params, done) {
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "wips?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get information about a work in progress.
Behance.prototype.getWipsByWipId = function (wipId, done) {
    if (!wipId) {
        throw new Error(Messages.ERROR.UNDEFINED_WIP_ID);
    }
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "wips/" + wipId + "?api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get information and contents of a revision of a work in progress.
Behance.prototype.getWipsRevisionInfo = function (wipId, revisionId, done) {
    if (!wipId) {
        throw new Error(Messages.ERROR.UNDEFINED_WIP_ID);
    }
    if (!revisionId) {
        throw new Error(Messages.ERROR.UNDEFINED_REVISION_ID);
    }
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "wips/" + wipId + "/" + revisionId + "?api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get comments on a revision of a work in progress.
Behance.prototype.getCommentsOnRevisionWips = function (wipId, revisionId, page, done) {
    if (!wipId) {
        throw new Error(Messages.ERROR.UNDEFINED_WIP_ID);
    }
    if (!revisionId) {
        throw new Error(Messages.ERROR.UNDEFINED_REVISION_ID);
    }
    if (page && typeof page == "number") {
        page = {page: page};
    }
    var opt = Helper.getOptions(page, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "wips/" + wipId + "/" + revisionId + "/comments?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Search for collections.
Behance.prototype.getCollections = function (params, done) {
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "collections?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get basic information about a collection.
Behance.prototype.getCollectionById = function (collectionId, done) {
    if (!collectionId) {
        throw new Error(Messages.ERROR.UNDEFINED_COLLECTION_ID);
    }
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "collections/" + collectionId + "?api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

//Get projects from a collection.
Behance.prototype.getProjectsFromCollection = function (collectionId, params, done) {
    if (!collectionId) {
        throw new Error(Messages.ERROR.UNDEFINED_COLLECTION_ID);
    }
    var opt = Helper.getOptions(params, done);
    done = opt.done;
    if (!done)
        throw new Error(Messages.ERROR.UNDEFINED_CALLBACK);
    var behanceApiUrl = apiBaseUrl + "collections/" + collectionId + "/projects?" + opt.options + "api_key=" + this.client_id;
    Helper.getResponseJsonData(behanceApiUrl, done);
};

module.exports = Behance;