/* eslint-disable */

import { useAppSelector } from "../app/hooks";
import UserCard from "./UserCard";
import Loader from "./Loader";

const UserList = () => {
  const { users, loading } = useAppSelector((state) => state.users);

  if (loading)
    return Array(6)
      .fill(null)
      .map((_, idx) => <Loader key={idx} />);

  if (!users.length)
    return <p className="text-center text-gray-500">No users found.</p>;

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-2 p-3">
      {users.map(({ id, login, avatar_url, type, ...rest }: any) => (
        <UserCard
          key={id}
          userName={login}
          avatar={avatar_url}
          type={type}
          isStarred={rest?.isStarred ?? false}
        />
      ))}
    </div>
  );
};

export default UserList;
