require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  /**
   * Database the app should connect to
   */
  EMBED_FOOTER: process.env.EMBED_FOOTER || 'by the SRMKZILLA team',
  /**
   * spotify client id
   */
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  /**
   * Database the app should connect to
   */
  THUMBNAIL: process.env.THUMBNAIL,
  /**
   * Database the app should connect to
   */
  PREFIX: process.env.PREFIX || '#kzjill',

  /**
   * Database the app should connect to
   */
  databaseURL: process.env.MONGODB_URI,

  /**
   * the secret token of the bot
   */
  TOKEN: process.env.TOKEN,
  YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  GENIUS_API_KEY: process.env.GENIUS_API_KEY,
  /**
   * Used by Winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};
