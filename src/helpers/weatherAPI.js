const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
    const data = await response.json();
    if (data.length === 0) {
      alert('Nenhuma cidade encontrada');
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherByCity = async (cityUrl) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityUrl}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert('Erro ao obter dados climáticos');
  }
};
