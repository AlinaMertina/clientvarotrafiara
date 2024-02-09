
import React, { useState,useEffect} from 'react';
import { Link, useAsyncError } from 'react-router-dom';

// Importations des fichiers CSS
import './../../front/vendor/glightbox/css/glightbox.min.css';
import './../../front/vendor/nouislider/nouislider.min.css';
import './../../front/vendor/choices.js/public/assets/styles/choices.min.css';
import './../../front/vendor/swiper/swiper-bundle.min.css';
import './../../front/css/style.default.css';
import './../../front/css/custom.css';

import './../../css/styles.css';
import './../../css/stylenotif.css';
import './../../css/stylemessage.css';
import './../../boostrap/styles.css';
import Headerclient from './Headerclient';
import UserConversation from './UserConversation';



function Messagecomposent() {
    const [message,setMessage] = useState(null);
    const  sendmessage = async ()=>{
    //    const idclient={
    //     id:parseFloat(localStorage.getItem("idclient"))
    //    }
    const idclient={
        id:1
    }
    console.log(localStorage.getItem('mappingnode')+"getallmessages")
        try {
            const response = await fetch(localStorage.getItem('mappingnode')+"getallmessages/"+1,{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json' // Type de contenu de la requête
              }
            });
            if (!response.ok) {
              throw new Error('Problème lors de la récupération des données');
            }
            const data = await response.json();
            console.log(data);
            setMessage(data);
          } catch (error) {
            console.error('Erreur:', error);
            throw error;
        }
    }
    useEffect(() => {
       sendmessage();
        
      }, []);
  return (
    <>
     <Headerclient></Headerclient>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div class="container hd_message">
        <div class="row clearfix">
            <div class="col-lg-12">
                <div class="card chat-app">
                    <div id="plist" class="people-list">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-search"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search..."/>
                        </div>
                        <ul class="list-unstyled chat-list mt-2 mb-0">
                            <UserConversation></UserConversation>
                            <UserConversation></UserConversation>
                            <UserConversation></UserConversation>
                            <UserConversation></UserConversation>
                            <UserConversation></UserConversation>
                            <UserConversation></UserConversation>
                        </ul>
                    </div>
                    <div class="chat">
                        <div class="chat-header clearfix">
                            <div class="row">
                                <div class="col-lg-6">
                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
                                    </a>
                                    <div class="chat-about">
                                        <h6 class="m-b-0">Aiden Chavez</h6>
                                        <small>Last seen: 2 hours ago</small>
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
                        <div class="chat-history">
                            <ul class="m-b-0">
                                <li class="clearfix">
                                    <div class="message-data text-right">
                                        <span class="message-data-time">10:10 AM, Today</span>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"/>
                                    </div>
                                    <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                </li>
                                <li class="clearfix">
                                    <div class="message-data">
                                        <span class="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div class="message my-message">Are we meeting today?</div>                                    
                                </li>                               
                                <li class="clearfix">
                                    <div class="message-data">
                                        <span class="message-data-time">10:15 AM, Today</span>
                                    </div>
                                    <div class="message my-message">Project has been already finished and I have results to show you.</div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-message clearfix">
                            <div class="input-group mb-0">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-send"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="Enter text here..."/>                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Messagecomposent;