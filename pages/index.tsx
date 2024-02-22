import Link from "next/link";

const Index = () => {
  return (
    <div>
      <main className="h-screen">
        <h1>Hello</h1>
      </main>
      <Link href="/a">A page</Link>
      <hr className="my-20" />
      <Link href="/b">B page</Link>
    </div>
  );
};

export default Index;
