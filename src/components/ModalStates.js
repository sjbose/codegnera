import React, { useState } from 'react'
// import Modal from '../components/Modal';
// import LandingPage from '../pages/landingPage';
// import About from '../pages/about';
// import Contact from '../pages/contact';




export const ShowModalContext = React.createContext();


export const ModalStates = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <ShowModalContext.Provider value={[showModal, setShowModal]}>

                {props.children}

            </ShowModalContext.Provider>
        </div>
    )
}

