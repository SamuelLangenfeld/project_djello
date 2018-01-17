var express = require("express");
var router = express.Router();
var models = require("../models");
var User = models.User;
var Board = models.Board;
var List = models.List;
var Card = models.Card;

router.get("/:id", async (req, res, next) => {
  try {
    let board = await Board.findById(req.params.id, {
      include: [{ model: List, include: [{ model: Card }] }]
    });
    let _board = { ...board.dataValues };
    _board.lists = board.Lists.map(list => list.dataValues);
    delete _board.Lists;
    _board.lists.forEach(list => {
      list.cards = list.Cards.map(card => card.dataValues);
      delete list.Cards;
    });
    res.json(_board);
  } catch (e) {
    console.error(e);
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    let board = {
      name: req.body.name,
      owner: req.body.userId
    };

    let boardObj = await Board.build(board);
    let savedBoard = await boardObj.save();

    res.json(savedBoard);
  } catch (e) {
    console.error(e);
    next();
  }
});

module.exports = router;
