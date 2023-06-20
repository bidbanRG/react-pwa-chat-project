import React, { ReactNode, useContext, useState } from "react";
import { ChatDetails } from "./Types";

const ChatContext = React.createContext<
{
chats:ChatDetails[];
setChats:(val:ChatDetails[]) => void;
}>({chats:[],setChats:() => {}});


export function useChats(){
	return useContext(ChatContext);
}

export default function ChatProvider({children}:{children:ReactNode}){

  const [chats,setChatss] = useState<ChatDetails[]>([]);
  const setChats = (val:ChatDetails[]) => setChatss(val);
  return <ChatContext.Provider value = {{chats,setChats}}>
    {children}
  </ChatContext.Provider>

}