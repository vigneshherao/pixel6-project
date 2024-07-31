import { useDispatch, useSelector } from 'react-redux';
import { addFilterdData} from '../utils/dataSlice';


const useFilterData = (item) => {

//subscribing to the redux store to retrive data
  const usersData = useSelector((store) => store?.users?.users);
  const dispatch = useDispatch();


  
  const filterData = (item) => {
    let filteredData;
    if (item === "United States") {
      filteredData = usersData.filter(
        (user) => user?.address?.country === item
      );
    } else {
      filteredData = usersData.filter((user) => user?.gender === item);
    }

    //adding filterted data to store using dispatching an action
    dispatch(addFilterdData(filteredData));
  };

  return filterData;
};



export default useFilterData;
