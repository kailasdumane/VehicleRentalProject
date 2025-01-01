import mongoose, { Document, Schema } from "mongoose";

export interface IVehicle {
  type: "bike" | "car" | "scooty";
  model: string;
  manufacturer: string;
  year: number;
  registrationNumber: string;
  availableForRent: boolean;
  rentalPrice: number;
}

const VehicleSchema: Schema = new Schema({
  type: { type: String, required: true, enum: ["bike", "car", "scooty"] },
  model: { type: String, required: true },
  manufacturer: { type: String, required: true },
  year: { type: Number, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  availableForRent: { type: Boolean, default: true },
  rentalPrice: { type: Number, required: true },
});

export default mongoose.model<IVehicle>("Vehicle", VehicleSchema);
