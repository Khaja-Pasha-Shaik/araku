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
    { name: "Vishakapatanam to Khammam", url: "https://example.com/vskp-to-kmm" },
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
    { name: "Vishakapatanam Hotel Booking Details", url: "https://example.com/kmm-to-vskp" },
    { name: "Araku Hotel Booking Details", url: "https://example.com/vskp-to-arku" },
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
        "description": "Closures(if any): All days open | Cost: Entry free | Location: 16Km away from railway station | (Have breakfast later on ~1hr)",
        "status": "Yet to Visit"
    },
    {
        "dayNumber": "Day-1 [Vizag City]",
        "baseLocation": "Vizag City",
        "time": "10:00-11:30",
        "visitingPlace": "Kailasagiri",
        "description": "Hours: Opens up by 10 | Cost varies with ropeway: ~100/person | Location: On the way to RK beach | Must try: Ropeway, Toy Train Ride",
        "status": "Yet to Visit"
    },
    {
        "dayNumber": "Day-1 [Vizag City]",
        "baseLocation": "Vizag City",
        "time": "12:00-13:00",
        "visitingPlace": "Tenneti Park/Beach",
        "description": "Relax, Spend some time | Cost: Free",
        "status": "Yet to Visit"
    },
    {
        "dayNumber": "Day-1 [Vizag City]",
        "baseLocation": "Vizag City",
        "time": "13:30-15:00",
        "visitingPlace": "RK beach",
        "description": "Cost: Free | Have Lunch | Try water Activities",
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
        "description": "Cost: 70/Person | Last Location of the day | Rest to roar tomorrow",
        "status": "Yet to Visit"
    },
    {
        "dayNumber": "Day-2 [Vizag City]",
        "baseLocation": "Vizag City",
        "time": "6:00-7:30",
        "visitingPlace": "Random Beach road",
        "description": "Cost: Entry free | Experience the beach | Anum/Anums Family exempted",
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
        "description": "Cost: Entry 20/Person | Return to room, have breakfast",
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
        "description": "Famous for street food at this time | Relax, Last location of the day | Or can cover if anything missed on day-1, Sleep early to getup at 5:00AM next morning",
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


var expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function showExpenses() {
  clearRightPane();
    var addExpenseFormContainer = document.getElementById("addExpenseFormContainer");
    document.getElementById('addExpenseFormContainer').style.display = 'block';
  addExpenseFormContainer.classList.add("show-details");
}

function submitExpense(event) {
  
  event.preventDefault();
  clearRightPane();
  var name = document.getElementById("expenseName").value;
  var amount = document.getElementById("expenseAmount").value;
  var description = document.getElementById("expenseDescription").value;

  if (name && amount && description && amount){
  // Convert amount to a number (you can add additional validation here if needed)
  amount = parseFloat(amount);

  const timestampIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Create an object to store the expense details
  var expense = {
    name: name,
    amount: amount,
    description: description,
    timestamp: timestampIST
  };

  // Add the expense object to the expenses array
  expenses.push(expense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseDescription").value = "";

  // Optional: Display a success message
  document.getElementById('result').style.display = 'block';
  document.getElementById("result").textContent = "Expense added successfully.";

  // Optional: Print the updated expenses array in the console
  console.log(expenses);
  showExpenseStatistics();
}else {
  document.getElementById('result').style.display = 'block';
  document.getElementById("result").textContent = "!!! Expense not added. Please fill out all the fields.";
}
  
}


function showExpensesTable() {
  clearRightPane();
  document.getElementById('expensesContainer').style.display = 'block';
  console.log('Expenses array in Show expenses table :: ', expenses);
  // Show the expenses table container
  var expensesContainer = document.getElementById("expensesContainer");
  expensesContainer.classList.add("show-details");

  // Get the expenses list and render it as a table
  var expensesList = document.getElementById("expensesList");
  var tableHTML = '<table>';
  tableHTML += '<thead><tr><th>Name</th><th>Amount</th><th>Description</th><th>Timestamp</th></tr></thead>';
  tableHTML += '<tbody>';

  expenses.forEach((expense) => {
    tableHTML += '<tr>';
    tableHTML += `<td>${expense.name}</td>`;
    tableHTML += `<td>${expense.amount}</td>`;
    tableHTML += `<td>${expense.description}</td>`;
    tableHTML += `<td>${expense.timestamp}</td>`;
    tableHTML += '</tr>';
  });

  tableHTML += '</tbody></table>';

  expensesList.innerHTML = tableHTML;
}

// Global variable to store the expense chart
var expenseChart;

// Function to show expense statistics graph
function showExpenseStatistics() {
  clearRightPane();
  var expensesContainer = document.getElementById("expenseStatisticsContainer");
  document.getElementById('expenseStatisticsContainer').style.display = 'block';
  expensesContainer.classList.add("show-details");

  // Group expenses by name and calculate total amount for each name
  var groupedExpenses = {};
  expenses.forEach((expense) => {
    if (groupedExpenses.hasOwnProperty(expense.name)) {
      groupedExpenses[expense.name] += expense.amount;
    } else {
      groupedExpenses[expense.name] = expense.amount;
    }
  });

  var names = Object.keys(groupedExpenses);
  var amounts = Object.values(groupedExpenses);

  // If an expense chart already exists, destroy it before creating a new one
  if (expenseChart) {
    expenseChart.destroy();
  }

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
}
