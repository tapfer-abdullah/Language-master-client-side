/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import MClassCart from "./MClassCart";

const ManageClasses = () => {
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

  const handleStatus = (id, status) => {
    const info = { status };

    fetch(`http://localhost:5000/class/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        if (d.modifiedCount) {
          refetch();
          alert("Role updated successfully");
        }
      });
  };

  const handleFeedBack = () => {
    // window.my_modal_3.showModal()

    let text;
    let message = prompt("Write Feedback:", "");
    if (message == null || message == "") {
      text = "User cancelled the prompt.";
    }

    setFeedback(message)

  };

  console.log(feedback)

  return (
    <div className="pt-14">
      <h3 className="text-2xl font-semibold text-center mb-5">
        All the Classes
      </h3>

      <div className="overflow-x-auto mb-20">
        <table className="table w-[65vw] mx-5">
          {/* head */}
          <thead className="rounded-lg">
            <tr className="bg-my-secondary rounded-lg">
              <th>#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Instructor Mail</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th className="text-center">Status</th>
              {/* <th className="">Delete</th> */}
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {data?.map((d) => (
              <MClassCart
                handleStatus={handleStatus}
                handleFeedBack={handleFeedBack}
                index={data.indexOf(d)}
                key={d._id}
                data={d}
              ></MClassCart>
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

export default ManageClasses;
