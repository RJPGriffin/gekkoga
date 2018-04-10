const randomExt = require('random-ext');

const config = {
  stratName: 'RSI_Bull_Bear_Adx',
  gekkoConfig: {
    watch: {
      exchange: 'gdax',
      currency: 'EUR',
      asset: 'ETH'
    },

    // daterange: 'scan',

    daterange: {
      from: '2018-03-25 00:00:00',
      to: '2018-04-13 13:00:00'
      //to: '2017-12-05 15:04:00'
    },

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
  parallelqueries: 8,

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
  //candleValues: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  //candleValues: [2, 3, 4, 5], //Really doesn't work!
  candleValues: [13],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    /*
    # SMA Trends
    SMA_long = 1000
    SMA_short = 50

    # BULL
    BULL_RSI = 10
    BULL_RSI_high = 80
    BULL_RSI_low = 60

    # BEAR
    BEAR_RSI = 15
    BEAR_RSI_high = 50
    BEAR_RSI_low = 20

    # ADX
    ADX = 3
    ADX_high = 70
    ADX_low = 50

    */
    historySize: 500, // max possible SMA_long

    SMA_long: 500, // From 1300 to 500 in steps of 50
    SMA_short: 52,

    BULL_RSI: randomExt.integer(20, 5),
    BULL_RSI_high: randomExt.integer(85, 30),
    BULL_RSI_low: randomExt.integer(60, 20),

    BEAR_RSI: 13,
    BEAR_RSI_high: 100,
    BEAR_RSI_low: 0,

    BULL_MOD_high: 5,
    BULL_MOD_low: -5,
    BEAR_MOD_high: 0,
    BEAR_MOD_low: -0,

    ADX: 3,
    ADX_high: 63,
    ADX_low: 44,

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;