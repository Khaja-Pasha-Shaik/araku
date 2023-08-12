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

  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank";
    ticketLinks.appendChild(anchor);
    ticketLinks.appendChild(document.createElement("br"));
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

  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank";
    hotelLinks.appendChild(anchor);
    hotelLinks.appendChild(document.createElement("br"));
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

  links.forEach((link) => {
    var anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.target = "_blank";
    itineraryLinks.appendChild(anchor);
    itineraryLinks.appendChild(document.createElement("br"));
  });

  var rightPane = document.querySelector(".right-pane");
  rightPane.classList.add("show-details");
  rightPane.style.height = "300px";
}


function clearRightPane() {
  document.getElementById('dayDropdown').style.display = 'none';
  document.getElementById('chat-container').style.display = 'none';
  document.getElementById('json-button').style.display = 'none';
  document.getElementById('participantDropdownContainer').style.display = 'none';
  document.getElementById('pdfPreview').style.display = 'none';
  var ticketLinks = document.getElementById("ticketLinks");
  ticketLinks.innerHTML = "";
  ticketLinks.classList.remove("show-details");

  var hotelLinks = document.getElementById("hotelLinks");
  hotelLinks.innerHTML = "";
  hotelLinks.classList.remove("show-details");

  var itineraryLinks = document.getElementById("itineraryLinks");
  itineraryLinks.innerHTML = "";
  itineraryLinks.classList.remove("show-details");

  var dayDropdown = document.getElementById("dayDropdown");
  dayDropdown.innerHTML = "";
  dayDropdown.classList.remove("show-details");

  var tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";
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
  document.getElementById('videoPlayer').style.display = 'none';

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
  console.log('selected option is ', document.getElementById("dayDropdown").value);

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
  console.log('Which day is selected:: ', document.getElementById("dayDropdown").value);
  return item.dayNumber === document.getElementById("dayDropdown").value;
}

