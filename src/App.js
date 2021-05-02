import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="20c88d14-494d-4298-88dc-0ea75b8d5ef3"
            userName="admin1"
            userSecret="admin1"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
        />
    )
}

export default App;