import React from 'react';
import { Link } from 'react-router-dom';

const BtnOutLine = ({children, destination}) => {
    return (
        <div>
            <Link to={destination}
             className="btn btn-outline hover:bg-my-primary hover:border-my-primary text-my-primary border-my-primary"
             >{children}</Link>
        </div>
    );
};

export default BtnOutLine;