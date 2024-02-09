import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/chat.css';

const Recherche = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://varotrafiaraoccasion-production.up.railway.app/varotrafiaraback/v_info_client_chats')
      .then(response => {
        const responseData = response.data;

        if (responseData.error) {
          setError(responseData.error);
        } else {
          setMessages(responseData.data);
        }
      })
      .catch(error => console.error('Erreur lors de la récupération des données recherche', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMessages = messages.filter(msg => {
    const fullName = `${msg.nomclient} ${msg.prenomclient}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const renderMessages = () => {
    return filteredMessages.map((msg, index) => (
      <div key={index}>
        <strong>{msg.nomclient}: </strong>
        <span>{msg.prenomclient}</span>
      </div>
    ));
  };

  return (
    <div className="chat-container">
      <h1>Listes</h1>
      <div className="search-container">
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Rechercher par nom ou prénom..." />
      </div>
      <div className="messages">
        {renderMessages()}
      </div>
    </div>
  );
};

export default Recherche;