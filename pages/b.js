import { useState } from "react";
import { useEffect } from "react";

const Heading = () => <h1>B Page</h1>;

const B_Page = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/1");
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    getData();
  }, []);
  return (
    <div>
      {<Heading />}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default B_Page;
