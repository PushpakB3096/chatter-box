import { useState } from 'react'
const MessageForm = () => {
    const [ value, setValue ] = useState('')

    const handleSubmit = () => {
        // TODO: will handle the logic to submit a message
    }

    const handleChange = () => {
        // TODO: will handle the logic incase user starts typing a message
    }

    return (
        <form className="message-form" onSubmit={ handleSubmit }>
            <input 
                className="message-input"
                placeholder="Start typing..."
                value={ value }
                onChange={ handleChange }
            />
        </form>
    )
}

export default MessageForm;