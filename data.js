const tableContainer = document.getElementById("tableContainer");
const namaKelas = document.querySelector(".nama-kelas-head");

function createTable(data) {
  // Create table element
  const table = document.createElement("table");
  table.className = "data-table";

  // Create table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Get headers from first object keys
  const headers = Object.keys(data[0]);
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");
  data.forEach((rowData) => {
    const row = document.createElement("tr");
    headers.forEach((header) => {
      const cell = document.createElement("td");
      cell.textContent = rowData[header];
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}

async function loadAndDisplayData(filename) {
  try {
    // Fetch the JSON file based on the provided filename
    const response = await fetch(`./database/${filename}.json`);
    const data = await response.json();

    // Clear any existing table
    tableContainer.innerHTML = "";

    // Create and display the new table
    const table = createTable(data);
    tableContainer.appendChild(table);
    namaKelas.innerHTML = filename;

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
document.querySelectorAll(".kelas-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filename = button.id;
    tableContainer.style.display = "flex";
    modal.style.display = "flex";

    console.log(filename);
    loadAndDisplayData(filename);
  });
});
