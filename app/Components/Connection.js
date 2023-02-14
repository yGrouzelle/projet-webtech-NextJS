import { useRouter } from "next/router";
import { useContext } from "react";
import { Context } from "../Components/UserContext";

export default function Connection() {
  const { user } = useContext(Context);
  const router = useRouter();

  const onClickLogin = async (e) => {
    if (!user) {
      router.push("./login");
    }
  };
  return (
    <div>
      <button onClick={onClickLogin}>Se connecter</button>
    </div>
  );
}
