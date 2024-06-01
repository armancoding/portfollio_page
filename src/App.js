import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import MonacoEditor from './monacoed';
import MarkdownReader from './mdreader';
import ReactMarkdown from "react-markdown"

function App() {
  const [activeTab, setActiveTab] = useState({ id: 1, name: 'New Tab' });
  const [tabs, setTabs] = useState([{ id: 1, name: 'New Tab' }]);
  const [searchValue, setSearchValue] = useState('');
  const [renamingTab, setRenamingTab] = useState(null);
  const renameInputRef = useRef(null);
  //newstuff
  const [showChatboxes, setShowChatboxes] = useState({}); // Track which chatboxes are open

  const handleHelpClick = () => {
    const newChatId = Date.now();
    setShowChatboxes({ ...showChatboxes, [newChatId]: true });
  };

  const handleCloseChat = (chatId) => {
    setShowChatboxes({ ...showChatboxes, [chatId]: false });
  };

  // Backend Function (placeholder)
  const saveMessageToBackend = (chatId, message) => {
    // Implementation to save messages in JSON format
    // ... (e.g., fetch POST request to your server) ...
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddTab = () => {
    const newTab = { id: tabs.length + 1, name: 'New Tab' };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab);
  };

  const handleCloseTab = (tab) => {
    const newTabs = tabs.filter((t) => t.id !== tab.id);
    setTabs(newTabs);
    if (activeTab.id === tab.id) {
      setActiveTab(newTabs[0]);
    }
  };

  const handleRenameTab = (tab) => {
    setRenamingTab(tab);
  };

  const handleRenameInputChange = (e) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === renamingTab.id) {
        return { ...tab, name: e.target.value };
      }
      return tab;
    });
    setTabs(newTabs);
  };

  const handleRenameInputBlur = () => {
    setRenamingTab(null);
  };

  useEffect(() => {
    if (renamingTab) {
      renameInputRef.current.focus();
    }
  }, [renamingTab]);

  return (
    <div className="App">
      <div className="navbar">
        <input type="search" value={searchValue} onChange={handleSearchChange} />
        <div className="tabs">
          {tabs.map((tab) => (
            <div key={tab.id} className={`tab ${activeTab.id === tab.id ? 'active' : ''}`} onClick={() => handleTabClick(tab)}>
              {renamingTab && renamingTab.id === tab.id ? (
                <input
                  ref={renameInputRef}
                  className="rename-input"
                  value={tab.name}
                  onChange={handleRenameInputChange}
                  onBlur={handleRenameInputBlur}
                />
              ) : (
                <span onDoubleClick={() => handleRenameTab(tab)}>{tab.name}</span>
              )}
              <span className="close-tab" onClick={(e) => { e.stopPropagation(); handleCloseTab(tab); }}>
                x
              </span>
            </div>
          ))}
          <div className="add-tab" onClick={handleAddTab}>
            +
          </div>
        </div>
        <div className="help-button" onClick={handleHelpClick}>Help</div>
      </div>

      {/* Chatboxes */}
      {Object.keys(showChatboxes).map((chatId) =>
      showChatboxes[chatId] ? (
        <Chatbox key={chatId} chatId={chatId} onClose={() => handleCloseChat(chatId)} />
      ) : null
      )}
      
      <div className="content">
        {tabs.map((tab) => (
          <div key={tab.id} style={{ display: activeTab.id === tab.id ? 'block' : 'none' }}>
            <div className='editor'><div className='assignment'><MarkdownReader file="README.md"></MarkdownReader></div></div>
            <div className='editor'> <MonacoEditor/> </div>    
          </div>
        ))}
      </div>
      <div className="sun" />
      <div className="planet mercury" />
      <div className="planet venus" />
      <div className="planet earth" />
      <div className="planet mars" />
      <div className="planet jupiter" />
      <div className="planet saturn" />
      <div className="planet uranus" />
      <div className="planet neptune" />
      

    </div>
  );
}

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

  useEffect(() => {
    // Scroll to the bottom of the chat on new messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbox">
      <div className="chat-header">
        Chat {chatId}
        <span className="close-chat" onClick={onClose}>x</span>
      </div>
      <div className="chat-messages">
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


export default App;