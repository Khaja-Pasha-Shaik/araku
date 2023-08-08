document.addEventListener("DOMContentLoaded", function () {
  const downloadButtons = document.querySelectorAll(".btn-download");
  const rightPane = document.querySelector(".right-pane");
  const details = document.querySelector(".details");
  const optionLists = document.querySelectorAll(".option-list");

  downloadButtons.forEach((button) => {
    button.addEventListener("click", function () {

      const option = this.getAttribute("data-option");
      const optionListToShow = document.getElementById(`${option}-options`);
      optionLists.forEach((optionList) => {
        optionList.style.display = "none";
      });
      if (optionListToShow) {
        optionListToShow.style.display = "block";
      }
    });
  });
});

function showTicketLinks() {
  
  clearRightPane();

  var ticketLinks = document.getElementById("ticketLinks");
  var links = [
    { name: "Khammam to Vishakapatanam", url: "https://drive.google.com/file/d/14CGjMiziN9BHYXGLfiyoMceCMzrhkwfF/view?usp=drivesdk" },
    { name: "Vishakapatanam to Araku", url: "https://drive.google.com/file/d/13kvu-KZZeJ3X_8CHXT8nBahA6g7pXDU2/view?usp=drive_link" },
    { name: "Vishakapatanam to Khammam", url: "https://drive.google.com/file/d/15BeQvwK75BDKFGdUnlAMVCsB4la6mWxs/view?usp=drivesdk" },
  ];
  
  var heading = document.createElement("h2");
  heading.textContent = "Ticket Booking Details [Download using below links] :";
  ticketLinks.appendChild(heading);

  // Create hyperlinks dynamically and append to the container
  //uffff...
  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank"; // Open links in a new tab
    ticketLinks.appendChild(anchor);
    ticketLinks.appendChild(document.createElement("br")); // Add line breaks between links
  });

  var rightPane = document.querySelector(".right-pane");
  rightPane.classList.add("show-details");
}


function showHotelLinks() {
  clearRightPane();

  var hotelLinks = document.getElementById("hotelLinks");
  
  var links = [
    { name: "Vishakapatanam Hotel Booking Details", url: "https://drive.google.com/file/d/15D7QWtcQGwK3VuooDh2vdKOumZbHMMQW/view?usp=drivesdk" },
    { name: "Araku Hotel Booking Details", url: "https://drive.google.com/file/d/14WkZFjO6k7-7MYOXd1YTyCbFympLAyNw/view?usp=drivesdk" },
  ];
  
  var heading = document.createElement("h2");
  heading.textContent = "Hotel Booking Details [Download using below links] :";
  hotelLinks.appendChild(heading);

  // Create hyperlinks dynamically and append to the container
  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank"; // Open links in a new tab
    hotelLinks.appendChild(anchor);
    hotelLinks.appendChild(document.createElement("br")); // Add line breaks between links
  });

  var rightPane = document.querySelector(".right-pane");
  rightPane.classList.add("show-details");
}

function showItineraryLinks() {
  clearRightPane();

  var itineraryLinks = document.getElementById("itineraryLinks");
  var links = [
    { name: "PDF Format", url: "Araku Travel Plan-Not final.pdf" },
    { name: "PPTX Format", url: "Araku_Travel_Plan.pptx" },
  ];
  
  var heading = document.createElement("h2");
  heading.textContent = "Itinerary/Where Abouts[Download using below links] :";
  itineraryLinks.appendChild(heading);

  // Create hyperlinks dynamically and append to the container
  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank"; // Open links in a new tab
    itineraryLinks.appendChild(anchor);
    itineraryLinks.appendChild(document.createElement("br")); // Add line breaks between links
  });

  var rightPane = document.querySelector(".right-pane");
  rightPane.classList.add("show-details");
  rightPane.style.height = "300px";
}


