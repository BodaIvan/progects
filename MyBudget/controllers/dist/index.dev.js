"use strict";

exports.index = function (req, res) {
  res.render('index');
};

exports["new"] = function (req, res) {
  res.render('new');
};

exports.calendar = function (req, res) {
  res.render('calendar', {
    name: name,
    price: price
  });
};

exports.save = function (req, res) {
  var name = req.body.name ? req.body.name : "name";
  var price = req.body.price ? req.body.price : "price";
  res.render('thanks', {
    name: req.body.name,
    price: req.body.price
  }, {
    errors: {}
  });
};