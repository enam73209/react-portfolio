import React from 'react';
import Layout from "../Layout/Layout.jsx";
import ContactForm from "../component/ContactForm.jsx";

const ContactPage = () => {

    return (
        <div>
            <Layout>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Contact Us now!</h1>
                            <p className="py-6">Your Valuable Message means a lot to us. Please feel free to say anything informative</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default ContactPage;