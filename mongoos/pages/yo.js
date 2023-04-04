import SuperJSON from "superjson";

export default function Home(props) {
  console.log(props.Hi[0].name);
  return (
    <>
      <div>{props.Hi[0].name}</div>
      <div>{props.Hi[0].email}</div>
      <div>{props.Hi[0].movie_id}</div>
      <div>{props.Hi[0].text}</div>
      <div>{props.Hi[0].date}</div>
    </>
  );
}

export async function getStaticProps() {
  const umm = await fetch("http://localhost:3000/api/com");
  const h = await umm.json();
  console.log(h);
  return {
    props: { Hi: h },
  };
}
