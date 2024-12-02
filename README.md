# Weather App

## Overview
Hello, this is a simple **Weather App** that fetches real-time weather data using the OpenWeatherMap API. It allows users to search for a city and displays its current temperature, weather conditions, and timezone information. 


## Features
- **Search Weather by City:** Input any city name to get real-time weather updates.
- **Time Zone Display:** Displays the city's timezone in UTC offset format.
- **Error Handling:** Provides appropriate error messages for invalid city names or network issues.


## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **OpenWeatherMap API**

---

## Project Structure
```
project-directory/
├── index.html         # Main HTML file
├── app.js             # JavaScript file for functionality
├── styles.css         # CSS file for styling
└── README.md          # Project documentation
```

---

### Steps I Ran
1. I cloned the repo
 
2. Opened the project folder in VS n slowly build the html,css n js.

3. Go Live

4. Opened the app in my browser at `http://127.0.0.1:5500/`.

5. Enter a city name in the search bar and press the button to get weather updates.


## API Integration
This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. 


## Features in Detail
### 1. Dynamic Weather Display
- Clear sky: Shows a bright background with a sun icon.
- Rain: Displays a rainy background with animated raindrops.
- Clouds: Displays a cloudy background with animated clouds.

### 2. Error Handling
- If the city is not found, a message prompts the user to try again.
- Network issues are caught and displayed as error messages.

### 3. Timezone Conversion
- Converts the city’s timezone from seconds to a readable UTC offset format.


## Contribution
Feel free to contribute to this project! Here’s how you can help:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

**Happy Coding!** 


## License
This project is licensed under the [MIT License](LICENSE).


## Acknowledgements
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data.
- [MDN Web Docs](https://developer.mozilla.org/) for JavaScript and Web Development resources.
