// import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown"




function MarkdownReader({file}) {
    let text = "# 1. Two Sum\nGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.\n\n#### Example 1:\n```\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return[0, 1].\n```\n#### Example 2:\n```\nInput: nums = [3,2,4], target = 6\nOutput: [1,2]\n```\n#### Example 3:\n```\nInput: nums = [3,3], target = 6\nOutput: [0,1]\n```\n"
    return (
      <ReactMarkdown>{text}</ReactMarkdown>
    );
  }
  
  export default MarkdownReader;