
var requestify = require('requestify');
var cheerio = require('cheerio');
var svgson = require('svgson')
var { DateTime } = require('luxon');

var getGitHubContributes = async (githubUsername,  server = 'github.com') => {
  var endpoint = 'https://' + server + '/users/' + githubUsername +'/contributions?to=' + DateTime.local().toISODate();
  var data = [];
  var response = await requestify.get(endpoint);
  var $ = cheerio.load(response.getBody());
  $('.day').each((_, e) => {
        date = $(e).data('date');
        count = parseInt($(e).data('count'), 10);
        data.push({date, count});
      });
  return data;
}

module.exports = getGitHubContributes;