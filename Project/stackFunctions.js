function modifyStack(action) {
    var input = document.getElementById('value').value.trim();
    var stack = document.getElementById('stackElements');
    var maxRows = 5; 

    if (action === 'push') {
        if (input !=='') {
            if (stack.rows.length < maxRows) {
                var row =stack.insertRow(0);
                var cell = row.insertCell(0);
                cell.textContent = input;
                document.getElementById('value').value = ''; 
            } else {
                alert('The stack is full!');
            }
        } else {
            alert('Please enter a value');
        }
    } else if (action === 'pop') {
        if (stack.rows.length > 0) {
            stack.deleteRow(0);
        } else {
            alert('Stack is empty!');
        }
    }
}