function clearRightPane() {
  document.getElementById('dayDropdown').style.display = 'none';
  document.getElementById('chat-container').style.display = 'none';
  var ticketLinks = document.getElementById("ticketLinks");
  ticketLinks.innerHTML = ""; // Clear the container to hide the details
  ticketLinks.classList.remove("show-details");
  
  var hotelLinks = document.getElementById("hotelLinks");
  hotelLinks.innerHTML = ""; // Clear the container to hide the details
  hotelLinks.classList.remove("show-details");
  
  var itineraryLinks = document.getElementById("itineraryLinks");
  itineraryLinks.innerHTML = ""; // Clear the container to hide the details
  itineraryLinks.classList.remove("show-details");

  var dayDropdown = document.getElementById("dayDropdown");
  dayDropdown.innerHTML = ""; // Clear the container to hide the details
  dayDropdown.classList.remove("show-details");

  var tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = ""; // Clear the container to hide the details
  tableContainer.classList.remove("show-details");

  // Clear and hide the Add Expense form
  var addExpenseFormContainer = document.getElementById("addExpenseFormContainer");
  addExpenseFormContainer.classList.remove("show-details");
  document.getElementById('addExpenseFormContainer').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('expensesContainer').style.display = 'none';

  var expensesContainer = document.getElementById("expenseStatisticsContainer");
  expensesContainer.classList.remove("show-details");

  document.getElementById('expenseStatisticsContainer').style.display = 'none';
  document.getElementById('videoPlayer').style.display='none';
  
}

function showDayWisePlan() {
  clearRightPane();
  const dayDropdown = document.getElementById("dayDropdown");
  
  dayDropdown.innerHTML = ""; // Clear existing dropdown options
  document.getElementById('dayDropdown').style.display = 'block';
  document.getElementById('tableContainer').style.display = 'block';

  const option1 = document.createElement("option");
  option1.value = "Day-1 [Vizag City]";
  option1.textContent = "Day-1 [Vizag City]";
  dayDropdown.appendChild(option1);
  const option2 = document.createElement("option");
  option2.value = "Day-2 [Vizag City]";
  option2.textContent = "Day-2 [Vizag City]";
  dayDropdown.appendChild(option2);
  const option3 = document.createElement("option");
  option3.value = "Day-3 [Araku Valley]";
  option3.textContent = "Day-3 [Araku Valley]";
  dayDropdown.appendChild(option3);
  const option4 = document.createElement("option");
  option4.value = "Day-4 [Lambasingi]";
  option4.textContent = "Day-4 [Lambasingi]";
  dayDropdown.appendChild(option4);
  const option5 = document.createElement("option");
  option5.value = "Day-5 [Moving away from Araku]";
  option5.textContent = "Day-5 [Moving away from Araku]";
  dayDropdown.appendChild(option5);
  console.log('selected option is ',document.getElementById("dayDropdown").value);

  dayDropdown.addEventListener("change", () => {
    const jsonData = getJsonData();
    const filteredData = jsonData.filter(whichDay);
    updateTable(filteredData);
  });

  const jsonData = getJsonData();
  const filteredData = jsonData.filter(whichDay);
  updateTable(filteredData);
}

function whichDay(item) {
  console.log('Which day is selected:: ',document.getElementById("dayDropdown").value );
  return item.dayNumber === document.getElementById("dayDropdown").value;
}

function updateTable(filteredData) {
  const selectedDay = document.getElementById("dayDropdown").value;
  let tableHTML = `<h2> ${selectedDay}</h2>`;
  tableHTML += '<table>';
  tableHTML += '<thead><tr><th>Time</th><th>Visiting Place</th><th>Description</th></tr></thead>';
  tableHTML += '<tbody>';
  
  filteredData.forEach((item) => {
    tableHTML += '<tr>';
    tableHTML += `<td>${item.time}</td>`;
    tableHTML += `<td>${item.visitingPlace}</td>`;
    tableHTML += `<td>${item.description}</td>`;
    tableHTML += '</tr>';
  });
  document.getElementById('tableContainer').style.display = 'block';
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = tableHTML;
}

