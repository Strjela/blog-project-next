import { headers } from "next/headers";
import config from "../config";

/* const fetchData = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(
    `${config.api}/api/firsts?=populate=*`,
    reqOptions
  );
  const response = await request.json();

  return response;
}; */

const About = /* async  */ () => {
  /* const data = await fetchData();
  console.log(data.data[0]); */
  return <h1>About</h1>;
};

export default About;
