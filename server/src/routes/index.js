import UserRouter from './userRouter.js';
const configureRouter = (app) => {
  app.get('/status', (req, res) => {
    res.send('OK');
  });

  app.use('/api', UserRouter);
};
export default configureRouter;
