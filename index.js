var axios = require('axios');
var cheerio = require('cheerio');
var { DateTime } = require('luxon');

var contributions = async (server, username) => {
  return axios.get(`https://${server}/users/${username}/contributions?to=${DateTime.local().toISODate()}`)
    .then( r=> {
      var $ = cheerio.load(r.data);

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

var languages = async (server, username, repository) => {
  return axios.get(`https://api.${server}/repos/${username}/${repository}/languages`)
    .then( r=> r.data)  
    .catch(error => {console.log(error);return Promise.reject(error);})
}

module.exports = {
  contributions: async (username, server = 'github.com') => {
    try {
      const contrib = await contributions(server, username);
      return contrib;
    }
    catch(err)
    {
      console.log(err, err.stack);
    }
  },
  languages: async (username, repository, server = 'github.com') => {
    try {
      const langs = await languages(server, username, repository);
      return langs;
    }
    catch(err)
    {
      console.log(err, err.stack);
    }
  }
}