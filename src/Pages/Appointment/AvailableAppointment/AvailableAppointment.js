import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section className='mt-20'>
             <p className='text-center text-primary'>You Have Selected Date: {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointment;