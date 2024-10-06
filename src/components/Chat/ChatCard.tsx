import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";
import { useEffect, useState } from "react";
import { send } from "process";

const welcomeMsgs: Chat[] = [
  {
    active: true,
    avatar: "/images/user/bouchta.png",
    name: "Bouchta",
    text: "Hello I'm Bouchta, your personal assistant. I'm here to assist you with your farm management.",
    time: "Just now",
  },
  // what do you want to do today?
  // Buttons: Identify best plant for your farm, Get weather forecast, Optimize your watering consumption.
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
    time: "Just now",
  }
];
const botResponse: Chat = {
  active: true,
  avatar: "/images/user/bouchta.png",
  name: "Bouchta",
  text: "I'm here to help you with your questions",
  time: "Just now",
};

const ChatCard = () => {
  const [chatData, setChatData] = useState<Chat[]>(welcomeMsgs);
  const [message, setMessage] = useState("");
  const sendUserMessage = () => {
    setChatData([
      ...chatData,
      {
        active: true,
        avatar: "/images/user/user-03.png",
        name: "Ahmed Idrissi",
        text: message,
        time: "Just now",
      },
    ]);
    setMessage("");
  };
  const sendBotMessage = () => {
    setChatData([
      ...chatData,
      botResponse
    ]);
  };
 
  return (
    <div className="relative col-span-12 h-[500px] overflow-y-scroll rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <h4 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Chat with Bouchta
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-4.5 px-7.5 py-3 hover:bg-gray-1 dark:hover:bg-dark-2"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-dark-2 ${
                  chat.active === true
                    ? "bg-green"
                    : chat.active === false
                      ? `bg-red-light`
                      : "bg-orange-light"
                }`}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-dark dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span
                    className="mb-px text-body-sm font-medium text-dark-3 dark:text-dark-6"
                  >
                    {chat.text}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {chat.buttons &&
                    chat.buttons.map((button: any, key: any) => (
                      <button
                        key={key}
                        onClick={sendBotMessage}
                        className="px-3 py-2 text-white text-left text-xs font-medium bg-green-light-2 rounded-full"
                      >
                        {button.text}
                      </button>
                    ))}
                </div>
                <span className="text-xs">{chat.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-0 flex w-full items-center gap-4.5 bg-gray-1 px-7.5 py-3.5 dark:bg-dark-2">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendUserMessage()}
          className="w-full rounded-full bg-gray-2 px-5.5 py-2 text-dark dark:bg-dark-3 dark:text-white"
        />
        <button
          onClick={sendUserMessage}
          className="rounded-full bg-primary px-5.5 py-2 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatCard;
