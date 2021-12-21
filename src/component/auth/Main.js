import React from 'react'
import { Link } from 'gatsby';
import { auth } from '../../Firebase/firebase';
import { db } from '../../Firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';

const Mainpage = () => {
    const [user, setGetData] = useState()
    const {uid} = auth.currentUser
    
    const getUser = async () => {
        try {
          const documentSnapshot = await db
            .collection('user')
            .doc(uid)
            .get();
    
          const userData = documentSnapshot.data();
          setGetData(userData);
        } catch {
          alert("something went wrong!!")
        }
      };

      useEffect(() => {
        getUser();
      }, []);

    const testsomthing = () =>{
        db.collection("user").get().then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
            querySnapshot.forEach(documentSnapshot => {   
                console.log('User ID: ', documentSnapshot.id, documentSnapshot.data(), uid);
            })
        })
    }

    const logout = () => {
        auth.signOut();
    }   
    return (
        <div className="min-vh-100">
            <center>
            <div className="display-4 mb-3">Profile</div>
            Name : {
                user && user?.Name
            }
            <br/>
            <Link to="/">
                <button className="btn border-0 borderRounded icon text-light bg-dark px-3 mt-4" onClick={logout}>
                    Logout
                </button>
            </Link>
            <button className="btn border-0 borderRounded icon text-light bg-dark px-3 mt-4" onClick={testsomthing}>
                test
            </button>
            </center>
        </div>
    );
}
  
export default Mainpage;