function getJsonData(){
  const  jsonData = [
    {
      "dayNumber": "Day-1 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "8:00-9:00(Optional)",
      "visitingPlace": "Simhachalam Temple",
      "description": "Closures(if any): All days open <br> Cost: Entry free <br> Location: 16Km away from railway station <br> (Have breakfast later on ~1hr)",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-1 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "10:00-11:30",
      "visitingPlace": "Kailasagiri",
      "description": "Hours: Opens up by 10 <br> Cost varies with ropeway: ~100/person <br> Location: On the way to RK beach <br> Must try: Ropeway, Toy Train Ride",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-1 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "12:00-13:00",
      "visitingPlace": "Tenneti Park/Beach",
      "description": "Relax, Spend some time <br> Cost: Free",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-1 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "13:30-15:00",
      "visitingPlace": "RK beach",
      "description": "Cost: Free <br> Have Lunch <br> Try water Activities",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-1 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "15:30-16:00",
      "visitingPlace": "Thotlakonda Buddhist Monk site",
      "description": "Cost: Free",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-1 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "16:40-17:30",
      "visitingPlace": "Beemili Beach",
      "description": "Cost: Free",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-1 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "18:00-19:00",
      "visitingPlace": "INS Kursura/Submarine",
      "description": "Cost: 40/Person",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-1 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "19:20-20:30",
      "visitingPlace": "TU 142 Aircraft Museum",
      "description": "Cost: 70/Person <br> Last Location of the day <br> Rest to roar tomorrow",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-2 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "6:00-7:30",
      "visitingPlace": "Random Beach road",
      "description": "Cost: Entry free <br> Experience the beach <br> Anum/Anums Family exempted",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-2 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "9:00-9:15 ",
      "visitingPlace": "War memorial",
      "description": "Cost: Entry Free ",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-2 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "9:20-10:00",
      "visitingPlace": "VUDA Park",
      "description": "Cost: Entry 20/Person <br> Return to room, have breakfast",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-2 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "11:00-13:00",
      "visitingPlace": "Zoo Park",
      "description": "Cost: 50/Person",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-2 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "13:30-14:15",
      "visitingPlace": "Matsyadarshini",
      "description": "Cost: 30/Person",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-2 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "16:00-16:30",
      "visitingPlace": "Dolphins nose light house",
      "description": "Cost: 20/Person",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-2 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "17:00-17:30 ",
      "visitingPlace": "Yarada Beach",
      "description": "Cost: Entry Free",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-2 [Vizag City]",
      "baseLocation": "Vizag City",
      "time": "18:00-20:00/21:00 ",
      "visitingPlace": "RK beach",
      "description": "Famous for street food at this time <br> Relax, Last location of the day <br> Or can cover if anything missed on day-1, Sleep early to getup at 5:00AM next morning",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-3 [Araku Valley]",
      "baseLocation": "Araku",
      "time": "Wish",
      "visitingPlace": "Chaparai Waterfalls",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-3 [Araku Valley]",
      "baseLocation": "Araku",
      "time": "Wish",
      "visitingPlace": "Rana Jellada Waterfalls",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-3 [Araku Valley]",
      "baseLocation": "Araku",
      "time": "Wish",
      "visitingPlace": "Padmapuram Gardens ",
      "description": "Take toy train ride  ",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-3 [Araku Valley]",
      "baseLocation": "Araku",
      "time": "Wish",
      "visitingPlace": "Tribal Museum",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-3 [Araku Valley]",
      "baseLocation": "Araku",
      "time": "Wish",
      "visitingPlace": "Coffee Museum",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-4 [Lambasingi]",
      "baseLocation": "Araku",
      "time": "Wish",
      "visitingPlace": "Lambasingi ",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-4 [Lambasingi]",
      "baseLocation": "Araku",
      "time": "Wish",
      "visitingPlace": "Lambasingi/ In & Around Araku",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-5 [Moving away from Araku]",
      "baseLocation": "Araku - Away",
      "time": "Wish",
      "visitingPlace": "Shooting spot",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-5 [Moving away from Araku]",
      "baseLocation": "Araku - Away",
      "time": "Wish",
      "visitingPlace": "Sunkarimetta Baptist Church",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-5 [Moving away from Araku]",
      "baseLocation": "Araku - Away",
      "time": "Wish",
      "visitingPlace": "Ananthagiri Coffee plantations",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-5 [Moving away from Araku]",
      "baseLocation": "Araku - Away",
      "time": "Wish",
      "visitingPlace": "Galikonda Viewpoint",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-5 [Moving away from Araku]",
      "baseLocation": "Araku - Away",
      "time": "Wish",
      "visitingPlace": "Ananthagiri Waterfalls",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-5 [Moving away from Araku]",
      "baseLocation": "Araku - Away",
      "time": "Wish",
      "visitingPlace": "Katika waterfalls",
      "description": "NA",
      "status": "Yet to Visit"
  },
  {
      "dayNumber": "Day-5 [Moving away from Araku]",
      "baseLocation": "Araku - Away",
      "time": "Wish",
      "visitingPlace": "Borra caves",
      "description": "NA",
      "status": "Yet to Visit"
  }

];
  return jsonData;
}

