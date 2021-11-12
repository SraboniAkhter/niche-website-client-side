import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const CompleteOrder = () => {
    return (
        <div style={{height: "355px"}}>
             <div className="me-3 text-success" style={{fontSize: '50px'}}>
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> 
                </div>
            <h5>Your appointment has been Successfully</h5>
            <Link to="/"><button className="btn btn-info text-white">Go Back to Home</button></Link>
            <br /> <br /> <br />
        </div>
    );
};

export default CompleteOrder;