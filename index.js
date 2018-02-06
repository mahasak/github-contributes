var axios = require('axios');
var cheerio = require('cheerio');
var { DateTime } = require('luxon');

var fetch = async (username, server = "github.com") => {
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

module.exports = async (username, server = 'github.com') => {
  try {
    const contrib = await fetch(username, server);
    return contrib
  }
  catch(err)
  {
    console.log(err, err.stack);
  }
}