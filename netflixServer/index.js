const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.send("Ready Netflix");
});

app.use("", require("./routes/movies"));
app.use("/auth", require("./routes/auth"));

app.listen(8080, () => {
    console.log("Now listening on Port8080");
});