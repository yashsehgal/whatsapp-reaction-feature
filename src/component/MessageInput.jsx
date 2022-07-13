import React, { useState } from "react";
import { useEffect } from "react";
import { FaPaperclip, FaPaperPlane, FaSmile } from 'react-icons/fa';
import { getReactionData } from "./assets";

export default function MessageInput() {
    const [messageRecord, setMessageRecord] = useState([
        { 
            content: 'Hey People', 
            time: {
                hours: 13,
                mins: 46,
                mrdn: 'pm'
            }
        }
    ]);

    const [switchRef, setSwitch] = useState(false);

    return (
        <React.Fragment>
            <div className="message-input-component-container">
                <div className="message-record-wrapper flex flex-col items-end justify-end" 
                >
                    {messageRecord?.map((message, messageIndex) => {
                        return (
                            <Message 
                                key={messageIndex}
                                messageText={message?.content}
                                messageTime={message?.time}
                                messageId={`message-block-wpbase_${messageIndex}`}
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
                                onKeyDown={(keyboardEvent) => {
                                    if (keyboardEvent.code.toLowerCase() === 'enter') {
                                        let keyboardInput = document.getElementById('message-input').value;
                                        if (keyboardInput !== null && keyboardInput !== undefined && keyboardInput !== "") {
                                            let _currentMessageRecord = messageRecord;
                                            let currentDate = new Date();
                                            _currentMessageRecord.push({
                                                content: document.getElementById('message-input').value, 
                                                time: {
                                                    hours: currentDate.getHours(),
                                                    mins: currentDate.getMinutes(),
                                                    mrdn: currentDate.getHours() <= 11 && currentDate.getHours() > 0 ? 'am' : 'pm'
                                                }
                                            });
                                            setMessageRecord(_currentMessageRecord);
                                            setSwitch(!switchRef);      // will find a solution for it
                                            document.getElementById('message-input').value = "";
                                        }
                                    }
                                }}
                            />
                        </span>
                        <span className='send-button-wrapper flex flex-row items-center justify-center'>
                            <button className='p-3 ml-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white flex flex-row items-center justify-center'
                                onClick={() => {
                                    let keyboardInput = document.getElementById('message-input').value;
                                    if (keyboardInput !== null && keyboardInput !== undefined && keyboardInput !== "") {
                                        let _currentMessageRecord = messageRecord;
                                        let currentDate = new Date();
                                        _currentMessageRecord.push({
                                            content: document.getElementById('message-input').value, 
                                            time: {
                                                hours: currentDate.getHours(),
                                                mins: currentDate.getMinutes(),
                                                mrdn: currentDate.getHours() <= 11 && currentDate.getHours() > 0 ? 'am' : 'pm'
                                            }
                                        });
                                        setMessageRecord(_currentMessageRecord);
                                        setSwitch(!switchRef);
                                        document.getElementById('message-input').value = "";
                                    }
                                }}
                            >
                                <FaPaperPlane />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function Message({ messageText, messageTime, messageId }) {
    const [reactionActionVisibilty, setReactionActionVisibility] = useState('0%');
    const [reactionListVisibility, setReactionListVisibility] = useState('none');

    const [reactionRecord, setReactionRecord] = useState([]);
    const [addedReactionsList, setAddedReactionsList] = useState([]);

    const reactionsList = getReactionData();

    useEffect(() => {
        let reactionListButton = document.getElementById(messageId);
        reactionListButton.addEventListener('focusin', () => {
            setTimeout(() => {
                setReactionListVisibility('flex');
            }, 300);
        });
        reactionListButton.addEventListener('focusout', () => {
            setTimeout(() => {
                setReactionListVisibility('none');
            }, 300);
        });
    });

    useEffect(() => {
        window.onkeyup = function (keyboardEvent) {
            if (keyboardEvent.keyCode === 27) {
                setReactionListVisibility('none');
            }
        }
    });

    return (
        <React.Fragment>
            <div className="message-component-wrapper h-fit flex flex-col items-end justify-end">
                <div className="message-reactions-list-option-wrapper w-[280px] h-fit flex flex-row items-center justify-center gap-1 bg-zinc-900 rounded-full px-3 py-1 shadow-lg transition-all"
                    style={{
                        display: reactionListVisibility
                    }}
                >
                    {reactionsList?.map((reaction, reactionIndex) => {
                        return (
                            <button className="p-2 rounded-full bg-transparent hover:bg-white hover:bg-opacity-20"
                                key={reactionIndex}
                                onClick={() => {
                                    let _addedReactionsList = addedReactionsList;
                                    reactionRecord?.map((_reaction) => {
                                        _addedReactionsList.push(_reaction.reactionName);
                                        setAddedReactionsList(_addedReactionsList);
                                        return <React.Fragment></React.Fragment>
                                    });
                                    if (!addedReactionsList.includes(reaction?.name)) {
                                        let _newReactionRecord = reactionRecord;
                                        _newReactionRecord.push({
                                            emoji: getReactionData(reaction?.name),
                                            username: 'You',
                                            reactionName: reaction?.name
                                        });
                                        setReactionRecord(_newReactionRecord);
                                    }
                                }}
                            >
                                <img 
                                    src={reaction?.content} 
                                    alt='emoji-reaction' 
                                />
                            </button>
                        )
                    })}
                </div>
                <div className="message-block-reaction_action-wrapper flex flex-row items-center justify-end gap-2"
                    onMouseEnter={() => setReactionActionVisibility('60%')}
                    onMouseLeave={() => setReactionActionVisibility('0%')}
                    onClick={() => setReactionListVisibility('flex')}
                >
                    <button className="message-reaction-action-icon-wrapper w-fit h-fit flex flex-row items-center cursor-pointer justify-center text-white text-opacity-60 p-[4px] bg-white bg-opacity-40 rounded-full"
                        id={messageId}
                        style={{
                            opacity: reactionActionVisibilty
                        }}
                    >
                        <FaSmile />
                    </button>
                    <div className="message-block-wrapper flex flex-row items-end gap-3 my-3 rounded-md justify-start w-fit px-3 py-1 bg-teal-700">
                        <span className="message-text-wrapper font-semibold text-sm text-white">{messageText}</span>
                        <span className="message-time-wrapper font-normal text-xs text-white text-opacity-60">
                            {messageTime?.hours}:{messageTime?.mins}{" "}{messageTime?.mrdn}
                        </span>
                    </div>
                </div>
                <div className="reaction-record-list-action-button-wrapper">
                    <div className="reaction-record-list-overlay-wrapper"></div>
                    {reactionRecord && reactionRecord.length > 0
                        ? <button className="reaction-record-list-action-button px-[4px] py-[2px] bg-teal-600 rounded-full flex flex-row items-center justify-center gap-[1.5px] -mt-1 mb-1.5">
                            {reactionRecord?.map((reactionEmoji, reactionEmojiIndex) => {
                                return (
                                    <img src={reactionEmoji?.emoji} alt="emoji-record" key={reactionEmojiIndex} 
                                        style={{ width: '14px', height: '14px' }}
                                    />
                                )
                            })}
                            {reactionRecord.length > 1
                                ? <span className="text-xs text-white text-opacity-50 font-normal">{reactionRecord.length}</span>
                                : <React.Fragment></React.Fragment>
                            }
                        </button>
                        : <React.Fragment></React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}