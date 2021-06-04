const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.login = async (req, res) => {
  try {
    var typeAuth = null;
    if (!(req.body.user_key === process.env.MACAPA_KEY || req.body.user_key === process.env.VAREJAO_KEY)) {
      return res.json({ Mensagem: 'Invalid Client'});
    }
    if ((req.body.user_key === process.env.MACAPA_KEY )) {
      typeAuth = 'MACAPA'
    } else if (req.body.user_key === process.env.VAREJAO_KEY)  {
      typeAuth = 'VAREJAO'
    }
    const token = jwt.sign({ user_key: req.body.user_key }, process.env.TOKEN_SECRET, { expiresIn: '2h' });
    return res.json({ auth: true, token: token, typeAuth: typeAuth});  
  } catch(erro) {
    console.log(erro);
    return res.status(500).json({ auth: false, Erro: erro });  
  }
}

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user_key = user;

    next();
  });
}