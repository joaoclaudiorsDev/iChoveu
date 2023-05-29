const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
  const data = await response.json();
  if (data.length === 0) {
    alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityUrl) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityUrl}`);
  const data = await response.json();
  const { location: { name, country },
    current: { temp_c: temp, condition: { text: condition, icon } } } = data;
  return { name, country, temp, condition, icon, url: `${cityUrl}` };
};

export const getForecast = async (element) => {
  const urls = element.target.name;
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${token}&q=${urls}&days=7`);
  const data = await response.json();
  const days = data.forecast.forecastday;
  const end = days.map((element2) => {
    const { date,
      day: { maxtemp_c: maxTemp,
        mintemp_c: minTemp,
        condition: { text: condition, icon } } } = element2;
    return { date, maxTemp, minTemp, condition, icon };
  });
  return end;
};
