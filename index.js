
var endpoint = 'https://github.com/users/mahasak/contributions?to=2018-02-02';
var axios = require('axios');
var cheerio = require('cheerio');
const svgson = require('svgson')

var getGitHubContributes = function(githubUsername) {
  axios.get(endpoint + githubUsername)
  .then(response => {
    const $ = cheerio.load(response);
    var contributions = 0;
    console.log(response);

  })
  .catch(error => {
    console.log(error);
  });
}


getGitHubContributes('mahasak');