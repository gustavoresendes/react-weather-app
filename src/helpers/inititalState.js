const initialState = {
  location: {
    name: "-",
    region: "-",
    country: "-",
  },
  current: {
    temp_c: 0,
    condition: {
      text: "-",
      icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
    },
  },
};

export default initialState;
