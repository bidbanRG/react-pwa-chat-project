const att = new Array(20).fill(2);
export default function ChatList(){
	return <main className="w-full">
	      <header className="w-full h-18 flex items-center justify-between">
	        <h1 className="text-[30px] ml-5"><b> Chat </b> </h1>
            <section className="flex items-center">
	         <Note className="w-10 h-10 mr-4 cursor-pointer"/>
	        <Ellipsis className="h-12 w-12 cursor-pointer"/>
	        </section>
	      </header>
		 {att.map((_,index) => <ChatBar key = {index}/>)}
	</main>
}

const ChatBar = () => {
	return <section className="w-full h-[70px] flex items-center">
	    <div className = 'min-h-[50px] min-w-[50px] rounded-full bg-[teal] mx-3'/>
	    <h1 className="ml-6"> name </h1>
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