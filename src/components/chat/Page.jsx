import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Infouser from './Infouser';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { PersonFill, PersonBadgeFill } from 'react-bootstrap-icons';
// import { differenceInDays } from 'date-fns';
import Headerclient from '../../systemedemessagerie/component/Headerclient.jsx';
// import jsonData from './data.json';

  function Page({Cont}) {

  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get(localStorage.getItem("mapping")+'v_info_client_chats')
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

      // useEffect(() => {
      //   Initialisation();
      // }, []);
    // const [searchTerm, setSearchTerm] = useState('');

    // const filteredUsers = userList.filter(user =>
    //     user.nomclient.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    
  
 
    return (
<>
<Headerclient></Headerclient>

<div className="chat-container" style={{ marginTop: "5%" }}>
      <h1>Listes</h1>
      <div className="search-container">
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Rechercher par nom ou prénom..." />
      </div>
</div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
        <div class="container ht_content max-height-500 overflow-y-auto">
            <div class="row">
                <div class="col-lg-9 right">

                    <div class="box shadow-sm rounded bg-white mb-3">
                        <div class="box-body p-0">
                            {
                               filteredMessages !== null &&
                               filteredMessages.map((user, index) => (
                                   <Infouser myclass={user}></Infouser>
                                ))
                            }
                            

                        </div>
                    </div>

                </div>
            </div>
        </div>
</>
        


            // <div className="card chat-app">

            //     <div id="plist" className="people-list">
            //         <div className="input-group">
            //             <div className="input-group-prepend">
            //                 <span type="submit" className="input-group-text" > <FontAwesomeIcon icon={faSearch} /></span>
            //             </div>
            //             <input
            //             type="text"
            //             className="form-control"
            //             placeholder="Search..."
            //             value={searchTerm}
            //             onChange={(e) => setSearchTerm(e.target.value)}
            //         />
            //         </div>
            //         <ul className="list-unstyled chat-list mt-2 mb-0">
            //         {filteredUsers.map(user => (
            //             // <Infouser myclass={user}></Infouser>
            //             <li key={user.id_utilisateur} className="clearfix active">
            //                 {user.nomgenre === "Femme" ? (
            //                     <div className="dropdown-list-image mr-3">
            //                         <PersonFill color="blue" size={30} />
            //                     </div>
            //                     ) : (
            //                         <div className="dropdown-list-image mr-3">
            //                             <PersonBadgeFill color="pink" size={30} />
            //                         </div>
            //                     )}
            //                     <div class="font-weight-bold mr-3">
            //                         <div class="mb-2"><span class="font-weight-normal">  {user.nomclient}  {user.prenomclient} </span> </div>
            //                         <div class="mb-2"><span class="font-weight-normal">  {user.nomlocalisation}  {user.tel} </span> </div>
            //                         <a href={"/detaille/" + user.idclient} ><button type="button" class="btn btn-outline-success btn-sm" >Conversation</button></a>
            //                     </div>

            //                     <span class="ml-auto mb-auto">
            //                         <span class="font-weight-normal"> Nombre de jour de deconnexion </span>
            //                         {
            //                             user.datededeconnexion?(
            //                                 <div class="text-right text-muted pt-1">{differenceInDays(currentDate, user.datededeconnexion)}  </div>
            //                             ):null
            //                         }
                                
            //                     </span>
            //             </li>
            //         ))}
            //     </ul>
            //     </div>

            //     <div className="chat">
            //         <Cont messages = {messages}/>
            //     </div>
            // </div>
    );
  }
export default Page;

