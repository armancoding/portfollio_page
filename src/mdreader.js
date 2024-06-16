// import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown"

function MarkdownReader({problem}) {
    var config = require('./tasks.json');
    return (
      <ReactMarkdown>{problem}</ReactMarkdown>
    );
  }
  
  export default MarkdownReader;