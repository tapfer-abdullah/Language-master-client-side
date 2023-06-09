/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import MySelectedTable from "./MySelectedTable";

const MySelectedClasses = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/my-selected-course").then((res) =>
        res.json()
      ),
  });

  console.log(data);
  if (isLoading) return "Loading...";

  const handleDelete = (id) => {
    console.log(id);

    const isDelete = confirm("Are you sure to delete it? If yes, click ok!");

    if(isDelete){
      fetch(`http://localhost:5000/course/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        if(d.deletedCount){
          refetch()
          alert("Deleted successfully")
        }
      });
    }
  };

  return (
    <div>
      <div className="mt-20 mb-10 text-center w-9/12 md:w-1/2 mx-auto">
        <h3 className="text-3xl font-semibold mb-5">My Selected Courses</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-[65vw] mx-5">
          {/* head */}
          <thead className="rounded-lg">
            <tr className="bg-my-secondary rounded-lg">
              <th>#</th>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th className="">Pay</th>
              <th className="">Delete</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {data.map((d) => (
              <MySelectedTable
                handleDelete={handleDelete}
                index={data.indexOf(d)}
                key={d._id}
                data={d}
              ></MySelectedTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
