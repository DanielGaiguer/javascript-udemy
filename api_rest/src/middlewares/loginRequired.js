import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: [`Login required`]
    });
    }

    const [ texto, token ] = authorization.split(' ');

    try{
      const dados = jwt.verify(token, process.env.TOKEN_SECRET);
      const { id, email } = dados;
      req.userId = id;
      req.userEmail = email;
      return next(); 
    }catch(e){
      return res.status(401).json({
        errors: [`token expirado ou invalido.`]
      });
    }
};
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJnYWlndWVyMjAxNUBnbWFpbC5jb20iLCJpYXQiOjE3NDEwNTg4OTAsImV4cCI6MTc0MTY2MzY5MH0.CvTZqs-QM7UUe9wQgpkj8HBQ7AxpkmuEn5_zidErvVM
