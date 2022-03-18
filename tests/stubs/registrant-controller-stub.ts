import { Registrant } from "../../src/domain/entities/registrant";
import { CreateRegistrant } from "../../src/domain/usecases/create-registrant";
import { AppError } from "../../src/shared/errors/app-error";
import { RegistrantType } from "../../src/shared/types/registrant-type";
import { InMemoryRegistrantRepository } from "../in-memory/in-memory-registrant-repository";
import crypto from 'crypto';

export class CreateRegistrantStub extends CreateRegistrant {
  public constructor() {
    super(
      new InMemoryRegistrantRepository()
    )
  }

  public async execute(registrant: Registrant, withError?: boolean): Promise<RegistrantType> {    
    const createdRegistrant = {
      id: crypto.randomUUID(),
      firstName: registrant.firstName,
      lastName: registrant.lastName,
      registeredAt: new Date().toString()
    }

    return Promise.resolve({...createdRegistrant})
  }
}