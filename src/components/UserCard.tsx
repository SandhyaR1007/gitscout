interface UserCardProps {
  userName: string;
  avatar: string;
  id?: number;
  type: string;
}
const UserCard = ({ userName, avatar, type }: UserCardProps) => {
  return (
    <div className="flex shadow-sm rounded-md p-5 w-full border border-slate-300 hover:bg-slate-100 cursor-pointer transition-all delay-75 hover:translate-z-2">
      <div className="flex gap-10 w-full">
        <img className="h-20 w-20 rounded-full" src={avatar} alt={userName} />
        <div className="flex flex-col flex-wrap p-2">
          <span className="text-xl font-semibold underline truncate">
            {userName}
          </span>
          <p>{type}</p>
        </div>
      </div>
      <div className="">
        <button>Star</button>
      </div>
    </div>
  );
};

export default UserCard;
