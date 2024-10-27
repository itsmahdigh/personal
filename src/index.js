import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ServiceWorker from './serviceWorkerRegistration';
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import AOS from 'aos';
import 'aos/dist/aos.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//
root.render(
  <React.StrictMode>
    <div className='h-full w-[90%] m-auto bg-blue-700 rounded-lg mt-4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border '>
    <App />
    </div>
  </React.StrictMode>
);
ServiceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
