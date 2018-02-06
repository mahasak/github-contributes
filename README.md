# Simple module to get Github Contribute

## usage:
```

var contributions = require("./index");

var contrib = async () => {
  try {
    const data = await contributions("mahasak", "github.com");
    console.log(data);
  } catch (err) {
    console.log(err, err.stack);
  }
};

contrib();

```

