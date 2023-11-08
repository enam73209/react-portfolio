import React, {useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import "../assets/css/service.css"
import ServiceList from "../component/ServiceList.jsx";

const ServicePage = () => {
    const[serviceData,setserviceData]=useState([
        {
        id:1,
        title:"Mobile Application",
        des:"Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.",
        img:"https://cdn.pixabay.com/photo/2015/05/08/15/28/apple-758338_1280.jpg"
        },
        {
            id:2,
            title:"Desktop Application",
            des:"esktop applications are programs designed to run on computers and use system resources to perform their functions.",
            img:"https://cdn.pixabay.com/photo/2019/10/01/09/01/vpn-4517623_1280.jpg"
        },
        {
            id:3,
            title:"Web Application",
            des:"A web application is an interactive program that runs on a web server and is accessed through a web browser. ",
            img:"https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"
        },
        {
            id:4,
            title:"Graphics Design",
            des:"Graphic design is a craft where professionals create visual content to communicate messages.",
            img:"https://cdn.pixabay.com/photo/2017/09/18/11/14/school-2761394_1280.jpg"
        },
        ])
    return (
        <div>
            <Layout>
                <div className="hero min-h-screen bg-base-200">
                    <ServiceList data={serviceData} />
                </div>
            </Layout>
        </div>
    );
};

export default ServicePage;