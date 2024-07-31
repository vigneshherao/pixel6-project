import DataTable from "react-data-table-component";
import { COLUMNS } from "../utils/constants";
import useFetchUsers from "../hooks/useFetchUsers";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import InfiniteScroll from "react-infinite-scroll-component";

const TableBody = () => {
  //subscribing to store to retrive the users data from redux store
  const users = useSelector((store) => store?.users?.usersData);

  const fetchUsers = useFetchUsers();

  //calling the fetchUser function with adding 10 record each
  const handleNextData = () => {
    fetchUsers(users.length + 10);
  };

  // Conditional Rendering if user is null return shimmer
  if (!users) {
    return <Shimmer />;
  }

  return (
    <div className="sm:mx-16 mt-10">
      <InfiniteScroll
        dataLength={users.length}
        hasMore={true}
        next={handleNextData}
        loader={<Shimmer />}
      >
        <DataTable
          className="border rounded-lg border-gray-200"
          columns={COLUMNS}
          data={users}
        />
      </InfiniteScroll>
    </div>
  );
};

export default TableBody;
