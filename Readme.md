# behanceapi

behanceapi is designed to get data from  Behance API in vary simplest way.

##  How to install
`npm install behanceapi --save`

## How to use

*example*
```
var behanceapi = require('behanceapi');
var behance = new behanceapi.Behance('YOUR CLIENT_ID');

behance.getProjects({q: "Bikes", page: 2}, function (err, result) {
  if (err) {
    console.log("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});

behance.getProjectById('957077', function (err, result) {
  if (err) {
    console.log("Error:", err);
  }
  if (result) {
    console.log("Result: ", JSON.parse(result));
  }
});

```
***

### `behanceapi` provides the following functions.

***

### `behance.getProjects(params, done)`
Search for projects.

*arguments*
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getProjectById(projectId, done)`
Get the information and content of a project.

*arguments*
* `projectId`: is used to specify a particular project to get
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getCommentsFromProject(projectId, page, done)`
Get the comments for a project.

*arguments*
* `projectId`: is used to specify a particular project to get
* `page`:  is a number that determine the page that need to retrieve
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.creativesToFollowList(page, done)`
Provides a list of creatives you might be interested in following.

*arguments*
* `page`:  is a number that determine the page that need to retrieve
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getAllCreativeFields(done)`
Retrieves all Creative Fields in two groups, all fields (in "fields") and popular ones (in "popular").

*arguments*
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUsersList(params, done)`
Search for users.

*arguments*
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUser(user, done)`
Get basic information about a user.

*arguments*
* `user`: is used to specify a particular user to get. It can be a username or userId.
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUserProjects(user, params, done)`
Get the projects published by a user.

*arguments*
* `user`: is used to specify a particular user to get. It can be a username or userId.
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUserWips(user, params, done)`
Get the works-in-progress published by a user.

*arguments*
* `user`: is used to specify a particular user. It can be a username or userId.
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUserAppreciations(user, page, done)`
Get a list of user's recently appreciated projects.

*arguments*
* `user`: is used to specify a particular user. It can be a username or userId.
* `page`:  is a number that determine the page that need to retrieve
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUserCollections(user, params, done)`
Get a list of a user's collections.

*arguments*
* `user`: is used to specify a particular user. It can be a username or userId.
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUserStats(user, done)`
Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.

*arguments*
* `user`: is used to specify a particular user. It can be a username or userId.
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUserFollowers(user, params, done)`
Get a list of creatives who follow the user.

*arguments*
* `user`: is used to specify a particular user. It can be a username or userId.
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUserFollowing(user, params, done)`
Get a list of creatives followed by the user.

*arguments*
* `user`: is used to specify a particular user. It can be a username or userId.
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getBehanceUserWorkExperienceList(user, done)`
A list of the user's professional experience.

*arguments*
* `user`: is used to specify a particular user. It can be a username or userId.
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getWips(params, done)`
Search for works-in-progress.

*arguments*
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getWipsByWipId(wipId, done)`
Get information about a work in progress

*arguments*
* `wipId`: is used to specify a particular work-in-progress to get
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`


### `behance.getWipsRevisionInfo(wipId, revisionId, done)`
Get information and contents of a revision of a work in progress.

*arguments*
* `wipId`: is used to specify a particular work-in-progress to get.
* `revisionId`: is used to specify a particular revision of a work in progress.
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getCommentsOnRevisionWips(wipId, revisionId, page, done)`
Get comments on a revision of a work in progress.

*arguments*
* `wipId`: is used to specify a particular work-in-progress to get.
* `revisionId`: is used to specify a particular revision of a work in progress.
* `page`:  is a number that determine the page that need to retrieve.
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`


### `behance.getCollections(params, done)`
Search for collections.

*arguments*
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

### `behance.getCollectionById(collectionId, done)`
Get basic information about a collection.

*arguments*
* `collectionId`: is used to specify a particular collection to get.
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`


### `behance.getProjectsFromCollection(collectionId, params, done)`
Get projects from a collection.

*arguments*
* `collectionId`: is used to specify a particular collection to get.
* `params`: is an optional object that you use to send with request to Behance API
* `done`: is a function that is called when the data is retrieved from the server.
`function(err, result){}`

[Click here](https://github.com/sandeepchhapola/BehanceapiExamples) to explore more examples on git.

