module.exports.getResponseError = function (statusCode) {
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

