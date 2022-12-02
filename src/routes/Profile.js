import { UserInfo } from "../components/products/UserInfo";
import { Inventory } from "../components/profile/Inventory";
import useAuth from "../shared/hooks/useAuth";

import "../styles/profile.css";

const Profile = () => {
  const { user } = useAuth();

  if (user)
    return (
      <div className="page__container">
        <section className="profile__container">
          <UserInfo userInfo={user} />
          <Inventory id={user.id} />
        </section>
      </div>
    );
};

export default Profile;
