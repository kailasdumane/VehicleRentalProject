import User, { IUser } from "../models/user";

export const findAll = () => {
  return User.find();
};

export const create = (userData: IUser) => {
  return User.create(userData);
};

export const findById = (id: string) => {
  return User.findById(id);
};

export const update = (id: string, userData: Partial<IUser>) => {
  return User.findByIdAndUpdate(id, userData, { new: true });
};

export const remove = (id: string) => {
  return User.findByIdAndDelete(id);
};
