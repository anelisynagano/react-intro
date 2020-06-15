import React from 'react';
import userInfo from './userInfo';
import UsersList from './components/UsersList';

const App = () => {
  return(
    <>
      {/* <Navbar /> */}

      
      <UsersList userInfo={userInfo} />

      {/* <Footer /> */}
    </>
  )
}

export default App;