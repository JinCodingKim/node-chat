const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./controllers/messages_controller");
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

app.post("/api/messages", mc.create);
app.get("/api/messages", mc.read);
app.put("/api/messages/:id", mc.update);
app.delete("/api/messages/:id", mc.destroy);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
