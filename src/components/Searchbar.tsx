interface SearchbarProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const Searchbar = ({ searchQuery, setSearchQuery }: SearchbarProps) => {
  return (
    <div>
      <input
        className=" w-full md:w-1/2 px-4 py-2 rounded-full border border-gray-300 m-2"
        type="search"
        placeholder="Search a user"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
