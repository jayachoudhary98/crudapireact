import React from "react";
import Card from "./Card";
import Sdata from "../Sdata";

const Service = () => {
  return (
    <div>
      <div className="my-5 header-ser">
        <h1 className="tab-center"> Our Services</h1>
        <p>
          Design and implement a sustainable future with stellar services.Let’s
          accelerate the sustainability goals that matter most to businesses.
          Services.Let’s accelerate the sustainability goals that matter most to
          businesses.
        </p>
      </div>
      <div className="container-fluid mb-5 m-3" >
        <div className="row">
          <div className="col-10 mx-auto">
            
            <div className="row gy-4">
             {  
              Sdata.map((val, ind) => {
                return <Card key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                />
              })       
        }
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
