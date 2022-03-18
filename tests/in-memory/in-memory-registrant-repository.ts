import 'reflect-metadata'

import { Registrant } from "../../src/domain/entities/registrant";
import { RegistrantRepository } from "../../src/domain/repositories/registrant-repository";
import { RegistrantType } from "../../src/shared/types/registrant-type";
import crypto from 'crypto'

export class InMemoryRegistrantRepository implements RegistrantRepository {
  constructor(
    private readonly registrants: RegistrantType[] = []
  ) {}

  public create(registrant: Registrant): Promise<RegistrantType> {    
    this.registrants.push({
      id: crypto.randomUUID(),
      firstName: registrant.firstName,
      lastName: registrant.lastName,
      registeredAt: new Date().toString()
    })

    return Promise.resolve(this.registrants[0]);
  }

  public get(): RegistrantType {
    return this.registrants[0];
  }
}