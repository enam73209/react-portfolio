import axios from "axios";
const BaseURL = "https://basic-blog.teamrabbil.com/api";

export const LatestBlogPost = async ()=>{
    let res= await axios.get(BaseURL+"/post-newest");
    if(res.status ===200){
        return res.data;
    }
    else{
        return [];
    }
}