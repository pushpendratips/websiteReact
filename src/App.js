import "./App.css"
import React from 'react';
import Home from './component/Hero/Home';
import Header from "./component/Head/Header";
import Features from "./component/Features/Features";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
    <Header/>
   <Home/>
   <Features/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App