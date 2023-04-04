import Link from "next/link";
import Styles from "../styles/main.module.css";
import { useState } from "react";

export default function Home() {
  const [hov, sethov] = useState(true);
  const [session, setsession] = useState(false);
  console.log(hov);
  return (
    <>
      <div className={Styles.body}>
        <div className={Styles.grid}>
          <h1 className={Styles.navLeft}>Nursing project</h1>

          <a href="./">Home</a>

          <a href="./home">About us</a>

          <a href="./login">welcome ,Tejas</a>
        </div>

        {/* main content */}

        {session ? (
          <div className={Styles.branchgrid}>
            {/* <div className={Styles.branchcard}>
            <h2 className={Styles.branchheading}>NEC-UG</h2>
            <ul className="flex flex-col">
              <a href="subject" className={Styles.year}>
                1<sup>st</sup> year
              </a>
              <a href="subject" className={Styles.year}>
                2<sup>nd</sup> year
              </a>
              <a href="subject" className={Styles.year}>
                3<sup>rd</sup> year
              </a>
              <a href="subject" className={Styles.year}>
                4<sup>th</sup> year
              </a>
            </ul>
          </div> */}
            <a
              href=""
              className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40"
            >
              Cardiac
            </a>
            <a
              href=""
              className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40"
            >
              Endocrine
            </a>
            <a
              href="burnpg"
              className="rounded-lg text-2xl hover:bg-cyan-900 opacity-100"
            >
              Burn
            </a>
            <a
              href=""
              className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40"
            >
              Neurology
            </a>
            <a
              href=""
              className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40"
            >
              Dermal
            </a>
            <a
              href=""
              className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40"
            >
              Respiratory
            </a>
            <a
              href=""
              className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40"
            >
              Muscular
            </a>
            <a
              href=""
              className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40"
            >
              Reproductive
            </a>
            <a
              href=""
              className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40"
            >
              Digestive
            </a>
          </div>
        ) : (
          <div
            className="text-center justify-center absolute top-1/2 left-1/3 text-7xl cursor-pointer"
            onClick={() => setsession(!session)}
          >
            welcome to notes
          </div>
        )}
      </div>
    </>
  );
}
