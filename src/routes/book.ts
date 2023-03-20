import {Router} from 'express';
import {getBook, createBook, updateBook, deleteBook, allBooks} from '../controllers/book';

const router = Router();

// matches method GET and route /books/1
router.get('/:id', getBook);

// matches method GET and route /books
router.get('/', allBooks);

// matches method POST and route /books
router.post('/', createBook);

// matches method PUT and route /books/1
router.put('/:id', updateBook);

// matches method DELETE and route /books/1
router.delete('/:id', deleteBook);

export default router;