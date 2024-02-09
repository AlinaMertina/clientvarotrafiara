import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Autre from './Autre'; 
import Login from './Login';
import Detail from './Detail'; 
import Chat from './Chat'; 
import AccuilleAlogin from './systemedemessagerie/component/AccuilleAlogin';
import PageFavorie from './systemedemessagerie/component/PageFavorie';
import Messagecomposent from './systemedemessagerie/component/Messagecomposent';
import ViewAllConversation from './systemedemessagerie/component/ViewAllConversation';
import Historique from './systemedemessagerie/component/Historique';
import ListHistorique  from './systemedemessagerie/component/ListHistorique';
import Detaille from './systemedemessagerie/component/Detaille';
import Page from './components/chat/Page';
import Deconnexion from './Deconnexion';
import Detailleaccuille from './Listeannonce/Detailleaccuille';
import Hello from './Hello';

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/deconnexion" element={<Deconnexion />} />
        <Route path="/list" element={<Autre />} />
        <Route path="/SingIn" element={<Login />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/conversation/:id" element={<Chat />} />
        <Route path="/client" element={<AccuilleAlogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/favorie" element={<PageFavorie />} />
        {/* <Route path="/client/test" element={<Messagecomposent />} /> */}
        <Route path="/client/discution" element={<Page />} />
        <Route path="/notification" element={<ViewAllConversation />} />
        {/* <Route path="/historique" element={<Historique />} /> */}
        <Route path="/client/historique" element={<ListHistorique />} />
        <Route path="/detaille/:id" element={<Detaille />} />
        <Route path="/detailleaccuille/:id" element={<Detailleaccuille />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
