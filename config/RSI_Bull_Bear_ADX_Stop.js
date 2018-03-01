const randomExt = require('random-ext');

const config = {
  stratName: 'RSI_Bull_Bear_Adx_Stop',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'ETH',
      asset: 'ETC'
    },

    daterange: 'scan',

    // daterange: {
    //   from: '2017-12-08 06:24:00',
    //   to: '	2018-02-16 07:24:00'
    //   //to: '2017-12-05 15:04:00'
    // },

    simulationBalance: {
      'asset': 0,
      'currency': 100
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
  candleValues: [5, 6, 7, 8, 9],
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

        # MODIFY RSI (depending on ADX)
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

    SMA_long: randomExt.integer(27, 8) * 50, // From 1300 to 500 in steps of 50
    SMA_short: randomExt.integer(60, 30),

    BULL_RSI: randomExt.integer(13, 7),
    BULL_RSI_high: randomExt.integer(85, 70),
    BULL_RSI_low: randomExt.integer(65, 40),

    BEAR_RSI: randomExt.integer(20, 10),
    BEAR_RSI_high: randomExt.integer(60, 40),
    BEAR_RSI_low: randomExt.integer(30, 10),

    BULL_MOD_high: randomExt.integer(9, 2),
    BULL_MOD_low: -randomExt.integer(9, 2),
    BEAR_MOD_high: randomExt.integer(20, 10),
    BEAR_MOD_low: -randomExt.integer(9, 2),

    ADX: randomExt.integer(5, 2),
    ADX_high: randomExt.integer(80, 60),
    ADX_low: randomExt.integer(60, 40),

    Stop_Loss_Percent: randomExt.integer(100, 0),

    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;