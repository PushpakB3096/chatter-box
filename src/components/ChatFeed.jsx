import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = props => {
    const { chats, activeChat, userName, messages  } = props

    // gets the active chat from the list of different chats
    const chat = chats && chats[activeChat]

    // renders messages from the active chat
    const renderMessages = () => {
        const keys = Object.keys(messages)

        return keys.map((key, index) => {
            const message = messages[key]
            // gets the key of the last message sent
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            // checking to see if the message is the user's own message
            const isMyMessage = userName === message.sender.username

            // renders the entire chat room feed
            return (
                <div 
                    key={`msg_${index}`}
                    style={{ width:  '100%'}}
                >
                    <div className="message-block">
                        {
                            // if the message belongs to the user, then render MyMessage component, otherwise renders the TheirMessage component
                            isMyMessage 
                            ? <MyMessage message={ message }/> 
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    {/* this block will render read receipts */}
                    <div
                        className="read-receipts"
                        style={{ marginRight: isMyMessage ? '18px' : '0', marginLeft: isMyMessage ? '0' : '68px' }}
                    >
                        {/* TODO: read receipts */}
                        Read reciepts
                    </div>
                </div>
            )
        })
    }

    // shows a loading message if there are no chats
    if (!chat) return "Loading..."

    // otherwise renders the chats
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    { chat?.title }
                </div>
                <div className="chat-subtitle">
                    { chat.people.map((person) => ` ${person.person.username}`) }
                </div>
            </div>
            {/* renders the messages */}
            { renderMessages() }
            {/* adding some space after message */}
            <div style={{ height: '100px' }}/>
            <div className="message-form-container">
                {/* renders the message form for the user to type */}
                <MessageForm {...props} chatId={ activeChat } />
            </div>
        </div>
    )
}

export default ChatFeed;