const TheirMessage = ({ lastMessage, message }) => {
    // need to determine if this is the first message sent by the user
    const isFirstMessageByUser = !lastMessage ||
        lastMessage.sender.username !== message.sender.username

    return (
        <div className="message-row">
            {/* if the message is the first message by the user then need to show their avatar */}
            { isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {/* rendering an image tag in case the message is not a text */}
            { message?.attachments?.length > 0
                ? (
                    <img 
                        src={ message?.attachments[0].file }
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    /> 
                ) : (
                    <div 
                        className="message" 
                        style={{ float: 'left', 'backgroundColor': '#cabcdc', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    >
                        { message.text }
                    </div>
                )
            }
        </div>
    )
}

export default TheirMessage;