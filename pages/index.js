import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import HomeImage from "../components/HomeImage";
import { useFetchUser } from "../lib/user";

function Index() {
  const { user, loading } = useFetchUser();

  return (
    <>
      <Layout user={user} loading={loading}>
        <main>
          <div class="jumbotron">
            <h1 class="display-3">Fitness Log</h1>
            {loading && <p>Loading login info...</p>}

            {!loading && !user && (
              <>
                <p>Application for recording physical and mental activities on daily basis</p>
              </>
            )}

            {user && (
              <>
                <img src={user.picture} alt="user picture" />
                <p>nickname: {user.nickname}</p>
                <p>name: {user.name}</p>
              </>
            )}
          </div>
        </main>
      </Layout>
      <HomeImage />
    </>
  );
}

export default Index;
