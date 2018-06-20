const fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt({html: true});
var markdownItAttrs = require('markdown-it-attrs'); 
md.use(markdownItAttrs);
md.use(require("markdown-it-anchor"), {permalink: true}); // Optional, but makes sense as you really want to link to something
md.use(require("markdown-it-table-of-contents"));

function html() {
    //var root = "faq/refresh-v2/";
    var root = "./";

    var outline = fs.readFileSync(root + "faq.html", 'utf-8');

    var markdownSource = "\n[[toc]]\n\n";

    var config = JSON.parse(fs.readFileSync(root + "questions-config.json", 'utf8'));

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
                if (typeof(question) == 'number') { question = "q" + question; } 
                var questionMarkdown = fs.readFileSync(root + "questions/" + question + ".md", 'utf-8');

                var questionParsed = md.parse(questionMarkdown + "\n\n" + definitionLinks, {});
                var questionDefinitions = [];
                questionParsed.forEach(token => {
                    if (! token.children) {
                        return;
                    }
                    token.children.forEach(childToken => {
                        if (childToken.type === "link_open") {
                            childToken.attrs.forEach(attr => {
                                if (attr[1].indexOf('#definition-') !== -1)
                                    questionDefinitions.push(attr[1].replace('#definition-', ''));
                            });
                        }
                    });
                });

                markdownSource += "\n<div class='question'>\n\n";

                questionMarkdown += "\n\n|Term|Definition|\n|---|---|\n";
                questionDefinitions.forEach(term => {
                    questionMarkdown += "|" + term + "|";
                    questionMarkdown += config.definitions.find(d => {return d.name.toLowerCase().replace(' ', '') == term.toLowerCase()}).definition;
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