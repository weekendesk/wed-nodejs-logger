const log4js = require('log4js');

const getLogger = (context) => log4js.getLogger(context);

const initLogger = (logLevel) => {
  log4js.configure({
    appenders: {
      out: { type: 'stdout' },
    },
    categories: {
      default: { appenders: ['out'], level: logLevel || process.env.LOG_LEVEL || 'warn' },
    },
  });
};

module.exports = {
  getLogger,
  initLogger,
};
