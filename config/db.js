if (process.env.NODE_ENV == "production") {
  module.exports = {
    mongoURI:
      "mongodb+srv://lucasalvesba:mongo123@cluster0.j7ugs6s.mongodb.net/?retryWrites=true&w=majority",
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/blogapp" };
}
