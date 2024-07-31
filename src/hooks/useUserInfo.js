import { useSelector } from "react-redux";

const useUserInfo = ()=>{

    //subribing to the redux store to get the data of users information
    const users = useSelector((store) => store?.users?.users);

    //creating an array has which will retrive the unique values from user's data
    const countries = Array.from(new Set(users.map(user => user.address.country)));
    const genders = Array.from(new Set(users.map(user => user.gender)));


    //returning
    return [countries,genders];
}


export default useUserInfo;