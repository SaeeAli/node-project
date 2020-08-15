const { Message } = require("../models/Message");
const homepage = (req, res) => {
  Message.find()
    .then((result) => {
      console.log(result);
      res.render("index", { result });
    })
    .catch((err) => console.log(err));
};

const postNewMessage = (req, res) => {
  if (req.method === "GET") {
    res.render("addMessage", { err: false });
  }
  
  if (req.method === "POST") {
    const message = new Message(req.body);
    message
      .save()
      .then((result) => res.redirect("/"))
      .catch((err) => {
        console.log(err.errors);
        res.render("addMessage", { err: err.errors });
      });
  }
};

const showOneMessage = (req, res) => {
  Message.findById({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.render("showOne", { result });
    })
    .catch((err) => console.log(err));
};

const updateOneMessage = (req, res) => {
  if (req.method === "GET") {
    Message.findById({ _id: req.params.id })
      .then(result => {
        console.log(result);
        res.render("editMessage", { result })}
      )
      .catch((err) => console.log(err));
  }

  if (req.method === "POST") {
    Message.findByIdAndUpdate({ _id: req.params.id })
      .then((result) => {
        result.name = req.body.name;
        result.message = req.body.message;
        result
          .save()
          .then(() => res.redirect("/"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
};
const deleteOneMessage = (req, res) => {
  Message.findByIdAndDelete({ _id: req.params.id })
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};
module.exports = {
  homepage,
  postNewMessage,
  showOneMessage,
  updateOneMessage,
  deleteOneMessage
};