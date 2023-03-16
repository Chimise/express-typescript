import type {Request, Response} from 'express';
import BookService from '../services/book';

export const getBook = (req: Request, res: Response ) => {
	const id = parseInt(req.params.id as string);
	const book = BookService.find(id);

	if(!book) {
		return res.status(404).send({message: 'Book not found'});
	}

	res.json(book);

}

export const createBook = (req: Request, res: Response) => {
	const {title, author} = req.body;

	if(!title) {
		return res.status(400).json({message: 'Book title is required'});
	}

	if(!author) {
		return res.status(400).json({message: 'Book author is required'});
	}

	const book = BookService.add({title, author});

	res.status(201).json(book);

}

export const updateBook = (req: Request, res: Response) => {
	const id = parseInt(req.params.id as string);
	const {title, author} = req.body;

	if(!title && !author) {
		return res.status(400).json({message: 'Book title or author is required'});
	}

	const book = BookService.update(id, {title, author});
	
	if(!book) {
		return res.status(404).json({message: 'Book not found'});
	}
	res.json(book);
}

export const deleteBook = (req: Request, res: Response) => {
	const id = parseInt(req.params.id as string);
	const book = BookService.remove(id);
	if(!book) {
		return res.status(404).send({message: 'Book not found'});
	}
	res.json(book);
}

export const allBooks = (req: Request, res: Response) => {
	const books = BookService.books;
	res.json(books);
}