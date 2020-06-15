import React from 'react';
import Avatar from './Avatar';

const UsersList = ({ userInfo }) => {
    return(
        userInfo.map(user => <Avatar 
            key={user.firstName}
            {...user} />)
    )
}

export default UsersList;