const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const PORT = config.get('port');
const mongoose = require("mongoose");
const cors = require('cors');
const categoriesRouter = require("./routes/categoriesRouter.js");
const userRouter = require("./routes/userRouter.js");

const itemRouter = require('./routes/itemRouter');
const orderRouter = require('./routes/orderRouter');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  } catch (e) {
    console.log("Server error", e.message);
    process.exit();
  }
}

app.use('/api/items/', itemRouter);
app.use('/api/orders/', orderRouter);
app.use('/api/categories/', categoriesRouter);
app.use('/api/users/', userRouter);

start();

process.on("SIGINT", () => {
  mongoose.disconnect(() => process.exit())
});
