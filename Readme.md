# behanceapi

## How to use

behanceapi is designed to get data from  Behance API in vary simplest way. 

```javascript
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
### `behanceapi` provides the following functions.

##### 1). getProjects(params, done)

`Search for projects. It takes two parameters, first is *params* which is an Object having optional parameters (i.e q, page, tags, city, time and much more provided by behance) in key-value pair, second is *done* which is a callback function.`

##### 2). getProjectById(projectId, done)

 Get the information and content of a project.

##### 3). getCommentsFromProject(projectId, page, done)

 Get the comments for a project.

##### 4). creativesToFollowList(page, done)

 Provides a list of creatives you might be interested in following

##### 5). getAllCreativeFields(done)

 Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular')

##### 6). getBehanceUsersList(params, done)

 Search for users.

##### 7). getBehanceUser(user, done)

 Get basic information about a user. The user argument can be an ID or username.

##### 8). getBehanceUserProjects(user, params, done)

 Get the projects published by a user. The user argument can be an ID or username.

##### 9). getBehanceUserWips(user, params, done)

 Get the works-in-progress published by a user. The user argument can be an ID or username.

##### 10). getBehanceUserAppreciations(user, page, done)

 Get a list of user's recently appreciated projects. The user argument can be an ID or username.

##### 11). getBehanceUserCollections(user, params, done)

 Get a list of a user's collections. The user argument can be an ID or username.

##### 12). getBehanceUserStats(user, done)

 Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.

##### 13). getBehanceUserFollowers(user, params, done)

 Get a list of creatives who follow the user.

##### 14). getBehanceUserFollowing(user, params, done)

 Get a list of creatives followed by the user.

##### 15). getBehanceUserWorkExperienceList(user, done)

 A list of the user's professional experience

##### 16). getWips(params, done)

 Search for works-in-progress.

##### 17). getWipsByWipId(wipId, done)

 Get information about a work in progress.

##### 18). getWipsRevisionInfo(wipId, revisionId, done)

 Get information and contents of a revision of a work in progress.

##### 19). getCommentsOnRevisionWips(wipId, revisionId, page, done)

 Get comments on a revision of a work in progress.

##### 20). getCollections(params, done)

 Search for collections.

##### 21). getCollectionById(collectionId, done)

 Get basic information about a collection.

##### 22). getProjectsFromCollection(collectionId, params, done)

 Get projects from a collection.
