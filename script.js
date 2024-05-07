// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=mumbai';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '9db8891be0msh5b3459f6370088dp1239bcjsne48691987ae4',
//     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//   }
// };

const getWeather = (city) => {
  if (city[0] == city[0].toLowerCase()) {
    city = city.charAt(0).toUpperCase() + city.slice(1);
    cityName.innerHTML = city;
  }
  else {
    cityName.innerHTML = city;
  }

  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9db8891be0msh5b3459f6370088dp1239bcjsne48691987ae4',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  let p = fetch(url, options);
  p.then((response) => {
    return response.json();
  }).then((value) => {
    console.log(value)

    // if (document.querySelector('input').value !== value.location.name) {
    //   document.getElementById('submit').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     alert("City not found. Please enter a valid city name.");
    //   })
    // }

    //else {
      feelslike_c.innerHTML = value.current.feelslike_c
      feelslike_f.innerHTML = value.current.feelslike_f
      humidity.innerHTML = value.current.humidity
      precip_in.innerHTML = value.current.precip_in
      precip_mm.innerHTML = value.current.precip_mm
      pressure_in.innerHTML = value.current.pressure_in
      temp_c.innerHTML = value.current.temp_c
      temp_f.innerHTML = value.current.temp_f
      wind_degree.innerHTML = value.current.wind_degree
      wind_dir.innerHTML = value.current.wind_dir
      wind_kph.innerHTML = value.current.wind_kph
      wind_mph.innerHTML = value.current.wind_mph
    //}
  })
}

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.querySelector('input').value;
  if (city == '') {
    alert("Please enter a city name")
  }
  else {
    getWeather(city);
  }
});

getWeather("Mumbai")