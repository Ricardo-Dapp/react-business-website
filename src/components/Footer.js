import React from "react";
import "../Footer.css";

export default function Footer() {
  return (
    <footer>
      <h2>Let's get to Work.</h2>
      <h4>
        We are here to deliver results. Fill out the form below if you are ready
        to grow your business.
      </h4>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
      </form>
      <form>
        <textarea placeholder="Message"></textarea>
      </form>
      <button>Send</button>
    </footer>
  );
}
