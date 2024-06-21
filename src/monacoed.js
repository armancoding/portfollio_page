import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';



function Editor({starterCode}) {



  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: false,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  }; 
    return (
      <>
      <div className='controls'>
        <div className='button'>Test</div>
        <div className='button'>Submit</div>
        <select id="language" defaultValue={'cpp'}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>
      <MonacoEditor
        resize="horizontal"
        language="javascript"
        value={starterCode}
        height='91vh'
        width='100%'
        align-self='flex-start'
        background-color='blue'
        theme="vs-dark"
        options={options}
      />
      </>
    );
};

export default Editor;