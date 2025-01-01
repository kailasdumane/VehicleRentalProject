import * as vehicleRepository from "../repositories/vehicleRepository";
import { IVehicle } from "../models/vehicle";

export const getAllVehicles = () => {
  return vehicleRepository.findAll();
};

export const createVehicle = (vehicleData: IVehicle) => {
  return vehicleRepository.create(vehicleData);
};

export const getVehicleById = (id: string) => {
  return vehicleRepository.findById(id);
};

export const updateVehicle = (id: string, vehicleData: Partial<IVehicle>) => {
  return vehicleRepository.update(id, vehicleData);
};

export const deleteVehicle = (id: string) => {
  return vehicleRepository.remove(id);
};
