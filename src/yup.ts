import * as yup from 'yup';
import userMock from './mocks/user.json';

export interface User {
  name: string;
  surname?: string;
  email?: string;
  phone: string;
}

let schema = yup.object().shape({
  name: yup.string().required().min(2),
  surname: yup.string(),
  email: yup.string().email(),
  phone: yup.string().required().length(10),
});

schema.validate(userMock).catch(function (err) {
  err.name; // => 'ValidationError'
  err.errors; // => [{ key: 'field_too_short', values: { min: 18 } }]

  console.log(err);
});
