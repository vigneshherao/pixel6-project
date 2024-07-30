import DataTable from "react-data-table-component";
import { COLUMNS } from "../utils/constants";
import useFetchUsers from "../utils/useFetchUsers";

const TableBody = () => {
  
  const users = useFetchUsers();

  return (
    <div className="sm:mx-16 mt-10">
         <DataTable className="border rounded-lg border-gray-200"  columns={COLUMNS} data={users} pagination/> 
    </div>
  );
};

export default TableBody;
