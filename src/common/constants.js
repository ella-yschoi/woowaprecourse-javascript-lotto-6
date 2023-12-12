const LOTTO = Object.freeze({
  money_unit: 1000,
  min_number: 1,
  max_bonus_number: 20,
  max_winning_number: 45,
  max_match: 6,
});

const UTILS = Object.freeze({
  positive_integer: /^[1-9]\d*$/,
  number_comma: /^(\d+,)*\d+$/,
  zero: 0,
  comma: ',',
  comma_space: ', ',
  line_break: '\n',
})

const LOG = Object.freeze({
  money_input: '구입금액을 입력해 주세요.\n',
  lotto_count: '개를 구매했습니다.',
  winning_input: '당첨 번호를 입력해 주세요.\n',
  bonus_input: '보너스 번호를 입력해 주세요.\n',
});

const ERROR = Object.freeze({
  header: '[ERROR] ',
  money: `구입 금액은 ${LOTTO.money_unit} 단위의 숫자로 입력해야 합니다.`,
  winning_format: '당첨 번호는 쉼표로 구분해 6개의 숫자로 입력해야 합니다.',
  winning_duplicate: '당첨 번호는 중복 없이 입력해야 합니다.',
  bonus_duplicate: '보너스 번호는 당첨 번호와 중복 없이 입력해야 합니다.',
  not_lotto: '로또가 정상적으로 생성되지 않았습니다.',
  lotto_duplicate: '로또 번호가 중복되었습니다.',
  lotto_length: '로또 번호는 6개여야 합니다.',
  empty: '값을 입력해야 합니다.',
  numeric: '양의 정수여야 합니다.',
  winning_range: '당첨 번호는 1 이상 45 이하의 숫자여야 합니다.',
  bonus_range: '보너스 번호는 1 이상 20 이하의 숫자여야 합니다.',
});

const STATISTICS = Object.freeze({
  winning_statistics: '\n당첨 통계\n---\n',
  profit_prefix: '총 수익률은 ',
  profit_postfix: '% 입니다🥳',
  loss_prefix: '총 손실률은 ',
  loss_postfix: '% 입니다😭',
  count: '개',
});

const RANKING = {
  'FIFTH': {
    match: 3,
    bonus: false,
    prize: 5000,
    message: '3개 일치 (5,000원) - ',
  },
  'FOURTH': {
    match: 4,
    bonus: false,
    prize: 50000,
    message: '4개 일치 (50,000원) - ',
  },
  'THIRD': {
    match: 5,
    bonus: false,
    prize: 1500000,
    message: '5개 일치 (1,500,000원) - ',
  },
  'SECOND': {
    match: 5,
    bonus: true,
    prize: 30000000,
    message: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  },
  'FIRST': {
    match: 6,
    bonus: false,
    prize: 2000000000,
    message: '6개 일치 (2,000,000,000원) - ',
  },
};

export { LOTTO, UTILS, LOG, ERROR, STATISTICS, RANKING };
