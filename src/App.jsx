
  

 //handler react

import './App.css'
import Counter from './counter'
import counter from './counter'
import User from './user'


function App() {
  
   function handle(){

    alert('button clicked')


   }

   const handle2 = () => {

    alert('button 2')

   }

   const addNum = (num) => {
    alert(num + 5);

   }

   function pop(){
      alert('valo kore react shekh apon');

   }

   function pop2(){

     alert('make good project with react')


   }


   function pop3(){
     
      alert('make super site with react.js')

   }

   const num2 = (num2) =>{

    alert(num2 * 10)

   }

  return (
    <>
       






       <User></User>

       <Counter></Counter>

      <h1> Apon With React </h1>
      <button onClick={handle}>click </button>

      <button onClick={handle2}>click 2</button>

      <button onClick={() => addNum(3)}>click 3</button>

      <button onClick={pop}>click 4</button>

      <button onClick={pop2}>clicked 5</button>

      <button onClick={pop3}>super site</button>

      <button onClick={() => num2(5)}>arrow button</button>

      
    </>
  )
}

export default App
