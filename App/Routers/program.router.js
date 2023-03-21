const express = require('express');
const {
  createProgramController,
  getProgramController,
  updateProgramController,
  deleteProgramControler,
} = require('../Controllers/program.controller');

const programRouter = express.Router();
programRouter.get('/', getProgramController);
programRouter.post('/', createProgramController);
programRouter.put('/:programid', updateProgramController);
programRouter.delete('/:programid', deleteProgramControler);
module.exports = programRouter;
