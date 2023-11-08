import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {LatestBlogPost} from "../APIRequests/APIRequest.js";
import BlogList from "../component/BlogList.jsx";
import Loader from "../component/Loader.jsx";

const BlogPage = () => {
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
                {Allposts.length===0 ? <Loader/>
                    :
                    <BlogList posts = {Allposts}/>
                }

            </Layout>
        </div>
    );
};

export default BlogPage;