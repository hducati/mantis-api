import mongoose from "mongoose";
import { RegistrantDoc, RegistrantModelInterface, IRegistrant } from "./interfaces";
import { registrantSchema } from "./schema";

registrantSchema.statics.build = (attr: IRegistrant) => {
  return new RegistrantModel(attr);
}

registrantSchema.set('timestamps', {
  createdAt: 'registeredAt'
})

const RegistrantModel = mongoose.model<RegistrantDoc, RegistrantModelInterface>('Registrant', registrantSchema);

export { RegistrantModel };