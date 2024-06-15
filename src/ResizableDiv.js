import React, { useRef } from 'react';
import './ResizableDiv.css';

const ResizableDiv = () => {
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

    return (
        <div
            ref={resizableRef}
            className="resizable"
        >
            <div className="resize-handle" onMouseDown={handleMouseDown}></div>
        </div>
    );
};

export default ResizableDiv;