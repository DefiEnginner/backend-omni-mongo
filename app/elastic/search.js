//var client = require('./connection.js');

var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
hosts: ['http://localhost:9200']
});

client.search({
  index: 'company_test',
  type: 'card',
  body: {
    query: {
      match: { "question": "question" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});
