var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client( {
hosts: ['http://localhost:9200']
});

client.cluster.health({},function(error, response, status) {
    console.log("Errors:", error, '\n');
    console.log("Cluster health:", response, '\n');
    console.log("Status:", status, '\n');
});

module.exports = client;