import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Terms = (props) => {
    return (
        <div className='mt-8'>
            <div className="card lg:card-side  lg:p-10  bg-base-100">
  <img src={treatment} alt="Album" className='rounded-lg lg:w-80 shadow-2xl'/>
  <div className="lg:p-20 mt-10">
    <h3 className="card-title text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h3>
    <p className='mt-6 font-semibold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p> <br />
    <div className="card-actions">
      <button className="btn btn-primary">Get Started </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Terms;