import config from "./config";

const fetchData = async (params: string) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const request = await fetch(
    `${config.api}/api/articles?populate=*&${params}`,
    reqOptions
  );
  const response = await request.json();

  return response;
};

export default fetchData;
