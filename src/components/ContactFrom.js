import React, { useState } from 'react';
import styled from 'styled-components';
import rightArrow from '../assets/images/right-arrow.png';


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}


const ContactForm = styled.form`
    display:flex;
    position:relative;
    flex-flow:column nowrap;
    width:100%;
    min-width:250px;
    
    
    & label {
        font:normal 300 0.95em/1.2 'Comfortaa', cursive;
        width:50px;
        // background:#fafbfc;
        padding:2px;
        text-align:center;
    }
    & input[type=text] {
        width: 100%;
        padding: 12px 0;
        margin: 10px 0;
        box-sizing: border-box;
        border: 2px solid #97EAB9;
        border-radius: 4px;
    }
    & input[type=text]:focus {
    background-color:rgba(255, 255, 255,0.656);
    }
    
    input[type=text], select, textarea {
        width: 100%;
        padding:15px 0;
        margin: 8px 0;
        border: 2px solid #97EAB9;
        border-radius: 4px;
        resize: vertical;
        &:focus {
            background-color:rgba(255, 255, 255,0.656);
        }
    }

    & button{
        position:absolute;
        
        width:50px;
        height:50px;
        top:310px;
        right:5px;
        border-radius:50%;
        background:#97EAB9;
        border:0;
        background-image:url(${rightArrow});
        background-position: center;
        background-repeat: no-repeat; 
        background-size: cover
    }

    @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
        max-width:225px;
        padding:

    }
`;

const ContactBlock = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    background:rgba(255, 255, 255,0.253);
    border:1px solid rgba(159, 159, 159,0.153);
    max-width:400px;
    height:430px;
    padding:70px 50px;
    margin:0 20px;
    backdrop-filter: blur(50px);
    border-radius:10px;
    box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);
`;
const Title = styled.h1`
font:normal 400 1.9em/1 'Patua One', cursive;
line-height:1.6;

`;
const ContactFrom = () => {
    const [formState, setFormState] = useState({ name: "", email: "" });

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formState })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();

    }

    return (



        <ContactBlock>
            <Title>Have a query? Let us help you</Title>
            <ContactForm onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" onChange={handleChange} value={formState.name}
                    placeholder="Enter your name" />

                <label htmlFor="email">Email:</label>
                <input id="email" type="text" name="email" onChange={handleChange} value={formState.email}
                    placeholder="Enter your name" />

                <label htmlFor="subject">Message:</label>
                <textarea id="subject" name="subject" placeholder="Write something.." onChange={handleChange} value={formState.subject}></textarea>
                <button type="submit" value={formState.submit} onClick={handleChange}></button>

            </ContactForm>
        </ContactBlock>


    )
}

export default ContactFrom;
