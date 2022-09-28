import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Skeleton } from "../components/User/Skeleton";
import { User } from "../components/User";

import { selectInvitedUsers } from "../redux/invitedUsers/selectors";
import { useAppDispatch } from "../redux/store";
import { fetchUsers } from "../redux/user/asyncActions";
import { selectUsers } from "../redux/user/selectors";
import { findUser } from "../redux/user/slice";
import { UserType } from "../redux/user/types";

const Home = () => {
  const dispatch = useAppDispatch();
  const { users, searchValue } = useSelector(selectUsers);
  const { invitedUsers } = useSelector(selectInvitedUsers);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      dispatch(fetchUsers());

      setIsLoading(false);
    } catch (error) {
      alert("Cannot get users");
    }
  }, []);

  if (!users) {
    return <>Loading...</>;
  }

  const filterUsers = (users: UserType[]) => {
    return users.filter(
      (user) =>
        user.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          placeholder="Find user..."
          value={searchValue}
          onChange={(event) => dispatch(findUser(event.target.value))}
        />
        {searchValue && (
          <button onClick={() => dispatch(findUser(""))}>
            <img src="/assets/clear.svg" />
          </button>
        )}
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <ul className="users-list">
          {filterUsers(users).map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      )}

      <Link to="success">
        <button
          disabled={invitedUsers.length === 0}
          className="send-invite-btn"
        >
          {invitedUsers.length > 0
            ? `Send invitation to ${invitedUsers.length} users`
            : "You do not select users to invite"}
        </button>
      </Link>
    </>
  );
};

export default Home;
