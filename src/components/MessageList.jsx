import { useEffect, useRef } from 'react'
import MessageBubble from './MessageBubble'

function MessageList({ messages }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          sender={message.sender}
          content={message.content}
          model={message.model}
          elapsedTime={message.elapsedTime}
        />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}

export default MessageList
