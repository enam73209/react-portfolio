import React from 'react';
import {Link} from "react-router-dom";

const BlogList = (props) => {
    const LatestPost = props.posts;
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className='grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        LatestPost.map((post,i)=>(
                            <Link key={i.toString()} className='card w-100 glass'>
                                <figure><img src={post.img} alt='car!'></img></figure>
                                <div className="card-body">
                                    <h2 className='card-title'>{post.title}</h2>
                                    <p>{post.short}</p>

                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>

        </div>
    );
};

export default BlogList;