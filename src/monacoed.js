import React, { useRef, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';



const Editor = () => {
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
      <MonacoEditor
        resize="horizontal"
        language="javascript"
        value="console.log('hello world')"
        height='95vh'
        width='100%'
        align-self='flex-start'
        background-color='blue'
        theme="vs-dark"
        options={options}
      />
    );
};

export default Editor;