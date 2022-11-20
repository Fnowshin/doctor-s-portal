import React from 'react';
import person1 from '../../../../assets/images/people1.png';
import person2 from '../../../../assets/images/people2.png';
import person3 from '../../../../assets/images/people3.png';
import quote from '../../../../assets/icons/quote.svg'
import Testimonial from './Testimonial';

const Testimonials = (props) => {
    const testimonials = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: person1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: person2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: person3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    testimonials.map(testimonial =><Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    >
                    </Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;