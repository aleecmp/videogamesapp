import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
// import routes from 'routes';
import { headersConfig, errorHandling } from './middlewares';

export const server = express();

/**
 * Middlewares
 */
const middlewares = {
  bodyParserUrl: bodyParser.urlencoded({ extended: true, limit: '50mb' }),
  bodyParserJson: bodyParser.json({ limit: '50mb' }),
  cookieParser: cookieParser(),
  logger: morgan('dev'),
  headers: headersConfig,
};

server.use(Object.values(middlewares));

/**
 * Routes
 */
// server.use('/', routes);

// Error catching endware.
server.use(errorHandling);
