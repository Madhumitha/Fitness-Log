import React from "react";

import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import FitnessOption from "../components/FitnessOption";

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
      <FitnessOption />
    </Layout>
  );
};

export default Fitness;
