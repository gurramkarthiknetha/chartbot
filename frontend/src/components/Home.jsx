import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container  d-flex  justify-content-around ">

      <header className="mb-5 w-50 ">
          <div>
              <h1 className="display-4 fw-bold" style={{ color: 'black' }}>
                  Your Mental Health Companion
              </h1>
              <p style={{ color: 'black' }} className="text-justify mt-3">
                  A Mental Health Chatbot is an AI-powered application designed to support users in managing their mental well-being by offering empathetic, non-judgmental, and easily accessible conversations.
              </p>
              <p style={{ color: 'black' }} className="text-justify">
                  This chatbot can help users cope with stress, anxiety, depression, or other emotional challenges by providing a safe space to share feelings, offering helpful resources, and suggesting coping strategies.
              </p>
         </div>

        <div style={{overflow:"hidden"}}>
            <img src="https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5442.jpg?t=st=1732906694~exp=1732910294~hmac=58076192404938ccb6b8ef053ff25abd37fee793268a9dd0698d30892e49c723&w=1480" width="700px" alt="" className='bot-image' />
        </div>
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