// var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
// expenses = [
//   {
//     "name": "Pasha",
//     "amount": 4435,
//     "description": "Visakhapatnam to Araku Train tickets",
//     "timestamp": "27/7/2023 6:21:47 pm"
//   },
//   {
//     "name": "Pasha",
//     "amount": 3386,
//     "description": "Khammam to Visakhapatnam Train tickets",
//     "timestamp": "28/7/2023 5:44:02 pm"
//   },
//   {
//     "name": "Pasha",
//     "amount": 8064,
//     "description": "Araku Hotel Booking",
//     "timestamp": "29/7/2023 12:40:26 am"
//   },
//   {
//     "name": "Pasha",
//     "amount": 4675,
//     "description": "Visakhapatnam to Khammam Train tickets",
//     "timestamp": "31/7/2023 1:54:37 pm"
//   },
//   {
//     "name": "Pasha",
//     "amount": 6691,
//     "description": "Visakhapatnam Hotel Booking",
//     "timestamp": "31/7/2023 9:10:28 pm"
//   },
//   {
//     "name": "Ayesha",
//     "amount": 4541,
//     "description": "Clearing to Pasha",
//     "timestamp": "01/8/2023 9:35:28 pm"
//   },
//   {
//     "name": "Hussain",
//     "amount": 4541,
//     "description": "Clearing to Pasha",
//     "timestamp": "01/8/2023 9:35:28 pm"
//   }
// ];


function showExpenses() {
  clearRightPane();
    var addExpenseFormContainer = document.getElementById("addExpenseFormContainer");
    document.getElementById('addExpenseFormContainer').style.display = 'block';
  addExpenseFormContainer.classList.add("show-details");
}

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function submitExpense(event) {
  
  event.preventDefault();
  clearRightPane();
  var name = document.getElementById("expenseName").value;
  var amount = document.getElementById("expenseAmount").value;
  var description = document.getElementById("expenseDescription").value;
  var clearingCheck = document.getElementById("addClearingCheckbox").checked;
  var clearingFrom = document.getElementById("expenseFrom").value;
  var clearingTo = document.getElementById("expenseClearingTo").value;


  if (name && amount && description && amount){
  // Convert amount to a number (you can add additional validation here if needed)
  amount = parseFloat(amount);

  const timestampIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Create an object to store the expense details
  var expense = {
    name: name,
    amount: amount,
    description: description,
    timestamp: timestampIST,
    clearingCheck,
    clearingFrom,
    clearingTo
  };

  // Add the expense object to the expenses array

  // firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  const newDataRef = database.ref('data').push();
  newDataRef.set(expense);

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseDescription").value = "";

  // Get references to the checkbox and the two dropdowns

  // Optional: Display a success message
  document.getElementById('result').style.display = 'block';
  document.getElementById("result").textContent = "Expense added successfully.";

  // Optional: Print the updated expenses array in the console
  showExpenseStatistics();
}else {
  document.getElementById('result').style.display = 'block';
  document.getElementById("result").textContent = "!!! Expense not added. Please fill out all the fields.";
}
  
}

const addClearingCheckbox = document.getElementById("addClearingCheckbox");
const expenseFromDropdown = document.getElementById("expenseFrom");
const expenseClearingToDropdown = document.getElementById("expenseClearingTo");

// Add an event listener to the checkbox
addClearingCheckbox.addEventListener("change", function () {
    // Check if the checkbox is checked
    if (addClearingCheckbox.checked) {
        // Enable the two dropdowns
        expenseFromDropdown.disabled = false;
        expenseClearingToDropdown.disabled = false;
    } else {
        // Disable the two dropdowns
        expenseFromDropdown.disabled = true;
        expenseClearingToDropdown.disabled = true;
    }
});



function showExpensesTable() {
  clearRightPane();
  document.getElementById('expensesContainer').style.display = 'block';
  // Show the expenses table container
  var expensesContainer = document.getElementById("expensesContainer");
  expensesContainer.classList.add("show-details");

  // Get the expenses list and render it as a table
  var expensesList = document.getElementById("expensesList");
  expensesList.innerHTML = '<div class="loading" id="loading"><p>🚂🚃🚃🚃🚃🚃🚃</p></div>';
  const dataRef = firebase.database().ref('data');
  dataRef.once('value')
    .then((snapshot) => {
      const data = snapshot.val();
      const jsonArray = Object.values(data);
      console.log(jsonArray);

      var tableHTML = '<table>';
      tableHTML += '<thead><tr><th>Name</th><th>Amount</th><th>Description</th><th>Timestamp</th><th>Relative</th></tr></thead>';
      tableHTML += '<tbody>';

      jsonArray.forEach((expense) => {
        tableHTML += '<tr>';
        tableHTML += `<td>${expense.name}</td>`;
        tableHTML += `<td>${expense.amount}</td>`;
        tableHTML += `<td>${expense.description}</td>`;
        tableHTML += `<td>${expense.timestamp}</td>`;
        const clearingContent = expense.clearingCheck
        ? `Cleared to ${expense.clearingTo}`
        : 'NA';
        tableHTML += `<td>${clearingContent}</td>`;
        tableHTML += '</tr>';
      });

      tableHTML += '</tbody></table>';
      expensesList.innerHTML = tableHTML;
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
    });
}

