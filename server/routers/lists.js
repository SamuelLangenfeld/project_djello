var express = require("express");
var router = express.Router();
var models = require("../models");
var Board = models.Board;
var List = models.List;
var User = models.User;
var Card = models.Card;

router.post("/", async (req, res, next) => {
  try {
    let list = {
      title: req.body.title,
      description: req.body.description,
      board: req.body.board
    };

    let listObj = await List.build(list);
    let savedList = await listObj.save();

    savedList = await List.findById(savedList.id, {
      include: [{ model: Card }]
    });

    let _savedList = { ...savedList.dataValues };
    _savedList.cards = _savedList.Cards.map(card => card.id);
    delete _savedList.Cards;
    res.json(_savedList);
  } catch (e) {
    console.error(e);
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let list = await List.findById(req.params.id, {
      include: [{ model: Card }]
    });

    let _list = { ...list.dataValues };
    _list.cards = list.Cards.map(card => card.id);
    delete _list.Cards;
    res.json(_list);
  } catch (e) {
    console.error(e);
    next();
  }
});

module.exports = router;
