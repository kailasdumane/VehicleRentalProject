import { Request, Response } from "express";
import * as vehicleService from "../services/vehicleService";

export const getAllVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicles" });
  }
};

export const createVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await vehicleService.createVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: "Error creating vehicle" });
  }
};

export const getVehicleById = async (req: Request, res: Response) => {
  try {
    const vehicle = await vehicleService.getVehicleById(req.params.id);
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).json({ message: "Vehicle not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicle" });
  }
};

export const updateVehicle = async (req: Request, res: Response) => {
  try {
    const vehicle = await vehicleService.updateVehicle(req.params.id, req.body);
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).json({ message: "Vehicle not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error updating vehicle" });
  }
};

export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const result = await vehicleService.deleteVehicle(req.params.id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Vehicle not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting vehicle" });
  }
};
