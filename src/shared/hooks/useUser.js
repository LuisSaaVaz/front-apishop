import { useEffect, useState } from "react";
import { getUserService } from "../services";

export const useUser = (id) => {
  const [profileUser, setProfileUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        setError("");
        const user = await getUserService(id);
        setProfileUser(user);
        setName(user.name);
        setBio(user.bio);
        setAvatar(user.avatar);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id, name, bio, avatar]);

  return {
    profileUser,
    name,
    setName,
    bio,
    setBio,
    avatar,
    setAvatar,
    loading,
    setLoading,
    error,
  };
};
