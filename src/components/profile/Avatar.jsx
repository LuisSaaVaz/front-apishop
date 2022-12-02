import useAuth from "../../shared/hooks/useAuth";
import { AvatarForm } from "./AvatarForm";
import { AvatarImage } from "./AvatarImage";

export const Avatar = ({ profileUser, setAvatar }) => {
  const { user } = useAuth();

  return (
    <article className="profileInfo__avatar">
      <AvatarImage user={profileUser} />
      {user && user?.id === profileUser.id && (
        <AvatarForm user={profileUser} setAvatar={setAvatar} />
      )}
    </article>
  );
};
