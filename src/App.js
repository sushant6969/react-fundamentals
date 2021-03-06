import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponentI, { FunctionComponentII } from './function_compoment';
import ClassComponent from './class_component';
import StateComponent from './class_component/state_component';
import FStateComponent from './function_compoment/f_state_component';
import SimpleButtonComponent from './SimpleButtonComponent';
function App() {
  return (
    <div className='App'>
      {
        // Function component 1 ending
        // Multiline with children
      }
      <FunctionComponentI name='Ujan'>
        <div></div>
      </FunctionComponentI>
      {
        // Single Line
      }
      <FunctionComponentI />
      {
        // Function component 1 ending
        // Multiline with children
      }
      <FunctionComponentII name='Melvin'>
        <div></div>
      </FunctionComponentII>
      {
        // Single Line
      }
      <FunctionComponentII />
      {
        // Class component
      }
      <ClassComponent name='Ankit Nakarmi' />
      Class State
      {
        //React State
      }
      <StateComponent />
      Function State
      {
        //Function State
      }
      <FStateComponent />
      {
        // Simple Button Component
      }
      <SimpleButtonComponent>Download</SimpleButtonComponent>
    </div>
  );
}

export default App;
