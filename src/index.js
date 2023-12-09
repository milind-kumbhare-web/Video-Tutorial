import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import reportWebVitals from './reportWebVitals';
import { FakestoreComponent } from './components/fakestore';
import './components/fakestore.css'
import { LoginForm } from './components/login.jsx';
import { City } from './components/democlass.jsx';
import { HomeComponent } from './components/customize-component/home-component.jsx';
import { Home0Component } from './components/customize-component/hom1-copmponent.jsx';
import { FormikForm } from './components/formic-Form.jsx';
import { TutorialComponent } from './components/tutorial-component.jsx';
import { TutorialIndex } from './components/Tutorial/tutorial-index.jsx';
import { TutorialManage } from './components/Tutorial/tutorial-manage.jsx';
import { ShoppingIndex } from './new/shoppingindex.jsx';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
  <ShoppingIndex/>
  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
