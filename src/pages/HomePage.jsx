import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import ContactForm from "../component/ContactForm.jsx";
import HomePageCover from "../component/HomePageCover.jsx";
import {LatestBlogPost} from "../APIRequests/APIRequest.js";
import Loader from "../component/Loader.jsx";
import BlogList from "../component/BlogList.jsx";

const HomePage = () => {
    const[Allposts,setAllposts] = useState([]);

    useEffect(() => {
        (async ()=>{
            let result = await LatestBlogPost();
            console.log(result);
            setAllposts(result);
        })()
    }, []);

    return (
        <div>
            <Layout>
                <HomePageCover/>
                {Allposts.length===0 ? <Loader/>
                    :
                    <BlogList posts = {Allposts}/>
                }
            </Layout>
        </div>
    );
};

export default HomePage;