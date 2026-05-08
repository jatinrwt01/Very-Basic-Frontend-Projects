const form = document.querySelector('form');
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const heightInput = parseInt(document.getElementById('height').value);
    const weightInput = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('results');

    if(heightInput === '' || heightInput<0 || isNaN(heightInput)){
        result.innerHTML = `Enter a valid height`;
    }

   else if(weightInput === '' || weightInput<0 || isNaN(weightInput)){
        result.innerHTML = `Enter a valid weight`;
    }
   else  calculateBMI(heightInput, weightInput, result);
});



function calculateBMI(height, weight, result) {
  let category = "";
  const heightInM = height / 100;
  const res = (weight / (heightInM * heightInM)).toFixed(2);
  if(res < 18.6){
    category = "Underweight";
  } else if(18.6 < res && res < 24.9){
    category = "good";
  } else{
    category = "Overweight";
  }
  result.innerHTML = `Your BMI is ${res}. You are ${category}.`;
}




