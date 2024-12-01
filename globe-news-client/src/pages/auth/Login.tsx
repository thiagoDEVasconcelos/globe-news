import { app } from "../../firebaseConfig";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth(app);

  const googleSignUp = () => {
    signInWithPopup(auth, googleProvider)
    .then((response) => {
      console.log(response.user);
    })
    .catch((err) => {
        console.log(err.code)
    })
  };

  return (
    <div>
      <button className="mr-5" onClick={googleSignUp}>Google</button>
    </div>
  );
};

export default Login;
