import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const countWords = () => {
    const words = text.split(/\s+/).filter((word) => word !== '');
    return words.length;
  };

  return (
    <div class="text-center mt-5">
      <h1 style={{fontFamily:"cursive", fontSize:"36px" }} >Responsive Paragraph Word<br/>Counter</h1>
      <textarea
        style={{width:"500px"}}
        rows="5"
        placeholder="Type your text here..."
        onChange={handleTextChange}
        value={text}
      />
      <p style={{margin:"20px", color:"grey"}}>Word Count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;
