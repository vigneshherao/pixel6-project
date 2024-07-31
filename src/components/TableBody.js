import DataTable from "react-data-table-component";
import { COLUMNS } from "../utils/constants";
import useFetchUsers from "../utils/useFetchUsers";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const TableBody = () => {
  
  //subscribing the store for getting user Detail from data slice
  const users = useSelector((store) => store?.users?.usersData);
  
  //Calling the custom hook for the dispatching the data to store
  useFetchUsers();

  //Conditional Rendering if user is null return shimmer
  if(!users){
    return <Shimmer/>
  }
  
  return (
    <div className="sm:mx-16 mt-10">
         <DataTable className="border rounded-lg border-gray-200"  columns={COLUMNS} data={users} pagination/> 
    </div>
  );
};

export default TableBody;
