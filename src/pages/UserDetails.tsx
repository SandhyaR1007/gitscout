import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUserDetails } from "../app/features/user/userSlice";
import Loader from "../components/Loader";
import UserInfo from "../components/UserInfo";

const UserDetails = () => {
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const { userDetails, loading } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (username) dispatch(fetchUserDetails(username));
  }, [username, dispatch]);

  if (loading) return <Loader />;

  return userDetails ? <UserInfo {...userDetails} /> : <p>No user found.</p>;
};

export default UserDetails;
