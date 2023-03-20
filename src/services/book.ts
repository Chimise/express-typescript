import type {Book} from '../types';

class BookService {

	// Instance property that stores object of type Book in the array
	private _books: Book[] = [];

	// A static property id to keep track of the id assigned to the Book object
	static id: number = 1;

	// Accepts object, creates a Book object and adds it to the _books array
	add(data: Omit<Book, 'id'|'createdAt'>) {;
		// Generate an id and createdAt Date instance, generate an object of type Book
		const book: Book = {
			...data,
			id: BookService.id++,
			createdAt: new Date()
		};
		// Add the new object to the _book array
		this._books.push(book);

		return book;
	}

	// Remove a book from the _book array field using the id
	remove(id: number) {
		// Find the index of a book with the same id as the input id
		const index = this._books.findIndex(book => book.id === id);
		// findIndex returns -1 if not found, If book is not found, return null
		if(index === -1) {
			return null;
		}
		// Remove the book from the _book array
		const book = this._books.splice(index, 1)[0];
		return book;
	}

	// Finds a book in the _book array field using the id
	find(id: number) {
		// Find the book with the same id as the input id
		const book = this._books.find(book => book.id === id);
		if(!book) {
			return null;
		}
		return book;
	}

	// Update a book in the _books array with an id matching the input id
	update(id:number, data: Partial<Omit<Book, 'id'| 'createdAt'>>) {
		const index = this._books.findIndex(book => book.id === id);

		if(index === -1) {
			return null;
		}

		// Filter out properties with value undefined
		data = Object.fromEntries(Object.entries(data).filter(([_, value]) => !!value));

		const book: Book = {
			...this._books[index],
			...data
		}

		this._books[index] = book;

		return book;
	}

	// A getter function that returns the _books array field
	get books () {
		return this._books;
	}

}


export default new BookService();