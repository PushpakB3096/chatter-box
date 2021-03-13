const MyMessage = ({ message }) => {
    // checking to see if the message is a text or an image
    if(message?.attachments?.length > 0){
        // rendering an image tag in case the message is not a text
        return (
            <img 
                src={ message?.attachments[0].file }
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right'  }}
            />
        )
    }
    
    // text messages will be rendered here
    return (
        <div 
            className="message" 
            style={{ float: 'right', marginRight: '18px', color: 'white', 'backgroundColor': '#3b2a50' }}
        >
            { message.text }
        </div>
    )
}

export default MyMessage;