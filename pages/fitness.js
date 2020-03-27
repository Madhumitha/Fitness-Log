import React from "react";

import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

function ProfileCard({ user }) {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <img src={user.picture} alt="user picture" />
        <br />
        <br />
        <h3>Nickname: {user.nickname}</h3>
        <h2>Mail: {user.name}</h2>
      </div>
    </>
  );
}

const Fitness = () => {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout>
  );
};

export default Fitness;
