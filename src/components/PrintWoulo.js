import React from 'react';
import Modal from 'react-modal';
import FadeImage from 'react-fade-image';



const WouloModal = (props) => (
        <div
            className="container"
        >
        
        {!props.selectedWoulo && <FadeImage ratio='16:9' src='/images/Macbook.png' className="img-fluid" loaderComponent={<div>Loading...</div>}/>}

        <div className="widget" >
        {props.selectedWoulo && <h5 className="col-md-7 .col-md-offset-7 woulo " > Woulooooo Ba mwen bagay la, woulooo Ba mwen bagay la, Woulooooo ba mwen bagay la , blablablablabla </h5>}
         {props.selectedWoulo && <p className="col-md-7 .col-md-offset-7 woulo " > {props.selectedWoulo}</p>}
         <div className="fb-like" data-href="http://localhost:8080/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
        </div>

        </div>
    );

export default WouloModal;