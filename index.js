var requestaxiosify = require('axios');
var cheerio = require('cheerio');
var { DateTime } = require('luxon');

var getGitHubContributes = (githubUsername,  server = 'github.com') => {
  var endpoint = 'https://' + server + '/users/' + githubUsername +'/contributions?to=' + DateTime.local().toISODate();
  
  return axios.get(endpoint)
    .then( result=> {
      var $ = cheerio.load(result.data);
      var data = [];
      
      $('.day').each((_, e) => {
        date = $(e).data('date');
        count = parseInt($(e).data('count'), 10);
        data.push({date, count});
      });

      return data;
    })
    .catch(error => {console.log(error);return Promise.reject(error);})
}

module.exports = getGitHubContributes;