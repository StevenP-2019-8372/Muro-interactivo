import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
 

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
       await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    }
    
    return (
        <div>
           {
               !user.data &&
            <div>
                <label htmlFor="email">Correo electronico:</label>
                <input type="email" id="email" onChange={(ev)=>setEmail(ev.target.value)} />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)} />
                <button onClick={submit} >Registrarse</button>
                <button onClick={login} >Iniciar secion</button>
             </div>
            }
        </div>
    )
}

export default Login;