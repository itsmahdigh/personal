import logo from './logo.svg';
import './App.css';
import Navbar from './navBar/Navbar';
import LandingPage from './Pages/landingPage';
import picture from '../src/photo_2023-08-02_13-23-22.jpg'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'

function App() {
  return (
    <>
      <LandingPage/>

    </>
  );
}

export default App;
