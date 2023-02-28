import { server } from './src/app';
import { conn } from './src/db/config';
import { PORT } from './src/config';

conn.sync({ force: true }).then(() => {
  server.listen(`${PORT}`, () => {
    console.log(`%s listening at ${PORT}`);
  });
});
