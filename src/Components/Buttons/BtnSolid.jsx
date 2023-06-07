import React from 'react';
import { Link } from 'react-router-dom';

const BtnSolid = ({children, destination, cStyle}) => {
    return (
        <div>
            <Link to={destination}
             className={`${cStyle} btn rounded-2xl px-5 hover:bg-my-secondary hover:border-my-secondary text-white border-my-primary bg-my-primary`}
             >{children}</Link>
        </div>
    );
};

export default BtnSolid;