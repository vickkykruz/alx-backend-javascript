// Define the interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Victor",
  lastName: "Chukwuemeka",
  age: 22,
  location: "Lagos, Nigeria"
}

const student2: Student = {
  firstName: "John",
  lastName: "Ebuka",
  age: 23,
  location: "imo, Nigeria"
}

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  // Render table
  const table = document.getElementById("students-table");

  // Loop throught the student lists and append the following
  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    // Create a cell for the first name
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td")
    locationCell.textContent = student.location;

    // Append cells to the rows
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table
    if (table) {
      table.appendChild(row);
    }
  });
}

// call the function
renderTable();
