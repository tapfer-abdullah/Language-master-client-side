import React from 'react';
import CustomHelmet from '../../../../Components/Helmet/CustomHelmet';
import HomeNumbers from '../HomeNumbers/HomeNumbers';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div className='pt-24'>
            <CustomHelmet>Home</CustomHelmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            
            <HomeNumbers></HomeNumbers>
        </div>
    );
};

export default Home;