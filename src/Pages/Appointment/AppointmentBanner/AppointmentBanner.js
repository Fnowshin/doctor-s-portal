import React, { useState } from 'react';
import backgroundimg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';

import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div className='max-w-full '>
            <div className="hero min-h-[540px]" style={{backgroundImage: `url(${backgroundimg})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div className="rounded-lg lg:mr-20 lg:w-1/3 shadow-2xl">
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default AppointmentBanner;