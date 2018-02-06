var contributions = require("./index");

var test = async () => {
  try {
    const data = await contributions("mahasak", "github.com");
    console.log(data);
  } catch (err) {
    console.log(err, err.stack);
  }
};

test();