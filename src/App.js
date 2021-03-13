import { ChatEngine } from "react-chat-engine";

import "./assets/App.css";

import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm";

const App = () => {

  // fetching the stored username from the local storage. If it doesn't exist, then that means user is not authenticated
  const storedUser = localStorage.getItem('username')
  if(!storedUser) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      userName={ localStorage.getItem('username') }
      userSecret={ localStorage.getItem('password') }
      projectID="4cd623f3-87bf-4ea8-ad0e-a72a0783cece"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
    />
  );
};

export default App;
