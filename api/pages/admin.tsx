import { GetServerSideProps } from "next";
import { checkOne } from "@src/flags";

export default function AdminPage() {
  return <h1>Admin Page</h1>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const admin = await checkOne("admin");

  if (!admin) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
};
