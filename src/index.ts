import { Message } from 'discord.js';
import {
  defaulCasetHandler,
  helpCommandHandler,
  leaveCommandHandler,
  loopCommandHandler,
  lyricsCommandHandler,
  lyricsFindCommandHandler,
  playCommandHandler,
  previousCommandHandler,
  puaseCommandHandler,
  queueCommandHandler,
  resumeCommandHandler,
  shuffleCommandHandler,
  skipCommandHandler,
} from './commands';
import config from './config';
import Loaders from './loaders';
import discord from './loaders/discord';
import LoggerInstance from './loaders/logger';
import { COMMANDS, EMOJIS } from './shared/constants';

const discordHandler = async () => {
  try {
    const client = await discord();
    client.on('message', async (message: Message) => {
      const messageArray = message.content.trim().split(' ');
      if (!message.author.bot && messageArray[0] === config.PREFIX) {
        switch (messageArray[1]) {
          case COMMANDS.HELP:
            helpCommandHandler(message);
            break;
          case COMMANDS.PLAY:
            await playCommandHandler(message);
            break;
          case COMMANDS.LEAVE:
            leaveCommandHandler(message);
            break;
          case COMMANDS.QUEUE:
            queueCommandHandler(message);
            break;
          case COMMANDS.SKIP:
            await skipCommandHandler(message);
            break;
          case COMMANDS.PAUSE:
            puaseCommandHandler(message);
            break;
          case COMMANDS.RESUME:
            resumeCommandHandler(message);
            break;
          case COMMANDS.LOOP:
            await loopCommandHandler(message);
            break;
          case COMMANDS.SHUFFLE:
            shuffleCommandHandler(message);
            break;
          case COMMANDS.PREVIOUS:
            await previousCommandHandler(message);
            break;
          case COMMANDS.LYRICS:
            await lyricsCommandHandler(message);
            break;
          case COMMANDS.LYRICS_FIND:
            await lyricsFindCommandHandler(message);
            break;
          default:
            defaulCasetHandler(message);
            return message.react(EMOJIS.REACTION_DEFAULT_CASE);
        }
        if (message.guild.id === config.KZILLA_GUILD_ID) await message.react(config.KZILLA_CUSTOM_EMOJI);
        else await message.react(EMOJIS.REACTION_CORRECT_COMMAND);
      }
    });
  } catch (error) {
    LoggerInstance.error(error.message);
  }
};

async function startServer() {
  await Loaders();
  discordHandler();
}
startServer();
