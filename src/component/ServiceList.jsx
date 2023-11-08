import React from 'react';

const ServiceList = (props) => {
    const serviceList = props.data;
    console.log(serviceList);
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div  className='grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        serviceList.map((service,i)=>(

                                <div key={i.toString()}  className='my-card card w-100 glass'>
                                    <figure><img src={service.img} alt='car!'></img></figure>
                                    <div className="card-body">
                                        <h2 className='card-title'>{service.title}</h2>
                                        <p>{service.des} </p>

                                    </div>
                                </div>

                        ))

                    }

                    </div>

            </div>

        </div>
    );
};

export default ServiceList;