import useAuth from "../../shared/hooks/useAuth";
import { InfoData } from "./InfoData";
import { InfoForm } from "./InfoForm";

export const Info = ({ profileUser, setName, setBio }) => {
  const { user } = useAuth();
  return (
    <article className="profileInfo__info">
      <InfoData user={profileUser} />
      {user && user?.id === profileUser.id && (
        <InfoForm user={profileUser} setName={setName} setBio={setBio} />
      )}
    </article>
  );
};
