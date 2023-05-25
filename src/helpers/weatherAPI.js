const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const apiRain = fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
  console.log(apiRain);
  apiRain.then(
    (response) => {
      console.log(response);
      const resultPromise = response.json();
      resultPromise.then((data) => {
        console.log(data);
      });
    },
  );
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
