import type {Book} from '../types';

class BookService {

	private _books: Book[] = [];
	
	static counter: number = 1;

	add(data: Omit<Book, 'id'|'createdAt'>) {;

		const book = {
			...data,
			id: BookService.counter++,
			createdAt: new Date()
		};

		this._books.push(book);

		return book;
	}

	remove(id: number) {
		const index = this._books.findIndex(book => book.id === id);
		if(index === -1) {
			return null;
		}
		const book = this._books.splice(index, 1)[0];
		return book;
	}

	find(id: number) {
		const book = this._books.find(book => book.id === id);
		if(!book) {
			return null;
		}
		return book;
	}

	update(id:number, data: Partial<Omit<Book, 'id'| 'createdAt'>>) {
		const index = this._books.findIndex(book => book.id === id);

		// Filter out properties with value undefined
		
		data = Object.fromEntries(Object.entries(data).filter(([_, value]) => !!value));

		if(index === -1) {
			return null;
		}
		const book = {
			...this._books[index],
			...data
		}

		this._books[index] = book;

		return book;
	}


	get books () {
		return this._books;
	}

}


export default new BookService();