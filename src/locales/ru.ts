import { PartialMessageMap } from 'ts-generate-validator';

export const ru: PartialMessageMap = {
  common: {
    type: 'Неправильный тип данных',
  },
  number: {
    type: 'Должно быть числом',
  },
  string: {
    minLength: 'Строка слишком короткая',
    type: 'Должно быть строкой',
    email: 'Должно быть корректным email',
  },
  enum: {
    type: 'Недопустимое значение',
  },
  union: {
    type: 'Недопустимый тип данных',
  },
};
