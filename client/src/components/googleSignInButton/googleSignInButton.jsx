// import axios from "axios";
import React from "react";
import { Google } from "react-bootstrap-icons";
// import { GoogleLogin } from 'react-google-login';

const GoogleSignInButton = () => {

    const googleSignInHandler = async () => {
        window.open(`${process.env.REACT_APP_SERVER_URL}/website_ecommerce/app/api/google/callback`, "_self")
    }

    // const handleGoogleSignIn = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:5544/auth/google/callback', { withCredentials: true, headers : {"Content-Type":"application/json"} });
    //       if (response.data.success) {
    //         console.log('User signed in:', response.data.user);
    //         // Handle successful sign-in, update state, etc.
    //       } else {
    //         console.error('Sign-in failed:', response.data.message);
    //       }
    //     } catch (error) {
    //       console.error('Error during sign-in:', error);
    //     }
    //   };

    return (
        //   <GoogleLogin 
        //   clientId="990558428292-d830m6u0i2iq9ufnku2bmuigtg6apsri.apps.googleusercontent.com"
        //   buttonText="Sign"
        //   onSuccess={responseGoogle}
        //   onFailure={responseGoogle}
        //   className="google-signin-button d-flex align-items-center">
        //     <Google color="#db4437" size="14" />
        //   </GoogleLogin>
        <button onClick={() => googleSignInHandler()} className="btn btn-sm p-0">
            <Google color="#db4437" size="14" />
        </button>

        // <button onClick={() => handleGoogleSignIn()} className="btn btn-sm p-0">
        //      <Google color="#db4437" size="14" />
        //  </button>
    );
};

export default GoogleSignInButton;