import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import '../styles/ContactFromCTA.css';
import { ContactForm, ContactBlock, Title } from '../styles/ContactFormCTA.elemets';






const initialValues = {
    option: '',
    name: '',
    email: '',
    message: ''
}
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid format'),
    message: Yup.string().required('Required')
})

const onSubmit = values => {
    console.log('Form data', values);
}


const ContactFormCTA = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <ContactForm>
                <div className='formControl'>
                    <h3>I'm interested in..</h3>
                    <label htmlFor='name'></label>

                    <Field type='text' id='name' name='name'
                        placeholder='Name' />

                    <ErrorMessage name='name' />

                </div>
                <div className='formControl'>

                    <label htmlFor='email'></label>

                    <Field type='text' id='email' name='email'
                        placeholder='Email'
                    />

                    <ErrorMessage name='email' />

                </div>
                <div className='formControl'>

                    <label htmlFor='message'></label>

                    <Field as='textarea' id='message' name='message'
                        placeholder='Tell us something about you project' />

                    <ErrorMessage name='message' />

                </div>


                <button type='submit'></button>
            </ContactForm>

        </Formik>
    )
}

export default ContactFormCTA
