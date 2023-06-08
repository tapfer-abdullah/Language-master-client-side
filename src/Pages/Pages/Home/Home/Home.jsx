import React from 'react';
import CustomHelmet from '../../../../Components/Helmet/CustomHelmet';
import HomeNumbers from '../HomeNumbers/HomeNumbers';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import LanguageCourses from '../LanguageCourses/LanguageCourses';
import PopularCourses from '../PopularCourses/PopularCourses';

const Home = () => {
    return (
        <div className=''>
            <CustomHelmet>Home</CustomHelmet>
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <HomeNumbers></HomeNumbers>
            <LanguageCourses></LanguageCourses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;