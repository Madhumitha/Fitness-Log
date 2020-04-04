import React from "react";
import Link from "next/link";

const Navbar = ({ user, loading }) => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      FITNESS LOG
    </a>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link href="/">
            <a class="nav-link"> Home </a>
          </Link>
        </li>

        {!loading &&
          (user ? (
            <>
              <li class="nav-item">
                <Link href="/advanced/ssr-profile">
                  <a class="nav-link"> Profile </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/log">
                  <a class="nav-link"> View-Log </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/add">
                  <a class="nav-link"> Add-Log </a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/api/logout">
                  Logout
                </a>
              </li>
            </>
          ) : (
            <li class="nav-item">
              <a class="nav-link my-2 my-lg-0" href="/api/login">
                Login
              </a>
            </li>
          ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
