var selectedgender = ''; 

function selectgender(gender) {
    selectedgender = gender;
}

function calculatebmi(){
    var heightCM = parseFloat(document.getElementById("height").value);
            var weight = parseFloat(document.getElementById("weight").value);

            if (isNaN(heightCM) || isNaN(weight) || heightCM <= 0 || weight <= 0) {
                alert("Please enter valid height and weight values.");
                return;
}
var heightM = heightCM / 100;

            var bmi = weight / (heightM * heightM);

var result = "Your BMI is: " + bmi.toFixed(2);

if (bmi < 18.5) {
    result += " (Underweight)";
} else if (bmi >= 18.5 && bmi < 24.9) {
    result += " (Normal weight)";
} else if (bmi >= 25 && bmi < 29.9) {
    result += " (Overweight)";
} else {
    result += " (Obese)";
}

document.getElementById("result").innerText = result;
displayChart(bmi);
document.getElementById("height").value = "";
            document.getElementById("weight").value = "";
            document.getElementById("result").value = "";
            document.getElementById("age").value = "";

}
// function displayChart(bmi) {
//     // Destroy previous chart if exists
//     if (chart) {
//         chart.destroy();
//     }

//     // Create a new chart
//     var ctx = document.getElementById('bmiChart').getContext('2d');
//     chart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['BMI'],
//             datasets: [{
//                 label: 'Your BMI',
//                 data: [bmi],
//                 backgroundColor: ['rgba(75, 192, 192, 0.2)'],
//                 borderColor: ['rgba(75, 192, 192, 1)'],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });
//}

