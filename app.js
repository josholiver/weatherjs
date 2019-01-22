// Init Storage
const storage = new Storage();
// get Stored Location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);


// init UI
const ui = new UI();


// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location
    weather.changeLocation(city, state);

    //Set Location in LS
    storage.setLocationData(city,state);

    // Get & display Weather
    getWeather();

    // Close Modal
    $('#locModal').modal('hide');
});


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}