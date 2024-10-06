import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";
import { useEffect, useState } from "react";
import { botResponse, welcomingMsgs } from "@/data/chatData";
import MapWithPolygon from "../Maps/MapWithPolygon";

const history: Chat[] = welcomingMsgs;
const response: Chat = botResponse;

const ChatCard = () => {
  const [chatData, setChatData] = useState<Chat[]>(history);
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
    setChatData([...chatData, botResponse]);
  };

  return (
    <div className="relative col-span-12 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <h4 className="mb-5.5 px-7.5 pt-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Chat with Bouchta
      </h4>

      <div className="h-[350px] overflow-y-scroll">
        {chatData.map((chat, key) => (
          <div className="flex items-start gap-4.5 px-7.5 py-3" key={key}>
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
                  <span className="mb-px text-body-sm font-medium text-dark-3 dark:text-dark-6">
                    {chat.text}
                  </span>
                </p>
                <div className="my-1 flex flex-wrap gap-2">
                  {chat.buttons &&
                    chat.buttons.map((button: any, key: any) => (
                      // <button
                      //   key={key}
                      //   onClick={sendBotMessage}
                      //   className="rounded-full bg-green-light-2 px-3 py-2 text-left text-xs font-medium text-white"
                      // >
                      //   {button.text}
                      // </button>
                      // replace the button with a link to the map
                      <Link key={key} href="/farmer/map" className="rounded-full bg-green-light-2 px-3 py-2 text-left text-xs font-medium text-white">
                          {button.text}
                      </Link>
                    ))}
                </div>
                <span className="text-xs">{chat.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full items-center gap-4.5 bg-gray-1 px-7.5 py-3.5 dark:bg-dark-2">
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
