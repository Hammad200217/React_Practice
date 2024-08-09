import './App.css'
import Products from './Products.jsx';
import Tittle from './Tittle.jsx';
import React from 'react'
function App() {
   // array as props
   let option = ["Hi i am Hammad", "I am a developer", "I am a student"];
   let option2 = {a:"Hammad", b:"Ali", c:"Awan"};
return (
  <div>
<Products title="Mobile" price={30000} features={option} features2={option2}/>
<Products title="Laptop" price={200000} />
<Products title="Pen" price={10}/>
 </div>
);
}

export default App
