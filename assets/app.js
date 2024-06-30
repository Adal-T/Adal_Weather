document.getElementById('search').addEventListener('click', function(){
    const city = document.getElementById('city').value;
    const Api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b0ac8d6485d7ea602826ef6ef5fdf1c2&units=imperial`
    fetch(Api).then(function(response){
        return response.json()
    }) .then(function(data){
        console.log(data)
        const currentDay = data.list[0]
        document.getElementById('cityName').innerText = data.city.name
        document.getElementById('date').innerText = dayjs.unix(currentDay.dt).format('DD/MM/YYYY')
        document.getElementById('image').src = `https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`
        document.getElementById('temp').innerText = 'Temp:'+currentDay.main.temp + '°F'
        document.getElementById('humidity').innerText = currentDay.main.humidity + '%'
    })
})