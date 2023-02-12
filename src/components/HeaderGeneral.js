import './styles/HeaderGeneral.css';
import { useState } from 'react';
import Modal from './Modal';

const HeaderGeneral = () => {
    const [show, setShow] = useState(false);

    return(
        <header className="header-general">
            <p className="subtitle"> [ Make your life easier ] </p>
            <h1 className="main-title"> Discovering the World </h1>
            <button className="pencil-button" onClick={()=>setShow(true)}>pencil</button>
            <Modal onClose={()=>setShow(false)} show={show}/>
        </header>
    )
}

export default HeaderGeneral;