import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css'

function Chatbox({ chatId, onClose }) {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const messagesEndRef = useRef(null);
  
    const handleSendMessage = () => {
      if (messageInput.trim() !== '') {
        // Send message to backend (using fetch, Axios, etc.)
        fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chatId, message: messageInput }),
        })
          .then((res) => res.json())
          .then((data) => {
            setMessages([...messages, data]);
            setMessageInput('');
          });
      }
    };

    const resizableRef = useRef(null);

    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const resizable = resizableRef.current;
        const newWidth = e.clientX - resizable.getBoundingClientRect().left;
            resizable.style.width = `${newWidth}px`;
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
  
    useEffect(() => {
      // Scroll to the bottom of the chat on new messages
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
  
    return (
      <div className="chatbox" ref={resizableRef}>
            <div class="resize-handle" onMouseDown={handleMouseDown}>
                <div className='vertical-line'></div>
            </div>
        <div className="chat-header"> 
          Chat with Fantastica
          <span className="close-chat" onClick={onClose}>x</span>
        </div>
        <div className="chat-messages ">
          {messages.map((msg, index) => (
            <div key={index}>{msg.message}</div> // Display messages
          ))}
          <div ref={messagesEndRef} /> 
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    );
  }

  export default Chatbox;