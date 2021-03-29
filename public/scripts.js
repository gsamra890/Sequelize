async function dinnerHall() {
  const diningRequest = await fetch("/api/dining");
  const diningData = await diningRequest.json();
  const diner = diningData.data;
  const check = document.querySelector(".target");

  diner.forEach((element) => {
    const checkEelement = document.createElement("tr");
    checkEelement.innerHTML = `
   <td>${element.hall_id}</td>
    <td>${element.hall_name}</td>
    <td>${element.hall_address}</td>`;
    check.append(checkEelement);
  });
}

async function windowActions() {
  dinnerHall();
}

window.onload = windowActions();
