async function getData() {
  const city = document.getElementById('city').value;
  const apiKey = `37d24e91eb34771180f3b70cbcc27e4a`;
 const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  try {
      const response = await fetch(apiUrl);
      const res = await response.json();
      if (res.cod === 200) {
        console.log(res);
           document.getElementById('cityName').innerText = res.name;
          document.getElementById('temp').innerText = `Temperature: ${res.main.temp}°C`;
          document.getElementById('typeTemp').innerText=`Weather: ${res.weather[0].main} `;
        const iconUrl=`https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
          document.getElementById('weatherIcon').src=iconUrl;
          document.getElementById('weatherIcon').style.display='inline';
         
      } else {
          document.getElementById('cityName').innerText = 'City not found';
          document.getElementById('temp').innerText = '';
          document.getElementById('typeTemp').innerText='';
          document.getElementById('weatherIcon').style.display='none';
      }
  } catch (error) {
      document.getElementById('cityName').innerText = 'Error fetching data';
      document.getElementById('temp').innerText = '';
      document.getElementById('typeTemp').innerText='';
      document.getElementById('weatherIcon').style.display='none';
  }
}