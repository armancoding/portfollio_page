// import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown"
import remarkMath from 'remark-math';
import remarkHtml from 'remark-html';

function MarkdownReader({problem}) {
  const markdownWithLatexAndHtml = `
  # Markdown with LaTeX and HTML
  
  Here is an inline LaTeX formula: $E=mc^2$
  
  And here is a block LaTeX formula:
  \`\`\`latex
  \\[
  KE = \\frac{1}{2}mv^2
  \\]
  \`\`\`
  
  This is a raw HTML example:
  \`\`\`html
  <div>
    <p>This is raw HTML content.</p>
  </div>

  
  \`\`\`
  ![chameleon](https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg)
  `;    
    return (
      <div style={{ 
        height: '90vh', 
        width: '100%', 
        overflowY: 'auto', 
        border: 'none', 
        padding: '10px',
        boxSizing: 'border-box', 
        background: '#123'
    }}>
        <ReactMarkdown 
          children={markdownWithLatexAndHtml}
          remarkPlugins={[remarkMath, remarkHtml]}
          skipHtml={false}/>
      </div>
    );
  }
  
  export default MarkdownReader;