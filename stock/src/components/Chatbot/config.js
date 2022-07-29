import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../BotAvatar/BotAvatar";
import UserAvatar from "../BotAvatar/UserAvatar";
import CardWidget from "../Widgets/CardWidget";
import ReportWideget from "../Widgets/ReportWideget";
import Speech from "../Widgets/Speech";
import TpinWidget from "../Widgets/TpinWidget";
import Withdraw from "../Widgets/Withdraw";

const text = `Hey there! Thank you for visiting our website. How may I help you?`;

const config = {
  initialMessages: [
    createChatBotMessage(text, {
      widget: "speech",
    }),
  ],
  botName: "HelpingBot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0892D0",
    },
    userMessageBox: {
      backgroundColor: "#0892D0",
    },
    chatButton: {
      backgroundColor: "#0892D0",
    },
  },
  state: {
    id: 0,
    reply: "",
  },
  widgets: [
    {
      widgetName: "reportQuery",
      widgetFunc: () => <ReportWideget />,
    },
    {
      widgetName: "tpinQuery",
      widgetFunc: () => <TpinWidget />,
    },
    {
      widgetName: "cardQuery",
      widgetFunc: () => <CardWidget />,
    },
    {
      widgetName: "withdrawQuery",
      widgetFunc: () => <Withdraw />,
    },
    {
      widgetName: "speech",
      widgetFunc: (props) => <Speech {...props} />,
      props: {
        text: text,
      },
    },
  ],
};

export default config;
