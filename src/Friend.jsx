

 export default function Friend({users}){
     
      const {name, email} = users;

      return (

          <div>

             <h3>name: {name} </h3>

             <h3>email: {email} </h3>

          </div>

      )
 
  }