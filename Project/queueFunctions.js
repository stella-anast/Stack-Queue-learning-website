function modifyQueue(action){
    var value=document.getElementById('value').value.trim();
    var elem=parseInt(value);
    var queue=document.getElementById('queueElements');
    var maxRows=5;
    if(action==='enqueue'){
        if(value!=='' && Number.isInteger(elem)){
             if(queue.cells.length<maxRows){
                var row=document.createElement('td');
                row.textContent=value;
                queue.appendChild(row); //add new row
                document.getElementById('value').value=''; //clear input value field
             }else{
                alert('Queue is full!');
             }
        }else{
            alert('Wrong.Please try again!');
        }
    
    }else if(action==='denqueue'){
      if (queue.cells.length > 0) {
        queue.deleteCell(0);
       }else{
           alert('Queue is empty!');
       }

    }
}