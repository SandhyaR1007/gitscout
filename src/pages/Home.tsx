import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import UserList from "../components/UserList";
import { useAppSelector } from "../app/hooks";

const Home = () => {
  const { currentSearchQuery, users } = useAppSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    if (currentSearchQuery) setSearchQuery(currentSearchQuery);
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {!searchQuery.length && !users.length ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center text-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">
            Welcome to Gitscout!
          </h2>
          <p className="text-lg mb-4 max-w-md">
            Search for GitHub users by their username or name and explore their
            profiles.
          </p>
          <p className="text-sm text-gray-500">
            Start exploring now by typing in the search bar above!
          </p>
        </div>
      ) : (
        <UserList />
      )}
    </div>
  );
};

export default Home;
