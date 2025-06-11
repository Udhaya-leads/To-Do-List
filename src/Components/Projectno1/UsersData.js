
import React, { useEffect, useState } from 'react'
import { Button, EditableText,InputGroup, Toaster} from '@blueprintjs/core';

const AppToaster= Toaster.create({
         position:'top'
})

const UserData = () => {

    const[users , setUsers]= useState([]);
           const[newname , setNewname]= useState("")
           const[newemail , setNewemail]= useState("")
           const[newwebsite , setNewwebsite]= useState("")

        
           useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((resoponse) => resoponse.json())
            .then((json)=> setUsers(json))
           },[]);


           function addUser(){
             const name = newname.trim();
             const email = newemail.trim();
             const website = newwebsite.trim();
             
             if(name && email && website){
              
                  fetch("https://jsonplaceholder.typicode.com/users", 
                  {
                    method:"POST", 
                    body: JSON.stringify({
                      name,
                      email,
                      website
                    }),
                    headers:{
                      "Content-Type": "application/json; charset= UTF-8"
                    }
                  }
                ).then((response)=> response.json())
                 .then(data => {
                  setUsers([...users, data]);

                  AppToaster.show({
                    message:"User added Successfully",
                    intent:'success',
                    timeout: 3000

                  })

                  setNewname("");
                  setNewemail("");
                  setNewwebsite("");

                })
             }
    
            }


            function onChangehandler(id, key, value){
              setUsers((users)=> {
                return users.map((user)=> {
                  return user.id === id ? {...user, [key]: value} : user;
                })
              })

            }

            function updateUser (id){
              const user= users.find((user) => user.id === id);

              fetch(`https://jsonplaceholder.typicode.com/users/${id}`, 
                  {
                    method:"PUT", 
                    body: JSON.stringify(user),
                    headers:{
                      "Content-Type": "application/json; charset= UTF-8"
                    }
                  }
                ).then((response)=> response.json())
                 .then(data => {
              
                  AppToaster.show({
                    message:"User Updated Successfully",
                    intent:'success',
                    timeout: 3000

                  })
                })
            }
 

            function DeleteUser(id){

              fetch(`https://jsonplaceholder.typicode.com/users/${id}`, 
                  {

                    method:"Delete", 
      
                  }
                ).then((response)=> response.json())
                 .then(data => {
                
                  setUsers((users)=> {
                      return users.filter(user => user.id !== id)
                  } )

                  AppToaster.show({
                    message:"User Deleted Successfully",
                    intent:'Danger',
                    timeout: 3000

                  })
                })

            }

   return( 
  <div className='App'>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Action</th>
        </thead>

        <tbody>
        {users.map(user =>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td><EditableText onChange={ value => onChangehandler(user.id, 'name', value)} value={user.name}/></td>
            <td><EditableText onChange={ value => onChangehandler(user.id, 'email' , value)} value={user.email}/></td>
            <td><EditableText onChange={ value=>  onChangehandler(user.id, 'website', value)} value={user.website}/></td>
            <td>
              <Button intent='primary' onClick={()=> updateUser(user.id)}>Update</Button>
              &nbsp;
              <Button intent='danger' onClick={()=> DeleteUser(user.id)}>Delete</Button>
            </td>
          </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <InputGroup
               value={newname}
               onChange={(e)=> setNewname(e.target.value)}
               placeholder='Enter Name...'
               />
            </td>

            <td>
              <InputGroup
               value={newemail}
               onChange={(e)=> setNewemail(e.target.value)}
               placeholder='Enter Email...'
              />
            </td>

            <td>
              <InputGroup
               value={newwebsite}
               onChange={(e)=> setNewwebsite(e.target.value)}
               placeholder='Enter Website...'
              />
            </td>
          
          <Button intent='success' onClick={addUser}>Add User</Button>
          </tr>
        </tfoot>
      </table>
  </div>
     
  )

}

export default UserData;