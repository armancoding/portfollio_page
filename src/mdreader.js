// import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown"




function MarkdownReader({problem}) {
    var config = require('./tasks.json');
    return (
      <ReactMarkdown>{config[problem]}</ReactMarkdown>
    );
  }
  
  export default MarkdownReader;