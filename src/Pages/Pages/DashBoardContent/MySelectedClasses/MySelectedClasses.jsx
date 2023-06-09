import React from 'react';

const MySelectedClasses = () => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-[65vw] mx-5">
    {/* head */}
    <thead className='rounded-lg'>
      <tr className='bg-my-secondary rounded-lg'>
        <th>#</th>
        <th>Course Name</th>
        <th>Instructor</th>
        <th>Price</th>
        <th>Pay</th>
        <th>Delete</th>
      </tr>
    </thead>


    <tbody>
      {/* row 1 */}
      <tr>
        <td>
            1
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">Hart Hagerty</div>
            </div>
          </div>
        </td>

        <td>
          Zemlak, Daniel and Leannon
        </td>

        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MySelectedClasses;