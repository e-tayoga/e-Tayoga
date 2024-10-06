import { Chat } from "@/types/chat";

export const welcomingMsgs: Chat[] = [
  {
    active: true,
    avatar: "/images/user/bouchta.png",
    name: "Bouchta",
    text: "Hello I'm Bouchta, your personal assistant. I'm here to assist you with your farm management.",
    time: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
  {
    active: true,
    avatar: "/images/user/bouchta.png",
    name: "Bouchta",
    text: "What do you want to do today?",
    buttons: [
      {
        text: "Identify best plant for your farm",
        action: "identification",
      },
      {
        text: "Get weather forecast",
        action: "prevention",
      },
      {
        text: "Optimize your watering consumption",
        action: "optimization",
      },
    ],
    time: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  },
];

export const botResponse: Chat = {
  active: true,
  avatar: "/images/user/bouchta.png",
  name: "Bouchta",
  text: "I'm here to help you with your questions",
  time: new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }),
};
