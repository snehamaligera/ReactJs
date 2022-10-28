import React from 'react';
import logo from './logo.svg';
import './App.css';
import pic1 from './pic1.png';
import ColorComponent from './StyleBinding';

let C2 = () => {return (<h1> Welcome to Kpmg </h1>)}
let C1=() => {return (<img src={pic1}/>)}
let C3=() => {return (<h2>@Copyrights Kpmg</h2>)}
function App() {
  return (
    <>
    <br/>
    <C1/>
    {/* <br/> */}
    <C2/>

      <ColorComponent/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <C3/>

    </>
    
  );
}

export default App;
