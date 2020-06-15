import React from 'react';

// functional component
const UserDetails = (props) => {
    return(
        <p>{props.homerInfo.name}</p>
    )
}


// class component
// class UserDetails extends Component {
//     render() {
//         console.log(this.props)
//         return(
//             <p>{this.props.homerInfo.name}</p>
//         )
//     }
// }

export default UserDetails;