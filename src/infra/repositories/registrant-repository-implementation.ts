import { injectable } from "inversify";
import { Registrant } from "../../domain/entities/registrant";
import { RegistrantRepository } from "../../domain/repositories/registrant-repository";
import { RegistrantModel } from "../../models/registrant/registrant";
import { RegistrantType } from "../../shared/types/registrant-type";

@injectable()
export class RegistrantRepositoryImplementation implements RegistrantRepository {
  public async create(registrant: Registrant): Promise<RegistrantType> {
    const createdRegistrant = RegistrantModel.build({
      firstName: registrant.firstName,
      lastName: registrant.lastName,
      phoneNumber: registrant.phoneNumber,
      age: registrant.age,
      country: registrant.country
    })

    await createdRegistrant.save();

    return {
      id: createdRegistrant.id,
      firstName: createdRegistrant.firstName,
      lastName: createdRegistrant.lastName,
      registeredAt: createdRegistrant.registeredAt,
    }
  }
}