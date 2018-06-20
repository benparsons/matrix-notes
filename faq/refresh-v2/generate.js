const fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt({html: true});
var markdownItAttrs = require('markdown-it-attrs'); 
md.use(markdownItAttrs);
md.use(require("markdown-it-anchor"), {permalink: true}); // Optional, but makes sense as you really want to link to something
md.use(require("markdown-it-table-of-contents"));

function html() {
    var outline = fs.readFileSync("faq.html", 'utf-8');

    var markdownSource = "\n[[toc]]\n\n";

    var config = JSON.parse(fs.readFileSync("./questions-config.json", 'utf8'));

    var definitionLinks = "";
    config.definitions.forEach((definition) => {
        definitionLinks += "[" + definition.name.toLowerCase() + "]: ";
        definitionLinks += "#definition-" + definition.name.toLowerCase().replace(' ', '');
        definitionLinks += "\n";
    });

    config.sections.forEach((section) => {
        markdownSource += "\n# " + section.name + "\n";
        section.parts.forEach((part) => {
            markdownSource += "\n## " + part.name + "\n";
            part.questions.forEach((question) => {
                var questionMarkdown = fs.readFileSync("questions/q" + question + ".md", 'utf-8');

                var questionParsed = md.parse(questionMarkdown + "\n\n" + definitionLinks, {});
                var questionDefinitions = [];
                questionParsed.forEach(token => {
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

                questionMarkdown += "\n\n|Term|Definition|\n|---|---|\n";
                questionDefinitions.forEach(term => {
                    questionMarkdown += "|" + term + "|";
                    questionMarkdown += config.definitions.find(d => {return d.name.toLowerCase() == term.toLowerCase()}).definition;
                    questionMarkdown += "|\n";
                });
                questionMarkdown += "{.definition-list}";
                markdownSource += questionMarkdown;
                markdownSource += "\n</div>\n";
            });
        });
    });

    markdownSource += "\n\n";
    markdownSource += definitionLinks;

    return outline.replace("{{QUESTIONS}}", md.render(markdownSource));
}

module.exports = {
    html: html
}