import React, { useEffect, useState } from 'react';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import { ThumbsUpEmoji } from './assets';

interface MessageComponent {
    message: String,
    time: {
        hours: String,
        minutes: String
    },
    reactions: {
        totalReactionCount: Number,
        reactionList: any
    }
};

export default function MessageInput() {
    const [messageRecordRef, setMessageRecord] = useState([]);
    const [currentMessageInput, setCurrentMessageInput] = useState(null);
    return (
        <React.Fragment>
            <div className='message-record-wrapper'>
                {messageRecordRef?.map((message, messageIndex) => {
                    return (
                        <React.Fragment>
                            <div className='px-4 py-1.5 rounded-md bg-teal-500 text-white font-semibold' key={messageIndex}>
                                {message}
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
            <div className='input-component-wrapper flex flex-row items-center bg-zinc-700 px-3 py-2 rounded-full'>
                <span className='input-action_message-wrapper font-normal text-zinc-500 flex flex-row items-center justfy-start gap-4 w-fit h-fit'>
                    <span className='input-attach-files-icon-wrapper p-2 flex flex-row items-center justify-center hover:bg-white hover:bg-opacity-10 hover:text-zinc-200 hover:shadow-md rounded-full'>
                        <FaPaperclip />
                    </span>
                    <input type="text" 
                        className='text-sm font-normal placeholder:font-semibold placeholder:text-zinc-500 text-zinc-300 w-[420px] h-auto bg-transparent'
                        placeholder='Type a message'
                        id="message-input"
                        onChange={(messageInput) => {
                            if (messageInput?.target?.value && messageInput?.target?.value?.toString()?.length > 0) {
                                setCurrentMessageInput(messageInput?.target?.value);
                            }
                        }}
                        onKeyDown={(keyPressEvent) => {
                            if (keyPressEvent.code.toLowerCase() === 'enter') {
                                console.log('working');
                                
                                let _newMessageRecordList = messageRecordRef;
                                _newMessageRecordList.push(currentMessageInput);
                                setCurrentMessageInput(null);
                                setMessageRecord(_newMessageRecordList);
                            }
                        }}
                    />
                </span>
                <span className='send-button-wrapper flex flex-row items-center justify-center'>
                    <button className='p-3 rounded-full bg-teal-600 text-white flex flex-row items-center justify-center'>
                        <FaPaperPlane />
                    </button>
                </span>
            </div>
        </React.Fragment>
    )
}