import React from "react";
import "./About.styles.css";

export default function About() {
  return (
    <div className="about-page">
      <h1>What is wrist shot? </h1>
      <p>
        Wrist shot is a website I made to learn full-stack web development, in
        particular I wanted to learn how to use React as a front end framework.{" "}
      </p>
      <h1>What is the purpose of this site? </h1>
      <p>
        This site was created for the sole purpose of learning how to make a
        website relatively from scratch. With that being said the site may be
        used to share and explore different watches. People are able to post
        images of their watches and other users may comment and like their
        "wrist shots".
      </p>
      <h1>How this site was made:</h1>
      <p>
        This website uses the MERN web stack (MongoDB, Express, React Nodejs). I
        made a custom RESTful API to crete and retrieve the data in my database.
      </p>
      <h1>Features:</h1>
      <ul>
        <li>User Authentication</li>
        <li>Persistent sign in</li>
        <li>User posts</li>
        <li>Asynchronous calls to the backend api</li>
        <li>Comment System</li>
        <li>
          Voting System: Images with the most votes are displayed at the top of
          the home page.
        </li>
      </ul>
      <h1>Still learning</h1>
      <p>
        I know there is a lot I can improve and my intention is to continue to
        update and make this site better.{" "}
      </p>
    </div>
  );
}
