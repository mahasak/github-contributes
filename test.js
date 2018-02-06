var github = require("./index");

var test = async () => {
  try {
    const data = await github.contributions("mahasak", "github.com");
    //console.log(data);

    const lang = await github.languages("mahasak", "github-contributes");

    console.log(lang);
  } catch (err) {
    console.log(err, err.stack);
  }
};

test();