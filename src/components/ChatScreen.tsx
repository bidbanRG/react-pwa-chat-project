import { useLocation } from "react-router-dom"
import { ChatDetails } from "../Types"
import Header from "./Header";
import ChatBody from "./ChatBody";
import Input from "./Input";



export default function ChatScreen(){
 

  const chatDetails = useLocation().state as ChatDetails; 
  

	return <>
	    <Header from={chatDetails.from} to = {chatDetails.to} trip={chatDetails.name} src = {chatDetails.chats[0].sender.image} />
        <ChatBody chats = {chatDetails.chats}/>
        <Input/>
	</>
}