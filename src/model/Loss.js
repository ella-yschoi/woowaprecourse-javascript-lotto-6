import { RANKING } from '../common/constants.js';

class Loss {

  #amount

  constructor() {
    this.#amount = 0;
  }

  calculateLoss(moneyAmount, ranking) {
    const totalPrize = this.#calculateTotalPrize(ranking);
    this.#amount = 100 - (totalPrize / moneyAmount) * 100;
  }

  getAmount(){
    return this.#amount;
  }

  #calculateTotalPrize(ranking) {
    return Array.from(ranking.getRanks()).reduce((total, [key, count]) => {
      const rank = RANKING[key];
      return total + rank.prize * count;
    }, 0);
  }
}

export default Loss;
