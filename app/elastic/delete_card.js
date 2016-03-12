//var client = require('./connection.js');

var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
hosts: ['http://localhost:9200']
});

client.delete({
  index: 'company_test',
  id: //id input,
  type: 'card'
},function(err,resp,status) {
    console.log(resp);
});
