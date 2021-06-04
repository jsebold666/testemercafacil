
exports.getDbUri = (req, res, next) => {
    console.log(req.user_key.user_key);
    if (req.user_key.user_key === process.env.MACAPA_KEY) {
      req.DB_URI = process.env.MYSQL_URI;
      req.user = 'macapa';
    } else {
      req.DB_URI = process.env.POSTGRES_URI;
      req.user = 'varejao';
    }
    next();
}