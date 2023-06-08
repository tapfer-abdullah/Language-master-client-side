import React from 'react';

const PopularLanguageCart = ({img, name, learners, language}) => {
    return (
        <div className='w-[400px] h-[450px] mx-auto'>
            <img className='w-full h-full' src={img} alt="" />
            
            <div className='bg-[#48a7d4] bg-opacity-70 text-white mx-8 p-5 rounded-xl relative -top-44'>
                <div className='flex justify-between'>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className='text-lg'>{learners} Active Learners</p>
                </div>
                <p className='py-3'>There is three program: {language} for beginner, {language} for intermediate and {language} for advance</p>
            </div>
        </div>
    );
};

export default PopularLanguageCart;