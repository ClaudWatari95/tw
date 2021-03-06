import jwt from 'jsonwebtoken';

import config from '../config';

const checkToken = (req, res, next) => {
  const token = req.header('authorization');

  if (token) {
    jwt.verify(token, process.env.secret_token, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid token'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).json({
      success: false,
      message: 'No token'
    });
  }
};

export default checkToken;
