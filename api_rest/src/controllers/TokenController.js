import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    const user = await User.findOne({ where: { email } });
    res.json('OK');
  }
}

export default new TokenController();
