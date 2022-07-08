if (process.env.NODE_ENV == "production") {
  module.exports = {
    mongoURI:
      "mongodb+srv://lucasalvesba:mongo123@cluster0.va94pd4.mongodb.net/?retryWrites=true&w=majority",
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/blogapp" };
}
