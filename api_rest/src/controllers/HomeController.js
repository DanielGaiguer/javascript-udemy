import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Daniel',
      sobrenome: 'Gaiguer',
      email: 'gaiguer2019@gmail.com',
      idade: 16,
      peso: 64,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
