import React from 'react';

function Cards(props){
return(<section className="lead-section">
<div className="inner">
  <img className="logo2" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"/>
    <h1 className="lead-section-title">Making the healthcare experience more human</h1>
     <div className="paragraphe">
     <div className="paragraphe1"><p className="p1">We want patients to find the perfect doctor and book an<br/> appointment in the most easy way. The patient journey should be<br/> enjoyable, and that's why we are always next to them: to help them <br/>find the best possible care. Anytime, anywhere.</p></div>
     <div className="paragraphe1"><p className="p2">We also help doctors to better manage their practice and build their<br/> online reputation. With our integrated end-to-end solution, doctors<br/> are able not only to improve their online presence, but also to<br/> devote their time to what
       really matters: their patients.</p></div>
     </div>
</div>

<section className="services-section"><div className="services"> {props.card.map((el) => <div className={el.name}>{el.title}{el.title2}
{!el.option ?null :<div className="select-button"> <select className="option"> {el.option.map((el)=> <option>{el}</option>)} </select></div>}{el.image}</div>)}
</div></section>
</section>
)
}

export default Cards;