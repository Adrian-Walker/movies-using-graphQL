const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
app.use(cors());

//Mongo DB Connection
CONNECTION_URL =
  "mongodb+srv://walker3365:19606@cluster0.qvliczh.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL);
mongoose.connection.once("open", () => {
  console.log("Connected to the database successfully");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);


app.listen(4000, () => {
  console.log("Server Is Running On Port 4000!");
});
