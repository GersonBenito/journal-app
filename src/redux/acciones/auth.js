import { 
    auth, 
    signInWithPopup, 
    google, 
    createUserWithEmailAndPassword, 
    updateProfile,
    signInWithEmailAndPassword
} from "../../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./error";
import Swal from 'sweetalert2'
import { startCleanLogout } from "./notes";

export const starLoginEmailPassword = (email, password) => async(dispatch) =>{
    
    try {
        
        dispatch( startLoading() );

        const { user } = await signInWithEmailAndPassword( auth, email, password );

        dispatch( login( user.uid, user.displayName, user.photoURL ) );

        dispatch( finishLoading() );
        
    } catch (error) {

        dispatch( finishLoading() );

        Swal.fire({
            icon:'error',
            title:'Oops..',
            text:'Ocurrio un error al iniciar sesion'
        })

    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => async (dispatch) =>{
    try {
        
        const { user } = await createUserWithEmailAndPassword(auth, email, password );
        
        await updateProfile( 
            user, 
            { 
                displayName: name, 
                photoURL: 'https://static.vecteezy.com/system/resources/previews/002/454/057/non_2x/man-faceless-profile-free-vector.jpg' 
            }
        );

        dispatch( login( user.uid, user.displayName, user.photoURL ) );

    } catch (error) {
        Swal.fire({
            icon:'error',
            title:'Oops..',
            text:'Ocurrio un error al intentar registrarse'
        })
    }
}

export const startGoogleLogin = () => async (dispatch) =>{

    try {
        const { user } = await signInWithPopup( auth, google );
        
        dispatch( login( user.uid, user.displayName, user.photoURL ) );
        
    } catch (error) {

        console.log(error);
    }
    
}

export const login = ( uid, displayName, photo ) =>({ // usando retorno implicito de la funcion
    type: types.LOGIN,
    payload: {
        uid,
        displayName,
        photo
    }
});


export const startLogout = () => async (dispatch) =>{

   await auth.signOut();
   dispatch( logout() );
   dispatch( startCleanLogout() );

}

export const logout = () =>({

    type: types.LOGOUT,

})
