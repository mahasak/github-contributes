
var axios = require('axios');
var cheerio = require('cheerio');
const svgson = require('svgson')
var { DateTime } = require('luxon');

var getGitHubContributes = function(githubUsername,  server = 'github.com') {
  var endpoint = 'https://' + server + '/users/' + githubUsername +'/contributions?to=' + DateTime.local().toISODate();

  axios.get(endpoint + githubUsername)
    .then(response => {
      const $ = cheerio.load(response.data);
      $('.day').each((_, e) => {
        date = $(e).data('date');
        count = parseInt($(e).data('count'), 10);
        console.log(date + ': '+count)
      });
    })
    .catch(error => {
      console.log(error);
    });
}

getGitHubContributes('mahasak');