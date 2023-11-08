import React, {useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import jsonData from "../projects.json";
import ProjectList from "../component/ProjectList.jsx";

const ProjectPage = () => {
    const[JsonData,setJsonData]=useState(jsonData);
    return (
        <div>
            <Layout>
               <ProjectList data={JsonData}/>
            </Layout>
        </div>
    );
};

export default ProjectPage;