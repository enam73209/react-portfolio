import React from 'react';
import {useParams} from "react-router-dom";
import JsonData from '../projects.json';
import Layout from "../Layout/Layout.jsx";
import ProjectList from "../component/ProjectList.jsx";

const ProjcectByCatPage = () => {
    const {CategoryID} = useParams();


   const ProjectsDataByCats =JsonData.filter(item => item['categoryId'] ===parseInt(CategoryID) )

    console.log(ProjectsDataByCats);
   console.log(CategoryID);
    return (
        <Layout>
            <ProjectList data = {ProjectsDataByCats}/>
        </Layout>
    );
};

export default ProjcectByCatPage;