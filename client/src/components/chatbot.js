import React, { useState } from 'react';
import axios from 'axios';
import styles from "./chat.module.css";
import tele from "../assets/telegram-logo-black-and-white.png"

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    try {
      console.log('Sending message:', message);

      const userMessage = { role: 'user', content: message };
      setChatHistory((prevChat) => [...prevChat, userMessage]);
      setMessage('');
      setIsTyping(true);

      const response = await axios.post(
        'http://localhost:5000/send-message',
        userMessage
      );

      const responseData = response.data.message;
      console.log('Server response:', responseData);

      setChatHistory((prevChat) => [...prevChat, { role: 'chatbot', content: responseData }]);
    } catch (error) {
      console.error('Error sending message:', error);
      if (error.response) {
        console.log('Error response data:', error.response.data.error);
      }
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWindow}>
        {chatHistory.map((chat, index) => (
          <div key={index} className={`${styles.message} ${chat.role === 'user' ? styles.userMessage : styles.chatbotMessage}`}>
            {chat.role === 'user' ? (
              <div>
                <span className={styles.userName}>user:</span> {chat.content}
              </div>
            ) : (
              <div>
                <span className={styles.botName}>Chatbot:</span> {chat.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <form
        style={{ display: "flex", flexDirection: "row", marginLeft: "200px", marginTop: "20px" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (message.trim() !== '') {
            sendMessage();
          } else {
            alert('Please enter something before sending.');
          }
        }}
      >
        <input
          className={styles.input}
          required
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <img
          src={tele}
          style={{ position: "fixed", bottom: "5px", right: "100px", width: "40px", height: "40px", cursor: "pointer" }}
          onClick={() => {
            if (message.trim() !== '') {
              sendMessage();
            } else {
              alert('Please enter something before sending.');
            }
          }}
          alt="Send"
        />
      </form>

      {isTyping && <div className={styles.typingIndicator}>Chatbot Typing...</div>}
    </div>
  );
};

export default ChatComponent;
