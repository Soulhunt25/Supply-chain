const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(token);

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (user, err) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = auth;
