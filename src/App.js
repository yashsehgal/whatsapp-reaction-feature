
import './component/message.component.css';
import MessageInput from './component/MessageInput';

export default function App() {
  return (
    <div className="app w-[100vw] h-[100vh] flex flex-row items-center justify-center bg-zinc-800 cursor-default">
      <div className='h-fit scroll-smooth w-auto max-h-[280px] overflow-scroll overflow-y-scroll overflow-x-hidden
      pt-[80px]
      '
      >
        <MessageInput />
      </div>
    </div>
  )
}