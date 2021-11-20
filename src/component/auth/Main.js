import { Link } from 'gatsby';
import React from 'react'
import { auth } from '../../Firebase/firebase';

const Mainpage = () => {
  
    // Signout function
    const logout = () => {
        auth.signOut();
    }   
    return (
        <div className="min-vh-100">
            <center>
            <div className="display-4 mb-3">Profile</div>
            Name : 
            {
                // auth.currentUser.displayName
            }
            <br/>
            <Link to="/">
                <button className="btn border-0 borderRounded icon text-light bg-dark px-3 mt-4" onClick={logout}>
                    Logout
                </button>
            </Link>
            </center>
        </div>
    );
}
  
export default Mainpage;