function updateTable(filteredData) {
  const selectedDay = document.getElementById("dayDropdown").value;
  let tableHTML = `<h2>${selectedDay}`;

  if (selectedDay.includes("Day-1")) {
    tableHTML += " - Nov 22";
  } else if (selectedDay.includes("Day-2")) {
    tableHTML += " - Nov 23";
  } else if (selectedDay.includes("Day-3")) {
    tableHTML += " - Nov 24";
  } else if (selectedDay.includes("Day-4")) {
    tableHTML += " - Nov 25";
  } else if (selectedDay.includes("Day-5")) {
    tableHTML += " - Nov 26";
  }

  tableHTML += "</h2>";

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

function getJsonData() {
  const jsonData = [
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

var localExpenses = JSON.parse(localStorage.getItem('expenses')) || [];


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
  var clearingCheck = document.getElementById("addClearingCheckbox").checked;
  var clearingFrom = document.getElementById("expenseFrom").value;
  var clearingTo = document.getElementById("expenseClearingTo").value;


  if (name && amount && description) {
    amount = parseFloat(amount);

    const timestampIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    var expense = {
      name: name,
      amount: amount,
      description: description,
      timestamp: timestampIST,
      clearingCheck,
      clearingFrom,
      clearingTo
    };

      localExpenses.push(expense);
      localStorage.setItem('expenses', JSON.stringify(localExpenses));
      console.log('Added expense to local storage: ', JSON.stringify(localExpenses));

      document.getElementById("expenseName").value = "";
      document.getElementById("expenseAmount").value = "";
      document.getElementById("expenseDescription").value = "";

      document.getElementById('result').style.display = 'block';
      document.getElementById("result").textContent = "Expense added successfully.";

      showExpenseStatistics();

  } else {
    document.getElementById('result').style.display = 'block';
    document.getElementById("result").textContent = "!!! Expense not added. Please fill out all the fields.";
  }

}

const addClearingCheckbox = document.getElementById("addClearingCheckbox");
const expenseFromDropdown = document.getElementById("expenseFrom");
const expenseClearingToDropdown = document.getElementById("expenseClearingTo");

addClearingCheckbox.addEventListener("change", function () {
  if (addClearingCheckbox.checked) {
    // expenseFromDropdown.disabled = false;
    expenseClearingToDropdown.disabled = false;
  } else {
    expenseFromDropdown.disabled = true;
    expenseClearingToDropdown.disabled = true;
  }
});

function checkFromAndClearing() {
  var expenseFrom = document.getElementById("expenseFrom").value;
  var expenseClearingTo = document.getElementById("expenseClearingTo").value;
  var submitButton = document.getElementById("submitButton");

  if (expenseFrom === expenseClearingTo) {
      submitButton.disabled = true;
  } else {
      submitButton.disabled = false;
  }
}



function showExpensesTable() {
  clearRightPane();
  document.getElementById('expensesContainer').style.display = 'block';
  document.getElementById('json-button').style.display = 'block';
  var expensesList = document.getElementById("expensesList");
  expensesList.innerHTML = '<div class="loading" id="loading"><p>🚂🚃🚃🚃🚃🚃🚃</p></div>';

  const apiUrl = 'https://khaja-pasha-shaik.github.io/expense.json';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log('Getting expenses from API...');
      var tableHTML = '<table>';
      tableHTML += '<thead><tr><th>Name</th><th>Amount</th><th>Description</th><th>Timestamp</th><th>Relative</th></tr></thead>';
      tableHTML += '<tbody>';

      data.forEach((expense) => {
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

async function openPopupWithLocalStorage() {
  var jsonPopup = document.getElementById("jsonPopup");
  var jsonTextArea = document.getElementById("jsonTextArea");

  try {
    var allExpenses = await getCombinedExpenses();
    jsonTextArea.value = JSON.stringify(allExpenses, null, 2);
    jsonPopup.style.display = "block";
  } catch (error) {
    console.error('Error getting combined expenses:', error);
  }
}


function getCombinedExpenses() {
  const apiUrl = 'https://khaja-pasha-shaik.github.io/expense.json';
  var localExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  return fetch(apiUrl)
    .then(response => response.json())
    .then(apiExpenses => {
      return [...localExpenses, ...apiExpenses];
    });
}

function copyToClipboard() {
  var jsonTextArea = document.getElementById("jsonTextArea");
  jsonTextArea.select();
  document.execCommand("copy");
}

function closePopup() {
  var jsonPopup = document.getElementById("jsonPopup");
  jsonPopup.style.display = "none";
}


var expenseChart;

function showExpenseStatistics() {
  clearRightPane();
  var expensesContainer = document.getElementById("expenseStatisticsContainer");
  document.getElementById('expenseStatisticsContainer').style.display = 'block';
  expensesContainer.classList.add("show-details");

  var loadingDiv = document.getElementById('graphLoading');
  loadingDiv.style.display = 'block';

  const apiUrl = 'https://khaja-pasha-shaik.github.io/expense.json';

  fetch(apiUrl)
    .then(response => response.json())
    .then(expenses => {
      var groupedExpenses = {};
      var clearingCalculations = {};

      expenses.forEach((expense) => {
        if (groupedExpenses.hasOwnProperty(expense.name)) {
          groupedExpenses[expense.name] += expense.amount;
        } else {
          groupedExpenses[expense.name] = expense.amount;
        }

        if (expense.clearingCheck) {
          if (!clearingCalculations[expense.clearingTo]) {
            clearingCalculations[expense.clearingTo] = 0;
          }
          if (!clearingCalculations[expense.clearingFrom]) {
            clearingCalculations[expense.clearingFrom] = 0;
          }
          clearingCalculations[expense.clearingTo] -= expense.amount;
        }
      });

      Object.keys(clearingCalculations).forEach((name) => {
        groupedExpenses[name] += clearingCalculations[name];
      });

      var names = Object.keys(groupedExpenses);
      var amounts = Object.values(groupedExpenses);

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
              backgroundColor: createGradient(ctx, "#2c3e50", "#34495e"),
              borderWidth: 1,
              borderRadius: 8,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
        },
      });
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
    });
}

function createGradient(context, colorStart, colorEnd) {
  var gradient = context.createLinearGradient(0, 0, 0, context.canvas.height);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
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
  } else if (inputText === 'tell me about araku' || (userInput.includes('about') && userInput.includes('araku'))) {
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
  } else if (inputText === 'how many pair of clothes should i carry?' || userInput.includes('clothes')) {
    response = "It is recommended to carry only 4 pairs with 1 night wear and a sweater/thermal. <br>Always recommend people to carry daily a pair of underpants and a towel to make sure that you enjoy every water spot or beach";
    appendBotMessage(response);
  } else if (inputText === 'i want to add an expense. how?' || userInput.includes('add expense')) {
    response = "You cannot add any expense. Give to your admin and he can help you with it";
    appendBotMessage(response);
  } else if (inputText === 'give me train number to track on whereismytrain app?' || userInput.includes('train app')) {
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

function clearLocalStorage() {
  localStorage.clear();
  console.log('LocalStorage has been cleared.');
}

const participantDropdown = document.getElementById('participantDropdown');
const pdfPreview = document.getElementById('pdfPreview');

// Event listener
participantDropdown.addEventListener('change', generateAndShowExpenseReport);

async function generateAndShowExpenseReport() {
  clearRightPane();
  document.getElementById('participantDropdownContainer').style.display = 'flex';
  document.getElementById('pdfPreview').style.display = 'block';
  const selectedParticipant = participantDropdown.value;

  // Fetch data from the API
  const response = await fetch('https://khaja-pasha-shaik.github.io/expense.json');
  const jsonData = await response.json();

  // Filter data based on selected participant
  const filteredData = jsonData.filter(item => item.name === selectedParticipant);
  const totalDebit = filteredData.reduce((total, item) => total + item.amount, 0);
  const filteredDataCr = jsonData.filter(item => ((item.clearingTo === selectedParticipant) && item.clearingCheck));
  const totalCredit = filteredDataCr.reduce((total, item) => total + item.amount, 0);
  const netSpent = totalDebit-totalCredit;

  const pdfDefinition = {
    content: [
      { text: 'Expense Report: Vizag and Araku Trip\n\n', style: 'header' },
      { text: `Dear ${selectedParticipant},\n
      We hope this message finds you well. And wishing that you are enjoying the trip to Vizag and Araku, we would like to provide you with an overview of the expenses incurred during the journey. Your participation contributed to a memorable experience, and we appreciate your involvement.

The total amounts you contributed till now for various expenses during the trip have been recorded. These include charges for transportation, accommodation, food, activities, and other shared costs. Each expense has been accompanied by a description to provide transparency and clarity on why the amount was paid. The expenses were tracked along with timestamps, capturing the date and time of each transaction.
      `, style: 'paragraph' },
      { text: 'Amounts Paid: [DEBIT-DR]', style: 'subheader2' },
      // Add your text and table styling here
      {
        table: {
          widths: [100, '*', 60],
          body: [
            ['Date', 'Description', 'Amount'],
            ...filteredData.map(item => [item.timestamp, item.description, item.amount]),
          ],
        },
        style: 'tableStyle'
      },

      { text: '\nAmounts Received: [CREDIT-CR]', style: 'subheader2' },
      {
        table: {
          widths: [100, '*', 60],
          body: [
            ['Date', 'Description', 'Amount'],
            ...filteredDataCr.map(item => [item.timestamp, item.description, item.amount]),
          ],
        },
        style: 'tableStyle'
      },


      { text: `Total Debit  : ${totalDebit}`, style: 'subheader2' },
      { text: `Total Credit  : ${totalCredit}`, style: 'subheader2' },
      { text: `Net Spending  : ${netSpent}`, style: 'subheader2' },

      { text: `
      We want to express our gratitude for your contributions, which played a crucial role in making the trip enjoyable and successful till now. Your participation helped create lasting memories for all of us.

      In the spirit of fairness and transparency, we will be meticulously dividing and balancing the expenses incurred by each participant. Our goal is to ensure that everyone's contributions are fairly distributed, reflecting each individual's share of the overall expenses.
      
      If your debits exceed your credits, we sincerely thank you for your generosity and willingness to contribute beyond the minimum. Your commitment to making the trip enjoyable for all participants is truly appreciated.
      
      Please rest assured that our intention is to handle the expense distribution fairly, so that each participant's financial involvement is balanced, and everyone's experience is equally valued.
      
      Once again, we extend our heartfelt appreciation for your participation. If you have any questions or would like further information regarding the expense report, please feel free to reach out to us.
      
      Thank you and looking forward to more memorable journeys in the future.
      
Best regards,
Khaja Pasha.

      `, style: 'paragraph' },
      // Add more content here
    ],
    styles: {
      header: { fontSize: 16, bold: true, margin: [0, 0, 0, 10] },
      paragraph: { fontSize: 12, lineHeight: 1.5 },
      subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      subheader2: { fontSize: 12, bold: true, margin: [0, 5, 0, 5] },
      tableStyle: { margin: [0, 10, 0, 10] },
    },
    filename: `${selectedParticipant}-${new Date().toISOString().split('T')[0]}.pdf`
  };

  // Generate PDF and show preview
  pdfMake.createPdf(pdfDefinition).getDataUrl((dataUrl) => {
    pdfPreview.innerHTML = `<iframe src="${dataUrl}" width="100%" height="600px"></iframe>`;
  });
}

