import React, { useMemo } from "react";
import { FaEye, FaRegEdit, FaTrash } from "react-icons/fa";
import ReactTable from "../../../../../components/ReactTable/ReactTable";

const CategoryList = () => {
  const categories = [
    {
      name: "Productivity",
      description: "Tips and techniques to enhance productivity.",
      date: "2023-01-15",
      author: "John Doe",
    },
    {
      name: "Health",
      description: "Articles related to physical and mental health.",
      date: "2023-02-20",
      author: "Jane Smith",
    },
    {
      name: "Technology",
      description: "Latest updates and trends in the tech industry.",
      date: "2023-03-10",
      author: "Alex Johnson",
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "#",
        size: 30,
        accessorFn: (row, i) => i + 1,
      },
      {
        accessorKey: "name",
        header: "Category",
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 300,
      },
      {
        accessorKey: "author",
        header: "Author",
        size: 150,
      },

      {
        header: "Published Date",
        accessorKey: "date",
      },
      {
        header: "Action",
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button
              // onClick={() => handleViewEmployee(row?.original)}
              className="text-lg px-3 py-3 bg-[#7A5542] text-white rounded-lg"
            >
              <FaEye></FaEye>
            </button>
            <button
              // onClick={() => handleEmployeeDetails(row?.original)}
              className="text-lg px-3 py-3 bg-[#7A5542] text-white rounded-lg"
            >
              <FaRegEdit></FaRegEdit>
            </button>
            <button
              // onClick={() => handleDeleteEmployee(row?.original)}
              className="text-lg px-3 py-3 bg-[#7A5542] text-white rounded-lg"
            >
              <FaTrash></FaTrash>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <section className="mt-8">
      <ReactTable data={categories} columns={columns}></ReactTable>
    </section>
  );
};

export default CategoryList;
