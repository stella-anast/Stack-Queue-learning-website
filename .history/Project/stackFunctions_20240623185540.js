function modifyStack(action) {
    var input = document.getElementById('value').value.trim();
    var top=0;
    var stack = document.getElementById('stackElements');
    var maxRows = 5; 

    if (action === 'push') {
        if (input !=='') {
            if (stack.rows.length < maxRows) {
                var row =stack.insertRow(0);
                var cell = row.insertCell(0);
                cell.textContent = input;
                top=stack.rows.length;
                document.getElementById('value').value = ''; 
            } else {
                alert('Η στοίβα είναι γεμάτη!');
            }
        } else {
            alert('Λάθος.Παρακαλώ προσπαθήστε ξανά!');
        }
    } else if (action === 'pop') {
        if (stack.rows.length > 0) {
            stack.deleteRow(0);
            top = stack.rows.length;
        } else {
            alert('Η στοίβα είναι άδεια.Παρακαλώ προσθέστε στοιχεία πρώτα!');
        }
    }
    var top = stack.rows.length;
    document.getElementById('topValue').textContent = 'Top: ' + top;
}
