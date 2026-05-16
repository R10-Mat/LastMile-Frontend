import apiClient from "./apiClient";

const PEDIDOS = apiClient;

export const getPedidos = (estado) =>
  PEDIDOS.get("api/pedidos", { params: estado ? { estado } : {} });

export const getPedido = (id) => PEDIDOS.get(`api/pedidos/${id}`);

export const createPedido = (data) => PEDIDOS.post("api/pedidos", data);

export const updateEstado = (id, estado) =>
  PEDIDOS.patch(`api/pedidos/${id}/estado`, { estado });

export const deletePedido = (id) => PEDIDOS.delete(`api/pedidos/${id}`);
