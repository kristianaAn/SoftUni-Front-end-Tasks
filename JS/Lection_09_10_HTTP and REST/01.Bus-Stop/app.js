function getInfo() {
    const busId = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const bussesContainer = document.getElementById('buses');
    const BASE_LINK = "http://localhost:3030/jsonstore/bus/businfo/";

    bussesContainer.innerHTML = '';
    fetch(`${BASE_LINK}${busId.value}`, {method: "GET"})
    .then((res) => res.json())
    .then((bus) => {
         stopName.textContent = bus.name;
         let stopsObj = bus.buses;

         for (const busSchedule in stopsObj) {
            let busToAdd = document.createElement('li');
             busToAdd.textContent = `Bus ${busSchedule} arrives in ${stopsObj[busSchedule]} minutes`;
             bussesContainer.appendChild(busToAdd);
         }
         busId.value = '';

    })
    .catch((err) => {
        // console.error(err);
        stopName.textContent = 'Error';
    })
}