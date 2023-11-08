import React from 'react';

const HomePageCover = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_1280.jpg)',
                backgroundSize: 'cover',   // Cover the container
                backgroundPosition: 'center', // Center the background image
            }}>
                <div className="hero-overlay bg-opacity-65"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hi,This is  Enam</h1>
                        <p className="mb-5">This React application offers a range of functionalities, including service and project discovery with category-based search. It also includes an about page, a contact page, and a blog page where content is dynamically fetched from an API. </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePageCover;