/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const MClassCart = ({ index, data, handleStatus, handleFeedBack}) => {
    const { name, image, status, instructorMail, instructor, availableSeats, price, _id } = data;
    return (
      <>
        <tr>
          <th>
            {index+1}
          </th>
          <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={image}
                    alt="Class"
                  />
                </div>
              </div>
          </td>
  
          <td>
            {name}
          </td>
  
          <td>{instructor}</td>
          <td>{instructorMail}</td>
          <td>{availableSeats}</td>
          <td className='text-end'>${price}</td>

          <th className='flex'>
            <Link disabled={status == "Denied" || status == "approved"} onClick={()=> handleStatus(_id, "approved")} className="btn btn-outline mx-1 btn-xs">Approved</Link>
            <Link disabled={status == "Denied" || status == "approved"} onClick={()=> handleStatus(_id, "Denied")} className="btn btn-outline mx-1 btn-xs">Denied</Link>
            <Link onClick={()=> handleFeedBack(_id)} className="btn btn-outline mx-1 btn-xs">Feed Back</Link>
          </th>
        </tr>
      </>
    );
  };

export default MClassCart;