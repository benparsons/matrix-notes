const fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();
md.use(require("markdown-it-table-of-contents"), {includeLevel: [1,2,3,4]});

// var style = fs.readFileSync("style.css", 'utf-8');
// console.log("<style>");
// console.log(style);
// console.log("</style>");
var markdown = "[[TOC]]\n\n";
fs.readdirSync(".").forEach(filename => {
  if (filename.indexOf('section') === 0) {

    //console.log(filename);
    var file = fs.readFileSync(filename, 'utf-8');
    //markdown += "\n\n# " + filename + "\n\n" + file;
    markdown += "\n" + file
  }
})

console.log(md.render(markdown));
//console.log(markdown);