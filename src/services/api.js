const KEY = "9a7e620a163b4a42b99161709230401";

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  if (!fetchResponse.ok) {
    throw new Error(data.error)
  }
  return data;
};

export default fetchData;
