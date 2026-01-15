function addTask() {
const taskInput = document.getElementById("task");
if (taskInput.value === "") return;


const li = document.createElement("li");
li.textContent = taskInput.value;
document.getElementById("taskList").appendChild(li);


taskInput.value = "";
}


// Weather App (Demo)
function getWeather() {
const city = document.getElementById("city").value;
if (city === "") return;
document.getElementById("weatherResult").innerText = "Weather details for " + city;
}

// Contact Form
function sendEmail(e) {
e.preventDefault();
alert("Email sent successfully (API integration ready)");
}

// EMAILJS INTEGRATION
(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();


function sendEmail(e) {
e.preventDefault();


emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value,
}).then(
() => alert("Email sent successfully"),
() => alert("Email failed to send")
);
}
