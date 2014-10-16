# behanceapi

## How to use

behanceapi is designed to get data from  Behance API in vary simplest way. 

```javascript
var behanceapi = require('behanceapi');
var behance = new behanceapi.Behance('uPerQuAmaBb1b7AfNfNNygaumipYgjzL');

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
