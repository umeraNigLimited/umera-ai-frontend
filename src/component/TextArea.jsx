import React, {useState} from 'react';
import Button from '../component/Button.jsx';
import '../style/TextArea.css';

function TextArea() {
  const [chat, setChat] = useState('');
  const [chatLengthLong, setchatLengthLong] = useState(false);


  function handleInputChange (e){
    const {value} = e.target;
    let textLenght = value.length;
    if (textLenght > 36) {
        setchatLengthLong(true)
    } else {
        setchatLengthLong(false)
    }
    setChat(value)
}

function handleSubmitButton () {
    console.log('I don Click the submit button wey you press')
}

  return (
    <div className="textarea-container move-textarea">
      <textarea 
        id="prompt-textarea" 
        placeholder="Message UMéRA AI"
        value={chat} onChange={handleInputChange} rows={chatLengthLong ? 5 : 1}
      />
      <Button icon={<i className="fa-regular fa-paper-plane"></i>} className='prompt-button' onClick={handleSubmitButton}/>
    </div>
  );
}

export default TextArea;
