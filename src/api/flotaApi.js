import apiClient from "./apiClient";

const FLOTA = apiClient;

export const getConductores = (page = 0, size = 20) => FLOTA.get("flota/conductores/", { params: { page, size } });
export const getConductor = (id) => FLOTA.get(`flota/conductores/${id}`);
export const createConductor = (data) => FLOTA.post("flota/conductores/", data);
export const updateConductor = (id, data) => FLOTA.patch(`flota/conductores/${id}`, data);
export const deleteConductor = (id) => FLOTA.delete(`flota/conductores/${id}`);

export const getVehiculos = (page = 0, size = 20) => FLOTA.get("flota/vehiculos/", { params: { page, size } });
export const createVehiculo = (data) => FLOTA.post("flota/vehiculos/", data);
