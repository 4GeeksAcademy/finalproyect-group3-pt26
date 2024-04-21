import React, { useState } from 'react';
import axios from 'axios';
import { MdClose, MdChat } from 'react-icons/md'; // Importa los iconos de cierre y chat
import '../../styles/chatbot.css'; // Importa los estilos CSS

export const Chatbot = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleModal = () => setShowModal(!showModal);

  const chatbotUrl = process.env.BACKEND_URL + '/api/chatbot';

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    try {
      const response = await axios.post(chatbotUrl, { message: inputValue });
      setMessages([...messages, { text: response.data.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error al enviar mensaje al chatbot:', error);
    }
  };

  return (
    <div className={`chatbot-container ${showModal ? 'active' : ''}`}>
      <div className="chat-button" onClick={toggleModal}>
        <MdChat size={32} />
      </div>
      {showModal && (
        <div className="chat-modal">
          <div className="header">
            <h3>Chatbot</h3>
            <MdClose className="close-icon" onClick={toggleModal} />
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="chat-input"
            />
            <button className="send-button" onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};