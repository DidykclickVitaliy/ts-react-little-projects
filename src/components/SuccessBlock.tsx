import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectInvitedUsers } from "../redux/invitedUsers/selectors";
import { clearInvites } from "../redux/invitedUsers/slice";
import { useAppDispatch } from "../redux/store";

export const SuccessBlock = () => {
  const { invitedUsers } = useSelector(selectInvitedUsers);
  const dispatch = useAppDispatch();

  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>An invitation has been sent to all {invitedUsers.length} users.</p>
      <Link to="/">
        <button
          className="send-invite-btn"
          onClick={() => dispatch(clearInvites())}
        >
          Back
        </button>
      </Link>
    </div>
  );
};
