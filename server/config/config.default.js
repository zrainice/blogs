/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578386481764_8373';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mongoose: {
      clients: {
        zr_blog: {
          url: 'mongodb://localhost:27017/zr_blog',
          options: {},
        },
      },
    },
    middleware: [ 'body', 'redis' ],
    security: {
      csrf: {
        enable: false,
      },
    },
    session: {
      key: 'EGG_SESSION',
      maxAge: 1000 * 3600 * 24 * 7, // 有效期七天
      httpOnly: true,
      encrypt: true,
    },
    proxy: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
