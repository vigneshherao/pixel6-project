import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { COLUMNS } from "../utils/constants";

const TableBody = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const dataJson = await data.json();
    setUsers(dataJson?.users);
  };

  return (
    <div className="sm:mx-16 mt-10">
         <DataTable className="border rounded-lg border-gray-200"  columns={COLUMNS} data={users} pagination/> 
    </div>
  );
};

export default TableBody;
