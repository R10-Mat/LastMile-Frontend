import axios from "axios";

const ORQUESTADOR = axios.create({
  baseURL: import.meta.env.VITE_ORQUESTADOR_URL || "http://localhost:8001"
});

export const getResumen = () => ORQUESTADOR.get("/dashboard/resumen");

export const getDetalleEnvio = (pedidoId) =>
  ORQUESTADOR.get(`/dashboard/envio/${pedidoId}`);
