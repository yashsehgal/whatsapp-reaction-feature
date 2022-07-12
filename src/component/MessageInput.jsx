import React, { useState } from "react";
import { FaPaperclip, FaPaperPlane, FaSmile } from 'react-icons/fa';

export default function MessageInput() {
    const messageRecord = [
        { 
            content: 'Hey People', 
            time: {
                hours: 13,
                mins: 46,
                mrdn: 'pm'
            } 
        }
    ]
    return (
        <React.Fragment>
            <div className="message-input-component-container">
                <div className="message-record-wrapper flex flex-col items-end justify-end gap-2" 
                    aria-label="message-record"
                >
                    {messageRecord?.map((message, messageIndex) => {
                        return (
                            <Message 
                                key={messageIndex}
                                messageText={message.content}
                                messageTime={message.time}
                            />
                        )
                    })}
                </div>
                <div className="message-input-actions-wrapper" aria-label="message-input">
                    <div className='input-component-wrapper flex flex-row items-center bg-zinc-700 px-3 py-2 rounded-full'>
                        <span className='input-action_message-wrapper font-normal text-zinc-500 flex flex-row items-center justfy-start gap-4 w-fit h-fit'>
                            <span className='input-attach-files-icon-wrapper p-2 flex flex-row items-center justify-center hover:bg-white hover:bg-opacity-10 hover:text-zinc-200 hover:shadow-md rounded-full'>
                                <FaPaperclip />
                            </span>
                            <input type="text" 
                                className='text-sm font-normal placeholder:font-semibold placeholder:text-zinc-500 text-zinc-300 w-[420px] h-auto bg-transparent'
                                placeholder='Type a message'
                                id="message-input"
                            />
                        </span>
                        <span className='send-button-wrapper flex flex-row items-center justify-center'>
                            <button className='p-3 ml-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white flex flex-row items-center justify-center'>
                                <FaPaperPlane />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function Message({ messageText, messageTime }) {
    const [reactionActionVisibilty, setReactionActionVisibility] = useState('0%');
    return (
        <React.Fragment>
            <span className="message-component-wrapper">
                <span className="message-block-reaction_action-wrapper flex flex-row items-center justify-end gap-2"
                    onMouseEnter={() => setReactionActionVisibility('60%')}
                    onMouseLeave={() => setReactionActionVisibility('0%')}
                >
                    <span className="message-reaction-action-icon-wrapper w-fit h-fit flex flex-row items-center cursor-pointer justify-center text-white text-opacity-60 p-[4px] bg-white bg-opacity-40 rounded-full"
                        style={{
                            opacity: reactionActionVisibilty
                        }}
                    >
                        <FaSmile />
                    </span>
                    <span className="message-block-wrapper flex flex-row items-end gap-3 my-3 rounded-md justify-start w-fit px-3 py-1 bg-teal-700">
                        <span className="message-text-wrapper font-semibold text-sm text-white">{messageText}</span>
                        <span className="message-time-wrapper font-normal text-xs text-white text-opacity-60">{messageTime?.hours}:{messageTime?.mins}{" "}{messageTime?.mrdn}</span>
                    </span>
                </span>
            </span>
        </React.Fragment>
    )
}