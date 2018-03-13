const randomExt = require('random-ext');

const config = {
  stratName: 'ATR_ADX_v2',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'BTC',
      asset: 'XRP'
    },

    // daterange: 'scan',

    daterange: {
      from: '2017-11-02 09:00',
      to: '2018-02-05 16:00'
      //2017-11-02 08:17	2018-02-05 16:17
    },

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
  parallelqueries: 4,

  // profit || score
  // score = profit * sharpe -- feedback?
  // profit = recommended!
  mainObjective: 'score',

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
  candleValues: [5, 6, 7, 8, 9, 10],
  getProperties: () => ({
    // Strat settings must be flattened and cannot be nested for mutation to work properly!

    /*
    # ATR period
    ATR = 22

    #ADX period
    ADX = 22

    # Stop Offset (higher increases price:stop difference)
    Sell_Offset = 3
    Buy_Offset = 7

    #ADX multiplier (higher reduces price:stop difference)
    Sell_ADX_Modifier = 1.9
    Buy_ADX_Modifier = 0.7

    */
    historySize: 40, // maximum ADX

    ATR: randomExt.integer(30, 5),
    ADX: randomExt.integer(10, 5),

    Sell_Offset: randomExt.float(10, 0).toFixed(1),
    Buy_Offset: randomExt.float(10, 0).toFixed(1),

    Sell_ADX_Modifier: randomExt.float(6, 0.5).toFixed(2),
    Buy_ADX_Modifier: randomExt.float(6, 0.5).toFixed(2),


    candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]

  })
};

module.exports = config;