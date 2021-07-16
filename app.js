var Submit = document.querySelector('.submit');
var inputValue = document.querySelector('.inputValue');
var Name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

Submit.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=55df72f901718e32c0b3571b59b00475'+'&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
       
        var descValue = data['weather'][0]['description'];
       
        Name.innerHTML = nameValue;
        temp.innerHTML = tempValue + `°C`;
        desc.innerHTML = descValue;
    })
})
