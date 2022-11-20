import React from 'react';
import backgroundimg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'

const Banner = (props) => {
    return (
        <div className='max-w-full '>
           <div className="hero min-h-[540px]" style={{backgroundImage: `url(${backgroundimg})`}}>
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
    <div>
      <h2 className="text-5xl font-bold">Your New Smile Starts Here </h2>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;