// cypress/fixtures/fake.js
import { faker } from '@faker-js/faker/locale/pt_BR';

export function generateFuncionario() {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();

  return {
    nome,
    sobrenome,
    nomeCompleto: `${nome} ${sobrenome}`,
    employeeId: faker.number.int({ min: 1000, max: 99999 }).toString(),
    licenseNumber: faker.number.int({ min: 10000000000, max: 99999999999 }).toString()
  };
}
