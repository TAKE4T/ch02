const reviewCycleDays = 7;
const headerRow = document.getElementById('headerRow');
const tableBody = document.getElementById('tableBody');
const addTaskBtn = document.getElementById('addTask');
const addDateBtn = document.getElementById('addDate');

addTaskBtn.addEventListener('click', () => {
    const taskName = document.getElementById('newTask').value.trim();
    if (!taskName) return;
    document.getElementById('newTask').value = '';

    const th = document.createElement('th');
    th.textContent = taskName;
    headerRow.insertBefore(th, headerRow.lastElementChild); // insert before review date

    Array.from(tableBody.rows).forEach(row => {
        const td = document.createElement('td');
        td.contentEditable = true;
        row.insertBefore(td, row.lastElementChild); // before review date cell
    });
});

addDateBtn.addEventListener('click', () => {
    const dateVal = document.getElementById('newDate').value;
    if (!dateVal) return;
    document.getElementById('newDate').value = '';

    const row = document.createElement('tr');
    const dateCell = document.createElement('td');
    dateCell.textContent = dateVal;
    row.appendChild(dateCell);

    // Add empty cells for tasks
    const taskCols = headerRow.querySelectorAll('th').length - 2; // exclude Date and Review Date
    for (let i = 0; i < taskCols; i++) {
        const td = document.createElement('td');
        td.contentEditable = true;
        row.appendChild(td);
    }

    const reviewCell = document.createElement('td');
    const dateObj = new Date(dateVal);
    dateObj.setDate(dateObj.getDate() + reviewCycleDays);
    reviewCell.textContent = dateObj.toISOString().split('T')[0];
    row.appendChild(reviewCell);

    tableBody.appendChild(row);
});

