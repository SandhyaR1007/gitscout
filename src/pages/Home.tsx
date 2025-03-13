import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import UserList from "../components/UserList";
import { useAppSelector } from "../app/hooks";

const Home = () => {
  const { currentSearchQuery } = useAppSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    if (currentSearchQuery) setSearchQuery(currentSearchQuery);
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UserList />
    </div>
  );
};

export default Home;
