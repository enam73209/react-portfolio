import React, {useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import Enam from '../assets/images/messi.jpg'
import EditIcon from '../assets/images/user-pen-solid.svg'
import Instagram from '../assets/images/instagram.svg'
import FaceBook from '../assets/images/facebook.svg'



const AboutPage = () => {
    const[Name,setName]=useState("Lionel Messi");

    const NameChangeHandler = ()=>{
        const Name = prompt("Input a Name")
        if(Name===''){
            alert("You must enter a name");
        }
        else{
            setName(Name);
        }

    }

    const redirectToInstagram = () => {
        const instagramURL = 'https://www.instagram.com/leomessi/?hl=en'; // Replace with your Instagram profile URL

        // Redirect to the Instagram URL
        window.location.href = instagramURL;
    };
    const redirectToFacebook = () => {
        const facebookURL = 'https://www.facebook.com/leomessi'; // Replace with your Instagram profile URL

        // Redirect to the Instagram URL
        window.location.href = facebookURL;
    };


    return (
        <div>
            <Layout>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={Enam} className="max-w-lg rounded-lg shadow-2xl" />
                        <div>
                            <div>
                                <h1 className="text-5xl font-bold" style={{ display: 'inline' }}>
                                    {Name}
                                </h1>
                                <button onClick={NameChangeHandler} className="btn btn-default" style={{ display: 'inline', verticalAlign: 'middle' }}>
                                    {/*<FontAwesomeIcon icon="fa-sharp fa-light fa-user-pen" beat style={{color: "#22511f",}} />*/}
                                    <img src={EditIcon} alt="Edit Icon" width="24" height="24" style={{ verticalAlign: 'middle',color: "#22511f" }} />
                                </button>
                            </div>

                            <p className="py-6">Awarded by France Football magazine, the Ballon d’Or has been given out to men every year since 1956. Both 2020 awards were cancelled because the coronavirus pandemic disrupted the season.

                                Lionel Messi has won the Ballon d’Or a record seven times, followed by Cristiano Ronaldo, who has won it five times. On October 30, 2023, the FIFA World Cup winner added another trophy to his cabinet, winning his eight at the at the Theatre du Chatelet in Paris on Monday.</p>
                            <button onClick={redirectToInstagram} style={{ display: 'inline', verticalAlign: 'middle' }} className="btn btn-success"><img src={Instagram} alt="Edit Icon" width="24" height="24" style={{ verticalAlign: 'middle',color: "#22511f" }} /></button> &nbsp;
                            <button onClick={redirectToFacebook} style={{ display: 'inline', verticalAlign: 'middle' }} className="btn btn-success"><img src={FaceBook} alt="Edit Icon" width="24" height="24" style={{ verticalAlign: 'middle',color: "#22511f" }} /></button>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default AboutPage;