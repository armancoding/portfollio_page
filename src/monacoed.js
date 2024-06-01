import React, { useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
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
    return (
      <MonacoEditor
        language="javascript"
        value="hello world"
        height='95vh'
        width='100%'
        align-self='flex-start'
        background-color='blue'
        theme="vs-dark"
      />
    );
};

export default Editor;