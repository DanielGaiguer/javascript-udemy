import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginrequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginrequired, alunoController.store);
router.put('/:id', loginrequired, alunoController.update); 
router.get('/:id', alunoController.show);
router.delete('/:id', loginrequired, alunoController.delete);

export default router;
