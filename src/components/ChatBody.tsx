import { Chat } from "../Types";

type Message = {
	image:string;
	self:boolean;
	message:string;
}

export default function ChatBody({chats}:{chats:Chat[]}){
	//https://qa.corider.in/assignment/chat?page=0
	return <section className="w-full mt-4">
	      {chats.map((chat,index) =>  <Message {...chat} key = {index} />)}
	</section>
}

const Message = (props:Chat) => {
    return(
       <section className="flex">
          <img src = {props.sender.image} className="h-6 w-6 rounded-full mx-2 mt-6"/>
          <p className={`text-[18px] p-3 mx-2 my-6 ${props.sender.self ? "bg-blue-600":"bg-white" }shadow-black shadow-md rounded-[10px]`}> 
           {props.message} 
          </p>
       </section>

   )
}