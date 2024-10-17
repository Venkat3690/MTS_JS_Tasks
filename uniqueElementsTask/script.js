function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  document.getElementById('arrayForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const elements = document.getElementById('elements').value;
    const array = elements.split(',').map(item => item.trim());
    const uniqueElements = removeDuplicates(array);
    const output = document.getElementById('output');
    output.innerHTML = `<p>Unique elements: ${uniqueElements.join(', ')}</p>`;
  });
  