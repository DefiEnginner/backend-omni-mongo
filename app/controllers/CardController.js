const CardService = require("../services/CardService");
const ElasticService = require("../services/ElasticService");

exports.createIndex = async function(req, res) {
  const {index} = req.body
  await to(ElasticService.createCard(index, (error, resp, stats) => {
    
    [err, newCard] = await to(CardService.create(resp));
  if (err) return ReE(res, "Err creating card: " + err.message, 500);

  return ReS(
    res,
    {
      resp
    },
    201
  );
  }))
};

exports.update = async function(req, res) {
  const {index, type, body} = req.body
  await to(ElasticService.updateCard(index, type, body, cardJson => {
    [err, newCard] = await to(CardService.update(cardJson));
  if (err) return ReE(res, "Err creating card: " + err.message, 500);

  return ReS(
    res,
    {
      cardJson
    },
    201
  );
  }))
};

exports.delete = async function(req, res) {
  await to(ElasticService.deleteCard(req.body, cardId => {
    [err, newCard] = await to(CardService.delete(cardId));
  if (err) return ReE(res, "Err creating card: " + err.message, 500);

  return ReS(
    res,
    {
      cardId
    },
    201
  );
  }))
};
