/* eslint-disable */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import UserList from "../components/UserList";

vi.mock("../components/UserCard", () => ({
  default: ({ userName, avatar, type, isStarred }: any) => (
    <div data-testid={`user-card-${userName}`} className="border">
      <img src={avatar} alt={userName} />
      <span>{userName}</span>
      <span>{type}</span>
      {isStarred && <span>★</span>}
    </div>
  ),
}));

vi.mock("../components/Loader", () => ({
  default: () => <div data-testid="shimmer">Loading...</div>,
}));

const mockStore = configureStore([]);

describe("UserList Component", () => {
  it("renders a list of users correctly", () => {
    const initialState = {
      users: {
        users: [
          {
            id: 1,
            login: "user1",
            avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
            type: "User",
          },
          {
            id: 2,
            login: "user2",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            type: "Organization",
          },
        ],
        loading: false,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserList />
        </MemoryRouter>
      </Provider>
    );

    // Assert that the users are rendered
    expect(screen.getByText("user1")).toBeInTheDocument();
    expect(screen.getByText("user2")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
    expect(screen.getByText("Organization")).toBeInTheDocument();

    const avatarImages = screen.getAllByRole("img");
    expect(avatarImages).toHaveLength(2);
    expect(avatarImages[0]).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/583231?v=4"
    );
    expect(avatarImages[1]).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/1?v=4"
    );
  });

  it("displays loading shimmer effect when loading", () => {
    const initialState = {
      users: {
        users: [],
        loading: true,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserList />
        </MemoryRouter>
      </Provider>
    );

    // Should show 6 shimmer loaders
    const shimmers = screen.getAllByTestId("shimmer");
    expect(shimmers).toHaveLength(6);
  });

  it("displays an empty state when no users are found", () => {
    const initialState = {
      users: {
        users: [],
        loading: false,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserList />
        </MemoryRouter>
      </Provider>
    );

    // Assert that the empty state message is displayed
    expect(screen.getByText("No users found.")).toBeInTheDocument();
  });

  it("renders users with starred status correctly", () => {
    const initialState = {
      users: {
        users: [
          {
            id: 1,
            login: "user1",
            avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
            type: "User",
            isStarred: true,
          },
          {
            id: 2,
            login: "user2",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            type: "User",
            isStarred: false,
          },
        ],
        loading: false,
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserList />
        </MemoryRouter>
      </Provider>
    );

    // Check all users are present
    expect(screen.getByTestId("user-card-user1")).toBeInTheDocument();
    expect(screen.getByTestId("user-card-user2")).toBeInTheDocument();
  });
});
