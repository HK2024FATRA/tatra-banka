import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from './login/Login.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Auth0Provider
    domain="dev-b4fj8fgymor35h67.eu.auth0.com"
    clientId="b63VRmxvTmFLOGxCmznOtImm74AXxCxf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
              </Route>
              <Route path="/login" element={<Login/>}>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>
)
