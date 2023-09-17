const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("tiny"));

const PORT = process.env.PORT || 8000;
const ENV = process.env.ENV || "developement";

app.set("port", PORT);
app.set("env", ENV);

app.use("/", require(path.join(__dirname, "Router")));

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
