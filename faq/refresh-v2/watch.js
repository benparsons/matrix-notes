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
//   if (filename && filename.indexOf('twim') !== -1) {
//     console.log(`filename provided: ${filename}`);
//     var file = fs.readFileSync(filename, 'utf-8');
//     var urls = fs.readFileSync("_url-directory.md", 'utf-8');
//     var html = converter.makeHtml(file + "\n\n" + urls);
//     writeHtmlFile("<body>\n" + html + "\n</body>\n", filename)
//   } else {
//     console.log('filename not provided or not twim');
//   }
});