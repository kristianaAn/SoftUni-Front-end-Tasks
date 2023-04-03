function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const travelStatus = document.getElementsByTagName('span')[0];
  const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
  let initialStop = "depot";
  let currStop = "Depot";

  function depart() {
    fetch(`${BASE_URL}${initialStop}`)
      .then((res) => res.json())
      .then((data) => {
        travelStatus.textContent = `Next stop ${data.name}`;
        currStop = data.name;
        initialStop = data.next;
        arriveBtn.disabled = false;
        departBtn.disabled = true;
      });
  }

  async function arrive() {
    travelStatus.textContent = `Arriving at ${currStop}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
