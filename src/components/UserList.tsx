/* eslint-disable */

import { useAppSelector } from "../app/hooks";
import UserCard from "./UserCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const UserList = () => {
  const { users, loading } = useAppSelector((state) => state.users);
  if (loading)
    return Array(6)
      .fill(null)
      .map((k) => <Loader />);
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-2 p-3">
      {users.map(({ id, login, avatar_url, type }: any) => (
        <Link key={id} to={`/user/${login}`}>
          <UserCard userName={login} avatar={avatar_url} type={type} />
        </Link>
      ))}
    </div>
  );
};

export default UserList;
