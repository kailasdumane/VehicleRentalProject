import Vehicle, { IVehicle } from "../models/vehicle";

export const findAll = () => {
  return Vehicle.find();
};

export const create = (vehicleData: IVehicle) => {
  return Vehicle.create(vehicleData);
};

export const findById = (id: string) => {
  return Vehicle.findById(id);
};

export const update = (id: string, vehicleData: Partial<IVehicle>) => {
  return Vehicle.findByIdAndUpdate(id, vehicleData, { new: true });
};

export const remove = (id: string) => {
  return Vehicle.findByIdAndDelete(id);
};
