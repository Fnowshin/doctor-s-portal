import React from 'react';

const InfoCard = ({card}) => {
    const {name, info, icon, bgClass} = card
    return (
        <div className={`p-6 card md:card-side shadow-xl ${bgClass}`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body text-white">
          <h2 className="card-title">{name}</h2>
          <p>{info}</p>
        </div>
      </div>
    );
};

export default InfoCard;