import { useFlag } from "@src/useFlag";

export default function Home() {
  const login = useFlag("login");
  console.log(login);
  return <div>{login ? <button>Login</button> : "Not allowed"}</div>;
}
