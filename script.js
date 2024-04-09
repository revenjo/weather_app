document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            const weatherHtml = `
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
            weatherInfo.innerHTML = weatherHtml;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
