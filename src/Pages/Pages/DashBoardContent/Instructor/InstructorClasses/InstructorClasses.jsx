/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import ICCard from './ICCard';
import UpdateClass from './UpdateClass';

const InstructorClasses = () => {
    const [feedback, setFeedback] = useState("");
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: () =>
      fetch("http://localhost:5000/classes").then((res) => res.json()),
  });

  if (isLoading)
    return (
      <RotatingLines
        strokeColor="#ff5161"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );

  const handleUpdate = (id) => {
    console.log(id)
    UpdateClass(id)

    // fetch(`http://localhost:5000/class/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(info),
    // })
    //   .then((res) => res.json())
    //   .then((d) => {
    //     console.log(d);
    //     if (d.modifiedCount) {
    //       refetch();
    //       alert("Role updated successfully");
    //     }
    //   });
  };

  console.log(feedback)

  return (
    <div className="pt-14 w-full">
      <h3 className="text-2xl font-semibold text-center mb-5">
        All the Classes
      </h3>

      <div className="overflow-x-auto mb-20">
        <table className="table mx-5">
          {/* head */}
          <thead className="rounded-lg">
            <tr className="bg-my-secondary rounded-lg">
              <th>#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Total Enrolled</th>
              <th>Price</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
              <th className="text-center">Feedback</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {data?.map((d) => (
              <ICCard
              handleUpdate={handleUpdate}
                index={data.indexOf(d)}
                key={d._id}
                data={d}
              ></ICCard>
            ))}
          </tbody>
        </table>
      </div>

      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-semibold text-center text-lg">Admin Feed Back</h3>
          <div className="divider"></div>
          <p>{}</p>
          {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
        </form>
      </dialog>
    </div>
  );
};

export default InstructorClasses;