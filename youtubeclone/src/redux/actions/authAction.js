import app from "../../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { LoadProfile, LoginFailed, LoginRequest, LoginSuccess } from "../actionTypes";

export const login = () => dispatch => {
    try {

        dispatch({
            type:LoginRequest
        })

        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const profile={
                    name:user.displayName,
                    imgUrl:user.photoURL
                }
                
                dispatch({
                    type:LoginSuccess,
                    payLoad:token
                })

                dispatch({
                    type:LoadProfile,
                    payLoad:profile
                })

            }).catch((error) => {
                console.log(error);

                dispatch({
                    type:LoginFailed,
                    payLoad:error.message
                })
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // const email = error.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);
            });

    } catch (error) {

    }
}

