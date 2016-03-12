//var client = require('./connection.js');

var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
hosts: ['http://localhost:9200']
});

client.indices.delete({index: 'company_test'},function(err,resp,status) {
  console.log("delete",resp);
});
