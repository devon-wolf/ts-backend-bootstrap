import express from 'express';
import notFoundMiddleware from './middleware/not-found';
import errorMiddleware from './middleware/error';

const app = express();

app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
