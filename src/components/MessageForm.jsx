import { useState } from 'react'
import { isTyping, sendMessage } from 'react-chat-engine'

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

        isTyping(props, chatId)
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
        </form>
    )
}

export default MessageForm;