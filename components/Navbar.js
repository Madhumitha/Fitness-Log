import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      FITNESS LOG
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor02"
      aria-controls="navbarColor02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link href="/">
            <a class="nav-link"> Home </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link href="/fitness">
            <a class="nav-link"> Fitness </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link href="/map">
            <a class="nav-link"> Map </a>
          </Link>
        </li>
      </ul>

      <button class="btn btn-secondary my-2 my-sm-0" type="submit">
        Login / Signup
      </button>
    </div>
  </nav>
);

export default Navbar;
