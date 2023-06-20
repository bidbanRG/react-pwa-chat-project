import { useEffect, useState } from "react"
import ChatBody from "./components/ChatBody"
import Header from "./components/Header"
import { ChatDetails } from "./Types";
import Input from "./components/Input";
import ChatList from "./components/ChatList";


function App() {
 
 const [chatDetails,setChatDetails] = useState<ChatDetails>();
  useEffect(() => {
    ( async () => {
         try{
            const res = await fetch("https://qa.corider.in/assignment/chat?page=0");
            const json = await res.json();
            console.log(json);
            setChatDetails(json);
         }
         catch(e){
           console.log(e);
         }
    })()
        
  },[])
if(!chatDetails) return "Laoding";
  return (
     <> 
       {/* <Header from={chatDetails.from} to = {chatDetails.to} trip={chatDetails.name} />
        <ChatBody chats = {chatDetails.chats}/>
        <Input/>*/}
        <ChatList/>
     </> 
  )
}

export default App
