import { tarefaService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const listarTarefas = async (req, res) => {
  const tarefas = await tarefaService.listarTarefas();
  return res.status(200).send(tarefas);
};

const buscarTarefa = async (req, res) => {
  const tarefa = await tarefaService.buscarTarefaPorId(req.params.objectId);
  if (!tarefa) {
    throw new AppError("Tarefa não encontrada.", 404);
  }
  return res.status(200).send(tarefa);
};

const criarTarefa = async (req, res) => {
  const tarefa = await tarefaService.criarTarefa(req.body);
  return res.status(201).send(tarefa);
};

const atualizarTarefa = async (req, res) => {
  const tarefa = await tarefaService.atualizarTarefa(
    req.params.objectId,
    req.body
  );
  if (!tarefa) {
    throw new AppError("Tarefa não encontrada.", 404);
  }
  return res.status(200).send(tarefa);
};

const excluirTarefa = async (req, res) => {
  const isDeleted = await tarefaService.excluirTarefa(req.params.objectId);
  if (!isDeleted) {
    throw new AppError("Tarefa não encontrada.", 404);
  }
  return res.status(204).send();
};

export default {
  listarTarefas,
  buscarTarefa,
  criarTarefa,
  atualizarTarefa,
  excluirTarefa,
};
