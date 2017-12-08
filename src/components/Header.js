import React from 'react';

const Header = (props) => (
    <div>

    <h1>{props.title}</h1>
    <p className="hero-text">{props.subtitle} </p>
    </div>
);
Header.defaultProps = {
    title : 'Woulo.fr'
}

export default Header;