function modifyStack(action) {
    var input = document.getElementById('value').value.trim();
    var stackTable = document.getElementById('stackElements');
    var maxRows = 5; 

    if (action === 'push') {
        if (input !== '') {
            if (stackTable.rows.length < maxRows) {
                var row = document.createElement('tr');
                var cell = document.createElement('td');
                cell.textContent = input;
                row.appendChild(cell);
                stackTable.appendChild(row);
                document.getElementById('value').value = ''; 
            } else {
                alert('The stack is full!');
            }
        } else {
            alert('Please enter a value');
        }
    } else if (action === 'pop') {
        if (stackTable.rows.length > 0) {
            stackTable.deleteRow(stackTable.rows.length - 1);
        } else {
            alert('Stack is empty!');
        }
    }
}
