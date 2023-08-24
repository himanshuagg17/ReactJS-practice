import React, { useState } from "react";

function InputBoxComponent() {
  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedText(inputText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Display Text</button>
      {displayedText && <p>Displayed Text: {displayedText}</p>}
    </div>
  );
}

export default InputBoxComponent;
