import MessageList from './MessageList'
import ChatInput from './ChatInput'

function ChatWindow({
  messages,
  message,
  onMessageChange,
  onSend,
  isLoading,
  error,
  selectedModel,
}) {
  return (
    <div className="chat-window">
      <div className="chat-box">
        {messages.length === 0 ? (
          <div className="empty-chat-placeholder">
            첫 질문을 입력하고 전송하면 AI가 답변합니다.
          </div>
        ) : (
          <MessageList messages={messages} />
        )}
      </div>
      <div className="status-bar">
        <span>선택 모델: {selectedModel || '불러오는 중...'}</span>
        <span>{isLoading ? '응답 생성 중...' : 'FastAPI /chat API와 연결됨'}</span>
      </div>
      {error && <div className="error-message">{error}</div>}
      <ChatInput
        message={message}
        onChange={onMessageChange}
        onSubmit={onSend}
        isLoading={isLoading}
        disabled={!selectedModel}
      />
    </div>
  )
}

export default ChatWindow
