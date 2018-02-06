var github = require("./index");

var test = async () => {
  try {
    const data = await github.contributions("mahasak", "github.com");
    console.log(data);
  } catch (err) {
    console.log(err, err.stack);
  }
};

test();