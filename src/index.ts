import express, {Request, Response} from 'express';
import bookRouter from './routes/book';

const app = express();

const port = process.env.PORT || 3500;

app.use(express.json());

app.use('/', (req: Request, res: Response) => {
	res.send('<h1>Welcome to Book Api<h1>');
})

app.use('/books', bookRouter);

app.listen(port, () => {
	console.log('Server running on http://localhost:%i',port)
});
