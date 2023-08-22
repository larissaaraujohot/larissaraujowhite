function getGeolocationByIP() {
    const url = 'https://ipapi.co/json/';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const currentCity = data.city;
            const cityElements = document.querySelectorAll("#model-city");
            
            cityElements.forEach(element => {
                element.textContent = currentCity;
            });
        })
        .catch(error => {
            console.error("Error to get city name:", error);
        });
}

getGeolocationByIP();
