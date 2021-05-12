
async function dinnerHall() {
  const diningRequest = await fetch("/api/dining");
  //console.log(diner);
  const diningData = await diningRequest.json();
  //console.table(diningRequest);
  const diner = diningData.data;
  console.table(diner);
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

window.onload = windowActions;