import { useEffect, useState } from "react";
import { User_DATA } from "./constants";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const data = await fetch(User_DATA);
    const dataJson = await data.json();
    setUsers(dataJson?.users);
  };


  return users;
};



export default useFetchUsers;
