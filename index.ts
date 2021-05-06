import { ru } from './src/locales/ru';
import { validateProductList } from './src/generated/validators/src.models.productList';
import { validateUser } from './src/generated/validators/src.models.user';

import userMock from './src/mocks/user.json';
import productListMock from './src/mocks/productList.json';
import { ValidationException } from 'ts-generate-validator';

(async () => {
  try {
    validateUser(userMock);
    // validateProductList(productListMock);
  } catch (exception) {
    if (exception instanceof ValidationException) {
      const errorMap = exception.errors.reduce<Record<string, string[]>>(
        (acc, { field, message }) => {
          if (!acc[field]) {
            acc[field] = [];
          }

          acc[field].push(message);
          return acc;
        },
        {}
      );

      console.error('Validation Error!');
      console.log(JSON.stringify(errorMap, null, 2));
    } else {
      console.log(exception);
    }
  }
})();
