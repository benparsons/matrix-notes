const fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();

var style = fs.readFileSync("style.css", 'utf-8');
console.log("<style>");
console.log(style);
console.log("</style>");

fs.readdirSync(".").forEach(filename => {
  if (filename.indexOf('section') === 0) {
    //console.log(filename);
    var file = fs.readFileSync(filename, 'utf-8');
    console.log("<div>");
    file = "# " + filename + "\n\n" + file
    console.log(md.render(file));
    console.log("</div>");
  }
})