// Global variable to store the expense chart
var expenseChart;

// Function to show expense statistics graph
function showExpenseStatistics() {
  clearRightPane();
  var expensesContainer = document.getElementById("expenseStatisticsContainer");
  document.getElementById('expenseStatisticsContainer').style.display = 'block';
  expensesContainer.classList.add("show-details");
  // Get the expenses from Firebase
  var loadingDiv = document.getElementById('graphLoading');
  loadingDiv.style.display = 'block';
  const dataRef = firebase.database().ref('data');
  dataRef.once('value')
    .then((snapshot) => {
      var expenses = Object.values(snapshot.val());

      // Group expenses by name and calculate total amount for each name
      var groupedExpenses = {};
      var clearingCalculations = {}; // Object to store clearing calculations
      expenses.forEach((expense) => {
        if (groupedExpenses.hasOwnProperty(expense.name)) {
          groupedExpenses[expense.name] += expense.amount;
        } else {
          groupedExpenses[expense.name] = expense.amount;
        }

        if (expense.clearingCheck) {
          // Perform clearing calculations
          if (!clearingCalculations[expense.clearingTo]) {
            clearingCalculations[expense.clearingTo] = 0;
          }
          if (!clearingCalculations[expense.clearingFrom]) {
            clearingCalculations[expense.clearingFrom] = 0;
          }
          clearingCalculations[expense.clearingTo] -= expense.amount;
        }
      });

      // Apply clearing calculations to the groupedExpenses
      Object.keys(clearingCalculations).forEach((name) => {
        groupedExpenses[name] += clearingCalculations[name];
      });

      var names = Object.keys(groupedExpenses);
      var amounts = Object.values(groupedExpenses);

      // If an expense chart already exists, destroy it before creating a new one
      loadingDiv.style.display = 'none';
      if (expenseChart) {
        expenseChart.destroy();
      }
      loadingDiv.style.display = 'none';
      // Create a chart using Chart.js
      var ctx = document.getElementById("expenseChart").getContext("2d");
      expenseChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: names,
          datasets: [
            {
              label: "Total Expense",
              data: amounts,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
    });
}

const sendBotMessageBtn = document.getElementById('sendBotMessageBtn');
sendBotMessageBtn.addEventListener('click', handleBotMessage);

function handleBotMessage() {
  const userInput = document.getElementById('botMessage').value;
  appendUserMessage(userInput);
  generateBotResponse(userInput);
}


function generateBotResponse(userInput) {
  const inputText = userInput.toLowerCase();
  let response = "I'm sorry, I didn't understand that.";
    if (inputText === 'hi' || inputText === 'hello') {
        response = "Hi there! What would you like to know about the trip?";
        appendBotMessage(response);
        showBotOptions();
    } else if (inputText === 'when does the trip start?' || (userInput.includes('start') && userInput.includes('date'))) {
        response = "The trip starts on November 22nd.<br>We will be leaving on 21st Nov night to Khammam";
        appendBotMessage(response);
    } else if (inputText === 'when does the trip end?' || (userInput.includes('end') && userInput.includes('date'))) {
        response = "The trip ends on November 26th.<br> You will reach home on 27th i.e., Monday";
        appendBotMessage(response);
    }else if (inputText === 'tell me about araku' || (userInput.includes('about') && userInput.includes('araku'))) {
      response = "Araku, located in Andhra Pradesh, is a captivating hill station known for its breathtaking landscapes, lush coffee plantations, and pleasant climate. Visitors are drawn to its scenic beauty, with mist-covered hills, cascading waterfalls, and diverse flora and fauna, making it an ideal destination for nature lovers and those seeking a tranquil getaway. <br>Araku's tribal culture, aromatic coffee, and picturesque valleys contribute to its unique charm, offering a memorable escape from the hustle and bustle of city life.";
      appendBotMessage(response);
    } else if (inputText === 'what are vistadome coaches?' || (userInput.includes('glass') && userInput.includes('train'))) {
      response = "The Vistadome coaches on the Kirandul Express offer a unique travel experience with their glass-domed ceilings, providing panoramic views of the picturesque landscapes along the route. Passengers can enjoy the scenic beauty of hills, valleys, and waterfalls while comfortably seated. <br><br>The coaches also come equipped with modern amenities, enhancing the journey's comfort and enjoyment.";
      appendBotMessage(response);
    } else if (inputText === 'how many tunnels we have in araku route?' || userInput.includes('tunnels')) {
    response = "The journey between Visakhapatnam and Araku features a total of 58 tunnels, adding an element of intrigue and excitement to the scenic train ride.";
    appendBotMessage(response);
    } else if (inputText === 'i have a 1.5year old kid with me. what to carry?' || userInput.includes('anum') || userInput.includes('kid with me')) {
      response = `
      <table>
          <tr>
              <th>Things to Carry</th>
          </tr>
          <tr><td>Always carry food either biscuits/cerlac</td></tr>
          <tr><td>Carry kettle to heatup water</td></tr>
          <tr><td>Carry 2 pair of sweaters</td></tr>
          <tr><td>Carry tissues, papercups, use and throw underpants</td></tr>
          <tr><td>Separate Blanket</td></tr>
      </table>`;
      appendBotMessage(response);
    }else if (inputText === 'how many pair of clothes should i carry?' || userInput.includes('clothes')) {
      response = "It is recommended to carry only 4 pairs with 1 night wear and a sweater/thermal. <br>Always recommend people to carry daily a pair of underpants and a towel to make sure that you enjoy every water spot or beach";
      appendBotMessage(response);
    }else if (inputText === 'i want to add an expense. how?' || userInput.includes('add expense')) {
      response = "You cannot add any expense. Give to your admin and he can help you with it";
      appendBotMessage(response);
    }else if (inputText === 'give me train number to track on whereismytrain app?' || userInput.includes('train app')) {
      response = `
      <table>
          <tr>
              <th>Boarding at</th>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Departure Station</th>
          </tr>
          <tr>
              <td>Khammam[KMT]</td>
              <td>12740</td>
              <td>GARIBRATH EXP</td>
              <td>Visakhapatnam[VSKP]</td>
          </tr>
          <tr>
              <td>Visakhapatnam[VSKP]</td>
              <td>08551</td>
              <td>KIRANDUL PGRSP</td>
              <td>Arakku[ARKU]</td>
          </tr>
          <tr>
              <td>Visakhapatnam[VSKP]</td>
              <td>20805</td>
              <td>AP EXPRESS</td>
              <td>Khammam[KMT]</td>
          </tr>
      </table>`;
      appendBotMessage(response);
    }
    else {
      appendBotMessage(response);
    }
}



function appendUserMessage(message) {
  const chatDiv = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('user');
  messageDiv.textContent = message;
  chatDiv.appendChild(messageDiv);
  chatDiv.scrollTop = chatDiv.scrollHeight;
}



function activateBot() {
  clearRightPane();
  document.getElementById('chat-container').style.display = 'block';
  const chatBox = document.getElementById('chatBox');
  chatBox.classList.remove('hidden-links');
  appendBotMessage("Hi there! What would you like to know about the trip?");
  showBotOptions();
}

function showBotOptions() {
  const options = [
      "When does the trip start?",
      "When does the trip end?",
      "How many pair of clothes should I carry?",
      "I want to add an expense. How?",
      "Give me train number to track on WhereIsMyTrain App?",
      "Tell me about Araku",
      "What are vistadome coaches/glass train?",
      "How many tunnels we have in Araku route",
      "I have a 1.5year old kid with me. What to carry?"
  ];

  const optionsHTML = options.map(option => `<button class="option" onclick="fillInput('${option}')">${option}</button>`).join('  ');
  appendBotMessage(optionsHTML);
}

function fillInput(text) {
  document.getElementById('botMessage').value = text;
}

function appendBotMessage(message) {
  const chatDiv = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('bot');
  messageDiv.innerHTML = message;
  chatDiv.appendChild(messageDiv);
  chatDiv.scrollTop = chatDiv.scrollHeight;
}
