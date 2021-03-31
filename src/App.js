import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { auth, provider } from "./firebase";
import DriveImg from "./Media/driveImage.png";
import { Button } from "@material-ui/core";

function App() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result.user);
        })
        .catch((error) => console.log(error.message));
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <div>
      {user ? (
        <div className="App">
          <Header />
          <Main />
        </div>
      ) : (
        <div className="appLogIn">
          <img
            src={DriveImg}
            alt="Drive image"
            className="appLogInDriveImage"
          />
          <span className="appLogInWelcomeLogo">
            Welcome To Google Drive Clone
          </span>
          <Button
            className="appLogInButton"
            color="primary"
            onClick={handleLogin}
          >
            Click Here To LogIn
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
