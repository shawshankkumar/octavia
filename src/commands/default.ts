import { COLOR_CODES, EMBED, ERROR_MESSAGES } from '../shared/constants';

export const defaultCase = message => {
  try {
    message.channel.send(
      EMBED()
        .setColor(COLOR_CODES.WRONG_COMMAND_COLOR_CODE)
        .setTitle(ERROR_MESSAGES.DEFAULT_TITLE)
        .setDescription(ERROR_MESSAGES.DEFAULT_DESCRIPTION),
    );
  } catch (error) {
    throw error;
  }
};
