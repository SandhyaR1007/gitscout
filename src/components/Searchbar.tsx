import { fetchUsers } from "../app/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { handleCurrentSearchQuery } from "../app/features/user/userSlice";

interface SearchbarProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const Searchbar = ({ searchQuery, setSearchQuery }: SearchbarProps) => {
  const dispatch = useAppDispatch();
  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(fetchUsers(searchQuery));
      dispatch(handleCurrentSearchQuery(searchQuery));
    }
  };
  const { loading } = useAppSelector((state) => state.users);

  return (
    <div className="flex items-center w-full max-w-lg mx-auto px-4 py-2 bg-white rounded-full shadow-md border border-gray-200 mt-10">
      <input
        className="flex-grow p-2 outline-none text-sm"
        type="search"
        placeholder="Search a user..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search for a GitHub user"
      />
      <button
        disabled={loading || !searchQuery}
        className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors font-sm cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed"
        onClick={handleSearch}
        aria-label="Search"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
