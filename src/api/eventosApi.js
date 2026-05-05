import axios from "axios";

const EVENTOS = axios.create({
  baseURL: import.meta.env.VITE_EVENTOS_URL || "http://localhost:8001"
});

export const getEventosByPedido = (pedidoId) =>
  EVENTOS.get(`/eventos/pedido/${pedidoId}`);

export const createEvento = (data) => EVENTOS.post("/eventos", data);
