import React from 'react';
import appointment from '../../../../assets/images/appointment.png';
import doctor from '../../../../assets/images/doctor.png';

const MakeAppointment = (props) => {
    return (
        <div className='mt-32 p-0' style={{backgroundImage: `url(${appointment})`}}>
           <div className="hero">
  <div className=" p-0 hero-content flex-col lg:flex-row">
    <img src={doctor} className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg" />
    <div className='p-0 m-8'>
        <p className='text-secondary font-bold mt-10'>Appointment</p>
      <h1 className=" text-3xl font-semibold text-white">Make an appointment Today</h1>
      <p className="text-white py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
      <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MakeAppointment;