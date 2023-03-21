const programs = [
  { id: '1679058114089', title: 'java' },
  { id: '1679058114079', title: 'python' },
];
const getAllProgram = () => programs;

const addProgram = (program) => {
  const newProgram = {
    title: program.title,
    id: new Date().getTime(),
  };
  programs.push(newProgram);
  return newProgram;
};
const findBooksById = (id) => {
  return programs.find((p) => p.id == id);
};
const updateProgram = ({ id, title }) => {
  const index = programs.findIndex((p) => p.id == id);
  programs[index]['title'] = title;
  return programs[index];
};
const deleteProgramById = (id) => {
  const index = programs.findIndex((p) => p.id == id);
  const removeProgram = programs[index];
  return removeProgram;
};
module.exports = {
  addProgram,
  getAllProgram,
  findBooksById,
  updateProgram,
  deleteProgramById,
};
