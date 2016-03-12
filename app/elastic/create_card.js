//var client = require('./connection.js');

var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
hosts: ['http://localhost:9200']
});

client.index({
  index: 'company_test',
  type: 'card',
  body: {
    "question": "Test question",
    "description": "test description",
    "tags": '//create an array',
    "answer": "test description",
    "card_status": "status",
    "screenshots": "screenshots",
    "screen_recordings": "screnn recs",
    "update_interval": "update interval",
    "owners": "owners",
    "team_permissions": "t perms",
    "user_permissions": "u perms",

  }
},function(err,resp,status) {
    console.log(resp);
});
