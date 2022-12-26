import { ChatEngine } from "react-chat-engine";

import './/App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from "./LoginForm";

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
             height='100vh'
             projectID="8261a05b-859a-4bb4-b94d-2e90bcd74649"
             userName={localStorage.getItem('username')}
             userSecret={localStorage.getItem('password')}
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    
    );
}

export default App;