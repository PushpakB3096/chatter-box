import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    // handles clicking of the login button
    const handleSubmit = async event => {
        event.preventDefault()

        /*
        *  On submit, need to send the credentials to ChatEngine. Once ChatEngine authenticates the user and fetches the messages,
        *   we can login the user and show the chat room. Otherwise, need to show an error message.
        */
        // creating an authentication object to send to ChatEngine API
        const authObj = {
           'Project-ID': '4cd623f3-87bf-4ea8-ad0e-a72a0783cece',
           'User-Name': username,
           'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObj })
            
            // persisting the user credentials
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            // reloading the page after a successful authentication to ensure user can see the chat room. Otherwise, they will see login form
            window.location.reload()
        } catch (error) {

        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                {/* displays the title of the app */}
                <h1 className="title">ChatterBox - A ReactJs Chat Application</h1>
                <form onSubmit={ handleSubmit }>
                    <input
                        className="input"
                        placeholder="Enter username to start..."
                        required
                        type="text"
                        value={ username }
                        onChange={ event => { setUsername(event.target.value) }}
                    />
                    <input
                        className="input"
                        placeholder="Enter password..."
                        required
                        type="password"
                        value={ password }
                        onChange={ event => { setPassword(event.target.value) }}
                    />
                    <div align="center">
                        <button 
                            type="submit"
                            className="button"
                        >
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm