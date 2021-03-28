async function populateRestaurant() {
  const diningRequest = await fetch("/api/dining");
  const diningData = await diningRequest.json();
  console.table(diningData);
  const dining_id = document.querySelector(".dining_id");
  const name = document.querySelector(".name");
  const address = document.querySelector(".address");
  

  diningData.data.forEach((item) => {
    const appendID = document.createElement("ul");
    //appendID.classList.add("title", "has-text-centered", "is-parent", "is-3");
    appendID.classList('.dining_id')
    appendID.innerHTML = ` ${item.hall_id}`;
    dining_id.append(appendID)

    const appendName = document.createElement("ul");
    //appendName.classList.add("title", "has-text-centered", "is-parent", "is-3");
    appendName.classList('.name')
    appendName.innerHTML = ` ${item.hall_name}`;
    name.append(appendName)

    const appendAddres = document.createElement("ul");
    //appendAddres.classList.add("title", "has-text-centered", "is-parent", "is-3");
    appendAddres.classList('.address')
    appendAddres.innerHTML = ` ${item.hall_address.split(',')[0]}`;
    address.append(appendAddres)
  });
}

async function windowActions() {
  populateRestaurant();
}

window.onload = windowActions();
