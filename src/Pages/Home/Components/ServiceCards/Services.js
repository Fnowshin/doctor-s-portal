import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';
const Services = (props) => {

    
    const serviceData =[
        {
            id: 1,
            name: 'Fluoride Treatment',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
            
        }
    ]
    return (
       <div className='mt-24'>
         <div className='text-center'>
            
            <h4 className='font-bold text-primary'> OUR SERVICES</h4>
            <h2 className='text-2xl font-semi bold'>Services We Provide </h2>
        
    </div>
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            serviceData.map(service => <Service
                key={service.id}
                service={service}
            ></Service>)
        }
    </div>
       </div>
    );
};

export default Services;