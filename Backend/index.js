const express = require("express");
const router = express.Router();
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));

const PORT = process.env.PORT || 8000;
const ENV = process.env.ENV || "developement";

app.set("port", PORT);
app.set("env", ENV);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const allShoes = async (req, res) => {
  res.send("All shoes");
};

const sandles = async (req, res) => {
  res.send("All sandles");
};

router.route("/").get(allShoes);
router.route("/sandles/").get(sandles);

app.use("/", router);

app.use((req, res, next) => {
  const err = new Error("Requested URL not found");
  err.status = 404;
  res.send({
    error: {
      message: err.message,
    },
  });
  //   next(err);
});

// app.use((res) => {
//   console.error(err);
//   res.status(err.status).send({
//     error: {
//       message: err.message,
//     },
//   });
// });

app.listen(PORT, () => {
  console.log(`Backend listens at port ${PORT}`);
});
