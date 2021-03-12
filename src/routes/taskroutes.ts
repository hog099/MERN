import express from 'express';

import taskcontroller from '../controllers/taskcontroller';

const taskroutes = express.Router();

taskroutes
  .get('/tasks', taskcontroller.index)
  .post('/tasks', taskcontroller.store)
  .put('/tasks/:id', taskcontroller.update)
  .delete('/tasks/:id', taskcontroller.delete);



export default taskroutes;