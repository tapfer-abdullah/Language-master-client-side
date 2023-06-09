/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import BtnOutLine from '../../../../Components/Buttons/BtnOutLine';
import BtnSolid from '../../../../Components/Buttons/BtnSolid';

const MySelectedTable = ({data, index, handleDelete}) => {
    const {courseName, price, availableSeats, instructor, instructorMail} = data;
    return (
        <>
        <tr>
              <td>{index+1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{courseName}</div>
                  </div>
                </div>
              </td>

              <td>{instructor}</td>

              <td className=''>${price}</td>
              <th>
                <BtnOutLine cStyle={`btn-sm`} destination={``}>Pay</BtnOutLine>
              </th>
              <th>
                <BtnSolid cStyle={`btn-sm`} clicked={handleDelete} _id={data._id} destination={``}>Delete</BtnSolid>
              </th>
            </tr>
        </>
    );
};

export default MySelectedTable;