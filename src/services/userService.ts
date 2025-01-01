import * as userRepository from "../repositories/userRepository";
import { IUser } from "../models/user";

export const getAllUsers = () => {
  return userRepository.findAll();
};

export const createUser = (userData: IUser) => {
  return userRepository.create(userData);
};

export const getUserById = (id: string) => {
  return userRepository.findById(id);
};

export const updateUser = (id: string, userData: Partial<IUser>) => {
  return userRepository.update(id, userData);
};

export const deleteUser = (id: string) => {
  return userRepository.remove(id);
};
