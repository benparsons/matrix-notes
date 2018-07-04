var fs = require('fs');
var generate = require('./generate.js');

var filepath = ".";

fs.watch(filepath, {recursive: true}, (eventType, filename) => {
  if (filename === "out.html")
    return;

  console.log(`event type is: ${eventType}; filename is: ${filename}`);

  fs.writeFile("./out.html", generate.html(), function(err) {
      if (err) console.log(err);
      else console.log("Saved");
  })
});