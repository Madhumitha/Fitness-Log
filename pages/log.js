import React from "react";

import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import FitnessList from "../components/FitnessList";

function ProfileCard({ user }) {
  return (
    <div>
      <h3>Nickname: {user.nickname}</h3>
    </div>
  );
}

const Fitness = () => {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
      <FitnessList />
    </Layout>
  );
};

export default Fitness;
