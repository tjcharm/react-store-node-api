const express = require("express");
const mongoose = require("mongoose");
const router = express();
const Message = require("../models/message");

// @route get /
// @desc loads form
router.get("/", async (req, res) => {
  const items = await Message.find();
  try {
    res.status(201).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// finish making this get request to get all messages by order
router.get(
  "/getPreviousMessages/:senderUserId/:recieverUserId",
  async (req, res) => {
    const messages = await Message.find({
      senderUserId: req.params.senderUserId,
      recieverUserId: req.params.recieverUserId,
    });
    try {
      if (messages) {
        return res.status(201).json(messages);
      } else {
        return console.log("could not get messages");
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

router.post(
  "/sendNewMessage/:senderUserId/:recieverUserId",
  async (req, res) => {
    const message = await new Message({
      senderUserId: req.params.senderUserId,
      recieverUserId: req.params.recieverUserId,
      itemId: req.body.itemId,
      messageBody: req.body.messageBody,
      messageId: req.body.messageId,
    });
    try {
      const newMessage = message.save();
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
