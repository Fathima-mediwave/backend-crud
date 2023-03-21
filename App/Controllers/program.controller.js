const {
  getAllProgram,
  addProgram,
  findBooksById,
  updateProgram,
  deleteProgramById,
} = require('../db');
exports.createProgramController = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: 'program not present',
    });
  }
  const newProgram = addProgram({
    title: req.body.title,
  });
  return res.status(201).send({
    data: newProgram,
  });
};
exports.getProgramController = (req, res, next) => {
  try {
    const programs = getAllProgram();
    return res.send({
      data: programs,
    });
  } catch (error) {
    next(error);
  }
};
exports.updateProgramController = (req, res, next) => {
  console.log(req.params, '====');
  if (!findBooksById(req.params.programid)) {
    return res.status(400).send({
      message: 'program not found',
    });
  }
  if (!req.body.title) {
    return res.status(400).send({
      message: 'title not found',
    });
  }
  const update = updateProgram({
    id: req.params.programid,
    title: req.body.title,
  });
  return res.send({
    data: update,
  });
};
exports.deleteProgramControler = (req, res, next) => {
  if (!findBooksById(req.params.programid)) {
    return res.status(400).send({
      message: 'program not found',
    });
  }
  const deleteProgram = deleteProgramById(req.params.programid);
  return res.send({
    data: deleteProgram,
  });
};
