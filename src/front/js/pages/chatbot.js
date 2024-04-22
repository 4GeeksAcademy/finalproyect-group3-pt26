import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { MdClose, MdChat } from 'react-icons/md'; 
import "../../styles/chatbot.css"; 

export const Chatbot = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const toggleModal = () => setShowModal(!showModal);

  const chatbotUrl = process.env.BACKEND_URL + '/api/chatbot';

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;
  
    // Agregar el mensaje del usuario al historial de mensajes
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, sender: 'user' },
    ]);
    setInputValue('');
  
    try {
      const response = await axios.post(chatbotUrl, { message: inputValue });
      // Agregar la respuesta del bot al historial de mensajes
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.response, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error al enviar mensaje al chatbot:', error);
    }
  }

  const clearMessages = () => {
    setMessages([]);
  };

  useEffect(() => {
    // Scroll automático hacia abajo cuando cambian los mensajes
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`chatbot-container ${showModal ? 'active' : ''}`}>
      <div className="chat-button" onClick={toggleModal}>
        <MdChat size={32} />
      </div>
      {showModal && (
        <div className="chat-modal">
          <div className="header">
            <h3>Chatbot</h3>
            <MdClose className="close-icon" onClick={() => { toggleModal(); clearMessages(); }} />
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
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