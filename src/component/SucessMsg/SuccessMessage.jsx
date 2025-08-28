import React from 'react';
import './SuccessMessage.css';

const SuccessMessage = ({ message, onClose }) => {
  return (
    <div className="success-container">
      <div className="success-box">
        <span>{message} "Success message"</span>
        <button onClick={onClose} className="close-btn">✖</button>
      </div>
    </div>
  );
};

export default SuccessMessage;
