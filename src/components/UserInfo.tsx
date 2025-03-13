import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface UserInfoProps {
  login?: string;
  avatar_url?: string;
  html_url?: string;
  name?: string;
  bio?: string;
  twitter_username?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
}

const UserInfo: React.FC<UserInfoProps> = (user) => {
  return (
    <div className="p-6 w-full lg:w-1/2 mx-auto bg-white rounded-2xl shadow-md space-y-4 border border-gray-200 my-3">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url || "https://via.placeholder.com/80"}
          alt={user.login || "User avatar"}
          className="w-20 h-20 rounded-full border border-gray-300 transition-transform hover:scale-105"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700 hover:underline transition-colors"
            aria-label={`Visit ${user.login}'s GitHub profile`}
          >
            @{user.login}
          </a>
          {user.bio ? (
            <p className="text-gray-600 text-sm mt-1">{user.bio}</p>
          ) : (
            <p className="text-gray-400 text-sm mt-1">No bio available.</p>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between text-sm text-gray-600">
        <p>
          Repos: <span className="font-semibold">{user.public_repos}</span>
        </p>
        <p>
          Followers: <span className="font-semibold">{user.followers}</span>
        </p>
        <p>
          Following: <span className="font-semibold">{user.following}</span>
        </p>
      </div>
      {user.twitter_username && (
        <a
          href={`https://twitter.com/${user.twitter_username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-indigo-500 hover:underline text-center"
          aria-label={`Follow ${user.login} on Twitter`}
        >
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          Twitter: @{user.twitter_username}
        </a>
      )}
      <div className="flex justify-center mt-4">
        <a
          href={`${user.html_url}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
          aria-label={`View ${user.login}'s repositories`}
        >
          View Repositories
        </a>
      </div>
    </div>
  );
};

export default UserInfo;
