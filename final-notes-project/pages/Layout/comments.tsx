import React from "react";
import { useState } from "react";

interface comment {
  extra: string;
  body: string;
}

const dummycomment: Array<commemt> = [
  {
    extra: "extra",
    body: "asdasdas",
  },
  {
    extra: "extra",
    body: "babys",
  },
];

export default function comments() {
  const [comments, setcomments] = useState(dummycomment);
  const [message, setMessage] = useState("");
  const [extra, setextra] = useState("");

  const oncomment = () => {
    const newcom: comment = {
      extra: extra,
      body: message,
    };
    setcomments((prev) => [newcom, ...prev]);
  };

  const selecttext = () => {
    const a = window.getSelection().toString();
    console.log(a);
    setextra(a);
  };

  return (
    <div className="flex flex-col gap-6 h-screen w-screen p-6">
      <span className="text-3xl">React Nested Comments</span>

      <p onMouseUp={() => selecttext()}>
        Scientia | Public Library & Book Store Education WordPress Theme.
        Scientia is a beautiful modern WordPress template for the library, book
        and media store, author, and education websites. Kalium. Kalium is a
        spectacular WordPress theme for book lovers—that is all you truly need
        to know. However, there is a lot more to Kalium in features, layouts,
        and elements. Lorem Ipsum | Books & Media Store WordPress Theme. A
        writer’s website is one of the most important tools for promoting
        himself and his works. Lorem Ipsum can be a great basis for creating a
        modern online library, literature blog, or bookstore bureau. Booklovers
        | Publishing House & Book Store WordPress Theme. A good website is a
        smart inves
      </p>

      <div className="flex flex-col">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are your thoughts?"
          className="border-[1px] </div> border-zinc-400 p-4 w-3/4"
        />
        <button
          className="border-[1px] rounded-fullborder-zinc-400 w-20"
          onClick={() => oncomment()}
        >
          Comment
        </button>
        <div className="my-5">
          {comments.map((comment) => (
            <div className="border-[1px] border-slate-900 overflow-hidden my-5">
              <div className=" relative px-2 width-full">Username</div>
              <div className=" relative px-2 left-2 width-full">
                Question About:-
                {extra ? (
                  <span className="bg-yellow-200 mx-5">{comment.extra}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="border-[1px] px-2 border-slate-900 bg-slate-200">
                {comment.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
