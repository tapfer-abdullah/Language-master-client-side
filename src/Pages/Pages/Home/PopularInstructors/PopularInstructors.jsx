import React from 'react';
import { useQuery } from '@tanstack/react-query'
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {

    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await fetch('reviews.json')
            // console.log(data)
            return res.json();
          },
      })
    
    //   if (isLoading) {
    //     return <span>Loading...</span>
    //   }
    
    //   if (isError) {
    //     return <span>Error: {error.message}</span>
    //   }
console.log(data)
    return (
        <>
        <h3 className='text-3xl font-semibold text-center my-10'>Popular Instructors</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-20'>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>
            <InstructorCard></InstructorCard>

        </div>
        </>
    );
};

export default PopularInstructors;