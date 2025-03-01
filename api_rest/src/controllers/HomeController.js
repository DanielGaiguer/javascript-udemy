import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Tailene',
      sobrenome: 'Mello',
      email: 'gaiguer2015@gmail.com',
      idade: 14,
      peso: 47,
      altura: 1.58,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
