import { inject, injectable } from "inversify";
import { AppError } from "../../shared/errors/app-error";
import { RegistrantType } from "../../shared/types/registrant-type";
import { Registrant } from "../entities/registrant";
import { RegistrantRepository } from "../repositories/registrant-repository";

const MIN_AGE = 18;

@injectable()
export class CreateRegistrant {
  constructor(
    @inject(RegistrantRepository)
    private readonly registrantRepository: RegistrantRepository
  ) {}

  public async execute(registrant: Registrant): Promise<RegistrantType> {
    if (this.isAgeLowerThanMinAge(registrant.age)) throw new AppError(`Age must be greater than ${MIN_AGE}`)

    const createdRegistrant = await this.createRegistrant(registrant);

    return createdRegistrant
  }

  private isAgeLowerThanMinAge(age: number): boolean {
    return age < MIN_AGE
  }

  private async createRegistrant(registrant: Registrant): Promise<RegistrantType> {
    return this.registrantRepository.create(registrant)
  }
}