const randomExt = require('random-ext');

const config = {
  stratName: 'RSI_Bull_Bear_Adx',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'BTC',
      asset: 'FUEL'
    },

    daterange: 'scan',

    // daterange: {
    //   from: '2018-03-25 00:00:00',
    //   to: '2018-04-13 13:00:00'
    //   //to: '2017-12-05 15:04:00'
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
  parallelqueries: 4,

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
  candleValues: [7],
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
    historySize: 1150, // max possible SMA_long

    SMA_long: 1150, // From 1300 to 500 in steps of 50
    SMA_short: 39,

    fastPercentCheck: randomExt.integer(100, 1) / 10,

    BULL_RSI: 8,
    BULL_RSI_high: 72,
    BULL_RSI_low: 40,

    BEAR_RSI: 14,
    BEAR_RSI_high: 51,
    BEAR_RSI_low: 14,

    BULL_MOD_high: 5,
    BULL_MOD_low: -5,
    BEAR_MOD_high: 5,
    BEAR_MOD_low: -5,

    ADX: 4,
    ADX_high: 76,
    ADX_low: 51,

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;