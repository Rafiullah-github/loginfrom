import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react';

function TextCaseConverter() {
    const [inputText, setInputText] = useState('');
    const [convertedText, setConvertedText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const convertText = (caseType) => {
        switch (caseType) {
            case 'lowerCase':
                setConvertedText(inputText.toLowerCase());
                break;
            case 'upperCase':
                setConvertedText(inputText.toUpperCase());
                break;

            case 'clearCase':
                setConvertedText(inputText.toClearText());
                break;


            default:
            setConvertedText(inputText);
            
        }
    };


return (

<div>
    <h2>Case Converter</h2>
<textarea className="text"  cols="50" rows="10" onChange={handleInputChange} placeholder='Enter text'></textarea>


  <div>
    <button  className="button" onClick={() => convertText('lowerCase')}>
        lower case
        </button>
    <button  className="button" onClick={() => convertText('upperCase')}>
        Upper case
        </button>
    <button  className="button" onClick={() => convertText('clear')}>
        Clear case</button>
  </div>

  <div>
    <h3>Converted text</h3>
    <p>{convertedText}</p>
  </div>
  </div>
);
}


export default TextCaseConverter;