import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import React, { useMemo } from "react";
import { FaEye, FaRegEdit, FaTrash } from "react-icons/fa";
import ReactTable from "../../../../../components/ReactTable/ReactTable";

const BlogList = () => {
  const blogs = [
    {
      title: "10 Tips for Effective Time Management",
      author: "Jane Doe",
      categories: "Productivity",
      tags: ["tips", "time management", "efficiency"],
      date: "2023-05-20",
      action: "Read",
      status: "Published",
    },
    {
      title: "The Importance of Regular Exercise",
      author: "John Smith",
      categories: "Health",
      tags: ["exercise", "wellness", "health"],
      date: "2023-07-10",
      action: "Read",
      status: "Draft",
    },
    {
      title: "Introduction to Machine Learning",
      author: "Alice Johnson",
      categories: "Technology",
      tags: ["machine learning", "AI", "data science"],
      date: "2023-09-15",
      action: "Read",
      status: "Published",
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
        accessorKey: "title",
        header: "Title",
        size: 300,
      },
      {
        accessorKey: "categories",
        header: "Categories",
        size: 200,
      },
      {
        accessorKey: "author",
        header: "Author",
        size: 150,
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
      <ReactTable data={blogs} columns={columns}></ReactTable>
    </section>
  );
};

export default BlogList;
