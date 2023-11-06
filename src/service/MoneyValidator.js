import { ERROR } from '../common/constants.js';
import { throwError } from '../common/utils.js';
import { isNumeric, isDivisibleByUnit } from '../common/validator.js';

class MoneyValidator {
  constructor(input) {
    this.input = input;
  };

  validate() {
    this.#validateNumber();
    this.#validateMoneyUnit();
  };

  #validateNumber() {
    if (!isNumeric(this.input)) {
      throwError(ERROR.numeric);
    }
  };

  #validateMoneyUnit() {
    if (!isDivisibleByUnit(this.input)) {
      throwError(ERROR.money);
    }
  };
};

export default MoneyValidator;
