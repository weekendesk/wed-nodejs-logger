const log4js = require('log4js');

jest.mock('log4js', () => ({
  getLogger: jest.fn(),
  configure: jest.fn(),
}));

const logger = require('./index');

describe('Logger', () => {
  beforeEach(jest.clearAllMocks);
  describe('initLogger', () => {
    it('should call the log4js configuration', () => {
      const { mock } = log4js.configure.mockImplementation();
      logger.initLogger();
      expect(mock.calls[0][0]).toBeTruthy();
    });
    it('should allow a logLevel parameters', () => {
      const { mock } = log4js.configure.mockImplementation();
      logger.initLogger('info');
      expect(mock.calls[0][0].categories.default.level).toEqual('info');
    });
  });
  it('should create a log4js object', () => {
    const { mock } = log4js.getLogger.mockImplementation();
    logger.getLogger('Test context');
    expect(mock.calls[0][0]).toEqual('Test context');
  });
  it('should return an object when called', () => {
    log4js.getLogger.mockReturnValue({ warn: jest.fn(), info: jest.fn() });
    const loggerInstance = logger.getLogger('Context');
    expect(loggerInstance.warn).toBeTruthy();
    expect(loggerInstance.info).toBeTruthy();
  });
});
