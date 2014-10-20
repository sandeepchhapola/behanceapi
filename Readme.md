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

#### 1). getProjects(params, done)

`Search for projects. It takes two parameters, first is `*params*` which is an Object having parameters (i.e q, page, tags, city, time and much more provided by behance) in key-value pair and it is optional, second is `*done*` which is a callback function.`

#### 2). getProjectById(projectId, done)

`Get the information and content of a project. It takes two parameters, first is `*projectId*` of a behance project, second is `*done*` which is a callback function.`

#### 3). getCommentsFromProject(projectId, page, done)

`Get the comments for a project. It allows three parameters, first is `*projectId*` of a behance project, second is `*page*` which is page number and it is optional, third is `*done*` which is a callback function.`

#### 4). creativesToFollowList(page, done)

`Provides a list of creatives you might be interested in following.it allows two parameters, first is `*page*` which is page number and it is optional, second is `*done*` which is a callback function.`

#### 5). getAllCreativeFields(done)

`Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular').it allows one parameter which is callback function`

#### 6). getBehanceUsersList(params, done)

`Search for users.It takes two parameters, first is `*params*` which is an Object having parameters (provided by behance) in key-value pair and it is optional, second is `*done*` which is a callback function.`

#### 7). getBehanceUser(user, done)

`Get basic information about a user. The `*user*` argument can be an ID or username and `*done*` is a callback function.`

#### 8). getBehanceUserProjects(user, params, done)

`Get the projects published by a user. The `*user*` argument can be an ID or username,`*params*` argument is an Object having parameters (provided by behance) in key-value pair and it is optional, `*done*` argument is a callback function.`

#### 9). getBehanceUserWips(user, params, done)

`Get the works-in-progress published by a user. The `*user*` argument can be an ID or username,`*params*` argument is an Object having parameters (provided by behance) in key-value pair and it is optional, `*done*` argument is a callback function.`

#### 10). getBehanceUserAppreciations(user, page, done)

`Get a list of user's recently appreciated projects. The `*user*` argument can be an ID or username,`*page*` argument is just a page number and it is optional, `*done*` argument is a callback function.`

#### 11). getBehanceUserCollections(user, params, done)

`Get a list of a user's collections. The `*user*` argument can be an ID or username,`*params*` argument is an Object having parameters (provided by behance) in key-value pair and it is optional, `*done*` argument is a callback function.`

#### 12). getBehanceUserStats(user, done)

`Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views. The `*user*` argument can be an ID or username, `*done*` argument is a callback function.`

#### 13). getBehanceUserFollowers(user, params, done)

`Get a list of creatives who follow the user. The `*user*` argument can be an ID or username,`*params*` argument is an Object having parameters (provided by behance) in key-value pair and it is optional, `*done*` argument is a callback function.`

#### 14). getBehanceUserFollowing(user, params, done)

`Get a list of creatives followed by the user. The `*user*` argument can be an ID or username,`*params*` argument is an Object having parameters (provided by behance) in key-value pair and it is optional, `*done*` argument is a callback function.`

#### 15). getBehanceUserWorkExperienceList(user, done)

`A list of the user's professional experience. The `*user*` argument can be an ID or username, `*done*` argument is a callback function.`

#### 16). getWips(params, done)

`Search for works-in-progress. The `*params*` argument is an Object having parameters (provided by behance) in key-value pair and it is optional, `*done*` argument is a callback function.`

#### 17). getWipsByWipId(wipId, done)

`Get information about a work in progress. The `*wipId*` is a ID of work-in-process, and `*done*` argument is a callback function.`

#### 18). getWipsRevisionInfo(wipId, revisionId, done)

`Get information and contents of a revision of a work in progress. The `*wipId*` argument is a ID of work-in-process, `*revisionId*` a ID of revision of a work in progress, and `*done*` argument is a callback function.`

#### 19). getCommentsOnRevisionWips(wipId, revisionId, page, done)

`Get comments on a revision of a work in progress. The `*wipId*` argument is a ID of work-in-process, `*revisionId*` a ID of revision of a work in progress,`*page*` argument is just a page number ans it is optional, and `*done*` argument is a callback function.`

#### 20). getCollections(params, done)

`Search for collections. It takes two parameters, first is `*params*` which is an Object having parameters (i.e q, page, tags, city, time and much more provided by behance) in key-value pair and it is optional, second is `*done*` which is a callback function.`

#### 21). getCollectionById(collectionId, done)

`Get basic information about a collection. The `*collectionId*` is a ID of a collection, and `*done*` argument is a callback function.`

#### 22). getProjectsFromCollection(collectionId, params, done)

`Get projects from a collection. The `*collectionId*` argument is an ID of a collection, `*params*` argument is an Object having parameters (provided by behance) in key-value pair and it is optional, `*done*` argument is a callback function.`


[Click here](https://github.com/sandeepchhapola/BehanceapiExamples) to explore more examples on git.