import apiClient from "./apiClient";

const EVENTOS = apiClient;

export const getEventosByPedido = (pedidoId) =>
  EVENTOS.get(`eventos/pedido/${pedidoId}`);

export const createEvento = (data) => EVENTOS.post("eventos", data);
