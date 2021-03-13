import { useState } from 'react'
import { isTyping, sendMessage } from 'react-chat-engine'
import { PictureOutlined, SendOutlined } from '@ant-design/icons'

const MessageForm = props => {
    const [ value, setValue ] = useState('')
    const { chatId, creds } = props

    const handleSubmit = event => {
        // need to prevent the default form behaviour on submit
        event.preventDefault()
        // trim the message
        const text = value.trim()

        // only send the message if the message actually contains anything
        if (text.length > 0) {
            sendMessage(creds, chatId, { text })
        }

        // need to reset the input field once the message is sent
        setValue('')
    }

    const handleChange = event => {
        setValue(event.target.value)

        // shows that the user is typing
        isTyping(props, chatId)
    }

    const handleUpload = event => {
        // get the uploaded image
        const files = event.target.files

        // sending text as empty because there is no text to send
        sendMessage(creds, chatId, {
            files,
            text: ''
        })
    }

    return (
        <form className="message-form" onSubmit={ handleSubmit }>
            <input 
                className="message-input"
                placeholder="Start typing..."
                value={ value }
                onChange={ handleChange }
                onSubmit={ handleSubmit }
            />
            {/* for adding image upload button */}
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            {/* this input form will not be visible because we are using the label above for that */}
            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={ handleUpload }
            />
            {/* adding a button to send message or image */}
            <button
                type="submit"
                className="send-button"
            >
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm;