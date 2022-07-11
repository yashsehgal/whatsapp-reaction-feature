import React from 'react';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';

export default function MessageInput() {
    return (
        <React.Fragment>
            <div className='input-component-wrapper flex flex-row items-center bg-zinc-700 px-3 py-2 rounded-full'>
                <span className='input-action_message-wrapper font-normal text-zinc-500 flex flex-row items-center justfy-start gap-4 w-fit h-fit'>
                    <span className='input-attach-files-icon-wrapper p-2 flex flex-row items-center justify-center hover:bg-white hover:bg-opacity-10 hover:text-zinc-200 hover:shadow-md rounded-full'>
                        <FaPaperclip />
                    </span>
                    <input type="text" 
                        className='text-sm font-normal placeholder:font-semibold placeholder:text-zinc-500 text-zinc-300 w-[420px] h-auto bg-transparent'
                        placeholder='Type a message'
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