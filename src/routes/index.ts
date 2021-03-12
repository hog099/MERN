import express, { Request, Response, NextFunction } from 'express';

const routes = express.Router();

import taskroutes from './taskroutes';

routes
  .get('/api/v1/home', (req: Request, res: Response, next: NextFunction) => {
    let data = [
      {"id": 1, "name": "Pedro", "age": 25},
      {"id": 1, "name": "João", "age": 17},
      {"id": 1, "name": "Marcelo", "age": 32},
      {"id": 1, "name": "Roberto", "age": 27},
      {"id": 1, "name": "Anitta", "age": 18},
      {"id": 1, "name": "Carol", "age": 22},
      {"id": 1, "name": "Janaina", "age": 19},
    ]
    return res.status(200).json(data)
  });

routes
  .get('/api/v1/page02', (req: Request, res: Response, next: NextFunction) => {
    let data = [
      {"id": 1, "name": "Pedro", "age": 25},
      {"id": 1, "name": "João", "age": 17},
      {"id": 1, "name": "Marcelo", "age": 32},
      {"id": 1, "name": "Roberto", "age": 27},
      {"id": 1, "name": "Anitta", "age": 18},
      {"id": 1, "name": "Carol", "age": 22},
      {"id": 1, "name": "Janaina", "age": 19},
    ]
    return res.status(200).json(data)
  });


  routes.use('/api/v1', taskroutes);
  


routes
  .get('*', (req: Request, res: Response, next: NextFunction) => { return res.status(404).json({ message: `Não existe rota para a requisição solicitada ${req.url}, verifique.` }) })
  .post('*', (req: Request, res: Response, next: NextFunction) => { return res.status(404).json({ message: `Não existe rota para a requisição solicitada ${req.url}, verifique.` }) });


export default routes;

