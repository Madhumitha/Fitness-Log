import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

function ProfileCard({ user }) {
  return (
    <div>
      <h3>Nickname: {user.nickname}</h3>
    </div>
  );
}

const Add = () => {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
      <section id="wrapper">
        <div id="wrapper-contents">
          <h1>Physical fitness</h1>
          <form onSubmit={e => addTeam(e)}>
            <ul className="flex-outer">
              <
            </ul>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Add;
