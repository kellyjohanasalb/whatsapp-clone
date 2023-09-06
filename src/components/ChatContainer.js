import React from 'react'
import '../scss/main.scss'

export function Chat  ()  {
  return (
    <div className="chat-container">
    <div className="chat-container-header">
      <div className="chat-user-info">
        <div className="chat-user-img">
          <img src={chatUser?.photoURL} alt="" />
        </div>
        <p>{chatUser?.fullname}</p>
      </div>

      <div className="chat-container-header-btn">
        <MoreVertIcon />
      </div>
    </div>

    {/* chatdisplay-container */}

    <div className="chat-display-container" ref={chatBox}>
      {chatMessages.map((message) => (
        <ChatMessage
          message={message.text}
          time={message.timeStamp}
          sender={message.senderEmail}
        />
      ))}
    </div>
    {/* chatinput */}

    <div className="chat-input">
      {/* buttons */}
      {openEmojiBox && (
        <Picker
          onEmojiClick={(event, emojiObject) =>
            setMessage(message + emojiObject.emoji)
          }
        />
      )}

      <div className="chat-input-btn">
        <InsertEmoticonIcon onClick={() => setOpenEmojiBox(!openEmojiBox)} />
        <AttachFileIcon />
      </div>
      {/* text input element */}
      <form onSubmit={send}>
        <input
          type="text"
          placeholder="Type a Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </form>
      {/* send button */}
      <div className="chat-input-send-btn" onClick={send}>
        <SendIcon />
      </div>
    </div>
  </div>
 );
}

; 