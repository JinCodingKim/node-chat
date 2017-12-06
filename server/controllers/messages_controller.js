let messages = [];
let id = 0;

const create = (req, res) => {
  const { text, time } = req.body;
  console.log(req.body);
  console.log({ text, time });
  messages.push({ id, text, time });
  id++;
  res.status(200).json(messages);
};

const read = (req, res) => {
  return res.json(messages);
};

const update = (req, res) => {
  const { text } = req.body;
  const updateID = req.params.id;
  const index = messages.findIndex(message => message.id == updateID);

  messages[index] = {
    id: messages[index].id,
    text: req.body.text || messages[index].text,
    time: req.body.time || messages[index].time
  };

  res.status(200).send(messages);
};

const destroy = (req, res, next) => {
  const deleteID = req.params.id;
  messageID = messages.findIndex(message => message.id == deleteID);
  messages.splice(messageID, 1);
  res.status(200).send(messages);
};

module.exports = {
  create,
  read,
  update,
  destroy
};
