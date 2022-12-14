import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = (props) => {

    const cardData =[
        {
            id: 1,
            name: 'Opening Hours',
            info: 'Open from 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary '
        },
        {
            id: 2,
            name: 'Visit Our Location',
            info: 'Dhaka, Panthopath 207, Bangladesh',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            info: '+080 171678976',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary '
        }
    ]


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;