const randomExt = require('random-ext');

const config = {
  stratName: 'private-RSI_Bull_Bear_Adx_M1_ReETro_Peak',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'BTC',
      asset: 'FUEL'
    },

    daterange: 'scan',

    // daterange: {
    //   from: '2018-02-01 00:00:00',
    //   to: '2018-03-20 00:00:00'
    //   //to: '2017-12-05 15:04:00'
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
  candleValues: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 30, 40, 50, 60, 70, 80, 90, 100],
  //candleValues: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  // candleValues: [5, 10, 15, 30],
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
    historySize: 4000, // max possible SMA_long

    SMA_long: randomExt.integer(20, 15) * 50,
    SMA_short: randomExt.integer(60, 20),

    BULL_RSI: randomExt.integer(20, 5),
    BULL_RSI_high: randomExt.integer(95, 65),
    BULL_RSI_low: randomExt.integer(50, 10),

    BEAR_RSI: randomExt.integer(25, 5),
    BEAR_RSI_high: randomExt.integer(60, 40),
    BEAR_RSI_low: randomExt.integer(20, 5),

    SMA_Timeframe: 4,
    BULL_RSI_Timeframe: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)],
    BEAR_RSI_Timeframe: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)],
    candleSize: 1

  })
};

module.exports = config;