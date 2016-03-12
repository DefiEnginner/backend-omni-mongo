//var client = require('./connection.js');

var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
hosts: ['http://localhost:9200']
});

client.update({
  index: string,
  wait_for_active_shards: string,
  _source: string | string[],
  _source_excludes: string | string[],
  _source_includes: string | string[],
  lang: string,
  //refresh: 'true' | 'false' | 'wait_for',
  retry_on_conflict: number,
  routing: string,
  timeout: string,
  if_seq_no: number,
  if_primary_term: number,
  body: object
})
