
  //react state 
import { useState } from "react"

export default function Counter(){

      const [count, setCount] = useState(0)

      const handle = () => {
        
        const newCount = count + 1;

        setCount(newCount);


      }


      const handle2 = () => {

       const newCount2 = count + 100000;

       setCount(newCount2);


      }


      const handle3 = () => {
        const count3 = count + 3;

        setCount(count3);


      }


      const handle4 = () => {
         const count4 = count + 10;

         setCount(count4);
    
    
      }


      const handle5 = () => {

        const count5 = count + 20;

        setCount(count5);


      }


      const remove = () =>{

         const remove = count - 10

         setCount(remove);


      }
      

      return (

         <div style={{border: '2px solid pink'}}>
 
             <h3>counter: {count}  </h3>

             <button onClick={handle}>addCount</button>

             <button onClick={handle2}>zadur khela with react</button>

             <button onClick={handle3}>react2</button>

             <button onClick={handle4}>react4</button>

             <button onClick={handle5}>react5</button>

             <button onClick={remove}>Remove</button>


         </div>


      )


}

