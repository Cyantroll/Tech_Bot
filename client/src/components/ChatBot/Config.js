// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi!  How may I help you?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'orange',
    },
    chatButton: {
      backgroundColor: 'orange',
    },
  },
};

export default config;