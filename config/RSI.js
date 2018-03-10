const randomExt = require('random-ext');

const config = {
  stratName: 'RSI',
  gekkoConfig: {
    watch: {
      exchange: 'bitfinex',
      currency: 'USD',
      asset: 'XRP'
    },

    daterange: 'scan',
    /*
        daterange: {
          from: '2017-01-01 00:00',
          to: '2017-12-05 00:00'
        },
    */
    simulationBalance: {
      'asset': 1,
      'currency': 1
    },

    slippage: 0.05,
    feeTaker: 0.25,
    feeMaker: 0.15,
    feeUsing: 'taker', // maker || taker

  },
  apiUrl: 'http://localhost:3000',

  // Population size, better reduce this for larger data
  populationAmt: 20,

  // How many completely new units will be added to the population (populationAmt * variation must be a whole number!!)
  variation: 0.5,

  // How many components maximum to mutate at once
  mutateElements: 7,

  // How many parallel queries to run at once
  parallelqueries: 5,

  // profit || score
  // score = profit * sharpe -- feedback?
  // profit = recommended!
  mainObjective: 'profit',

  // optionally recieve and archive new all time high every new all time high
  notifications: {
    email: {
      enabled: true,
      receiver: 'receiver@some.com',
      senderservice: 'gmail',
      sender: 'sender@gmail.com',
      senderpass: 'password',
    },
  },
  // candleValues: [5, 10, 15, 30, 60, 120, 240],
  candleValues: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    /*interval = 14

    low = 30
    high = 70
    persistence = 1
    */

    historySize: 20,

    interval: randomExt.integer(25, 7),
    low: randomExt.integer(50, 5),
    high: randomExt.integer(95, 50),
    persistence: randomExt.integer(3, 1),

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;