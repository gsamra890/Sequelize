async function populateRestaurant() {
  const diningRequest = await fetch("/api/dining");
  const diningData = await diningRequest.json();
  const name = document.querySelector(".id");
  const name = document.querySelector(".name");
  const name = document.querySelector(".address");
  console.table(diningData);

  diningData.data.forEach((item) => {
    const appendItem = document.createElement("ul");
    appendItem.classList.add("title", "has-text-centered", "is-parent", "is-3");
    appendItem.classList('.id')
    appendName.innerHTML = ` ${item.hall_address.split(',')[0]}`;
    id.append(appendName)

    const appendItem = document.createElement("ul");
    appendItem.classList.add("title", "has-text-centered", "is-parent", "is-3");
    appendItem.classList('.name')
    appendName.innerHTML = ` ${item.hall_name}`;
    name.append(appendName)

    const appendItem = document.createElement("ul");
    appendItem.classList.add("title", "has-text-centered", "is-parent", "is-3");
    appendItem.classList('.address')
    appendName.innerHTML = ` ${item.hall_address.split(',')[0]}`;
    address.append(appendName)
  });
}

async function windowActions() {
  populateRestaurant();
}

window.onload = windowActions();
