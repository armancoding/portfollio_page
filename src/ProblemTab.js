import React, { useState, useRef, useEffect } from 'react';
import MonacoEditor from './monacoed';
import MarkdownReader from './mdreader';
import './ProblemTab.css'
import Chatbox from './Chatbox';
var config = require('./tasks.json');


function ProblemTab({problem}) {
    const [showChatboxes, setShowChatboxes] = useState({}); // Track which chatboxes are open
    
    const resizableRefL = useRef(null);
    const resizableRefR = useRef(null);

    var config = require('./tasks.json');


    const handleMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const resizableL = resizableRefL.current;
        const newWidthL = e.clientX - resizableL.getBoundingClientRect().left;
        
        const resizableR = resizableRefR.current;
        const parent = resizableL.parentElement;
        const totalWidth = parent.getBoundingClientRect().width;

        const newWidthR = totalWidth - newWidthL - document.getElementById('resize-handle').getBoundingClientRect().width - 15;
        console.log(`client x = ${e.clientX}\nnewWidthR = ${newWidthR}`)
        
        resizableL.style.width = `${newWidthL}px`;
        resizableR.style.width = `${newWidthR}px`;
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };


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


    return (
        <>      
        <div className='left' ref={resizableRefL}>
            <div className='assignment'>
            <div className='controlsL' id='cont'>
                <div className="button" onClick={handleHelpClick}>FantasAI</div>
                <div className='button'>Description</div>
                <div className='button'>Submission History</div>
                <div className='button'>Discussion</div>
            </div>
            {Object.keys(showChatboxes).map((chatId) =>
                        showChatboxes[chatId] ? (
                          <Chatbox parent='cont' key={chatId} chatId={chatId} onClose={() => handleCloseChat(chatId)} />
                        ) : null
                        )}
                <MarkdownReader problem={config[problem]['description']}></MarkdownReader>
            </div>
        </div>
        <div id='resize-handle' onMouseDown={handleMouseDown}>
            <div id='vertical-line'></div>
        </div>
        <div className='right' ref={resizableRefR}> 
            <MonacoEditor starterCode={config[problem]['starter_code']}/> 
        </div></> 
    );
}

export default ProblemTab