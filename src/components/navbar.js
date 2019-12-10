import React from 'react';

function Navbar(props){
return ( <header><a href="#"> <img className="logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/></a>
    <ul className="menu"> {props.menulist.map((el) => <li className="nav-menu"><a  className={el.name} href="#">{el.title}
{!el.dropdown ?null :<ul className="drop"> {el.dropdown.map((el)=> <li className="drop-elements"> {el}</li>)}</ul>}</a></li>)} </ul></header>

)
}

export default Navbar;