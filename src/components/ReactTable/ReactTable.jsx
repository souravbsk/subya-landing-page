import { MaterialReactTable } from "material-react-table";
import React from "react";

const ReactTable = ({ data, columns }) => {
  return (
    <>
      <MaterialReactTable columns={columns} data={data} />;
    </>
  );
};

export default ReactTable;
