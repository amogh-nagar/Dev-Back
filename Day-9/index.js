const express = require("express");
const app = express();
const path = require("path");
// console.log(__dirname);

app.set("view engine", "jade");
app.set("views", "views");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname,'public','test.json'));
  //   res.download(path.join(__dirname,'public','test.json'),'hello.json')
  res.render("index", { title: "Express" });
});

app.listen(5050,()=>{
    console.log('Connected');
});
