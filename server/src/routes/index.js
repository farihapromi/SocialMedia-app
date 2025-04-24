import postRouter from './postRouter.js';
import UserRouter from './userRouter.js';
const configureRouter = (app) => {
  app.get('/status', (req, res) => {
    res.send('OK');
  });

  app.use('/api/users', UserRouter);
  app.use('/api/posts', postRouter);
};
export default configureRouter;
