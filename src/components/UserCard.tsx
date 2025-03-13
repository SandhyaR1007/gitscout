import { Link } from "react-router-dom";
import {
  addToStarred,
  removeFromStarred,
} from "../app/features/user/userSlice";
import { useAppDispatch } from "../app/hooks";

interface UserCardProps {
  userName: string;
  avatar: string;
  id?: number;
  type: string;
  isStarred?: boolean;
}
const UserCard = ({
  userName,
  avatar,
  type,
  isStarred = false,
}: UserCardProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (!isStarred) {
      dispatch(addToStarred(userName));
    } else {
      dispatch(removeFromStarred(userName));
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/user/${userName}`} className="flex gap-4 items-center">
        <img
          className="h-20 w-20 rounded-full object-cover"
          src={avatar}
          alt={userName}
        />
        <div>
          <span className="text-lg font-semibold">{userName}</span>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      </Link>
      <button
        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
        onClick={handleClick}
      >
        {isStarred ? "UnStar" : "Star"}
      </button>
    </div>
  );
};

export default UserCard;
