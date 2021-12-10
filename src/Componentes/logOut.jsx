import React from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';


const LogOut = () => {
    const firebase = useFirebaseApp();
    const user = useUser();

    const logout = async () => {
       await firebase.auth().signOut();
       console.log('cerrando sesion')
    }

    return (
        <div className="d-inline">
            {
                user.data && <button onClick={logout} >cerrar sesion</button>
            }
        </div>
    )
}

export default LogOut;