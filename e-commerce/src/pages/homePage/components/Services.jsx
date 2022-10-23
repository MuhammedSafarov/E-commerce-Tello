import React from "react";

const Services = () => {
  return (
    <div className="services">
      <div className="info first">
        <div><img src={require("./img/info1.png")} alt="" /></div>
        <p className='service-name'>Çatdırılma</p>
        <p className='low-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, temporibus.</p>
      </div>
      <div className="info second">
        <div><img src={require("./img/info2.png")} alt="" /></div>
        <p className='service-name'>Kredit</p>
        <p className='low-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, temporibus.</p>
      </div>
      <div className="info third">
        <div><img src={require("./img/info3.png")} alt="" /></div>
        <p className='service-name'>Zəmanət</p>
        <p className='low-opacity'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, temporibus.</p>
      </div>
    </div>
  );
};

export default Services;
