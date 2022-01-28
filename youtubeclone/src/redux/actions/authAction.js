import app from "../../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { LoadProfile, LoginFailed, LoginRequest, LoginSuccess, LogOut } from "../actionTypes";

export const login = () => async dispatch => {
    try {

        dispatch({
            type:LoginRequest
        })

        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
        const auth = getAuth(app);
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const profile={
                    name:user.displayName,
                    imgUrl:user.photoURL
                }
                
                sessionStorage.setItem("yt-token",token);
                sessionStorage.setItem("yt-profile",JSON.stringify(profile));
                

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

export const log_out = () => async dispatch => {
    const auth = getAuth(app);
    
    await auth.signOut()
    dispatch({
       type: LogOut,
    })
 
    sessionStorage.removeItem('yt-token')

    
    sessionStorage.removeItem('yt-profile')
}

