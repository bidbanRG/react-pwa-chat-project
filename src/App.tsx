

 import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatList from "./components/ChatList";
import ChatScreen from "./components/ChatScreen";



function App() {
 
 

  return (
     <> 
       
        <BrowserRouter>
         <Routes>
           <Route path="/" element = {<ChatList/>}/>
           <Route path="/chat" element = {<ChatScreen/>} />
        </Routes>
        </BrowserRouter>
     </> 
  )
}

export default App
