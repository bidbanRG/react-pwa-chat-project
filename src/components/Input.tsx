export default function Input(){
	return <section className="w-full  m-auto fixed bottom-0 bg-white">
	  <div className="w-[95%] h-[60px] m-auto  flex items-center  rounded-[20px]">
	    <input type="text" className = "w-full rounded-[20px] mx-2 h-[50px] p-3  outline-none" placeholder="Reply to @Rohit Yadav" />
	    <Clip className="w-8 h-8 mx-1 cursor-pointer"/>
	    <Send className="w-8 h-8 mx-1 mr-2 cursor-pointer" />
	  </div>

    </section>
}


const Clip:React.FC<{className:string}> = (props) => {
	return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
</svg>

}
const Send:React.FC<{className:string}> = (props) => {
	return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

}