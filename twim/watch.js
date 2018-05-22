//node watch.js && browser-sync start --server --files "*.html"


var fs = require('fs');
var showdown  = require('showdown'),
    converter = new showdown.Converter();

var filepath = "../blog/twim/twim-2018-05-25.md";

fs.watch(filepath, (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename) {
    console.log(`filename provided: ${filename}`);
    var file = fs.readFileSync(filepath, 'utf-8');
    var html = converter.makeHtml(file);
    writeHtmlFile("<body>\n" + html + "\n</body>\n")
  } else {
    console.log('filename not provided');
  }
});

function writeHtmlFile(html) {
  fs.writeFile("./twim-2018-05-25.html", html, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}