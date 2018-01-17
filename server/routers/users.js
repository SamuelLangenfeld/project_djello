var express = require("express");
var router = express.Router();
var models = require("../models");
var User = models.User;
var Board = models.Board;
var List = models.List;

router.get("/:id", async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id, {
      include: [{ model: Board }]
    });
    let _user = { ...user.dataValues };
    _user.boards = user.Boards.map(board => {
      return { id: board.id, name: board.name };
    });
    delete _user.Boards;
    res.json(_user);
  } catch (e) {
    console.error(e);
    next();
  }
});

router.get("/", async (req, res, next) => {
  try {
    let users = await User.findAll();
    res.json(users);
  } catch (e) {
    console.error(e);
    next();
  }
});

module.exports = router;
