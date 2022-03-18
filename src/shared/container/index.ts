import { RegistrantRepository } from "../../domain/repositories/registrant-repository";
import { CreateRegistrant } from "../../domain/usecases/create-registrant";
import { RegistrantController } from "../../infra/controllers/registrant-controller";
import { RegistrantRepositoryImplementation } from "../../infra/repositories/registrant-repository-implementation";
import { diContainer } from "../di-container";

diContainer.bind(CreateRegistrant).toSelf();
diContainer.bind(RegistrantController).toSelf();
diContainer.bind(RegistrantRepository).to(RegistrantRepositoryImplementation)