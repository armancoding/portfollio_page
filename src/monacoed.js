import React, { useRef, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
//import * as monaco from 'monaco-editor';

// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
// const path = require('path');

// module.exports = {
// 	entry: './index.js',
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: 'app.js'
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.css$/,
// 				use: ['style-loader', 'css-loader']
// 			},
// 			{
// 				test: /\.ttf$/,
// 				use: ['file-loader']
// 			}
// 		]
// 	},
// 	plugins: [new MonacoWebpackPlugin()]
// };




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
      enabled: true,
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