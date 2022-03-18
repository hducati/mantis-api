import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { AppError } from './shared/errors/app-error';
import { databaseConnection } from './config/database';
import './shared/container'
import { useContainer, useExpressServer } from 'routing-controllers';
import { diContainer } from './shared/di-container';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

useContainer(diContainer)
useExpressServer(app, {
  validation: true,
  classTransformer: true,
  plainToClassTransformOptions: {
    enableImplicitConversion: false,
  },
  defaultErrorHandler: false,
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statuscode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(400).json({
    status: 400,
    message: err.message
  });
});

databaseConnection()

app.listen(3333, () => {
  console.log('Server started on port 3333');
})
