import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
// import runPythonScript from './RunCode'


function Editor({starterCode}) {
  const [Language, setLanguage] = useState('javascript');
  // // const [code, setCode] = useState(starterCode);
  // let code = JSON.parse(JSON.stringify(starterCode));

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const handleEditorChange = (value) => {
    starterCode[Language] = value;
    // starterCode[Language] = value;
  };

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
    scrollBeyondLastLine: false,
  };

  const handleSubmitClick = async () => {
    //console.log("Submit clicked, current code:", code);
    switch(Language){
      case "javascript":
        break;
      case "python":
        try {
          const response = await fetch('/api/run-python', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: starterCode['python'] }),
          });
          const result = await response.json();
          console.log('Test Result:', result);
          // Handle result display or further processing
        } catch (error) {
          console.error('Error running test:', error);
        }
        break;
      case "java":
        break;
      case "cpp":
        break;
    }
  };

  return (
    <>
      <div className='controls'>
        <div className='button' onClick={handleSubmitClick}>Submit</div>
        <select id="language" defaultValue={'javascript'} onChange={changeLanguage}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>
      <MonacoEditor
        language={Language}
        value={starterCode[Language]}
        onChange={handleEditorChange}
        resize="horizontal"
        height='91vh'
        width='100%'
        theme="vs-dark"
        options={options}
      />
    </>
  );
};

export default Editor;
