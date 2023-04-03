function attachEvents() {
  const city = document.getElementById("location");
  const getWeatherBtn = document.getElementById("submit");
  const forecastContainer = document.getElementById("forecast"); //div
  const currentForecastContainer = document.getElementById("current"); //div
  const threeDaysForecastContainer = document.getElementById("upcoming"); //div
  const LOCATIONS_LINK = "http://localhost:3030/jsonstore/forecaster/locations";
  const CURRENTWEATHER_BASE_LINK ="http://localhost:3030/jsonstore/forecaster/today/";
  const THREEDAYSWEATHER_BASE_LINK ="http://localhost:3030/jsonstore/forecaster/upcoming/";
  let cityCode = "";
  let conditionSymbol = '';

  getWeatherBtn.addEventListener("click", showWeatherForecast);

  function showWeatherForecast() {
    
    fetch(LOCATIONS_LINK, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        forecastContainer.style.display = "inline";
        for (const { name, code } of data) {
          if (name == city.value) {
            cityCode = code;
            currentWeather();
            threeDays();
          }
        }
      })
      .catch((err) => {
        forecastContainer.style.display = 'none';
        document.querySelector('#current > div').textContent = 'Error';
      });

    function currentWeather() {
      fetch(`${CURRENTWEATHER_BASE_LINK}${cityCode}`, { method: "GET" })
        .then((res) => res.json())
        .then(({forecast, name}) => {
            conditionSymbol = forecast.condition;

            let currForecastForecastChild = createElement("div", "", currentForecastContainer, "", ["forecasts"]);

            createElement('span', '', currForecastForecastChild, '', ['condition', 'symbol']);
            document.querySelector('#current > div.forecasts > span').innerHTML = `${getConditionSymbol(conditionSymbol)}`;

            let classConditionParent = createElement('span', '', currForecastForecastChild, '', ["condition"]);
            createElement('span', name, classConditionParent, '', ["forecast-data"]);

            createElement('span', '', classConditionParent, '', ["forecast-data"]);
            document.querySelector('#current > div.forecasts > span:nth-child(2) > span:nth-child(2)').innerHTML = `${forecast.low}&#176;/${forecast.high}&#176;`;

            createElement('span', conditionSymbol, classConditionParent, '', ["forecast-data"]);
        })
        .catch((err) => {
          forecastContainer.style.display = 'none';
        document.querySelector('#current > div').textContent = 'Error';
        })
    }

    function threeDays() {
      fetch(`${THREEDAYSWEATHER_BASE_LINK}${cityCode}`, {method: "GET"})
      .then((res) => res.json())
      .then(({forecast, name}) => {
        conditionSymbol = forecast.condition;
        let threeForecastInfoChild = createElement('div', '', threeDaysForecastContainer, '', ["forecast-info"]);

        for (const {condition, high, low} of forecast) {
           let upcomingSpan = createElement('span', '', threeForecastInfoChild, '', ["upcoming"]);

            let firstSpan = createElement('span', '', upcomingSpan, '', ["symbol"]);
            firstSpan.innerHTML = `${getConditionSymbol(condition)}`;

            let secondSpan = createElement('span', '', upcomingSpan, '', ["forecast-data"]);
            secondSpan.innerHTML = `${low}&#176;/${high}&#176;`;

            createElement('span', condition, upcomingSpan, '', ["forecast-data"]);
         }
      }) 
      .catch((err) => {
        forecastContainer.style.display = 'none';
        document.querySelector('#current > div').textContent = 'Error';
      })
    }

  }

  function getConditionSymbol(condition) {
    let innerHTMLToAppend = '';
    if(condition === 'Sunny') {
     innerHTMLToAppend = '&#x2600;';
    } else if(condition === 'Partly sunny') {
      innerHTMLToAppend = '&#x26C5;';
    } else if(condition === 'Overcast') {
      innerHTMLToAppend = '&#x2601;';
    } else if(condition === 'Rain') {
      innerHTMLToAppend = '&#x2614;';
    } 
    return innerHTMLToAppend;
  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== "input" && type !== "textarea") {
      htmlElement.textContent = content;
    }

    if (content && (type === "input" || type === "textarea")) {
      htmlElement.value = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}

attachEvents();
