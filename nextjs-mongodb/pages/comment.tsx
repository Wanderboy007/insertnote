import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home({ posts }) {
  const com = posts.blogs;
  const [text, settext] = useState("");

  // function print(yu) {
  //   console.log(yu);
  // }
  async function sub() {
    const data = { id: 7, test: { text } };

    const res = await fetch("http://localhost:3000/api/write", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => settext(event.target.value)}
        />
        <button onClick={sub}>submit</button>
      </div>

      {com.map((com) => (
        <div>
          <p key={com.id}>
            <div>{com.test.text}</div>
          </p>
          <button key={com.id}>delete</button>
        </div>
      ))}
    </>
  );
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hey");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
