import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    }catch(e){
      console.log(e)
      res.status(400).json('Deu um erro' /*errors: e.errors.map((err) => err.message),*/)
    }

  }
}

export default new UserController();
