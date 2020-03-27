import React from "react";

// This import is only needed when checking authentication status directly from getInitialProps
//import auth0 from "../lib/auth0";
import { useFetchUser } from "../lib/user";
import Layout from "../components/Layout";

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

function Profile() {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout>
  );
}

export default Profile;
