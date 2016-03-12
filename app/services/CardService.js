const Card = require("../models").Card;
const _ = require("underscore");

exports.getCompanyByName = async function(name) {
  let err, company;
  [err, company] = await to(Company.find({ name }));
  if (err) TE("Unable to find company: " + err.message);

  return dish;
};

exports.create = async function(cardJson) {
  const [err, card] = await to(Card.create(cardJson));
  if (err) TE("Unable to create card: " + err.message);
  return card;
};

exports.update = async function(cardJson) {
  const [err, card] = await to(Card.update(cardJson));
  if (err) TE("Unable to create card: " + err.message);
  return card;
};

exports.delete = async cardId => {
  await to(Card.delete(cardId));
};
