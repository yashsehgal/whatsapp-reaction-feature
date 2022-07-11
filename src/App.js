import MessageInput from "./component/MessageInput.tsx";
import './component/message.component.css';

export default function App() {
  return (
    <div className="app w-[100vw] h-[100vh] flex flex-row items-center justify-center bg-zinc-800 cursor-default">
      <MessageInput />
    </div>
  )
}