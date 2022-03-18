import 'reflect-metadata';
import { createResponse, MockResponse } from "node-mocks-http";
import { Response } from 'express';
import { CreateRegistrantStub } from "../../../tests/stubs/registrant-controller-stub";
import { RegistrantController } from "./registrant-controller";

const OK = 201

describe('RegistrantController', () => {
  it("should return 201", async () => {
    const registrant = {
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '5519971249492',
      age: 22,
      country: 'Brazil'
    }
    const useCase = new CreateRegistrantStub()
    const response: MockResponse<Response> = createResponse();
    const controller = new RegistrantController(useCase);

    await controller.create(registrant, response)

    expect(response.statusCode).toEqual(OK);
  })
})