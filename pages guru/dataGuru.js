

const tableContainer = document.getElementById("tableContainer");

function createTable(data) {
    // Create table element
    const table = document.createElement("table");
    table.className = "data-table";
  
    // Create table body
    const tbody = document.createElement("tbody");
    data.forEach((rowData) => {
      const row = document.createElement("tr");
  
      // Create header cells
      const headerCell = document.createElement("th");
      headerCell.scope = "row";
      headerCell.textContent = Object.keys(rowData)[0];
      row.appendChild(headerCell);
  
      // Create data cells
      const dataCell = document.createElement("td");
      dataCell.textContent = Object.values(rowData)[0];
      row.appendChild(dataCell);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    return table;
  }

async function loadAndDisplayData(filename) {
  try {
    // Fetch the JSON file based on the provided filename
    const response = await fetch(`./${filename}.json`);
    const data = await response.json();

    // Clear any existing table
    tableContainer.innerHTML = "";

    // Create and display the new table
    const table = createTable(data);
    tableContainer.appendChild(table);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

tableContainer.style.display = "none";
const modal = document.querySelector(".modal");
modal.style.display = "none";

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  tableContainer.style.display = "none";
  modal.style.display = "none";
});

// Attach click event listeners to the buttons
document.querySelectorAll(".guru-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filename = button.id;
    tableContainer.style.display = "flex";
    modal.style.display = "flex";

    console.log(filename);
    loadAndDisplayData(filename);
  });
});

