import React from 'react';
import CustomHelmet from '../../../../Components/Helmet/CustomHelmet';
import HomeNumbers from '../HomeNumbers/HomeNumbers';

const Home = () => {
    return (
        <div className='pt-24'>
            <CustomHelmet>Home</CustomHelmet>
            
            <p>lorem5000</p>
            <HomeNumbers></HomeNumbers>
        </div>
    );
};

export default Home;