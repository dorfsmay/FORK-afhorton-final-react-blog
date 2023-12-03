import React, { useContext } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { UserContext } from '../UserContext';
import { FirebaseError } from 'firebase/app';

function NavBar() {
  const user = useContext(UserContext)

  const handleLogout = () => {
    FirebaseError.auth().signOut().then(
      () => {
        console.log("Signed out successfully");
      })
      .catch(
        (error) => {
          console.log("Sign out not successful: ", error);
        }
      );
  }

    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">Ulix</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="#">Home <span className="sr-only">(current)</span></NavLink>
      <NavLink className="nav-item nav-link" to="#">Features</NavLink>
      <NavLink className="nav-item nav-link" to="#">Pricing</NavLink>
      { user ?
        <NavLink className="nav-item nav-link" to="./pages/myPosts">Hello, {user.username}</NavLink>
      : null
      }
      { user ? (
        <NavLink className="nav-item nav-link" to="#">Logout</NavLink> )
      : (
        <NavLink className="nav-item nav-link" to="#">Login</NavLink>
      )
      }
    </div>
  </div>
</nav>
        </div>
    )
}