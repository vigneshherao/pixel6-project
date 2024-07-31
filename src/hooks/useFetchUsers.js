import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { addUsersData } from "../utils/dataSlice";
import { User_DATA } from "../utils/constants";

const useFetchUsers = (initialLimit = 10) => {
  //dispatch function for redux store
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers(initialLimit);
  }, []);

  //function to fetch the data from the api
  const fetchUsers =async (num) => {
    const apiData = await fetch(User_DATA+num);
    const jsonData = await apiData.json();
    dispatch(addUsersData(jsonData?.users));
  };

  return fetchUsers;

};

export default useFetchUsers;
