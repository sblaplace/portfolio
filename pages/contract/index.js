import * as React from "react";
import ContactForm from '../../components/ContactForm';

export default function AboutPage(_props) {
    return (
        <div className='prose mx-auto p-6 bg-timberwolf bg-origin-padding'>
            <h1>Contract</h1>
            Submit the following form in order to request a contract, and I will get
            back as soon as possible.
            <ContactForm />
        </div>
    )
}