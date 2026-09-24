function runCalculator() {
  const validResults = [];
  const results = document.querySelector("#results");

  results.innerHTML = "<h2>Calculator results</h2>";
  const resultTable = document.createElement("table");
  resultTable.innerHTML = "<thead><tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr></thead><tbody></tbody>";
  const resultBody = resultTable.querySelector("tbody");
  results.appendChild(resultTable);

  while (true) {
    const xInput = prompt("Enter the first number (x):", "");
    if (xInput === null) break;

    const operator = prompt("Enter the operator (+, -, *, /, %):", "+");
    if (operator === null) break;

    const yInput = prompt("Enter the second number (y):", "");
    if (yInput === null) break;

    const x = Number(xInput);
    const y = Number(yInput);
    let result;

    if (Number.isNaN(x) || Number.isNaN(y) || !["+", "-", "*", "/", "%"].includes(operator)) {
      addResultRow(resultBody, xInput, operator, yInput, "Error", true);
      continue;
    }

    if ((operator === "/" || operator === "%") && y === 0) {
      addResultRow(resultBody, x, operator, y, "Error", true);
      continue;
    }

    switch (operator) {
      case "+": result = x + y; break;
      case "-": result = x - y; break;
      case "*": result = x * y; break;
      case "/": result = x / y; break;
      case "%": result = x % y; break;
    }

    addResultRow(resultBody, x, operator, y, result, false);
    validResults.push(result);
  }

  const summaryHeading = document.createElement("h2");
  summaryHeading.textContent = "Summary";
  results.appendChild(summaryHeading);

  const summaryTable = document.createElement("table");
  summaryTable.innerHTML = "<thead><tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr></thead><tbody><tr></tr></tbody>";
  const summaryRow = summaryTable.querySelector("tbody tr");
  const total = validResults.reduce((sum, value) => sum + value, 0);
  summaryRow.innerHTML = validResults.length === 0
    ? "<td>N/A</td><td>N/A</td><td>N/A</td><td>0</td>"
    : "<td>" + Math.min(...validResults) + "</td><td>" + Math.max(...validResults) + "</td><td>" + total / validResults.length + "</td><td>" + total + "</td>";
  results.appendChild(summaryTable);
}

function addResultRow(tableBody, number1, operator, number2, result, isError) {
  const row = tableBody.insertRow();
  [number1, operator, number2, result].forEach((value) => {
    const cell = row.insertCell();
    cell.textContent = value;
    if (isError && value === result) cell.className = "error";
  });
}function runCalculator() {
  const validResults = [];
  const results = document.querySelector("#results");

  results.innerHTML = "";
  const resultHeading = document.createElement("h2");
  resultHeading.textContent = "Calculator results";
  results.appendChild(resultHeading);

  const resultTable = document.createElement("table");
  resultTable.innerHTML = "<thead><tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr></thead><tbody></tbody>";
  const resultBody = resultTable.querySelector("tbody");
  results.appendChild(resultTable);

  while (true) {
    const xInput = prompt("Enter the first number (x):", "");
    if (xInput === null) {
      break;
    }

    const operator = prompt("Enter the operator (+, -, *, /, %):", "+");
    if (operator === null) {
      break;
    }

    const yInput = prompt("Enter the second number (y):", "");
    if (yInput === null) {
      break;
    }

    const x = Number(xInput);
    const y = Number(yInput);
    let result;

    if (isNaN(x) || isNaN(y) || !["+", "-", "*", "/", "%"].includes(operator)) {
      result = "Error";
      addResultRow(resultBody, xInput, operator, yInput, result, true);
      continue;
    }

    switch (operator) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = y === 0 ? "Error" : x / y;
        break;
      case "%":
        result = y === 0 ? "Error" : x % y;
        break;
      default:
        result = "Error";
    }

    if (result === "Error") {
      addResultRow(resultBody, x, operator, y, result, true);
      continue;
    }

    addResultRow(resultBody, x, operator, y, result, false);
    validResults.push(Number(result));
  }

  const summaryHeading = document.createElement("h2");
  summaryHeading.textContent = "Summary";
  results.appendChild(summaryHeading);

  const summaryTable = document.createElement("table");
  summaryTable.innerHTML = "<thead><tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr></thead><tbody><tr></tr></tbody>";
  const summaryRow = summaryTable.querySelector("tbody tr");
  results.appendChild(summaryTable);

  if (validResults.length === 0) {
    summaryRow.innerHTML = "<td>N/A</td><td>N/A</td><td>N/A</td><td>0</td>";
  } else {
    const min = Math.min(...validResults);
    const max = Math.max(...validResults);
    const total = validResults.reduce((sum, value) => sum + value, 0);
    const avg = total / validResults.length;

    summaryRow.innerHTML = "<td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td>";
  }
}

function addResultRow(tableBody, number1, operator, number2, result, isError) {
  const row = tableBody.insertRow();
  [number1, operator, number2, result].forEach((value) => {
    const cell = row.insertCell();
    cell.textContent = value;
    if (isError && value === result) {
      cell.className = "error";
    }
  });
}
