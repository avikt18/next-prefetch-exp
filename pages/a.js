import Link from "next/link";

const someCalculation = () => {
  let a = 0;
  for (let i = 0; i < 10; i++) {
    a = a + i;
  }
  return a;
};

const A_Page = ({repo}) => {
  return (
    <div>
      <h1>A Page</h1>
      <div className="my-20">{someCalculation()}</div>
      <hr/>
      <div className="my-5">{JSON.stringify(repo)}</div>
      <Link href="/b">B page</Link>
    </div>
  );
};

export default A_Page;

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo } }
}
 
