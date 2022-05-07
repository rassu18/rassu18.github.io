import { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";


function SecondComponent() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");


  const firebaseConfig = {
    apiKey: "AIzaSyCSKwFU3xsSLjw9y_7KCKH6o161QVf1PK0",
    authDomain: "cartproj-de263.firebaseapp.com",
    projectId: "cartproj-de263",
    storageBucket: "cartproj-de263.appspot.com",
    messagingSenderId: "661642372769",
    appId: "1:661642372769:web:e1565114eb6863f7d432e0",
    measurementId: "G-K3VX4Q6X46"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const phoneNumber = getPhoneNumberFromUserInput();

  const auth = getAuth();
  

  return (
    <>
      <form>
        <label>Enter your First name:
          <input
            type="text"
            value={fname}
            onChange={(e) => setFName(e.target.value)}

          />
        </label><br></br>
        <br></br>
        <label>Enter your Last name:
          <input
            type="text"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />
        </label>
      </form>

      
      <div>
        <h3>Testing Firebase</h3>
      </div>
    </>
  )
}

export default SecondComponent;