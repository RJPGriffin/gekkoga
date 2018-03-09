const randomExt = require('random-ext');

const config = {
  stratName: 'neuralnet',
  gekkoConfig: {
    watch: {
      exchange: 'gdax',
      currency: 'EUR',
      asset: 'ETH'
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
    feeTaker: 0.0,
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
  candleValues: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  //candleValues: [5, 6, 7, 8, 9],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    /*
threshold_buy = 1.0
threshold_sell = -1.0

learning_rate = 0.01
momentum = 0.1
decay = 0.01
stoploss_enabled = false
stoploss_threshold = 0.85
hodl_threshold = 1
price_buffer_len = 100
min_predictions = 1000
    */
    historySize: 1300, // max possible SMA_long
    min_predictions: 1300,

    threshold_buy: randomExt.float(20, 0.5),
    threshold_sell: randomExt.float(20, 0.5) * -1,

    learning_rate: randomExt.float(0.5, 0.005),
    momentum: randomExt.float(0.5, 0.05),
    decay: randomExt.float(0.5, 0.005),

    stoploss_enabled: false,
    stoploss_threshold: 0.5,

    hodl_threshold: randomExt.float(5, 0.5),
    price_buffer_len: randomExt.integer(40, 9) * 10,


    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;