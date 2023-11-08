import React, {useRef, useState} from 'react';

const ContactForm = () => {
    //Declare a state to manipulate form data
    const[formData,setformData]=useState({email:"", phone:"", message:""});

    //Declare a ref to show toast message
    const toastRef = useRef(null);
    const formDataHandler = (e)=>{
        let {name,value}=e.target;
        setformData((prevFormData)=>({
            ...prevFormData,
                [name]:value
            }));

    }

    const submitContactForm = (e)=>{
        e.preventDefault();
        console.log(formData);
        setformData({email:"", phone:"", message:""});
        toastRef.current.style.display = 'block';

        // Hide the toast message after a delay (e.g., 3 seconds)
        setTimeout(() => {
            toastRef.current.style.display = 'none';
        }, 3000);


    }
    return (
        <div>
            <form className="card-body" onSubmit={submitContactForm}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" value={formData['email']} placeholder="email" className="input input-bordered input-success" onChange={formDataHandler} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text input-success">Phone Number</span>
                    </label>
                    <input type="tel" placeholder="phone" name="phone" value={formData['phone']} className="input input-bordered input-success"  onChange={formDataHandler} required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea placeholder="text here" name="message" value={formData['message']} className="textarea textarea-bordered  w-full max-w-xs textarea-lg textarea-success" onChange={formDataHandler} ></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-success" >Send Message</button>
                </div>

            </form>
            <div ref={toastRef} className="toast toast-bottom toast-center " style={{ display: 'none' }}>
                <div className="alert alert-success">
                    <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;