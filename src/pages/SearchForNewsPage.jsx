import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";

const SearchForNewsPage = () => {
  // const { SearchWord } = useLocation();

  console.log(useLocation());
  return <Navbar />;
};

export default SearchForNewsPage;
