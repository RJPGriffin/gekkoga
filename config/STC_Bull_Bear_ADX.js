const randomExt = require('random-ext');

const config = {
  stratName: 'STC_Bull_Bear_Adx',
  gekkoConfig: {
    watch: {
      exchange: 'gdax',
      currency: 'EUR',
      asset: 'ETH'
    },

    daterange: 'scan',

    // daterange: {
    //   from: '2018-01-05 00:00:00',
    //   to: '2018-03-20 15:30:00'
    // },

    simulationBalance: {
      'asset': 0,
      'currency': 100
    },

    slippage: 0.1,
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
  candleValues: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  // candleValues: [1, 3, 5, 15, 30],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    /*
        # SMA Trends
        SMA_long = 1000
        SMA_short = 50

        # BULL
        BULL_STC = 10
        BULL_STC_high = 80
        BULL_STC_low = 60

        # BEAR
        BEAR_STC = 15
        BEAR_STC_high = 50
        BEAR_STC_low = 20

        # MODIFY STC (depending on ADX)
        BULL_MOD_high = 5
        BULL_MOD_low = -5
        BEAR_MOD_high = 15
        BEAR_MOD_low = -5

        # ADX
        ADX = 3
        ADX_high = 70
        ADX_low = 50

        # Stop Loss
        Stop_Loss_Percent = 50
    */
    historySize: 1300, // max possible SMA_long

    SMA_long: randomExt.integer(27, 6) * 50, // From 1300 to 500 in steps of 50
    SMA_short: randomExt.integer(8, 1) * 10,

    BULL_STC: {
      fastLength: randomExt.integer(50, 5),
      slowLength: randomExt.integer(100, 50),
      stcLength: randomExt.integer(50, 5),
      factor: randomExt.integer(10, 1) / 10,
    },

    BULL_STC_high: randomExt.integer(90, 40),
    BULL_STC_low: randomExt.integer(65, 15),

    BEAR_STC: {
      fastLength: randomExt.integer(50, 5),
      slowLength: randomExt.integer(100, 50),
      stcLength: randomExt.integer(50, 5),
      factor: randomExt.integer(10, 1) / 10,
    },

    BEAR_STC_high: randomExt.integer(60, 30),
    BEAR_STC_low: randomExt.integer(60, 10),

    BULL_MOD_high: randomExt.integer(20, 0),
    BULL_MOD_low: -randomExt.integer(20, 0),
    BEAR_MOD_high: randomExt.integer(20, 0),
    BEAR_MOD_low: -randomExt.integer(20, 0),

    ADX: randomExt.integer(5, 2),
    ADX_high: randomExt.integer(80, 40),
    ADX_low: randomExt.integer(60, 20),

    // Stop_Loss_Percent: randomExt.integer(100, 0),

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;