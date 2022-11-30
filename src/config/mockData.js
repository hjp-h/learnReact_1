import { faker } from '@faker-js/faker';
const NAME_LIST = Array.from({length:10000}).map(() => faker.name.firstName())
export {
  NAME_LIST
}