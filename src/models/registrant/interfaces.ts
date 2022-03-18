import mongoose from "mongoose";

export interface IRegistrant {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: number;
  country: string;
}

export interface RegistrantModelInterface extends mongoose.Model<RegistrantDoc> {
  build(attr: IRegistrant): RegistrantDoc
}

export interface RegistrantDoc extends mongoose.Document {
  id: string
  firstName: string;
  lastName: string;
  registeredAt: string;
}