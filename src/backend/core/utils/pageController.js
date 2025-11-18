const path = require("path");

exports.showPage = (newPath) => {
  return (req, res) => {
    res.sendFile(path.join(__dirname, "../../", newPath));
  };
};