import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = props => {
    const { chats, activeChat, userName, messages  } = props

    // gets the active chat from the list of different chats
    const chat = chats && chats[activeChat]

    // this will show all the users who have read a particular message
    const renderReadReceipts = (message, isMyMessage) => {
        // renders receipt only when user has read the message
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{ float: isMyMessage ? 'right' : 'left', backgroundImage: `url(${person?.person?.avatar})` }}
            />
        ))
    }

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
                        { renderReadReceipts(message, isMyMessage) }                        
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