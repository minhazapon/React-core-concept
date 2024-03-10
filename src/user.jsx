import { useEffect } from "react"
import { useState } from "react"
import Friend from "./Friend"

 export default function User(){
   
  
    const [users, setUser] = useState([])
     
      useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))

      }, [])

     return (

         <div>
          
           <h3>user: {users.length} </h3>
           {

             users.map(users => <Friend users={users}>

                

             </Friend>)


           }
         
         </div>


     )

   }