import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

  function Const({messages}) {
    console.log(messages);
     console.log("vv");
     const [parsedMessages, setParsedMessages] = useState([]);
     useEffect(() => {
          try {
            const messagesArray = JSON.parse(messages);
            setParsedMessages(messagesArray);
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        }, [messages]);

     if (!Array.isArray(parsedMessages)) {
          console.error("Error: 'messages' is not an array");
          return null; // ou renvoyez un message d'erreur ou un composant vide
     }
    return (
            <div class="row">
                <div class="col-lg-6">
                    {/* <Link href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                    </Link> */}
                    <div class="chat-about">
                        <h6 class="m-b-0">Aiden Chavez</h6>
                        <small>Last seen: 2 hours ago</small>
                    </div>
                </div>
                <div class="col-lg-6 hidden-sm text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                </div>
                <div className="chat-history">
                <ul className="m-b-0">
                {messages.map((message, index) => (
                    <li key={index} className={`clearfix ${message.sender === 'other' ? 'float-right' : 'float-left'}`}>
                    {message.sender === 'other' ? (
                        <div className="message-data text-right">
                        <span className="message-data-time">{message.time}</span>
                        </div>
                    ) : (
                        <div className="message-data text-left">
                        <span className="message-data-time">{message.time}</span>
                        </div>
                    )}
                    <div className={`message ${message.sender === 'other' ? 'other-message' : 'my-message'}`}>
                        {message.content}
                    </div>
                    </li>
                ))}
                </ul>
        </div>
            <div class="chat-message clearfix">
            <div class="input-group mb-0">

                <input type="text" class="form-control" placeholder="Enter text here..."/>   
                <div class="input-group-prepend">
                    <span class="btn btn-outline-secondary"><FontAwesomeIcon icon={faPaperPlane} /></span>
                </div>                                 
            </div>
            </div>
        </div>
        );
    }
  
  export default Const;
  
