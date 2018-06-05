var fs = require('fs');

var file = fs.readFileSync('faqs.md', 'utf-8');

var lines = file.split('\n');

var i = 1;

lines.forEach(line => {
    if (line.indexOf('####') === 0) {
        var newfilename = "questions/q" + i + ".md";
        var content = line.replace("####", "###");
        writeFile(newfilename, content);
        i++;
    }
});

function writeFile(filename, content) {
    fs.writeFile(filename, content, function (err) {
      if (err) throw err;
      console.log('Saved: ' + filename);
    });
  }