import models from "../models/index.js";

const listarTarefas = async () => {
  return await models.Tarefa.findAll();
};

const buscarTarefaPorId = async (id) => {
  return await models.Tarefa.findByPk(id);
};

const criarTarefa = async ({ descricao, concluida }) => {
  return await models.Tarefa.create({
    descricao,
    concluida,
  });
};

const atualizarTarefa = async (id, { descricao, concluida }) => {
  const tarefa = await buscarTarefaPorId(id);
  if (!tarefa) {
    return null;
  }
  return await tarefa.update({
    ...(descricao !== undefined && { descricao }),
    ...(concluida !== undefined && { concluida }),
  });
};

const excluirTarefa = async (id) => {
  const count = await models.Tarefa.destroy({
    where: { objectId: id },
  });
  return count > 0;
};

export default {
  listarTarefas,
  buscarTarefaPorId,
  criarTarefa,
  atualizarTarefa,
  excluirTarefa,
};
