import './UserItem.css'
import { Link } from 'react-router-dom'
const UserItem = props => {

    const userId=`/user/${props.userId}`
    return (
        <div className="card">
            <Link to={userId} style={{ textDecoration: 'none' }} >
                
                <img className="image1" src={props.avatar} alt="Avatar"></img>
                <p className="firstname">{props.firstName}</p>
                <p className="lastname">{props.lastName}</p>

            </Link>
        </div>

    )
}

export default UserItem