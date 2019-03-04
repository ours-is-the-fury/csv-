var fs = require('fs');
var Papa = require('papaparse');
var file = './list.csv';
// When the file is a local file when need to convert to a file Obj.
//  This step may not be necissary when uploading via UI
var content = fs.readFileSync(file, "utf8");

var res;
Papa.parse(content, {
  header:true,
  complete: function(results) {
      console.log("Finished:", results.data);
  res = results.data;
  }
});
