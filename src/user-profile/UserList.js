import UserItem from "./UserItem"
import { useCallback, useState } from 'react'
import './UserList.css'
import { CSSTransition } from 'react-transition-group';

const UserList = props => {


    const [userList, setUserList] = useState(props.items)

    const [isActive,setTransition]=useState(true)

    const firstNameSortHandle = useCallback(() => {
        const firstNameSort = [...userList].sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
        setUserList(firstNameSort)
        console.log("firstname", userList)

    }, [userList])

    const lastNameSortHandle = useCallback(() => {
        const lastNameSort = [...userList].sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
        setUserList(lastNameSort)
        console.log("lastname", userList)
    }, [userList])

    const sortHandle = useCallback((value) => {
        if (value === "firstName") {
            firstNameSortHandle()
            // setTransition(!isActive)
        } else if (value === "lastName") {
            lastNameSortHandle()
            // setTransition(!isActive)
        } else if (value === "None") {
            setUserList(props.items)
          
        }
        setTransition(!isActive)
    }, [lastNameSortHandle, firstNameSortHandle, props.items,isActive])

    return (

        <>
            <div className="container">

                <div className="dropDownContainer">
                    <select className="dropDown" onChange={(e) => {
                        sortHandle(e.target.value)
                    }}>
                        <option value="None">None</option>
                        <option value="firstName" >First Name</option>
                        <option value="lastName" >Last Name</option>
                    </select>
                </div>
               <CSSTransition
               classNames="gridList"
               in={isActive}
               timeout={300}
               >
                <div className="users-list">

                    {userList?.map(user => {
                        return <UserItem
                            key={user.id}
                            userId={user.id}
                            avatar={user.avatar}
                            firstName={user.first_name}
                            lastName={user.last_name}
                        />
                    })}
                </div>
                </CSSTransition>
            </div>
        </>

    )


}

export default UserList