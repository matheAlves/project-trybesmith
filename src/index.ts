import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `On PORT: ${PORT} server is running`,
));

export default server;
