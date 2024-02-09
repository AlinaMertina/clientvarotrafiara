import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importations des fichiers CSS
import './front/vendor/glightbox/css/glightbox.min.css';
import './front/vendor/nouislider/nouislider.min.css';
import './front/vendor/choices.js/public/assets/styles/choices.min.css';
import './front/vendor/swiper/swiper-bundle.min.css';
import './front/css/style.default.css';
import './front/css/custom.css';
import './front/chat/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Headerclient from './systemedemessagerie/component/Headerclient.jsx';
import UserConversation from './systemedemessagerie/component/UserConversation';
const Chat = (props) => {
  const { id } = useParams();
  console.log(" id client : "+id)
  console.log(" id client : "+localStorage.getItem("idclient"))
  const [messages, setMessages] = useState([]);
  const [newMessageContent, setNewMessageContent] = useState('');
  const [error, setError] = useState(null);
  const [infofrom, setInfofrom] = useState(null);
  const [messageuser, setMessageuser] = useState([]);
  function getUser(id){
    for(let i=0;i<messages1.length;i++){
      console.log("message "+messages1[id].idclient)
        if(messages1[i].idclient==id){
          return messages1[i];
        }
    }
    return null;
  }
  useEffect(async () => {
    await fetchMessages();
    const renderMessages = () => {
      const filteredMessages = messages.filter(msg => msg.to1 == JSON.parse(localStorage.getItem("idclient")) && msg.from2 == id);
      setMessageuser(filteredMessages);
      console.log("console log");
      console.log(messageuser);
    };
    renderMessages();
     await axios.get(localStorage.getItem("mapping")+'v_info_client_chats')
    .then(response => {
      const responseData = response.data;

      if (responseData.error) {
        setError1(responseData.error);
      } else {
          setMessages1(responseData.data);
        console.log("message jjjjj ");
        setInfofrom(getUser(id))
      }
    })
    .catch(error => console.error('Erreur lors de la récupération des données recherche', error));
    
    
  }, []);

  const fetchMessages = async () => {
    axios.get(localStorage.getItem("mapping")+'messages')
      .then(response => {
        const responseData = response.data;

        if (responseData.error) {
          setError(responseData.error);
        } else {
          setMessages(responseData.data);
          console.log(responseData.data);
        }
      })
      .catch(error => console.error('Erreur lors de la récupération des messages', error));
    console.log("valueee   dd dhddhdbhdbb q222222");
  };

  const sendMessage = async () => {
    try {
      const response = await fetch(localStorage.getItem("mapping")+`messages/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Ajout du token dans les headers
        },
        body: JSON.stringify({
          to1: JSON.parse(localStorage.getItem("idclient")),
          from2: parseInt(id) ,
          content: newMessageContent,
          datesend: new Date().toISOString(),
          datelecture:null // Utilise la date actuelle au format ISO8601
        }),
      });
      console.log("valueee ebbevfevuevfe")
      console.log(JSON.stringify({
        to1: JSON.parse(localStorage.getItem("idclient")),
        from2:parseInt(id) ,
        content: newMessageContent,
        datesend: new Date().toISOString(), // Utilise la date actuelle au format ISO8601
      }))
      if (!response.ok) {
        console.error('Erreur lors de l\'envoi du message');
        throw new Error('Erreur lors de l\'envoi du message');
      }
      // Actualiser les messages après l'envoi réussi
      fetchMessages();
      // Effacer le contenu du message après l'envoi
      setNewMessageContent('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
    }
  };

  
  const [messages1, setMessages1] = useState([]);
  const [error1, setError1] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMessages1 = messages1.filter(msg => {
    const fullName = `${msg.nomclient} ${msg.prenomclient}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });
  function formatReadableDate(dateString) {
    // Convertir la chaîne de date en objet Date
    const date = new Date(dateString);

    // Options de formatage de la date
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    // Formater la date en utilisant les options
    return date.toLocaleDateString('fr-FR', options);
}


 
  return (
    // <>
    // <Headerclient></Headerclient>
    // <div className="chat-container">
    //   <h1>Chat</h1>
    //   <div className="messages">
    //     {
    //       messageuser.map((msg, index) => (
    //         <div key={index} className={msg.sender === JSON.parse(localStorage.getItem("idclient")) ? 'message-right' : 'message-left'}>
    //           <strong>Message : {msg.content}: </strong>
    //           <span>Date d'envoi : {msg.datesend}</span>
    //         </div>
    //       ))
    //     }
    //   </div>
    //   <div className="input-container">
    //     <input 
    //       type="text"
    //       value={newMessageContent}
    //       onChange={(e) => setNewMessageContent(e.target.value)}
    //     />
    //     <button onClick={sendMessage}>Envoyer</button>
    //   </div>
    // </div>
    // </>
    <>
    <Headerclient></Headerclient>
   <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
   <div className="container hd_message" style={{ height: "100vh" }}>
       <div class="row clearfix">
           <div class="col-lg-12">
               <div class="card chat-app">
                   <div id="plist" class="people-list">
                       <div class="input-group">
                           <div class="input-group-prepend">
                               <span class="input-group-text"><i class="fa fa-search"></i></span>
                           </div>
                           <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Rechercher par nom ou prénom..." />
                       </div>
                       <ul class="list-unstyled chat-list mt-2 mb-0">
                            {
                               filteredMessages1 !== null &&
                               filteredMessages1.map((user, index) => (
                                   <UserConversation myclass={user} key={index}></UserConversation>
                                ))
                            }

                       </ul>
                   </div>
                   <div class="chat">
                       <div class="chat-header clearfix">
                           <div class="row">
                           <div className="col-lg-6">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                            </a>
                            <div className="chat-about">
                                {messages1 !== null && messages1.map((message, index) => (
                                    <div key={index}>
                                        {message.idclient == id && (
                                            <div>
                                                <h6 className="m-b-0">{message.nomclient} {message.prenomclient}</h6>
                                                <small>{message.datededeconnexion}</small>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                               {/* <div class="col-lg-6 hidden-sm text-right">
                                   <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                                   <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                                   <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                                   <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                               </div> */}
                           </div>
                       </div>
                       <div class="chat-history" style={{ maxHeight: "600px", overflowY: "auto" }} >
                       <ul className="messages">
                          {messages.map((msg, index) => {
                            if ( (msg.to1 == JSON.parse(localStorage.getItem("idclient")) && msg.from2 == id)  || (msg.to1 == id && msg.from2 == JSON.parse(localStorage.getItem("idclient")) ) ) {
                              return (
                                
                                <li key={index} className={msg.from2 == parseInt(localStorage.getItem("idclient")) ? 'clearfix message-right' : 'clearfix message-left'}>

                                  <div  className={msg.from2 == parseInt(localStorage.getItem("idclient"))? 'message-data' : 'message-data text-right'}>
                                        <span class="message-data-time">{ formatReadableDate(msg.datesend) }</span>
                                        <img src={msg.from2 == parseInt(localStorage.getItem("idclient"))? 'https://bootdey.com/img/Content/avatar/avatar2.png' : 'https://bootdey.com/img/Content/avatar/avatar7.png'}  alt="avatar"/>
                                    </div>
                                    <div className={msg.from2 == parseInt(localStorage.getItem("idclient"))? 'message my-message' : 'message other-message float-right'}>{msg.content} </div>


                                    
                                </li>
                              );
                            }
                            return null; // Ajout d'un return null pour le cas où la condition n'est pas vérifiée
                          })}
                        </ul>


                       </div>
                       <div class="chat-message clearfix">
                       <div class="form-group row">
                          <label class="col-sm-3 col-form-label">
                                <button class="input-group-text"  onClick={sendMessage}>
                                 <i class="fa fa-send"></i>
                                </button>
                          </label>
                          <div class="col-sm-9">
                            <input type="text"value={newMessageContent}
                                  onChange={(e) => setNewMessageContent(e.target.value)} class="form-control" />
                          </div>
                        </div>
                        
                          
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </div>
   </>
    
  );
};

export default Chat;
