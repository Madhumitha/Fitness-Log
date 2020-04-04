import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import AddFitness from "../components/AddFitness";
import { useFetchUser } from "../lib/user";

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
      <AddFitness />
    </Layout>
  );
};

export default Fitness;
