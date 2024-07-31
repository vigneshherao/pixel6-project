import { useEffect} from "react";
import { User_DATA } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUsersData } from "../utils/dataSlice";

const useFetchUsers = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const data = await fetch(User_DATA);
    const dataJson = await data.json();
    dispatch(addUsersData(dataJson?.users));
  };
};



export default useFetchUsers;
