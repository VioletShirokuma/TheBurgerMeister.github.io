let express = require("express");
const db = require("./models");

let PORT = process.env.PORT || 8092;

let app = express();


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./controllers/burgerController")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);  });
});
