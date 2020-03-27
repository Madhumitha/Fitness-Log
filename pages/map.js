import React from "react";

import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

function ProfileCard({ user }) {
  return (
    <>
      <div>
        <h3>Nickname: {user.nickname}</h3>
      </div>
    </>
  );
}

const Map = () => {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout>
  );
};

export default Map;
