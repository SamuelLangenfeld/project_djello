var express = require("express");
var router = express.Router();
var models = require("../models");
var Board = models.Board;
var List = models.List;
var User = models.User;
var Card = models.Card;
var CardMember = models.CardMember;

router.delete("/:id/members/:memberId", async (req, res, next) => {
  try {
    let member = {
      userId: req.body.userId,
      cardId: req.body.cardId
    };

    let card = await Card.findById(member.cardId);
    let user = await User.findById(member.userId);

    await card.removeUser(user);
    res.status(200).send("Success");
  } catch (e) {
    console.error(e);
    next();
  }
});

router.post("/:id/members", async (req, res, next) => {
  try {
    let member = {
      userId: req.body.userId,
      cardId: req.body.cardId
    };

    let prevMember = await CardMember.findAll({
      where: { userId: member.userId, cardId: member.cardId }
    });
    if (prevMember.length) {
      res.status(500).send("User is already a member of this card");

      throw new Error("User is already a member");
    }
    let memberObj = await CardMember.build(member);
    let savedMember = await memberObj.save();
    let card = await Card.findById(savedMember.cardId);
    let members = await card.getUsers();
    card.dataValues.members = members;
    res.json(card);
  } catch (e) {
    console.error(e);
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    let card = {
      title: req.body.title,
      description: req.body.description,
      list: req.body.list
    };

    let cardObj = await Card.build(card);
    let savedCard = await cardObj.save();
    res.json(savedCard);
  } catch (e) {
    console.error(e);
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let card = await Card.findById(req.params.id);
    let members = await card.getUsers();
    card.dataValues.members = members;
    res.json(card);
  } catch (e) {
    console.error(e);
    next();
  }
});

module.exports = router;
