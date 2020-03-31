import React from "react";

// This import is only needed when checking authentication status directly from getInitialProps
import auth0 from "../../lib/auth0";
import { fetchUser } from "../../lib/user";
import Layout from "../../components/Layout";

function ProfileCard({ user }) {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <img src={user.picture} alt="user picture" />
        <br />
        <br />
        <h3>Nickname: {user.nickname}</h3>
        <form>
          <div class="form-group">
            <label for="exampleSelect1">
              <legend> Activities</legend>
            </label>
            <br />
            <select class="form-control" id="exampleSelect1">
              <option>Physical Activities</option>
              <option>Mental Activities</option>
            </select>
            <br />
            <button type="button" id="submitBtn" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
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
