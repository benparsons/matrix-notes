const fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt({html: true});
var markdownItAttrs = require('markdown-it-attrs'); 
md.use(markdownItAttrs);

var outline = fs.readFileSync("faq/refresh-v2/faq.html", 'utf-8');

var markdownSource = "";

var config = require("./questions-config.json");

var definitionLinks = "";
config.definitions.forEach((definition) => {
    definitionLinks += "[" + definition.name + "]: ";
    definitionLinks += "#definition-" + definition.name.toLowerCase();
    definitionLinks += "\n";
});

config.sections.forEach((section) => {
    markdownSource += "\n# " + section.name + "\n";
    section.parts.forEach((part) => {
        markdownSource += "\n## " + part.name + "\n";
        part.questions.forEach((question) => {
            var questionmarkdown = fs.readFileSync("faq/refresh-v2/questions/q" + question + ".md", 'utf-8');

            var questionparsed = md.parse(questionmarkdown + "\n\n" + definitionLinks, {});
            var questionDefinitions = [];
            questionparsed.forEach(token => {
                if (! token.children) {
                    return;
                }
                var getDefinition = false;
                token.children.forEach(childToken => {
                    if (getDefinition) {
                        questionDefinitions.push(childToken.content)
                        getDefinition = false;
                    }
                    if (!getDefinition && childToken.type === "link_open") {
                        childToken.attrs.forEach(attr => {
                            if (attr[0] === "class" && attr[1] === "definition") {
                                getDefinition = true;
                            }
                        });
                    }
                });
            });

            markdownSource += "\n<div class='question'>\n\n";

            questionmarkdown += "\n\n|Term|Definition|\n|---|---|\n";
            questionDefinitions.forEach(term => {
                questionmarkdown += "|" + term + "|";
                questionmarkdown += config.definitions.find(d => {return d.name == term}).definition;
                questionmarkdown += "|\n";
            });
            questionmarkdown += "{.definition-list}";
            markdownSource += questionmarkdown;
            markdownSource += "\n</div>\n";
        });
    });
});

markdownSource += "\n\n";
markdownSource += definitionLinks;

console.log(outline.replace("{{QUESTIONS}}", md.render(markdownSource)));
//console.log(md.render(markdownSource));
//console.log(markdownSource);
