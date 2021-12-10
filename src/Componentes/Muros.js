import React,{useEffect, useState} from 'react';
import MuroForms from './MuroForm';
import {db} from '../firebase';
import '../css/muros.css'


const Muro = () => {

    const [mensaje, setMensaje] = useState([])

    const addOrEdit = async (linkObject) => {
        await db.collection('publicacion').doc().set(linkObject);
        console.log('new task add');
    }

    const getMensaje = async () => {
        db.collection('publicacion').onSnapshot((querysnapshot)=>{
            const docs = [];
            querysnapshot.forEach(doc => {
            docs.push({...doc.data(), id:doc.id});
            });
            setMensaje(docs);
        });
    }

    useEffect(() => {
        getMensaje();
    },[]);

    return(
        <>    
        <div className=" container col-md-12 p-2" >
        <MuroForms addOrEdit={addOrEdit} />
        </div>
        
        <div className=" container col-md-12" >
        {mensaje.map(mensaje => (
            
         <div id="card1" className="card mb-1" key={mensaje.id} >
             <div className="card-body">
                 <h4>{mensaje.mensaje}</h4>
             </div>
         </div>

        ))}
        </div> 
        </>
    )
} 

export default Muro;