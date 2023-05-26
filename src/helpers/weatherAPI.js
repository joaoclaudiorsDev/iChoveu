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
