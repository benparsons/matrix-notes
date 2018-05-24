//node watch.js && browser-sync start --server --files "*.html"


var fs = require('fs');
var showdown  = require('showdown'),
    converter = new showdown.Converter();

var filepath = ".";//"../blog/twim/twim-2018-05-25.md";

fs.watch(filepath, (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename && filename.indexOf('twim') !== -1) {
    console.log(`filename provided: ${filename}`);
    var file = fs.readFileSync(filename, 'utf-8');
    var urls = fs.readFileSync("_url-directory.md", 'utf-8');
    var html = converter.makeHtml(file + "\n\n" + urls);
    writeHtmlFile("<body>\n" + html + "\n</body>\n", filename)
  } else {
    console.log('filename not provided or not twim');
  }
});

function writeHtmlFile(html, filename) {
  fs.writeFile("./html/" + filename.replace('md', 'html'), html, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}