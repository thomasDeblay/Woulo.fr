import React from 'react';

const Action = (props) => (
    
    <div className="CTA">
    <a onClick={props.handlePick}
    disabled={!props.hasWoulos}
    className="btn btn-primary btn-shadow btn-gradient link-scroll woulobutton">Ki Woulo Ka Ba ?</a>
    </div>
       
);

export default Action;
