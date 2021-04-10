function getRamdom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min  + 1)+ min);
}


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

async function Meal() {
  const mealRequest = await fetch('/api/meals');
  const mealData =  await mealRequest.json();
  const meals = mealData.data
  const checkMeal = document.querySelector(".target2");

  console.log(mealData)
  const mealArr = [1,2,3,4,5,6,7,8,9,10];
  const slelect = mealArr.map((element) => {
    const num = getRandom(0, mealData.length -1);
    return mealData[num];

    
  })
  meals.forEach((element) => {
    const checkEelement = document.createElement("tr");
    checkEelement.innerHTML = `
   <td>${meals.meal_name}</td>
   <td>${meals.calories}</td>
   <td>${meals.carbs}</td>
   <td>${meals.sodium}</td>
   <td>${meals.fat}</td>
   <td>${meals.cholestrol}</td>
   <td>${meals.serving_size}</td>`


    checkMeal.append(checkEelement);
  });
  console.table(num)
  return num
}

async function Maker() {
  const table = Meal()
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
      text: "Meals and Macros"
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "stackedBar",
      name: "Calories",
      showInLegend: "true",
      dataPoints: [
        { y: num[0].calories, label: num[0].meal_name},
        { y: num[1].calories, label: num[1].meal_name},
        { y: num[2].calories, label: num[2].meal_name},
        { y: num[3].calories, label: num[3].meal_name },
        { y: num[4].calories, label: num[4].meal_name },
        { y: num[5].calories, label: num[5].meal_name },
        { y: num[6].calories, label: num[6].meal_name },
        { y: num[7].calories, label: num[7].meal_name },
        { y: num[8].calories, label: num[8].meal_name },
        { y: num[9].calories, label: num[9].meal_name },
      ]
    },
    {
      type: "stackedBar",
      name: "Carbs",
      showInLegend: "true",
      dataPoints: [
        { y: num[0].carbs, label: num[0].meal_name},
        { y: num[1].carbs, label: num[1].meal_name},
        { y: num[2].carbs, label: num[2].meal_name },
        { y: num[3].carbs, label: num[3].meal_name },
        { y: num[4].carbs, label: num[4].meal_name },
        { y: num[5].carbs, label: num[5].meal_name },
        { y: num[6].carbs, label: num[6].meal_name },
        { y: num[7].carbs, label: num[7].meal_name },
        { y: num[8].carbs, label: num[8].meal_name },
        { y: num[9].carbs, label: num[9].meal_name },
      ]
    },
    {
      type: "stackedBar",
      name: "Sodium",
      showInLegend: "true",
      dataPoints: [
        { y: num[0].sodium, label: num[0].meal_name},
        { y: num[1].sodium, label: num[1].meal_name},
        { y: num[2].sodium, label: num[2].meal_name },
        { y: num[3].sodium, label: num[3].meal_name },
        { y: num[4].sodium, label: num[4].meal_name },
        { y: num[5].sodium, label: num[5].meal_name },
        { y: num[6].sodium, label: num[6].meal_name },
        { y: num[7].sodium, label: num[7].meal_name },
        { y: num[8].sodium, label: num[8].meal_name },
        { y: num[9].sodium, label: num[9].meal_name },
      ]
    },
    {
      type: "stackedBar",
      name: "Protein",
      showInLegend: "true",
      dataPoints: [
        { y: num[0].protein, label: num[0].meal_name},
        { y: num[1].protein, label: num[1].meal_name},
        { y: num[2].protein, label: num[2].meal_name },
        { y: num[3].protein, label: num[3].meal_name },
        { y: num[4].protein, label: num[4].meal_name },
        { y: num[5].protein, label: num[5].meal_name },
        { y: num[6].protein, label: num[6].meal_name },
        { y: num[7].protein, label: num[7].meal_name },
        { y: num[8].protein, label: num[8].meal_name },
        { y: num[9].protein, label: num[9].meal_name },
      ]
    },
    {
      type: "stackedBar",
      name: "Fat",
      showInLegend: "true",
      dataPoints: [
        { y: num[0].fat, label: num[0].meal_name},
        { y: num[1].fat, label: num[1].meal_name},
        { y: num[2].fat, label: num[2].meal_name },
        { y: num[3].fat, label: num[3].meal_name },
        { y: num[4].fat, label: num[4].meal_name },
        { y: num[5].fat, label: num[5].meal_name },
        { y: num[6].fat, label: num[6].meal_name },
        { y: num[7].fat, label: num[7].meal_name },
        { y: num[8].fat, label: num[8].meal_name },
        { y: num[9].fat, label: num[9].meal_name },
      ]
      
    },

    {
      type: "stackedBar",
      name: "Cholesterol",
      showInLegend: "true",
      dataPoints: [
        { y: num[0].cholestrol, label: num[0].meal_name},
        { y: num[1].cholestrol, label: num[1].meal_name},
        { y: num[2].cholestrol, label: num[2].meal_name },
        { y: num[3].cholestrol, label: num[3].meal_name },
        { y: num[4].cholestrol, label: num[4].meal_name },
        { y: num[5].cholestrol, label: num[5].meal_name },
        { y: num[6].cholestrol, label: num[6].meal_name },
        { y: num[7].cholestrol, label: num[7].meal_name },
        { y: num[8].cholestrol, label: num[8].meal_name },
        { y: num[9].cholestrol, label: num[9].meal_name },
      ]
    },

    {
      type: "stackedBar",
      name: "Serving Size",
      showInLegend: "true",
      dataPoints: [
        { y: num[0].serving_size, label: num[0].meal_name},
        { y: num[1].serving_size, label: num[1].meal_name},
        { y: num[2].serving_size, label: num[2].meal_name },
        { y: num[3].serving_size, label: num[3].meal_name },
        { y: num[4].serving_size, label: num[4].meal_name },
        { y: num[5].serving_size, label: num[5].meal_name },
        { y: num[6].serving_size, label: num[6].meal_name },
        { y: num[7].serving_size, label: num[7].meal_name },
        { y: num[8].serving_size, label: num[8].meal_name },
        { y: num[9].serving_size, label: num[9].meal_name },
      ]
    }]
  
  });

  chart.render();
  function toggleDataSeries(e) {
    if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}

async function windowActions() {
  dinnerHall();
  Meal()
}

window.onload = windowActions();
