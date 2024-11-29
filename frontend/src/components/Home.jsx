import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container vh-100 d-flex align-items-center justify-content-around ">

      <header className="text-center mb-5 w-50">
        <h1 className="display-4 fw-bold" style={{color:'black'}}>Your Mental Health Companion</h1>
        <p  style={{color:'black'}}>
          A Mental Health Chatbot is an AI-powered application designed to support users in managing their mental well-being by offering empathetic, non-judgmental, and easily accessible conversations.
        </p>
        <p style={{color:'black'}}>
          This chatbot can help users cope with stress, anxiety, depression, or other emotional challenges by providing a safe space to share feelings, offering helpful resources, and suggesting coping strategies.
        </p>
      </header>

      <div style={{marginRight:'20px'}}>
      <iframe
          src="https://www.chatbase.co/chatbot-iframe/9jC66DN-PF5YBKak5WX2O"
          width="600"
          height="800"
          style={{ border: 'none',marginRight:'20px', borderRadius: '8px' }}
        ></iframe>
      </div>
      
    </div>
  );
}

export default Home;
