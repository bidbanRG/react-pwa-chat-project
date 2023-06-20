import { useEffect } from "react";
import { ChatDetails } from "../Types";
import { useChats } from "../ChatContext";
import { useNavigate } from "react-router-dom";


const call = Array.from({length:20},(_,i) => fetch(`https://qa.corider.in/assignment/chat?page=${i}`));
export default function ChatList(){

     const {
   setChats,
   chats
 } = useChats();
  
  useEffect(() => {
    (async () => {
         try{
            
            Promise.all(call).then(res => {
            	  return Promise.all(res.map(res => res.json()))
            }).then(res => {
            	 setChats(res); 
            })
            console.log(chats);
           }
         catch(e){
           console.log(e);
         }
    })()
        
  },[])



	return <main className="w-full">
	      <header className="w-full h-18 flex items-center justify-between">
	        <h1 className="text-[30px] ml-5"><b> Chat </b> </h1>
            <section className="flex items-center">
	         <Note className="w-10 h-10 mr-4 cursor-pointer"/>
	        <Ellipsis className="h-12 w-12 cursor-pointer"/>
	        </section>
	      </header>
		 {chats.map((data,index) => <ChatBar {...data} key = {index}/>)}
	</main>
}

const ChatBar = (props:ChatDetails) => {
  const navigate = useNavigate();
	return <section className="w-full h-[70px] flex items-center cursor-pointer border-b-2 border-gray-400"
           onClick={() => navigate("/chat",{state:props})}
      > 
	    <img src = {props.chats[0].sender.image} className = 'h-[50px] w-[50px] rounded-full  mx-3'/>
	    <h1 className="ml-3"> {props.from} </h1>
	</section>
	 
}


const Note:React.FC<{className:string}> = (props) => {
	return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  {...props} >
   <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
 </svg>
}

const Ellipsis:React.FC<{className:string}> = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" {...props}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

}