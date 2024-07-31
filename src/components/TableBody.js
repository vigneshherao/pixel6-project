import DataTable from "react-data-table-component";
import { COLUMNS } from "../utils/constants";
import useFetchUsers from "../utils/useFetchUsers";
import { useSelector } from "react-redux";

const TableBody = () => {

  const users = useSelector((store) => store?.users?.usersData);
  
  useFetchUsers();
   

  return (
    <div className="sm:mx-16 mt-10">
         <DataTable className="border rounded-lg border-gray-200"  columns={COLUMNS} data={users} pagination/> 
    </div>
  );
};

export default TableBody;
