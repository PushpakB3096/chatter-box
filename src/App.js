import { ChatEngine } from "react-chat-engine";

import "./assets/App.css";

import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="PushpakB"
      userSecret="pass123"
      projectID="4cd623f3-87bf-4ea8-ad0e-a72a0783cece"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
    />
  );
};

export default App;
