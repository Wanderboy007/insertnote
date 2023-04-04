import Styles1 from "../../styles/navebar.module.css";
import { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
export default function Nbar({ hey }) {
  const [noti, setnoti] = useState(true);

  return (
    <>
      <div className={Styles1.body}>
        <div className={Styles1.grid}>
          <h1 className={Styles1.navLeft}>Nursing project</h1>

          <Link href="./">Home</Link>

          <Link href="./home">Notes</Link>

          {/* ++++++++++++++++++++++++++++++++++++++++ */}

          {noti ? (
            <div className="flex justify-center items-center">
              <Link href="#" onClick={() => setnoti(!noti)}>
                Notification
              </Link>
              <MdNotificationsActive
                className="relative left-3 text-blue-500 -rotate-12
              "
              />
            </div>
          ) : (
            <div>
              <Link href="#">Notification</Link>
              <div className="relative bg-slate-200 flex flex-col gap-2">
                {/* {hey.map((he) => (
                  <div className="flex justify-center items-center bg-blue-200 p-5 gap-5 w-[500]">
                    <div className="text-lg">
                      <VscAccount />
                    </div>
                    <div className="text-sm">{he.message}</div>
                  </div>
                ))} */}
              </div>
            </div>
          )}

          {/* +++++++++++++++++++++++++++++++++++++++++ */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const a = [
    {
      name: "Tejas",
      message: "Hi i commented this",
    },
    {
      name: "Tejas",
      message: "Hi i commented this",
    },
    {
      name: "Tejas",
      message: "Hi i commented this",
    },
  ];
  return {
    props: { hey: a },
  };
}
