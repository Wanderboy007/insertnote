import { useState } from "react";

interface Comment {
  body: string;
}
const dummyComments: Array<Comment> = [];

export default function Home() {
  const [comments, setComments] = useState(dummyComments);

  const onComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]);
  };
  return (
    <div className="flex flex-col gap-3 h-screen w-screen p-6 border">
      <span className="text-3xl">Comment Here</span>

      <CommentInput onComment={onComment} />
      <div className="flex flex-col gap-4">
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </div>
    </div>
  );
}

interface CommentItemProps {
  comment: Comment;
}
const CommentItem = ({ comment }: CommentItemProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState(comment.comments);

  const onComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="flex flex-col border-[1px] border-zinc-500 rounded-md p-3">
      <span>{comment.body}</span>
      {isReplying ? (
        <button
          className="border-[1px] rounded-full border-zinc-400 w-20"
          onClick={() => setIsReplying(false)}
        >
          Cancle
        </button>
      ) : (
        <button
          className="border-[1px] rounded-full border-zinc-400 w-20"
          onClick={() => setIsReplying(true)}
        >
          Reply
        </button>
      )}
      {isReplying && <CommentInput onComment={onComment} />}
      <div className="flex flex-col gap-3">
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </div>
    </div>
  );
};

interface CommentInputProps {
  onComment: (newComment: Comment) => void;
}
const CommentInput = ({ onComment }: CommentInputProps) => {
  const [commentBody, setCommentBody] = useState("");
  return (
    <div className="flex flex-col mt-4">
      <input
        value={commentBody}
        onChange={(event) => setCommentBody(event.target.value)}
        placeholder="What are your thoughts?"
        className="border-[1px] border-zinc-400 w-3/4"
      />
      <button
        className="border-[1px] rounded-full border-zinc-400 w-20"
        onClick={() => {
          onComment({ body: commentBody, comments: [] });
          setCommentBody("");
        }}
      >
        Comment
      </button>
    </div>
  );
};
