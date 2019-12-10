import React from 'react';

function Office(props){
return (<section className="offices-section">
      <h1 className="offices-section-title">Improve the lives of millions.<br/> Change yours forever</h1>
      <p className="p3">More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and<br/> Curitiba, our search for great talent never stops.</p>

      <div className="offices-warsaw-barcelona-istanbul"> {props.offices.map((el,i) => i<3 ?<a href="#"><div className={el.name}>{el.image}<div className="office-button">{el.title}{el.button}</div></div></a> :null)}</div>
      <div className="offices-rome-mexicocity-curitiba"> {props.offices.map((el,i) => i>2  ?<a href="#"><div className={el.name2}>{el.image2}<div className="office-button">{el.title2}{el.button2}</div></div></a> :null)}</div>
      </section>
);

}

export default Office;