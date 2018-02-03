
var endpoint = 'https://github.com/users/mahasak/contributions?to=2018-02-02';
var axios = require('axios');
var cheerio = require('cheerio');

var getGitHubContributes = function(githubUsername) {
  axios.get(endpoint + githubUsername)
  .then(response => {
    const $ = cheerio.load(response);
    var contributions = 0;

    $('.js-calendar-graph svg g').each((_, e) => {
      console.log(e)
    });
    
  })
  .catch(error => {
    console.log(error);
  });
}


getGitHubContributes('mahasak');