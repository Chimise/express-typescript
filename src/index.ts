import express, {Request, Response} from 'express';
import bookRouter from './routes/book';

const app = express();

const port = process.env.PORT || 3500;

app.use(express.json());

app.use('/books', bookRouter);

app.use('*', (req: Request, res: Response) => {
	res.json({message: 'Welcome to book Api'});
})

app.listen(port, () => {
	console.log('Server running on http://localhost:%i',port)
});
