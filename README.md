# Logger configured for Node.js &bull; [![Actions Status](https://github.com/weekendesk/wed-nodejs-logger/actions/workflows/tests.yml/badge.svg?branch=master)](https://github.com/weekendesk/wed-nodejs-logger/actions)

Simple package exposing and configuring a logger for nodejs services, based on log4js.

The logger can be configured via the `LOG_LEVEL` environment variable.

## Usage

### Logger initialization

On the bootstrap of your application, just call the `init()` function:

```js
const { init } = require('wed-nodejs-logger');

init();
```

### Log data

To log a data, you have to create the logger with a context and call the right function:

```js
const { getLogger } = require('wed-nodejs-logger');

const logger = getLogger('File context');

logger.info('This is an informative message.');
logger.warn('Something is not really good.');
logger.error('Something\'s wrong!');
```
