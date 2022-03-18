import { InMemoryRegistrantRepository } from "../../../tests/in-memory/in-memory-registrant-repository";
import { AppError } from "../../shared/errors/app-error";
import { CreateRegistrant } from "./create-registrant";

describe('CreateRegistrant', () => {
  it("should be able to create a new registrant", async () => {
    // given
    const registrant = {
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '5519971249492',
      age: 22,
      country: 'Brazil'
    }
    const repository = new InMemoryRegistrantRepository()
    const useCase = new CreateRegistrant(repository);

    // when
    const createdRegistrant = await useCase.execute(registrant)
    const mockedRegistrant = repository.get()

    // then
    expect(createdRegistrant).toBe(mockedRegistrant)
  })

  it("should not be able to create when age is lower than 18", async () => {
    const registrant = {
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '5519971249492',
      age: 17,
      country: 'Brazil'
    }
    const repository = new InMemoryRegistrantRepository()
    const useCase = new CreateRegistrant(repository);

    await expect(useCase.execute(registrant)).rejects.toBeInstanceOf(AppError);
  })
})