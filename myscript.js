document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('myTable');
  const colorButton = document.getElementById('colorButton');
  const sortButton = document.getElementById('sortButton');
  const initialColor = '#ae485e';
  const newColor = '#336178';
  let isInitial = true;

  colorButton.addEventListener('click', () => {
    if (isInitial) {
      table.querySelectorAll('th, td').forEach(element => {
        element.style.backgroundColor = newColor;
      });
      table.style.backgroundColor = newColor;
      colorButton.style.backgroundColor = newColor;
      sortButton.style.backgroundColor = newColor;
      isInitial = false;
    } else {
      table.querySelectorAll('th, td').forEach(element => {
        element.style.backgroundColor = initialColor;
      });
      table.style.backgroundColor = initialColor;
      colorButton.style.backgroundColor = initialColor;
      sortButton.style.backgroundColor = initialColor;
      isInitial = true;
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('myTable');
  const rows = table.rows;
  const sortButton = document.getElementById('sortButton');
  let ascending = true;

  sortButton.addEventListener('click', () => {
    const arr = Array.from(rows);
    arr.shift(); // remove header row
    arr.sort((a, b) => {
      const aVal = a.cells[0].textContent.trim();
      const bVal = b.cells[0].textContent.trim();
      return (aVal.localeCompare(bVal));
    });
    if (!ascending) arr.reverse();
    for (let row of arr) {
      table.appendChild(row);
    }
    ascending = !ascending;
  });
});

