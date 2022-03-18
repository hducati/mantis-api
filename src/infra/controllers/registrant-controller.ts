import { Response } from 'express';
import { inject, injectable } from 'inversify';
import { Body, JsonController, Post, Res } from 'routing-controllers';

import { Registrant } from '../../domain/entities/registrant';
import { CreateRegistrant } from '../../domain/usecases/create-registrant';
import { RegistrantRequest } from './requests/registrant-request';

interface RequestBody {
  firstName: string
  lastName: string
  phoneNumber: string
  age: number
  country: string
}

@injectable()
@JsonController()
export class RegistrantController {
  constructor(
    @inject(CreateRegistrant)
    private readonly createRegistrant: CreateRegistrant
  ) {}

  @Post('/registrants')
  public async create(@Body() request: RegistrantRequest, @Res() response: Response): Promise<Response> {
    const registrant = this.mapToRegistrant(request)

    const registrantCreated = await this.createRegistrant.execute(registrant)

    return response.status(201).send(registrantCreated)
  }

  private mapToRegistrant(record: RequestBody): Registrant {
    return new Registrant(
      record.firstName,
      record.lastName,
      record.phoneNumber,
      record.age,
      record.country
    )
  }
}