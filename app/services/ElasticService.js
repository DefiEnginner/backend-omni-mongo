var elasticsearch = require("elasticsearch");

var client = new elasticsearch.Client({
  hosts: ["http://localhost:9200"]
});

client.cluster.health({}, function(error, response, status) {
  console.log("Errors:", error, "\n");
  console.log("Cluster health:", response, "\n");
  console.log("Status:", status, "\n");
});

/**
 * Create Index
 * {
 *      index: "company"
 * }
 */
exports.create = index => {
  client.indices.create(
    {
      index
    },
    function(err, resp, status) {
      if (err) {
        console.log(err);
      } else {
        console.log("create", resp);
      }
    }
  );
};

/**
 * Create Index
 * {
 *      index: "company_test"
 * }
 */
exports.delete = index => {
  client.indices.delete({ index }, function(err, resp, status) {
    console.log("delete", resp);
  });
};

/**
 * index: "company_test",
      type: "card",
      body: {
        query: {
          match: { question: "question" }
        }
      }
 */
exports.search = (index, type, body) => {
  client.search(
    {
      index,
      type,
      body
    },
    function(error, response, status) {
      if (error) {
        console.log("search error: " + error);
      } else {
        console.log("--- Response ---");
        console.log(response);
        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit) {
          console.log(hit);
        });
      }
    }
  );
};

/**
 * {
      index: "company_test",
      type: "card",
      body: cardBody
    }
 */

exports.createCard = (index, type, body, callback) => {
  client.index(
    {
      index,
      type,
      body
    },
    function(err, resp, status) {
      callback(err, resp, status);
    }
  );
};

/**
 * {
      index: "company_test",
      id: cardId, //id input
      type: "card"
    }
 */

exports.deleteCard = (index, cardId, type, callback) => {
  client.delete(
    {
      index,
      id, //id input
      type
    },
    function(err, resp, status) {
      callback(err, resp, status);
    }
  );
};

/**
 * {
      index: "company_test",
      type: "card",
      body: body
    }
 */
exports.updateCard = (index, type, body, callback) => {
  client.update(
    {
      index,
      type,
      body
    },
    (err, resp, status) => callback(err, resp, status)
  );
};
