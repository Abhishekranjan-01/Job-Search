export default function getData(query, filters) {
  const url = import.meta.env.VITE_API_URL + query + filters;

  const options = {
    // mode: "no-cors",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_HOSTNAME,
    },
  };
  console.log("Options:\t", options);

  return fetch(url, options)
    .then(async (resp) => {
      if (!resp.ok) {
        console.log(resp);
        throw new Error("Response Error");
      }
      return await resp.json();
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
}
