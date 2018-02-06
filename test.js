var getGitHubContributes = require("./index");

var test = async () => {
  try {
    const data = await getGitHubContributes("mahasak");
    console.log(data);
  } catch (err) {
    console.log(err, err.stack);
  }
};

test();
