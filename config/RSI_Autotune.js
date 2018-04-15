const randomExt = require('random-ext');

const config = {
  stratName: 'RSI_Autotune',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'BTC',
      asset: 'FUEL'
    },

    daterange: 'scan',

    // daterange: {
    //   from: '2018-02-20 13:40:00',
    //   to: '2018-03-13 13:40:00'
    // },

    simulationBalance: {
      'asset': 0,
      'currency': 100
    },

    slippage: 0.05,
    feeTaker: 0.1,
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
  parallelqueries: 6,

  // profit || score
  // score = profit * sharpe -- feedback?
  // profit = recommended!
  mainObjective: 'profit',

  // optionally recieve and archive new all time high every new all time high
  notifications: {
    email: {
      enabled: false,
      receiver: 'me@gmail.com',
      senderservice: 'gmail',
      sender: 'me@gmail.com',
      senderpass: '----',
    },
  },
  // candleValues: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  candleValues: [3, 4, 5, 6, 7, 8, 9],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    /*
    interval = 14

    historyLength = 28

    marketModifier = 3

    [thresholds]
    low = 30
    high = 70
    persistence = 1

    */
    historySize: 1300, // max possible SMA_long

    SMA_long: randomExt.integer(27, 6) * 50, // From 1300 to 500 in steps of 50
    SMA_short: randomExt.integer(80, 20),

    // SMA_long: randomExt.integer(20, 10) * 10, // From 1300 to 500 in steps of 50
    // SMA_short: randomExt.integer(60, 10),

    interval: randomExt.integer(50, 4),
    historyLength: randomExt.integer(100, 20),
    Threshold_Ema: randomExt.integer(100, 20),

    BullMarketModifier: randomExt.integer(300, 1) / 10,
    BearMarketModifier: randomExt.integer(300, 1) / 10,
    persistence: 1,
    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;