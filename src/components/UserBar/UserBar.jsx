import css from "./user-bar.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/auth-selectors";
import { getFirstLetter } from "../../helpers/helpers";

const UserBar = () => {
  const user = useSelector(selectUser);
  return (
    <div className={css.userWrapper}>
      <span className={css.userIcon}>
        {user ? getFirstLetter(user.name) : ""}
      </span>

      <p className={css.userName}>{user.name}</p>
    </div>
  );
};
export default UserBar;
