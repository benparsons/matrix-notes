const fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt({html: true});
var markdownItAttrs = require('markdown-it-attrs'); 
md.use(markdownItAttrs);

var outline = fs.readFileSync("faq.html", 'utf-8');

var markdownSource = "";

var config = require("./questions-config.json");
config.sections.forEach((section) => {
    markdownSource += "\n# " + section.name + "\n";
    section.parts.forEach((part) => {
        markdownSource += "\n## " + part.name + "\n";
        part.questions.forEach((question) => {
            var questionmarkdown = fs.readFileSync("questions/q" + question + ".md", 'utf-8');
            markdownSource += "\n<div class='question'>\n\n";
            markdownSource += questionmarkdown;

            markdownSource += "<div class='definition-list'>list</div>"

            markdownSource += "\n</div>\n";
        });
    });
});

// console.log(markdownSource);
// console.log("====================");
// console.log(md.render(markdownSource));

markdownSource += "\n\n[Client]: /client"

console.log(outline.replace("{{QUESTIONS}}", md.render(markdownSource)));