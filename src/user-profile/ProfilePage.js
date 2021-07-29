import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom'
import Axios from 'axios'
import LoadingSpinner from '../common-components/LoadingSpinner';
import ProfileDetails from './ProfileDetails';
import './ProfilePage.css'




const ProfilePage=()=>{


const [profileData,setProfileData]=useState({})
const [isLoading, setLoading] = useState(false)
const profileId=useParams().userId;

useEffect(() => {
    setLoading(true)
    console.log("iddd",profileId)
      Axios.get(`https://reqres.in/api/users/${profileId}`).then((response)=>{
          setProfileData(response.data.data)
          setLoading(false)
           
      }).catch((err)=>{
          console.log("err")
      })
    

  }, [profileId])

return (
    <>
  
    {isLoading && <LoadingSpinner asOverlay/>}
 
    {!isLoading && 
    
    <ProfileDetails details={profileData}/>
  
    }
      
    
    </>
   
)
}

export default ProfilePage