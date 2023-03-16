import {Router} from 'express';
import {getBook, createBook, updateBook, deleteBook, allBooks} from '../controllers/book';

const router = Router();
// GET /books/:id

router.get('/:id', getBook);
// POST /books
router.get('/', allBooks);

router.post('/', createBook);
//U
router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

export default router;