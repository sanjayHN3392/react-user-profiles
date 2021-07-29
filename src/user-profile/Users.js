import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import LoadingSpinner from '../common-components/LoadingSpinner';
import UserList from './UserList';
const Users = () => {

const [usersList,setUsers]=useState([])
const [isLoading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
        Axios.get("https://reqres.in/api/users?delay=3").then((response)=>{
            setUsers(response.data.data)
            setLoading(false)
            console.log("users",response.data.data)
            
        }).catch((err)=>{
            console.log("err")
        })
      

    }, [])

    return (
        <>
            
            {isLoading && <LoadingSpinner asOverlay/>}
        
            {!isLoading && <UserList items={usersList}/>}
        </>
    )
}
export default Users