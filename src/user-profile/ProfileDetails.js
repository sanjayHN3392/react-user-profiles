
import './ProfileDetails.css'
const ProfileDetails = props => {

    return <div className="profileDetails">

        <img className="imagetag" src={props.details.avatar} alt="Avatar"></img>

        <div >
            <h2>{props.details.first_name}</h2>
            <h2>{props.details.last_name}</h2>
            <h2 className="emailtext">{props.details.email}</h2>
        </div>
    </div>

}

export default ProfileDetails