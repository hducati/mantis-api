import { injectable } from "inversify";
import { RegistrantType } from "../../shared/types/registrant-type";
import { Registrant } from "../entities/registrant";

@injectable()
export abstract class RegistrantRepository {
  public abstract create(registrant: Registrant): Promise<RegistrantType>;
}