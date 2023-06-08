import React from 'react';
import { LuFolder, LuGraduationCap, LuUsers, LuWallet } from "react-icons/lu";
import { BsNewspaper, BsWalletFill } from "react-icons/bs";
import "./HomeNumbers.css"

import CountUp from 'react-countup';

const HomeNumbers = () => {

    const pStyle = 'uppercase text-base text-center font-semibold my-4';

    return (
        <div className='py-20 px-10 my-20 bgImg'>
            <h3 className='text-3xl text-white text-center mb-10'>Language School In Number</h3>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                <div className='p-5 border bg-[black] bg-opacity-30 text-white'>
                    <LuUsers className='text-5xl mx-auto my-5'></LuUsers>
                    <p className='flex justify-center'><CountUp end={258} duration={5} className='text-5xl' /></p>
                    <p className={pStyle}>STUDENTS</p>
                </div>
                <div className='p-5 border bg-[black] bg-opacity-30 text-white'>
                    <LuFolder className='text-5xl mx-auto my-5'></LuFolder>
                    <p className='flex justify-center'><CountUp end={258} duration={5} className='text-5xl' /></p>
                    <p className={pStyle}>LEARNING PROGRAMMES</p>
                </div>
                <div className='p-5 border bg-[black] bg-opacity-30 text-white'>
                    <BsWalletFill className='text-5xl mx-auto my-5'></BsWalletFill>
                    <p className='flex justify-center'><CountUp end={258} duration={5} className='text-5xl' /></p>
                    <p className={pStyle}>LANGUAGE TRAININGS</p>
                </div>
                <div className='p-5 border bg-[black] bg-opacity-30 text-white'>
                    <BsNewspaper className='text-5xl mx-auto my-5'></BsNewspaper>
                    <p className='flex justify-center'><CountUp end={258} duration={5} className='text-5xl' /></p>
                    <p className={pStyle}>BRANCHES</p>
                </div>
               
                <div className='p-5 border bg-[black] bg-opacity-30 text-white'>
                    <LuGraduationCap className='text-5xl mx-auto my-5'></LuGraduationCap>
                    <p className='flex justify-center'><CountUp end={258} duration={5} className='text-5xl' /></p>
                    <p className={pStyle}>TEACHERS</p>
                    
                </div>
            </div>
        </div>
    );
};

export default HomeNumbers;