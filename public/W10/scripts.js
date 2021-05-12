async function mealM() {
  //console.log("data request")
  const mealRequest = await fetch("/api/wholeMeal2");
  //console.log(mealRequest)
  const mealData = await mealRequest.json();
  //console.log(mealData)
  return mealData;
}
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function windowActions() {
  const meals = await mealM();

  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandom(0, meals.length - 1);
    return meals[random];
  });
  const info = document.querySelector(".target2");

  //const re = await fetch("/api/wholeMeal2");
  data = await mealM();

  data.forEach((element) => {
    const appendE = data.map((m) => (`
        <tr>
          <td>${m.meal_id}</td>
          <td>${m.meal_name}</td>
          <td>${m.calories}</td>
          <td>${m.carbs}</td>
          <td>${m.sodium}</td>
          <td>${m.protein}</td>
          <td>${m.fat}</td>
          <td>${m.cholesterol}</td>
          <td>${m.serving_size}</td>
        </tr>`
        ));
    info.innerHTML = appendE.join(' ');
  });
  
  console.table(selectedMeals);
 
  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Meals and Macros",
    },
    axisX: {
      valueFormatString: "DDD",
    },
    axisY: {
      prefix: "",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
     
    },
    data: [
      {
        type: "stackedBar",
        name: "Calories",
        showInLegend: "true",
        xValueFormatString: "DD, MMM",
        yValueFormatString: "$#,##0",
        dataPoints: [
          { y: selectedMeals[0].calories, label: selectedMeals[0].meal_name },
          { y: selectedMeals[1].calories, label: selectedMeals[1].meal_name },
          { y: selectedMeals[2].calories, label: selectedMeals[2].meal_name },
          { y: selectedMeals[3].calories, label: selectedMeals[3].meal_name },
          { y: selectedMeals[4].calories, label: selectedMeals[4].meal_name },
          { y: selectedMeals[5].calories, label: selectedMeals[5].meal_name },
          { y: selectedMeals[6].calories, label: selectedMeals[6].meal_name },
          { y: selectedMeals[7].calories, label: selectedMeals[7].meal_name },
          { y: selectedMeals[8].calories, label: selectedMeals[8].meal_name },
          { y: selectedMeals[9].calories, label: selectedMeals[9].meal_name },
        ],
      },
      {
        type: "stackedBar",
        name: "Carbs",
        showInLegend: "true",
        xValueFormatString: "DD, MMM",
        yValueFormatString: "$#,##0",
        dataPoints: [
          { y: selectedMeals[0].carbs, label: selectedMeals[0].meal_name },
          { y: selectedMeals[1].carbs, label: selectedMeals[1].meal_name },
          { y: selectedMeals[2].carbs, label: selectedMeals[2].meal_name },
          { y: selectedMeals[3].carbs, label: selectedMeals[3].meal_name },
          { y: selectedMeals[4].carbs, label: selectedMeals[4].meal_name },
          { y: selectedMeals[5].carbs, label: selectedMeals[5].meal_name },
          { y: selectedMeals[6].carbs, label: selectedMeals[6].meal_name },
          { y: selectedMeals[7].carbs, label: selectedMeals[7].meal_name },
          { y: selectedMeals[8].carbs, label: selectedMeals[8].meal_name },
          { y: selectedMeals[9].carbs, label: selectedMeals[9].meal_name },
        ],
      },
      {
        type: "stackedBar",
        name: "Sodium",
        showInLegend: "true",
        xValueFormatString: "DD, MMM",
        yValueFormatString: "$#,##0",
        dataPoints: [
          { y: selectedMeals[0].sodium, label: selectedMeals[0].meal_name },
          { y: selectedMeals[1].sodium, label: selectedMeals[1].meal_name },
          { y: selectedMeals[2].sodium, label: selectedMeals[2].meal_name },
          { y: selectedMeals[3].sodium, label: selectedMeals[3].meal_name },
          { y: selectedMeals[4].sodium, label: selectedMeals[4].meal_name },
          { y: selectedMeals[5].sodium, label: selectedMeals[5].meal_name },
          { y: selectedMeals[6].sodium, label: selectedMeals[6].meal_name },
          { y: selectedMeals[7].sodium, label: selectedMeals[7].meal_name },
          { y: selectedMeals[8].sodium, label: selectedMeals[8].meal_name },
          { y: selectedMeals[9].sodium, label: selectedMeals[9].meal_name },
        ],
      },
      {
        type: "stackedBar",
        name: "Protein",
        showInLegend: "true",
        xValueFormatString: "DD, MMM",
        yValueFormatString: "$#,##0",
        dataPoints: [
          { y: selectedMeals[0].protein, label: selectedMeals[0].meal_name },
          { y: selectedMeals[1].protein, label: selectedMeals[1].meal_name },
          { y: selectedMeals[2].protein, label: selectedMeals[2].meal_name },
          { y: selectedMeals[3].protein, label: selectedMeals[3].meal_name },
          { y: selectedMeals[4].protein, label: selectedMeals[4].meal_name },
          { y: selectedMeals[5].protein, label: selectedMeals[5].meal_name },
          { y: selectedMeals[6].protein, label: selectedMeals[6].meal_name },
          { y: selectedMeals[7].protein, label: selectedMeals[7].meal_name },
          { y: selectedMeals[8].protein, label: selectedMeals[8].meal_name },
          { y: selectedMeals[9].protein, label: selectedMeals[9].meal_name },
        ],
      },
      {
        type: "stackedBar",
        name: "Fat",
        showInLegend: "true",
        xValueFormatString: "DD, MMM",
        yValueFormatString: "$#,##0",
        dataPoints: [
          { y: selectedMeals[0].fat, label: selectedMeals[0].meal_name },
          { y: selectedMeals[1].fat, label: selectedMeals[1].meal_name },
          { y: selectedMeals[2].fat, label: selectedMeals[2].meal_name },
          { y: selectedMeals[3].fat, label: selectedMeals[3].meal_name },
          { y: selectedMeals[4].fat, label: selectedMeals[4].meal_name },
          { y: selectedMeals[5].fat, label: selectedMeals[5].meal_name },
          { y: selectedMeals[6].fat, label: selectedMeals[6].meal_name },
          { y: selectedMeals[7].fat, label: selectedMeals[7].meal_name },
          { y: selectedMeals[8].fat, label: selectedMeals[8].meal_name },
          { y: selectedMeals[9].fat, label: selectedMeals[9].meal_name },
        ],
      },

      {
        type: "stackedBar",
        name: "Cholesterol",
        showInLegend: "true",
        xValueFormatString: "DD, MMM",
        yValueFormatString: "$#,##0",
        dataPoints: [
        { y: selectedMeals[0].cholesterol, label: selectedMeals[0].meal_name },
        { y: selectedMeals[1].cholesterol, label: selectedMeals[1].meal_name },
        { y: selectedMeals[2].cholesterol, label: selectedMeals[2].meal_name },
        { y: selectedMeals[3].cholesterol, label: selectedMeals[3].meal_name },
        { y: selectedMeals[4].cholesterol, label: selectedMeals[4].meal_name },
        { y: selectedMeals[5].cholesterol, label: selectedMeals[5].meal_name },
        { y: selectedMeals[6].cholesterol, label: selectedMeals[6].meal_name },
        { y: selectedMeals[7].cholesterol, label: selectedMeals[7].meal_name },
        { y: selectedMeals[8].cholesterol, label: selectedMeals[8].meal_name },
        { y: selectedMeals[9].cholesterol, label: selectedMeals[9].meal_name },
        ],
      },

      {
        type: "stackedBar",
        name: "Serving Size",
        showInLegend: "true",
        xValueFormatString: "DD, MMM",
        yValueFormatString: "$#,##0",
        dataPoints: [
          { y: selectedMeals[0].serving_size, label: selectedMeals[0].meal_name },
          { y: selectedMeals[1].serving_size, label: selectedMeals[1].meal_name },
          { y: selectedMeals[2].serving_size, label: selectedMeals[2].meal_name },
          { y: selectedMeals[3].serving_size, label: selectedMeals[3].meal_name },
          { y: selectedMeals[4].serving_size, label: selectedMeals[4].meal_name },
          { y: selectedMeals[5].serving_size, label: selectedMeals[5].meal_name },
          { y: selectedMeals[6].serving_size, label: selectedMeals[6].meal_name },
          { y: selectedMeals[7].serving_size, label: selectedMeals[7].meal_name },
          { y: selectedMeals[8].serving_size, label: selectedMeals[8].meal_name },
          { y: selectedMeals[9].serving_size, label: selectedMeals[9].meal_name },
        ],
      },
    ],
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




window.onload = windowActions();
