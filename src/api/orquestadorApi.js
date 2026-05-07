import apiClient from "./apiClient";

const ORQUESTADOR = apiClient;

export const getResumen = () => ORQUESTADOR.get("/dashboard/resumen");

export const getDetalleEnvio = (pedidoId) =>
  ORQUESTADOR.get(`/dashboard/envio/${pedidoId}`);
