var github = require("./index");

var test = async () => {
  try {
    const contributions = await github.contributions("mahasak", "github.com");
    console.log(contributions);

    const languages = await github.languages("mahasak", "github-contributes");
    console.log(languages);
  } catch (err) {
    console.log(err, err.stack);
  }
};

test();