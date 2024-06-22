function modifyQueue(action){
    var value=document.getElementById('value').value.trim();
    var queue=document.getElementById('queueElements');
    var maxRows=5;
    if(action==='enqueue'){
        if(value!==''){
             if(queue.cells.length<maxRows){
                var row=document.createElement('td');
                row.textContent=value;
                queue.appendChild(row); //add new row
                document.getElementById('value').value=''; //clear input value field
             }else{
                alert('Η ουρά είναι γεμάτη!');
             }
        }else{
            alert('Λάθος.Παρακαλώ προσπαθήστε ξανά!');
        }
    
    }else if(action==='denqueue'){
      if (queue.cells.length > 0) {
        queue.deleteCell(0);
       }else{
           alert('Η ουρά είναι άδεια!');
       }

    }
}