import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ user, loading = false, children }) => (
  <>
    <Head>
      <title>Fitness-log</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
    </Head>
    <Navbar user={user} loading={loading} />
    <main>
      <br />
      <br />
      <div className="container">{children}</div>
    </main>
  </>
);

export default Layout;
