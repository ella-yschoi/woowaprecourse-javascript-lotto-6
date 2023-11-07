import { LOTTO, ERROR } from '../common/constants.js';
import { throwError } from '../common/utils.js';
import { isCommaSeparated, isLengthEqualTo, containUniqueNumbersInString } from '../common/validator.js';

class InputValidator {
  constructor(input) {
    this.input = input;
  };

  validate() {
    this.#validateFormat();
    this.#validateLength();
    this.#validateUnique();
  };

  #validateFormat() {
    if (!isCommaSeparated(this.input, LOTTO.winning_length)) {
      throwError(ERROR.winning_format);
    }
  };

  #validateLength() {
    if (!isLengthEqualTo(this.input, LOTTO.winning_length)) {
      throwError(ERROR.winning_length);
    }
  };

  #validateUnique() {
    if (!containUniqueNumbersInString(this.input)) {
      throwError(ERROR.winning_duplicate);
    }
  };
};

export default InputValidator;
