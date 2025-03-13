import React from "react";

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
    <div className="p-6 w-full lg:w-1/2 mx-auto bg-white rounded-2xl shadow-md space-y-4 border border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full border border-gray-300"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            @{user.login}
          </a>
          {user.bio && <p className="text-gray-600 text-sm mt-1">{user.bio}</p>}
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
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
          className="block text-blue-500 hover:underline text-center"
        >
          Twitter: @{user.twitter_username}
        </a>
      )}
    </div>
  );
};

export default UserInfo;
